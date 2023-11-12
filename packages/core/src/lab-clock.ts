export default (): LabClock => {
	const isPerformanceSupported = typeof performance !== 'undefined';
	const timeStart = (isPerformanceSupported ? performance : Date).now();
	const timePrevious = timeStart;

	return {
		timeStart,
		timePrevious,

		get isPerformanceSupported() {
			return isPerformanceSupported;
		},

		reset() {
			this.timeStart = this.getActualTime();
			this.timePrevious = this.timeStart;
		},

		getDelta() {
			this.timeStart == null && (this.timeStart = this.getActualTime());
			this.timePrevious == null && (this.timePrevious = this.timeStart);

			const time = this.getActualTime();
			const delta = time - this.timePrevious;
			this.timePrevious = time;
			return delta;
		},

		getElapsedTime() {
			this.timeStart == null && (this.timeStart = this.getActualTime());
			this.timePrevious == null && (this.timePrevious = this.timeStart);
			return this.getActualTime() - this.timeStart;
		},

		getActualTime() {
			return (this.isPerformanceSupported ? performance : Date).now();
		},
	};
};
