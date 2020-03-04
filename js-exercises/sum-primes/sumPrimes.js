function primeFactorsTo(max) {

}

function sumPrimes(num) {

	const fibSeq = primeFactorsTo(num);
	const total = fibSeq.reduce((acc, val) => {
		return acc + val;
	}, 0);
	return total;

}

export { sumPrimes };
