<template>
	<div class="p-timeline">
		<div
			class="p-timeline__target"
			:style="{
				'--px': timeline.value.value[0],
				'--py': timeline.value.value[1],
				'--pr': timeline.value.value[2],
			}"
		/>
	</div>
</template>

<script setup>
const easing = useLabCubicBezier(0.6, 0, 0.4, 1);
const mouseTarget = useLabMouse([0.5, 0.5], true);
const mouseActual = useLabVector(0.5, 0.5);

const timeline = useLabTimeline([
	{ value: [1, 0, 0] },
	{ value: [0, 1, -1], easing, weight: 1 },
	{ value: [1, 1, 0], easing, weight: 1 },
	{ value: [0, 0, -1], easing, weight: 1 },
]);

onLabUpdate((d) => {
	mouseActual.interpolate(mouseTarget.value, 0.005 * d);
	timeline.update(mouseActual.value[0]);
});
</script>

<style lang="postcss">
.p-timeline__target {
	transform: translate3d(
			calc(-50% + (var(--px) * 2 - 1) * 10vw),
			calc(-50% + (var(--py) * 2 - 1) * 10vw),
			1px
		)
		rotate(calc(var(--pr) * 90deg));

	& {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 64px;
		height: 64px;
		background: #111;
		border-radius: 8px;
		will-change: transform;
	}
}
</style>
