import { Spring } from '../src/spring';

test('Lab.Spring: Spring function', () => {
	const value = 0;
	const velocity = 0;
	const targetValue = 10;
	const dampingRatio = 0.5;
	const oscillationsPerSecond = 1;
	const deltaMs = 100;

	const result = Spring(
		value,
		velocity,
		targetValue,
		dampingRatio,
		oscillationsPerSecond,
		deltaMs
	);

	expect(result.value).toBeCloseTo(5);
	expect(result.velocity).toBeCloseTo(0);
});
