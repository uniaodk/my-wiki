acordeon = {};

acordeon.init = function () {
	const acordeonsHeaders = document.getElementsByClassName("acordeon___header");
	for (const acordeonHeader of acordeonsHeaders) {
		acordeonHeader.addEventListener('click', (element) => {
			const acordeonBody = acordeonHeader.parentElement.getElementsByClassName("acordeon___body");
			if (!acordeonBody || acordeonBody.length === 0) return;
			acordeonHeader.classList.toggle("open");
			acordeonBody[0].classList.toggle("open");
		});
	}
}
