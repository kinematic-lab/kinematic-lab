interface LabPropertyOptions {
	from: number[] | number;
	to: number[] | number;
	duration: number;

	shapingFunction?: LabShapingFunction;
	repear?: boolean;
}

interface LabProperty {
	from: number[] | number;
	to: number[] | number;
	options: PropertyOptions;
	clock: LabClock;

	getValue: (percentage?: number) => number;
}
