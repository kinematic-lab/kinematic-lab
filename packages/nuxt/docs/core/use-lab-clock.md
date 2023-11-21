## `useLabClock` <!-- omit in toc -->

Module for getting precise timestamps, using the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) for precision down to 5 μs.<br />
See full documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-clock.md).
<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const clock = useLabClock();

clock.getDelta(); // Time since `getDelta` was last called.
clock.getElapsedTime(); // Time since `clock` got instantiated.
clock.getActualTime(); // Time since application start
</script>
```
