## `useLabMouse` <!-- omit in toc -->

Returns a reactive vector (See [`useLabVector`](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/nuxt/docs/core/use-lab-vector.md)), which contains the mouse position.<br />
Note that the documentation for this module is not complete and may lack some information.

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const mouse = useLabMouse([0.5, 0.5], true);

mouse.value; // [0.5, 0.5]
</script>
```
