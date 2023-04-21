interface LabClock {
	isPerformanceSupported?: boolean;
	timeStart: number | null;
	timePrevious: number | null;

	reset: () => void;
	getDelta: () => number;
	getElapsedTime: () => number;
	getActualTime: () => number;
}
