import type { LabVector } from './types';
import * as Lab from './';

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
	if (deltaMs === 0) return Lab.Vector(value, velocity);

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

	return Lab.Vector(value, velocity);
}

/**
 * @param options
 * @param options.value
 * @param options.velocity current velocity of the number to spring (ie. the current rate of change of the number)
 * @param options.targetValue the value to spring towards
 * @param options.dampingRatio the damping ratio of the spring, 0 = no damping, 1 = critical damping, >1 = over-damping (a draggish experience)
 * @param options.oscillationsPerSecond the amount of full periods per second. The more oscillation per second the faster the spring will reach its target.
 * @param options.timeScalar the time scalar of the spring, 1 = real time, 0.5 = half time, 2 = double time
 * @param options.trivialVelocityThreshold the threshold at which the spring is considered to be stopped
 * @param options.targetFrameRate the frame rate at which the spring should update, if undefined the spring will update every time the browser is ready to paint
 * @param options.isRunning whether the spring is running or not
 * Hooks:
 * @param options.onStart a hook that is called when the spring starts running
 * @param options.onStop a hook that is called when the spring stops running
 * @param options.onUpdate a hook that is called every time the spring updates and allows for altering the output
 * @returns a LabReactiveSpring instance
 */
class LabReactiveSpring {
	_: {
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
	start: () => void;
	stop: () => void;
	update: () => void;

	constructor(options?: {
		// props
		value?: number;
		velocity?: number;
		targetValue?: number;
		dampingRatio?: number;
		oscillationsPerSecond?: number;
		timeScalar?: number;
		trivialVelocityThreshold?: number;
		targetFrameRate?: number;
		isRunning?: boolean;
		// hooks
		onStart?: () => void;
		onStop?: () => void;
		onUpdate?: (
			output: LabVector,
			input: LabVector,
			delta: number
		) => LabVector;
	}) {
		const clock = Lab.Clock();
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
						Lab.Vector(this.value, this.velocity),
						delta
					);
				}

				[this.value, this.velocity] = output.value;
			} else if (options?.onUpdate) {
				const output = options.onUpdate(
					Lab.Vector(this.value, this.velocity),
					Lab.Vector(this.value, this.velocity),
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
}

/**
 * @description A set of LabReactiveSpring instances that can be started, stopped and updated together
 * @param iterable
 * @returns a LabReactiveSpringSet instance
 */
class LabReactiveSpringSet extends Set {
	constructor(iterable?: LabReactiveSpringSet[] | LabReactiveSpring[]) {
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

export { LabReactiveSpring, LabReactiveSpringSet };
export default spring;
