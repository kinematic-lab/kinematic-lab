<template>
	<div class="c-app">
		<pre v-text="`Mouse Actual: \t\t${mouseTarget}`" />
		<pre v-text="`Mouse Interpolated: \t${mouseActual}`" />

		<div
			id="cursor"
			:style="{
				'--mx': mouseActual.value[0],
				'--my': mouseActual.value[1],
			}"
		/>
	</div>
</template>

<script setup>
const mouseActual = useVector(0, 0);
const mouseTarget = useMouse(true);
onUpdate((d) => mouseActual.interpolate(mouseTarget, d * 0.0075));
</script>

<style lang="postcss">
.c-app {
	padding: 64px;
}

.c-app pre {
	width: fit-content;
	padding: 8px 16px;
	background-color: #eee;
	border-radius: 4px;
}

#cursor {
	position: fixed;
	top: 0;
	left: 0;
	width: 128px;
	height: 128px;
	background-color: #000;
	border-radius: 50%;
	pointer-events: none;
	opacity: 0.05;

	transform: translate(
		calc(-50% + var(--mx) * 100dvw),
		calc(-50% + var(--my) * 100dvh)
	);
}
</style>
