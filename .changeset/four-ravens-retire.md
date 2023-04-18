---
'@kinematic-lab/core': patch
---

**Initial release 🎉**

Implemented the following modules (+ methods and fields) in the package:

-   **Function: `LabProperty`.**

    See documentation [here](#).

    <br />

-   **Function: `LabPropertyGroup`.**

    See documentation [here](#).

    <br />

-   **Function: `LabCubicBezier`.**

    See documentation [here](#).<br />
    Returns `LabShapingFunction`, which is defined as _`f(x[0;1]) => y[0;1]`_.

    <br />

-   **Function: `LabClock`.**

    See documentation [here](#).<br />
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

-   **Function: `LabVector`.**

    See documentation [here](#).
