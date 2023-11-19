import { onMounted, onUnmounted } from 'vue';
import { useVector } from '../core/vector';

export function useViewport() {
	const viewport = useVector(0, 0);

	const onResize = () => {
		viewport.value[0] = window.innerWidth;
		viewport.value[1] = window.innerHeight;
	};

	onMounted(() => (window.addEventListener('resize', onResize), onResize()));
	onUnmounted(() => window.removeEventListener('resize', onResize));

	return viewport;
}
