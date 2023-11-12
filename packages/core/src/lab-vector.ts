function parseSource(source: LabVector | number[]): number[] {
	return Array.isArray(source) ? source : source.value;
}

function Vector(...args: number[]): LabVector {
	return {
		value: args,

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
				if (source[index] != null) {
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
			return Vector(...this.value);
		},

		toString(): string {
			return `Lab.Vector(${this.value.join(', ')})`;
		},
	};
}

export default Vector;
