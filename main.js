const formSearch = document.getElementById("form-search");
const ulSubjects = document.getElementById("subjects");
const inputCriteria = document.getElementById("criteria");

function initListeners(subjects) {
	formSearch.addEventListener("submit", function (event) {
		event.preventDefault();
		const criteria = utilUrl.getQuery("criteria", new FormData(event.target));
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
	const isSvgFile = subject.iconPath.match(/\.svg|\.ico/);
	const mainCategory = subject.categories[0];
	const isGithubCategory = mainCategory === 'github';
	return template + `<li class= "mw-subject ${mainCategory}">
		<a href="${subject.pagePath}" ${isGithubCategory ? 'target="_blank"': ''}>
			<div class="mw-subject___details">
				<div class="subject-img ${isSvgFile ? 'padding"' : 'fit-image"'}>
					<img src="${subject.iconPath}"/>
				</div>
				<h4 class="subject-title">${subject.name}</h4>
			</div>
			<ul class="mw-subject___categories">
				${subject.categories.reduce(templateCategory, "")}
			</ul>
			${isGithubCategory ? `<div class="mw-subject___link-external ${mainCategory}"></div>` : ""}
		</a>
	</li>`
}

function templateCategory(template, category) {
	return template + `<li class="mw-subject___category ${category}">${category}</li>`;
}

(async function () {
	const subjects = await utilRequest.json("./data/subjects.json");
	initListeners(subjects);
	searchMenus(subjects, utilUrl.getQuery("criteria"));
	inputCriteria.focus();
})();