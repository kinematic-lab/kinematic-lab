import { onMounted, onUnmounted } from 'vue';
import { useDimensions } from './use-dimensions';
import { useVector } from '../core/vector';

export function useMouse(normalise?: boolean) {
	const dimensions = useDimensions();
	const mouse = useVector(0, 0);

	const onMouseMove = (event: any) => {
		mouse.value[0] = event.clientX / (normalise ? dimensions.value[0] : 1);
		mouse.value[1] = event.clientY / (normalise ? dimensions.value[1] : 1);
	};

	onMounted(() => window.addEventListener('mousemove', onMouseMove));
	onUnmounted(() => window.removeEventListener('mousemove', onMouseMove));

	return mouse;
}
