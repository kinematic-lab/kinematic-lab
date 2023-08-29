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

			add(v: LabVector): LabVector {
				this.value.forEach((value, index) => {
					this.value[index] = value + v.value[index];
				});

				return this;
			},

			subtract(v: LabVector): LabVector {
				this.value.forEach((value, index) => {
					this.value[index] = value - v.value[index];
				});

				return this;
			},

			multiply(v: LabVector): LabVector {
				this.value.forEach((value, index) => {
					this.value[index] = value * v.value[index];
				});

				return this;
			},

			divide(v: LabVector): LabVector {
				this.value.forEach((value, index) => {
					this.value[index] = value / v.value[index];
				});

				return this;
			},

			normalise(): LabVector {
				const sum = this.value.reduce((acc, cur) => acc + cur * cur, 0);
				const distance = Math.pow(sum, 1 / this.value.length);

				this.value.forEach((value, index) => {
					this.value[index] = value / distance;
				});

				return this;
			},

			interpolate(v: LabVector, t: number): LabVector {
				this.value.forEach((value, index) => {
					if (v?.value[index]) {
						this.value[index] =
							(1 - t) * value + t * v.value[index];
					}
				});

				return this;
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
