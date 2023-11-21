## `useLabVector` <!-- omit in toc -->

Nth-dimensional vector implementation.<br />
Note that the documentation for this module is not complete and may lack some information.<br />
See full documentation from `core`: [here](https://github.com/kinematic-lab/kinematic-lab/tree/main/packages/core/docs/lab-vector.md).

<br />

### Table of contents <!-- omit in toc -->

-   [Examples](#examples)

<br />

### Examples

```vue
<script setup>
const v0 = useLabVector(2, 3, 4);
const v1 = useLabVector(1, 2, 3, 4);

/**
 * Vector values can be accessed via the `.value` property
 * which contains all values as a number array.
 */
v0.value; // [2, 3, 4]
v1.value; // [1, 2, 3, 4]

/**
 * All of the following actions mutates the vector itself,
 * and returns itself. All arguments of type `number[]` also
 * accepts type `Lab.Vector`.
 */
v0.add([1, 1, 1]); // Lab.Vector(3.0, 4.0, 5.0)
v0.subtract([1, 1, 1]); // Lab.Vector(1.0, 2.0, 3.0)
v0.multiply([2, 2, 2]); // Lab.Vector(4.0, 6.0, 8.0)
v0.divide([2, 2, 2]); // Lab.Vector(1.0, 1.5, 2.0)
v0.interpolate([1, 4, 3], 0.1); // Lab.Vector(1.9, 3.1, 3.9)

/**
 * Additionally there is two utility functions, that doens't
 * mutate the vector, but returns some new value.
 */
v0.getDistance(); // 5.39
v0.clone(); // Lab.Vector(2, 3, 4)
</script>
```
