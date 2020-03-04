function duplicateLetters(...args) {

	const strSet = new Set(args[0].split('')); // breaking down string in SET to remove duplicates
	let count = 1;
	
	strSet.forEach((value, valueAgain, set) => {
		let occurence = args[0].split(value).length - 1;
		occurence > count ? (count = occurence) : count; // if occurence greater than count , replace count with occurence 
	});


	return count < 2 ? false : count; // if one occurence then send false


}

export { duplicateLetters };
