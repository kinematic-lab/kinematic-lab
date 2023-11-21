import { onMounted, onUnmounted, watch, ref } from 'vue';
import * as Lab from '@kinematic-lab/core';

type LabUpdateCallback = (delta: number, elapsed: number) => void;

interface LabUpdateControls {
	isRunning: Ref<boolean>;
	stop: () => void;
	start: () => void;
}

export function onLabUpdate(callback: LabUpdateCallback): LabUpdateControls {
	const clock = Lab.Clock();
	const isRunning = ref(false);

	const onUpdate = () => {
		callback(clock.getDelta(), clock.getElapsedTime());
		isRunning.value && window.requestAnimationFrame(onUpdate);
	};

	watch(isRunning, (v) => v && (clock.getDelta(), onUpdate()));
	const stop = () => (isRunning.value = false);
	const start = () => (isRunning.value = true);

	onMounted(start);
	onUnmounted(stop);

	return {
		isRunning,
		start,
		stop,
	};
}
