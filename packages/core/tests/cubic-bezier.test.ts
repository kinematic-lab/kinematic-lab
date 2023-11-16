import { CubicBezier } from '../src/index';

test('Lab.CubicBezier: General', () => {
	/**
	 * Generated from running a bezier with the handles
	 * (0.8, 0.2) and (0.2, 0.8) after the module were
	 * initially completed.
	 */
	const targets = {
		0: 0,
		0.1: 0.02944365023613973,
		0.2: 0.07080442971643156,
		0.3: 0.1324608509665866,
		0.4: 0.2382171247572116,
		0.5: 0.5000000000000001,
		0.6: 0.7617828752541197,
		0.7: 0.8675391490398954,
		0.8: 0.9291955704232141,
		0.9: 0.9705563497638745,
		1: 1,
	};

	const bezier = CubicBezier(0.8, 0.2, 0.2, 0.8);
	Object.entries(targets).forEach(([x, y]) => {
		expect(bezier(parseFloat(x))).toBeCloseTo(y);
	});
});
