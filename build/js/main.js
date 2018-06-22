webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(139);

var _react = __webpack_require__(50);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(96);

var _App = __webpack_require__(353);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

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

cardWeightFontSize();
if (isTouchDevice()) {
	document.body.classList.add('touch-device');
}

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(140);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(50);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(96);

var _Card = __webpack_require__(354);

var _Card2 = _interopRequireDefault(_Card);

var _cards = __webpack_require__(355);

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react2.default.createElement(
    'div',
    { className: 'cards' },
    _cards2.default.map(function (card) {
      return _react2.default.createElement(
        'div',
        { key: card.id, className: 'cards__container' },
        _react2.default.createElement(_Card2.default, { card: card })
      );
    })
  );
}

exports.default = App;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(50);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  var _props$card = props.card,
      title = _props$card.title,
      name = _props$card.name,
      type = _props$card.type,
      description = _props$card.description,
      portions = _props$card.portions,
      mouses = _props$card.mouses,
      weight = _props$card.weight,
      satisfied = _props$card.satisfied,
      image = _props$card.image,
      code = _props$card.code,
      checked = _props$card.checked,
      disabled = _props$card.disabled;


  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('input', { className: 'card-check', type: 'checkbox', id: code, defaultChecked: checked, disabled: disabled, name: 'product' }),
    _react2.default.createElement(
      'div',
      { className: 'card', 'data-product': code, onClick: cardClick, onMouseLeave: cardLeave },
      _react2.default.createElement('div', { className: 'card__background', style: { backgroundImage: 'url(' + image + ')' } }),
      _react2.default.createElement(
        'div',
        { className: 'card__title' },
        title
      ),
      _react2.default.createElement(
        'div',
        { className: 'card__title on-hover' },
        '\u041A\u043E\u0442\u044D \u043D\u0435 \u043E\u0434\u043E\u0431\u0440\u044F\u0435\u0442?'
      ),
      _react2.default.createElement(
        'div',
        { className: 'card__name' },
        name
      ),
      _react2.default.createElement(
        'div',
        { className: 'card__type' },
        type
      ),
      _react2.default.createElement(
        'div',
        { className: 'card__present' },
        portions,
        ' ',
        mouses,
        ' \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A'
      ),
      _react2.default.createElement(
        'div',
        { className: 'card__weight' },
        _react2.default.createElement(
          'span',
          { className: 'count' },
          weight
        ),
        _react2.default.createElement(
          'span',
          { className: 'dimension' },
          '\u043A\u0433'
        )
      )
    )
  );
}

function cardClick(e) {
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
}

function cardLeave(e) {
  var product = e.currentTarget.dataset.product;
  var checkbox = document.getElementById(product);

  if (!checkbox.disabled && checkbox.indeterminate) {
    checkbox.indeterminate = false;
    checkbox.checked = true;
  }
}

exports.default = Card;

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = [{"id":"0","title":"Сказочное заморское яство","name":"Нямушка","type":"с фуа-гра","description":"Печень утки разварная с артишоками.","portions":"10 порций","mouses":"мышь","weight":"0,5","satisfied":false,"image":"./images/cat.png","code":"fuagra","checked":false,"disabled":false},{"id":"1","title":"Сказочное заморское яство","name":"Нямушка","type":"с рыбой","description":"Головы щучьи с чесноком да свежайшая сёмгушка.","portions":"40 порций","mouses":"2 мыши","weight":"2","satisfied":false,"image":"./images/cat.png","code":"fish","checked":true,"disabled":false},{"id":"2","title":"Сказочное заморское яство","name":"Нямушка","type":"с курой","description":"Филе из цыплят с трюфелями в бульоне.","portions":"100 порций","mouses":"5 мышей","weight":"5","satisfied":true,"image":"./images/cat.png","code":"chicken","checked":false,"disabled":true}]

/***/ })

},[138]);
//# sourceMappingURL=main.js.map