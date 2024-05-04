const url = {}

url.getQuery = (queryName, queryString = window.location.search) => {
	const param = new URLSearchParams(queryString);
	return param.get(queryName);
}