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

		socket.on("insertImage", (dataImg, left, top, w, h) =>
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