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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/dev/js/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/dev/js/home/index.js":
/*!***************************************!*\
  !*** ./frontend/dev/js/home/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _validate = __webpack_require__(/*! ./validate/validate.js */ \"./frontend/dev/js/home/validate/validate.js\");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\n__webpack_require__(/*! ../../less/home/main.less */ \"./frontend/dev/less/home/main.less\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nalert((0, _validate2.default)());\n\nfunction sum() {\n    for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {\n        elements[_key] = arguments[_key];\n    }\n\n    return elements.reduce(function (prev, curr) {\n        return prev + curr;\n    });\n}\n\nconsole.log(\"SUM = \" + sum(1, 2, 3, 4, 5));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kZXYvanMvaG9tZS9pbmRleC5qcz8yZmYyIl0sIm5hbWVzIjpbImFsZXJ0Iiwic3VtIiwiZWxlbWVudHMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFXQTs7OztBQVJBQSxNQUFNLHlCQUFOOztBQUVBLFNBQVNDLEdBQVQsR0FBMEI7QUFBQSxzQ0FBVkMsUUFBVTtBQUFWQSxnQkFBVTtBQUFBOztBQUN0QixXQUFPQSxTQUFTQyxNQUFULENBQWdCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCRCxPQUFPQyxJQUF2QjtBQUFBLEtBQWhCLENBQVA7QUFDSDs7QUFFREMsUUFBUUMsR0FBUixZQUFxQk4sSUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixDQUFyQiIsImZpbGUiOiIuL2Zyb250ZW5kL2Rldi9qcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwiLi92YWxpZGF0ZS92YWxpZGF0ZS5qc1wiO1xuXG5cbmFsZXJ0KHZhbGlkYXRvcigpKTtcblxuZnVuY3Rpb24gc3VtKC4uLmVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpO1xufVxuXG5jb25zb2xlLmxvZyhgU1VNID0gJHtzdW0oMSwyLDMsNCw1KX1gKTtcblxuaW1wb3J0IFwiLi4vLi4vbGVzcy9ob21lL21haW4ubGVzc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/dev/js/home/index.js\n");

/***/ }),

/***/ "./frontend/dev/js/home/validate/validate.js":
/*!***************************************************!*\
  !*** ./frontend/dev/js/home/validate/validate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = validator;\nfunction validator() {\n    return true;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kZXYvanMvaG9tZS92YWxpZGF0ZS92YWxpZGF0ZS5qcz8yYTk2Il0sIm5hbWVzIjpbInZhbGlkYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxTO0FBQVQsU0FBU0EsU0FBVCxHQUFxQjtBQUNoQyxXQUFPLElBQVA7QUFDSCIsImZpbGUiOiIuL2Zyb250ZW5kL2Rldi9qcy9ob21lL3ZhbGlkYXRlL3ZhbGlkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdG9yKCkge1xuICAgIHJldHVybiB0cnVlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/dev/js/home/validate/validate.js\n");

/***/ }),

/***/ "./frontend/dev/less/home/main.less":
/*!******************************************!*\
  !*** ./frontend/dev/less/home/main.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kZXYvbGVzcy9ob21lL21haW4ubGVzcz80YjkyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vZnJvbnRlbmQvZGV2L2xlc3MvaG9tZS9tYWluLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/dev/less/home/main.less\n");

/***/ })

/******/ });