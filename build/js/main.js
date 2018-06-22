webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(126);

// forEach polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < undefined.length; i++) {
			callback.call(thisArg, undefined[i], i, undefined);
		}
	};
}

// Check non-tocuh devices
function isTouchDevice() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function mq(query) {
		return window.matchMedia(query).matches;
	};

	if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}

	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');

	return mq(query);
}

function cardEvents() {
	var links = document.querySelectorAll('[data-product]');

	links.forEach(function (link) {
		link.addEventListener('click', function (e) {
			var product = e.currentTarget.dataset.product;
			var checkbox = document.getElementById(product);

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

		link.addEventListener('mouseleave', function (e) {
			var product = e.currentTarget.dataset.product;
			var checkbox = document.getElementById(product);

			if (!checkbox.disabled && checkbox.indeterminate) {
				checkbox.indeterminate = false;
				checkbox.checked = true;
			}
		});
	});
}

function cardWeightFontSize() {
	var blocks = document.querySelectorAll('.card__weight .count');
	var blockWidth = 80;
	var defaultFontSize = 42;

	blocks.forEach(function (item) {
		if (item.offsetWidth > blockWidth) {
			var textLength = item.innerText.length;
			var fontSize = Math.min(defaultFontSize, blockWidth / textLength * 2);

			item.style.fontSize = fontSize + 'px';
		}
	});
}

cardEvents();
cardWeightFontSize();
if (isTouchDevice()) {
	document.body.classList.add('touch-device');
}

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(127);

/***/ })

},[125]);
//# sourceMappingURL=main.js.map