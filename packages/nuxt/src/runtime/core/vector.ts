import { reactive } from 'vue';
import { Vector } from '@kinematic-lab/core';

export function useLabVector(...args: number[]) {
	return reactive(Vector(...args));
}
