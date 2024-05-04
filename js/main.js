const formSearch = document.getElementById("form-search");
const ulSubjects = document.getElementById("subjects");
const inputCriteria = document.getElementById("criteria");

function initListeners(subjects) {
	formSearch.addEventListener("submit", function (event) {
		event.preventDefault();
		const criteria = url.getQuery("criteria", new FormData(event.target));
		searchMenus(subjects, criteria);
	});
}

function searchMenus(subjects, criteria) {
	inputCriteria.value = criteria;
	const filtred = subjects.filter(subject => searchCondition(criteria, subject));
	ulSubjects.innerHTML = filtred.length ? filtred.reduce(templateMenu, '') : templateNotFoundSubject();
}

function searchCondition(criteria, subject) {
	return !criteria
		|| subject.name.toLowerCase().includes(criteria.toLowerCase().trim())
		|| subject.categories.join(' ').toLowerCase().includes(criteria.toLowerCase().trim())
}

function templateNotFoundSubject() {
	return `<li class="mw-subject___not-found">Not Found!</li>`;
}

function templateMenu(template, subject, index) {
	return template + `<li class= "mw-subject ${subject.categories[0]}">
		<a href="${subject.pagePath}">
			<div class="mw-subject___details">
				<div class="subject-img ${subject.iconPath.includes('.svg') ? 'padding"' : 'fit-image"'}>
					<img src="${subject.iconPath}"/>
				</div>
				<h3 class="subject-title">${subject.name}</h3>
			</div>
			<ul class="mw-subject___categories">
				${subject.categories.reduce(templateCategory, "")}
			</ul>
		</a>
	</li>`
}

function templateCategory(template, category) {
	return template + `<li class="mw-subject___category ${category}">${category}</li>`;
}

(async function () {
	const subjects = await request.json("./data/subjects.json");
	initListeners(subjects);
	searchMenus(subjects, url.getQuery("criteria"));
	inputCriteria.focus();
})();