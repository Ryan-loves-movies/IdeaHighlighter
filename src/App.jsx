import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

// const SummaryBot = require('summarybot')
import SummaryBot from "summarybot";

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
	const [count, setCount] = useState(0);
	const summarizer = new SummaryBot();

	const onClick = async () => {
		let [tab] = await chrome.tabs.query({
			active: true,
			currentWindow: true,
		});
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			func: () => {
				console.log(document.body);
				document.body.style.backgroundColor = "green";
			},
		});
	};

	// const output = summarizer.run(''
	// 	5,
	// 	false
	// );

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
