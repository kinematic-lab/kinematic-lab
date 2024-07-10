import Vector from '../vector';
import type { LabVector } from '../types';

export function parseVector(value: LabVector | number[] | number): LabVector {
	if (typeof value === 'number') return Vector(value);
	if (Array.isArray(value)) return Vector(...value);
	return value;
}

export function parseArray(value: LabVector | number[] | number): number[] {
	if (typeof value === 'number') return [value];
	if ({}.hasOwnProperty?.call(value, 'value'))
		return (value as LabVector).value;
	return value as number[];
}
