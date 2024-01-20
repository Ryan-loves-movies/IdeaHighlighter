import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

// const SummaryBot = require('summarybot')
import SummaryBot from "summarybot";
const summarizer = new SummaryBot();

const getDocumentWindow = (function () {
	const windowCache = new Map();
	const closure = function (doc, _default = null) {
		if (windowCache.has(doc)) return windowCache.get(doc);
		if (window.document === doc) {
			windowCache.set(doc, window);
			return window;
		}
		for (let i = 0; i < window.frames.length; ++i) {
			try {
				if (window.frames[i].document === doc) {
					windowCache.set(doc, window.frames[i]);
					return window.frames[i];
				}
			} catch (err) {}
		}
		return _default;
	};
	return closure;
})();

function App() {
	const WORD_COUNT_THRESHOLD = 3;
	const CHAR_COUNT_MIN_THRESHOLD = 15; // min number of characters
	const LINK_DENSITY_THRESHOLD = 0.75;
	// max number of words to be considered a candidate
	const CHAR_COUNT_MAX_THRESHOLD = 1000;
	const AVG_WORD_LEN_THRESHOLD = 15;

	const [count, setCount] = useState(0);
	const [sentences, setSentences] = useState([]);

	const onClick = async () => {
		// let [tab] = await chrome.tabs.query({
		// 	active: true,
		// 	currentWindow: true,
		// });
		// chrome.scripting.executeScript({
		// 	target: { tabId: tab.id },
		// 	func: () => {
		// 		setSentences(
		// 		);
		// 		console.log(sentences);
		// 		document.body.style.backgroundColor = "green";
		// 	},
		// });
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ color: "#00FF00" },
			function (response) {
				console.log(response.status);
			}
		);
	};

	chrome.runtime.onMessage.addListener(function (
		request,
		sender,
		sendResponse
	) {
		if (request.color === "green") {
			document.body.style.backgroundColor = "green";
			sendResponse({ status: "done" });
		}
		sendResponse({ sentences: sentences });
	});

	useEffect(() => {
		console.log("reached");
		console.log(sentences);
		if (sentences.length > 1) {
			const top5perc = summarizer.run(
				sentences.join("."),
				sentences.length / 20,
				false
			);
			console.log(top5perc);
		}
	}, [sentences]);
	const output = "lol";

	return (
		<>
			<h1>{output}</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs" onClick={onClick}>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
