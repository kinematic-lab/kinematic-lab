<template>
	<div class="c-app">
		<pre v-text="`Mouse Actual: \t\t${mouseTarget}`" />
		<pre v-text="`Mouse Interpolated: \t${mouseActual}`" />
		<pre v-text="`Mouse Spring X: \t${mouseSpringX.value}`" />
		<pre v-text="`Mouse Spring Y: \t${mouseSpringY.value}`" />
		<pre v-text="`Viewport: \t\t${viewport}`" />
		<pre v-text="`Eased: \t\t\t${bezier(0.75)}`" />
		<pre v-text="`Clock: \t\t\t${clock.getElapsedTime()}`" />

		<div
			id="cursor"
			:style="{
				'--mx': mouseActual.value[0],
				'--my': mouseActual.value[1],
			}"
		/>
		<div
			id="spring-cursor"
			:style="{
				'--mx': mouseSpringX.value,
				'--my': mouseSpringY.value,
			}"
		/>
	</div>
</template>

<script setup>
const clock = useLabClock();
const viewport = useLabViewport();
const bezier = useLabCubicBezier(0.8, 0, 0.2, 1);

const mouseActual = useLabVector(0, 0);
const mouseTarget = useLabMouse([0.75, 0.75], true);
const { start, stop } = onLabUpdate((delta) => {
	mouseActual.interpolate(mouseTarget, delta * 0.0075);
});

const mouseSpringX = useLabAnimatedSpring({
	value: mouseActual.value[0],
});
const mouseSpringY = useLabAnimatedSpring({
	value: mouseActual.value[1],
});
useLabAnimatedSpringSet([mouseSpringX, mouseSpringY]).start();

watch(mouseActual, () => {
	const [x, y] = mouseActual.value;
	mouseSpringX.targetValue = x;
	mouseSpringY.targetValue = y;
});

onMounted(() => {
	setTimeout(stop, 2000);
	setTimeout(start, 4000);
});
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

#cursor,
#spring-cursor {
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

#spring-cursor {
	width: 64px;
	height: 64px;
}
</style>
