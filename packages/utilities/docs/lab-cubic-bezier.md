<br />

# `Lab.CubicBezier` <!-- omit in toc -->

Cubic bezier curves for describing movement over time.<br />
Note that the documentation for this module is not complete and may lack some information.

<br />

## Table of contents <!-- omit in toc -->

-   [Example](#example)
-   [Usage](#usage)
    -   [Options](#options)
        -   [**Precision (`options.precision`)**](#precision-optionsprecision)
        -   [**Max Iterations (`options.maxIterations`)**](#max-iterations-optionsmaxiterations)
        -   [**Max Error Margin (`options.precision`)**](#max-error-margin-optionsprecision)

<br />

## Example

**Basic usage:**

```javascript
import * as Lab from '@kinematic-lab/utilities';

const bezier = Lab.CubicBezier(0.8, 0.2, 0.2, 0.8);
bezier(0.2); // equals ~0.071
```

<br />

**With options:**

```typescript
import * as Lab from '@kinematic-lab/utilities';

const bezier = Lab.CubicBezier(0.8, 0.2, 0.2, 0.8, {
	precision: 256,
	maxIterations: 32,
	maxErrorMargin: 1 / 10 ** 8,
});

bezier(0.2); // equals ~0.071
```

<br />

## Usage

<br />

### Options

<br />

#### **Precision (`options.precision`)**

**Type:** number.<br />
**Default:** $256$.<br />
**Range:** $[0,\infty]$.

<br />

#### **Max Iterations (`options.maxIterations`)**

**Type:** number.<br />
**Default:** $32$.<br />
**Range:** $[0,\infty]$.

<br />

#### **Max Error Margin (`options.precision`)**

**Type:** number.<br />
**Default:** $1 / 10^8$.<br />
**Range:** $[0,1]$.

<br />
