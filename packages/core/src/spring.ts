import type { LabVector, LabSpring, LabSpringSet } from './types';
import { Vector, Clock } from './';

/**
 * @param value current value of the number to spring
 * @param velocity current velocity of the number to spring (ie. the current rate of change of the number)
 * @param targetValue the value to spring towards
 * @param dampingRatio the damping ratio of the spring, 0 = no damping, 1 = critical damping, >1 = over-damping (a draggish experience)
 * @param oscillationsPerSecond the amount of full periods per second. The more oscillation per second the faster the spring will reach its target.
 * @param deltaMs the time step between each spring update
 * @returns a vector containing the new value and velocity of the spring
 */
function spring(
	value: number,
	velocity: number,
	targetValue: number,
	dampingRatio: number,
	oscillationsPerSecond: number,
	deltaMs: number
): LabVector {
	/**
	 * @see http://allenchou.net/2015/04/game-math-precise-control-over-numeric-springing/
	 * "inverse" and "determinant" are concepts used in linear algebra, where:
	 * - "inverse" is the reciprocal of the determinant
	 * - "determinant" is a value that describes the relationship between two sets of vectors
	 *  (in this case, the relationship between the current state and the target state of the spring)
	 **/
	if (deltaMs === 0) return Vector(value, velocity);

	const angularFrequency = oscillationsPerSecond * 2 * Math.PI; // An angular frequency of 2pi means the oscillation completes one full period over one second
	const timeStep = deltaMs * 0.001; // formular-wise, we work with seconds - milliseconds just fits better as an input

	const f = 1.0 + 2.0 * timeStep * dampingRatio * angularFrequency;
	const inverse =
		1.0 /
		(f + timeStep * (timeStep * (angularFrequency * angularFrequency)));
	const determinantOfValue =
		f * value +
		timeStep * velocity +
		timeStep *
			(timeStep * (angularFrequency * angularFrequency)) *
			targetValue;
	const determinantOfVelocity =
		velocity +
		timeStep *
			(angularFrequency * angularFrequency) *
			(targetValue - value);

	value = determinantOfValue * inverse;
	velocity = determinantOfVelocity * inverse;

	return Vector(value, velocity);
}

class Spring {
	constructor(options?: Spring) {
		const clock = Clock();
		this._ = {
			timeout: -1,
			animationFrameRequest: -1,
			targetValue: options?.targetValue,
			targetFrameRate: options?.targetFrameRate,
			isRunning: options?.isRunning,
		};

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
				clearTimeout(this._.timeout);
				cancelAnimationFrame(this._.animationFrameRequest);
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
				let output = spring(
					this.value,
					this.velocity,
					this.targetValue,
					this.dampingRatio,
					this.oscillationsPerSecond,
					delta * this.timeScalar
				);

				if (options?.onUpdate) {
					output = options.onUpdate(
						output,
						Vector(this.value, this.velocity),
						delta
					);
				}

				[this.value, this.velocity] = output.value;
			} else if (options?.onUpdate) {
				const output = options.onUpdate(
					Vector(this.value, this.velocity),
					Vector(this.value, this.velocity),
					delta
				);

				[this.value, this.velocity] = output.value;
			}

			if (typeof window !== 'undefined') {
				clearTimeout(this._.timeout);
				cancelAnimationFrame(this._.animationFrameRequest);

				if (!this.isRunning) return;
				/* eslint-disable indent */
				typeof this.targetFrameRate === 'number'
					? (this._.timeout = setTimeout(
							this.update,
							1000 / this.targetFrameRate
					  ))
					: (this._.animationFrameRequest = requestAnimationFrame(
							this.update
					  ));
				/* eslint-enable indent */
			}
		};
	}

	readonly _: {
		timeout: NodeJS.Timeout | number;
		animationFrameRequest: number;

		targetValue?: number;
		targetFrameRate?: number;
		isRunning?: boolean;
	};

	value: number;
	velocity: number;
	get targetValue(): number {
		return this._.targetValue ?? this.value;
	}
	set targetValue(value: number | undefined) {
		this._.targetValue = value;
	}
	dampingRatio: number;
	oscillationsPerSecond: number;
	timeScalar: number;
	trivialVelocityThreshold: number;
	get targetFrameRate(): number | undefined {
		return this._.targetFrameRate;
	}
	set targetFrameRate(value: number | undefined) {
		this._.targetFrameRate = value;

		// Clear the previous timeout or animation frame request
		clearTimeout(this._.timeout);
		cancelAnimationFrame(this._.animationFrameRequest);

		// Set the new timeout or animation frame request (if needed)
		if (typeof value === 'number') {
			if (this.isRunning) {
				this._.timeout = setTimeout(this.update, 1000 / value);
			}
		} else {
			if (this.isRunning) {
				this._.animationFrameRequest = requestAnimationFrame(
					this.update
				);
			}
		}
	}
	get isRunning(): boolean {
		return this._.isRunning ?? false;
	}
	set isRunning(value: boolean) {
		this._.isRunning = value;

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
	) => LabVector;

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
class SpringSet extends Set {
	constructor(iterable?: LabSpringSet[] | LabSpring[]) {
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

export { spring, Spring, SpringSet };
export default spring;
