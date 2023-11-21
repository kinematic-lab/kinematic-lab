## `useLabCubicBezier` <!-- omit in toc -->

Cubic bezier curves for describing movement over time.<br />
Note that the documentation for this module is not complete and may lack some information.<br />
See full documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-cubic-bezier.md).

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const bezier = useLabCubicBezier(0.8, 0.2, 0.2, 0.8);

bezier(0.2); // equals ~0.071
</script>
```
