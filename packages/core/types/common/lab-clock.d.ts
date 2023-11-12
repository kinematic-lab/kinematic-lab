interface LabClock {
	timeStart: number | null;
	timePrevious: number | null;

	readonly isPerformanceSupported: boolean;

	reset: () => void;
	getDelta: () => number;
	getElapsedTime: () => number;
	getActualTime: () => number;
}
