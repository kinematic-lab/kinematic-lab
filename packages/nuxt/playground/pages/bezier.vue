<template>
	<div class="p-bezier">
		<div
			id="target"
			:style="{ '--p': `${progress}` }"
		/>
	</div>
</template>

<script setup>
const progress = ref(0);
const bezier = useLabCubicBezier(0.7, 0, 0.3, 1);

onLabUpdate((_, e) => {
	const p = Math.abs(((e / 1000) % 2) - 1);
	progress.value = bezier(p);
});
</script>

<style lang="postcss">
#target {
	transform: translate(calc((var(--p) * 2 - 1) * 30dvw), 0);

	& {
		position: fixed;
		translate: -50% -50%;
		top: 50%;
		left: 50%;
		width: 64px;
		height: 64px;
		background: #111;
		border-radius: 32px;
		will-change: transform;
	}
}
</style>
