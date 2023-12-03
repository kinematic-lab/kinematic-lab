import type { LabVector } from '@kinematic-lab/core';
import { Vector, Clock, Spring } from '@kinematic-lab/core';

/* Types / interfaces */
interface LabAnimatedSpring {
	value: number;
	velocity: number;
	targetValue: number;
	dampingRatio: number;
	oscillationsPerSecond: number;
	timeScalar: number;
	trivialVelocityThreshold: number;
	targetFrameRate: number | undefined;
	isRunning: boolean;

	// hooks
	onStart?: () => void;
	onStop?: () => void;
	onUpdate?: (
		output: LabVector,
		input: LabVector,
		delta: number
	) => LabVector | undefined;

	// methods
	readonly start: () => void;
	readonly stop: () => void;
	readonly update: () => void;
}

type LabAnimatedSpringOptions = {
	value: number;
	velocity: number;
	targetValue: number;
	dampingRatio: number;
	oscillationsPerSecond: number;
	timeScalar: number;
	trivialVelocityThreshold: number;
	targetFrameRate: number;
	isRunning: boolean;

	// hooks
	onStart: () => void;
	onStop: () => void;
	onUpdate: (
		output: LabVector,
		input: LabVector,
		delta: number
	) => LabVector | undefined;
};

interface LabAnimatedSpringSet
	extends Set<LabAnimatedSpring | LabAnimatedSpringSet> {
	isRunning: boolean;
	readonly start: () => void;
	readonly stop: () => void;
	readonly update: () => void;
}

export type { LabAnimatedSpring, LabAnimatedSpringSet };

/* Functionality */
class AnimatedSpring implements LabAnimatedSpring {
	constructor(options: Partial<LabAnimatedSpringOptions>) {
		const clock = Clock();
		this.timeout = -1;
		this.animationFrameRequest = -1;
		this._targetValue = options?.targetValue;
		this._targetFrameRate = options?.targetFrameRate;
		this._isRunning = options?.isRunning;

		// Props
		this.value = options?.value ?? 0;
		this.velocity = options?.velocity ?? 0;
		this.dampingRatio = options?.dampingRatio ?? 0.5;
		this.oscillationsPerSecond = options?.oscillationsPerSecond ?? 1;
		this.timeScalar = options?.timeScalar ?? 1;
		this.trivialVelocityThreshold = options?.trivialVelocityThreshold ?? 0;

		// Hooks
		this.onStart = options?.onStart;
		this.onStop = options?.onStop;
		this.onUpdate = options?.onUpdate;

		// Methods
		this.start = () => {
			if (!this.isRunning) {
				clock.reset();
				this.isRunning = true;

				if (options?.onStart) {
					options.onStart();
				}
			}

			this.update();
		};

		this.stop = () => {
			if (this.isRunning) {
				clock.reset();
				this.isRunning = false;

				if (options?.onStop) {
					options.onStop();
				}
			}

			if (typeof window !== 'undefined') {
				clearTimeout(this.timeout);
				cancelAnimationFrame(this.animationFrameRequest);
			}
		};

		this.update = () => {
			const delta = clock.getDelta();

			if (
				Math.abs(this.velocity) <= this.trivialVelocityThreshold &&
				Math.abs(this.value - this.targetValue) <=
					this.trivialVelocityThreshold
			) {
				this.value = this.targetValue;
				this.velocity = 0;
			}

			if (this.value !== this.targetValue || this.velocity !== 0) {
				const output = Spring(
					this.value,
					this.velocity,
					this.targetValue,
					this.dampingRatio,
					this.oscillationsPerSecond,
					delta * this.timeScalar
				);
				[this.value, this.velocity] = output.value;
			}

			if (options?.onUpdate) {
				const output =
					options.onUpdate(
						Vector(this.value, this.velocity),
						Vector(this.value, this.velocity),
						delta
					) ?? Vector(this.value, this.velocity);

				[this.value, this.velocity] = output.value;
			}

			if (typeof window !== 'undefined') {
				clearTimeout(this.timeout);
				typeof window !== 'undefined' &&
					cancelAnimationFrame(this.animationFrameRequest);

				if (!this.isRunning || this.targetFrameRate === 0) return;

				/* eslint-disable */
				typeof this.targetFrameRate === 'number'
					? (this.timeout = setTimeout(
							this.update,
							1000 / this.targetFrameRate
					  ))
					: typeof window !== 'undefined'
					? (this.animationFrameRequest = requestAnimationFrame(
							this.update
					  ))
					: (this.timeout = setTimeout(this.update, 1000 / 60));
				/* eslint-enable */
			}
		};
	}

	private timeout: NodeJS.Timeout | number;
	private animationFrameRequest: number;
	private _targetValue?: number;
	private _targetFrameRate?: number;
	private _isRunning?: boolean;

	value: number;
	velocity: number;
	get targetValue(): number {
		return this._targetValue ?? this.value;
	}
	set targetValue(value: number | undefined) {
		this._targetValue = value;
	}
	dampingRatio: number;
	oscillationsPerSecond: number;
	timeScalar: number;
	trivialVelocityThreshold: number;
	get targetFrameRate(): number | undefined {
		return this._targetFrameRate;
	}
	set targetFrameRate(value: number | undefined) {
		this._targetFrameRate = value;

		// Clear the previous timeout or animation frame request
		clearTimeout(this.timeout);
		typeof window !== 'undefined' &&
			cancelAnimationFrame(this.animationFrameRequest);

		// Set the new timeout or animation frame request (if needed)
		if (this.isRunning) {
			if (typeof value === 'number') {
				this.timeout = setTimeout(this.update, 1000 / value);
			} else if (typeof window !== 'undefined') {
				this.animationFrameRequest = requestAnimationFrame(this.update);
			} else {
				this.timeout = setTimeout(this.update, 1000 / 60);
			}
		}
	}
	get isRunning(): boolean {
		return this._isRunning ?? false;
	}
	set isRunning(value: boolean) {
		this._isRunning = value;

		if (value) {
			this.start();
		} else {
			this.stop();
		}
	}

	onStart?: () => void;
	onStop?: () => void;
	onUpdate?: (
		output: LabVector,
		input: LabVector,
		delta: number
	) => LabVector | undefined;

	// Readonly
	readonly start: () => void;
	readonly stop: () => void;
	readonly update: () => void;
}

/**
 * @description A set of Spring instances that can be started, stopped and updated together
 * @param iterable an array of Spring or SpringSet instances
 * @returns a SpringSet instance
 */
class AnimatedSpringSet extends Set {
	constructor(iterable?: LabAnimatedSpringSet[] | LabAnimatedSpring[]) {
		super(iterable);
	}

	get isRunning() {
		return [...this].some((child) => child.isRunning);
	}
	set isRunning(value) {
		this.forEach((child) => (child.isRunning = value));
	}

	start() {
		this.forEach((child) => child.start());
	}
	stop() {
		this.forEach((child) => child.stop());
	}
	update() {
		this.forEach((child) => child.update());
	}
}

export function useLabAnimatedSpring(
	options: Partial<LabAnimatedSpringOptions>
) {
	return new AnimatedSpring(options);
}
export function useLabAnimatedSpringSet(
	iterable?: LabAnimatedSpringSet[] | LabAnimatedSpring[]
) {
	return new AnimatedSpringSet(iterable);
}
