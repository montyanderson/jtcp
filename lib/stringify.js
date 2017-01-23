function stringify(data) {
	if(typeof data != "object") {
		throw new TypeError("data must be an object");
	}

	return JSON.stringify(data) + "\n";
}

module.exports = stringify;
