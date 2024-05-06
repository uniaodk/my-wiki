const request = {};

request.json = async (pathResource) => {
	const response = await fetch(pathResource);
	return await response.json();
}