function bouncer(array) {
	const filteredArray = array.filter((value) => {
		if (value) return value;
	});

	return filteredArray;
}

export { bouncer };
