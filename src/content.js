chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.sentences) {
		return;
	}
	let [tab] = chrome.tabs.query({
		active: true,
		currentWindow: true,
	});
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => {
			const WORD_COUNT_THRESHOLD = 3;
			const CHAR_COUNT_MIN_THRESHOLD = 15; // min number of characters
			const LINK_DENSITY_THRESHOLD = 0.75;
			// max number of words to be considered a candidate
			const CHAR_COUNT_MAX_THRESHOLD = 1000;
			const AVG_WORD_LEN_THRESHOLD = 15;
			const sentences = document.body.innerText
				.split(/\r?\n|\./)
				.filter(
					(sentence) =>
						sentence.split(" ").length > WORD_COUNT_THRESHOLD &&
						sentence.split("").length > CHAR_COUNT_MIN_THRESHOLD &&
						sentence.split("").length < CHAR_COUNT_MAX_THRESHOLD
				);
			console.log(sentences);

			sendResponse({ topn: sentences });
		},
	});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.sentences) {
		// Highlight
		console.log("lol");
	}
});
