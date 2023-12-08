<br />

# `Lab.Spring` <!-- omit in toc -->

Spring implementation inspired by approach to numeric springing by [Allen Chou](http://allenchou.net/2015/04/game-math-precise-control-over-numeric-springing/).<br />
Note that the documentation for this module is not complete and may lack some information.

<br />

## Table of contents <!-- omit in toc -->

-   [Function](#function)
-   [Example](#example)

<br />

## Function

```javascript
/**
 * @param value current value of the number to spring
 * @param velocity current velocity of the number to spring (ie. the current rate of change of the number)
 * @param targetValue the value to spring towards
 * @param dampingRatio the damping ratio of the spring, 0 = no damping, 1 = critical damping, >1 = over-damping (a draggish experience)
 * @param oscillationsPerSecond the amount of full periods per second. The more oscillation per second the faster the spring will reach its target.
 * @param deltaMs the time step between each spring update
 * @returns a vector containing the new value and velocity of the spring
 */
[value, velocity] = Spring(
	value,
	velocity,
	targetValue,
	dampingRatio,
	oscillationsPerSecond,
	deltaMs
);
```

## Example

**Basic usage:**

```javascript
import * as Lab from '@kinematic-lab/core';

/**
 * Springs are pure input/output functions, basically
 * returning the updated values for the first two
 * parameters: value and velocity.
 *
 * Value (x below) is typically the value you want to
 * use and is the value being sprung. Velocity is (xspd)
 * is aiding the function to keep track of the current
 * movement within the springing.
 */
const x = 0;
const xspd = 0;

/**
 * The spring needs to spring towards a target value as
 * well (targetX). If the value and target value are the
 * same, and velocity is 0, nothing happens.
 */
const targetX = 10;

/**
 * Springing is something that happens over time, so we
 * typically want things to happen within some sort of
 * timed loop. For simplicity, here we just use an
 * interval.
 */
setInterval(() => {
	[x, xpsd] = Lab.Spring(x, xspd, targetX, 0.5, 1, 50).value;
	console.log('Current value:', x);
}, 50);
```
