import Vector from './vector';
import type { LabVector } from './types';

export function parseVector(value: LabVector | number[] | number): LabVector {
	typeof value === 'number' && (value = Vector(value));
	Array.isArray(value) && (value = Vector(...value));
	return value;
}

export function parseArray(value: LabVector | number[] | number): number[] {
	typeof value === 'number' && (value = [value]);
	value.value && (value = value.value);

	return Array.isArray(source) ? source : source.value;
}
