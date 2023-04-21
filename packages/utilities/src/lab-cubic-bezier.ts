export default (
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	options?: LabCubicBezierOptions
): LabShapingFunction => {
	const precision = options?.precision ?? 512;
	const maxIterations = options?.maxIterations ?? 64;
	const maxErrorMargin = options?.maxErrorMargin ?? 1 / 10 ** 8;

	const getBezierFunction = (
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		t: number
	) => {
		const a0 = (1 - t) ** 3 * p0;
		const a1 = 3 * t * (1 - t) ** 2 * p1;
		const a2 = 3 * (1 - t) * t ** 2 * p2;
		const a3 = t ** 3 * p3;
		return a0 + a1 + a2 + a3;
	};

	const getX = (u: number) => getBezierFunction(0, x0, x1, 1, u);
	const getY = (u: number) => getBezierFunction(0, y0, y1, 1, u);
	const steps: number[] = new Array(precision + 1);

	for (let index = 0; index <= precision; index++) {
		let x0 = index / precision - 1 / 10 ** 3;
		let x1 = index / precision + 1 / 10 ** 3;
		let x2 = 0;

		for (let iteration = 0; iteration < maxIterations; iteration++) {
			const ox0 = getX(x0) - index / precision;
			const ox1 = getX(x1) - index / precision;

			x2 = (x0 * ox1 - x1 * ox0) / (ox1 - ox0);
			x0 = x1;
			x1 = x2;

			if (Math.abs(getX(x2) - index / precision) < maxErrorMargin) break;
		}

		steps[index] = getY(x2);
	}

	return (x: number) => {
		const x0 = Math.floor(x * precision) / precision ?? 0;
		const x1 = Math.ceil(x * precision) / precision ?? 1;
		const y0 = steps[Math.floor(x * precision)] ?? 0;
		const y1 = steps[Math.ceil(x * precision)] ?? 1;

		const percentage = (x - x0) / (x1 - x0) || 0;
		return (y1 - y0) * percentage + y0;
	};
};
