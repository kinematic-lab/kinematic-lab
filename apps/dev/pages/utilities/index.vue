<template>
	<div class="p-utilities">
		<h1>@kinematic-lab/utilities</h1>

		<h2 id="lab-vector">Lab.Vector</h2>
		<pre v-text="vector.xy"></pre>
	</div>
</template>

<script setup>
import * as Lab from '@kinematic-lab/utilities';
const vector = Lab.Vector(1, 2, 3, 4);
</script>
