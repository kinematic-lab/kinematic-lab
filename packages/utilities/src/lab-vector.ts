/**
 * Handles token parameters such as `xyz`, `rgba` or any subset of these.
 * Returns the corresponding index values.
 *
 * @param {LabVector} target
 * @param {string} name
 * @returns {number[]}
 */
function handleTokenAccessors(accessor: string): number[] {
	const accessors = Object.entries({ 0: 'xr', 1: 'yg', 2: 'zb', 3: 'a' });
	const match = accessor.matchAll?.(/(^[rgba]{1,4}$)|(^[xyz]{1,3}$)/g);
	const group = match && [...match]?.[0]?.[0];

	if (group) {
		const response: number[] = [];
		for (let i = 0; i < group.length; i++) {
			for (let j = 0; j < accessors.length; j++) {
				const [index, tokens] = accessors[j];
				tokens.includes(group[i]) && response.push(+index);
			}
		}

		return response;
	}

	return [];
}

/**
 * Handles index accessors such as [0], [1], etc.
 * Returns the corresponding index values.
 *
 * @param {LabVector} target
 * @param {string} accessor
 * @returns {number[]}
 */
function handleIndexAccessors(accessor: string): number[] {
	if ([...(accessor.matchAll?.(/^\d+$/g) ?? [])]?.[0]) {
		return [parseInt(accessor)];
	}

	return [];
}

/**
 * Parses a vector or number array, as a number array.
 *
 * @param {LabVector | number[]} source
 * @returns {number[]}
 */
function parseSource(source: LabVector | number[]): number[] {
	return Array.isArray(source) ? source : source.value;
}

/**
 * Parses a value of any type, as a number array.
 *
 * @param {any} value
 * @returns {number[]}
 */
function parseValue(value: any): number[] {
	return (Array.isArray(value) ? value : [value])
		.filter((item) => !isNaN(parseInt(item)))
		.map((item) => parseInt(item));
}

/**
 * Vector proxy generator
 */
const handler = {
	get(target: LabVector, accessor: string) {
		const byToken = handleTokenAccessors(accessor).map(
			(index) => target.value[index]
		);

		const byIndex = handleIndexAccessors(accessor).map(
			(index) => target.value[index]
		);

		if (byToken?.length) {
			return Vector(...byToken);
		}

		if (byIndex?.length) {
			return byIndex[0];
		}

		return Reflect.get(target, accessor);
	},

	set(target: LabVector, accessor: string, value: any, ...args: any[]) {
		const byIndex = handleIndexAccessors(accessor);

		if (byIndex?.length) {
			[target.value[byIndex[0]]] = parseValue(value);
			return true;
		}

		return Reflect.set(target, accessor, parseValue(value), ...args);
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
