function fib(n) {

}

function sumFibs(num) {

	const fibSeq = fib(num);
	const total = fibSeq.reduce((acc, val) => {
		return val % 2 === 0 ? acc : acc + val;
	}, 0);
	return total;

}

export { sumFibs };
