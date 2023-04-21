---
'@kinematic-lab/utilities': patch
---

**Initial release 🎉**

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
