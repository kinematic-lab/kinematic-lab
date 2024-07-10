<template>
	<div class="p-index">
		<div
			id="cursor"
			:style="{
				'--x': mouseActual.value[0],
				'--y': mouseActual.value[1],
			}"
		/>
	</div>
</template>

<script setup>
const mouseActual = useLabVector(0.5, 0.5);
const mouseTarget = useLabMouse([0.5, 0.5], true);
onLabUpdate((d) => mouseActual.interpolate(mouseTarget.value, 0.005 * d));
</script>

<style lang="postcss">
#cursor {
	transform: translate(calc(var(--x) * 100dvw), calc(var(--y) * 100dvh));

	& {
		position: fixed;
		translate: -50% -50%;
		top: 0;
		left: 0;
		width: 64px;
		height: 64px;
		background: #111;
		border-radius: 32px;
		will-change: transform;
	}
}
</style>
