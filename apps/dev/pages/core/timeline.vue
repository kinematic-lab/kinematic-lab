<template>
	<div class="p-core">
		<h1>Timeline (@kinematic-lab/core)</h1>

		<div id="lab-clock">
			<h2>Lab.Timeline</h2>

			<div>
				<pre v-if="position" v-text="`value: \t\t${position}`"></pre>
			</div>

			<div
				v-if="position"
				id="lab-clock-example"
				:style="{ '--x': position[0], '--y': position[1] }"
			></div>
		</div>
	</div>
</template>

<script setup>
import * as Lab from '@kinematic-lab/core';

const clock = Lab.Clock();
const easing = Lab.CubicBezier(0.8, 0, 0.2, 1);
const timeline = Lab.Timeline(
	[
		{ value: [0, 0, 0] },
		{ value: [1, 1, 0], easing, weight: 1 },
		{ value: [0, 1, 0], easing, weight: 1 },
		{ value: [1, 0, 0], easing, weight: 1 },
	],
	true
);

const position = ref();

function update() {
	window.requestAnimationFrame(update);
	let elapsed = clock.getElapsedTime();
	position.value = timeline((elapsed / 5000) % 1);
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

.p-core #lab-clock-example {
	position: fixed;
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background-color: #222;

	top: 50%;
	left: 50%;

	transform: translate3d(
			calc(-50% + (var(--x) * 2 - 1) * 20vw),
			calc(-50% + (var(--y) * 2 - 1) * 20vh),
			0
		)
		rotate(calc(var(--x) * 90deg));
}
</style>
