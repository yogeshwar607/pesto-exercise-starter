function fib(n) {
	let arr = [ 0, 1 ];
	for (let i = 2; i < n + 1; i++) {
		let sum = arr[i - 2] + arr[i - 1];
		if (sum <= n) { // n here is fibb seq number so sum should be lt n
			arr.push(sum);
		} else {
			break;
		}
	}
	return arr;
}

function sumFibs(num) {
	const fibSeq = fib(num);
	const sum = fibSeq.reduce((acc, val) => {
		return val % 2 === 0 ? acc : acc + val;
	}, 0);
	return sum;
}

export { sumFibs };
