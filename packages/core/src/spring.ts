import type { LabVector } from './types';
import { Vector } from './';

/**
 * @param value current value of the number to spring
 * @param velocity current velocity of the number to spring (ie. the current rate of change of the number)
 * @param targetValue the value to spring towards
 * @param dampingRatio the damping ratio of the spring, 0 = no damping, 1 = critical damping, >1 = over-damping (a draggish experience)
 * @param oscillationsPerSecond the amount of full periods per second. The more oscillation per second the faster the spring will reach its target.
 * @param deltaMs the time step between each spring update
 * @returns a vector containing the new value and velocity of the spring
 */
function Spring(
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

export default Spring;
