import spring from '../src/spring';

test('Lab.Spring: Spring function', () => {
	const value = 0;
	const velocity = 0;
	const targetValue = 10;
	const dampingRatio = 0.5;
	const oscillationsPerSecond = 1;
	const deltaMs = 100;

	const result = spring(
		value,
		velocity,
		targetValue,
		dampingRatio,
		oscillationsPerSecond,
		deltaMs
	);

	expect(result[0]).toBeCloseTo(5);
	expect(result[1]).toBeCloseTo(0);
});
