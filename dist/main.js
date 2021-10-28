/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/7630483dd4b0c48639d2ac54a894b450.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/0bb428459c8ecfa61b22a03def1706e6.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/1f77739ca9ff2188b539c36f30ffa2be.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/7124eb50fc8227c78269f2d995637ff5.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/f0f8230116992e521526097a28f54066.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/1042e8ca1ce821518a2d3e7055410839.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/376c1f97f6553dea1ca9b3f9081889bd.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/605ed7926cf39a2ad5ec2d1f9d391d3d.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/9fe5a17c8ab036d20e6c5ba3fd2ac511.woff";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webfonts/e8a427e15cc502bef99cfd722b37ea98.woff2";

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"slider\" oncontextmenu=\"return false;\">\r\n\t<div class=\"slider-fg\">\r\n\t\t<span class=\"text\"></span><span class=\"value-text\"></span>\r\n\t\t<div class=\"slider-bg\"></div>\r\n\t</div>\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<aside class=\"toolbar\">\r\n\t<ul>\r\n\t\t<li><a class=\"logo toolbar-logo\" href=\"index.html\"></a></li>\r\n\r\n\t\t<li title=\"Tools\"><i class=\"fas fa-toolbox separator\"></i></li>\r\n\t\t<li title=\"Brush\" data-toolname=\"BRUSH\"><i class=\"fas fa-brush btn-tool\"></i></li>\r\n\t\t<li title=\"Paint Roller\" data-toolname=\"PAINT_ROLLER\"><i class=\"fas fa-paint-roller btn-tool\"></i></li>\r\n\t\t<li title=\"Pencil\" data-toolname=\"PENCIL\"><i class=\"fas fa-pencil-alt btn-tool\"></i></li>\r\n\t\t<li title=\"Eraser\" data-toolname=\"ERASER\"><i class=\"fas fa-eraser btn-tool\"></i></li>\r\n\t\t<li title=\"Text\" data-toolname=\"TEXT\"><i class=\"fas fa-font btn-tool\"></i></li>\r\n\t\t<li title=\"Line\" data-toolname=\"LINE\"><span class=\"btn-tool line-icon\">/</span></li>\r\n\t\t<li title=\"Rectangle\" data-toolname=\"RECT\"><i class=\"far fa-square btn-tool\"></i></li>\r\n\t\t<li title=\"Ellipse\" data-toolname=\"ELLIPSE\"><i class=\"far fa-circle btn-tool\"></i></li>\r\n\t\t<li title=\"Fill\" data-toolname=\"FILL\"><i class=\"fas fa-fill btn-tool\"></i></li>\r\n\t\t<li title=\"Color Picker\" data-toolname=\"COLOR_PICKER\"><i class=\"fas fa-eye-dropper btn-tool\"></i></li>\r\n\t\t<li title=\"Add Image\" data-toolname=\"ADD_IMAGE\"><i class=\"fas fa-image btn-tool\"></i></li>\r\n\r\n\t\t<li class=\"color-separator\" title=\"Colors\"><i class=\"fas fa-palette separator\"></i></li>\r\n\t\t<li class=\"btn-color\" title=\"Black\" data-color=\"#000000\"></li>\r\n\t\t<li class=\"btn-color\" title=\"Red\" data-color=\"#df3939\"></li>\r\n\t\t<li class=\"btn-color\" title=\"Green\" data-color=\"#3fe23f\"></li>\r\n\t\t<li class=\"btn-color\" title=\"Blue\" data-color=\"#1b86eb\"></li>\r\n\t\t<li class=\"btn-color\" title=\"White\" data-color=\"#ffffff\"></li>\r\n\t</ul>\r\n</aside>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/lato-font/css/lato-font.css":
/*!**************************************************!*\
  !*** ./node_modules/lato-font/css/lato-font.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/favicon.ico":
/*!****************************!*\
  !*** ./public/favicon.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./public/img/logo.png":
/*!*****************************!*\
  !*** ./public/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/f5111b719d243946cf044317add643d0.png";

/***/ }),

/***/ "./public/js/components.js":
/*!*********************************!*\
  !*** ./public/js/components.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider/slider */ "./public/js/components/slider/slider.js");
/* harmony import */ var _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toolbar/toolbar */ "./public/js/components/toolbar/toolbar.js");



const components = [
	{selector: "ui-slider", component: _components_slider_slider__WEBPACK_IMPORTED_MODULE_0__["default"]},
	{selector: "ui-toolbar", component: _components_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"]}
];

// create custom components
const initComponents = () =>
{
	components.forEach(component =>
	{
		customElements.define(component.selector, component.component);
	});
}

/* harmony default export */ __webpack_exports__["default"] = (initComponents);

/***/ }),

/***/ "./public/js/components/component/component.js":
/*!*****************************************************!*\
  !*** ./public/js/components/component/component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Component extends HTMLElement
{
	constructor(html, stylesheet="")
	{
		super();
		this.attachShadow({mode: "open"});

		const element = document.createElement("template");
		element.innerHTML = html;

		if (stylesheet != "" && stylesheet != null)
		{
			const styleElement = document.createElement("style");
			styleElement.innerHTML = stylesheet.toString();
			this.shadowRoot.append(styleElement);
		}

		this.shadowRoot.append(element.content.cloneNode(true));
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./public/js/components/image-modal/image-modal.js":
/*!*********************************************************!*\
  !*** ./public/js/components/image-modal/image-modal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal */ "./public/js/components/modal/modal.js");


class ImageModal extends _modal_modal__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(id)
	{
		super(id);

		this.dropArea = this.element.querySelector(".drop-area");
		this.dropArea.addEventListener("dragover", (e) => this.imageDraggedOver(e));
		this.dropArea.addEventListener("drop", (e) => this.imageDropped(e));

		this.imagePreview = this.element.querySelector("#image-preview");

		const imageFileInput = this.element.querySelector("#image-file-input");
		imageFileInput.addEventListener("change", (e) => this.imageFileInputChanged(e));
	}

	show()
	{
		super.show();
		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "initial";
		});

		this.dropArea.style.borderWidth = "1px";
		this.element.querySelector(".drop-area p").style.display = "block";

		this.imagePreview.src = "";
		if (!this.imagePreview.classList.contains("hidden"))
			this.imagePreview.classList.add("hidden");

		this.element.querySelector("#add-image").disabled = true;
	}

	hide()
	{
		super.hide();
		this.element.querySelector("#image-file-input").value = "";
	}

	imageDraggedOver(e)
	{
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	imageDropped(e)
	{
		e.preventDefault();
		this.loadBackgroundImage(e.dataTransfer.files[0]);

		this.element.querySelectorAll(".hide-on-drop").forEach(item =>
		{
			item.style.display = "none";
		});

		this.element.querySelector("#add-image").disabled = false;
	}

	imageFileInputChanged(e)
	{
		this.element.querySelectorAll(".hide-on-image-input").forEach(item =>
		{
			item.style.display = "none";
		});

		this.loadBackgroundImage(e.currentTarget.files[0]);
		this.element.querySelector("#add-image").disabled = false;
	}

	// load image from provided file and display in preview area
	loadBackgroundImage(file)
	{
		if (file != null && file.type.match(/image*/))
		{
			let reader = new FileReader();
			reader.onload = (readerEv) =>
			{
				this.imagePreview.src = readerEv.target.result;
				if (this.imagePreview.classList.contains("hidden"))
					this.imagePreview.classList.remove("hidden");

				this.dropArea.style.borderWidth = "0px";
			};
			
			reader.readAsDataURL(file);
		}
	}

	onAddImageBtnClick(callback)
	{
		this.element.querySelector("#add-image").addEventListener("click", callback);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./public/js/components/modal/modal.js":
/*!*********************************************!*\
  !*** ./public/js/components/modal/modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Modal
{
	constructor(id)
	{
		this.id = id;
		this.element = document.getElementById(id);
		this.isVisible = false;

		this.element.querySelector("#close-modal").addEventListener("click", () => this.hide());
		window.addEventListener("keydown", (e) =>
		{
			if (e.key == "Escape" && this.isVisible)
				this.hide();
		});

		this.element.addEventListener("click", (e) =>
		{
			// close modal when user clicks outside modal area
			if (e.target == this.element && this.isVisible)
				this.hide();
		});
	}

	show()
	{
		if (this.element.classList.contains("hidden"))
			this.element.classList.remove("hidden");

		this.isVisible = true;
	}

	hide()
	{
		if (!this.element.classList.contains("hidden"))
			this.element.classList.add("hidden");

		this.isVisible = false;
	}

	toggle()
	{
		if (this.isVisible)
			this.hide();
		else
			this.show();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./public/js/components/slider/slider.js":
/*!***********************************************!*\
  !*** ./public/js/components/slider/slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component */ "./public/js/components/component/component.js");
/* harmony import */ var html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-loader!./slider.html */ "./node_modules/html-loader/dist/cjs.js!./public/js/components/slider/slider.html");
/* harmony import */ var html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.scss */ "./public/js/components/slider/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_2__);




class Slider extends _component_component__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor()
	{
		super(html_loader_slider_html__WEBPACK_IMPORTED_MODULE_1___default.a, _slider_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

		// default values for slider properties
		const defaultValue = 0;
		const defaultMinValue = 0;
		const defaultMaxValue = 10;
		const defaultText = "";
		const defaultUnit = "";

		if (!this.hasAttribute("data-value"))
			this.setValue(defaultValue);

		if (!this.hasAttribute("data-min-value"))
			this.setAttribute("data-min-value", defaultMinValue);

		if (!this.hasAttribute("data-max-value"))
			this.setAttribute("data-max-value", defaultMaxValue);

		if (!this.hasAttribute("data-text"))
			this.setAttribute("data-text", defaultText);

		if (!this.hasAttribute("data-unit"))
			this.setAttribute("data-unit", defaultUnit);

		const sliderFg = this.shadowRoot.querySelector(".slider-fg");
		sliderFg.querySelector("span.text").innerHTML = this.getAttribute("data-text");

		this.update(); // draw slider based on initial values

		this.addEventListener("click", this.update);
		this.addEventListener("touchmove", this.update);
	}

	sliderPosFromValue(value)
	{
		const maxValue = Number(this.getAttribute("data-max"));
		if (value > 0)
			return value / maxValue;
		else
			return 0;
	}

	// calculates and updates slider's value and position
	update(e=null, value=null)
	{
		const minValue = Number(this.getAttribute("data-min"));
		const maxValue = Number(this.getAttribute("data-max"));
		const unit = this.getAttribute("data-unit");
		const sliderFg = this.shadowRoot.querySelector(".slider-fg");
		const rect = sliderFg.getBoundingClientRect();
		let newSliderPos;

		if (rect.width == 0) // this can happen when element is invisible
			return;

		if (e != null) // update slider based on user input
		{
			let mousePosX;

			if (e.type == "touchmove")
				mousePosX = e.touches[0].clientX;
			else
				mousePosX = e.clientX;

			const relativeMousePos = mousePosX - rect.left;
			newSliderPos = relativeMousePos / rect.width;

		} else if (value != null) // update with specified value
		{
			newSliderPos = this.sliderPosFromValue(value);

		} else // update slider using current value from data-value attribute
		{
			let val = Number(this.getAttribute("data-value"));
			newSliderPos = this.sliderPosFromValue(val);
		}

		const newValue = Math.min(Math.max(minValue, Math.round(newSliderPos * maxValue / rect.width * rect.width)), maxValue);
		this.setValue(newValue);

		const newBgWidth = Math.min(Math.max(minValue, Math.round(newSliderPos * rect.width)), rect.width);
		sliderFg.querySelector("span.value-text").innerHTML = newValue + unit;
		sliderFg.querySelector(".slider-bg").style.width = newBgWidth + "px";

		this.dispatchEvent(new Event("change"));
	}

	getValue()
	{
		return this.getAttribute("data-value");
	}

	setValue(value)
	{
		this.setAttribute("data-value", value);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./public/js/components/slider/slider.scss":
/*!*************************************************!*\
  !*** ./public/js/components/slider/slider.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slider {\n  width: 150px;\n  padding: 0;\n  background: #262626; }\n  .slider .slider-fg {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    height: 25px;\n    background: none;\n    cursor: pointer; }\n  .slider span {\n    display: inline-block;\n    z-index: 1;\n    padding: 2px 5px;\n    pointer-events: none;\n    color: rgba(255, 255, 255, 0.9); }\n  .slider .slider-bg {\n    background: #106eac;\n    height: 25px;\n    width: 0px;\n    position: absolute;\n    pointer-events: none; }\n\n.brush-size-menu .slider {\n  margin: 0 auto; }\n", ""]);



/***/ }),

/***/ "./public/js/components/toolbar/toolbar.js":
/*!*************************************************!*\
  !*** ./public/js/components/toolbar/toolbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component */ "./public/js/components/component/component.js");
/* harmony import */ var html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-loader!./toolbar.html */ "./node_modules/html-loader/dist/cjs.js!./public/js/components/toolbar/toolbar.html");
/* harmony import */ var html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.scss */ "./public/js/components/toolbar/toolbar.scss");
/* harmony import */ var _toolbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toolbar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tool-type */ "./public/js/models/tool-type.js");





class Toolbar extends _component_component__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor()
	{
		super(html_loader_toolbar_html__WEBPACK_IMPORTED_MODULE_1___default.a, _toolbar_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
		this.element = this.shadowRoot.querySelector(".toolbar");

		// workaround for paste being broken after clicking on toolbar
		this.element.addEventListener("paste", (e) =>
		{
			const format = "Text";
			let newClipboardData = new DataTransfer();
			newClipboardData.setData(format, e.clipboardData.getData(format));
			let event = new Event("paste");
			event.clipboardData = newClipboardData;
			this.dispatchEvent(event);
		});
	}

	// make icons clickable
	initButtons(defaultTool, defaultColor)
	{
		let isDefaultToolFound = false;
		const toolIcons = this.element.querySelectorAll("ul > li .btn-tool");
		toolIcons.forEach(icon =>
		{
			const listItem = icon.parentElement;
			const toolType = _models_tool_type__WEBPACK_IMPORTED_MODULE_3__["default"][listItem.dataset.toolname];
			if (!isDefaultToolFound && toolType == defaultTool)
			{
				this.setSelectedTool(icon);
				isDefaultToolFound = true;
			}

			if (listItem.dataset.toolname == "ADD_IMAGE")
				listItem.addEventListener("click", (e) => this.ImgSelectionClicked(e));
			else if (!icon.classList.contains("disabled"))
				listItem.addEventListener("click", (e) => this.toolSwitched(e));
		});

		let isDefaultColorFound = false;
		const toolbarColors = this.element.querySelectorAll(".btn-color");
		toolbarColors.forEach(item =>
		{
			if (!isDefaultColorFound && item.dataset.color == defaultColor)
			{
				this.setSelectedColor(item);
				isDefaultColorFound = true;
			}

			item.style.backgroundColor = item.dataset.color;
			item.addEventListener("click", (e) => this.colorSwitched(e));
		});
	}

	setSelectedTool(element)
	{
		const selectedClass = "selected";
		let prevSelected = this.element.querySelector(`.${selectedClass}`);

		if (prevSelected)
			prevSelected.classList.remove(selectedClass);

		if (!element.classList.contains(selectedClass))
			element.classList.add(selectedClass);
	}

	setSelectedColor(element)
	{
		const selectedClass = "selected-color";

		this.clearSelectedColor();
		if (!element.classList.contains(selectedClass))
			element.classList.add(selectedClass);
	}

	clearSelectedColor()
	{
		const selectedClass = "selected-color";
		let prevSelected = this.element.querySelector(`.${selectedClass}`);

		if (prevSelected)
			prevSelected.classList.remove(selectedClass);
	}

	// tool icon clicked
	toolSwitched(e)
	{
		const toolName = e.currentTarget.dataset.toolname;
		const toolType = _models_tool_type__WEBPACK_IMPORTED_MODULE_3__["default"][toolName];
		this.setSelectedTool(e.target);
		this.dispatchEvent(new CustomEvent("toolSwitch", {detail: toolType}));
	}

	// color button clicked
	colorSwitched(e)
	{
		const color = e.target.dataset.color;
		this.setSelectedColor(e.target);
		this.dispatchEvent(new CustomEvent("colorSwitch", {detail: color}));
	}

	ImgSelectionClicked(e)
	{
		this.dispatchEvent(new CustomEvent("ImgSettingsOpen"));
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./public/js/components/toolbar/toolbar.scss":
/*!***************************************************!*\
  !*** ./public/js/components/toolbar/toolbar.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg") + "#fontawesome");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot") + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../../../../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg") + "#fontawesome");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../../../img/logo.png */ "./public/img/logo.png"));

// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  animation: fa-spin 1s infinite steps(8); }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.fa-ad:before {\n  content: \"\\f641\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.fa-airbnb:before {\n  content: \"\\f834\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-allergies:before {\n  content: \"\\f461\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angry:before {\n  content: \"\\f556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-ankh:before {\n  content: \"\\f644\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-archway:before {\n  content: \"\\f557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-atlas:before {\n  content: \"\\f558\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-atom:before {\n  content: \"\\f5d2\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-award:before {\n  content: \"\\f559\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-baby:before {\n  content: \"\\f77c\"; }\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.fa-backspace:before {\n  content: \"\\f55a\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-bacon:before {\n  content: \"\\f7e5\"; }\n\n.fa-bacteria:before {\n  content: \"\\e059\"; }\n\n.fa-bacterium:before {\n  content: \"\\e05a\"; }\n\n.fa-bahai:before {\n  content: \"\\f666\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-balance-scale-left:before {\n  content: \"\\f515\"; }\n\n.fa-balance-scale-right:before {\n  content: \"\\f516\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-band-aid:before {\n  content: \"\\f462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-battle-net:before {\n  content: \"\\f835\"; }\n\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.fa-bible:before {\n  content: \"\\f647\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-biking:before {\n  content: \"\\f84a\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-biohazard:before {\n  content: \"\\f780\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-blender:before {\n  content: \"\\f517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-blog:before {\n  content: \"\\f781\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-bone:before {\n  content: \"\\f5d7\"; }\n\n.fa-bong:before {\n  content: \"\\f55c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.fa-book-medical:before {\n  content: \"\\f7e6\"; }\n\n.fa-book-open:before {\n  content: \"\\f518\"; }\n\n.fa-book-reader:before {\n  content: \"\\f5da\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-bootstrap:before {\n  content: \"\\f836\"; }\n\n.fa-border-all:before {\n  content: \"\\f84c\"; }\n\n.fa-border-none:before {\n  content: \"\\f850\"; }\n\n.fa-border-style:before {\n  content: \"\\f853\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.fa-box:before {\n  content: \"\\f466\"; }\n\n.fa-box-open:before {\n  content: \"\\f49e\"; }\n\n.fa-box-tissue:before {\n  content: \"\\e05b\"; }\n\n.fa-boxes:before {\n  content: \"\\f468\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-brain:before {\n  content: \"\\f5dc\"; }\n\n.fa-bread-slice:before {\n  content: \"\\f7ec\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.fa-broom:before {\n  content: \"\\f51a\"; }\n\n.fa-brush:before {\n  content: \"\\f55d\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-buffer:before {\n  content: \"\\f837\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-burn:before {\n  content: \"\\f46a\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.fa-business-time:before {\n  content: \"\\f64a\"; }\n\n.fa-buy-n-large:before {\n  content: \"\\f8a6\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-calendar:before {\n  content: \"\\f133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\f274\"; }\n\n.fa-calendar-day:before {\n  content: \"\\f783\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-week:before {\n  content: \"\\f784\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-campground:before {\n  content: \"\\f6bb\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-candy-cane:before {\n  content: \"\\f786\"; }\n\n.fa-cannabis:before {\n  content: \"\\f55f\"; }\n\n.fa-capsules:before {\n  content: \"\\f46b\"; }\n\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-car-alt:before {\n  content: \"\\f5de\"; }\n\n.fa-car-battery:before {\n  content: \"\\f5df\"; }\n\n.fa-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.fa-car-side:before {\n  content: \"\\f5e4\"; }\n\n.fa-caravan:before {\n  content: \"\\f8ff\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-carrot:before {\n  content: \"\\f787\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cash-register:before {\n  content: \"\\f788\"; }\n\n.fa-cat:before {\n  content: \"\\f6be\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-chair:before {\n  content: \"\\f6c0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.fa-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.fa-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.fa-chart-bar:before {\n  content: \"\\f080\"; }\n\n.fa-chart-line:before {\n  content: \"\\f201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\f200\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-check-double:before {\n  content: \"\\f560\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-cheese:before {\n  content: \"\\f7ef\"; }\n\n.fa-chess:before {\n  content: \"\\f439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.fa-chess-board:before {\n  content: \"\\f43c\"; }\n\n.fa-chess-king:before {\n  content: \"\\f43f\"; }\n\n.fa-chess-knight:before {\n  content: \"\\f441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\f445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\f447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-chromecast:before {\n  content: \"\\f838\"; }\n\n.fa-church:before {\n  content: \"\\f51d\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-city:before {\n  content: \"\\f64f\"; }\n\n.fa-clinic-medical:before {\n  content: \"\\f7f2\"; }\n\n.fa-clipboard:before {\n  content: \"\\f328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.fa-clock:before {\n  content: \"\\f017\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.fa-cloudflare:before {\n  content: \"\\e07d\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-cocktail:before {\n  content: \"\\f561\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-code-branch:before {\n  content: \"\\f126\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-coins:before {\n  content: \"\\f51e\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.fa-comment-medical:before {\n  content: \"\\f7f5\"; }\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-compress-alt:before {\n  content: \"\\f422\"; }\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-cookie:before {\n  content: \"\\f563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.fa-copy:before {\n  content: \"\\f0c5\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\"; }\n\n.fa-couch:before {\n  content: \"\\f4b8\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\f565\"; }\n\n.fa-cross:before {\n  content: \"\\f654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-crow:before {\n  content: \"\\f520\"; }\n\n.fa-crown:before {\n  content: \"\\f521\"; }\n\n.fa-crutch:before {\n  content: \"\\f7f7\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-dailymotion:before {\n  content: \"\\e052\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-deezer:before {\n  content: \"\\e077\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-democrat:before {\n  content: \"\\f747\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-diagnoses:before {\n  content: \"\\f470\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-dice:before {\n  content: \"\\f522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.fa-dice-five:before {\n  content: \"\\f523\"; }\n\n.fa-dice-four:before {\n  content: \"\\f524\"; }\n\n.fa-dice-one:before {\n  content: \"\\f525\"; }\n\n.fa-dice-six:before {\n  content: \"\\f526\"; }\n\n.fa-dice-three:before {\n  content: \"\\f527\"; }\n\n.fa-dice-two:before {\n  content: \"\\f528\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.fa-directions:before {\n  content: \"\\f5eb\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-disease:before {\n  content: \"\\f7fa\"; }\n\n.fa-divide:before {\n  content: \"\\f529\"; }\n\n.fa-dizzy:before {\n  content: \"\\f567\"; }\n\n.fa-dna:before {\n  content: \"\\f471\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-dog:before {\n  content: \"\\f6d3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.fa-dolly:before {\n  content: \"\\f472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.fa-donate:before {\n  content: \"\\f4b9\"; }\n\n.fa-door-closed:before {\n  content: \"\\f52a\"; }\n\n.fa-door-open:before {\n  content: \"\\f52b\"; }\n\n.fa-dot-circle:before {\n  content: \"\\f192\"; }\n\n.fa-dove:before {\n  content: \"\\f4ba\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.fa-dragon:before {\n  content: \"\\f6d5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-drum:before {\n  content: \"\\f569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.fa-dumpster:before {\n  content: \"\\f793\"; }\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.fa-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-edge-legacy:before {\n  content: \"\\e078\"; }\n\n.fa-edit:before {\n  content: \"\\f044\"; }\n\n.fa-egg:before {\n  content: \"\\f7fb\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-equals:before {\n  content: \"\\f52c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-ethernet:before {\n  content: \"\\f796\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\f153\"; }\n\n.fa-evernote:before {\n  content: \"\\f839\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-expand-alt:before {\n  content: \"\\f424\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-fan:before {\n  content: \"\\f863\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-faucet:before {\n  content: \"\\e005\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-feather:before {\n  content: \"\\f52d\"; }\n\n.fa-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-alt:before {\n  content: \"\\f15c\"; }\n\n.fa-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-code:before {\n  content: \"\\f1c9\"; }\n\n.fa-file-contract:before {\n  content: \"\\f56c\"; }\n\n.fa-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.fa-file-download:before {\n  content: \"\\f56d\"; }\n\n.fa-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-export:before {\n  content: \"\\f56e\"; }\n\n.fa-file-image:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-import:before {\n  content: \"\\f56f\"; }\n\n.fa-file-invoice:before {\n  content: \"\\f570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.fa-file-medical:before {\n  content: \"\\f477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\f572\"; }\n\n.fa-file-signature:before {\n  content: \"\\f573\"; }\n\n.fa-file-upload:before {\n  content: \"\\f574\"; }\n\n.fa-file-video:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-word:before {\n  content: \"\\f1c2\"; }\n\n.fa-fill:before {\n  content: \"\\f575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\f576\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\f577\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-firefox-browser:before {\n  content: \"\\e007\"; }\n\n.fa-first-aid:before {\n  content: \"\\f479\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-fish:before {\n  content: \"\\f578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-flushed:before {\n  content: \"\\f579\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-football-ball:before {\n  content: \"\\f44e\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-frog:before {\n  content: \"\\f52e\"; }\n\n.fa-frown:before {\n  content: \"\\f119\"; }\n\n.fa-frown-open:before {\n  content: \"\\f57a\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.fa-futbol:before {\n  content: \"\\f1e3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-gem:before {\n  content: \"\\f3a5\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-ghost:before {\n  content: \"\\f6e2\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-gifts:before {\n  content: \"\\f79c\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-git-alt:before {\n  content: \"\\f841\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.fa-glass-martini:before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.fa-glasses:before {\n  content: \"\\f530\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.fa-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.fa-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\f450\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-google-pay:before {\n  content: \"\\e079\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-gopuram:before {\n  content: \"\\f664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-greater-than:before {\n  content: \"\\f531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.fa-grimace:before {\n  content: \"\\f57f\"; }\n\n.fa-grin:before {\n  content: \"\\f580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\f581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\f587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\f588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.fa-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-guilded:before {\n  content: \"\\e07e\"; }\n\n.fa-guitar:before {\n  content: \"\\f7a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-hamburger:before {\n  content: \"\\f805\"; }\n\n.fa-hammer:before {\n  content: \"\\f6e3\"; }\n\n.fa-hamsa:before {\n  content: \"\\f665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.fa-hand-holding-medical:before {\n  content: \"\\e05c\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-holding-water:before {\n  content: \"\\f4c1\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.fa-hand-middle-finger:before {\n  content: \"\\f806\"; }\n\n.fa-hand-paper:before {\n  content: \"\\f256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-rock:before {\n  content: \"\\f255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.fa-hand-sparkles:before {\n  content: \"\\e05d\"; }\n\n.fa-hand-spock:before {\n  content: \"\\f259\"; }\n\n.fa-hands:before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.fa-hands-wash:before {\n  content: \"\\e05e\"; }\n\n.fa-handshake:before {\n  content: \"\\f2b5\"; }\n\n.fa-handshake-alt-slash:before {\n  content: \"\\e05f\"; }\n\n.fa-handshake-slash:before {\n  content: \"\\e060\"; }\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.fa-hard-hat:before {\n  content: \"\\f807\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-hat-cowboy:before {\n  content: \"\\f8c0\"; }\n\n.fa-hat-cowboy-side:before {\n  content: \"\\f8c1\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.fa-hdd:before {\n  content: \"\\f0a0\"; }\n\n.fa-head-side-cough:before {\n  content: \"\\e061\"; }\n\n.fa-head-side-cough-slash:before {\n  content: \"\\e062\"; }\n\n.fa-head-side-mask:before {\n  content: \"\\e063\"; }\n\n.fa-head-side-virus:before {\n  content: \"\\e064\"; }\n\n.fa-heading:before {\n  content: \"\\f1dc\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.fa-headset:before {\n  content: \"\\f590\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-helicopter:before {\n  content: \"\\f533\"; }\n\n.fa-highlighter:before {\n  content: \"\\f591\"; }\n\n.fa-hiking:before {\n  content: \"\\f6ec\"; }\n\n.fa-hippo:before {\n  content: \"\\f6ed\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-hive:before {\n  content: \"\\e07f\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-horse:before {\n  content: \"\\f6f0\"; }\n\n.fa-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.fa-hospital:before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.fa-hospital-user:before {\n  content: \"\\f80d\"; }\n\n.fa-hot-tub:before {\n  content: \"\\f593\"; }\n\n.fa-hotdog:before {\n  content: \"\\f80f\"; }\n\n.fa-hotel:before {\n  content: \"\\f594\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.fa-house-user:before {\n  content: \"\\e065\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-ice-cream:before {\n  content: \"\\f810\"; }\n\n.fa-icicles:before {\n  content: \"\\f7ad\"; }\n\n.fa-icons:before {\n  content: \"\\f86d\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.fa-ideal:before {\n  content: \"\\e013\"; }\n\n.fa-igloo:before {\n  content: \"\\f7ae\"; }\n\n.fa-image:before {\n  content: \"\\f03e\"; }\n\n.fa-images:before {\n  content: \"\\f302\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-infinity:before {\n  content: \"\\f534\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-innosoft:before {\n  content: \"\\e080\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-instagram-square:before {\n  content: \"\\e055\"; }\n\n.fa-instalod:before {\n  content: \"\\e081\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-itch-io:before {\n  content: \"\\f83a\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-jedi:before {\n  content: \"\\f669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-joint:before {\n  content: \"\\f595\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-kaaba:before {\n  content: \"\\f66b\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-keyboard:before {\n  content: \"\\f11c\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-khanda:before {\n  content: \"\\f66d\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-kiss:before {\n  content: \"\\f596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-landmark:before {\n  content: \"\\f66f\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.fa-laptop-house:before {\n  content: \"\\e066\"; }\n\n.fa-laptop-medical:before {\n  content: \"\\f812\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-laugh:before {\n  content: \"\\f599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.fa-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-lemon:before {\n  content: \"\\f094\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-less-than:before {\n  content: \"\\f536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-lira-sign:before {\n  content: \"\\f195\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.fa-lungs:before {\n  content: \"\\f604\"; }\n\n.fa-lungs-virus:before {\n  content: \"\\e067\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-map-marked:before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-marker:before {\n  content: \"\\f5a1\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mask:before {\n  content: \"\\f6fa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-mdb:before {\n  content: \"\\f8ca\"; }\n\n.fa-medal:before {\n  content: \"\\f5a2\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-meh:before {\n  content: \"\\f11a\"; }\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.fa-memory:before {\n  content: \"\\f538\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-menorah:before {\n  content: \"\\f676\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-meteor:before {\n  content: \"\\f753\"; }\n\n.fa-microblog:before {\n  content: \"\\e01a\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-microscope:before {\n  content: \"\\f610\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-mitten:before {\n  content: \"\\f7b5\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-mixer:before {\n  content: \"\\e056\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.fa-money-check:before {\n  content: \"\\f53c\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.fa-monument:before {\n  content: \"\\f5a6\"; }\n\n.fa-moon:before {\n  content: \"\\f186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.fa-mosque:before {\n  content: \"\\f678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-mountain:before {\n  content: \"\\f6fc\"; }\n\n.fa-mouse:before {\n  content: \"\\f8cc\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-not-equal:before {\n  content: \"\\f53e\"; }\n\n.fa-notes-medical:before {\n  content: \"\\f481\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-octopus-deploy:before {\n  content: \"\\e082\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-oil-can:before {\n  content: \"\\f613\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-om:before {\n  content: \"\\f679\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-orcid:before {\n  content: \"\\f8d2\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-otter:before {\n  content: \"\\f700\"; }\n\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-pager:before {\n  content: \"\\f815\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.fa-palette:before {\n  content: \"\\f53f\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-pallet:before {\n  content: \"\\f482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-parking:before {\n  content: \"\\f540\"; }\n\n.fa-passport:before {\n  content: \"\\f5ab\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.fa-paste:before {\n  content: \"\\f0ea\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-peace:before {\n  content: \"\\f67c\"; }\n\n.fa-pen:before {\n  content: \"\\f304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\f305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.fa-pen-square:before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.fa-people-arrows:before {\n  content: \"\\e068\"; }\n\n.fa-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.fa-pepper-hot:before {\n  content: \"\\f816\"; }\n\n.fa-perbyte:before {\n  content: \"\\e083\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-percentage:before {\n  content: \"\\f541\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-person-booth:before {\n  content: \"\\f756\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-phone-alt:before {\n  content: \"\\f879\"; }\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-phone-square-alt:before {\n  content: \"\\f87b\"; }\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.fa-photo-video:before {\n  content: \"\\f87c\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-pied-piper-square:before {\n  content: \"\\e01e\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.fa-pills:before {\n  content: \"\\f484\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-pizza-slice:before {\n  content: \"\\f818\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.fa-plane-slash:before {\n  content: \"\\e069\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-poll:before {\n  content: \"\\f681\"; }\n\n.fa-poll-h:before {\n  content: \"\\f682\"; }\n\n.fa-poo:before {\n  content: \"\\f2fe\"; }\n\n.fa-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.fa-poop:before {\n  content: \"\\f619\"; }\n\n.fa-portrait:before {\n  content: \"\\f3e0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\f154\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-pray:before {\n  content: \"\\f683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\f684\"; }\n\n.fa-prescription:before {\n  content: \"\\f5b1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-procedures:before {\n  content: \"\\f487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\f542\"; }\n\n.fa-pump-medical:before {\n  content: \"\\e06a\"; }\n\n.fa-pump-soap:before {\n  content: \"\\e06b\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-quidditch:before {\n  content: \"\\f458\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-quran:before {\n  content: \"\\f687\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-radiation:before {\n  content: \"\\f7b9\"; }\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.fa-rainbow:before {\n  content: \"\\f75b\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-receipt:before {\n  content: \"\\f543\"; }\n\n.fa-record-vinyl:before {\n  content: \"\\f8d9\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-redo:before {\n  content: \"\\f01e\"; }\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-remove-format:before {\n  content: \"\\f87d\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-reply:before {\n  content: \"\\f3e5\"; }\n\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-republican:before {\n  content: \"\\f75e\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-restroom:before {\n  content: \"\\f7bd\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.fa-ring:before {\n  content: \"\\f70b\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-robot:before {\n  content: \"\\f544\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-route:before {\n  content: \"\\f4d7\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.fa-ruler:before {\n  content: \"\\f545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.fa-running:before {\n  content: \"\\f70c\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.fa-rust:before {\n  content: \"\\e07a\"; }\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-salesforce:before {\n  content: \"\\f83b\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-satellite:before {\n  content: \"\\f7bf\"; }\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.fa-save:before {\n  content: \"\\f0c7\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-school:before {\n  content: \"\\f549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-scroll:before {\n  content: \"\\f70e\"; }\n\n.fa-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\f688\"; }\n\n.fa-search-location:before {\n  content: \"\\f689\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-seedling:before {\n  content: \"\\f4d8\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-shapes:before {\n  content: \"\\f61f\"; }\n\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.fa-shield-virus:before {\n  content: \"\\e06c\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.fa-shopify:before {\n  content: \"\\e057\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.fa-sign:before {\n  content: \"\\f4d9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-signature:before {\n  content: \"\\f5b7\"; }\n\n.fa-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-sink:before {\n  content: \"\\e06d\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-skating:before {\n  content: \"\\f7c5\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-skiing:before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.fa-skull:before {\n  content: \"\\f54c\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.fa-slash:before {\n  content: \"\\f715\"; }\n\n.fa-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.fa-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-smile:before {\n  content: \"\\f118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.fa-smog:before {\n  content: \"\\f75f\"; }\n\n.fa-smoking:before {\n  content: \"\\f48d\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.fa-sms:before {\n  content: \"\\f7cd\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.fa-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.fa-snowman:before {\n  content: \"\\f7d0\"; }\n\n.fa-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.fa-soap:before {\n  content: \"\\e06e\"; }\n\n.fa-socks:before {\n  content: \"\\f696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\\f882\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-down-alt:before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.fa-sort-amount-up-alt:before {\n  content: \"\\f885\"; }\n\n.fa-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\\f887\"; }\n\n.fa-sort-up:before {\n  content: \"\\f0de\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-spa:before {\n  content: \"\\f5bb\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\"; }\n\n.fa-spell-check:before {\n  content: \"\\f891\"; }\n\n.fa-spider:before {\n  content: \"\\f717\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-splotch:before {\n  content: \"\\f5bc\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-square-full:before {\n  content: \"\\f45c\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-stackpath:before {\n  content: \"\\f842\"; }\n\n.fa-stamp:before {\n  content: \"\\f5bf\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.fa-star-of-life:before {\n  content: \"\\f621\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.fa-stopwatch-20:before {\n  content: \"\\e06f\"; }\n\n.fa-store:before {\n  content: \"\\f54e\"; }\n\n.fa-store-alt:before {\n  content: \"\\f54f\"; }\n\n.fa-store-alt-slash:before {\n  content: \"\\e070\"; }\n\n.fa-store-slash:before {\n  content: \"\\e071\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-stream:before {\n  content: \"\\f550\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.fa-sun:before {\n  content: \"\\f185\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-surprise:before {\n  content: \"\\f5c2\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.fa-swift:before {\n  content: \"\\f8e1\"; }\n\n.fa-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.fa-symfony:before {\n  content: \"\\f83d\"; }\n\n.fa-synagogue:before {\n  content: \"\\f69b\"; }\n\n.fa-sync:before {\n  content: \"\\f021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.fa-syringe:before {\n  content: \"\\f48e\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.fa-tablets:before {\n  content: \"\\f490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-tape:before {\n  content: \"\\f4db\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-teeth:before {\n  content: \"\\f62e\"; }\n\n.fa-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.fa-temperature-high:before {\n  content: \"\\f769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-tenge:before {\n  content: \"\\f7d7\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-theater-masks:before {\n  content: \"\\f630\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-thermometer:before {\n  content: \"\\f491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.fa-tiktok:before {\n  content: \"\\e07b\"; }\n\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.fa-tired:before {\n  content: \"\\f5c8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-toilet:before {\n  content: \"\\f7d8\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.fa-toilet-paper-slash:before {\n  content: \"\\e072\"; }\n\n.fa-toolbox:before {\n  content: \"\\f552\"; }\n\n.fa-tools:before {\n  content: \"\\f7d9\"; }\n\n.fa-tooth:before {\n  content: \"\\f5c9\"; }\n\n.fa-torah:before {\n  content: \"\\f6a0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.fa-tractor:before {\n  content: \"\\f722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-traffic-light:before {\n  content: \"\\f637\"; }\n\n.fa-trailer:before {\n  content: \"\\e041\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-tram:before {\n  content: \"\\f7da\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.fa-trash-restore:before {\n  content: \"\\f829\"; }\n\n.fa-trash-restore-alt:before {\n  content: \"\\f82a\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.fa-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.fa-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.fa-tshirt:before {\n  content: \"\\f553\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-tv:before {\n  content: \"\\f26c\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-umbraco:before {\n  content: \"\\f8e8\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.fa-uncharted:before {\n  content: \"\\e084\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-unity:before {\n  content: \"\\e049\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-unlink:before {\n  content: \"\\f127\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-unsplash:before {\n  content: \"\\e07c\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-user-alt:before {\n  content: \"\\f406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.fa-user-check:before {\n  content: \"\\f4fc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.fa-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.fa-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.fa-user-friends:before {\n  content: \"\\f500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\f501\"; }\n\n.fa-user-injured:before {\n  content: \"\\f728\"; }\n\n.fa-user-lock:before {\n  content: \"\\f502\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-user-minus:before {\n  content: \"\\f503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\f504\"; }\n\n.fa-user-nurse:before {\n  content: \"\\f82f\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-user-shield:before {\n  content: \"\\f505\"; }\n\n.fa-user-slash:before {\n  content: \"\\f506\"; }\n\n.fa-user-tag:before {\n  content: \"\\f507\"; }\n\n.fa-user-tie:before {\n  content: \"\\f508\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-users-cog:before {\n  content: \"\\f509\"; }\n\n.fa-users-slash:before {\n  content: \"\\e073\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.fa-utensils:before {\n  content: \"\\f2e7\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-vest:before {\n  content: \"\\e085\"; }\n\n.fa-vest-patches:before {\n  content: \"\\e086\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-vial:before {\n  content: \"\\f492\"; }\n\n.fa-vials:before {\n  content: \"\\f493\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-video:before {\n  content: \"\\f03d\"; }\n\n.fa-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.fa-vihara:before {\n  content: \"\\f6a7\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-virus:before {\n  content: \"\\e074\"; }\n\n.fa-virus-slash:before {\n  content: \"\\e075\"; }\n\n.fa-viruses:before {\n  content: \"\\e076\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-voicemail:before {\n  content: \"\\f897\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\f772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-walking:before {\n  content: \"\\f554\"; }\n\n.fa-wallet:before {\n  content: \"\\f555\"; }\n\n.fa-warehouse:before {\n  content: \"\\f494\"; }\n\n.fa-watchman-monitoring:before {\n  content: \"\\e087\"; }\n\n.fa-water:before {\n  content: \"\\f773\"; }\n\n.fa-wave-square:before {\n  content: \"\\f83e\"; }\n\n.fa-waze:before {\n  content: \"\\f83f\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-weight:before {\n  content: \"\\f496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wind:before {\n  content: \"\\f72e\"; }\n\n.fa-window-close:before {\n  content: \"\\f410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-wodu:before {\n  content: \"\\e088\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-won-sign:before {\n  content: \"\\f159\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-x-ray:before {\n  content: \"\\f497\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-yammer:before {\n  content: \"\\f840\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\f157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n\n/*!\n * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  src: url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n\n.menu {\n  margin: 0;\n  padding: 0;\n  background: #333;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  height: 39px; }\n  .menu a {\n    color: rgba(255, 255, 255, 0.8); }\n    .menu a:hover {\n      color: #6fb1dd; }\n  .menu ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    height: 100%; }\n  .menu ul li {\n    text-align: center; }\n  .menu .logo-link {\n    position: relative;\n    top: -3px; }\n\n.btn, .btn-alt, .btn-warning {\n  background-color: #1b86ce;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 5px;\n  padding: 5px;\n  border: solid 1px transparent;\n  cursor: pointer;\n  outline: none; }\n  .btn:hover, .btn-alt:hover, .btn-warning:hover {\n    background-color: #318fce;\n    outline: none;\n    color: rgba(255, 255, 255, 0.9); }\n\n.btn[disabled], .btn-alt[disabled], .btn-warning[disabled] {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.5);\n  cursor: inherit; }\n  .btn[disabled]:hover, .btn-alt[disabled]:hover, .btn-warning[disabled]:hover {\n    background-color: inherit;\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.5); }\n\n.btn-alt {\n  background-color: transparent;\n  border: solid 1px rgba(255, 255, 255, 0.8); }\n  .btn-alt:hover {\n    border-color: transparent; }\n\n.btn-warning {\n  background-color: #e6762c;\n  border: solid 1px #c06325; }\n  .btn-warning:hover {\n    background-color: #e4884c; }\n\n.logo, .toolbar .toolbar-logo {\n  width: 22px;\n  height: 22px;\n  background: url(" + ___CSS_LOADER_URL___12___ + ");\n  background-position: center;\n  background-size: cover;\n  display: inline-block;\n  position: relative;\n  top: 6px; }\n\n.draw-btn-alt {\n  border: solid 1px rgba(255, 255, 255, 0.8);\n  padding: 5px;\n  border-radius: 5px; }\n  .draw-btn-alt:hover {\n    border-color: #6fb1dd; }\n\ninput, button {\n  font-family: inherit;\n  font-size: inherit; }\n\ninput[type=text], input[type=number] {\n  padding: 5px;\n  border: solid white 1px;\n  border-radius: 2px; }\n  input[type=text]:focus, input[type=number]:focus {\n    border-color: #1474b4; }\n\n.hidden {\n  display: none !important; }\n\n.modal {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n  .modal .modal-content {\n    text-align: center;\n    padding: 35px;\n    width: 50vw;\n    height: 50vh;\n    position: relative;\n    top: -39px;\n    z-index: 2;\n    border: solid 1px #262626;\n    border-radius: 5px;\n    background: #333;\n    box-shadow: 0 0 5px #333;\n    display: flex;\n    flex-direction: column; }\n    .modal .modal-content .title {\n      margin-top: 0;\n      margin-bottom: 10px; }\n  .modal .modal-header {\n    text-align: right;\n    position: absolute;\n    top: 15px;\n    right: 15px; }\n    .modal .modal-header .close-btn {\n      cursor: pointer;\n      color: rgba(255, 255, 255, 0.7); }\n      .modal .modal-header .close-btn:hover {\n        color: rgba(255, 255, 255, 0.8); }\n\n@media (max-width: 700px) {\n  .modal .modal-content {\n    width: 65vw; } }\n\n@media (max-height: 700px) {\n  .modal .modal-content {\n    height: 65vh; } }\n\n@media (max-width: 400px) {\n  .modal .modal-content {\n    padding: 20px; } }\n\n.toolbar {\n  height: 100%;\n  background-color: #333;\n  padding: 0 10px;\n  margin: 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 26px;\n  grid-column: 1;\n  touch-action: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none; }\n  .toolbar .toolbar-logo {\n    position: absolute;\n    top: -30px;\n    margin-left: -10px; }\n  .toolbar .separator {\n    color: rgba(255, 255, 255, 0.5);\n    padding: 6px 4px 10px 4px;\n    border: solid 1px transparent;\n    border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n    margin-bottom: 10px; }\n  .toolbar .color-separator {\n    margin-top: 20px; }\n  .toolbar .btn-tool, .toolbar .btn-color {\n    display: block;\n    padding: 6px;\n    border-radius: 5px;\n    margin: 0 auto;\n    margin-bottom: 5px;\n    cursor: pointer; }\n    .toolbar .btn-tool:hover, .toolbar .btn-color:hover {\n      color: rgba(255, 255, 255, 0.9); }\n  .toolbar ul {\n    list-style: none;\n    padding: 0;\n    margin: 0px; }\n  .toolbar .btn-color {\n    display: block;\n    border: solid 1px rgba(255, 255, 255, 0.8);\n    width: 30px;\n    height: 30px;\n    border-radius: 10px;\n    padding: 0;\n    margin-bottom: 10px; }\n    .toolbar .btn-color:hover {\n      cursor: pointer;\n      filter: brightness(1.5); }\n  .toolbar .selected {\n    color: #318fce;\n    padding-left: 0;\n    padding-right: 0; }\n    .toolbar .selected:hover {\n      color: #6fb1dd; }\n  .toolbar .selected-color {\n    border-color: #6fb1dd; }\n  .toolbar .disabled {\n    color: rgba(255, 255, 255, 0.5); }\n    .toolbar .disabled:hover {\n      color: rgba(255, 255, 255, 0.6); }\n  .toolbar .line-icon {\n    font-weight: bold; }\n\n@media (max-width: 700px) {\n  .toolbar {\n    padding: 0 5px;\n    font-size: 24px; } }\n\n@media (max-width: 480px) {\n  .toolbar {\n    padding: 0; }\n    .toolbar .toolbar-logo {\n      display: none; } }\n\n@media (max-height: 845px) {\n  .toolbar {\n    font-size: 24px; }\n    .toolbar .btn-tool, .toolbar .btn-color {\n      margin-bottom: 3px; }\n    .toolbar .color-separator {\n      margin-top: 10px; }\n    .toolbar .separator {\n      margin-bottom: 8px; } }\n\n@media (max-height: 760px) {\n  .toolbar {\n    font-size: 22px; }\n    .toolbar .separator {\n      margin-bottom: 7px; }\n    .toolbar .btn-tool, .toolbar .btn-color {\n      margin-bottom: 0px; }\n    .toolbar .btn-color {\n      width: 15px;\n      height: 15px;\n      margin-bottom: 5px;\n      padding: 5px; } }\n\n@media (max-height: 685px) {\n  .toolbar .btn-color {\n    padding: 3px; } }\n", ""]);



/***/ }),

/***/ "./public/js/fill.worker.js":
/*!**********************************!*\
  !*** ./public/js/fill.worker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "fill.worker.js");
}


/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./public/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_draw_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/draw.scss */ "./public/scss/draw.scss");
/* harmony import */ var _scss_draw_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_draw_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lato_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lato-font */ "./node_modules/lato-font/css/lato-font.css");
/* harmony import */ var lato_font__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lato_font__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favicon.ico */ "./public/favicon.ico");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_favicon_ico__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/tool-type */ "./public/js/models/tool-type.js");
/* harmony import */ var _tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/tool-from-type */ "./public/js/tools/tool-from-type.js");
/* harmony import */ var _tools_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/text */ "./public/js/tools/text.js");
/* harmony import */ var _tools_fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/fill */ "./public/js/tools/fill.js");
/* harmony import */ var _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/color-picker */ "./public/js/tools/color-picker.js");
/* harmony import */ var _tools_rect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/rect */ "./public/js/tools/rect.js");
/* harmony import */ var _tools_line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/line */ "./public/js/tools/line.js");
/* harmony import */ var _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/ellipse */ "./public/js/tools/ellipse.js");
/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification */ "./public/js/notification/notification.js");
/* harmony import */ var _notification_notification_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification-system */ "./public/js/notification/notification-system.js");
/* harmony import */ var _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/drawing-data */ "./public/js/models/drawing-data.js");
/* harmony import */ var _components_image_modal_image_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/image-modal/image-modal */ "./public/js/components/image-modal/image-modal.js");
/* harmony import */ var _models_vector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/vector */ "./public/js/models/vector.js");
/* harmony import */ var _fill_worker_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fill.worker.js */ "./public/js/fill.worker.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components */ "./public/js/components.js");




















const CANVAS_SIZE = 0.9;
const CANVAS_SIZE_MEDIUM = 0.85;
const CANVAS_SIZE_SMALL = 0.8;
const MEDIUM_SIZE_PX = 550;
const SMALL_SIZE_PX = 420;
const DEFAULT_BRUSH_SIZE = 20;
const DEFAULT_PAINT_COLOR = "#000000";
const DEFAULT_PAINT_TOOL = _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].BRUSH;
const NET_CURSOR_UPDATE_INTERVAL_MS = 50;
const notificationSystem = new _notification_notification_system__WEBPACK_IMPORTED_MODULE_13__["default"]();
let canvas, socket, ctx, bgCanvas, bgCtx, colorSelector, imageSelectionModal, sizeValueSpan,
	brushSizeMenu, roomUrlLink, toolbar, shapePreviewCanvas, shapePreviewCtx, insertedImageCanvas, 
	insertedImageCtx, imagePreview;

let isDrawing = false;
let paintTool = Object(_tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__["default"])(DEFAULT_PAINT_TOOL, DEFAULT_BRUSH_SIZE, DEFAULT_PAINT_COLOR);
let drawingStartPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let drawingEndPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let isSavingCanvas = false;
let lastSelectedSlider = null;
let touchJustEnded = false;
let isFirstJoin = true;
let cursorMoved = false;
let cursorPosition = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"]();
let users = [];
let showRemoteCursors = true;

//for insert image
let termDrawing = false;
let isInserting = false;    
var rectImage = {startX:30, startY:50, w:100, h:200},
drag = false,
mouseX, 
mouseY,
closeEnough = 10,
dragTL= false,
dragBL= false,
dragTR=false,
dragBR=false;
// calculate canvas size based on window dimensions
function defaultCanvasSize()
{
	let newWidth = window.innerWidth * CANVAS_SIZE;
	let newHeight = window.innerHeight * CANVAS_SIZE;

	if (window.innerWidth < SMALL_SIZE_PX)
		newWidth = window.innerWidth * CANVAS_SIZE_SMALL;
	else if (window.innerWidth < MEDIUM_SIZE_PX)
		newWidth = window.innerWidth * CANVAS_SIZE_MEDIUM;

	if (window.innerHeight < SMALL_SIZE_PX)
		newHeight = window.innerHeight * CANVAS_SIZE_SMALL;
	else if (window.innerHeight < MEDIUM_SIZE_PX)
		newHeight = window.innerHeight * CANVAS_SIZE_MEDIUM;

	newWidth = Math.round(newWidth);
	newHeight = Math.round(newHeight);

	return {width: newWidth, height: newHeight};
}

// makes sure canvas is never obscured by toolbar and navbar
function repositionCanvas()
{
	const canvasLayersRect = document.querySelector(".canvas-layers").getBoundingClientRect();

	if (canvas.width > canvasLayersRect.width)
	{
		canvas.style.left = "0px";
		bgCanvas.style.left = "0px";
		shapePreviewCanvas.style.left = "0px";
		insertedImageCanvas.style.left = "0px";
	} else
	{
		canvas.style.left = "initial";
		bgCanvas.style.left = "initial";
		shapePreviewCanvas.style.left = "initial";
		insertedImageCanvas.style.left = "initial";
	}

	if (canvas.height > canvasLayersRect.height)
	{
		canvas.style.top = "0px";
		bgCanvas.style.top = "0px";
		shapePreviewCanvas.style.top = "0px";
		insertedImageCanvas.style.top = "0px";
	} else
	{
		canvas.style.top = "initial";
		bgCanvas.style.top = "initial";
		shapePreviewCanvas.style.top = "initial";
		insertedImageCanvas.style.top = "initial";
	}
}

function setCanvasSize(size)
{
	const canvasData = canvas.toDataURL("image/png");
	const bgData = bgCanvas.toDataURL("image/png");
	canvas.height = size.height;
	canvas.width = size.width;
	bgCanvas.height = size.height;
	bgCanvas.width = size.width;
	shapePreviewCanvas.height = size.height;
	shapePreviewCanvas.width = size.width;
	insertedImageCanvas.height = size.height;
	insertedImageCanvas.width =  size.width;
	repositionCanvas();
	loadCanvasData(ctx, canvasData);
	loadCanvasData(bgCtx, bgData);
	fillBackground();
	document.querySelector("#canvas-width").value = size.width;
	document.querySelector("#canvas-height").value = size.height;
	updateTextCursorPos();
}

// load image from canvasURL
function loadCanvasData(ctx, canvasData)
{
	let canvasImage = new Image();
	canvasImage.onload = () =>
	{
		ctx.drawImage(canvasImage, 0, 0);
	};

	canvasImage.src = canvasData;
}

function loadInsertedImage(ctx, canvasData, left, top, w, h)
{
	let canvasImage = new Image();
	canvasImage.onload = () =>
	{
		ctx.drawImage(canvasImage, 0, 0);
	};

	canvasImage.src = canvasData;
}

function paintToolSwitched(e)
{
	paintTool = Object(_tools_tool_from_type__WEBPACK_IMPORTED_MODULE_5__["default"])(e.detail, paintTool.size, paintTool.color);
	updateBrushPreview();
}

// color change by clicking a toolbar icon or editing color input
function paintColorChanged(e, color=null)
{

	if (e != null && e.target == colorSelector)
	{
		color = e.target.value;
		toolbar.clearSelectedColor();

	} else
	{
		if (e != null) // changed by toolbar
			color = e.detail;
		else // changed by color picker
			toolbar.clearSelectedColor();

		colorSelector.parentElement.style.backgroundColor = color;
	}

	paintTool.setColor(color);
	updateBrushPreview();
}

function roomUrlClicked(e)
{
	e.preventDefault();

	var textArea = document.createElement("TEXTAREA");
	textArea.value = e.currentTarget.dataset.clipboard;
	textArea.classList.add("clipboard");
	e.currentTarget.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try
	{
		document.execCommand("copy");
	} catch (err)
	{
		console.error("ERROR: can't copy URL to clipboard");
	}

	e.currentTarget.removeChild(textArea);
}

// handles mouse move and touch move
function canvasMouseMoved(e)
{
	const brushPreview = document.querySelector("#local-brush-preview");
	const leftPos = e.clientX - brushPreview.offsetWidth / 2;
	const topPos = e.clientY - brushPreview.offsetHeight / 2;
	const canvasRect = canvas.getBoundingClientRect();
	brushPreview.style.left = `${leftPos}px`;
	brushPreview.style.top = `${topPos}px`;
	cursorPosition = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](leftPos - canvasRect.x, topPos - canvasRect.y);
	cursorMoved = true;

	if (isDrawing)
	{
		let posX, posY;
		let numTouches;
		let rect;

		if (e.type == "touchmove")
		{
			numTouches = e.touches.length;
			rect = e.target.getBoundingClientRect();
		} else
		{
			posX = e.offsetX;
			posY = e.offsetY;
			numTouches = 1;
		}

		for (let i = 0; i < numTouches; i++)
		{
			if (e.type == "touchmove")
			{
				posX = e.touches[i].pageX - rect.left;
				posY = e.touches[i].pageY - rect.top;
			}

			updateDrawingPos(null, new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY));

			// not a shape tool
			if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] == false && paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] == false &&
				paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"] == false)
			{
				const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
				draw(drawingData);
				socket.emit("draw", drawingData);

				updateDrawingPos(new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY), null);
			}
		}

		// shape tools
		if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"])
		{
			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let isSquare = e.shiftKey;
			paintTool.square = isSquare;

			let rect = new _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"](paintTool.size, paintTool.color, isSquare);
			let posX = e.offsetX;
			let posY = e.offsetY;
			rect.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);

		} else if (paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"])
		{
			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let line = new _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"](paintTool.size, paintTool.color);
			let posX = e.offsetX;
			let posY = e.offsetY;
			line.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);

		} else if (paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"])
		{
			let isCircle = e.shiftKey;
			paintTool.circle = isCircle;

			setContextProperties(shapePreviewCtx, paintTool);
			shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

			let ellipse = new _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"](paintTool.size, paintTool.color, isCircle);
			let posX = e.offsetX;
			let posY = e.offsetY;
			ellipse.draw(shapePreviewCtx, drawingStartPos.x, drawingStartPos.y, posX, posY);
		}
	}
	if (isInserting) 
	{
		mouseX = e.offsetX;
  		mouseY = e.offsetY;
  		if(dragTL){
			rectImage.w += rectImage.startX-mouseX;
			rectImage.h += rectImage.startY-mouseY;
			rectImage.startX = mouseX;
			rectImage.startY = mouseY;
		} else if(dragTR) {
			rectImage.w = Math.abs(rectImage.startX-mouseX);
			rectImage.h += rectImage.startY-mouseY;
			rectImage.startY = mouseY;
		} else if(dragBL) {
			rectImage.w += rectImage.startX-mouseX;
			rectImage.h = Math.abs(rectImage.startY-mouseY);
			rectImage.startX = mouseX;  
		} else if(dragBR) {
			rectImage.w = Math.abs(rectImage.startX-mouseX);
			rectImage.h = Math.abs(rectImage.startY-mouseY);
		}
		insertedImageCtx.clearRect(0,0,canvas.width,canvas.height);
		drawInsertedImage();
	}
}

function canvasMouseDown(e)
{
	// return if this was triggered by automatic mousedown event after touch start
	if (touchJustEnded)
		return;

	let posX = e.offsetX;
	let posY = e.offsetY;

	if (e.type == "touchstart")
	{
		let rect = e.target.getBoundingClientRect();
		posX = e.touches[i].pageX - rect.left;
		posY = e.touches[i].pageY - rect.top;
	}
	
	if (isInserting) {
		mouseX = e.offsetX;
  		mouseY = e.offsetY;
		if( checkCloseEnough(mouseX, rectImage.startX) && checkCloseEnough(mouseY, rectImage.startY) ){
			dragTL = true;
		}
		// 2. top right
		else if( checkCloseEnough(mouseX, rectImage.startX+rectImage.w) && checkCloseEnough(mouseY, rectImage.startY) ){
			dragTR = true;
		
		}
		// 3. bottom left
		else if( checkCloseEnough(mouseX, rectImage.startX) && checkCloseEnough(mouseY, rectImage.startY+rectImage.h) ){
			dragBL = true;
		
		}
		// 4. bottom right
		else if( checkCloseEnough(mouseX, rectImage.startX+rectImage.w) && checkCloseEnough(mouseY, rectImage.startY+rectImage.h) ){
			dragBR = true;
		
		}
		// (5.) none of them
		else {
			isInserting = false;
			dragTL = dragTR = dragBL = dragBR = false;
			ctx.drawImage(imagePreview, rectImage.startX, rectImage.startY, rectImage.w, rectImage.h);
			socket.emit("insertImage", canvas.toDataURL("image/png"), rectImage.startX, rectImage.startY, rectImage.w, rectImage.h);
			insertedImageCtx.clearRect(0, 0, insertedImageCanvas.width, insertedImageCanvas.height);
			isDrawing = termDrawing;
		}
	}
	else drawSinglePoint(posX, posY);
}

function checkCloseEnough(p1, p2){
	return Math.abs(p1-p2)<closeEnough;
}

function canvasTouchStart(e)
{
	let posX, posY;
	let numTouches = e.touches.length;
	let rect = e.target.getBoundingClientRect();

	for (let i = 0; i < numTouches; i++)
	{
		if (e.type == "touchstart")
		{
			posX = e.touches[i].pageX - rect.left;
			posY = e.touches[i].pageY - rect.top;
		}

		drawSinglePoint(posX, posY);
	}
}

// handles mouse up and touch end
function windowMouseUp(e)
{
	if (e.type == "mouseup" && touchJustEnded)
	{
		touchJustEnded = false;
		return;
	}

	if (isDrawing && (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] ||
		paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"]))
	{
		// clear preview
		shapePreviewCtx.clearRect(0, 0, shapePreviewCtx.canvas.width, shapePreviewCtx.canvas.height);

		let posX = e.offsetX;
		let posY = e.offsetY;

		if (e.target.tagName == "CANVAS")
		{
			updateDrawingPos(null, new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY));
		}

		const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		// TODO: check if this is needed
		if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"])
			drawingData.square = paintTool.square;

		draw(drawingData);
		socket.emit("draw", drawingData);
	}
	if (isInserting) {
		dragTL = dragTR = dragBL = dragBR = false;
	}
	isDrawing = false;
	lastSelectedSlider = null;
}

function canvasTouchEnded(e)
{
	windowMouseUp(e);
	touchJustEnded = true;
}

function canvasMouseOver(e)
{
	const brushPreview = document.querySelector("#local-brush-preview");
	brushPreview.style.visibility = "visible";
	brushPreview.style.left = (e.clientX - brushPreview.offsetWidth / 2) + "px";
	brushPreview.style.top = (e.clientY - brushPreview.offsetHeight / 2) + "px";
}

function canvasMouseOut()
{
	document.querySelector("#local-brush-preview").style.visibility = "hidden";
}

function setContextProperties(context, tool)
{
	context.globalCompositeOperation = tool.operation;
	context.lineWidth = tool.size;
	context.lineCap = tool.style;
	context.strokeStyle = tool.color;
	context.shadowBlur = tool.blur;
	context.shadowColor = tool.color;
}

function draw(drawingData)
{
	setContextProperties(ctx, drawingData.tool);

	const posX = drawingData.startPos.x;
	const posY = drawingData.startPos.y;

	if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT && drawingData.text != null && drawingData.text != "")
	{
		ctx.font = `${drawingData.tool.size}px Lato`;
		ctx.fillStyle = drawingData.tool.color;
		ctx.fillText(drawingData.text, posX, posY);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].FILL)
	{
		const width = ctx.canvas.clientWidth;
		const height = ctx.canvas.clientHeight;
		let imageData = ctx.getImageData(0, 0, width, height);
		let fillTool = new _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"](drawingData.tool.size, drawingData.tool.color);
		let fillData = fillTool.getFillData(posX, posY, width, height, imageData);

		if (fillData == null)
			return;

		if (window.Worker)
		{
			if (!canvas.classList.contains("progress"))
				canvas.classList.add("progress");

			let worker = new _fill_worker_js__WEBPACK_IMPORTED_MODULE_17__["default"]();
			worker.postMessage([width, height, posX, posY, imageData, fillData[0], fillData[1]]);
			worker.onmessage = (e) =>
			{
				ctx.putImageData(e.data, 0, 0); // update canvas
				canvas.classList.remove("progress");
			};

		} else
		{
			_tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"].fillPixels([width, height, posX, posY, imageData, fillData[0], fillData[1]]);
			ctx.putImageData(imageData, 0, 0); // update canvas
		}

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].RECT)
	{
		let rect = new _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"](drawingData.tool.size, drawingData.tool.color, drawingData.tool.square);
		rect.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].LINE)
	{
		let line = new _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"](drawingData.tool.size, drawingData.tool.color);
		line.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else if (drawingData.tool.type == _models_tool_type__WEBPACK_IMPORTED_MODULE_4__["default"].ELLIPSE)
	{
		let ellipse = new _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"](drawingData.tool.size, drawingData.tool.color, drawingData.tool.circle);
		ellipse.draw(ctx, posX, posY, drawingData.endPos.x, drawingData.endPos.y);

	} else
	{
		ctx.beginPath();
		ctx.moveTo(drawingData.startPos.x, drawingData.startPos.y);
		ctx.lineTo(drawingData.endPos.x, drawingData.endPos.y);
		ctx.stroke();
	}
}

function drawSinglePoint(posX, posY)
{
	let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](posX, posY);
	updateDrawingPos(newPos, newPos);

	if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"])
	{
		let drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		draw(drawingData);
		socket.emit("draw", drawingData);

	} else if (paintTool instanceof _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__["default"])
	{
		let color = paintTool.getPixelColor(ctx, bgCtx, posX, posY);
		paintColorChanged(null, color);

	} else if (paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] ||
		paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"]) // shape tools
	{
		isDrawing = true;

	} else if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"] == false) // other drawing tools
	{
		isDrawing = true;
		let drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool);
		draw(drawingData);
		socket.emit("draw", drawingData);
	}
}

// an element that follows mouse cursor. It visualizes the brush size and shape
function createLocalBrushPreview()
{
	const brushPreview = document.createElement("div");
	brushPreview.classList.add("brush-preview");
	brushPreview.id = "local-brush-preview";
	document.body.appendChild(brushPreview);
	updateBrushPreview();
}

function createRemoteBrushPreview(userName, userId)
{
	const brushPreview = document.createElement("div");
	brushPreview.classList.add("brush-preview-remote");
	brushPreview.id = `brush-preview-${userId}`;
	brushPreview.style.width = `${DEFAULT_BRUSH_SIZE}px`;
	brushPreview.style.height = `${DEFAULT_BRUSH_SIZE}px`;

	const nameTag = document.createElement("span");
	nameTag.classList.add("name-tag");
	nameTag.textContent = userName;
	nameTag.style.top = `${DEFAULT_BRUSH_SIZE}px`;
	brushPreview.append(nameTag);

	document.body.appendChild(brushPreview);
}

function deleteRemoteBrushPreview(userId)
{
	const brushPreview = document.getElementById(`brush-preview-${userId}`);
	document.body.removeChild(brushPreview);
}

function updateBrushPreview()
{
	const size = paintTool.size;
	const blur = paintTool.blur;
	const color = paintTool.color;
	const style = paintTool.style;

	const colorPreview = document.querySelector(".color-preview");
	colorPreview.style.background = color;

	const brushPreview = document.querySelector("#local-brush-preview");
	brushPreview.style.width = (size + blur / 2) + "px";
	brushPreview.style.height = (size + blur / 2) + "px";

	if (style == "round")
		brushPreview.style.borderRadius = "50%";
	else
		brushPreview.style.borderRadius = "0";

	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		brushPreview.style.display = "none";
		canvas.style.cursor = "text";
		document.querySelector(".text-cursor").classList.remove("hidden");
		document.querySelector(".text-cursor").style.backgroundColor = color;
		document.querySelector(".text-cursor").style.height = `${size}px`;
		updateTextCursorPos();

	} else if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"] || paintTool instanceof _tools_color_picker__WEBPACK_IMPORTED_MODULE_8__["default"] ||
		paintTool instanceof _tools_rect__WEBPACK_IMPORTED_MODULE_9__["default"] || paintTool instanceof _tools_line__WEBPACK_IMPORTED_MODULE_10__["default"] || paintTool instanceof _tools_ellipse__WEBPACK_IMPORTED_MODULE_11__["default"])
	{
		brushPreview.style.display = "none";
		canvas.style.cursor = "crosshair";
		document.querySelector(".text-cursor").classList.add("hidden");

	} else
	{
		brushPreview.style.display = "initial";
		canvas.style.cursor = "default";
		document.querySelector(".text-cursor").classList.add("hidden");
	}
}

function updateRemoteBrushPreview(userId, pos, size, color)
{
	const brushPreview = document.getElementById(`brush-preview-${userId}`);
	const canvasRect = canvas.getBoundingClientRect();
	const globalPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](canvasRect.x + pos.x, canvasRect.y + pos.y);

	brushPreview.style.visibility = "visible";
	brushPreview.style.width = `${size}px`;
	brushPreview.style.height = `${size}px`;
	brushPreview.style.left = `${globalPos.x}px`;
	brushPreview.style.top = `${globalPos.y}px`;
	brushPreview.querySelector(".name-tag").style.top = `${size}px`;
	brushPreview.querySelector(".name-tag").style.color = color;
}

// download canvas image
function saveBtnClicked(e)
{
	if (isSavingCanvas)
	{
		isSavingCanvas = false;
		return;
	}

	e.preventDefault();

	let backgroundImage = new Image();
	let image = new Image();
	let currentTarget = e.currentTarget;

	backgroundImage.onload = () =>
	{
		image.src = canvas.toDataURL("image/png");
	};

	image.onload = () =>
	{
		let tempCanvas = document.createElement("canvas");
		let tempCtx = tempCanvas.getContext("2d");
		tempCanvas.width = canvas.width;
		tempCanvas.height = canvas.height;
		tempCtx.drawImage(backgroundImage, 0, 0);
		tempCtx.drawImage(image, 0, 0);

		currentTarget.href = tempCanvas.toDataURL("image/png");
		isSavingCanvas = true;
		currentTarget.click();
	};

	backgroundImage.src = bgCanvas.toDataURL("image/png");
}

function updateDisplayedRoomUrl(fullRoomUrl, roomName)
{
	let regex = /^https?:\/\/(www\.)?/;
	let domainName = fullRoomUrl.replace(regex, "");
	domainName = domainName.replace(/\/.*$/, "");
	let displayName = `${domainName}/${roomName}`;

	if (window.innerWidth < MEDIUM_SIZE_PX)
		displayName = `${roomName}`;

	roomUrlLink.querySelector(".url-container span").innerHTML = displayName;
}

// connect to websocket
function initializeSocket()
{
	try
	{
		socket = io();

		socket.on("receiveRoomData", (fullRoomUrl, roomName, userName, roomUsers) =>
		{
			updateDisplayedRoomUrl(fullRoomUrl, roomName);
			roomUrlLink.href = fullRoomUrl;
			roomUrlLink.dataset.clipboard = fullRoomUrl;
			document.title = `SyncPaint - ${roomName}`;
			document.querySelector(".options-panel input").value = userName;
			users = roomUsers;

			// if it's the first user in a room set their background to white instead of default transparent
			if (users.length == 0 && isFirstJoin)
				fillBackground();

			isFirstJoin = false;
			users.forEach(user => createRemoteBrushPreview(user.name, user.id));
		});

		socket.on("userJoin", (userName, userId) =>
		{
			notificationSystem.add(new _notification_notification__WEBPACK_IMPORTED_MODULE_12__["default"](`User ${userName} has joined`));
			users.push({id: userId, name: userName});
			createRemoteBrushPreview(userName, userId);
		});

		socket.on("userLeave", (userName, userId) =>
		{
			notificationSystem.add(new _notification_notification__WEBPACK_IMPORTED_MODULE_12__["default"](`User ${userName} has left`));
			users.splice(users.findIndex(user => user.id == userId), 1);
			deleteRemoteBrushPreview(userId);
		});

		socket.on("draw", drawingData =>
		{
			draw(drawingData);
		});

		socket.on("canvasRequest", () =>
		{
			socket.emit("receiveCanvas", canvas.toDataURL("image/png"), canvas.width, canvas.height);
		});

		socket.on("backgroundCanvasRequest", () =>
		{
			socket.emit("receiveBackgroundCanvas", bgCanvas.toDataURL("image/png"));
		});

		socket.on("receiveCanvas", (canvasData, width, height) =>
		{
			setCanvasSize({width: width, height: height});
			loadCanvasData(ctx, canvasData);
		});

		socket.on("receiveCanvasSize", (width, height) =>
		{
			setCanvasSize({width: width, height: height});
		});

		socket.on("receiveBackgroundCanvas", bgCanvasData =>
		{
			loadCanvasData(bgCtx, bgCanvasData);
		});

		socket.on("backgroundClear", () =>
		{
			bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		});

		socket.on("setAdmin", isAdmin =>
		{
			const adminSettings = document.querySelector("#admin-settings");
			if (isAdmin == true)
			{
				if (adminSettings.classList.contains("hidden"))
					adminSettings.classList.remove("hidden");
			} else
			{
				if (!adminSettings.classList.contains("hidden"))
					adminSettings.classList.add("hidden");
			}
		});

		socket.on("cursorPosition", (userId, pos, size, color) =>
		{
			if (!showRemoteCursors)
				return;

			updateRemoteBrushPreview(userId, pos, size, color);
		});

		socket.on("loadImage", (dataImg, left, top, w, h) =>
		{
			loadInsertedImage(ctx, dataImg, left, top, w, h);
		})

	} catch (error)
	{
		console.error("ERROR: can't connect to server");
	}
}

function brushSizeBtnClicked(e)
{
	e.preventDefault();

	if (brushSizeMenu.style.visibility == "visible")
	{
		brushSizeMenu.style.visibility = "hidden";
	} else
	{
		brushSizeMenu.style.visibility = "visible";

		var rect = brushSizeMenu.getBoundingClientRect();
		var parentRect = brushSizeMenu.parentElement.getBoundingClientRect();
		var posX = parentRect.left + (parentRect.width / 2) - (rect.width / 2);

		if (posX < 0)
			posX = 0;

		brushSizeMenu.style.left = posX + "px";
	}
}

function addImage()
{
	imageSelectionModal.hide();
	termDrawing = isDrawing; // stored intermediate value of isDrawing
	isDrawing = false;
	isInserting = true;
	imagePreview = document.getElementById("image-preview");
	rectImage.startX = 30;
	rectImage.startY = 50;
	rectImage.w = 150;
	rectImage.h = 200;
	drawInsertedImage();
}

function drawInsertedImage ()
{
	insertedImageCtx.drawImage(imagePreview, rectImage.startX, rectImage.startY, rectImage.w, rectImage.h);

	insertedImageCtx.moveTo(rectImage.startX, rectImage.startY);
	insertedImageCtx.lineTo(rectImage.startX + rectImage.w, rectImage.startY);
	insertedImageCtx.stroke();
	insertedImageCtx.moveTo(rectImage.startX + rectImage.w, rectImage.startY);
	insertedImageCtx.lineTo(rectImage.startX + rectImage.w, rectImage.startY + rectImage.h);
	insertedImageCtx.stroke();
	insertedImageCtx.moveTo(rectImage.startX + rectImage.w, rectImage.startY + rectImage.h);
	insertedImageCtx.lineTo(rectImage.startX, rectImage.startY + rectImage.h);
	insertedImageCtx.stroke();
	insertedImageCtx.moveTo(rectImage.startX, rectImage.startY + rectImage.h);
	insertedImageCtx.lineTo(rectImage.startX, rectImage.startY);
	insertedImageCtx.stroke();

	insertedImageCtx.beginPath();
	insertedImageCtx.arc(rectImage.startX, rectImage.startY, closeEnough, 0, 2 * Math.PI);
	insertedImageCtx.stroke();
	insertedImageCtx.beginPath();
	insertedImageCtx.arc(rectImage.startX + rectImage.w, rectImage.startY, closeEnough, 0, 2 * Math.PI);
	insertedImageCtx.stroke();
	insertedImageCtx.beginPath();
	insertedImageCtx.arc(rectImage.startX, rectImage.startY + rectImage.h, closeEnough, 0, 2 * Math.PI);
	insertedImageCtx.stroke();
	insertedImageCtx.beginPath();
	insertedImageCtx.arc(rectImage.startX + rectImage.w, rectImage.startY + rectImage.h, closeEnough, 0, 2 * Math.PI);
	insertedImageCtx.stroke();
}

function settingsBtnClicked(e)
{
	e.preventDefault();

	const panel = document.querySelector(".options-panel");
	if (panel.style.visibility == "visible")
	{
		panel.style.visibility = "hidden";
	} else
	{
		panel.style.visibility = "visible";

		const rect = panel.getBoundingClientRect();
		const parentRect = panel.parentElement.getBoundingClientRect();
		let posX = parentRect.left + (parentRect.width / 2) - (rect.width / 2);

		if (posX + rect.width > window.innerWidth)
			posX = window.innerWidth - rect.width;

		panel.style.left = `${posX}px`;
	}
}

// name changed by user
function userNameChanged(e)
{
	socket.emit("userNameChange", e.target.value);
	const cookieMaxAge = 60*60*24*30;
	document.cookie = `userName=${e.target.value}; max-age=${cookieMaxAge}`;
}

function windowResized()
{
	document.querySelector(".options-panel").style.visibility = "hidden";
	brushSizeMenu.style.visibility = "hidden";

	// there are two size sliders but only one is displayed at a time
	// which slider is displayed depends on window size
	// we don't know if any of them just became visible/invisible so update both with every window resize
	document.querySelectorAll(".size-slider").forEach((slider) =>
	{
		slider.update(null, paintTool.size);
	});

	repositionCanvas();
	updateTextCursorPos();
}

function windowMouseMoved(e)
{
	if (lastSelectedSlider)
		lastSelectedSlider.update(e);
}

function keyPressed(e)
{
	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		if (e.key == "Enter")
		{
			let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingEndPos.x, drawingStartPos.y + paintTool.size);
			updateDrawingPos(newPos, null);
		} else
		{
			const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool, e.key);
			draw(drawingData);
			socket.emit("draw", drawingData);
			let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingStartPos.x + ctx.measureText(e.key).width, drawingStartPos.y);
			updateDrawingPos(newPos, null);
		}
	}
}

// ask user for confirmation when they try to leave the page
function beforeWindowUnloaded(e)
{
	e.preventDefault();
	e.returnValue = "";
}

// user edited canvas size input
function canvasSizeSettingChanged(e)
{
	const applyBtn = document.querySelector("#canvas-size-apply");
	if (applyBtn.classList.contains("disabled"))
		applyBtn.classList.remove("disabled");

	applyBtn.disabled = false;
}

function applyCanvasSize(e)
{
	const applyBtn = document.querySelector("#canvas-size-apply");
	if (!applyBtn.classList.contains("disabled"))
		applyBtn.classList.add("disabled");

	applyBtn.disabled = true;
	let width = Math.round(document.querySelector("#canvas-width").value);
	let height = Math.round(document.querySelector("#canvas-height").value);
	setCanvasSize({width: width, height: height});
	socket.emit("setCanvasSize", width, height);
}

function sendCursorPosition()
{
	if (cursorMoved)
	{
		let size = paintTool.size;
		if (paintTool instanceof _tools_fill__WEBPACK_IMPORTED_MODULE_7__["default"])
			size = 1;

		socket.emit("cursorPosition", cursorPosition, size, paintTool.color);
		cursorMoved = false;
	}
}

function textPasted(e)
{
	if (paintTool instanceof _tools_text__WEBPACK_IMPORTED_MODULE_6__["default"])
	{
		let clipboardData = e.clipboardData || window.clipboardData;
		let pastedData = clipboardData.getData("Text");

		if (pastedData.length <= 0)
			return;

		let rows = pastedData.split(/\n/g);
		rows.forEach((row, index) =>
		{
			if (row.length > 0)
			{
				const drawingData = new _models_drawing_data__WEBPACK_IMPORTED_MODULE_14__["default"](drawingStartPos, drawingEndPos, paintTool, row);
				draw(drawingData);
				socket.emit("draw", drawingData);
				let newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingStartPos.x + ctx.measureText(row).width, drawingStartPos.y);
				updateDrawingPos(newPos, null);

				if (index != rows.length - 1)
				{
					newPos = new _models_vector__WEBPACK_IMPORTED_MODULE_16__["default"](drawingEndPos.x, drawingStartPos.y + paintTool.size);
					updateDrawingPos(newPos, null);
				}
			}
		});
	}
}

function updateDrawingPos(startPos, endPos)
{
	if (startPos != null)
	{
		if (startPos.x > canvas.width)
			startPos.x = canvas.width;

		if (startPos.y > canvas.height)
			startPos.y = canvas.height;

		drawingStartPos = startPos;
	}

	if (endPos != null)
	{
		if (endPos.x > canvas.width)
			endPos.x = canvas.width;

		if (endPos.y > canvas.height)
			endPos.y = canvas.height;

		drawingEndPos = endPos;
	}

	updateTextCursorPos();
}

function updateTextCursorPos()
{
	const textCursor = document.querySelector(".text-cursor");
	const textCursorRect = textCursor.getBoundingClientRect();
	textCursor.style.left = `${drawingStartPos.x + canvas.offsetLeft}px`;
	textCursor.style.top = `${(drawingStartPos.y + canvas.offsetTop) - textCursorRect.height}px`;
}

function fillBackground()
{
	bgCtx.fillStyle = "#ffffff";
	bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
	socket.emit("receiveBackgroundCanvasAll", bgCanvas.toDataURL("image/png"));
}

function initSizeSliders()
{
	document.querySelectorAll(".size-slider").forEach((slider) =>
	{
		slider.update(null, DEFAULT_BRUSH_SIZE);
		slider.addEventListener("change", (e) =>
		{
			let size = Number(e.target.getValue());
			sizeValueSpan.innerHTML = size + "px";
			paintTool.setSize(size);
			updateBrushPreview();
		});
	});
}

window.addEventListener("load", () =>
{
	canvas = document.querySelector("#drawArea");
	if (!canvas)
		return;

	ctx = canvas.getContext("2d");
	bgCanvas = document.querySelector("#bgCanvas");
	bgCtx = bgCanvas.getContext("2d");
	shapePreviewCanvas = document.querySelector("#shapePreview");
	shapePreviewCtx = shapePreviewCanvas.getContext("2d");
	insertedImageCanvas = document.querySelector("#insertedImagePreview")
	insertedImageCtx = insertedImageCanvas.getContext("2d");

	roomUrlLink = document.querySelector("#room-url");
	const saveBtn = document.querySelector("#save");
	colorSelector = document.querySelector("#color-selector");
	const brushSizeBtn = document.querySelector(".brush-size");
	brushSizeMenu = document.querySelector(".brush-size-menu");
	sizeValueSpan = document.querySelector(".size-value");
	imageSelectionModal = new _components_image_modal_image_modal__WEBPACK_IMPORTED_MODULE_15__["default"]("image-modal");
	const settingsBtn = document.querySelector("#settings");
	const nameInput = document.querySelector(".options-panel input");

	window.addEventListener("resize", windowResized);
	window.addEventListener("mouseup", windowMouseUp);
	window.addEventListener("touchend", windowMouseUp);
	window.addEventListener("mousemove", windowMouseMoved);
	window.addEventListener("keypress", keyPressed);
	window.addEventListener("beforeunload", beforeWindowUnloaded);
	window.addEventListener("paste", textPasted);
	canvas.addEventListener("mousemove", canvasMouseMoved);
	canvas.addEventListener("touchmove", canvasMouseMoved);
	canvas.addEventListener("mouseover", canvasMouseOver);
	canvas.addEventListener("mouseout", canvasMouseOut);
	canvas.addEventListener("mousedown", canvasMouseDown);
	canvas.addEventListener("touchstart", canvasTouchStart);
	canvas.addEventListener("touchend", canvasTouchEnded);
	roomUrlLink.addEventListener("click", roomUrlClicked);
	saveBtn.addEventListener("click", saveBtnClicked);
	colorSelector.addEventListener("change", paintColorChanged);
	brushSizeBtn.addEventListener("click", brushSizeBtnClicked);
	settingsBtn.addEventListener("click", settingsBtnClicked);
	nameInput.addEventListener("change", userNameChanged);
	document.querySelector("#canvas-width").addEventListener("input", canvasSizeSettingChanged);
	document.querySelector("#canvas-height").addEventListener("input", canvasSizeSettingChanged);
	document.querySelector("#canvas-size-apply").addEventListener("click", applyCanvasSize);

	setInterval(sendCursorPosition, NET_CURSOR_UPDATE_INTERVAL_MS);

	imageSelectionModal.onAddImageBtnClick(addImage);

	initializeSocket();
	setCanvasSize(defaultCanvasSize());
	createLocalBrushPreview();

	Object(_components__WEBPACK_IMPORTED_MODULE_18__["default"])();

	bgCtx.fillStyle = "#ffffff";
	bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

	toolbar = document.querySelector("#toolbar");
	toolbar.initButtons(DEFAULT_PAINT_TOOL, DEFAULT_PAINT_COLOR);
	toolbar.addEventListener("toolSwitch", paintToolSwitched);
	toolbar.addEventListener("colorSwitch", paintColorChanged);
	toolbar.addEventListener("ImgSettingsOpen", () => imageSelectionModal.toggle());
	toolbar.addEventListener("paste", textPasted);

	initSizeSliders();
	document.querySelectorAll("ui-slider").forEach((slider) =>
	{
		const sliderUsed = () =>
		{
			lastSelectedSlider = slider
		};

		slider.addEventListener("mousedown", sliderUsed);
		slider.addEventListener("touchstart", sliderUsed);
	});
});

/***/ }),

/***/ "./public/js/models/color.js":
/*!***********************************!*\
  !*** ./public/js/models/color.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Color
{
	constructor(r, g, b, a=255)
	{
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	static fromHex(hexString)
	{
		const redMatches = hexString.match(/^#?([a-f0-9]{2})/);
		const greenMatches = hexString.match(/^#.{2}?([a-f0-9]{2})/);
		const blueMatches = hexString.match(/^#.{4}?([a-f0-9]{2})/);
		const red = parseInt(redMatches[1], 16);
		const green = parseInt(greenMatches[1], 16);
		const blue = parseInt(blueMatches[1], 16);

		return new Color(red, green, blue);
	}

	toHex()
	{
		let red = this.r.toString(16);
		let green = this.g.toString(16);
		let blue = this.b.toString(16);

		if (red.length == 1)
			red = "0" + red;

		if (green.length == 1)
			green = "0" + green;

		if (blue.length == 1)
			blue = "0" + blue;

		return `#${red}${green}${blue}`;
	}

	equals(color)
	{
		return this.r == color.r && this.g == color.g && this.b == color.b;
	}

	equalsRgba(color)
	{
		return this.r == color.r && this.g == color.g && this.b == color.b && this.a == color.a;
	}

	toArray()
	{
		return [this.r, this.g, this.b, this.a];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

/***/ "./public/js/models/drawing-data.js":
/*!******************************************!*\
  !*** ./public/js/models/drawing-data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// drawing data sent through the websocket
class DrawingData
{
	constructor(startPos, endPos, tool, text="")
	{
		this.startPos = startPos;
		this.endPos = endPos;
		this.tool = tool;
		this.text = text;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (DrawingData);

/***/ }),

/***/ "./public/js/models/tool-type.js":
/*!***************************************!*\
  !*** ./public/js/models/tool-type.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ToolType =
{
	BRUSH: 0,
	PAINT_ROLLER: 1,
	PENCIL: 2,
	ERASER: 3,
	TEXT: 4,
	FILL: 5,
	COLOR_PICKER: 6,
	RECT: 7,
	LINE: 8,
	ELLIPSE: 9
};

/* harmony default export */ __webpack_exports__["default"] = (ToolType);

/***/ }),

/***/ "./public/js/models/vector.js":
/*!************************************!*\
  !*** ./public/js/models/vector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Vector
{
	constructor(x=0, y=0)
	{
		this.x = x;
		this.y = y;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),

/***/ "./public/js/notification/notification-system.js":
/*!*******************************************************!*\
  !*** ./public/js/notification/notification-system.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class NotificationSystem
{
	constructor()
	{
		this.notifications = [];
		this.notificationVerticalSpace = 80;
		this.notificationBottomMargin = 10;
	}

	add(notification)
	{
		this.notifications.forEach(n =>
		{
			const offsetTop = n.getElement().offsetTop;
			const newBottomOffset = (window.innerHeight - offsetTop) + this.notificationBottomMargin;
			n.getElement().style.bottom = newBottomOffset + "px";

			const maxNotifications = Math.floor((window.innerHeight - document.body.offsetHeight) / this.notificationVerticalSpace);
			const numNotifications = this.notifications.length + 1; // existing notifications + the new one we create

			if (numNotifications > maxNotifications)
				this.removeOldest();
		});

		// remove after fade animation is finished
		notification.getElement().addEventListener("animationend", () =>
		{
			this.remove(notification);
		});

		this.notifications.push(notification);
	}

	remove(notification)
	{
		let element = notification.getElement();
		if (element && document.body.contains(element))
			document.body.removeChild(element);

		this.notifications = this.notifications.filter(item => item != notification);
	}

	removeOldest()
	{
		let oldestNotification = this.notifications.reduce((prev, cur) =>
			prev.dateCreated < cur.dateCreated ? prev : cur);
		this.remove(oldestNotification);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationSystem);

/***/ }),

/***/ "./public/js/notification/notification.js":
/*!************************************************!*\
  !*** ./public/js/notification/notification.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Notification
{
	constructor(text, lifeTimeMs=5000)
	{
		this.text = text;
		this.dateCreated = Date.now();
		this.element = document.createElement("div");
		this.element.classList.add("notification");
		this.element.style.animation = `notif ${lifeTimeMs}ms`;

		const textNode = document.createTextNode(text); // this will escape HTML so it's safe to use with user names
		this.element.appendChild(textNode);
		document.body.appendChild(this.element);
	}

	getElement()
	{
		return this.element;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./public/js/tools/brush.js":
/*!**********************************!*\
  !*** ./public/js/tools/brush.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Brush extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].BRUSH, "round", size, color);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Brush);

/***/ }),

/***/ "./public/js/tools/color-picker.js":
/*!*****************************************!*\
  !*** ./public/js/tools/color-picker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/color */ "./public/js/models/color.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");




class ColorPicker extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_2__["default"].COLOR_PICKER, "round", size, color);
	}

	getPixelColor(ctx, bgCtx, posX, posY)
	{
		let imageData = ctx.getImageData(posX, posY, 1, 1);

		if (imageData.data[3] != 0)
		{
			return new _models_color__WEBPACK_IMPORTED_MODULE_1__["default"](imageData.data[0], imageData.data[1], imageData.data[2]).toHex();
		} else // if pixel is transparent return background color
		{
			imageData = bgCtx.getImageData(posX, posY, 1, 1)
			return new _models_color__WEBPACK_IMPORTED_MODULE_1__["default"](imageData.data[0], imageData.data[1], imageData.data[2]).toHex();
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./public/js/tools/ellipse.js":
/*!************************************!*\
  !*** ./public/js/tools/ellipse.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Ellipse extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color, circle=false)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].ELLIPSE, "butt", size, color, 0);
		this.circle = circle;
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		ctx.beginPath();

		if (this.circle)
		{
			let radius = Math.max(Math.abs(endPosX - posX), Math.abs(endPosY - posY)) / 2;
			let offsetDirectionX = Math.sign(endPosX - posX);
			let offsetDirectionY = Math.sign(endPosY - posY);
			let centerX = posX + radius * offsetDirectionX;
			let centerY = posY + radius * offsetDirectionY;

			ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		} else
		{
			let centerX = (posX + endPosX) / 2;
			let centerY = (posY + endPosY) / 2;
			let radiusX = Math.abs(centerX - posX);
			let radiusY = Math.abs(centerY - posY);

			ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
		}

		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Ellipse);

/***/ }),

/***/ "./public/js/tools/eraser.js":
/*!***********************************!*\
  !*** ./public/js/tools/eraser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Eraser extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].ERASER, "round", size, color, 0, "destination-out");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Eraser);

/***/ }),

/***/ "./public/js/tools/fill.js":
/*!*********************************!*\
  !*** ./public/js/tools/fill.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/color */ "./public/js/models/color.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");




class Fill extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_2__["default"].FILL, "round", size, color);
	}

	static getImageDataOffset(posX, posY, imageData)
	{
		return (posY * imageData.width + posX) * 4;
	}

	static getPixelColor(posX, posY, imageData)
	{
		const offset = Fill.getImageDataOffset(posX, posY, imageData);
		const arr = imageData.data.slice(offset, offset + 4);
		return [arr[0], arr[1], arr[2], arr[3]];
	}

	static setPixelColor(posX, posY, imageData, color)
	{
		const offset = Fill.getImageDataOffset(posX, posY, imageData);
		imageData.data[offset] = color[0];
		imageData.data[offset + 1] = color[1];
		imageData.data[offset + 2] = color[2];
		imageData.data[offset + 3] = 255;
	}

	static areColorsEqual(color1, color2)
	{
		return color1[0] == color2[0]
			&& color1[1] == color2[1]
			&& color1[2] == color2[2]
			&& color1[3] == color2[3];
	}

	// tolerance is needed to fill pencil drawn shapes because of canvas bug in browsers:
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1666100
	// it still doesn't fill brush drawn shapes because of its shadow
	static areColorsSimilar(color1, color2)
	{
		const tolerance = 6;
		const difference = Math.abs(color1[0] - color2[0]) + Math.abs(color1[1] - color2[1])
						+ Math.abs(color1[2] - color2[2]) + Math.abs(color1[3] - color2[3]);

		return difference <= tolerance;
	}

	static pixelNeedsUpdate(x, y, width, height, imageData, curColor, colorToReplace)
	{
		if (x < 0 || y < 0 || x >= width || y >= height)
			return false;

		let pixelColor = this.getPixelColor(x, y, imageData);
		if (this.areColorsSimilar(pixelColor, curColor) || !this.areColorsSimilar(pixelColor, colorToReplace))
			return false;

		return true;
	}

	static fillPixels(width, height, posX, posY, imageData, curColor, colorToReplace)
	{
		let pixels = new Uint32Array(width*height*8);
		pixels[0] = posX;
		pixels[1] = posY;
		let queueLength = 2;

		for (let i = 0; i < pixels.length - 1; i+=2)
		{
			if (i > queueLength)
				break;

			if (this.pixelNeedsUpdate(pixels[i], pixels[i+1], width, height, imageData, curColor, colorToReplace))
			{
				this.setPixelColor(pixels[i], pixels[i+1], imageData, curColor);

				pixels[queueLength] = pixels[i] - 1; // go left
				pixels[queueLength+1] = pixels[i+1];
				queueLength += 2;

				pixels[queueLength] = pixels[i];
				pixels[queueLength+1] = pixels[i+1] - 1; // go up
				queueLength += 2;

				pixels[queueLength] = pixels[i] + 1; // go right
				pixels[queueLength+1] = pixels[i+1];
				queueLength += 2;

				pixels[queueLength] = pixels[i];
				pixels[queueLength+1] = pixels[i+1] + 1; // go down
				queueLength += 2;
			}
		}
	}

	getFillData(posX, posY, canvasWidth, canvasHeight, imageData)
	{
		if (posX < 0 || posX > canvasWidth)
			return null;

		if (posY < 0 || posY > canvasHeight)
			return null;

		let curColor = _models_color__WEBPACK_IMPORTED_MODULE_1__["default"].fromHex(this.color).toArray();
		let colorToReplace = Fill.getPixelColor(posX, posY, imageData);

		if (Fill.areColorsEqual(curColor, colorToReplace))
			return null;

		return [
			curColor,
			colorToReplace
		];
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Fill);

/***/ }),

/***/ "./public/js/tools/line.js":
/*!*********************************!*\
  !*** ./public/js/tools/line.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Line extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].LINE, "square", size, color, 0);
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		let startPosX = posX;
		let startPosY = posY;

		if (endPosX < posX)
			startPosX = endPosX;

		if (endPosY < posY)
			startPosY = endPosY;

		ctx.beginPath();
		ctx.moveTo(posX, posY);
		ctx.lineTo(endPosX, endPosY);
		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./public/js/tools/paint-roller.js":
/*!*****************************************!*\
  !*** ./public/js/tools/paint-roller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class PaintRoller extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].PAINT_ROLLER, "butt", size, color, 1);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (PaintRoller);

/***/ }),

/***/ "./public/js/tools/pencil.js":
/*!***********************************!*\
  !*** ./public/js/tools/pencil.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Pencil extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].PENCIL, "round", size, color, 0);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Pencil);

/***/ }),

/***/ "./public/js/tools/rect.js":
/*!*********************************!*\
  !*** ./public/js/tools/rect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Rect extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color, square=false)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].RECT, "butt", size, color, 0);
		this.square = square;
	}

	draw(ctx, posX, posY, endPosX, endPosY)
	{
		ctx.beginPath();

		if (this.square)
		{
			const size = Math.max(Math.abs(endPosX - posX), Math.abs(endPosY - posY));
			const offsetDirectionX = Math.sign(endPosX - posX);
			const offsetDirectionY = Math.sign(endPosY - posY);
			const width = size * offsetDirectionX;
			const height = size * offsetDirectionY;

			ctx.rect(posX, posY, width, height);

		} else
		{
			const startPosX = Math.min(posX, endPosX);
			const startPosY = Math.min(posY, endPosY);
			const width = Math.abs(endPosX - posX);
			const height = Math.abs(endPosY - posY);

			ctx.rect(startPosX, startPosY, width, height);
		}

		ctx.stroke();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Rect);

/***/ }),

/***/ "./public/js/tools/text.js":
/*!*********************************!*\
  !*** ./public/js/tools/text.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool */ "./public/js/tools/tool.js");
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");



class Text extends _tool__WEBPACK_IMPORTED_MODULE_0__["default"]
{
	constructor(size, color)
	{
		super(_models_tool_type__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT, "round", size, color, 0);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./public/js/tools/tool-from-type.js":
/*!*******************************************!*\
  !*** ./public/js/tools/tool-from-type.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_tool_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/tool-type */ "./public/js/models/tool-type.js");
/* harmony import */ var _brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brush */ "./public/js/tools/brush.js");
/* harmony import */ var _paint_roller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paint-roller */ "./public/js/tools/paint-roller.js");
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pencil */ "./public/js/tools/pencil.js");
/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eraser */ "./public/js/tools/eraser.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./public/js/tools/text.js");
/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fill */ "./public/js/tools/fill.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-picker */ "./public/js/tools/color-picker.js");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rect */ "./public/js/tools/rect.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line */ "./public/js/tools/line.js");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ellipse */ "./public/js/tools/ellipse.js");












const toolFromType = (toolType, size, color) =>
{
	switch (toolType)
	{
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].BRUSH:
			return new _brush__WEBPACK_IMPORTED_MODULE_1__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].PAINT_ROLLER:
			return new _paint_roller__WEBPACK_IMPORTED_MODULE_2__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].PENCIL:
			return new _pencil__WEBPACK_IMPORTED_MODULE_3__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].ERASER:
			return new _eraser__WEBPACK_IMPORTED_MODULE_4__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].TEXT:
			return new _text__WEBPACK_IMPORTED_MODULE_5__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].FILL:
			return new _fill__WEBPACK_IMPORTED_MODULE_6__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].COLOR_PICKER:
			return new _color_picker__WEBPACK_IMPORTED_MODULE_7__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].RECT:
			return new _rect__WEBPACK_IMPORTED_MODULE_8__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].LINE:
			return new _line__WEBPACK_IMPORTED_MODULE_9__["default"](size, color);
		case _models_tool_type__WEBPACK_IMPORTED_MODULE_0__["default"].ELLIPSE:
			return new _ellipse__WEBPACK_IMPORTED_MODULE_10__["default"](size, color);
		default:
			console.error("wrong tool type:", toolType);
			return null;
	}
};

/* harmony default export */ __webpack_exports__["default"] = (toolFromType);

/***/ }),

/***/ "./public/js/tools/tool.js":
/*!*********************************!*\
  !*** ./public/js/tools/tool.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Tool
{
	constructor(type, style, size, color, blur=3, operation="source-over")
	{
		this.type = type;
		this.style = style;
		this.size = size;
		this.color = color;
		this.blur = blur;
		this.operation = operation;
	}

	getSize()
	{
		return this.size;
	}

	setSize(size)
	{
		this.size = size;
	}

	getColor()
	{
		return this.color;
	}

	setColor(color)
	{
		this.color = color;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Tool);

/***/ }),

/***/ "./public/scss/draw.scss":
/*!*******************************!*\
  !*** ./public/scss/draw.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/scss/main.scss":
/*!*******************************!*\
  !*** ./public/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLmVvdCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtcmVndWxhci00MDAuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuZW90Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAud29mZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXRvLWZvbnQvY3NzL2xhdG8tZm9udC5jc3M/NTZmZCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9jb21wb25lbnQvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL2ltYWdlLW1vZGFsL2ltYWdlLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5zY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZmlsbC53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21vZGVscy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbW9kZWxzL2RyYXdpbmctZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbW9kZWxzL3Rvb2wtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbW9kZWxzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2JydXNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2VsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL2VyYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdG9vbHMvcGFpbnQtcm9sbGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy9wZW5jaWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL3JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Rvb2xzL3Rvb2wtZnJvbS10eXBlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90b29scy90b29sLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zY3NzL2RyYXcuc2Nzcz83YmM0Iiwid2VicGFjazovLy8uL3B1YmxpYy9zY3NzL21haW4uc2Nzcz82NDdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7O0FDakNuQix1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wdWJsaWMvanMvbWFpbi5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzc2MzA0ODNkZDRiMGM0ODYzOWQyYWM1NGE4OTRiNDUwLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzBiYjQyODQ1OWM4ZWNmYTYxYjIyYTAzZGVmMTcwNmU2LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzFmNzc3MzljYTlmZjIxODhiNTM5YzM2ZjMwZmZhMmJlLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzcxMjRlYjUwZmM4MjI3Yzc4MjY5ZjJkOTk1NjM3ZmY1LndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3ZWJmb250cy9mMGY4MjMwMTE2OTkyZTUyMTUyNjA5N2EyOGY1NDA2Ni53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzEwNDJlOGNhMWNlODIxNTE4YTJkM2U3MDU1NDEwODM5LmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzM3NmMxZjk3ZjY1NTNkZWExY2E5YjNmOTA4MTg4OWJkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzYwNWVkNzkyNmNmMzlhMmFkNWVjMmQxZjlkMzkxZDNkLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIndlYmZvbnRzLzlmZTVhMTdjOGFiMDM2ZDIwZTZjNWJhM2ZkMmFjNTExLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJ3ZWJmb250cy9lOGE0MjdlMTVjYzUwMmJlZjk5Y2ZkNzIyYjM3ZWE5OC53b2ZmMlwiOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJzbGlkZXJcXFwiIG9uY29udGV4dG1lbnU9XFxcInJldHVybiBmYWxzZTtcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInNsaWRlci1mZ1xcXCI+XFxyXFxuXFx0XFx0PHNwYW4gY2xhc3M9XFxcInRleHRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidmFsdWUtdGV4dFxcXCI+PC9zcGFuPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInNsaWRlci1iZ1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGFzaWRlIGNsYXNzPVxcXCJ0b29sYmFyXFxcIj5cXHJcXG5cXHQ8dWw+XFxyXFxuXFx0XFx0PGxpPjxhIGNsYXNzPVxcXCJsb2dvIHRvb2xiYXItbG9nb1xcXCIgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+PC9hPjwvbGk+XFxyXFxuXFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJUb29sc1xcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS10b29sYm94IHNlcGFyYXRvclxcXCI+PC9pPjwvbGk+XFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJCcnVzaFxcXCIgZGF0YS10b29sbmFtZT1cXFwiQlJVU0hcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtYnJ1c2ggYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcclxcblxcdFxcdDxsaSB0aXRsZT1cXFwiUGFpbnQgUm9sbGVyXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJQQUlOVF9ST0xMRVJcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGFpbnQtcm9sbGVyIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXHJcXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIlBlbmNpbFxcXCIgZGF0YS10b29sbmFtZT1cXFwiUEVOQ0lMXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXBlbmNpbC1hbHQgYnRuLXRvb2xcXFwiPjwvaT48L2xpPlxcclxcblxcdFxcdDxsaSB0aXRsZT1cXFwiRXJhc2VyXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJFUkFTRVJcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtZXJhc2VyIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXHJcXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIlRleHRcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIlRFWFRcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtZm9udCBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJMaW5lXFxcIiBkYXRhLXRvb2xuYW1lPVxcXCJMSU5FXFxcIj48c3BhbiBjbGFzcz1cXFwiYnRuLXRvb2wgbGluZS1pY29uXFxcIj4vPC9zcGFuPjwvbGk+XFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJSZWN0YW5nbGVcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIlJFQ1RcXFwiPjxpIGNsYXNzPVxcXCJmYXIgZmEtc3F1YXJlIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXHJcXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkVsbGlwc2VcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkVMTElQU0VcXFwiPjxpIGNsYXNzPVxcXCJmYXIgZmEtY2lyY2xlIGJ0bi10b29sXFxcIj48L2k+PC9saT5cXHJcXG5cXHRcXHQ8bGkgdGl0bGU9XFxcIkZpbGxcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkZJTExcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtZmlsbCBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJDb2xvciBQaWNrZXJcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkNPTE9SX1BJQ0tFUlxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1leWUtZHJvcHBlciBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxyXFxuXFx0XFx0PGxpIHRpdGxlPVxcXCJBZGQgSW1hZ2VcXFwiIGRhdGEtdG9vbG5hbWU9XFxcIkFERF9JTUFHRVxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1pbWFnZSBidG4tdG9vbFxcXCI+PC9pPjwvbGk+XFxyXFxuXFxyXFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJjb2xvci1zZXBhcmF0b3JcXFwiIHRpdGxlPVxcXCJDb2xvcnNcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGFsZXR0ZSBzZXBhcmF0b3JcXFwiPjwvaT48L2xpPlxcclxcblxcdFxcdDxsaSBjbGFzcz1cXFwiYnRuLWNvbG9yXFxcIiB0aXRsZT1cXFwiQmxhY2tcXFwiIGRhdGEtY29sb3I9XFxcIiMwMDAwMDBcXFwiPjwvbGk+XFxyXFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJidG4tY29sb3JcXFwiIHRpdGxlPVxcXCJSZWRcXFwiIGRhdGEtY29sb3I9XFxcIiNkZjM5MzlcXFwiPjwvbGk+XFxyXFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJidG4tY29sb3JcXFwiIHRpdGxlPVxcXCJHcmVlblxcXCIgZGF0YS1jb2xvcj1cXFwiIzNmZTIzZlxcXCI+PC9saT5cXHJcXG5cXHRcXHQ8bGkgY2xhc3M9XFxcImJ0bi1jb2xvclxcXCIgdGl0bGU9XFxcIkJsdWVcXFwiIGRhdGEtY29sb3I9XFxcIiMxYjg2ZWJcXFwiPjwvbGk+XFxyXFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJidG4tY29sb3JcXFwiIHRpdGxlPVxcXCJXaGl0ZVxcXCIgZGF0YS1jb2xvcj1cXFwiI2ZmZmZmZlxcXCI+PC9saT5cXHJcXG5cXHQ8L3VsPlxcclxcbjwvYXNpZGU+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZjUxMTFiNzE5ZDI0Mzk0NmNmMDQ0MzE3YWRkNjQzZDAucG5nXCI7IiwiaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXJcIjtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0e3NlbGVjdG9yOiBcInVpLXNsaWRlclwiLCBjb21wb25lbnQ6IFNsaWRlcn0sXHJcblx0e3NlbGVjdG9yOiBcInVpLXRvb2xiYXJcIiwgY29tcG9uZW50OiBUb29sYmFyfVxyXG5dO1xyXG5cclxuLy8gY3JlYXRlIGN1c3RvbSBjb21wb25lbnRzXHJcbmNvbnN0IGluaXRDb21wb25lbnRzID0gKCkgPT5cclxue1xyXG5cdGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT5cclxuXHR7XHJcblx0XHRjdXN0b21FbGVtZW50cy5kZWZpbmUoY29tcG9uZW50LnNlbGVjdG9yLCBjb21wb25lbnQuY29tcG9uZW50KTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdENvbXBvbmVudHM7IiwiY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKGh0bWwsIHN0eWxlc2hlZXQ9XCJcIilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coe21vZGU6IFwib3BlblwifSk7XHJcblxyXG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRpZiAoc3R5bGVzaGVldCAhPSBcIlwiICYmIHN0eWxlc2hlZXQgIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVzaGVldC50b1N0cmluZygpO1xyXG5cdFx0XHR0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zaGFkb3dSb290LmFwcGVuZChlbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XHJcblxyXG5jbGFzcyBJbWFnZU1vZGFsIGV4dGVuZHMgTW9kYWxcclxue1xyXG5cdGNvbnN0cnVjdG9yKGlkKVxyXG5cdHtcclxuXHRcdHN1cGVyKGlkKTtcclxuXHJcblx0XHR0aGlzLmRyb3BBcmVhID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1hcmVhXCIpO1xyXG5cdFx0dGhpcy5kcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHRoaXMuaW1hZ2VEcmFnZ2VkT3ZlcihlKSk7XHJcblx0XHR0aGlzLmRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB0aGlzLmltYWdlRHJvcHBlZChlKSk7XHJcblxyXG5cdFx0dGhpcy5pbWFnZVByZXZpZXcgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wcmV2aWV3XCIpO1xyXG5cclxuXHRcdGNvbnN0IGltYWdlRmlsZUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtZmlsZS1pbnB1dFwiKTtcclxuXHRcdGltYWdlRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHRoaXMuaW1hZ2VGaWxlSW5wdXRDaGFuZ2VkKGUpKTtcclxuXHR9XHJcblxyXG5cdHNob3coKVxyXG5cdHtcclxuXHRcdHN1cGVyLnNob3coKTtcclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGUtb24tZHJvcFwiKS5mb3JFYWNoKGl0ZW0gPT5cclxuXHRcdHtcclxuXHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRyb3BBcmVhLnN0eWxlLmJvcmRlcldpZHRoID0gXCIxcHhcIjtcclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtYXJlYSBwXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0dGhpcy5pbWFnZVByZXZpZXcuc3JjID0gXCJcIjtcclxuXHRcdGlmICghdGhpcy5pbWFnZVByZXZpZXcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxyXG5cdFx0XHR0aGlzLmltYWdlUHJldmlldy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1pbWFnZVwiKS5kaXNhYmxlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRoaWRlKClcclxuXHR7XHJcblx0XHRzdXBlci5oaWRlKCk7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1maWxlLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdGltYWdlRHJhZ2dlZE92ZXIoZSlcclxuXHR7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG5cdH1cclxuXHJcblx0aW1hZ2VEcm9wcGVkKGUpXHJcblx0e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaWRlLW9uLWRyb3BcIikuZm9yRWFjaChpdGVtID0+XHJcblx0XHR7XHJcblx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWltYWdlXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpbWFnZUZpbGVJbnB1dENoYW5nZWQoZSlcclxuXHR7XHJcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaWRlLW9uLWltYWdlLWlucHV0XCIpLmZvckVhY2goaXRlbSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubG9hZEJhY2tncm91bmRJbWFnZShlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0pO1xyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWltYWdlXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvLyBsb2FkIGltYWdlIGZyb20gcHJvdmlkZWQgZmlsZSBhbmQgZGlzcGxheSBpbiBwcmV2aWV3IGFyZWFcclxuXHRsb2FkQmFja2dyb3VuZEltYWdlKGZpbGUpXHJcblx0e1xyXG5cdFx0aWYgKGZpbGUgIT0gbnVsbCAmJiBmaWxlLnR5cGUubWF0Y2goL2ltYWdlKi8pKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IChyZWFkZXJFdikgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2VQcmV2aWV3LnNyYyA9IHJlYWRlckV2LnRhcmdldC5yZXN1bHQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW1hZ2VQcmV2aWV3LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VQcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG5cdFx0XHRcdHRoaXMuZHJvcEFyZWEuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkFkZEltYWdlQnRuQ2xpY2soY2FsbGJhY2spXHJcblx0e1xyXG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjayk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGFsOyIsImNsYXNzIE1vZGFsXHJcbntcclxuXHRjb25zdHJ1Y3RvcihpZClcclxuXHR7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHR0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmhpZGUoKSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmIChlLmtleSA9PSBcIkVzY2FwZVwiICYmIHRoaXMuaXNWaXNpYmxlKVxyXG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0Ly8gY2xvc2UgbW9kYWwgd2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlIG1vZGFsIGFyZWFcclxuXHRcdFx0aWYgKGUudGFyZ2V0ID09IHRoaXMuZWxlbWVudCAmJiB0aGlzLmlzVmlzaWJsZSlcclxuXHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2hvdygpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXHJcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cclxuXHRcdHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGhpZGUoKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcclxuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG5cdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZSgpXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNWaXNpYmxlKVxyXG5cdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zaG93KCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50XCI7XHJcbmltcG9ydCBodG1sVGVtcGxhdGUgZnJvbSBcImh0bWwtbG9hZGVyIS4vc2xpZGVyLmh0bWxcIjtcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSBcIi4vc2xpZGVyLnNjc3NcIjtcclxuXHJcbmNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKGh0bWxUZW1wbGF0ZSwgc3R5bGVzaGVldCk7XHJcblxyXG5cdFx0Ly8gZGVmYXVsdCB2YWx1ZXMgZm9yIHNsaWRlciBwcm9wZXJ0aWVzXHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSAwO1xyXG5cdFx0Y29uc3QgZGVmYXVsdE1pblZhbHVlID0gMDtcclxuXHRcdGNvbnN0IGRlZmF1bHRNYXhWYWx1ZSA9IDEwO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFRleHQgPSBcIlwiO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFVuaXQgPSBcIlwiO1xyXG5cclxuXHRcdGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpKVxyXG5cdFx0XHR0aGlzLnNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcImRhdGEtbWluLXZhbHVlXCIpKVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbWluLXZhbHVlXCIsIGRlZmF1bHRNaW5WYWx1ZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcImRhdGEtbWF4LXZhbHVlXCIpKVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShcImRhdGEtbWF4LXZhbHVlXCIsIGRlZmF1bHRNYXhWYWx1ZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShcImRhdGEtdGV4dFwiKSlcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIiwgZGVmYXVsdFRleHQpO1xyXG5cclxuXHRcdGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoXCJkYXRhLXVuaXRcIikpXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS11bml0XCIsIGRlZmF1bHRVbml0KTtcclxuXHJcblx0XHRjb25zdCBzbGlkZXJGZyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1mZ1wiKTtcclxuXHRcdHNsaWRlckZnLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnRleHRcIikuaW5uZXJIVE1MID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIik7XHJcblxyXG5cdFx0dGhpcy51cGRhdGUoKTsgLy8gZHJhdyBzbGlkZXIgYmFzZWQgb24gaW5pdGlhbCB2YWx1ZXNcclxuXHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnVwZGF0ZSk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy51cGRhdGUpO1xyXG5cdH1cclxuXHJcblx0c2xpZGVyUG9zRnJvbVZhbHVlKHZhbHVlKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXhcIikpO1xyXG5cdFx0aWYgKHZhbHVlID4gMClcclxuXHRcdFx0cmV0dXJuIHZhbHVlIC8gbWF4VmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0Ly8gY2FsY3VsYXRlcyBhbmQgdXBkYXRlcyBzbGlkZXIncyB2YWx1ZSBhbmQgcG9zaXRpb25cclxuXHR1cGRhdGUoZT1udWxsLCB2YWx1ZT1udWxsKVxyXG5cdHtcclxuXHRcdGNvbnN0IG1pblZhbHVlID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1taW5cIikpO1xyXG5cdFx0Y29uc3QgbWF4VmFsdWUgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1heFwiKSk7XHJcblx0XHRjb25zdCB1bml0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVuaXRcIik7XHJcblx0XHRjb25zdCBzbGlkZXJGZyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1mZ1wiKTtcclxuXHRcdGNvbnN0IHJlY3QgPSBzbGlkZXJGZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCBuZXdTbGlkZXJQb3M7XHJcblxyXG5cdFx0aWYgKHJlY3Qud2lkdGggPT0gMCkgLy8gdGhpcyBjYW4gaGFwcGVuIHdoZW4gZWxlbWVudCBpcyBpbnZpc2libGVcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChlICE9IG51bGwpIC8vIHVwZGF0ZSBzbGlkZXIgYmFzZWQgb24gdXNlciBpbnB1dFxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbW91c2VQb3NYO1xyXG5cclxuXHRcdFx0aWYgKGUudHlwZSA9PSBcInRvdWNobW92ZVwiKVxyXG5cdFx0XHRcdG1vdXNlUG9zWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bW91c2VQb3NYID0gZS5jbGllbnRYO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVsYXRpdmVNb3VzZVBvcyA9IG1vdXNlUG9zWCAtIHJlY3QubGVmdDtcclxuXHRcdFx0bmV3U2xpZGVyUG9zID0gcmVsYXRpdmVNb3VzZVBvcyAvIHJlY3Qud2lkdGg7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSAvLyB1cGRhdGUgd2l0aCBzcGVjaWZpZWQgdmFsdWVcclxuXHRcdHtcclxuXHRcdFx0bmV3U2xpZGVyUG9zID0gdGhpcy5zbGlkZXJQb3NGcm9tVmFsdWUodmFsdWUpO1xyXG5cclxuXHRcdH0gZWxzZSAvLyB1cGRhdGUgc2xpZGVyIHVzaW5nIGN1cnJlbnQgdmFsdWUgZnJvbSBkYXRhLXZhbHVlIGF0dHJpYnV0ZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgdmFsID0gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSk7XHJcblx0XHRcdG5ld1NsaWRlclBvcyA9IHRoaXMuc2xpZGVyUG9zRnJvbVZhbHVlKHZhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbmV3VmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heChtaW5WYWx1ZSwgTWF0aC5yb3VuZChuZXdTbGlkZXJQb3MgKiBtYXhWYWx1ZSAvIHJlY3Qud2lkdGggKiByZWN0LndpZHRoKSksIG1heFZhbHVlKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xyXG5cclxuXHRcdGNvbnN0IG5ld0JnV2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChtaW5WYWx1ZSwgTWF0aC5yb3VuZChuZXdTbGlkZXJQb3MgKiByZWN0LndpZHRoKSksIHJlY3Qud2lkdGgpO1xyXG5cdFx0c2xpZGVyRmcucXVlcnlTZWxlY3RvcihcInNwYW4udmFsdWUtdGV4dFwiKS5pbm5lckhUTUwgPSBuZXdWYWx1ZSArIHVuaXQ7XHJcblx0XHRzbGlkZXJGZy5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1iZ1wiKS5zdHlsZS53aWR0aCA9IG5ld0JnV2lkdGggKyBcInB4XCI7XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcblx0fVxyXG5cclxuXHRnZXRWYWx1ZSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcclxuXHR9XHJcblxyXG5cdHNldFZhbHVlKHZhbHVlKVxyXG5cdHtcclxuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCB2YWx1ZSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVyIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMjYyNjI2OyB9XFxuICAuc2xpZGVyIC5zbGlkZXItZmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuc2xpZGVyIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyB9XFxuICAuc2xpZGVyIC5zbGlkZXItYmcge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTA2ZWFjO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4uYnJ1c2gtc2l6ZS1tZW51IC5zbGlkZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50XCI7XHJcbmltcG9ydCBodG1sVGVtcGxhdGUgZnJvbSBcImh0bWwtbG9hZGVyIS4vdG9vbGJhci5odG1sXCI7XHJcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gXCIuL3Rvb2xiYXIuc2Nzc1wiO1xyXG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uLy4uL21vZGVscy90b29sLXR5cGVcIjtcclxuXHJcbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG5cdGNvbnN0cnVjdG9yKClcclxuXHR7XHJcblx0XHRzdXBlcihodG1sVGVtcGxhdGUsIHN0eWxlc2hlZXQpO1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9vbGJhclwiKTtcclxuXHJcblx0XHQvLyB3b3JrYXJvdW5kIGZvciBwYXN0ZSBiZWluZyBicm9rZW4gYWZ0ZXIgY2xpY2tpbmcgb24gdG9vbGJhclxyXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gXCJUZXh0XCI7XHJcblx0XHRcdGxldCBuZXdDbGlwYm9hcmREYXRhID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cdFx0XHRuZXdDbGlwYm9hcmREYXRhLnNldERhdGEoZm9ybWF0LCBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShmb3JtYXQpKTtcclxuXHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KFwicGFzdGVcIik7XHJcblx0XHRcdGV2ZW50LmNsaXBib2FyZERhdGEgPSBuZXdDbGlwYm9hcmREYXRhO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBtYWtlIGljb25zIGNsaWNrYWJsZVxyXG5cdGluaXRCdXR0b25zKGRlZmF1bHRUb29sLCBkZWZhdWx0Q29sb3IpXHJcblx0e1xyXG5cdFx0bGV0IGlzRGVmYXVsdFRvb2xGb3VuZCA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgdG9vbEljb25zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCA+IGxpIC5idG4tdG9vbFwiKTtcclxuXHRcdHRvb2xJY29ucy5mb3JFYWNoKGljb24gPT5cclxuXHRcdHtcclxuXHRcdFx0Y29uc3QgbGlzdEl0ZW0gPSBpY29uLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdGNvbnN0IHRvb2xUeXBlID0gVG9vbFR5cGVbbGlzdEl0ZW0uZGF0YXNldC50b29sbmFtZV07XHJcblx0XHRcdGlmICghaXNEZWZhdWx0VG9vbEZvdW5kICYmIHRvb2xUeXBlID09IGRlZmF1bHRUb29sKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZFRvb2woaWNvbik7XHJcblx0XHRcdFx0aXNEZWZhdWx0VG9vbEZvdW5kID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxpc3RJdGVtLmRhdGFzZXQudG9vbG5hbWUgPT0gXCJBRERfSU1BR0VcIilcclxuXHRcdFx0XHRsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuSW1nU2VsZWN0aW9uQ2xpY2tlZChlKSk7XHJcblx0XHRcdGVsc2UgaWYgKCFpY29uLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKVxyXG5cdFx0XHRcdGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy50b29sU3dpdGNoZWQoZSkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGlzRGVmYXVsdENvbG9yRm91bmQgPSBmYWxzZTtcclxuXHRcdGNvbnN0IHRvb2xiYXJDb2xvcnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tY29sb3JcIik7XHJcblx0XHR0b29sYmFyQ29sb3JzLmZvckVhY2goaXRlbSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWlzRGVmYXVsdENvbG9yRm91bmQgJiYgaXRlbS5kYXRhc2V0LmNvbG9yID09IGRlZmF1bHRDb2xvcilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRDb2xvcihpdGVtKTtcclxuXHRcdFx0XHRpc0RlZmF1bHRDb2xvckZvdW5kID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpdGVtLmRhdGFzZXQuY29sb3I7XHJcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNvbG9yU3dpdGNoZWQoZSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRTZWxlY3RlZFRvb2woZWxlbWVudClcclxuXHR7XHJcblx0XHRjb25zdCBzZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZFwiO1xyXG5cdFx0bGV0IHByZXZTZWxlY3RlZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RlZENsYXNzfWApO1xyXG5cclxuXHRcdGlmIChwcmV2U2VsZWN0ZWQpXHJcblx0XHRcdHByZXZTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGVkQ2xhc3MpO1xyXG5cclxuXHRcdGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0ZWRDbGFzcykpXHJcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZWxlY3RlZENsYXNzKTtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkQ29sb3IoZWxlbWVudClcclxuXHR7XHJcblx0XHRjb25zdCBzZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZC1jb2xvclwiO1xyXG5cclxuXHRcdHRoaXMuY2xlYXJTZWxlY3RlZENvbG9yKCk7XHJcblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdGVkQ2xhc3MpKVxyXG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoc2VsZWN0ZWRDbGFzcyk7XHJcblx0fVxyXG5cclxuXHRjbGVhclNlbGVjdGVkQ29sb3IoKVxyXG5cdHtcclxuXHRcdGNvbnN0IHNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkLWNvbG9yXCI7XHJcblx0XHRsZXQgcHJldlNlbGVjdGVkID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdGVkQ2xhc3N9YCk7XHJcblxyXG5cdFx0aWYgKHByZXZTZWxlY3RlZClcclxuXHRcdFx0cHJldlNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0ZWRDbGFzcyk7XHJcblx0fVxyXG5cclxuXHQvLyB0b29sIGljb24gY2xpY2tlZFxyXG5cdHRvb2xTd2l0Y2hlZChlKVxyXG5cdHtcclxuXHRcdGNvbnN0IHRvb2xOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9vbG5hbWU7XHJcblx0XHRjb25zdCB0b29sVHlwZSA9IFRvb2xUeXBlW3Rvb2xOYW1lXTtcclxuXHRcdHRoaXMuc2V0U2VsZWN0ZWRUb29sKGUudGFyZ2V0KTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0b29sU3dpdGNoXCIsIHtkZXRhaWw6IHRvb2xUeXBlfSkpO1xyXG5cdH1cclxuXHJcblx0Ly8gY29sb3IgYnV0dG9uIGNsaWNrZWRcclxuXHRjb2xvclN3aXRjaGVkKGUpXHJcblx0e1xyXG5cdFx0Y29uc3QgY29sb3IgPSBlLnRhcmdldC5kYXRhc2V0LmNvbG9yO1xyXG5cdFx0dGhpcy5zZXRTZWxlY3RlZENvbG9yKGUudGFyZ2V0KTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjb2xvclN3aXRjaFwiLCB7ZGV0YWlsOiBjb2xvcn0pKTtcclxuXHR9XHJcblxyXG5cdEltZ1NlbGVjdGlvbkNsaWNrZWQoZSlcclxuXHR7XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiSW1nU2V0dGluZ3NPcGVuXCIpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuZW90XCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1zb2xpZC05MDAuZW90XCIpICsgXCI/I2llZml4XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC50dGZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC5zdmdcIikgKyBcIiNmb250YXdlc29tZVwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC5lb3RcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLmVvdFwiKSArIFwiPyNpZWZpeFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzhfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX185X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtcmVndWxhci00MDAud29mZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnN2Z1wiKSArIFwiI2ZvbnRhd2Vzb21lXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL2ltZy9sb2dvLnBuZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxuICogRm9udCBBd2Vzb21lIEZyZWUgNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXFxuICogTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UvZnJlZSAoSWNvbnM6IENDIEJZIDQuMCwgRm9udHM6IFNJTCBPRkwgMS4xLCBDb2RlOiBNSVQgTGljZW5zZSlcXG4gKi9cXG4uZmEsXFxuLmZhcyxcXG4uZmFyLFxcbi5mYWwsXFxuLmZhZCxcXG4uZmFiIHtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLS4wNjY3ZW07IH1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAuNzVlbTsgfVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IC44NzVlbTsgfVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTsgfVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTsgfVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTsgfVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTsgfVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTsgfVxcblxcbi5mYS04eCB7XFxuICBmb250LXNpemU6IDhlbTsgfVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTsgfVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtOyB9XFxuXFxuLmZhLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjI1ZW07IH1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAuZmEtdWwgPiBsaSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07IH1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07IH1cXG5cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07IH1cXG5cXG4uZmEtc3BpbiB7XFxuICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyOyB9XFxuXFxuLmZhLXB1bHNlIHtcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTsgfVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLmZhLXJvdGF0ZS05MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XFxuXFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXFxcIjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTsgfVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7IH1cXG5cXG4uZmEtZmxpcC1ib3RoLCAuZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7IH1cXG5cXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwsXFxuOnJvb3QgLmZhLWZsaXAtYm90aCB7XFxuICBmaWx0ZXI6IG5vbmU7IH1cXG5cXG4uZmEtc3RhY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAyLjVlbTsgfVxcblxcbi5mYS1zdGFjay0xeCxcXG4uZmEtc3RhY2stMngge1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZhLXN0YWNrLTF4IHtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4vKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cXG5yZWFkZXJzIGRvIG5vdCByZWFkIG9mZiByYW5kb20gY2hhcmFjdGVycyB0aGF0IHJlcHJlc2VudCBpY29ucyAqL1xcbi5mYS01MDBweDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZlXFxcIjsgfVxcblxcbi5mYS1hY2Nlc3NpYmxlLWljb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2OFxcXCI7IH1cXG5cXG4uZmEtYWNjdXNvZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2OVxcXCI7IH1cXG5cXG4uZmEtYWNxdWlzaXRpb25zLWluY29ycG9yYXRlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmFmXFxcIjsgfVxcblxcbi5mYS1hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjQxXFxcIjsgfVxcblxcbi5mYS1hZGRyZXNzLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiOVxcXCI7IH1cXG5cXG4uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYmJcXFwiOyB9XFxuXFxuLmZhLWFkanVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQyXFxcIjsgfVxcblxcbi5mYS1hZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3MFxcXCI7IH1cXG5cXG4uZmEtYWR2ZXJzYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2YVxcXCI7IH1cXG5cXG4uZmEtYWZmaWxpYXRldGhlbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2YlxcXCI7IH1cXG5cXG4uZmEtYWlyLWZyZXNoZW5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWQwXFxcIjsgfVxcblxcbi5mYS1haXJibmI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzNFxcXCI7IH1cXG5cXG4uZmEtYWxnb2xpYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzZjXFxcIjsgfVxcblxcbi5mYS1hbGlnbi1jZW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzN1xcXCI7IH1cXG5cXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM5XFxcIjsgfVxcblxcbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzZcXFwiOyB9XFxuXFxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzhcXFwiOyB9XFxuXFxuLmZhLWFsaXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjQyXFxcIjsgfVxcblxcbi5mYS1hbGxlcmdpZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ2MVxcXCI7IH1cXG5cXG4uZmEtYW1hem9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzBcXFwiOyB9XFxuXFxuLmZhLWFtYXpvbi1wYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyY1xcXCI7IH1cXG5cXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjlcXFwiOyB9XFxuXFxuLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTNcXFwiOyB9XFxuXFxuLmZhLWFtaWxpYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzZkXFxcIjsgfVxcblxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzZFxcXCI7IH1cXG5cXG4uZmEtYW5kcm9pZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTdiXFxcIjsgfVxcblxcbi5mYS1hbmdlbGxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwOVxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwM1xcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwMFxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDFcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTAyXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDdcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwNFxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwNVxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwNlxcXCI7IH1cXG5cXG4uZmEtYW5ncnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1NlxcXCI7IH1cXG5cXG4uZmEtYW5ncnljcmVhdGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzZlXFxcIjsgfVxcblxcbi5mYS1hbmd1bGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MjBcXFwiOyB9XFxuXFxuLmZhLWFua2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY0NFxcXCI7IH1cXG5cXG4uZmEtYXBwLXN0b3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNmZcXFwiOyB9XFxuXFxuLmZhLWFwcC1zdG9yZS1pb3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3MFxcXCI7IH1cXG5cXG4uZmEtYXBwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3MVxcXCI7IH1cXG5cXG4uZmEtYXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3OVxcXCI7IH1cXG5cXG4uZmEtYXBwbGUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZDFcXFwiOyB9XFxuXFxuLmZhLWFwcGxlLXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDE1XFxcIjsgfVxcblxcbi5mYS1hcmNoaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODdcXFwiOyB9XFxuXFxuLmZhLWFyY2h3YXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1N1xcXCI7IH1cXG5cXG4uZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNThcXFwiOyB9XFxuXFxuLmZhLWFycm93LWFsdC1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzU5XFxcIjsgfVxcblxcbi5mYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNWFcXFwiOyB9XFxuXFxuLmZhLWFycm93LWFsdC1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM1YlxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYlxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOFxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTlcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFhXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiOyB9XFxuXFxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MFxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIyXFxcIjsgfVxcblxcbi5mYS1hcnJvd3MtYWx0LWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMzN1xcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLWFsdC12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMzhcXFwiOyB9XFxuXFxuLmZhLWFydHN0YXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc3YVxcXCI7IH1cXG5cXG4uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYTJcXFwiOyB9XFxuXFxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjlcXFwiOyB9XFxuXFxuLmZhLWFzeW1tZXRyaWs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3MlxcXCI7IH1cXG5cXG4uZmEtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmYVxcXCI7IH1cXG5cXG4uZmEtYXRsYXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1OFxcXCI7IH1cXG5cXG4uZmEtYXRsYXNzaWFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3N2JcXFwiOyB9XFxuXFxuLmZhLWF0b206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkMlxcXCI7IH1cXG5cXG4uZmEtYXVkaWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzczXFxcIjsgfVxcblxcbi5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjllXFxcIjsgfVxcblxcbi5mYS1hdXRvcHJlZml4ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxY1xcXCI7IH1cXG5cXG4uZmEtYXZpYW5leDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzc0XFxcIjsgfVxcblxcbi5mYS1hdmlhdG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyMVxcXCI7IH1cXG5cXG4uZmEtYXdhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1OVxcXCI7IH1cXG5cXG4uZmEtYXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzNzVcXFwiOyB9XFxuXFxuLmZhLWJhYnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc3Y1xcXCI7IH1cXG5cXG4uZmEtYmFieS1jYXJyaWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzdkXFxcIjsgfVxcblxcbi5mYS1iYWNrc3BhY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1YVxcXCI7IH1cXG5cXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7IH1cXG5cXG4uZmEtYmFjb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdlNVxcXCI7IH1cXG5cXG4uZmEtYmFjdGVyaWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1OVxcXCI7IH1cXG5cXG4uZmEtYmFjdGVyaXVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNWFcXFwiOyB9XFxuXFxuLmZhLWJhaGFpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NjZcXFwiOyB9XFxuXFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0ZVxcXCI7IH1cXG5cXG4uZmEtYmFsYW5jZS1zY2FsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTVcXFwiOyB9XFxuXFxuLmZhLWJhbGFuY2Utc2NhbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxNlxcXCI7IH1cXG5cXG4uZmEtYmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNWVcXFwiOyB9XFxuXFxuLmZhLWJhbmQtYWlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NjJcXFwiOyB9XFxuXFxuLmZhLWJhbmRjYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDVcXFwiOyB9XFxuXFxuLmZhLWJhcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7IH1cXG5cXG4uZmEtYmFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM5XFxcIjsgfVxcblxcbi5mYS1iYXNlYmFsbC1iYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MzNcXFwiOyB9XFxuXFxuLmZhLWJhc2tldGJhbGwtYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDM0XFxcIjsgfVxcblxcbi5mYS1iYXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyY2RcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0NFxcXCI7IH1cXG5cXG4uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDBcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQyXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0M1xcXCI7IH1cXG5cXG4uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQxXFxcIjsgfVxcblxcbi5mYS1iYXR0bGUtbmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MzVcXFwiOyB9XFxuXFxuLmZhLWJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM2XFxcIjsgfVxcblxcbi5mYS1iZWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmNcXFwiOyB9XFxuXFxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiNFxcXCI7IH1cXG5cXG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiNVxcXCI7IH1cXG5cXG4uZmEtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGYzXFxcIjsgfVxcblxcbi5mYS1iZWxsLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjZcXFwiOyB9XFxuXFxuLmZhLWJlemllci1jdXJ2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTViXFxcIjsgfVxcblxcbi5mYS1iaWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjQ3XFxcIjsgfVxcblxcbi5mYS1iaWN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDZcXFwiOyB9XFxuXFxuLmZhLWJpa2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODRhXFxcIjsgfVxcblxcbi5mYS1iaW1vYmplY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3OFxcXCI7IH1cXG5cXG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU1XFxcIjsgfVxcblxcbi5mYS1iaW9oYXphcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4MFxcXCI7IH1cXG5cXG4uZmEtYmlydGhkYXktY2FrZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWZkXFxcIjsgfVxcblxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3MVxcXCI7IH1cXG5cXG4uZmEtYml0Y29pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzc5XFxcIjsgfVxcblxcbi5mYS1iaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzN2FcXFwiOyB9XFxuXFxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjdlXFxcIjsgfVxcblxcbi5mYS1ibGFja2JlcnJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzN2JcXFwiOyB9XFxuXFxuLmZhLWJsZW5kZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxN1xcXCI7IH1cXG5cXG4uZmEtYmxlbmRlci1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmI2XFxcIjsgfVxcblxcbi5mYS1ibGluZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjlkXFxcIjsgfVxcblxcbi5mYS1ibG9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODFcXFwiOyB9XFxuXFxuLmZhLWJsb2dnZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3Y1xcXCI7IH1cXG5cXG4uZmEtYmxvZ2dlci1iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzN2RcXFwiOyB9XFxuXFxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjkzXFxcIjsgfVxcblxcbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk0XFxcIjsgfVxcblxcbi5mYS1ib2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzJcXFwiOyB9XFxuXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlN1xcXCI7IH1cXG5cXG4uZmEtYm9tYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWUyXFxcIjsgfVxcblxcbi5mYS1ib25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZDdcXFwiOyB9XFxuXFxuLmZhLWJvbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1Y1xcXCI7IH1cXG5cXG4uZmEtYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjsgfVxcblxcbi5mYS1ib29rLWRlYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZiN1xcXCI7IH1cXG5cXG4uZmEtYm9vay1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZTZcXFwiOyB9XFxuXFxuLmZhLWJvb2stb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTE4XFxcIjsgfVxcblxcbi5mYS1ib29rLXJlYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWRhXFxcIjsgfVxcblxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjsgfVxcblxcbi5mYS1ib290c3RyYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzNlxcXCI7IH1cXG5cXG4uZmEtYm9yZGVyLWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODRjXFxcIjsgfVxcblxcbi5mYS1ib3JkZXItbm9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODUwXFxcIjsgfVxcblxcbi5mYS1ib3JkZXItc3R5bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg1M1xcXCI7IH1cXG5cXG4uZmEtYm93bGluZy1iYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MzZcXFwiOyB9XFxuXFxuLmZhLWJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDY2XFxcIjsgfVxcblxcbi5mYS1ib3gtb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDllXFxcIjsgfVxcblxcbi5mYS1ib3gtdGlzc3VlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNWJcXFwiOyB9XFxuXFxuLmZhLWJveGVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NjhcXFwiOyB9XFxuXFxuLmZhLWJyYWlsbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhMVxcXCI7IH1cXG5cXG4uZmEtYnJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVkY1xcXCI7IH1cXG5cXG4uZmEtYnJlYWQtc2xpY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdlY1xcXCI7IH1cXG5cXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjFcXFwiOyB9XFxuXFxuLmZhLWJyaWVmY2FzZS1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NjlcXFwiOyB9XFxuXFxuLmZhLWJyb2FkY2FzdC10b3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTE5XFxcIjsgfVxcblxcbi5mYS1icm9vbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTFhXFxcIjsgfVxcblxcbi5mYS1icnVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTVkXFxcIjsgfVxcblxcbi5mYS1idGM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1YVxcXCI7IH1cXG5cXG4uZmEtYnVmZmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MzdcXFwiOyB9XFxuXFxuLmZhLWJ1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg4XFxcIjsgfVxcblxcbi5mYS1idWlsZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWFkXFxcIjsgfVxcblxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGExXFxcIjsgfVxcblxcbi5mYS1idWxsc2V5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQwXFxcIjsgfVxcblxcbi5mYS1idXJuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NmFcXFwiOyB9XFxuXFxuLmZhLWJ1cm9tb2JlbGV4cGVydGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM3ZlxcXCI7IH1cXG5cXG4uZmEtYnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDdcXFwiOyB9XFxuXFxuLmZhLWJ1cy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1ZVxcXCI7IH1cXG5cXG4uZmEtYnVzaW5lc3MtdGltZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjRhXFxcIjsgfVxcblxcbi5mYS1idXktbi1sYXJnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGE2XFxcIjsgfVxcblxcbi5mYS1idXlzZWxsYWRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMGRcXFwiOyB9XFxuXFxuLmZhLWNhbGN1bGF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlY1xcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzM1xcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzRcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLWRheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzgzXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjcyXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzFcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzNcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLXdlZWs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4NFxcXCI7IH1cXG5cXG4uZmEtY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzBcXFwiOyB9XFxuXFxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgzXFxcIjsgfVxcblxcbi5mYS1jYW1wZ3JvdW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2YmJcXFwiOyB9XFxuXFxuLmZhLWNhbmFkaWFuLW1hcGxlLWxlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4NVxcXCI7IH1cXG5cXG4uZmEtY2FuZHktY2FuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzg2XFxcIjsgfVxcblxcbi5mYS1jYW5uYWJpczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTVmXFxcIjsgfVxcblxcbi5mYS1jYXBzdWxlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDZiXFxcIjsgfVxcblxcbi5mYS1jYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiOVxcXCI7IH1cXG5cXG4uZmEtY2FyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWRlXFxcIjsgfVxcblxcbi5mYS1jYXItYmF0dGVyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWRmXFxcIjsgfVxcblxcbi5mYS1jYXItY3Jhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVlMVxcXCI7IH1cXG5cXG4uZmEtY2FyLXNpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVlNFxcXCI7IH1cXG5cXG4uZmEtY2FyYXZhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGZmXFxcIjsgfVxcblxcbi5mYS1jYXJldC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDdcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkOVxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkYVxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtc3F1YXJlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1MFxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtc3F1YXJlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5MVxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtc3F1YXJlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTJcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXNxdWFyZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTUxXFxcIjsgfVxcblxcbi5mYS1jYXJldC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ4XFxcIjsgfVxcblxcbi5mYS1jYXJyb3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc4N1xcXCI7IH1cXG5cXG4uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMThcXFwiOyB9XFxuXFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE3XFxcIjsgfVxcblxcbi5mYS1jYXNoLXJlZ2lzdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ODhcXFwiOyB9XFxuXFxuLmZhLWNhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmJlXFxcIjsgfVxcblxcbi5mYS1jYy1hbWF6b24tcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MmRcXFwiOyB9XFxuXFxuLmZhLWNjLWFtZXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmM1xcXCI7IH1cXG5cXG4uZmEtY2MtYXBwbGUtcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MTZcXFwiOyB9XFxuXFxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNGNcXFwiOyB9XFxuXFxuLmZhLWNjLWRpc2NvdmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjJcXFwiOyB9XFxuXFxuLmZhLWNjLWpjYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjRiXFxcIjsgfVxcblxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZjFcXFwiOyB9XFxuXFxuLmZhLWNjLXBheXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWY0XFxcIjsgfVxcblxcbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmNVxcXCI7IH1cXG5cXG4uZmEtY2MtdmlzYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWYwXFxcIjsgfVxcblxcbi5mYS1jZW50ZXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzODBcXFwiOyB9XFxuXFxuLmZhLWNlbnRvczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzg5XFxcIjsgfVxcblxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEzXFxcIjsgfVxcblxcbi5mYS1jaGFpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmMwXFxcIjsgfVxcblxcbi5mYS1jaGFsa2JvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MWJcXFwiOyB9XFxuXFxuLmZhLWNoYWxrYm9hcmQtdGVhY2hlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTFjXFxcIjsgfVxcblxcbi5mYS1jaGFyZ2luZy1zdGF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZTdcXFwiOyB9XFxuXFxuLmZhLWNoYXJ0LWFyZWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmZVxcXCI7IH1cXG5cXG4uZmEtY2hhcnQtYmFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODBcXFwiOyB9XFxuXFxuLmZhLWNoYXJ0LWxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwMVxcXCI7IH1cXG5cXG4uZmEtY2hhcnQtcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDBcXFwiOyB9XFxuXFxuLmZhLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiOyB9XFxuXFxuLmZhLWNoZWNrLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU4XFxcIjsgfVxcblxcbi5mYS1jaGVjay1kb3VibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2MFxcXCI7IH1cXG5cXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGFcXFwiOyB9XFxuXFxuLmZhLWNoZWVzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2VmXFxcIjsgfVxcblxcbi5mYS1jaGVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDM5XFxcIjsgfVxcblxcbi5mYS1jaGVzcy1iaXNob3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzYVxcXCI7IH1cXG5cXG4uZmEtY2hlc3MtYm9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQzY1xcXCI7IH1cXG5cXG4uZmEtY2hlc3Mta2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDNmXFxcIjsgfVxcblxcbi5mYS1jaGVzcy1rbmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ0MVxcXCI7IH1cXG5cXG4uZmEtY2hlc3MtcGF3bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDQzXFxcIjsgfVxcblxcbi5mYS1jaGVzcy1xdWVlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDQ1XFxcIjsgfVxcblxcbi5mYS1jaGVzcy1yb29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NDdcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzYVxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTM3XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTM4XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTM5XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3OFxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTNcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc3XFxcIjsgfVxcblxcbi5mYS1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWFlXFxcIjsgfVxcblxcbi5mYS1jaHJvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2OFxcXCI7IH1cXG5cXG4uZmEtY2hyb21lY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODM4XFxcIjsgfVxcblxcbi5mYS1jaHVyY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxZFxcXCI7IH1cXG5cXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTFcXFwiOyB9XFxuXFxuLmZhLWNpcmNsZS1ub3RjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWNlXFxcIjsgfVxcblxcbi5mYS1jaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NGZcXFwiOyB9XFxuXFxuLmZhLWNsaW5pYy1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZjJcXFwiOyB9XFxuXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzI4XFxcIjsgfVxcblxcbi5mYS1jbGlwYm9hcmQtY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ2Y1xcXCI7IH1cXG5cXG4uZmEtY2xpcGJvYXJkLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ2ZFxcXCI7IH1cXG5cXG4uZmEtY2xvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7IH1cXG5cXG4uZmEtY2xvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0ZFxcXCI7IH1cXG5cXG4uZmEtY2xvc2VkLWNhcHRpb25pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwYVxcXCI7IH1cXG5cXG4uZmEtY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMlxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtZG93bmxvYWQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzODFcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLW1lYXRiYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3M2JcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLW1vb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjM1xcXCI7IH1cXG5cXG4uZmEtY2xvdWQtbW9vbi1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3M2NcXFwiOyB9XFxuXFxuLmZhLWNsb3VkLXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjczZFxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtc2hvd2Vycy1oZWF2eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzQwXFxcIjsgfVxcblxcbi5mYS1jbG91ZC1zdW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjNFxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtc3VuLXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc0M1xcXCI7IH1cXG5cXG4uZmEtY2xvdWQtdXBsb2FkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzgyXFxcIjsgfVxcblxcbi5mYS1jbG91ZGZsYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwN2RcXFwiOyB9XFxuXFxuLmZhLWNsb3Vkc2NhbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4M1xcXCI7IH1cXG5cXG4uZmEtY2xvdWRzbWl0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzg0XFxcIjsgfVxcblxcbi5mYS1jbG91ZHZlcnNpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4NVxcXCI7IH1cXG5cXG4uZmEtY29ja3RhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2MVxcXCI7IH1cXG5cXG4uZmEtY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTIxXFxcIjsgfVxcblxcbi5mYS1jb2RlLWJyYW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI2XFxcIjsgfVxcblxcbi5mYS1jb2RlcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2JcXFwiOyB9XFxuXFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyODRcXFwiOyB9XFxuXFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGY0XFxcIjsgfVxcblxcbi5mYS1jb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7IH1cXG5cXG4uZmEtY29nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg1XFxcIjsgfVxcblxcbi5mYS1jb2luczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTFlXFxcIjsgfVxcblxcbi5mYS1jb2x1bW5zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGJcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI3YVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudC1kb2xsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY1MVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudC1kb3RzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YWRcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQtbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2Y1XFxcIjsgfVxcblxcbi5mYS1jb21tZW50LXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YjNcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODZcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnRzLWRvbGxhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjUzXFxcIjsgfVxcblxcbi5mYS1jb21wYWN0LWRpc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxZlxcXCI7IH1cXG5cXG4uZmEtY29tcGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTRlXFxcIjsgfVxcblxcbi5mYS1jb21wcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY2XFxcIjsgfVxcblxcbi5mYS1jb21wcmVzcy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyMlxcXCI7IH1cXG5cXG4uZmEtY29tcHJlc3MtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzhjXFxcIjsgfVxcblxcbi5mYS1jb25jaWVyZ2UtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTYyXFxcIjsgfVxcblxcbi5mYS1jb25mbHVlbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OGRcXFwiOyB9XFxuXFxuLmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMGVcXFwiOyB9XFxuXFxuLmZhLWNvbnRhbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZkXFxcIjsgfVxcblxcbi5mYS1jb29raWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2M1xcXCI7IH1cXG5cXG4uZmEtY29va2llLWJpdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2NFxcXCI7IH1cXG5cXG4uZmEtY29weTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM1XFxcIjsgfVxcblxcbi5mYS1jb3B5cmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmOVxcXCI7IH1cXG5cXG4uZmEtY290dG9uLWJ1cmVhdTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODllXFxcIjsgfVxcblxcbi5mYS1jb3VjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGI4XFxcIjsgfVxcblxcbi5mYS1jcGFuZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4OFxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjVlXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLWJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZTdcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtbmM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlOFxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1uYy1ldTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGU5XFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLW5jLWpwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZWFcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlYlxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1wZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGVjXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLXBkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGVkXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLXJlbWl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZWVcXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnMtc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlZlxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1zYW1wbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGYwXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLXNhbXBsaW5nLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmMVxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9ucy1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGYyXFxcIjsgfVxcblxcbi5mYS1jcmVhdGl2ZS1jb21tb25zLXplcm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmM1xcXCI7IH1cXG5cXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZFxcXCI7IH1cXG5cXG4uZmEtY3JpdGljYWwtcm9sZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmM5XFxcIjsgfVxcblxcbi5mYS1jcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMjVcXFwiOyB9XFxuXFxuLmZhLWNyb3AtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjVcXFwiOyB9XFxuXFxuLmZhLWNyb3NzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NTRcXFwiOyB9XFxuXFxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YlxcXCI7IH1cXG5cXG4uZmEtY3JvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTIwXFxcIjsgfVxcblxcbi5mYS1jcm93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTIxXFxcIjsgfVxcblxcbi5mYS1jcnV0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdmN1xcXCI7IH1cXG5cXG4uZmEtY3NzMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTNjXFxcIjsgfVxcblxcbi5mYS1jc3MzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzhiXFxcIjsgfVxcblxcbi5mYS1jdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjJcXFwiOyB9XFxuXFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjNcXFwiOyB9XFxuXFxuLmZhLWN1dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM0XFxcIjsgfVxcblxcbi5mYS1jdXR0bGVmaXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOGNcXFwiOyB9XFxuXFxuLmZhLWQtYW5kLWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM4ZFxcXCI7IH1cXG5cXG4uZmEtZC1hbmQtZC1iZXlvbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZjYVxcXCI7IH1cXG5cXG4uZmEtZGFpbHltb3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1MlxcXCI7IH1cXG5cXG4uZmEtZGFzaGN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxMFxcXCI7IH1cXG5cXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjMFxcXCI7IH1cXG5cXG4uZmEtZGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmE0XFxcIjsgfVxcblxcbi5mYS1kZWV6ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3N1xcXCI7IH1cXG5cXG4uZmEtZGVsaWNpb3VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTVcXFwiOyB9XFxuXFxuLmZhLWRlbW9jcmF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NDdcXFwiOyB9XFxuXFxuLmZhLWRlcGxveWRvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzhlXFxcIjsgfVxcblxcbi5mYS1kZXNrcHJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOGZcXFwiOyB9XFxuXFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEwOFxcXCI7IH1cXG5cXG4uZmEtZGV2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2Y2NcXFwiOyB9XFxuXFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiZFxcXCI7IH1cXG5cXG4uZmEtZGhhcm1hY2hha3JhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NTVcXFwiOyB9XFxuXFxuLmZhLWRobDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzkwXFxcIjsgfVxcblxcbi5mYS1kaWFnbm9zZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ3MFxcXCI7IH1cXG5cXG4uZmEtZGlhc3BvcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5MVxcXCI7IH1cXG5cXG4uZmEtZGljZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTIyXFxcIjsgfVxcblxcbi5mYS1kaWNlLWQyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmNmXFxcIjsgfVxcblxcbi5mYS1kaWNlLWQ2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZDFcXFwiOyB9XFxuXFxuLmZhLWRpY2UtZml2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTIzXFxcIjsgfVxcblxcbi5mYS1kaWNlLWZvdXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyNFxcXCI7IH1cXG5cXG4uZmEtZGljZS1vbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyNVxcXCI7IH1cXG5cXG4uZmEtZGljZS1zaXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyNlxcXCI7IH1cXG5cXG4uZmEtZGljZS10aHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTI3XFxcIjsgfVxcblxcbi5mYS1kaWNlLXR3bzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTI4XFxcIjsgfVxcblxcbi5mYS1kaWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTZcXFwiOyB9XFxuXFxuLmZhLWRpZ2l0YWwtb2NlYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5MVxcXCI7IH1cXG5cXG4uZmEtZGlnaXRhbC10YWNob2dyYXBoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjZcXFwiOyB9XFxuXFxuLmZhLWRpcmVjdGlvbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVlYlxcXCI7IH1cXG5cXG4uZmEtZGlzY29yZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzkyXFxcIjsgfVxcblxcbi5mYS1kaXNjb3Vyc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5M1xcXCI7IH1cXG5cXG4uZmEtZGlzZWFzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2ZhXFxcIjsgfVxcblxcbi5mYS1kaXZpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyOVxcXCI7IH1cXG5cXG4uZmEtZGl6enk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2N1xcXCI7IH1cXG5cXG4uZmEtZG5hOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzFcXFwiOyB9XFxuXFxuLmZhLWRvY2h1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzk0XFxcIjsgfVxcblxcbi5mYS1kb2NrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5NVxcXCI7IH1cXG5cXG4uZmEtZG9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZDNcXFwiOyB9XFxuXFxuLmZhLWRvbGxhci1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTVcXFwiOyB9XFxuXFxuLmZhLWRvbGx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzJcXFwiOyB9XFxuXFxuLmZhLWRvbGx5LWZsYXRiZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ3NFxcXCI7IH1cXG5cXG4uZmEtZG9uYXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YjlcXFwiOyB9XFxuXFxuLmZhLWRvb3ItY2xvc2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MmFcXFwiOyB9XFxuXFxuLmZhLWRvb3Itb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTJiXFxcIjsgfVxcblxcbi5mYS1kb3QtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTJcXFwiOyB9XFxuXFxuLmZhLWRvdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRiYVxcXCI7IH1cXG5cXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7IH1cXG5cXG4uZmEtZHJhZnQyZGlnaXRhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzk2XFxcIjsgfVxcblxcbi5mYS1kcmFmdGluZy1jb21wYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NjhcXFwiOyB9XFxuXFxuLmZhLWRyYWdvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmQ1XFxcIjsgfVxcblxcbi5mYS1kcmF3LXBvbHlnb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVlZVxcXCI7IH1cXG5cXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3ZFxcXCI7IH1cXG5cXG4uZmEtZHJpYmJibGUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOTdcXFwiOyB9XFxuXFxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2YlxcXCI7IH1cXG5cXG4uZmEtZHJ1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTY5XFxcIjsgfVxcblxcbi5mYS1kcnVtLXN0ZWVscGFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NmFcXFwiOyB9XFxuXFxuLmZhLWRydW1zdGljay1iaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZDdcXFwiOyB9XFxuXFxuLmZhLWRydXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE5XFxcIjsgfVxcblxcbi5mYS1kdW1iYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDRiXFxcIjsgfVxcblxcbi5mYS1kdW1wc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzkzXFxcIjsgfVxcblxcbi5mYS1kdW1wc3Rlci1maXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OTRcXFwiOyB9XFxuXFxuLmZhLWR1bmdlb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZkOVxcXCI7IH1cXG5cXG4uZmEtZHlhbG9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOTlcXFwiOyB9XFxuXFxuLmZhLWVhcmx5YmlyZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM5YVxcXCI7IH1cXG5cXG4uZmEtZWJheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY0XFxcIjsgfVxcblxcbi5mYS1lZGdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyODJcXFwiOyB9XFxuXFxuLmZhLWVkZ2UtbGVnYWN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzhcXFwiOyB9XFxuXFxuLmZhLWVkaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0NFxcXCI7IH1cXG5cXG4uZmEtZWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZmJcXFwiOyB9XFxuXFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTJcXFwiOyB9XFxuXFxuLmZhLWVsZW1lbnRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDMwXFxcIjsgfVxcblxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDFcXFwiOyB9XFxuXFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0MlxcXCI7IH1cXG5cXG4uZmEtZWxsbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWYxXFxcIjsgfVxcblxcbi5mYS1lbWJlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDIzXFxcIjsgfVxcblxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkMVxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMFxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmI2XFxcIjsgfVxcblxcbi5mYS1lbnZlbG9wZS1vcGVuLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY1OFxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTlcXFwiOyB9XFxuXFxuLmZhLWVudmlyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjk5XFxcIjsgfVxcblxcbi5mYS1lcXVhbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUyY1xcXCI7IH1cXG5cXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmRcXFwiOyB9XFxuXFxuLmZhLWVybGFuZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzlkXFxcIjsgfVxcblxcbi5mYS1ldGhlcmV1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDJlXFxcIjsgfVxcblxcbi5mYS1ldGhlcm5ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzk2XFxcIjsgfVxcblxcbi5mYS1ldHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDdcXFwiOyB9XFxuXFxuLmZhLWV1cm8tc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTUzXFxcIjsgfVxcblxcbi5mYS1ldmVybm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODM5XFxcIjsgfVxcblxcbi5mYS1leGNoYW5nZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2MlxcXCI7IH1cXG5cXG4uZmEtZXhjbGFtYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyYVxcXCI7IH1cXG5cXG4uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmFcXFwiOyB9XFxuXFxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzFcXFwiOyB9XFxuXFxuLmZhLWV4cGFuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY1XFxcIjsgfVxcblxcbi5mYS1leHBhbmQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MjRcXFwiOyB9XFxuXFxuLmZhLWV4cGFuZC1hcnJvd3MtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMWVcXFwiOyB9XFxuXFxuLmZhLWV4cGVkaXRlZHNzbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjNlXFxcIjsgfVxcblxcbi5mYS1leHRlcm5hbC1saW5rLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzVkXFxcIjsgfVxcblxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjM2MFxcXCI7IH1cXG5cXG4uZmEtZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmVcXFwiOyB9XFxuXFxuLmZhLWV5ZS1kcm9wcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZmJcXFwiOyB9XFxuXFxuLmZhLWV5ZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcwXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlhXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzOWVcXFwiOyB9XFxuXFxuLmZhLWZhY2Vib29rLW1lc3NlbmdlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzlmXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MlxcXCI7IH1cXG5cXG4uZmEtZmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4NjNcXFwiOyB9XFxuXFxuLmZhLWZhbnRhc3ktZmxpZ2h0LWdhbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZGNcXFwiOyB9XFxuXFxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0OVxcXCI7IH1cXG5cXG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiOyB9XFxuXFxuLmZhLWZhdWNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDA1XFxcIjsgfVxcblxcbi5mYS1mYXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhY1xcXCI7IH1cXG5cXG4uZmEtZmVhdGhlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTJkXFxcIjsgfVxcblxcbi5mYS1mZWF0aGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTZiXFxcIjsgfVxcblxcbi5mYS1mZWRleDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzk3XFxcIjsgfVxcblxcbi5mYS1mZWRvcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5OFxcXCI7IH1cXG5cXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODJcXFwiOyB9XFxuXFxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZmJcXFwiOyB9XFxuXFxuLmZhLWZpZ21hOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OTlcXFwiOyB9XFxuXFxuLmZhLWZpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1YlxcXCI7IH1cXG5cXG4uZmEtZmlsZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1Y1xcXCI7IH1cXG5cXG4uZmEtZmlsZS1hcmNoaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzZcXFwiOyB9XFxuXFxuLmZhLWZpbGUtYXVkaW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjN1xcXCI7IH1cXG5cXG4uZmEtZmlsZS1jb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzlcXFwiOyB9XFxuXFxuLmZhLWZpbGUtY29udHJhY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2Y1xcXCI7IH1cXG5cXG4uZmEtZmlsZS1jc3Y6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZkZFxcXCI7IH1cXG5cXG4uZmEtZmlsZS1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTZkXFxcIjsgfVxcblxcbi5mYS1maWxlLWV4Y2VsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzNcXFwiOyB9XFxuXFxuLmZhLWZpbGUtZXhwb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NmVcXFwiOyB9XFxuXFxuLmZhLWZpbGUtaW1hZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjNVxcXCI7IH1cXG5cXG4uZmEtZmlsZS1pbXBvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU2ZlxcXCI7IH1cXG5cXG4uZmEtZmlsZS1pbnZvaWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzBcXFwiOyB9XFxuXFxuLmZhLWZpbGUtaW52b2ljZS1kb2xsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3MVxcXCI7IH1cXG5cXG4uZmEtZmlsZS1tZWRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzdcXFwiOyB9XFxuXFxuLmZhLWZpbGUtbWVkaWNhbC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ3OFxcXCI7IH1cXG5cXG4uZmEtZmlsZS1wZGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjMVxcXCI7IH1cXG5cXG4uZmEtZmlsZS1wb3dlcnBvaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzRcXFwiOyB9XFxuXFxuLmZhLWZpbGUtcHJlc2NyaXB0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzJcXFwiOyB9XFxuXFxuLmZhLWZpbGUtc2lnbmF0dXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzNcXFwiOyB9XFxuXFxuLmZhLWZpbGUtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzRcXFwiOyB9XFxuXFxuLmZhLWZpbGUtdmlkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFjOFxcXCI7IH1cXG5cXG4uZmEtZmlsZS13b3JkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYzJcXFwiOyB9XFxuXFxuLmZhLWZpbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3NVxcXCI7IH1cXG5cXG4uZmEtZmlsbC1kcmlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzZcXFwiOyB9XFxuXFxuLmZhLWZpbG06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7IH1cXG5cXG4uZmEtZmlsdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjBcXFwiOyB9XFxuXFxuLmZhLWZpbmdlcnByaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NzdcXFwiOyB9XFxuXFxuLmZhLWZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2ZFxcXCI7IH1cXG5cXG4uZmEtZmlyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdlNFxcXCI7IH1cXG5cXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNFxcXCI7IH1cXG5cXG4uZmEtZmlyZWZveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjY5XFxcIjsgfVxcblxcbi5mYS1maXJlZm94LWJyb3dzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTAwN1xcXCI7IH1cXG5cXG4uZmEtZmlyc3QtYWlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NzlcXFwiOyB9XFxuXFxuLmZhLWZpcnN0LW9yZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjBcXFwiOyB9XFxuXFxuLmZhLWZpcnN0LW9yZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTBhXFxcIjsgfVxcblxcbi5mYS1maXJzdGRyYWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTFcXFwiOyB9XFxuXFxuLmZhLWZpc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3OFxcXCI7IH1cXG5cXG4uZmEtZmlzdC1yYWlzZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZkZVxcXCI7IH1cXG5cXG4uZmEtZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI0XFxcIjsgfVxcblxcbi5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTFlXFxcIjsgfVxcblxcbi5mYS1mbGFnLXVzYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzRkXFxcIjsgfVxcblxcbi5mYS1mbGFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMzXFxcIjsgfVxcblxcbi5mYS1mbGlja3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2ZVxcXCI7IH1cXG5cXG4uZmEtZmxpcGJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NGRcXFwiOyB9XFxuXFxuLmZhLWZsdXNoZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3OVxcXCI7IH1cXG5cXG4uZmEtZmx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MTdcXFwiOyB9XFxuXFxuLmZhLWZvbGRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdiXFxcIjsgfVxcblxcbi5mYS1mb2xkZXItbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY1ZFxcXCI7IH1cXG5cXG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3Y1xcXCI7IH1cXG5cXG4uZmEtZm9sZGVyLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY1ZVxcXCI7IH1cXG5cXG4uZmEtZm9udDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjsgfVxcblxcbi5mYS1mb250LWF3ZXNvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiNFxcXCI7IH1cXG5cXG4uZmEtZm9udC1hd2Vzb21lLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzVjXFxcIjsgfVxcblxcbi5mYS1mb250LWF3ZXNvbWUtZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDI1XFxcIjsgfVxcblxcbi5mYS1mb250LWF3ZXNvbWUtbG9nby1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZTZcXFwiOyB9XFxuXFxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjgwXFxcIjsgfVxcblxcbi5mYS1mb250aWNvbnMtZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhMlxcXCI7IH1cXG5cXG4uZmEtZm9vdGJhbGwtYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDRlXFxcIjsgfVxcblxcbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4NlxcXCI7IH1cXG5cXG4uZmEtZm9ydC1hd2Vzb21lLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2EzXFxcIjsgfVxcblxcbi5mYS1mb3J1bWJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjExXFxcIjsgfVxcblxcbi5mYS1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGVcXFwiOyB9XFxuXFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4MFxcXCI7IH1cXG5cXG4uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjNVxcXCI7IH1cXG5cXG4uZmEtZnJlZWJzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2E0XFxcIjsgfVxcblxcbi5mYS1mcm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MmVcXFwiOyB9XFxuXFxuLmZhLWZyb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTlcXFwiOyB9XFxuXFxuLmZhLWZyb3duLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3YVxcXCI7IH1cXG5cXG4uZmEtZnVsY3J1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTBiXFxcIjsgfVxcblxcbi5mYS1mdW5uZWwtZG9sbGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NjJcXFwiOyB9XFxuXFxuLmZhLWZ1dGJvbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWUzXFxcIjsgfVxcblxcbi5mYS1nYWxhY3RpYy1yZXB1YmxpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTBjXFxcIjsgfVxcblxcbi5mYS1nYWxhY3RpYy1zZW5hdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwZFxcXCI7IH1cXG5cXG4uZmEtZ2FtZXBhZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTFiXFxcIjsgfVxcblxcbi5mYS1nYXMtcHVtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTJmXFxcIjsgfVxcblxcbi5mYS1nYXZlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUzXFxcIjsgfVxcblxcbi5mYS1nZW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhNVxcXCI7IH1cXG5cXG4uZmEtZ2VuZGVybGVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjJkXFxcIjsgfVxcblxcbi5mYS1nZXQtcG9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjVcXFwiOyB9XFxuXFxuLmZhLWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNjBcXFwiOyB9XFxuXFxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjYxXFxcIjsgfVxcblxcbi5mYS1naG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmUyXFxcIjsgfVxcblxcbi5mYS1naWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmJcXFwiOyB9XFxuXFxuLmZhLWdpZnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3OWNcXFwiOyB9XFxuXFxuLmZhLWdpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQzXFxcIjsgfVxcblxcbi5mYS1naXQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4NDFcXFwiOyB9XFxuXFxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkMlxcXCI7IH1cXG5cXG4uZmEtZ2l0aHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWJcXFwiOyB9XFxuXFxuLmZhLWdpdGh1Yi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExM1xcXCI7IH1cXG5cXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDkyXFxcIjsgfVxcblxcbi5mYS1naXRrcmFrZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhNlxcXCI7IH1cXG5cXG4uZmEtZ2l0bGFiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTZcXFwiOyB9XFxuXFxuLmZhLWdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDI2XFxcIjsgfVxcblxcbi5mYS1nbGFzcy1jaGVlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc5ZlxcXCI7IH1cXG5cXG4uZmEtZ2xhc3MtbWFydGluaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAwXFxcIjsgfVxcblxcbi5mYS1nbGFzcy1tYXJ0aW5pLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTdiXFxcIjsgfVxcblxcbi5mYS1nbGFzcy13aGlza2V5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YTBcXFwiOyB9XFxuXFxuLmZhLWdsYXNzZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzMFxcXCI7IH1cXG5cXG4uZmEtZ2xpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhNVxcXCI7IH1cXG5cXG4uZmEtZ2xpZGUtZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmE2XFxcIjsgfVxcblxcbi5mYS1nbG9iZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjsgfVxcblxcbi5mYS1nbG9iZS1hZnJpY2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3Y1xcXCI7IH1cXG5cXG4uZmEtZ2xvYmUtYW1lcmljYXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU3ZFxcXCI7IH1cXG5cXG4uZmEtZ2xvYmUtYXNpYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTdlXFxcIjsgfVxcblxcbi5mYS1nbG9iZS1ldXJvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhMlxcXCI7IH1cXG5cXG4uZmEtZ29mb3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYTdcXFwiOyB9XFxuXFxuLmZhLWdvbGYtYmFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDUwXFxcIjsgfVxcblxcbi5mYS1nb29kcmVhZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhOFxcXCI7IH1cXG5cXG4uZmEtZ29vZHJlYWRzLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhOVxcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTBcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1kcml2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2FhXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzlcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYWJcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjNcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbHVzLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNVxcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDRcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS13YWxsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlZVxcXCI7IH1cXG5cXG4uZmEtZ29wdXJhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjY0XFxcIjsgfVxcblxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTlkXFxcIjsgfVxcblxcbi5mYS1ncmF0aXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg0XFxcIjsgfVxcblxcbi5mYS1ncmF2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDZcXFwiOyB9XFxuXFxuLmZhLWdyZWF0ZXItdGhhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTMxXFxcIjsgfVxcblxcbi5mYS1ncmVhdGVyLXRoYW4tZXF1YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzMlxcXCI7IH1cXG5cXG4uZmEtZ3JpbWFjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTdmXFxcIjsgfVxcblxcbi5mYS1ncmluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODBcXFwiOyB9XFxuXFxuLmZhLWdyaW4tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODFcXFwiOyB9XFxuXFxuLmZhLWdyaW4tYmVhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTgyXFxcIjsgfVxcblxcbi5mYS1ncmluLWJlYW0tc3dlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4M1xcXCI7IH1cXG5cXG4uZmEtZ3Jpbi1oZWFydHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4NFxcXCI7IH1cXG5cXG4uZmEtZ3Jpbi1zcXVpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4NVxcXCI7IH1cXG5cXG4uZmEtZ3Jpbi1zcXVpbnQtdGVhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4NlxcXCI7IH1cXG5cXG4uZmEtZ3Jpbi1zdGFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTg3XFxcIjsgfVxcblxcbi5mYS1ncmluLXRlYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODhcXFwiOyB9XFxuXFxuLmZhLWdyaW4tdG9uZ3VlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ODlcXFwiOyB9XFxuXFxuLmZhLWdyaW4tdG9uZ3VlLXNxdWludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNThhXFxcIjsgfVxcblxcbi5mYS1ncmluLXRvbmd1ZS13aW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OGJcXFwiOyB9XFxuXFxuLmZhLWdyaW4td2luazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNThjXFxcIjsgfVxcblxcbi5mYS1ncmlwLWhvcml6b250YWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4ZFxcXCI7IH1cXG5cXG4uZmEtZ3JpcC1saW5lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2E0XFxcIjsgfVxcblxcbi5mYS1ncmlwLWxpbmVzLXZlcnRpY2FsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YTVcXFwiOyB9XFxuXFxuLmZhLWdyaXAtdmVydGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4ZVxcXCI7IH1cXG5cXG4uZmEtZ3JpcGZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhY1xcXCI7IH1cXG5cXG4uZmEtZ3J1bnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhZFxcXCI7IH1cXG5cXG4uZmEtZ3VpbGRlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDdlXFxcIjsgfVxcblxcbi5mYS1ndWl0YXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhNlxcXCI7IH1cXG5cXG4uZmEtZ3VscDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2FlXFxcIjsgfVxcblxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZkXFxcIjsgfVxcblxcbi5mYS1oYWNrZXItbmV3czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ0XFxcIjsgfVxcblxcbi5mYS1oYWNrZXItbmV3cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNhZlxcXCI7IH1cXG5cXG4uZmEtaGFja2VycmFuazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWY3XFxcIjsgfVxcblxcbi5mYS1oYW1idXJnZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgwNVxcXCI7IH1cXG5cXG4uZmEtaGFtbWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZTNcXFwiOyB9XFxuXFxuLmZhLWhhbXNhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NjVcXFwiOyB9XFxuXFxuLmZhLWhhbmQtaG9sZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGJkXFxcIjsgfVxcblxcbi5mYS1oYW5kLWhvbGRpbmctaGVhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRiZVxcXCI7IH1cXG5cXG4uZmEtaGFuZC1ob2xkaW5nLW1lZGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA1Y1xcXCI7IH1cXG5cXG4uZmEtaGFuZC1ob2xkaW5nLXVzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGMwXFxcIjsgfVxcblxcbi5mYS1oYW5kLWhvbGRpbmctd2F0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRjMVxcXCI7IH1cXG5cXG4uZmEtaGFuZC1saXphcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1OFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1taWRkbGUtZmluZ2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MDZcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcGFwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1NlxcXCI7IH1cXG5cXG4uZmEtaGFuZC1wZWFjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjViXFxcIjsgfVxcblxcbi5mYS1oYW5kLXBvaW50LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhN1xcXCI7IH1cXG5cXG4uZmEtaGFuZC1wb2ludC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTVcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcG9pbnQtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1wb2ludC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE2XFxcIjsgfVxcblxcbi5mYS1oYW5kLXBvaW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1YVxcXCI7IH1cXG5cXG4uZmEtaGFuZC1yb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTVcXFwiOyB9XFxuXFxuLmZhLWhhbmQtc2Npc3NvcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1N1xcXCI7IH1cXG5cXG4uZmEtaGFuZC1zcGFya2xlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDVkXFxcIjsgfVxcblxcbi5mYS1oYW5kLXNwb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTlcXFwiOyB9XFxuXFxuLmZhLWhhbmRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0YzJcXFwiOyB9XFxuXFxuLmZhLWhhbmRzLWhlbHBpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRjNFxcXCI7IH1cXG5cXG4uZmEtaGFuZHMtd2FzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDVlXFxcIjsgfVxcblxcbi5mYS1oYW5kc2hha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiNVxcXCI7IH1cXG5cXG4uZmEtaGFuZHNoYWtlLWFsdC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDVmXFxcIjsgfVxcblxcbi5mYS1oYW5kc2hha2Utc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2MFxcXCI7IH1cXG5cXG4uZmEtaGFudWtpYWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZlNlxcXCI7IH1cXG5cXG4uZmEtaGFyZC1oYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgwN1xcXCI7IH1cXG5cXG4uZmEtaGFzaHRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjkyXFxcIjsgfVxcblxcbi5mYS1oYXQtY293Ym95OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4YzBcXFwiOyB9XFxuXFxuLmZhLWhhdC1jb3dib3ktc2lkZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGMxXFxcIjsgfVxcblxcbi5mYS1oYXQtd2l6YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZThcXFwiOyB9XFxuXFxuLmZhLWhkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEwXFxcIjsgfVxcblxcbi5mYS1oZWFkLXNpZGUtY291Z2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2MVxcXCI7IH1cXG5cXG4uZmEtaGVhZC1zaWRlLWNvdWdoLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjJcXFwiOyB9XFxuXFxuLmZhLWhlYWQtc2lkZS1tYXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjNcXFwiOyB9XFxuXFxuLmZhLWhlYWQtc2lkZS12aXJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDY0XFxcIjsgfVxcblxcbi5mYS1oZWFkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZGNcXFwiOyB9XFxuXFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7IH1cXG5cXG4uZmEtaGVhZHBob25lcy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU4ZlxcXCI7IH1cXG5cXG4uZmEtaGVhZHNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTkwXFxcIjsgfVxcblxcbi5mYS1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA0XFxcIjsgfVxcblxcbi5mYS1oZWFydC1icm9rZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhOVxcXCI7IH1cXG5cXG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWVcXFwiOyB9XFxuXFxuLmZhLWhlbGljb3B0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzM1xcXCI7IH1cXG5cXG4uZmEtaGlnaGxpZ2h0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5MVxcXCI7IH1cXG5cXG4uZmEtaGlraW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZWNcXFwiOyB9XFxuXFxuLmZhLWhpcHBvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZWRcXFwiOyB9XFxuXFxuLmZhLWhpcHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1MlxcXCI7IH1cXG5cXG4uZmEtaGlyZS1hLWhlbHBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2IwXFxcIjsgfVxcblxcbi5mYS1oaXN0b3J5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZGFcXFwiOyB9XFxuXFxuLmZhLWhpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3ZlxcXCI7IH1cXG5cXG4uZmEtaG9ja2V5LXB1Y2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1M1xcXCI7IH1cXG5cXG4uZmEtaG9sbHktYmVycnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdhYVxcXCI7IH1cXG5cXG4uZmEtaG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjsgfVxcblxcbi5mYS1ob29saTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDI3XFxcIjsgfVxcblxcbi5mYS1ob3JuYmlsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTkyXFxcIjsgfVxcblxcbi5mYS1ob3JzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmYwXFxcIjsgfVxcblxcbi5mYS1ob3JzZS1oZWFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YWJcXFwiOyB9XFxuXFxuLmZhLWhvc3BpdGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjhcXFwiOyB9XFxuXFxuLmZhLWhvc3BpdGFsLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDdkXFxcIjsgfVxcblxcbi5mYS1ob3NwaXRhbC1zeW1ib2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ3ZVxcXCI7IH1cXG5cXG4uZmEtaG9zcGl0YWwtdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODBkXFxcIjsgfVxcblxcbi5mYS1ob3QtdHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OTNcXFwiOyB9XFxuXFxuLmZhLWhvdGRvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODBmXFxcIjsgfVxcblxcbi5mYS1ob3RlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTk0XFxcIjsgfVxcblxcbi5mYS1ob3RqYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiMVxcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTRcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1M1xcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1MlxcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNTFcXFwiOyB9XFxuXFxuLmZhLWhvdXNlLWRhbWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmYxXFxcIjsgfVxcblxcbi5mYS1ob3VzZS11c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNjVcXFwiOyB9XFxuXFxuLmZhLWhvdXp6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyN2NcXFwiOyB9XFxuXFxuLmZhLWhyeXZuaWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZmMlxcXCI7IH1cXG5cXG4uZmEtaHRtbDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzYlxcXCI7IH1cXG5cXG4uZmEtaHVic3BvdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2IyXFxcIjsgfVxcblxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjQ2XFxcIjsgfVxcblxcbi5mYS1pY2UtY3JlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgxMFxcXCI7IH1cXG5cXG4uZmEtaWNpY2xlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2FkXFxcIjsgfVxcblxcbi5mYS1pY29uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODZkXFxcIjsgfVxcblxcbi5mYS1pZC1iYWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmMxXFxcIjsgfVxcblxcbi5mYS1pZC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzJcXFwiOyB9XFxuXFxuLmZhLWlkLWNhcmQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0N2ZcXFwiOyB9XFxuXFxuLmZhLWlkZWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwMTNcXFwiOyB9XFxuXFxuLmZhLWlnbG9vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YWVcXFwiOyB9XFxuXFxuLmZhLWltYWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2VcXFwiOyB9XFxuXFxuLmZhLWltYWdlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzAyXFxcIjsgfVxcblxcbi5mYS1pbWRiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDhcXFwiOyB9XFxuXFxuLmZhLWluYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiOyB9XFxuXFxuLmZhLWluZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNjXFxcIjsgfVxcblxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjc1XFxcIjsgfVxcblxcbi5mYS1pbmZpbml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM0XFxcIjsgfVxcblxcbi5mYS1pbmZvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMjlcXFwiOyB9XFxuXFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNWFcXFwiOyB9XFxuXFxuLmZhLWlubm9zb2Z0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwODBcXFwiOyB9XFxuXFxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTZkXFxcIjsgfVxcblxcbi5mYS1pbnN0YWdyYW0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNTVcXFwiOyB9XFxuXFxuLmZhLWluc3RhbG9kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwODFcXFwiOyB9XFxuXFxuLmZhLWludGVyY29tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YWZcXFwiOyB9XFxuXFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNmJcXFwiOyB9XFxuXFxuLmZhLWludmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YjBcXFwiOyB9XFxuXFxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwOFxcXCI7IH1cXG5cXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzNcXFwiOyB9XFxuXFxuLmZhLWl0Y2gtaW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzYVxcXCI7IH1cXG5cXG4uZmEtaXR1bmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjRcXFwiOyB9XFxuXFxuLmZhLWl0dW5lcy1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjVcXFwiOyB9XFxuXFxuLmZhLWphdmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlNFxcXCI7IH1cXG5cXG4uZmEtamVkaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjY5XFxcIjsgfVxcblxcbi5mYS1qZWRpLW9yZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MGVcXFwiOyB9XFxuXFxuLmZhLWplbmtpbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiNlxcXCI7IH1cXG5cXG4uZmEtamlyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2IxXFxcIjsgfVxcblxcbi5mYS1qb2dldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2I3XFxcIjsgfVxcblxcbi5mYS1qb2ludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTk1XFxcIjsgfVxcblxcbi5mYS1qb29tbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhYVxcXCI7IH1cXG5cXG4uZmEtam91cm5hbC13aGlsbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY2YVxcXCI7IH1cXG5cXG4uZmEtanM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiOFxcXCI7IH1cXG5cXG4uZmEtanMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYjlcXFwiOyB9XFxuXFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2NcXFwiOyB9XFxuXFxuLmZhLWthYWJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NmJcXFwiOyB9XFxuXFxuLmZhLWthZ2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWZhXFxcIjsgfVxcblxcbi5mYS1rZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NFxcXCI7IH1cXG5cXG4uZmEta2V5YmFzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY1XFxcIjsgfVxcblxcbi5mYS1rZXlib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTFjXFxcIjsgfVxcblxcbi5mYS1rZXljZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiYVxcXCI7IH1cXG5cXG4uZmEta2hhbmRhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NmRcXFwiOyB9XFxuXFxuLmZhLWtpY2tzdGFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYmJcXFwiOyB9XFxuXFxuLmZhLWtpY2tzdGFydGVyLWs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiY1xcXCI7IH1cXG5cXG4uZmEta2lzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTk2XFxcIjsgfVxcblxcbi5mYS1raXNzLWJlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5N1xcXCI7IH1cXG5cXG4uZmEta2lzcy13aW5rLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OThcXFwiOyB9XFxuXFxuLmZhLWtpd2ktYmlyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM1XFxcIjsgfVxcblxcbi5mYS1rb3J2dWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyZlxcXCI7IH1cXG5cXG4uZmEtbGFuZG1hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY2ZlxcXCI7IH1cXG5cXG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhYlxcXCI7IH1cXG5cXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMDlcXFwiOyB9XFxuXFxuLmZhLWxhcHRvcC1jb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1ZmNcXFwiOyB9XFxuXFxuLmZhLWxhcHRvcC1ob3VzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDY2XFxcIjsgfVxcblxcbi5mYS1sYXB0b3AtbWVkaWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODEyXFxcIjsgfVxcblxcbi5mYS1sYXJhdmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYmRcXFwiOyB9XFxuXFxuLmZhLWxhc3RmbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjAyXFxcIjsgfVxcblxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDNcXFwiOyB9XFxuXFxuLmZhLWxhdWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OTlcXFwiOyB9XFxuXFxuLmZhLWxhdWdoLWJlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5YVxcXCI7IH1cXG5cXG4uZmEtbGF1Z2gtc3F1aW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWJcXFwiOyB9XFxuXFxuLmZhLWxhdWdoLXdpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5Y1xcXCI7IH1cXG5cXG4uZmEtbGF5ZXItZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVmZFxcXCI7IH1cXG5cXG4uZmEtbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZjXFxcIjsgfVxcblxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMTJcXFwiOyB9XFxuXFxuLmZhLWxlbW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTRcXFwiOyB9XFxuXFxuLmZhLWxlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxZFxcXCI7IH1cXG5cXG4uZmEtbGVzcy10aGFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MzZcXFwiOyB9XFxuXFxuLmZhLWxlc3MtdGhhbi1lcXVhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM3XFxcIjsgfVxcblxcbi5mYS1sZXZlbC1kb3duLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2JlXFxcIjsgfVxcblxcbi5mYS1sZXZlbC11cC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNiZlxcXCI7IH1cXG5cXG4uZmEtbGlmZS1yaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2RcXFwiOyB9XFxuXFxuLmZhLWxpZ2h0YnVsYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGViXFxcIjsgfVxcblxcbi5mYS1saW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYzBcXFwiOyB9XFxuXFxuLmZhLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMVxcXCI7IH1cXG5cXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4Y1xcXCI7IH1cXG5cXG4uZmEtbGlua2VkaW4taW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMVxcXCI7IH1cXG5cXG4uZmEtbGlub2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYjhcXFwiOyB9XFxuXFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxN2NcXFwiOyB9XFxuXFxuLmZhLWxpcmEtc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTk1XFxcIjsgfVxcblxcbi5mYS1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2FcXFwiOyB9XFxuXFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjJcXFwiOyB9XFxuXFxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjYlxcXCI7IH1cXG5cXG4uZmEtbGlzdC11bDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNhXFxcIjsgfVxcblxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI0XFxcIjsgfVxcblxcbi5mYS1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjNcXFwiOyB9XFxuXFxuLmZhLWxvY2stb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2MxXFxcIjsgfVxcblxcbi5mYS1sb25nLWFycm93LWFsdC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMDlcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctYWx0LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwYVxcXCI7IH1cXG5cXG4uZmEtbG9uZy1hcnJvdy1hbHQtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwYlxcXCI7IH1cXG5cXG4uZmEtbG9uZy1hcnJvdy1hbHQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjMwY1xcXCI7IH1cXG5cXG4uZmEtbG93LXZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmE4XFxcIjsgfVxcblxcbi5mYS1sdWdnYWdlLWNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5ZFxcXCI7IH1cXG5cXG4uZmEtbHVuZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYwNFxcXCI7IH1cXG5cXG4uZmEtbHVuZ3MtdmlydXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2N1xcXCI7IH1cXG5cXG4uZmEtbHlmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2MzXFxcIjsgfVxcblxcbi5mYS1tYWdlbnRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYzRcXFwiOyB9XFxuXFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDBcXFwiOyB9XFxuXFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjsgfVxcblxcbi5mYS1tYWlsLWJ1bGs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY3NFxcXCI7IH1cXG5cXG4uZmEtbWFpbGNoaW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1OWVcXFwiOyB9XFxuXFxuLmZhLW1hbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4M1xcXCI7IH1cXG5cXG4uZmEtbWFuZGFsb3JpYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwZlxcXCI7IH1cXG5cXG4uZmEtbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzlcXFwiOyB9XFxuXFxuLmZhLW1hcC1tYXJrZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU5ZlxcXCI7IH1cXG5cXG4uZmEtbWFwLW1hcmtlZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhMFxcXCI7IH1cXG5cXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjsgfVxcblxcbi5mYS1tYXAtbWFya2VyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M1XFxcIjsgfVxcblxcbi5mYS1tYXAtcGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNzZcXFwiOyB9XFxuXFxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjc3XFxcIjsgfVxcblxcbi5mYS1tYXJrZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjBmXFxcIjsgfVxcblxcbi5mYS1tYXJrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhMVxcXCI7IH1cXG5cXG4uZmEtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjIyXFxcIjsgfVxcblxcbi5mYS1tYXJzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI3XFxcIjsgfVxcblxcbi5mYS1tYXJzLXN0cm9rZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI5XFxcIjsgfVxcblxcbi5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMmJcXFwiOyB9XFxuXFxuLmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyYVxcXCI7IH1cXG5cXG4uZmEtbWFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmZhXFxcIjsgfVxcblxcbi5mYS1tYXN0b2RvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY2XFxcIjsgfVxcblxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNlxcXCI7IH1cXG5cXG4uZmEtbWRiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4Y2FcXFwiOyB9XFxuXFxuLmZhLW1lZGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTJcXFwiOyB9XFxuXFxuLmZhLW1lZGFwcHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjNlxcXCI7IH1cXG5cXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyM2FcXFwiOyB9XFxuXFxuLmZhLW1lZGl1bS1tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzYzdcXFwiOyB9XFxuXFxuLmZhLW1lZGtpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGZhXFxcIjsgfVxcblxcbi5mYS1tZWRydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M4XFxcIjsgfVxcblxcbi5mYS1tZWV0dXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJlMFxcXCI7IH1cXG5cXG4uZmEtbWVnYXBvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhM1xcXCI7IH1cXG5cXG4uZmEtbWVoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMWFcXFwiOyB9XFxuXFxuLmZhLW1laC1ibGFuazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWE0XFxcIjsgfVxcblxcbi5mYS1tZWgtcm9sbGluZy1leWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTVcXFwiOyB9XFxuXFxuLmZhLW1lbW9yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM4XFxcIjsgfVxcblxcbi5mYS1tZW5kZWxleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2IzXFxcIjsgfVxcblxcbi5mYS1tZW5vcmFoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2NzZcXFwiOyB9XFxuXFxuLmZhLW1lcmN1cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyM1xcXCI7IH1cXG5cXG4uZmEtbWV0ZW9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NTNcXFwiOyB9XFxuXFxuLmZhLW1pY3JvYmxvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDFhXFxcIjsgfVxcblxcbi5mYS1taWNyb2NoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkYlxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTMwXFxcIjsgfVxcblxcbi5mYS1taWNyb3Bob25lLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2M5XFxcIjsgfVxcblxcbi5mYS1taWNyb3Bob25lLWFsdC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTM5XFxcIjsgfVxcblxcbi5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMzFcXFwiOyB9XFxuXFxuLmZhLW1pY3Jvc2NvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYxMFxcXCI7IH1cXG5cXG4uZmEtbWljcm9zb2Z0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzY2FcXFwiOyB9XFxuXFxuLmZhLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjhcXFwiOyB9XFxuXFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU2XFxcIjsgfVxcblxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0NlxcXCI7IH1cXG5cXG4uZmEtbWl0dGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YjVcXFwiOyB9XFxuXFxuLmZhLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2NiXFxcIjsgfVxcblxcbi5mYS1taXhjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg5XFxcIjsgfVxcblxcbi5mYS1taXhlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDU2XFxcIjsgfVxcblxcbi5mYS1taXp1bmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjY1xcXCI7IH1cXG5cXG4uZmEtbW9iaWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMGJcXFwiOyB9XFxuXFxuLmZhLW1vYmlsZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNjZFxcXCI7IH1cXG5cXG4uZmEtbW9keDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjg1XFxcIjsgfVxcblxcbi5mYS1tb25lcm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkMFxcXCI7IH1cXG5cXG4uZmEtbW9uZXktYmlsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ2XFxcIjsgfVxcblxcbi5mYS1tb25leS1iaWxsLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2QxXFxcIjsgfVxcblxcbi5mYS1tb25leS1iaWxsLXdhdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzYVxcXCI7IH1cXG5cXG4uZmEtbW9uZXktYmlsbC13YXZlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTNiXFxcIjsgfVxcblxcbi5mYS1tb25leS1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTNjXFxcIjsgfVxcblxcbi5mYS1tb25leS1jaGVjay1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzZFxcXCI7IH1cXG5cXG4uZmEtbW9udW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhNlxcXCI7IH1cXG5cXG4uZmEtbW9vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTg2XFxcIjsgfVxcblxcbi5mYS1tb3J0YXItcGVzdGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YTdcXFwiOyB9XFxuXFxuLmZhLW1vc3F1ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjc4XFxcIjsgfVxcblxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMWNcXFwiOyB9XFxuXFxuLmZhLW1vdW50YWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ZmNcXFwiOyB9XFxuXFxuLmZhLW1vdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4Y2NcXFwiOyB9XFxuXFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0NVxcXCI7IH1cXG5cXG4uZmEtbXVnLWhvdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2I2XFxcIjsgfVxcblxcbi5mYS1tdXNpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAxXFxcIjsgfVxcblxcbi5mYS1uYXBzdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDJcXFwiOyB9XFxuXFxuLmZhLW5lb3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYxMlxcXCI7IH1cXG5cXG4uZmEtbmV0d29yay13aXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmZmXFxcIjsgfVxcblxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyY1xcXCI7IH1cXG5cXG4uZmEtbmV3c3BhcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWFcXFwiOyB9XFxuXFxuLmZhLW5pbWJscjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWE4XFxcIjsgfVxcblxcbi5mYS1ub2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MTlcXFwiOyB9XFxuXFxuLmZhLW5vZGUtanM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNkM1xcXCI7IH1cXG5cXG4uZmEtbm90LWVxdWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1M2VcXFwiOyB9XFxuXFxuLmZhLW5vdGVzLW1lZGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4MVxcXCI7IH1cXG5cXG4uZmEtbnBtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDRcXFwiOyB9XFxuXFxuLmZhLW5zODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q1XFxcIjsgfVxcblxcbi5mYS1udXRyaXRpb25peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q2XFxcIjsgfVxcblxcbi5mYS1vYmplY3QtZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0N1xcXCI7IH1cXG5cXG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI0OFxcXCI7IH1cXG5cXG4uZmEtb2N0b3B1cy1kZXBsb3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4MlxcXCI7IH1cXG5cXG4uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjYzXFxcIjsgfVxcblxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjY0XFxcIjsgfVxcblxcbi5mYS1vaWwtY2FuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MTNcXFwiOyB9XFxuXFxuLmZhLW9sZC1yZXB1YmxpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTEwXFxcIjsgfVxcblxcbi5mYS1vbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjc5XFxcIjsgfVxcblxcbi5mYS1vcGVuY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjNkXFxcIjsgfVxcblxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5YlxcXCI7IH1cXG5cXG4uZmEtb3BlcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI2YVxcXCI7IH1cXG5cXG4uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjNjXFxcIjsgfVxcblxcbi5mYS1vcmNpZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmOGQyXFxcIjsgfVxcblxcbi5mYS1vc2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxYVxcXCI7IH1cXG5cXG4uZmEtb3R0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcwMFxcXCI7IH1cXG5cXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDNiXFxcIjsgfVxcblxcbi5mYS1wYWdlNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Q3XFxcIjsgfVxcblxcbi5mYS1wYWdlbGluZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4Y1xcXCI7IH1cXG5cXG4uZmEtcGFnZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgxNVxcXCI7IH1cXG5cXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFmY1xcXCI7IH1cXG5cXG4uZmEtcGFpbnQtcm9sbGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YWFcXFwiOyB9XFxuXFxuLmZhLXBhbGV0dGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUzZlxcXCI7IH1cXG5cXG4uZmEtcGFsZmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDhcXFwiOyB9XFxuXFxuLmZhLXBhbGxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDgyXFxcIjsgfVxcblxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ4XFxcIjsgfVxcblxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNlxcXCI7IH1cXG5cXG4uZmEtcGFyYWNodXRlLWJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGNkXFxcIjsgfVxcblxcbi5mYS1wYXJhZ3JhcGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkZFxcXCI7IH1cXG5cXG4uZmEtcGFya2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQwXFxcIjsgfVxcblxcbi5mYS1wYXNzcG9ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWFiXFxcIjsgfVxcblxcbi5mYS1wYXN0YWZhcmlhbmlzbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjdiXFxcIjsgfVxcblxcbi5mYS1wYXN0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGVhXFxcIjsgfVxcblxcbi5mYS1wYXRyZW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZDlcXFwiOyB9XFxuXFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNGNcXFwiOyB9XFxuXFxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjhiXFxcIjsgfVxcblxcbi5mYS1wYXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiMFxcXCI7IH1cXG5cXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZWRcXFwiOyB9XFxuXFxuLmZhLXBlYWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2N2NcXFwiOyB9XFxuXFxuLmZhLXBlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzA0XFxcIjsgfVxcblxcbi5mYS1wZW4tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzMDVcXFwiOyB9XFxuXFxuLmZhLXBlbi1mYW5jeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWFjXFxcIjsgfVxcblxcbi5mYS1wZW4tbmliOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YWRcXFwiOyB9XFxuXFxuLmZhLXBlbi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE0YlxcXCI7IH1cXG5cXG4uZmEtcGVuY2lsLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMzAzXFxcIjsgfVxcblxcbi5mYS1wZW5jaWwtcnVsZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVhZVxcXCI7IH1cXG5cXG4uZmEtcGVubnktYXJjYWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MDRcXFwiOyB9XFxuXFxuLmZhLXBlb3BsZS1hcnJvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2OFxcXCI7IH1cXG5cXG4uZmEtcGVvcGxlLWNhcnJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0Y2VcXFwiOyB9XFxuXFxuLmZhLXBlcHBlci1ob3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgxNlxcXCI7IH1cXG5cXG4uZmEtcGVyYnl0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDgzXFxcIjsgfVxcblxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTVcXFwiOyB9XFxuXFxuLmZhLXBlcmNlbnRhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0MVxcXCI7IH1cXG5cXG4uZmEtcGVyaXNjb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZGFcXFwiOyB9XFxuXFxuLmZhLXBlcnNvbi1ib290aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzU2XFxcIjsgfVxcblxcbi5mYS1waGFicmljYXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2RiXFxcIjsgfVxcblxcbi5mYS1waG9lbml4LWZyYW1ld29yazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2RjXFxcIjsgfVxcblxcbi5mYS1waG9lbml4LXNxdWFkcm9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTFcXFwiOyB9XFxuXFxuLmZhLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTVcXFwiOyB9XFxuXFxuLmZhLXBob25lLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODc5XFxcIjsgfVxcblxcbi5mYS1waG9uZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2RkXFxcIjsgfVxcblxcbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OFxcXCI7IH1cXG5cXG4uZmEtcGhvbmUtc3F1YXJlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODdiXFxcIjsgfVxcblxcbi5mYS1waG9uZS12b2x1bWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhMFxcXCI7IH1cXG5cXG4uZmEtcGhvdG8tdmlkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg3Y1xcXCI7IH1cXG5cXG4uZmEtcGhwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NTdcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhZVxcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFhOFxcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1oYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRlNVxcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1wcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWE3XFxcIjsgfVxcblxcbi5mYS1waWVkLXBpcGVyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDFlXFxcIjsgfVxcblxcbi5mYS1waWdneS1iYW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZDNcXFwiOyB9XFxuXFxuLmZhLXBpbGxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ODRcXFwiOyB9XFxuXFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQyXFxcIjsgfVxcblxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjMxXFxcIjsgfVxcblxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDNcXFwiOyB9XFxuXFxuLmZhLXBpenphLXNsaWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4MThcXFwiOyB9XFxuXFxuLmZhLXBsYWNlLW9mLXdvcnNoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY3ZlxcXCI7IH1cXG5cXG4uZmEtcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7IH1cXG5cXG4uZmEtcGxhbmUtYXJyaXZhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWFmXFxcIjsgfVxcblxcbi5mYS1wbGFuZS1kZXBhcnR1cmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViMFxcXCI7IH1cXG5cXG4uZmEtcGxhbmUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2OVxcXCI7IH1cXG5cXG4uZmEtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRiXFxcIjsgfVxcblxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTQ0XFxcIjsgfVxcblxcbi5mYS1wbGF5c3RhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2RmXFxcIjsgfVxcblxcbi5mYS1wbHVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTZcXFwiOyB9XFxuXFxuLmZhLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2N1xcXCI7IH1cXG5cXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NVxcXCI7IH1cXG5cXG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmZVxcXCI7IH1cXG5cXG4uZmEtcG9kY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmNlXFxcIjsgfVxcblxcbi5mYS1wb2xsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ODFcXFwiOyB9XFxuXFxuLmZhLXBvbGwtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjgyXFxcIjsgfVxcblxcbi5mYS1wb286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJmZVxcXCI7IH1cXG5cXG4uZmEtcG9vLXN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NWFcXFwiOyB9XFxuXFxuLmZhLXBvb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYxOVxcXCI7IH1cXG5cXG4uZmEtcG9ydHJhaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlMFxcXCI7IH1cXG5cXG4uZmEtcG91bmQtc2lnbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTU0XFxcIjsgfVxcblxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMVxcXCI7IH1cXG5cXG4uZmEtcHJheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjgzXFxcIjsgfVxcblxcbi5mYS1wcmF5aW5nLWhhbmRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ODRcXFwiOyB9XFxuXFxuLmZhLXByZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWIxXFxcIjsgfVxcblxcbi5mYS1wcmVzY3JpcHRpb24tYm90dGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ODVcXFwiOyB9XFxuXFxuLmZhLXByZXNjcmlwdGlvbi1ib3R0bGUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ODZcXFwiOyB9XFxuXFxuLmZhLXByaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmZcXFwiOyB9XFxuXFxuLmZhLXByb2NlZHVyZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ4N1xcXCI7IH1cXG5cXG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyODhcXFwiOyB9XFxuXFxuLmZhLXByb2plY3QtZGlhZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQyXFxcIjsgfVxcblxcbi5mYS1wdW1wLW1lZGljYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA2YVxcXCI7IH1cXG5cXG4uZmEtcHVtcC1zb2FwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNmJcXFwiOyB9XFxuXFxuLmZhLXB1c2hlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2UxXFxcIjsgfVxcblxcbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyZVxcXCI7IH1cXG5cXG4uZmEtcHl0aG9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTJcXFwiOyB9XFxuXFxuLmZhLXFxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZDZcXFwiOyB9XFxuXFxuLmZhLXFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjsgfVxcblxcbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTI4XFxcIjsgfVxcblxcbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1OVxcXCI7IH1cXG5cXG4uZmEtcXVpZGRpdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NThcXFwiOyB9XFxuXFxuLmZhLXF1aW5zY2FwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDU5XFxcIjsgfVxcblxcbi5mYS1xdW9yYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmM0XFxcIjsgfVxcblxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMGRcXFwiOyB9XFxuXFxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMGVcXFwiOyB9XFxuXFxuLmZhLXF1cmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ODdcXFwiOyB9XFxuXFxuLmZhLXItcHJvamVjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY3XFxcIjsgfVxcblxcbi5mYS1yYWRpYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiOVxcXCI7IH1cXG5cXG4uZmEtcmFkaWF0aW9uLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2JhXFxcIjsgfVxcblxcbi5mYS1yYWluYm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NWJcXFwiOyB9XFxuXFxuLmZhLXJhbmRvbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc0XFxcIjsgfVxcblxcbi5mYS1yYXNwYmVycnktcGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiYlxcXCI7IH1cXG5cXG4uZmEtcmF2ZWxyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmQ5XFxcIjsgfVxcblxcbi5mYS1yZWFjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDFiXFxcIjsgfVxcblxcbi5mYS1yZWFjdGV1cm9wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzVkXFxcIjsgfVxcblxcbi5mYS1yZWFkbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRkNVxcXCI7IH1cXG5cXG4uZmEtcmViZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkMFxcXCI7IH1cXG5cXG4uZmEtcmVjZWlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQzXFxcIjsgfVxcblxcbi5mYS1yZWNvcmQtdmlueWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhkOVxcXCI7IH1cXG5cXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWI4XFxcIjsgfVxcblxcbi5mYS1yZWQtcml2ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlM1xcXCI7IH1cXG5cXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTFcXFwiOyB9XFxuXFxuLmZhLXJlZGRpdC1hbGllbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjgxXFxcIjsgfVxcblxcbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTJcXFwiOyB9XFxuXFxuLmZhLXJlZGhhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2JjXFxcIjsgfVxcblxcbi5mYS1yZWRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiOyB9XFxuXFxuLmZhLXJlZG8tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZjlcXFwiOyB9XFxuXFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI1ZFxcXCI7IH1cXG5cXG4uZmEtcmVtb3ZlLWZvcm1hdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODdkXFxcIjsgfVxcblxcbi5mYS1yZW5yZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4YlxcXCI7IH1cXG5cXG4uZmEtcmVwbHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlNVxcXCI7IH1cXG5cXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMjJcXFwiOyB9XFxuXFxuLmZhLXJlcGx5ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2U2XFxcIjsgfVxcblxcbi5mYS1yZXB1YmxpY2FuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NWVcXFwiOyB9XFxuXFxuLmZhLXJlc2VhcmNoZ2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGY4XFxcIjsgfVxcblxcbi5mYS1yZXNvbHZpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlN1xcXCI7IH1cXG5cXG4uZmEtcmVzdHJvb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdiZFxcXCI7IH1cXG5cXG4uZmEtcmV0d2VldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc5XFxcIjsgfVxcblxcbi5mYS1yZXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViMlxcXCI7IH1cXG5cXG4uZmEtcmliYm9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZDZcXFwiOyB9XFxuXFxuLmZhLXJpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcwYlxcXCI7IH1cXG5cXG4uZmEtcm9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE4XFxcIjsgfVxcblxcbi5mYS1yb2JvdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQ0XFxcIjsgfVxcblxcbi5mYS1yb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEzNVxcXCI7IH1cXG5cXG4uZmEtcm9ja2V0Y2hhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2U4XFxcIjsgfVxcblxcbi5mYS1yb2Nrcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZTlcXFwiOyB9XFxuXFxuLmZhLXJvdXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZDdcXFwiOyB9XFxuXFxuLmZhLXJzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDllXFxcIjsgfVxcblxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNDNcXFwiOyB9XFxuXFxuLmZhLXJ1YmxlLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1OFxcXCI7IH1cXG5cXG4uZmEtcnVsZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0NVxcXCI7IH1cXG5cXG4uZmEtcnVsZXItY29tYmluZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0NlxcXCI7IH1cXG5cXG4uZmEtcnVsZXItaG9yaXpvbnRhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQ3XFxcIjsgfVxcblxcbi5mYS1ydWxlci12ZXJ0aWNhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQ4XFxcIjsgfVxcblxcbi5mYS1ydW5uaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MGNcXFwiOyB9XFxuXFxuLmZhLXJ1cGVlLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1NlxcXCI7IH1cXG5cXG4uZmEtcnVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDdhXFxcIjsgfVxcblxcbi5mYS1zYWQtY3J5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjNcXFwiOyB9XFxuXFxuLmZhLXNhZC10ZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjRcXFwiOyB9XFxuXFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjY3XFxcIjsgfVxcblxcbi5mYS1zYWxlc2ZvcmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2JcXFwiOyB9XFxuXFxuLmZhLXNhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxZVxcXCI7IH1cXG5cXG4uZmEtc2F0ZWxsaXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YmZcXFwiOyB9XFxuXFxuLmZhLXNhdGVsbGl0ZS1kaXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YzBcXFwiOyB9XFxuXFxuLmZhLXNhdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjN1xcXCI7IH1cXG5cXG4uZmEtc2NobGl4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZWFcXFwiOyB9XFxuXFxuLmZhLXNjaG9vbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTQ5XFxcIjsgfVxcblxcbi5mYS1zY3Jld2RyaXZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTRhXFxcIjsgfVxcblxcbi5mYS1zY3JpYmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4YVxcXCI7IH1cXG5cXG4uZmEtc2Nyb2xsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MGVcXFwiOyB9XFxuXFxuLmZhLXNkLWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjMlxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiOyB9XFxuXFxuLmZhLXNlYXJjaC1kb2xsYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjY4OFxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoLWxvY2F0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2ODlcXFwiOyB9XFxuXFxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjsgfVxcblxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjsgfVxcblxcbi5mYS1zZWFyY2hlbmdpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2ViXFxcIjsgfVxcblxcbi5mYS1zZWVkbGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGQ4XFxcIjsgfVxcblxcbi5mYS1zZWxsY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmRhXFxcIjsgfVxcblxcbi5mYS1zZWxsc3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxM1xcXCI7IH1cXG5cXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzNcXFwiOyB9XFxuXFxuLmZhLXNlcnZpY2VzdGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2VjXFxcIjsgfVxcblxcbi5mYS1zaGFwZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYxZlxcXCI7IH1cXG5cXG4uZmEtc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7IH1cXG5cXG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZTBcXFwiOyB9XFxuXFxuLmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlMVxcXCI7IH1cXG5cXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNGRcXFwiOyB9XFxuXFxuLmZhLXNoZWtlbC1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMGJcXFwiOyB9XFxuXFxuLmZhLXNoaWVsZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlZFxcXCI7IH1cXG5cXG4uZmEtc2hpZWxkLXZpcnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNmNcXFwiOyB9XFxuXFxuLmZhLXNoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxYVxcXCI7IH1cXG5cXG4uZmEtc2hpcHBpbmctZmFzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDhiXFxcIjsgfVxcblxcbi5mYS1zaGlydHNpbmJ1bGs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxNFxcXCI7IH1cXG5cXG4uZmEtc2hvZS1wcmludHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0YlxcXCI7IH1cXG5cXG4uZmEtc2hvcGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDU3XFxcIjsgfVxcblxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5MFxcXCI7IH1cXG5cXG4uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOTFcXFwiOyB9XFxuXFxuLmZhLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3YVxcXCI7IH1cXG5cXG4uZmEtc2hvcHdhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViNVxcXCI7IH1cXG5cXG4uZmEtc2hvd2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyY2NcXFwiOyB9XFxuXFxuLmZhLXNodXR0bGUtdmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YjZcXFwiOyB9XFxuXFxuLmZhLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRkOVxcXCI7IH1cXG5cXG4uZmEtc2lnbi1pbi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJmNlxcXCI7IH1cXG5cXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmE3XFxcIjsgfVxcblxcbi5mYS1zaWduLW91dC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJmNVxcXCI7IH1cXG5cXG4uZmEtc2lnbmFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTJcXFwiOyB9XFxuXFxuLmZhLXNpZ25hdHVyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWI3XFxcIjsgfVxcblxcbi5mYS1zaW0tY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2M0XFxcIjsgfVxcblxcbi5mYS1zaW1wbHlidWlsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjE1XFxcIjsgfVxcblxcbi5mYS1zaW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNmRcXFwiOyB9XFxuXFxuLmZhLXNpc3RyaXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlZVxcXCI7IH1cXG5cXG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU4XFxcIjsgfVxcblxcbi5mYS1zaXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTJcXFwiOyB9XFxuXFxuLmZhLXNrYXRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjNVxcXCI7IH1cXG5cXG4uZmEtc2tldGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3YzZcXFwiOyB9XFxuXFxuLmZhLXNraWluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2M5XFxcIjsgfVxcblxcbi5mYS1za2lpbmctbm9yZGljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3Y2FcXFwiOyB9XFxuXFxuLmZhLXNrdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NGNcXFwiOyB9XFxuXFxuLmZhLXNrdWxsLWNyb3NzYm9uZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcxNFxcXCI7IH1cXG5cXG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxNlxcXCI7IH1cXG5cXG4uZmEtc2t5cGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3ZVxcXCI7IH1cXG5cXG4uZmEtc2xhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5OFxcXCI7IH1cXG5cXG4uZmEtc2xhY2staGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2VmXFxcIjsgfVxcblxcbi5mYS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzE1XFxcIjsgfVxcblxcbi5mYS1zbGVpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjY1xcXCI7IH1cXG5cXG4uZmEtc2xpZGVycy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxZGVcXFwiOyB9XFxuXFxuLmZhLXNsaWRlc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlN1xcXCI7IH1cXG5cXG4uZmEtc21pbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjExOFxcXCI7IH1cXG5cXG4uZmEtc21pbGUtYmVhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWI4XFxcIjsgfVxcblxcbi5mYS1zbWlsZS13aW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZGFcXFwiOyB9XFxuXFxuLmZhLXNtb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc1ZlxcXCI7IH1cXG5cXG4uZmEtc21va2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDhkXFxcIjsgfVxcblxcbi5mYS1zbW9raW5nLWJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTRkXFxcIjsgfVxcblxcbi5mYS1zbXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdjZFxcXCI7IH1cXG5cXG4uZmEtc25hcGNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhYlxcXCI7IH1cXG5cXG4uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhY1xcXCI7IH1cXG5cXG4uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYWRcXFwiOyB9XFxuXFxuLmZhLXNub3dib2FyZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2NlXFxcIjsgfVxcblxcbi5mYS1zbm93Zmxha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkY1xcXCI7IH1cXG5cXG4uZmEtc25vd21hbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2QwXFxcIjsgfVxcblxcbi5mYS1zbm93cGxvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2QyXFxcIjsgfVxcblxcbi5mYS1zb2FwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNmVcXFwiOyB9XFxuXFxuLmZhLXNvY2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2OTZcXFwiOyB9XFxuXFxuLmZhLXNvbGFyLXBhbmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YmFcXFwiOyB9XFxuXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkY1xcXCI7IH1cXG5cXG4uZmEtc29ydC1hbHBoYS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNWRcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYWxwaGEtZG93bi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg4MVxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbHBoYS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTVlXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFscGhhLXVwLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODgyXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjBcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYW1vdW50LWRvd24tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ODRcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYW1vdW50LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjFcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYW1vdW50LXVwLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODg1XFxcIjsgfVxcblxcbi5mYS1zb3J0LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZFxcXCI7IH1cXG5cXG4uZmEtc29ydC1udW1lcmljLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2MlxcXCI7IH1cXG5cXG4uZmEtc29ydC1udW1lcmljLWRvd24tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ODZcXFwiOyB9XFxuXFxuLmZhLXNvcnQtbnVtZXJpYy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTYzXFxcIjsgfVxcblxcbi5mYS1zb3J0LW51bWVyaWMtdXAtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ODdcXFwiOyB9XFxuXFxuLmZhLXNvcnQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZVxcXCI7IH1cXG5cXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWJlXFxcIjsgfVxcblxcbi5mYS1zb3VyY2V0cmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZDNcXFwiOyB9XFxuXFxuLmZhLXNwYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWJiXFxcIjsgfVxcblxcbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOTdcXFwiOyB9XFxuXFxuLmZhLXNwZWFrYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmM1xcXCI7IH1cXG5cXG4uZmEtc3BlYWtlci1kZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2NcXFwiOyB9XFxuXFxuLmZhLXNwZWxsLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4OTFcXFwiOyB9XFxuXFxuLmZhLXNwaWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzE3XFxcIjsgfVxcblxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMTBcXFwiOyB9XFxuXFxuLmZhLXNwbG90Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViY1xcXCI7IH1cXG5cXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWJjXFxcIjsgfVxcblxcbi5mYS1zcHJheS1jYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViZFxcXCI7IH1cXG5cXG4uZmEtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzhcXFwiOyB9XFxuXFxuLmZhLXNxdWFyZS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0NWNcXFwiOyB9XFxuXFxuLmZhLXNxdWFyZS1yb290LWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjk4XFxcIjsgfVxcblxcbi5mYS1zcXVhcmVzcGFjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWJlXFxcIjsgfVxcblxcbi5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMThkXFxcIjsgfVxcblxcbi5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTZjXFxcIjsgfVxcblxcbi5mYS1zdGFja3BhdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjg0MlxcXCI7IH1cXG5cXG4uZmEtc3RhbXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjViZlxcXCI7IH1cXG5cXG4uZmEtc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjsgfVxcblxcbi5mYS1zdGFyLWFuZC1jcmVzY2VudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjk5XFxcIjsgfVxcblxcbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4OVxcXCI7IH1cXG5cXG4uZmEtc3Rhci1oYWxmLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWMwXFxcIjsgfVxcblxcbi5mYS1zdGFyLW9mLWRhdmlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2OWFcXFwiOyB9XFxuXFxuLmZhLXN0YXItb2YtbGlmZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjIxXFxcIjsgfVxcblxcbi5mYS1zdGF5bGlua2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZjVcXFwiOyB9XFxuXFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYjZcXFwiOyB9XFxuXFxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWI3XFxcIjsgfVxcblxcbi5mYS1zdGVhbS1zeW1ib2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmNlxcXCI7IH1cXG5cXG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ4XFxcIjsgfVxcblxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1MVxcXCI7IH1cXG5cXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBmMVxcXCI7IH1cXG5cXG4uZmEtc3RpY2tlci1tdWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZjdcXFwiOyB9XFxuXFxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNDlcXFwiOyB9XFxuXFxuLmZhLXN0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0ZFxcXCI7IH1cXG5cXG4uZmEtc3RvcC1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4ZFxcXCI7IH1cXG5cXG4uZmEtc3RvcHdhdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZjJcXFwiOyB9XFxuXFxuLmZhLXN0b3B3YXRjaC0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDZmXFxcIjsgfVxcblxcbi5mYS1zdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTRlXFxcIjsgfVxcblxcbi5mYS1zdG9yZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU0ZlxcXCI7IH1cXG5cXG4uZmEtc3RvcmUtYWx0LXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzBcXFwiOyB9XFxuXFxuLmZhLXN0b3JlLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzFcXFwiOyB9XFxuXFxuLmZhLXN0cmF2YTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDI4XFxcIjsgfVxcblxcbi5mYS1zdHJlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1MFxcXCI7IH1cXG5cXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxZFxcXCI7IH1cXG5cXG4uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNjXFxcIjsgfVxcblxcbi5mYS1zdHJpcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyOVxcXCI7IH1cXG5cXG4uZmEtc3RyaXBlLXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQyYVxcXCI7IH1cXG5cXG4uZmEtc3Ryb29wd2FmZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1MVxcXCI7IH1cXG5cXG4uZmEtc3R1ZGlvdmluYXJpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZjhcXFwiOyB9XFxuXFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYTRcXFwiOyB9XFxuXFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWEzXFxcIjsgfVxcblxcbi5mYS1zdWJzY3JpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjEyY1xcXCI7IH1cXG5cXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzlcXFwiOyB9XFxuXFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZjJcXFwiOyB9XFxuXFxuLmZhLXN1aXRjYXNlLXJvbGxpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjMVxcXCI7IH1cXG5cXG4uZmEtc3VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxODVcXFwiOyB9XFxuXFxuLmZhLXN1cGVycG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZGRcXFwiOyB9XFxuXFxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMmJcXFwiOyB9XFxuXFxuLmZhLXN1cHBsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2Y5XFxcIjsgfVxcblxcbi5mYS1zdXJwcmlzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWMyXFxcIjsgfVxcblxcbi5mYS1zdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZDZcXFwiOyB9XFxuXFxuLmZhLXN3YXRjaGJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjM1xcXCI7IH1cXG5cXG4uZmEtc3dpZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjhlMVxcXCI7IH1cXG5cXG4uZmEtc3dpbW1lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWM0XFxcIjsgfVxcblxcbi5mYS1zd2ltbWluZy1wb29sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzVcXFwiOyB9XFxuXFxuLmZhLXN5bWZvbnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzZFxcXCI7IH1cXG5cXG4uZmEtc3luYWdvZ3VlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2OWJcXFwiOyB9XFxuXFxuLmZhLXN5bmM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7IH1cXG5cXG4uZmEtc3luYy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJmMVxcXCI7IH1cXG5cXG4uZmEtc3lyaW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDhlXFxcIjsgfVxcblxcbi5mYS10YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNlXFxcIjsgfVxcblxcbi5mYS10YWJsZS10ZW5uaXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1ZFxcXCI7IH1cXG5cXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMGFcXFwiOyB9XFxuXFxuLmZhLXRhYmxldC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmYVxcXCI7IH1cXG5cXG4uZmEtdGFibGV0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDkwXFxcIjsgfVxcblxcbi5mYS10YWNob21ldGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmM2ZkXFxcIjsgfVxcblxcbi5mYS10YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7IH1cXG5cXG4uZmEtdGFnczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJjXFxcIjsgfVxcblxcbi5mYS10YXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZGJcXFwiOyB9XFxuXFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiOyB9XFxuXFxuLmZhLXRheGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFiYVxcXCI7IH1cXG5cXG4uZmEtdGVhbXNwZWFrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZjlcXFwiOyB9XFxuXFxuLmZhLXRlZXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2MmVcXFwiOyB9XFxuXFxuLmZhLXRlZXRoLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYyZlxcXCI7IH1cXG5cXG4uZmEtdGVsZWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjNlxcXCI7IH1cXG5cXG4uZmEtdGVsZWdyYW0tcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNmZVxcXCI7IH1cXG5cXG4uZmEtdGVtcGVyYXR1cmUtaGlnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzY5XFxcIjsgfVxcblxcbi5mYS10ZW1wZXJhdHVyZS1sb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc2YlxcXCI7IH1cXG5cXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWQ1XFxcIjsgfVxcblxcbi5mYS10ZW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2Q3XFxcIjsgfVxcblxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTIwXFxcIjsgfVxcblxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM0XFxcIjsgfVxcblxcbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzVcXFwiOyB9XFxuXFxuLmZhLXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiOyB9XFxuXFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiOyB9XFxuXFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7IH1cXG5cXG4uZmEtdGhlLXJlZC15ZXRpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2OWRcXFwiOyB9XFxuXFxuLmZhLXRoZWF0ZXItbWFza3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYzMFxcXCI7IH1cXG5cXG4uZmEtdGhlbWVjbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWM2XFxcIjsgfVxcblxcbi5mYS10aGVtZWlzbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiMlxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ5MVxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjYlxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmM3XFxcIjsgfVxcblxcbi5mYS10aGVybW9tZXRlci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYzlcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjYVxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJjOFxcXCI7IH1cXG5cXG4uZmEtdGhpbmstcGVha3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjczMVxcXCI7IH1cXG5cXG4uZmEtdGh1bWJzLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2NVxcXCI7IH1cXG5cXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjRcXFwiOyB9XFxuXFxuLmZhLXRodW1idGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDhkXFxcIjsgfVxcblxcbi5mYS10aWNrZXQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYzZmZcXFwiOyB9XFxuXFxuLmZhLXRpa3RvazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDdiXFxcIjsgfVxcblxcbi5mYS10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjsgfVxcblxcbi5mYS10aW1lcy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7IH1cXG5cXG4uZmEtdGludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQzXFxcIjsgfVxcblxcbi5mYS10aW50LXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzdcXFwiOyB9XFxuXFxuLmZhLXRpcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1YzhcXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIwNFxcXCI7IH1cXG5cXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMDVcXFwiOyB9XFxuXFxuLmZhLXRvaWxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2Q4XFxcIjsgfVxcblxcbi5mYS10b2lsZXQtcGFwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcxZVxcXCI7IH1cXG5cXG4uZmEtdG9pbGV0LXBhcGVyLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzJcXFwiOyB9XFxuXFxuLmZhLXRvb2xib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1MlxcXCI7IH1cXG5cXG4uZmEtdG9vbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjdkOVxcXCI7IH1cXG5cXG4uZmEtdG9vdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjOVxcXCI7IH1cXG5cXG4uZmEtdG9yYWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhMFxcXCI7IH1cXG5cXG4uZmEtdG9yaWktZ2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmExXFxcIjsgfVxcblxcbi5mYS10cmFjdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MjJcXFwiOyB9XFxuXFxuLmZhLXRyYWRlLWZlZGVyYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUxM1xcXCI7IH1cXG5cXG4uZmEtdHJhZGVtYXJrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyNWNcXFwiOyB9XFxuXFxuLmZhLXRyYWZmaWMtbGlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYzN1xcXCI7IH1cXG5cXG4uZmEtdHJhaWxlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDQxXFxcIjsgfVxcblxcbi5mYS10cmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM4XFxcIjsgfVxcblxcbi5mYS10cmFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZGFcXFwiOyB9XFxuXFxuLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjRcXFwiOyB9XFxuXFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjI1XFxcIjsgfVxcblxcbi5mYS10cmFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWY4XFxcIjsgfVxcblxcbi5mYS10cmFzaC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJlZFxcXCI7IH1cXG5cXG4uZmEtdHJhc2gtcmVzdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODI5XFxcIjsgfVxcblxcbi5mYS10cmFzaC1yZXN0b3JlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODJhXFxcIjsgfVxcblxcbi5mYS10cmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxYmJcXFwiOyB9XFxuXFxuLmZhLXRyZWxsbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTgxXFxcIjsgfVxcblxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjYyXFxcIjsgfVxcblxcbi5mYS10cm9waHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7IH1cXG5cXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMVxcXCI7IH1cXG5cXG4uZmEtdHJ1Y2stbG9hZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGRlXFxcIjsgfVxcblxcbi5mYS10cnVjay1tb25zdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY2M2JcXFwiOyB9XFxuXFxuLmZhLXRydWNrLW1vdmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGRmXFxcIjsgfVxcblxcbi5mYS10cnVjay1waWNrdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjYzY1xcXCI7IH1cXG5cXG4uZmEtdHNoaXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTNcXFwiOyB9XFxuXFxuLmZhLXR0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWU0XFxcIjsgfVxcblxcbi5mYS10dW1ibHI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3M1xcXCI7IH1cXG5cXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTc0XFxcIjsgfVxcblxcbi5mYS10djpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjZjXFxcIjsgfVxcblxcbi5mYS10d2l0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlOFxcXCI7IH1cXG5cXG4uZmEtdHdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk5XFxcIjsgfVxcblxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgxXFxcIjsgfVxcblxcbi5mYS10eXBvMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDJiXFxcIjsgfVxcblxcbi5mYS11YmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MDJcXFwiOyB9XFxuXFxuLmZhLXVidW50dTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2RmXFxcIjsgfVxcblxcbi5mYS11aWtpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDAzXFxcIjsgfVxcblxcbi5mYS11bWJyYWNvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4ZThcXFwiOyB9XFxuXFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTlcXFwiOyB9XFxuXFxuLmZhLXVtYnJlbGxhLWJlYWNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1Y2FcXFwiOyB9XFxuXFxuLmZhLXVuY2hhcnRlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDg0XFxcIjsgfVxcblxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZFxcXCI7IH1cXG5cXG4uZmEtdW5kbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUyXFxcIjsgfVxcblxcbi5mYS11bmRvLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmVhXFxcIjsgfVxcblxcbi5mYS11bmlyZWdpc3RyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDA0XFxcIjsgfVxcblxcbi5mYS11bml0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDQ5XFxcIjsgfVxcblxcbi5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOWFcXFwiOyB9XFxuXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5Y1xcXCI7IH1cXG5cXG4uZmEtdW5saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxMjdcXFwiOyB9XFxuXFxuLmZhLXVubG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDljXFxcIjsgfVxcblxcbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxM2VcXFwiOyB9XFxuXFxuLmZhLXVuc3BsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwN2NcXFwiOyB9XFxuXFxuLmZhLXVudGFwcGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwNVxcXCI7IH1cXG5cXG4uZmEtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTNcXFwiOyB9XFxuXFxuLmZhLXVwczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmN2UwXFxcIjsgfVxcblxcbi5mYS11c2I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI4N1xcXCI7IH1cXG5cXG4uZmEtdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA3XFxcIjsgfVxcblxcbi5mYS11c2VyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDA2XFxcIjsgfVxcblxcbi5mYS11c2VyLWFsdC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGZhXFxcIjsgfVxcblxcbi5mYS11c2VyLWFzdHJvbmF1dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGZiXFxcIjsgfVxcblxcbi5mYS11c2VyLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZmNcXFwiOyB9XFxuXFxuLmZhLXVzZXItY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyYmRcXFwiOyB9XFxuXFxuLmZhLXVzZXItY2xvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmZFxcXCI7IH1cXG5cXG4uZmEtdXNlci1jb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjRmZVxcXCI7IH1cXG5cXG4uZmEtdXNlci1lZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZmZcXFwiOyB9XFxuXFxuLmZhLXVzZXItZnJpZW5kczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTAwXFxcIjsgfVxcblxcbi5mYS11c2VyLWdyYWR1YXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MDFcXFwiOyB9XFxuXFxuLmZhLXVzZXItaW5qdXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNzI4XFxcIjsgfVxcblxcbi5mYS11c2VyLWxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwMlxcXCI7IH1cXG5cXG4uZmEtdXNlci1tZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGYwXFxcIjsgfVxcblxcbi5mYS11c2VyLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MDNcXFwiOyB9XFxuXFxuLmZhLXVzZXItbmluamE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwNFxcXCI7IH1cXG5cXG4uZmEtdXNlci1udXJzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODJmXFxcIjsgfVxcblxcbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzNFxcXCI7IH1cXG5cXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIxYlxcXCI7IH1cXG5cXG4uZmEtdXNlci1zaGllbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjUwNVxcXCI7IH1cXG5cXG4uZmEtdXNlci1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTA2XFxcIjsgfVxcblxcbi5mYS11c2VyLXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTA3XFxcIjsgfVxcblxcbi5mYS11c2VyLXRpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTA4XFxcIjsgfVxcblxcbi5mYS11c2VyLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMzVcXFwiOyB9XFxuXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzBcXFwiOyB9XFxuXFxuLmZhLXVzZXJzLWNvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNTA5XFxcIjsgfVxcblxcbi5mYS11c2Vycy1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDczXFxcIjsgfVxcblxcbi5mYS11c3BzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZTFcXFwiOyB9XFxuXFxuLmZhLXVzc3VubmFoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MDdcXFwiOyB9XFxuXFxuLmZhLXV0ZW5zaWwtc3Bvb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJlNVxcXCI7IH1cXG5cXG4uZmEtdXRlbnNpbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJlN1xcXCI7IH1cXG5cXG4uZmEtdmFhZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MDhcXFwiOyB9XFxuXFxuLmZhLXZlY3Rvci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjYlxcXCI7IH1cXG5cXG4uZmEtdmVudXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyMVxcXCI7IH1cXG5cXG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyMjZcXFwiOyB9XFxuXFxuLmZhLXZlbnVzLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIyOFxcXCI7IH1cXG5cXG4uZmEtdmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDg1XFxcIjsgfVxcblxcbi5mYS12ZXN0LXBhdGNoZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA4NlxcXCI7IH1cXG5cXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjM3XFxcIjsgfVxcblxcbi5mYS12aWFkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJhOVxcXCI7IH1cXG5cXG4uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmFhXFxcIjsgfVxcblxcbi5mYS12aWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0OTJcXFwiOyB9XFxuXFxuLmZhLXZpYWxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0OTNcXFwiOyB9XFxuXFxuLmZhLXZpYmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MDlcXFwiOyB9XFxuXFxuLmZhLXZpZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2RcXFwiOyB9XFxuXFxuLmZhLXZpZGVvLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0ZTJcXFwiOyB9XFxuXFxuLmZhLXZpaGFyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNmE3XFxcIjsgfVxcblxcbi5mYS12aW1lbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDBhXFxcIjsgfVxcblxcbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5NFxcXCI7IH1cXG5cXG4uZmEtdmltZW8tdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjdkXFxcIjsgfVxcblxcbi5mYS12aW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxY2FcXFwiOyB9XFxuXFxuLmZhLXZpcnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzRcXFwiOyB9XFxuXFxuLmZhLXZpcnVzLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwNzVcXFwiOyB9XFxuXFxuLmZhLXZpcnVzZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTA3NlxcXCI7IH1cXG5cXG4uZmEtdms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE4OVxcXCI7IH1cXG5cXG4uZmEtdm52OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MGJcXFwiOyB9XFxuXFxuLmZhLXZvaWNlbWFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmODk3XFxcIjsgfVxcblxcbi5mYS12b2xsZXliYWxsLWJhbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQ1ZlxcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyN1xcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLW11dGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhOVxcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjsgfVxcblxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7IH1cXG5cXG4uZmEtdm90ZS15ZWE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjc3MlxcXCI7IH1cXG5cXG4uZmEtdnItY2FyZGJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MjlcXFwiOyB9XFxuXFxuLmZhLXZ1ZWpzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MWZcXFwiOyB9XFxuXFxuLmZhLXdhbGtpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjU1NFxcXCI7IH1cXG5cXG4uZmEtd2FsbGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1NTVcXFwiOyB9XFxuXFxuLmZhLXdhcmVob3VzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDk0XFxcIjsgfVxcblxcbi5mYS13YXRjaG1hbi1tb25pdG9yaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGUwODdcXFwiOyB9XFxuXFxuLmZhLXdhdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3NzNcXFwiOyB9XFxuXFxuLmZhLXdhdmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4M2VcXFwiOyB9XFxuXFxuLmZhLXdhemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjgzZlxcXCI7IH1cXG5cXG4uZmEtd2VlYmx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1Y2NcXFwiOyB9XFxuXFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxOGFcXFwiOyB9XFxuXFxuLmZhLXdlaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDk2XFxcIjsgfVxcblxcbi5mYS13ZWlnaHQtaGFuZ2luZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWNkXFxcIjsgfVxcblxcbi5mYS13ZWl4aW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFkN1xcXCI7IH1cXG5cXG4uZmEtd2hhdHNhcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzMlxcXCI7IH1cXG5cXG4uZmEtd2hhdHNhcHAtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MGNcXFwiOyB9XFxuXFxuLmZhLXdoZWVsY2hhaXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5M1xcXCI7IH1cXG5cXG4uZmEtd2htY3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQwZFxcXCI7IH1cXG5cXG4uZmEtd2lmaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMWViXFxcIjsgfVxcblxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMjY2XFxcIjsgfVxcblxcbi5mYS13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3MmVcXFwiOyB9XFxuXFxuLmZhLXdpbmRvdy1jbG9zZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDEwXFxcIjsgfVxcblxcbi5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJkMFxcXCI7IH1cXG5cXG4uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDFcXFwiOyB9XFxuXFxuLmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyZDJcXFwiOyB9XFxuXFxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE3YVxcXCI7IH1cXG5cXG4uZmEtd2luZS1ib3R0bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjcyZlxcXCI7IH1cXG5cXG4uZmEtd2luZS1nbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNGUzXFxcIjsgfVxcblxcbi5mYS13aW5lLWdsYXNzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNWNlXFxcIjsgfVxcblxcbi5mYS13aXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjVjZlxcXCI7IH1cXG5cXG4uZmEtd2l6YXJkcy1vZi10aGUtY29hc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjczMFxcXCI7IH1cXG5cXG4uZmEtd29kdTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlMDg4XFxcIjsgfVxcblxcbi5mYS13b2xmLXBhY2stYmF0dGFsaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY1MTRcXFwiOyB9XFxuXFxuLmZhLXdvbi1zaWduOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYxNTlcXFwiOyB9XFxuXFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTlhXFxcIjsgfVxcblxcbi5mYS13b3JkcHJlc3Mtc2ltcGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0MTFcXFwiOyB9XFxuXFxuLmZhLXdwYmVnaW5uZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjI5N1xcXCI7IH1cXG5cXG4uZmEtd3BleHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMmRlXFxcIjsgfVxcblxcbi5mYS13cGZvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYyOThcXFwiOyB9XFxuXFxuLmZhLXdwcmVzc3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjNlNFxcXCI7IH1cXG5cXG4uZmEtd3JlbmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWRcXFwiOyB9XFxuXFxuLmZhLXgtcmF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY0OTdcXFwiOyB9XFxuXFxuLmZhLXhib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjQxMlxcXCI7IH1cXG5cXG4uZmEteGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTY4XFxcIjsgfVxcblxcbi5mYS14aW5nLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTY5XFxcIjsgfVxcblxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjIzYlxcXCI7IH1cXG5cXG4uZmEteWFob286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE5ZVxcXCI7IH1cXG5cXG4uZmEteWFtbWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY4NDBcXFwiOyB9XFxuXFxuLmZhLXlhbmRleDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDEzXFxcIjsgfVxcblxcbi5mYS15YW5kZXgtaW50ZXJuYXRpb25hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDE0XFxcIjsgfVxcblxcbi5mYS15YXJuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGY3ZTNcXFwiOyB9XFxuXFxuLmZhLXllbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjFlOVxcXCI7IH1cXG5cXG4uZmEteWVuLXNpZ246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE1N1xcXCI7IH1cXG5cXG4uZmEteWluLXlhbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjZhZFxcXCI7IH1cXG5cXG4uZmEteW9hc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjJiMVxcXCI7IH1cXG5cXG4uZmEteW91dHViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMTY3XFxcIjsgfVxcblxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNDMxXFxcIjsgfVxcblxcbi5mYS16aGlodTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmNjNmXFxcIjsgfVxcblxcbi5zci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDsgfVxcblxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBjbGlwOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87IH1cXG5cXG4vKiFcXG4gKiBGb250IEF3ZXNvbWUgRnJlZSA1LjE1LjMgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxcbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LWRpc3BsYXk6IGJsb2NrO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7IH1cXG5cXG4uZmEsXFxuLmZhcyB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcblxcbi8qIVxcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMyBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbVxcbiAqIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgKEljb25zOiBDQyBCWSA0LjAsIEZvbnRzOiBTSUwgT0ZMIDEuMSwgQ29kZTogTUlUIExpY2Vuc2UpXFxuICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZGlzcGxheTogYmxvY2s7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX183X19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX185X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xMV9fXyArIFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpOyB9XFxuXFxuLmZhciB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbi5tZW51IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGhlaWdodDogMzlweDsgfVxcbiAgLm1lbnUgYSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG4gICAgLm1lbnUgYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICM2ZmIxZGQ7IH1cXG4gIC5tZW51IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5tZW51IHVsIGxpIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubWVudSAubG9nby1saW5rIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zcHg7IH1cXG5cXG4uYnRuLCAuYnRuLWFsdCwgLmJ0bi13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjg2Y2U7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuICAuYnRuOmhvdmVyLCAuYnRuLWFsdDpob3ZlciwgLmJ0bi13YXJuaW5nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxOGZjZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgfVxcblxcbi5idG5bZGlzYWJsZWRdLCAuYnRuLWFsdFtkaXNhYmxlZF0sIC5idG4td2FybmluZ1tkaXNhYmxlZF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBjdXJzb3I6IGluaGVyaXQ7IH1cXG4gIC5idG5bZGlzYWJsZWRdOmhvdmVyLCAuYnRuLWFsdFtkaXNhYmxlZF06aG92ZXIsIC5idG4td2FybmluZ1tkaXNhYmxlZF06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5idG4tYWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XFxuICAuYnRuLWFsdDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uYnRuLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2NzYyYztcXG4gIGJvcmRlcjogc29saWQgMXB4ICNjMDYzMjU7IH1cXG4gIC5idG4td2FybmluZzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDg4NGM7IH1cXG5cXG4ubG9nbywgLnRvb2xiYXIgLnRvb2xiYXItbG9nbyB7XFxuICB3aWR0aDogMjJweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA2cHg7IH1cXG5cXG4uZHJhdy1idG4tYWx0IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgLmRyYXctYnRuLWFsdDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzZmYjFkZDsgfVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7IH1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7IH1cXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzE0NzRiNDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDM1cHg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMzlweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzI2MjYyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMzMzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1jb250ZW50IC50aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAubW9kYWwgLm1vZGFsLWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDE1cHg7IH1cXG4gICAgLm1vZGFsIC5tb2RhbC1oZWFkZXIgLmNsb3NlLWJ0biB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cXG4gICAgICAubW9kYWwgLm1vZGFsLWhlYWRlciAuY2xvc2UtYnRuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA2NXZ3OyB9IH1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XFxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDY1dmg7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDsgfSB9XFxuXFxuLnRvb2xiYXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC50b29sYmFyIC50b29sYmFyLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgfVxcbiAgLnRvb2xiYXIgLnNlcGFyYXRvciB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDZweCA0cHggMTBweCA0cHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAudG9vbGJhciAuY29sb3Itc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcbiAgLnRvb2xiYXIgLmJ0bi10b29sLCAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi10b29sOmhvdmVyLCAudG9vbGJhciAuYnRuLWNvbG9yOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyB9XFxuICAudG9vbGJhciB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMHB4OyB9XFxuICAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAudG9vbGJhciAuYnRuLWNvbG9yOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7IH1cXG4gIC50b29sYmFyIC5zZWxlY3RlZCB7XFxuICAgIGNvbG9yOiAjMzE4ZmNlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG4gICAgLnRvb2xiYXIgLnNlbGVjdGVkOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzZmYjFkZDsgfVxcbiAgLnRvb2xiYXIgLnNlbGVjdGVkLWNvbG9yIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmZiMWRkOyB9XFxuICAudG9vbGJhciAuZGlzYWJsZWQge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuICAgIC50b29sYmFyIC5kaXNhYmxlZDpob3ZlciB7XFxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTsgfVxcbiAgLnRvb2xiYXIgLmxpbmUtaWNvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAudG9vbGJhciB7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnRvb2xiYXIge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAgIC50b29sYmFyIC50b29sYmFyLWxvZ28ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogODQ1cHgpIHtcXG4gIC50b29sYmFyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4OyB9XFxuICAgIC50b29sYmFyIC5idG4tdG9vbCwgLnRvb2xiYXIgLmJ0bi1jb2xvciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuICAgIC50b29sYmFyIC5jb2xvci1zZXBhcmF0b3Ige1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgLnRvb2xiYXIgLnNlcGFyYXRvciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9IH1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDc2MHB4KSB7XFxuICAudG9vbGJhciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDsgfVxcbiAgICAudG9vbGJhciAuc2VwYXJhdG9yIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi10b29sLCAudG9vbGJhciAuYnRuLWNvbG9yIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cXG4gICAgLnRvb2xiYXIgLmJ0bi1jb2xvciB7XFxuICAgICAgd2lkdGg6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH0gfVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDogNjg1cHgpIHtcXG4gIC50b29sYmFyIC5idG4tY29sb3Ige1xcbiAgICBwYWRkaW5nOiAzcHg7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZpbGwud29ya2VyLmpzXCIpO1xufVxuIiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc2Nzcy9kcmF3LnNjc3NcIjtcclxuaW1wb3J0IFwibGF0by1mb250XCI7XHJcbmltcG9ydCBcIi4uL2Zhdmljb24uaWNvXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi9tb2RlbHMvdG9vbC10eXBlXCI7XHJcbmltcG9ydCB0b29sRnJvbVR5cGUgZnJvbSBcIi4vdG9vbHMvdG9vbC1mcm9tLXR5cGVcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vdG9vbHMvdGV4dFwiO1xyXG5pbXBvcnQgRmlsbCBmcm9tIFwiLi90b29scy9maWxsXCI7XHJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi90b29scy9jb2xvci1waWNrZXJcIjtcclxuaW1wb3J0IFJlY3QgZnJvbSBcIi4vdG9vbHMvcmVjdFwiO1xyXG5pbXBvcnQgTGluZSBmcm9tIFwiLi90b29scy9saW5lXCI7XHJcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL3Rvb2xzL2VsbGlwc2VcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25TeXN0ZW0gZnJvbSBcIi4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1zeXN0ZW1cIjtcclxuaW1wb3J0IERyYXdpbmdEYXRhIGZyb20gXCIuL21vZGVscy9kcmF3aW5nLWRhdGFcIjtcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbC9pbWFnZS1tb2RhbFwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL21vZGVscy92ZWN0b3JcIjtcclxuaW1wb3J0IEZpbGxXb3JrZXIgZnJvbSBcIi4vZmlsbC53b3JrZXIuanNcIjtcclxuaW1wb3J0IGluaXRDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENBTlZBU19TSVpFID0gMC45O1xyXG5jb25zdCBDQU5WQVNfU0laRV9NRURJVU0gPSAwLjg1O1xyXG5jb25zdCBDQU5WQVNfU0laRV9TTUFMTCA9IDAuODtcclxuY29uc3QgTUVESVVNX1NJWkVfUFggPSA1NTA7XHJcbmNvbnN0IFNNQUxMX1NJWkVfUFggPSA0MjA7XHJcbmNvbnN0IERFRkFVTFRfQlJVU0hfU0laRSA9IDIwO1xyXG5jb25zdCBERUZBVUxUX1BBSU5UX0NPTE9SID0gXCIjMDAwMDAwXCI7XHJcbmNvbnN0IERFRkFVTFRfUEFJTlRfVE9PTCA9IFRvb2xUeXBlLkJSVVNIO1xyXG5jb25zdCBORVRfQ1VSU09SX1VQREFURV9JTlRFUlZBTF9NUyA9IDUwO1xyXG5jb25zdCBub3RpZmljYXRpb25TeXN0ZW0gPSBuZXcgTm90aWZpY2F0aW9uU3lzdGVtKCk7XHJcbmxldCBjYW52YXMsIHNvY2tldCwgY3R4LCBiZ0NhbnZhcywgYmdDdHgsIGNvbG9yU2VsZWN0b3IsIGltYWdlU2VsZWN0aW9uTW9kYWwsIHNpemVWYWx1ZVNwYW4sXHJcblx0YnJ1c2hTaXplTWVudSwgcm9vbVVybExpbmssIHRvb2xiYXIsIHNoYXBlUHJldmlld0NhbnZhcywgc2hhcGVQcmV2aWV3Q3R4LCBpbnNlcnRlZEltYWdlQ2FudmFzLCBcclxuXHRpbnNlcnRlZEltYWdlQ3R4LCBpbWFnZVByZXZpZXc7XHJcblxyXG5sZXQgaXNEcmF3aW5nID0gZmFsc2U7XHJcbmxldCBwYWludFRvb2wgPSB0b29sRnJvbVR5cGUoREVGQVVMVF9QQUlOVF9UT09MLCBERUZBVUxUX0JSVVNIX1NJWkUsIERFRkFVTFRfUEFJTlRfQ09MT1IpO1xyXG5sZXQgZHJhd2luZ1N0YXJ0UG9zID0gbmV3IFZlY3RvcigpO1xyXG5sZXQgZHJhd2luZ0VuZFBvcyA9IG5ldyBWZWN0b3IoKTtcclxubGV0IGlzU2F2aW5nQ2FudmFzID0gZmFsc2U7XHJcbmxldCBsYXN0U2VsZWN0ZWRTbGlkZXIgPSBudWxsO1xyXG5sZXQgdG91Y2hKdXN0RW5kZWQgPSBmYWxzZTtcclxubGV0IGlzRmlyc3RKb2luID0gdHJ1ZTtcclxubGV0IGN1cnNvck1vdmVkID0gZmFsc2U7XHJcbmxldCBjdXJzb3JQb3NpdGlvbiA9IG5ldyBWZWN0b3IoKTtcclxubGV0IHVzZXJzID0gW107XHJcbmxldCBzaG93UmVtb3RlQ3Vyc29ycyA9IHRydWU7XHJcblxyXG4vL2ZvciBpbnNlcnQgaW1hZ2VcclxubGV0IHRlcm1EcmF3aW5nID0gZmFsc2U7XHJcbmxldCBpc0luc2VydGluZyA9IGZhbHNlOyAgICBcclxudmFyIHJlY3RJbWFnZSA9IHtzdGFydFg6MzAsIHN0YXJ0WTo1MCwgdzoxMDAsIGg6MjAwfSxcclxuZHJhZyA9IGZhbHNlLFxyXG5tb3VzZVgsIFxyXG5tb3VzZVksXHJcbmNsb3NlRW5vdWdoID0gMTAsXHJcbmRyYWdUTD0gZmFsc2UsXHJcbmRyYWdCTD0gZmFsc2UsXHJcbmRyYWdUUj1mYWxzZSxcclxuZHJhZ0JSPWZhbHNlO1xyXG4vLyBjYWxjdWxhdGUgY2FudmFzIHNpemUgYmFzZWQgb24gd2luZG93IGRpbWVuc2lvbnNcclxuZnVuY3Rpb24gZGVmYXVsdENhbnZhc1NpemUoKVxyXG57XHJcblx0bGV0IG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBDQU5WQVNfU0laRTtcclxuXHRsZXQgbmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogQ0FOVkFTX1NJWkU7XHJcblxyXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IFNNQUxMX1NJWkVfUFgpXHJcblx0XHRuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogQ0FOVkFTX1NJWkVfU01BTEw7XHJcblx0ZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCBNRURJVU1fU0laRV9QWClcclxuXHRcdG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBDQU5WQVNfU0laRV9NRURJVU07XHJcblxyXG5cdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCBTTUFMTF9TSVpFX1BYKVxyXG5cdFx0bmV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogQ0FOVkFTX1NJWkVfU01BTEw7XHJcblx0ZWxzZSBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgTUVESVVNX1NJWkVfUFgpXHJcblx0XHRuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBDQU5WQVNfU0laRV9NRURJVU07XHJcblxyXG5cdG5ld1dpZHRoID0gTWF0aC5yb3VuZChuZXdXaWR0aCk7XHJcblx0bmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChuZXdIZWlnaHQpO1xyXG5cclxuXHRyZXR1cm4ge3dpZHRoOiBuZXdXaWR0aCwgaGVpZ2h0OiBuZXdIZWlnaHR9O1xyXG59XHJcblxyXG4vLyBtYWtlcyBzdXJlIGNhbnZhcyBpcyBuZXZlciBvYnNjdXJlZCBieSB0b29sYmFyIGFuZCBuYXZiYXJcclxuZnVuY3Rpb24gcmVwb3NpdGlvbkNhbnZhcygpXHJcbntcclxuXHRjb25zdCBjYW52YXNMYXllcnNSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXMtbGF5ZXJzXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRpZiAoY2FudmFzLndpZHRoID4gY2FudmFzTGF5ZXJzUmVjdC53aWR0aClcclxuXHR7XHJcblx0XHRjYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcblx0XHRiZ0NhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuXHRcdHNoYXBlUHJldmlld0NhbnZhcy5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuXHRcdGluc2VydGVkSW1hZ2VDYW52YXMuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcblx0fSBlbHNlXHJcblx0e1xyXG5cdFx0Y2FudmFzLnN0eWxlLmxlZnQgPSBcImluaXRpYWxcIjtcclxuXHRcdGJnQ2FudmFzLnN0eWxlLmxlZnQgPSBcImluaXRpYWxcIjtcclxuXHRcdHNoYXBlUHJldmlld0NhbnZhcy5zdHlsZS5sZWZ0ID0gXCJpbml0aWFsXCI7XHJcblx0XHRpbnNlcnRlZEltYWdlQ2FudmFzLnN0eWxlLmxlZnQgPSBcImluaXRpYWxcIjtcclxuXHR9XHJcblxyXG5cdGlmIChjYW52YXMuaGVpZ2h0ID4gY2FudmFzTGF5ZXJzUmVjdC5oZWlnaHQpXHJcblx0e1xyXG5cdFx0Y2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblx0XHRiZ0NhbnZhcy5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG5cdFx0c2hhcGVQcmV2aWV3Q2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblx0XHRpbnNlcnRlZEltYWdlQ2FudmFzLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblx0fSBlbHNlXHJcblx0e1xyXG5cdFx0Y2FudmFzLnN0eWxlLnRvcCA9IFwiaW5pdGlhbFwiO1xyXG5cdFx0YmdDYW52YXMuc3R5bGUudG9wID0gXCJpbml0aWFsXCI7XHJcblx0XHRzaGFwZVByZXZpZXdDYW52YXMuc3R5bGUudG9wID0gXCJpbml0aWFsXCI7XHJcblx0XHRpbnNlcnRlZEltYWdlQ2FudmFzLnN0eWxlLnRvcCA9IFwiaW5pdGlhbFwiO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzU2l6ZShzaXplKVxyXG57XHJcblx0Y29uc3QgY2FudmFzRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcblx0Y29uc3QgYmdEYXRhID0gYmdDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xyXG5cdGNhbnZhcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHRjYW52YXMud2lkdGggPSBzaXplLndpZHRoO1xyXG5cdGJnQ2FudmFzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdGJnQ2FudmFzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRzaGFwZVByZXZpZXdDYW52YXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0c2hhcGVQcmV2aWV3Q2FudmFzLndpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRpbnNlcnRlZEltYWdlQ2FudmFzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdGluc2VydGVkSW1hZ2VDYW52YXMud2lkdGggPSAgc2l6ZS53aWR0aDtcclxuXHRyZXBvc2l0aW9uQ2FudmFzKCk7XHJcblx0bG9hZENhbnZhc0RhdGEoY3R4LCBjYW52YXNEYXRhKTtcclxuXHRsb2FkQ2FudmFzRGF0YShiZ0N0eCwgYmdEYXRhKTtcclxuXHRmaWxsQmFja2dyb3VuZCgpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLXdpZHRoXCIpLnZhbHVlID0gc2l6ZS53aWR0aDtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1oZWlnaHRcIikudmFsdWUgPSBzaXplLmhlaWdodDtcclxuXHR1cGRhdGVUZXh0Q3Vyc29yUG9zKCk7XHJcbn1cclxuXHJcbi8vIGxvYWQgaW1hZ2UgZnJvbSBjYW52YXNVUkxcclxuZnVuY3Rpb24gbG9hZENhbnZhc0RhdGEoY3R4LCBjYW52YXNEYXRhKVxyXG57XHJcblx0bGV0IGNhbnZhc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0Y2FudmFzSW1hZ2Uub25sb2FkID0gKCkgPT5cclxuXHR7XHJcblx0XHRjdHguZHJhd0ltYWdlKGNhbnZhc0ltYWdlLCAwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRjYW52YXNJbWFnZS5zcmMgPSBjYW52YXNEYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSW5zZXJ0ZWRJbWFnZShjdHgsIGNhbnZhc0RhdGEsIGxlZnQsIHRvcCwgdywgaClcclxue1xyXG5cdGxldCBjYW52YXNJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdGNhbnZhc0ltYWdlLm9ubG9hZCA9ICgpID0+XHJcblx0e1xyXG5cdFx0Y3R4LmRyYXdJbWFnZShjYW52YXNJbWFnZSwgMCwgMCk7XHJcblx0fTtcclxuXHJcblx0Y2FudmFzSW1hZ2Uuc3JjID0gY2FudmFzRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFpbnRUb29sU3dpdGNoZWQoZSlcclxue1xyXG5cdHBhaW50VG9vbCA9IHRvb2xGcm9tVHlwZShlLmRldGFpbCwgcGFpbnRUb29sLnNpemUsIHBhaW50VG9vbC5jb2xvcik7XHJcblx0dXBkYXRlQnJ1c2hQcmV2aWV3KCk7XHJcbn1cclxuXHJcbi8vIGNvbG9yIGNoYW5nZSBieSBjbGlja2luZyBhIHRvb2xiYXIgaWNvbiBvciBlZGl0aW5nIGNvbG9yIGlucHV0XHJcbmZ1bmN0aW9uIHBhaW50Q29sb3JDaGFuZ2VkKGUsIGNvbG9yPW51bGwpXHJcbntcclxuXHJcblx0aWYgKGUgIT0gbnVsbCAmJiBlLnRhcmdldCA9PSBjb2xvclNlbGVjdG9yKVxyXG5cdHtcclxuXHRcdGNvbG9yID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR0b29sYmFyLmNsZWFyU2VsZWN0ZWRDb2xvcigpO1xyXG5cclxuXHR9IGVsc2VcclxuXHR7XHJcblx0XHRpZiAoZSAhPSBudWxsKSAvLyBjaGFuZ2VkIGJ5IHRvb2xiYXJcclxuXHRcdFx0Y29sb3IgPSBlLmRldGFpbDtcclxuXHRcdGVsc2UgLy8gY2hhbmdlZCBieSBjb2xvciBwaWNrZXJcclxuXHRcdFx0dG9vbGJhci5jbGVhclNlbGVjdGVkQ29sb3IoKTtcclxuXHJcblx0XHRjb2xvclNlbGVjdG9yLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRwYWludFRvb2wuc2V0Q29sb3IoY29sb3IpO1xyXG5cdHVwZGF0ZUJydXNoUHJldmlldygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb29tVXJsQ2xpY2tlZChlKVxyXG57XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEVYVEFSRUFcIik7XHJcblx0dGV4dEFyZWEudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jbGlwYm9hcmQ7XHJcblx0dGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImNsaXBib2FyZFwiKTtcclxuXHRlLmN1cnJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG5cdHRleHRBcmVhLmZvY3VzKCk7XHJcblx0dGV4dEFyZWEuc2VsZWN0KCk7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuXHR9IGNhdGNoIChlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIkVSUk9SOiBjYW4ndCBjb3B5IFVSTCB0byBjbGlwYm9hcmRcIik7XHJcblx0fVxyXG5cclxuXHRlLmN1cnJlbnRUYXJnZXQucmVtb3ZlQ2hpbGQodGV4dEFyZWEpO1xyXG59XHJcblxyXG4vLyBoYW5kbGVzIG1vdXNlIG1vdmUgYW5kIHRvdWNoIG1vdmVcclxuZnVuY3Rpb24gY2FudmFzTW91c2VNb3ZlZChlKVxyXG57XHJcblx0Y29uc3QgYnJ1c2hQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1icnVzaC1wcmV2aWV3XCIpO1xyXG5cdGNvbnN0IGxlZnRQb3MgPSBlLmNsaWVudFggLSBicnVzaFByZXZpZXcub2Zmc2V0V2lkdGggLyAyO1xyXG5cdGNvbnN0IHRvcFBvcyA9IGUuY2xpZW50WSAtIGJydXNoUHJldmlldy5vZmZzZXRIZWlnaHQgLyAyO1xyXG5cdGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLmxlZnQgPSBgJHtsZWZ0UG9zfXB4YDtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUudG9wID0gYCR7dG9wUG9zfXB4YDtcclxuXHRjdXJzb3JQb3NpdGlvbiA9IG5ldyBWZWN0b3IobGVmdFBvcyAtIGNhbnZhc1JlY3QueCwgdG9wUG9zIC0gY2FudmFzUmVjdC55KTtcclxuXHRjdXJzb3JNb3ZlZCA9IHRydWU7XHJcblxyXG5cdGlmIChpc0RyYXdpbmcpXHJcblx0e1xyXG5cdFx0bGV0IHBvc1gsIHBvc1k7XHJcblx0XHRsZXQgbnVtVG91Y2hlcztcclxuXHRcdGxldCByZWN0O1xyXG5cclxuXHRcdGlmIChlLnR5cGUgPT0gXCJ0b3VjaG1vdmVcIilcclxuXHRcdHtcclxuXHRcdFx0bnVtVG91Y2hlcyA9IGUudG91Y2hlcy5sZW5ndGg7XHJcblx0XHRcdHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRwb3NYID0gZS5vZmZzZXRYO1xyXG5cdFx0XHRwb3NZID0gZS5vZmZzZXRZO1xyXG5cdFx0XHRudW1Ub3VjaGVzID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bVRvdWNoZXM7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0aWYgKGUudHlwZSA9PSBcInRvdWNobW92ZVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zWCA9IGUudG91Y2hlc1tpXS5wYWdlWCAtIHJlY3QubGVmdDtcclxuXHRcdFx0XHRwb3NZID0gZS50b3VjaGVzW2ldLnBhZ2VZIC0gcmVjdC50b3A7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobnVsbCwgbmV3IFZlY3Rvcihwb3NYLCBwb3NZKSk7XHJcblxyXG5cdFx0XHQvLyBub3QgYSBzaGFwZSB0b29sXHJcblx0XHRcdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0ID09IGZhbHNlICYmIHBhaW50VG9vbCBpbnN0YW5jZW9mIExpbmUgPT0gZmFsc2UgJiZcclxuXHRcdFx0XHRwYWludFRvb2wgaW5zdGFuY2VvZiBFbGxpcHNlID09IGZhbHNlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3QgZHJhd2luZ0RhdGEgPSBuZXcgRHJhd2luZ0RhdGEoZHJhd2luZ1N0YXJ0UG9zLCBkcmF3aW5nRW5kUG9zLCBwYWludFRvb2wpO1xyXG5cdFx0XHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xyXG5cdFx0XHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XHJcblxyXG5cdFx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobmV3IFZlY3Rvcihwb3NYLCBwb3NZKSwgbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzaGFwZSB0b29sc1xyXG5cdFx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIFJlY3QpXHJcblx0XHR7XHJcblx0XHRcdHNldENvbnRleHRQcm9wZXJ0aWVzKHNoYXBlUHJldmlld0N0eCwgcGFpbnRUb29sKTtcclxuXHRcdFx0c2hhcGVQcmV2aWV3Q3R4LmNsZWFyUmVjdCgwLCAwLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLndpZHRoLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0XHRsZXQgaXNTcXVhcmUgPSBlLnNoaWZ0S2V5O1xyXG5cdFx0XHRwYWludFRvb2wuc3F1YXJlID0gaXNTcXVhcmU7XHJcblxyXG5cdFx0XHRsZXQgcmVjdCA9IG5ldyBSZWN0KHBhaW50VG9vbC5zaXplLCBwYWludFRvb2wuY29sb3IsIGlzU3F1YXJlKTtcclxuXHRcdFx0bGV0IHBvc1ggPSBlLm9mZnNldFg7XHJcblx0XHRcdGxldCBwb3NZID0gZS5vZmZzZXRZO1xyXG5cdFx0XHRyZWN0LmRyYXcoc2hhcGVQcmV2aWV3Q3R4LCBkcmF3aW5nU3RhcnRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnksIHBvc1gsIHBvc1kpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAocGFpbnRUb29sIGluc3RhbmNlb2YgTGluZSlcclxuXHRcdHtcclxuXHRcdFx0c2V0Q29udGV4dFByb3BlcnRpZXMoc2hhcGVQcmV2aWV3Q3R4LCBwYWludFRvb2wpO1xyXG5cdFx0XHRzaGFwZVByZXZpZXdDdHguY2xlYXJSZWN0KDAsIDAsIHNoYXBlUHJldmlld0N0eC5jYW52YXMud2lkdGgsIHNoYXBlUHJldmlld0N0eC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcblx0XHRcdGxldCBsaW5lID0gbmV3IExpbmUocGFpbnRUb29sLnNpemUsIHBhaW50VG9vbC5jb2xvcik7XHJcblx0XHRcdGxldCBwb3NYID0gZS5vZmZzZXRYO1xyXG5cdFx0XHRsZXQgcG9zWSA9IGUub2Zmc2V0WTtcclxuXHRcdFx0bGluZS5kcmF3KHNoYXBlUHJldmlld0N0eCwgZHJhd2luZ1N0YXJ0UG9zLngsIGRyYXdpbmdTdGFydFBvcy55LCBwb3NYLCBwb3NZKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpc0NpcmNsZSA9IGUuc2hpZnRLZXk7XHJcblx0XHRcdHBhaW50VG9vbC5jaXJjbGUgPSBpc0NpcmNsZTtcclxuXHJcblx0XHRcdHNldENvbnRleHRQcm9wZXJ0aWVzKHNoYXBlUHJldmlld0N0eCwgcGFpbnRUb29sKTtcclxuXHRcdFx0c2hhcGVQcmV2aWV3Q3R4LmNsZWFyUmVjdCgwLCAwLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLndpZHRoLCBzaGFwZVByZXZpZXdDdHguY2FudmFzLmhlaWdodCk7XHJcblxyXG5cdFx0XHRsZXQgZWxsaXBzZSA9IG5ldyBFbGxpcHNlKHBhaW50VG9vbC5zaXplLCBwYWludFRvb2wuY29sb3IsIGlzQ2lyY2xlKTtcclxuXHRcdFx0bGV0IHBvc1ggPSBlLm9mZnNldFg7XHJcblx0XHRcdGxldCBwb3NZID0gZS5vZmZzZXRZO1xyXG5cdFx0XHRlbGxpcHNlLmRyYXcoc2hhcGVQcmV2aWV3Q3R4LCBkcmF3aW5nU3RhcnRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnksIHBvc1gsIHBvc1kpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoaXNJbnNlcnRpbmcpIFxyXG5cdHtcclxuXHRcdG1vdXNlWCA9IGUub2Zmc2V0WDtcclxuICBcdFx0bW91c2VZID0gZS5vZmZzZXRZO1xyXG4gIFx0XHRpZihkcmFnVEwpe1xyXG5cdFx0XHRyZWN0SW1hZ2UudyArPSByZWN0SW1hZ2Uuc3RhcnRYLW1vdXNlWDtcclxuXHRcdFx0cmVjdEltYWdlLmggKz0gcmVjdEltYWdlLnN0YXJ0WS1tb3VzZVk7XHJcblx0XHRcdHJlY3RJbWFnZS5zdGFydFggPSBtb3VzZVg7XHJcblx0XHRcdHJlY3RJbWFnZS5zdGFydFkgPSBtb3VzZVk7XHJcblx0XHR9IGVsc2UgaWYoZHJhZ1RSKSB7XHJcblx0XHRcdHJlY3RJbWFnZS53ID0gTWF0aC5hYnMocmVjdEltYWdlLnN0YXJ0WC1tb3VzZVgpO1xyXG5cdFx0XHRyZWN0SW1hZ2UuaCArPSByZWN0SW1hZ2Uuc3RhcnRZLW1vdXNlWTtcclxuXHRcdFx0cmVjdEltYWdlLnN0YXJ0WSA9IG1vdXNlWTtcclxuXHRcdH0gZWxzZSBpZihkcmFnQkwpIHtcclxuXHRcdFx0cmVjdEltYWdlLncgKz0gcmVjdEltYWdlLnN0YXJ0WC1tb3VzZVg7XHJcblx0XHRcdHJlY3RJbWFnZS5oID0gTWF0aC5hYnMocmVjdEltYWdlLnN0YXJ0WS1tb3VzZVkpO1xyXG5cdFx0XHRyZWN0SW1hZ2Uuc3RhcnRYID0gbW91c2VYOyAgXHJcblx0XHR9IGVsc2UgaWYoZHJhZ0JSKSB7XHJcblx0XHRcdHJlY3RJbWFnZS53ID0gTWF0aC5hYnMocmVjdEltYWdlLnN0YXJ0WC1tb3VzZVgpO1xyXG5cdFx0XHRyZWN0SW1hZ2UuaCA9IE1hdGguYWJzKHJlY3RJbWFnZS5zdGFydFktbW91c2VZKTtcclxuXHRcdH1cclxuXHRcdGluc2VydGVkSW1hZ2VDdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XHJcblx0XHRkcmF3SW5zZXJ0ZWRJbWFnZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FudmFzTW91c2VEb3duKGUpXHJcbntcclxuXHQvLyByZXR1cm4gaWYgdGhpcyB3YXMgdHJpZ2dlcmVkIGJ5IGF1dG9tYXRpYyBtb3VzZWRvd24gZXZlbnQgYWZ0ZXIgdG91Y2ggc3RhcnRcclxuXHRpZiAodG91Y2hKdXN0RW5kZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGxldCBwb3NYID0gZS5vZmZzZXRYO1xyXG5cdGxldCBwb3NZID0gZS5vZmZzZXRZO1xyXG5cclxuXHRpZiAoZS50eXBlID09IFwidG91Y2hzdGFydFwiKVxyXG5cdHtcclxuXHRcdGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRwb3NYID0gZS50b3VjaGVzW2ldLnBhZ2VYIC0gcmVjdC5sZWZ0O1xyXG5cdFx0cG9zWSA9IGUudG91Y2hlc1tpXS5wYWdlWSAtIHJlY3QudG9wO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoaXNJbnNlcnRpbmcpIHtcclxuXHRcdG1vdXNlWCA9IGUub2Zmc2V0WDtcclxuICBcdFx0bW91c2VZID0gZS5vZmZzZXRZO1xyXG5cdFx0aWYoIGNoZWNrQ2xvc2VFbm91Z2gobW91c2VYLCByZWN0SW1hZ2Uuc3RhcnRYKSAmJiBjaGVja0Nsb3NlRW5vdWdoKG1vdXNlWSwgcmVjdEltYWdlLnN0YXJ0WSkgKXtcclxuXHRcdFx0ZHJhZ1RMID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdC8vIDIuIHRvcCByaWdodFxyXG5cdFx0ZWxzZSBpZiggY2hlY2tDbG9zZUVub3VnaChtb3VzZVgsIHJlY3RJbWFnZS5zdGFydFgrcmVjdEltYWdlLncpICYmIGNoZWNrQ2xvc2VFbm91Z2gobW91c2VZLCByZWN0SW1hZ2Uuc3RhcnRZKSApe1xyXG5cdFx0XHRkcmFnVFIgPSB0cnVlO1xyXG5cdFx0XHJcblx0XHR9XHJcblx0XHQvLyAzLiBib3R0b20gbGVmdFxyXG5cdFx0ZWxzZSBpZiggY2hlY2tDbG9zZUVub3VnaChtb3VzZVgsIHJlY3RJbWFnZS5zdGFydFgpICYmIGNoZWNrQ2xvc2VFbm91Z2gobW91c2VZLCByZWN0SW1hZ2Uuc3RhcnRZK3JlY3RJbWFnZS5oKSApe1xyXG5cdFx0XHRkcmFnQkwgPSB0cnVlO1xyXG5cdFx0XHJcblx0XHR9XHJcblx0XHQvLyA0LiBib3R0b20gcmlnaHRcclxuXHRcdGVsc2UgaWYoIGNoZWNrQ2xvc2VFbm91Z2gobW91c2VYLCByZWN0SW1hZ2Uuc3RhcnRYK3JlY3RJbWFnZS53KSAmJiBjaGVja0Nsb3NlRW5vdWdoKG1vdXNlWSwgcmVjdEltYWdlLnN0YXJ0WStyZWN0SW1hZ2UuaCkgKXtcclxuXHRcdFx0ZHJhZ0JSID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0fVxyXG5cdFx0Ly8gKDUuKSBub25lIG9mIHRoZW1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpc0luc2VydGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFnVEwgPSBkcmFnVFIgPSBkcmFnQkwgPSBkcmFnQlIgPSBmYWxzZTtcclxuXHRcdFx0Y3R4LmRyYXdJbWFnZShpbWFnZVByZXZpZXcsIHJlY3RJbWFnZS5zdGFydFgsIHJlY3RJbWFnZS5zdGFydFksIHJlY3RJbWFnZS53LCByZWN0SW1hZ2UuaCk7XHJcblx0XHRcdHNvY2tldC5lbWl0KFwiaW5zZXJ0SW1hZ2VcIiwgY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgcmVjdEltYWdlLnN0YXJ0WCwgcmVjdEltYWdlLnN0YXJ0WSwgcmVjdEltYWdlLncsIHJlY3RJbWFnZS5oKTtcclxuXHRcdFx0aW5zZXJ0ZWRJbWFnZUN0eC5jbGVhclJlY3QoMCwgMCwgaW5zZXJ0ZWRJbWFnZUNhbnZhcy53aWR0aCwgaW5zZXJ0ZWRJbWFnZUNhbnZhcy5oZWlnaHQpO1xyXG5cdFx0XHRpc0RyYXdpbmcgPSB0ZXJtRHJhd2luZztcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBkcmF3U2luZ2xlUG9pbnQocG9zWCwgcG9zWSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ2xvc2VFbm91Z2gocDEsIHAyKXtcclxuXHRyZXR1cm4gTWF0aC5hYnMocDEtcDIpPGNsb3NlRW5vdWdoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW52YXNUb3VjaFN0YXJ0KGUpXHJcbntcclxuXHRsZXQgcG9zWCwgcG9zWTtcclxuXHRsZXQgbnVtVG91Y2hlcyA9IGUudG91Y2hlcy5sZW5ndGg7XHJcblx0bGV0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ub3VjaGVzOyBpKyspXHJcblx0e1xyXG5cdFx0aWYgKGUudHlwZSA9PSBcInRvdWNoc3RhcnRcIilcclxuXHRcdHtcclxuXHRcdFx0cG9zWCA9IGUudG91Y2hlc1tpXS5wYWdlWCAtIHJlY3QubGVmdDtcclxuXHRcdFx0cG9zWSA9IGUudG91Y2hlc1tpXS5wYWdlWSAtIHJlY3QudG9wO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRyYXdTaW5nbGVQb2ludChwb3NYLCBwb3NZKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGhhbmRsZXMgbW91c2UgdXAgYW5kIHRvdWNoIGVuZFxyXG5mdW5jdGlvbiB3aW5kb3dNb3VzZVVwKGUpXHJcbntcclxuXHRpZiAoZS50eXBlID09IFwibW91c2V1cFwiICYmIHRvdWNoSnVzdEVuZGVkKVxyXG5cdHtcclxuXHRcdHRvdWNoSnVzdEVuZGVkID0gZmFsc2U7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNEcmF3aW5nICYmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0IHx8IHBhaW50VG9vbCBpbnN0YW5jZW9mIExpbmUgfHxcclxuXHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UpKVxyXG5cdHtcclxuXHRcdC8vIGNsZWFyIHByZXZpZXdcclxuXHRcdHNoYXBlUHJldmlld0N0eC5jbGVhclJlY3QoMCwgMCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy53aWR0aCwgc2hhcGVQcmV2aWV3Q3R4LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHRcdGxldCBwb3NYID0gZS5vZmZzZXRYO1xyXG5cdFx0bGV0IHBvc1kgPSBlLm9mZnNldFk7XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJDQU5WQVNcIilcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlRHJhd2luZ1BvcyhudWxsLCBuZXcgVmVjdG9yKHBvc1gsIHBvc1kpKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkcmF3aW5nRGF0YSA9IG5ldyBEcmF3aW5nRGF0YShkcmF3aW5nU3RhcnRQb3MsIGRyYXdpbmdFbmRQb3MsIHBhaW50VG9vbCk7XHJcblx0XHQvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIG5lZWRlZFxyXG5cdFx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIFJlY3QpXHJcblx0XHRcdGRyYXdpbmdEYXRhLnNxdWFyZSA9IHBhaW50VG9vbC5zcXVhcmU7XHJcblxyXG5cdFx0ZHJhdyhkcmF3aW5nRGF0YSk7XHJcblx0XHRzb2NrZXQuZW1pdChcImRyYXdcIiwgZHJhd2luZ0RhdGEpO1xyXG5cdH1cclxuXHRpZiAoaXNJbnNlcnRpbmcpIHtcclxuXHRcdGRyYWdUTCA9IGRyYWdUUiA9IGRyYWdCTCA9IGRyYWdCUiA9IGZhbHNlO1xyXG5cdH1cclxuXHRpc0RyYXdpbmcgPSBmYWxzZTtcclxuXHRsYXN0U2VsZWN0ZWRTbGlkZXIgPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW52YXNUb3VjaEVuZGVkKGUpXHJcbntcclxuXHR3aW5kb3dNb3VzZVVwKGUpO1xyXG5cdHRvdWNoSnVzdEVuZGVkID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FudmFzTW91c2VPdmVyKGUpXHJcbntcclxuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2FsLWJydXNoLXByZXZpZXdcIik7XHJcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBicnVzaFByZXZpZXcub2Zmc2V0V2lkdGggLyAyKSArIFwicHhcIjtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIGJydXNoUHJldmlldy5vZmZzZXRIZWlnaHQgLyAyKSArIFwicHhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FudmFzTW91c2VPdXQoKVxyXG57XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1icnVzaC1wcmV2aWV3XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb250ZXh0UHJvcGVydGllcyhjb250ZXh0LCB0b29sKVxyXG57XHJcblx0Y29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0b29sLm9wZXJhdGlvbjtcclxuXHRjb250ZXh0LmxpbmVXaWR0aCA9IHRvb2wuc2l6ZTtcclxuXHRjb250ZXh0LmxpbmVDYXAgPSB0b29sLnN0eWxlO1xyXG5cdGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0b29sLmNvbG9yO1xyXG5cdGNvbnRleHQuc2hhZG93Qmx1ciA9IHRvb2wuYmx1cjtcclxuXHRjb250ZXh0LnNoYWRvd0NvbG9yID0gdG9vbC5jb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdyhkcmF3aW5nRGF0YSlcclxue1xyXG5cdHNldENvbnRleHRQcm9wZXJ0aWVzKGN0eCwgZHJhd2luZ0RhdGEudG9vbCk7XHJcblxyXG5cdGNvbnN0IHBvc1ggPSBkcmF3aW5nRGF0YS5zdGFydFBvcy54O1xyXG5cdGNvbnN0IHBvc1kgPSBkcmF3aW5nRGF0YS5zdGFydFBvcy55O1xyXG5cclxuXHRpZiAoZHJhd2luZ0RhdGEudG9vbC50eXBlID09IFRvb2xUeXBlLlRFWFQgJiYgZHJhd2luZ0RhdGEudGV4dCAhPSBudWxsICYmIGRyYXdpbmdEYXRhLnRleHQgIT0gXCJcIilcclxuXHR7XHJcblx0XHRjdHguZm9udCA9IGAke2RyYXdpbmdEYXRhLnRvb2wuc2l6ZX1weCBMYXRvYDtcclxuXHRcdGN0eC5maWxsU3R5bGUgPSBkcmF3aW5nRGF0YS50b29sLmNvbG9yO1xyXG5cdFx0Y3R4LmZpbGxUZXh0KGRyYXdpbmdEYXRhLnRleHQsIHBvc1gsIHBvc1kpO1xyXG5cclxuXHR9IGVsc2UgaWYgKGRyYXdpbmdEYXRhLnRvb2wudHlwZSA9PSBUb29sVHlwZS5GSUxMKVxyXG5cdHtcclxuXHRcdGNvbnN0IHdpZHRoID0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aDtcclxuXHRcdGNvbnN0IGhlaWdodCA9IGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cdFx0bGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRsZXQgZmlsbFRvb2wgPSBuZXcgRmlsbChkcmF3aW5nRGF0YS50b29sLnNpemUsIGRyYXdpbmdEYXRhLnRvb2wuY29sb3IpO1xyXG5cdFx0bGV0IGZpbGxEYXRhID0gZmlsbFRvb2wuZ2V0RmlsbERhdGEocG9zWCwgcG9zWSwgd2lkdGgsIGhlaWdodCwgaW1hZ2VEYXRhKTtcclxuXHJcblx0XHRpZiAoZmlsbERhdGEgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh3aW5kb3cuV29ya2VyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIWNhbnZhcy5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9ncmVzc1wiKSlcclxuXHRcdFx0XHRjYW52YXMuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzXCIpO1xyXG5cclxuXHRcdFx0bGV0IHdvcmtlciA9IG5ldyBGaWxsV29ya2VyKCk7XHJcblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShbd2lkdGgsIGhlaWdodCwgcG9zWCwgcG9zWSwgaW1hZ2VEYXRhLCBmaWxsRGF0YVswXSwgZmlsbERhdGFbMV1dKTtcclxuXHRcdFx0d29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3R4LnB1dEltYWdlRGF0YShlLmRhdGEsIDAsIDApOyAvLyB1cGRhdGUgY2FudmFzXHJcblx0XHRcdFx0Y2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9ncmVzc1wiKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHR9IGVsc2VcclxuXHRcdHtcclxuXHRcdFx0RmlsbC5maWxsUGl4ZWxzKFt3aWR0aCwgaGVpZ2h0LCBwb3NYLCBwb3NZLCBpbWFnZURhdGEsIGZpbGxEYXRhWzBdLCBmaWxsRGF0YVsxXV0pO1xyXG5cdFx0XHRjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7IC8vIHVwZGF0ZSBjYW52YXNcclxuXHRcdH1cclxuXHJcblx0fSBlbHNlIGlmIChkcmF3aW5nRGF0YS50b29sLnR5cGUgPT0gVG9vbFR5cGUuUkVDVClcclxuXHR7XHJcblx0XHRsZXQgcmVjdCA9IG5ldyBSZWN0KGRyYXdpbmdEYXRhLnRvb2wuc2l6ZSwgZHJhd2luZ0RhdGEudG9vbC5jb2xvciwgZHJhd2luZ0RhdGEudG9vbC5zcXVhcmUpO1xyXG5cdFx0cmVjdC5kcmF3KGN0eCwgcG9zWCwgcG9zWSwgZHJhd2luZ0RhdGEuZW5kUG9zLngsIGRyYXdpbmdEYXRhLmVuZFBvcy55KTtcclxuXHJcblx0fSBlbHNlIGlmIChkcmF3aW5nRGF0YS50b29sLnR5cGUgPT0gVG9vbFR5cGUuTElORSlcclxuXHR7XHJcblx0XHRsZXQgbGluZSA9IG5ldyBMaW5lKGRyYXdpbmdEYXRhLnRvb2wuc2l6ZSwgZHJhd2luZ0RhdGEudG9vbC5jb2xvcik7XHJcblx0XHRsaW5lLmRyYXcoY3R4LCBwb3NYLCBwb3NZLCBkcmF3aW5nRGF0YS5lbmRQb3MueCwgZHJhd2luZ0RhdGEuZW5kUG9zLnkpO1xyXG5cclxuXHR9IGVsc2UgaWYgKGRyYXdpbmdEYXRhLnRvb2wudHlwZSA9PSBUb29sVHlwZS5FTExJUFNFKVxyXG5cdHtcclxuXHRcdGxldCBlbGxpcHNlID0gbmV3IEVsbGlwc2UoZHJhd2luZ0RhdGEudG9vbC5zaXplLCBkcmF3aW5nRGF0YS50b29sLmNvbG9yLCBkcmF3aW5nRGF0YS50b29sLmNpcmNsZSk7XHJcblx0XHRlbGxpcHNlLmRyYXcoY3R4LCBwb3NYLCBwb3NZLCBkcmF3aW5nRGF0YS5lbmRQb3MueCwgZHJhd2luZ0RhdGEuZW5kUG9zLnkpO1xyXG5cclxuXHR9IGVsc2VcclxuXHR7XHJcblx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRjdHgubW92ZVRvKGRyYXdpbmdEYXRhLnN0YXJ0UG9zLngsIGRyYXdpbmdEYXRhLnN0YXJ0UG9zLnkpO1xyXG5cdFx0Y3R4LmxpbmVUbyhkcmF3aW5nRGF0YS5lbmRQb3MueCwgZHJhd2luZ0RhdGEuZW5kUG9zLnkpO1xyXG5cdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1NpbmdsZVBvaW50KHBvc1gsIHBvc1kpXHJcbntcclxuXHRsZXQgbmV3UG9zID0gbmV3IFZlY3Rvcihwb3NYLCBwb3NZKTtcclxuXHR1cGRhdGVEcmF3aW5nUG9zKG5ld1BvcywgbmV3UG9zKTtcclxuXHJcblx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEZpbGwpXHJcblx0e1xyXG5cdFx0bGV0IGRyYXdpbmdEYXRhID0gbmV3IERyYXdpbmdEYXRhKGRyYXdpbmdTdGFydFBvcywgZHJhd2luZ0VuZFBvcywgcGFpbnRUb29sKTtcclxuXHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xyXG5cdFx0c29ja2V0LmVtaXQoXCJkcmF3XCIsIGRyYXdpbmdEYXRhKTtcclxuXHJcblx0fSBlbHNlIGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBDb2xvclBpY2tlcilcclxuXHR7XHJcblx0XHRsZXQgY29sb3IgPSBwYWludFRvb2wuZ2V0UGl4ZWxDb2xvcihjdHgsIGJnQ3R4LCBwb3NYLCBwb3NZKTtcclxuXHRcdHBhaW50Q29sb3JDaGFuZ2VkKG51bGwsIGNvbG9yKTtcclxuXHJcblx0fSBlbHNlIGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBSZWN0IHx8IHBhaW50VG9vbCBpbnN0YW5jZW9mIExpbmUgfHxcclxuXHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIEVsbGlwc2UpIC8vIHNoYXBlIHRvb2xzXHJcblx0e1xyXG5cdFx0aXNEcmF3aW5nID0gdHJ1ZTtcclxuXHJcblx0fSBlbHNlIGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBUZXh0ID09IGZhbHNlKSAvLyBvdGhlciBkcmF3aW5nIHRvb2xzXHJcblx0e1xyXG5cdFx0aXNEcmF3aW5nID0gdHJ1ZTtcclxuXHRcdGxldCBkcmF3aW5nRGF0YSA9IG5ldyBEcmF3aW5nRGF0YShkcmF3aW5nU3RhcnRQb3MsIGRyYXdpbmdFbmRQb3MsIHBhaW50VG9vbCk7XHJcblx0XHRkcmF3KGRyYXdpbmdEYXRhKTtcclxuXHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBhbiBlbGVtZW50IHRoYXQgZm9sbG93cyBtb3VzZSBjdXJzb3IuIEl0IHZpc3VhbGl6ZXMgdGhlIGJydXNoIHNpemUgYW5kIHNoYXBlXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsQnJ1c2hQcmV2aWV3KClcclxue1xyXG5cdGNvbnN0IGJydXNoUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0YnJ1c2hQcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJicnVzaC1wcmV2aWV3XCIpO1xyXG5cdGJydXNoUHJldmlldy5pZCA9IFwibG9jYWwtYnJ1c2gtcHJldmlld1wiO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnJ1c2hQcmV2aWV3KTtcclxuXHR1cGRhdGVCcnVzaFByZXZpZXcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVtb3RlQnJ1c2hQcmV2aWV3KHVzZXJOYW1lLCB1c2VySWQpXHJcbntcclxuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGJydXNoUHJldmlldy5jbGFzc0xpc3QuYWRkKFwiYnJ1c2gtcHJldmlldy1yZW1vdGVcIik7XHJcblx0YnJ1c2hQcmV2aWV3LmlkID0gYGJydXNoLXByZXZpZXctJHt1c2VySWR9YDtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUud2lkdGggPSBgJHtERUZBVUxUX0JSVVNIX1NJWkV9cHhgO1xyXG5cdGJydXNoUHJldmlldy5zdHlsZS5oZWlnaHQgPSBgJHtERUZBVUxUX0JSVVNIX1NJWkV9cHhgO1xyXG5cclxuXHRjb25zdCBuYW1lVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0bmFtZVRhZy5jbGFzc0xpc3QuYWRkKFwibmFtZS10YWdcIik7XHJcblx0bmFtZVRhZy50ZXh0Q29udGVudCA9IHVzZXJOYW1lO1xyXG5cdG5hbWVUYWcuc3R5bGUudG9wID0gYCR7REVGQVVMVF9CUlVTSF9TSVpFfXB4YDtcclxuXHRicnVzaFByZXZpZXcuYXBwZW5kKG5hbWVUYWcpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJydXNoUHJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VySWQpXHJcbntcclxuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJ1c2gtcHJldmlldy0ke3VzZXJJZH1gKTtcclxuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGJydXNoUHJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUJydXNoUHJldmlldygpXHJcbntcclxuXHRjb25zdCBzaXplID0gcGFpbnRUb29sLnNpemU7XHJcblx0Y29uc3QgYmx1ciA9IHBhaW50VG9vbC5ibHVyO1xyXG5cdGNvbnN0IGNvbG9yID0gcGFpbnRUb29sLmNvbG9yO1xyXG5cdGNvbnN0IHN0eWxlID0gcGFpbnRUb29sLnN0eWxlO1xyXG5cclxuXHRjb25zdCBjb2xvclByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbG9yLXByZXZpZXdcIik7XHJcblx0Y29sb3JQcmV2aWV3LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxuXHJcblx0Y29uc3QgYnJ1c2hQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhbC1icnVzaC1wcmV2aWV3XCIpO1xyXG5cdGJydXNoUHJldmlldy5zdHlsZS53aWR0aCA9IChzaXplICsgYmx1ciAvIDIpICsgXCJweFwiO1xyXG5cdGJydXNoUHJldmlldy5zdHlsZS5oZWlnaHQgPSAoc2l6ZSArIGJsdXIgLyAyKSArIFwicHhcIjtcclxuXHJcblx0aWYgKHN0eWxlID09IFwicm91bmRcIilcclxuXHRcdGJydXNoUHJldmlldy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG5cdGVsc2VcclxuXHRcdGJydXNoUHJldmlldy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjBcIjtcclxuXHJcblx0aWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIFRleHQpXHJcblx0e1xyXG5cdFx0YnJ1c2hQcmV2aWV3LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInRleHRcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtY3Vyc29yXCIpLnN0eWxlLmhlaWdodCA9IGAke3NpemV9cHhgO1xyXG5cdFx0dXBkYXRlVGV4dEN1cnNvclBvcygpO1xyXG5cclxuXHR9IGVsc2UgaWYgKHBhaW50VG9vbCBpbnN0YW5jZW9mIEZpbGwgfHwgcGFpbnRUb29sIGluc3RhbmNlb2YgQ29sb3JQaWNrZXIgfHxcclxuXHRcdHBhaW50VG9vbCBpbnN0YW5jZW9mIFJlY3QgfHwgcGFpbnRUb29sIGluc3RhbmNlb2YgTGluZSB8fCBwYWludFRvb2wgaW5zdGFuY2VvZiBFbGxpcHNlKVxyXG5cdHtcclxuXHRcdGJydXNoUHJldmlldy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcblx0fSBlbHNlXHJcblx0e1xyXG5cdFx0YnJ1c2hQcmV2aWV3LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuXHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jdXJzb3JcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VySWQsIHBvcywgc2l6ZSwgY29sb3IpXHJcbntcclxuXHRjb25zdCBicnVzaFByZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJ1c2gtcHJldmlldy0ke3VzZXJJZH1gKTtcclxuXHRjb25zdCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdGNvbnN0IGdsb2JhbFBvcyA9IG5ldyBWZWN0b3IoY2FudmFzUmVjdC54ICsgcG9zLngsIGNhbnZhc1JlY3QueSArIHBvcy55KTtcclxuXHJcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcclxuXHRicnVzaFByZXZpZXcuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLmxlZnQgPSBgJHtnbG9iYWxQb3MueH1weGA7XHJcblx0YnJ1c2hQcmV2aWV3LnN0eWxlLnRvcCA9IGAke2dsb2JhbFBvcy55fXB4YDtcclxuXHRicnVzaFByZXZpZXcucXVlcnlTZWxlY3RvcihcIi5uYW1lLXRhZ1wiKS5zdHlsZS50b3AgPSBgJHtzaXplfXB4YDtcclxuXHRicnVzaFByZXZpZXcucXVlcnlTZWxlY3RvcihcIi5uYW1lLXRhZ1wiKS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG59XHJcblxyXG4vLyBkb3dubG9hZCBjYW52YXMgaW1hZ2VcclxuZnVuY3Rpb24gc2F2ZUJ0bkNsaWNrZWQoZSlcclxue1xyXG5cdGlmIChpc1NhdmluZ0NhbnZhcylcclxuXHR7XHJcblx0XHRpc1NhdmluZ0NhbnZhcyA9IGZhbHNlO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRsZXQgYmFja2dyb3VuZEltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0bGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0bGV0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG5cdGJhY2tncm91bmRJbWFnZS5vbmxvYWQgPSAoKSA9PlxyXG5cdHtcclxuXHRcdGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcblx0fTtcclxuXHJcblx0aW1hZ2Uub25sb2FkID0gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblx0XHRsZXQgdGVtcEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdFx0dGVtcENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuXHRcdHRlbXBDYW52YXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHRcdHRlbXBDdHguZHJhd0ltYWdlKGJhY2tncm91bmRJbWFnZSwgMCwgMCk7XHJcblx0XHR0ZW1wQ3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG5cdFx0Y3VycmVudFRhcmdldC5ocmVmID0gdGVtcENhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcblx0XHRpc1NhdmluZ0NhbnZhcyA9IHRydWU7XHJcblx0XHRjdXJyZW50VGFyZ2V0LmNsaWNrKCk7XHJcblx0fTtcclxuXHJcblx0YmFja2dyb3VuZEltYWdlLnNyYyA9IGJnQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheWVkUm9vbVVybChmdWxsUm9vbVVybCwgcm9vbU5hbWUpXHJcbntcclxuXHRsZXQgcmVnZXggPSAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT8vO1xyXG5cdGxldCBkb21haW5OYW1lID0gZnVsbFJvb21VcmwucmVwbGFjZShyZWdleCwgXCJcIik7XHJcblx0ZG9tYWluTmFtZSA9IGRvbWFpbk5hbWUucmVwbGFjZSgvXFwvLiokLywgXCJcIik7XHJcblx0bGV0IGRpc3BsYXlOYW1lID0gYCR7ZG9tYWluTmFtZX0vJHtyb29tTmFtZX1gO1xyXG5cclxuXHRpZiAod2luZG93LmlubmVyV2lkdGggPCBNRURJVU1fU0laRV9QWClcclxuXHRcdGRpc3BsYXlOYW1lID0gYCR7cm9vbU5hbWV9YDtcclxuXHJcblx0cm9vbVVybExpbmsucXVlcnlTZWxlY3RvcihcIi51cmwtY29udGFpbmVyIHNwYW5cIikuaW5uZXJIVE1MID0gZGlzcGxheU5hbWU7XHJcbn1cclxuXHJcbi8vIGNvbm5lY3QgdG8gd2Vic29ja2V0XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTb2NrZXQoKVxyXG57XHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0c29ja2V0ID0gaW8oKTtcclxuXHJcblx0XHRzb2NrZXQub24oXCJyZWNlaXZlUm9vbURhdGFcIiwgKGZ1bGxSb29tVXJsLCByb29tTmFtZSwgdXNlck5hbWUsIHJvb21Vc2VycykgPT5cclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlRGlzcGxheWVkUm9vbVVybChmdWxsUm9vbVVybCwgcm9vbU5hbWUpO1xyXG5cdFx0XHRyb29tVXJsTGluay5ocmVmID0gZnVsbFJvb21Vcmw7XHJcblx0XHRcdHJvb21VcmxMaW5rLmRhdGFzZXQuY2xpcGJvYXJkID0gZnVsbFJvb21Vcmw7XHJcblx0XHRcdGRvY3VtZW50LnRpdGxlID0gYFN5bmNQYWludCAtICR7cm9vbU5hbWV9YDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zLXBhbmVsIGlucHV0XCIpLnZhbHVlID0gdXNlck5hbWU7XHJcblx0XHRcdHVzZXJzID0gcm9vbVVzZXJzO1xyXG5cclxuXHRcdFx0Ly8gaWYgaXQncyB0aGUgZmlyc3QgdXNlciBpbiBhIHJvb20gc2V0IHRoZWlyIGJhY2tncm91bmQgdG8gd2hpdGUgaW5zdGVhZCBvZiBkZWZhdWx0IHRyYW5zcGFyZW50XHJcblx0XHRcdGlmICh1c2Vycy5sZW5ndGggPT0gMCAmJiBpc0ZpcnN0Sm9pbilcclxuXHRcdFx0XHRmaWxsQmFja2dyb3VuZCgpO1xyXG5cclxuXHRcdFx0aXNGaXJzdEpvaW4gPSBmYWxzZTtcclxuXHRcdFx0dXNlcnMuZm9yRWFjaCh1c2VyID0+IGNyZWF0ZVJlbW90ZUJydXNoUHJldmlldyh1c2VyLm5hbWUsIHVzZXIuaWQpKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcInVzZXJKb2luXCIsICh1c2VyTmFtZSwgdXNlcklkKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRub3RpZmljYXRpb25TeXN0ZW0uYWRkKG5ldyBOb3RpZmljYXRpb24oYFVzZXIgJHt1c2VyTmFtZX0gaGFzIGpvaW5lZGApKTtcclxuXHRcdFx0dXNlcnMucHVzaCh7aWQ6IHVzZXJJZCwgbmFtZTogdXNlck5hbWV9KTtcclxuXHRcdFx0Y3JlYXRlUmVtb3RlQnJ1c2hQcmV2aWV3KHVzZXJOYW1lLCB1c2VySWQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKFwidXNlckxlYXZlXCIsICh1c2VyTmFtZSwgdXNlcklkKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRub3RpZmljYXRpb25TeXN0ZW0uYWRkKG5ldyBOb3RpZmljYXRpb24oYFVzZXIgJHt1c2VyTmFtZX0gaGFzIGxlZnRgKSk7XHJcblx0XHRcdHVzZXJzLnNwbGljZSh1c2Vycy5maW5kSW5kZXgodXNlciA9PiB1c2VyLmlkID09IHVzZXJJZCksIDEpO1xyXG5cdFx0XHRkZWxldGVSZW1vdGVCcnVzaFByZXZpZXcodXNlcklkKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcImRyYXdcIiwgZHJhd2luZ0RhdGEgPT5cclxuXHRcdHtcclxuXHRcdFx0ZHJhdyhkcmF3aW5nRGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oXCJjYW52YXNSZXF1ZXN0XCIsICgpID0+XHJcblx0XHR7XHJcblx0XHRcdHNvY2tldC5lbWl0KFwicmVjZWl2ZUNhbnZhc1wiLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKFwiYmFja2dyb3VuZENhbnZhc1JlcXVlc3RcIiwgKCkgPT5cclxuXHRcdHtcclxuXHRcdFx0c29ja2V0LmVtaXQoXCJyZWNlaXZlQmFja2dyb3VuZENhbnZhc1wiLCBiZ0NhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKFwicmVjZWl2ZUNhbnZhc1wiLCAoY2FudmFzRGF0YSwgd2lkdGgsIGhlaWdodCkgPT5cclxuXHRcdHtcclxuXHRcdFx0c2V0Q2FudmFzU2l6ZSh7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH0pO1xyXG5cdFx0XHRsb2FkQ2FudmFzRGF0YShjdHgsIGNhbnZhc0RhdGEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKFwicmVjZWl2ZUNhbnZhc1NpemVcIiwgKHdpZHRoLCBoZWlnaHQpID0+XHJcblx0XHR7XHJcblx0XHRcdHNldENhbnZhc1NpemUoe3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcInJlY2VpdmVCYWNrZ3JvdW5kQ2FudmFzXCIsIGJnQ2FudmFzRGF0YSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsb2FkQ2FudmFzRGF0YShiZ0N0eCwgYmdDYW52YXNEYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcImJhY2tncm91bmRDbGVhclwiLCAoKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRiZ0N0eC5jbGVhclJlY3QoMCwgMCwgYmdDYW52YXMud2lkdGgsIGJnQ2FudmFzLmhlaWdodCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oXCJzZXRBZG1pblwiLCBpc0FkbWluID0+XHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IGFkbWluU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkbWluLXNldHRpbmdzXCIpO1xyXG5cdFx0XHRpZiAoaXNBZG1pbiA9PSB0cnVlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGFkbWluU2V0dGluZ3MuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxyXG5cdFx0XHRcdFx0YWRtaW5TZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghYWRtaW5TZXR0aW5ncy5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXHJcblx0XHRcdFx0XHRhZG1pblNldHRpbmdzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbihcImN1cnNvclBvc2l0aW9uXCIsICh1c2VySWQsIHBvcywgc2l6ZSwgY29sb3IpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmICghc2hvd1JlbW90ZUN1cnNvcnMpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0dXBkYXRlUmVtb3RlQnJ1c2hQcmV2aWV3KHVzZXJJZCwgcG9zLCBzaXplLCBjb2xvcik7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oXCJsb2FkSW1hZ2VcIiwgKGRhdGFJbWcsIGxlZnQsIHRvcCwgdywgaCkgPT5cclxuXHRcdHtcclxuXHRcdFx0bG9hZEluc2VydGVkSW1hZ2UoY3R4LCBkYXRhSW1nLCBsZWZ0LCB0b3AsIHcsIGgpO1xyXG5cdFx0fSlcclxuXHJcblx0fSBjYXRjaCAoZXJyb3IpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIkVSUk9SOiBjYW4ndCBjb25uZWN0IHRvIHNlcnZlclwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJydXNoU2l6ZUJ0bkNsaWNrZWQoZSlcclxue1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0aWYgKGJydXNoU2l6ZU1lbnUuc3R5bGUudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcclxuXHR7XHJcblx0XHRicnVzaFNpemVNZW51LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdH0gZWxzZVxyXG5cdHtcclxuXHRcdGJydXNoU2l6ZU1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuXHRcdHZhciByZWN0ID0gYnJ1c2hTaXplTWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHZhciBwYXJlbnRSZWN0ID0gYnJ1c2hTaXplTWVudS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0dmFyIHBvc1ggPSBwYXJlbnRSZWN0LmxlZnQgKyAocGFyZW50UmVjdC53aWR0aCAvIDIpIC0gKHJlY3Qud2lkdGggLyAyKTtcclxuXHJcblx0XHRpZiAocG9zWCA8IDApXHJcblx0XHRcdHBvc1ggPSAwO1xyXG5cclxuXHRcdGJydXNoU2l6ZU1lbnUuc3R5bGUubGVmdCA9IHBvc1ggKyBcInB4XCI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbWFnZSgpXHJcbntcclxuXHRpbWFnZVNlbGVjdGlvbk1vZGFsLmhpZGUoKTtcclxuXHR0ZXJtRHJhd2luZyA9IGlzRHJhd2luZzsgLy8gc3RvcmVkIGludGVybWVkaWF0ZSB2YWx1ZSBvZiBpc0RyYXdpbmdcclxuXHRpc0RyYXdpbmcgPSBmYWxzZTtcclxuXHRpc0luc2VydGluZyA9IHRydWU7XHJcblx0aW1hZ2VQcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS1wcmV2aWV3XCIpO1xyXG5cdHJlY3RJbWFnZS5zdGFydFggPSAzMDtcclxuXHRyZWN0SW1hZ2Uuc3RhcnRZID0gNTA7XHJcblx0cmVjdEltYWdlLncgPSAxNTA7XHJcblx0cmVjdEltYWdlLmggPSAyMDA7XHJcblx0ZHJhd0luc2VydGVkSW1hZ2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0luc2VydGVkSW1hZ2UgKClcclxue1xyXG5cdGluc2VydGVkSW1hZ2VDdHguZHJhd0ltYWdlKGltYWdlUHJldmlldywgcmVjdEltYWdlLnN0YXJ0WCwgcmVjdEltYWdlLnN0YXJ0WSwgcmVjdEltYWdlLncsIHJlY3RJbWFnZS5oKTtcclxuXHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5tb3ZlVG8ocmVjdEltYWdlLnN0YXJ0WCwgcmVjdEltYWdlLnN0YXJ0WSk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5saW5lVG8ocmVjdEltYWdlLnN0YXJ0WCArIHJlY3RJbWFnZS53LCByZWN0SW1hZ2Uuc3RhcnRZKTtcclxuXHRpbnNlcnRlZEltYWdlQ3R4LnN0cm9rZSgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHgubW92ZVRvKHJlY3RJbWFnZS5zdGFydFggKyByZWN0SW1hZ2UudywgcmVjdEltYWdlLnN0YXJ0WSk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5saW5lVG8ocmVjdEltYWdlLnN0YXJ0WCArIHJlY3RJbWFnZS53LCByZWN0SW1hZ2Uuc3RhcnRZICsgcmVjdEltYWdlLmgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguc3Ryb2tlKCk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5tb3ZlVG8ocmVjdEltYWdlLnN0YXJ0WCArIHJlY3RJbWFnZS53LCByZWN0SW1hZ2Uuc3RhcnRZICsgcmVjdEltYWdlLmgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHgubGluZVRvKHJlY3RJbWFnZS5zdGFydFgsIHJlY3RJbWFnZS5zdGFydFkgKyByZWN0SW1hZ2UuaCk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5zdHJva2UoKTtcclxuXHRpbnNlcnRlZEltYWdlQ3R4Lm1vdmVUbyhyZWN0SW1hZ2Uuc3RhcnRYLCByZWN0SW1hZ2Uuc3RhcnRZICsgcmVjdEltYWdlLmgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHgubGluZVRvKHJlY3RJbWFnZS5zdGFydFgsIHJlY3RJbWFnZS5zdGFydFkpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguc3Ryb2tlKCk7XHJcblxyXG5cdGluc2VydGVkSW1hZ2VDdHguYmVnaW5QYXRoKCk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5hcmMocmVjdEltYWdlLnN0YXJ0WCwgcmVjdEltYWdlLnN0YXJ0WSwgY2xvc2VFbm91Z2gsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHRpbnNlcnRlZEltYWdlQ3R4LnN0cm9rZSgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguYmVnaW5QYXRoKCk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5hcmMocmVjdEltYWdlLnN0YXJ0WCArIHJlY3RJbWFnZS53LCByZWN0SW1hZ2Uuc3RhcnRZLCBjbG9zZUVub3VnaCwgMCwgMiAqIE1hdGguUEkpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguc3Ryb2tlKCk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5iZWdpblBhdGgoKTtcclxuXHRpbnNlcnRlZEltYWdlQ3R4LmFyYyhyZWN0SW1hZ2Uuc3RhcnRYLCByZWN0SW1hZ2Uuc3RhcnRZICsgcmVjdEltYWdlLmgsIGNsb3NlRW5vdWdoLCAwLCAyICogTWF0aC5QSSk7XHJcblx0aW5zZXJ0ZWRJbWFnZUN0eC5zdHJva2UoKTtcclxuXHRpbnNlcnRlZEltYWdlQ3R4LmJlZ2luUGF0aCgpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguYXJjKHJlY3RJbWFnZS5zdGFydFggKyByZWN0SW1hZ2UudywgcmVjdEltYWdlLnN0YXJ0WSArIHJlY3RJbWFnZS5oLCBjbG9zZUVub3VnaCwgMCwgMiAqIE1hdGguUEkpO1xyXG5cdGluc2VydGVkSW1hZ2VDdHguc3Ryb2tlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzQnRuQ2xpY2tlZChlKVxyXG57XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1wYW5lbFwiKTtcclxuXHRpZiAocGFuZWwuc3R5bGUudmlzaWJpbGl0eSA9PSBcInZpc2libGVcIilcclxuXHR7XHJcblx0XHRwYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHR9IGVsc2VcclxuXHR7XHJcblx0XHRwYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG5cdFx0Y29uc3QgcmVjdCA9IHBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0Y29uc3QgcGFyZW50UmVjdCA9IHBhbmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgcG9zWCA9IHBhcmVudFJlY3QubGVmdCArIChwYXJlbnRSZWN0LndpZHRoIC8gMikgLSAocmVjdC53aWR0aCAvIDIpO1xyXG5cclxuXHRcdGlmIChwb3NYICsgcmVjdC53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRwb3NYID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoO1xyXG5cclxuXHRcdHBhbmVsLnN0eWxlLmxlZnQgPSBgJHtwb3NYfXB4YDtcclxuXHR9XHJcbn1cclxuXHJcbi8vIG5hbWUgY2hhbmdlZCBieSB1c2VyXHJcbmZ1bmN0aW9uIHVzZXJOYW1lQ2hhbmdlZChlKVxyXG57XHJcblx0c29ja2V0LmVtaXQoXCJ1c2VyTmFtZUNoYW5nZVwiLCBlLnRhcmdldC52YWx1ZSk7XHJcblx0Y29uc3QgY29va2llTWF4QWdlID0gNjAqNjAqMjQqMzA7XHJcblx0ZG9jdW1lbnQuY29va2llID0gYHVzZXJOYW1lPSR7ZS50YXJnZXQudmFsdWV9OyBtYXgtYWdlPSR7Y29va2llTWF4QWdlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbmRvd1Jlc2l6ZWQoKVxyXG57XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zLXBhbmVsXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cdGJydXNoU2l6ZU1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblxyXG5cdC8vIHRoZXJlIGFyZSB0d28gc2l6ZSBzbGlkZXJzIGJ1dCBvbmx5IG9uZSBpcyBkaXNwbGF5ZWQgYXQgYSB0aW1lXHJcblx0Ly8gd2hpY2ggc2xpZGVyIGlzIGRpc3BsYXllZCBkZXBlbmRzIG9uIHdpbmRvdyBzaXplXHJcblx0Ly8gd2UgZG9uJ3Qga25vdyBpZiBhbnkgb2YgdGhlbSBqdXN0IGJlY2FtZSB2aXNpYmxlL2ludmlzaWJsZSBzbyB1cGRhdGUgYm90aCB3aXRoIGV2ZXJ5IHdpbmRvdyByZXNpemVcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpemUtc2xpZGVyXCIpLmZvckVhY2goKHNsaWRlcikgPT5cclxuXHR7XHJcblx0XHRzbGlkZXIudXBkYXRlKG51bGwsIHBhaW50VG9vbC5zaXplKTtcclxuXHR9KTtcclxuXHJcblx0cmVwb3NpdGlvbkNhbnZhcygpO1xyXG5cdHVwZGF0ZVRleHRDdXJzb3JQb3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2luZG93TW91c2VNb3ZlZChlKVxyXG57XHJcblx0aWYgKGxhc3RTZWxlY3RlZFNsaWRlcilcclxuXHRcdGxhc3RTZWxlY3RlZFNsaWRlci51cGRhdGUoZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVByZXNzZWQoZSlcclxue1xyXG5cdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBUZXh0KVxyXG5cdHtcclxuXHRcdGlmIChlLmtleSA9PSBcIkVudGVyXCIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBuZXdQb3MgPSBuZXcgVmVjdG9yKGRyYXdpbmdFbmRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnkgKyBwYWludFRvb2wuc2l6ZSk7XHJcblx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobmV3UG9zLCBudWxsKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBkcmF3aW5nRGF0YSA9IG5ldyBEcmF3aW5nRGF0YShkcmF3aW5nU3RhcnRQb3MsIGRyYXdpbmdFbmRQb3MsIHBhaW50VG9vbCwgZS5rZXkpO1xyXG5cdFx0XHRkcmF3KGRyYXdpbmdEYXRhKTtcclxuXHRcdFx0c29ja2V0LmVtaXQoXCJkcmF3XCIsIGRyYXdpbmdEYXRhKTtcclxuXHRcdFx0bGV0IG5ld1BvcyA9IG5ldyBWZWN0b3IoZHJhd2luZ1N0YXJ0UG9zLnggKyBjdHgubWVhc3VyZVRleHQoZS5rZXkpLndpZHRoLCBkcmF3aW5nU3RhcnRQb3MueSk7XHJcblx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobmV3UG9zLCBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIGFzayB1c2VyIGZvciBjb25maXJtYXRpb24gd2hlbiB0aGV5IHRyeSB0byBsZWF2ZSB0aGUgcGFnZVxyXG5mdW5jdGlvbiBiZWZvcmVXaW5kb3dVbmxvYWRlZChlKVxyXG57XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGUucmV0dXJuVmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG4vLyB1c2VyIGVkaXRlZCBjYW52YXMgc2l6ZSBpbnB1dFxyXG5mdW5jdGlvbiBjYW52YXNTaXplU2V0dGluZ0NoYW5nZWQoZSlcclxue1xyXG5cdGNvbnN0IGFwcGx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtc2l6ZS1hcHBseVwiKTtcclxuXHRpZiAoYXBwbHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpXHJcblx0XHRhcHBseUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdGFwcGx5QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2FudmFzU2l6ZShlKVxyXG57XHJcblx0Y29uc3QgYXBwbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1zaXplLWFwcGx5XCIpO1xyXG5cdGlmICghYXBwbHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpXHJcblx0XHRhcHBseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdGFwcGx5QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRsZXQgd2lkdGggPSBNYXRoLnJvdW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLXdpZHRoXCIpLnZhbHVlKTtcclxuXHRsZXQgaGVpZ2h0ID0gTWF0aC5yb3VuZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1oZWlnaHRcIikudmFsdWUpO1xyXG5cdHNldENhbnZhc1NpemUoe3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9KTtcclxuXHRzb2NrZXQuZW1pdChcInNldENhbnZhc1NpemVcIiwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRDdXJzb3JQb3NpdGlvbigpXHJcbntcclxuXHRpZiAoY3Vyc29yTW92ZWQpXHJcblx0e1xyXG5cdFx0bGV0IHNpemUgPSBwYWludFRvb2wuc2l6ZTtcclxuXHRcdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBGaWxsKVxyXG5cdFx0XHRzaXplID0gMTtcclxuXHJcblx0XHRzb2NrZXQuZW1pdChcImN1cnNvclBvc2l0aW9uXCIsIGN1cnNvclBvc2l0aW9uLCBzaXplLCBwYWludFRvb2wuY29sb3IpO1xyXG5cdFx0Y3Vyc29yTW92ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHRQYXN0ZWQoZSlcclxue1xyXG5cdGlmIChwYWludFRvb2wgaW5zdGFuY2VvZiBUZXh0KVxyXG5cdHtcclxuXHRcdGxldCBjbGlwYm9hcmREYXRhID0gZS5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG5cdFx0bGV0IHBhc3RlZERhdGEgPSBjbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpO1xyXG5cclxuXHRcdGlmIChwYXN0ZWREYXRhLmxlbmd0aCA8PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHJvd3MgPSBwYXN0ZWREYXRhLnNwbGl0KC9cXG4vZyk7XHJcblx0XHRyb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmIChyb3cubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnN0IGRyYXdpbmdEYXRhID0gbmV3IERyYXdpbmdEYXRhKGRyYXdpbmdTdGFydFBvcywgZHJhd2luZ0VuZFBvcywgcGFpbnRUb29sLCByb3cpO1xyXG5cdFx0XHRcdGRyYXcoZHJhd2luZ0RhdGEpO1xyXG5cdFx0XHRcdHNvY2tldC5lbWl0KFwiZHJhd1wiLCBkcmF3aW5nRGF0YSk7XHJcblx0XHRcdFx0bGV0IG5ld1BvcyA9IG5ldyBWZWN0b3IoZHJhd2luZ1N0YXJ0UG9zLnggKyBjdHgubWVhc3VyZVRleHQocm93KS53aWR0aCwgZHJhd2luZ1N0YXJ0UG9zLnkpO1xyXG5cdFx0XHRcdHVwZGF0ZURyYXdpbmdQb3MobmV3UG9zLCBudWxsKTtcclxuXHJcblx0XHRcdFx0aWYgKGluZGV4ICE9IHJvd3MubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdQb3MgPSBuZXcgVmVjdG9yKGRyYXdpbmdFbmRQb3MueCwgZHJhd2luZ1N0YXJ0UG9zLnkgKyBwYWludFRvb2wuc2l6ZSk7XHJcblx0XHRcdFx0XHR1cGRhdGVEcmF3aW5nUG9zKG5ld1BvcywgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURyYXdpbmdQb3Moc3RhcnRQb3MsIGVuZFBvcylcclxue1xyXG5cdGlmIChzdGFydFBvcyAhPSBudWxsKVxyXG5cdHtcclxuXHRcdGlmIChzdGFydFBvcy54ID4gY2FudmFzLndpZHRoKVxyXG5cdFx0XHRzdGFydFBvcy54ID0gY2FudmFzLndpZHRoO1xyXG5cclxuXHRcdGlmIChzdGFydFBvcy55ID4gY2FudmFzLmhlaWdodClcclxuXHRcdFx0c3RhcnRQb3MueSA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG5cdFx0ZHJhd2luZ1N0YXJ0UG9zID0gc3RhcnRQb3M7XHJcblx0fVxyXG5cclxuXHRpZiAoZW5kUG9zICE9IG51bGwpXHJcblx0e1xyXG5cdFx0aWYgKGVuZFBvcy54ID4gY2FudmFzLndpZHRoKVxyXG5cdFx0XHRlbmRQb3MueCA9IGNhbnZhcy53aWR0aDtcclxuXHJcblx0XHRpZiAoZW5kUG9zLnkgPiBjYW52YXMuaGVpZ2h0KVxyXG5cdFx0XHRlbmRQb3MueSA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG5cdFx0ZHJhd2luZ0VuZFBvcyA9IGVuZFBvcztcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRleHRDdXJzb3JQb3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGV4dEN1cnNvclBvcygpXHJcbntcclxuXHRjb25zdCB0ZXh0Q3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWN1cnNvclwiKTtcclxuXHRjb25zdCB0ZXh0Q3Vyc29yUmVjdCA9IHRleHRDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0dGV4dEN1cnNvci5zdHlsZS5sZWZ0ID0gYCR7ZHJhd2luZ1N0YXJ0UG9zLnggKyBjYW52YXMub2Zmc2V0TGVmdH1weGA7XHJcblx0dGV4dEN1cnNvci5zdHlsZS50b3AgPSBgJHsoZHJhd2luZ1N0YXJ0UG9zLnkgKyBjYW52YXMub2Zmc2V0VG9wKSAtIHRleHRDdXJzb3JSZWN0LmhlaWdodH1weGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxCYWNrZ3JvdW5kKClcclxue1xyXG5cdGJnQ3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG5cdGJnQ3R4LmZpbGxSZWN0KDAsIDAsIGJnQ2FudmFzLndpZHRoLCBiZ0NhbnZhcy5oZWlnaHQpO1xyXG5cdHNvY2tldC5lbWl0KFwicmVjZWl2ZUJhY2tncm91bmRDYW52YXNBbGxcIiwgYmdDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFNpemVTbGlkZXJzKClcclxue1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2l6ZS1zbGlkZXJcIikuZm9yRWFjaCgoc2xpZGVyKSA9PlxyXG5cdHtcclxuXHRcdHNsaWRlci51cGRhdGUobnVsbCwgREVGQVVMVF9CUlVTSF9TSVpFKTtcclxuXHRcdHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2l6ZSA9IE51bWJlcihlLnRhcmdldC5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0c2l6ZVZhbHVlU3Bhbi5pbm5lckhUTUwgPSBzaXplICsgXCJweFwiO1xyXG5cdFx0XHRwYWludFRvb2wuc2V0U2l6ZShzaXplKTtcclxuXHRcdFx0dXBkYXRlQnJ1c2hQcmV2aWV3KCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbntcclxuXHRjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyYXdBcmVhXCIpO1xyXG5cdGlmICghY2FudmFzKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdGJnQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZ0NhbnZhc1wiKTtcclxuXHRiZ0N0eCA9IGJnQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHRzaGFwZVByZXZpZXdDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoYXBlUHJldmlld1wiKTtcclxuXHRzaGFwZVByZXZpZXdDdHggPSBzaGFwZVByZXZpZXdDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdGluc2VydGVkSW1hZ2VDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc2VydGVkSW1hZ2VQcmV2aWV3XCIpXHJcblx0aW5zZXJ0ZWRJbWFnZUN0eCA9IGluc2VydGVkSW1hZ2VDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHRyb29tVXJsTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbS11cmxcIik7XHJcblx0Y29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZVwiKTtcclxuXHRjb2xvclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xvci1zZWxlY3RvclwiKTtcclxuXHRjb25zdCBicnVzaFNpemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJydXNoLXNpemVcIik7XHJcblx0YnJ1c2hTaXplTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJ1c2gtc2l6ZS1tZW51XCIpO1xyXG5cdHNpemVWYWx1ZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpemUtdmFsdWVcIik7XHJcblx0aW1hZ2VTZWxlY3Rpb25Nb2RhbCA9IG5ldyBJbWFnZU1vZGFsKFwiaW1hZ2UtbW9kYWxcIik7XHJcblx0Y29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHRpbmdzXCIpO1xyXG5cdGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1wYW5lbCBpbnB1dFwiKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgd2luZG93UmVzaXplZCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHdpbmRvd01vdXNlVXApO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgd2luZG93TW91c2VVcCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgd2luZG93TW91c2VNb3ZlZCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBrZXlQcmVzc2VkKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBiZWZvcmVXaW5kb3dVbmxvYWRlZCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0ZXh0UGFzdGVkKTtcclxuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBjYW52YXNNb3VzZU1vdmVkKTtcclxuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjYW52YXNNb3VzZU1vdmVkKTtcclxuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBjYW52YXNNb3VzZU92ZXIpO1xyXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2FudmFzTW91c2VPdXQpO1xyXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNhbnZhc01vdXNlRG93bik7XHJcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNhbnZhc1RvdWNoU3RhcnQpO1xyXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgY2FudmFzVG91Y2hFbmRlZCk7XHJcblx0cm9vbVVybExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvb21VcmxDbGlja2VkKTtcclxuXHRzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlQnRuQ2xpY2tlZCk7XHJcblx0Y29sb3JTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHBhaW50Q29sb3JDaGFuZ2VkKTtcclxuXHRicnVzaFNpemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJydXNoU2l6ZUJ0bkNsaWNrZWQpO1xyXG5cdHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXR0aW5nc0J0bkNsaWNrZWQpO1xyXG5cdG5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHVzZXJOYW1lQ2hhbmdlZCk7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtd2lkdGhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGNhbnZhc1NpemVTZXR0aW5nQ2hhbmdlZCk7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtaGVpZ2h0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjYW52YXNTaXplU2V0dGluZ0NoYW5nZWQpO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLXNpemUtYXBwbHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcGx5Q2FudmFzU2l6ZSk7XHJcblxyXG5cdHNldEludGVydmFsKHNlbmRDdXJzb3JQb3NpdGlvbiwgTkVUX0NVUlNPUl9VUERBVEVfSU5URVJWQUxfTVMpO1xyXG5cclxuXHRpbWFnZVNlbGVjdGlvbk1vZGFsLm9uQWRkSW1hZ2VCdG5DbGljayhhZGRJbWFnZSk7XHJcblxyXG5cdGluaXRpYWxpemVTb2NrZXQoKTtcclxuXHRzZXRDYW52YXNTaXplKGRlZmF1bHRDYW52YXNTaXplKCkpO1xyXG5cdGNyZWF0ZUxvY2FsQnJ1c2hQcmV2aWV3KCk7XHJcblxyXG5cdGluaXRDb21wb25lbnRzKCk7XHJcblxyXG5cdGJnQ3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiO1xyXG5cdGJnQ3R4LmZpbGxSZWN0KDAsIDAsIGJnQ2FudmFzLndpZHRoLCBiZ0NhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHR0b29sYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b29sYmFyXCIpO1xyXG5cdHRvb2xiYXIuaW5pdEJ1dHRvbnMoREVGQVVMVF9QQUlOVF9UT09MLCBERUZBVUxUX1BBSU5UX0NPTE9SKTtcclxuXHR0b29sYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b29sU3dpdGNoXCIsIHBhaW50VG9vbFN3aXRjaGVkKTtcclxuXHR0b29sYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb2xvclN3aXRjaFwiLCBwYWludENvbG9yQ2hhbmdlZCk7XHJcblx0dG9vbGJhci5hZGRFdmVudExpc3RlbmVyKFwiSW1nU2V0dGluZ3NPcGVuXCIsICgpID0+IGltYWdlU2VsZWN0aW9uTW9kYWwudG9nZ2xlKCkpO1xyXG5cdHRvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRleHRQYXN0ZWQpO1xyXG5cclxuXHRpbml0U2l6ZVNsaWRlcnMoKTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidWktc2xpZGVyXCIpLmZvckVhY2goKHNsaWRlcikgPT5cclxuXHR7XHJcblx0XHRjb25zdCBzbGlkZXJVc2VkID0gKCkgPT5cclxuXHRcdHtcclxuXHRcdFx0bGFzdFNlbGVjdGVkU2xpZGVyID0gc2xpZGVyXHJcblx0XHR9O1xyXG5cclxuXHRcdHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNsaWRlclVzZWQpO1xyXG5cdFx0c2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHNsaWRlclVzZWQpO1xyXG5cdH0pO1xyXG59KTsiLCJjbGFzcyBDb2xvclxyXG57XHJcblx0Y29uc3RydWN0b3IociwgZywgYiwgYT0yNTUpXHJcblx0e1xyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHRoaXMuZyA9IGc7XHJcblx0XHR0aGlzLmIgPSBiO1xyXG5cdFx0dGhpcy5hID0gYTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmcm9tSGV4KGhleFN0cmluZylcclxuXHR7XHJcblx0XHRjb25zdCByZWRNYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9eIz8oW2EtZjAtOV17Mn0pLyk7XHJcblx0XHRjb25zdCBncmVlbk1hdGNoZXMgPSBoZXhTdHJpbmcubWF0Y2goL14jLnsyfT8oW2EtZjAtOV17Mn0pLyk7XHJcblx0XHRjb25zdCBibHVlTWF0Y2hlcyA9IGhleFN0cmluZy5tYXRjaCgvXiMuezR9PyhbYS1mMC05XXsyfSkvKTtcclxuXHRcdGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZE1hdGNoZXNbMV0sIDE2KTtcclxuXHRcdGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5NYXRjaGVzWzFdLCAxNik7XHJcblx0XHRjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZU1hdGNoZXNbMV0sIDE2KTtcclxuXHJcblx0XHRyZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG5cdH1cclxuXHJcblx0dG9IZXgoKVxyXG5cdHtcclxuXHRcdGxldCByZWQgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xyXG5cdFx0bGV0IGdyZWVuID0gdGhpcy5nLnRvU3RyaW5nKDE2KTtcclxuXHRcdGxldCBibHVlID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcclxuXHJcblx0XHRpZiAocmVkLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZWQgPSBcIjBcIiArIHJlZDtcclxuXHJcblx0XHRpZiAoZ3JlZW4ubGVuZ3RoID09IDEpXHJcblx0XHRcdGdyZWVuID0gXCIwXCIgKyBncmVlbjtcclxuXHJcblx0XHRpZiAoYmx1ZS5sZW5ndGggPT0gMSlcclxuXHRcdFx0Ymx1ZSA9IFwiMFwiICsgYmx1ZTtcclxuXHJcblx0XHRyZXR1cm4gYCMke3JlZH0ke2dyZWVufSR7Ymx1ZX1gO1xyXG5cdH1cclxuXHJcblx0ZXF1YWxzKGNvbG9yKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnIgPT0gY29sb3IuciAmJiB0aGlzLmcgPT0gY29sb3IuZyAmJiB0aGlzLmIgPT0gY29sb3IuYjtcclxuXHR9XHJcblxyXG5cdGVxdWFsc1JnYmEoY29sb3IpXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuciA9PSBjb2xvci5yICYmIHRoaXMuZyA9PSBjb2xvci5nICYmIHRoaXMuYiA9PSBjb2xvci5iICYmIHRoaXMuYSA9PSBjb2xvci5hO1xyXG5cdH1cclxuXHJcblx0dG9BcnJheSgpXHJcblx0e1xyXG5cdFx0cmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCB0aGlzLmFdO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3I7IiwiLy8gZHJhd2luZyBkYXRhIHNlbnQgdGhyb3VnaCB0aGUgd2Vic29ja2V0XHJcbmNsYXNzIERyYXdpbmdEYXRhXHJcbntcclxuXHRjb25zdHJ1Y3RvcihzdGFydFBvcywgZW5kUG9zLCB0b29sLCB0ZXh0PVwiXCIpXHJcblx0e1xyXG5cdFx0dGhpcy5zdGFydFBvcyA9IHN0YXJ0UG9zO1xyXG5cdFx0dGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcblx0XHR0aGlzLnRvb2wgPSB0b29sO1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdEYXRhOyIsImNvbnN0IFRvb2xUeXBlID1cclxue1xyXG5cdEJSVVNIOiAwLFxyXG5cdFBBSU5UX1JPTExFUjogMSxcclxuXHRQRU5DSUw6IDIsXHJcblx0RVJBU0VSOiAzLFxyXG5cdFRFWFQ6IDQsXHJcblx0RklMTDogNSxcclxuXHRDT0xPUl9QSUNLRVI6IDYsXHJcblx0UkVDVDogNyxcclxuXHRMSU5FOiA4LFxyXG5cdEVMTElQU0U6IDlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xUeXBlOyIsImNsYXNzIFZlY3RvclxyXG57XHJcblx0Y29uc3RydWN0b3IoeD0wLCB5PTApXHJcblx0e1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7IiwiY2xhc3MgTm90aWZpY2F0aW9uU3lzdGVtXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0dGhpcy5ub3RpZmljYXRpb25zID0gW107XHJcblx0XHR0aGlzLm5vdGlmaWNhdGlvblZlcnRpY2FsU3BhY2UgPSA4MDtcclxuXHRcdHRoaXMubm90aWZpY2F0aW9uQm90dG9tTWFyZ2luID0gMTA7XHJcblx0fVxyXG5cclxuXHRhZGQobm90aWZpY2F0aW9uKVxyXG5cdHtcclxuXHRcdHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKG4gPT5cclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2Zmc2V0VG9wID0gbi5nZXRFbGVtZW50KCkub2Zmc2V0VG9wO1xyXG5cdFx0XHRjb25zdCBuZXdCb3R0b21PZmZzZXQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gb2Zmc2V0VG9wKSArIHRoaXMubm90aWZpY2F0aW9uQm90dG9tTWFyZ2luO1xyXG5cdFx0XHRuLmdldEVsZW1lbnQoKS5zdHlsZS5ib3R0b20gPSBuZXdCb3R0b21PZmZzZXQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRjb25zdCBtYXhOb3RpZmljYXRpb25zID0gTWF0aC5mbG9vcigod2luZG93LmlubmVySGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpIC8gdGhpcy5ub3RpZmljYXRpb25WZXJ0aWNhbFNwYWNlKTtcclxuXHRcdFx0Y29uc3QgbnVtTm90aWZpY2F0aW9ucyA9IHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggKyAxOyAvLyBleGlzdGluZyBub3RpZmljYXRpb25zICsgdGhlIG5ldyBvbmUgd2UgY3JlYXRlXHJcblxyXG5cdFx0XHRpZiAobnVtTm90aWZpY2F0aW9ucyA+IG1heE5vdGlmaWNhdGlvbnMpXHJcblx0XHRcdFx0dGhpcy5yZW1vdmVPbGRlc3QoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBhZnRlciBmYWRlIGFuaW1hdGlvbiBpcyBmaW5pc2hlZFxyXG5cdFx0bm90aWZpY2F0aW9uLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+XHJcblx0XHR7XHJcblx0XHRcdHRoaXMucmVtb3ZlKG5vdGlmaWNhdGlvbik7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKG5vdGlmaWNhdGlvbilcclxuXHR7XHJcblx0XHRsZXQgZWxlbWVudCA9IG5vdGlmaWNhdGlvbi5nZXRFbGVtZW50KCk7XHJcblx0XHRpZiAoZWxlbWVudCAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpKVxyXG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG5cclxuXHRcdHRoaXMubm90aWZpY2F0aW9ucyA9IHRoaXMubm90aWZpY2F0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9IG5vdGlmaWNhdGlvbik7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVPbGRlc3QoKVxyXG5cdHtcclxuXHRcdGxldCBvbGRlc3ROb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMucmVkdWNlKChwcmV2LCBjdXIpID0+XHJcblx0XHRcdHByZXYuZGF0ZUNyZWF0ZWQgPCBjdXIuZGF0ZUNyZWF0ZWQgPyBwcmV2IDogY3VyKTtcclxuXHRcdHRoaXMucmVtb3ZlKG9sZGVzdE5vdGlmaWNhdGlvbik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25TeXN0ZW07IiwiY2xhc3MgTm90aWZpY2F0aW9uXHJcbntcclxuXHRjb25zdHJ1Y3Rvcih0ZXh0LCBsaWZlVGltZU1zPTUwMDApXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHRcdHRoaXMuZGF0ZUNyZWF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uXCIpO1xyXG5cdFx0dGhpcy5lbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9IGBub3RpZiAke2xpZmVUaW1lTXN9bXNgO1xyXG5cclxuXHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vIHRoaXMgd2lsbCBlc2NhcGUgSFRNTCBzbyBpdCdzIHNhZmUgdG8gdXNlIHdpdGggdXNlciBuYW1lc1xyXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHR9XHJcblxyXG5cdGdldEVsZW1lbnQoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xyXG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcclxuXHJcbmNsYXNzIEJydXNoIGV4dGVuZHMgVG9vbFxyXG57XHJcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuQlJVU0gsIFwicm91bmRcIiwgc2l6ZSwgY29sb3IpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJ1c2g7IiwiaW1wb3J0IFRvb2wgZnJvbSBcIi4vdG9vbFwiO1xyXG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL21vZGVscy9jb2xvclwiO1xyXG5pbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcclxuXHJcbmNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgVG9vbFxyXG57XHJcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuQ09MT1JfUElDS0VSLCBcInJvdW5kXCIsIHNpemUsIGNvbG9yKTtcclxuXHR9XHJcblxyXG5cdGdldFBpeGVsQ29sb3IoY3R4LCBiZ0N0eCwgcG9zWCwgcG9zWSlcclxuXHR7XHJcblx0XHRsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YShwb3NYLCBwb3NZLCAxLCAxKTtcclxuXHJcblx0XHRpZiAoaW1hZ2VEYXRhLmRhdGFbM10gIT0gMClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihpbWFnZURhdGEuZGF0YVswXSwgaW1hZ2VEYXRhLmRhdGFbMV0sIGltYWdlRGF0YS5kYXRhWzJdKS50b0hleCgpO1xyXG5cdFx0fSBlbHNlIC8vIGlmIHBpeGVsIGlzIHRyYW5zcGFyZW50IHJldHVybiBiYWNrZ3JvdW5kIGNvbG9yXHJcblx0XHR7XHJcblx0XHRcdGltYWdlRGF0YSA9IGJnQ3R4LmdldEltYWdlRGF0YShwb3NYLCBwb3NZLCAxLCAxKVxyXG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKGltYWdlRGF0YS5kYXRhWzBdLCBpbWFnZURhdGEuZGF0YVsxXSwgaW1hZ2VEYXRhLmRhdGFbMl0pLnRvSGV4KCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlcjsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgRWxsaXBzZSBleHRlbmRzIFRvb2xcclxue1xyXG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yLCBjaXJjbGU9ZmFsc2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuRUxMSVBTRSwgXCJidXR0XCIsIHNpemUsIGNvbG9yLCAwKTtcclxuXHRcdHRoaXMuY2lyY2xlID0gY2lyY2xlO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXHJcblx0e1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNpcmNsZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJhZGl1cyA9IE1hdGgubWF4KE1hdGguYWJzKGVuZFBvc1ggLSBwb3NYKSwgTWF0aC5hYnMoZW5kUG9zWSAtIHBvc1kpKSAvIDI7XHJcblx0XHRcdGxldCBvZmZzZXREaXJlY3Rpb25YID0gTWF0aC5zaWduKGVuZFBvc1ggLSBwb3NYKTtcclxuXHRcdFx0bGV0IG9mZnNldERpcmVjdGlvblkgPSBNYXRoLnNpZ24oZW5kUG9zWSAtIHBvc1kpO1xyXG5cdFx0XHRsZXQgY2VudGVyWCA9IHBvc1ggKyByYWRpdXMgKiBvZmZzZXREaXJlY3Rpb25YO1xyXG5cdFx0XHRsZXQgY2VudGVyWSA9IHBvc1kgKyByYWRpdXMgKiBvZmZzZXREaXJlY3Rpb25ZO1xyXG5cclxuXHRcdFx0Y3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgY2VudGVyWCA9IChwb3NYICsgZW5kUG9zWCkgLyAyO1xyXG5cdFx0XHRsZXQgY2VudGVyWSA9IChwb3NZICsgZW5kUG9zWSkgLyAyO1xyXG5cdFx0XHRsZXQgcmFkaXVzWCA9IE1hdGguYWJzKGNlbnRlclggLSBwb3NYKTtcclxuXHRcdFx0bGV0IHJhZGl1c1kgPSBNYXRoLmFicyhjZW50ZXJZIC0gcG9zWSk7XHJcblxyXG5cdFx0XHRjdHguZWxsaXBzZShjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXNYLCByYWRpdXNZLCAwLCAwLCAyICogTWF0aC5QSSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxsaXBzZTsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgRXJhc2VyIGV4dGVuZHMgVG9vbFxyXG57XHJcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuRVJBU0VSLCBcInJvdW5kXCIsIHNpemUsIGNvbG9yLCAwLCBcImRlc3RpbmF0aW9uLW91dFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVyYXNlcjsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vbW9kZWxzL2NvbG9yXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgRmlsbCBleHRlbmRzIFRvb2xcclxue1xyXG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxyXG5cdHtcclxuXHRcdHN1cGVyKFRvb2xUeXBlLkZJTEwsIFwicm91bmRcIiwgc2l6ZSwgY29sb3IpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEltYWdlRGF0YU9mZnNldChwb3NYLCBwb3NZLCBpbWFnZURhdGEpXHJcblx0e1xyXG5cdFx0cmV0dXJuIChwb3NZICogaW1hZ2VEYXRhLndpZHRoICsgcG9zWCkgKiA0O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBpeGVsQ29sb3IocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKVxyXG5cdHtcclxuXHRcdGNvbnN0IG9mZnNldCA9IEZpbGwuZ2V0SW1hZ2VEYXRhT2Zmc2V0KHBvc1gsIHBvc1ksIGltYWdlRGF0YSk7XHJcblx0XHRjb25zdCBhcnIgPSBpbWFnZURhdGEuZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIDQpO1xyXG5cdFx0cmV0dXJuIFthcnJbMF0sIGFyclsxXSwgYXJyWzJdLCBhcnJbM11dO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNldFBpeGVsQ29sb3IocG9zWCwgcG9zWSwgaW1hZ2VEYXRhLCBjb2xvcilcclxuXHR7XHJcblx0XHRjb25zdCBvZmZzZXQgPSBGaWxsLmdldEltYWdlRGF0YU9mZnNldChwb3NYLCBwb3NZLCBpbWFnZURhdGEpO1xyXG5cdFx0aW1hZ2VEYXRhLmRhdGFbb2Zmc2V0XSA9IGNvbG9yWzBdO1xyXG5cdFx0aW1hZ2VEYXRhLmRhdGFbb2Zmc2V0ICsgMV0gPSBjb2xvclsxXTtcclxuXHRcdGltYWdlRGF0YS5kYXRhW29mZnNldCArIDJdID0gY29sb3JbMl07XHJcblx0XHRpbWFnZURhdGEuZGF0YVtvZmZzZXQgKyAzXSA9IDI1NTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhcmVDb2xvcnNFcXVhbChjb2xvcjEsIGNvbG9yMilcclxuXHR7XHJcblx0XHRyZXR1cm4gY29sb3IxWzBdID09IGNvbG9yMlswXVxyXG5cdFx0XHQmJiBjb2xvcjFbMV0gPT0gY29sb3IyWzFdXHJcblx0XHRcdCYmIGNvbG9yMVsyXSA9PSBjb2xvcjJbMl1cclxuXHRcdFx0JiYgY29sb3IxWzNdID09IGNvbG9yMlszXTtcclxuXHR9XHJcblxyXG5cdC8vIHRvbGVyYW5jZSBpcyBuZWVkZWQgdG8gZmlsbCBwZW5jaWwgZHJhd24gc2hhcGVzIGJlY2F1c2Ugb2YgY2FudmFzIGJ1ZyBpbiBicm93c2VyczpcclxuXHQvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNjY2MTAwXHJcblx0Ly8gaXQgc3RpbGwgZG9lc24ndCBmaWxsIGJydXNoIGRyYXduIHNoYXBlcyBiZWNhdXNlIG9mIGl0cyBzaGFkb3dcclxuXHRzdGF0aWMgYXJlQ29sb3JzU2ltaWxhcihjb2xvcjEsIGNvbG9yMilcclxuXHR7XHJcblx0XHRjb25zdCB0b2xlcmFuY2UgPSA2O1xyXG5cdFx0Y29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGNvbG9yMVswXSAtIGNvbG9yMlswXSkgKyBNYXRoLmFicyhjb2xvcjFbMV0gLSBjb2xvcjJbMV0pXHJcblx0XHRcdFx0XHRcdCsgTWF0aC5hYnMoY29sb3IxWzJdIC0gY29sb3IyWzJdKSArIE1hdGguYWJzKGNvbG9yMVszXSAtIGNvbG9yMlszXSk7XHJcblxyXG5cdFx0cmV0dXJuIGRpZmZlcmVuY2UgPD0gdG9sZXJhbmNlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBpeGVsTmVlZHNVcGRhdGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgaW1hZ2VEYXRhLCBjdXJDb2xvciwgY29sb3JUb1JlcGxhY2UpXHJcblx0e1xyXG5cdFx0aWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gd2lkdGggfHwgeSA+PSBoZWlnaHQpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRsZXQgcGl4ZWxDb2xvciA9IHRoaXMuZ2V0UGl4ZWxDb2xvcih4LCB5LCBpbWFnZURhdGEpO1xyXG5cdFx0aWYgKHRoaXMuYXJlQ29sb3JzU2ltaWxhcihwaXhlbENvbG9yLCBjdXJDb2xvcikgfHwgIXRoaXMuYXJlQ29sb3JzU2ltaWxhcihwaXhlbENvbG9yLCBjb2xvclRvUmVwbGFjZSkpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmaWxsUGl4ZWxzKHdpZHRoLCBoZWlnaHQsIHBvc1gsIHBvc1ksIGltYWdlRGF0YSwgY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKVxyXG5cdHtcclxuXHRcdGxldCBwaXhlbHMgPSBuZXcgVWludDMyQXJyYXkod2lkdGgqaGVpZ2h0KjgpO1xyXG5cdFx0cGl4ZWxzWzBdID0gcG9zWDtcclxuXHRcdHBpeGVsc1sxXSA9IHBvc1k7XHJcblx0XHRsZXQgcXVldWVMZW5ndGggPSAyO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aCAtIDE7IGkrPTIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChpID4gcXVldWVMZW5ndGgpXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5waXhlbE5lZWRzVXBkYXRlKHBpeGVsc1tpXSwgcGl4ZWxzW2krMV0sIHdpZHRoLCBoZWlnaHQsIGltYWdlRGF0YSwgY3VyQ29sb3IsIGNvbG9yVG9SZXBsYWNlKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuc2V0UGl4ZWxDb2xvcihwaXhlbHNbaV0sIHBpeGVsc1tpKzFdLCBpbWFnZURhdGEsIGN1ckNvbG9yKTtcclxuXHJcblx0XHRcdFx0cGl4ZWxzW3F1ZXVlTGVuZ3RoXSA9IHBpeGVsc1tpXSAtIDE7IC8vIGdvIGxlZnRcclxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGgrMV0gPSBwaXhlbHNbaSsxXTtcclxuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xyXG5cclxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldO1xyXG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdIC0gMTsgLy8gZ28gdXBcclxuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xyXG5cclxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldICsgMTsgLy8gZ28gcmlnaHRcclxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGgrMV0gPSBwaXhlbHNbaSsxXTtcclxuXHRcdFx0XHRxdWV1ZUxlbmd0aCArPSAyO1xyXG5cclxuXHRcdFx0XHRwaXhlbHNbcXVldWVMZW5ndGhdID0gcGl4ZWxzW2ldO1xyXG5cdFx0XHRcdHBpeGVsc1txdWV1ZUxlbmd0aCsxXSA9IHBpeGVsc1tpKzFdICsgMTsgLy8gZ28gZG93blxyXG5cdFx0XHRcdHF1ZXVlTGVuZ3RoICs9IDI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEZpbGxEYXRhKHBvc1gsIHBvc1ksIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGltYWdlRGF0YSlcclxuXHR7XHJcblx0XHRpZiAocG9zWCA8IDAgfHwgcG9zWCA+IGNhbnZhc1dpZHRoKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRpZiAocG9zWSA8IDAgfHwgcG9zWSA+IGNhbnZhc0hlaWdodClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0bGV0IGN1ckNvbG9yID0gQ29sb3IuZnJvbUhleCh0aGlzLmNvbG9yKS50b0FycmF5KCk7XHJcblx0XHRsZXQgY29sb3JUb1JlcGxhY2UgPSBGaWxsLmdldFBpeGVsQ29sb3IocG9zWCwgcG9zWSwgaW1hZ2VEYXRhKTtcclxuXHJcblx0XHRpZiAoRmlsbC5hcmVDb2xvcnNFcXVhbChjdXJDb2xvciwgY29sb3JUb1JlcGxhY2UpKVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHRjdXJDb2xvcixcclxuXHRcdFx0Y29sb3JUb1JlcGxhY2VcclxuXHRcdF07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxsOyIsImltcG9ydCBUb29sIGZyb20gXCIuL3Rvb2xcIjtcclxuaW1wb3J0IFRvb2xUeXBlIGZyb20gXCIuLi9tb2RlbHMvdG9vbC10eXBlXCI7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgVG9vbFxyXG57XHJcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuTElORSwgXCJzcXVhcmVcIiwgc2l6ZSwgY29sb3IsIDApO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXHJcblx0e1xyXG5cdFx0bGV0IHN0YXJ0UG9zWCA9IHBvc1g7XHJcblx0XHRsZXQgc3RhcnRQb3NZID0gcG9zWTtcclxuXHJcblx0XHRpZiAoZW5kUG9zWCA8IHBvc1gpXHJcblx0XHRcdHN0YXJ0UG9zWCA9IGVuZFBvc1g7XHJcblxyXG5cdFx0aWYgKGVuZFBvc1kgPCBwb3NZKVxyXG5cdFx0XHRzdGFydFBvc1kgPSBlbmRQb3NZO1xyXG5cclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGN0eC5tb3ZlVG8ocG9zWCwgcG9zWSk7XHJcblx0XHRjdHgubGluZVRvKGVuZFBvc1gsIGVuZFBvc1kpO1xyXG5cdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZTsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgUGFpbnRSb2xsZXIgZXh0ZW5kcyBUb29sXHJcbntcclxuXHRjb25zdHJ1Y3RvcihzaXplLCBjb2xvcilcclxuXHR7XHJcblx0XHRzdXBlcihUb29sVHlwZS5QQUlOVF9ST0xMRVIsIFwiYnV0dFwiLCBzaXplLCBjb2xvciwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWludFJvbGxlcjsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgUGVuY2lsIGV4dGVuZHMgVG9vbFxyXG57XHJcblx0Y29uc3RydWN0b3Ioc2l6ZSwgY29sb3IpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuUEVOQ0lMLCBcInJvdW5kXCIsIHNpemUsIGNvbG9yLCAwKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlbmNpbDsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgUmVjdCBleHRlbmRzIFRvb2xcclxue1xyXG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yLCBzcXVhcmU9ZmFsc2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoVG9vbFR5cGUuUkVDVCwgXCJidXR0XCIsIHNpemUsIGNvbG9yLCAwKTtcclxuXHRcdHRoaXMuc3F1YXJlID0gc3F1YXJlO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhjdHgsIHBvc1gsIHBvc1ksIGVuZFBvc1gsIGVuZFBvc1kpXHJcblx0e1xyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNxdWFyZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgc2l6ZSA9IE1hdGgubWF4KE1hdGguYWJzKGVuZFBvc1ggLSBwb3NYKSwgTWF0aC5hYnMoZW5kUG9zWSAtIHBvc1kpKTtcclxuXHRcdFx0Y29uc3Qgb2Zmc2V0RGlyZWN0aW9uWCA9IE1hdGguc2lnbihlbmRQb3NYIC0gcG9zWCk7XHJcblx0XHRcdGNvbnN0IG9mZnNldERpcmVjdGlvblkgPSBNYXRoLnNpZ24oZW5kUG9zWSAtIHBvc1kpO1xyXG5cdFx0XHRjb25zdCB3aWR0aCA9IHNpemUgKiBvZmZzZXREaXJlY3Rpb25YO1xyXG5cdFx0XHRjb25zdCBoZWlnaHQgPSBzaXplICogb2Zmc2V0RGlyZWN0aW9uWTtcclxuXHJcblx0XHRcdGN0eC5yZWN0KHBvc1gsIHBvc1ksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuXHRcdH0gZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zdCBzdGFydFBvc1ggPSBNYXRoLm1pbihwb3NYLCBlbmRQb3NYKTtcclxuXHRcdFx0Y29uc3Qgc3RhcnRQb3NZID0gTWF0aC5taW4ocG9zWSwgZW5kUG9zWSk7XHJcblx0XHRcdGNvbnN0IHdpZHRoID0gTWF0aC5hYnMoZW5kUG9zWCAtIHBvc1gpO1xyXG5cdFx0XHRjb25zdCBoZWlnaHQgPSBNYXRoLmFicyhlbmRQb3NZIC0gcG9zWSk7XHJcblxyXG5cdFx0XHRjdHgucmVjdChzdGFydFBvc1gsIHN0YXJ0UG9zWSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjdDsiLCJpbXBvcnQgVG9vbCBmcm9tIFwiLi90b29sXCI7XHJcbmltcG9ydCBUb29sVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3Rvb2wtdHlwZVwiO1xyXG5cclxuY2xhc3MgVGV4dCBleHRlbmRzIFRvb2xcclxue1xyXG5cdGNvbnN0cnVjdG9yKHNpemUsIGNvbG9yKVxyXG5cdHtcclxuXHRcdHN1cGVyKFRvb2xUeXBlLlRFWFQsIFwicm91bmRcIiwgc2l6ZSwgY29sb3IsIDApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDsiLCJpbXBvcnQgVG9vbFR5cGUgZnJvbSBcIi4uL21vZGVscy90b29sLXR5cGVcIjtcclxuaW1wb3J0IEJydXNoIGZyb20gXCIuL2JydXNoXCI7XHJcbmltcG9ydCBQYWludFJvbGxlciBmcm9tIFwiLi9wYWludC1yb2xsZXJcIjtcclxuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9wZW5jaWxcIjtcclxuaW1wb3J0IEVyYXNlciBmcm9tIFwiLi9lcmFzZXJcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xyXG5pbXBvcnQgRmlsbCBmcm9tIFwiLi9maWxsXCI7XHJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi9jb2xvci1waWNrZXJcIjtcclxuaW1wb3J0IFJlY3QgZnJvbSBcIi4vcmVjdFwiO1xyXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9saW5lXCI7XHJcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2VsbGlwc2VcIjtcclxuXHJcbmNvbnN0IHRvb2xGcm9tVHlwZSA9ICh0b29sVHlwZSwgc2l6ZSwgY29sb3IpID0+XHJcbntcclxuXHRzd2l0Y2ggKHRvb2xUeXBlKVxyXG5cdHtcclxuXHRcdGNhc2UgVG9vbFR5cGUuQlJVU0g6XHJcblx0XHRcdHJldHVybiBuZXcgQnJ1c2goc2l6ZSwgY29sb3IpO1xyXG5cdFx0Y2FzZSBUb29sVHlwZS5QQUlOVF9ST0xMRVI6XHJcblx0XHRcdHJldHVybiBuZXcgUGFpbnRSb2xsZXIoc2l6ZSwgY29sb3IpO1xyXG5cdFx0Y2FzZSBUb29sVHlwZS5QRU5DSUw6XHJcblx0XHRcdHJldHVybiBuZXcgUGVuY2lsKHNpemUsIGNvbG9yKTtcclxuXHRcdGNhc2UgVG9vbFR5cGUuRVJBU0VSOlxyXG5cdFx0XHRyZXR1cm4gbmV3IEVyYXNlcihzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLlRFWFQ6XHJcblx0XHRcdHJldHVybiBuZXcgVGV4dChzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLkZJTEw6XHJcblx0XHRcdHJldHVybiBuZXcgRmlsbChzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLkNPTE9SX1BJQ0tFUjpcclxuXHRcdFx0cmV0dXJuIG5ldyBDb2xvclBpY2tlcihzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLlJFQ1Q6XHJcblx0XHRcdHJldHVybiBuZXcgUmVjdChzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLkxJTkU6XHJcblx0XHRcdHJldHVybiBuZXcgTGluZShzaXplLCBjb2xvcik7XHJcblx0XHRjYXNlIFRvb2xUeXBlLkVMTElQU0U6XHJcblx0XHRcdHJldHVybiBuZXcgRWxsaXBzZShzaXplLCBjb2xvcik7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwid3JvbmcgdG9vbCB0eXBlOlwiLCB0b29sVHlwZSk7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvb2xGcm9tVHlwZTsiLCJjbGFzcyBUb29sXHJcbntcclxuXHRjb25zdHJ1Y3Rvcih0eXBlLCBzdHlsZSwgc2l6ZSwgY29sb3IsIGJsdXI9Mywgb3BlcmF0aW9uPVwic291cmNlLW92ZXJcIilcclxuXHR7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5zdHlsZSA9IHN0eWxlO1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHRcdHRoaXMuYmx1ciA9IGJsdXI7XHJcblx0XHR0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldFNpemUoKVxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnNpemU7XHJcblx0fVxyXG5cclxuXHRzZXRTaXplKHNpemUpXHJcblx0e1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHR9XHJcblxyXG5cdGdldENvbG9yKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb2xvcjtcclxuXHR9XHJcblxyXG5cdHNldENvbG9yKGNvbG9yKVxyXG5cdHtcclxuXHRcdHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2w7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==