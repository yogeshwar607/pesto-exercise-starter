function abbreviateString(str) {
	if (typeof str !== 'string') {
		throw Error('argument is not of string type');
	}

	const splitedStringArray = str.split(' ');

	if (splitedStringArray.length === 1) {
		return str;
	}

	const lastStringPart = splitedStringArray.pop();
	const initialCharOfLastStringPart = lastStringPart[0].toUpperCase();
	const fisrtStringPart = splitedStringArray[0];
	const abbreviatedString = `${fisrtStringPart} ${initialCharOfLastStringPart}.`;

	return abbreviatedString;
}

export { abbreviateString };
