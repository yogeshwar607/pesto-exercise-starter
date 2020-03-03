function sumAll(numArr) {
  // sort arr to find smaller & larger number
	const sortedArr = numArr.sort(function(a, b) {
		return a - b;
	});
	const smallNo = sortedArr[0];
  const largeNo = sortedArr[1];
  
	let sum = largeNo;
	for (let i = smallNo; i < largeNo; i++) {
		sum = sum + i;
	}
	return sum;
}

export { sumAll };
