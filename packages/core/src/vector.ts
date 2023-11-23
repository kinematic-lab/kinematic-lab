import type { LabVector } from './types';

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

		multiply(v: LabVector | number[] | number): LabVector {
			const source = typeof v !== 'number' ? parseSource(v) : v;
			this.value.forEach((value, index) => {
				this.value[index] =
					value * (Array.isArray(source) ? source[index] : source);
			});

			return this;
		},

		divide(v: LabVector | number[] | number): LabVector {
			const source = typeof v !== 'number' ? parseSource(v) : v;
			this.value.forEach((value, index) => {
				this.value[index] =
					value / (Array.isArray(source) ? source[index] : source);
			});

			return this;
		},

		interpolate(v: LabVector | number[], t: number): LabVector {
			const source = parseSource(v);
			const delta = Math.min(Math.max(t, 0), 1);

			this.value.forEach((value, index) => {
				if (source[index] != null) {
					this.value[index] =
						(1 - delta) * value + delta * source[index];
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

		getDistance(v?: LabVector): number {
			const target = v ?? Vector(...new Array(this.value.length).fill(0));
			const sum = this.value.reduce(
				(acc, cur, index) => acc + (target.value[index] - cur) ** 2,
				0
			);

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
