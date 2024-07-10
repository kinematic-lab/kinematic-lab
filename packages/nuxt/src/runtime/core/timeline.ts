import { useLabVector } from './vector';
import { Timeline } from '@kinematic-lab/core';
import type { LabTimelineStep } from '@kinematic-lab/core';

export function useLabTimeline(steps: LabTimelineStep[]) {
	const timeline = Timeline(steps, true);
	const value = useLabVector(...(timeline(0) as number[]));

	const update = (x: number) => {
		const result = timeline(x) as number[];
		result.forEach((v, n) => (value!.value[n] = v));
	};

	return {
		value,
		update,
	};
}
