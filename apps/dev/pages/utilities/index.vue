<template>
	<div class="p-utilities">
		<h1>@kinematic-lab/utilities</h1>

		<div id="lab-clock">
			<h2>Lab.Clock</h2>
			<div>
				<pre v-text="`Delta: \t\t${delta}ms`"></pre>
				<pre v-text="`Elapsed: \t${elapsed}ms`"></pre>
			</div>
		</div>

		<div id="lab-cubic-bezier">
			<h2>Lab.CubicBezier</h2>

			<div>
				<pre v-text="`Handles: \t(0.75, 0, 0.25, 0)`"></pre>
				<pre
					v-text="`Percentage: \t${bezier(percentage) * 100}%`"
				></pre>
			</div>

			<div class="boxed">
				<div :style="`--percentage: ${bezier(percentage)}`"></div>
			</div>
		</div>

		<div id="lab-vector">
			<h2>Lab.Vector</h2>
			<pre v-text="`original: \t${vector}`"></pre>
			<pre v-text="`vector.xy: \t${vector.xy}`"></pre>
			<pre v-text="`vector.zy: \t${vector.zy}`"></pre>
			<pre v-text="`vector.rgb: \t${vector.rgb}`"></pre>
			<pre v-text="`vector.abg: \t${vector.abg}`"></pre>
			<pre v-text="`vector[2]: \t${vector[2]}`"></pre>
			<pre v-text="`vector[3]: \t${vector[3]}`"></pre>
			<pre v-text="`vector.value: \t[${vector.value}]`"></pre>
		</div>
	</div>
</template>

<script setup>
import * as Lab from '@kinematic-lab/utilities';

const clock = Lab.Clock();
const bezier = Lab.CubicBezier(0.75, 0, 0.25, 1);
const vector = Lab.Vector(4, 2, 1, 0.5);

const delta = ref(0);
const elapsed = ref(0);
const percentage = ref(0);

function update() {
	window.requestAnimationFrame(update);
	delta.value = clock.getDelta();
	elapsed.value = clock.getElapsedTime();

	percentage.value = Math.round(elapsed.value) * 10 ** -3;
	percentage.value = Math.abs((percentage.value % 2) - 1);
}

onMounted(() => {
	update();
});
</script>

<style lang="postcss">
.p-utilities > div:not(:first-child) {
	margin-top: 48px;

	& > div:not(:first-child) {
		margin-top: 24px;
	}
}

.p-utilities pre {
	line-height: 1.5;
}

.p-utilities #lab-cubic-bezier > .boxed {
	margin-top: 24px;
	padding: 24px 32px;
	width: calc(320px + 48px);
	border-radius: 2px;
	background-color: #eee;

	& > div {
		width: 48px;
		height: 48px;

		--pm: max(min(calc(var(--percentage) * 1.2 - 0.1), 1), 0);
		border-radius: calc(4px + var(--pm) * 22px);

		background-color: #000;
		transform: translate3d(calc(var(--percentage) * 320px), 0, 0)
			rotate(calc(var(--percentage) * 90deg))
			scale(calc(var(--percentage) * 0.1 + 1));
	}
}
</style>
