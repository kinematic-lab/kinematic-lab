export function flatten<T>(arr: LabRecursiveArray<T>): T[] {
	return arr.reduce((acc, cur) => {
		return acc.concat(cur.length ? flatten<number>(cur) : cur);
	}, []);
}
