(function () {
	const scrollToTop = document.getElementById("scroll-to-top");
	if (!scrollToTop) throw Error("Not element found with id: 'scroll-to-top'");
	scrollToTop.innerHTML += `
	<button type="button" onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;">
		<img src="../assets/icons/arrow-up.svg"/>
	</button>`;

	window.onscroll = () => scrollToTop.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "flex" : "none";
})();