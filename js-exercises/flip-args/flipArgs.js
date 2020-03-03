function flipArgs(func) {
	return function() {
		var length = arguments.length,
			args = Array(length),
			index = length;

		while (index--) {
			args[index] = arguments[index];
		}
		return func(...args.reverse());
	};
}

export {
  flipArgs
};