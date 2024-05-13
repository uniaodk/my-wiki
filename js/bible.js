const bibleBooksAcordeon = document.getElementById("bible-books-acordeon");

function templateBookAcordeon(template, book) {
	return template + `
	<div class="acordeon">
		<button class="acordeon___header" type="button">
			<h3>${book.name}</h3>
		</button>
		<div class="acordeon___body">
			<p>${book.description}</p>
			<table>
				<tbody class="bible-chapters">
					${book.chapters.reduce((template, chapter) => templateChapterTr(template, chapter, book), "")}
				</tbody>
			</table>
		</div>
	</div>`;
}

function templateChapterTr(template, chapter, book) {
	return template + `
		<tr>
			<td><a href="../pages/bible-detail.html?book=${book.id}&chapter=${chapter.id}">Capítulo ${chapter.id}</a></td>
			<td>${chapter.title}</td>
		</tr>
	`;
}

(async function() {
	const bibleSummary = await utilRequest.json("../data/bible-books.json");
	bibleBooksAcordeon.innerHTML = bibleSummary.reduce(templateBookAcordeon, "");
	acordeon.init();
})();
