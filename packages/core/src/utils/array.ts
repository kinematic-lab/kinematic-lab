export function add(a1: number[], a2: number[]) {
	return a1.map((value, index) => value + (a2[index] ?? 0));
}

export function subtract(a1: number[], a2: number[]) {
	return a1.map((value, index) => value - (a2[index] ?? 0));
}

export function multiply(a1: number[], a2: number[]) {
	return a1.map((value, index) => value * (a2[index] ?? 0));
}

export function divide(a1: number[], a2: number[]) {
	return a1.map((value, index) => value / (a2[index] ?? 0));
}

export function scale(array: number[], scalar: number) {
	return array.map((value) => value * scalar);
}
