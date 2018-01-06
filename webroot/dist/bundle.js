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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__(6);



class Nizz {

    constructor() {
        this.isParty = null;
        this.music = null;
        this.Terminal = new __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* default */]('/home/chris', this);
        this.Terminal.launch();
        this.init();
    }
    
    init() {
        //this.flip();
        this.rotate();
        document.querySelector('#wrapper').classList.add('pretty');
    }
    
    help() {
        this.Terminal.output('Options:');
        this.Terminal.output('about - a little bit about me');
        this.Terminal.output('github - go to my github');
        this.Terminal.output('medium - go to my medium blog');
        this.Terminal.output('source - go to source code for this website');
        this.Terminal.output('party - starts a party');
        this.Terminal.output('pause - pauses the party');
    }
    
    about() {
        this.Terminal.output('Name: Chris Nizzardini');
        this.Terminal.output('Location: Salt Lake City, UT');
        this.Terminal.output('Occupation: Software Engineer');
        this.Terminal.output('Skills: Linux, Apache, Mysql, PHP, JavaScript, CakePHP, all those icons in the background and more...');
        this.Terminal.output('Freelancing: Yes, I am available for freelance work.');
        this.Terminal.output('Contact: For now you can mention me or direct message me on twitter @cnizzardini');
    }
    
    github() {
        this.Terminal.output('Launching https://github.com/cnizzardini');
        window.open('https://github.com/cnizzardini', '_blank').focus();
    }
    
    medium() {
        this.Terminal.output('Launching https://medium.com/@cnizzardini');
        window.open('https://medium.com/@cnizzardini', '_blank').focus();
    }
    
    source() {
        this.Terminal.output('Launching website source code https://github.com/cnizzardini/cnizzdotcom');
        window.open('https://github.com/cnizzardini/cnizzdotcom', '_blank').focus();
    }
    
    party(music) {        
        this.reset();
        var boxes = document.querySelectorAll('.box');

        if (music != 0) {
            this.music = new Audio('/nizzardini/assets/mp3/sabrepulse-massive-damage-fighter-x-remix.mp3');
            this.music.play();
            this.Terminal.output({
                string: 'Turn up your volume. Lets party!'
            });
        }

        var me = this;

        this.isParty = setInterval(function(){
            var index = Math.floor(Math.random() * boxes.length);
            if (boxes[ index ] != undefined) {
                boxes[ index ].classList.toggle('over');
                var opacity = Math.random() * .9;
                boxes[ index ].setAttribute("style", 'background: rgba(255, 255, 255, ' + opacity + ')');
            }
            if (music != 0 && me.music != null && me.music.paused) {
                clearInterval(me.isParty);
                me.reset();
            }
        }, 75);
    };
    
    pause() {
        this.reset();
        var boxes = document.querySelectorAll('.box');
        console.log(boxes);
        for (var i=0; i<boxes.length; i++) {
            console.log(i)
            boxes[i].removeEventListener('mouseover', null, true);
        }
    };
    
    flip() {
        this.reset();

        var boxes = document.querySelectorAll('.box');
        var me = this;
        for (var i=0; i<boxes.length; i++) {
            boxes[i].removeEventListener('mouseover', null, true);
            boxes[i].addEventListener('mouseover', function(){
                this.classList.add('over');
                var flipped = document.querySelectorAll('.over');
                if (flipped.length == boxes.length) {
                    me.reset();
                }
            });
        }
    };

    rotate() {
        this.reset();

        var boxes = document.querySelectorAll('.box');
        var me = this;
        for (var i=0; i<boxes.length; i++) {
            boxes[i].removeEventListener('mouseenter', null);
            boxes[i].addEventListener('mouseenter', function(){
                if (this.querySelector('a')) {
                    this.classList.add('linkable');
                }
            });
            boxes[i].addEventListener('mouseleave', function(){
                if (this.querySelector('a')) {
                    this.classList.remove('linkable');
                }
            }); 
        }
    };

    reset() {
        var flipped = document.querySelectorAll('.over');

        if (this.music != null) {
            this.music.pause();
        }

        if (this.isParty != null) {
            clearInterval(this.isParty);
        }

        if (flipped.length == 0) {
            return false;
        }

        var boxes = document.querySelectorAll('.box');
        for (var i=0; i<boxes.length; i++) {
            boxes[i].setAttribute("style", '');
        }

        var reset = setInterval(function(){
            var index = Math.floor(Math.random() * flipped.length);
            if (flipped[ index ] != undefined) {
                flipped[ index ].setAttribute("style", '');
                flipped[ index ].classList.remove('over');
            }

            flipped = document.querySelectorAll('.over');

            if (flipped.length <= 0) {
                clearInterval(reset);
            }
        }, 50);
    };
}

