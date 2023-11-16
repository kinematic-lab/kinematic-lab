import { onMounted, onUnmounted } from 'vue';
import { useVector } from '../core/vector';

export function useDimensions() {
	const dimensions = useVector(0, 0);

	const onResize = () => {
		dimensions.value[0] = window.innerWidth;
		dimensions.value[1] = window.innerHeight;
	};

	onMounted(() => (window.addEventListener('resize', onResize), onResize()));
	onUnmounted(() => window.removeEventListener('resize', onResize));

	return dimensions;
}
