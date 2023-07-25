function handleGetAccessors(target: LabVector, name: string) {
	const accessors = Object.entries({ 0: 'xr', 1: 'yg', 2: 'zb', 3: 'a' });
	const match = name.matchAll?.(/(^[rgba]{1,4}$)|(^[xyz]{1,3}$)/g);
	const group = match && [...match]?.[0]?.[0];
	console.log(accessors, group);

	if (group) {
		const response: number[] = [];
		for (let i = 0; i < group.length; i++) {
			for (let j = 0; j < accessors.length; j++) {
				const [index, tokens] = accessors[j];
				tokens.includes(group[i]) &&
					response.push(target.value[+index]);
			}
		}

		return response;
	}
}

const handler = {
	get(target: LabVector, name: string) {
		// const tokens = handleGetAccessors(target, name);
		// const members = name && Reflect.get(target, name);
		console.log(target, name);
		return target.value;
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
				return `Lab.Vector(${this.value.join(',')})`;
			},
		},
		handler
	);
}

export default Vector;
