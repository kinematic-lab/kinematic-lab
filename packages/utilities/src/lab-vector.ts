/**
 * Handles token parameters such as `xyz`, `rgba` or any subset of these.
 * Returns a new vector which is a subset of the original.
 *
 * @param {LabVector} target
 * @param {string} name
 * @returns
 */
function handleTokenAccessors(target: LabVector, accessor: string) {
	const accessors = Object.entries({ 0: 'xr', 1: 'yg', 2: 'zb', 3: 'a' });
	const match = accessor.matchAll?.(/(^[rgba]{1,4}$)|(^[xyz]{1,3}$)/g);
	const group = match && [...match]?.[0]?.[0];

	if (group) {
		const response: number[] = [];
		for (let i = 0; i < group.length; i++) {
			for (let j = 0; j < accessors.length; j++) {
				const [index, tokens] = accessors[j];
				tokens.includes(group[i]) &&
					response.push(target.value[+index] ?? 0);
			}
		}

		return Vector(...response);
	}
}

/**
 * Handles index accessors such as [0], [1], etc.
 * Returns the corresponding number value.
 *
 * @param {LabVector} target
 * @param {string} accessor
 * @returns
 */
function handleIndexAccessors(target: LabVector, accessor: string) {
	if ([...(accessor.matchAll?.(/^\d+$/g) ?? [])]?.[0]) {
		return target.value[parseInt(accessor)];
	}
}

/**
 * Parses a vector or number array, as a number array.
 *
 * @param {LabVector | number[]} source
 * @returns
 */
function parseSource(source: LabVector | number[]) {
	return Array.isArray(source) ? source : source.value;
}

/**
 * Vector proxy generator
 */
const handler = {
	get(target: LabVector, accessor: string) {
		const byIndex = handleIndexAccessors(target, accessor);
		const byToken = handleTokenAccessors(target, accessor);
		return byIndex ?? byToken ?? Reflect.get(target, accessor);
	},
};

function Vector(...value: number[]): LabVector {
	return new Proxy(
		{
			value,

			add(v: LabVector | number[]): LabVector {
				const source = parseSource(v);
				this.value.forEach((value, index) => {
					this.value[index] = value + source[index];
				});

				return this;
			},

			subtract(v: LabVector | number[]): LabVector {
				const source = parseSource(v);
				this.value.forEach((value, index) => {
					this.value[index] = value - source[index];
				});

				return this;
			},

			multiply(v: LabVector | number[]): LabVector {
				const source = parseSource(v);
				this.value.forEach((value, index) => {
					this.value[index] = value * source[index];
				});

				return this;
			},

			divide(v: LabVector | number[]): LabVector {
				const source = parseSource(v);
				this.value.forEach((value, index) => {
					this.value[index] = value / source[index];
				});

				return this;
			},

			interpolate(v: LabVector | number[], t: number): LabVector {
				const source = parseSource(v);
				this.value.forEach((value, index) => {
					if (source[index]) {
						this.value[index] = (1 - t) * value + t * source[index];
					}
				});

				return this;
			},

			normalise(): LabVector {
				const distance = this.getDistance();
				this.value.forEach((value, index) => {
					this.value[index] = value / distance;
				});

				return this;
			},

			getDistance() {
				const sum = this.value.reduce((acc, cur) => acc + cur * cur, 0);
				return Math.sqrt(sum);
			},

			clone(): LabVector {
				return Vector(...value);
			},

			toString(): string {
				return `Lab.Vector(${this.value.join(', ')})`;
			},
		},

		handler
	);
}

export default Vector;
