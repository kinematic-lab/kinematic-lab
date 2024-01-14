## `useAnimatedSpring` <!-- omit in toc -->

Spring implementation inspired by approach to numeric springing by [Allen Chou](http://allenchou.net/2015/04/game-math-precise-control-over-numeric-springing/).<br />
Note that the documentation for this module is not complete and may lack some information.<br />
See full documentation from `browser`: not yet available

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const mouse = useLabMouse([0, 0]);

// Make animated springs for both X and Y coordinate
const mouseSpringX = useLabAnimatedSpring({
	value: mouse.value[0],
});
const mouseSpringY = useLabAnimatedSpring({
	value: mouse.value[1],
});

// To make life easier we put them in a set and start them together
useLabAnimatedSpringSet([mouseSpringX, mouseSpringY]).start();
</script>
```
