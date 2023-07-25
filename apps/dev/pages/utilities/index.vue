<template>
	<div class="p-utilities">
		<h1>@kinematic-lab/utilities</h1>

		<div id="lab-clock">
			<h2>Lab.Clock</h2>
			<pre v-text="`Delta: ${delta}`"></pre>
		</div>

		<div id="lab-cubic-bezier">
			<h2>Lab.CubicBezier</h2>
			<div :style="`--percentage: ${bezier(percentage)}`"></div>
		</div>

		<div id="lab-vector">
			<h2>Lab.Vector</h2>
			<pre v-text="`original: \t${vector}`"></pre>
			<!-- <pre v-text="`vector.xy: \t(${vector.xy})`"></pre>
			<pre v-text="`vector.zy: \t(${vector.zy})`"></pre>
			<pre v-text="`vector.rgb: \t(${vector.rgb})`"></pre>
			<pre v-text="`vector.abg: \t(${vector.abg})`"></pre> -->
		</div>
	</div>
</template>

<script setup>
import * as Lab from '@kinematic-lab/utilities';

const clock = Lab.Clock();
const bezier = Lab.CubicBezier(0.7, 0, 0.3, 1);
const vector = Lab.Vector(1, 2, 3, 4);

const delta = ref(0);
const percentage = ref(0);

function update() {
	window.requestAnimationFrame(update);
	const elapsed = Math.round(clock.getElapsedTime());

	delta.value = clock.getDelta();
	percentage.value = elapsed * 10 ** -3;
	percentage.value = Math.abs((percentage.value % 2) - 1);
}

onMounted(() => update());
</script>

<style lang="postcss">
.p-utilities > div:not(:first-child) {
	margin-top: 48px;
}

.p-utilities #lab-cubic-bezier > div {
	width: 48px;
	height: 48px;
	border-radius: 4px;
	background-color: #000;
	transform: translate3d(calc(var(--percentage) * 256px), 0, 0)
		rotate(calc(var(--percentage) * 90deg));
}
</style>
