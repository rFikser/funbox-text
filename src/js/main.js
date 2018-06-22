import './vendor';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App'

render(<App/>, document.getElementById('app'));

// forEach polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = (callback, thisArg) => {
		thisArg = thisArg || window;
		for (let i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Check non-tocuh devices
function isTouchDevice() {
	let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	let mq = (query) => {
		return window.matchMedia(query).matches;
	};

	if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}

	let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');

	return mq(query);
}

function cardWeightFontSize() {
	let blocks = document.querySelectorAll('.card__weight .count');
	const blockWidth = 80;
	const defaultFontSize = 42;

	blocks.forEach((item) => {
		if (item.offsetWidth > blockWidth) {
			let textLength = item.innerText.length;
			let fontSize = Math.min(defaultFontSize, blockWidth / textLength * 2);

			item.style.fontSize = `${fontSize}px`;
		}
	});
}

cardWeightFontSize();
if (isTouchDevice()) {
	document.body.classList.add('touch-device');
}
