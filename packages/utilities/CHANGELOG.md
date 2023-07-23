# @kinematic-lab/utilities

## 0.0.5

### Patch Changes

-   353f6fa: chore: bumbed `typescript`
-   5182123: chore: bumbed `@types/node`
-   7388899: chore: bumbed `eslint`

## 0.0.4

### Patch Changes

-   3652299: Updated documentation with an `options` section, and cleaned-up the code a bit 🧹

## 0.0.3

### Patch Changes

-   067b02f: Corrected links in `README.md`.

## 0.0.2

### Patch Changes

-   54b4bdb: Made `isPerformanceSupported` in `Lab.Clock` read-only.

## 0.0.1

### Patch Changes

-   d94228f: **Initial release 🎉**

    Implemented the following modules (+ methods and fields) in the package:

    -   **Function: `LabCubicBezier`.**

        See documentation [here](https://github.com/kinematic-lab/core/blob/main/packages/utilities/docs/lab-cubic-bezier.md).<br />
        Returns `LabShapingFunction`, which is defined as _`f(x[0;1]) => y[0;1]`_.

        <br />

    -   **Function: `LabClock`.**

        See documentation [here](https://github.com/kinematic-lab/core/blob/main/packages/utilities/docs/lab-clock.md).<br />
        Returns `LabClock`, which contains:

        -   Field: `isPerformanceSupported`.
        -   Field: `timeStart`.
        -   Field: `timePrevious`.
        -   Field: `timeElapsed`.
        -   Method: `reset()`.
        -   Method: `getDelta()`.
        -   Method: `getElapsedTime()`.
        -   Method: `getActualTime()`.

        <br />
