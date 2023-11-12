<template>
	<div class="p-core">
		<h1>@kinematic-lab/core</h1>

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
			<pre v-text="`original: \t\t${vector}`"></pre>
			<pre v-text="`vector.value: \t\t[${vector.value}]`"></pre>
			<pre v-text="`vector.value[2]: \t${vector.value[2]}`"></pre>
			<pre v-text="`vector.value[3]: \t${vector.value[3]}`"></pre>
			<pre
				v-text="
					`interpolated: \t\t${vector
						.clone()
						.interpolate(Lab.Vector(0, 0, 0, 0), 0.1)}`
				"
			></pre>
		</div>
	</div>
</template>

<script setup>
import * as Lab from '@kinematic-lab/core';

const clock = Lab.Clock();
const vector = Lab.Vector(1, 2, 3, 4);
const bezier = Lab.CubicBezier(0.75, 0, 0.25, 1);

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
.p-core > div:not(:first-child) {
	margin-top: 48px;

	& > div:not(:first-child) {
		margin-top: 24px;
	}
}

.p-core pre {
	line-height: 1.5;
}

.p-core #lab-cubic-bezier > .boxed {
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
