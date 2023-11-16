import { Vector } from '../src/index';

test('Lab.Vector: Operators', () => {
	const vector = Vector(2, 3, 4);

	expect(vector.clone().add([1, 2, 3]).value).toStrictEqual([3, 5, 7]);
	expect(vector.clone().subtract([1, 2, 3]).value).toStrictEqual([1, 1, 1]);
	expect(vector.clone().multiply([4, 2, 1]).value).toStrictEqual([8, 6, 4]);
	expect(vector.clone().divide([0.5, 1, 2]).value).toStrictEqual([4, 3, 2]);
});

test('Lab.Vector: Interpolation', () => {
	const v1 = Vector(2, 3, 4);
	const r1 = v1.interpolate([1, 4, 3], 0.1);

	expect(r1.value[0]).toBeCloseTo(1.9);
	expect(r1.value[1]).toBeCloseTo(3.1);
	expect(r1.value[2]).toBeCloseTo(3.9);

	const v2 = Vector(2, 2, 2);
	const r2 = v2.interpolate([0, 0, 0], 0.1);

	expect(r2.value[0]).toBeCloseTo(1.8);
	expect(r2.value[1]).toBeCloseTo(1.8);
	expect(r2.value[2]).toBeCloseTo(1.8);
});

test('Lab.Vector: Normalise & Distance', () => {
	const a = Vector(2, 2);
	const b = Vector(2, 2).normalise();

	expect(a.getDistance()).toBeCloseTo(2.83);
	expect(b.getDistance()).toBeCloseTo(1);
});

test('Lab.Vector: Cloning', () => {
	const a = Vector(1, 2, 3);
	const b = a.clone().add([1, 1, 1]);

	expect(a.value).toStrictEqual([1, 2, 3]);
	expect(b.value).toStrictEqual([2, 3, 4]);
});
