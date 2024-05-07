function templateParentRoutes(template, parentRoute) {
	return template + `
		<img src="../assets/icons/arrow-down.svg" alt="Arrow">
		<a href="${parentRoute.pathPage}">${parentRoute.name}</a>`;
}

(async function () {
	const breadcrumb = document.getElementById("breadcrumb");
	if (!breadcrumb) throw Error("Not element found with id: 'breadcrumb'");
	const routesResult = await fetch("../data/routes.json");
	const routes = await routesResult.json();
	const url = window.location.pathname;
	const routeParents = routes[url];
	breadcrumb.innerHTML += `
		<a class="breadcrumb___home" href="../index.html" title="Home">
			<img src="../assets/icons/home.svg" alt="Home">
			<span>Home</span>
		</a>
		${routeParents ? routeParents.reduce(templateParentRoutes, "") : ""}`;
})();