# `Lab.Clock` <!-- omit in toc -->

Module for getting precise timestamps, using the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) for precision down to 5 μs.

<br />

## Table of contents <!-- omit in toc -->

-   [Usage](#usage)
-   [Technical Reference](#technical-reference)
    -   [Lab.Clock.isPerformanceSupported](#labclockisperformancesupported)
    -   [Lab.Clock.timeStart](#labclocktimestart)
    -   [Lab.Clock.timePrevious](#labclocktimeprevious)
    -   [Lab.Clock.reset()](#labclockreset)
    -   [Lab.Clock.getDelta()](#labclockgetdelta)
    -   [Lab.Clock.getElapsedTime()](#labclockgetelapsedtime)
    -   [Lab.Clock.getActualTime()](#labclockgetactualtime)

<br />

## Usage

<br />

For general usage, see example below.

<br />

```javascript
import { Clock } from '@kinematic-lab/utilities';

const clock = Clock();

clock.getDelta(); // Time since last function call
clock.getElapsedTime(); // Time since instantiation
clock.getActualTime(); // Time since application start
```

<br />

## Technical Reference

<br />

### Lab.Clock.isPerformanceSupported

**Type:** Boolean.<br />
**Description:** Tracks if [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is supported.

<br />

### Lab.Clock.timeStart

**Type:** Number.<br />
**Description:** Timestamp from instantiation, or last `reset()` call.

<br />

### Lab.Clock.timePrevious

**Type:** Number.<br />
**Description:** Timestamp last `getDelta()` or `reset()` call.

<br />

### Lab.Clock.reset()

**Type:** Method.<br />
**Definition:** _() => void_<br />
**Description:** Resets `timeStart` and `timePrevious`.

<br />

### Lab.Clock.getDelta()

**Type:** Method.<br />
**Definition:** _() => number_<br />
**Description:** Returns time since last `getDelta()` call.

<br />

### Lab.Clock.getElapsedTime()

**Type:** Method.<br />
**Definition:** _() => number_<br />
**Description:** Returns time since instantiation or last `reset()` call.

<br />

### Lab.Clock.getActualTime()

**Type:** Method.<br />
**Definition:** _() => number_<br />
**Description:** Returns time since application start.
