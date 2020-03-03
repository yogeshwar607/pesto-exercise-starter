function primeFactorsTo(max) {
	let store = [],
		i,
		j,
		primes = [];
	for (i = 2; i <= max; ++i) {
		if (!store[i]) {
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				store[j] = true;
			}
		}
	}
	return primes;
}

function sumPrimes(num) {
	const fibSeq = primeFactorsTo(num);
	const total = fibSeq.reduce((acc, val) => {
		return acc + val;
	}, 0);
	return total;
}

export { sumPrimes };
