import { Timeline } from '../src/index';

test('Lab.Timeline: General', () => {
	/**
	 * Generated from running a timeline with the steps
	 * defined furtther down, after the module were
	 * initially completed.
	 */
	const targets = {
		0: [0, 0],
		0.1: [0.25, 0.25],
		0.2: [0.5, 0.5],
		0.3: [0.75, 0.75],
		0.4: [1, 1],
		0.5: [0.5, 1],
		0.6: [0, 1],
		0.7: [0.25, 0.75],
		0.8: [0.5, 0.5],
		0.9: [0.75, 0.25],
		1: [1, 0],
	};

	const timeline = Timeline([
		{ value: [0, 0] },
		{ value: [1, 1], weight: 1 },
		{ value: [0, 1], weight: 0.5 },
		{ value: [1, 0], weight: 1 },
	]);

	Object.entries(targets).forEach(([key, [x, y]]) => {
		const value = timeline(parseFloat(key));
		expect(value[0]).toBeCloseTo(x);
		expect(value[1]).toBeCloseTo(y);
	});
});
