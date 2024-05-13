const utilRequest = {};

utilRequest.json = async (pathResource) => {
	const response = await fetch(pathResource);
	return await response.json();
}