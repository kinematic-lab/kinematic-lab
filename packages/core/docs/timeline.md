<br />

# `Lab.Timeline` <!-- omit in toc -->

Timeline implementation.

<br />

## Table of contents <!-- omit in toc -->

-   [Example](#example)

<br />

## Example

### Basic usage

```javascript
import * as Lab from '@kinematic-lab/core';

const timeline = Lab.Timeline([
	{ value: [0, 0] },
	{ value: [1, 0], weight: 1 },
	{ value: [1, 1], weight: 1 },
	{ value: [0, 1], weight: 1 },
]);

timeline(0.25); // Lab.Vector(1, 0)
```

### Using beziers

```javascript
import * as Lab from '@kinematic-lab/core';

const easing = Lab.CubicBezier(0.7, 0, 0.3, 1);

const timeline = Lab.Timeline([
	{ value: [0, 0] },
	{ value: [1, 0], easing, weight: 1 },
	{ value: [1, 1], easing, weight: 1 },
	{ value: [0, 1], easing, weight: 1 },
]);

/** ... */
```
