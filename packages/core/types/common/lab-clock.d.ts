interface LabClock {
	isPerformanceSupported?: boolean;
	timeElapsed: number;
	timeStart: number | null;
	timePrevious: number | null;

	reset: () => void;
	getDelta: () => number;
	getElapsedTime: () => number;
	getActualTime: () => number;
}
