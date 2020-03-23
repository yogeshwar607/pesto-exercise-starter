import { bouncer } from './bouncer';

describe('bouncer', () => {
	it('should return array with 1 element [9]', () => {
		const result = [ 9 ];
		expect(bouncer([ false, null, 0, NaN, undefined, '', 9 ])).toEqual(result);
	});
});
