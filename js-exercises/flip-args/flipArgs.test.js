import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
	it('should return a function', () => {
		expect(typeof flipArgs()).toBe('function');
	});
	it('The cached function should return the correct result', () => {
		const testFunc = (a1, a2) => a1 - a2;
		const flipTestFunc = flipArgs(testFunc);
		expect(flipTestFunc(2, 3)).toEqual(testFunc(3, 2));
	});
});
