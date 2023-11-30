import { LabVector } from './vector';

export interface LabSpring {
	value?: number;
	velocity?: number;
	targetValue?: number;
	dampingRatio?: number;
	oscillationsPerSecond?: number;
	timeScalar?: number;
	trivialVelocityThreshold?: number;
	targetFrameRate?: number;
	isRunning?: boolean;
	// hooks
	onStart?: () => void;
	onStop?: () => void;
	onUpdate?: (
		output: LabVector,
		input: LabVector,
		delta: number
	) => LabVector;
}

export interface LabSpringSet extends Set<LabSpring | LabSpringSet> {
	add(value: LabSpring | LabSpringSet): this;
	clear(): void;
	delete(value: LabSpring | LabSpringSet): boolean;
	forEach(
		callbackfn: (
			value: LabSpring | LabSpringSet,
			value2: LabSpring | LabSpringSet,
			set: Set<LabSpring | LabSpringSet>
		) => void,
		thisArg?: any
	): void;
	has(value: LabSpring | LabSpringSet): boolean;
	readonly size: number;

	isRunning: boolean;
	start(): void;
	stop(): void;
	update(): void;
}
