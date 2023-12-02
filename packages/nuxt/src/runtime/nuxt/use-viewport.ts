import { onMounted, onUnmounted } from 'vue';
import { useLabVector } from '../core/vector';

export function useLabViewport() {
	const viewport = useLabVector(0, 0);

	const onResize = () => {
		viewport.value[0] = window.innerWidth;
		viewport.value[1] = window.innerHeight;
	};

	onMounted(() => (window.addEventListener('resize', onResize), onResize()));
	onUnmounted(() => window.removeEventListener('resize', onResize));

	return viewport;
}
