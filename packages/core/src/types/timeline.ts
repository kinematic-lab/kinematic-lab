import type { LabShapingFunction } from '.';
import type { LabVector } from './vector';

export interface LabTimelineStep {
	value: number | number[] | LabVector;
	weight: number;
	easing?: LabShapingFunction;
}
