
function cacheFunction(fun) {
	let cache = {};
	return function(...arg) {
		const key = arg[0];
		if (cache[key] != undefined) {
			return cache[key];
		} else {
			let result = fun(arg);
			cache[key] = result;
			return result;
		}
	};
}

export { cacheFunction };
