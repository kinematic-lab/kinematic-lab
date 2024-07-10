import * as ParserUtils from './utils/parsers';
import * as ArrayUtils from './utils/array';
import type { LabTimelineStep } from './types';

function Timeline(steps: LabTimelineStep[]): (x: number) => number[] {
	const from = ParserUtils.parseArray(steps[0].value);
	const entries = steps.slice(1).map((entry) => ({
		value: ParserUtils.parseArray(entry.value),
		weight: entry.weight ?? 1,
		easing: entry.easing,
		to: 0,
	}));

	const ws = entries.reduce((acc, { weight }) => acc + weight, 0);
	entries.reduce((a, { weight: w }, n) => (entries[n].to = a + w / ws), 0);

	return (x: number) => {
		if (x <= 0) return from;
		if (x >= 1) return entries[entries.length - 1].value;

		let start, end;
		for (let n = 0; n < entries.length; n++) {
			if (entries[n].to <= x && entries[n + 1]?.to > x) {
				start = entries[n];
				end = entries[n + 1];
				break;
			}
		}

		start ??= { value: from, to: 0 };
		end ??= entries[0];

		const percentage = (x - start.to) / (end.to - start.to);
		const easing = end.easing ?? ((x) => x);

		let result = ArrayUtils.subtract(end.value, start.value);
		result = ArrayUtils.scale(result, easing(percentage));
		result = ArrayUtils.add(result, start.value);
		return result;
	};
}

export default Timeline;
