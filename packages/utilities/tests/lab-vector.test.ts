import { Vector } from '../src/index';

test('Lab.Vector: Operators', () => {
	const vector = Vector(2, 3, 4);

	expect(vector.clone().add([1, 2, 3]).value).toStrictEqual([3, 5, 7]);
	expect(vector.clone().subtract([1, 2, 3]).value).toStrictEqual([1, 1, 1]);
	expect(vector.clone().multiply([4, 2, 1]).value).toStrictEqual([8, 6, 4]);
	expect(vector.clone().divide([0.5, 1, 2]).value).toStrictEqual([4, 3, 2]);
});

test('Lab.Vector: Interpolation', () => {
	const vector = Vector(2, 3, 4);
	const result = vector.interpolate([1, 4, 3], 0.1);

	expect(result.value[0]).toBeCloseTo(1.9);
	expect(result.value[1]).toBeCloseTo(3.1);
	expect(result.value[2]).toBeCloseTo(3.9);
});

test('Lab.Vector: Normalise & distance', () => {
	const a = Vector(2, 2);
	const b = a.clone().normalise();

	expect(a.getDistance()).toBeCloseTo(2.83);
	expect(b.getDistance()).toBeCloseTo(1);
});

test('Lab.Vector: Cloning', () => {
	const a = Vector(1, 2, 3);
	const b = a.clone().add([1, 1, 1]);

	expect(a.value).toStrictEqual([1, 2, 3]);
	expect(b.value).toStrictEqual([2, 3, 4]);
});
