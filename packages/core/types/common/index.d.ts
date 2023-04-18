/// <reference path="lab-property-group.d.ts" />
/// <reference path="lab-property.d.ts" />
/// <reference path="lab-cubic-bezier.d.ts" />
/// <reference path="lab-clock.d.ts" />

type LabShapingFunction = (x: number) => number;
type LabRecursiveArray<T> = Array<LabRecursiveArray | T>;
