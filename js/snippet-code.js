const htmlSnippetCodes = document.querySelectorAll(".snippet-code.html");
const snippetCodes = document.getElementsByClassName("snippet-code");

for (let snippetCode of snippetCodes) {
	let newSnippetCodeTabFixed = "";
	let spaceTabs = null;
	for (let line of snippetCode.innerHTML.split("\n")) {
		if (!line.trim()) continue;
		const matchTabs = line.match(/\t/g);
		if (!matchTabs) continue;
		if (!spaceTabs) spaceTabs = matchTabs.join("");
		newSnippetCodeTabFixed += line.replace(spaceTabs, "") + "\n";
	}
	snippetCode.innerHTML = newSnippetCodeTabFixed;
}

for (let htmlSnippet of htmlSnippetCodes) {
	htmlSnippet.innerHTML = htmlSnippet.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	htmlSnippet.classList.add("language-html");
}