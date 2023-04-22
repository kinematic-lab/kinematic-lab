import { Clock } from '../src/index';

test('Lab.Clock: getActualTime()', () => {
	const clock = Clock();

	const result = clock.getActualTime();
	const target = performance.now();
	const difference = Math.abs(result - target);

	expect(difference).toBeLessThan(10);
});

test('Lab.Clock: getElapsedTime()', () => {
	const clock = Clock();
	expect(clock.getElapsedTime()).toBeLessThan(10);
});

test('Lab.Clock: getDelta()', () => {
	const clock = Clock();
	expect(clock.getDelta()).toBeLessThan(10);
});
