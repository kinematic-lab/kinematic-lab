interface LabVector {
	value: number[];

	add: (vector: LabVector) => LabVector;
	subtract: (vector: LabVector) => LabVector;
	multiply: (vector: LabVector) => LabVector;
	divide: (vector: LabVector) => LabVector;

	normalise: () => LabVector;
	interpolate: (vector: LabVector, t: number) => LabVector;
	clone: () => LabVector;
}
