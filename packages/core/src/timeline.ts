import { parseVector } from './utils';
import type { LabShapingFunction, LabVector } from './types';

export interface TimelineStep {
	value: number | number[] | LabVector;
	weight: number;
	easing?: LabShapingFunction;
}

function Timeline(
	from: LabVector | number[] | number,
	steps: TimelineStep[]
): (x: number) => LabVector {
	const weightSum = steps.reduce((acc, { weight }) => acc + weight, 0);
	const stepsFormatted = steps.map((step) => ({
		value: parseVector(step.value),
		easing: step.easing ?? ((x) => x),
		weight: step.weight,
		to: 0,
	}));

	stepsFormatted.reduce((acc, step, n) => {
		return (stepsFormatted[n].to = acc + step.weight / weightSum);
	}, 0);

	return (x: number) => {
		if (x < 0) return parseVector(from);
		if (x >= 1) return stepsFormatted[stepsFormatted.length - 1].value;

		let start;
		let end;

		for (let n = 0; n < stepsFormatted.length; n++) {
			if (stepsFormatted[n].to <= x && stepsFormatted[n + 1]?.to > x) {
				start = stepsFormatted[n];
				end = stepsFormatted[n + 1];
				break;
			}
		}

		start ??= { value: parseVector(from), to: 0 };
		end ??= stepsFormatted[0];

		const result = end.value.clone();
		result.subtract(start.value);
		result.multiply(end.easing((x - start.to) / (end.to - start.to)));
		result.add(start.value);
		return result;
	};
}

export default Timeline;
