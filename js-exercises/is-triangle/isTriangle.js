function isTriangle(a, b, c) {

	if (a + b > c && c + b > a && c + a > b) {
		return true;
	} // sum of two side should be gt another side
	return false;

}

export { isTriangle };
