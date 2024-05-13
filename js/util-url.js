const utilUrl = {}

utilUrl.getQuery = (queryName, queryString = window.location.search) => {
	const param = new URLSearchParams(queryString);
	return param.get(queryName);
}