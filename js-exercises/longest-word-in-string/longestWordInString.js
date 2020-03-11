function longestWordInString(...args) {
	const string = args[0];
	if (typeof string !== 'string') {
		throw Error('argument is not of string type');
	}

	const splitedStringArray = string.split(' ');

	const longestWord = splitedStringArray.reduce((accumulator, value) => {
		return value.length > accumulator.length ? (accumulator = value) : accumulator;
	}, '');

	return longestWord.length;
}

export { longestWordInString };
