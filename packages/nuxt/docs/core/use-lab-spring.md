## `useLabVector` <!-- omit in toc -->

Spring implementation inspired by approach to numeric springing by [Allen Chou](http://allenchou.net/2015/04/game-math-precise-control-over-numeric-springing/).<br />
Note that the documentation for this module is not complete and may lack some information.<br />
See full documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-spring.md).

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const mouse = useLabMouse([0, 0]);
const clock = useLabClock();

const x = ref(0);
const xpsd = ref(0);

function springLoop() {
	// Springing the value "x" towards the mouse position
	const output = useLabSpring(x.value, xspd.value, mouse.value.[0], 0.5, 1, clock.getDelta());
	x.value = output.value[0];
	xspd.value = output.value[1];

	requestAnimationFrame(springLoop);
}
springLoop();
</script>
```
