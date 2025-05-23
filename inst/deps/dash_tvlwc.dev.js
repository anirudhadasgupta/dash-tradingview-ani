window["dash_tvlwc"] =
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
/******/ 	__webpack_require__.p = "";var getCurrentScript = function() {
/******/ 	    var script = document.currentScript;
/******/ 	    if (!script) {
/******/ 	        /* Shim for IE11 and below */
/******/ 	        /* Do not take into account async scripts and inline scripts */
/******/
/******/ 	        var doc_scripts = document.getElementsByTagName('script');
/******/ 	        var scripts = [];
/******/
/******/ 	        for (var i = 0; i < doc_scripts.length; i++) {
/******/ 	            scripts.push(doc_scripts[i]);
/******/ 	        }
/******/
/******/ 	        scripts = scripts.filter(function(s) { return !s.async && !s.text && !s.textContent; });
/******/ 	        script = scripts.slice(-1)[0];
/******/ 	    }
/******/
/******/ 	    return script;
/******/ 	};
/******/
/******/ 	var isLocalScript = function(script) {
/******/ 	    return /\/_dash-component-suites\//.test(script.src);
/******/ 	};
/******/
/******/ 	Object.defineProperty(__webpack_require__, 'p', {
/******/ 	    get: (function () {
/******/ 	        var script = getCurrentScript();
/******/
/******/ 	        var url = script.src.split('/').slice(0, -1).join('/') + '/';
/******/
/******/ 	        return function() {
/******/ 	            return url;
/******/ 	        };
/******/ 	    })()
/******/ 	});
/******/
/******/ 	if (typeof jsonpScriptSrc !== 'undefined') {
/******/ 	    var __jsonpScriptSrc__ = jsonpScriptSrc;
/******/ 	    jsonpScriptSrc = function(chunkId) {
/******/ 	        var script = getCurrentScript();
/******/ 	        var isLocal = isLocalScript(script);
/******/
/******/ 	        var src = __jsonpScriptSrc__(chunkId);
/******/
/******/ 	        if(!isLocal) {
/******/ 	            return src;
/******/ 	        }
/******/
/******/ 	        var srcFragments = src.split('/');
/******/ 	        var fileFragments = srcFragments.slice(-1)[0].split('.');
/******/
/******/ 	        fileFragments.splice(1, 0, "v0_1_1m1741286758");
/******/ 	        srcFragments.splice(-1, 1, fileFragments.join('.'))
/******/
/******/ 	        return srcFragments.join('/');
/******/ 	    };
/******/ 	}
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fancy-canvas/canvas-element-bitmap-size.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/fancy-canvas/canvas-element-bitmap-size.mjs ***!
  \******************************************************************/
/*! exports provided: bindTo */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTo", function() { return bindTo; });
/* harmony import */ var _size_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size.mjs */ "./node_modules/fancy-canvas/size.mjs");
/* harmony import */ var _device_pixel_ratio_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-pixel-ratio.mjs */ "./node_modules/fancy-canvas/device-pixel-ratio.mjs");


var DevicePixelContentBoxBinding = /** @class */function () {
  function DevicePixelContentBoxBinding(canvasElement, transformBitmapSize, options) {
    var _a;
    this._canvasElement = null;
    this._bitmapSizeChangedListeners = [];
    this._suggestedBitmapSize = null;
    this._suggestedBitmapSizeChangedListeners = [];
    // devicePixelRatio approach
    this._devicePixelRatioObservable = null;
    // ResizeObserver approach
    this._canvasElementResizeObserver = null;
    this._canvasElement = canvasElement;
    this._canvasElementClientSize = Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: this._canvasElement.clientWidth,
      height: this._canvasElement.clientHeight
    });
    this._transformBitmapSize = transformBitmapSize !== null && transformBitmapSize !== void 0 ? transformBitmapSize : function (size) {
      return size;
    };
    this._allowResizeObserver = (_a = options === null || options === void 0 ? void 0 : options.allowResizeObserver) !== null && _a !== void 0 ? _a : true;
    this._chooseAndInitObserver();
    // we MAY leave the constuctor without any bitmap size observation mechanics initialized
  }
  DevicePixelContentBoxBinding.prototype.dispose = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      throw new Error('Object is disposed');
    }
    (_a = this._canvasElementResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this._canvasElementResizeObserver = null;
    (_b = this._devicePixelRatioObservable) === null || _b === void 0 ? void 0 : _b.dispose();
    this._devicePixelRatioObservable = null;
    this._suggestedBitmapSizeChangedListeners.length = 0;
    this._bitmapSizeChangedListeners.length = 0;
    this._canvasElement = null;
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElement", {
    get: function get() {
      if (this._canvasElement === null) {
        throw new Error('Object is disposed');
      }
      return this._canvasElement;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "canvasElementClientSize", {
    get: function get() {
      return this._canvasElementClientSize;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "bitmapSize", {
    get: function get() {
      return Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: this.canvasElement.width,
        height: this.canvasElement.height
      });
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Use this function to change canvas element client size until binding is disposed
   * @param clientSize New client size for bound HTMLCanvasElement
   */
  DevicePixelContentBoxBinding.prototype.resizeCanvasElement = function (clientSize) {
    this._canvasElementClientSize = Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])(clientSize);
    this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px");
    this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px");
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype.subscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeBitmapSizeChanged = function (listener) {
    this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  Object.defineProperty(DevicePixelContentBoxBinding.prototype, "suggestedBitmapSize", {
    get: function get() {
      return this._suggestedBitmapSize;
    },
    enumerable: false,
    configurable: true
  });
  DevicePixelContentBoxBinding.prototype.subscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners.push(listener);
  };
  DevicePixelContentBoxBinding.prototype.unsubscribeSuggestedBitmapSizeChanged = function (listener) {
    this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function (l) {
      return l !== listener;
    });
  };
  DevicePixelContentBoxBinding.prototype.applySuggestedBitmapSize = function () {
    if (this._suggestedBitmapSize === null) {
      // nothing to apply
      return;
    }
    var oldSuggestedSize = this._suggestedBitmapSize;
    this._suggestedBitmapSize = null;
    this._resizeBitmap(oldSuggestedSize);
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, this._suggestedBitmapSize);
  };
  DevicePixelContentBoxBinding.prototype._resizeBitmap = function (newSize) {
    var oldSize = this.bitmapSize;
    if (Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(oldSize, newSize)) {
      return;
    }
    this.canvasElement.width = newSize.width;
    this.canvasElement.height = newSize.height;
    this._emitBitmapSizeChanged(oldSize, newSize);
  };
  DevicePixelContentBoxBinding.prototype._emitBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._bitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._suggestNewBitmapSize = function (newSize) {
    var oldSuggestedSize = this._suggestedBitmapSize;
    var finalNewSize = Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])(this._transformBitmapSize(newSize, this._canvasElementClientSize));
    var newSuggestedSize = Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(this.bitmapSize, finalNewSize) ? null : finalNewSize;
    if (oldSuggestedSize === null && newSuggestedSize === null) {
      return;
    }
    if (oldSuggestedSize !== null && newSuggestedSize !== null && Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(oldSuggestedSize, newSuggestedSize)) {
      return;
    }
    this._suggestedBitmapSize = newSuggestedSize;
    this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, newSuggestedSize);
  };
  DevicePixelContentBoxBinding.prototype._emitSuggestedBitmapSizeChanged = function (oldSize, newSize) {
    var _this = this;
    this._suggestedBitmapSizeChangedListeners.forEach(function (listener) {
      return listener.call(_this, oldSize, newSize);
    });
  };
  DevicePixelContentBoxBinding.prototype._chooseAndInitObserver = function () {
    var _this = this;
    if (!this._allowResizeObserver) {
      this._initDevicePixelRatioObservable();
      return;
    }
    isDevicePixelContentBoxSupported().then(function (isSupported) {
      return isSupported ? _this._initResizeObserver() : _this._initDevicePixelRatioObservable();
    });
  };
  // devicePixelRatio approach
  DevicePixelContentBoxBinding.prototype._initDevicePixelRatioObservable = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      throw new Error('No window is associated with the canvas');
    }
    this._devicePixelRatioObservable = Object(_device_pixel_ratio_mjs__WEBPACK_IMPORTED_MODULE_1__["createObservable"])(win);
    this._devicePixelRatioObservable.subscribe(function () {
      return _this._invalidateBitmapSize();
    });
    this._invalidateBitmapSize();
  };
  DevicePixelContentBoxBinding.prototype._invalidateBitmapSize = function () {
    var _a, _b;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    var win = canvasElementWindow(this._canvasElement);
    if (win === null) {
      return;
    }
    var ratio = (_b = (_a = this._devicePixelRatioObservable) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : win.devicePixelRatio;
    var canvasRects = this._canvasElement.getClientRects();
    var newSize =
    // eslint-disable-next-line no-negated-condition
    canvasRects[0] !== undefined ? predictedBitmapSize(canvasRects[0], ratio) : Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: this._canvasElementClientSize.width * ratio,
      height: this._canvasElementClientSize.height * ratio
    });
    this._suggestNewBitmapSize(newSize);
  };
  // ResizeObserver approach
  DevicePixelContentBoxBinding.prototype._initResizeObserver = function () {
    var _this = this;
    if (this._canvasElement === null) {
      // it looks like we are already dead
      return;
    }
    this._canvasElementResizeObserver = new ResizeObserver(function (entries) {
      var entry = entries.find(function (entry) {
        return entry.target === _this._canvasElement;
      });
      if (!entry || !entry.devicePixelContentBoxSize || !entry.devicePixelContentBoxSize[0]) {
        return;
      }
      var entrySize = entry.devicePixelContentBoxSize[0];
      var newSize = Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: entrySize.inlineSize,
        height: entrySize.blockSize
      });
      _this._suggestNewBitmapSize(newSize);
    });
    this._canvasElementResizeObserver.observe(this._canvasElement, {
      box: 'device-pixel-content-box'
    });
  };
  return DevicePixelContentBoxBinding;
}();
function bindTo(canvasElement, target) {
  if (target.type === 'device-pixel-content-box') {
    return new DevicePixelContentBoxBinding(canvasElement, target.transform, target.options);
  }
  throw new Error('Unsupported binding target');
}
function canvasElementWindow(canvasElement) {
  // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
  // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return canvasElement.ownerDocument.defaultView;
}
function isDevicePixelContentBoxSupported() {
  return new Promise(function (resolve) {
    var ro = new ResizeObserver(function (entries) {
      resolve(entries.every(function (entry) {
        return 'devicePixelContentBoxSize' in entry;
      }));
      ro.disconnect();
    });
    ro.observe(document.body, {
      box: 'device-pixel-content-box'
    });
  })["catch"](function () {
    return false;
  });
}
function predictedBitmapSize(canvasRect, ratio) {
  return Object(_size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"])({
    width: Math.round(canvasRect.left * ratio + canvasRect.width * ratio) - Math.round(canvasRect.left * ratio),
    height: Math.round(canvasRect.top * ratio + canvasRect.height * ratio) - Math.round(canvasRect.top * ratio)
  });
}

/***/ }),

/***/ "./node_modules/fancy-canvas/canvas-rendering-target.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/fancy-canvas/canvas-rendering-target.mjs ***!
  \***************************************************************/
/*! exports provided: CanvasRenderingTarget2D, createCanvasRenderingTarget2D, tryCreateCanvasRenderingTarget2D */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderingTarget2D", function() { return CanvasRenderingTarget2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasRenderingTarget2D", function() { return createCanvasRenderingTarget2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCreateCanvasRenderingTarget2D", function() { return tryCreateCanvasRenderingTarget2D; });
/**
 * @experimental
 */
var CanvasRenderingTarget2D = /** @class */function () {
  function CanvasRenderingTarget2D(context, mediaSize, bitmapSize) {
    if (mediaSize.width === 0 || mediaSize.height === 0) {
      throw new TypeError('Rendering target could only be created on a media with positive width and height');
    }
    this._mediaSize = mediaSize;
    // !Number.isInteger(bitmapSize.width) || !Number.isInteger(bitmapSize.height)
    if (bitmapSize.width === 0 || bitmapSize.height === 0) {
      throw new TypeError('Rendering target could only be created using a bitmap with positive integer width and height');
    }
    this._bitmapSize = bitmapSize;
    this._context = context;
  }
  CanvasRenderingTarget2D.prototype.useMediaCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio);
      return f({
        context: this._context,
        mediaSize: this._mediaSize
      });
    } finally {
      this._context.restore();
    }
  };
  CanvasRenderingTarget2D.prototype.useBitmapCoordinateSpace = function (f) {
    try {
      this._context.save();
      // do not use resetTransform to support old versions of Edge
      this._context.setTransform(1, 0, 0, 1, 0, 0);
      return f({
        context: this._context,
        mediaSize: this._mediaSize,
        bitmapSize: this._bitmapSize,
        horizontalPixelRatio: this._horizontalPixelRatio,
        verticalPixelRatio: this._verticalPixelRatio
      });
    } finally {
      this._context.restore();
    }
  };
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_horizontalPixelRatio", {
    get: function get() {
      return this._bitmapSize.width / this._mediaSize.width;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(CanvasRenderingTarget2D.prototype, "_verticalPixelRatio", {
    get: function get() {
      return this._bitmapSize.height / this._mediaSize.height;
    },
    enumerable: false,
    configurable: true
  });
  return CanvasRenderingTarget2D;
}();

/**
 * @experimental
 */
function createCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  var bitmapSize = binding.bitmapSize;
  var context = binding.canvasElement.getContext('2d', contextOptions);
  if (context === null) {
    throw new Error('Could not get 2d drawing context from bound canvas element. Has the canvas already been set to a different context mode?');
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}
/**
 * @experimental
 */
function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  if (mediaSize.width === 0 || mediaSize.height === 0) {
    return null;
  }
  var bitmapSize = binding.bitmapSize;
  if (bitmapSize.width === 0 || bitmapSize.height === 0) {
    return null;
  }
  var context = binding.canvasElement.getContext('2d', contextOptions);
  if (context === null) {
    return null;
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}

/***/ }),

/***/ "./node_modules/fancy-canvas/device-pixel-ratio.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/fancy-canvas/device-pixel-ratio.mjs ***!
  \**********************************************************/
/*! exports provided: createObservable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObservable", function() { return createObservable; });
var Observable = /** @class */function () {
  function Observable(win) {
    var _this = this;
    this._resolutionListener = function () {
      return _this._onResolutionChanged();
    };
    this._resolutionMediaQueryList = null;
    this._observers = [];
    this._window = win;
    this._installResolutionListener();
  }
  Observable.prototype.dispose = function () {
    this._uninstallResolutionListener();
    this._window = null;
  };
  Object.defineProperty(Observable.prototype, "value", {
    get: function get() {
      return this._window.devicePixelRatio;
    },
    enumerable: false,
    configurable: true
  });
  Observable.prototype.subscribe = function (next) {
    var _this = this;
    var observer = {
      next: next
    };
    this._observers.push(observer);
    return {
      unsubscribe: function unsubscribe() {
        _this._observers = _this._observers.filter(function (o) {
          return o !== observer;
        });
      }
    };
  };
  Observable.prototype._installResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      throw new Error('Resolution listener is already installed');
    }
    var dppx = this._window.devicePixelRatio;
    this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(dppx, "dppx)"));
    // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
    this._resolutionMediaQueryList.addListener(this._resolutionListener);
  };
  Observable.prototype._uninstallResolutionListener = function () {
    if (this._resolutionMediaQueryList !== null) {
      // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
      this._resolutionMediaQueryList.removeListener(this._resolutionListener);
      this._resolutionMediaQueryList = null;
    }
  };
  Observable.prototype._reinstallResolutionListener = function () {
    this._uninstallResolutionListener();
    this._installResolutionListener();
  };
  Observable.prototype._onResolutionChanged = function () {
    var _this = this;
    this._observers.forEach(function (observer) {
      return observer.next(_this._window.devicePixelRatio);
    });
    this._reinstallResolutionListener();
  };
  return Observable;
}();
function createObservable(win) {
  return new Observable(win);
}

/***/ }),

/***/ "./node_modules/fancy-canvas/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/fancy-canvas/index.mjs ***!
  \*********************************************/
/*! exports provided: size, equalSizes, bindCanvasElementBitmapSizeTo, CanvasRenderingTarget2D, createCanvasRenderingTarget2D, tryCreateCanvasRenderingTarget2D */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _size_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size.mjs */ "./node_modules/fancy-canvas/size.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_mjs__WEBPACK_IMPORTED_MODULE_0__["size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalSizes", function() { return _size_mjs__WEBPACK_IMPORTED_MODULE_0__["equalSizes"]; });

/* harmony import */ var _canvas_element_bitmap_size_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-element-bitmap-size.mjs */ "./node_modules/fancy-canvas/canvas-element-bitmap-size.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCanvasElementBitmapSizeTo", function() { return _canvas_element_bitmap_size_mjs__WEBPACK_IMPORTED_MODULE_1__["bindTo"]; });

/* harmony import */ var _canvas_rendering_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-rendering-target.mjs */ "./node_modules/fancy-canvas/canvas-rendering-target.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderingTarget2D", function() { return _canvas_rendering_target_mjs__WEBPACK_IMPORTED_MODULE_2__["CanvasRenderingTarget2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasRenderingTarget2D", function() { return _canvas_rendering_target_mjs__WEBPACK_IMPORTED_MODULE_2__["createCanvasRenderingTarget2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryCreateCanvasRenderingTarget2D", function() { return _canvas_rendering_target_mjs__WEBPACK_IMPORTED_MODULE_2__["tryCreateCanvasRenderingTarget2D"]; });





/***/ }),

/***/ "./node_modules/fancy-canvas/size.mjs":
/*!********************************************!*\
  !*** ./node_modules/fancy-canvas/size.mjs ***!
  \********************************************/
/*! exports provided: size, equalSizes */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalSizes", function() { return equalSizes; });
function size(_a) {
  var width = _a.width,
    height = _a.height;
  if (width < 0) {
    throw new Error('Negative width is not allowed for Size');
  }
  if (height < 0) {
    throw new Error('Negative height is not allowed for Size');
  }
  return {
    width: width,
    height: height
  };
}
function equalSizes(first, second) {
  return first.width === second.width && first.height === second.height;
}

/***/ }),

/***/ "./node_modules/lightweight-charts/dist/lightweight-charts.production.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/lightweight-charts/dist/lightweight-charts.production.mjs ***!
  \********************************************************************************/
/*! exports provided: AreaSeries, BarSeries, BaselineSeries, CandlestickSeries, ColorType, CrosshairMode, HistogramSeries, LastPriceAnimationMode, LineSeries, LineStyle, LineType, MismatchDirection, PriceLineSource, PriceScaleMode, TickMarkType, TrackingModeExitMode, createChart, createChartEx, createImageWatermark, createOptionsChart, createSeriesMarkers, createTextWatermark, createUpDownMarkers, createYieldCurveChart, customSeriesDefaultOptions, defaultHorzScaleBehavior, isBusinessDay, isUTCTimestamp, version */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSeries", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarSeries", function() { return we; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaselineSeries", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickSeries", function() { return be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorType", function() { return Ai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrosshairMode", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramSeries", function() { return Ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPriceAnimationMode", function() { return Vi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSeries", function() { return Kn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineStyle", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineType", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MismatchDirection", function() { return Pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLineSource", function() { return Ii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceScaleMode", function() { return di; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickMarkType", function() { return Bi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingModeExitMode", function() { return Di; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChart", function() { return Ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChartEx", function() { return zn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageWatermark", function() { return He; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptionsChart", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSeriesMarkers", function() { return er; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextWatermark", function() { return Ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpDownMarkers", function() { return dr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createYieldCurveChart", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customSeriesDefaultOptions", function() { return fr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHorzScaleBehavior", function() { return On; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBusinessDay", function() { return zi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUTCTimestamp", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return pr; });
/* harmony import */ var fancy_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fancy-canvas */ "./node_modules/fancy-canvas/index.mjs");
var _excluded = ["time", "color"];
var _navigator;
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n48 = 0, F = function F() {}; return { s: F, n: function n() { return _n48 >= r.length ? { done: !0 } : { done: !1, value: r[_n48++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*!
 * @license
 * TradingView Lightweight Charts™ v5.0.3
 * Copyright (c) 2025 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */

var e = {
  title: "",
  visible: !0,
  lastValueVisible: !0,
  priceLineVisible: !0,
  priceLineSource: 0,
  priceLineWidth: 1,
  priceLineColor: "",
  priceLineStyle: 2,
  baseLineVisible: !0,
  baseLineWidth: 1,
  baseLineColor: "#B2B5BE",
  baseLineStyle: 0,
  priceFormat: {
    type: "price",
    precision: 2,
    minMove: .01
  }
};
var r, h;
function a(t, i) {
  var s = {
    0: [],
    1: [t.lineWidth, t.lineWidth],
    2: [2 * t.lineWidth, 2 * t.lineWidth],
    3: [6 * t.lineWidth, 6 * t.lineWidth],
    4: [t.lineWidth, 4 * t.lineWidth]
  }[i];
  t.setLineDash(s);
}
function l(t, i, s, n) {
  t.beginPath();
  var e = t.lineWidth % 2 ? .5 : 0;
  t.moveTo(s, i + e), t.lineTo(n, i + e), t.stroke();
}
function o(t, i) {
  if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
}
function _(t) {
  if (void 0 === t) throw new Error("Value is undefined");
  return t;
}
function u(t) {
  if (null === t) throw new Error("Value is null");
  return t;
}
function c(t) {
  return u(_(t));
}
!function (t) {
  t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
}(r || (r = {})), function (t) {
  t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
}(h || (h = {}));
var d = /*#__PURE__*/function () {
  function d() {
    _classCallCheck(this, d);
    this.t = [];
  }
  return _createClass(d, [{
    key: "i",
    value: function i(t, _i2, s) {
      var n = {
        h: t,
        l: _i2,
        o: !0 === s
      };
      this.t.push(n);
    }
  }, {
    key: "_",
    value: function _(t) {
      var i = this.t.findIndex(function (i) {
        return t === i.h;
      });
      i > -1 && this.t.splice(i, 1);
    }
  }, {
    key: "u",
    value: function u(t) {
      this.t = this.t.filter(function (i) {
        return i.l !== t;
      });
    }
  }, {
    key: "p",
    value: function p(t, i, s) {
      var n = _toConsumableArray(this.t);
      this.t = this.t.filter(function (t) {
        return !t.o;
      }), n.forEach(function (n) {
        return n.h(t, i, s);
      });
    }
  }, {
    key: "v",
    value: function v() {
      return this.t.length > 0;
    }
  }, {
    key: "m",
    value: function m() {
      this.t = [];
    }
  }]);
}();
function f(t) {
  for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    i[_key - 1] = arguments[_key];
  }
  for (var _i4 = 0, _i3 = i; _i4 < _i3.length; _i4++) {
    var _s2 = _i3[_i4];
    for (var _i5 in _s2) void 0 !== _s2[_i5] && Object.prototype.hasOwnProperty.call(_s2, _i5) && !["__proto__", "constructor", "prototype"].includes(_i5) && ("object" != _typeof(_s2[_i5]) || void 0 === t[_i5] || Array.isArray(_s2[_i5]) ? t[_i5] = _s2[_i5] : f(t[_i5], _s2[_i5]));
  }
  return t;
}
function p(t) {
  return "number" == typeof t && isFinite(t);
}
function v(t) {
  return "number" == typeof t && t % 1 == 0;
}
function m(t) {
  return "string" == typeof t;
}
function w(t) {
  return "boolean" == typeof t;
}
function g(t) {
  var i = t;
  if (!i || "object" != _typeof(i)) return i;
  var s, n, e;
  for (n in s = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(n) && (e = i[n], s[n] = e && "object" == _typeof(e) ? g(e) : e);
  return s;
}
function M(t) {
  return null !== t;
}
function b(t) {
  return null === t ? void 0 : t;
}
var x = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function S(t, i, s) {
  return void 0 === i && (i = x), "".concat(s = void 0 !== s ? "".concat(s, " ") : "").concat(t, "px ").concat(i);
}
var C = /*#__PURE__*/function () {
  function C(t) {
    _classCallCheck(this, C);
    this.M = {
      S: 1,
      C: 5,
      k: NaN,
      P: "",
      T: "",
      R: "",
      D: "",
      V: 0,
      I: 0,
      A: 0,
      B: 0,
      L: 0
    }, this.O = t;
  }
  return _createClass(C, [{
    key: "N",
    value: function N() {
      var t = this.M,
        i = this.W(),
        s = this.F();
      return t.k === i && t.T === s || (t.k = i, t.T = s, t.P = S(i, s), t.B = 2.5 / 12 * i, t.V = t.B, t.I = i / 12 * t.C, t.A = i / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
    }
  }, {
    key: "H",
    value: function H() {
      return this.O.N().layout.textColor;
    }
  }, {
    key: "U",
    value: function U() {
      return this.O.$();
    }
  }, {
    key: "W",
    value: function W() {
      return this.O.N().layout.fontSize;
    }
  }, {
    key: "F",
    value: function F() {
      return this.O.N().layout.fontFamily;
    }
  }]);
}();
function y(t) {
  return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function k(t) {
  return .199 * t[0] + .687 * t[1] + .114 * t[2];
}
var P = /*#__PURE__*/function () {
  function P(t, i) {
    _classCallCheck(this, P);
    this.q = new Map(), this.Y = t, i && (this.q = i);
  }
  return _createClass(P, [{
    key: "j",
    value: function j(t, i) {
      if ("transparent" === t) return t;
      var s = this.Z(t),
        n = s[3];
      return "rgba(".concat(s[0], ", ").concat(s[1], ", ").concat(s[2], ", ").concat(i * n, ")");
    }
  }, {
    key: "K",
    value: function K(t) {
      var i = this.Z(t);
      return {
        X: "rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")"),
        G: k(i) > 160 ? "black" : "white"
      };
    }
  }, {
    key: "J",
    value: function J(t) {
      return k(this.Z(t));
    }
  }, {
    key: "tt",
    value: function tt(t, i, s) {
      var _this$Z = this.Z(t),
        _this$Z2 = _slicedToArray(_this$Z, 4),
        n = _this$Z2[0],
        e = _this$Z2[1],
        r = _this$Z2[2],
        h = _this$Z2[3],
        _this$Z3 = this.Z(i),
        _this$Z4 = _slicedToArray(_this$Z3, 4),
        a = _this$Z4[0],
        l = _this$Z4[1],
        o = _this$Z4[2],
        _ = _this$Z4[3],
        u = [y(n + s * (a - n)), y(e + s * (l - e)), y(r + s * (o - r)), (c = h + s * (_ - h), c <= 0 || c > 1 ? Math.min(Math.max(c, 0), 1) : Math.round(1e4 * c) / 1e4)];
      var c;
      return "rgba(".concat(u[0], ", ").concat(u[1], ", ").concat(u[2], ", ").concat(u[3], ")");
    }
  }, {
    key: "Z",
    value: function Z(t) {
      var i = this.q.get(t);
      if (i) return i;
      var s = function (t) {
          var i = document.createElement("div");
          i.style.display = "none", document.body.appendChild(i), i.style.color = t;
          var s = window.getComputedStyle(i).color;
          return document.body.removeChild(i), s;
        }(t),
        n = s.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
      if (!n) {
        if (this.Y.length) {
          var _iterator = _createForOfIteratorHelper(this.Y),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i6 = _step.value;
              var _s3 = _i6(t);
              if (_s3) return this.q.set(t, _s3), _s3;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        throw new Error("Failed to parse color: ".concat(t));
      }
      var e = [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), n[4] ? parseFloat(n[4]) : 1];
      return this.q.set(t, e), e;
    }
  }]);
}();
var T = /*#__PURE__*/function () {
  function T() {
    _classCallCheck(this, T);
    this.it = [];
  }
  return _createClass(T, [{
    key: "st",
    value: function st(t) {
      this.it = t;
    }
  }, {
    key: "nt",
    value: function nt(t, i, s) {
      this.it.forEach(function (n) {
        n.nt(t, i, s);
      });
    }
  }]);
}();
var R = /*#__PURE__*/function () {
  function R() {
    _classCallCheck(this, R);
  }
  return _createClass(R, [{
    key: "nt",
    value: function nt(t, i, s) {
      var _this = this;
      t.useBitmapCoordinateSpace(function (t) {
        return _this.et(t, i, s);
      });
    }
  }]);
}();
var D = /*#__PURE__*/function (_R) {
  function D() {
    var _this2;
    _classCallCheck(this, D);
    _this2 = _callSuper(this, D, arguments), _this2.rt = null;
    return _this2;
  }
  _inherits(D, _R);
  return _createClass(D, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(_ref) {
      var t = _ref.context,
        i = _ref.horizontalPixelRatio,
        s = _ref.verticalPixelRatio;
      if (null === this.rt || null === this.rt.lt) return;
      var n = this.rt.lt,
        e = this.rt,
        r = Math.max(1, Math.floor(i)) % 2 / 2,
        h = function h(_h) {
          t.beginPath();
          for (var _a = n.to - 1; _a >= n.from; --_a) {
            var _n2 = e.ot[_a],
              _l = Math.round(_n2._t * i) + r,
              _o = _n2.ut * s,
              _2 = _h * s + r;
            t.moveTo(_l, _o), t.arc(_l, _o, _2, 0, 2 * Math.PI);
          }
          t.fill();
        };
      e.ct > 0 && (t.fillStyle = e.dt, h(e.ft + e.ct)), t.fillStyle = e.vt, h(e.ft);
    }
  }]);
}(R);
function V() {
  return {
    ot: [{
      _t: 0,
      ut: 0,
      wt: 0,
      gt: 0
    }],
    vt: "",
    dt: "",
    ft: 0,
    ct: 0,
    lt: null
  };
}
var I = {
  from: 0,
  to: 1
};
var A = /*#__PURE__*/function () {
  function A(t, i, s) {
    _classCallCheck(this, A);
    this.Mt = new T(), this.bt = [], this.xt = [], this.St = !0, this.O = t, this.Ct = i, this.yt = s, this.Mt.st(this.bt);
  }
  return _createClass(A, [{
    key: "kt",
    value: function kt(t) {
      this.Pt(), this.St = !0;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.St && (this.Rt(), this.St = !1), this.Mt;
    }
  }, {
    key: "Pt",
    value: function Pt() {
      var t = this.yt.Dt();
      t.length !== this.bt.length && (this.xt = t.map(V), this.bt = this.xt.map(function (t) {
        var i = new D();
        return i.ht(t), i;
      }), this.Mt.st(this.bt));
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var _this3 = this;
      var t = 2 === this.Ct.N().mode || !this.Ct.Vt(),
        i = this.yt.It(),
        s = this.Ct.At(),
        n = this.O.Bt();
      this.Pt(), i.forEach(function (i, e) {
        var _h$Ht;
        var r = _this3.xt[e],
          h = i.Et(s),
          a = i.zt();
        !t && null !== h && i.Vt() && null !== a ? (r.vt = h.Lt, r.ft = h.ft, r.ct = h.Ot, r.ot[0].gt = h.gt, r.ot[0].ut = i.Wt().Nt(h.gt, a.Ft), r.dt = (_h$Ht = h.Ht) !== null && _h$Ht !== void 0 ? _h$Ht : _this3.O.Ut(r.ot[0].ut / i.Wt().$t()), r.ot[0].wt = s, r.ot[0]._t = n.qt(s), r.lt = I) : r.lt = null;
      });
    }
  }]);
}();
var B = /*#__PURE__*/function (_R2) {
  function B(t) {
    var _this4;
    _classCallCheck(this, B);
    _this4 = _callSuper(this, B), _this4.Yt = t;
    return _this4;
  }
  _inherits(B, _R2);
  return _createClass(B, [{
    key: "et",
    value: function et(_ref2) {
      var t = _ref2.context,
        i = _ref2.bitmapSize,
        s = _ref2.horizontalPixelRatio,
        n = _ref2.verticalPixelRatio;
      if (null === this.Yt) return;
      var e = this.Yt.jt.Vt,
        r = this.Yt.Zt.Vt;
      if (!e && !r) return;
      var h = Math.round(this.Yt._t * s),
        o = Math.round(this.Yt.ut * n);
      t.lineCap = "butt", e && h >= 0 && (t.lineWidth = Math.floor(this.Yt.jt.ct * s), t.strokeStyle = this.Yt.jt.R, t.fillStyle = this.Yt.jt.R, a(t, this.Yt.jt.Kt), function (t, i, s, n) {
        t.beginPath();
        var e = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(i + e, s), t.lineTo(i + e, n), t.stroke();
      }(t, h, 0, i.height)), r && o >= 0 && (t.lineWidth = Math.floor(this.Yt.Zt.ct * n), t.strokeStyle = this.Yt.Zt.R, t.fillStyle = this.Yt.Zt.R, a(t, this.Yt.Zt.Kt), l(t, o, 0, i.width));
    }
  }]);
}(R);
var E = /*#__PURE__*/function () {
  function E(t, i) {
    _classCallCheck(this, E);
    this.St = !0, this.Xt = {
      jt: {
        ct: 1,
        Kt: 0,
        R: "",
        Vt: !1
      },
      Zt: {
        ct: 1,
        Kt: 0,
        R: "",
        Vt: !1
      },
      _t: 0,
      ut: 0
    }, this.Gt = new B(this.Xt), this.Jt = t, this.yt = i;
  }
  return _createClass(E, [{
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "Tt",
    value: function Tt(t) {
      return this.St && (this.Rt(), this.St = !1), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var t = this.Jt.Vt(),
        i = this.yt.Qt().N().crosshair,
        s = this.Xt;
      if (2 === i.mode) return s.Zt.Vt = !1, void (s.jt.Vt = !1);
      s.Zt.Vt = t && this.Jt.ti(this.yt), s.jt.Vt = t && this.Jt.ii(), s.Zt.ct = i.horzLine.width, s.Zt.Kt = i.horzLine.style, s.Zt.R = i.horzLine.color, s.jt.ct = i.vertLine.width, s.jt.Kt = i.vertLine.style, s.jt.R = i.vertLine.color, s._t = this.Jt.si(), s.ut = this.Jt.ni();
    }
  }]);
}();
function z(t, i, s, n, e, r) {
  t.fillRect(i + r, s, n - 2 * r, r), t.fillRect(i + r, s + e - r, n - 2 * r, r), t.fillRect(i, s, r, e), t.fillRect(i + n - r, s, r, e);
}
function L(t, i, s, n, e, r) {
  t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, s, n, e), t.restore();
}
function O(t, i, s, n, e, r) {
  t.beginPath(), t.roundRect ? t.roundRect(i, s, n, e, r) : (t.lineTo(i + n - r[1], s), 0 !== r[1] && t.arcTo(i + n, s, i + n, s + r[1], r[1]), t.lineTo(i + n, s + e - r[2]), 0 !== r[2] && t.arcTo(i + n, s + e, i + n - r[2], s + e, r[2]), t.lineTo(i + r[3], s + e), 0 !== r[3] && t.arcTo(i, s + e, i, s + e - r[3], r[3]), t.lineTo(i, s + r[0]), 0 !== r[0] && t.arcTo(i, s, i + r[0], s, r[0]));
}
function N(t, i, s, n, e, r) {
  var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var a = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [0, 0, 0, 0];
  var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
  if (t.save(), !h || !l || l === r) return O(t, i, s, n, e, a), t.fillStyle = r, t.fill(), void t.restore();
  var o = h / 2;
  var _;
  O(t, i + o, s + o, n - h, e - h, (_ = -o, a.map(function (t) {
    return 0 === t ? t : t + _;
  }))), "transparent" !== r && (t.fillStyle = r, t.fill()), "transparent" !== l && (t.lineWidth = h, t.strokeStyle = l, t.closePath(), t.stroke()), t.restore();
}
function W(t, i, s, n, e, r, h) {
  t.save(), t.globalCompositeOperation = "copy";
  var a = t.createLinearGradient(0, 0, 0, e);
  a.addColorStop(0, r), a.addColorStop(1, h), t.fillStyle = a, t.fillRect(i, s, n, e), t.restore();
}
var F = /*#__PURE__*/function () {
  function F(t, i) {
    _classCallCheck(this, F);
    this.ht(t, i);
  }
  return _createClass(F, [{
    key: "ht",
    value: function ht(t, i) {
      this.Yt = t, this.ei = i;
    }
  }, {
    key: "$t",
    value: function $t(t, i) {
      return this.Yt.Vt ? t.k + t.B + t.V : 0;
    }
  }, {
    key: "nt",
    value: function nt(t, i, s, n) {
      var _this5 = this;
      if (!this.Yt.Vt || 0 === this.Yt.ri.length) return;
      var e = this.Yt.R,
        r = this.ei.X,
        h = t.useBitmapCoordinateSpace(function (t) {
          var h = t.context;
          h.font = i.P;
          var a = _this5.hi(t, i, s, n),
            l = a.ai;
          return a.li ? N(h, l.oi, l._i, l.ui, l.ci, r, l.di, [l.ft, 0, 0, l.ft], r) : N(h, l.fi, l._i, l.ui, l.ci, r, l.di, [0, l.ft, l.ft, 0], r), _this5.Yt.pi && (h.fillStyle = e, h.fillRect(l.fi, l.mi, l.wi - l.fi, l.gi)), _this5.Yt.Mi && (h.fillStyle = i.D, h.fillRect(a.li ? l.bi - l.di : 0, l._i, l.di, l.xi - l._i)), a;
        });
      t.useMediaCoordinateSpace(function (_ref3) {
        var t = _ref3.context;
        var s = h.Si;
        t.font = i.P, t.textAlign = h.li ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(_this5.Yt.ri, s.Ci, (s._i + s.xi) / 2 + s.yi);
      });
    }
  }, {
    key: "hi",
    value: function hi(t, i, s, n) {
      var _this$ei$Ii;
      var e = t.context,
        r = t.bitmapSize,
        h = t.mediaSize,
        a = t.horizontalPixelRatio,
        l = t.verticalPixelRatio,
        o = this.Yt.pi || !this.Yt.ki ? i.C : 0,
        _ = this.Yt.Pi ? i.S : 0,
        u = i.B + this.ei.Ti,
        c = i.V + this.ei.Ri,
        d = i.I,
        f = i.A,
        p = this.Yt.ri,
        v = i.k,
        m = s.Di(e, p),
        w = Math.ceil(s.Vi(e, p)),
        g = v + u + c,
        M = i.S + d + f + w + o,
        b = Math.max(1, Math.floor(l));
      var x = Math.round(g * l);
      x % 2 != b % 2 && (x += 1);
      var S = _ > 0 ? Math.max(1, Math.floor(_ * a)) : 0,
        C = Math.round(M * a),
        y = Math.round(o * a),
        k = (_this$ei$Ii = this.ei.Ii) !== null && _this$ei$Ii !== void 0 ? _this$ei$Ii : this.ei.Ai,
        P = Math.round(k * l) - Math.floor(.5 * l),
        T = Math.floor(P + b / 2 - x / 2),
        R = T + x,
        D = "right" === n,
        V = D ? h.width - _ : _,
        I = D ? r.width - S : S;
      var A, B, E;
      return D ? (A = I - C, B = I - y, E = V - o - d - _) : (A = I + C, B = I + y, E = V + o + d), {
        li: D,
        ai: {
          _i: T,
          mi: P,
          xi: R,
          ui: C,
          ci: x,
          ft: 2 * a,
          di: S,
          oi: A,
          fi: I,
          wi: B,
          gi: b,
          bi: r.width
        },
        Si: {
          _i: T / l,
          xi: R / l,
          Ci: E,
          yi: m
        }
      };
    }
  }]);
}();
var H = /*#__PURE__*/function () {
  function H(t) {
    _classCallCheck(this, H);
    this.Bi = {
      Ai: 0,
      X: "#000",
      Ri: 0,
      Ti: 0
    }, this.Ei = {
      ri: "",
      Vt: !1,
      pi: !0,
      ki: !1,
      Ht: "",
      R: "#FFF",
      Mi: !1,
      Pi: !1
    }, this.zi = {
      ri: "",
      Vt: !1,
      pi: !1,
      ki: !0,
      Ht: "",
      R: "#FFF",
      Mi: !0,
      Pi: !0
    }, this.St = !0, this.Li = new (t || F)(this.Ei, this.Bi), this.Oi = new (t || F)(this.zi, this.Bi);
  }
  return _createClass(H, [{
    key: "ri",
    value: function ri() {
      return this.Ni(), this.Ei.ri;
    }
  }, {
    key: "Ai",
    value: function Ai() {
      return this.Ni(), this.Bi.Ai;
    }
  }, {
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "$t",
    value: function $t(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return Math.max(this.Li.$t(t, i), this.Oi.$t(t, i));
    }
  }, {
    key: "Wi",
    value: function Wi() {
      return this.Bi.Ii || 0;
    }
  }, {
    key: "Fi",
    value: function Fi(t) {
      this.Bi.Ii = t;
    }
  }, {
    key: "Hi",
    value: function Hi() {
      return this.Ni(), this.Ei.Vt || this.zi.Vt;
    }
  }, {
    key: "Ui",
    value: function Ui() {
      return this.Ni(), this.Ei.Vt;
    }
  }, {
    key: "Tt",
    value: function Tt(t) {
      return this.Ni(), this.Ei.pi = this.Ei.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Li.ht(this.Ei, this.Bi), this.Oi.ht(this.zi, this.Bi), this.Li;
    }
  }, {
    key: "$i",
    value: function $i() {
      return this.Ni(), this.Li.ht(this.Ei, this.Bi), this.Oi.ht(this.zi, this.Bi), this.Oi;
    }
  }, {
    key: "Ni",
    value: function Ni() {
      this.St && (this.Ei.pi = !0, this.zi.pi = !1, this.qi(this.Ei, this.zi, this.Bi));
    }
  }]);
}();
var U = /*#__PURE__*/function (_H) {
  function U(t, i, s) {
    var _this6;
    _classCallCheck(this, U);
    _this6 = _callSuper(this, U), _this6.Jt = t, _this6.Yi = i, _this6.ji = s;
    return _this6;
  }
  _inherits(U, _H);
  return _createClass(U, [{
    key: "qi",
    value: function qi(t, i, s) {
      if (t.Vt = !1, 2 === this.Jt.N().mode) return;
      var n = this.Jt.N().horzLine;
      if (!n.labelVisible) return;
      var e = this.Yi.zt();
      if (!this.Jt.Vt() || this.Yi.Zi() || null === e) return;
      var r = this.Yi.Ki().K(n.labelBackgroundColor);
      s.X = r.X, t.R = r.G;
      var h = 2 / 12 * this.Yi.k();
      s.Ti = h, s.Ri = h;
      var a = this.ji(this.Yi);
      s.Ai = a.Ai, t.ri = this.Yi.Xi(a.gt, e), t.Vt = !0;
    }
  }]);
}(H);
var $ = /[1-9]/g;
var q = /*#__PURE__*/function () {
  function q() {
    _classCallCheck(this, q);
    this.Yt = null;
  }
  return _createClass(q, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "nt",
    value: function nt(t, i) {
      var _this7 = this;
      if (null === this.Yt || !1 === this.Yt.Vt || 0 === this.Yt.ri.length) return;
      var s = t.useMediaCoordinateSpace(function (_ref4) {
        var t = _ref4.context;
        return t.font = i.P, Math.round(i.Gi.Vi(t, u(_this7.Yt).ri, $));
      });
      if (s <= 0) return;
      var n = i.Ji,
        e = s + 2 * n,
        r = e / 2,
        h = this.Yt.Qi;
      var a = this.Yt.Ai,
        l = Math.floor(a - r) + .5;
      l < 0 ? (a += Math.abs(0 - l), l = Math.floor(a - r) + .5) : l + e > h && (a -= Math.abs(h - (l + e)), l = Math.floor(a - r) + .5);
      var o = l + e,
        _ = Math.ceil(0 + i.S + i.C + i.B + i.k + i.V);
      t.useBitmapCoordinateSpace(function (_ref5) {
        var t = _ref5.context,
          s = _ref5.horizontalPixelRatio,
          n = _ref5.verticalPixelRatio;
        var e = u(_this7.Yt);
        t.fillStyle = e.X;
        var r = Math.round(l * s),
          h = Math.round(0 * n),
          a = Math.round(o * s),
          c = Math.round(_ * n),
          d = Math.round(2 * s);
        if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, c - d), t.arcTo(r, c, r + d, c, d), t.lineTo(a - d, c), t.arcTo(a, c, a, c - d, d), t.lineTo(a, h), t.fill(), e.pi) {
          var _r2 = Math.round(e.Ai * s),
            _a2 = h,
            _l2 = Math.round((_a2 + i.C) * n);
          t.fillStyle = e.R;
          var _o2 = Math.max(1, Math.floor(s)),
            _3 = Math.floor(.5 * s);
          t.fillRect(_r2 - _3, _a2, _o2, _l2 - _a2);
        }
      }), t.useMediaCoordinateSpace(function (_ref6) {
        var t = _ref6.context;
        var s = u(_this7.Yt),
          e = 0 + i.S + i.C + i.B + i.k / 2;
        t.font = i.P, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = s.R;
        var r = i.Gi.Di(t, "Apr0");
        t.translate(l + n, e + r), t.fillText(s.ri, 0, 0);
      });
    }
  }]);
}();
var Y = /*#__PURE__*/function () {
  function Y(t, i, s) {
    _classCallCheck(this, Y);
    this.St = !0, this.Gt = new q(), this.Xt = {
      Vt: !1,
      X: "#4c525e",
      R: "white",
      ri: "",
      Qi: 0,
      Ai: NaN,
      pi: !0
    }, this.Ct = t, this.ts = i, this.ji = s;
  }
  return _createClass(Y, [{
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.St && (this.Rt(), this.St = !1), this.Gt.ht(this.Xt), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      var t = this.Xt;
      if (t.Vt = !1, 2 === this.Ct.N().mode) return;
      var i = this.Ct.N().vertLine;
      if (!i.labelVisible) return;
      var s = this.ts.Bt();
      if (s.Zi()) return;
      t.Qi = s.Qi();
      var n = this.ji();
      if (null === n) return;
      t.Ai = n.Ai;
      var e = s.ss(this.Ct.At());
      t.ri = s.ns(u(e)), t.Vt = !0;
      var r = this.ts.Ki().K(i.labelBackgroundColor);
      t.X = r.X, t.R = r.G, t.pi = s.N().ticksVisible;
    }
  }]);
}();
var j = /*#__PURE__*/function () {
  function j() {
    _classCallCheck(this, j);
    this.es = null, this.rs = 0;
  }
  return _createClass(j, [{
    key: "hs",
    value: function hs() {
      return this.rs;
    }
  }, {
    key: "ls",
    value: function ls(t) {
      this.rs = t;
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return this.es;
    }
  }, {
    key: "_s",
    value: function _s(t) {
      this.es = t;
    }
  }, {
    key: "us",
    value: function us(t) {
      return [];
    }
  }, {
    key: "cs",
    value: function cs() {
      return [];
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return !0;
    }
  }]);
}();
var Z;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden";
}(Z || (Z = {}));
var K = /*#__PURE__*/function (_j) {
  function K(t, i) {
    var _this8;
    _classCallCheck(this, K);
    _this8 = _callSuper(this, K), _this8.yt = null, _this8.ds = NaN, _this8.fs = 0, _this8.ps = !0, _this8.vs = new Map(), _this8.ws = !1, _this8.gs = new WeakMap(), _this8.Ms = new WeakMap(), _this8.bs = NaN, _this8.xs = NaN, _this8.Ss = NaN, _this8.Cs = NaN, _this8.ts = t, _this8.ys = i;
    _this8.ks = function (t, i) {
      return function (s) {
        var n = i(),
          e = t();
        if (s === u(_this8.yt).Ps()) return {
          gt: e,
          Ai: n
        };
        {
          var _t2 = u(s.zt());
          return {
            gt: s.Ts(n, _t2),
            Ai: n
          };
        }
      };
    }(function () {
      return _this8.ds;
    }, function () {
      return _this8.xs;
    });
    var s = function (t, i) {
      return function () {
        var s = _this8.ts.Bt().Rs(t()),
          n = i();
        return s && Number.isFinite(n) ? {
          wt: s,
          Ai: n
        } : null;
      };
    }(function () {
      return _this8.fs;
    }, function () {
      return _this8.si();
    });
    _this8.Ds = new Y(_this8, t, s);
    return _this8;
  }
  _inherits(K, _j);
  return _createClass(K, [{
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "Vs",
    value: function Vs(t, i) {
      this.Ss = t, this.Cs = i;
    }
  }, {
    key: "Is",
    value: function Is() {
      this.Ss = NaN, this.Cs = NaN;
    }
  }, {
    key: "As",
    value: function As() {
      return this.Ss;
    }
  }, {
    key: "Bs",
    value: function Bs() {
      return this.Cs;
    }
  }, {
    key: "Es",
    value: function Es(t, i, s) {
      this.ws || (this.ws = !0), this.ps = !0, this.zs(t, i, s);
    }
  }, {
    key: "At",
    value: function At() {
      return this.fs;
    }
  }, {
    key: "si",
    value: function si() {
      return this.bs;
    }
  }, {
    key: "ni",
    value: function ni() {
      return this.xs;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return this.ps;
    }
  }, {
    key: "Ls",
    value: function Ls() {
      this.ps = !1, this.Os(), this.ds = NaN, this.bs = NaN, this.xs = NaN, this.yt = null, this.Is(), this.Ns();
    }
  }, {
    key: "Ws",
    value: function Ws(t) {
      var i = this.gs.get(t);
      i || (i = new E(this, t), this.gs.set(t, i));
      var s = this.Ms.get(t);
      return s || (s = new A(this.ts, this, t), this.Ms.set(t, s)), [i, s];
    }
  }, {
    key: "ti",
    value: function ti(t) {
      return t === this.yt && this.ys.horzLine.visible;
    }
  }, {
    key: "ii",
    value: function ii() {
      return this.ys.vertLine.visible;
    }
  }, {
    key: "Fs",
    value: function Fs(t, i) {
      this.ps && this.yt === t || this.vs.clear();
      var s = [];
      return this.yt === t && s.push(this.Hs(this.vs, i, this.ks)), s;
    }
  }, {
    key: "cs",
    value: function cs() {
      return this.ps ? [this.Ds] : [];
    }
  }, {
    key: "Us",
    value: function Us() {
      return this.yt;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this9 = this;
      this.ts.$s().forEach(function (t) {
        var _this9$gs$get, _this9$Ms$get;
        (_this9$gs$get = _this9.gs.get(t)) !== null && _this9$gs$get !== void 0 && _this9$gs$get.kt(), (_this9$Ms$get = _this9.Ms.get(t)) === null || _this9$Ms$get === void 0 ? void 0 : _this9$Ms$get.kt();
      }), this.vs.forEach(function (t) {
        return t.kt();
      }), this.Ds.kt();
    }
  }, {
    key: "qs",
    value: function qs(t) {
      return t && !t.Ps().Zi() ? t.Ps() : null;
    }
  }, {
    key: "zs",
    value: function zs(t, i, s) {
      this.Ys(t, i, s) && this.Ns();
    }
  }, {
    key: "Ys",
    value: function Ys(t, i, s) {
      var n = this.bs,
        e = this.xs,
        r = this.ds,
        h = this.fs,
        a = this.yt,
        l = this.qs(s);
      this.fs = t, this.bs = isNaN(t) ? NaN : this.ts.Bt().qt(t), this.yt = s;
      var o = null !== l ? l.zt() : null;
      return null !== l && null !== o ? (this.ds = i, this.xs = l.Nt(i, o)) : (this.ds = NaN, this.xs = NaN), n !== this.bs || e !== this.xs || h !== this.fs || r !== this.ds || a !== this.yt;
    }
  }, {
    key: "Os",
    value: function Os() {
      var t = this.ts.js().map(function (t) {
          return t.Ks().Zs();
        }).filter(M),
        i = 0 === t.length ? null : Math.max.apply(Math, _toConsumableArray(t));
      this.fs = null !== i ? i : NaN;
    }
  }, {
    key: "Hs",
    value: function Hs(t, i, s) {
      var n = t.get(i);
      return void 0 === n && (n = new U(this, i, s), t.set(i, n)), n;
    }
  }]);
}(j);
function X(t) {
  return "left" === t || "right" === t;
}
var G = /*#__PURE__*/function () {
  function G(t) {
    _classCallCheck(this, G);
    this.Xs = new Map(), this.Gs = [], this.Js = t;
  }
  return _createClass(G, [{
    key: "Qs",
    value: function Qs(t, i) {
      var s = function (t, i) {
        return void 0 === t ? i : {
          tn: Math.max(t.tn, i.tn),
          sn: t.sn || i.sn
        };
      }(this.Xs.get(t), i);
      this.Xs.set(t, s);
    }
  }, {
    key: "nn",
    value: function nn() {
      return this.Js;
    }
  }, {
    key: "en",
    value: function en(t) {
      var i = this.Xs.get(t);
      return void 0 === i ? {
        tn: this.Js
      } : {
        tn: Math.max(this.Js, i.tn),
        sn: i.sn
      };
    }
  }, {
    key: "rn",
    value: function rn() {
      this.hn(), this.Gs = [{
        an: 0
      }];
    }
  }, {
    key: "ln",
    value: function ln(t) {
      this.hn(), this.Gs = [{
        an: 1,
        Ft: t
      }];
    }
  }, {
    key: "_n",
    value: function _n(t) {
      this.un(), this.Gs.push({
        an: 5,
        Ft: t
      });
    }
  }, {
    key: "hn",
    value: function hn() {
      this.un(), this.Gs.push({
        an: 6
      });
    }
  }, {
    key: "cn",
    value: function cn() {
      this.hn(), this.Gs = [{
        an: 4
      }];
    }
  }, {
    key: "dn",
    value: function dn(t) {
      this.hn(), this.Gs.push({
        an: 2,
        Ft: t
      });
    }
  }, {
    key: "fn",
    value: function fn(t) {
      this.hn(), this.Gs.push({
        an: 3,
        Ft: t
      });
    }
  }, {
    key: "pn",
    value: function pn() {
      return this.Gs;
    }
  }, {
    key: "vn",
    value: function vn(t) {
      var _this10 = this;
      var _iterator2 = _createForOfIteratorHelper(t.Gs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i7 = _step2.value;
          this.mn(_i7);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.Js = Math.max(this.Js, t.Js), t.Xs.forEach(function (t, i) {
        _this10.Qs(i, t);
      });
    }
  }, {
    key: "mn",
    value: function mn(t) {
      switch (t.an) {
        case 0:
          this.rn();
          break;
        case 1:
          this.ln(t.Ft);
          break;
        case 2:
          this.dn(t.Ft);
          break;
        case 3:
          this.fn(t.Ft);
          break;
        case 4:
          this.cn();
          break;
        case 5:
          this._n(t.Ft);
          break;
        case 6:
          this.un();
      }
    }
  }, {
    key: "un",
    value: function un() {
      var t = this.Gs.findIndex(function (t) {
        return 5 === t.an;
      });
      -1 !== t && this.Gs.splice(t, 1);
    }
  }], [{
    key: "wn",
    value: function wn() {
      return new G(2);
    }
  }, {
    key: "gn",
    value: function gn() {
      return new G(3);
    }
  }]);
}();
var J = ".";
function Q(t, i) {
  if (!p(t)) return "n/a";
  if (!v(i)) throw new TypeError("invalid length");
  if (i < 0 || i > 16) throw new TypeError("invalid length");
  if (0 === i) return t.toString();
  return ("0000000000000000" + t.toString()).slice(-i);
}
var tt = /*#__PURE__*/function () {
  function tt(t, i) {
    _classCallCheck(this, tt);
    if (i || (i = 1), p(t) && v(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Yi = t, this.Mn = i, this.bn();
  }
  return _createClass(tt, [{
    key: "format",
    value: function format(t) {
      var i = t < 0 ? "−" : "";
      return t = Math.abs(t), i + this.xn(t);
    }
  }, {
    key: "bn",
    value: function bn() {
      if (this.Sn = 0, this.Yi > 0 && this.Mn > 0) {
        var _t3 = this.Yi;
        for (; _t3 > 1;) _t3 /= 10, this.Sn++;
      }
    }
  }, {
    key: "xn",
    value: function xn(t) {
      var i = this.Yi / this.Mn;
      var s = Math.floor(t),
        n = "";
      var e = void 0 !== this.Sn ? this.Sn : NaN;
      if (i > 1) {
        var _r3 = +(Math.round(t * i) - s * i).toFixed(this.Sn);
        _r3 >= i && (_r3 -= i, s += 1), n = J + Q(+_r3.toFixed(this.Sn) * this.Mn, e);
      } else s = Math.round(s * i) / i, e > 0 && (n = J + Q(0, e));
      return s.toFixed(0) + n;
    }
  }]);
}();
var it = /*#__PURE__*/function (_tt) {
  function it() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    _classCallCheck(this, it);
    return _callSuper(this, it, [t]);
  }
  _inherits(it, _tt);
  return _createClass(it, [{
    key: "format",
    value: function format(t) {
      return "".concat(_superPropGet(it, "format", this, 3)([t]), "%");
    }
  }]);
}(tt);
var st = /*#__PURE__*/function () {
  function st(t) {
    _classCallCheck(this, st);
    this.Cn = t;
  }
  return _createClass(st, [{
    key: "format",
    value: function format(t) {
      var i = "";
      return t < 0 && (i = "-", t = -t), t < 995 ? i + this.yn(t) : t < 999995 ? i + this.yn(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.yn(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.yn(t / 1e9) + "B");
    }
  }, {
    key: "yn",
    value: function yn(t) {
      var i;
      var s = Math.pow(10, this.Cn);
      return i = (t = Math.round(t * s) / s) >= 1e-15 && t < 1 ? t.toFixed(this.Cn).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, function (t, i) {
        return i;
      });
    }
  }]);
}();
var nt = /[2-9]/g;
var et = /*#__PURE__*/function () {
  function et() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    _classCallCheck(this, et);
    this.kn = 0, this.Pn = 1, this.Tn = 1, this.Rn = {}, this.Dn = new Map(), this.Vn = t;
  }
  return _createClass(et, [{
    key: "In",
    value: function In() {
      this.kn = 0, this.Dn.clear(), this.Pn = 1, this.Tn = 1, this.Rn = {};
    }
  }, {
    key: "Vi",
    value: function Vi(t, i, s) {
      return this.An(t, i, s).width;
    }
  }, {
    key: "Di",
    value: function Di(t, i, s) {
      var n = this.An(t, i, s);
      return ((n.actualBoundingBoxAscent || 0) - (n.actualBoundingBoxDescent || 0)) / 2;
    }
  }, {
    key: "An",
    value: function An(t, i, s) {
      var n = s || nt,
        e = String(i).replace(n, "0");
      if (this.Dn.has(e)) return _(this.Dn.get(e)).Bn;
      if (this.kn === this.Vn) {
        var _t4 = this.Rn[this.Tn];
        delete this.Rn[this.Tn], this.Dn["delete"](_t4), this.Tn++, this.kn--;
      }
      t.save(), t.textBaseline = "middle";
      var r = t.measureText(e);
      return t.restore(), 0 === r.width && i.length || (this.Dn.set(e, {
        Bn: r,
        En: this.Pn
      }), this.Rn[this.Pn] = e, this.kn++, this.Pn++), r;
    }
  }]);
}();
var rt = /*#__PURE__*/function () {
  function rt(t) {
    _classCallCheck(this, rt);
    this.zn = null, this.M = null, this.Ln = "right", this.On = t;
  }
  return _createClass(rt, [{
    key: "Nn",
    value: function Nn(t, i, s) {
      this.zn = t, this.M = i, this.Ln = s;
    }
  }, {
    key: "nt",
    value: function nt(t) {
      null !== this.M && null !== this.zn && this.zn.nt(t, this.M, this.On, this.Ln);
    }
  }]);
}();
var ht = /*#__PURE__*/function () {
  function ht(t, i, s) {
    _classCallCheck(this, ht);
    this.Wn = t, this.On = new et(50), this.Fn = i, this.O = s, this.W = -1, this.Gt = new rt(this.On);
  }
  return _createClass(ht, [{
    key: "Tt",
    value: function Tt() {
      var t = this.O.Hn(this.Fn);
      if (null === t) return null;
      var i = t.Un(this.Fn) ? t.$n() : this.Fn.Wt();
      if (null === i) return null;
      var s = t.qn(i);
      if ("overlay" === s) return null;
      var n = this.O.Yn();
      return n.k !== this.W && (this.W = n.k, this.On.In()), this.Gt.Nn(this.Wn.$i(), n, s), this.Gt;
    }
  }]);
}();
var at = /*#__PURE__*/function (_R3) {
  function at() {
    var _this11;
    _classCallCheck(this, at);
    _this11 = _callSuper(this, at, arguments), _this11.Yt = null;
    return _this11;
  }
  _inherits(at, _R3);
  return _createClass(at, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var _this$Yt;
      if (!((_this$Yt = this.Yt) !== null && _this$Yt !== void 0 && _this$Yt.Vt)) return null;
      var _this$Yt2 = this.Yt,
        s = _this$Yt2.ut,
        n = _this$Yt2.ct,
        e = _this$Yt2.Zn;
      return i >= s - n - 7 && i <= s + n + 7 ? {
        Kn: this.Yt,
        Zn: e
      } : null;
    }
  }, {
    key: "et",
    value: function et(_ref7) {
      var t = _ref7.context,
        i = _ref7.bitmapSize,
        s = _ref7.horizontalPixelRatio,
        n = _ref7.verticalPixelRatio;
      if (null === this.Yt) return;
      if (!1 === this.Yt.Vt) return;
      var e = Math.round(this.Yt.ut * n);
      e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Yt.R, t.lineWidth = Math.floor(this.Yt.ct * s), a(t, this.Yt.Kt), l(t, e, 0, i.width));
    }
  }]);
}(R);
var lt = /*#__PURE__*/function () {
  function lt(t) {
    _classCallCheck(this, lt);
    this.Xn = {
      ut: 0,
      R: "rgba(0, 0, 0, 0)",
      ct: 1,
      Kt: 0,
      Vt: !1
    }, this.Gn = new at(), this.St = !0, this.Jn = t, this.Qn = t.Qt(), this.Gn.ht(this.Xn);
  }
  return _createClass(lt, [{
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.Jn.Vt() ? (this.St && (this.te(), this.St = !1), this.Gn) : null;
    }
  }]);
}();
var ot = /*#__PURE__*/function (_lt) {
  function ot(t) {
    _classCallCheck(this, ot);
    return _callSuper(this, ot, [t]);
  }
  _inherits(ot, _lt);
  return _createClass(ot, [{
    key: "te",
    value: function te() {
      this.Xn.Vt = !1;
      var t = this.Jn.Wt(),
        i = t.ie().ie;
      if (2 !== i && 3 !== i) return;
      var s = this.Jn.N();
      if (!s.baseLineVisible || !this.Jn.Vt()) return;
      var n = this.Jn.zt();
      null !== n && (this.Xn.Vt = !0, this.Xn.ut = t.Nt(n.Ft, n.Ft), this.Xn.R = s.baseLineColor, this.Xn.ct = s.baseLineWidth, this.Xn.Kt = s.baseLineStyle);
    }
  }]);
}(lt);
var _t = /*#__PURE__*/function (_R4) {
  function _t() {
    var _this12;
    _classCallCheck(this, _t);
    _this12 = _callSuper(this, _t, arguments), _this12.Yt = null;
    return _this12;
  }
  _inherits(_t, _R4);
  return _createClass(_t, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "se",
    value: function se() {
      return this.Yt;
    }
  }, {
    key: "et",
    value: function et(_ref8) {
      var t = _ref8.context,
        i = _ref8.horizontalPixelRatio,
        s = _ref8.verticalPixelRatio;
      var n = this.Yt;
      if (null === n) return;
      var e = Math.max(1, Math.floor(i)),
        r = e % 2 / 2,
        h = Math.round(n.ne.x * i) + r,
        a = n.ne.y * s;
      t.fillStyle = n.ee, t.beginPath();
      var l = Math.max(2, 1.5 * n.re) * i;
      t.arc(h, a, l, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = n.he, t.beginPath(), t.arc(h, a, n.ft * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = n.ae, t.beginPath(), t.arc(h, a, n.ft * i + e / 2, 0, 2 * Math.PI, !1), t.stroke();
    }
  }]);
}(R);
var ut = [{
  le: 0,
  oe: .25,
  _e: 4,
  ue: 10,
  ce: .25,
  de: 0,
  fe: .4,
  pe: .8
}, {
  le: .25,
  oe: .525,
  _e: 10,
  ue: 14,
  ce: 0,
  de: 0,
  fe: .8,
  pe: 0
}, {
  le: .525,
  oe: 1,
  _e: 14,
  ue: 14,
  ce: 0,
  de: 0,
  fe: 0,
  pe: 0
}];
var ct = /*#__PURE__*/function () {
  function ct(t) {
    _classCallCheck(this, ct);
    this.Gt = new _t(), this.St = !0, this.ve = !0, this.me = performance.now(), this.we = this.me - 1, this.ge = t;
  }
  return _createClass(ct, [{
    key: "Me",
    value: function Me() {
      this.we = this.me - 1, this.kt();
    }
  }, {
    key: "be",
    value: function be() {
      if (this.kt(), 2 === this.ge.N().lastPriceAnimation) {
        var _t5 = performance.now(),
          _i8 = this.we - _t5;
        if (_i8 > 0) return void (_i8 < 650 && (this.we += 2600));
        this.me = _t5, this.we = _t5 + 2600;
      }
    }
  }, {
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "xe",
    value: function xe() {
      this.ve = !0;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return 0 !== this.ge.N().lastPriceAnimation;
    }
  }, {
    key: "Se",
    value: function Se() {
      switch (this.ge.N().lastPriceAnimation) {
        case 0:
          return !1;
        case 1:
          return !0;
        case 2:
          return performance.now() <= this.we;
      }
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.St ? (this.Rt(), this.St = !1, this.ve = !1) : this.ve && (this.Ce(), this.ve = !1), this.Gt;
    }
  }, {
    key: "Rt",
    value: function Rt() {
      this.Gt.ht(null);
      var t = this.ge.Qt().Bt(),
        i = t.ye(),
        s = this.ge.zt();
      if (null === i || null === s) return;
      var n = this.ge.ke(!0);
      if (n.Pe || !i.Te(n.Re)) return;
      var e = {
          x: t.qt(n.Re),
          y: this.ge.Wt().Nt(n.gt, s.Ft)
        },
        r = n.R,
        h = this.ge.N().lineWidth,
        a = this.De(this.Ve(), r);
      this.Gt.ht({
        ee: r,
        re: h,
        he: a.he,
        ae: a.ae,
        ft: a.ft,
        ne: e
      });
    }
  }, {
    key: "Ce",
    value: function Ce() {
      var t = this.Gt.se();
      if (null !== t) {
        var _i9 = this.De(this.Ve(), t.ee);
        t.he = _i9.he, t.ae = _i9.ae, t.ft = _i9.ft;
      }
    }
  }, {
    key: "Ve",
    value: function Ve() {
      return this.Se() ? performance.now() - this.me : 2599;
    }
  }, {
    key: "Ie",
    value: function Ie(t, i, s, n) {
      var e = s + (n - s) * i;
      return this.ge.Qt().Ki().j(t, e);
    }
  }, {
    key: "De",
    value: function De(t, i) {
      var s = t % 2600 / 2600;
      var n;
      for (var _i10 = 0, _ut = ut; _i10 < _ut.length; _i10++) {
        var _t6 = _ut[_i10];
        if (s >= _t6.le && s <= _t6.oe) {
          n = _t6;
          break;
        }
      }
      o(void 0 !== n, "Last price animation internal logic error");
      var e = (s - n.le) / (n.oe - n.le);
      return {
        he: this.Ie(i, e, n.ce, n.de),
        ae: this.Ie(i, e, n.fe, n.pe),
        ft: (r = e, h = n._e, a = n.ue, h + (a - h) * r)
      };
      var r, h, a;
    }
  }]);
}();
var dt = /*#__PURE__*/function (_lt2) {
  function dt(t) {
    _classCallCheck(this, dt);
    return _callSuper(this, dt, [t]);
  }
  _inherits(dt, _lt2);
  return _createClass(dt, [{
    key: "te",
    value: function te() {
      var t = this.Xn;
      t.Vt = !1;
      var i = this.Jn.N();
      if (!i.priceLineVisible || !this.Jn.Vt()) return;
      var s = this.Jn.ke(0 === i.priceLineSource);
      s.Pe || (t.Vt = !0, t.ut = s.Ai, t.R = this.Jn.Ae(s.R), t.ct = i.priceLineWidth, t.Kt = i.priceLineStyle);
    }
  }]);
}(lt);
var ft = /*#__PURE__*/function (_H2) {
  function ft(t) {
    var _this13;
    _classCallCheck(this, ft);
    _this13 = _callSuper(this, ft), _this13.Jt = t;
    return _this13;
  }
  _inherits(ft, _H2);
  return _createClass(ft, [{
    key: "qi",
    value: function qi(t, i, s) {
      t.Vt = !1, i.Vt = !1;
      var n = this.Jt;
      if (!n.Vt()) return;
      var e = n.N(),
        r = e.lastValueVisible,
        h = "" !== n.Be(),
        a = 0 === e.seriesLastValueMode,
        l = n.ke(!1);
      if (l.Pe) return;
      r && (t.ri = this.Ee(l, r, a), t.Vt = 0 !== t.ri.length), (h || a) && (i.ri = this.ze(l, r, h, a), i.Vt = i.ri.length > 0);
      var o = n.Ae(l.R),
        _ = this.Jt.Qt().Ki().K(o);
      s.X = _.X, s.Ai = l.Ai, i.Ht = n.Qt().Ut(l.Ai / n.Wt().$t()), t.Ht = o, t.R = _.G, i.R = _.G;
    }
  }, {
    key: "ze",
    value: function ze(t, i, s, n) {
      var e = "";
      var r = this.Jt.Be();
      return s && 0 !== r.length && (e += "".concat(r, " ")), i && n && (e += this.Jt.Wt().Le() ? t.Oe : t.Ne), e.trim();
    }
  }, {
    key: "Ee",
    value: function Ee(t, i, s) {
      return i ? s ? this.Jt.Wt().Le() ? t.Ne : t.Oe : t.ri : "";
    }
  }]);
}(H);
function pt(t, i, s, n) {
  var e = Number.isFinite(i),
    r = Number.isFinite(s);
  return e && r ? t(i, s) : e || r ? e ? i : s : n;
}
var vt = /*#__PURE__*/function () {
  function vt(t, i) {
    _classCallCheck(this, vt);
    this.We = t, this.Fe = i;
  }
  return _createClass(vt, [{
    key: "He",
    value: function He(t) {
      return null !== t && this.We === t.We && this.Fe === t.Fe;
    }
  }, {
    key: "Ue",
    value: function Ue() {
      return new vt(this.We, this.Fe);
    }
  }, {
    key: "$e",
    value: function $e() {
      return this.We;
    }
  }, {
    key: "qe",
    value: function qe() {
      return this.Fe;
    }
  }, {
    key: "Ye",
    value: function Ye() {
      return this.Fe - this.We;
    }
  }, {
    key: "Zi",
    value: function Zi() {
      return this.Fe === this.We || Number.isNaN(this.Fe) || Number.isNaN(this.We);
    }
  }, {
    key: "vn",
    value: function vn(t) {
      return null === t ? this : new vt(pt(Math.min, this.$e(), t.$e(), -1 / 0), pt(Math.max, this.qe(), t.qe(), 1 / 0));
    }
  }, {
    key: "je",
    value: function je(t) {
      if (!p(t)) return;
      if (0 === this.Fe - this.We) return;
      var i = .5 * (this.Fe + this.We);
      var s = this.Fe - i,
        n = this.We - i;
      s *= t, n *= t, this.Fe = i + s, this.We = i + n;
    }
  }, {
    key: "Ze",
    value: function Ze(t) {
      p(t) && (this.Fe += t, this.We += t);
    }
  }, {
    key: "Ke",
    value: function Ke() {
      return {
        minValue: this.We,
        maxValue: this.Fe
      };
    }
  }], [{
    key: "Xe",
    value: function Xe(t) {
      return null === t ? null : new vt(t.minValue, t.maxValue);
    }
  }]);
}();
var mt = /*#__PURE__*/function () {
  function mt(t, i) {
    _classCallCheck(this, mt);
    this.Ge = t, this.Je = i || null;
  }
  return _createClass(mt, [{
    key: "Qe",
    value: function Qe() {
      return this.Ge;
    }
  }, {
    key: "tr",
    value: function tr() {
      return this.Je;
    }
  }, {
    key: "Ke",
    value: function Ke() {
      return {
        priceRange: null === this.Ge ? null : this.Ge.Ke(),
        margins: this.Je || void 0
      };
    }
  }], [{
    key: "Xe",
    value: function Xe(t) {
      return null === t ? null : new mt(vt.Xe(t.priceRange), t.margins);
    }
  }]);
}();
var wt = /*#__PURE__*/function (_lt3) {
  function wt(t, i) {
    var _this14;
    _classCallCheck(this, wt);
    _this14 = _callSuper(this, wt, [t]), _this14.ir = i;
    return _this14;
  }
  _inherits(wt, _lt3);
  return _createClass(wt, [{
    key: "te",
    value: function te() {
      var t = this.Xn;
      t.Vt = !1;
      var i = this.ir.N();
      if (!this.Jn.Vt() || !i.lineVisible) return;
      var s = this.ir.sr();
      null !== s && (t.Vt = !0, t.ut = s, t.R = i.color, t.ct = i.lineWidth, t.Kt = i.lineStyle, t.Zn = this.ir.N().id);
    }
  }]);
}(lt);
var gt = /*#__PURE__*/function (_H3) {
  function gt(t, i) {
    var _this15;
    _classCallCheck(this, gt);
    _this15 = _callSuper(this, gt), _this15.ge = t, _this15.ir = i;
    return _this15;
  }
  _inherits(gt, _H3);
  return _createClass(gt, [{
    key: "qi",
    value: function qi(t, i, s) {
      t.Vt = !1, i.Vt = !1;
      var n = this.ir.N(),
        e = n.axisLabelVisible,
        r = "" !== n.title,
        h = this.ge;
      if (!e || !h.Vt()) return;
      var a = this.ir.sr();
      if (null === a) return;
      r && (i.ri = n.title, i.Vt = !0), i.Ht = h.Qt().Ut(a / h.Wt().$t()), t.ri = this.nr(n.price), t.Vt = !0;
      var l = this.ge.Qt().Ki().K(n.axisLabelColor || n.color);
      s.X = l.X;
      var o = n.axisLabelTextColor || l.G;
      t.R = o, i.R = o, s.Ai = a;
    }
  }, {
    key: "nr",
    value: function nr(t) {
      var i = this.ge.zt();
      return null === i ? "" : this.ge.Wt().Xi(t, i.Ft);
    }
  }]);
}(H);
var Mt = /*#__PURE__*/function () {
  function Mt(t, i) {
    _classCallCheck(this, Mt);
    this.ge = t, this.ys = i, this.er = new wt(t, this), this.Wn = new gt(t, this), this.rr = new ht(this.Wn, t, t.Qt());
  }
  return _createClass(Mt, [{
    key: "hr",
    value: function hr(t) {
      f(this.ys, t), this.kt(), this.ge.Qt().ar();
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "lr",
    value: function lr() {
      return this.er;
    }
  }, {
    key: "_r",
    value: function _r() {
      return this.rr;
    }
  }, {
    key: "ur",
    value: function ur() {
      return this.Wn;
    }
  }, {
    key: "kt",
    value: function kt() {
      this.er.kt(), this.Wn.kt();
    }
  }, {
    key: "sr",
    value: function sr() {
      var t = this.ge,
        i = t.Wt();
      if (t.Qt().Bt().Zi() || i.Zi()) return null;
      var s = t.zt();
      return null === s ? null : i.Nt(this.ys.price, s.Ft);
    }
  }]);
}();
var bt = /*#__PURE__*/function (_j2) {
  function bt(t) {
    var _this16;
    _classCallCheck(this, bt);
    _this16 = _callSuper(this, bt), _this16.ts = t;
    return _this16;
  }
  _inherits(bt, _j2);
  return _createClass(bt, [{
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }]);
}(j);
var xt = {
  Bar: function Bar(t, i, s, n) {
    var _h$R;
    var e = i.upColor,
      r = i.downColor,
      h = u(t(s, n)),
      a = c(h.Ft[0]) <= c(h.Ft[3]);
    return {
      cr: (_h$R = h.R) !== null && _h$R !== void 0 ? _h$R : a ? e : r
    };
  },
  Candlestick: function Candlestick(t, i, s, n) {
    var _$R, _$Ht, _$vr;
    var e = i.upColor,
      r = i.downColor,
      h = i.borderUpColor,
      a = i.borderDownColor,
      l = i.wickUpColor,
      o = i.wickDownColor,
      _ = u(t(s, n)),
      d = c(_.Ft[0]) <= c(_.Ft[3]);
    return {
      cr: (_$R = _.R) !== null && _$R !== void 0 ? _$R : d ? e : r,
      dr: (_$Ht = _.Ht) !== null && _$Ht !== void 0 ? _$Ht : d ? h : a,
      pr: (_$vr = _.vr) !== null && _$vr !== void 0 ? _$vr : d ? l : o
    };
  },
  Custom: function Custom(t, i, s, n) {
    var _u$R;
    return {
      cr: (_u$R = u(t(s, n)).R) !== null && _u$R !== void 0 ? _u$R : i.color
    };
  },
  Area: function Area(t, i, s, n) {
    var _e$vt, _e$vt2, _e$mr, _e$wr;
    var e = u(t(s, n));
    return {
      cr: (_e$vt = e.vt) !== null && _e$vt !== void 0 ? _e$vt : i.lineColor,
      vt: (_e$vt2 = e.vt) !== null && _e$vt2 !== void 0 ? _e$vt2 : i.lineColor,
      mr: (_e$mr = e.mr) !== null && _e$mr !== void 0 ? _e$mr : i.topColor,
      wr: (_e$wr = e.wr) !== null && _e$wr !== void 0 ? _e$wr : i.bottomColor
    };
  },
  Baseline: function Baseline(t, i, s, n) {
    var _e$gr, _e$Mr, _e$br, _e$Sr, _e$Cr, _e$yr;
    var e = u(t(s, n));
    return {
      cr: e.Ft[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
      gr: (_e$gr = e.gr) !== null && _e$gr !== void 0 ? _e$gr : i.topLineColor,
      Mr: (_e$Mr = e.Mr) !== null && _e$Mr !== void 0 ? _e$Mr : i.bottomLineColor,
      br: (_e$br = e.br) !== null && _e$br !== void 0 ? _e$br : i.topFillColor1,
      Sr: (_e$Sr = e.Sr) !== null && _e$Sr !== void 0 ? _e$Sr : i.topFillColor2,
      Cr: (_e$Cr = e.Cr) !== null && _e$Cr !== void 0 ? _e$Cr : i.bottomFillColor1,
      yr: (_e$yr = e.yr) !== null && _e$yr !== void 0 ? _e$yr : i.bottomFillColor2
    };
  },
  Line: function Line(t, i, s, n) {
    var _e$R, _e$R2;
    var e = u(t(s, n));
    return {
      cr: (_e$R = e.R) !== null && _e$R !== void 0 ? _e$R : i.color,
      vt: (_e$R2 = e.R) !== null && _e$R2 !== void 0 ? _e$R2 : i.color
    };
  },
  Histogram: function Histogram(t, i, s, n) {
    var _u$R2;
    return {
      cr: (_u$R2 = u(t(s, n)).R) !== null && _u$R2 !== void 0 ? _u$R2 : i.color
    };
  }
};
var St = /*#__PURE__*/function () {
  function St(t) {
    var _this17 = this;
    _classCallCheck(this, St);
    this.kr = function (t, i) {
      return void 0 !== i ? i.Ft : _this17.ge.Ks().Pr(t);
    }, this.ge = t, this.Tr = xt[t.Rr()];
  }
  return _createClass(St, [{
    key: "Dr",
    value: function Dr(t, i) {
      return this.Tr(this.kr, this.ge.N(), t, i);
    }
  }]);
}();
function Ct(t, i, s, n) {
  var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : i.length;
  var h = r - e;
  for (; 0 < h;) {
    var _r4 = h >> 1,
      _a3 = e + _r4;
    n(i[_a3], s) === t ? (e = _a3 + 1, h -= _r4 + 1) : h = _r4;
  }
  return e;
}
var yt = Ct.bind(null, !0),
  kt = Ct.bind(null, !1);
var Pt;
!function (t) {
  t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
}(Pt || (Pt = {}));
var Tt = 30;
var Rt = /*#__PURE__*/function () {
  function Rt() {
    _classCallCheck(this, Rt);
    this.Vr = [], this.Ir = new Map(), this.Ar = new Map(), this.Br = [];
  }
  return _createClass(Rt, [{
    key: "Er",
    value: function Er() {
      return this.zr() > 0 ? this.Vr[this.Vr.length - 1] : null;
    }
  }, {
    key: "Lr",
    value: function Lr() {
      return this.zr() > 0 ? this.Or(0) : null;
    }
  }, {
    key: "Zs",
    value: function Zs() {
      return this.zr() > 0 ? this.Or(this.Vr.length - 1) : null;
    }
  }, {
    key: "zr",
    value: function zr() {
      return this.Vr.length;
    }
  }, {
    key: "Zi",
    value: function Zi() {
      return 0 === this.zr();
    }
  }, {
    key: "Te",
    value: function Te(t) {
      return null !== this.Nr(t, 0);
    }
  }, {
    key: "Pr",
    value: function Pr(t) {
      return this.Wr(t);
    }
  }, {
    key: "Wr",
    value: function Wr(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var s = this.Nr(t, i);
      return null === s ? null : _objectSpread(_objectSpread({}, this.Fr(s)), {}, {
        Re: this.Or(s)
      });
    }
  }, {
    key: "Hr",
    value: function Hr() {
      return this.Vr;
    }
  }, {
    key: "Ur",
    value: function Ur(t, i, s) {
      if (this.Zi()) return null;
      var n = null;
      var _iterator3 = _createForOfIteratorHelper(s),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _e2 = _step3.value;
          n = Dt(n, this.$r(t, i, _e2));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return n;
    }
  }, {
    key: "ht",
    value: function ht(t) {
      this.Ar.clear(), this.Ir.clear(), this.Vr = t, this.Br = t.map(function (t) {
        return t.Re;
      });
    }
  }, {
    key: "qr",
    value: function qr() {
      return this.Br;
    }
  }, {
    key: "Or",
    value: function Or(t) {
      return this.Vr[t].Re;
    }
  }, {
    key: "Fr",
    value: function Fr(t) {
      return this.Vr[t];
    }
  }, {
    key: "Nr",
    value: function Nr(t, i) {
      var s = this.Yr(t);
      if (null === s && 0 !== i) switch (i) {
        case -1:
          return this.jr(t);
        case 1:
          return this.Zr(t);
        default:
          throw new TypeError("Unknown search mode");
      }
      return s;
    }
  }, {
    key: "jr",
    value: function jr(t) {
      var i = this.Kr(t);
      return i > 0 && (i -= 1), i !== this.Vr.length && this.Or(i) < t ? i : null;
    }
  }, {
    key: "Zr",
    value: function Zr(t) {
      var i = this.Xr(t);
      return i !== this.Vr.length && t < this.Or(i) ? i : null;
    }
  }, {
    key: "Yr",
    value: function Yr(t) {
      var i = this.Kr(t);
      return i === this.Vr.length || t < this.Vr[i].Re ? null : i;
    }
  }, {
    key: "Kr",
    value: function Kr(t) {
      return yt(this.Vr, t, function (t, i) {
        return t.Re < i;
      });
    }
  }, {
    key: "Xr",
    value: function Xr(t) {
      return kt(this.Vr, t, function (t, i) {
        return t.Re > i;
      });
    }
  }, {
    key: "Gr",
    value: function Gr(t, i, s) {
      var n = null;
      for (var _e3 = t; _e3 < i; _e3++) {
        var _t7 = this.Vr[_e3].Ft[s];
        Number.isNaN(_t7) || (null === n ? n = {
          Jr: _t7,
          Qr: _t7
        } : (_t7 < n.Jr && (n.Jr = _t7), _t7 > n.Qr && (n.Qr = _t7)));
      }
      return n;
    }
  }, {
    key: "$r",
    value: function $r(t, i, s) {
      if (this.Zi()) return null;
      var n = null;
      var e = u(this.Lr()),
        r = u(this.Zs()),
        h = Math.max(t, e),
        a = Math.min(i, r),
        l = Math.ceil(h / Tt) * Tt,
        o = Math.max(l, Math.floor(a / Tt) * Tt);
      {
        var _t8 = this.Kr(h),
          _e4 = this.Xr(Math.min(a, l, i));
        n = Dt(n, this.Gr(_t8, _e4, s));
      }
      var _ = this.Ir.get(s);
      void 0 === _ && (_ = new Map(), this.Ir.set(s, _));
      for (var _t9 = Math.max(l + 1, h); _t9 < o; _t9 += Tt) {
        var _i11 = Math.floor(_t9 / Tt);
        var _e5 = _.get(_i11);
        if (void 0 === _e5) {
          var _t10 = this.Kr(_i11 * Tt),
            _n3 = this.Xr((_i11 + 1) * Tt - 1);
          _e5 = this.Gr(_t10, _n3, s), _.set(_i11, _e5);
        }
        n = Dt(n, _e5);
      }
      {
        var _t11 = this.Kr(o),
          _i12 = this.Xr(a);
        n = Dt(n, this.Gr(_t11, _i12, s));
      }
      return n;
    }
  }]);
}();
function Dt(t, i) {
  if (null === t) return i;
  if (null === i) return t;
  return {
    Jr: Math.min(t.Jr, i.Jr),
    Qr: Math.max(t.Qr, i.Qr)
  };
}
var Vt = /*#__PURE__*/function () {
  function Vt(t) {
    _classCallCheck(this, Vt);
    this.th = t;
  }
  return _createClass(Vt, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.th.draw(t);
    }
  }, {
    key: "ih",
    value: function ih(t, i, s) {
      var _this$th$drawBackgrou, _this$th;
      (_this$th$drawBackgrou = (_this$th = this.th).drawBackground) === null || _this$th$drawBackgrou === void 0 || _this$th$drawBackgrou.call(_this$th, t);
    }
  }]);
}();
var It = /*#__PURE__*/function () {
  function It(t) {
    _classCallCheck(this, It);
    this.Dn = null, this.sh = t;
  }
  return _createClass(It, [{
    key: "Tt",
    value: function Tt() {
      var _this$Dn;
      var t = this.sh.renderer();
      if (null === t) return null;
      if (((_this$Dn = this.Dn) === null || _this$Dn === void 0 ? void 0 : _this$Dn.nh) === t) return this.Dn.eh;
      var i = new Vt(t);
      return this.Dn = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "rh",
    value: function rh() {
      var _this$sh$zOrder, _this$sh$zOrder2, _this$sh;
      return (_this$sh$zOrder = (_this$sh$zOrder2 = (_this$sh = this.sh).zOrder) === null || _this$sh$zOrder2 === void 0 ? void 0 : _this$sh$zOrder2.call(_this$sh)) !== null && _this$sh$zOrder !== void 0 ? _this$sh$zOrder : "normal";
    }
  }]);
}();
var At = /*#__PURE__*/function () {
  function At(t) {
    _classCallCheck(this, At);
    this.hh = null, this.ah = t;
  }
  return _createClass(At, [{
    key: "oh",
    value: function oh() {
      return this.ah;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this$ah$updateAllVie, _this$ah;
      (_this$ah$updateAllVie = (_this$ah = this.ah).updateAllViews) === null || _this$ah$updateAllVie === void 0 || _this$ah$updateAllVie.call(_this$ah);
    }
  }, {
    key: "Ws",
    value: function Ws() {
      var _this$ah$paneViews, _this$ah$paneViews2, _this$ah2, _this$hh;
      var t = (_this$ah$paneViews = (_this$ah$paneViews2 = (_this$ah2 = this.ah).paneViews) === null || _this$ah$paneViews2 === void 0 ? void 0 : _this$ah$paneViews2.call(_this$ah2)) !== null && _this$ah$paneViews !== void 0 ? _this$ah$paneViews : [];
      if (((_this$hh = this.hh) === null || _this$hh === void 0 ? void 0 : _this$hh.nh) === t) return this.hh.eh;
      var i = t.map(function (t) {
        return new It(t);
      });
      return this.hh = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var _this$ah$hitTest, _this$ah$hitTest2, _this$ah3;
      return (_this$ah$hitTest = (_this$ah$hitTest2 = (_this$ah3 = this.ah).hitTest) === null || _this$ah$hitTest2 === void 0 ? void 0 : _this$ah$hitTest2.call(_this$ah3, t, i)) !== null && _this$ah$hitTest !== void 0 ? _this$ah$hitTest : null;
    }
  }]);
}();
var Bt = /*#__PURE__*/function (_At) {
  function Bt() {
    _classCallCheck(this, Bt);
    return _callSuper(this, Bt, arguments);
  }
  _inherits(Bt, _At);
  return _createClass(Bt, [{
    key: "us",
    value: function us() {
      return [];
    }
  }]);
}(At);
var Et = /*#__PURE__*/function () {
  function Et(t) {
    _classCallCheck(this, Et);
    this.th = t;
  }
  return _createClass(Et, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.th.draw(t);
    }
  }, {
    key: "ih",
    value: function ih(t, i, s) {
      var _this$th$drawBackgrou2, _this$th2;
      (_this$th$drawBackgrou2 = (_this$th2 = this.th).drawBackground) === null || _this$th$drawBackgrou2 === void 0 || _this$th$drawBackgrou2.call(_this$th2, t);
    }
  }]);
}();
var zt = /*#__PURE__*/function () {
  function zt(t) {
    _classCallCheck(this, zt);
    this.Dn = null, this.sh = t;
  }
  return _createClass(zt, [{
    key: "Tt",
    value: function Tt() {
      var _this$Dn2;
      var t = this.sh.renderer();
      if (null === t) return null;
      if (((_this$Dn2 = this.Dn) === null || _this$Dn2 === void 0 ? void 0 : _this$Dn2.nh) === t) return this.Dn.eh;
      var i = new Et(t);
      return this.Dn = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "rh",
    value: function rh() {
      var _this$sh$zOrder3, _this$sh$zOrder4, _this$sh2;
      return (_this$sh$zOrder3 = (_this$sh$zOrder4 = (_this$sh2 = this.sh).zOrder) === null || _this$sh$zOrder4 === void 0 ? void 0 : _this$sh$zOrder4.call(_this$sh2)) !== null && _this$sh$zOrder3 !== void 0 ? _this$sh$zOrder3 : "normal";
    }
  }]);
}();
function Lt(t) {
  var _t$fixedCoordinate, _t$visible, _t$visible2, _t$tickVisible, _t$tickVisible2;
  return {
    ri: t.text(),
    Ai: t.coordinate(),
    Ii: (_t$fixedCoordinate = t.fixedCoordinate) === null || _t$fixedCoordinate === void 0 ? void 0 : _t$fixedCoordinate.call(t),
    R: t.textColor(),
    X: t.backColor(),
    Vt: (_t$visible = (_t$visible2 = t.visible) === null || _t$visible2 === void 0 ? void 0 : _t$visible2.call(t)) !== null && _t$visible !== void 0 ? _t$visible : !0,
    pi: (_t$tickVisible = (_t$tickVisible2 = t.tickVisible) === null || _t$tickVisible2 === void 0 ? void 0 : _t$tickVisible2.call(t)) !== null && _t$tickVisible !== void 0 ? _t$tickVisible : !0
  };
}
var Ot = /*#__PURE__*/function () {
  function Ot(t, i) {
    _classCallCheck(this, Ot);
    this.Gt = new q(), this._h = t, this.uh = i;
  }
  return _createClass(Ot, [{
    key: "Tt",
    value: function Tt() {
      return this.Gt.ht(_objectSpread({
        Qi: this.uh.Qi()
      }, Lt(this._h))), this.Gt;
    }
  }]);
}();
var Nt = /*#__PURE__*/function (_H4) {
  function Nt(t, i) {
    var _this18;
    _classCallCheck(this, Nt);
    _this18 = _callSuper(this, Nt), _this18._h = t, _this18.Yi = i;
    return _this18;
  }
  _inherits(Nt, _H4);
  return _createClass(Nt, [{
    key: "qi",
    value: function qi(t, i, s) {
      var n = Lt(this._h);
      s.X = n.X, t.R = n.R;
      var e = 2 / 12 * this.Yi.k();
      s.Ti = e, s.Ri = e, s.Ai = n.Ai, s.Ii = n.Ii, t.ri = n.ri, t.Vt = n.Vt, t.pi = n.pi;
    }
  }]);
}(H);
var Wt = /*#__PURE__*/function (_At2) {
  function Wt(t, i) {
    var _this19;
    _classCallCheck(this, Wt);
    _this19 = _callSuper(this, Wt, [t]), _this19.dh = null, _this19.fh = null, _this19.ph = null, _this19.mh = null, _this19.ge = i;
    return _this19;
  }
  _inherits(Wt, _At2);
  return _createClass(Wt, [{
    key: "cs",
    value: function cs() {
      var _this$ah$timeAxisView, _this$ah$timeAxisView2, _this$ah4, _this$dh;
      var t = (_this$ah$timeAxisView = (_this$ah$timeAxisView2 = (_this$ah4 = this.ah).timeAxisViews) === null || _this$ah$timeAxisView2 === void 0 ? void 0 : _this$ah$timeAxisView2.call(_this$ah4)) !== null && _this$ah$timeAxisView !== void 0 ? _this$ah$timeAxisView : [];
      if (((_this$dh = this.dh) === null || _this$dh === void 0 ? void 0 : _this$dh.nh) === t) return this.dh.eh;
      var i = this.ge.Qt().Bt(),
        s = t.map(function (t) {
          return new Ot(t, i);
        });
      return this.dh = {
        nh: t,
        eh: s
      }, s;
    }
  }, {
    key: "Fs",
    value: function Fs() {
      var _this$ah$priceAxisVie, _this$ah$priceAxisVie2, _this$ah5, _this$fh;
      var t = (_this$ah$priceAxisVie = (_this$ah$priceAxisVie2 = (_this$ah5 = this.ah).priceAxisViews) === null || _this$ah$priceAxisVie2 === void 0 ? void 0 : _this$ah$priceAxisVie2.call(_this$ah5)) !== null && _this$ah$priceAxisVie !== void 0 ? _this$ah$priceAxisVie : [];
      if (((_this$fh = this.fh) === null || _this$fh === void 0 ? void 0 : _this$fh.nh) === t) return this.fh.eh;
      var i = this.ge.Wt(),
        s = t.map(function (t) {
          return new Nt(t, i);
        });
      return this.fh = {
        nh: t,
        eh: s
      }, s;
    }
  }, {
    key: "wh",
    value: function wh() {
      var _this$ah$priceAxisPan, _this$ah$priceAxisPan2, _this$ah6, _this$ph;
      var t = (_this$ah$priceAxisPan = (_this$ah$priceAxisPan2 = (_this$ah6 = this.ah).priceAxisPaneViews) === null || _this$ah$priceAxisPan2 === void 0 ? void 0 : _this$ah$priceAxisPan2.call(_this$ah6)) !== null && _this$ah$priceAxisPan !== void 0 ? _this$ah$priceAxisPan : [];
      if (((_this$ph = this.ph) === null || _this$ph === void 0 ? void 0 : _this$ph.nh) === t) return this.ph.eh;
      var i = t.map(function (t) {
        return new zt(t);
      });
      return this.ph = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "gh",
    value: function gh() {
      var _this$ah$timeAxisPane, _this$ah$timeAxisPane2, _this$ah7, _this$mh;
      var t = (_this$ah$timeAxisPane = (_this$ah$timeAxisPane2 = (_this$ah7 = this.ah).timeAxisPaneViews) === null || _this$ah$timeAxisPane2 === void 0 ? void 0 : _this$ah$timeAxisPane2.call(_this$ah7)) !== null && _this$ah$timeAxisPane !== void 0 ? _this$ah$timeAxisPane : [];
      if (((_this$mh = this.mh) === null || _this$mh === void 0 ? void 0 : _this$mh.nh) === t) return this.mh.eh;
      var i = t.map(function (t) {
        return new zt(t);
      });
      return this.mh = {
        nh: t,
        eh: i
      }, i;
    }
  }, {
    key: "Mh",
    value: function Mh(t, i) {
      var _this$ah$autoscaleInf, _this$ah$autoscaleInf2, _this$ah8;
      return (_this$ah$autoscaleInf = (_this$ah$autoscaleInf2 = (_this$ah8 = this.ah).autoscaleInfo) === null || _this$ah$autoscaleInf2 === void 0 ? void 0 : _this$ah$autoscaleInf2.call(_this$ah8, t, i)) !== null && _this$ah$autoscaleInf !== void 0 ? _this$ah$autoscaleInf : null;
    }
  }]);
}(At);
function Ft(t, i, s, n) {
  t.forEach(function (t) {
    i(t).forEach(function (t) {
      t.rh() === s && n.push(t);
    });
  });
}
function Ht(t) {
  return t.Ws();
}
function Ut(t) {
  return t.wh();
}
function $t(t) {
  return t.gh();
}
var qt = ["Area", "Line", "Baseline"];
var Yt = /*#__PURE__*/function (_bt) {
  function Yt(t, i, s, n, e) {
    var _this20;
    _classCallCheck(this, Yt);
    _this20 = _callSuper(this, Yt, [t]), _this20.Yt = new Rt(), _this20.er = new dt(_assertThisInitialized(_this20)), _this20.bh = [], _this20.xh = new ot(_assertThisInitialized(_this20)), _this20.Sh = null, _this20.Ch = null, _this20.yh = null, _this20.kh = [], _this20.ys = s, _this20.Ph = i;
    var r = new ft(_this20);
    _this20.vs = [r], _this20.rr = new ht(r, _this20, t), qt.includes(_this20.Ph) && (_this20.Sh = new ct(_this20)), _this20.Th(), _this20.sh = n(_this20, _this20.Qt(), e);
    return _this20;
  }
  _inherits(Yt, _bt);
  return _createClass(Yt, [{
    key: "m",
    value: function m() {
      null !== this.yh && clearTimeout(this.yh);
    }
  }, {
    key: "Ae",
    value: function Ae(t) {
      return this.ys.priceLineColor || t;
    }
  }, {
    key: "ke",
    value: function ke(t) {
      var i = {
          Pe: !0
        },
        s = this.Wt();
      if (this.Qt().Bt().Zi() || s.Zi() || this.Yt.Zi()) return i;
      var n = this.Qt().Bt().ye(),
        e = this.zt();
      if (null === n || null === e) return i;
      var r, h;
      if (t) {
        var _t12 = this.Yt.Er();
        if (null === _t12) return i;
        r = _t12, h = _t12.Re;
      } else {
        var _t13 = this.Yt.Wr(n.bi(), -1);
        if (null === _t13) return i;
        if (r = this.Yt.Pr(_t13.Re), null === r) return i;
        h = _t13.Re;
      }
      var a = r.Ft[3],
        l = this.Rh().Dr(h, {
          Ft: r
        }),
        o = s.Nt(a, e.Ft);
      return {
        Pe: !1,
        gt: a,
        ri: s.Xi(a, e.Ft),
        Oe: s.Dh(a),
        Ne: s.Vh(a, e.Ft),
        R: l.cr,
        Ai: o,
        Re: h
      };
    }
  }, {
    key: "Rh",
    value: function Rh() {
      return null !== this.Ch || (this.Ch = new St(this)), this.Ch;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      var i = t.priceScaleId;
      void 0 !== i && i !== this.ys.priceScaleId && this.Qt().Ih(this, i), f(this.ys, t), void 0 !== t.priceFormat && (this.Th(), this.Qt().Ah()), this.Qt().Bh(this), this.Qt().Eh(), this.sh.kt("options");
    }
  }, {
    key: "ht",
    value: function ht(t, i) {
      this.Yt.ht(t), this.sh.kt("data"), null !== this.Sh && (i && i.zh ? this.Sh.be() : 0 === t.length && this.Sh.Me());
      var s = this.Qt().Hn(this);
      this.Qt().Lh(s), this.Qt().Bh(this), this.Qt().Eh(), this.Qt().ar();
    }
  }, {
    key: "Oh",
    value: function Oh(t) {
      var i = new Mt(this, t);
      return this.bh.push(i), this.Qt().Bh(this), i;
    }
  }, {
    key: "Nh",
    value: function Nh(t) {
      var i = this.bh.indexOf(t);
      -1 !== i && this.bh.splice(i, 1), this.Qt().Bh(this);
    }
  }, {
    key: "Wh",
    value: function Wh() {
      return this.bh;
    }
  }, {
    key: "Rr",
    value: function Rr() {
      return this.Ph;
    }
  }, {
    key: "zt",
    value: function zt() {
      var t = this.Fh();
      return null === t ? null : {
        Ft: t.Ft[3],
        Hh: t.wt
      };
    }
  }, {
    key: "Fh",
    value: function Fh() {
      var t = this.Qt().Bt().ye();
      if (null === t) return null;
      var i = t.Uh();
      return this.Yt.Wr(i, 1);
    }
  }, {
    key: "Ks",
    value: function Ks() {
      return this.Yt;
    }
  }, {
    key: "$h",
    value: function $h(t) {
      var i = this.Yt.Pr(t);
      return null === i ? null : "Bar" === this.Ph || "Candlestick" === this.Ph || "Custom" === this.Ph ? {
        qh: i.Ft[0],
        Yh: i.Ft[1],
        jh: i.Ft[2],
        Zh: i.Ft[3]
      } : i.Ft[3];
    }
  }, {
    key: "Kh",
    value: function Kh(t) {
      var _this21 = this;
      var i = [];
      Ft(this.kh, Ht, "top", i);
      var s = this.Sh;
      return null !== s && s.Vt() ? (null === this.yh && s.Se() && (this.yh = setTimeout(function () {
        _this21.yh = null, _this21.Qt().Xh();
      }, 0)), s.xe(), i.unshift(s), i) : i;
    }
  }, {
    key: "Ws",
    value: function Ws() {
      var t = [];
      this.Gh() || t.push(this.xh), t.push(this.sh, this.er);
      var i = this.bh.map(function (t) {
        return t.lr();
      });
      return t.push.apply(t, _toConsumableArray(i)), Ft(this.kh, Ht, "normal", t), t;
    }
  }, {
    key: "Jh",
    value: function Jh() {
      return this.Qh(Ht, "bottom");
    }
  }, {
    key: "ta",
    value: function ta(t) {
      return this.Qh(Ut, t);
    }
  }, {
    key: "ia",
    value: function ia(t) {
      return this.Qh($t, t);
    }
  }, {
    key: "sa",
    value: function sa(t, i) {
      return this.kh.map(function (s) {
        return s.jn(t, i);
      }).filter(function (t) {
        return null !== t;
      });
    }
  }, {
    key: "us",
    value: function us() {
      return [this.rr].concat(_toConsumableArray(this.bh.map(function (t) {
        return t._r();
      })));
    }
  }, {
    key: "Fs",
    value: function Fs(t, i) {
      if (i !== this.es && !this.Gh()) return [];
      var s = _toConsumableArray(this.vs);
      var _iterator4 = _createForOfIteratorHelper(this.bh),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _t14 = _step4.value;
          s.push(_t14.ur());
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this.kh.forEach(function (t) {
        s.push.apply(s, _toConsumableArray(t.Fs()));
      }), s;
    }
  }, {
    key: "cs",
    value: function cs() {
      var t = [];
      return this.kh.forEach(function (i) {
        t.push.apply(t, _toConsumableArray(i.cs()));
      }), t;
    }
  }, {
    key: "Mh",
    value: function Mh(t, i) {
      var _this22 = this;
      if (void 0 !== this.ys.autoscaleInfoProvider) {
        var _s4 = this.ys.autoscaleInfoProvider(function () {
          var s = _this22.na(t, i);
          return null === s ? null : s.Ke();
        });
        return mt.Xe(_s4);
      }
      return this.na(t, i);
    }
  }, {
    key: "ea",
    value: function ea() {
      return this.ys.priceFormat.minMove;
    }
  }, {
    key: "ra",
    value: function ra() {
      return this.ha;
    }
  }, {
    key: "Ns",
    value: function Ns() {
      var _this$Sh;
      this.sh.kt();
      var _iterator5 = _createForOfIteratorHelper(this.vs),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _t15 = _step5.value;
          _t15.kt();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(this.bh),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t16 = _step6.value;
          _t16.kt();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this.er.kt(), this.xh.kt(), (_this$Sh = this.Sh) !== null && _this$Sh !== void 0 && _this$Sh.kt(), this.kh.forEach(function (t) {
        return t.Ns();
      });
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return u(_superPropGet(Yt, "Wt", this, 3)([]));
    }
  }, {
    key: "Et",
    value: function Et(t) {
      if (!(("Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph) && this.ys.crosshairMarkerVisible)) return null;
      var i = this.Yt.Pr(t);
      if (null === i) return null;
      return {
        gt: i.Ft[3],
        ft: this.aa(),
        Ht: this.la(),
        Ot: this.oa(),
        Lt: this._a(t)
      };
    }
  }, {
    key: "Be",
    value: function Be() {
      return this.ys.title;
    }
  }, {
    key: "Vt",
    value: function Vt() {
      return this.ys.visible;
    }
  }, {
    key: "ua",
    value: function ua(t) {
      this.kh.push(new Wt(t, this));
    }
  }, {
    key: "ca",
    value: function ca(t) {
      this.kh = this.kh.filter(function (i) {
        return i.oh() !== t;
      });
    }
  }, {
    key: "da",
    value: function da() {
      var _this23 = this;
      if ("Custom" === this.Ph) return function (t) {
        return _this23.sh.fa(t);
      };
    }
  }, {
    key: "pa",
    value: function pa() {
      var _this24 = this;
      if ("Custom" === this.Ph) return function (t) {
        return _this24.sh.va(t);
      };
    }
  }, {
    key: "ma",
    value: function ma() {
      return this.Yt.qr();
    }
  }, {
    key: "Gh",
    value: function Gh() {
      return !X(this.Wt().wa());
    }
  }, {
    key: "na",
    value: function na(t, i) {
      if (!v(t) || !v(i) || this.Yt.Zi()) return null;
      var s = "Line" === this.Ph || "Area" === this.Ph || "Baseline" === this.Ph || "Histogram" === this.Ph ? [3] : [2, 1],
        n = this.Yt.Ur(t, i, s);
      var e = null !== n ? new vt(n.Jr, n.Qr) : null,
        r = null;
      if ("Histogram" === this.Rr()) {
        var _t17 = this.ys.base,
          _i13 = new vt(_t17, _t17);
        e = null !== e ? e.vn(_i13) : _i13;
      }
      return this.kh.forEach(function (s) {
        var n = s.Mh(t, i);
        if (n !== null && n !== void 0 && n.priceRange) {
          var _t18 = new vt(n.priceRange.minValue, n.priceRange.maxValue);
          e = null !== e ? e.vn(_t18) : _t18;
        }
        (n === null || n === void 0 ? void 0 : n.margins) && (r = n.margins);
      }), new mt(e, r);
    }
  }, {
    key: "aa",
    value: function aa() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.ys.crosshairMarkerRadius;
      }
      return 0;
    }
  }, {
    key: "la",
    value: function la() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          {
            var _t19 = this.ys.crosshairMarkerBorderColor;
            if (0 !== _t19.length) return _t19;
          }
      }
      return null;
    }
  }, {
    key: "oa",
    value: function oa() {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          return this.ys.crosshairMarkerBorderWidth;
      }
      return 0;
    }
  }, {
    key: "_a",
    value: function _a(t) {
      switch (this.Ph) {
        case "Line":
        case "Area":
        case "Baseline":
          {
            var _t20 = this.ys.crosshairMarkerBackgroundColor;
            if (0 !== _t20.length) return _t20;
          }
      }
      return this.Rh().Dr(t).cr;
    }
  }, {
    key: "Th",
    value: function Th() {
      switch (this.ys.priceFormat.type) {
        case "custom":
          this.ha = {
            format: this.ys.priceFormat.formatter
          };
          break;
        case "volume":
          this.ha = new st(this.ys.priceFormat.precision);
          break;
        case "percent":
          this.ha = new it(this.ys.priceFormat.precision);
          break;
        default:
          {
            var _t21 = Math.pow(10, this.ys.priceFormat.precision);
            this.ha = new tt(_t21, this.ys.priceFormat.minMove * _t21);
          }
      }
      null !== this.es && this.es.ga();
    }
  }, {
    key: "Qh",
    value: function Qh(t, i) {
      var s = [];
      return Ft(this.kh, t, i, s), s;
    }
  }]);
}(bt);
var jt = /*#__PURE__*/function () {
  function jt(t) {
    _classCallCheck(this, jt);
    this.ys = t;
  }
  return _createClass(jt, [{
    key: "Ma",
    value: function Ma(t, i, s) {
      var n = t;
      if (0 === this.ys.mode) return n;
      var e = s.Ps(),
        r = e.zt();
      if (null === r) return n;
      var h = e.Nt(t, r),
        a = s.ba().filter(function (t) {
          return t instanceof Yt;
        }).reduce(function (t, n) {
          if (s.Un(n) || !n.Vt()) return t;
          var e = n.Wt(),
            r = n.Ks();
          if (e.Zi() || !r.Te(i)) return t;
          var h = r.Pr(i);
          if (null === h) return t;
          var a = c(n.zt());
          return t.concat([e.Nt(h.Ft[3], a.Ft)]);
        }, []);
      if (0 === a.length) return n;
      a.sort(function (t, i) {
        return Math.abs(t - h) - Math.abs(i - h);
      });
      var l = a[0];
      return n = e.Ts(l, r), n;
    }
  }]);
}();
var Zt = /*#__PURE__*/function (_R5) {
  function Zt() {
    var _this25;
    _classCallCheck(this, Zt);
    _this25 = _callSuper(this, Zt, arguments), _this25.Yt = null;
    return _this25;
  }
  _inherits(Zt, _R5);
  return _createClass(Zt, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "et",
    value: function et(_ref9) {
      var _this26 = this;
      var t = _ref9.context,
        i = _ref9.bitmapSize,
        s = _ref9.horizontalPixelRatio,
        n = _ref9.verticalPixelRatio;
      if (null === this.Yt) return;
      var e = Math.max(1, Math.floor(s));
      t.lineWidth = e, function (t, i) {
        t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore();
      }(t, function () {
        var r = u(_this26.Yt);
        if (r.xa) {
          t.strokeStyle = r.Sa, a(t, r.Ca), t.beginPath();
          var _iterator7 = _createForOfIteratorHelper(r.ya),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _n4 = _step7.value;
              var _r5 = Math.round(_n4.ka * s);
              t.moveTo(_r5, -e), t.lineTo(_r5, i.height + e);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          t.stroke();
        }
        if (r.Pa) {
          t.strokeStyle = r.Ta, a(t, r.Ra), t.beginPath();
          var _iterator8 = _createForOfIteratorHelper(r.Da),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _s5 = _step8.value;
              var _r6 = Math.round(_s5.ka * n);
              t.moveTo(-e, _r6), t.lineTo(i.width + e, _r6);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          t.stroke();
        }
      });
    }
  }]);
}(R);
var Kt = /*#__PURE__*/function () {
  function Kt(t) {
    _classCallCheck(this, Kt);
    this.Gt = new Zt(), this.St = !0, this.yt = t;
  }
  return _createClass(Kt, [{
    key: "kt",
    value: function kt() {
      this.St = !0;
    }
  }, {
    key: "Tt",
    value: function Tt() {
      if (this.St) {
        var _t22 = this.yt.Qt().N().grid,
          _i14 = {
            Pa: _t22.horzLines.visible,
            xa: _t22.vertLines.visible,
            Ta: _t22.horzLines.color,
            Sa: _t22.vertLines.color,
            Ra: _t22.horzLines.style,
            Ca: _t22.vertLines.style,
            Da: this.yt.Ps().Va(),
            ya: (this.yt.Qt().Bt().Va() || []).map(function (t) {
              return {
                ka: t.coord
              };
            })
          };
        this.Gt.ht(_i14), this.St = !1;
      }
      return this.Gt;
    }
  }]);
}();
var Xt = /*#__PURE__*/function () {
  function Xt(t) {
    _classCallCheck(this, Xt);
    this.sh = new Kt(t);
  }
  return _createClass(Xt, [{
    key: "lr",
    value: function lr() {
      return this.sh;
    }
  }]);
}();
var Gt = {
  Ia: 4,
  Aa: 1e-4
};
function Jt(t, i) {
  var s = 100 * (t - i) / i;
  return i < 0 ? -s : s;
}
function Qt(t, i) {
  var s = Jt(t.$e(), i),
    n = Jt(t.qe(), i);
  return new vt(s, n);
}
function ti(t, i) {
  var s = 100 * (t - i) / i + 100;
  return i < 0 ? -s : s;
}
function ii(t, i) {
  var s = ti(t.$e(), i),
    n = ti(t.qe(), i);
  return new vt(s, n);
}
function si(t, i) {
  var s = Math.abs(t);
  if (s < 1e-15) return 0;
  var n = Math.log10(s + i.Aa) + i.Ia;
  return t < 0 ? -n : n;
}
function ni(t, i) {
  var s = Math.abs(t);
  if (s < 1e-15) return 0;
  var n = Math.pow(10, s - i.Ia) - i.Aa;
  return t < 0 ? -n : n;
}
function ei(t, i) {
  if (null === t) return null;
  var s = si(t.$e(), i),
    n = si(t.qe(), i);
  return new vt(s, n);
}
function ri(t, i) {
  if (null === t) return null;
  var s = ni(t.$e(), i),
    n = ni(t.qe(), i);
  return new vt(s, n);
}
function hi(t) {
  if (null === t) return Gt;
  var i = Math.abs(t.qe() - t.$e());
  if (i >= 1 || i < 1e-15) return Gt;
  var s = Math.ceil(Math.abs(Math.log10(i))),
    n = Gt.Ia + s;
  return {
    Ia: n,
    Aa: 1 / Math.pow(10, n)
  };
}
function ai(t, i, s) {
  return Math.min(Math.max(t, i), s);
}
function li(t, i, s) {
  return i - t <= s;
}
function oi(t) {
  var i = Math.ceil(t);
  return i % 2 == 0 ? i - 1 : i;
}
var _i = /*#__PURE__*/function () {
  function _i(t, i) {
    _classCallCheck(this, _i);
    if (this.Ba = t, this.Ea = i, function (t) {
      if (t < 0) return !1;
      for (var _i15 = t; _i15 > 1; _i15 /= 10) if (_i15 % 10 != 0) return !1;
      return !0;
    }(this.Ba)) this.za = [2, 2.5, 2];else {
      this.za = [];
      for (var _t23 = this.Ba; 1 !== _t23;) {
        if (_t23 % 2 == 0) this.za.push(2), _t23 /= 2;else {
          if (_t23 % 5 != 0) throw new Error("unexpected base");
          this.za.push(2, 2.5), _t23 /= 5;
        }
        if (this.za.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  return _createClass(_i, [{
    key: "La",
    value: function La(t, i, s) {
      var n = 0 === this.Ba ? 0 : 1 / this.Ba;
      var e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
        r = 0,
        h = this.Ea[0];
      for (;;) {
        var _t24 = li(e, n, 1e-14) && e > n + 1e-14,
          _i16 = li(e, s * h, 1e-14),
          _a4 = li(e, 1, 1e-14);
        if (!(_t24 && _i16 && _a4)) break;
        e /= h, h = this.Ea[++r % this.Ea.length];
      }
      if (e <= n + 1e-14 && (e = n), e = Math.max(1, e), this.za.length > 0 && (a = e, l = 1, o = 1e-14, Math.abs(a - l) < o)) for (r = 0, h = this.za[0]; li(e, s * h, 1e-14) && e > n + 1e-14;) e /= h, h = this.za[++r % this.za.length];
      var a, l, o;
      return e;
    }
  }]);
}();
var ui = /*#__PURE__*/function () {
  function ui(t, i, s, n) {
    _classCallCheck(this, ui);
    this.Oa = [], this.Yi = t, this.Ba = i, this.Na = s, this.Wa = n;
  }
  return _createClass(ui, [{
    key: "La",
    value: function La(t, i) {
      if (t < i) throw new Error("high < low");
      var s = this.Yi.$t(),
        n = (t - i) * this.Fa() / s,
        e = new _i(this.Ba, [2, 2.5, 2]),
        r = new _i(this.Ba, [2, 2, 2.5]),
        h = new _i(this.Ba, [2.5, 2, 2]),
        a = [];
      return a.push(e.La(t, i, n), r.La(t, i, n), h.La(t, i, n)), function (t) {
        if (t.length < 1) throw Error("array is empty");
        var i = t[0];
        for (var _s6 = 1; _s6 < t.length; ++_s6) t[_s6] < i && (i = t[_s6]);
        return i;
      }(a);
    }
  }, {
    key: "Ha",
    value: function Ha() {
      var t = this.Yi,
        i = t.zt();
      if (null === i) return void (this.Oa = []);
      var s = t.$t(),
        n = this.Na(s - 1, i),
        e = this.Na(0, i),
        r = this.Yi.N().entireTextOnly ? this.Ua() / 2 : 0,
        h = r,
        a = s - 1 - r,
        l = Math.max(n, e),
        o = Math.min(n, e);
      if (l === o) return void (this.Oa = []);
      var _ = this.La(l, o),
        u = l % _;
      u += u < 0 ? _ : 0;
      var c = l >= o ? 1 : -1;
      var d = null,
        f = 0;
      for (var _s7 = l - u; _s7 > o; _s7 -= _) {
        var _n5 = this.Wa(_s7, i, !0);
        null !== d && Math.abs(_n5 - d) < this.Fa() || _n5 < h || _n5 > a || (f < this.Oa.length ? (this.Oa[f].ka = _n5, this.Oa[f].$a = t.qa(_s7)) : this.Oa.push({
          ka: _n5,
          $a: t.qa(_s7)
        }), f++, d = _n5, t.Ya() && (_ = this.La(_s7 * c, o)));
      }
      this.Oa.length = f;
    }
  }, {
    key: "Va",
    value: function Va() {
      return this.Oa;
    }
  }, {
    key: "Ua",
    value: function Ua() {
      return this.Yi.k();
    }
  }, {
    key: "Fa",
    value: function Fa() {
      return Math.ceil(2.5 * this.Ua());
    }
  }]);
}();
function ci(t) {
  return t.slice().sort(function (t, i) {
    return u(t.hs()) - u(i.hs());
  });
}
var di;
!function (t) {
  t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(di || (di = {}));
var fi = new it(),
  pi = new tt(100, 1);
var vi = /*#__PURE__*/function () {
  function vi(t, i, s, n, e) {
    _classCallCheck(this, vi);
    this.ja = 0, this.Za = null, this.Ge = null, this.Ka = null, this.Xa = {
      Ga: !1,
      Ja: null
    }, this.Qa = 0, this.tl = 0, this.il = new d(), this.sl = new d(), this.nl = [], this.el = null, this.rl = null, this.hl = null, this.al = null, this.ha = pi, this.ll = hi(null), this.ol = t, this.ys = i, this._l = s, this.ul = n, this.cl = e, this.dl = new ui(this, 100, this.fl.bind(this), this.pl.bind(this));
  }
  return _createClass(vi, [{
    key: "wa",
    value: function wa() {
      return this.ol;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      if (f(this.ys, t), this.ga(), void 0 !== t.mode && this.vl({
        ie: t.mode
      }), void 0 !== t.scaleMargins) {
        var _i17 = _(t.scaleMargins.top),
          _s8 = _(t.scaleMargins.bottom);
        if (_i17 < 0 || _i17 > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(_i17));
        if (_s8 < 0 || _s8 > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(_s8));
        if (_i17 + _s8 > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(_i17 + _s8));
        this.ml(), this.rl = null;
      }
    }
  }, {
    key: "wl",
    value: function wl() {
      return this.ys.autoScale;
    }
  }, {
    key: "Ya",
    value: function Ya() {
      return 1 === this.ys.mode;
    }
  }, {
    key: "Le",
    value: function Le() {
      return 2 === this.ys.mode;
    }
  }, {
    key: "gl",
    value: function gl() {
      return 3 === this.ys.mode;
    }
  }, {
    key: "ie",
    value: function ie() {
      return {
        sn: this.ys.autoScale,
        Ml: this.ys.invertScale,
        ie: this.ys.mode
      };
    }
  }, {
    key: "vl",
    value: function vl(t) {
      var i = this.ie();
      var s = null;
      void 0 !== t.sn && (this.ys.autoScale = t.sn), void 0 !== t.ie && (this.ys.mode = t.ie, 2 !== t.ie && 3 !== t.ie || (this.ys.autoScale = !0), this.Xa.Ga = !1), 1 === i.ie && t.ie !== i.ie && (!function (t, i) {
        if (null === t) return !1;
        var s = ni(t.$e(), i),
          n = ni(t.qe(), i);
        return isFinite(s) && isFinite(n);
      }(this.Ge, this.ll) ? this.ys.autoScale = !0 : (s = ri(this.Ge, this.ll), null !== s && this.bl(s))), 1 === t.ie && t.ie !== i.ie && (s = ei(this.Ge, this.ll), null !== s && this.bl(s));
      var n = i.ie !== this.ys.mode;
      n && (2 === i.ie || this.Le()) && this.ga(), n && (3 === i.ie || this.gl()) && this.ga(), void 0 !== t.Ml && i.Ml !== t.Ml && (this.ys.invertScale = t.Ml, this.xl()), this.sl.p(i, this.ie());
    }
  }, {
    key: "Sl",
    value: function Sl() {
      return this.sl;
    }
  }, {
    key: "k",
    value: function k() {
      return this._l.fontSize;
    }
  }, {
    key: "$t",
    value: function $t() {
      return this.ja;
    }
  }, {
    key: "Cl",
    value: function Cl(t) {
      this.ja !== t && (this.ja = t, this.ml(), this.rl = null);
    }
  }, {
    key: "yl",
    value: function yl() {
      if (this.Za) return this.Za;
      var t = this.$t() - this.kl() - this.Pl();
      return this.Za = t, t;
    }
  }, {
    key: "Qe",
    value: function Qe() {
      return this.Tl(), this.Ge;
    }
  }, {
    key: "bl",
    value: function bl(t, i) {
      var s = this.Ge;
      (i || null === s && null !== t || null !== s && !s.He(t)) && (this.rl = null, this.Ge = t);
    }
  }, {
    key: "Zi",
    value: function Zi() {
      return this.Tl(), 0 === this.ja || !this.Ge || this.Ge.Zi();
    }
  }, {
    key: "Rl",
    value: function Rl(t) {
      return this.Ml() ? t : this.$t() - 1 - t;
    }
  }, {
    key: "Nt",
    value: function Nt(t, i) {
      return this.Le() ? t = Jt(t, i) : this.gl() && (t = ti(t, i)), this.pl(t, i);
    }
  }, {
    key: "Dl",
    value: function Dl(t, i, s) {
      this.Tl();
      var n = this.Pl(),
        e = u(this.Qe()),
        r = e.$e(),
        h = e.qe(),
        a = this.yl() - 1,
        l = this.Ml(),
        o = a / (h - r),
        _ = void 0 === s ? 0 : s.from,
        c = void 0 === s ? t.length : s.to,
        d = this.Vl();
      for (var _s9 = _; _s9 < c; _s9++) {
        var _e6 = t[_s9],
          _h2 = _e6.gt;
        if (isNaN(_h2)) continue;
        var _a5 = _h2;
        null !== d && (_a5 = d(_e6.gt, i));
        var _4 = n + o * (_a5 - r),
          _u = l ? _4 : this.ja - 1 - _4;
        _e6.ut = _u;
      }
    }
  }, {
    key: "Il",
    value: function Il(t, i, s) {
      this.Tl();
      var n = this.Pl(),
        e = u(this.Qe()),
        r = e.$e(),
        h = e.qe(),
        a = this.yl() - 1,
        l = this.Ml(),
        o = a / (h - r),
        _ = void 0 === s ? 0 : s.from,
        c = void 0 === s ? t.length : s.to,
        d = this.Vl();
      for (var _s10 = _; _s10 < c; _s10++) {
        var _e7 = t[_s10];
        var _h3 = _e7.qh,
          _a6 = _e7.Yh,
          _5 = _e7.jh,
          _u2 = _e7.Zh;
        null !== d && (_h3 = d(_e7.qh, i), _a6 = d(_e7.Yh, i), _5 = d(_e7.jh, i), _u2 = d(_e7.Zh, i));
        var _c = n + o * (_h3 - r),
          _f = l ? _c : this.ja - 1 - _c;
        _e7.Al = _f, _c = n + o * (_a6 - r), _f = l ? _c : this.ja - 1 - _c, _e7.Bl = _f, _c = n + o * (_5 - r), _f = l ? _c : this.ja - 1 - _c, _e7.El = _f, _c = n + o * (_u2 - r), _f = l ? _c : this.ja - 1 - _c, _e7.zl = _f;
      }
    }
  }, {
    key: "Ts",
    value: function Ts(t, i) {
      var s = this.fl(t, i);
      return this.Ll(s, i);
    }
  }, {
    key: "Ll",
    value: function Ll(t, i) {
      var s = t;
      return this.Le() ? s = function (t, i) {
        return i < 0 && (t = -t), t / 100 * i + i;
      }(s, i) : this.gl() && (s = function (t, i) {
        return t -= 100, i < 0 && (t = -t), t / 100 * i + i;
      }(s, i)), s;
    }
  }, {
    key: "ba",
    value: function ba() {
      return this.nl;
    }
  }, {
    key: "Dt",
    value: function Dt() {
      if (this.el) return this.el;
      var t = [];
      for (var _i18 = 0; _i18 < this.nl.length; _i18++) {
        var _s11 = this.nl[_i18];
        null === _s11.hs() && _s11.ls(_i18 + 1), t.push(_s11);
      }
      return t = ci(t), this.el = t, this.el;
    }
  }, {
    key: "Ol",
    value: function Ol(t) {
      -1 === this.nl.indexOf(t) && (this.nl.push(t), this.ga(), this.Nl());
    }
  }, {
    key: "Wl",
    value: function Wl(t) {
      var i = this.nl.indexOf(t);
      if (-1 === i) throw new Error("source is not attached to scale");
      this.nl.splice(i, 1), 0 === this.nl.length && (this.vl({
        sn: !0
      }), this.bl(null)), this.ga(), this.Nl();
    }
  }, {
    key: "zt",
    value: function zt() {
      var t = null;
      var _iterator9 = _createForOfIteratorHelper(this.nl),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _i19 = _step9.value;
          var _s12 = _i19.zt();
          null !== _s12 && (null === t || _s12.Hh < t.Hh) && (t = _s12);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return null === t ? null : t.Ft;
    }
  }, {
    key: "Ml",
    value: function Ml() {
      return this.ys.invertScale;
    }
  }, {
    key: "Va",
    value: function Va() {
      var t = null === this.zt();
      if (null !== this.rl && (t || this.rl.Fl === t)) return this.rl.Va;
      this.dl.Ha();
      var i = this.dl.Va();
      return this.rl = {
        Va: i,
        Fl: t
      }, this.il.p(), i;
    }
  }, {
    key: "Hl",
    value: function Hl() {
      return this.il;
    }
  }, {
    key: "Ul",
    value: function Ul(t) {
      this.Le() || this.gl() || null === this.hl && null === this.Ka && (this.Zi() || (this.hl = this.ja - t, this.Ka = u(this.Qe()).Ue()));
    }
  }, {
    key: "$l",
    value: function $l(t) {
      if (this.Le() || this.gl()) return;
      if (null === this.hl) return;
      this.vl({
        sn: !1
      }), (t = this.ja - t) < 0 && (t = 0);
      var i = (this.hl + .2 * (this.ja - 1)) / (t + .2 * (this.ja - 1));
      var s = u(this.Ka).Ue();
      i = Math.max(i, .1), s.je(i), this.bl(s);
    }
  }, {
    key: "ql",
    value: function ql() {
      this.Le() || this.gl() || (this.hl = null, this.Ka = null);
    }
  }, {
    key: "Yl",
    value: function Yl(t) {
      this.wl() || null === this.al && null === this.Ka && (this.Zi() || (this.al = t, this.Ka = u(this.Qe()).Ue()));
    }
  }, {
    key: "jl",
    value: function jl(t) {
      if (this.wl()) return;
      if (null === this.al) return;
      var i = u(this.Qe()).Ye() / (this.yl() - 1);
      var s = t - this.al;
      this.Ml() && (s *= -1);
      var n = s * i,
        e = u(this.Ka).Ue();
      e.Ze(n), this.bl(e, !0), this.rl = null;
    }
  }, {
    key: "Zl",
    value: function Zl() {
      this.wl() || null !== this.al && (this.al = null, this.Ka = null);
    }
  }, {
    key: "ra",
    value: function ra() {
      return this.ha || this.ga(), this.ha;
    }
  }, {
    key: "Xi",
    value: function Xi(t, i) {
      switch (this.ys.mode) {
        case 2:
          return this.Kl(Jt(t, i));
        case 3:
          return this.ra().format(ti(t, i));
        default:
          return this.nr(t);
      }
    }
  }, {
    key: "qa",
    value: function qa(t) {
      switch (this.ys.mode) {
        case 2:
          return this.Kl(t);
        case 3:
          return this.ra().format(t);
        default:
          return this.nr(t);
      }
    }
  }, {
    key: "Dh",
    value: function Dh(t) {
      return this.nr(t, u(this.Xl()).ra());
    }
  }, {
    key: "Vh",
    value: function Vh(t, i) {
      return t = Jt(t, i), this.Kl(t, fi);
    }
  }, {
    key: "Gl",
    value: function Gl() {
      return this.nl;
    }
  }, {
    key: "Jl",
    value: function Jl(t) {
      this.Xa = {
        Ja: t,
        Ga: !1
      };
    }
  }, {
    key: "Ns",
    value: function Ns() {
      this.nl.forEach(function (t) {
        return t.Ns();
      });
    }
  }, {
    key: "ga",
    value: function ga() {
      this.rl = null;
      var t = this.Xl();
      var i = 100;
      null !== t && (i = Math.round(1 / t.ea())), this.ha = pi, this.Le() ? (this.ha = fi, i = 100) : this.gl() ? (this.ha = new tt(100, 1), i = 100) : null !== t && (this.ha = t.ra()), this.dl = new ui(this, i, this.fl.bind(this), this.pl.bind(this)), this.dl.Ha();
    }
  }, {
    key: "Nl",
    value: function Nl() {
      this.el = null;
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return this.cl;
    }
  }, {
    key: "Xl",
    value: function Xl() {
      return this.nl[0] || null;
    }
  }, {
    key: "kl",
    value: function kl() {
      return this.Ml() ? this.ys.scaleMargins.bottom * this.$t() + this.tl : this.ys.scaleMargins.top * this.$t() + this.Qa;
    }
  }, {
    key: "Pl",
    value: function Pl() {
      return this.Ml() ? this.ys.scaleMargins.top * this.$t() + this.Qa : this.ys.scaleMargins.bottom * this.$t() + this.tl;
    }
  }, {
    key: "Tl",
    value: function Tl() {
      this.Xa.Ga || (this.Xa.Ga = !0, this.Ql());
    }
  }, {
    key: "ml",
    value: function ml() {
      this.Za = null;
    }
  }, {
    key: "pl",
    value: function pl(t, i) {
      if (this.Tl(), this.Zi()) return 0;
      t = this.Ya() && t ? si(t, this.ll) : t;
      var s = u(this.Qe()),
        n = this.Pl() + (this.yl() - 1) * (t - s.$e()) / s.Ye();
      return this.Rl(n);
    }
  }, {
    key: "fl",
    value: function fl(t, i) {
      if (this.Tl(), this.Zi()) return 0;
      var s = this.Rl(t),
        n = u(this.Qe()),
        e = n.$e() + n.Ye() * ((s - this.Pl()) / (this.yl() - 1));
      return this.Ya() ? ni(e, this.ll) : e;
    }
  }, {
    key: "xl",
    value: function xl() {
      this.rl = null, this.dl.Ha();
    }
  }, {
    key: "Ql",
    value: function Ql() {
      var t = this.Xa.Ja;
      if (null === t) return;
      var i = null;
      var s = this.Gl();
      var n = 0,
        e = 0;
      var _iterator10 = _createForOfIteratorHelper(s),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _r7 = _step10.value;
          if (!_r7.Vt()) continue;
          var _s15 = _r7.zt();
          if (null === _s15) continue;
          var _h4 = _r7.Mh(t.Uh(), t.bi());
          var _a7 = _h4 && _h4.Qe();
          if (null !== _a7) {
            switch (this.ys.mode) {
              case 1:
                _a7 = ei(_a7, this.ll);
                break;
              case 2:
                _a7 = Qt(_a7, _s15.Ft);
                break;
              case 3:
                _a7 = ii(_a7, _s15.Ft);
            }
            if (i = null === i ? _a7 : i.vn(u(_a7)), null !== _h4) {
              var _t27 = _h4.tr();
              null !== _t27 && (n = Math.max(n, _t27.above), e = Math.max(e, _t27.below));
            }
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      if (n === this.Qa && e === this.tl || (this.Qa = n, this.tl = e, this.rl = null, this.ml()), null !== i) {
        if (i.$e() === i.qe()) {
          var _t25 = this.Xl(),
            _s13 = 5 * (null === _t25 || this.Le() || this.gl() ? 1 : _t25.ea());
          this.Ya() && (i = ri(i, this.ll)), i = new vt(i.$e() - _s13, i.qe() + _s13), this.Ya() && (i = ei(i, this.ll));
        }
        if (this.Ya()) {
          var _t26 = ri(i, this.ll),
            _s14 = hi(_t26);
          if (r = _s14, h = this.ll, r.Ia !== h.Ia || r.Aa !== h.Aa) {
            var _n6 = null !== this.Ka ? ri(this.Ka, this.ll) : null;
            this.ll = _s14, i = ei(_t26, _s14), null !== _n6 && (this.Ka = ei(_n6, _s14));
          }
        }
        this.bl(i);
      } else null === this.Ge && (this.bl(new vt(-.5, .5)), this.ll = hi(null));
      var r, h;
      this.Xa.Ga = !0;
    }
  }, {
    key: "Vl",
    value: function Vl() {
      var _this27 = this;
      return this.Le() ? Jt : this.gl() ? ti : this.Ya() ? function (t) {
        return si(t, _this27.ll);
      } : null;
    }
  }, {
    key: "io",
    value: function io(t, i, s) {
      return void 0 === i ? (void 0 === s && (s = this.ra()), s.format(t)) : i(t);
    }
  }, {
    key: "nr",
    value: function nr(t, i) {
      return this.io(t, this.ul.priceFormatter, i);
    }
  }, {
    key: "Kl",
    value: function Kl(t, i) {
      return this.io(t, this.ul.percentageFormatter, i);
    }
  }]);
}();
function mi(t) {
  return t instanceof Yt;
}
var wi = /*#__PURE__*/function () {
  function wi(t, i) {
    _classCallCheck(this, wi);
    this.nl = [], this.so = new Map(), this.ja = 0, this.no = 0, this.eo = 1e3, this.el = null, this.ro = new d(), this.kh = [], this.uh = t, this.ts = i, this.ho = new Xt(this);
    var s = i.N();
    this.ao = this.lo("left", s.leftPriceScale), this.oo = this.lo("right", s.rightPriceScale), this.ao.Sl().i(this._o.bind(this, this.ao), this), this.oo.Sl().i(this._o.bind(this, this.oo), this), this.uo(s);
  }
  return _createClass(wi, [{
    key: "uo",
    value: function uo(t) {
      if (t.leftPriceScale && this.ao.hr(t.leftPriceScale), t.rightPriceScale && this.oo.hr(t.rightPriceScale), t.localization && (this.ao.ga(), this.oo.ga()), t.overlayPriceScales) {
        var _i20 = Array.from(this.so.values());
        for (var _i22 = 0, _i21 = _i20; _i22 < _i21.length; _i22++) {
          var _s16 = _i21[_i22];
          var _i23 = u(_s16[0].Wt());
          _i23.hr(t.overlayPriceScales), t.localization && _i23.ga();
        }
      }
    }
  }, {
    key: "co",
    value: function co(t) {
      switch (t) {
        case "left":
          return this.ao;
        case "right":
          return this.oo;
      }
      return this.so.has(t) ? _(this.so.get(t))[0].Wt() : null;
    }
  }, {
    key: "m",
    value: function m() {
      this.Qt()["do"]().u(this), this.ao.Sl().u(this), this.oo.Sl().u(this), this.nl.forEach(function (t) {
        t.m && t.m();
      }), this.kh = this.kh.filter(function (t) {
        var i = t.oh();
        return i.detached && i.detached(), !1;
      }), this.ro.p();
    }
  }, {
    key: "fo",
    value: function fo() {
      return this.eo;
    }
  }, {
    key: "po",
    value: function po(t) {
      this.eo = t;
    }
  }, {
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }, {
    key: "Qi",
    value: function Qi() {
      return this.no;
    }
  }, {
    key: "$t",
    value: function $t() {
      return this.ja;
    }
  }, {
    key: "vo",
    value: function vo(t) {
      this.no = t, this.mo();
    }
  }, {
    key: "Cl",
    value: function Cl(t) {
      var _this28 = this;
      this.ja = t, this.ao.Cl(t), this.oo.Cl(t), this.nl.forEach(function (i) {
        if (_this28.Un(i)) {
          var _s17 = i.Wt();
          null !== _s17 && _s17.Cl(t);
        }
      }), this.mo();
    }
  }, {
    key: "wo",
    value: function wo() {
      return this.nl.filter(mi);
    }
  }, {
    key: "ba",
    value: function ba() {
      return this.nl;
    }
  }, {
    key: "Un",
    value: function Un(t) {
      var i = t.Wt();
      return null === i || this.ao !== i && this.oo !== i;
    }
  }, {
    key: "Ol",
    value: function Ol(t, i, s) {
      var n = void 0 !== s ? s : this.bo().Mo + 1;
      this.xo(t, i, n);
    }
  }, {
    key: "Wl",
    value: function Wl(t) {
      var i = this.nl.indexOf(t);
      o(-1 !== i, "removeDataSource: invalid data source"), this.nl.splice(i, 1);
      var s = u(t.Wt()).wa();
      if (this.so.has(s)) {
        var _i24 = _(this.so.get(s)),
          _n7 = _i24.indexOf(t);
        -1 !== _n7 && (_i24.splice(_n7, 1), 0 === _i24.length && this.so["delete"](s));
      }
      var n = t.Wt();
      n && n.ba().indexOf(t) >= 0 && n.Wl(t), null !== n && (n.Nl(), this.So(n)), this.el = null;
    }
  }, {
    key: "qn",
    value: function qn(t) {
      return t === this.ao ? "left" : t === this.oo ? "right" : "overlay";
    }
  }, {
    key: "Co",
    value: function Co() {
      return this.ao;
    }
  }, {
    key: "yo",
    value: function yo() {
      return this.oo;
    }
  }, {
    key: "ko",
    value: function ko(t, i) {
      t.Ul(i);
    }
  }, {
    key: "Po",
    value: function Po(t, i) {
      t.$l(i), this.mo();
    }
  }, {
    key: "To",
    value: function To(t) {
      t.ql();
    }
  }, {
    key: "Ro",
    value: function Ro(t, i) {
      t.Yl(i);
    }
  }, {
    key: "Do",
    value: function Do(t, i) {
      t.jl(i), this.mo();
    }
  }, {
    key: "Vo",
    value: function Vo(t) {
      t.Zl();
    }
  }, {
    key: "mo",
    value: function mo() {
      this.nl.forEach(function (t) {
        t.Ns();
      });
    }
  }, {
    key: "Ps",
    value: function Ps() {
      var t = null;
      return this.ts.N().rightPriceScale.visible && 0 !== this.oo.ba().length ? t = this.oo : this.ts.N().leftPriceScale.visible && 0 !== this.ao.ba().length ? t = this.ao : 0 !== this.nl.length && (t = this.nl[0].Wt()), null === t && (t = this.oo), t;
    }
  }, {
    key: "$n",
    value: function $n() {
      var t = null;
      return this.ts.N().rightPriceScale.visible ? t = this.oo : this.ts.N().leftPriceScale.visible && (t = this.ao), t;
    }
  }, {
    key: "So",
    value: function So(t) {
      null !== t && t.wl() && this.Io(t);
    }
  }, {
    key: "Ao",
    value: function Ao(t) {
      var i = this.uh.ye();
      t.vl({
        sn: !0
      }), null !== i && t.Jl(i), this.mo();
    }
  }, {
    key: "Bo",
    value: function Bo() {
      this.Io(this.ao), this.Io(this.oo);
    }
  }, {
    key: "Eo",
    value: function Eo() {
      var _this29 = this;
      this.So(this.ao), this.So(this.oo), this.nl.forEach(function (t) {
        _this29.Un(t) && _this29.So(t.Wt());
      }), this.mo(), this.ts.ar();
    }
  }, {
    key: "Dt",
    value: function Dt() {
      return null === this.el && (this.el = ci(this.nl)), this.el;
    }
  }, {
    key: "It",
    value: function It() {
      return this.Dt().filter(mi);
    }
  }, {
    key: "zo",
    value: function zo() {
      return this.ro;
    }
  }, {
    key: "Lo",
    value: function Lo() {
      return this.ho;
    }
  }, {
    key: "ua",
    value: function ua(t) {
      this.kh.push(new Bt(t));
    }
  }, {
    key: "ca",
    value: function ca(t) {
      this.kh = this.kh.filter(function (i) {
        return i.oh() !== t;
      }), t.detached && t.detached(), this.ts.ar();
    }
  }, {
    key: "Oo",
    value: function Oo() {
      return this.kh;
    }
  }, {
    key: "sa",
    value: function sa(t, i) {
      return this.kh.map(function (s) {
        return s.jn(t, i);
      }).filter(function (t) {
        return null !== t;
      });
    }
  }, {
    key: "Io",
    value: function Io(t) {
      var i = t.Gl();
      if (i && i.length > 0 && !this.uh.Zi()) {
        var _i25 = this.uh.ye();
        null !== _i25 && t.Jl(_i25);
      }
      t.Ns();
    }
  }, {
    key: "bo",
    value: function bo() {
      var t = this.Dt();
      if (0 === t.length) return {
        No: 0,
        Mo: 0
      };
      var i = 0,
        s = 0;
      for (var _n8 = 0; _n8 < t.length; _n8++) {
        var _e8 = t[_n8].hs();
        null !== _e8 && (_e8 < i && (i = _e8), _e8 > s && (s = _e8));
      }
      return {
        No: i,
        Mo: s
      };
    }
  }, {
    key: "xo",
    value: function xo(t, i, s) {
      var n = this.co(i);
      if (null === n && (n = this.lo(i, this.ts.N().overlayPriceScales)), this.nl.push(t), !X(i)) {
        var _s18 = this.so.get(i) || [];
        _s18.push(t), this.so.set(i, _s18);
      }
      n.Ol(t), t._s(n), t.ls(s), this.So(n), this.el = null;
    }
  }, {
    key: "_o",
    value: function _o(t, i, s) {
      i.ie !== s.ie && this.Io(t);
    }
  }, {
    key: "lo",
    value: function lo(t, i) {
      var s = _objectSpread({
          visible: !0,
          autoScale: !0
        }, g(i)),
        n = new vi(t, s, this.ts.N().layout, this.ts.N().localization, this.ts.Ki());
      return n.Cl(this.$t()), n;
    }
  }]);
}();
function gi(t) {
  return {
    Wo: t.Wo,
    Fo: {
      Zn: t.Ho.externalId
    },
    Uo: t.Ho.cursorStyle
  };
}
function Mi(t, i, s, n) {
  var _iterator11 = _createForOfIteratorHelper(t),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _e9 = _step11.value;
      var _t28 = _e9.Tt(n);
      if (null !== _t28 && _t28.jn) {
        var _n9 = _t28.jn(i, s);
        if (null !== _n9) return {
          $o: _e9,
          Fo: _n9
        };
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return null;
}
function bi(t) {
  return void 0 !== t.Ws;
}
function xi(t, i, s) {
  var n = [t].concat(_toConsumableArray(t.Dt())),
    e = function (t, i, s) {
      var n, e;
      var _iterator12 = _createForOfIteratorHelper(t),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _a8$sa, _a8$sa2;
          var _a8 = _step12.value;
          var _t29 = (_a8$sa = (_a8$sa2 = _a8.sa) === null || _a8$sa2 === void 0 ? void 0 : _a8$sa2.call(_a8, i, s)) !== null && _a8$sa !== void 0 ? _a8$sa : [];
          var _iterator13 = _createForOfIteratorHelper(_t29),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _n10;
              var _i26 = _step13.value;
              r = _i26.zOrder, h = (_n10 = n) === null || _n10 === void 0 ? void 0 : _n10.zOrder, (!h || "top" === r && "top" !== h || "normal" === r && "bottom" === h) && (n = _i26, e = _a8);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      var r, h;
      return n && e ? {
        Ho: n,
        Wo: e
      } : null;
    }(n, i, s);
  if ("top" === (e === null || e === void 0 ? void 0 : e.Ho.zOrder)) return gi(e);
  var _iterator14 = _createForOfIteratorHelper(n),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _r8 = _step14.value;
      if (e && e.Wo === _r8 && "bottom" !== e.Ho.zOrder && !e.Ho.isBackground) return gi(e);
      if (bi(_r8)) {
        var _n11 = Mi(_r8.Ws(t), i, s, t);
        if (null !== _n11) return {
          Wo: _r8,
          $o: _n11.$o,
          Fo: _n11.Fo
        };
      }
      if (e && e.Wo === _r8 && "bottom" !== e.Ho.zOrder && e.Ho.isBackground) return gi(e);
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return e !== null && e !== void 0 && e.Ho ? gi(e) : null;
}
var Si = /*#__PURE__*/function () {
  function Si(t, i) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    _classCallCheck(this, Si);
    this.kn = 0, this.Pn = 1, this.Tn = 1, this.Dn = new Map(), this.Rn = new Map(), this.qo = t, this.Yo = i, this.Vn = s;
  }
  return _createClass(Si, [{
    key: "jo",
    value: function jo(t) {
      var i = t.time,
        s = this.Yo.cacheKey(i),
        n = this.Dn.get(s);
      if (void 0 !== n) return n.Zo;
      if (this.kn === this.Vn) {
        var _t30 = this.Rn.get(this.Tn);
        this.Rn["delete"](this.Tn), this.Dn["delete"](_(_t30)), this.Tn++, this.kn--;
      }
      var e = this.qo(t);
      return this.Dn.set(s, {
        Zo: e,
        En: this.Pn
      }), this.Rn.set(this.Pn, s), this.kn++, this.Pn++, e;
    }
  }]);
}();
var Ci = /*#__PURE__*/function () {
  function Ci(t, i) {
    _classCallCheck(this, Ci);
    o(t <= i, "right should be >= left"), this.Ko = t, this.Xo = i;
  }
  return _createClass(Ci, [{
    key: "Uh",
    value: function Uh() {
      return this.Ko;
    }
  }, {
    key: "bi",
    value: function bi() {
      return this.Xo;
    }
  }, {
    key: "Go",
    value: function Go() {
      return this.Xo - this.Ko + 1;
    }
  }, {
    key: "Te",
    value: function Te(t) {
      return this.Ko <= t && t <= this.Xo;
    }
  }, {
    key: "He",
    value: function He(t) {
      return this.Ko === t.Uh() && this.Xo === t.bi();
    }
  }]);
}();
function yi(t, i) {
  return null === t || null === i ? t === i : t.He(i);
}
var ki = /*#__PURE__*/function () {
  function ki() {
    _classCallCheck(this, ki);
    this.Jo = new Map(), this.Dn = null, this.Qo = !1;
  }
  return _createClass(ki, [{
    key: "t_",
    value: function t_(t) {
      this.Qo = t, this.Dn = null;
    }
  }, {
    key: "i_",
    value: function i_(t, i) {
      this.s_(i), this.Dn = null;
      for (var _s19 = i; _s19 < t.length; ++_s19) {
        var _i27 = t[_s19];
        var _n12 = this.Jo.get(_i27.timeWeight);
        void 0 === _n12 && (_n12 = [], this.Jo.set(_i27.timeWeight, _n12)), _n12.push({
          index: _s19,
          time: _i27.time,
          weight: _i27.timeWeight,
          originalTime: _i27.originalTime
        });
      }
    }
  }, {
    key: "n_",
    value: function n_(t, i, s, n, e) {
      var r = Math.ceil(i / t);
      return null !== this.Dn && this.Dn.e_ === r && e === this.Dn.r_ && s === this.Dn.h_ || (this.Dn = {
        r_: e,
        h_: s,
        Va: this.a_(r, s, n),
        e_: r
      }), this.Dn.Va;
    }
  }, {
    key: "s_",
    value: function s_(t) {
      if (0 === t) return void this.Jo.clear();
      var i = [];
      this.Jo.forEach(function (s, n) {
        t <= s[0].index ? i.push(n) : s.splice(yt(s, t, function (i) {
          return i.index < t;
        }), 1 / 0);
      });
      for (var _i29 = 0, _i28 = i; _i29 < _i28.length; _i29++) {
        var _t31 = _i28[_i29];
        this.Jo["delete"](_t31);
      }
    }
  }, {
    key: "a_",
    value: function a_(t, i, s) {
      var n = [];
      var e = function e(t) {
        return !i || s.has(t.index);
      };
      var _iterator15 = _createForOfIteratorHelper(Array.from(this.Jo.keys()).sort(function (t, i) {
          return i - t;
        })),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _i30 = _step15.value;
          if (!this.Jo.get(_i30)) continue;
          var _s20 = n;
          n = [];
          var _r9 = _s20.length;
          var _h5 = 0;
          var _a9 = _(this.Jo.get(_i30)),
            _l3 = _a9.length;
          var _o3 = 1 / 0,
            _u3 = -1 / 0;
          for (var _i31 = 0; _i31 < _l3; _i31++) {
            var _l4 = _a9[_i31],
              _6 = _l4.index;
            for (; _h5 < _r9;) {
              var _t32 = _s20[_h5],
                _i32 = _t32.index;
              if (!(_i32 < _6 && e(_t32))) {
                _o3 = _i32;
                break;
              }
              _h5++, n.push(_t32), _u3 = _i32, _o3 = 1 / 0;
            }
            if (_o3 - _6 >= t && _6 - _u3 >= t && e(_l4)) n.push(_l4), _u3 = _6;else if (this.Qo) return _s20;
          }
          for (; _h5 < _r9; _h5++) e(_s20[_h5]) && n.push(_s20[_h5]);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      return n;
    }
  }]);
}();
var Pi = /*#__PURE__*/function () {
  function Pi(t) {
    _classCallCheck(this, Pi);
    this.l_ = t;
  }
  return _createClass(Pi, [{
    key: "o_",
    value: function o_() {
      return null === this.l_ ? null : new Ci(Math.floor(this.l_.Uh()), Math.ceil(this.l_.bi()));
    }
  }, {
    key: "__",
    value: function __() {
      return this.l_;
    }
  }], [{
    key: "u_",
    value: function u_() {
      return new Pi(null);
    }
  }]);
}();
function Ti(t, i) {
  return t.weight > i.weight ? t : i;
}
var Ri = /*#__PURE__*/function () {
  function Ri(t, i, s, n) {
    _classCallCheck(this, Ri);
    this.no = 0, this.c_ = null, this.d_ = [], this.al = null, this.hl = null, this.f_ = new ki(), this.p_ = new Map(), this.v_ = Pi.u_(), this.m_ = !0, this.w_ = new d(), this.g_ = new d(), this.M_ = new d(), this.b_ = null, this.x_ = null, this.S_ = new Map(), this.C_ = -1, this.y_ = [], this.ys = i, this.ul = s, this.k_ = i.rightOffset, this.P_ = i.barSpacing, this.ts = t, this.Yo = n, this.T_(), this.f_.t_(i.uniformDistribution), this.R_();
  }
  return _createClass(Ri, [{
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "D_",
    value: function D_(t) {
      f(this.ul, t), this.V_(), this.T_();
    }
  }, {
    key: "hr",
    value: function hr(t, i) {
      var _t$barSpacing;
      f(this.ys, t), this.ys.fixLeftEdge && this.I_(), this.ys.fixRightEdge && this.A_(), void 0 !== t.barSpacing && this.ts.dn(t.barSpacing), void 0 !== t.rightOffset && this.ts.fn(t.rightOffset), void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing || this.ts.dn((_t$barSpacing = t.barSpacing) !== null && _t$barSpacing !== void 0 ? _t$barSpacing : this.P_), void 0 !== t.ignoreWhitespaceIndices && t.ignoreWhitespaceIndices !== this.ys.ignoreWhitespaceIndices && this.R_(), this.V_(), this.T_(), this.M_.p();
    }
  }, {
    key: "Rs",
    value: function Rs(t) {
      var _this$d_$t$time, _this$d_$t;
      return (_this$d_$t$time = (_this$d_$t = this.d_[t]) === null || _this$d_$t === void 0 ? void 0 : _this$d_$t.time) !== null && _this$d_$t$time !== void 0 ? _this$d_$t$time : null;
    }
  }, {
    key: "ss",
    value: function ss(t) {
      var _this$d_$t2;
      return (_this$d_$t2 = this.d_[t]) !== null && _this$d_$t2 !== void 0 ? _this$d_$t2 : null;
    }
  }, {
    key: "B_",
    value: function B_(t, i) {
      var _this30 = this;
      if (this.d_.length < 1) return null;
      if (this.Yo.key(t) > this.Yo.key(this.d_[this.d_.length - 1].time)) return i ? this.d_.length - 1 : null;
      var s = yt(this.d_, this.Yo.key(t), function (t, i) {
        return _this30.Yo.key(t.time) < i;
      });
      return this.Yo.key(t) < this.Yo.key(this.d_[s].time) ? i ? s : null : s;
    }
  }, {
    key: "Zi",
    value: function Zi() {
      return 0 === this.no || 0 === this.d_.length || null === this.c_;
    }
  }, {
    key: "E_",
    value: function E_() {
      return this.d_.length > 0;
    }
  }, {
    key: "ye",
    value: function ye() {
      return this.z_(), this.v_.o_();
    }
  }, {
    key: "L_",
    value: function L_() {
      return this.z_(), this.v_.__();
    }
  }, {
    key: "O_",
    value: function O_() {
      var t = this.ye();
      if (null === t) return null;
      var i = {
        from: t.Uh(),
        to: t.bi()
      };
      return this.N_(i);
    }
  }, {
    key: "N_",
    value: function N_(t) {
      var i = Math.round(t.from),
        s = Math.round(t.to),
        n = u(this.W_()),
        e = u(this.F_());
      return {
        from: u(this.ss(Math.max(n, i))),
        to: u(this.ss(Math.min(e, s)))
      };
    }
  }, {
    key: "H_",
    value: function H_(t) {
      return {
        from: u(this.B_(t.from, !0)),
        to: u(this.B_(t.to, !0))
      };
    }
  }, {
    key: "Qi",
    value: function Qi() {
      return this.no;
    }
  }, {
    key: "vo",
    value: function vo(t) {
      if (!isFinite(t) || t <= 0) return;
      if (this.no === t) return;
      var i = this.L_(),
        s = this.no;
      if (this.no = t, this.m_ = !0, this.ys.lockVisibleTimeRangeOnResize && 0 !== s) {
        var _i33 = this.P_ * t / s;
        this.P_ = _i33;
      }
      if (this.ys.fixLeftEdge && null !== i && i.Uh() <= 0) {
        var _i34 = s - t;
        this.k_ -= Math.round(_i34 / this.P_) + 1, this.m_ = !0;
      }
      this.U_(), this.q_();
    }
  }, {
    key: "qt",
    value: function qt(t) {
      if (this.Zi() || !v(t)) return 0;
      var i = this.Y_() + this.k_ - t;
      return this.no - (i + .5) * this.P_ - 1;
    }
  }, {
    key: "j_",
    value: function j_(t, i) {
      var s = this.Y_(),
        n = void 0 === i ? 0 : i.from,
        e = void 0 === i ? t.length : i.to;
      for (var _i35 = n; _i35 < e; _i35++) {
        var _n13 = t[_i35].wt,
          _e10 = s + this.k_ - _n13,
          _r10 = this.no - (_e10 + .5) * this.P_ - 1;
        t[_i35]._t = _r10;
      }
    }
  }, {
    key: "Z_",
    value: function Z_(t, i) {
      var s = Math.ceil(this.K_(t));
      return i && this.ys.ignoreWhitespaceIndices && !this.X_(s) ? this.G_(s) : s;
    }
  }, {
    key: "fn",
    value: function fn(t) {
      this.m_ = !0, this.k_ = t, this.q_(), this.ts.J_(), this.ts.ar();
    }
  }, {
    key: "Q_",
    value: function Q_() {
      return this.P_;
    }
  }, {
    key: "dn",
    value: function dn(t) {
      this.tu(t), this.q_(), this.ts.J_(), this.ts.ar();
    }
  }, {
    key: "iu",
    value: function iu() {
      return this.k_;
    }
  }, {
    key: "Va",
    value: function Va() {
      if (this.Zi()) return null;
      if (null !== this.x_) return this.x_;
      var t = this.P_,
        i = 5 * (this.ts.N().layout.fontSize + 4) / 8 * (this.ys.tickMarkMaxCharacterLength || 8),
        s = Math.round(i / t),
        n = u(this.ye()),
        e = Math.max(n.Uh(), n.Uh() - s),
        r = Math.max(n.bi(), n.bi() - s),
        h = this.f_.n_(t, i, this.ys.ignoreWhitespaceIndices, this.S_, this.C_),
        a = this.W_() + s,
        l = this.F_() - s,
        o = this.su(),
        _ = this.ys.fixLeftEdge || o,
        c = this.ys.fixRightEdge || o;
      var d = 0;
      var _iterator16 = _createForOfIteratorHelper(h),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _t33 = _step16.value;
          if (!(e <= _t33.index && _t33.index <= r)) continue;
          var _s21 = void 0;
          d < this.y_.length ? (_s21 = this.y_[d], _s21.coord = this.qt(_t33.index), _s21.label = this.nu(_t33), _s21.weight = _t33.weight) : (_s21 = {
            needAlignCoordinate: !1,
            coord: this.qt(_t33.index),
            label: this.nu(_t33),
            weight: _t33.weight
          }, this.y_.push(_s21)), this.P_ > i / 2 && !o ? _s21.needAlignCoordinate = !1 : _s21.needAlignCoordinate = _ && _t33.index <= a || c && _t33.index >= l, d++;
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
      return this.y_.length = d, this.x_ = this.y_, this.y_;
    }
  }, {
    key: "eu",
    value: function eu() {
      this.m_ = !0, this.dn(this.ys.barSpacing), this.fn(this.ys.rightOffset);
    }
  }, {
    key: "ru",
    value: function ru(t) {
      this.m_ = !0, this.c_ = t, this.q_(), this.I_();
    }
  }, {
    key: "hu",
    value: function hu(t, i) {
      var s = this.K_(t),
        n = this.Q_(),
        e = n + i * (n / 10);
      this.dn(e), this.ys.rightBarStaysOnScroll || this.fn(this.iu() + (s - this.K_(t)));
    }
  }, {
    key: "Ul",
    value: function Ul(t) {
      this.al && this.Zl(), null === this.hl && null === this.b_ && (this.Zi() || (this.hl = t, this.au()));
    }
  }, {
    key: "$l",
    value: function $l(t) {
      if (null === this.b_) return;
      var i = ai(this.no - t, 0, this.no),
        s = ai(this.no - u(this.hl), 0, this.no);
      0 !== i && 0 !== s && this.dn(this.b_.Q_ * i / s);
    }
  }, {
    key: "ql",
    value: function ql() {
      null !== this.hl && (this.hl = null, this.lu());
    }
  }, {
    key: "Yl",
    value: function Yl(t) {
      null === this.al && null === this.b_ && (this.Zi() || (this.al = t, this.au()));
    }
  }, {
    key: "jl",
    value: function jl(t) {
      if (null === this.al) return;
      var i = (this.al - t) / this.Q_();
      this.k_ = u(this.b_).iu + i, this.m_ = !0, this.q_();
    }
  }, {
    key: "Zl",
    value: function Zl() {
      null !== this.al && (this.al = null, this.lu());
    }
  }, {
    key: "ou",
    value: function ou() {
      this._u(this.ys.rightOffset);
    }
  }, {
    key: "_u",
    value: function _u(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
      if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
      if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
      var s = this.k_,
        n = performance.now();
      this.ts._n({
        uu: function uu(t) {
          return (t - n) / i >= 1;
        },
        cu: function cu(e) {
          var r = (e - n) / i;
          return r >= 1 ? t : s + (t - s) * r;
        }
      });
    }
  }, {
    key: "kt",
    value: function kt(t, i) {
      this.m_ = !0, this.d_ = t, this.f_.i_(t, i), this.q_();
    }
  }, {
    key: "du",
    value: function du() {
      return this.w_;
    }
  }, {
    key: "fu",
    value: function fu() {
      return this.g_;
    }
  }, {
    key: "pu",
    value: function pu() {
      return this.M_;
    }
  }, {
    key: "Y_",
    value: function Y_() {
      return this.c_ || 0;
    }
  }, {
    key: "vu",
    value: function vu(t) {
      var i = t.Go();
      this.tu(this.no / i), this.k_ = t.bi() - this.Y_(), this.q_(), this.m_ = !0, this.ts.J_(), this.ts.ar();
    }
  }, {
    key: "mu",
    value: function mu() {
      var t = this.W_(),
        i = this.F_();
      null !== t && null !== i && this.vu(new Ci(t, i + this.ys.rightOffset));
    }
  }, {
    key: "wu",
    value: function wu(t) {
      var i = new Ci(t.from, t.to);
      this.vu(i);
    }
  }, {
    key: "ns",
    value: function ns(t) {
      return void 0 !== this.ul.timeFormatter ? this.ul.timeFormatter(t.originalTime) : this.Yo.formatHorzItem(t.time);
    }
  }, {
    key: "R_",
    value: function R_() {
      if (!this.ys.ignoreWhitespaceIndices) return;
      this.S_.clear();
      var t = this.ts.js();
      var _iterator17 = _createForOfIteratorHelper(t),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _i36 = _step17.value;
          var _iterator18 = _createForOfIteratorHelper(_i36.ma()),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _t34 = _step18.value;
              this.S_.set(_t34, !0);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      this.C_++;
    }
  }, {
    key: "su",
    value: function su() {
      var t = this.ts.N().handleScroll,
        i = this.ts.N().handleScale;
      return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
    }
  }, {
    key: "W_",
    value: function W_() {
      return 0 === this.d_.length ? null : 0;
    }
  }, {
    key: "F_",
    value: function F_() {
      return 0 === this.d_.length ? null : this.d_.length - 1;
    }
  }, {
    key: "gu",
    value: function gu(t) {
      return (this.no - 1 - t) / this.P_;
    }
  }, {
    key: "K_",
    value: function K_(t) {
      var i = this.gu(t),
        s = this.Y_() + this.k_ - i;
      return Math.round(1e6 * s) / 1e6;
    }
  }, {
    key: "tu",
    value: function tu(t) {
      var i = this.P_;
      this.P_ = t, this.U_(), i !== this.P_ && (this.m_ = !0, this.Mu());
    }
  }, {
    key: "z_",
    value: function z_() {
      if (!this.m_) return;
      if (this.m_ = !1, this.Zi()) return void this.bu(Pi.u_());
      var t = this.Y_(),
        i = this.no / this.P_,
        s = this.k_ + t,
        n = new Ci(s - i + 1, s);
      this.bu(new Pi(n));
    }
  }, {
    key: "U_",
    value: function U_() {
      var t = ai(this.P_, this.xu(), this.Su());
      this.P_ !== t && (this.P_ = t, this.m_ = !0);
    }
  }, {
    key: "Su",
    value: function Su() {
      return this.ys.maxBarSpacing > 0 ? this.ys.maxBarSpacing : .5 * this.no;
    }
  }, {
    key: "xu",
    value: function xu() {
      return this.ys.fixLeftEdge && this.ys.fixRightEdge && 0 !== this.d_.length ? this.no / this.d_.length : this.ys.minBarSpacing;
    }
  }, {
    key: "q_",
    value: function q_() {
      var t = this.Cu();
      null !== t && this.k_ < t && (this.k_ = t, this.m_ = !0);
      var i = this.yu();
      this.k_ > i && (this.k_ = i, this.m_ = !0);
    }
  }, {
    key: "Cu",
    value: function Cu() {
      var t = this.W_(),
        i = this.c_;
      if (null === t || null === i) return null;
      return t - i - 1 + (this.ys.fixLeftEdge ? this.no / this.P_ : Math.min(2, this.d_.length));
    }
  }, {
    key: "yu",
    value: function yu() {
      return this.ys.fixRightEdge ? 0 : this.no / this.P_ - Math.min(2, this.d_.length);
    }
  }, {
    key: "au",
    value: function au() {
      this.b_ = {
        Q_: this.Q_(),
        iu: this.iu()
      };
    }
  }, {
    key: "lu",
    value: function lu() {
      this.b_ = null;
    }
  }, {
    key: "nu",
    value: function nu(t) {
      var _this31 = this;
      var i = this.p_.get(t.weight);
      return void 0 === i && (i = new Si(function (t) {
        return _this31.ku(t);
      }, this.Yo), this.p_.set(t.weight, i)), i.jo(t);
    }
  }, {
    key: "ku",
    value: function ku(t) {
      return this.Yo.formatTickmark(t, this.ul);
    }
  }, {
    key: "bu",
    value: function bu(t) {
      var i = this.v_;
      this.v_ = t, yi(i.o_(), this.v_.o_()) || this.w_.p(), yi(i.__(), this.v_.__()) || this.g_.p(), this.Mu();
    }
  }, {
    key: "Mu",
    value: function Mu() {
      this.x_ = null;
    }
  }, {
    key: "V_",
    value: function V_() {
      this.Mu(), this.p_.clear();
    }
  }, {
    key: "T_",
    value: function T_() {
      this.Yo.updateFormatter(this.ul);
    }
  }, {
    key: "I_",
    value: function I_() {
      if (!this.ys.fixLeftEdge) return;
      var t = this.W_();
      if (null === t) return;
      var i = this.ye();
      if (null === i) return;
      var s = i.Uh() - t;
      if (s < 0) {
        var _t35 = this.k_ - s - 1;
        this.fn(_t35);
      }
      this.U_();
    }
  }, {
    key: "A_",
    value: function A_() {
      this.q_(), this.U_();
    }
  }, {
    key: "X_",
    value: function X_(t) {
      return !this.ys.ignoreWhitespaceIndices || this.S_.get(t) || !1;
    }
  }, {
    key: "G_",
    value: function G_(t) {
      var i = /*#__PURE__*/_regeneratorRuntime().mark(function _callee(t) {
          var i, s, n;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                i = Math.round(t), s = i < t;
                n = 1;
              case 2:
                if (!s) {
                  _context.next = 9;
                  break;
                }
                _context.next = 5;
                return i + n;
              case 5:
                _context.next = 7;
                return i - n;
              case 7:
                _context.next = 13;
                break;
              case 9:
                _context.next = 11;
                return i - n;
              case 11:
                _context.next = 13;
                return i + n;
              case 13:
                n++;
              case 14:
                _context.next = 2;
                break;
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })(t),
        s = this.F_();
      for (; s;) {
        var _t36 = i.next().value;
        if (this.S_.get(_t36)) return _t36;
        if (_t36 < 0 || _t36 > s) break;
      }
      return t;
    }
  }]);
}();
var Di, Vi, Ii, Ai, Bi;
!function (t) {
  t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
}(Di || (Di = {}));
var Ei = /*#__PURE__*/function () {
  function Ei(t, i, s) {
    _classCallCheck(this, Ei);
    this.Pu = [], this.Tu = [], this.no = 0, this.Ru = null, this.Du = new d(), this.Vu = new d(), this.Iu = null, this.Au = t, this.ys = i, this.Yo = s, this.cl = new P(this.ys.layout.colorParsers), this.Bu = new C(this), this.uh = new Ri(this, i.timeScale, this.ys.localization, s), this.Ct = new K(this, i.crosshair), this.Eu = new jt(i.crosshair), this.zu(0), this.Pu[0].po(2e3), this.Lu = this.Ou(0), this.Nu = this.Ou(1);
  }
  return _createClass(Ei, [{
    key: "Ah",
    value: function Ah() {
      this.Wu(G.gn());
    }
  }, {
    key: "ar",
    value: function ar() {
      this.Wu(G.wn());
    }
  }, {
    key: "Xh",
    value: function Xh() {
      this.Wu(new G(1));
    }
  }, {
    key: "Bh",
    value: function Bh(t) {
      var i = this.Fu(t);
      this.Wu(i);
    }
  }, {
    key: "Hu",
    value: function Hu() {
      return this.Ru;
    }
  }, {
    key: "Uu",
    value: function Uu(t) {
      var _this$Ru, _this$Ru2, _t$Fo;
      if (((_this$Ru = this.Ru) === null || _this$Ru === void 0 ? void 0 : _this$Ru.Wo) === (t === null || t === void 0 ? void 0 : t.Wo) && ((_this$Ru2 = this.Ru) === null || _this$Ru2 === void 0 || (_this$Ru2 = _this$Ru2.Fo) === null || _this$Ru2 === void 0 ? void 0 : _this$Ru2.Zn) === (t === null || t === void 0 || (_t$Fo = t.Fo) === null || _t$Fo === void 0 ? void 0 : _t$Fo.Zn)) return;
      var i = this.Ru;
      this.Ru = t, null !== i && this.Bh(i.Wo), null !== t && t.Wo !== (i === null || i === void 0 ? void 0 : i.Wo) && this.Bh(t.Wo);
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      f(this.ys, t), this.Pu.forEach(function (i) {
        return i.uo(t);
      }), void 0 !== t.timeScale && this.uh.hr(t.timeScale), void 0 !== t.localization && this.uh.D_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Du.p(), this.Lu = this.Ou(0), this.Nu = this.Ou(1), this.Ah();
    }
  }, {
    key: "$u",
    value: function $u(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var n = this.Pu[s];
      if (void 0 === n) return;
      if ("left" === t) return f(this.ys, {
        leftPriceScale: i
      }), n.uo({
        leftPriceScale: i
      }), this.Du.p(), void this.Ah();
      if ("right" === t) return f(this.ys, {
        rightPriceScale: i
      }), n.uo({
        rightPriceScale: i
      }), this.Du.p(), void this.Ah();
      var e = this.qu(t, s);
      null !== e && (e.Wt.hr(i), this.Du.p());
    }
  }, {
    key: "qu",
    value: function qu(t, i) {
      var s = this.Pu[i];
      if (void 0 === s) return null;
      var n = s.co(t);
      return null !== n ? {
        Us: s,
        Wt: n
      } : null;
    }
  }, {
    key: "Bt",
    value: function Bt() {
      return this.uh;
    }
  }, {
    key: "$s",
    value: function $s() {
      return this.Pu;
    }
  }, {
    key: "Yu",
    value: function Yu() {
      return this.Ct;
    }
  }, {
    key: "ju",
    value: function ju() {
      return this.Vu;
    }
  }, {
    key: "Zu",
    value: function Zu(t, i) {
      t.Cl(i), this.J_();
    }
  }, {
    key: "vo",
    value: function vo(t) {
      this.no = t, this.uh.vo(this.no), this.Pu.forEach(function (i) {
        return i.vo(t);
      }), this.J_();
    }
  }, {
    key: "Ku",
    value: function Ku(t) {
      1 !== this.Pu.length && (o(t >= 0 && t < this.Pu.length, "Invalid pane index"), this.Pu.splice(t, 1), this.Ah());
    }
  }, {
    key: "Xu",
    value: function Xu(t, i) {
      if (this.Pu.length < 2) return;
      o(t >= 0 && t < this.Pu.length, "Invalid pane index");
      var s = this.Pu[t],
        n = this.Pu.reduce(function (t, i) {
          return t + i.fo();
        }, 0),
        e = this.Pu.reduce(function (t, i) {
          return t + i.$t();
        }, 0),
        r = e - 30 * (this.Pu.length - 1);
      i = Math.min(r, Math.max(30, i));
      var h = n / e,
        a = s.$t();
      s.po(i * h);
      var l = i - a,
        _ = this.Pu.length - 1;
      var _iterator19 = _createForOfIteratorHelper(this.Pu),
        _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var _t37 = _step19.value;
          if (_t37 !== s) {
            var _i37 = Math.min(r, Math.max(30, _t37.$t() - l / _));
            l -= _t37.$t() - _i37, _ -= 1;
            var _s22 = _i37 * h;
            _t37.po(_s22);
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
      this.Ah();
    }
  }, {
    key: "Gu",
    value: function Gu(t, i) {
      o(t >= 0 && t < this.Pu.length && i >= 0 && i < this.Pu.length, "Invalid pane index");
      var s = this.Pu[t],
        n = this.Pu[i];
      this.Pu[t] = n, this.Pu[i] = s, this.Ah();
    }
  }, {
    key: "ko",
    value: function ko(t, i, s) {
      t.ko(i, s);
    }
  }, {
    key: "Po",
    value: function Po(t, i, s) {
      t.Po(i, s), this.Eh(), this.Wu(this.Ju(t, 2));
    }
  }, {
    key: "To",
    value: function To(t, i) {
      t.To(i), this.Wu(this.Ju(t, 2));
    }
  }, {
    key: "Ro",
    value: function Ro(t, i, s) {
      i.wl() || t.Ro(i, s);
    }
  }, {
    key: "Do",
    value: function Do(t, i, s) {
      i.wl() || (t.Do(i, s), this.Eh(), this.Wu(this.Ju(t, 2)));
    }
  }, {
    key: "Vo",
    value: function Vo(t, i) {
      i.wl() || (t.Vo(i), this.Wu(this.Ju(t, 2)));
    }
  }, {
    key: "Ao",
    value: function Ao(t, i) {
      t.Ao(i), this.Wu(this.Ju(t, 2));
    }
  }, {
    key: "Qu",
    value: function Qu(t) {
      this.uh.Ul(t);
    }
  }, {
    key: "tc",
    value: function tc(t, i) {
      var s = this.Bt();
      if (s.Zi() || 0 === i) return;
      var n = s.Qi();
      t = Math.max(1, Math.min(t, n)), s.hu(t, i), this.J_();
    }
  }, {
    key: "sc",
    value: function sc(t) {
      this.nc(0), this.ec(t), this.rc();
    }
  }, {
    key: "hc",
    value: function hc(t) {
      this.uh.$l(t), this.J_();
    }
  }, {
    key: "ac",
    value: function ac() {
      this.uh.ql(), this.ar();
    }
  }, {
    key: "nc",
    value: function nc(t) {
      this.uh.Yl(t);
    }
  }, {
    key: "ec",
    value: function ec(t) {
      this.uh.jl(t), this.J_();
    }
  }, {
    key: "rc",
    value: function rc() {
      this.uh.Zl(), this.ar();
    }
  }, {
    key: "js",
    value: function js() {
      return this.Tu;
    }
  }, {
    key: "lc",
    value: function lc(t, i, s, n, e) {
      this.Ct.Vs(t, i);
      var r = NaN,
        h = this.uh.Z_(t, !0);
      var a = this.uh.ye();
      null !== a && (h = Math.min(Math.max(a.Uh(), h), a.bi()));
      var l = n.Ps(),
        o = l.zt();
      if (null !== o && (r = l.Ts(i, o)), r = this.Eu.Ma(r, h, n), this.Ct.Es(h, r, n), this.Xh(), !e) {
        var _e11 = xi(n, t, i);
        this.Uu(_e11 && {
          Wo: _e11.Wo,
          Fo: _e11.Fo,
          Uo: _e11.Uo || null
        }), this.Vu.p(this.Ct.At(), {
          x: t,
          y: i
        }, s);
      }
    }
  }, {
    key: "oc",
    value: function oc(t, i, s) {
      var n = s.Ps(),
        e = n.zt(),
        r = n.Nt(t, u(e)),
        h = this.uh.B_(i, !0),
        a = this.uh.qt(u(h));
      this.lc(a, r, null, s, !0);
    }
  }, {
    key: "_c",
    value: function _c(t) {
      this.Yu().Ls(), this.Xh(), t || this.Vu.p(null, null, null);
    }
  }, {
    key: "Eh",
    value: function Eh() {
      var t = this.Ct.Us();
      if (null !== t) {
        var _i38 = this.Ct.As(),
          _s23 = this.Ct.Bs();
        this.lc(_i38, _s23, null, t);
      }
      this.Ct.Ns();
    }
  }, {
    key: "uc",
    value: function uc(t, i, s) {
      var n = this.uh.Rs(0);
      void 0 !== i && void 0 !== s && this.uh.kt(i, s);
      var e = this.uh.Rs(0),
        r = this.uh.Y_(),
        h = this.uh.ye();
      if (null !== h && null !== n && null !== e) {
        var _i39 = h.Te(r),
          _a10 = this.Yo.key(n) > this.Yo.key(e),
          _l5 = null !== t && t > r && !_a10,
          _o4 = this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement,
          _7 = _i39 && (!(void 0 === s) || _o4) && this.uh.N().shiftVisibleRangeOnNewBar;
        if (_l5 && !_7) {
          var _i40 = t - r;
          this.uh.fn(this.uh.iu() - _i40);
        }
      }
      this.uh.ru(t);
    }
  }, {
    key: "Lh",
    value: function Lh(t) {
      null !== t && t.Eo();
    }
  }, {
    key: "Hn",
    value: function Hn(t) {
      if (function (t) {
        return t instanceof wi;
      }(t)) return t;
      var i = this.Pu.find(function (i) {
        return i.Dt().includes(t);
      });
      return void 0 === i ? null : i;
    }
  }, {
    key: "J_",
    value: function J_() {
      this.Pu.forEach(function (t) {
        return t.Eo();
      }), this.Eh();
    }
  }, {
    key: "m",
    value: function m() {
      this.Pu.forEach(function (t) {
        return t.m();
      }), this.Pu.length = 0, this.ys.localization.priceFormatter = void 0, this.ys.localization.percentageFormatter = void 0, this.ys.localization.timeFormatter = void 0;
    }
  }, {
    key: "cc",
    value: function cc() {
      return this.Bu;
    }
  }, {
    key: "Yn",
    value: function Yn() {
      return this.Bu.N();
    }
  }, {
    key: "do",
    value: function _do() {
      return this.Du;
    }
  }, {
    key: "dc",
    value: function dc(t, i) {
      var s = this.zu(i);
      this.fc(t, s), this.Tu.push(t), 1 === this.Tu.length ? this.Ah() : this.ar();
    }
  }, {
    key: "vc",
    value: function vc(t) {
      var i = this.Hn(t),
        s = this.Tu.indexOf(t);
      o(-1 !== s, "Series not found");
      var n = u(i);
      this.Tu.splice(s, 1), n.Wl(t), t.m && t.m(), this.uh.R_(), this.mc(n);
    }
  }, {
    key: "Ih",
    value: function Ih(t, i) {
      var s = u(this.Hn(t));
      s.Wl(t), s.Ol(t, i, u(t.hs()));
    }
  }, {
    key: "mu",
    value: function mu() {
      var t = G.wn();
      t.rn(), this.Wu(t);
    }
  }, {
    key: "wc",
    value: function wc(t) {
      var i = G.wn();
      i.ln(t), this.Wu(i);
    }
  }, {
    key: "cn",
    value: function cn() {
      var t = G.wn();
      t.cn(), this.Wu(t);
    }
  }, {
    key: "dn",
    value: function dn(t) {
      var i = G.wn();
      i.dn(t), this.Wu(i);
    }
  }, {
    key: "fn",
    value: function fn(t) {
      var i = G.wn();
      i.fn(t), this.Wu(i);
    }
  }, {
    key: "_n",
    value: function _n(t) {
      var i = G.wn();
      i._n(t), this.Wu(i);
    }
  }, {
    key: "hn",
    value: function hn() {
      var t = G.wn();
      t.hn(), this.Wu(t);
    }
  }, {
    key: "gc",
    value: function gc() {
      return this.ys.rightPriceScale.visible ? "right" : "left";
    }
  }, {
    key: "Mc",
    value: function Mc(t, i) {
      o(i >= 0, "Index should be greater or equal to 0");
      if (i === this.bc(t)) return;
      var s = u(this.Hn(t));
      s.Wl(t);
      var n = this.zu(i);
      this.fc(t, n), 0 === s.ba().length && this.mc(s);
    }
  }, {
    key: "xc",
    value: function xc() {
      return this.Nu;
    }
  }, {
    key: "$",
    value: function $() {
      return this.Lu;
    }
  }, {
    key: "Ut",
    value: function Ut(t) {
      var i = this.Nu,
        s = this.Lu;
      if (i === s) return i;
      if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Iu || this.Iu.mr !== s || this.Iu.wr !== i) this.Iu = {
        mr: s,
        wr: i,
        Sc: new Map()
      };else {
        var _i41 = this.Iu.Sc.get(t);
        if (void 0 !== _i41) return _i41;
      }
      var n = this.cl.tt(s, i, t / 100);
      return this.Iu.Sc.set(t, n), n;
    }
  }, {
    key: "Cc",
    value: function Cc(t) {
      return this.Pu.indexOf(t);
    }
  }, {
    key: "Ki",
    value: function Ki() {
      return this.cl;
    }
  }, {
    key: "zu",
    value: function zu(t) {
      if (o(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.Pu.length, t)) < this.Pu.length) return this.Pu[t];
      var i = new wi(this.uh, this);
      this.Pu.push(i);
      var s = G.gn();
      return s.Qs(t, {
        tn: 0,
        sn: !0
      }), this.Wu(s), i;
    }
  }, {
    key: "bc",
    value: function bc(t) {
      return this.Pu.findIndex(function (i) {
        return i.wo().includes(t);
      });
    }
  }, {
    key: "Ju",
    value: function Ju(t, i) {
      var s = new G(i);
      if (null !== t) {
        var _n14 = this.Pu.indexOf(t);
        s.Qs(_n14, {
          tn: i
        });
      }
      return s;
    }
  }, {
    key: "Fu",
    value: function Fu(t, i) {
      return void 0 === i && (i = 2), this.Ju(this.Hn(t), i);
    }
  }, {
    key: "Wu",
    value: function Wu(t) {
      this.Au && this.Au(t), this.Pu.forEach(function (t) {
        return t.Lo().lr().kt();
      });
    }
  }, {
    key: "fc",
    value: function fc(t, i) {
      var s = t.N().priceScaleId,
        n = void 0 !== s ? s : this.gc();
      i.Ol(t, n), X(n) || t.hr(t.N());
    }
  }, {
    key: "Ou",
    value: function Ou(t) {
      var i = this.ys.layout;
      return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
    }
  }, {
    key: "mc",
    value: function mc(t) {
      0 === t.ba().length && this.Pu.length > 1 && (this.Pu.splice(this.Cc(t), 1), this.Ah());
    }
  }]);
}();
function zi(t) {
  return !p(t) && !m(t);
}
function Li(t) {
  return p(t);
}
!function (t) {
  t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(Vi || (Vi = {})), function (t) {
  t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
}(Ii || (Ii = {})), function (t) {
  t.Solid = "solid", t.VerticalGradient = "gradient";
}(Ai || (Ai = {})), function (t) {
  t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(Bi || (Bi = {}));
var Oi = function Oi(t) {
  return t.getUTCFullYear();
};
function Ni(t, i, s) {
  return i.replace(/yyyy/g, function (t) {
    return Q(Oi(t), 4);
  }(t)).replace(/yy/g, function (t) {
    return Q(Oi(t) % 100, 2);
  }(t)).replace(/MMMM/g, function (t, i) {
    return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
      month: "long"
    });
  }(t, s)).replace(/MMM/g, function (t, i) {
    return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
      month: "short"
    });
  }(t, s)).replace(/MM/g, function (t) {
    return Q(function (t) {
      return t.getUTCMonth() + 1;
    }(t), 2);
  }(t)).replace(/dd/g, function (t) {
    return Q(function (t) {
      return t.getUTCDate();
    }(t), 2);
  }(t));
}
var Wi = /*#__PURE__*/function () {
  function Wi() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yyyy-MM-dd";
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
    _classCallCheck(this, Wi);
    this.yc = t, this.kc = i;
  }
  return _createClass(Wi, [{
    key: "jo",
    value: function jo(t) {
      return Ni(t, this.yc, this.kc);
    }
  }]);
}();
var Fi = /*#__PURE__*/function () {
  function Fi(t) {
    _classCallCheck(this, Fi);
    this.Pc = t || "%h:%m:%s";
  }
  return _createClass(Fi, [{
    key: "jo",
    value: function jo(t) {
      return this.Pc.replace("%h", Q(t.getUTCHours(), 2)).replace("%m", Q(t.getUTCMinutes(), 2)).replace("%s", Q(t.getUTCSeconds(), 2));
    }
  }]);
}();
var Hi = {
  Tc: "yyyy-MM-dd",
  Rc: "%h:%m:%s",
  Dc: " ",
  Vc: "default"
};
var Ui = /*#__PURE__*/function () {
  function Ui() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Ui);
    var i = _objectSpread(_objectSpread({}, Hi), t);
    this.Ic = new Wi(i.Tc, i.Vc), this.Ac = new Fi(i.Rc), this.Bc = i.Dc;
  }
  return _createClass(Ui, [{
    key: "jo",
    value: function jo(t) {
      return "".concat(this.Ic.jo(t)).concat(this.Bc).concat(this.Ac.jo(t));
    }
  }]);
}();
function $i(t) {
  return 60 * t * 60 * 1e3;
}
function qi(t) {
  return 60 * t * 1e3;
}
var Yi = [{
  Ec: (ji = 1, 1e3 * ji),
  zc: 10
}, {
  Ec: qi(1),
  zc: 20
}, {
  Ec: qi(5),
  zc: 21
}, {
  Ec: qi(30),
  zc: 22
}, {
  Ec: $i(1),
  zc: 30
}, {
  Ec: $i(3),
  zc: 31
}, {
  Ec: $i(6),
  zc: 32
}, {
  Ec: $i(12),
  zc: 33
}];
var ji;
function Zi(t, i) {
  if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
  if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
  if (t.getUTCDate() !== i.getUTCDate()) return 50;
  for (var _s24 = Yi.length - 1; _s24 >= 0; --_s24) if (Math.floor(i.getTime() / Yi[_s24].Ec) !== Math.floor(t.getTime() / Yi[_s24].Ec)) return Yi[_s24].zc;
  return 0;
}
function Ki(t) {
  var i = t;
  if (m(t) && (i = Gi(t)), !zi(i)) throw new Error("time must be of type BusinessDay");
  var s = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
  return {
    Lc: Math.round(s.getTime() / 1e3),
    Oc: i
  };
}
function Xi(t) {
  if (!Li(t)) throw new Error("time must be of type isUTCTimestamp");
  return {
    Lc: t
  };
}
function Gi(t) {
  var i = new Date(t);
  if (isNaN(i.getTime())) throw new Error("Invalid date string=".concat(t, ", expected format=yyyy-mm-dd"));
  return {
    day: i.getUTCDate(),
    month: i.getUTCMonth() + 1,
    year: i.getUTCFullYear()
  };
}
function Ji(t) {
  m(t.time) && (t.time = Gi(t.time));
}
var Qi = /*#__PURE__*/function () {
  function Qi() {
    _classCallCheck(this, Qi);
  }
  return _createClass(Qi, [{
    key: "options",
    value: function options() {
      return this.ys;
    }
  }, {
    key: "setOptions",
    value: function setOptions(t) {
      this.ys = t, this.updateFormatter(t.localization);
    }
  }, {
    key: "preprocessData",
    value: function preprocessData(t) {
      Array.isArray(t) ? function (t) {
        t.forEach(Ji);
      }(t) : Ji(t);
    }
  }, {
    key: "createConverterToInternalObj",
    value: function createConverterToInternalObj(t) {
      return u(function (t) {
        return 0 === t.length ? null : zi(t[0].time) || m(t[0].time) ? Ki : Xi;
      }(t));
    }
  }, {
    key: "key",
    value: function key(t) {
      return "object" == _typeof(t) && "Lc" in t ? t.Lc : this.key(this.convertHorzItemToInternal(t));
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(t) {
      var i = t;
      return void 0 === i.Oc ? new Date(1e3 * i.Lc).getTime() : new Date(Date.UTC(i.Oc.year, i.Oc.month - 1, i.Oc.day)).getTime();
    }
  }, {
    key: "convertHorzItemToInternal",
    value: function convertHorzItemToInternal(t) {
      return Li(i = t) ? Xi(i) : zi(i) ? Ki(i) : Ki(Gi(i));
      var i;
    }
  }, {
    key: "updateFormatter",
    value: function updateFormatter(t) {
      if (!this.ys) return;
      var i = t.dateFormat;
      this.ys.timeScale.timeVisible ? this.Nc = new Ui({
        Tc: i,
        Rc: this.ys.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
        Dc: "   ",
        Vc: t.locale
      }) : this.Nc = new Wi(i, t.locale);
    }
  }, {
    key: "formatHorzItem",
    value: function formatHorzItem(t) {
      var i = t;
      return this.Nc.jo(new Date(1e3 * i.Lc));
    }
  }, {
    key: "formatTickmark",
    value: function formatTickmark(t, i) {
      var s = function (t, i, s) {
          switch (t) {
            case 0:
            case 10:
              return i ? s ? 4 : 3 : 2;
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
            case 33:
              return i ? 3 : 2;
            case 50:
              return 2;
            case 60:
              return 1;
            case 70:
              return 0;
          }
        }(t.weight, this.ys.timeScale.timeVisible, this.ys.timeScale.secondsVisible),
        n = this.ys.timeScale;
      if (void 0 !== n.tickMarkFormatter) {
        var _e12 = n.tickMarkFormatter(t.originalTime, s, i.locale);
        if (null !== _e12) return _e12;
      }
      return function (t, i, s) {
        var n = {};
        switch (i) {
          case 0:
            n.year = "numeric";
            break;
          case 1:
            n.month = "short";
            break;
          case 2:
            n.day = "numeric";
            break;
          case 3:
            n.hour12 = !1, n.hour = "2-digit", n.minute = "2-digit";
            break;
          case 4:
            n.hour12 = !1, n.hour = "2-digit", n.minute = "2-digit", n.second = "2-digit";
        }
        var e = void 0 === t.Oc ? new Date(1e3 * t.Lc) : new Date(Date.UTC(t.Oc.year, t.Oc.month - 1, t.Oc.day));
        return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(s, n);
      }(t.time, s, i.locale);
    }
  }, {
    key: "maxTickMarkWeight",
    value: function maxTickMarkWeight(t) {
      var i = t.reduce(Ti, t[0]).weight;
      return i > 30 && i < 50 && (i = 30), i;
    }
  }, {
    key: "fillWeightsForPoints",
    value: function fillWeightsForPoints(t, i) {
      !function (t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (0 === t.length) return;
        var s = 0 === i ? null : t[i - 1].time.Lc,
          n = null !== s ? new Date(1e3 * s) : null,
          e = 0;
        for (var _r11 = i; _r11 < t.length; ++_r11) {
          var _i42 = t[_r11],
            _h6 = new Date(1e3 * _i42.time.Lc);
          null !== n && (_i42.timeWeight = Zi(_h6, n)), e += _i42.time.Lc - (s || _i42.time.Lc), s = _i42.time.Lc, n = _h6;
        }
        if (0 === i && t.length > 1) {
          var _i43 = Math.ceil(e / (t.length - 1)),
            _s25 = new Date(1e3 * (t[0].time.Lc - _i43));
          t[0].timeWeight = Zi(new Date(1e3 * t[0].time.Lc), _s25);
        }
      }(t, i);
    }
  }], [{
    key: "Wc",
    value: function Wc(t) {
      return f({
        localization: {
          dateFormat: "dd MMM 'yy"
        }
      }, t !== null && t !== void 0 ? t : {});
    }
  }]);
}();
var ts = "undefined" != typeof window;
function is() {
  return !!ts && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function ss() {
  return !!ts && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function ns(t) {
  return t + t % 2;
}
function es(t) {
  ts && void 0 !== window.chrome && t.addEventListener("mousedown", function (t) {
    if (1 === t.button) return t.preventDefault(), !1;
  });
}
var rs = /*#__PURE__*/function () {
  function rs(t, i, s) {
    var _this32 = this;
    _classCallCheck(this, rs);
    this.Fc = 0, this.Hc = null, this.Uc = {
      _t: Number.NEGATIVE_INFINITY,
      ut: Number.POSITIVE_INFINITY
    }, this.$c = 0, this.qc = null, this.Yc = {
      _t: Number.NEGATIVE_INFINITY,
      ut: Number.POSITIVE_INFINITY
    }, this.jc = null, this.Zc = !1, this.Kc = null, this.Xc = null, this.Gc = !1, this.Jc = !1, this.Qc = !1, this.td = null, this.sd = null, this.nd = null, this.ed = null, this.rd = null, this.hd = null, this.ad = null, this.ld = 0, this.od = !1, this._d = !1, this.ud = !1, this.dd = 0, this.fd = null, this.pd = !ss(), this.vd = function (t) {
      _this32.md(t);
    }, this.wd = function (t) {
      if (_this32.gd(t)) {
        var _i44 = _this32.Md(t);
        if (++_this32.$c, _this32.qc && _this32.$c > 1) {
          var _this32$xd = _this32.xd(ls(t), _this32.Yc),
            _s26 = _this32$xd.bd;
          _s26 < 30 && !_this32.Qc && _this32.Sd(_i44, _this32.yd.Cd), _this32.kd();
        }
      } else {
        var _i45 = _this32.Md(t);
        if (++_this32.Fc, _this32.Hc && _this32.Fc > 1) {
          var _this32$xd2 = _this32.xd(ls(t), _this32.Uc),
            _s27 = _this32$xd2.bd;
          _s27 < 5 && !_this32.Jc && _this32.Pd(_i45, _this32.yd.Td), _this32.Rd();
        }
      }
    }, this.Dd = t, this.yd = i, this.ys = s, this.Vd();
  }
  return _createClass(rs, [{
    key: "m",
    value: function m() {
      null !== this.td && (this.td(), this.td = null), null !== this.sd && (this.sd(), this.sd = null), null !== this.ed && (this.ed(), this.ed = null), null !== this.rd && (this.rd(), this.rd = null), null !== this.hd && (this.hd(), this.hd = null), null !== this.nd && (this.nd(), this.nd = null), this.Id(), this.Rd();
    }
  }, {
    key: "Ad",
    value: function Ad(t) {
      var _this33 = this;
      this.ed && this.ed();
      var i = this.Bd.bind(this);
      if (this.ed = function () {
        _this33.Dd.removeEventListener("mousemove", i);
      }, this.Dd.addEventListener("mousemove", i), this.gd(t)) return;
      var s = this.Md(t);
      this.Pd(s, this.yd.Ed), this.pd = !0;
    }
  }, {
    key: "Rd",
    value: function Rd() {
      null !== this.Hc && clearTimeout(this.Hc), this.Fc = 0, this.Hc = null, this.Uc = {
        _t: Number.NEGATIVE_INFINITY,
        ut: Number.POSITIVE_INFINITY
      };
    }
  }, {
    key: "kd",
    value: function kd() {
      null !== this.qc && clearTimeout(this.qc), this.$c = 0, this.qc = null, this.Yc = {
        _t: Number.NEGATIVE_INFINITY,
        ut: Number.POSITIVE_INFINITY
      };
    }
  }, {
    key: "Bd",
    value: function Bd(t) {
      if (this.ud || null !== this.Xc) return;
      if (this.gd(t)) return;
      var i = this.Md(t);
      this.Pd(i, this.yd.zd), this.pd = !0;
    }
  }, {
    key: "Ld",
    value: function Ld(t) {
      var i = _s(t.changedTouches, u(this.fd));
      if (null === i) return;
      if (this.dd = os(t), null !== this.ad) return;
      if (this._d) return;
      this.od = !0;
      var s = this.xd(ls(i), u(this.Xc)),
        n = s.Od,
        e = s.Nd,
        r = s.bd;
      if (this.Gc || !(r < 5)) {
        if (!this.Gc) {
          var _t38 = .5 * n,
            _i46 = e >= _t38 && !this.ys.Wd(),
            _s28 = _t38 > e && !this.ys.Fd();
          _i46 || _s28 || (this._d = !0), this.Gc = !0, this.Qc = !0, this.Id(), this.kd();
        }
        if (!this._d) {
          var _s29 = this.Md(t, i);
          this.Sd(_s29, this.yd.Hd), as(t);
        }
      }
    }
  }, {
    key: "Ud",
    value: function Ud(t) {
      if (0 !== t.button) return;
      var i = this.xd(ls(t), u(this.Kc)),
        s = i.bd;
      if (s >= 5 && (this.Jc = !0, this.Rd()), this.Jc) {
        var _i47 = this.Md(t);
        this.Pd(_i47, this.yd.$d);
      }
    }
  }, {
    key: "xd",
    value: function xd(t, i) {
      var s = Math.abs(i._t - t._t),
        n = Math.abs(i.ut - t.ut);
      return {
        Od: s,
        Nd: n,
        bd: s + n
      };
    }
  }, {
    key: "qd",
    value: function qd(t) {
      var i = _s(t.changedTouches, u(this.fd));
      if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
      this.fd = null, this.dd = os(t), this.Id(), this.Xc = null, this.hd && (this.hd(), this.hd = null);
      var s = this.Md(t, i);
      if (this.Sd(s, this.yd.Yd), ++this.$c, this.qc && this.$c > 1) {
        var _this$xd = this.xd(ls(i), this.Yc),
          _t39 = _this$xd.bd;
        _t39 < 30 && !this.Qc && this.Sd(s, this.yd.Cd), this.kd();
      } else this.Qc || (this.Sd(s, this.yd.jd), this.yd.jd && as(t));
      0 === this.$c && as(t), 0 === t.touches.length && this.Zc && (this.Zc = !1, as(t));
    }
  }, {
    key: "md",
    value: function md(t) {
      if (0 !== t.button) return;
      var i = this.Md(t);
      if (this.Kc = null, this.ud = !1, this.rd && (this.rd(), this.rd = null), is()) {
        this.Dd.ownerDocument.documentElement.removeEventListener("mouseleave", this.vd);
      }
      if (!this.gd(t)) if (this.Pd(i, this.yd.Zd), ++this.Fc, this.Hc && this.Fc > 1) {
        var _this$xd2 = this.xd(ls(t), this.Uc),
          _s30 = _this$xd2.bd;
        _s30 < 5 && !this.Jc && this.Pd(i, this.yd.Td), this.Rd();
      } else this.Jc || this.Pd(i, this.yd.Kd);
    }
  }, {
    key: "Id",
    value: function Id() {
      null !== this.jc && (clearTimeout(this.jc), this.jc = null);
    }
  }, {
    key: "Xd",
    value: function Xd(t) {
      if (null !== this.fd) return;
      var i = t.changedTouches[0];
      this.fd = i.identifier, this.dd = os(t);
      var s = this.Dd.ownerDocument.documentElement;
      this.Qc = !1, this.Gc = !1, this._d = !1, this.Xc = ls(i), this.hd && (this.hd(), this.hd = null);
      {
        var _i48 = this.Ld.bind(this),
          _n15 = this.qd.bind(this);
        this.hd = function () {
          s.removeEventListener("touchmove", _i48), s.removeEventListener("touchend", _n15);
        }, s.addEventListener("touchmove", _i48, {
          passive: !1
        }), s.addEventListener("touchend", _n15, {
          passive: !1
        }), this.Id(), this.jc = setTimeout(this.Gd.bind(this, t), 240);
      }
      var n = this.Md(t, i);
      this.Sd(n, this.yd.Jd), this.qc || (this.$c = 0, this.qc = setTimeout(this.kd.bind(this), 500), this.Yc = ls(i));
    }
  }, {
    key: "Qd",
    value: function Qd(t) {
      if (0 !== t.button) return;
      var i = this.Dd.ownerDocument.documentElement;
      is() && i.addEventListener("mouseleave", this.vd), this.Jc = !1, this.Kc = ls(t), this.rd && (this.rd(), this.rd = null);
      {
        var _t40 = this.Ud.bind(this),
          _s31 = this.md.bind(this);
        this.rd = function () {
          i.removeEventListener("mousemove", _t40), i.removeEventListener("mouseup", _s31);
        }, i.addEventListener("mousemove", _t40), i.addEventListener("mouseup", _s31);
      }
      if (this.ud = !0, this.gd(t)) return;
      var s = this.Md(t);
      this.Pd(s, this.yd.tf), this.Hc || (this.Fc = 0, this.Hc = setTimeout(this.Rd.bind(this), 500), this.Uc = ls(t));
    }
  }, {
    key: "Vd",
    value: function Vd() {
      var _this34 = this;
      this.Dd.addEventListener("mouseenter", this.Ad.bind(this)), this.Dd.addEventListener("touchcancel", this.Id.bind(this));
      {
        var _t41 = this.Dd.ownerDocument,
          _i49 = function _i49(t) {
            _this34.yd["if"] && (t.composed && _this34.Dd.contains(t.composedPath()[0]) || t.target && _this34.Dd.contains(t.target) || _this34.yd["if"]());
          };
        this.sd = function () {
          _t41.removeEventListener("touchstart", _i49);
        }, this.td = function () {
          _t41.removeEventListener("mousedown", _i49);
        }, _t41.addEventListener("mousedown", _i49), _t41.addEventListener("touchstart", _i49, {
          passive: !0
        });
      }
      ss() && (this.nd = function () {
        _this34.Dd.removeEventListener("dblclick", _this34.wd);
      }, this.Dd.addEventListener("dblclick", this.wd)), this.Dd.addEventListener("mouseleave", this.sf.bind(this)), this.Dd.addEventListener("touchstart", this.Xd.bind(this), {
        passive: !0
      }), es(this.Dd), this.Dd.addEventListener("mousedown", this.Qd.bind(this)), this.nf(), this.Dd.addEventListener("touchmove", function () {}, {
        passive: !1
      });
    }
  }, {
    key: "nf",
    value: function nf() {
      var _this35 = this;
      void 0 === this.yd.ef && void 0 === this.yd.rf && void 0 === this.yd.hf || (this.Dd.addEventListener("touchstart", function (t) {
        return _this35.af(t.touches);
      }, {
        passive: !0
      }), this.Dd.addEventListener("touchmove", function (t) {
        if (2 === t.touches.length && null !== _this35.ad && void 0 !== _this35.yd.rf) {
          var _i50 = hs(t.touches[0], t.touches[1]) / _this35.ld;
          _this35.yd.rf(_this35.ad, _i50), as(t);
        }
      }, {
        passive: !1
      }), this.Dd.addEventListener("touchend", function (t) {
        _this35.af(t.touches);
      }));
    }
  }, {
    key: "af",
    value: function af(t) {
      1 === t.length && (this.od = !1), 2 !== t.length || this.od || this.Zc ? this.lf() : this._f(t);
    }
  }, {
    key: "_f",
    value: function _f(t) {
      var i = this.Dd.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
      this.ad = {
        _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
        ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
      }, this.ld = hs(t[0], t[1]), void 0 !== this.yd.ef && this.yd.ef(), this.Id();
    }
  }, {
    key: "lf",
    value: function lf() {
      null !== this.ad && (this.ad = null, void 0 !== this.yd.hf && this.yd.hf());
    }
  }, {
    key: "sf",
    value: function sf(t) {
      if (this.ed && this.ed(), this.gd(t)) return;
      if (!this.pd) return;
      var i = this.Md(t);
      this.Pd(i, this.yd.uf), this.pd = !ss();
    }
  }, {
    key: "Gd",
    value: function Gd(t) {
      var i = _s(t.touches, u(this.fd));
      if (null === i) return;
      var s = this.Md(t, i);
      this.Sd(s, this.yd.cf), this.Qc = !0, this.Zc = !0;
    }
  }, {
    key: "gd",
    value: function gd(t) {
      return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : os(t) < this.dd + 500;
    }
  }, {
    key: "Sd",
    value: function Sd(t, i) {
      i && i.call(this.yd, t);
    }
  }, {
    key: "Pd",
    value: function Pd(t, i) {
      i && i.call(this.yd, t);
    }
  }, {
    key: "Md",
    value: function Md(t, i) {
      var s = i || t,
        n = this.Dd.getBoundingClientRect() || {
          left: 0,
          top: 0
        };
      return {
        clientX: s.clientX,
        clientY: s.clientY,
        pageX: s.pageX,
        pageY: s.pageY,
        screenX: s.screenX,
        screenY: s.screenY,
        localX: s.clientX - n.left,
        localY: s.clientY - n.top,
        ctrlKey: t.ctrlKey,
        altKey: t.altKey,
        shiftKey: t.shiftKey,
        metaKey: t.metaKey,
        df: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
        ff: t.type,
        pf: s.target,
        $o: t.view,
        vf: function vf() {
          "touchstart" !== t.type && as(t);
        }
      };
    }
  }]);
}();
function hs(t, i) {
  var s = t.clientX - i.clientX,
    n = t.clientY - i.clientY;
  return Math.sqrt(s * s + n * n);
}
function as(t) {
  t.cancelable && t.preventDefault();
}
function ls(t) {
  return {
    _t: t.pageX,
    ut: t.pageY
  };
}
function os(t) {
  return t.timeStamp || performance.now();
}
function _s(t, i) {
  for (var _s32 = 0; _s32 < t.length; ++_s32) if (t[_s32].identifier === i) return t[_s32];
  return null;
}
var us = /*#__PURE__*/function () {
  function us(t, i, s) {
    _classCallCheck(this, us);
    this.mf = null, this.wf = null, this.gf = !0, this.Mf = null, this.bf = t, this.xf = t.Sf()[i], this.Cf = t.Sf()[s], this.yf = document.createElement("tr"), this.yf.style.height = "1px", this.kf = document.createElement("td"), this.kf.style.position = "relative", this.kf.style.padding = "0", this.kf.style.margin = "0", this.kf.setAttribute("colspan", "3"), this.Pf(), this.yf.appendChild(this.kf), this.gf = this.bf.N().layout.panes.enableResize, this.gf ? this.Tf() : (this.mf = null, this.wf = null);
  }
  return _createClass(us, [{
    key: "m",
    value: function m() {
      null !== this.wf && this.wf.m();
    }
  }, {
    key: "Rf",
    value: function Rf() {
      return this.yf;
    }
  }, {
    key: "Df",
    value: function Df() {
      return Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: this.xf.Df().width,
        height: 1
      });
    }
  }, {
    key: "Vf",
    value: function Vf() {
      return Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: this.xf.Vf().width,
        height: 1 * window.devicePixelRatio
      });
    }
  }, {
    key: "If",
    value: function If(t, i, s) {
      var n = this.Vf();
      t.fillStyle = this.bf.N().layout.panes.separatorColor, t.fillRect(i, s, n.width, n.height);
    }
  }, {
    key: "kt",
    value: function kt() {
      this.Pf(), this.bf.N().layout.panes.enableResize !== this.gf && (this.gf = this.bf.N().layout.panes.enableResize, this.gf ? this.Tf() : (null !== this.mf && (this.kf.removeChild(this.mf.Af), this.kf.removeChild(this.mf.Bf), this.mf = null), null !== this.wf && (this.wf.m(), this.wf = null)));
    }
  }, {
    key: "Tf",
    value: function Tf() {
      var t = document.createElement("div"),
        i = t.style;
      i.position = "fixed", i.display = "none", i.zIndex = "49", i.top = "0", i.left = "0", i.width = "100%", i.height = "100%", i.cursor = "row-resize", this.kf.appendChild(t);
      var s = document.createElement("div"),
        n = s.style;
      n.position = "absolute", n.zIndex = "50", n.top = "-4px", n.height = "9px", n.width = "100%", n.backgroundColor = "", n.cursor = "row-resize", this.kf.appendChild(s);
      var e = {
        Ed: this.Ef.bind(this),
        uf: this.zf.bind(this),
        tf: this.Lf.bind(this),
        Jd: this.Lf.bind(this),
        $d: this.Of.bind(this),
        Hd: this.Of.bind(this),
        Zd: this.Nf.bind(this),
        Yd: this.Nf.bind(this)
      };
      this.wf = new rs(s, e, {
        Wd: function Wd() {
          return !1;
        },
        Fd: function Fd() {
          return !0;
        }
      }), this.mf = {
        Bf: s,
        Af: t
      };
    }
  }, {
    key: "Pf",
    value: function Pf() {
      this.kf.style.background = this.bf.N().layout.panes.separatorColor;
    }
  }, {
    key: "Ef",
    value: function Ef(t) {
      null !== this.mf && (this.mf.Bf.style.backgroundColor = this.bf.N().layout.panes.separatorHoverColor);
    }
  }, {
    key: "zf",
    value: function zf(t) {
      null !== this.mf && null === this.Mf && (this.mf.Bf.style.backgroundColor = "");
    }
  }, {
    key: "Lf",
    value: function Lf(t) {
      if (null === this.mf) return;
      var i = this.xf.Wf().fo() + this.Cf.Wf().fo(),
        s = i / (this.xf.Df().height + this.Cf.Df().height),
        n = 30 * s;
      i <= 2 * n || (this.Mf = {
        Ff: t.pageY,
        Hf: this.xf.Wf().fo(),
        Uf: i - n,
        $f: i,
        qf: s,
        Yf: n
      }, this.mf.Af.style.display = "block");
    }
  }, {
    key: "Of",
    value: function Of(t) {
      var i = this.Mf;
      if (null === i) return;
      var s = (t.pageY - i.Ff) * i.qf,
        n = ai(i.Hf + s, i.Yf, i.Uf);
      this.xf.Wf().po(n), this.Cf.Wf().po(i.$f - n), this.bf.Qt().Ah();
    }
  }, {
    key: "Nf",
    value: function Nf(t) {
      null !== this.Mf && null !== this.mf && (this.Mf = null, this.mf.Af.style.display = "none");
    }
  }]);
}();
function cs(t, i) {
  return t.jf - i.jf;
}
function ds(t, i, s) {
  var n = (t.jf - i.jf) / (t.wt - i.wt);
  return Math.sign(n) * Math.min(Math.abs(n), s);
}
var fs = /*#__PURE__*/function () {
  function fs(t, i, s, n) {
    _classCallCheck(this, fs);
    this.Zf = null, this.Kf = null, this.Xf = null, this.Gf = null, this.Jf = null, this.Qf = 0, this.tp = 0, this.ip = t, this.sp = i, this.np = s, this.Mn = n;
  }
  return _createClass(fs, [{
    key: "ep",
    value: function ep(t, i) {
      if (null !== this.Zf) {
        if (this.Zf.wt === i) return void (this.Zf.jf = t);
        if (Math.abs(this.Zf.jf - t) < this.Mn) return;
      }
      this.Gf = this.Xf, this.Xf = this.Kf, this.Kf = this.Zf, this.Zf = {
        wt: i,
        jf: t
      };
    }
  }, {
    key: "le",
    value: function le(t, i) {
      if (null === this.Zf || null === this.Kf) return;
      if (i - this.Zf.wt > 50) return;
      var s = 0;
      var n = ds(this.Zf, this.Kf, this.sp),
        e = cs(this.Zf, this.Kf),
        r = [n],
        h = [e];
      if (s += e, null !== this.Xf) {
        var _t42 = ds(this.Kf, this.Xf, this.sp);
        if (Math.sign(_t42) === Math.sign(n)) {
          var _i51 = cs(this.Kf, this.Xf);
          if (r.push(_t42), h.push(_i51), s += _i51, null !== this.Gf) {
            var _t43 = ds(this.Xf, this.Gf, this.sp);
            if (Math.sign(_t43) === Math.sign(n)) {
              var _i52 = cs(this.Xf, this.Gf);
              r.push(_t43), h.push(_i52), s += _i52;
            }
          }
        }
      }
      var a = 0;
      for (var _t44 = 0; _t44 < r.length; ++_t44) a += h[_t44] / s * r[_t44];
      Math.abs(a) < this.ip || (this.Jf = {
        jf: t,
        wt: i
      }, this.tp = a, this.Qf = function (t, i) {
        var s = Math.log(i);
        return Math.log(1 * s / -t) / s;
      }(Math.abs(a), this.np));
    }
  }, {
    key: "cu",
    value: function cu(t) {
      var i = u(this.Jf),
        s = t - i.wt;
      return i.jf + this.tp * (Math.pow(this.np, s) - 1) / Math.log(this.np);
    }
  }, {
    key: "uu",
    value: function uu(t) {
      return null === this.Jf || this.rp(t) === this.Qf;
    }
  }, {
    key: "rp",
    value: function rp(t) {
      var i = t - u(this.Jf).wt;
      return Math.min(i, this.Qf);
    }
  }]);
}();
var ps = /*#__PURE__*/function () {
  function ps(t, i) {
    _classCallCheck(this, ps);
    this.hp = void 0, this.ap = void 0, this.lp = void 0, this.ps = !1, this.op = t, this._p = i, this.up();
  }
  return _createClass(ps, [{
    key: "kt",
    value: function kt() {
      this.up();
    }
  }, {
    key: "cp",
    value: function cp() {
      this.hp && this.op.removeChild(this.hp), this.ap && this.op.removeChild(this.ap), this.hp = void 0, this.ap = void 0;
    }
  }, {
    key: "dp",
    value: function dp() {
      return this.ps !== this.fp() || this.lp !== this.pp();
    }
  }, {
    key: "pp",
    value: function pp() {
      return this._p.Qt().Ki().J(this._p.N().layout.textColor) > 160 ? "dark" : "light";
    }
  }, {
    key: "fp",
    value: function fp() {
      return this._p.N().layout.attributionLogo;
    }
  }, {
    key: "vp",
    value: function vp() {
      var t = new URL(location.href);
      return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
    }
  }, {
    key: "up",
    value: function up() {
      this.dp() && (this.cp(), this.ps = this.fp(), this.ps && (this.lp = this.pp(), this.ap = document.createElement("style"), this.ap.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.hp = document.createElement("a"), this.hp.href = "https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart".concat(this.vp()), this.hp.title = "Charting by TradingView", this.hp.id = "tv-attr-logo", this.hp.target = "_blank", this.hp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.hp.toggleAttribute("data-dark", "dark" === this.lp), this.op.appendChild(this.ap), this.op.appendChild(this.hp)));
    }
  }]);
}();
function vs(t, s) {
  var n = u(t.ownerDocument).createElement("canvas");
  t.appendChild(n);
  var e = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["bindCanvasElementBitmapSizeTo"])(n, {
    type: "device-pixel-content-box",
    options: {
      allowResizeObserver: !0
    },
    transform: function transform(t, i) {
      return {
        width: Math.max(t.width, i.width),
        height: Math.max(t.height, i.height)
      };
    }
  });
  return e.resizeCanvasElement(s), e;
}
function ms(t) {
  var _t$getContext;
  t.width = 1, t.height = 1, (_t$getContext = t.getContext("2d")) === null || _t$getContext === void 0 ? void 0 : _t$getContext.clearRect(0, 0, 1, 1);
}
function ws(t, i, s, n) {
  t.ih && t.ih(i, s, n);
}
function gs(t, i, s, n) {
  t.nt(i, s, n);
}
function Ms(t, i, s, n) {
  var e = t(s, n);
  var _iterator20 = _createForOfIteratorHelper(e),
    _step20;
  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var _t45 = _step20.value;
      var _s33 = _t45.Tt(n);
      null !== _s33 && i(_s33);
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
}
function bs(t, i) {
  return function (s) {
    var _s$Wt$wa, _s$Wt, _s$ta, _s$ta2;
    if (!function (t) {
      return void 0 !== t.Wt;
    }(s)) return [];
    return ((_s$Wt$wa = (_s$Wt = s.Wt()) === null || _s$Wt === void 0 ? void 0 : _s$Wt.wa()) !== null && _s$Wt$wa !== void 0 ? _s$Wt$wa : "") !== i ? [] : (_s$ta = (_s$ta2 = s.ta) === null || _s$ta2 === void 0 ? void 0 : _s$ta2.call(s, t)) !== null && _s$ta !== void 0 ? _s$ta : [];
  };
}
function xs(t, i, s, n) {
  if (!t.length) return;
  var e = 0;
  var r = t[0].$t(n, !0);
  var h = 1 === i ? s / 2 - (t[0].Wi() - r / 2) : t[0].Wi() - r / 2 - s / 2;
  h = Math.max(0, h);
  for (var _r12 = 1; _r12 < t.length; _r12++) {
    var _a11 = t[_r12],
      _l6 = t[_r12 - 1],
      _o5 = _l6.$t(n, !1),
      _8 = _a11.Wi(),
      _u4 = _l6.Wi();
    if (1 === i ? _8 > _u4 - _o5 : _8 < _u4 + _o5) {
      var _n16 = _u4 - _o5 * i;
      _a11.Fi(_n16);
      var _r13 = _n16 - i * _o5 / 2;
      if ((1 === i ? _r13 < 0 : _r13 > s) && h > 0) {
        var _n17 = 1 === i ? -1 - _r13 : _r13 - s,
          _a12 = Math.min(_n17, h);
        for (var _s34 = e; _s34 < t.length; _s34++) t[_s34].Fi(t[_s34].Wi() + i * _a12);
        h -= _a12;
      }
    } else e = _r12, h = 1 === i ? _u4 - _o5 - _8 : _8 - (_u4 + _o5);
  }
}
var Ss = /*#__PURE__*/function () {
  function Ss(i, s, n, e) {
    var _this36 = this;
    _classCallCheck(this, Ss);
    this.Yi = null, this.mp = null, this.wp = !1, this.gp = new et(200), this.Mp = null, this.bp = 0, this.xp = !1, this.Sp = function () {
      _this36.xp || _this36.yt.Cp().Qt().ar();
    }, this.yp = function () {
      _this36.xp || _this36.yt.Cp().Qt().ar();
    }, this.yt = i, this.ys = s, this._l = s.layout, this.Bu = n, this.kp = "left" === e, this.Pp = bs("normal", e), this.Tp = bs("top", e), this.Rp = bs("bottom", e), this.kf = document.createElement("div"), this.kf.style.height = "100%", this.kf.style.overflow = "hidden", this.kf.style.width = "25px", this.kf.style.left = "0", this.kf.style.position = "relative", this.Dp = vs(this.kf, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Dp.subscribeSuggestedBitmapSizeChanged(this.Sp);
    var r = this.Dp.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Vp = vs(this.kf, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.yp);
    var h = this.Vp.canvasElement;
    h.style.position = "absolute", h.style.zIndex = "2", h.style.left = "0", h.style.top = "0";
    var a = {
      tf: this.Lf.bind(this),
      Jd: this.Lf.bind(this),
      $d: this.Of.bind(this),
      Hd: this.Of.bind(this),
      "if": this.Ip.bind(this),
      Zd: this.Nf.bind(this),
      Yd: this.Nf.bind(this),
      Td: this.Ap.bind(this),
      Cd: this.Ap.bind(this),
      Ed: this.Bp.bind(this),
      uf: this.zf.bind(this)
    };
    this.wf = new rs(this.Vp.canvasElement, a, {
      Wd: function Wd() {
        return !_this36.ys.handleScroll.vertTouchDrag;
      },
      Fd: function Fd() {
        return !0;
      }
    });
  }
  return _createClass(Ss, [{
    key: "m",
    value: function m() {
      this.wf.m(), this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.yp), ms(this.Vp.canvasElement), this.Vp.dispose(), this.Dp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), ms(this.Dp.canvasElement), this.Dp.dispose(), null !== this.Yi && this.Yi.Hl().u(this), this.Yi = null;
    }
  }, {
    key: "Rf",
    value: function Rf() {
      return this.kf;
    }
  }, {
    key: "k",
    value: function k() {
      return this._l.fontSize;
    }
  }, {
    key: "Ep",
    value: function Ep() {
      var t = this.Bu.N();
      return this.Mp !== t.P && (this.gp.In(), this.Mp = t.P), t;
    }
  }, {
    key: "zp",
    value: function zp() {
      if (null === this.Yi) return 0;
      var t = 0;
      var i = this.Ep(),
        s = u(this.Dp.canvasElement.getContext("2d", {
          colorSpace: this.yt.Cp().N().layout.colorSpace
        }));
      s.save();
      var n = this.Yi.Va();
      s.font = this.Lp(), n.length > 0 && (t = Math.max(this.gp.Vi(s, n[0].$a), this.gp.Vi(s, n[n.length - 1].$a)));
      var e = this.Op();
      for (var _i53 = e.length; _i53--;) {
        var _n18 = this.gp.Vi(s, e[_i53].ri());
        _n18 > t && (t = _n18);
      }
      var r = this.Yi.zt();
      if (null !== r && null !== this.mp && 2 !== (h = this.ys.crosshair).mode && h.horzLine.visible && h.horzLine.labelVisible) {
        var _i54 = this.Yi.Ts(1, r),
          _n19 = this.Yi.Ts(this.mp.height - 2, r);
        t = Math.max(t, this.gp.Vi(s, this.Yi.Xi(Math.floor(Math.min(_i54, _n19)) + .11111111111111, r)), this.gp.Vi(s, this.Yi.Xi(Math.ceil(Math.max(_i54, _n19)) - .11111111111111, r)));
      }
      var h;
      s.restore();
      var a = t || 34;
      return ns(Math.ceil(i.S + i.C + i.I + i.A + 5 + a));
    }
  }, {
    key: "Np",
    value: function Np(t) {
      null !== this.mp && Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(this.mp, t) || (this.mp = t, this.xp = !0, this.Dp.resizeCanvasElement(t), this.Vp.resizeCanvasElement(t), this.xp = !1, this.kf.style.width = "".concat(t.width, "px"), this.kf.style.height = "".concat(t.height, "px"));
    }
  }, {
    key: "Wp",
    value: function Wp() {
      return u(this.mp).width;
    }
  }, {
    key: "_s",
    value: function _s(t) {
      this.Yi !== t && (null !== this.Yi && this.Yi.Hl().u(this), this.Yi = t, t.Hl().i(this.il.bind(this), this));
    }
  }, {
    key: "Wt",
    value: function Wt() {
      return this.Yi;
    }
  }, {
    key: "In",
    value: function In() {
      var t = this.yt.Wf();
      this.yt.Cp().Qt().Ao(t, u(this.Wt()));
    }
  }, {
    key: "Fp",
    value: function Fp(t) {
      var _this37 = this;
      if (null === this.mp) return;
      var i = {
        colorSpace: this.yt.Cp().N().layout.colorSpace
      };
      if (1 !== t) {
        this.Hp(), this.Dp.applySuggestedBitmapSize();
        var _t46 = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Dp, i);
        null !== _t46 && (_t46.useBitmapCoordinateSpace(function (t) {
          _this37.Up(t), _this37.$p(t);
        }), this.yt.qp(_t46, this.Rp), this.Yp(_t46), this.yt.qp(_t46, this.Pp), this.jp(_t46));
      }
      this.Vp.applySuggestedBitmapSize();
      var s = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Vp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref10) {
        var t = _ref10.context,
          i = _ref10.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.Zp(s), this.yt.qp(s, this.Tp));
    }
  }, {
    key: "Vf",
    value: function Vf() {
      return this.Dp.bitmapSize;
    }
  }, {
    key: "If",
    value: function If(t, i, s) {
      var n = this.Vf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Dp.canvasElement, i, s);
    }
  }, {
    key: "kt",
    value: function kt() {
      var _this$Yi;
      (_this$Yi = this.Yi) === null || _this$Yi === void 0 || _this$Yi.Va();
    }
  }, {
    key: "Lf",
    value: function Lf(t) {
      if (null === this.Yi || this.Yi.Zi() || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Cp().Qt(),
        s = this.yt.Wf();
      this.wp = !0, i.ko(s, this.Yi, t.localY);
    }
  }, {
    key: "Of",
    value: function Of(t) {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Cp().Qt(),
        s = this.yt.Wf(),
        n = this.Yi;
      i.Po(s, n, t.localY);
    }
  }, {
    key: "Ip",
    value: function Ip() {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var t = this.yt.Cp().Qt(),
        i = this.yt.Wf(),
        s = this.Yi;
      this.wp && (this.wp = !1, t.To(i, s));
    }
  }, {
    key: "Nf",
    value: function Nf(t) {
      if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
      var i = this.yt.Cp().Qt(),
        s = this.yt.Wf();
      this.wp = !1, i.To(s, this.Yi);
    }
  }, {
    key: "Ap",
    value: function Ap(t) {
      this.ys.handleScale.axisDoubleClickReset.price && this.In();
    }
  }, {
    key: "Bp",
    value: function Bp(t) {
      if (null === this.Yi) return;
      !this.yt.Cp().Qt().N().handleScale.axisPressedMouseMove.price || this.Yi.Le() || this.Yi.gl() || this.Kp(1);
    }
  }, {
    key: "zf",
    value: function zf(t) {
      this.Kp(0);
    }
  }, {
    key: "Op",
    value: function Op() {
      var _this38 = this;
      var t = [],
        i = null === this.Yi ? void 0 : this.Yi;
      return function (s) {
        for (var _n20 = 0; _n20 < s.length; ++_n20) {
          var _e13 = s[_n20].Fs(_this38.yt.Wf(), i);
          for (var _i55 = 0; _i55 < _e13.length; _i55++) t.push(_e13[_i55]);
        }
      }(this.yt.Wf().Dt()), t;
    }
  }, {
    key: "Up",
    value: function Up(_ref11) {
      var t = _ref11.context,
        i = _ref11.bitmapSize;
      var s = i.width,
        n = i.height,
        e = this.yt.Wf().Qt(),
        r = e.$(),
        h = e.xc();
      r === h ? L(t, 0, 0, s, n, r) : W(t, 0, 0, s, n, r, h);
    }
  }, {
    key: "$p",
    value: function $p(_ref12) {
      var t = _ref12.context,
        i = _ref12.bitmapSize,
        s = _ref12.horizontalPixelRatio;
      if (null === this.mp || null === this.Yi || !this.Yi.N().borderVisible) return;
      t.fillStyle = this.Yi.N().borderColor;
      var n = Math.max(1, Math.floor(this.Ep().S * s));
      var e;
      e = this.kp ? i.width - n : 0, t.fillRect(e, 0, n, i.height);
    }
  }, {
    key: "Yp",
    value: function Yp(t) {
      var _this39 = this;
      if (null === this.mp || null === this.Yi) return;
      var i = this.Yi.Va(),
        s = this.Yi.N(),
        n = this.Ep(),
        e = this.kp ? this.mp.width - n.C : 0;
      s.borderVisible && s.ticksVisible && t.useBitmapCoordinateSpace(function (_ref13) {
        var t = _ref13.context,
          r = _ref13.horizontalPixelRatio,
          h = _ref13.verticalPixelRatio;
        t.fillStyle = s.borderColor;
        var a = Math.max(1, Math.floor(h)),
          l = Math.floor(.5 * h),
          o = Math.round(n.C * r);
        t.beginPath();
        var _iterator21 = _createForOfIteratorHelper(i),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _s35 = _step21.value;
            t.rect(Math.floor(e * r), Math.round(_s35.ka * h) - l, o, a);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        t.fill();
      }), t.useMediaCoordinateSpace(function (_ref14) {
        var _s$textColor;
        var t = _ref14.context;
        t.font = _this39.Lp(), t.fillStyle = (_s$textColor = s.textColor) !== null && _s$textColor !== void 0 ? _s$textColor : _this39._l.textColor, t.textAlign = _this39.kp ? "right" : "left", t.textBaseline = "middle";
        var r = _this39.kp ? Math.round(e - n.I) : Math.round(e + n.C + n.I),
          h = i.map(function (i) {
            return _this39.gp.Di(t, i.$a);
          });
        for (var _s36 = i.length; _s36--;) {
          var _n21 = i[_s36];
          t.fillText(_n21.$a, r, _n21.ka + h[_s36]);
        }
      });
    }
  }, {
    key: "Hp",
    value: function Hp() {
      if (null === this.mp || null === this.Yi) return;
      var t = this.mp.height / 2;
      var i = [],
        s = this.Yi.Dt().slice(),
        n = this.yt.Wf(),
        e = this.Ep();
      this.Yi === n.$n() && this.yt.Wf().Dt().forEach(function (t) {
        n.Un(t) && s.push(t);
      });
      var r = this.Yi.ba()[0],
        h = this.Yi;
      s.forEach(function (s) {
        var e = s.Fs(n, h);
        e.forEach(function (t) {
          t.Fi(null), t.Hi() && i.push(t);
        }), r === s && e.length > 0 && (t = e[0].Ai());
      }), i.forEach(function (t) {
        return t.Fi(t.Ai());
      });
      this.Yi.N().alignLabels && this.Xp(i, e, t);
    }
  }, {
    key: "Xp",
    value: function Xp(t, i, s) {
      if (null === this.mp) return;
      var n = t.filter(function (t) {
          return t.Ai() <= s;
        }),
        e = t.filter(function (t) {
          return t.Ai() > s;
        });
      n.sort(function (t, i) {
        return i.Ai() - t.Ai();
      }), n.length && e.length && e.push(n[0]), e.sort(function (t, i) {
        return t.Ai() - i.Ai();
      });
      var _iterator22 = _createForOfIteratorHelper(t),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _s37 = _step22.value;
          var _t47 = Math.floor(_s37.$t(i) / 2),
            _n22 = _s37.Ai();
          _n22 > -_t47 && _n22 < _t47 && _s37.Fi(_t47), _n22 > this.mp.height - _t47 && _n22 < this.mp.height + _t47 && _s37.Fi(this.mp.height - _t47);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      xs(n, 1, this.mp.height, i), xs(e, -1, this.mp.height, i);
    }
  }, {
    key: "jp",
    value: function jp(t) {
      var _this40 = this;
      if (null === this.mp) return;
      var i = this.Op(),
        s = this.Ep(),
        n = this.kp ? "right" : "left";
      i.forEach(function (i) {
        if (i.Ui()) {
          i.Tt(u(_this40.Yi)).nt(t, s, _this40.gp, n);
        }
      });
    }
  }, {
    key: "Zp",
    value: function Zp(t) {
      var _this41 = this;
      if (null === this.mp || null === this.Yi) return;
      var i = this.yt.Cp().Qt(),
        s = [],
        n = this.yt.Wf(),
        e = i.Yu().Fs(n, this.Yi);
      e.length && s.push(e);
      var r = this.Ep(),
        h = this.kp ? "right" : "left";
      s.forEach(function (i) {
        i.forEach(function (i) {
          i.Tt(u(_this41.Yi)).nt(t, r, _this41.gp, h);
        });
      });
    }
  }, {
    key: "Kp",
    value: function Kp(t) {
      this.kf.style.cursor = 1 === t ? "ns-resize" : "default";
    }
  }, {
    key: "il",
    value: function il() {
      var t = this.zp();
      this.bp < t && this.yt.Cp().Qt().Ah(), this.bp = t;
    }
  }, {
    key: "Lp",
    value: function Lp() {
      return S(this._l.fontSize, this._l.fontFamily);
    }
  }]);
}();
function Cs(t, i) {
  var _t$Jh, _t$Jh2;
  return (_t$Jh = (_t$Jh2 = t.Jh) === null || _t$Jh2 === void 0 ? void 0 : _t$Jh2.call(t, i)) !== null && _t$Jh !== void 0 ? _t$Jh : [];
}
function ys(t, i) {
  var _t$Ws, _t$Ws2;
  return (_t$Ws = (_t$Ws2 = t.Ws) === null || _t$Ws2 === void 0 ? void 0 : _t$Ws2.call(t, i)) !== null && _t$Ws !== void 0 ? _t$Ws : [];
}
function ks(t, i) {
  var _t$us, _t$us2;
  return (_t$us = (_t$us2 = t.us) === null || _t$us2 === void 0 ? void 0 : _t$us2.call(t, i)) !== null && _t$us !== void 0 ? _t$us : [];
}
function Ps(t, i) {
  var _t$Kh, _t$Kh2;
  return (_t$Kh = (_t$Kh2 = t.Kh) === null || _t$Kh2 === void 0 ? void 0 : _t$Kh2.call(t, i)) !== null && _t$Kh !== void 0 ? _t$Kh : [];
}
var Ts = /*#__PURE__*/function () {
  function Ts(i, s) {
    var _this42 = this;
    _classCallCheck(this, Ts);
    this.mp = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 0,
      height: 0
    }), this.Gp = null, this.Jp = null, this.Qp = null, this.tv = null, this.iv = !1, this.sv = new d(), this.nv = new d(), this.ev = 0, this.rv = !1, this.hv = null, this.av = !1, this.lv = null, this.ov = null, this.xp = !1, this.Sp = function () {
      _this42.xp || null === _this42._v || _this42.ts().ar();
    }, this.yp = function () {
      _this42.xp || null === _this42._v || _this42.ts().ar();
    }, this._p = i, this._v = s, this._v.zo().i(this.uv.bind(this), this, !0), this.cv = document.createElement("td"), this.cv.style.padding = "0", this.cv.style.position = "relative";
    var n = document.createElement("div");
    n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.dv = document.createElement("td"), this.dv.style.padding = "0", this.fv = document.createElement("td"), this.fv.style.padding = "0", this.cv.appendChild(n), this.Dp = vs(n, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Dp.subscribeSuggestedBitmapSizeChanged(this.Sp);
    var e = this.Dp.canvasElement;
    e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Vp = vs(n, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.yp);
    var r = this.Vp.canvasElement;
    r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.yf = document.createElement("tr"), this.yf.appendChild(this.dv), this.yf.appendChild(this.cv), this.yf.appendChild(this.fv), this.pv(), this.wf = new rs(this.Vp.canvasElement, this, {
      Wd: function Wd() {
        return null === _this42.hv && !_this42._p.N().handleScroll.vertTouchDrag;
      },
      Fd: function Fd() {
        return null === _this42.hv && !_this42._p.N().handleScroll.horzTouchDrag;
      }
    });
  }
  return _createClass(Ts, [{
    key: "m",
    value: function m() {
      null !== this.Gp && this.Gp.m(), null !== this.Jp && this.Jp.m(), this.Qp = null, this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.yp), ms(this.Vp.canvasElement), this.Vp.dispose(), this.Dp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), ms(this.Dp.canvasElement), this.Dp.dispose(), null !== this._v && (this._v.zo().u(this), this._v.m()), this.wf.m();
    }
  }, {
    key: "Wf",
    value: function Wf() {
      return u(this._v);
    }
  }, {
    key: "vv",
    value: function vv(t) {
      var _this$Qp, _this$Qp2;
      null !== this._v && this._v.zo().u(this), this._v = t, null !== this._v && this._v.zo().i(Ts.prototype.uv.bind(this), this, !0), this.pv(), this._p.Sf().indexOf(this) === this._p.Sf().length - 1 ? (this.Qp = (_this$Qp = this.Qp) !== null && _this$Qp !== void 0 ? _this$Qp : new ps(this.cv, this._p), this.Qp.kt()) : ((_this$Qp2 = this.Qp) !== null && _this$Qp2 !== void 0 && _this$Qp2.cp(), this.Qp = null);
    }
  }, {
    key: "Cp",
    value: function Cp() {
      return this._p;
    }
  }, {
    key: "Rf",
    value: function Rf() {
      return this.yf;
    }
  }, {
    key: "pv",
    value: function pv() {
      if (null !== this._v && (this.mv(), 0 !== this.ts().js().length)) {
        if (null !== this.Gp) {
          var _t48 = this._v.Co();
          this.Gp._s(u(_t48));
        }
        if (null !== this.Jp) {
          var _t49 = this._v.yo();
          this.Jp._s(u(_t49));
        }
      }
    }
  }, {
    key: "wv",
    value: function wv() {
      null !== this.Gp && this.Gp.kt(), null !== this.Jp && this.Jp.kt();
    }
  }, {
    key: "fo",
    value: function fo() {
      return null !== this._v ? this._v.fo() : 0;
    }
  }, {
    key: "po",
    value: function po(t) {
      this._v && this._v.po(t);
    }
  }, {
    key: "Ed",
    value: function Ed(t) {
      if (!this._v) return;
      this.gv();
      var i = t.localX,
        s = t.localY;
      this.Mv(i, s, t);
    }
  }, {
    key: "tf",
    value: function tf(t) {
      this.gv(), this.bv(), this.Mv(t.localX, t.localY, t);
    }
  }, {
    key: "zd",
    value: function zd(t) {
      if (!this._v) return;
      this.gv();
      var i = t.localX,
        s = t.localY;
      this.Mv(i, s, t);
    }
  }, {
    key: "Kd",
    value: function Kd(t) {
      null !== this._v && (this.gv(), this.xv(t));
    }
  }, {
    key: "Td",
    value: function Td(t) {
      null !== this._v && this.Sv(this.nv, t);
    }
  }, {
    key: "Cd",
    value: function Cd(t) {
      this.Td(t);
    }
  }, {
    key: "$d",
    value: function $d(t) {
      this.gv(), this.Cv(t), this.Mv(t.localX, t.localY, t);
    }
  }, {
    key: "Zd",
    value: function Zd(t) {
      null !== this._v && (this.gv(), this.rv = !1, this.yv(t));
    }
  }, {
    key: "jd",
    value: function jd(t) {
      null !== this._v && this.xv(t);
    }
  }, {
    key: "cf",
    value: function cf(t) {
      if (this.rv = !0, null === this.hv) {
        var _i56 = {
          x: t.localX,
          y: t.localY
        };
        this.kv(_i56, _i56, t);
      }
    }
  }, {
    key: "uf",
    value: function uf(t) {
      null !== this._v && (this.gv(), this._v.Qt().Uu(null), this.Pv());
    }
  }, {
    key: "Tv",
    value: function Tv() {
      return this.sv;
    }
  }, {
    key: "Rv",
    value: function Rv() {
      return this.nv;
    }
  }, {
    key: "ef",
    value: function ef() {
      this.ev = 1, this.ts().hn();
    }
  }, {
    key: "rf",
    value: function rf(t, i) {
      if (!this._p.N().handleScale.pinch) return;
      var s = 5 * (i - this.ev);
      this.ev = i, this.ts().tc(t._t, s);
    }
  }, {
    key: "Jd",
    value: function Jd(t) {
      this.rv = !1, this.av = null !== this.hv, this.bv();
      var i = this.ts().Yu();
      null !== this.hv && i.Vt() && (this.lv = {
        x: i.si(),
        y: i.ni()
      }, this.hv = {
        x: t.localX,
        y: t.localY
      });
    }
  }, {
    key: "Hd",
    value: function Hd(t) {
      if (null === this._v) return;
      var i = t.localX,
        s = t.localY;
      if (null === this.hv) this.Cv(t);else {
        this.av = !1;
        var _n23 = u(this.lv),
          _e14 = _n23.x + (i - this.hv.x),
          _r14 = _n23.y + (s - this.hv.y);
        this.Mv(_e14, _r14, t);
      }
    }
  }, {
    key: "Yd",
    value: function Yd(t) {
      0 === this.Cp().N().trackingMode.exitMode && (this.av = !0), this.Dv(), this.yv(t);
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      var s = this._v;
      return null === s ? null : xi(s, t, i);
    }
  }, {
    key: "Vv",
    value: function Vv(i, s) {
      u("left" === s ? this.Gp : this.Jp).Np(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: i,
        height: this.mp.height
      }));
    }
  }, {
    key: "Df",
    value: function Df() {
      return this.mp;
    }
  }, {
    key: "Np",
    value: function Np(t) {
      Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(this.mp, t) || (this.mp = t, this.xp = !0, this.Dp.resizeCanvasElement(t), this.Vp.resizeCanvasElement(t), this.xp = !1, this.cv.style.width = t.width + "px", this.cv.style.height = t.height + "px");
    }
  }, {
    key: "Iv",
    value: function Iv() {
      var t = u(this._v);
      t.So(t.Co()), t.So(t.yo());
      var _iterator23 = _createForOfIteratorHelper(t.ba()),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _i57 = _step23.value;
          if (t.Un(_i57)) {
            var _s38 = _i57.Wt();
            null !== _s38 && t.So(_s38), _i57.Ns();
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      var _iterator24 = _createForOfIteratorHelper(t.Oo()),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _i58 = _step24.value;
          _i58.Ns();
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  }, {
    key: "Vf",
    value: function Vf() {
      return this.Dp.bitmapSize;
    }
  }, {
    key: "If",
    value: function If(t, i, s) {
      var n = this.Vf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Dp.canvasElement, i, s);
    }
  }, {
    key: "Fp",
    value: function Fp(t) {
      var _this43 = this;
      if (0 === t) return;
      if (null === this._v) return;
      t > 1 && this.Iv(), null !== this.Gp && this.Gp.Fp(t), null !== this.Jp && this.Jp.Fp(t);
      var i = {
        colorSpace: this._p.N().layout.colorSpace
      };
      if (1 !== t) {
        this.Dp.applySuggestedBitmapSize();
        var _t50 = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Dp, i);
        null !== _t50 && (_t50.useBitmapCoordinateSpace(function (t) {
          _this43.Up(t);
        }), this._v && (this.Av(_t50, Cs), this.Bv(_t50), this.Av(_t50, ys), this.Av(_t50, ks)));
      }
      this.Vp.applySuggestedBitmapSize();
      var s = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Vp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref15) {
        var t = _ref15.context,
          i = _ref15.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.Ev(s), this.Av(s, Ps), this.Av(s, ks));
    }
  }, {
    key: "zv",
    value: function zv() {
      return this.Gp;
    }
  }, {
    key: "Lv",
    value: function Lv() {
      return this.Jp;
    }
  }, {
    key: "qp",
    value: function qp(t, i) {
      this.Av(t, i);
    }
  }, {
    key: "uv",
    value: function uv() {
      null !== this._v && this._v.zo().u(this), this._v = null;
    }
  }, {
    key: "xv",
    value: function xv(t) {
      this.Sv(this.sv, t);
    }
  }, {
    key: "Sv",
    value: function Sv(t, i) {
      var s = i.localX,
        n = i.localY;
      t.v() && t.p(this.ts().Bt().Z_(s), {
        x: s,
        y: n
      }, i);
    }
  }, {
    key: "Up",
    value: function Up(_ref16) {
      var t = _ref16.context,
        i = _ref16.bitmapSize;
      var s = i.width,
        n = i.height,
        e = this.ts(),
        r = e.$(),
        h = e.xc();
      r === h ? L(t, 0, 0, s, n, h) : W(t, 0, 0, s, n, r, h);
    }
  }, {
    key: "Bv",
    value: function Bv(t) {
      var i = u(this._v),
        s = i.Lo().lr().Tt(i);
      null !== s && s.nt(t, !1);
    }
  }, {
    key: "Ev",
    value: function Ev(t) {
      this.Ov(t, ys, gs, this.ts().Yu());
    }
  }, {
    key: "Av",
    value: function Av(t, i) {
      var s = u(this._v),
        n = s.Dt(),
        e = s.Oo();
      var _iterator25 = _createForOfIteratorHelper(e),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _s39 = _step25.value;
          this.Ov(t, i, ws, _s39);
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      var _iterator26 = _createForOfIteratorHelper(n),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var _s40 = _step26.value;
          this.Ov(t, i, ws, _s40);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      var _iterator27 = _createForOfIteratorHelper(e),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _s41 = _step27.value;
          this.Ov(t, i, gs, _s41);
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      var _iterator28 = _createForOfIteratorHelper(n),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _s42 = _step28.value;
          this.Ov(t, i, gs, _s42);
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
    }
  }, {
    key: "Ov",
    value: function Ov(t, i, s, n) {
      var e = u(this._v),
        r = e.Qt().Hu(),
        h = null !== r && r.Wo === n,
        a = null !== r && h && void 0 !== r.Fo ? r.Fo.Kn : void 0;
      Ms(i, function (i) {
        return s(i, t, h, a);
      }, n, e);
    }
  }, {
    key: "mv",
    value: function mv() {
      if (null === this._v) return;
      var t = this._p,
        i = this._v.Co().N().visible,
        s = this._v.yo().N().visible;
      i || null === this.Gp || (this.dv.removeChild(this.Gp.Rf()), this.Gp.m(), this.Gp = null), s || null === this.Jp || (this.fv.removeChild(this.Jp.Rf()), this.Jp.m(), this.Jp = null);
      var n = t.Qt().cc();
      i && null === this.Gp && (this.Gp = new Ss(this, t.N(), n, "left"), this.dv.appendChild(this.Gp.Rf())), s && null === this.Jp && (this.Jp = new Ss(this, t.N(), n, "right"), this.fv.appendChild(this.Jp.Rf()));
    }
  }, {
    key: "Nv",
    value: function Nv(t) {
      return t.df && this.rv || null !== this.hv;
    }
  }, {
    key: "Wv",
    value: function Wv(t) {
      return Math.max(0, Math.min(t, this.mp.width - 1));
    }
  }, {
    key: "Fv",
    value: function Fv(t) {
      return Math.max(0, Math.min(t, this.mp.height - 1));
    }
  }, {
    key: "Mv",
    value: function Mv(t, i, s) {
      this.ts().lc(this.Wv(t), this.Fv(i), s, u(this._v));
    }
  }, {
    key: "Pv",
    value: function Pv() {
      this.ts()._c();
    }
  }, {
    key: "Dv",
    value: function Dv() {
      this.av && (this.hv = null, this.Pv());
    }
  }, {
    key: "kv",
    value: function kv(t, i, s) {
      this.hv = t, this.av = !1, this.Mv(i.x, i.y, s);
      var n = this.ts().Yu();
      this.lv = {
        x: n.si(),
        y: n.ni()
      };
    }
  }, {
    key: "ts",
    value: function ts() {
      return this._p.Qt();
    }
  }, {
    key: "yv",
    value: function yv(t) {
      if (!this.iv) return;
      var i = this.ts(),
        s = this.Wf();
      if (i.Vo(s, s.Ps()), this.tv = null, this.iv = !1, i.rc(), null !== this.ov) {
        var _t51 = performance.now(),
          _s43 = i.Bt();
        this.ov.le(_s43.iu(), _t51), this.ov.uu(_t51) || i._n(this.ov);
      }
    }
  }, {
    key: "gv",
    value: function gv() {
      this.hv = null;
    }
  }, {
    key: "bv",
    value: function bv() {
      if (!this._v) return;
      if (this.ts().hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) u(document.activeElement).blur();else {
        var _t52 = document.getSelection();
        null !== _t52 && _t52.removeAllRanges();
      }
      !this._v.Ps().Zi() && this.ts().Bt().Zi();
    }
  }, {
    key: "Cv",
    value: function Cv(t) {
      if (null === this._v) return;
      var i = this.ts(),
        s = i.Bt();
      if (s.Zi()) return;
      var n = this._p.N(),
        e = n.handleScroll,
        r = n.kineticScroll;
      if ((!e.pressedMouseMove || t.df) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.df)) return;
      var h = this._v.Ps(),
        a = performance.now();
      if (null !== this.tv || this.Nv(t) || (this.tv = {
        x: t.clientX,
        y: t.clientY,
        Lc: a,
        Hv: t.localX,
        Uv: t.localY
      }), null !== this.tv && !this.iv && (this.tv.x !== t.clientX || this.tv.y !== t.clientY)) {
        if (t.df && r.touch || !t.df && r.mouse) {
          var _t53 = s.Q_();
          this.ov = new fs(.2 / _t53, 7 / _t53, .997, 15 / _t53), this.ov.ep(s.iu(), this.tv.Lc);
        } else this.ov = null;
        h.Zi() || i.Ro(this._v, h, t.localY), i.nc(t.localX), this.iv = !0;
      }
      this.iv && (h.Zi() || i.Do(this._v, h, t.localY), i.ec(t.localX), null !== this.ov && this.ov.ep(s.iu(), a));
    }
  }]);
}();
var Rs = /*#__PURE__*/function () {
  function Rs(i, s, n, e, r) {
    var _this44 = this;
    _classCallCheck(this, Rs);
    this.St = !0, this.mp = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 0,
      height: 0
    }), this.Sp = function () {
      return _this44.Fp(3);
    }, this.kp = "left" === i, this.Bu = n.cc, this.ys = s, this.$v = e, this.qv = r, this.kf = document.createElement("div"), this.kf.style.width = "25px", this.kf.style.height = "100%", this.kf.style.overflow = "hidden", this.Dp = vs(this.kf, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Dp.subscribeSuggestedBitmapSizeChanged(this.Sp);
  }
  return _createClass(Rs, [{
    key: "m",
    value: function m() {
      this.Dp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), ms(this.Dp.canvasElement), this.Dp.dispose();
    }
  }, {
    key: "Rf",
    value: function Rf() {
      return this.kf;
    }
  }, {
    key: "Df",
    value: function Df() {
      return this.mp;
    }
  }, {
    key: "Np",
    value: function Np(t) {
      Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(this.mp, t) || (this.mp = t, this.Dp.resizeCanvasElement(t), this.kf.style.width = "".concat(t.width, "px"), this.kf.style.height = "".concat(t.height, "px"), this.St = !0);
    }
  }, {
    key: "Fp",
    value: function Fp(t) {
      var _this45 = this;
      if (t < 3 && !this.St) return;
      if (0 === this.mp.width || 0 === this.mp.height) return;
      this.St = !1, this.Dp.applySuggestedBitmapSize();
      var i = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Dp, {
        colorSpace: this.ys.layout.colorSpace
      });
      null !== i && i.useBitmapCoordinateSpace(function (t) {
        _this45.Up(t), _this45.$p(t);
      });
    }
  }, {
    key: "Vf",
    value: function Vf() {
      return this.Dp.bitmapSize;
    }
  }, {
    key: "If",
    value: function If(t, i, s) {
      var n = this.Vf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Dp.canvasElement, i, s);
    }
  }, {
    key: "$p",
    value: function $p(_ref17) {
      var t = _ref17.context,
        i = _ref17.bitmapSize,
        s = _ref17.horizontalPixelRatio,
        n = _ref17.verticalPixelRatio;
      if (!this.$v()) return;
      t.fillStyle = this.ys.timeScale.borderColor;
      var e = Math.floor(this.Bu.N().S * s),
        r = Math.floor(this.Bu.N().S * n),
        h = this.kp ? i.width - e : 0;
      t.fillRect(h, 0, e, r);
    }
  }, {
    key: "Up",
    value: function Up(_ref18) {
      var t = _ref18.context,
        i = _ref18.bitmapSize;
      L(t, 0, 0, i.width, i.height, this.qv());
    }
  }]);
}();
function Ds(t) {
  return function (i) {
    var _i$ia, _i$ia2;
    return (_i$ia = (_i$ia2 = i.ia) === null || _i$ia2 === void 0 ? void 0 : _i$ia2.call(i, t)) !== null && _i$ia !== void 0 ? _i$ia : [];
  };
}
var Vs = Ds("normal"),
  Is = Ds("top"),
  As = Ds("bottom");
var Bs = /*#__PURE__*/function () {
  function Bs(i, s) {
    var _this46 = this;
    _classCallCheck(this, Bs);
    this.Yv = null, this.jv = null, this.M = null, this.Zv = !1, this.mp = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 0,
      height: 0
    }), this.Kv = new d(), this.gp = new et(5), this.xp = !1, this.Sp = function () {
      _this46.xp || _this46._p.Qt().ar();
    }, this.yp = function () {
      _this46.xp || _this46._p.Qt().ar();
    }, this._p = i, this.Yo = s, this.ys = i.N().layout, this.hp = document.createElement("tr"), this.Xv = document.createElement("td"), this.Xv.style.padding = "0", this.Gv = document.createElement("td"), this.Gv.style.padding = "0", this.kf = document.createElement("td"), this.kf.style.height = "25px", this.kf.style.padding = "0", this.Jv = document.createElement("div"), this.Jv.style.width = "100%", this.Jv.style.height = "100%", this.Jv.style.position = "relative", this.Jv.style.overflow = "hidden", this.kf.appendChild(this.Jv), this.Dp = vs(this.Jv, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Dp.subscribeSuggestedBitmapSizeChanged(this.Sp);
    var n = this.Dp.canvasElement;
    n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Vp = vs(this.Jv, Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
      width: 16,
      height: 16
    })), this.Vp.subscribeSuggestedBitmapSizeChanged(this.yp);
    var e = this.Vp.canvasElement;
    e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.hp.appendChild(this.Xv), this.hp.appendChild(this.kf), this.hp.appendChild(this.Gv), this.Qv(), this._p.Qt()["do"]().i(this.Qv.bind(this), this), this.wf = new rs(this.Vp.canvasElement, this, {
      Wd: function Wd() {
        return !0;
      },
      Fd: function Fd() {
        return !_this46._p.N().handleScroll.horzTouchDrag;
      }
    });
  }
  return _createClass(Bs, [{
    key: "m",
    value: function m() {
      this.wf.m(), null !== this.Yv && this.Yv.m(), null !== this.jv && this.jv.m(), this.Vp.unsubscribeSuggestedBitmapSizeChanged(this.yp), ms(this.Vp.canvasElement), this.Vp.dispose(), this.Dp.unsubscribeSuggestedBitmapSizeChanged(this.Sp), ms(this.Dp.canvasElement), this.Dp.dispose();
    }
  }, {
    key: "Rf",
    value: function Rf() {
      return this.hp;
    }
  }, {
    key: "tm",
    value: function tm() {
      return this.Yv;
    }
  }, {
    key: "im",
    value: function im() {
      return this.jv;
    }
  }, {
    key: "tf",
    value: function tf(t) {
      if (this.Zv) return;
      this.Zv = !0;
      var i = this._p.Qt();
      !i.Bt().Zi() && this._p.N().handleScale.axisPressedMouseMove.time && i.Qu(t.localX);
    }
  }, {
    key: "Jd",
    value: function Jd(t) {
      this.tf(t);
    }
  }, {
    key: "if",
    value: function _if() {
      var t = this._p.Qt();
      !t.Bt().Zi() && this.Zv && (this.Zv = !1, this._p.N().handleScale.axisPressedMouseMove.time && t.ac());
    }
  }, {
    key: "$d",
    value: function $d(t) {
      var i = this._p.Qt();
      !i.Bt().Zi() && this._p.N().handleScale.axisPressedMouseMove.time && i.hc(t.localX);
    }
  }, {
    key: "Hd",
    value: function Hd(t) {
      this.$d(t);
    }
  }, {
    key: "Zd",
    value: function Zd() {
      this.Zv = !1;
      var t = this._p.Qt();
      t.Bt().Zi() && !this._p.N().handleScale.axisPressedMouseMove.time || t.ac();
    }
  }, {
    key: "Yd",
    value: function Yd() {
      this.Zd();
    }
  }, {
    key: "Td",
    value: function Td() {
      this._p.N().handleScale.axisDoubleClickReset.time && this._p.Qt().cn();
    }
  }, {
    key: "Cd",
    value: function Cd() {
      this.Td();
    }
  }, {
    key: "Ed",
    value: function Ed() {
      this._p.Qt().N().handleScale.axisPressedMouseMove.time && this.Kp(1);
    }
  }, {
    key: "uf",
    value: function uf() {
      this.Kp(0);
    }
  }, {
    key: "Df",
    value: function Df() {
      return this.mp;
    }
  }, {
    key: "sm",
    value: function sm() {
      return this.Kv;
    }
  }, {
    key: "nm",
    value: function nm(i, n, e) {
      Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["equalSizes"])(this.mp, i) || (this.mp = i, this.xp = !0, this.Dp.resizeCanvasElement(i), this.Vp.resizeCanvasElement(i), this.xp = !1, this.kf.style.width = "".concat(i.width, "px"), this.kf.style.height = "".concat(i.height, "px"), this.Kv.p(i)), null !== this.Yv && this.Yv.Np(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: n,
        height: i.height
      })), null !== this.jv && this.jv.Np(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: e,
        height: i.height
      }));
    }
  }, {
    key: "rm",
    value: function rm() {
      var t = this.hm();
      return Math.ceil(t.S + t.C + t.k + t.B + t.V + t.am);
    }
  }, {
    key: "kt",
    value: function kt() {
      this._p.Qt().Bt().Va();
    }
  }, {
    key: "Vf",
    value: function Vf() {
      return this.Dp.bitmapSize;
    }
  }, {
    key: "If",
    value: function If(t, i, s) {
      var n = this.Vf();
      n.width > 0 && n.height > 0 && t.drawImage(this.Dp.canvasElement, i, s);
    }
  }, {
    key: "Fp",
    value: function Fp(t) {
      var _this47 = this;
      if (0 === t) return;
      var i = {
        colorSpace: this.ys.colorSpace
      };
      if (1 !== t) {
        this.Dp.applySuggestedBitmapSize();
        var _s44 = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Dp, i);
        null !== _s44 && (_s44.useBitmapCoordinateSpace(function (t) {
          _this47.Up(t), _this47.$p(t), _this47.lm(_s44, As);
        }), this.Yp(_s44), this.lm(_s44, Vs)), null !== this.Yv && this.Yv.Fp(t), null !== this.jv && this.jv.Fp(t);
      }
      this.Vp.applySuggestedBitmapSize();
      var s = Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["tryCreateCanvasRenderingTarget2D"])(this.Vp, i);
      null !== s && (s.useBitmapCoordinateSpace(function (_ref19) {
        var t = _ref19.context,
          i = _ref19.bitmapSize;
        t.clearRect(0, 0, i.width, i.height);
      }), this.om([].concat(_toConsumableArray(this._p.Qt().js()), [this._p.Qt().Yu()]), s), this.lm(s, Is));
    }
  }, {
    key: "lm",
    value: function lm(t, i) {
      var s = this._p.Qt().js();
      var _iterator29 = _createForOfIteratorHelper(s),
        _step29;
      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _n24 = _step29.value;
          Ms(i, function (i) {
            return ws(i, t, !1, void 0);
          }, _n24, void 0);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
      var _iterator30 = _createForOfIteratorHelper(s),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _n25 = _step30.value;
          Ms(i, function (i) {
            return gs(i, t, !1, void 0);
          }, _n25, void 0);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }, {
    key: "Up",
    value: function Up(_ref20) {
      var t = _ref20.context,
        i = _ref20.bitmapSize;
      L(t, 0, 0, i.width, i.height, this._p.Qt().xc());
    }
  }, {
    key: "$p",
    value: function $p(_ref21) {
      var t = _ref21.context,
        i = _ref21.bitmapSize,
        s = _ref21.verticalPixelRatio;
      if (this._p.N().timeScale.borderVisible) {
        t.fillStyle = this._m();
        var _n26 = Math.max(1, Math.floor(this.hm().S * s));
        t.fillRect(0, 0, i.width, _n26);
      }
    }
  }, {
    key: "Yp",
    value: function Yp(t) {
      var _this48 = this;
      var i = this._p.Qt().Bt(),
        s = i.Va();
      if (!s || 0 === s.length) return;
      var n = this.Yo.maxTickMarkWeight(s),
        e = this.hm(),
        r = i.N();
      r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(function (_ref22) {
        var t = _ref22.context,
          i = _ref22.horizontalPixelRatio,
          n = _ref22.verticalPixelRatio;
        t.strokeStyle = _this48._m(), t.fillStyle = _this48._m();
        var r = Math.max(1, Math.floor(i)),
          h = Math.floor(.5 * i);
        t.beginPath();
        var a = Math.round(e.C * n);
        for (var _n27 = s.length; _n27--;) {
          var _e15 = Math.round(s[_n27].coord * i);
          t.rect(_e15 - h, 0, r, a);
        }
        t.fill();
      }), t.useMediaCoordinateSpace(function (_ref23) {
        var t = _ref23.context;
        var i = e.S + e.C + e.B + e.k / 2;
        t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = _this48.H(), t.font = _this48.Lp();
        var _iterator31 = _createForOfIteratorHelper(s),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _e16 = _step31.value;
            if (_e16.weight < n) {
              var _s45 = _e16.needAlignCoordinate ? _this48.um(t, _e16.coord, _e16.label) : _e16.coord;
              t.fillText(_e16.label, _s45, i);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        _this48._p.N().timeScale.allowBoldLabels && (t.font = _this48.dm());
        var _iterator32 = _createForOfIteratorHelper(s),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _e17 = _step32.value;
            if (_e17.weight >= n) {
              var _s46 = _e17.needAlignCoordinate ? _this48.um(t, _e17.coord, _e17.label) : _e17.coord;
              t.fillText(_e17.label, _s46, i);
            }
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      });
    }
  }, {
    key: "um",
    value: function um(t, i, s) {
      var n = this.gp.Vi(t, s),
        e = n / 2,
        r = Math.floor(i - e) + .5;
      return r < 0 ? i += Math.abs(0 - r) : r + n > this.mp.width && (i -= Math.abs(this.mp.width - (r + n))), i;
    }
  }, {
    key: "om",
    value: function om(t, i) {
      var s = this.hm();
      var _iterator33 = _createForOfIteratorHelper(t),
        _step33;
      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var _n28 = _step33.value;
          var _iterator34 = _createForOfIteratorHelper(_n28.cs()),
            _step34;
          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _t54 = _step34.value;
              _t54.Tt().nt(i, s);
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }
  }, {
    key: "_m",
    value: function _m() {
      return this._p.N().timeScale.borderColor;
    }
  }, {
    key: "H",
    value: function H() {
      return this.ys.textColor;
    }
  }, {
    key: "W",
    value: function W() {
      return this.ys.fontSize;
    }
  }, {
    key: "Lp",
    value: function Lp() {
      return S(this.W(), this.ys.fontFamily);
    }
  }, {
    key: "dm",
    value: function dm() {
      return S(this.W(), this.ys.fontFamily, "bold");
    }
  }, {
    key: "hm",
    value: function hm() {
      null === this.M && (this.M = {
        S: 1,
        L: NaN,
        B: NaN,
        V: NaN,
        Ji: NaN,
        C: 5,
        k: NaN,
        P: "",
        Gi: new et(),
        am: 0
      });
      var t = this.M,
        i = this.Lp();
      if (t.P !== i) {
        var _s47 = this.W();
        t.k = _s47, t.P = i, t.B = 3 * _s47 / 12, t.V = 3 * _s47 / 12, t.Ji = 9 * _s47 / 12, t.L = 0, t.am = 4 * _s47 / 12, t.Gi.In();
      }
      return this.M;
    }
  }, {
    key: "Kp",
    value: function Kp(t) {
      this.kf.style.cursor = 1 === t ? "ew-resize" : "default";
    }
  }, {
    key: "Qv",
    value: function Qv() {
      var t = this._p.Qt(),
        i = t.N();
      i.leftPriceScale.visible || null === this.Yv || (this.Xv.removeChild(this.Yv.Rf()), this.Yv.m(), this.Yv = null), i.rightPriceScale.visible || null === this.jv || (this.Gv.removeChild(this.jv.Rf()), this.jv.m(), this.jv = null);
      var s = {
          cc: this._p.Qt().cc()
        },
        n = function n() {
          return i.leftPriceScale.borderVisible && t.Bt().N().borderVisible;
        },
        e = function e() {
          return t.xc();
        };
      i.leftPriceScale.visible && null === this.Yv && (this.Yv = new Rs("left", i, s, n, e), this.Xv.appendChild(this.Yv.Rf())), i.rightPriceScale.visible && null === this.jv && (this.jv = new Rs("right", i, s, n, e), this.Gv.appendChild(this.jv.Rf()));
    }
  }]);
}();
var Es = !!ts && !!navigator.userAgentData && navigator.userAgentData.brands.some(function (t) {
  return t.brand.includes("Chromium");
}) && !!ts && ((_navigator = navigator) !== null && _navigator !== void 0 && (_navigator = _navigator.userAgentData) !== null && _navigator !== void 0 && _navigator.platform ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
var zs = /*#__PURE__*/function () {
  function zs(t, i, s) {
    _classCallCheck(this, zs);
    var n;
    this.fm = [], this.pm = [], this.vm = 0, this.ja = 0, this.no = 0, this.wm = 0, this.gm = 0, this.Mm = null, this.bm = !1, this.sv = new d(), this.nv = new d(), this.Vu = new d(), this.xm = null, this.Sm = null, this.op = t, this.ys = i, this.Yo = s, this.hp = document.createElement("div"), this.hp.classList.add("tv-lightweight-charts"), this.hp.style.overflow = "hidden", this.hp.style.direction = "ltr", this.hp.style.width = "100%", this.hp.style.height = "100%", (n = this.hp).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.Cm = document.createElement("table"), this.Cm.setAttribute("cellspacing", "0"), this.hp.appendChild(this.Cm), this.ym = this.km.bind(this), Ls(this.ys) && this.Pm(!0), this.ts = new Ei(this.Au.bind(this), this.ys, s), this.Qt().ju().i(this.Tm.bind(this), this), this.Rm = new Bs(this, this.Yo), this.Cm.appendChild(this.Rm.Rf());
    var e = i.autoSize && this.Dm();
    var r = this.ys.width,
      h = this.ys.height;
    if (e || 0 === r || 0 === h) {
      var _i59 = t.getBoundingClientRect();
      r = r || _i59.width, h = h || _i59.height;
    }
    this.Vm(r, h), this.Im(), t.appendChild(this.hp), this.Am(), this.ts.Bt().pu().i(this.ts.Ah.bind(this.ts), this), this.ts["do"]().i(this.ts.Ah.bind(this.ts), this);
  }
  return _createClass(zs, [{
    key: "Qt",
    value: function Qt() {
      return this.ts;
    }
  }, {
    key: "N",
    value: function N() {
      return this.ys;
    }
  }, {
    key: "Sf",
    value: function Sf() {
      return this.fm;
    }
  }, {
    key: "Bm",
    value: function Bm() {
      return this.Rm;
    }
  }, {
    key: "m",
    value: function m() {
      this.Pm(!1), 0 !== this.vm && window.cancelAnimationFrame(this.vm), this.ts.ju().u(this), this.ts.Bt().pu().u(this), this.ts["do"]().u(this), this.ts.m();
      var _iterator35 = _createForOfIteratorHelper(this.fm),
        _step35;
      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _t55 = _step35.value;
          this.Cm.removeChild(_t55.Rf()), _t55.Tv().u(this), _t55.Rv().u(this), _t55.m();
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
      this.fm = [];
      var _iterator36 = _createForOfIteratorHelper(this.pm),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _t56 = _step36.value;
          this.Em(_t56);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
      this.pm = [], u(this.Rm).m(), null !== this.hp.parentElement && this.hp.parentElement.removeChild(this.hp), this.Vu.m(), this.sv.m(), this.nv.m(), this.zm();
    }
  }, {
    key: "Vm",
    value: function Vm(i, s) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      if (this.ja === s && this.no === i) return;
      var e = function (i) {
        var s = Math.floor(i.width),
          n = Math.floor(i.height);
        return Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
          width: s - s % 2,
          height: n - n % 2
        });
      }(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: i,
        height: s
      }));
      this.ja = e.height, this.no = e.width;
      var r = this.ja + "px",
        h = this.no + "px";
      u(this.hp).style.height = r, u(this.hp).style.width = h, this.Cm.style.height = r, this.Cm.style.width = h, n ? this.Lm(G.gn(), performance.now()) : this.ts.Ah();
    }
  }, {
    key: "Fp",
    value: function Fp(t) {
      void 0 === t && (t = G.gn());
      for (var _i60 = 0; _i60 < this.fm.length; _i60++) this.fm[_i60].Fp(t.en(_i60).tn);
      this.ys.timeScale.visible && this.Rm.Fp(t.nn());
    }
  }, {
    key: "hr",
    value: function hr(t) {
      var _t$layout;
      var i = Ls(this.ys);
      this.ts.hr(t);
      var s = Ls(this.ys);
      s !== i && this.Pm(s), (_t$layout = t.layout) !== null && _t$layout !== void 0 && _t$layout.panes && this.Om(), this.Am(), this.Nm(t);
    }
  }, {
    key: "Tv",
    value: function Tv() {
      return this.sv;
    }
  }, {
    key: "Rv",
    value: function Rv() {
      return this.nv;
    }
  }, {
    key: "ju",
    value: function ju() {
      return this.Vu;
    }
  }, {
    key: "Wm",
    value: function Wm() {
      null !== this.Mm && (this.Lm(this.Mm, performance.now()), this.Mm = null);
      var t = this.Fm(null),
        i = document.createElement("canvas");
      i.width = t.width, i.height = t.height;
      var s = u(i.getContext("2d"));
      return this.Fm(s), i;
    }
  }, {
    key: "Hm",
    value: function Hm(t) {
      if ("left" === t && !this.Um()) return 0;
      if ("right" === t && !this.$m()) return 0;
      if (0 === this.fm.length) return 0;
      return u("left" === t ? this.fm[0].zv() : this.fm[0].Lv()).Wp();
    }
  }, {
    key: "qm",
    value: function qm() {
      return this.ys.autoSize && null !== this.xm;
    }
  }, {
    key: "Bf",
    value: function Bf() {
      return this.hp;
    }
  }, {
    key: "Ym",
    value: function Ym(t) {
      this.Sm = t, this.Sm ? this.Bf().style.setProperty("cursor", t) : this.Bf().style.removeProperty("cursor");
    }
  }, {
    key: "jm",
    value: function jm() {
      return this.Sm;
    }
  }, {
    key: "Zm",
    value: function Zm(t) {
      return _(this.fm[t]).Df();
    }
  }, {
    key: "Om",
    value: function Om() {
      this.pm.forEach(function (t) {
        t.kt();
      });
    }
  }, {
    key: "Nm",
    value: function Nm(t) {
      (void 0 !== t.autoSize || !this.xm || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.xm && this.Dm(), !1 === t.autoSize && null !== this.xm && this.zm(), t.autoSize || void 0 === t.width && void 0 === t.height || this.Vm(t.width || this.no, t.height || this.ja));
    }
  }, {
    key: "Fm",
    value: function Fm(i) {
      var _this49 = this;
      var s = 0,
        n = 0;
      var e = this.fm[0],
        r = function r(t, s) {
          var n = 0;
          for (var _e18 = 0; _e18 < _this49.fm.length; _e18++) {
            var _r15 = _this49.fm[_e18],
              _h7 = u("left" === t ? _r15.zv() : _r15.Lv()),
              _a13 = _h7.Vf();
            if (null !== i && _h7.If(i, s, n), n += _a13.height, _e18 < _this49.fm.length - 1) {
              var _t57 = _this49.pm[_e18],
                _r16 = _t57.Vf();
              null !== i && _t57.If(i, s, n), n += _r16.height;
            }
          }
        };
      if (this.Um()) {
        r("left", 0);
        s += u(e.zv()).Vf().width;
      }
      for (var _t58 = 0; _t58 < this.fm.length; _t58++) {
        var _e19 = this.fm[_t58],
          _r17 = _e19.Vf();
        if (null !== i && _e19.If(i, s, n), n += _r17.height, _t58 < this.fm.length - 1) {
          var _e20 = this.pm[_t58],
            _r18 = _e20.Vf();
          null !== i && _e20.If(i, s, n), n += _r18.height;
        }
      }
      if (s += e.Vf().width, this.$m()) {
        r("right", s);
        s += u(e.Lv()).Vf().width;
      }
      var h = function h(t, s, n) {
        u("left" === t ? _this49.Rm.tm() : _this49.Rm.im()).If(u(i), s, n);
      };
      if (this.ys.timeScale.visible) {
        var _t59 = this.Rm.Vf();
        if (null !== i) {
          var _s48 = 0;
          this.Um() && (h("left", _s48, n), _s48 = u(e.zv()).Vf().width), this.Rm.If(i, _s48, n), _s48 += _t59.width, this.$m() && h("right", _s48, n);
        }
        n += _t59.height;
      }
      return Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: s,
        height: n
      });
    }
  }, {
    key: "Km",
    value: function Km() {
      var i = 0,
        s = 0,
        n = 0;
      var _iterator37 = _createForOfIteratorHelper(this.fm),
        _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _t60 = _step37.value;
          this.Um() && (s = Math.max(s, u(_t60.zv()).zp(), this.ys.leftPriceScale.minimumWidth)), this.$m() && (n = Math.max(n, u(_t60.Lv()).zp(), this.ys.rightPriceScale.minimumWidth)), i += _t60.fo();
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
      s = ns(s), n = ns(n);
      var e = this.no,
        r = this.ja,
        h = Math.max(e - s - n, 0),
        a = 1 * this.pm.length,
        l = this.ys.timeScale.visible;
      var o = l ? Math.max(this.Rm.rm(), this.ys.timeScale.minimumHeight) : 0;
      var _;
      o = (_ = o) + _ % 2;
      var c = a + o,
        d = r < c ? 0 : r - c,
        f = d / i;
      var p = 0;
      var v = window.devicePixelRatio || 1;
      for (var _i61 = 0; _i61 < this.fm.length; ++_i61) {
        var _e21 = this.fm[_i61];
        _e21.vv(this.ts.$s()[_i61]);
        var _r19 = 0,
          _a14 = 0;
        _a14 = _i61 === this.fm.length - 1 ? Math.ceil((d - p) * v) / v : Math.round(_e21.fo() * f * v) / v, _r19 = Math.max(_a14, 2), p += _r19, _e21.Np(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
          width: h,
          height: _r19
        })), this.Um() && _e21.Vv(s, "left"), this.$m() && _e21.Vv(n, "right"), _e21.Wf() && this.ts.Zu(_e21.Wf(), _r19);
      }
      this.Rm.nm(Object(fancy_canvas__WEBPACK_IMPORTED_MODULE_0__["size"])({
        width: l ? h : 0,
        height: o
      }), l ? s : 0, l ? n : 0), this.ts.vo(h), this.wm !== s && (this.wm = s), this.gm !== n && (this.gm = n);
    }
  }, {
    key: "Pm",
    value: function Pm(t) {
      t ? this.hp.addEventListener("wheel", this.ym, {
        passive: !1
      }) : this.hp.removeEventListener("wheel", this.ym);
    }
  }, {
    key: "Xm",
    value: function Xm(t) {
      switch (t.deltaMode) {
        case t.DOM_DELTA_PAGE:
          return 120;
        case t.DOM_DELTA_LINE:
          return 32;
      }
      return Es ? 1 / window.devicePixelRatio : 1;
    }
  }, {
    key: "km",
    value: function km(t) {
      if (!(0 !== t.deltaX && this.ys.handleScroll.mouseWheel || 0 !== t.deltaY && this.ys.handleScale.mouseWheel)) return;
      var i = this.Xm(t),
        s = i * t.deltaX / 100,
        n = -i * t.deltaY / 100;
      if (t.cancelable && t.preventDefault(), 0 !== n && this.ys.handleScale.mouseWheel) {
        var _i62 = Math.sign(n) * Math.min(1, Math.abs(n)),
          _s49 = t.clientX - this.hp.getBoundingClientRect().left;
        this.Qt().tc(_s49, _i62);
      }
      0 !== s && this.ys.handleScroll.mouseWheel && this.Qt().sc(-80 * s);
    }
  }, {
    key: "Lm",
    value: function Lm(t, i) {
      var _this$Mm;
      var s = t.nn();
      3 === s && this.Gm(), 3 !== s && 2 !== s || (this.Jm(t), this.Qm(t, i), this.Rm.kt(), this.fm.forEach(function (t) {
        t.wv();
      }), 3 === ((_this$Mm = this.Mm) === null || _this$Mm === void 0 ? void 0 : _this$Mm.nn()) && (this.Mm.vn(t), this.Gm(), this.Jm(this.Mm), this.Qm(this.Mm, i), t = this.Mm, this.Mm = null)), this.Fp(t);
    }
  }, {
    key: "Qm",
    value: function Qm(t, i) {
      var _iterator38 = _createForOfIteratorHelper(t.pn()),
        _step38;
      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var _s50 = _step38.value;
          this.mn(_s50, i);
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
    }
  }, {
    key: "Jm",
    value: function Jm(t) {
      var i = this.ts.$s();
      for (var _s51 = 0; _s51 < i.length; _s51++) t.en(_s51).sn && i[_s51].Bo();
    }
  }, {
    key: "mn",
    value: function mn(t, i) {
      var s = this.ts.Bt();
      switch (t.an) {
        case 0:
          s.mu();
          break;
        case 1:
          s.wu(t.Ft);
          break;
        case 2:
          s.dn(t.Ft);
          break;
        case 3:
          s.fn(t.Ft);
          break;
        case 4:
          s.eu();
          break;
        case 5:
          t.Ft.uu(i) || s.fn(t.Ft.cu(i));
      }
    }
  }, {
    key: "Au",
    value: function Au(t) {
      var _this50 = this;
      null !== this.Mm ? this.Mm.vn(t) : this.Mm = t, this.bm || (this.bm = !0, this.vm = window.requestAnimationFrame(function (t) {
        if (_this50.bm = !1, _this50.vm = 0, null !== _this50.Mm) {
          var _i63 = _this50.Mm;
          _this50.Mm = null, _this50.Lm(_i63, t);
          var _iterator39 = _createForOfIteratorHelper(_i63.pn()),
            _step39;
          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var _s52 = _step39.value;
              if (5 === _s52.an && !_s52.Ft.uu(t)) {
                _this50.Qt()._n(_s52.Ft);
                break;
              }
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }
        }
      }));
    }
  }, {
    key: "Gm",
    value: function Gm() {
      this.Im();
    }
  }, {
    key: "Em",
    value: function Em(t) {
      this.Cm.removeChild(t.Rf()), t.m();
    }
  }, {
    key: "Im",
    value: function Im() {
      var t = this.ts.$s(),
        i = t.length,
        s = this.fm.length;
      for (var _t61 = i; _t61 < s; _t61++) {
        var _t62 = _(this.fm.pop());
        this.Cm.removeChild(_t62.Rf()), _t62.Tv().u(this), _t62.Rv().u(this), _t62.m();
        var _i64 = this.pm.pop();
        void 0 !== _i64 && this.Em(_i64);
      }
      for (var _n29 = s; _n29 < i; _n29++) {
        var _i65 = new Ts(this, t[_n29]);
        if (_i65.Tv().i(this.tw.bind(this, _i65), this), _i65.Rv().i(this.iw.bind(this, _i65), this), this.fm.push(_i65), _n29 > 0) {
          var _t63 = new us(this, _n29 - 1, _n29);
          this.pm.push(_t63), this.Cm.insertBefore(_t63.Rf(), this.Rm.Rf());
        }
        this.Cm.insertBefore(_i65.Rf(), this.Rm.Rf());
      }
      for (var _s53 = 0; _s53 < i; _s53++) {
        var _i66 = t[_s53],
          _n30 = this.fm[_s53];
        _n30.Wf() !== _i66 ? _n30.vv(_i66) : _n30.pv();
      }
      this.Am(), this.Km();
    }
  }, {
    key: "sw",
    value: function sw(t, i, s, n) {
      var e = new Map();
      if (null !== t) {
        this.ts.js().forEach(function (i) {
          var s = i.Ks().Wr(t);
          null !== s && e.set(i, s);
        });
      }
      var r;
      if (null !== t) {
        var _this$ts$Bt$ss;
        var _i67 = (_this$ts$Bt$ss = this.ts.Bt().ss(t)) === null || _this$ts$Bt$ss === void 0 ? void 0 : _this$ts$Bt$ss.originalTime;
        void 0 !== _i67 && (r = _i67);
      }
      var h = this.Qt().Hu(),
        a = null !== h && h.Wo instanceof Yt ? h.Wo : void 0,
        l = null !== h && void 0 !== h.Fo ? h.Fo.Zn : void 0,
        o = this.nw(n);
      return {
        ew: r,
        Re: t !== null && t !== void 0 ? t : void 0,
        rw: i !== null && i !== void 0 ? i : void 0,
        hw: -1 !== o ? o : void 0,
        aw: a,
        lw: e,
        ow: l,
        _w: s !== null && s !== void 0 ? s : void 0
      };
    }
  }, {
    key: "nw",
    value: function nw(t) {
      var i = -1;
      if (t) i = this.fm.indexOf(t);else {
        var _t64 = this.Qt().Yu().Us();
        null !== _t64 && (i = this.Qt().$s().indexOf(_t64));
      }
      return i;
    }
  }, {
    key: "tw",
    value: function tw(t, i, s, n) {
      var _this51 = this;
      this.sv.p(function () {
        return _this51.sw(i, s, n, t);
      });
    }
  }, {
    key: "iw",
    value: function iw(t, i, s, n) {
      var _this52 = this;
      this.nv.p(function () {
        return _this52.sw(i, s, n, t);
      });
    }
  }, {
    key: "Tm",
    value: function Tm(t, i, s) {
      var _this$Qt$Hu$Uo,
        _this$Qt$Hu,
        _this53 = this;
      this.Ym((_this$Qt$Hu$Uo = (_this$Qt$Hu = this.Qt().Hu()) === null || _this$Qt$Hu === void 0 ? void 0 : _this$Qt$Hu.Uo) !== null && _this$Qt$Hu$Uo !== void 0 ? _this$Qt$Hu$Uo : null), this.Vu.p(function () {
        return _this53.sw(t, i, s);
      });
    }
  }, {
    key: "Am",
    value: function Am() {
      var t = this.ys.timeScale.visible ? "" : "none";
      this.Rm.Rf().style.display = t;
    }
  }, {
    key: "Um",
    value: function Um() {
      return this.fm[0].Wf().Co().N().visible;
    }
  }, {
    key: "$m",
    value: function $m() {
      return this.fm[0].Wf().yo().N().visible;
    }
  }, {
    key: "Dm",
    value: function Dm() {
      var _this54 = this;
      return "ResizeObserver" in window && (this.xm = new ResizeObserver(function (t) {
        var i = t[t.length - 1];
        i && _this54.Vm(i.contentRect.width, i.contentRect.height);
      }), this.xm.observe(this.op, {
        box: "border-box"
      }), !0);
    }
  }, {
    key: "zm",
    value: function zm() {
      null !== this.xm && this.xm.disconnect(), this.xm = null;
    }
  }]);
}();
function Ls(t) {
  return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Os(t) {
  return void 0 === t.open && void 0 === t.value;
}
function Ns(t) {
  return function (t) {
    return void 0 !== t.open;
  }(t) || function (t) {
    return void 0 !== t.value;
  }(t);
}
function Ws(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      ew: n
    };
  return void 0 !== s.color && (r.R = s.color), r;
}
function Fs(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      ew: n
    };
  return void 0 !== s.lineColor && (r.vt = s.lineColor), void 0 !== s.topColor && (r.mr = s.topColor), void 0 !== s.bottomColor && (r.wr = s.bottomColor), r;
}
function Hs(t, i, s, n) {
  var e = s.value,
    r = {
      Re: i,
      wt: t,
      Ft: [e, e, e, e],
      ew: n
    };
  return void 0 !== s.topLineColor && (r.gr = s.topLineColor), void 0 !== s.bottomLineColor && (r.Mr = s.bottomLineColor), void 0 !== s.topFillColor1 && (r.br = s.topFillColor1), void 0 !== s.topFillColor2 && (r.Sr = s.topFillColor2), void 0 !== s.bottomFillColor1 && (r.Cr = s.bottomFillColor1), void 0 !== s.bottomFillColor2 && (r.yr = s.bottomFillColor2), r;
}
function Us(t, i, s, n) {
  var e = {
    Re: i,
    wt: t,
    Ft: [s.open, s.high, s.low, s.close],
    ew: n
  };
  return void 0 !== s.color && (e.R = s.color), e;
}
function $s(t, i, s, n) {
  var e = {
    Re: i,
    wt: t,
    Ft: [s.open, s.high, s.low, s.close],
    ew: n
  };
  return void 0 !== s.color && (e.R = s.color), void 0 !== s.borderColor && (e.Ht = s.borderColor), void 0 !== s.wickColor && (e.vr = s.wickColor), e;
}
function qs(t, i, s, n, e) {
  var r = _(e)(s),
    h = Math.max.apply(Math, _toConsumableArray(r)),
    a = Math.min.apply(Math, _toConsumableArray(r)),
    l = r[r.length - 1],
    o = [l, h, a, l],
    u = s.time,
    c = s.color,
    d = _objectWithoutProperties(s, _excluded);
  return {
    Re: i,
    wt: t,
    Ft: o,
    ew: n,
    se: d,
    R: c
  };
}
function Ys(t) {
  return void 0 !== t.Ft;
}
function js(t, i) {
  return void 0 !== i.customValues && (t.uw = i.customValues), t;
}
function Zs(t) {
  return function (i, s, n, e, r, h) {
    return function (t, i) {
      return i ? i(t) : Os(t);
    }(n, h) ? js({
      wt: i,
      Re: s,
      ew: e
    }, n) : js(t(i, s, n, e, r), n);
  };
}
function Ks(t) {
  return {
    Candlestick: Zs($s),
    Bar: Zs(Us),
    Area: Zs(Fs),
    Baseline: Zs(Hs),
    Histogram: Zs(Ws),
    Line: Zs(Ws),
    Custom: Zs(qs)
  }[t];
}
function Xs(t) {
  return {
    Re: 0,
    cw: new Map(),
    Hh: t
  };
}
function Gs(t, i) {
  if (void 0 !== t && 0 !== t.length) return {
    dw: i.key(t[0].wt),
    fw: i.key(t[t.length - 1].wt)
  };
}
function Js(t) {
  var i;
  return t.forEach(function (t) {
    void 0 === i && (i = t.ew);
  }), _(i);
}
var Qs = /*#__PURE__*/function () {
  function Qs(t) {
    _classCallCheck(this, Qs);
    this.pw = new Map(), this.mw = new Map(), this.ww = new Map(), this.gw = [], this.Yo = t;
  }
  return _createClass(Qs, [{
    key: "m",
    value: function m() {
      this.pw.clear(), this.mw.clear(), this.ww.clear(), this.gw = [];
    }
  }, {
    key: "Mw",
    value: function Mw(t, i) {
      var _this55 = this;
      var s = 0 !== this.pw.size,
        n = !1;
      var e = this.mw.get(t);
      if (void 0 !== e) if (1 === this.mw.size) s = !1, n = !0, this.pw.clear();else {
        var _iterator40 = _createForOfIteratorHelper(this.gw),
          _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var _i68 = _step40.value;
            _i68.pointData.cw["delete"](t) && (n = !0);
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
      }
      var r = [];
      if (0 !== i.length) {
        var _s54 = i.map(function (t) {
            return t.time;
          }),
          _e22 = this.Yo.createConverterToInternalObj(i),
          _h8 = Ks(t.Rr()),
          _a15 = t.da(),
          _l7 = t.pa();
        r = i.map(function (i, r) {
          var o = _e22(i.time),
            _ = _this55.Yo.key(o);
          var u = _this55.pw.get(_);
          void 0 === u && (u = Xs(o), _this55.pw.set(_, u), n = !0);
          var c = _h8(o, u.Re, i, _s54[r], _a15, _l7);
          return u.cw.set(t, c), c;
        });
      }
      s && this.bw(), this.xw(t, r);
      var h = -1;
      if (n) {
        var _t65 = [];
        this.pw.forEach(function (i) {
          _t65.push({
            timeWeight: 0,
            time: i.Hh,
            pointData: i,
            originalTime: Js(i.cw)
          });
        }), _t65.sort(function (t, i) {
          return _this55.Yo.key(t.time) - _this55.Yo.key(i.time);
        }), h = this.Sw(_t65);
      }
      return this.Cw(t, h, function (t, i, s) {
        var n = Gs(t, s),
          e = Gs(i, s);
        if (void 0 !== n && void 0 !== e) return {
          yw: !1,
          zh: n.fw >= e.fw && n.dw >= e.dw
        };
      }(this.mw.get(t), e, this.Yo));
    }
  }, {
    key: "vc",
    value: function vc(t) {
      return this.Mw(t, []);
    }
  }, {
    key: "kw",
    value: function kw(t, i, s) {
      var _this56 = this;
      var n = i;
      !function (t) {
        void 0 === t.ew && (t.ew = t.time);
      }(n), this.Yo.preprocessData(i);
      var e = this.Yo.createConverterToInternalObj([i])(i.time),
        r = this.ww.get(t);
      if (!s && void 0 !== r && this.Yo.key(e) < this.Yo.key(r)) throw new Error("Cannot update oldest data, last time=".concat(r, ", new time=").concat(e));
      var h = this.pw.get(this.Yo.key(e));
      if (s && void 0 === h) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
      var a = void 0 === h;
      void 0 === h && (h = Xs(e), this.pw.set(this.Yo.key(e), h));
      var l = Ks(t.Rr()),
        o = t.da(),
        _ = t.pa(),
        u = l(e, h.Re, i, n.ew, o, _);
      h.cw.set(t, u), s ? this.Pw(t, u, h.Re) : this.Tw(t, u);
      var c = {
        zh: Ys(u),
        yw: s
      };
      if (!a) return this.Cw(t, -1, c);
      var d = {
          timeWeight: 0,
          time: h.Hh,
          pointData: h,
          originalTime: Js(h.cw)
        },
        f = yt(this.gw, this.Yo.key(d.time), function (t, i) {
          return _this56.Yo.key(t.time) < i;
        });
      this.gw.splice(f, 0, d);
      for (var _t66 = f; _t66 < this.gw.length; ++_t66) tn(this.gw[_t66].pointData, _t66);
      return this.Yo.fillWeightsForPoints(this.gw, f), this.Cw(t, f, c);
    }
  }, {
    key: "Tw",
    value: function Tw(t, i) {
      var s = this.mw.get(t);
      void 0 === s && (s = [], this.mw.set(t, s));
      var n = 0 !== s.length ? s[s.length - 1] : null;
      null === n || this.Yo.key(i.wt) > this.Yo.key(n.wt) ? Ys(i) && s.push(i) : Ys(i) ? s[s.length - 1] = i : s.splice(-1, 1), this.ww.set(t, i.wt);
    }
  }, {
    key: "Pw",
    value: function Pw(t, i, s) {
      var n = this.mw.get(t);
      if (void 0 === n) return;
      var e = yt(n, s, function (t, i) {
        return t.Re < i;
      });
      Ys(i) ? n[e] = i : n.splice(e, 1);
    }
  }, {
    key: "xw",
    value: function xw(t, i) {
      0 !== i.length ? (this.mw.set(t, i.filter(Ys)), this.ww.set(t, i[i.length - 1].wt)) : (this.mw["delete"](t), this.ww["delete"](t));
    }
  }, {
    key: "bw",
    value: function bw() {
      var _iterator41 = _createForOfIteratorHelper(this.gw),
        _step41;
      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var _t67 = _step41.value;
          0 === _t67.pointData.cw.size && this.pw["delete"](this.Yo.key(_t67.time));
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }
    }
  }, {
    key: "Sw",
    value: function Sw(t) {
      var i = -1;
      for (var _s55 = 0; _s55 < this.gw.length && _s55 < t.length; ++_s55) {
        var _n31 = this.gw[_s55],
          _e23 = t[_s55];
        if (this.Yo.key(_n31.time) !== this.Yo.key(_e23.time)) {
          i = _s55;
          break;
        }
        _e23.timeWeight = _n31.timeWeight, tn(_e23.pointData, _s55);
      }
      if (-1 === i && this.gw.length !== t.length && (i = Math.min(this.gw.length, t.length)), -1 === i) return -1;
      for (var _s56 = i; _s56 < t.length; ++_s56) tn(t[_s56].pointData, _s56);
      return this.Yo.fillWeightsForPoints(t, i), this.gw = t, i;
    }
  }, {
    key: "Rw",
    value: function Rw() {
      if (0 === this.mw.size) return null;
      var t = 0;
      return this.mw.forEach(function (i) {
        0 !== i.length && (t = Math.max(t, i[i.length - 1].Re));
      }), t;
    }
  }, {
    key: "Cw",
    value: function Cw(t, i, s) {
      var n = {
        wo: new Map(),
        Bt: {
          Y_: this.Rw()
        }
      };
      if (-1 !== i) this.mw.forEach(function (i, e) {
        n.wo.set(e, {
          se: i,
          Dw: e === t ? s : void 0
        });
      }), this.mw.has(t) || n.wo.set(t, {
        se: [],
        Dw: s
      }), n.Bt.Vw = this.gw, n.Bt.Iw = i;else {
        var _i69 = this.mw.get(t);
        n.wo.set(t, {
          se: _i69 || [],
          Dw: s
        });
      }
      return n;
    }
  }]);
}();
function tn(t, i) {
  t.Re = i, t.cw.forEach(function (t) {
    t.Re = i;
  });
}
function sn(t, i) {
  return t.wt < i;
}
function nn(t, i) {
  return i < t.wt;
}
function en(t, i, s) {
  var n = i.Uh(),
    e = i.bi(),
    r = yt(t, n, sn),
    h = kt(t, e, nn);
  if (!s) return {
    from: r,
    to: h
  };
  var a = r,
    l = h;
  return r > 0 && r < t.length && t[r].wt >= n && (a = r - 1), h > 0 && h < t.length && t[h - 1].wt <= e && (l = h + 1), {
    from: a,
    to: l
  };
}
var rn = /*#__PURE__*/function () {
  function rn(t, i, s) {
    _classCallCheck(this, rn);
    this.Aw = !0, this.Bw = !0, this.Ew = !0, this.zw = [], this.Lw = null, this.Jn = t, this.Qn = i, this.Ow = s;
  }
  return _createClass(rn, [{
    key: "kt",
    value: function kt(t) {
      this.Aw = !0, "data" === t && (this.Bw = !0), "options" === t && (this.Ew = !0);
    }
  }, {
    key: "Tt",
    value: function Tt() {
      return this.Jn.Vt() ? (this.Nw(), null === this.Lw ? null : this.Ww) : null;
    }
  }, {
    key: "Fw",
    value: function Fw() {
      var _this57 = this;
      this.zw = this.zw.map(function (t) {
        return _objectSpread(_objectSpread({}, t), _this57.Jn.Rh().Dr(t.wt));
      });
    }
  }, {
    key: "Hw",
    value: function Hw() {
      this.Lw = null;
    }
  }, {
    key: "Nw",
    value: function Nw() {
      this.Bw && (this.Uw(), this.Bw = !1), this.Ew && (this.Fw(), this.Ew = !1), this.Aw && (this.$w(), this.Aw = !1);
    }
  }, {
    key: "$w",
    value: function $w() {
      var t = this.Jn.Wt(),
        i = this.Qn.Bt();
      if (this.Hw(), i.Zi() || t.Zi()) return;
      var s = i.ye();
      if (null === s) return;
      if (0 === this.Jn.Ks().zr()) return;
      var n = this.Jn.zt();
      null !== n && (this.Lw = en(this.zw, s, this.Ow), this.qw(t, i, n.Ft), this.Yw());
    }
  }]);
}();
var hn = /*#__PURE__*/function () {
  function hn(t, i) {
    _classCallCheck(this, hn);
    this.jw = t, this.Yi = i;
  }
  return _createClass(hn, [{
    key: "nt",
    value: function nt(t, i, s) {
      this.jw.draw(t, this.Yi, i, s);
    }
  }]);
}();
var an = /*#__PURE__*/function (_rn) {
  function an(t, i, s) {
    var _this58;
    _classCallCheck(this, an);
    _this58 = _callSuper(this, an, [t, i, !1]), _this58.sh = s, _this58.Ww = new hn(_this58.sh.renderer(), function (i) {
      var s = t.zt();
      return null === s ? null : t.Wt().Nt(i, s.Ft);
    });
    return _this58;
  }
  _inherits(an, _rn);
  return _createClass(an, [{
    key: "fa",
    value: function fa(t) {
      return this.sh.priceValueBuilder(t);
    }
  }, {
    key: "va",
    value: function va(t) {
      return this.sh.isWhitespace(t);
    }
  }, {
    key: "Uw",
    value: function Uw() {
      var t = this.Jn.Rh();
      this.zw = this.Jn.Ks().Hr().map(function (i) {
        return _objectSpread(_objectSpread({
          wt: i.Re,
          _t: NaN
        }, t.Dr(i.Re)), {}, {
          Zw: i.se
        });
      });
    }
  }, {
    key: "qw",
    value: function qw(t, i) {
      i.j_(this.zw, b(this.Lw));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      this.sh.update({
        bars: this.zw.map(ln),
        barSpacing: this.Qn.Bt().Q_(),
        visibleRange: this.Lw
      }, this.Jn.N());
    }
  }]);
}(rn);
function ln(t) {
  return {
    x: t._t,
    time: t.wt,
    originalData: t.Zw,
    barColor: t.cr
  };
}
var on = {
    color: "#2196f3"
  },
  _n = function _n(t, i, s) {
    var n = c(s);
    return new an(t, i, n);
  };
function un(t) {
  var i = {
    value: t.Ft[3],
    time: t.ew
  };
  return void 0 !== t.uw && (i.customValues = t.uw), i;
}
function cn(t) {
  var i = un(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function dn(t) {
  var i = un(t);
  return void 0 !== t.vt && (i.lineColor = t.vt), void 0 !== t.mr && (i.topColor = t.mr), void 0 !== t.wr && (i.bottomColor = t.wr), i;
}
function fn(t) {
  var i = un(t);
  return void 0 !== t.gr && (i.topLineColor = t.gr), void 0 !== t.Mr && (i.bottomLineColor = t.Mr), void 0 !== t.br && (i.topFillColor1 = t.br), void 0 !== t.Sr && (i.topFillColor2 = t.Sr), void 0 !== t.Cr && (i.bottomFillColor1 = t.Cr), void 0 !== t.yr && (i.bottomFillColor2 = t.yr), i;
}
function pn(t) {
  var i = {
    open: t.Ft[0],
    high: t.Ft[1],
    low: t.Ft[2],
    close: t.Ft[3],
    time: t.ew
  };
  return void 0 !== t.uw && (i.customValues = t.uw), i;
}
function vn(t) {
  var i = pn(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function mn(t) {
  var i = pn(t),
    s = t.R,
    n = t.Ht,
    e = t.vr;
  return void 0 !== s && (i.color = s), void 0 !== n && (i.borderColor = n), void 0 !== e && (i.wickColor = e), i;
}
function wn(t) {
  return {
    Area: dn,
    Line: cn,
    Baseline: fn,
    Histogram: cn,
    Bar: vn,
    Candlestick: mn,
    Custom: gn
  }[t];
}
function gn(t) {
  var i = t.ew;
  return _objectSpread(_objectSpread({}, t.se), {}, {
    time: i
  });
}
var Mn = {
    vertLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: !0,
      labelVisible: !0,
      labelBackgroundColor: "#131722"
    },
    horzLine: {
      color: "#9598A1",
      width: 1,
      style: 3,
      visible: !0,
      labelVisible: !0,
      labelBackgroundColor: "#131722"
    },
    mode: 1
  },
  bn = {
    vertLines: {
      color: "#D6DCDE",
      style: 0,
      visible: !0
    },
    horzLines: {
      color: "#D6DCDE",
      style: 0,
      visible: !0
    }
  },
  xn = {
    background: {
      type: "solid",
      color: "#FFFFFF"
    },
    textColor: "#191919",
    fontSize: 12,
    fontFamily: x,
    panes: {
      enableResize: !0,
      separatorColor: "#E0E3EB",
      separatorHoverColor: "rgba(178, 181, 189, 0.2)"
    },
    attributionLogo: !0,
    colorSpace: "srgb",
    colorParsers: []
  },
  Sn = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    ticksVisible: !1,
    scaleMargins: {
      bottom: .1,
      top: .2
    },
    minimumWidth: 0
  },
  Cn = {
    rightOffset: 0,
    barSpacing: 6,
    minBarSpacing: .5,
    maxBarSpacing: 0,
    fixLeftEdge: !1,
    fixRightEdge: !1,
    lockVisibleTimeRangeOnResize: !1,
    rightBarStaysOnScroll: !1,
    borderVisible: !0,
    borderColor: "#2B2B43",
    visible: !0,
    timeVisible: !1,
    secondsVisible: !0,
    shiftVisibleRangeOnNewBar: !0,
    allowShiftVisibleRangeOnWhitespaceReplacement: !1,
    ticksVisible: !1,
    uniformDistribution: !1,
    minimumHeight: 0,
    allowBoldLabels: !0,
    ignoreWhitespaceIndices: !1
  };
function yn() {
  return {
    width: 0,
    height: 0,
    autoSize: !1,
    layout: xn,
    crosshair: Mn,
    grid: bn,
    overlayPriceScales: _objectSpread({}, Sn),
    leftPriceScale: _objectSpread(_objectSpread({}, Sn), {}, {
      visible: !1
    }),
    rightPriceScale: _objectSpread(_objectSpread({}, Sn), {}, {
      visible: !0
    }),
    timeScale: Cn,
    localization: {
      locale: ts ? navigator.language : "",
      dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
      mouseWheel: !0,
      pressedMouseMove: !0,
      horzTouchDrag: !0,
      vertTouchDrag: !0
    },
    handleScale: {
      axisPressedMouseMove: {
        time: !0,
        price: !0
      },
      axisDoubleClickReset: {
        time: !0,
        price: !0
      },
      mouseWheel: !0,
      pinch: !0
    },
    kineticScroll: {
      mouse: !1,
      touch: !0
    },
    trackingMode: {
      exitMode: 1
    }
  };
}
var kn = /*#__PURE__*/function () {
  function kn(t, i, s) {
    _classCallCheck(this, kn);
    this.bf = t, this.Kw = i, this.Xw = s !== null && s !== void 0 ? s : 0;
  }
  return _createClass(kn, [{
    key: "applyOptions",
    value: function applyOptions(t) {
      this.bf.Qt().$u(this.Kw, t, this.Xw);
    }
  }, {
    key: "options",
    value: function options() {
      return this.Yi().N();
    }
  }, {
    key: "width",
    value: function width() {
      return X(this.Kw) ? this.bf.Hm(this.Kw) : 0;
    }
  }, {
    key: "Yi",
    value: function Yi() {
      return u(this.bf.Qt().qu(this.Kw, this.Xw)).Wt;
    }
  }]);
}();
var Pn = /*#__PURE__*/function () {
  function Pn(t, i, s, n) {
    _classCallCheck(this, Pn);
    this.bf = t, this.yt = s, this.Gw = i, this.Jw = n;
  }
  return _createClass(Pn, [{
    key: "getHeight",
    value: function getHeight() {
      return this.yt.$t();
    }
  }, {
    key: "setHeight",
    value: function setHeight(t) {
      var i = this.bf.Qt(),
        s = i.Cc(this.yt);
      i.Xu(s, t);
    }
  }, {
    key: "paneIndex",
    value: function paneIndex() {
      return this.bf.Qt().Cc(this.yt);
    }
  }, {
    key: "moveTo",
    value: function moveTo(t) {
      var i = this.paneIndex();
      i !== t && (o(t >= 0 && t < this.bf.Sf().length, "Invalid pane index"), this.bf.Qt().Gu(i, t));
    }
  }, {
    key: "getSeries",
    value: function getSeries() {
      var _this$yt$wo$map,
        _this59 = this;
      return (_this$yt$wo$map = this.yt.wo().map(function (t) {
        return _this59.Gw(t);
      })) !== null && _this$yt$wo$map !== void 0 ? _this$yt$wo$map : [];
    }
  }, {
    key: "getHTMLElement",
    value: function getHTMLElement() {
      return this.bf.Sf()[this.paneIndex()].Rf();
    }
  }, {
    key: "attachPrimitive",
    value: function attachPrimitive(t) {
      var _this60 = this;
      this.yt.ua(t), t.attached && t.attached({
        chart: this.Jw,
        requestUpdate: function requestUpdate() {
          return _this60.yt.Qt().Ah();
        }
      });
    }
  }, {
    key: "detachPrimitive",
    value: function detachPrimitive(t) {
      this.yt.ca(t);
    }
  }, {
    key: "priceScale",
    value: function priceScale(t) {
      if (null === this.yt.co(t)) throw new Error("Cannot find price scale with id: ".concat(t));
      return new kn(this.bf, t, this.paneIndex());
    }
  }]);
}();
var Tn = {
  color: "#FF0000",
  price: 0,
  lineStyle: 2,
  lineWidth: 1,
  lineVisible: !0,
  axisLabelVisible: !0,
  title: "",
  axisLabelColor: "",
  axisLabelTextColor: ""
};
var Rn = /*#__PURE__*/function () {
  function Rn(t) {
    _classCallCheck(this, Rn);
    this.ir = t;
  }
  return _createClass(Rn, [{
    key: "applyOptions",
    value: function applyOptions(t) {
      this.ir.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return this.ir.N();
    }
  }, {
    key: "Qw",
    value: function Qw() {
      return this.ir;
    }
  }]);
}();
var Dn = /*#__PURE__*/function () {
  function Dn(t, i, s, n, e, r) {
    _classCallCheck(this, Dn);
    this.tg = new d(), this.Jn = t, this.ig = i, this.sg = s, this.Yo = e, this.Jw = n, this.ng = r;
  }
  return _createClass(Dn, [{
    key: "m",
    value: function m() {
      this.tg.m();
    }
  }, {
    key: "priceFormatter",
    value: function priceFormatter() {
      return this.Jn.ra();
    }
  }, {
    key: "priceToCoordinate",
    value: function priceToCoordinate(t) {
      var i = this.Jn.zt();
      return null === i ? null : this.Jn.Wt().Nt(t, i.Ft);
    }
  }, {
    key: "coordinateToPrice",
    value: function coordinateToPrice(t) {
      var i = this.Jn.zt();
      return null === i ? null : this.Jn.Wt().Ts(t, i.Ft);
    }
  }, {
    key: "barsInLogicalRange",
    value: function barsInLogicalRange(t) {
      if (null === t) return null;
      var i = new Pi(new Ci(t.from, t.to)).o_(),
        s = this.Jn.Ks();
      if (s.Zi()) return null;
      var n = s.Wr(i.Uh(), 1),
        e = s.Wr(i.bi(), -1),
        r = u(s.Lr()),
        h = u(s.Zs());
      if (null !== n && null !== e && n.Re > e.Re) return {
        barsBefore: t.from - r,
        barsAfter: h - t.to
      };
      var a = {
        barsBefore: null === n || n.Re === r ? t.from - r : n.Re - r,
        barsAfter: null === e || e.Re === h ? h - t.to : h - e.Re
      };
      return null !== n && null !== e && (a.from = n.ew, a.to = e.ew), a;
    }
  }, {
    key: "setData",
    value: function setData(t) {
      this.Yo, this.Jn.Rr(), this.ig.eg(this.Jn, t), this.rg("full");
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      this.Jn.Rr(), this.ig.hg(this.Jn, t, i), this.rg("update");
    }
  }, {
    key: "dataByIndex",
    value: function dataByIndex(t, i) {
      var s = this.Jn.Ks().Wr(t, i);
      if (null === s) return null;
      return wn(this.seriesType())(s);
    }
  }, {
    key: "data",
    value: function data() {
      var t = wn(this.seriesType());
      return this.Jn.Ks().Hr().map(function (i) {
        return t(i);
      });
    }
  }, {
    key: "subscribeDataChanged",
    value: function subscribeDataChanged(t) {
      this.tg.i(t);
    }
  }, {
    key: "unsubscribeDataChanged",
    value: function unsubscribeDataChanged(t) {
      this.tg._(t);
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.Jn.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return g(this.Jn.N());
    }
  }, {
    key: "priceScale",
    value: function priceScale() {
      return this.sg.priceScale(this.Jn.Wt().wa(), this.getPane().paneIndex());
    }
  }, {
    key: "createPriceLine",
    value: function createPriceLine(t) {
      var i = f(g(Tn), t),
        s = this.Jn.Oh(i);
      return new Rn(s);
    }
  }, {
    key: "removePriceLine",
    value: function removePriceLine(t) {
      this.Jn.Nh(t.Qw());
    }
  }, {
    key: "priceLines",
    value: function priceLines() {
      return this.Jn.Wh().map(function (t) {
        return new Rn(t);
      });
    }
  }, {
    key: "seriesType",
    value: function seriesType() {
      return this.Jn.Rr();
    }
  }, {
    key: "attachPrimitive",
    value: function attachPrimitive(t) {
      var _this61 = this;
      this.Jn.ua(t), t.attached && t.attached({
        chart: this.Jw,
        series: this,
        requestUpdate: function requestUpdate() {
          return _this61.Jn.Qt().Ah();
        },
        horzScaleBehavior: this.Yo
      });
    }
  }, {
    key: "detachPrimitive",
    value: function detachPrimitive(t) {
      this.Jn.ca(t), t.detached && t.detached(), this.Jn.Qt().Ah();
    }
  }, {
    key: "getPane",
    value: function getPane() {
      var t = this.Jn,
        i = u(this.Jn.Qt().Hn(t));
      return this.ng(i);
    }
  }, {
    key: "moveToPane",
    value: function moveToPane(t) {
      this.Jn.Qt().Mc(this.Jn, t);
    }
  }, {
    key: "rg",
    value: function rg(t) {
      this.tg.v() && this.tg.p(t);
    }
  }]);
}();
var Vn = /*#__PURE__*/function () {
  function Vn(t, i, s) {
    _classCallCheck(this, Vn);
    this.ag = new d(), this.g_ = new d(), this.Kv = new d(), this.ts = t, this.uh = t.Bt(), this.Rm = i, this.uh.du().i(this.lg.bind(this)), this.uh.fu().i(this.og.bind(this)), this.Rm.sm().i(this._g.bind(this)), this.Yo = s;
  }
  return _createClass(Vn, [{
    key: "m",
    value: function m() {
      this.uh.du().u(this), this.uh.fu().u(this), this.Rm.sm().u(this), this.ag.m(), this.g_.m(), this.Kv.m();
    }
  }, {
    key: "scrollPosition",
    value: function scrollPosition() {
      return this.uh.iu();
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(t, i) {
      i ? this.uh._u(t, 1e3) : this.ts.fn(t);
    }
  }, {
    key: "scrollToRealTime",
    value: function scrollToRealTime() {
      this.uh.ou();
    }
  }, {
    key: "getVisibleRange",
    value: function getVisibleRange() {
      var t = this.uh.O_();
      return null === t ? null : {
        from: t.from.originalTime,
        to: t.to.originalTime
      };
    }
  }, {
    key: "setVisibleRange",
    value: function setVisibleRange(t) {
      var i = {
          from: this.Yo.convertHorzItemToInternal(t.from),
          to: this.Yo.convertHorzItemToInternal(t.to)
        },
        s = this.uh.H_(i);
      this.ts.wc(s);
    }
  }, {
    key: "getVisibleLogicalRange",
    value: function getVisibleLogicalRange() {
      var t = this.uh.L_();
      return null === t ? null : {
        from: t.Uh(),
        to: t.bi()
      };
    }
  }, {
    key: "setVisibleLogicalRange",
    value: function setVisibleLogicalRange(t) {
      o(t.from <= t.to, "The from index cannot be after the to index."), this.ts.wc(t);
    }
  }, {
    key: "resetTimeScale",
    value: function resetTimeScale() {
      this.ts.cn();
    }
  }, {
    key: "fitContent",
    value: function fitContent() {
      this.ts.mu();
    }
  }, {
    key: "logicalToCoordinate",
    value: function logicalToCoordinate(t) {
      var i = this.ts.Bt();
      return i.Zi() ? null : i.qt(t);
    }
  }, {
    key: "coordinateToLogical",
    value: function coordinateToLogical(t) {
      return this.uh.Zi() ? null : this.uh.Z_(t);
    }
  }, {
    key: "timeToIndex",
    value: function timeToIndex(t, i) {
      var s = this.Yo.convertHorzItemToInternal(t);
      return this.uh.B_(s, i);
    }
  }, {
    key: "timeToCoordinate",
    value: function timeToCoordinate(t) {
      var i = this.timeToIndex(t, !1);
      return null === i ? null : this.uh.qt(i);
    }
  }, {
    key: "coordinateToTime",
    value: function coordinateToTime(t) {
      var i = this.ts.Bt(),
        s = i.Z_(t),
        n = i.ss(s);
      return null === n ? null : n.originalTime;
    }
  }, {
    key: "width",
    value: function width() {
      return this.Rm.Df().width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.Rm.Df().height;
    }
  }, {
    key: "subscribeVisibleTimeRangeChange",
    value: function subscribeVisibleTimeRangeChange(t) {
      this.ag.i(t);
    }
  }, {
    key: "unsubscribeVisibleTimeRangeChange",
    value: function unsubscribeVisibleTimeRangeChange(t) {
      this.ag._(t);
    }
  }, {
    key: "subscribeVisibleLogicalRangeChange",
    value: function subscribeVisibleLogicalRangeChange(t) {
      this.g_.i(t);
    }
  }, {
    key: "unsubscribeVisibleLogicalRangeChange",
    value: function unsubscribeVisibleLogicalRangeChange(t) {
      this.g_._(t);
    }
  }, {
    key: "subscribeSizeChange",
    value: function subscribeSizeChange(t) {
      this.Kv.i(t);
    }
  }, {
    key: "unsubscribeSizeChange",
    value: function unsubscribeSizeChange(t) {
      this.Kv._(t);
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.uh.hr(t);
    }
  }, {
    key: "options",
    value: function options() {
      return _objectSpread(_objectSpread({}, g(this.uh.N())), {}, {
        barSpacing: this.uh.Q_()
      });
    }
  }, {
    key: "lg",
    value: function lg() {
      this.ag.v() && this.ag.p(this.getVisibleRange());
    }
  }, {
    key: "og",
    value: function og() {
      this.g_.v() && this.g_.p(this.getVisibleLogicalRange());
    }
  }, {
    key: "_g",
    value: function _g(t) {
      this.Kv.p(t.width, t.height);
    }
  }]);
}();
function In(t) {
  if (void 0 === t || "custom" === t.type) return;
  var i = t;
  void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
    if (t >= 1) return 0;
    var i = 0;
    for (; i < 8; i++) {
      var _s57 = Math.round(t);
      if (Math.abs(_s57 - t) < 1e-8) return i;
      t *= 10;
    }
    return i;
  }(i.minMove));
}
function An(t) {
  return function (t) {
    if (w(t.handleScale)) {
      var _i70 = t.handleScale;
      t.handleScale = {
        axisDoubleClickReset: {
          time: _i70,
          price: _i70
        },
        axisPressedMouseMove: {
          time: _i70,
          price: _i70
        },
        mouseWheel: _i70,
        pinch: _i70
      };
    } else if (void 0 !== t.handleScale) {
      var _t$handleScale = t.handleScale,
        _i71 = _t$handleScale.axisPressedMouseMove,
        _s58 = _t$handleScale.axisDoubleClickReset;
      w(_i71) && (t.handleScale.axisPressedMouseMove = {
        time: _i71,
        price: _i71
      }), w(_s58) && (t.handleScale.axisDoubleClickReset = {
        time: _s58,
        price: _s58
      });
    }
    var i = t.handleScroll;
    w(i) && (t.handleScroll = {
      horzTouchDrag: i,
      vertTouchDrag: i,
      mouseWheel: i,
      pressedMouseMove: i
    });
  }(t), t;
}
var Bn = /*#__PURE__*/function () {
  function Bn(t, i, s) {
    var _this62 = this;
    _classCallCheck(this, Bn);
    this.ug = new Map(), this.cg = new Map(), this.dg = new d(), this.fg = new d(), this.pg = new d(), this.Pu = new WeakMap(), this.vg = new Qs(i);
    var n = void 0 === s ? g(yn()) : f(g(yn()), An(s));
    this.mg = i, this.bf = new zs(t, n, i), this.bf.Tv().i(function (t) {
      _this62.dg.v() && _this62.dg.p(_this62.wg(t()));
    }, this), this.bf.Rv().i(function (t) {
      _this62.fg.v() && _this62.fg.p(_this62.wg(t()));
    }, this), this.bf.ju().i(function (t) {
      _this62.pg.v() && _this62.pg.p(_this62.wg(t()));
    }, this);
    var e = this.bf.Qt();
    this.gg = new Vn(e, this.bf.Bm(), this.mg);
  }
  return _createClass(Bn, [{
    key: "remove",
    value: function remove() {
      this.bf.Tv().u(this), this.bf.Rv().u(this), this.bf.ju().u(this), this.gg.m(), this.bf.m(), this.ug.clear(), this.cg.clear(), this.dg.m(), this.fg.m(), this.pg.m(), this.vg.m();
    }
  }, {
    key: "resize",
    value: function resize(t, i, s) {
      this.autoSizeActive() || this.bf.Vm(t, i, s);
    }
  }, {
    key: "addCustomSeries",
    value: function addCustomSeries(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var n = function (t) {
        return {
          type: "Custom",
          isBuiltIn: !1,
          defaultOptions: _objectSpread(_objectSpread({}, on), t.defaultOptions()),
          Mg: _n,
          bg: t
        };
      }(c(t));
      return this.xg(n, i, s);
    }
  }, {
    key: "addSeries",
    value: function addSeries(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.xg(t, i, s);
    }
  }, {
    key: "removeSeries",
    value: function removeSeries(t) {
      var i = _(this.ug.get(t)),
        s = this.vg.vc(i);
      this.bf.Qt().vc(i), this.Sg(s), this.ug["delete"](t), this.cg["delete"](i);
    }
  }, {
    key: "eg",
    value: function eg(t, i) {
      this.Sg(this.vg.Mw(t, i));
    }
  }, {
    key: "hg",
    value: function hg(t, i, s) {
      this.Sg(this.vg.kw(t, i, s));
    }
  }, {
    key: "subscribeClick",
    value: function subscribeClick(t) {
      this.dg.i(t);
    }
  }, {
    key: "unsubscribeClick",
    value: function unsubscribeClick(t) {
      this.dg._(t);
    }
  }, {
    key: "subscribeCrosshairMove",
    value: function subscribeCrosshairMove(t) {
      this.pg.i(t);
    }
  }, {
    key: "unsubscribeCrosshairMove",
    value: function unsubscribeCrosshairMove(t) {
      this.pg._(t);
    }
  }, {
    key: "subscribeDblClick",
    value: function subscribeDblClick(t) {
      this.fg.i(t);
    }
  }, {
    key: "unsubscribeDblClick",
    value: function unsubscribeDblClick(t) {
      this.fg._(t);
    }
  }, {
    key: "priceScale",
    value: function priceScale(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new kn(this.bf, t, i);
    }
  }, {
    key: "timeScale",
    value: function timeScale() {
      return this.gg;
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.bf.hr(An(t));
    }
  }, {
    key: "options",
    value: function options() {
      return this.bf.N();
    }
  }, {
    key: "takeScreenshot",
    value: function takeScreenshot() {
      return this.bf.Wm();
    }
  }, {
    key: "removePane",
    value: function removePane(t) {
      this.bf.Qt().Ku(t);
    }
  }, {
    key: "swapPanes",
    value: function swapPanes(t, i) {
      this.bf.Qt().Gu(t, i);
    }
  }, {
    key: "autoSizeActive",
    value: function autoSizeActive() {
      return this.bf.qm();
    }
  }, {
    key: "chartElement",
    value: function chartElement() {
      return this.bf.Bf();
    }
  }, {
    key: "panes",
    value: function panes() {
      var _this63 = this;
      return this.bf.Qt().$s().map(function (t) {
        return _this63.Cg(t);
      });
    }
  }, {
    key: "paneSize",
    value: function paneSize() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var i = this.bf.Zm(t);
      return {
        height: i.height,
        width: i.width
      };
    }
  }, {
    key: "setCrosshairPosition",
    value: function setCrosshairPosition(t, i, s) {
      var n = this.ug.get(s);
      if (void 0 === n) return;
      var e = this.bf.Qt().Hn(n);
      null !== e && this.bf.Qt().oc(t, i, e);
    }
  }, {
    key: "clearCrosshairPosition",
    value: function clearCrosshairPosition() {
      this.bf.Qt()._c(!0);
    }
  }, {
    key: "horzBehaviour",
    value: function horzBehaviour() {
      return this.mg;
    }
  }, {
    key: "xg",
    value: function xg(t) {
      var _this64 = this;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      o(void 0 !== t.Mg), In(i.priceFormat), "Candlestick" === t.type && function (t) {
        void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
      }(i);
      var n = f(g(e), g(t.defaultOptions), i),
        r = t.Mg,
        h = new Yt(this.bf.Qt(), t.type, n, r, t.bg);
      this.bf.Qt().dc(h, s);
      var a = new Dn(h, this, this, this, this.mg, function (t) {
        return _this64.Cg(t);
      });
      return this.ug.set(a, h), this.cg.set(h, a), a;
    }
  }, {
    key: "Sg",
    value: function Sg(t) {
      var i = this.bf.Qt();
      i.uc(t.Bt.Y_, t.Bt.Vw, t.Bt.Iw), t.wo.forEach(function (t, i) {
        return i.ht(t.se, t.Dw);
      }), i.Bt().R_(), i.J_();
    }
  }, {
    key: "yg",
    value: function yg(t) {
      return _(this.cg.get(t));
    }
  }, {
    key: "wg",
    value: function wg(t) {
      var _this65 = this;
      var i = new Map();
      t.lw.forEach(function (t, s) {
        var n = s.Rr(),
          e = wn(n)(t);
        if ("Custom" !== n) o(Ns(e));else {
          var _t68 = s.pa();
          o(!_t68 || !1 === _t68(e));
        }
        i.set(_this65.yg(s), e);
      });
      var s = void 0 !== t.aw && this.cg.has(t.aw) ? this.yg(t.aw) : void 0;
      return {
        time: t.ew,
        logical: t.Re,
        point: t.rw,
        paneIndex: t.hw,
        hoveredSeries: s,
        hoveredObjectId: t.ow,
        seriesData: i,
        sourceEvent: t._w
      };
    }
  }, {
    key: "Cg",
    value: function Cg(t) {
      var _this66 = this;
      var i = this.Pu.get(t);
      return i || (i = new Pn(this.bf, function (t) {
        return _this66.yg(t);
      }, t, this), this.Pu.set(t, i)), i;
    }
  }]);
}();
function En(t) {
  if (m(t)) {
    var _i72 = document.getElementById(t);
    return o(null !== _i72, "Cannot find element in DOM with id=".concat(t)), _i72;
  }
  return t;
}
function zn(t, i, s) {
  var n = En(t),
    e = new Bn(n, i, s);
  return i.setOptions(e.options()), e;
}
function Ln(t, i) {
  return zn(t, new Qi(), Qi.Wc(i));
}
function On() {
  return Qi;
}
var Nn = /*#__PURE__*/function (_rn2) {
  function Nn(t, i) {
    _classCallCheck(this, Nn);
    return _callSuper(this, Nn, [t, i, !0]);
  }
  _inherits(Nn, _rn2);
  return _createClass(Nn, [{
    key: "qw",
    value: function qw(t, i, s) {
      i.j_(this.zw, b(this.Lw)), t.Dl(this.zw, s, b(this.Lw));
    }
  }, {
    key: "kg",
    value: function kg(t, i) {
      return {
        wt: t,
        gt: i,
        _t: NaN,
        ut: NaN
      };
    }
  }, {
    key: "Uw",
    value: function Uw() {
      var _this67 = this;
      var t = this.Jn.Rh();
      this.zw = this.Jn.Ks().Hr().map(function (i) {
        var s = i.Ft[3];
        return _this67.Pg(i.Re, s, t);
      });
    }
  }]);
}(rn);
function Wn(t, i, s, n, e, r, h) {
  if (0 === i.length || n.from >= i.length || n.to <= 0) return;
  var a = t.context,
    l = t.horizontalPixelRatio,
    o = t.verticalPixelRatio,
    _ = i[n.from];
  var u = r(t, _),
    c = _;
  if (n.to - n.from < 2) {
    var _i73 = e / 2;
    a.beginPath();
    var _s59 = {
        _t: _._t - _i73,
        ut: _.ut
      },
      _n32 = {
        _t: _._t + _i73,
        ut: _.ut
      };
    a.moveTo(_s59._t * l, _s59.ut * o), a.lineTo(_n32._t * l, _n32.ut * o), h(t, u, _s59, _n32);
  } else {
    var _e24 = function _e24(i, s) {
      h(t, u, c, s), a.beginPath(), u = i, c = s;
    };
    var _d = c;
    a.beginPath(), a.moveTo(_._t * l, _.ut * o);
    for (var _h9 = n.from + 1; _h9 < n.to; ++_h9) {
      _d = i[_h9];
      var _n33 = r(t, _d);
      switch (s) {
        case 0:
          a.lineTo(_d._t * l, _d.ut * o);
          break;
        case 1:
          a.lineTo(_d._t * l, i[_h9 - 1].ut * o), _n33 !== u && (_e24(_n33, _d), a.lineTo(_d._t * l, i[_h9 - 1].ut * o)), a.lineTo(_d._t * l, _d.ut * o);
          break;
        case 2:
          {
            var _$n = $n(i, _h9 - 1, _h9),
              _$n2 = _slicedToArray(_$n, 2),
              _t69 = _$n2[0],
              _s60 = _$n2[1];
            a.bezierCurveTo(_t69._t * l, _t69.ut * o, _s60._t * l, _s60.ut * o, _d._t * l, _d.ut * o);
            break;
          }
      }
      1 !== s && _n33 !== u && (_e24(_n33, _d), a.moveTo(_d._t * l, _d.ut * o));
    }
    (c !== _d || c === _d && 1 === s) && h(t, u, c, _d);
  }
}
var Fn = 6;
function Hn(t, i) {
  return {
    _t: t._t - i._t,
    ut: t.ut - i.ut
  };
}
function Un(t, i) {
  return {
    _t: t._t / i,
    ut: t.ut / i
  };
}
function $n(t, i, s) {
  var n = Math.max(0, i - 1),
    e = Math.min(t.length - 1, s + 1);
  var r, h;
  return [(r = t[i], h = Un(Hn(t[s], t[n]), Fn), {
    _t: r._t + h._t,
    ut: r.ut + h.ut
  }), Hn(t[s], Un(Hn(t[e], t[i]), Fn))];
}
function qn(t, i) {
  var s = t.context;
  s.strokeStyle = i, s.stroke();
}
var Yn = /*#__PURE__*/function (_R6) {
  function Yn() {
    var _this68;
    _classCallCheck(this, Yn);
    _this68 = _callSuper(this, Yn, arguments), _this68.rt = null;
    return _this68;
  }
  _inherits(Yn, _R6);
  return _createClass(Yn, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(t) {
      if (null === this.rt) return;
      var _this$rt = this.rt,
        i = _this$rt.ot,
        s = _this$rt.lt,
        n = _this$rt.Tg,
        e = _this$rt.Rg,
        r = _this$rt.ct,
        h = _this$rt.Kt,
        l = _this$rt.Dg;
      if (null === s) return;
      var o = t.context;
      o.lineCap = "butt", o.lineWidth = r * t.verticalPixelRatio, a(o, h), o.lineJoin = "round";
      var _ = this.Vg.bind(this);
      void 0 !== e && Wn(t, i, e, s, n, _, qn), l && function (t, i, s, n, e) {
        if (n.to - n.from <= 0) return;
        var r = t.horizontalPixelRatio,
          h = t.verticalPixelRatio,
          a = t.context;
        var l = null;
        var o = Math.max(1, Math.floor(r)) % 2 / 2,
          _ = s * h + o;
        for (var _s61 = n.to - 1; _s61 >= n.from; --_s61) {
          var _n34 = i[_s61];
          if (_n34) {
            var _i74 = e(t, _n34);
            _i74 !== l && (a.beginPath(), null !== l && a.fill(), a.fillStyle = _i74, l = _i74);
            var _s62 = Math.round(_n34._t * r) + o,
              _u5 = _n34.ut * h;
            a.moveTo(_s62, _u5), a.arc(_s62, _u5, _, 0, 2 * Math.PI);
          }
        }
        a.fill();
      }(t, i, l, s, _);
    }
  }]);
}(R);
var jn = /*#__PURE__*/function (_Yn) {
  function jn() {
    _classCallCheck(this, jn);
    return _callSuper(this, jn, arguments);
  }
  _inherits(jn, _Yn);
  return _createClass(jn, [{
    key: "Vg",
    value: function Vg(t, i) {
      return i.vt;
    }
  }]);
}(Yn);
var Zn = /*#__PURE__*/function (_Nn) {
  function Zn() {
    var _this69;
    _classCallCheck(this, Zn);
    _this69 = _callSuper(this, Zn, arguments), _this69.Ww = new jn();
    return _this69;
  }
  _inherits(Zn, _Nn);
  return _createClass(Zn, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.kg(t, i)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = this.Jn.N(),
        i = {
          ot: this.zw,
          Kt: t.lineStyle,
          Rg: t.lineVisible ? t.lineType : void 0,
          ct: t.lineWidth,
          Dg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
          lt: this.Lw,
          Tg: this.Qn.Bt().Q_()
        };
      this.Ww.ht(i);
    }
  }]);
}(Nn);
var Kn = {
  type: "Line",
  isBuiltIn: !0,
  defaultOptions: {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  Mg: function Mg(t, i) {
    return new Zn(t, i);
  }
};
function Xn(t, i) {
  return t.weight > i.weight ? t : i;
}
var Gn = /*#__PURE__*/function () {
  function Gn() {
    var _this70 = this;
    _classCallCheck(this, Gn);
    this.Ig = new d(), this.Ag = function (t) {
      var i = !1;
      return function () {
        for (var _len2 = arguments.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          s[_key2] = arguments[_key2];
        }
        i || (i = !0, queueMicrotask(function () {
          t.apply(void 0, s), i = !1;
        }));
      };
    }(function () {
      return _this70.Ig.p(_this70.Bg);
    }), this.Bg = 0;
  }
  return _createClass(Gn, [{
    key: "Eg",
    value: function Eg() {
      return this.Ig;
    }
  }, {
    key: "m",
    value: function m() {
      this.Ig.m();
    }
  }, {
    key: "options",
    value: function options() {
      return this.ys;
    }
  }, {
    key: "setOptions",
    value: function setOptions(t) {
      this.ys = t;
    }
  }, {
    key: "preprocessData",
    value: function preprocessData(t) {}
  }, {
    key: "updateFormatter",
    value: function updateFormatter(t) {
      this.ys && (this.ys.localization = t);
    }
  }, {
    key: "createConverterToInternalObj",
    value: function createConverterToInternalObj(t) {
      var _this71 = this;
      return this.Ag(), function (t) {
        return t > _this71.Bg && (_this71.Bg = t), t;
      };
    }
  }, {
    key: "key",
    value: function key(t) {
      return t;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(t) {
      return t;
    }
  }, {
    key: "convertHorzItemToInternal",
    value: function convertHorzItemToInternal(t) {
      return t;
    }
  }, {
    key: "formatHorzItem",
    value: function formatHorzItem(t) {
      return this.zg(t);
    }
  }, {
    key: "formatTickmark",
    value: function formatTickmark(t) {
      return this.zg(t.time);
    }
  }, {
    key: "maxTickMarkWeight",
    value: function maxTickMarkWeight(t) {
      return t.reduce(Xn, t[0]).weight;
    }
  }, {
    key: "fillWeightsForPoints",
    value: function fillWeightsForPoints(t, i) {
      for (var _n35 = i; _n35 < t.length; ++_n35) t[_n35].timeWeight = (s = t[_n35].time) % 120 == 0 ? 10 : s % 60 == 0 ? 9 : s % 36 == 0 ? 8 : s % 12 == 0 ? 7 : s % 6 == 0 ? 6 : s % 3 == 0 ? 5 : s % 1 == 0 ? 4 : 0;
      var s;
      this.Bg = t[t.length - 1].time, this.Ag();
    }
  }, {
    key: "zg",
    value: function zg(t) {
      var _this$ys$localization;
      if ((_this$ys$localization = this.ys.localization) !== null && _this$ys$localization !== void 0 && _this$ys$localization.timeFormatter) return this.ys.localization.timeFormatter(t);
      if (t < 12) return "".concat(t, "M");
      var i = Math.floor(t / 12),
        s = t % 12;
      return 0 === s ? "".concat(i, "Y") : "".concat(i, "Y").concat(s, "M");
    }
  }]);
}();
var Jn = {
    yieldCurve: {
      baseResolution: 1,
      minimumTimeRange: 120,
      startTimeRange: 0
    },
    timeScale: {
      ignoreWhitespaceIndices: !0
    },
    leftPriceScale: {
      visible: !0
    },
    rightPriceScale: {
      visible: !1
    },
    localization: {
      priceFormatter: function priceFormatter(t) {
        return t.toFixed(3) + "%";
      }
    }
  },
  Qn = {
    lastValueVisible: !1,
    priceLineVisible: !1
  };
var te = /*#__PURE__*/function (_Bn) {
  function te(t, i) {
    var _this72;
    _classCallCheck(this, te);
    var s = f(Jn, i || {}),
      n = new Gn();
    _this72 = _callSuper(this, te, [t, n, s]), n.setOptions(_this72.options()), _this72._initWhitespaceSeries();
    return _this72;
  }
  _inherits(te, _Bn);
  return _createClass(te, [{
    key: "addSeries",
    value: function addSeries(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (t.isBuiltIn && !1 === ["Area", "Line"].includes(t.type)) throw new Error("Yield curve only support Area and Line series");
      var n = _objectSpread(_objectSpread({}, Qn), i);
      return _superPropGet(te, "addSeries", this, 3)([t, n, s]);
    }
  }, {
    key: "_initWhitespaceSeries",
    value: function _initWhitespaceSeries() {
      var t = this.horzBehaviour(),
        i = this.addSeries(Kn);
      var s;
      function n(n) {
        var e = function (t, i) {
            return {
              le: Math.max(0, t.startTimeRange),
              oe: Math.max(0, t.minimumTimeRange, i || 0),
              Lg: Math.max(1, t.baseResolution)
            };
          }(t.options().yieldCurve, n),
          r = function (_ref24) {
            var t = _ref24.le,
              i = _ref24.oe,
              s = _ref24.Lg;
            return "".concat(t, "~").concat(i, "~").concat(s);
          }(e);
        r !== s && (s = r, i.setData(function (_ref25) {
          var t = _ref25.le,
            i = _ref25.oe,
            s = _ref25.Lg;
          return Array.from({
            length: Math.floor((i - t) / s) + 1
          }, function (i, n) {
            return {
              time: t + n * s
            };
          });
        }(e)));
      }
      n(0), t.Eg().i(n);
    }
  }]);
}(Bn);
function ie(t, i) {
  var s = En(t);
  return new te(s, i);
}
function se(t, i) {
  return t.weight > i.weight ? t : i;
}
var ne = /*#__PURE__*/function () {
  function ne() {
    _classCallCheck(this, ne);
  }
  return _createClass(ne, [{
    key: "options",
    value: function options() {
      return this.ys;
    }
  }, {
    key: "setOptions",
    value: function setOptions(t) {
      this.ys = t;
    }
  }, {
    key: "preprocessData",
    value: function preprocessData(t) {}
  }, {
    key: "updateFormatter",
    value: function updateFormatter(t) {
      this.ys && (this.ys.localization = t);
    }
  }, {
    key: "createConverterToInternalObj",
    value: function createConverterToInternalObj(t) {
      return function (t) {
        return t;
      };
    }
  }, {
    key: "key",
    value: function key(t) {
      return t;
    }
  }, {
    key: "cacheKey",
    value: function cacheKey(t) {
      return t;
    }
  }, {
    key: "convertHorzItemToInternal",
    value: function convertHorzItemToInternal(t) {
      return t;
    }
  }, {
    key: "formatHorzItem",
    value: function formatHorzItem(t) {
      return t.toFixed(this.Cn());
    }
  }, {
    key: "formatTickmark",
    value: function formatTickmark(t, i) {
      return t.time.toFixed(this.Cn());
    }
  }, {
    key: "maxTickMarkWeight",
    value: function maxTickMarkWeight(t) {
      return t.reduce(se, t[0]).weight;
    }
  }, {
    key: "fillWeightsForPoints",
    value: function fillWeightsForPoints(t, i) {
      for (var _n36 = i; _n36 < t.length; ++_n36) t[_n36].timeWeight = (s = t[_n36].time) === 100 * Math.ceil(s / 100) ? 8 : s === 50 * Math.ceil(s / 50) ? 7 : s === 25 * Math.ceil(s / 25) ? 6 : s === 10 * Math.ceil(s / 10) ? 5 : s === 5 * Math.ceil(s / 5) ? 4 : s === Math.ceil(s) ? 3 : 2 * s === Math.ceil(2 * s) ? 1 : 0;
      var s;
    }
  }, {
    key: "Cn",
    value: function Cn() {
      return this.ys.localization.precision;
    }
  }]);
}();
function ee(t, i) {
  return zn(t, new ne(), i);
}
function re(t, i, s, n, e) {
  var r = i.context,
    h = i.horizontalPixelRatio,
    a = i.verticalPixelRatio;
  r.lineTo(e._t * h, t * a), r.lineTo(n._t * h, t * a), r.closePath(), r.fillStyle = s, r.fill();
}
var he = /*#__PURE__*/function (_R7) {
  function he() {
    var _this73;
    _classCallCheck(this, he);
    _this73 = _callSuper(this, he, arguments), _this73.rt = null;
    return _this73;
  }
  _inherits(he, _R7);
  return _createClass(he, [{
    key: "ht",
    value: function ht(t) {
      this.rt = t;
    }
  }, {
    key: "et",
    value: function et(t) {
      var _this$rt$Og;
      if (null === this.rt) return;
      var _this$rt2 = this.rt,
        i = _this$rt2.ot,
        s = _this$rt2.lt,
        n = _this$rt2.Tg,
        e = _this$rt2.ct,
        r = _this$rt2.Kt,
        h = _this$rt2.Rg,
        l = (_this$rt$Og = this.rt.Og) !== null && _this$rt$Og !== void 0 ? _this$rt$Og : this.rt.Ng ? 0 : t.mediaSize.height;
      if (null === s) return;
      var o = t.context;
      o.lineCap = "butt", o.lineJoin = "round", o.lineWidth = e, a(o, r), o.lineWidth = 1, Wn(t, i, h, s, n, this.Wg.bind(this), re.bind(null, l));
    }
  }]);
}(R);
var ae = /*#__PURE__*/function () {
  function ae() {
    _classCallCheck(this, ae);
  }
  return _createClass(ae, [{
    key: "Fg",
    value: function Fg(t, i) {
      var s = this.Hg,
        n = i.Ug,
        e = i.$g,
        r = i.qg,
        h = i.Yg,
        a = i.Og,
        l = i.jg,
        o = i.Zg;
      if (void 0 === this.Kg || void 0 === s || s.Ug !== n || s.$g !== e || s.qg !== r || s.Yg !== h || s.Og !== a || s.jg !== l || s.Zg !== o) {
        var _s63 = t.verticalPixelRatio,
          _9 = a || l > 0 ? _s63 : 1,
          _u6 = l * _9,
          _c2 = o === t.bitmapSize.height ? o : o * _9,
          _d2 = (a !== null && a !== void 0 ? a : 0) * _9,
          _f2 = t.context.createLinearGradient(0, _u6, 0, _c2);
        if (_f2.addColorStop(0, n), null != a) {
          var _t70 = ai((_d2 - _u6) / (_c2 - _u6), 0, 1);
          _f2.addColorStop(_t70, e), _f2.addColorStop(_t70, r);
        }
        _f2.addColorStop(1, h), this.Kg = _f2, this.Hg = i;
      }
      return this.Kg;
    }
  }]);
}();
var le = /*#__PURE__*/function (_he) {
  function le() {
    var _this74;
    _classCallCheck(this, le);
    _this74 = _callSuper(this, le, arguments), _this74.Xg = new ae();
    return _this74;
  }
  _inherits(le, _he);
  return _createClass(le, [{
    key: "Wg",
    value: function Wg(t, i) {
      var _s$jg, _s$Zg;
      var s = this.rt;
      return this.Xg.Fg(t, {
        Ug: i.br,
        $g: i.Sr,
        qg: i.Cr,
        Yg: i.yr,
        Og: s.Og,
        jg: (_s$jg = s.jg) !== null && _s$jg !== void 0 ? _s$jg : 0,
        Zg: (_s$Zg = s.Zg) !== null && _s$Zg !== void 0 ? _s$Zg : t.bitmapSize.height
      });
    }
  }]);
}(he);
var oe = /*#__PURE__*/function (_Yn2) {
  function oe() {
    var _this75;
    _classCallCheck(this, oe);
    _this75 = _callSuper(this, oe, arguments), _this75.Gg = new ae();
    return _this75;
  }
  _inherits(oe, _Yn2);
  return _createClass(oe, [{
    key: "Vg",
    value: function Vg(t, i) {
      var _s$jg2, _s$Zg2;
      var s = this.rt;
      return this.Gg.Fg(t, {
        Ug: i.gr,
        $g: i.gr,
        qg: i.Mr,
        Yg: i.Mr,
        Og: s.Og,
        jg: (_s$jg2 = s.jg) !== null && _s$jg2 !== void 0 ? _s$jg2 : 0,
        Zg: (_s$Zg2 = s.Zg) !== null && _s$Zg2 !== void 0 ? _s$Zg2 : t.bitmapSize.height
      });
    }
  }]);
}(Yn);
var _e = /*#__PURE__*/function (_Nn2) {
  function _e(t, i) {
    var _this76;
    _classCallCheck(this, _e);
    _this76 = _callSuper(this, _e, [t, i]), _this76.Ww = new T(), _this76.Jg = new le(), _this76.Qg = new oe(), _this76.Ww.st([_this76.Jg, _this76.Qg]);
    return _this76;
  }
  _inherits(_e, _Nn2);
  return _createClass(_e, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.kg(t, i)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = this.Jn.zt();
      if (null === t) return;
      var i = this.Jn.N(),
        s = this.Jn.Wt().Nt(i.baseValue.price, t.Ft),
        n = this.Qn.Bt().Q_();
      if (null === this.Lw || 0 === this.zw.length) return;
      var e, r;
      if (i.relativeGradient) {
        e = this.zw[this.Lw.from].ut, r = this.zw[this.Lw.from].ut;
        for (var _t71 = this.Lw.from; _t71 < this.Lw.to; _t71++) {
          var _i75 = this.zw[_t71];
          _i75.ut < e && (e = _i75.ut), _i75.ut > r && (r = _i75.ut);
        }
      }
      this.Jg.ht({
        ot: this.zw,
        ct: i.lineWidth,
        Kt: i.lineStyle,
        Rg: i.lineType,
        Og: s,
        jg: e,
        Zg: r,
        Ng: !1,
        lt: this.Lw,
        Tg: n
      }), this.Qg.ht({
        ot: this.zw,
        ct: i.lineWidth,
        Kt: i.lineStyle,
        Rg: i.lineVisible ? i.lineType : void 0,
        Dg: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
        Og: s,
        jg: e,
        Zg: r,
        lt: this.Lw,
        Tg: n
      });
    }
  }]);
}(Nn);
var ue = {
  type: "Baseline",
  isBuiltIn: !0,
  defaultOptions: {
    baseValue: {
      type: "price",
      price: 0
    },
    relativeGradient: !1,
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  Mg: function Mg(t, i) {
    return new _e(t, i);
  }
};
var ce = /*#__PURE__*/function (_he2) {
  function ce() {
    var _this77;
    _classCallCheck(this, ce);
    _this77 = _callSuper(this, ce, arguments), _this77.Xg = new ae();
    return _this77;
  }
  _inherits(ce, _he2);
  return _createClass(ce, [{
    key: "Wg",
    value: function Wg(t, i) {
      var _this$rt$jg, _this$rt3;
      return this.Xg.Fg(t, {
        Ug: i.mr,
        $g: "",
        qg: "",
        Yg: i.wr,
        jg: (_this$rt$jg = (_this$rt3 = this.rt) === null || _this$rt3 === void 0 ? void 0 : _this$rt3.jg) !== null && _this$rt$jg !== void 0 ? _this$rt$jg : 0,
        Zg: t.bitmapSize.height
      });
    }
  }]);
}(he);
var de = /*#__PURE__*/function (_Nn3) {
  function de(t, i) {
    var _this78;
    _classCallCheck(this, de);
    _this78 = _callSuper(this, de, [t, i]), _this78.Ww = new T(), _this78.tM = new ce(), _this78.iM = new jn(), _this78.Ww.st([_this78.tM, _this78.iM]);
    return _this78;
  }
  _inherits(de, _Nn3);
  return _createClass(de, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.kg(t, i)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = this.Jn.N();
      if (null === this.Lw || 0 === this.zw.length) return;
      var i;
      if (t.relativeGradient) {
        i = this.zw[this.Lw.from].ut;
        for (var _t72 = this.Lw.from; _t72 < this.Lw.to; _t72++) {
          var _s64 = this.zw[_t72];
          _s64.ut < i && (i = _s64.ut);
        }
      }
      this.tM.ht({
        Rg: t.lineType,
        ot: this.zw,
        Kt: t.lineStyle,
        ct: t.lineWidth,
        Og: null,
        jg: i,
        Ng: t.invertFilledArea,
        lt: this.Lw,
        Tg: this.Qn.Bt().Q_()
      }), this.iM.ht({
        Rg: t.lineVisible ? t.lineType : void 0,
        ot: this.zw,
        Kt: t.lineStyle,
        ct: t.lineWidth,
        lt: this.Lw,
        Tg: this.Qn.Bt().Q_(),
        Dg: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
      });
    }
  }]);
}(Nn);
var fe = {
  type: "Area",
  isBuiltIn: !0,
  defaultOptions: {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    invertFilledArea: !1,
    relativeGradient: !1,
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    lineVisible: !0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBorderWidth: 2,
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0,
    pointMarkersVisible: !1
  },
  Mg: function Mg(t, i) {
    return new de(t, i);
  }
};
var pe = /*#__PURE__*/function (_R8) {
  function pe() {
    var _this79;
    _classCallCheck(this, pe);
    _this79 = _callSuper(this, pe, arguments), _this79.Yt = null, _this79.sM = 0, _this79.nM = 0;
    return _this79;
  }
  _inherits(pe, _R8);
  return _createClass(pe, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "et",
    value: function et(_ref26) {
      var t = _ref26.context,
        i = _ref26.horizontalPixelRatio,
        s = _ref26.verticalPixelRatio;
      if (null === this.Yt || 0 === this.Yt.Ks.length || null === this.Yt.lt) return;
      if (this.sM = this.eM(i), this.sM >= 2) {
        Math.max(1, Math.floor(i)) % 2 != this.sM % 2 && this.sM--;
      }
      this.nM = this.Yt.rM ? Math.min(this.sM, Math.floor(i)) : this.sM;
      var n = null;
      var e = this.nM <= this.sM && this.Yt.Q_ >= Math.floor(1.5 * i);
      for (var _r20 = this.Yt.lt.from; _r20 < this.Yt.lt.to; ++_r20) {
        var _h10 = this.Yt.Ks[_r20];
        n !== _h10.cr && (t.fillStyle = _h10.cr, n = _h10.cr);
        var _a16 = Math.floor(.5 * this.nM),
          _l8 = Math.round(_h10._t * i),
          _o6 = _l8 - _a16,
          _10 = this.nM,
          _u7 = _o6 + _10 - 1,
          _c3 = Math.min(_h10.Bl, _h10.El),
          _d3 = Math.max(_h10.Bl, _h10.El),
          _f3 = Math.round(_c3 * s) - _a16,
          _p = Math.round(_d3 * s) + _a16,
          _v = Math.max(_p - _f3, this.nM);
        t.fillRect(_o6, _f3, _10, _v);
        var _m2 = Math.ceil(1.5 * this.sM);
        if (e) {
          if (this.Yt.hM) {
            var _i76 = _l8 - _m2;
            var _n37 = Math.max(_f3, Math.round(_h10.Al * s) - _a16),
              _e25 = _n37 + _10 - 1;
            _e25 > _f3 + _v - 1 && (_e25 = _f3 + _v - 1, _n37 = _e25 - _10 + 1), t.fillRect(_i76, _n37, _o6 - _i76, _e25 - _n37 + 1);
          }
          var _i77 = _l8 + _m2;
          var _n38 = Math.max(_f3, Math.round(_h10.zl * s) - _a16),
            _e26 = _n38 + _10 - 1;
          _e26 > _f3 + _v - 1 && (_e26 = _f3 + _v - 1, _n38 = _e26 - _10 + 1), t.fillRect(_u7 + 1, _n38, _i77 - _u7, _e26 - _n38 + 1);
        }
      }
    }
  }, {
    key: "eM",
    value: function eM(t) {
      var i = Math.floor(t);
      return Math.max(i, Math.floor(function (t, i) {
        return Math.floor(.3 * t * i);
      }(u(this.Yt).Q_, t)));
    }
  }]);
}(R);
var ve = /*#__PURE__*/function (_rn3) {
  function ve(t, i) {
    _classCallCheck(this, ve);
    return _callSuper(this, ve, [t, i, !1]);
  }
  _inherits(ve, _rn3);
  return _createClass(ve, [{
    key: "qw",
    value: function qw(t, i, s) {
      i.j_(this.zw, b(this.Lw)), t.Il(this.zw, s, b(this.Lw));
    }
  }, {
    key: "aM",
    value: function aM(t, i, s) {
      return {
        wt: t,
        qh: i.Ft[0],
        Yh: i.Ft[1],
        jh: i.Ft[2],
        Zh: i.Ft[3],
        _t: NaN,
        Al: NaN,
        Bl: NaN,
        El: NaN,
        zl: NaN
      };
    }
  }, {
    key: "Uw",
    value: function Uw() {
      var _this80 = this;
      var t = this.Jn.Rh();
      this.zw = this.Jn.Ks().Hr().map(function (i) {
        return _this80.Pg(i.Re, i, t);
      });
    }
  }]);
}(rn);
var me = /*#__PURE__*/function (_ve) {
  function me() {
    var _this81;
    _classCallCheck(this, me);
    _this81 = _callSuper(this, me, arguments), _this81.Ww = new pe();
    return _this81;
  }
  _inherits(me, _ve);
  return _createClass(me, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.aM(t, i, s)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = this.Jn.N();
      this.Ww.ht({
        Ks: this.zw,
        Q_: this.Qn.Bt().Q_(),
        hM: t.openVisible,
        rM: t.thinBars,
        lt: this.Lw
      });
    }
  }]);
}(ve);
var we = {
  type: "Bar",
  isBuiltIn: !0,
  defaultOptions: {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
  },
  Mg: function Mg(t, i) {
    return new me(t, i);
  }
};
var ge = /*#__PURE__*/function (_R9) {
  function ge() {
    var _this82;
    _classCallCheck(this, ge);
    _this82 = _callSuper(this, ge, arguments), _this82.Yt = null, _this82.sM = 0;
    return _this82;
  }
  _inherits(ge, _R9);
  return _createClass(ge, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "et",
    value: function et(t) {
      if (null === this.Yt || 0 === this.Yt.Ks.length || null === this.Yt.lt) return;
      var i = t.horizontalPixelRatio;
      if (this.sM = function (t, i) {
        if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
        var s = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
          n = Math.floor(t * s * i),
          e = Math.floor(t * i),
          r = Math.min(n, e);
        return Math.max(Math.floor(i), r);
      }(this.Yt.Q_, i), this.sM >= 2) {
        Math.floor(i) % 2 != this.sM % 2 && this.sM--;
      }
      var s = this.Yt.Ks;
      this.Yt.lM && this.oM(t, s, this.Yt.lt), this.Yt.Mi && this.$p(t, s, this.Yt.lt);
      var n = this._M(i);
      (!this.Yt.Mi || this.sM > 2 * n) && this.uM(t, s, this.Yt.lt);
    }
  }, {
    key: "oM",
    value: function oM(t, i, s) {
      if (null === this.Yt) return;
      var n = t.context,
        e = t.horizontalPixelRatio,
        r = t.verticalPixelRatio;
      var h = "",
        a = Math.min(Math.floor(e), Math.floor(this.Yt.Q_ * e));
      a = Math.max(Math.floor(e), Math.min(a, this.sM));
      var l = Math.floor(.5 * a);
      var o = null;
      for (var _t73 = s.from; _t73 < s.to; _t73++) {
        var _s65 = i[_t73];
        _s65.pr !== h && (n.fillStyle = _s65.pr, h = _s65.pr);
        var _11 = Math.round(Math.min(_s65.Al, _s65.zl) * r),
          _u8 = Math.round(Math.max(_s65.Al, _s65.zl) * r),
          _c4 = Math.round(_s65.Bl * r),
          _d4 = Math.round(_s65.El * r);
        var _f4 = Math.round(e * _s65._t) - l;
        var _p2 = _f4 + a - 1;
        null !== o && (_f4 = Math.max(o + 1, _f4), _f4 = Math.min(_f4, _p2));
        var _v2 = _p2 - _f4 + 1;
        n.fillRect(_f4, _c4, _v2, _11 - _c4), n.fillRect(_f4, _u8 + 1, _v2, _d4 - _u8), o = _p2;
      }
    }
  }, {
    key: "_M",
    value: function _M(t) {
      var i = Math.floor(1 * t);
      this.sM <= 2 * i && (i = Math.floor(.5 * (this.sM - 1)));
      var s = Math.max(Math.floor(t), i);
      return this.sM <= 2 * s ? Math.max(Math.floor(t), Math.floor(1 * t)) : s;
    }
  }, {
    key: "$p",
    value: function $p(t, i, s) {
      if (null === this.Yt) return;
      var n = t.context,
        e = t.horizontalPixelRatio,
        r = t.verticalPixelRatio;
      var h = "";
      var a = this._M(e);
      var l = null;
      for (var _t74 = s.from; _t74 < s.to; _t74++) {
        var _s66 = i[_t74];
        _s66.dr !== h && (n.fillStyle = _s66.dr, h = _s66.dr);
        var _o7 = Math.round(_s66._t * e) - Math.floor(.5 * this.sM);
        var _12 = _o7 + this.sM - 1,
          _u9 = Math.round(Math.min(_s66.Al, _s66.zl) * r),
          _c5 = Math.round(Math.max(_s66.Al, _s66.zl) * r);
        if (null !== l && (_o7 = Math.max(l + 1, _o7), _o7 = Math.min(_o7, _12)), this.Yt.Q_ * e > 2 * a) z(n, _o7, _u9, _12 - _o7 + 1, _c5 - _u9 + 1, a);else {
          var _t75 = _12 - _o7 + 1;
          n.fillRect(_o7, _u9, _t75, _c5 - _u9 + 1);
        }
        l = _12;
      }
    }
  }, {
    key: "uM",
    value: function uM(t, i, s) {
      if (null === this.Yt) return;
      var n = t.context,
        e = t.horizontalPixelRatio,
        r = t.verticalPixelRatio;
      var h = "";
      var a = this._M(e);
      for (var _t76 = s.from; _t76 < s.to; _t76++) {
        var _s67 = i[_t76];
        var _l9 = Math.round(Math.min(_s67.Al, _s67.zl) * r),
          _o8 = Math.round(Math.max(_s67.Al, _s67.zl) * r),
          _13 = Math.round(_s67._t * e) - Math.floor(.5 * this.sM),
          _u10 = _13 + this.sM - 1;
        if (_s67.cr !== h) {
          var _t77 = _s67.cr;
          n.fillStyle = _t77, h = _t77;
        }
        this.Yt.Mi && (_13 += a, _l9 += a, _u10 -= a, _o8 -= a), _l9 > _o8 || n.fillRect(_13, _l9, _u10 - _13 + 1, _o8 - _l9 + 1);
      }
    }
  }]);
}(R);
var Me = /*#__PURE__*/function (_ve2) {
  function Me() {
    var _this83;
    _classCallCheck(this, Me);
    _this83 = _callSuper(this, Me, arguments), _this83.Ww = new ge();
    return _this83;
  }
  _inherits(Me, _ve2);
  return _createClass(Me, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.aM(t, i, s)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = this.Jn.N();
      this.Ww.ht({
        Ks: this.zw,
        Q_: this.Qn.Bt().Q_(),
        lM: t.wickVisible,
        Mi: t.borderVisible,
        lt: this.Lw
      });
    }
  }]);
}(ve);
var be = {
  type: "Candlestick",
  isBuiltIn: !0,
  defaultOptions: {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
  },
  Mg: function Mg(t, i) {
    return new Me(t, i);
  }
};
var xe = /*#__PURE__*/function (_R10) {
  function xe() {
    var _this84;
    _classCallCheck(this, xe);
    _this84 = _callSuper(this, xe, arguments), _this84.Yt = null, _this84.cM = [];
    return _this84;
  }
  _inherits(xe, _R10);
  return _createClass(xe, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t, this.cM = [];
    }
  }, {
    key: "et",
    value: function et(_ref27) {
      var t = _ref27.context,
        i = _ref27.horizontalPixelRatio,
        s = _ref27.verticalPixelRatio;
      if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return;
      this.cM.length || this.dM(i);
      var n = Math.max(1, Math.floor(s)),
        e = Math.round(this.Yt.fM * s) - Math.floor(n / 2),
        r = e + n;
      for (var _i78 = this.Yt.lt.from; _i78 < this.Yt.lt.to; _i78++) {
        var _h11 = this.Yt.ot[_i78],
          _a17 = this.cM[_i78 - this.Yt.lt.from],
          _l10 = Math.round(_h11.ut * s);
        var _o9 = void 0,
          _14 = void 0;
        t.fillStyle = _h11.cr, _l10 <= e ? (_o9 = _l10, _14 = r) : (_o9 = e, _14 = _l10 - Math.floor(n / 2) + n), t.fillRect(_a17.Uh, _o9, _a17.bi - _a17.Uh + 1, _14 - _o9);
      }
    }
  }, {
    key: "dM",
    value: function dM(t) {
      if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return void (this.cM = []);
      var i = Math.ceil(this.Yt.Q_ * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
        s = Math.round(this.Yt.Q_ * t) - i;
      this.cM = new Array(this.Yt.lt.to - this.Yt.lt.from);
      for (var _i79 = this.Yt.lt.from; _i79 < this.Yt.lt.to; _i79++) {
        var _n39 = this.Yt.ot[_i79],
          _e27 = Math.round(_n39._t * t);
        var _r21 = void 0,
          _h12 = void 0;
        if (s % 2) {
          var _t78 = (s - 1) / 2;
          _r21 = _e27 - _t78, _h12 = _e27 + _t78;
        } else {
          var _t79 = s / 2;
          _r21 = _e27 - _t79, _h12 = _e27 + _t79 - 1;
        }
        this.cM[_i79 - this.Yt.lt.from] = {
          Uh: _r21,
          bi: _h12,
          pM: _e27,
          ne: _n39._t * t,
          wt: _n39.wt
        };
      }
      for (var _t80 = this.Yt.lt.from + 1; _t80 < this.Yt.lt.to; _t80++) {
        var _s68 = this.cM[_t80 - this.Yt.lt.from],
          _n40 = this.cM[_t80 - this.Yt.lt.from - 1];
        _s68.wt === _n40.wt + 1 && _s68.Uh - _n40.bi !== i + 1 && (_n40.pM > _n40.ne ? _n40.bi = _s68.Uh - i - 1 : _s68.Uh = _n40.bi + i + 1);
      }
      var n = Math.ceil(this.Yt.Q_ * t);
      for (var _t81 = this.Yt.lt.from; _t81 < this.Yt.lt.to; _t81++) {
        var _i80 = this.cM[_t81 - this.Yt.lt.from];
        _i80.bi < _i80.Uh && (_i80.bi = _i80.Uh);
        var _s69 = _i80.bi - _i80.Uh + 1;
        n = Math.min(_s69, n);
      }
      if (i > 0 && n < 4) for (var _t82 = this.Yt.lt.from; _t82 < this.Yt.lt.to; _t82++) {
        var _i81 = this.cM[_t82 - this.Yt.lt.from];
        _i81.bi - _i81.Uh + 1 > n && (_i81.pM > _i81.ne ? _i81.bi -= 1 : _i81.Uh += 1);
      }
    }
  }]);
}(R);
var Se = /*#__PURE__*/function (_Nn4) {
  function Se() {
    var _this85;
    _classCallCheck(this, Se);
    _this85 = _callSuper(this, Se, arguments), _this85.Ww = new xe();
    return _this85;
  }
  _inherits(Se, _Nn4);
  return _createClass(Se, [{
    key: "Pg",
    value: function Pg(t, i, s) {
      return _objectSpread(_objectSpread({}, this.kg(t, i)), s.Dr(t));
    }
  }, {
    key: "Yw",
    value: function Yw() {
      var t = {
        ot: this.zw,
        Q_: this.Qn.Bt().Q_(),
        lt: this.Lw,
        fM: this.Jn.Wt().Nt(this.Jn.N().base, u(this.Jn.zt()).Ft)
      };
      this.Ww.ht(t);
    }
  }]);
}(Nn);
var Ce = {
  type: "Histogram",
  isBuiltIn: !0,
  defaultOptions: {
    color: "#26a69a",
    base: 0
  },
  Mg: function Mg(t, i) {
    return new Se(t, i);
  }
};
var ye = /*#__PURE__*/function () {
  function ye(t, i) {
    _classCallCheck(this, ye);
    this.yt = t, this.vM = i, this.mM();
  }
  return _createClass(ye, [{
    key: "detach",
    value: function detach() {
      this.yt.detachPrimitive(this.vM);
    }
  }, {
    key: "getPane",
    value: function getPane() {
      return this.yt;
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      var _this$vM$hr, _this$vM;
      (_this$vM$hr = (_this$vM = this.vM).hr) === null || _this$vM$hr === void 0 || _this$vM$hr.call(_this$vM, t);
    }
  }, {
    key: "mM",
    value: function mM() {
      this.yt.attachPrimitive(this.vM);
    }
  }]);
}();
var ke = {
    visible: !0,
    horzAlign: "center",
    vertAlign: "center",
    lines: []
  },
  Pe = {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 48,
    fontFamily: x,
    fontStyle: "",
    text: ""
  };
var Te = /*#__PURE__*/function () {
  function Te(t) {
    _classCallCheck(this, Te);
    this.wM = new Map(), this.Yt = t;
  }
  return _createClass(Te, [{
    key: "draw",
    value: function draw(t) {
      var _this86 = this;
      t.useMediaCoordinateSpace(function (t) {
        if (!_this86.Yt.visible) return;
        var i = t.context,
          s = t.mediaSize;
        var n = 0;
        var _iterator42 = _createForOfIteratorHelper(_this86.Yt.lines),
          _step42;
        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
            var _t83 = _step42.value;
            if (0 === _t83.text.length) continue;
            i.font = _t83.P;
            var _e28 = _this86.gM(i, _t83.text);
            _e28 > s.width ? _t83.hu = s.width / _e28 : _t83.hu = 1, n += _t83.lineHeight * _t83.hu;
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }
        var e = 0;
        switch (_this86.Yt.vertAlign) {
          case "top":
            e = 0;
            break;
          case "center":
            e = Math.max((s.height - n) / 2, 0);
            break;
          case "bottom":
            e = Math.max(s.height - n, 0);
        }
        var _iterator43 = _createForOfIteratorHelper(_this86.Yt.lines),
          _step43;
        try {
          for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
            var _t84 = _step43.value;
            i.save(), i.fillStyle = _t84.color;
            var _n41 = 0;
            switch (_this86.Yt.horzAlign) {
              case "left":
                i.textAlign = "left", _n41 = _t84.lineHeight / 2;
                break;
              case "center":
                i.textAlign = "center", _n41 = s.width / 2;
                break;
              case "right":
                i.textAlign = "right", _n41 = s.width - 1 - _t84.lineHeight / 2;
            }
            i.translate(_n41, e), i.textBaseline = "top", i.font = _t84.P, i.scale(_t84.hu, _t84.hu), i.fillText(_t84.text, 0, _t84.MM), i.restore(), e += _t84.lineHeight * _t84.hu;
          }
        } catch (err) {
          _iterator43.e(err);
        } finally {
          _iterator43.f();
        }
      });
    }
  }, {
    key: "gM",
    value: function gM(t, i) {
      var s = this.bM(t.font);
      var n = s.get(i);
      return void 0 === n && (n = t.measureText(i).width, s.set(i, n)), n;
    }
  }, {
    key: "bM",
    value: function bM(t) {
      var i = this.wM.get(t);
      return void 0 === i && (i = new Map(), this.wM.set(t, i)), i;
    }
  }]);
}();
var Re = /*#__PURE__*/function () {
  function Re(t) {
    _classCallCheck(this, Re);
    this.ys = Ve(t);
  }
  return _createClass(Re, [{
    key: "kt",
    value: function kt(t) {
      this.ys = Ve(t);
    }
  }, {
    key: "renderer",
    value: function renderer() {
      return new Te(this.ys);
    }
  }]);
}();
function De(t) {
  return _objectSpread(_objectSpread({}, t), {}, {
    P: S(t.fontSize, t.fontFamily, t.fontStyle),
    lineHeight: t.lineHeight || 1.2 * t.fontSize,
    MM: 0,
    hu: 0
  });
}
function Ve(t) {
  return _objectSpread(_objectSpread({}, t), {}, {
    lines: t.lines.map(De)
  });
}
function Ie(t) {
  return _objectSpread(_objectSpread({}, Pe), t);
}
function Ae(t) {
  var _t$lines$map, _t$lines;
  return _objectSpread(_objectSpread(_objectSpread({}, ke), t), {}, {
    lines: (_t$lines$map = (_t$lines = t.lines) === null || _t$lines === void 0 ? void 0 : _t$lines.map(Ie)) !== null && _t$lines$map !== void 0 ? _t$lines$map : []
  });
}
var Be = /*#__PURE__*/function () {
  function Be(t) {
    _classCallCheck(this, Be);
    this.ys = Ae(t), this.xM = [new Re(this.ys)];
  }
  return _createClass(Be, [{
    key: "updateAllViews",
    value: function updateAllViews() {
      var _this87 = this;
      this.xM.forEach(function (t) {
        return t.kt(_this87.ys);
      });
    }
  }, {
    key: "paneViews",
    value: function paneViews() {
      return this.xM;
    }
  }, {
    key: "attached",
    value: function attached(_ref28) {
      var t = _ref28.requestUpdate;
      this.SM = t;
    }
  }, {
    key: "detached",
    value: function detached() {
      this.SM = void 0;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      this.ys = Ae(_objectSpread(_objectSpread({}, this.ys), t)), this.SM && this.SM();
    }
  }]);
}();
function Ee(t, i) {
  return new ye(t, new Be(i));
}
var ze = {
  alpha: 1,
  padding: 0
};
var Le = /*#__PURE__*/function () {
  function Le(t) {
    _classCallCheck(this, Le);
    this.Yt = t;
  }
  return _createClass(Le, [{
    key: "draw",
    value: function draw(t) {
      var _this88 = this;
      t.useMediaCoordinateSpace(function (t) {
        var _this88$Yt$alpha;
        var i = t.context,
          s = _this88.CM(_this88.Yt, t.mediaSize);
        s && _this88.Yt.yM && (i.globalAlpha = (_this88$Yt$alpha = _this88.Yt.alpha) !== null && _this88$Yt$alpha !== void 0 ? _this88$Yt$alpha : 1, i.drawImage(_this88.Yt.yM, s._t, s.ut, s.Qi, s.$t));
      });
    }
  }, {
    key: "CM",
    value: function CM(t, i) {
      var s = t.maxHeight,
        n = t.maxWidth,
        e = t.kM,
        r = t.PM,
        h = t.padding,
        a = Math.round(i.width / 2),
        l = Math.round(i.height / 2),
        o = h !== null && h !== void 0 ? h : 0;
      var _ = i.width - 2 * o,
        u = i.height - 2 * o;
      s && (u = Math.min(u, s)), n && (_ = Math.min(_, n));
      var c = _ / r,
        d = u / e,
        f = Math.min(c, d),
        p = r * f,
        v = e * f;
      return {
        _t: a - .5 * p,
        ut: l - .5 * v,
        $t: v,
        Qi: p
      };
    }
  }]);
}();
var Oe = /*#__PURE__*/function () {
  function Oe(t) {
    _classCallCheck(this, Oe);
    this.TM = null, this.RM = 0, this.DM = 0, this.ys = t, this.M = Ne(this.ys, this.TM, this.RM, this.DM);
  }
  return _createClass(Oe, [{
    key: "VM",
    value: function VM(t) {
      void 0 !== t.IM && (this.RM = t.IM), void 0 !== t.AM && (this.DM = t.AM), void 0 !== t.BM && (this.TM = t.BM), this.kt();
    }
  }, {
    key: "EM",
    value: function EM(t) {
      this.ys = t, this.kt();
    }
  }, {
    key: "zOrder",
    value: function zOrder() {
      return "bottom";
    }
  }, {
    key: "kt",
    value: function kt() {
      this.M = Ne(this.ys, this.TM, this.RM, this.DM);
    }
  }, {
    key: "renderer",
    value: function renderer() {
      return new Le(this.M);
    }
  }]);
}();
function Ne(t, i, s, n) {
  return _objectSpread(_objectSpread({}, t), {}, {
    yM: i,
    PM: s,
    kM: n
  });
}
function We(t) {
  return _objectSpread(_objectSpread({}, ze), t);
}
var Fe = /*#__PURE__*/function () {
  function Fe(t, i) {
    _classCallCheck(this, Fe);
    this.zM = null, this.LM = t, this.ys = We(i), this.xM = [new Oe(this.ys)];
  }
  return _createClass(Fe, [{
    key: "updateAllViews",
    value: function updateAllViews() {
      this.xM.forEach(function (t) {
        return t.kt();
      });
    }
  }, {
    key: "paneViews",
    value: function paneViews() {
      return this.xM;
    }
  }, {
    key: "attached",
    value: function attached(t) {
      var _this89 = this;
      var i = t.requestUpdate;
      this.OM = i, this.zM = new Image(), this.zM.onload = function () {
        var _this89$zM$naturalHei, _this89$zM, _this89$zM$naturalWid, _this89$zM2;
        var t = (_this89$zM$naturalHei = (_this89$zM = _this89.zM) === null || _this89$zM === void 0 ? void 0 : _this89$zM.naturalHeight) !== null && _this89$zM$naturalHei !== void 0 ? _this89$zM$naturalHei : 1,
          i = (_this89$zM$naturalWid = (_this89$zM2 = _this89.zM) === null || _this89$zM2 === void 0 ? void 0 : _this89$zM2.naturalWidth) !== null && _this89$zM$naturalWid !== void 0 ? _this89$zM$naturalWid : 1;
        _this89.xM.forEach(function (s) {
          return s.VM({
            AM: t,
            IM: i,
            BM: _this89.zM
          });
        }), _this89.OM && _this89.OM();
      }, this.zM.src = this.LM;
    }
  }, {
    key: "detached",
    value: function detached() {
      this.OM = void 0, this.zM = null;
    }
  }, {
    key: "hr",
    value: function hr(t) {
      this.ys = We(_objectSpread(_objectSpread({}, this.ys), t)), this.NM(), this.SM && this.SM();
    }
  }, {
    key: "SM",
    value: function SM() {
      this.OM && this.OM();
    }
  }, {
    key: "NM",
    value: function NM() {
      var _this90 = this;
      this.xM.forEach(function (t) {
        return t.EM(_this90.ys);
      });
    }
  }]);
}();
function He(t, i, s) {
  return new ye(t, new Fe(i, s));
}
var Ue = /*#__PURE__*/function () {
  function Ue(t, i) {
    _classCallCheck(this, Ue);
    this.Jn = t, this.ah = i, this.mM();
  }
  return _createClass(Ue, [{
    key: "detach",
    value: function detach() {
      this.Jn.detachPrimitive(this.ah);
    }
  }, {
    key: "getSeries",
    value: function getSeries() {
      return this.Jn;
    }
  }, {
    key: "applyOptions",
    value: function applyOptions(t) {
      this.ah && this.ah.hr && this.ah.hr(t);
    }
  }, {
    key: "mM",
    value: function mM() {
      this.Jn.attachPrimitive(this.ah);
    }
  }]);
}();
function $e(t, i) {
  return oi(Math.min(Math.max(t, 12), 30) * i);
}
function qe(t, i) {
  switch (t) {
    case "arrowDown":
    case "arrowUp":
      return $e(i, 1);
    case "circle":
      return $e(i, .8);
    case "square":
      return $e(i, .7);
  }
}
function Ye(t) {
  return function (t) {
    var i = Math.ceil(t);
    return i % 2 != 0 ? i - 1 : i;
  }($e(t, 1));
}
function je(t) {
  return Math.max($e(t, .1), 3);
}
function Ze(t, i, s) {
  return i ? t : s ? Math.ceil(t / 2) : 0;
}
function Ke(t, i, s, n) {
  var e = (qe("arrowUp", n) - 1) / 2 * s.WM,
    r = (oi(n / 2) - 1) / 2 * s.WM;
  i.beginPath(), t ? (i.moveTo(s._t - e, s.ut), i.lineTo(s._t, s.ut - e), i.lineTo(s._t + e, s.ut), i.lineTo(s._t + r, s.ut), i.lineTo(s._t + r, s.ut + e), i.lineTo(s._t - r, s.ut + e), i.lineTo(s._t - r, s.ut)) : (i.moveTo(s._t - e, s.ut), i.lineTo(s._t, s.ut + e), i.lineTo(s._t + e, s.ut), i.lineTo(s._t + r, s.ut), i.lineTo(s._t + r, s.ut - e), i.lineTo(s._t - r, s.ut - e), i.lineTo(s._t - r, s.ut)), i.fill();
}
function Xe(t, i, s, n, e, r) {
  var h = (qe("arrowUp", n) - 1) / 2,
    a = (oi(n / 2) - 1) / 2;
  if (e >= i - a - 2 && e <= i + a + 2 && r >= (t ? s : s - h) - 2 && r <= (t ? s + h : s) + 2) return !0;
  return function () {
    if (e < i - h - 3 || e > i + h + 3 || r < (t ? s - h - 3 : s) || r > (t ? s : s + h + 3)) return !1;
    var n = Math.abs(e - i);
    return Math.abs(r - s) + 3 >= n / 2;
  }();
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    _classCallCheck(this, Ge);
    this.Yt = null, this.On = new et(), this.W = -1, this.F = "", this.Mp = "";
  }
  return _createClass(Ge, [{
    key: "ht",
    value: function ht(t) {
      this.Yt = t;
    }
  }, {
    key: "Nn",
    value: function Nn(t, i) {
      this.W === t && this.F === i || (this.W = t, this.F = i, this.Mp = S(t, i), this.On.In());
    }
  }, {
    key: "jn",
    value: function jn(t, i) {
      if (null === this.Yt || null === this.Yt.lt) return null;
      for (var _s70 = this.Yt.lt.from; _s70 < this.Yt.lt.to; _s70++) {
        var _n42$Zn;
        var _n42 = this.Yt.ot[_s70];
        if (_n42 && Qe(_n42, t, i)) return {
          zOrder: "normal",
          externalId: (_n42$Zn = _n42.Zn) !== null && _n42$Zn !== void 0 ? _n42$Zn : ""
        };
      }
      return null;
    }
  }, {
    key: "draw",
    value: function draw(t) {
      var _this91 = this;
      t.useBitmapCoordinateSpace(function (t) {
        _this91.et(t);
      });
    }
  }, {
    key: "et",
    value: function et(_ref29) {
      var t = _ref29.context,
        i = _ref29.horizontalPixelRatio,
        s = _ref29.verticalPixelRatio;
      if (null !== this.Yt && null !== this.Yt.lt) {
        t.textBaseline = "middle", t.font = this.Mp;
        for (var _n43 = this.Yt.lt.from; _n43 < this.Yt.lt.to; _n43++) {
          var _e29 = this.Yt.ot[_n43];
          void 0 !== _e29.ri && (_e29.ri.Qi = this.On.Vi(t, _e29.ri.FM), _e29.ri.$t = this.W, _e29.ri._t = _e29._t - _e29.ri.Qi / 2), Je(_e29, t, i, s);
        }
      }
    }
  }]);
}();
function Je(t, i, s, n) {
  i.fillStyle = t.R, void 0 !== t.ri && function (t, i, s, n, e, r) {
    t.save(), t.scale(e, r), t.fillText(i, s, n), t.restore();
  }(i, t.ri.FM, t.ri._t, t.ri.ut, s, n), function (t, i, s) {
    if (0 === t.zr) return;
    switch (t.HM) {
      case "arrowDown":
        return void Ke(!1, i, s, t.zr);
      case "arrowUp":
        return void Ke(!0, i, s, t.zr);
      case "circle":
        return void function (t, i, s) {
          var n = (qe("circle", s) - 1) / 2;
          t.beginPath(), t.arc(i._t, i.ut, n * i.WM, 0, 2 * Math.PI, !1), t.fill();
        }(i, s, t.zr);
      case "square":
        return void function (t, i, s) {
          var n = qe("square", s),
            e = (n - 1) * i.WM / 2,
            r = i._t - e,
            h = i.ut - e;
          t.fillRect(r, h, n * i.WM, n * i.WM);
        }(i, s, t.zr);
    }
    t.HM;
  }(t, i, function (t, i, s) {
    var n = Math.max(1, Math.floor(i)) % 2 / 2;
    return {
      _t: Math.round(t._t * i) + n,
      ut: t.ut * s,
      WM: i
    };
  }(t, s, n));
}
function Qe(t, i, s) {
  return !(void 0 === t.ri || !function (t, i, s, n, e, r) {
    var h = n / 2;
    return e >= t && e <= t + s && r >= i - h && r <= i + h;
  }(t.ri._t, t.ri.ut, t.ri.Qi, t.ri.$t, i, s)) || function (t, i, s) {
    if (0 === t.zr) return !1;
    switch (t.HM) {
      case "arrowDown":
        return Xe(!0, t._t, t.ut, t.zr, i, s);
      case "arrowUp":
        return Xe(!1, t._t, t.ut, t.zr, i, s);
      case "circle":
        return function (t, i, s, n, e) {
          var r = 2 + qe("circle", s) / 2,
            h = t - n,
            a = i - e;
          return Math.sqrt(h * h + a * a) <= r;
        }(t._t, t.ut, t.zr, i, s);
      case "square":
        return function (t, i, s, n, e) {
          var r = qe("square", s),
            h = (r - 1) / 2,
            a = t - h,
            l = i - h;
          return n >= a && n <= a + r && e >= l && e <= l + r;
        }(t._t, t.ut, t.zr, i, s);
    }
  }(t, i, s);
}
function tr(t, i, s, n, e, r, h, a) {
  var l = a.timeScale();
  var o, _, c;
  if ("value" in (d = s) && "number" == typeof d.value) o = s.value, _ = s.value, c = s.value;else {
    if (!function (t) {
      return "open" in t && "high" in t && "low" in t && "close" in t;
    }(s)) return;
    o = s.close, _ = s.high, c = s.low;
  }
  var d;
  var f = p(i.size) ? Math.max(i.size, 0) : 1,
    v = Ye(l.options().barSpacing) * f,
    m = v / 2;
  switch (t.zr = v, i.position) {
    case "inBar":
      return t.ut = u(h.priceToCoordinate(o)), void (void 0 !== t.ri && (t.ri.ut = t.ut + m + r + .6 * e));
    case "aboveBar":
      return t.ut = u(h.priceToCoordinate(_)) - m - n.UM, void 0 !== t.ri && (t.ri.ut = t.ut - m - .6 * e, n.UM += 1.2 * e), void (n.UM += v + r);
    case "belowBar":
      return t.ut = u(h.priceToCoordinate(c)) + m + n.$M, void 0 !== t.ri && (t.ri.ut = t.ut + m + r + .6 * e, n.$M += 1.2 * e), void (n.$M += v + r);
  }
  i.position;
}
var ir = /*#__PURE__*/function () {
  function ir(t, i) {
    _classCallCheck(this, ir);
    this.qM = [], this.St = !0, this.YM = !0, this.Gt = new Ge(), this.ge = t, this._p = i, this.Yt = {
      ot: [],
      lt: null
    };
  }
  return _createClass(ir, [{
    key: "renderer",
    value: function renderer() {
      if (!this.ge.options().visible) return null;
      this.St && this.jM();
      var t = this._p.options().layout;
      return this.Gt.Nn(t.fontSize, t.fontFamily), this.Gt.ht(this.Yt), this.Gt;
    }
  }, {
    key: "ZM",
    value: function ZM(t) {
      this.qM = t, this.kt("data");
    }
  }, {
    key: "kt",
    value: function kt(t) {
      this.St = !0, "data" === t && (this.YM = !0);
    }
  }, {
    key: "jM",
    value: function jM() {
      var t = this._p.timeScale(),
        i = this.qM;
      this.YM && (this.Yt.ot = i.map(function (t) {
        return {
          wt: t.time,
          _t: 0,
          ut: 0,
          zr: 0,
          HM: t.shape,
          R: t.color,
          Zn: t.id,
          KM: t.KM,
          ri: void 0
        };
      }), this.YM = !1);
      var s = this._p.options().layout;
      this.Yt.lt = null;
      var n = t.getVisibleLogicalRange();
      if (null === n) return;
      var e = new Ci(Math.floor(n.from), Math.ceil(n.to));
      if (null === this.ge.data()[0]) return;
      if (0 === this.Yt.ot.length) return;
      var r = NaN;
      var h = je(t.options().barSpacing),
        a = {
          UM: h,
          $M: h
        };
      this.Yt.lt = en(this.Yt.ot, e, !0);
      for (var _n44 = this.Yt.lt.from; _n44 < this.Yt.lt.to; _n44++) {
        var _e30 = i[_n44];
        _e30.time !== r && (a.UM = h, a.$M = h, r = _e30.time);
        var _l11 = this.Yt.ot[_n44];
        _l11._t = u(t.logicalToCoordinate(_e30.time)), void 0 !== _e30.text && _e30.text.length > 0 && (_l11.ri = {
          FM: _e30.text,
          _t: 0,
          ut: 0,
          Qi: 0,
          $t: 0
        });
        var _o10 = u(this.ge.dataByIndex(_e30.time, -1));
        null !== _o10 && tr(_l11, _e30, _o10, a, s.fontSize, h, this.ge, this._p);
      }
      this.St = !1;
    }
  }]);
}();
var sr = /*#__PURE__*/function () {
  function sr() {
    _classCallCheck(this, sr);
    this.sh = null, this.qM = [], this.XM = [], this.GM = null, this.ge = null, this._p = null, this.JM = !0, this.QM = null, this.tb = null, this.ib = null;
  }
  return _createClass(sr, [{
    key: "attached",
    value: function attached(t) {
      var _this92 = this;
      this.sb(), this._p = t.chart, this.ge = t.series, this.sh = new ir(this.ge, u(this._p)), this.OM = t.requestUpdate, this.ge.subscribeDataChanged(function (t) {
        return _this92.rg(t);
      }), this.SM();
    }
  }, {
    key: "SM",
    value: function SM() {
      this.OM && this.OM();
    }
  }, {
    key: "detached",
    value: function detached() {
      this.ge && this.GM && this.ge.unsubscribeDataChanged(this.GM), this._p = null, this.ge = null, this.sh = null, this.GM = null;
    }
  }, {
    key: "ZM",
    value: function ZM(t) {
      this.qM = t, this.sb(), this.JM = !0, this.tb = null, this.SM();
    }
  }, {
    key: "nb",
    value: function nb() {
      return this.qM;
    }
  }, {
    key: "paneViews",
    value: function paneViews() {
      return this.sh ? [this.sh] : [];
    }
  }, {
    key: "updateAllViews",
    value: function updateAllViews() {
      this.eb();
    }
  }, {
    key: "hitTest",
    value: function hitTest(t, i) {
      var _this$sh$renderer$jn, _this$sh$renderer;
      return this.sh ? (_this$sh$renderer$jn = (_this$sh$renderer = this.sh.renderer()) === null || _this$sh$renderer === void 0 ? void 0 : _this$sh$renderer.jn(t, i)) !== null && _this$sh$renderer$jn !== void 0 ? _this$sh$renderer$jn : null : null;
    }
  }, {
    key: "autoscaleInfo",
    value: function autoscaleInfo(t, i) {
      if (this.sh) {
        var _t85 = this.rb();
        if (_t85) return {
          priceRange: null,
          margins: _t85
        };
      }
      return null;
    }
  }, {
    key: "rb",
    value: function rb() {
      var t = u(this._p).timeScale().options().barSpacing;
      if (this.JM || t !== this.ib) {
        if (this.ib = t, this.qM.length > 0) {
          var _i82 = je(t),
            _s71 = 1.5 * Ye(t) + 2 * _i82,
            _n45 = this.hb();
          this.QM = {
            above: Ze(_s71, _n45.aboveBar, _n45.inBar),
            below: Ze(_s71, _n45.belowBar, _n45.inBar)
          };
        } else this.QM = null;
        this.JM = !1;
      }
      return this.QM;
    }
  }, {
    key: "hb",
    value: function hb() {
      return null === this.tb && (this.tb = this.qM.reduce(function (t, i) {
        return t[i.position] || (t[i.position] = !0), t;
      }, {
        inBar: !1,
        aboveBar: !1,
        belowBar: !1
      })), this.tb;
    }
  }, {
    key: "sb",
    value: function sb() {
      var _this$ge,
        _this$ge2,
        _this93 = this;
      if (!this._p || !this.ge) return;
      var t = this._p.timeScale();
      if (null == t.getVisibleLogicalRange() || !this.ge || 0 === ((_this$ge = this.ge) === null || _this$ge === void 0 ? void 0 : _this$ge.data().length)) return void (this.XM = []);
      var i = (_this$ge2 = this.ge) === null || _this$ge2 === void 0 ? void 0 : _this$ge2.data(),
        s = t.timeToIndex(u(i[0].time), !0);
      this.XM = this.qM.map(function (i, n) {
        var e = t.timeToIndex(i.time, !0),
          r = e < s ? 1 : -1,
          h = u(_this93.ge).dataByIndex(e, r);
        return {
          time: t.timeToIndex(u(h).time, !1),
          position: i.position,
          shape: i.shape,
          color: i.color,
          id: i.id,
          KM: n,
          text: i.text,
          size: i.size,
          ew: i.time
        };
      });
    }
  }, {
    key: "eb",
    value: function eb(t) {
      this.sh && (this.sb(), this.sh.ZM(this.XM), this.sh.kt(t));
    }
  }, {
    key: "rg",
    value: function rg(t) {
      this.SM();
    }
  }]);
}();
var nr = /*#__PURE__*/function (_Ue) {
  function nr(t, i, s) {
    var _this94;
    _classCallCheck(this, nr);
    _this94 = _callSuper(this, nr, [t, i]), s && _this94.setMarkers(s);
    return _this94;
  }
  _inherits(nr, _Ue);
  return _createClass(nr, [{
    key: "setMarkers",
    value: function setMarkers(t) {
      this.ah.ZM(t);
    }
  }, {
    key: "markers",
    value: function markers() {
      return this.ah.nb();
    }
  }]);
}(Ue);
function er(t, i) {
  var s = new nr(t, new sr());
  return i && s.setMarkers(i), s;
}
var rr = /*#__PURE__*/function () {
  function rr(t) {
    _classCallCheck(this, rr);
    this.qM = new Map(), this.ab = t;
  }
  return _createClass(rr, [{
    key: "lb",
    value: function lb(t, i, s) {
      var _this95 = this;
      if (this.ob(i), void 0 !== s) {
        var _n46 = window.setTimeout(function () {
            _this95.qM["delete"](i), _this95._b();
          }, s),
          _e31 = _objectSpread(_objectSpread({}, t), {}, {
            ub: _n46,
            cb: Date.now() + s
          });
        this.qM.set(i, _e31);
      } else this.qM.set(i, _objectSpread(_objectSpread({}, t), {}, {
        ub: void 0,
        cb: void 0
      }));
      this._b();
    }
  }, {
    key: "ob",
    value: function ob(t) {
      var i = this.qM.get(t);
      i && void 0 !== i.ub && window.clearTimeout(i.ub), this.qM["delete"](t), this._b();
    }
  }, {
    key: "fb",
    value: function fb() {
      var _iterator44 = _createForOfIteratorHelper(this.qM),
        _step44;
      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var _step44$value = _slicedToArray(_step44.value, 1),
            _t86 = _step44$value[0];
          this.ob(_t86);
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }
    }
  }, {
    key: "pb",
    value: function pb() {
      var t = Date.now(),
        i = [];
      var _iterator45 = _createForOfIteratorHelper(this.qM),
        _step45;
      try {
        for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
          var _step45$value = _slicedToArray(_step45.value, 2),
            _s72 = _step45$value[0],
            _n47 = _step45$value[1];
          !_n47.cb || _n47.cb > t ? i.push({
            time: _n47.time,
            sign: _n47.sign,
            value: _n47.value
          }) : this.ob(_s72);
        }
      } catch (err) {
        _iterator45.e(err);
      } finally {
        _iterator45.f();
      }
      return i;
    }
  }, {
    key: "mb",
    value: function mb(t) {
      this.ab = t;
    }
  }, {
    key: "_b",
    value: function _b() {
      this.ab && this.ab();
    }
  }]);
}();
var hr = {
  positiveColor: "#22AB94",
  negativeColor: "#F7525F",
  updateVisibilityDuration: 5e3
};
var ar = /*#__PURE__*/function () {
  function ar(t, i, s, n) {
    _classCallCheck(this, ar);
    this.Yt = t, this.wb = i, this.gb = s, this.Mb = n;
  }
  return _createClass(ar, [{
    key: "draw",
    value: function draw(t) {
      var _this96 = this;
      t.useBitmapCoordinateSpace(function (t) {
        var i = t.context,
          s = Math.max(1, Math.floor(t.horizontalPixelRatio)) % 2 / 2,
          n = 4 * t.verticalPixelRatio + s;
        _this96.Yt.forEach(function (e) {
          var r = Math.round(e._t * t.horizontalPixelRatio) + s;
          i.beginPath();
          var h = _this96.bb(e.xb);
          i.fillStyle = h, i.arc(r, e.ut * t.verticalPixelRatio, n, 0, 2 * Math.PI, !1), i.fill(), e.xb && (i.strokeStyle = h, i.lineWidth = Math.floor(2 * t.horizontalPixelRatio), i.beginPath(), i.moveTo((e._t - 4.7) * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb) * t.verticalPixelRatio), i.lineTo(e._t * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb - 7 * e.xb * .5) * t.verticalPixelRatio), i.lineTo((e._t + 4.7) * t.horizontalPixelRatio + s, (e.ut - 7 * e.xb) * t.verticalPixelRatio), i.stroke());
        });
      });
    }
  }, {
    key: "bb",
    value: function bb(t) {
      return 0 === t ? this.wb : t > 0 ? this.Mb : this.gb;
    }
  }]);
}();
var lr = /*#__PURE__*/function () {
  function lr(t, i, s) {
    _classCallCheck(this, lr);
    this.Yt = [], this.ge = t, this.uh = i, this.ys = s;
  }
  return _createClass(lr, [{
    key: "kt",
    value: function kt(t) {
      var _this97 = this;
      this.Yt = t.map(function (t) {
        var i = _this97.ge.priceToCoordinate(t.value);
        if (null === i) return null;
        return {
          _t: u(_this97.uh.timeToCoordinate(t.time)),
          ut: i,
          xb: t.sign
        };
      }).filter(M);
    }
  }, {
    key: "renderer",
    value: function renderer() {
      var t = function (t, i) {
        return function (t, i) {
          return "Area" === i;
        }(0, i) ? t.lineColor : t.color;
      }(this.ge.options(), this.ge.seriesType());
      return new ar(this.Yt, t, this.ys.negativeColor, this.ys.positiveColor);
    }
  }]);
}();
function or(t, i) {
  return "Line" === i || "Area" === i;
}
var _r = /*#__PURE__*/function () {
  function _r(t) {
    var _this98 = this;
    _classCallCheck(this, _r);
    this._p = void 0, this.ge = void 0, this.xM = [], this.Yo = null, this.Sb = new Map(), this.Cb = new rr(function () {
      return _this98.SM();
    }), this.ys = _objectSpread(_objectSpread({}, hr), t);
  }
  return _createClass(_r, [{
    key: "hr",
    value: function hr(t) {
      this.ys = _objectSpread(_objectSpread({}, this.ys), t), this.SM();
    }
  }, {
    key: "ZM",
    value: function ZM(t) {
      var _this99 = this;
      this.Cb.fb();
      var i = this.Yo;
      i && t.forEach(function (t) {
        _this99.Cb.lb(t, i.key(t.time));
      });
    }
  }, {
    key: "nb",
    value: function nb() {
      return this.Cb.pb();
    }
  }, {
    key: "SM",
    value: function SM() {
      var _this$OM;
      (_this$OM = this.OM) === null || _this$OM === void 0 || _this$OM.call(this);
    }
  }, {
    key: "attached",
    value: function attached(t) {
      var i = t.chart,
        s = t.series,
        n = t.requestUpdate,
        e = t.horzScaleBehavior;
      this._p = i, this.ge = s, this.Yo = e;
      var r = this.ge.seriesType();
      if ("Area" !== r && "Line" !== r) throw new Error("UpDownMarkersPrimitive is only supported for Area and Line series types");
      this.xM = [new lr(this.ge, this._p.timeScale(), this.ys)], this.OM = n, this.SM();
    }
  }, {
    key: "detached",
    value: function detached() {
      this._p = void 0, this.ge = void 0, this.OM = void 0;
    }
  }, {
    key: "Cp",
    value: function Cp() {
      return _(this._p);
    }
  }, {
    key: "wo",
    value: function wo() {
      return _(this.ge);
    }
  }, {
    key: "updateAllViews",
    value: function updateAllViews() {
      var _this100 = this;
      this.xM.forEach(function (t) {
        return t.kt(_this100.nb());
      });
    }
  }, {
    key: "paneViews",
    value: function paneViews() {
      return this.xM;
    }
  }, {
    key: "ht",
    value: function ht(t) {
      var _this101 = this;
      if (!this.ge) throw new Error("Primitive not attached to series");
      var i = this.ge.seriesType();
      this.Sb.clear();
      var s = this.Yo;
      s && t.forEach(function (t) {
        Ns(t) && or(0, i) && _this101.Sb.set(s.key(t.time), t.value);
      }), _(this.ge).setData(t);
    }
  }, {
    key: "kt",
    value: function kt(t, i) {
      if (!this.ge || !this.Yo) throw new Error("Primitive not attached to series");
      var s = this.ge.seriesType(),
        n = this.Yo.key(t.time);
      if (Os(t) && this.Sb["delete"](n), Ns(t) && or(0, s)) {
        var _i83 = this.Sb.get(n);
        _i83 && this.Cb.lb({
          time: t.time,
          value: t.value,
          sign: ur(t.value, _i83)
        }, n, this.ys.updateVisibilityDuration);
      }
      _(this.ge).update(t, i);
    }
  }, {
    key: "yb",
    value: function yb() {
      this.Cb.fb();
    }
  }]);
}();
function ur(t, i) {
  return t === i ? 0 : t - i > 0 ? 1 : -1;
}
var cr = /*#__PURE__*/function (_Ue2) {
  function cr() {
    _classCallCheck(this, cr);
    return _callSuper(this, cr, arguments);
  }
  _inherits(cr, _Ue2);
  return _createClass(cr, [{
    key: "setData",
    value: function setData(t) {
      return this.ah.ht(t);
    }
  }, {
    key: "update",
    value: function update(t, i) {
      return this.ah.kt(t, i);
    }
  }, {
    key: "markers",
    value: function markers() {
      return this.ah.nb();
    }
  }, {
    key: "setMarkers",
    value: function setMarkers(t) {
      return this.ah.ZM(t);
    }
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      return this.ah.yb();
    }
  }]);
}(Ue);
function dr(t) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new cr(t, new _r(i));
}
var fr = _objectSpread(_objectSpread({}, e), {}, {
  color: "#2196f3"
});
function pr() {
  return "5.0.3";
}


/***/ }),

/***/ "./src/lib/components/Tvlwc.react.js":
/*!*******************************************!*\
  !*** ./src/lib/components/Tvlwc.react.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/lightweight-charts/dist/lightweight-charts.production.mjs");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




/**
 * Tradingview Lightweight Chart object
 */

var Tvlwc = function Tvlwc(props) {
  var id = props.id,
    setProps = props.setProps,
    chartOptions = props.chartOptions,
    seriesData = props.seriesData,
    seriesTypes = props.seriesTypes,
    seriesOptions = props.seriesOptions,
    seriesMarkers = props.seriesMarkers,
    seriesPriceLines = props.seriesPriceLines,
    width = props.width,
    height = props.height;
  var chartContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tvChart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  // keep track of all series on chart seriesId => seriesApi
  var allSeries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());
  function handleChartOptions(chartOptions) {
    if ('localization' in chartOptions) {
      if ('priceFormatter' in chartOptions.localization) {
        chartOptions.localization.priceFormatter = eval(chartOptions.localization.priceFormatter);
      }
      if ('timeFormatter' in chartOptions.localization) {
        chartOptions.localization.timeFormatter = eval(chartOptions.localization.timeFormatter);
      }
    }
    ;
    return chartOptions;
  }
  ;
  function handleMouseEvent(param) {
    // match index key (seriesId) to the param by joining through seriesApi
    param.seriesPrices = Object.fromEntries(_toConsumableArray(allSeries.current).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        seriesId = _ref2[0],
        seriesApi = _ref2[1];
      return [seriesId, param.seriesPrices.get(seriesApi)];
    }));
    return param;
  }
  ;
  var handleResize = function handleResize() {
    tvChart.current.applyOptions({
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight
    });
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      tvChart.current.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, [chartContainerRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tvChart.current) {
      // tvChart already exists and just apply chart options
      tvChart.current.applyOptions(handleChartOptions(chartOptions));
    } else {
      // tvChart is null, so create one (probably first init)
      tvChart.current = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_2__["createChart"])(chartContainerRef.current, handleChartOptions(chartOptions));
      window.addEventListener('resize', handleResize);
      tvChart.current.timeScale().fitContent();
      // update the height and width once upon init
      handleResize();
      tvChart.current.subscribeCrosshairMove(function (param) {
        setProps({
          crosshair: handleMouseEvent(param)
        });
      });
      tvChart.current.subscribeClick(function (param) {
        setProps({
          click: handleMouseEvent(param)
        });
      });
    }

    // subscribe timeScale events
    tvChart.current.timeScale().subscribeVisibleTimeRangeChange(function () {
      setProps({
        timeRangeVisibleRange: tvChart.current.timeScale().getVisibleRange()
      });
    });
    tvChart.current.timeScale().subscribeVisibleLogicalRangeChange(function () {
      setProps({
        timeRangeVisibleLogicalRange: tvChart.current.timeScale().getVisibleLogicalRange()
      });
    });
    tvChart.current.timeScale().subscribeSizeChange(function () {
      setProps({
        timeScaleWidth: tvChart.current.timeScale().width(),
        timeScaleHeight: tvChart.current.timeScale().height()
      });
    });
    setProps({
      fullChartOptions: tvChart.current.options(),
      fullPriceScaleOptions: tvChart.current.priceScale().options(),
      priceScaleWidth: tvChart.current.priceScale().width(),
      fullTimeScaleOptions: tvChart.current.timeScale().options()
    });
  }, [setProps, chartOptions, width, height]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tvChart.current) {
      var newSeries = new Map();
      for (var i = 0; i < seriesData.length; i++) {
        var series, options, data, markers, priceLines, seriesId;
        options = seriesOptions[i] ? seriesOptions[i] : {};
        data = seriesData[i] ? seriesData[i] : [];
        markers = seriesMarkers[i] ? seriesMarkers[i] : [];
        priceLines = seriesPriceLines[i] ? seriesPriceLines[i] : [];
        seriesId = i;
        switch (seriesTypes[i]) {
          case 'bar':
            series = tvChart.current.addBarSeries(options);
            break;
          case 'candlestick':
            series = tvChart.current.addCandlestickSeries(options);
            break;
          case 'area':
            series = tvChart.current.addAreaSeries(options);
            break;
          case 'baseline':
            series = tvChart.current.addBaselineSeries(options);
            break;
          case 'line':
            series = tvChart.current.addLineSeries(options);
            break;
          case 'histogram':
            series = tvChart.current.addHistogramSeries(options);
            break;
          default:
            break;
        }
        series.setData(data);
        series.setMarkers(markers);
        var _iterator = _createForOfIteratorHelper(priceLines),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var pl = _step.value;
            series.createPriceLine(pl);
          }
          // add this seriesId and seriesApi pair to existing allSeries state
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        newSeries.set(seriesId, series);
      }
      ;
      allSeries.current = newSeries;
      setProps({
        // get the seriesApi.option() in each of the seriesApi in allSeries; with seriesId (in allSeries) as key
        fullSeriesOptions: Object.fromEntries(_toConsumableArray(allSeries.current).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            seriesId = _ref4[0],
            seriesApi = _ref4[1];
          return [seriesId, seriesApi.options()];
        }))
      });
    }
    return function () {
      allSeries.current.forEach(function (seriesApi) {
        tvChart.current.removeSeries(seriesApi);
      });
    };
  }, [setProps, seriesData, seriesTypes, seriesOptions, seriesMarkers, seriesPriceLines]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    ref: chartContainerRef,
    style: {
      height: height,
      width: width
    }
  });
};
Tvlwc.defaultProps = {
  chartOptions: {},
  seriesData: [],
  seriesTypes: [],
  seriesOptions: [],
  seriesMarkers: [],
  seriesPriceLines: [],
  crosshair: {},
  click: {},
  fullChartOptions: {},
  fullPriceScaleOptions: {},
  priceScaleWidth: null,
  fullSeriesOptions: {},
  timeRangeVisibleRange: {},
  timeRangeVisibleLogicalRange: {},
  timeScaleWidth: null,
  timeScaleHeight: null,
  fullTimeScaleOptions: {},
  width: 600,
  height: 400
};
Tvlwc.propTypes = {
  /**
   * The ID of this component
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * Object containing all chart options
   * See https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ChartOptions for possible options
   */
  chartOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Data for the series
   */
  seriesData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)),
  /**
   * Type of the series
   */
  seriesTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['bar', 'candlestick', 'area', 'baseline', 'line', 'histogram'])),
  /**
   * Options for the series
   */
  seriesOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  /**
   * Additional markers for the series
   */
  seriesMarkers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)),
  /**
   * Additional price lines for the series
   */
  seriesPriceLines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)),
  /**
   * Crosshair coordinates; read-only
   */
  crosshair: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Last-clicked on chart coordinates; read-only
   */
  click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Full chart options including defaults; read-only
   */
  fullChartOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Full chart price scale options including defaults; read-only
   */
  fullPriceScaleOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Width of price scale; read-only
   */
  priceScaleWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  /**
   * Full series options including defaults; read-only
   */
  fullSeriesOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Visible time range (dates); read-only
   */
  timeRangeVisibleRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Visible logical range (bar numbers); read-only
   */
  timeRangeVisibleLogicalRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Width of time scale; read-only
   */
  timeScaleWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  /**
   * Height of time scale; read-only
   */
  timeScaleHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  /**
   * Full time scale options including defaults; read-only
   */
  fullTimeScaleOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Sets width of the parent div of the chart
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  /**
   * Sets height of the parent div of the chart
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  /**
   * Set props
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Tvlwc);

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: Tvlwc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tvlwc_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tvlwc.react */ "./src/lib/components/Tvlwc.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tvlwc", function() { return _components_Tvlwc_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* eslint-disable import/prefer-default-export */



/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["PropTypes"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=dash_tvlwc.dev.js.map
//# sourceMappingURL=dash_tvlwc.dev.js.map