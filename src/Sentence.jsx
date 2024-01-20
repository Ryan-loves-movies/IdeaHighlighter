function extractTextNodes(element, callback) {
	if (element.nodeType === 3) {
		// Text node
		callback(element);
	} else {
		for (var i = 0; i < element.childNodes.length; i++) {
			extractTextNodes(element.childNodes[i], callback);
		}
	}
}

// Example usage:
var textNodes = [];
extractTextNodes(document.body, function (node) {
	textNodes.push(node);
});

const Sentence = function (nodes, s, e, hasEnd, inPre) {
	this.nodes = nodes;
	this.s = s;
	this.e = e;
	this.hasEnd = hasEnd;
	this.inPre = inPre;
	this.nodeCount = this.nodes.length;

	let text = "";
	if (this.nodeCount === 1) {
		text = this.nodes[0].textContent.substring(this.s, this.e + 1);
	} else if (this.nodeCount >= 2) {
		const middle = this.nodes.slice(1, this.nodeCount - 1);
		text =
			this.nodes[0].textContent.substring(this.s) +
			middle
				.map(function (t) {
					return t.textContent;
				})
				.join("") +
			this.nodes[this.nodeCount - 1].textContent.substring(0, this.e + 1);
	}
	this.text = text.trim();
	// Replace newlines with spaces.
	this.text = this.text.replace(/\s*\n\s*/g, " ");

	this.textLength = this.text.length;
	this.wordCount = countWords(this.text);

	this.avgWordLength = this.textLength / this.wordCount;

	let linkDensityNum = 0;
	const linkDensityDen = this.textLength;

	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const _inlink = inlink(node, 8);
		if (_inlink) {
			let chars = node.textContent.length;
			if (i === 0) chars -= this.s;
			else if (i === this.nodes.length - 1) chars = this.e + 1;
			linkDensityNum += chars;
		}
	}

	this.linkDensity = linkDensityNum / linkDensityDen;
};

Sentence.prototype.highlight = function (colorSpec) {
	if (this.nodeCount === 1) {
		let t = this.nodes[0];
		if (t.textContent.length > this.e + 1) splitAndWrapText(t, this.e + 1);
		if (this.s > 0 && t.textContent.length > this.s)
			t = splitAndWrapText(t, this.s);
		highlightTextNode(t, colorSpec);
	} else if (this.nodeCount >= 2) {
		// last node
		let t = this.nodes[this.nodeCount - 1];
		if (t.textContent.length > this.e + 1) splitAndWrapText(t, this.e + 1);
		highlightTextNode(t, colorSpec);

		// middle nodes
		const middle = this.nodes.slice(1, this.nodeCount - 1);
		for (let i = 0; i < middle.length; i++) {
			highlightTextNode(middle[i], colorSpec);
		}

		// first node
		t = this.nodes[0];
		if (this.s > 0 && t.textContent.length > this.s)
			t = splitAndWrapText(t, this.s);
		highlightTextNode(t, colorSpec);
	}
};
