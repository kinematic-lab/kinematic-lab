<br />

# `Lab.Vector` <!-- omit in toc -->

Nth-dimensional vector implementation.<br />
Note that the documentation for this module is not complete and may lack some information.

<br />

## Table of contents <!-- omit in toc -->

-   [Example](#example)

<br />

## Example

**Basic usage:**

```javascript
import * as Lab from '@kinematic-lab/core';

/**
 * New instance of the nth-dimensional vector.
 * The number of dimensions, is based on the number of
 * arguments.
 */
const vector = Lab.Vector(2, 3, 4);

/**
 * Vector values can be accessed via the `.value` property
 * which contains all values as a number array.
 */
vector.value; // [2, 3, 4]
vector.value[0]; // 2

/**
 * All of the following actions mutates the vector itself,
 * and returns itself. All arguments of type `number[]` also
 * accepts type `Lab.Vector`.
 */
vector.add([1, 1, 1]); // Lab.Vector(3.0, 4.0, 5.0)
vector.subtract([1, 1, 1]); // Lab.Vector(1.0, 2.0, 3.0)
vector.multiply([2, 2, 2]); // Lab.Vector(4.0, 6.0, 8.0)
vector.divide([2, 2, 2]); // Lab.Vector(1.0, 1.5, 2.0)
vector.interpolate([1, 4, 3], 0.1); // Lab.Vector(1.9, 3.1, 3.9)

/**
 * Additionally there is two utility functions, that doens't
 * mutate the vector, but returns some new value.
 */
vector.getDistance(); // 5.39
vector.clone(); // Lab.Vector(2, 3, 4)
```
