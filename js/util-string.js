utilString = {};

utilString.capitalize = function (value) {
	return value.split(" ")
		.map(value => value.substring(0, 1).toUpperCase() + value.substring(1, value.length))
		.join(" ");
}