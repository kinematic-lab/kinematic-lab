import { Spring } from '../src/spring';

test('Spring: Start and Stop', () => {
	const spring = new Spring();

	expect(spring.isRunning).toBe(false);

	spring.start();
	expect(spring.isRunning).toBe(true);

	spring.stop();
	expect(spring.isRunning).toBe(false);
});

test('Spring: Update', () => {
	const spring = new Spring();

	// Mock onUpdate function
	spring.onUpdate = jest.fn();

	spring.update();

	expect(spring.onUpdate).toHaveBeenCalled();
});

test('Spring: Target Value', () => {
	const spring = new Spring();

	expect(spring.targetValue).toBe(spring.value);

	spring.targetValue = 10;
	expect(spring.targetValue).toBe(10);
});

test('Spring: Target Frame Rate', () => {
	const spring = new Spring();

	expect(spring.targetFrameRate).toBeUndefined();

	spring.targetFrameRate = 60;
	expect(spring.targetFrameRate).toBe(60);
});

test('Spring: Damping Ratio', () => {
	const spring = new Spring();

	expect(spring.dampingRatio).toBe(0.5);

	spring.dampingRatio = 0.8;
	expect(spring.dampingRatio).toBe(0.8);
});

test('Spring: Oscillations Per Second', () => {
	const spring = new Spring();

	expect(spring.oscillationsPerSecond).toBe(1);

	spring.oscillationsPerSecond = 2;
	expect(spring.oscillationsPerSecond).toBe(2);
});

test('Spring: Time Scalar', () => {
	const spring = new Spring();

	expect(spring.timeScalar).toBe(1);

	spring.timeScalar = 0.5;
	expect(spring.timeScalar).toBe(0.5);
});

test('Spring: Trivial Velocity Threshold', () => {
	const spring = new Spring();

	expect(spring.trivialVelocityThreshold).toBe(0);

	spring.trivialVelocityThreshold = 0.1;
	expect(spring.trivialVelocityThreshold).toBe(0.1);
});
