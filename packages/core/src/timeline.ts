import Vector from './vector';
import type { LabShapingFunction, LabVector } from './types';

export interface TimelineStep {
	value: number | number[] | LabVector;
	weight: number;
	easing?: LabShapingFunction;
}

interface TimelineStepInternal {
	value: LabVector;
	to: number;
	easing?: LabShapingFunction;
	weight?: number;
}

function parseVector(value: LabVector | number[] | number): LabVector {
	typeof value === 'number' && (value = Vector(value));
	Array.isArray(value) && (value = Vector(...value));
	return value;
}

function Timeline(
	from: LabVector | number[] | number,
	steps: TimelineStep[]
): (x: number) => LabVector {
	from = parseVector(from);

	const weight = steps.reduce((acc, { weight }) => acc + weight, 0);
	const values = steps.map((step) => ({
		easing: step.easing ?? ((x) => x),
		value: parseVector(step.value),
		weight: step.weight ?? 1,
		to: 0,
	})) as TimelineStepInternal[];

	values.reduce((acc, step, n) => {
		return (values[n].to = acc + step.weight! / weight);
	}, 0);

	return (x: number) => {
		if (x < 0) return from as LabVector;
		if (x >= 1) return values[values.length - 1].value as LabVector;

		let start: TimelineStepInternal;
		let end: TimelineStepInternal;

		for (let n = 0; n < values.length; n++) {
			if (values[n].to <= x && values[n + 1]?.to > x) {
				start = values[n];
				end = values[n + 1];
				break;
			}
		}

		start ??= { value: from as LabVector, to: 0 };
		end ??= values[0];

		return end.value
			.clone()
			.subtract(start.value)
			.multiply(end.easing!((x - start.to) / (end.to - start.to)))
			.add(start.value);
	};
}

export default Timeline;
