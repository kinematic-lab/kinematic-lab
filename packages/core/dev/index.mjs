import { Clock, CubicBezier } from '../dist/index.mjs';

const clock = Clock();
const bezier = CubicBezier(0.8, 0, 0.2, 1);
const start = clock.getActualTime();

for (let n = 0; n <= 10 ** 7; n += 1) {
	bezier(0.0001);
}

console.log(clock.getActualTime() - start);
