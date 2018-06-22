import './vendor';

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

function cardEvents() {
	let links = document.querySelectorAll('[data-product]');

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			let product = e.currentTarget.dataset.product;
			let checkbox = document.getElementById(product);

			e.preventDefault();

			if (!checkbox.disabled) {
				if (checkbox.indeterminate && !checkbox.checked) {
					checkbox.indeterminate = false;
				} else if (!checkbox.indeterminate && !checkbox.checked) {
					checkbox.indeterminate = true;
				} else if (checkbox.checked) {
					checkbox.checked = false;
				}
			}
		});

		link.addEventListener('mouseleave', (e) => {
			let product = e.currentTarget.dataset.product;
			let checkbox = document.getElementById(product);

			if (!checkbox.disabled && checkbox.indeterminate) {
				checkbox.indeterminate = false;
				checkbox.checked = true;
			}
		});
	});
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

cardEvents();
cardWeightFontSize();
if (isTouchDevice()) {
	document.body.classList.add('touch-device');
}