new Nizz();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/* \n    Created on : Nov 6, 2017, 6:02:57 PM\n    Author     : chris\n*/\nbody, html {\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n#me {\n  font-size: 3.0em;\n  text-align: center;\n  font-family: 'Pinyon Script', cursive; }\n\n#terminal {\n  position: absolute;\n  z-index: 1000;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);\n  border-radius: 3px;\n  cursor: text; }\n\n@media (min-width: 321px) and (max-width: 768px) {\n  #terminal {\n    width: 70vw;\n    height: 50vh;\n    transform: translate(-50%, 0);\n    margin: 100px auto 0 auto;\n    left: 50%; } }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  #terminal {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto 0 auto; } }\n  @media (min-width: 769px) {\n    #terminal {\n      width: 50vw;\n      height: 50vh;\n      transform: translate(-50%, 0);\n      margin: 100px auto 0 auto;\n      left: 50%; } }\n  #terminal .title {\n    cursor: pointer;\n    text-align: center;\n    color: #E6E6E6;\n    padding: 5px 0;\n    margin: 0;\n    font-size: 1em;\n    border: 1px solid #000000;\n    border-bottom: none;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    background: #404040;\n    background: linear-gradient(to bottom, #404040 0%, #000000 100%); }\n    #terminal .title.grab {\n      cursor: grabbing; }\n  #terminal ul {\n    padding: 5px;\n    list-style: none;\n    background: rgba(0, 0, 0, 0.6);\n    color: #45d40c;\n    font: 1em 'Andale Mono', Consolas, 'Courier New';\n    line-height: 1.6em;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  #terminal ul {\n    height: 100%;\n    margin: 0 auto 0 auto;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    margin: 0; } }\n    @media (min-width: 768px) {\n      #terminal ul {\n        height: 46vh;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        margin: 0; } }\n    #terminal ul li#prompt:before, #terminal ul li.executed:before {\n      content: '>';\n      position: absolute;\n      left: 0;\n      top: 0; }\n    #terminal ul li {\n      word-wrap: break-word;\n      position: relative;\n      padding: 0 0 0 15px; }\n      #terminal ul li input {\n        width: 100%;\n        font: 1.0em 'Andale Mono', Consolas, 'Courier New';\n        background: transparent;\n        border: none;\n        color: #45d40c; }\n      #terminal ul li input::placeholder {\n        color: #45d40c;\n        padding-left: 10px; }\n      #terminal ul li input:focus {\n        border: none;\n        outline: none; }\n      #terminal ul li.executed {\n        color: salmon; }\n\n.pretty {\n  background: url(\"/nizzardini/img/blotter-gradient-1.jpg\") no-repeat center;\n  background-size: cover;\n  overflow: hidden; }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  .pretty {\n    width: 100vw;\n    height: 100vh; } }\n  .pretty .grid {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr); }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  .pretty .grid {\n    display: none; } }\n    .pretty .grid .box {\n      background: rgba(255, 255, 255, 0.1);\n      display: flex;\n      border: none;\n      /*border:1px solid rgba(255, 255, 255, 1);\n            border-top: none;\n            border-left: none;*/\n      justify-content: center;\n      align-items: center;\n      font-size: 70px;\n      color: #ffffff;\n      line-height: 1;\n      font-family: Helvetica;\n      font-weight: 200;\n      cursor: auto;\n      transition: all .3s ease;\n      height: 20vh;\n      width: 20vw;\n      transition-duration: 0.5s; }\n      .pretty .grid .box.over {\n        background: rgba(255, 255, 255, 0.5);\n        transform: rotateY(180deg);\n        transition: all 500ms ease-out;\n        border: none; }\n      .pretty .grid .box:hover {\n        background: rgba(255, 255, 255, 0.5);\n        transform: rotateY(180deg);\n        transition: background 250ms linear;\n        border: none; }\n      .pretty .grid .box.circle {\n        width: 20vh;\n        margin: 0 25%;\n        border-radius: 100px; }\n      .pretty .grid .box.move {\n        position: fixed; }\n      .pretty .grid .box a {\n        color: #ffffff;\n        text-decoration: none; }\n\n/*\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n*/\n/* \n    Created on : Nov 6, 2017, 6:04:50 PM\n    Author     : chris\n*/\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Terminal {
    
    constructor(name, app) {
        this.name = name;
        this.app = app;
        //this.launch();
    }
    
    /**
     * launches the terminal
     * @returns {undefined}
     */
    launch() {
        // create terminal
        this.terminal = document.createElement('div');
        this.terminal.id = 'terminal';
        
        // create title bar
        this.titleBar = document.createElement('p');
        this.titleBar.className = 'title';
        this.titleBar.textContent = this.name;
        this.terminal.appendChild(this.titleBar);
        
        // create list
        this.list = document.createElement('ul');
        var item = document.createElement('li');
        
        // add help context
        item.textContent = 'Type "help" for commands, press enter to execute command';
        this.list.appendChild(item);
        
        // add command prompt
        var item = document.createElement('li');
        this.command = document.createElement('input');
        item.id = 'prompt';
        this.command.autocomplete = 'off';
        item.appendChild(this.command);
        this.list.appendChild(item);
        
        // add list
        this.terminal.appendChild(this.list);
        
        // add all to document
        document.body.prepend(this.terminal);
        
        // focus command prompt
        this.command.focus();
        
        // listen for commands
        this.listen();
        this.move();
    }
    
    /**
     * listens for commands
     * @returns {undefined}
     */
    listen() {
        var me = this;
        this.terminal.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            me.execute(key);
        }); 
    }
    
    /**
     * executes commands
     * @param integer key
     * @returns {Shell@arr;@call;app|Boolean}
     */
    execute(key) {
        console.log('exec')
        if (key !== 13) {
            return false;
        }
        
        var cmd = this.command.value;
        
        this.output({
            string: cmd,
            cls: 'executed'
        });
        
        if (this.app[ cmd ] !== undefined) {    
            return this.app[ cmd ](cmd);
        }
        
        switch (cmd) {
            case 'clear':
                this.clear();
                break;
            case 'reload':
                location.reload();
                break;
            default:
                this.output('No command "' + cmd + '" found, try "help"');
        }
    }
    
    /**
     * sends output to terminal
     * @param object obj
     * @returns {undefined}
     */
    output(variable) {
        var items = this.list.querySelectorAll('li');
        var item = document.createElement('li');
        
        if (typeof(variable) == 'string') {
            item.textContent = variable;
        } else {
            if (variable.string !== undefined) {
                item.textContent = variable.string;
            }
            if (variable.cls !== undefined) {
                item.className = variable.cls;
            }
            if (variable.id !== undefined) {
                item.id = variable.id;
            }
        }
        
        this.list.insertBefore(item, this.list.childNodes[items.length-1]);
        this.command.value = '';
        this.command.focus();
        this.list.scrollTop = this.list.scrollHeight;
    }
    
    /**
     * clears the terminal
     * @returns {undefined}
     */
    clear() {
        var items = this.list.querySelectorAll('li');
        for (var i=0; i<items.length; i++) {
            if (items[ i ].id != 'prompt') {
                this.list.removeChild(items[i]);
            }
        }
        this.output('Type "help" for commands, press enter to execute command');
    }
    
    move() {
        this.titleBar.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

        function mouseUp() {
            window.removeEventListener('mousemove', move, true);
        }

        function mouseDown(e) {
            window.addEventListener('mousemove', move, true);
        }

        function move(e) {
            this.terminal.style.top = e.clientY - 100 + 'px';
            this.terminal.style.left = e.clientX + 'px';
            e.preventDefault();
        };
    }
    
    minimize() {
        console.log('@todo will minimuze the terminal');
    }
    
    maximize() {
        console.log('@todo');
    }
    
    close() {
        console.log('@todo');
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Terminal);

/***/ })
/******/ ]);