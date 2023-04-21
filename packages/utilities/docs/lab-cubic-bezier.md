# `Lab.CubicBezier` <!-- omit in toc -->

Cubic bezier curves for describing movement over time.<br />
Note that the documentation for this module is not complete and may lack some information.

<br />

## Table of contents <!-- omit in toc -->

-   [Usage](#usage)
-   [Example](#example)

<br />

## Usage

**Definition:** <br />
$f(x0, y0, x1, y0)$

**Returns:** <br />
$f(x[0,1])$

<br />

## Example

```javascript
import * as Lab from '@kinematic-lab/core';

const f = Lab.CubicBezier(0.8, 0.2, 0.2, 0.8);
f(0.2); // equals ~0.071
```
