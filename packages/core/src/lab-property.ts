import LabClock from './lab-clock';
import { flatten } from './utilities/array.utilities';

export default (options: LabPropertyOptions) => {
	return {
		clock: LabClock(),

		options: {
			...options,
			shapingFunction: options.shapingFunction ?? ((x) => x),
			from: flatten<number>([options.from]),
			to: flatten<number>([options.to]),
		},

		getValue() {
			const { from, to, duration } = this.options;
			const length = Math.min(from.length, to.length);

			let percentage = this.clock.getElapsedTime() / duration;
			percentage = Math.min(Math.max(percentage, 0), 1);
			percentage = this.options.shapingFunction(percentage);

			return [...new Array(length)].map((_, index) => {
				return (to[index] - from[index]) * percentage + from[index];
			});
		},
	};
};
