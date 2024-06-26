bibleDetails = {
	chapterId: null,
	bookId: null,
};

bibleDetails.init = async function () {
	bibleDetails.bookId = utilUrl.getQuery("book");
	bibleDetails.chapterId = Number(utilUrl.getQuery("chapter"));
	document.title = `Bible - ${utilString.capitalize(bibleDetails.bookId)} ${bibleDetails.chapterId}`;

	const detailsTitle = document.getElementById("details-title");
	detailsTitle.innerText = bibleDetails.bookId;
	
	const detailSubtitle = document.getElementById("details-subtitle");
	detailSubtitle.innerText = `Cap. ${bibleDetails.chapterId}`;

	const bookData = await utilRequest.json(`../data/bible-${bibleDetails.bookId}.json`);
	const chatpterData = bookData[bibleDetails.chapterId];

	if (!chatpterData) {
		window.location.href = "../pages/bible-main.html";
		return;
	}

	const summary = document.getElementById("summary");
	summary.innerHTML += chatpterData.summary;

	const myUndestanding = document.getElementById("my-understanding");
	myUndestanding.innerHTML += chatpterData.myUndestanding;
	configNextPreviouseChapter(Object.keys(bookData).length);
}

function linkNavigatePage(bookId, chapterId, isNext) {
	const elements = [`<a href="../pages/bible-detail.html?book=${bookId}&chapter=${chapterId}">Cap. ${chapterId}</a>`];
	const arrowImg = `<img src="../assets/icons/arrow-down.svg" alt="Arrow Right"'/>`;
	isNext ? elements.push(arrowImg) : elements.unshift(arrowImg);
	return elements.join("");
}

function configNextPreviouseChapter(chapterAmount) {
	const previousChapter = document.getElementById("previous");
	previousChapter.innerHTML = bibleDetails.chapterId === 1 ? "" : linkNavigatePage(bibleDetails.bookId, bibleDetails.chapterId - 1, false); 
	const nextChapter = document.getElementById("next");
	nextChapter.innerHTML = bibleDetails.chapterId === chapterAmount ? "" : linkNavigatePage(bibleDetails.bookId, bibleDetails.chapterId + 1, true);
}

bibleDetails.init();