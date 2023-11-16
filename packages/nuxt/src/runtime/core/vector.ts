import { reactive } from 'vue';
import { Vector } from '@kinematic-lab/core';

export function useVector(...args: number[]) {
	return reactive(Vector(...args));
}
