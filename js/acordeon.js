const acordeonsHeader = document.getElementsByClassName("mw-acordeon___header");

for (const acordeonHeader of acordeonsHeader) {
	acordeonHeader.addEventListener('click', (element) => {
		const acordeonBody = acordeonHeader.parentElement.getElementsByClassName("mw-acordeon___body");
		if (!acordeonBody || acordeonBody.length === 0) return;
		acordeonHeader.classList.toggle("open");
		acordeonBody[0].classList.toggle("open");
	});
}