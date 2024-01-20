// content.js
window.addEventListener("load", function () {
	let bodyText = document.body.innerText;
	chrome.runtime.sendMessage({
		action: "receiveBodyText",
		bodyText: bodyText,
	});
});
