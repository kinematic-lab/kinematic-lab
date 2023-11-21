## `useLabViewport` <!-- omit in toc -->

Returns a reactive vector (See [`useLabVector`](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/core/use-lab-vector.md), which contains the window size.

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const viewport = useLabViewport();

viewport.value; // [1920, 1200]
</script>
```
