const tagsTable = document.getElementById("mw-html-tags");

function templateHtmlTag(template, tag) {
	return template + `
	<tr class="mw-html-tag">
		<td><a href="${tag.pagePath}">${tag.name}</a></td>
		<td>${tag.description}</td>
	</tr>`;
}

(async function () {
	const tags = await request.json("/data/html-page-tags.json");
	tagsTable.innerHTML = tags.reduce(templateHtmlTag, "");
})();

