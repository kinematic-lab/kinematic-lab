## `onLabUpdate` <!-- omit in toc -->

Composable for creating update loops.<br />
Used `Clock` from `@kinematic-lab/core` for `delta` and `elapsed` values with a precision down to 5μs.

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const controls = onLabUpdate((delta, elapsed) => {
	delta; // Time since last loop iteration.
	elapsed; // Time since `onLabUpdate` were originally called.
});

controls.stop(); // Stops the loop.
controls.start(); // Starts the loop.
controls.isRunning.value; // Set to a boolean value, to control whether the loop should run or not.
</script>
```
