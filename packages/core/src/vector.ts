import * as ParserUtils from './utils/parsers';
import * as ArrayUtils from './utils/array';
import type { LabVector } from './types';

function Vector(...args: number[]): LabVector {
	return {
		value: args,

		add(v: LabVector | number[]): LabVector {
			const source = ParserUtils.parseArray(v);
			this.value = ArrayUtils.add(this.value, source);
			return this;
		},

		subtract(v: LabVector | number[]): LabVector {
			const source = ParserUtils.parseArray(v);
			this.value = ArrayUtils.subtract(this.value, source);
			return this;
		},

		multiply(v: LabVector | number[]): LabVector {
			const source = ParserUtils.parseArray(v);
			this.value = ArrayUtils.multiply(this.value, source);
			return this;
		},

		divide(v: LabVector | number[]): LabVector {
			const source = ParserUtils.parseArray(v);
			this.value = ArrayUtils.divide(this.value, source);
			return this;
		},

		scale(scalar: number): LabVector {
			this.value = ArrayUtils.scale(this.value, scalar);
			return this;
		},

		interpolate(v: LabVector | number[], t: number): LabVector {
			const source = ParserUtils.parseArray(v);
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
