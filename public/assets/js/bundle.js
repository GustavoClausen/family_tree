/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/modules/CreatorCard.js":
/*!*****************************************!*\
  !*** ./frontend/modules/CreatorCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatorCard)
/* harmony export */ });
/* harmony import */ var _CreatorTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatorTags */ "./frontend/modules/CreatorTags.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CreatorCard = /*#__PURE__*/function () {
  function CreatorCard(_ref) {
    var fullName = _ref.fullName,
      birthPlace = _ref.birthPlace,
      birthPlaceComplete = _ref.birthPlaceComplete,
      birthDate = _ref.birthDate,
      gender = _ref.gender,
      applicant = _ref.applicant,
      valueBirthCertificate = _ref.valueBirthCertificate,
      textBirthCertificate = _ref.textBirthCertificate,
      valueMarriageCertificate = _ref.valueMarriageCertificate,
      textMarriageCertificate = _ref.textMarriageCertificate,
      docsBirthCertificate = _ref.docsBirthCertificate,
      docsMarriageCertificate = _ref.docsMarriageCertificate;
    _classCallCheck(this, CreatorCard);
    this.ct = new _CreatorTags__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.fullName = fullName;
    this.birthPlace = birthPlace;
    this.birthPlaceComplete = birthPlaceComplete;
    this.birthDate = birthDate;
    this.gender = gender;
    this.applicant = applicant;
    this.valueBirthCertificate = valueBirthCertificate;
    this.textBirthCertificate = textBirthCertificate;
    this.valueMarriageCertificate = valueMarriageCertificate;
    this.textMarriageCertificate = textMarriageCertificate;
    this.docsBirthCertificate = docsBirthCertificate;
    this.docsMarriageCertificate = docsMarriageCertificate;
  }
  _createClass(CreatorCard, [{
    key: "calcAge",
    value: function calcAge(birthDate) {
      var year;
      if (birthDate.length === 4) year = Number(birthDate);
      year = Number(birthDate.slice(-4));
      var date = new Date();
      var currentYear = date.getFullYear();
      if (currentYear - year >= 65) return '-old';
      if (currentYear - year < 18) return '-minor';
      return '';
    }
  }, {
    key: "create",
    value: function create() {
      if (!this.fullName) return '';
      var container = this.ct.createDiv(['container', 'card-container']);
      var age = this.calcAge(this.birthDate);
      var inptDocsBirthCertificate = this.ct.createInputFile(['inpt-docs-birth']);
      inptDocsBirthCertificate.style.display = 'none';
      inptDocsBirthCertificate.files = this.docsBirthCertificate;
      var inptDocsMarriageCertificate = this.ct.createInputFile(['inpt-docs-marriage']);
      inptDocsMarriageCertificate.style.display = 'none';
      inptDocsMarriageCertificate.files = this.docsMarriageCertificate;
      var spanvalueBirthCertificate = this.ct.createSpan(['infos-birth-certificate']);
      spanvalueBirthCertificate.innerText = this.valueBirthCertificate;
      spanvalueBirthCertificate.style.display = 'none';
      var spanTextBirthCertificate = this.ct.createSpan(['text-infos-birth-certificate']);
      spanTextBirthCertificate.innerText = this.textBirthCertificate;
      spanTextBirthCertificate.style.display = 'none';
      var spanvalueMarriageCertificate = this.ct.createSpan(['infos-marriage-certificate']);
      spanvalueMarriageCertificate.innerText = this.valueMarriageCertificate;
      spanvalueMarriageCertificate.style.display = 'none';
      var spanTextMarriageCertificate = this.ct.createSpan(['text-infos-marriage-certificate']);
      spanTextMarriageCertificate.innerText = this.textMarriageCertificate;
      spanTextMarriageCertificate.style.display = 'none';
      var spanGender = this.ct.createSpan(['info-gender']);
      spanGender.innerText = this.gender;
      spanGender.style.display = 'none';
      var spanApplicant = this.ct.createSpan(['info-applicant']);
      spanApplicant.innerText = this.applicant;
      spanApplicant.style.display = 'none';
      var spanLocalBirth = this.ct.createSpan(['info-local-birth']);
      spanLocalBirth.innerText = this.birthPlaceComplete;
      spanLocalBirth.style.display = 'none';
      var card = "\n      <div class=\"card-img\">\n        <img\n          class=\"img\"\n          alt=\"Avatar\"\n          src=\"../../frontend/assets/img/".concat(this.gender).concat(age).concat(this.applicant ? '.svg' : '-generic.svg', "\"\n        >\n      </div>\n      <div class=\"card-name\">\n        <div class=\"name\">").concat(this.fullName, "</div>\n      </div>\n      <div class=\"card-flag-birth-container\">\n        <span class=\"acronym-birth-certificate\" style=\"display: none;\">").concat(this.birthPlace, "</span>\n        <div class=\"container-flag\">\n          <img\n            class=\"flag\"\n            src=\"https://flagcdn.com/").concat(this.birthPlace, ".svg\"\n            alt=\"Bandeira ").concat(this.birthPlaceComplete, "\">\n        </div>\n        <div class=\"birth-date\">").concat(this.birthDate, "</div>\n      </div>\n      <div class=\"container-card-end-line\">\n        <div class=\"card-end-line ").concat(this.applicant ? this.gender : 'generic-person', "\"></div>\n      </div>\n    ");
      container.innerHTML = card;
      container.appendChild(inptDocsBirthCertificate);
      container.appendChild(inptDocsMarriageCertificate);
      container.appendChild(spanvalueBirthCertificate);
      container.appendChild(spanTextBirthCertificate);
      container.appendChild(spanvalueMarriageCertificate);
      container.appendChild(spanTextMarriageCertificate);
      container.appendChild(spanGender);
      container.appendChild(spanApplicant);
      container.appendChild(spanLocalBirth);
      return container;
    }
  }]);
  return CreatorCard;
}();


/***/ }),

/***/ "./frontend/modules/CreatorTags.js":
/*!*****************************************!*\
  !*** ./frontend/modules/CreatorTags.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatorTags)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
var CreatorTags = /*#__PURE__*/function () {
  function CreatorTags() {
    _classCallCheck(this, CreatorTags);
  }
  _createClass(CreatorTags, [{
    key: "createDiv",
    value: function createDiv() {
      var classListDiv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var divCreated = document.createElement('div');
      classListDiv.forEach(function (element) {
        divCreated.classList.add(element);
      });
      return divCreated;
    }
  }, {
    key: "createSpan",
    value: function createSpan() {
      var classListSpan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var spanCreated = document.createElement('span');
      classListSpan.forEach(function (element) {
        spanCreated.classList.add(element);
      });
      return spanCreated;
    }
  }, {
    key: "createButton",
    value: function createButton() {
      var btn = document.createElement('button');
      return btn;
    }
  }, {
    key: "inputSubmit",
    value: function inputSubmit() {
      var submit = document.createElement('input');
      submit.type = 'submit';
      return submit;
    }
  }, {
    key: "createInputText",
    value: function createInputText() {
      var classListInputText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var inpt = document.createElement('input');
      classListInputText.forEach(function (element) {
        inpt.classList.add(element);
      });
      if (id) inpt.id = id;
      inpt.type = 'text';
      return inpt;
    }
  }, {
    key: "createInputRadio",
    value: function createInputRadio(name, value, id) {
      var inptRadio = document.createElement('input');
      inptRadio.type = 'radio';
      inptRadio.name = name;
      inptRadio.value = value;
      inptRadio.id = id;
      return inptRadio;
    }
  }, {
    key: "createInputDate",
    value: function createInputDate() {
      var classListInputDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var inpt = document.createElement('input');
      classListInputDate.forEach(function (element) {
        inpt.classList.add(element);
      });
      if (id) inpt.id = id;
      inpt.type = 'date';
      return inpt;
    }
  }, {
    key: "createSelectInput",
    value: function createSelectInput(options) {
      var select = document.createElement('select');
      options.forEach(function (_ref) {
        var optionValue = _ref.optionValue,
          optionText = _ref.optionText,
          group = _ref.group,
          label = _ref.label,
          optionsOfGroup = _ref.optionsOfGroup;
        if (group) {
          var optGroup = document.createElement('optgroup');
          optGroup.label = label;
          optionsOfGroup.forEach(function (option) {
            var opt = document.createElement('option');
            opt.value = option.optionValue;
            opt.innerText = option.optionText;
            optGroup.appendChild(opt);
          });
          select.appendChild(optGroup);
        } else {
          var opt = document.createElement('option');
          opt.value = optionValue;
          opt.innerText = optionText;
          select.appendChild(opt);
        }
      });
      return select;
    }
  }, {
    key: "createLabel",
    value: function createLabel(htmlFor) {
      var label = document.createElement('label');
      label.htmlFor = htmlFor;
      return label;
    }
  }, {
    key: "createForm",
    value: function createForm() {
      var form = document.createElement('form');
      return form;
    }
  }, {
    key: "createGenericInput",
    value: function createGenericInput() {
      var inpt = document.createElement('input');
      return inpt;
    }
  }, {
    key: "createImgTag",
    value: function createImgTag(applicant, sex) {
      var tagImg = document.createElement('img');
      tagImg.classList.add('img');
      tagImg.alt = 'Avatar';
      if (applicant) {
        sex === 'masculino' ? tagImg.src = './icons/applicant-man.svg' : tagImg.src = './icons/applicant-woman.svg';
        return tagImg;
      }
      sex === 'masculino' ? tagImg.src = './icons/generic-man.svg' : tagImg.src = './icons/generic-woman.svg';
      return tagImg;
    }
  }, {
    key: "createImgGenericTag",
    value: function createImgGenericTag() {
      var tagImg = document.createElement('img');
      return tagImg;
    }
  }, {
    key: "createInputHidden",
    value: function createInputHidden() {
      var inpt = document.createElement('input');
      inpt.type = 'hidden';
      return inpt;
    }
  }, {
    key: "createIconTag",
    value: function createIconTag() {
      var classListInputDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var i = document.createElement('i');
      classListInputDate.forEach(function (element) {
        i.classList.add(element);
      });
      return i;
    }
  }, {
    key: "createInputFile",
    value: function createInputFile() {
      var classList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var e = document.createElement('input');
      e.type = 'file';
      classList.forEach(function (className) {
        e.classList.add(className);
      });
      if (id) e.id = id;
      e.multiple = true;
      e.accept = '.pdf, .png, .jpg, .jpeg';
      return e;
    }
  }, {
    key: "paragraph",
    value: function paragraph() {
      var classList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var innerText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var p = document.createElement('p');
      classList.forEach(function (className) {
        p.classList.add(className);
      });
      if (id) p.id = id;
      if (innerText) p.innerText = innerText;
      return p;
    }
  }]);
  return CreatorTags;
}();


/***/ }),

/***/ "./frontend/modules/Form.js":
/*!**********************************!*\
  !*** ./frontend/modules/Form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _CreatorTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatorTags */ "./frontend/modules/CreatorTags.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./frontend/modules/Tree.js");
/* harmony import */ var _containerDoubt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containerDoubt */ "./frontend/modules/containerDoubt.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-lonely-if */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */



var Form = /*#__PURE__*/function () {
  function Form(nameAdding, selectorCSS, modeEntry) {
    _classCallCheck(this, Form);
    var date = new Date();
    var year = date.getFullYear();
    this.ct = new _CreatorTags__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.nameAdding = nameAdding;
    var optsBrazilText = {
      a: "Possuo a via f\xEDsica e ORIGINAL em INTEIRO TEOR - emitida em ".concat(year - 5, " ou depois"),
      b: "Possuo a via f\xEDsica e ORIGINAL em INTEIRO TEOR - emitida antes de ".concat(year - 5),
      c: 'Possuo a via física e ORIGINAL em BREVE RELATO ',
      d: 'Possuo apenas uma CÓPIA da certidão brasileira',
      e: 'Não sei em qual Cartório está o registro',
      f: 'Não sei informar',
      g: 'Não se aplica - solteiro(a) ou União Estável',
      h: 'Possuo a via física e ORIGINAL emitida pelo Consulado brasileiro',
      i: 'Possuo a via física e ORIGINAL emitida pelo cartório brasileiro',
      j: 'Possuo apenas uma CÓPIA da via emitida pelo Consulado ou cartório brasileiro',
      k: 'Possuo a via física e ORIGINAL da via emitida pelo próprio país',
      l: 'Possuo apenas uma CÓPIA da via emitida pelo próprio país '
    };
    var optsBrazilTips = {
      a: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro e <b>está dentro do prazo</b> estipulado',
      b: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro, mas <b>NÃO está dentro do prazo</b> estipulado',
      c: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem apenas os dados principais do registro. Exemplo: nomes dos pais e avós, data de nascimento, data do registro etc.',
      d: 'Você possui <b>apenas uma cópia digital ou física</b> da certidão brasileira, independentemente de estar em inteiro teor ou breve relato',
      e: 'Você tem <b>apenas as informações</b> ou suposições do local e data do registro',
      f: 'Você <b>NÃO</b> tem certeza sobre o estado do documento ou ele <b>NÃO se encaixa nas opções</b>',
      g: 'Não há registro civil de casamento ou possui apenas uma <b>UNIÃO ESTÁVEL</b>',
      h: 'Você possui a <b>certidão original emitida diretamente</b> pelo <b>Consulado ou Embaixada</b> brasileira',
      i: 'Você possui uma <b>certidão original emitida</b> por um <b>CARTÓRIO</b> brasileiro, produzida <b>a partir da certidão emitida diretamente no consulado</b> ou Embaixada (<b>transcrita no Brasil</b>)',
      j: 'Você possui apenas uma <b>cópia digital ou física</b> da certidão brasileira, independentemente de ser do Consulado ou Cartório brasileiro',
      k: 'Você possui a <b>certidão original “estrangeira” emitida diretamente pelo país</b> em o casamento foi celebrado',
      l: 'Você possui <b>apenas uma cópia</b>, física ou digital, da <b>certidão “estrangeira” emitida diretamente pelo país</b> em o casamento foi celebrado'
    };
    var optsItalyTips = {
      a: 'A certidão italiana está no <b> formato ORIGINAL</b>, físico e dentro do prazo estipulado',
      b: 'A certidão italiana está no <b> formato ORIGINAL</b> e físico, mas <b>NÃO está dentro do prazo </b>estipulado',
      c: 'A certidão italiana <b>NÃO está no formato original</b>, independentemente do prazo estipulado',
      d: 'Você tem <b>apenas as informações ou suposições</b> do local e data de nascimento',
      e: 'Você <b>NÃO tem certeza sobre o estado</b> do documento ou ele <b>NÃO se encaixa nas opções</b>',
      f: '<b>Não há registro civil de casamento</b>, tanto nos cartórios ou paróquias brasileiras, quanto nas Comuni ou Parrocchie italianas',
      g: 'A <b>certidão tem um texto corrido com todos os detalhes</b> do registro e <b>está dentro do prazo estipulado</b>',
      h: 'A <b>certidão tem um texto corrido com todos os detalhes</b> do registro, <b>mas NÃO está dentro do prazo</b> estipulado',
      i: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem <b>apenas os dados principais</b>: nomes dos pais e avós, data de nascimento, data do registro etc.',
      j: 'Você <b>possui apenas uma cópia digital ou física da certidão brasileira</b>, independentemente de estar em inteiro teor ou breve relato',
      k: 'Você <b>possui a certidão estrangeira</b> (emitida fora da Itália ou Brasil) em <b>formato ORIGINAL e físico</b>',
      l: 'Você <b>possui a certidão estrangeira</b> (emitida fora da Itália ou Brasil), mas <b>NÃO está no formato original</b>'
    };
    var optsItalyText = {
      a: "Possuo a via f\xEDsica e ORIGINAL - emitida em ".concat(year - 10, " ou depois"),
      b: "Possuo a via f\xEDsica e ORIGINAL - emitida antes de ".concat(year - 10),
      c: 'Possuo apenas uma CÓPIA do documento italiano',
      d: 'Não sei em qual Comune ou Parrocchia está o registro',
      e: 'Não sei informar',
      f: 'Não se aplica - solteiro(a) ou União Estável',
      g: "Possuo a via f\xEDsica e ORIGINAL em INTEIRO TEOR emitida em ".concat(year - 5, " ou depois"),
      h: "Possuo a via f\xEDsica e ORIGINAL em INTEIRO TEOR emitida antes de ".concat(year - 5),
      i: 'Possuo a via física e original em BREVE RELATO ',
      j: 'Possuo apenas uma CÓPIA da certidão brasileira',
      k: 'Possuo um registro físico e ORIGINAL',
      l: 'Possuo apenas uma CÓPIA do registro'
    };
    this.optsOtherText = {
      textA: '',
      get a() {
        return this.textA;
      },
      set a(country) {
        this.textA = "Possuo um registro f\xEDsico e ORIGINAL feito pelo pa\xEDs de nascimento - ".concat(country);
      },
      b: 'Possuo um registro físico e ORIGINAL feito no Consulado brasileiro',
      c: 'Possuo um registro físico e ORIGINAL feito em cartório brasileiro - Transcrito no Brasil',
      textD: '',
      get d() {
        return this.textD;
      },
      set d(country) {
        this.textD = "Possuo uma C\xD3PIA do registro feito pelo pa\xEDs de nascimento - ".concat(country);
      },
      e: 'Possuo uma CÓPIA do registro feito no Consulado ou Cartório brasileiro',
      f: 'Não se aplica - solteiro(a) ou União Estável',
      g: "Possuo um registro f\xEDsico e ORIGINAL em INTEIRO TEOR - emitido em ".concat(year - 5, " ou depois"),
      h: "Possuo um registro f\xEDsico e ORIGINAL em INTEIRO TEOR - emitido antes de ".concat(year - 5),
      i: 'Possuo um registro físico e ORIGINAL em BREVE RELATO',
      j: 'Possuo apenas uma CÓPIA do registro',
      k: 'Possuo um registro físico e ORIGINAL',
      l: 'Possuo apenas uma CÓPIA do registro',
      m: 'Não sei informar'
    };
    this.optsOtherTips = {
      a: 'A <b>certidão é “estrangeira”</b> e no formato <b>físico original</b>, sendo <b>emitida por um órgão competente</b> do <b>país que ocorreu o nascimento</b>',
      b: 'A <b>certidão é brasileira</b> e no formato <b>físico original, emitida por um órgão BRASILEIRO</b>, sendo o Consulado ou Embaixada brasileira localizado no país de nascimento',
      c: 'A <b>certidão é brasileira</b> e no formato <b>físico original</b>, sendo <b>emitida por um CARTÓRIO</b> após o registro do Consulado ter sido <b>inscrito no Brasil</b> (transcrição da certidão)',
      d: 'A <b>certidão é “estrangeira”</b> e foi <b>emitida por um órgão competente</b> do <b>país que ocorreu o nascimento</b>, mas é apenas uma CÓPIA física ou digital',
      e: 'A <b>certidão é brasileira</b> e foi emitida por um cartório ou Consulado brasileiro, mas é <b>apenas uma CÓPIA</b>',
      f: '<b>Não há registro civil de casamento</b> ou possui <b>apenas uma UNIÃO ESTÁVEL</b>',
      g: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro e <b>está dentro do prazo</b> estipulado',
      h: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro, mas <b>NÃO está dentro do prazo</b> estipulado',
      i: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem apenas os dados principais do registro',
      j: 'Você possui <b>apenas uma cópia digital ou física</b> da certidão brasileira, independentemente de estar em inteiro teor ou breve relato',
      k: 'Você possui uma <b>certidão física e original emitida por outro país, <b>NÃO</b> sendo do local de nascimento ou Brasil',
      l: 'Você possui <b>apenas uma CÓPIA digital ou física</b> da certidão emitida por outro país, <b>NÃO sendo</b> do <b>local de nascimento ou Brasil</b>',
      m: 'Você <b>NÃO</b> tem certeza sobre o estado do documento ou ele <b>NÃO se encaixa nas opções abaixo</b>'
    };
    this.locals = [{
      optionValue: 'pd',
      optionText: 'Selecione um país'
    }];
    this.optsBrazilBirthCertificate = [{
      optionValue: 'pd',
      optionText: 'Selecione uma opção'
    }, {
      optionValue: 'a',
      optionText: optsBrazilText.a,
      optionTip: optsBrazilTips.a
    }, {
      optionValue: 'b',
      optionText: optsBrazilText.b,
      optionTip: optsBrazilTips.b
    }, {
      optionValue: 'c',
      optionText: optsBrazilText.c,
      optionTip: optsBrazilTips.c
    }, {
      optionValue: 'd',
      optionText: optsBrazilText.d,
      optionTip: optsBrazilTips.d
    }, {
      optionValue: 'e',
      optionText: optsBrazilText.e,
      optionTip: optsBrazilTips.e
    }, {
      optionValue: 'f',
      optionText: optsBrazilText.f,
      optionTip: optsBrazilTips.f
    }];
    this.optsBrazilMarriageCertificate = [{
      optionValue: 'pd',
      optionText: 'Selecione uma opção'
    }, {
      optionValue: 'g',
      optionText: optsBrazilText.g,
      optionTip: optsBrazilTips.g
    }, {
      optionValue: 'f',
      optionText: optsBrazilText.f,
      optionTip: optsBrazilTips.f
    }, {
      group: true,
      label: 'celebrado em: BRASIL',
      optionsOfGroup: [{
        optionValue: 'a',
        optionText: optsBrazilText.a,
        optionTip: optsBrazilTips.a
      }, {
        optionValue: 'b',
        optionText: optsBrazilText.b,
        optionTip: optsBrazilTips.b
      }, {
        optionValue: 'c',
        optionText: optsBrazilText.c,
        optionTip: optsBrazilTips.c
      }, {
        optionValue: 'd',
        optionText: optsBrazilText.d,
        optionTip: optsBrazilTips.d
      }, {
        optionValue: 'e',
        optionText: optsBrazilText.e,
        optionTip: optsBrazilTips.e
      }]
    }, {
      group: true,
      label: 'celebrado em: FORA DO BRASIL',
      optionsOfGroup: [{
        optionValue: 'h',
        optionText: optsBrazilText.h,
        optionTip: optsBrazilTips.h
      }, {
        optionValue: 'i',
        optionText: optsBrazilText.i,
        optionTip: optsBrazilTips.i
      }, {
        optionValue: 'j',
        optionText: optsBrazilText.j,
        optionTip: optsBrazilTips.j
      }, {
        optionValue: 'k',
        optionText: optsBrazilText.k,
        optionTip: optsBrazilTips.k
      }, {
        optionValue: 'l',
        optionText: optsBrazilText.l,
        optionTip: optsBrazilTips.l
      }]
    }];
    this.optsItalyBirthCertificate = [{
      optionValue: 'pd',
      optionText: 'Selecione uma opção'
    }, {
      optionValue: 'a',
      optionText: optsItalyText.a,
      optionTip: optsItalyTips.a
    }, {
      optionValue: 'b',
      optionText: optsItalyText.b,
      optionTip: optsItalyTips.b
    }, {
      optionValue: 'c',
      optionText: optsItalyText.c,
      optionTip: optsItalyTips.c
    }, {
      optionValue: 'd',
      optionText: optsItalyText.d,
      optionTip: optsItalyTips.d
    }, {
      optionValue: 'e',
      optionText: optsItalyText.e,
      optionTip: optsItalyTips.e
    }];
    this.optsItalyMarriageCertificate = [{
      optionValue: 'pd',
      optionText: 'Selecione uma opção'
    }, {
      optionValue: 'f',
      optionText: optsItalyText.f,
      optionTip: optsItalyTips.f
    }, {
      optionValue: 'e',
      optionText: optsItalyText.e,
      optionTip: optsItalyTips.e
    }, {
      group: true,
      label: 'celebrado em: ITÁLIA',
      optionsOfGroup: [{
        optionValue: 'a',
        optionText: optsItalyText.a,
        optionTip: optsItalyTips.a
      }, {
        optionValue: 'b',
        optionText: optsItalyText.b,
        optionTip: optsItalyTips.b
      }, {
        optionValue: 'c',
        optionText: optsItalyText.c,
        optionTip: optsItalyTips.c
      }, {
        optionValue: 'd',
        optionText: optsItalyText.d,
        optionTip: optsItalyTips.d
      }]
    }, {
      group: true,
      label: 'celebrado em: BRASIL',
      optionsOfGroup: [{
        optionValue: 'g',
        optionText: optsItalyText.g,
        optionTip: optsItalyTips.g
      }, {
        optionValue: 'h',
        optionText: optsItalyText.h,
        optionTip: optsItalyTips.h
      }, {
        optionValue: 'i',
        optionText: optsItalyText.i,
        optionTip: optsItalyTips.i
      }, {
        optionValue: 'j',
        optionText: optsItalyText.j,
        optionTip: optsItalyTips.j
      }]
    }, {
      group: true,
      label: 'celebrado em: OUTRO PAÍS',
      optionsOfGroup: [{
        optionValue: 'k',
        optionText: optsItalyText.k,
        optionTip: optsItalyTips.k
      }, {
        optionValue: 'l',
        optionText: optsItalyText.l,
        optionTip: optsItalyTips.l
      }]
    }];
    this.selectorCSS = selectorCSS;
    this.modeEntry = modeEntry;
  }
  _createClass(Form, [{
    key: "createForm",
    value: function () {
      var _createForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.createNameOfAdding();
              this.form = this.ct.createForm();
              _context.t0 = this.form;
              _context.next = 5;
              return this.firstPartForm();
            case 5:
              _context.t1 = _context.sent;
              _context.t0.appendChild.call(_context.t0, _context.t1);
              if (this.modeEntry === 'edit') {
                this.secondPartForm();
                this.tabindexOfSecondBox('disable');
              }
              this.formListerners();
              return _context.abrupt("return", this.form);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createForm() {
        return _createForm.apply(this, arguments);
      }
      return createForm;
    }()
  }, {
    key: "firstPartForm",
    value: function () {
      var _firstPartForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;
        var boxInfosModal, containerBox1, containerName, containerBirth, containerSexApplicant, labelInputName, containerBirthDate, labelBirthPlace, labelBirthDate, containerSex, containerApplicant, div1ContainerSex, div2ContainerSex, div1ContainerApplicant, div2ContainerApplicant, labelMaleRadio, labelFemaleRadio, labelYesApplicant, labelNoApplicant, doubtApplicat, doubtNoApplicat, optDefatult;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              boxInfosModal = this.ct.createDiv(['box-infos-modal']);
              containerBox1 = this.ct.createDiv(['container-box-1']);
              containerName = this.ct.createDiv(['container-nome']);
              containerBirth = this.ct.createDiv(['container-date-place-birth']);
              containerSexApplicant = this.ct.createDiv(['container-sex-applicant']);
              labelInputName = this.ct.createLabel('input-name');
              this.inptName = this.ct.createInputText(['inptValidate'], 'input-name');
              this.containerBirthPlace = this.ct.createDiv(['container-birth-place']);
              containerBirthDate = this.ct.createDiv(['container-birth-date']);
              labelBirthPlace = this.ct.createLabel('select-birth-place');
              labelBirthDate = this.ct.createLabel('input-birth-date');
              this.inptBirthDate = this.ct.createInputText([], 'input-birth-date');
              containerSex = this.ct.createDiv(['container-sex']);
              containerApplicant = this.ct.createDiv(['container-applicant']);
              div1ContainerSex = this.ct.createDiv([]);
              div2ContainerSex = this.ct.createDiv([]);
              div1ContainerApplicant = this.ct.createDiv([]);
              div2ContainerApplicant = this.ct.createDiv([]);
              this.inptManRadio = this.ct.createInputRadio('sex', 'maleRadio', 'man');
              labelMaleRadio = this.ct.createLabel('man');
              this.inptWomanRadio = this.ct.createInputRadio('sex', 'femaleRadio', 'woman');
              labelFemaleRadio = this.ct.createLabel('woman');
              this.inptYesApplicant = this.ct.createInputRadio('applicant', 'yes', 'applicantYesRadio');
              labelYesApplicant = this.ct.createLabel('applicantYesRadio');
              this.inptNoApplicant = this.ct.createInputRadio('applicant', 'no', 'applicantNoRadio');
              labelNoApplicant = this.ct.createLabel('applicantNoRadio');
              doubtApplicat = (0,_containerDoubt__WEBPACK_IMPORTED_MODULE_2__["default"])('Selecione esta opção para <b>quem tem interesse no reconhecimento da cidadania</b>, incluindo menores de idade', '', 'top');
              doubtNoApplicat = (0,_containerDoubt__WEBPACK_IMPORTED_MODULE_2__["default"])('Selecione esta opção para o italiano, falecidos ou no caso dos membros que <b>NÃO têm interesse no reconhecimento da cidadania</b>', '', 'top');
              boxInfosModal.appendChild(containerName);
              boxInfosModal.appendChild(containerBirth);
              boxInfosModal.appendChild(containerSexApplicant);
              containerName.appendChild(labelInputName);
              containerName.appendChild(this.inptName);
              containerBirth.appendChild(this.containerBirthPlace);
              containerBirth.appendChild(containerBirthDate);
              containerSexApplicant.appendChild(containerSex);
              containerSexApplicant.appendChild(containerApplicant);
              this.containerBirthPlace.appendChild(labelBirthPlace);
              containerBirthDate.appendChild(labelBirthDate);
              containerBirthDate.appendChild(this.inptBirthDate);
              containerSex.appendChild(div1ContainerSex);
              containerSex.appendChild(div2ContainerSex);
              div1ContainerSex.appendChild(this.inptManRadio);
              div1ContainerSex.appendChild(labelMaleRadio);
              div2ContainerSex.appendChild(this.inptWomanRadio);
              div2ContainerSex.appendChild(labelFemaleRadio);
              containerApplicant.appendChild(div1ContainerApplicant);
              containerApplicant.appendChild(div2ContainerApplicant);
              div1ContainerApplicant.appendChild(this.inptYesApplicant);
              div1ContainerApplicant.appendChild(labelYesApplicant);
              div2ContainerApplicant.appendChild(this.inptNoApplicant);
              div2ContainerApplicant.appendChild(labelNoApplicant);
              labelInputName.innerText = 'nome completo';
              labelBirthDate.innerText = 'data de nascimento';
              labelBirthPlace.innerText = 'país de nascimento';
              labelFemaleRadio.innerText = 'feminino';
              labelMaleRadio.innerText = 'masculino';
              labelYesApplicant.innerText = 'requerente';
              labelNoApplicant.innerText = 'não requerente';
              this.inptName.placeholder = 'Ex: Giuseppe Francesco Rossi';
              div1ContainerApplicant.appendChild(doubtApplicat);
              div2ContainerApplicant.appendChild(doubtNoApplicat);
              this.inptBirthDate.addEventListener('keypress', function (e) {
                var codeKey = e.key.charCodeAt();
                var date = _this.inptBirthDate.value;
                var lengthInput = date.length;
                if (!(codeKey >= 48 && codeKey <= 57 || codeKey === 66 || codeKey === 68 || codeKey === 65)) e.preventDefault();
                if (lengthInput >= 4) _this.regexInputBirhtDate(date);
                // this.regexInputBirhtDate(date);
              });

              this.inptBirthDate.placeholder = 'Ex: 1880 ou 10/04/1880';
              this.inptBirthDate.maxLength = '10';
              _context2.next = 67;
              return fetch('/public/assets/json/countries.json').then(function (promise) {
                return promise.json();
              }).then(function (data) {
                var keys = Object.keys(data);
                keys.forEach(function (key) {
                  var obj = {
                    optionValue: key,
                    optionText: data[key]
                  };
                  _this.locals.push(obj);
                });
              });
            case 67:
              this.selectBirthPlace = this.ct.createSelectInput(this.locals);
              this.selectBirthPlace.id = 'select-birth-place';
              optDefatult = this.selectBirthPlace.options[0];
              optDefatult.defaultSelected = 'true';
              optDefatult.disabled = 'true';
              this.containerBirthPlace.appendChild(this.selectBirthPlace);
              this.selectBirthPlace.addEventListener('change', function () {
                _this.selectBirthPlace.style.opacity = '1';
              });
              containerBox1.appendChild(boxInfosModal);
              containerBox1.appendChild(this.createBtnTypeAction('nextPartForm'));
              return _context2.abrupt("return", containerBox1);
            case 77:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function firstPartForm() {
        return _firstPartForm.apply(this, arguments);
      }
      return firstPartForm;
    }()
  }, {
    key: "regexInputBirhtDate",
    value: function regexInputBirhtDate(date) {
      var length = this.inptBirthDate.value.length;
      // if (length <= 4) return undefined;
      if (length === 4 && !this.inptBirthDate.value.includes('/')) {
        this.inptBirthDate.value = "".concat(date.slice(0, 2), "/").concat(date.slice(2, 4), "/").concat(date.slice(6));
        return;
      }
      if (length === 5 && this.inptBirthDate.value.includes('/')) {
        this.inptBirthDate.value = "".concat(date.slice(0, 2), "/").concat(date.slice(3, 5), "/").concat(date.slice(6));
      }
      // const regex = /([0-9]{2})([0-9]{2})([0-9]{1,4})/;
      // const newFormat = '$1/$2/$3';
      // return date.replace(regex, newFormat);
      // this.inptBirthDate.value = date.replace(regex, newFormat);
      // return undefined;
    }
  }, {
    key: "secondPartForm",
    value: function secondPartForm() {
      var _this2 = this;
      var boxInfosModal = this.ct.createDiv(['box-infos-modal']);
      var ctnrBox2 = this.ct.createDiv(['container-box-2']);
      var ctnrButtons = this.ct.createDiv(['container-btns-back-include']);
      var btnBack = this.createBtnTypeAction('backPartForm');
      var btnIncludeOrEdit;
      if (this.modeEntry === 'edit') {
        btnIncludeOrEdit = this.createBtnTypeAction('edit');
      } else {
        btnIncludeOrEdit = this.createBtnTypeAction('include');
      }
      this.ctnrBirthCertificate = this.ct.createDiv(['ctnr-birth-certificate']);
      var ctnrCenterLine = this.ct.createDiv(['ctnr-center-line']);
      this.ctnrMarriageCertificate = this.ct.createDiv(['ctnr-marriage-certificate']);
      var line = this.ct.createDiv(['center-line-box2']);
      var msgFiles = 'Inserir arquivo da certidão (opcional)';
      var tooltiptextBirth = (0,_containerDoubt__WEBPACK_IMPORTED_MODULE_2__["default"])('Selecione uma opção', 'tooltiptextBirth', 'right');
      var tooltiptextMarriage = (0,_containerDoubt__WEBPACK_IMPORTED_MODULE_2__["default"])('Selecione uma opção', 'tooltiptextMarriage', 'left');

      // Select informações do Nascimento
      this.lblSelectInfsBirthCertificate = this.ct.createLabel('infos-birth-certificate');
      this.lblSelectInfsBirthCertificate.classList.add('lbl-certificates', 'birth');

      // Input arquivo Nascimento
      this.inptFileBirthCertificate = this.ct.createInputFile(['file-input'], 'docs-birth-certificate');
      this.lblInptFileBirthCertificate = this.ct.createLabel('docs-birth-certificate');
      this.lblInptFileBirthCertificate.classList.add('lbl-file-input');
      this.lblInptFileBirthCertificate.innerHTML = '<p>clique para selecionar</br>ou</br>arraste os arquivos</p>';
      this.lblInptFileBirthCertificate.title = msgFiles;

      // Select informações do Casamento
      this.lblSelectInfsMarriageCertificate = this.ct.createLabel('infos-marriage-certificate');
      this.lblSelectInfsMarriageCertificate.classList.add('lbl-certificates', 'marriage');
      this.lblSelectInfsBirthCertificate.innerText = 'certidão nascimento';
      this.lblSelectInfsMarriageCertificate.innerText = 'certidão casamento';

      // Input arquivo Casamento
      this.inptFileMarriageCertificate = this.ct.createInputFile(['file-input'], 'docs-marriage-certificate');
      this.lblInptFileMarriageCertificate = this.ct.createLabel('docs-marriage-certificate');
      this.lblInptFileMarriageCertificate.classList.add('lbl-file-input');
      this.lblInptFileMarriageCertificate.innerHTML = '<p>clique para selecionar</br>ou</br>arraste os arquivos</p>';
      this.lblInptFileMarriageCertificate.title = msgFiles;
      this.ctnrBirthCertificate.appendChild(this.lblSelectInfsBirthCertificate);
      this.ctnrBirthCertificate.appendChild(tooltiptextBirth);
      this.ctnrBirthCertificate.appendChild(this.inptFileBirthCertificate);
      this.ctnrBirthCertificate.appendChild(this.lblInptFileBirthCertificate);
      this.ctnrMarriageCertificate.appendChild(this.lblSelectInfsMarriageCertificate);
      this.ctnrMarriageCertificate.appendChild(tooltiptextMarriage);
      this.ctnrMarriageCertificate.appendChild(this.inptFileMarriageCertificate);
      this.ctnrMarriageCertificate.appendChild(this.lblInptFileMarriageCertificate);
      ctnrCenterLine.appendChild(line);
      boxInfosModal.appendChild(this.ctnrBirthCertificate);
      boxInfosModal.appendChild(ctnrCenterLine);
      boxInfosModal.appendChild(this.ctnrMarriageCertificate);
      ctnrBox2.appendChild(boxInfosModal);
      ctnrButtons.appendChild(btnBack);
      ctnrButtons.appendChild(btnIncludeOrEdit);
      ctnrBox2.appendChild(ctnrButtons);
      this.inptFileBirthCertificate.addEventListener('change', function (e) {
        var files = e.target.files;
        var valid = _this2.validFiles(files);
        if (!valid) {
          window.alert('Arquivo inválido');
        } else {
          _this2.updateFiles(files, 'birth', true);
        }
      });
      this.inptFileMarriageCertificate.addEventListener('change', function (e) {
        var files = e.target.files;
        var valid = _this2.validFiles(files);
        if (!valid) {
          _this2.inptFileMarriageCertificate.value = '';
          window.alert('Arquivo inválido');
        } else {
          _this2.updateFiles(files, 'marriage', true);
        }
      });
      this.loadSelectInfosCertificates(this.selectBirthPlace.value);
      this.dropListeners();
      this.form.appendChild(ctnrBox2);
    }
  }, {
    key: "dropListeners",
    value: function dropListeners() {
      var _this3 = this;
      // LABEL BIRTH CERTIFICATE
      this.lblInptFileBirthCertificate.ondragenter = function (e) {
        return e.preventDefault();
      };
      this.lblInptFileBirthCertificate.ondragover = function (e) {
        e.preventDefault();
        _this3.lblInptFileBirthCertificate.style.backgroundColor = '#F2F2F2';
      };
      this.lblInptFileBirthCertificate.ondragleave = function (e) {
        e.preventDefault();
        _this3.lblInptFileBirthCertificate.style.backgroundColor = 'white';
      };
      this.lblInptFileBirthCertificate.addEventListener('drop', function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var valid = _this3.validFiles(files);
        if (!valid) {
          window.alert('Arquivo inválido');
        } else {
          _this3.dropFiles(files, 'birth', false);
        }
        _this3.lblInptFileBirthCertificate.style.backgroundColor = 'white';
      });

      // LABEL MARRIAGE CERTIFICATE
      this.lblInptFileMarriageCertificate.ondragenter = function (e) {
        return e.preventDefault();
      };
      this.lblInptFileMarriageCertificate.ondragover = function (e) {
        e.preventDefault();
        _this3.lblInptFileMarriageCertificate.style.backgroundColor = '#F2F2F2';
      };
      this.lblInptFileMarriageCertificate.ondragleave = function (e) {
        e.preventDefault();
        _this3.lblInptFileMarriageCertificate.style.backgroundColor = 'white';
      };
      this.lblInptFileMarriageCertificate.addEventListener('drop', function (e) {
        e.preventDefault();
        _this3.lblInptFileMarriageCertificate.style.backgroundColor = 'white';
        var files = e.dataTransfer.files;
        var valid = _this3.validFiles(files);
        if (!valid) {
          window.alert('Arquivo inválido');
        } else {
          _this3.dropFiles(files, 'marriage', false);
        }
      });
    }
  }, {
    key: "formListerners",
    value: function formListerners() {
      var _this4 = this;
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btnSubmitter = e.submitter;
        var classes = btnSubmitter.classList;
        if (!_this4.isValidFirstPartForm()) return;
        if (classes.contains('next')) {
          var localBirth = document.querySelector('#select-birth-place').value;
          localStorage.setItem('locBirth', localBirth);
          var prevLocalBirth = localStorage.getItem('prevLocBirth');
          var box2 = document.querySelector('.container-box-2');
          if (!box2) {
            _this4.secondPartForm();
          } else {
            if (!(localBirth === prevLocalBirth)) {
              _this4.loadSelectInfosCertificates(_this4.selectBirthPlace.value);
            }
          }
          _this4.tabindexOfFirstBox('disable');
          _this4.tabindexOfSecondBox('enable');
          window.blur();
          setTimeout(function () {
            _this4.translateBoxes('left');
          }, 15);
        }
        if (classes.contains('back')) {
          var loc = localStorage.getItem('locBirth');
          localStorage.setItem('prevLocBirth', loc);
          _this4.tabindexOfSecondBox('disable');
          _this4.tabindexOfFirstBox('enable');
          _this4.translateBoxes('right');
        }
        if (classes.contains('add')) {
          if (_this4.isValidSecondPartForm()) {
            var infos = {
              fullName: _this4.inptName.value.trim(),
              birthPlace: _this4.selectBirthPlace.value,
              birthPlaceComplete: _this4.selectBirthPlace.selectedOptions[0].label,
              birthDate: _this4.inptBirthDate.value,
              gender: _this4.inptManRadio.checked ? 'man' : 'woman',
              applicant: !!_this4.inptYesApplicant.checked,
              valueBirthCertificate: _this4.inptSelectInfBirthCertificate.value,
              textBirthCertificate: _this4.inptSelectInfBirthCertificate.selectedOptions[0].label,
              valueMarriageCertificate: _this4.inptSelectInfMarriageCertificate.value,
              textMarriageCertificate: _this4.inptSelectInfMarriageCertificate.selectedOptions[0].label,
              docsBirthCertificate: _this4.inptFileBirthCertificate.files,
              docsMarriageCertificate: _this4.inptFileMarriageCertificate.files
            };
            _this4.createMember(infos, _this4.selectorCSS, _this4.modeEntry);
          }
        }
        if (classes.contains('edit')) {
          if (!_this4.isValidFirstPartForm()) return;
          if (!_this4.isValidSecondPartForm()) return;
          var _infos = {
            fullName: _this4.inptName.value.trim(),
            birthPlace: _this4.selectBirthPlace.value,
            birthPlaceComplete: _this4.selectBirthPlace.selectedOptions[0].label,
            birthDate: _this4.inptBirthDate.value,
            gender: _this4.inptManRadio.checked ? 'man' : 'woman',
            applicant: !!_this4.inptYesApplicant.checked,
            valueBirthCertificate: _this4.inptSelectInfBirthCertificate.value,
            textBirthCertificate: _this4.inptSelectInfBirthCertificate.selectedOptions[0].label,
            valueMarriageCertificate: _this4.inptSelectInfMarriageCertificate.value,
            textMarriageCertificate: _this4.inptSelectInfMarriageCertificate.selectedOptions[0].label,
            docsBirthCertificate: _this4.inptFileBirthCertificate.files,
            docsMarriageCertificate: _this4.inptFileMarriageCertificate.files
          };
          _this4.editMember(_infos, _this4.selectorCSS, _this4.modeEntry);
        }
        btnSubmitter.blur();
      });
    }
  }, {
    key: "isValidFirstPartForm",
    value: function isValidFirstPartForm() {
      var _this5 = this;
      var valid = true;
      var valueIput = this.inptBirthDate.value;
      var date = new Date();
      var currentYear = date.getFullYear();
      var currentMonth = date.getMonth() + 1;
      var currentday = date.getDate();
      var inputs = document.querySelectorAll('.inptValidate');
      var invalids = document.querySelectorAll('.invalidItem');
      var year;
      var month;
      var day;
      if (valueIput.length <= 4) {
        year = Number(valueIput);
      } else {
        year = Number(valueIput.slice(6));
        month = Number(valueIput.slice(3, 5));
        day = Number(valueIput.slice(0, 2));
      }
      var invalidYear = year < 1700 || Number.isNaN(year) || String(year).length < 4 || year > currentYear;
      var invalidMonth = month > 12 || year >= currentYear && month > currentMonth || Number.isNaN(month);
      var invalidDay = day > 31 || day > currentday && month >= currentMonth && year >= currentYear;
      var emptyDate = this.inptBirthDate.value === '';
      var invalidDate = false;
      var monthAndDays = [{
        month: 1,
        maxDays: 31
      }, {
        month: 2,
        maxDays: 29
      }, {
        month: 3,
        maxDays: 31
      }, {
        month: 4,
        maxDays: 30
      }, {
        month: 5,
        maxDays: 31
      }, {
        month: 6,
        maxDays: 30
      }, {
        month: 7,
        maxDays: 31
      }, {
        month: 8,
        maxDays: 31
      }, {
        month: 9,
        maxDays: 30
      }, {
        month: 10,
        maxDays: 31
      }, {
        month: 11,
        maxDays: 30
      }, {
        month: 12,
        maxDays: 31
      }];
      monthAndDays.forEach(function (object) {
        if (object.month === month && object.maxDays < day) invalidDate = true;
      });
      if (invalids.length > 0) {
        invalids.forEach(function (el) {
          el.remove();
        });
      }
      inputs.forEach(function (element) {
        if (element.value === '' || element.value === 'pd') {
          var div = _this5.ct.createDiv(['invalidItem']);
          div.innerText = 'Campo obrigatório';
          element.insertAdjacentElement('afterend', div);
          valid = false;
          element.focus();
        }
      });
      if (this.selectBirthPlace.value === 'pd') {
        var div = this.ct.createDiv(['invalidItem']);
        div.innerText = 'Escolha uma opção';
        this.selectBirthPlace.insertAdjacentElement('afterend', div);
        valid = false;
        this.selectBirthPlace.focus();
      }
      if (emptyDate || invalidYear || invalidMonth || invalidDay || invalidDate) {
        var container = document.querySelector('.container-birth-date');
        var _div = this.ct.createDiv(['invalidItem']);
        if (invalidYear) _div.innerText = 'Ano inválido';
        if (invalidMonth) _div.innerText = 'Mês inválido';
        if (invalidDay) _div.innerText = 'Dia inválido';
        if (invalidDate) _div.innerText = 'Data inválida';
        container.appendChild(_div);
        valid = false;
        this.inptBirthDate.focus();
      }
      if (!this.inptManRadio.checked && !this.inptWomanRadio.checked) {
        var containeInptRadio = document.querySelector('.container-sex');
        var _div2 = this.ct.createDiv(['invalidItem']);
        _div2.innerText = 'Escolha uma opção';
        containeInptRadio.appendChild(_div2);
        valid = false;
        this.inptManRadio.focus();
      }
      if (!this.inptYesApplicant.checked && !this.inptNoApplicant.checked) {
        var containerApp = document.querySelector('.container-applicant');
        var _div3 = this.ct.createDiv(['invalidItem']);
        _div3.innerText = 'Escolha uma opção';
        containerApp.appendChild(_div3);
        valid = false;
        this.inptNoApplicant.focus();
      }
      return valid;
    }
  }, {
    key: "isValidSecondPartForm",
    value: function isValidSecondPartForm() {
      var valid = true;
      var inptBirthSelection = document.querySelector('#infos-birth-certificate');
      var inptMarriageSelection = document.querySelector('#infos-marriage-certificate');
      if (inptBirthSelection.value === 'pd') {
        var div = this.ct.createDiv(['invalidItem']);
        div.innerText = 'Escolha uma opção';
        inptBirthSelection.nextElementSibling.insertAdjacentElement('afterend', div);
        valid = false;
        inptBirthSelection.focus();
      }
      if (inptMarriageSelection.value === 'pd') {
        var _div4 = this.ct.createDiv(['invalidItem']);
        _div4.innerText = 'Escolha uma opção';
        inptMarriageSelection.nextElementSibling.insertAdjacentElement('afterend', _div4);
        valid = false;
        inptMarriageSelection.focus();
      }
      return valid;
    }
  }, {
    key: "tabindexOfSecondBox",
    value: function tabindexOfSecondBox(mode) {
      if (mode === 'disable') {
        this.btnBackPartForm.setAttribute('tabindex', '-1');
        this.btnBackPartForm.blur();
        this.btnAddPartForm.setAttribute('tabindex', '-1');
        this.btnAddPartForm.blur();
        this.inptSelectInfBirthCertificate.setAttribute('tabindex', '-1');
        this.inptSelectInfBirthCertificate.blur();
        this.inptSelectInfMarriageCertificate.setAttribute('tabindex', '-1');
        this.inptSelectInfMarriageCertificate.blur();
        return;
      }
      this.btnBackPartForm.setAttribute('tabindex', '');
      this.btnAddPartForm.setAttribute('tabindex', '');
      this.inptSelectInfBirthCertificate.setAttribute('tabindex', '1');
      this.inptSelectInfMarriageCertificate.setAttribute('tabindex', '2');
    }
  }, {
    key: "tabindexOfFirstBox",
    value: function tabindexOfFirstBox(mode) {
      if (mode === 'disable') {
        this.inptName.setAttribute('tabindex', '-1');
        this.inptName.blur();
        this.selectBirthPlace.setAttribute('tabindex', '-1');
        this.selectBirthPlace.blur();
        this.inptBirthDate.setAttribute('tabindex', '-1');
        this.inptBirthDate.blur();
        this.btnNextPartForm.setAttribute('tabindex', '-1');
        this.btnNextPartForm.blur();
        this.inptNoApplicant.setAttribute('tabindex', '-1');
        this.inptNoApplicant.blur();
        this.inptYesApplicant.setAttribute('tabindex', '-1');
        this.inptYesApplicant.blur();
        this.inptManRadio.setAttribute('tabindex', '-1');
        this.inptManRadio.blur();
        this.inptWomanRadio.setAttribute('tabindex', '-1');
        this.inptWomanRadio.blur();
        return;
      }
      this.inptName.setAttribute('tabindex', '');
      this.selectBirthPlace.setAttribute('tabindex', '');
      this.inptBirthDate.setAttribute('tabindex', '');
      this.btnNextPartForm.setAttribute('tabindex', '');
      this.inptNoApplicant.setAttribute('tabindex', '');
      this.inptYesApplicant.setAttribute('tabindex', '');
      this.inptManRadio.setAttribute('tabindex', '');
      this.inptWomanRadio.setAttribute('tabindex', '');
    }
  }, {
    key: "loadSelectInfosCertificates",
    value: function loadSelectInfosCertificates(localBirth) {
      var _this6 = this;
      var inptBirthExists = document.querySelector('#infos-birth-certificate');
      var inptMarriageExists = document.querySelector('#infos-marriage-certificate');
      if (!this.lblSelectInfsBirthCertificate) {
        this.lblSelectInfsBirthCertificate = document.querySelector('.lbl-certificates.birth');
        this.lblSelectInfsMarriageCertificate = document.querySelector('.lbl-certificates.marriage');
      }
      if (inptBirthExists) inptBirthExists.remove();
      if (inptMarriageExists) inptMarriageExists.remove();
      if (localBirth === 'br') {
        // eslint-disable-next-line max-len
        this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsBrazilBirthCertificate);
        // eslint-disable-next-line max-len
        this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsBrazilMarriageCertificate);
      } else if (localBirth === 'it') {
        // eslint-disable-next-line max-len
        this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsItalyBirthCertificate);
        // eslint-disable-next-line max-len
        this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsItalyMarriageCertificate);
      } else {
        this.optsOtherBirthCertificate = [{
          optionValue: 'pd',
          optionText: 'Selecione uma opção'
        }, {
          optionValue: 'a',
          setA: this.optsOtherText.a = this.selectBirthPlace.selectedOptions[0].label,
          optionText: this.optsOtherText.a,
          optionTip: this.optsOtherTips.a
        }, {
          optionValue: 'b',
          optionText: this.optsOtherText.b,
          optionTip: this.optsOtherTips.b
        }, {
          optionValue: 'c',
          optionText: this.optsOtherText.c,
          optionTip: this.optsOtherTips.c
        }, {
          optionValue: 'd',
          setD: this.optsOtherText.d = this.selectBirthPlace.selectedOptions[0].label,
          optionText: this.optsOtherText.d,
          optionTip: this.optsOtherTips.d
        }, {
          optionValue: 'e',
          optionText: this.optsOtherText.e,
          optionTip: this.optsOtherTips.e
        }, {
          optionValue: 'm',
          optionText: this.optsOtherText.m,
          optionTip: this.optsOtherTips.m
        }];
        this.optsOtherMarriageCertificate = [{
          optionValue: 'pd',
          optionText: 'Selecione uma opção'
        }, {
          optionValue: 'f',
          optionText: this.optsOtherText.f,
          optionTip: this.optsOtherTips.f
        }, {
          optionValue: 'm',
          optionText: this.optsOtherText.m,
          optionTip: this.optsOtherTips.m
        }, {
          group: true,
          label: "celebrado em: ".concat(this.selectBirthPlace.selectedOptions[0].label.toUpperCase()),
          optionsOfGroup: [{
            optionValue: 'a',
            optionText: this.optsOtherText.a,
            optionTip: this.optsOtherTips.a
          }, {
            optionValue: 'b',
            optionText: this.optsOtherText.b,
            optionTip: this.optsOtherTips.b
          }, {
            optionValue: 'c',
            optionText: this.optsOtherText.c,
            optionTip: this.optsOtherTips.c
          }, {
            optionValue: 'd',
            optionText: this.optsOtherText.d,
            optionTip: this.optsOtherTips.d
          }, {
            optionValue: 'e',
            optionText: this.optsOtherText.e,
            optionTip: this.optsOtherTips.e
          }]
        }, {
          group: true,
          label: 'celebrado em: BRASIL',
          optionsOfGroup: [{
            optionValue: 'g',
            optionText: this.optsOtherText.g,
            optionTip: this.optsOtherTips.g
          }, {
            optionValue: 'h',
            optionText: this.optsOtherText.h,
            optionTip: this.optsOtherTips.h
          }, {
            optionValue: 'i',
            optionText: this.optsOtherText.i,
            optionTip: this.optsOtherTips.i
          }, {
            optionValue: 'j',
            optionText: this.optsOtherText.j,
            optionTip: this.optsOtherTips.j
          }]
        }, {
          group: true,
          label: 'celebrado em: OUTRO PAÍS',
          optionsOfGroup: [{
            optionValue: 'k',
            optionText: this.optsOtherText.k,
            optionTip: this.optsOtherTips.k
          }, {
            optionValue: 'l',
            optionText: this.optsOtherText.l,
            optionTip: this.optsOtherTips.l
          }]
        }];
        // eslint-disable-next-line max-len
        this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsOtherBirthCertificate);
        // eslint-disable-next-line max-len
        this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsOtherMarriageCertificate);
      }
      this.inptSelectInfMarriageCertificate.id = 'infos-marriage-certificate';
      this.inptSelectInfBirthCertificate.id = 'infos-birth-certificate';
      this.lblSelectInfsBirthCertificate.insertAdjacentElement('afterend', this.inptSelectInfBirthCertificate);
      this.lblSelectInfsMarriageCertificate.insertAdjacentElement('afterend', this.inptSelectInfMarriageCertificate);
      var optDefatultBirth = this.inptSelectInfBirthCertificate.options[0];
      var optDefatultMarriage = this.inptSelectInfMarriageCertificate.options[0];
      optDefatultBirth.defaultSelected = 'true';
      optDefatultMarriage.defaultSelected = 'true';
      optDefatultBirth.disabled = 'true';
      optDefatultMarriage.disabled = 'true';
      this.inptSelectInfBirthCertificate.addEventListener('change', function () {
        _this6.inptSelectInfBirthCertificate.style.opacity = '1';
        _this6.loadTipesInformations(_this6.inptSelectInfBirthCertificate.value, 'tooltiptextBirth', localBirth);
      });
      this.inptSelectInfMarriageCertificate.addEventListener('change', function () {
        _this6.inptSelectInfMarriageCertificate.style.opacity = '1';
        _this6.loadTipesInformations(_this6.inptSelectInfMarriageCertificate.value, 'tooltiptextMarriage', localBirth);
      });
    }
  }, {
    key: "loadTipesInformations",
    value: function loadTipesInformations(optionSelected, idTooltip, localBirth) {
      var tooltip = document.querySelector("#".concat(idTooltip));
      if (localBirth === 'br') {
        if (idTooltip === 'tooltiptextBirth') {
          this.optsBrazilBirthCertificate.forEach(function (option) {
            if (option.group) {
              option.optionsOfGroup.forEach(function (optionGroup) {
                if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
              });
              return;
            }
            if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
          });
        } else {
          this.optsBrazilMarriageCertificate.forEach(function (option) {
            if (option.group) {
              option.optionsOfGroup.forEach(function (optionGroup) {
                if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
              });
            }
            if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
          });
        }
        return;
      }
      if (localBirth === 'it') {
        if (idTooltip === 'tooltiptextBirth') {
          this.optsItalyBirthCertificate.forEach(function (option) {
            if (option.group) {
              option.optionsOfGroup.forEach(function (optionGroup) {
                if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
              });
              return;
            }
            if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
          });
        } else {
          this.optsItalyMarriageCertificate.forEach(function (option) {
            if (option.group) {
              option.optionsOfGroup.forEach(function (optionGroup) {
                if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
              });
            }
            if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
          });
        }
        return;
      }
      if (idTooltip === 'tooltiptextBirth') {
        this.optsOtherBirthCertificate.forEach(function (option) {
          if (option.group) {
            option.optionsOfGroup.forEach(function (optionGroup) {
              if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
            });
            return;
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      } else {
        this.optsOtherMarriageCertificate.forEach(function (option) {
          if (option.group) {
            option.optionsOfGroup.forEach(function (optionGroup) {
              if (optionGroup.optionValue === optionSelected) tooltip.innerHTML = optionGroup.optionTip;
            });
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      }
    }
  }, {
    key: "createContainerDataFiles",
    value: function createContainerDataFiles(files, certificate) {
      var _this7 = this;
      var containter = this.ct.createDiv(['container-all-files', certificate]);
      var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#D92525" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
      var i = 1;
      Array.from(files).forEach(function (file) {
        var containerDelete = _this7.ct.createDiv(['container-btn-delete-file', "container-btn-delete-file-".concat(i), certificate]);
        var containerFile = _this7.ct.createDiv(['container-file', "container-file-".concat(i)]);
        var containerInfos = _this7.ct.createDiv(['container-infos-file']);
        var containerDivImgAndInfosFiles = _this7.ct.createDiv([]);
        var size = file.size;
        var name = file.name;
        var sizeConverted = Math.round(size / 1024) < 1000 ? "".concat(Math.round(size / 1024), " KB") : "".concat(Math.round(size / 1024 / 1024), " MB");
        var pSize = _this7.ct.paragraph(['info-file-size'], undefined, String(sizeConverted));
        var pName = _this7.ct.paragraph(['info-file-name'], undefined, name);
        var image = _this7.ct.createImgGenericTag();
        var type = file.type.split('/')[1];
        containerDelete.title = 'Excluir arquivo';
        image.src = "../../frontend/assets/img/".concat(type, ".svg");
        image.classList.add('img-file-upload');
        containerDelete.innerHTML = closeIcon;
        containerDivImgAndInfosFiles.appendChild(image);
        containerDivImgAndInfosFiles.appendChild(containerInfos);
        containerFile.appendChild(containerDivImgAndInfosFiles);
        containerFile.appendChild(containerDelete);
        containerInfos.appendChild(pName);
        containerInfos.appendChild(pSize);
        containter.appendChild(containerFile);
        containerDelete.addEventListener('click', function (e) {
          return _this7.removeFile(e);
        });
        i += 1;
      });
      return containter;
    }
  }, {
    key: "dropFiles",
    value: function dropFiles(files, certificate) {
      this.updateFiles(files, certificate, false);
    }
  }, {
    key: "validFiles",
    value: function validFiles(files) {
      for (var i = 0; i < files.length; i += 1) {
        var file = files[i];
        var image = file.type === 'image/jpeg' || file.type === 'image/png';
        var pdf = file.type === 'application/pdf';
        if (!image && !pdf) return false;
      }
      return true;
    }
  }, {
    key: "removeFile",
    value: function removeFile(e) {
      var fileIndex = Number(e.currentTarget.classList[1].slice(-1)) - 1;
      var certificate = e.currentTarget.classList[2];
      var dt = new DataTransfer();
      var input;
      var files;
      if (certificate === 'birth') {
        input = this.inptFileBirthCertificate;
        files = input.files;
      } else {
        input = this.inptFileMarriageCertificate;
        files = input.files;
      }
      for (var i = 0; i < files.length; i += 1) {
        var file = files[i];
        if (fileIndex !== i) {
          dt.items.add(file);
        }
      }
      input.files = dt.files;
      var containeFiles = document.querySelector(".container-all-files.".concat(certificate));
      containeFiles.remove();
      if (input.files.length > 0) {
        if (certificate === 'birth') {
          this.ctnrBirthCertificate.appendChild(this.createContainerDataFiles(input.files, certificate));
        } else {
          this.ctnrMarriageCertificate.appendChild(this.createContainerDataFiles(input.files, certificate));
        }
      }
    }
  }, {
    key: "updateFiles",
    value: function updateFiles(files, certificate, eventChange) {
      var newFileList = new DataTransfer();
      var containerExists = document.querySelector(".container-all-files.".concat(certificate));
      var oldfFleList;
      if (containerExists) containerExists.remove();
      if (certificate === 'birth') {
        oldfFleList = this.inptFileBirthCertificate.files;
      } else {
        oldfFleList = this.inptFileMarriageCertificate.files;
      }
      if (oldfFleList.length > 0 && !eventChange) {
        Array.from(oldfFleList).forEach(function (item) {
          newFileList.items.add(item);
        });
      }
      Array.from(files).forEach(function (item) {
        newFileList.items.add(item);
      });
      if (certificate === 'birth') {
        this.ctnrBirthCertificate.appendChild(this.createContainerDataFiles(newFileList.files, certificate));
        this.inptFileBirthCertificate.files = newFileList.files;
      } else {
        this.ctnrMarriageCertificate.appendChild(this.createContainerDataFiles(newFileList.files, certificate));
        this.inptFileMarriageCertificate.files = newFileList.files;
      }
    }
  }, {
    key: "createBtnTypeAction",
    value: function createBtnTypeAction(action) {
      var containerBtnAction = this.ct.createDiv(['container-btn-action']);
      if (action === 'nextPartForm') {
        var icon = this.ct.createIconTag(['fa-solid', 'fa-chevron-right', 'fa-2xl']);
        this.btnNextPartForm = this.ct.createButton();
        this.btnNextPartForm.classList.add('btn-action');
        this.btnNextPartForm.classList.add('next');
        this.btnNextPartForm.appendChild(icon);
        containerBtnAction.appendChild(this.btnNextPartForm);
        containerBtnAction.title = 'Próximas informações';
        return containerBtnAction;
      }
      if (action === 'backPartForm') {
        var _icon = this.ct.createIconTag(['fa-solid', 'fa-chevron-left', 'fa-2xl']);
        this.btnBackPartForm = this.ct.createButton();
        this.btnBackPartForm.classList.add('btn-action');
        this.btnBackPartForm.classList.add('back');
        this.btnBackPartForm.appendChild(_icon);
        containerBtnAction.appendChild(this.btnBackPartForm);
        containerBtnAction.title = 'Informações anteriores';
        return containerBtnAction;
      }
      var addText = this.ct.createSpan([]);
      this.btnAddPartForm = this.ct.createButton();
      this.btnAddPartForm.classList.add('btn-action');
      if (action === 'edit') {
        this.btnAddPartForm.classList.add('edit');
        addText.innerText = 'editar';
      } else {
        this.btnAddPartForm.classList.add('add');
        addText.innerText = 'adicionar';
      }
      this.btnAddPartForm.appendChild(addText);
      containerBtnAction.appendChild(this.btnAddPartForm);
      return containerBtnAction;
    }
  }, {
    key: "createNameOfAdding",
    value: function createNameOfAdding() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nameAdding;
      var nameInfoContainer = document.querySelector('.name-info-container');
      var nameSelected = this.ct.createDiv(['name-selected']);
      var line = this.ct.createDiv(['line-name-modal']);
      var span = this.ct.createSpan(['name-span']);
      nameInfoContainer.appendChild(nameSelected);
      nameInfoContainer.appendChild(line);
      if (this.modeEntry === 'edit') {
        span.innerText = name;
        nameSelected.innerText += 'Editar informações de ';
        nameSelected.appendChild(span);
        return nameSelected;
      }
      if (name === 'Dante Causa (Italiano)') {
        span.innerText = 'Dante Causa (Italiano)';
        nameSelected.innerText += 'Adicionar ';
      } else {
        span.innerText = name;
        nameSelected.innerText += 'Adicionar filho(a) de ';
      }
      nameSelected.appendChild(span);
      return nameSelected;
    }
  }, {
    key: "formValidateBox1",
    value: function formValidateBox1() {
      var _this8 = this;
      var valid = true;
      var inputs = document.querySelectorAll('.inptValidate');
      var invalids = document.querySelectorAll('.invalidItem');
      var year = Number(this.inptBirthDate.value.slice(0, -6));
      var month = Number(this.inptBirthDate.value.slice(-5, -3));
      var day = Number(this.inptBirthDate.value.slice(-2));
      var date = new Date();
      var currentYear = date.getFullYear();
      var currentMonth = date.getMonth() + 1;
      var currentday = date.getDate();
      var invalidYear = year > currentYear;
      var invalidMonth = year >= currentYear && month > currentMonth;
      var invalidDay = day > currentday && month >= currentMonth && year >= currentYear;
      var emptyDate = this.inptBirthDate.value === '';
      if (invalids.length > 0) {
        invalids.forEach(function (el) {
          el.remove();
        });
      }
      inputs.forEach(function (element) {
        if (element.value === '' || element.value === 'pd') {
          var div = _this8.ct.createDiv(['invalidItem']);
          div.innerText = 'Campo obrigatório';
          element.insertAdjacentElement('afterend', div);
          valid = false;
          element.focus();
        }
      });
      if (this.selectBirthPlace.value === 'pd') {
        var div = this.ct.createDiv(['invalidItem']);
        div.innerText = 'Escolha uma opção';
        this.selectBirthPlace.insertAdjacentElement('afterend', div);
        valid = false;
        this.selectBirthPlace.focus();
      }
      if (emptyDate || invalidYear || invalidMonth || invalidDay) {
        var container = document.querySelector('.container-birth-date');
        var _div5 = this.ct.createDiv(['invalidItem']);
        _div5.innerText = 'Data inválida';
        container.appendChild(_div5);
        valid = false;
        this.inptBirthDate.focus();
      }
      if (!this.inptManRadio.checked && !this.inptWomanRadio.checked) {
        var containeInptRadio = document.querySelector('.container-sex');
        var _div6 = this.ct.createDiv(['invalidItem']);
        _div6.innerText = 'Escolha uma opção';
        containeInptRadio.appendChild(_div6);
        valid = false;
        this.inptManRadio.focus();
      }
      if (!this.inptYesApplicant.checked && !this.inptNoApplicant.checked) {
        var containerApp = document.querySelector('.container-applicant');
        var _div7 = this.ct.createDiv(['invalidItem']);
        _div7.innerText = 'Escolha uma opção';
        containerApp.appendChild(_div7);
        valid = false;
        this.inptNoApplicant.focus();
      }
      return valid;
    }
  }, {
    key: "translateBoxes",
    value: function translateBoxes(way) {
      var box1 = document.querySelector('.container-box-1');
      var box2 = document.querySelector('.container-box-2');
      if (way === 'left') {
        if (box1.classList.contains('right')) {
          box1.classList.remove('rigth');
          box2.classList.remove('rigth');
        }
        box1.classList.add('left');
        box2.classList.add('left');
        return;
      }
      box1.classList.remove('left');
      box2.classList.remove('left');
    }
  }, {
    key: "createMember",
    value: function createMember(infos, selectorCSS, modeEntry) {
      var addMemberOnTree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"](infos, selectorCSS, modeEntry);
      addMemberOnTree.add();
    }
  }, {
    key: "editMember",
    value: function editMember(infos, selectorCSS) {
      var tree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"]({}, '', '');
      tree.editMember(infos, selectorCSS);
    }
  }]);
  return Form;
}();


/***/ }),

/***/ "./frontend/modules/Modal.js":
/*!***********************************!*\
  !*** ./frontend/modules/Modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
    this.body = document.querySelector('body');
    this.containerModal = document.querySelector('.container-modal');
    this.modal = document.querySelector('.modal');
    this.dialogModal = document.querySelector('.modal-dialog');
  }
  _createClass(Modal, [{
    key: "showModal",
    value: function showModal() {
      var _this = this;
      this.containerModal.style.display = 'block';
      this.body.style.overflow = 'hidden';
      setTimeout(function () {
        _this.dialogModal.style.padding = '2rem';
        _this.modal.style.opacity = '1';
        _this.dialogModal.style.height = '50rem';
      }, 10);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this2 = this;
      localStorage.clear();
      var form = document.querySelector('form');
      var nameContainer = document.querySelector('.name-info-container');
      var name = document.querySelector('.name-selected');
      var line = document.querySelector('.line-name-modal');
      var allInformations = document.querySelector('.box-infos-all-informations');
      this.modal.style.opacity = '0';
      this.dialogModal.style.opacity = '0';
      this.dialogModal.style.height = '0';
      setTimeout(function () {
        if (form) _this2.dialogModal.removeChild(form);
        if (allInformations) allInformations.remove();
        nameContainer.removeChild(name);
        nameContainer.removeChild(line);
        _this2.dialogModal.style.padding = '0';
        _this2.body.style.overflow = '';
        _this2.containerModal.style.display = 'none';
        _this2.dialogModal.style.opacity = '1';
        if (_this2.dialogModal.classList.contains('infos-member')) {
          _this2.dialogModal.classList.remove('infos-member');
        }
      }, 350);
    }
  }]);
  return Modal;
}();


/***/ }),

/***/ "./frontend/modules/Tree.js":
/*!**********************************!*\
  !*** ./frontend/modules/Tree.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _CreatorCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatorCard */ "./frontend/modules/CreatorCard.js");
/* harmony import */ var _CreatorTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatorTags */ "./frontend/modules/CreatorTags.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./frontend/modules/Modal.js");
/* harmony import */ var _selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorOfCardSelected */ "./frontend/modules/selectorOfCardSelected.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./frontend/modules/Form.js");
/* harmony import */ var _containerDoubt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containerDoubt */ "./frontend/modules/containerDoubt.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */






var Tree = /*#__PURE__*/function () {
  function Tree(_ref, selectorCSS, modeEntry) {
    var fullName = _ref.fullName,
      birthPlace = _ref.birthPlace,
      birthPlaceComplete = _ref.birthPlaceComplete,
      birthDate = _ref.birthDate,
      gender = _ref.gender,
      applicant = _ref.applicant,
      valueBirthCertificate = _ref.valueBirthCertificate,
      textBirthCertificate = _ref.textBirthCertificate,
      valueMarriageCertificate = _ref.valueMarriageCertificate,
      textMarriageCertificate = _ref.textMarriageCertificate,
      docsBirthCertificate = _ref.docsBirthCertificate,
      docsMarriageCertificate = _ref.docsMarriageCertificate;
    _classCallCheck(this, Tree);
    this.creatorCard = new _CreatorCard__WEBPACK_IMPORTED_MODULE_0__["default"]({
      fullName: fullName,
      birthPlace: birthPlace,
      birthPlaceComplete: birthPlaceComplete,
      birthDate: birthDate,
      gender: gender,
      applicant: applicant,
      valueBirthCertificate: valueBirthCertificate,
      textBirthCertificate: textBirthCertificate,
      valueMarriageCertificate: valueMarriageCertificate,
      textMarriageCertificate: textMarriageCertificate,
      docsBirthCertificate: docsBirthCertificate,
      docsMarriageCertificate: docsMarriageCertificate
    });
    this.card = this.creatorCard.create();
    this.tempShow = 1.7;
    this.ct = new _CreatorTags__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.fullName = fullName;
    this.birthPlace = birthPlace;
    this.birthPlaceComplete = birthPlaceComplete;
    this.birthDate = birthDate;
    this.gender = gender;
    this.applicant = applicant;
    this.valueBirthCertificate = valueBirthCertificate;
    this.valueMarriageCertificate = valueMarriageCertificate;
    this.textBirthCertificate = textBirthCertificate;
    this.textMarriageCertificate = textMarriageCertificate;
    this.docsBirthCertificate = docsBirthCertificate;
    this.docsMarriageCertificate = docsMarriageCertificate;
    this.modeAdd = '';
    this.selectorCSS = selectorCSS;
    this.modeEntry = modeEntry;
  }
  _createClass(Tree, [{
    key: "add",
    value: function add() {
      if (this.modeEntry === 'dante') {
        this.addRootEntry();
        return;
      }
      if (this.modeEntry === 'child') {
        this.addChildEntry(this.selectorCSS);
        return;
      }
      if (this.modeEntry === 'brother') {
        this.addBrotherEntry(this.selectorCSS);
        return;
      }
      this.editMember();
    }
  }, {
    key: "addRootEntry",
    value: function addRootEntry() {
      var _this = this;
      var rootContainerCard = document.querySelector('.container.card-container.add-root-infos');
      var entryGenRoot = document.querySelector('.entry-gen-root');
      var divNoChildAdd = this.ct.createDiv(['no-child-add', 'temp-show']);
      entryGenRoot.classList.add('no-child');
      rootContainerCard.remove();
      entryGenRoot.appendChild(this.card);
      entryGenRoot.appendChild(divNoChildAdd);
      divNoChildAdd.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.createFormListener(_this.card, 'child');
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      divNoChildAdd.title = 'Adicionar filho';
      this.modal.closeModal();
      this.card.addEventListener('click', function () {
        _this.showInfosOfMember(_this.card);
      });
      setTimeout(function () {
        divNoChildAdd.classList.remove('temp-show');
      }, this.tempShow * 1000);
    }
  }, {
    key: "getNameOfParent",
    value: function getNameOfParent(card, mode) {
      var name;
      var selector = String((0,_selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_3__["default"])(card));
      if (mode === 'child' || selector === '.root-gen > .entry-gen-root') {
        name = card.querySelector('.name').innerText;
        return name;
      }
      var listSelector = selector.split('');
      var lengthList = listSelector.length;
      if (lengthList === 17) {
        var cardParent = document.querySelector('.entry-gen-root').children[0];
        name = cardParent.querySelector('.name').innerText;
        return name;
      }
      var selectorParent = selector.slice(0, lengthList - 20);
      var parent = document.querySelector(selectorParent);
      name = parent.querySelector('.card-container').querySelector('.name').innerText;
      return name;
    }
  }, {
    key: "addChildEntry",
    value: function addChildEntry(selectorEntry) {
      var _this2 = this;
      var entry = document.querySelector(selectorEntry);
      var gen = entry.parentElement;
      var entryClassList = entry.classList;
      var genClassList = gen.classList;
      var noChildDiv = entry.children[entry.children.length - 1];
      var newNoChildDiv = this.ct.createDiv(['no-child-add', 'temp-show']);
      var newLastCardDiv = this.ct.createDiv(['last-card-person', 'temp-show']);
      var entryDiv = this.ct.createDiv(['entry-gen', 'entry-1', 'no-child']);
      var genDiv;
      var calcGen;
      if (genClassList.contains('root-gen')) {
        calcGen = '1';
        genDiv = this.ct.createDiv(['gen', "gen-".concat(calcGen)]);
      } else {
        calcGen = Number(gen.classList[1].slice(4)) + 1;
        genDiv = this.ct.createDiv(['gen', "gen-".concat(calcGen)]);
      }
      entryClassList.remove('no-child');
      noChildDiv.classList.add('hidden');
      entryDiv.appendChild(this.card);
      entryDiv.appendChild(newLastCardDiv);
      entryDiv.appendChild(newNoChildDiv);
      genDiv.appendChild(entryDiv);
      entry.appendChild(genDiv);
      this.card.addEventListener('click', function () {
        _this2.showInfosOfMember(_this2.card);
      });
      newNoChildDiv.addEventListener('click', function () {
        _this2.createFormListener(_this2.card, 'child');
      });
      newLastCardDiv.title = 'Adicionar irmão';
      newNoChildDiv.title = 'Adicionar filho';
      newLastCardDiv.addEventListener('click', function () {
        _this2.createFormListener(_this2.card, 'brother');
      });
      this.modal.closeModal();
      setTimeout(function () {
        newNoChildDiv.classList.remove('temp-show');
        newLastCardDiv.classList.remove('temp-show');
      }, this.tempShow * 1000);
    }
  }, {
    key: "addBrotherEntry",
    value: function addBrotherEntry(selectorEntry) {
      var _this3 = this;
      var entry = document.querySelector(selectorEntry);
      var gen = entry.parentElement;
      var totalEntries = gen.children.length;
      var entryRemoveLastCard = gen.children[totalEntries - 1];
      var divRemoveLastCard = entryRemoveLastCard.children[entryRemoveLastCard.children.length - 2];
      var newNoChildDiv = this.ct.createDiv(['no-child-add', 'temp-show']);
      var newLastCardDiv = this.ct.createDiv(['last-card-person', 'temp-show']);
      var entryDiv = this.ct.createDiv(['entry-gen', "entry-".concat(totalEntries + 1), 'no-child']);
      if (divRemoveLastCard.classList.contains('last-card-person')) {
        divRemoveLastCard.remove();
      } else {
        divRemoveLastCard = entryRemoveLastCard.children[entryRemoveLastCard.children.length - 3];
        divRemoveLastCard.remove();
      }
      entryDiv.appendChild(this.card);
      entryDiv.appendChild(newLastCardDiv);
      entryDiv.appendChild(newNoChildDiv);
      gen.appendChild(entryDiv);
      this.card.addEventListener('click', function () {
        _this3.showInfosOfMember(_this3.card);
      });
      newNoChildDiv.addEventListener('click', function () {
        _this3.createFormListener(_this3.card, 'child');
      });
      newNoChildDiv.title = 'Adicionar filho';
      newLastCardDiv.title = 'Adicionar irmão';
      newLastCardDiv.addEventListener('click', function () {
        _this3.createFormListener(_this3.card, 'brother');
      });
      this.modal.closeModal();
      setTimeout(function () {
        newNoChildDiv.classList.remove('temp-show');
        newLastCardDiv.classList.remove('temp-show');
      }, this.tempShow * 1000);
    }
  }, {
    key: "showInfosOfMember",
    value: function showInfosOfMember(card) {
      var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var modalDialog = document.querySelector('.modal-dialog');
      var name = card.querySelector('.name').innerText;
      var boxAllInformations = this.ct.createDiv(['box-infos-all-informations']);
      modalDialog.classList.add('infos-member');
      var infos = {
        localBirth: card.querySelector('.info-local-birth').innerText,
        dateBirth: card.querySelector('.birth-date').innerText,
        applicant: card.querySelector('.info-applicant').innerText,
        sex: card.querySelector('.info-gender').innerText,
        valueBirthCertificate: card.querySelector('.infos-birth-certificate').innerText,
        textBirthCertificate: card.querySelector('.text-infos-birth-certificate').innerText,
        fileBirthCertificate: card.querySelector('.inpt-docs-birth').files,
        valueMarriageCertificate: card.querySelector('.infos-marriage-certificate').innerText,
        textMarriageCertificate: card.querySelector('.text-infos-marriage-certificate').innerText,
        fileMarriageCertificate: card.querySelector('.inpt-docs-marriage').files,
        card: card
      };
      this.createNameOfPageInformation(name);
      this.infosOfMember(boxAllInformations, infos);
      this.infosOfBirthCertificate(boxAllInformations, infos);
      this.infosOfMarriageCertificate(boxAllInformations, infos);
      this.btnsEditAndDelete(boxAllInformations, card);
      modalDialog.appendChild(boxAllInformations);
      modal.showModal();
      var nameSelected = document.querySelector('.name-selected');
      nameSelected.classList.add('infos-member');
    }
  }, {
    key: "calcAge",
    value: function calcAge(dateBirth) {
      var date = new Date();
      var currentYear = date.getFullYear();
      var currentMonth = date.getMonth() + 1;
      var currentday = date.getDate();
      var infosDate = dateBirth.split('/');
      if (dateBirth.length === 4) {
        var calcAge = currentYear - Number(dateBirth);
        if (calcAge === 1) return "1 ano (completo at\xE9 o fim de ".concat(currentYear, ")");
        if (calcAge === 0) return "0 ano (1 ano completo at\xE9 o fim de ".concat(currentYear + 1, ")");
        return "".concat(calcAge, " anos (completos at\xE9 o fim de ").concat(currentYear, ")");
      }
      var birthYear = Number(infosDate[2]);
      var birthMonth = Number(infosDate[1]);
      var birthDay = Number(infosDate[0]);
      var completeBirthday = currentday >= birthDay;
      var yearCalc;
      var monthCalc;
      if (currentMonth === birthMonth) {
        if (completeBirthday) {
          yearCalc = currentYear - birthYear;
          return "".concat(yearCalc > 1 ? "".concat(yearCalc, " anos e 0 m\xEAs") : "".concat(yearCalc, " ano e 0 m\xEAs"));
        }
        yearCalc = currentYear - birthYear - 1;
        return "".concat(yearCalc > 1 ? "".concat(yearCalc, " anos e 11 meses") : "".concat(yearCalc, " ano e 11 meses"));
      }
      if (completeBirthday) {
        monthCalc = 12 - (birthMonth - currentMonth);
      } else {
        monthCalc = 12 - (birthMonth - currentMonth) - 1;
      }
      if (currentMonth < birthMonth) {
        yearCalc = currentYear - birthYear - 1;
        if (yearCalc > 1) {
          return "".concat(monthCalc > 1 ? "".concat(yearCalc, " anos e ").concat(monthCalc, " meses") : "".concat(yearCalc, " anos e ").concat(monthCalc, " m\xEAs"));
        }
        return "".concat(monthCalc > 1 ? "".concat(yearCalc, " ano e ").concat(monthCalc, " meses") : "".concat(yearCalc, " ano e ").concat(monthCalc, " m\xEAs"));
      }
      yearCalc = currentYear - birthYear;
      if (yearCalc > 1) {
        return "".concat(monthCalc > 1 ? "".concat(yearCalc, " anos e ").concat(monthCalc, " meses") : "".concat(yearCalc, " anos e ").concat(monthCalc, " m\xEAs"));
      }
      return "".concat(monthCalc > 1 ? "".concat(yearCalc, " ano e ").concat(monthCalc, " meses") : "".concat(yearCalc, " ano e ").concat(monthCalc, " m\xEAs"));
    }
  }, {
    key: "degreeVerifier",
    value: function degreeVerifier(card, sex) {
      var degreePrefix = {
        1: 'Filh',
        2: 'Net',
        3: 'Bisnet',
        4: 'Trinet',
        5: 'Tetranet',
        6: 'Pentanet',
        7: 'Hexanet',
        8: 'Geptanet',
        9: 'Octanet',
        10: 'Eneanet',
        11: 'Decanet',
        12: 'Hendecanet',
        13: 'Dodecanet',
        14: 'Tridecanet',
        15: 'Retradecanet',
        16: 'Pentadecanet',
        17: 'Hexadecanet',
        18: 'Heptadecanet',
        19: 'Octadecanet',
        20: 'Eneadecanet',
        21: 'Icosanet'
      };
      var gen = card.parentElement.parentElement.classList[1];
      var degree = Number(gen.split('-')[1]);
      if (Number.isNaN(degree)) return 'Dante Causa';
      if (sex === 'man') return "".concat(degreePrefix[degree], "o");
      return "".concat(degreePrefix[degree], "a");
    }
  }, {
    key: "infosOfMember",
    value: function infosOfMember(boxAllInformations, _ref3) {
      var localBirth = _ref3.localBirth,
        dateBirth = _ref3.dateBirth,
        applicant = _ref3.applicant,
        sex = _ref3.sex,
        card = _ref3.card;
      var boxInfos = this.ct.createDiv(['box-infos-modal', 'informations']);
      var ctnrFirst = this.ct.createDiv(['container-infos-member']);
      var ctnrSecond = this.ct.createDiv(['container-infos-member']);
      var localBirthCtnr = this.ct.createDiv([]);
      var dateBirthCtnr = this.ct.createDiv([]);
      var ageCtnr = this.ct.createDiv([]);
      var applicantCtnr = this.ct.createDiv([]);
      var sexCtnr = this.ct.createDiv([]);
      var degreeOfRelationCtnr = this.ct.createDiv([]);
      var age = this.calcAge(dateBirth);
      var degreeOfRelation = this.degreeVerifier(card, sex);
      var toolDegree = (0,_containerDoubt__WEBPACK_IMPORTED_MODULE_5__["default"])('Grau de parentesco do membro em relação ao Dante Causa', undefined, 'top');
      localBirthCtnr.innerHTML = "Local de nascimento: <b>".concat(localBirth, "</b>");
      dateBirthCtnr.innerHTML = "Data de nascimento: <b>".concat(dateBirth, "</b>");
      ageCtnr.innerHTML = "Idade: <b>".concat(age, "</b>");
      applicantCtnr.innerHTML = "Requerente: <b>".concat(applicant === 'true' ? '<b>Sim</b>' : '<b>Não</b>');
      sexCtnr.innerHTML = "Sexo: <b>".concat(sex === 'man' ? '<b>Masculino</b>' : '<b>Feminino</b>');
      degreeOfRelationCtnr.innerHTML = "Grau de parentesco: <b>".concat(degreeOfRelation, "</b>");
      degreeOfRelationCtnr.appendChild(toolDegree);
      ctnrFirst.appendChild(localBirthCtnr);
      ctnrFirst.appendChild(ageCtnr);
      ctnrFirst.appendChild(sexCtnr);
      ctnrSecond.appendChild(dateBirthCtnr);
      ctnrSecond.appendChild(applicantCtnr);
      ctnrSecond.appendChild(degreeOfRelationCtnr);
      boxInfos.appendChild(ctnrFirst);
      boxInfos.appendChild(ctnrSecond);
      boxAllInformations.appendChild(boxInfos);
    }
  }, {
    key: "infosOfBirthCertificate",
    value: function infosOfBirthCertificate(boxAllInformations, _ref4) {
      var textBirthCertificate = _ref4.textBirthCertificate,
        fileBirthCertificate = _ref4.fileBirthCertificate;
      var box = this.createContainerInfosCertificate('birth', fileBirthCertificate, textBirthCertificate);
      boxAllInformations.appendChild(box);
    }
  }, {
    key: "infosOfMarriageCertificate",
    value: function infosOfMarriageCertificate(boxAllInformations, _ref5) {
      var textMarriageCertificate = _ref5.textMarriageCertificate,
        fileMarriageCertificate = _ref5.fileMarriageCertificate;
      var box = this.createContainerInfosCertificate('marriage', fileMarriageCertificate, textMarriageCertificate);
      boxAllInformations.appendChild(box);
    }
  }, {
    key: "createContainerInfosCertificate",
    value: function createContainerInfosCertificate(certificateType, files, optionText) {
      var box = this.ct.createDiv(['box-infos-modal', "".concat(certificateType, "-certificate-information")]);
      var firstBox = this.ct.createDiv(['first-box']);
      var secondBox = this.ct.createDiv(['second-box']);
      var thirdBox = this.ct.createDiv(['third-box']);
      var title = this.ct.createSpan(['title']);
      var line = this.ct.createSpan(['line']);
      var infoText = this.ct.createDiv(['info-text']);
      if (certificateType === 'birth') {
        title.innerText = 'certidão de nascimento';
      } else {
        title.innerText = 'certidão de casamento';
      }
      infoText.innerText = optionText;
      box.appendChild(firstBox);
      box.appendChild(secondBox);
      box.appendChild(thirdBox);
      firstBox.appendChild(title);
      firstBox.appendChild(infoText);
      thirdBox.appendChild(this.showInputFiles(files));
      secondBox.appendChild(line);
      return box;
    }
  }, {
    key: "btnsEditAndDelete",
    value: function btnsEditAndDelete(boxAllInformations, card) {
      var _this4 = this;
      var btnEdit = this.ct.createButton();
      var btnDelete = this.ct.createButton();
      var containerBtns = this.ct.createDiv(['ctnr-btns-edit-delete']);
      btnEdit.innerText = 'editar';
      btnEdit.classList.add('btns-edit-delete', 'btn-edit');
      btnDelete.innerText = 'deletar';
      btnDelete.classList.add('btns-edit-delete', 'btn-delete');
      containerBtns.appendChild(btnEdit);
      containerBtns.appendChild(btnDelete);
      boxAllInformations.appendChild(containerBtns);
      var selectorCSS = (0,_selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_3__["default"])(card);
      btnEdit.addEventListener('click', function () {
        var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
        modal.closeModal();
        setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var modalDialog, nameParent, form, htmlForm;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                modalDialog = document.querySelector('.modal-dialog');
                nameParent = _this4.getNameOfParent(card, 'child');
                _context2.next = 4;
                return new _Form__WEBPACK_IMPORTED_MODULE_4__["default"](nameParent, selectorCSS, 'edit');
              case 4:
                form = _context2.sent;
                _context2.next = 7;
                return form.createForm();
              case 7:
                htmlForm = _context2.sent;
                modalDialog.appendChild(htmlForm);
                _this4.loadEditInfosOnForm(card, form);
                form.tabindexOfSecondBox('disable');
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })), 40);
        setTimeout(function () {
          modal.showModal();
        }, 351);
      });
      btnDelete.addEventListener('click', function () {
        var confirm = window.confirm('Deseja mesmo deletar?');
        if (!confirm) return;
        _this4.deleteMember(selectorCSS);
      });
    }
  }, {
    key: "loadEditInfosOnForm",
    value: function loadEditInfosOnForm(card, form) {
      var localBirthAcronym = card.querySelector('.acronym-birth-certificate').innerText;
      form.inptName.value = card.querySelector('.name').innerText;
      form.selectBirthPlace.value = localBirthAcronym;
      form.selectBirthPlace.style.opacity = '1';
      form.inptBirthDate.value = card.querySelector('.birth-date').innerText;
      if (card.querySelector('.info-gender').innerText === 'man') {
        form.inptManRadio.checked = true;
      } else {
        form.inptWomanRadio.checked = true;
      }
      if (card.querySelector('.info-applicant').innerText === 'true') {
        form.inptYesApplicant.checked = true;
      } else {
        form.inptNoApplicant.checked = true;
      }
      var filesBirth = card.querySelector('.inpt-docs-birth').files;
      form.inptFileBirthCertificate.files = filesBirth;
      var filesMarriage = card.querySelector('.inpt-docs-marriage').files;
      form.inptFileMarriageCertificate.files = filesMarriage;
      form.ctnrBirthCertificate.appendChild(form.createContainerDataFiles(filesBirth, 'birth'));
      form.ctnrMarriageCertificate.appendChild(form.createContainerDataFiles(filesMarriage, 'marriage'));
      form.loadSelectInfosCertificates(localBirthAcronym);
      form.inptSelectInfBirthCertificate.value = card.querySelector('.infos-birth-certificate').innerText;
      form.inptSelectInfMarriageCertificate.value = card.querySelector('.infos-marriage-certificate').innerText;
      form.inptSelectInfBirthCertificate.style.opacity = '1';
      form.inptSelectInfMarriageCertificate.style.opacity = '1';
      localStorage.setItem('prevLocBirth', localBirthAcronym);
    }
  }, {
    key: "createNameOfPageInformation",
    value: function createNameOfPageInformation(name) {
      var nameInfoContainer = document.querySelector('.name-info-container');
      var nameSelected = this.ct.createDiv(['name-selected']);
      var line = this.ct.createDiv(['line-name-modal']);
      var span = this.ct.createSpan(['name-span']);
      nameInfoContainer.appendChild(nameSelected);
      nameInfoContainer.appendChild(line);
      span.innerText = name;
      nameSelected.innerText = 'Informações de ';
      nameSelected.appendChild(span);
      return nameSelected;
    }
  }, {
    key: "showInputFiles",
    value: function showInputFiles(files) {
      var _this5 = this;
      if (files.length === 0) {
        var containerNoFiles = this.ct.createDiv(['no-files-container']);
        var img = this.ct.createImgGenericTag();
        var text = this.ct.createSpan([]);
        text.innerHTML = 'Cópia não adicionada';
        img.src = '../../frontend/assets/img/folder.svg';
        containerNoFiles.appendChild(text);
        containerNoFiles.appendChild(img);
        return containerNoFiles;
      }
      var containter = this.ct.createDiv(['container-show-all-files']);
      Array.from(files).forEach(function (file) {
        var containerFile = _this5.ct.createDiv(['container-file']);
        var containerInfos = _this5.ct.createDiv(['container-infos-file']);
        var containerDivImgAndInfosFiles = _this5.ct.createDiv([]);
        var size = file.size;
        var name = file.name;
        var sizeConverted = Math.round(size / 1024) < 1000 ? "".concat(Math.round(size / 1024), " KB") : "".concat(Math.round(size / 1024 / 1024), " MB");
        var pSize = _this5.ct.paragraph(['info-file-size'], undefined, String(sizeConverted));
        var pName = _this5.ct.paragraph(['info-file-name'], undefined, name);
        var image = _this5.ct.createImgGenericTag();
        var type = file.type.split('/')[1];
        image.src = "../../frontend/assets/img/".concat(type, ".svg");
        image.classList.add('img-file-upload');
        containerDivImgAndInfosFiles.appendChild(image);
        containerDivImgAndInfosFiles.appendChild(containerInfos);
        containerFile.appendChild(containerDivImgAndInfosFiles);
        containerInfos.appendChild(pName);
        containerInfos.appendChild(pSize);
        containter.appendChild(containerFile);
      });
      return containter;
    }
  }, {
    key: "editMember",
    value: function editMember(infos, selectorCSS) {
      var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var card = document.querySelector(selectorCSS);
      var applicant = infos.applicant;
      var birthDate = infos.birthDate;
      var birthPlace = infos.birthPlace;
      var birthPlaceComplete = infos.birthPlaceComplete;
      var docsBirthCertificate = infos.docsBirthCertificate;
      var docsMarriageCertificate = infos.docsMarriageCertificate;
      var fullName = infos.fullName;
      var gender = infos.gender;
      var textBirthCertificate = infos.textBirthCertificate;
      var textMarriageCertificate = infos.textMarriageCertificate;
      var valueBirthCertificate = infos.valueBirthCertificate;
      var valueMarriageCertificate = infos.valueMarriageCertificate;
      var imgAvatar = card.querySelector('.img');
      var name = card.querySelector('.name');
      var acronymBirthCertificate = card.querySelector('.acronym-birth-certificate');
      var flag = card.querySelector('.flag');
      var birthDateHtml = card.querySelector('.birth-date');
      var cardEndLine = card.querySelector('.card-end-line');
      var inptDocsBirth = card.querySelector('.inpt-docs-birth');
      var inptDocsMarriage = card.querySelector('.inpt-docs-marriage');
      var infosBirthCertificate = card.querySelector('.infos-birth-certificate');
      var textInfosBirthCertificate = card.querySelector('.text-infos-birth-certificate');
      var infosMarriageCertificate = card.querySelector('.infos-marriage-certificate');
      var textInfosMarriageCertificate = card.querySelector('.text-infos-marriage-certificate');
      var infoGender = card.querySelector('.info-gender');
      var infoApplicant = card.querySelector('.info-applicant');
      var infoLocalBirth = card.querySelector('.info-local-birth');
      var year;
      var ageToIcon;
      if (birthDate.length === 4) year = Number(birthDate);
      year = Number(birthDate.slice(-4));
      var date = new Date();
      var currentYear = date.getFullYear();
      if (currentYear - year >= 65) {
        ageToIcon = '-old';
      } else if (currentYear - year < 18) {
        ageToIcon = '-minor';
      } else {
        ageToIcon = '';
      }
      if (applicant) {
        imgAvatar.src = "../../frontend/assets/img/".concat(gender).concat(ageToIcon, ".svg");
        cardEndLine.classList = '';
        cardEndLine.classList.add('card-end-line', gender);
      } else {
        imgAvatar.src = "../../frontend/assets/img/".concat(gender).concat(ageToIcon, "-generic.svg");
        cardEndLine.classList = '';
        cardEndLine.classList.add('card-end-line', 'generic-person');
      }
      name.innerText = fullName;
      acronymBirthCertificate.innerText = birthPlace;
      flag.src = "https://flagcdn.com/".concat(birthPlace, ".svg");
      birthDateHtml.innerText = birthDate;
      inptDocsBirth.value = '';
      inptDocsMarriage.value = '';
      inptDocsBirth.files = docsBirthCertificate;
      inptDocsMarriage.files = docsMarriageCertificate;
      infosBirthCertificate.innerText = valueBirthCertificate;
      textInfosBirthCertificate.innerText = textBirthCertificate;
      infosMarriageCertificate.innerText = valueMarriageCertificate;
      textInfosMarriageCertificate.innerHTML = textMarriageCertificate;
      infoGender.innerText = gender;
      infoApplicant.innerText = applicant;
      infoLocalBirth.innerText = birthPlaceComplete;
      modal.closeModal();
    }
  }, {
    key: "deleteMember",
    value: function deleteMember(selectorEntry) {
      var _this6 = this;
      var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var modalDialog = document.querySelector('.modal-dialog');
      if (selectorEntry === '.root-gen > .entry-gen-root') {
        var entryGenRoot = document.querySelector('.root-gen > .entry-gen-root');
        var noChildDiv = entryGenRoot.querySelector('.no-child-add');
        noChildDiv.remove();
        entryGenRoot.children[0].remove();
        if (!entryGenRoot.classList.contains('no-child')) entryGenRoot.children[0].remove();
        var newCard = this.ct.createDiv(['container', 'card-container', 'add-root-infos']);
        newCard.title = 'Adicionar Dante Causa';
        newCard.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var form;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return new _Form__WEBPACK_IMPORTED_MODULE_4__["default"]('Dante Causa (Italiano)', '.root-gen > .entry-gen-root', 'dante').createForm();
              case 2:
                form = _context3.sent;
                modalDialog.appendChild(form);
                modal.showModal();
              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })));
        newCard.innerHTML += "\n      <div class=\"container-root-icon\">\n        <img class=\"root-icon\" src=\"../frontend/assets/img/add-icon.svg\" alt=\"\xCDcone adicionar\">\n      </div>\n      </div>\n      ";
        entryGenRoot.classList = '';
        entryGenRoot.classList.add('entry-gen-root');
        entryGenRoot.appendChild(newCard);
        modal.closeModal();
        return;
      }
      var entryDelet = document.querySelector(selectorEntry);
      var divLastCardOrAddChild = entryDelet.children[1];
      var genParentEntryDelet = entryDelet.parentElement;
      var totalEntriesGen = genParentEntryDelet.children.length;
      if (totalEntriesGen === 1) {
        var entryParent = entryDelet.parentElement.parentElement;
        var divNoChildParent = entryParent.children[entryParent.children.length - 2];
        divNoChildParent.classList.remove('hidden');
        entryParent.classList.add('no-child');
        entryDelet.parentElement.remove();
        this.modal.closeModal();
        return;
      }
      if (divLastCardOrAddChild.classList.contains('last-card-person')) {
        var newLastEntry = genParentEntryDelet.children[totalEntriesGen - 2];
        var divLastCard = this.ct.createDiv(['last-card-person']);
        var card = newLastEntry.children[0];
        card.insertAdjacentElement('afterend', divLastCard);
        divLastCard.addEventListener('click', function () {
          _this6.createFormListener(card, 'brother');
        });
        entryDelet.remove();
      } else {
        entryDelet.remove();
        for (var i = 0; i <= totalEntriesGen - 2; i += 1) {
          var children = genParentEntryDelet.children[i];
          if (children.classList.contains('no-child')) {
            children.classList = '';
            children.classList.add('entry-gen');
            children.classList.add("entry-".concat(i + 1));
            children.classList.add('no-child');
          } else {
            children.classList = '';
            children.classList.add('entry-gen');
            children.classList.add("entry-".concat(i + 1));
          }
        }
      }
      modal.closeModal();
    }
  }, {
    key: "createFormListener",
    value: function () {
      var _createFormListener = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(card, mode) {
        var modal, selectorCSS, nameParent, form, modalDialog;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]();
              selectorCSS = (0,_selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_3__["default"])(card);
              nameParent = this.getNameOfParent(card, mode);
              _context4.next = 5;
              return new _Form__WEBPACK_IMPORTED_MODULE_4__["default"](nameParent, selectorCSS, mode).createForm();
            case 5:
              form = _context4.sent;
              modalDialog = document.querySelector('.modal-dialog');
              modalDialog.appendChild(form);
              modal.showModal();
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createFormListener(_x, _x2) {
        return _createFormListener.apply(this, arguments);
      }
      return createFormListener;
    }()
  }]);
  return Tree;
}();


/***/ }),

/***/ "./frontend/modules/containerDoubt.js":
/*!********************************************!*\
  !*** ./frontend/modules/containerDoubt.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ containerDoubt)
/* harmony export */ });
function containerDoubt(answer, idTooltiptext, direction) {
  var div = document.createElement('div');
  div.classList.add('tooltip');
  var span = document.createElement('span');
  span.classList.add('tooltiptext');
  var img = document.createElement('img');
  img.setAttribute('src', '../frontend/assets/img/circle-question.svg');
  img.setAttribute('alt', 'ícone ponto de interrogação');
  img.classList.add('img-doubt');
  span.innerHTML = answer;
  span.classList.add("tooltip-".concat(direction));
  if (idTooltiptext) span.id = idTooltiptext;
  span.appendChild(img);
  div.appendChild(img);
  div.appendChild(span);
  return div;
}

/***/ }),

/***/ "./frontend/modules/selectorOfCardSelected.js":
/*!****************************************************!*\
  !*** ./frontend/modules/selectorOfCardSelected.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectorOfCardSelected)
/* harmony export */ });
function selectorOfCardSelected(cardElement) {
  try {
    var gen = cardElement.parentElement.parentElement.classList[1];
    if (gen === 'root') {
      return '.root-gen > .entry-gen-root';
    }
    var genDegree = Number(gen.slice(4));
    var entry = cardElement.parentElement;
    var geracao = entry.parentElement;
    var classEntry = entry.classList[1];
    var classGeracao = geracao.classList[1];
    var selectorGen = '';
    for (var i = genDegree; i >= 1; i -= 1) {
      selectorGen = "> .".concat(classGeracao, " > .").concat(classEntry, " ").concat(selectorGen);
      entry = geracao.parentElement;
      geracao = entry.parentElement;
      classEntry = entry.classList[1];
      classGeracao = geracao.classList[1];
    }
    selectorGen = selectorGen.trim().slice(2);
    return selectorGen;
  } catch (e) {
    return '.root-gen > .entry-gen-root';
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/card.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/card.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-container {\r\n  position: relative;\r\n  background-color: var(--color-background-card);\r\n  width: 10em;\r\n  height: 16em;\r\n  border-radius: var(--border-radius-card);\r\n  box-shadow: var(--box-shadow);\r\n  transition: all var(--transition-background-color) ease-out;\r\n  cursor: pointer;\r\n}\r\n.card-img {\r\n  width: 100%;\r\n  height: 8em;\r\n  display: flex;\r\n}\r\n.img {\r\n  justify-content: center;\r\n  width: 6.5em;\r\n  margin: 1.5em auto auto auto;\r\n}\r\n.card-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 5em;\r\n  padding: .7em;\r\n}\r\n.card-name .name {\r\n  text-align: center;\r\n  font-size: 1.2em;\r\n  font-weight: 600;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  overflow: hidden;\r\n  -webkit-box-orient: vertical;\r\n}\r\n.card-flag-birth-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 2em;\r\n}\r\n.birth-date {\r\n  font-size: 1em;\r\n}\r\n.container-flag {\r\n  display: flex;\r\n  width: 1.3em;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: .7em;\r\n}\r\n.container-flag .flag {\r\n  width: 1.5em;\r\n}\r\n.container-card-end-line {\r\n  position: relative;\r\n  height: 1em;\r\n  border-radius: 0 0 var(--border-radius-card) var(--border-radius-card);\r\n  overflow: hidden;\r\n}\r\n.card-end-line {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: .55em;\r\n  width: 100%;\r\n}\r\n.card-end-line.generic-person {\r\n  background-color: var(--color-generic-person);\r\n}\r\n.card-end-line.man {\r\n  background-color: var(--color-man);\r\n}\r\n.card-end-line.woman {\r\n  background-color: var(--color-woman);\r\n}\r\n.card-container:hover {\r\n  background-color: var(--color-background-hover);\r\n}\r\n.card-container.add-root-infos::after {\r\n  content: none;\r\n}\r\n.container-root-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.root-icon {\r\n  padding: 1em;\r\n  width: 6em;\r\n  height: 6em;\r\n  border-radius: 100%;\r\n  background-color: var(--color-background-btn-add);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/card.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,8CAA8C;EAC9C,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,6BAA6B;EAC7B,2DAA2D;EAC3D,eAAe;AACjB;AACA;EACE,WAAW;EACX,WAAW;EACX,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;EAChB,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,sEAAsE;EACtE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,aAAa;EACb,WAAW;AACb;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,kCAAkC;AACpC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,+CAA+C;AACjD;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,iDAAiD;EACjD,2EAA2E;AAC7E","sourcesContent":[".card-container {\r\n  position: relative;\r\n  background-color: var(--color-background-card);\r\n  width: 10em;\r\n  height: 16em;\r\n  border-radius: var(--border-radius-card);\r\n  box-shadow: var(--box-shadow);\r\n  transition: all var(--transition-background-color) ease-out;\r\n  cursor: pointer;\r\n}\r\n.card-img {\r\n  width: 100%;\r\n  height: 8em;\r\n  display: flex;\r\n}\r\n.img {\r\n  justify-content: center;\r\n  width: 6.5em;\r\n  margin: 1.5em auto auto auto;\r\n}\r\n.card-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 5em;\r\n  padding: .7em;\r\n}\r\n.card-name .name {\r\n  text-align: center;\r\n  font-size: 1.2em;\r\n  font-weight: 600;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  overflow: hidden;\r\n  -webkit-box-orient: vertical;\r\n}\r\n.card-flag-birth-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 2em;\r\n}\r\n.birth-date {\r\n  font-size: 1em;\r\n}\r\n.container-flag {\r\n  display: flex;\r\n  width: 1.3em;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: .7em;\r\n}\r\n.container-flag .flag {\r\n  width: 1.5em;\r\n}\r\n.container-card-end-line {\r\n  position: relative;\r\n  height: 1em;\r\n  border-radius: 0 0 var(--border-radius-card) var(--border-radius-card);\r\n  overflow: hidden;\r\n}\r\n.card-end-line {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: .55em;\r\n  width: 100%;\r\n}\r\n.card-end-line.generic-person {\r\n  background-color: var(--color-generic-person);\r\n}\r\n.card-end-line.man {\r\n  background-color: var(--color-man);\r\n}\r\n.card-end-line.woman {\r\n  background-color: var(--color-woman);\r\n}\r\n.card-container:hover {\r\n  background-color: var(--color-background-hover);\r\n}\r\n.card-container.add-root-infos::after {\r\n  content: none;\r\n}\r\n.container-root-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.root-icon {\r\n  padding: 1em;\r\n  width: 6em;\r\n  height: 6em;\r\n  border-radius: 100%;\r\n  background-color: var(--color-background-btn-add);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/form.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/form.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fa-chevron-right {\r\n  color: var(--color-white);\r\n  margin: 0 auto;\r\n}\r\n.btn-action {\r\n  border: 0.12em solid var(--color-modal-border);\r\n  background-color: var(--color-btn-modal-background);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 4rem;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all var(--transition-background-color) linear;\r\n  cursor: pointer;\r\n}\r\n.btn-action:hover,\r\n.btn-action.back:hover,\r\n.btn-action.back:focus {\r\n  background-color: var(--color-btn-modal-background-hover);\r\n}\r\n.btn-action:focus {\r\n  border: 0.12em solid var(--color-modal-border);\r\n  background-color: var(--color-btn-modal-background-hover);\r\n  outline: none;\r\n}\r\n.btn-action:focus .fa-chevron-right,\r\n.btn-action:hover .fa-chevron-right{\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.container-nome {\r\n  width: 100%;\r\n}\r\n.container-close-modal {\r\n  border: none;\r\n  display: grid;\r\n  grid-template-columns: auto 2.2rem;\r\n  height: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.box-infos-modal {\r\n  padding: 4rem;\r\n  height: 36rem;\r\n  max-height: 36rem;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  border-radius: 5px;\r\n  border: .12em solid var(--color-modal-border);\r\n  box-shadow: var(--box-shadow-modal);\r\n  display: flex;\r\n  flex-flow: wrap;\r\n}\r\n.close {\r\n  display: flex;\r\n  padding: .4rem;\r\n  border-radius: 5px;\r\n  border: .1em solid var(--color-red);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.name-span {\r\n  font-weight: 700;\r\n  font-size: 1.3rem;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.name-info-container {\r\n  align-self: center;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: fit-content(100%) auto;\r\n}\r\n.line-name-modal {\r\n  border-bottom: .12em solid var(--color-modal-border);\r\n  margin-right: 1.5rem;\r\n}\r\n.name-selected {\r\n  font-size: 1.3rem;\r\n  margin-right: 1.5rem;\r\n  max-width: 39.5rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.name-selected.infos-member {\r\n  max-width: none;\r\n}\r\n.invalidItem {\r\n  color: var(--color-red);\r\n  font-size: 1.1rem;\r\n  margin-bottom: 1rem;\r\n  position: sticky;\r\n  z-index: -1;\r\n}\r\n.container-sex div,\r\n.container-applicant div {\r\n  display: flex;\r\n  height: 2rem;\r\n  align-items: center;\r\n}\r\n.container-sex > div:first-child,\r\n.container-applicant > div:first-child {\r\n  margin-bottom: .7rem;\r\n}\r\n.container-sex div input,\r\n.container-applicant div input {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.container-sex div input:focus,\r\n.container-applicant div input:focus {\r\n  box-shadow: none;\r\n}\r\n.container-sex div label,\r\n.container-applicant div label {\r\n  margin: 0 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 2rem;\r\n  cursor: pointer;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.container-box-1,\r\n.container-box-2 {\r\n  transition: all 360ms linear;\r\n}\r\n.container-box-1.left,\r\n.container-box-2.left {\r\n  transform: translateX(-48em);\r\n}\r\n.container-btns-back-include {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.container-btns-back-include > .container-btn-action {\r\n  width: 50%;\r\n  margin-right: 1rem;\r\n}\r\n.container-btns-back-include > .container-btn-action:last-child {\r\n  margin-left: 1rem;\r\n  margin-right: 0;\r\n}\r\n\r\n.btn-action > i {\r\n  margin: 0 auto;\r\n}\r\n.btn-action.back > i {\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btn-action.back {\r\n  background-color: white;\r\n}\r\n.btn-action.add,\r\n.btn-action.edit  {\r\n  color: var(--color-white);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n.btn-action.add > span,\r\n.btn-action.edit > span {\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n}\r\n.btn-action.add:hover > span,\r\n.btn-action.add:focus > span,\r\n.btn-action.edit:focus > span,\r\n.btn-action.edit:hover > span {\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.fa-lg {\r\n  font-size: 2rem;\r\n}\r\n.container-box-2 > .box-infos-modal {\r\n  display: grid;\r\n  grid-template-columns: 1fr .01fr 1fr;\r\n}\r\n.ctnr-birth-certificate {\r\n  margin-right: 2rem;\r\n}\r\n.ctnr-birth-certificate .tooltip {\r\n  transform: translate(-2.7em, -2.2em);\r\n}\r\n.ctnr-marriage-certificate {\r\n  margin-left: 2rem;\r\n}\r\n.ctnr-marriage-certificate .tooltip {\r\n  transform: translate(18.1em, -2.2em);\r\n}\r\n.ctnr-birth-certificate .invalidItem,\r\n.ctnr-marriage-certificate .invalidItem {\r\n  transform: translateY(-1.6em);\r\n}\r\n.center-line-box2 {\r\n  border-right: .1em solid var(--color-modal-border);\r\n  height: 100%;\r\n}\r\n.lbl-certificates {\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\ninput[type=radio] {\r\n  appearance: none;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: .3rem;\r\n  cursor: pointer;\r\n  margin-bottom: 0;\r\n}\r\ninput[type=radio]::after {\r\n  position: relative;\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: .2rem;\r\n  transition: all var(--transition-background-color) linear;\r\n}\r\ninput[type=radio]:checked::after {\r\n  background-color: var(--color-btn-modal-background);\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\nbutton:hover,\r\nbutton:focus {\r\n  box-shadow: var(--box-shadow-modal);\r\n}\r\nform {\r\n  display: grid;\r\n  grid-template-columns: 46em 46rem;\r\n  gap: 2rem;\r\n}\r\n.file-input {\r\n  display: none;\r\n}\r\n.lbl-file-input {\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n  border-radius: .4rem;\r\n  border: .1em dashed var(--color-modal-border);\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n.lbl-file-input > p {\r\n  margin-top: .3rem;\r\n  font-size: .85rem;\r\n  line-height: 1.4rem;\r\n}\r\n.container-box-2 label {\r\n  text-align: center;\r\n}\r\n.lbl-file-input {\r\n  transition: all 200ms linear;\r\n}\r\n.img-file-upload {\r\n  display: inline-block;\r\n  max-width: 2rem;\r\n}\r\n.container-file {\r\n  margin-top: 1.5rem;\r\n  border-bottom: 0.1em solid var(--color-modal-border);\r\n  padding-bottom: 0.25rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-right: 0.5rem;\r\n}\r\n.container-infos-file {\r\n  display: inline-block;\r\n  max-width: 11.5rem;\r\n  margin-left: 0.8rem;\r\n}\r\n.info-file-name {\r\n  font-size: .9rem;\r\n  font-weight: 700;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.info-file-size {\r\n  font-size: .8rem;\r\n}\r\n.fa-2xl {\r\n  font-size: 1.4rem;\r\n}\r\n.container-all-files {\r\n  margin-top: 1rem;\r\n  overflow-y: scroll;\r\n  max-height: 10rem;\r\n}\r\n.container-all-files::-webkit-scrollbar {\r\n  width: .5rem;\r\n}\r\n.container-all-files::-webkit-scrollbar-thumb {\r\n  background-color: #9e9c9c;\r\n  background-clip: padding-box;\r\n  border-radius: 4px;\r\n}\r\n.container-btn-delete-file {\r\n  cursor: pointer;\r\n  transition: var(--transition-background-color);\r\n  border-radius: 100%;\r\n  display: flex;\r\n}\r\n.container-btn-delete-file:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.container-date-place-birth,\r\n.container-sex-applicant {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.container-birth-place,\r\n.container-birth-date,\r\n.container-sex,\r\n.container-applicant {\r\n  width: 50%;\r\n}\r\n.container-birth-place,\r\n.container-sex {\r\n  margin-right: 2rem;\r\n}\r\n.container-birth-date,\r\n.container-applicant {\r\n  margin-left: 2rem;\r\n}\r\n.dsp-none {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) linear;\r\n}\r\n.dsp-none.dsp-none-label {\r\n  margin-top: 1rem;\r\n}\r\n#input-name::placeholder,\r\nselect {\r\n  opacity: .6;\r\n  font-size: 1.2rem;\r\n}\r\ninput:focus,\r\nselect:focus,\r\n.lbl-file-input:focus {\r\n  box-shadow: var(--box-shadow-input);\r\n  outline: 0;\r\n  border: .1em solid var(--color-tree-line-conection);\r\n  opacity: 1;\r\n}\r\nlabel {\r\n  text-transform: uppercase;\r\n  margin-bottom: .5rem;\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n  color: var(--color-btn-modal-background);\r\n}\r\nlabel,\r\ninput,\r\nselect {\r\n  display: block;\r\n}\r\ninput, select {\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: .4rem;\r\n  border: .1em solid var(--color-modal-border);\r\n  border-radius: .4rem;\r\n  transition: box-shadow 100ms linear;\r\n  transition: border 100ms linear;\r\n  font-size: 1.2rem;\r\n}\r\noption {\r\n  font-size: 1.2rem;\r\n}\r\n.container-btn {\r\n  display: flex;\r\n  bottom: 3.5rem;\r\n  position: absolute;\r\n  width: 100%;\r\n  gap: 1rem;\r\n}\r\n.lbl-certificates > img {\r\n  margin-left: .4rem;\r\n}\r\n.img-doubt {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 14rem;\r\n  background-color: #555;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: .8rem;\r\n  border-radius: 4px;\r\n  z-index: 1;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n  font-weight: 300;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.tooltip-top {\r\n  bottom: 125%;\r\n  left: 50%;\r\n  margin-left: -7rem;\r\n}\r\n\r\n.tooltip-right {\r\n  top: -50%;\r\n  left: 149%;\r\n  width: 28rem;\r\n}\r\n\r\n.tooltip-bottom {\r\n  top: 135%;\r\n  left: 50%;\r\n  margin-left: -7rem;\r\n}\r\n\r\n.tooltip-left {\r\n  top: -50%;\r\n  right: 149%;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip .tooltip-right::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 1.6rem;\r\n  left: -0.64rem;\r\n  right: 100%;\r\n  margin-top: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: transparent #555 transparent transparent;\r\n}\r\n\r\n.tooltip .tooltip-left::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 1.6rem;\r\n  left: 14.4999rem;\r\n  margin-top: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #555;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/form.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,8CAA8C;EAC9C,mDAAmD;EACnD,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yDAAyD;EACzD,eAAe;AACjB;AACA;;;EAGE,yDAAyD;AAC3D;AACA;EACE,8CAA8C;EAC9C,yDAAyD;EACzD,aAAa;AACf;AACA;;EAEE,wCAAwC;AAC1C;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,6CAA6C;EAC7C,mCAAmC;EACnC,aAAa;EACb,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,2EAA2E;EAC3E,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;AAC1C;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,6CAA6C;AAC/C;AACA;EACE,oDAAoD;EACpD,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;AACA;;EAEE,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,4BAA4B;AAC9B;AACA;;EAEE,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,WAAW;AACb;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,uBAAuB;AACzB;AACA;;EAEE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;;EAEE,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;;;;EAIE,wCAAwC;AAC1C;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,oCAAoC;AACtC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oCAAoC;AACtC;AACA;;EAEE,6BAA6B;AAC/B;AACA;EACE,kDAAkD;EAClD,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,yDAAyD;AAC3D;AACA;EACE,mDAAmD;AACrD;AACA;EACE,eAAe;AACjB;AACA;;EAEE,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,oBAAoB;EACpB,6CAA6C;EAC7C,aAAa;EACb,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,oDAAoD;EACpD,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,8CAA8C;EAC9C,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,wCAAwC;AAC1C;AACA;;EAEE,aAAa;EACb,WAAW;AACb;AACA;;;;EAIE,UAAU;AACZ;AACA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,UAAU;EACV,oDAAoD;AACtD;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,WAAW;EACX,iBAAiB;AACnB;AACA;;;EAGE,mCAAmC;EACnC,UAAU;EACV,mDAAmD;EACnD,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;AAC1C;AACA;;;EAGE,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4CAA4C;EAC5C,oBAAoB;EACpB,mCAAmC;EACnC,+BAA+B;EAC/B,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;AACd;;AAEA;EACE,SAAS;EACT,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,sDAAsD;AACxD;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":[".fa-chevron-right {\r\n  color: var(--color-white);\r\n  margin: 0 auto;\r\n}\r\n.btn-action {\r\n  border: 0.12em solid var(--color-modal-border);\r\n  background-color: var(--color-btn-modal-background);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 4rem;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all var(--transition-background-color) linear;\r\n  cursor: pointer;\r\n}\r\n.btn-action:hover,\r\n.btn-action.back:hover,\r\n.btn-action.back:focus {\r\n  background-color: var(--color-btn-modal-background-hover);\r\n}\r\n.btn-action:focus {\r\n  border: 0.12em solid var(--color-modal-border);\r\n  background-color: var(--color-btn-modal-background-hover);\r\n  outline: none;\r\n}\r\n.btn-action:focus .fa-chevron-right,\r\n.btn-action:hover .fa-chevron-right{\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.container-nome {\r\n  width: 100%;\r\n}\r\n.container-close-modal {\r\n  border: none;\r\n  display: grid;\r\n  grid-template-columns: auto 2.2rem;\r\n  height: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.box-infos-modal {\r\n  padding: 4rem;\r\n  height: 36rem;\r\n  max-height: 36rem;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  border-radius: 5px;\r\n  border: .12em solid var(--color-modal-border);\r\n  box-shadow: var(--box-shadow-modal);\r\n  display: flex;\r\n  flex-flow: wrap;\r\n}\r\n.close {\r\n  display: flex;\r\n  padding: .4rem;\r\n  border-radius: 5px;\r\n  border: .1em solid var(--color-red);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.name-span {\r\n  font-weight: 700;\r\n  font-size: 1.3rem;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.name-info-container {\r\n  align-self: center;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: fit-content(100%) auto;\r\n}\r\n.line-name-modal {\r\n  border-bottom: .12em solid var(--color-modal-border);\r\n  margin-right: 1.5rem;\r\n}\r\n.name-selected {\r\n  font-size: 1.3rem;\r\n  margin-right: 1.5rem;\r\n  max-width: 39.5rem;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.name-selected.infos-member {\r\n  max-width: none;\r\n}\r\n.invalidItem {\r\n  color: var(--color-red);\r\n  font-size: 1.1rem;\r\n  margin-bottom: 1rem;\r\n  position: sticky;\r\n  z-index: -1;\r\n}\r\n.container-sex div,\r\n.container-applicant div {\r\n  display: flex;\r\n  height: 2rem;\r\n  align-items: center;\r\n}\r\n.container-sex > div:first-child,\r\n.container-applicant > div:first-child {\r\n  margin-bottom: .7rem;\r\n}\r\n.container-sex div input,\r\n.container-applicant div input {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n.container-sex div input:focus,\r\n.container-applicant div input:focus {\r\n  box-shadow: none;\r\n}\r\n.container-sex div label,\r\n.container-applicant div label {\r\n  margin: 0 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 2rem;\r\n  cursor: pointer;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.container-box-1,\r\n.container-box-2 {\r\n  transition: all 360ms linear;\r\n}\r\n.container-box-1.left,\r\n.container-box-2.left {\r\n  transform: translateX(-48em);\r\n}\r\n.container-btns-back-include {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.container-btns-back-include > .container-btn-action {\r\n  width: 50%;\r\n  margin-right: 1rem;\r\n}\r\n.container-btns-back-include > .container-btn-action:last-child {\r\n  margin-left: 1rem;\r\n  margin-right: 0;\r\n}\r\n\r\n.btn-action > i {\r\n  margin: 0 auto;\r\n}\r\n.btn-action.back > i {\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btn-action.back {\r\n  background-color: white;\r\n}\r\n.btn-action.add,\r\n.btn-action.edit  {\r\n  color: var(--color-white);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n.btn-action.add > span,\r\n.btn-action.edit > span {\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n}\r\n.btn-action.add:hover > span,\r\n.btn-action.add:focus > span,\r\n.btn-action.edit:focus > span,\r\n.btn-action.edit:hover > span {\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.fa-lg {\r\n  font-size: 2rem;\r\n}\r\n.container-box-2 > .box-infos-modal {\r\n  display: grid;\r\n  grid-template-columns: 1fr .01fr 1fr;\r\n}\r\n.ctnr-birth-certificate {\r\n  margin-right: 2rem;\r\n}\r\n.ctnr-birth-certificate .tooltip {\r\n  transform: translate(-2.7em, -2.2em);\r\n}\r\n.ctnr-marriage-certificate {\r\n  margin-left: 2rem;\r\n}\r\n.ctnr-marriage-certificate .tooltip {\r\n  transform: translate(18.1em, -2.2em);\r\n}\r\n.ctnr-birth-certificate .invalidItem,\r\n.ctnr-marriage-certificate .invalidItem {\r\n  transform: translateY(-1.6em);\r\n}\r\n.center-line-box2 {\r\n  border-right: .1em solid var(--color-modal-border);\r\n  height: 100%;\r\n}\r\n.lbl-certificates {\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\ninput[type=radio] {\r\n  appearance: none;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: .3rem;\r\n  cursor: pointer;\r\n  margin-bottom: 0;\r\n}\r\ninput[type=radio]::after {\r\n  position: relative;\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: .2rem;\r\n  transition: all var(--transition-background-color) linear;\r\n}\r\ninput[type=radio]:checked::after {\r\n  background-color: var(--color-btn-modal-background);\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\nbutton:hover,\r\nbutton:focus {\r\n  box-shadow: var(--box-shadow-modal);\r\n}\r\nform {\r\n  display: grid;\r\n  grid-template-columns: 46em 46rem;\r\n  gap: 2rem;\r\n}\r\n.file-input {\r\n  display: none;\r\n}\r\n.lbl-file-input {\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n  border-radius: .4rem;\r\n  border: .1em dashed var(--color-modal-border);\r\n  padding: 2rem;\r\n  cursor: pointer;\r\n}\r\n.lbl-file-input > p {\r\n  margin-top: .3rem;\r\n  font-size: .85rem;\r\n  line-height: 1.4rem;\r\n}\r\n.container-box-2 label {\r\n  text-align: center;\r\n}\r\n.lbl-file-input {\r\n  transition: all 200ms linear;\r\n}\r\n.img-file-upload {\r\n  display: inline-block;\r\n  max-width: 2rem;\r\n}\r\n.container-file {\r\n  margin-top: 1.5rem;\r\n  border-bottom: 0.1em solid var(--color-modal-border);\r\n  padding-bottom: 0.25rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-right: 0.5rem;\r\n}\r\n.container-infos-file {\r\n  display: inline-block;\r\n  max-width: 11.5rem;\r\n  margin-left: 0.8rem;\r\n}\r\n.info-file-name {\r\n  font-size: .9rem;\r\n  font-weight: 700;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.info-file-size {\r\n  font-size: .8rem;\r\n}\r\n.fa-2xl {\r\n  font-size: 1.4rem;\r\n}\r\n.container-all-files {\r\n  margin-top: 1rem;\r\n  overflow-y: scroll;\r\n  max-height: 10rem;\r\n}\r\n.container-all-files::-webkit-scrollbar {\r\n  width: .5rem;\r\n}\r\n.container-all-files::-webkit-scrollbar-thumb {\r\n  background-color: #9e9c9c;\r\n  background-clip: padding-box;\r\n  border-radius: 4px;\r\n}\r\n.container-btn-delete-file {\r\n  cursor: pointer;\r\n  transition: var(--transition-background-color);\r\n  border-radius: 100%;\r\n  display: flex;\r\n}\r\n.container-btn-delete-file:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.container-date-place-birth,\r\n.container-sex-applicant {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n.container-birth-place,\r\n.container-birth-date,\r\n.container-sex,\r\n.container-applicant {\r\n  width: 50%;\r\n}\r\n.container-birth-place,\r\n.container-sex {\r\n  margin-right: 2rem;\r\n}\r\n.container-birth-date,\r\n.container-applicant {\r\n  margin-left: 2rem;\r\n}\r\n.dsp-none {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) linear;\r\n}\r\n.dsp-none.dsp-none-label {\r\n  margin-top: 1rem;\r\n}\r\n#input-name::placeholder,\r\nselect {\r\n  opacity: .6;\r\n  font-size: 1.2rem;\r\n}\r\ninput:focus,\r\nselect:focus,\r\n.lbl-file-input:focus {\r\n  box-shadow: var(--box-shadow-input);\r\n  outline: 0;\r\n  border: .1em solid var(--color-tree-line-conection);\r\n  opacity: 1;\r\n}\r\nlabel {\r\n  text-transform: uppercase;\r\n  margin-bottom: .5rem;\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n  color: var(--color-btn-modal-background);\r\n}\r\nlabel,\r\ninput,\r\nselect {\r\n  display: block;\r\n}\r\ninput, select {\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: .4rem;\r\n  border: .1em solid var(--color-modal-border);\r\n  border-radius: .4rem;\r\n  transition: box-shadow 100ms linear;\r\n  transition: border 100ms linear;\r\n  font-size: 1.2rem;\r\n}\r\noption {\r\n  font-size: 1.2rem;\r\n}\r\n.container-btn {\r\n  display: flex;\r\n  bottom: 3.5rem;\r\n  position: absolute;\r\n  width: 100%;\r\n  gap: 1rem;\r\n}\r\n.lbl-certificates > img {\r\n  margin-left: .4rem;\r\n}\r\n.img-doubt {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 14rem;\r\n  background-color: #555;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: .8rem;\r\n  border-radius: 4px;\r\n  z-index: 1;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n  font-weight: 300;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.tooltip-top {\r\n  bottom: 125%;\r\n  left: 50%;\r\n  margin-left: -7rem;\r\n}\r\n\r\n.tooltip-right {\r\n  top: -50%;\r\n  left: 149%;\r\n  width: 28rem;\r\n}\r\n\r\n.tooltip-bottom {\r\n  top: 135%;\r\n  left: 50%;\r\n  margin-left: -7rem;\r\n}\r\n\r\n.tooltip-left {\r\n  top: -50%;\r\n  right: 149%;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip .tooltip-right::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 1.6rem;\r\n  left: -0.64rem;\r\n  right: 100%;\r\n  margin-top: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: transparent #555 transparent transparent;\r\n}\r\n\r\n.tooltip .tooltip-left::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 1.6rem;\r\n  left: 14.4999rem;\r\n  margin-top: -.5rem;\r\n  border-width: .5rem;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent #555;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/global.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/global.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-background-page: #D8FFDB;\r\n  --color-background-container: #008F8C;\r\n  --color-background-hover:#F2F2F2;\r\n  --color-background-btn-add:#a1a1a13a;\r\n  --color-background-btn-add-hover: #A9ABAB;\r\n  --color-background-card: #fff;\r\n  --color-background-modal: #0000004d;\r\n  --color-btn-modal: #DEEFE7;\r\n  --color-btn-modal-background: #002333ea;\r\n  --color-btn-modal-background-hover: #b2bebf8f;\r\n  --color-white: #fff;\r\n  --color-black: #000;\r\n  --color-red: #D92525;\r\n  --color-red-hover: #d925253b;\r\n  --color-black-shadow: #00000023;\r\n  --color-border: #e1e1e1;\r\n  --color-man: #003554ff;\r\n  --color-woman:#990000;\r\n  --color-generic-person: #525252f1;\r\n  --color-background-tree: #dddfdf;\r\n  --color-tree-line-conection: #545659;\r\n  --color-modal-border: #B2BEBF;\r\n  --color-no-file: #c7c7c72b;\r\n  --padding-top: 1.5rem;\r\n  --border-radius-card: .8rem;\r\n  --box-shadow: -.3em .3em .5em var(--color-black-shadow);\r\n  --box-shadow-modal: 0 0 .5em var(--color-black-shadow);\r\n  --box-shadow-input: 0 0 .5em var(--color-black-shadow);\r\n  --transition-background-color: 130ms;\r\n  --transition-opacity: 350ms;\r\n  --transition-height: 350ms;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\r\n  font-family: 'Inter', sans-serif;\r\n  -ms-overflow-style: none;\r\n  /* scrollbar-width: none; */\r\n}\r\nbody {\r\n  background-color: var(--color-background-tree);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  user-select: none;\r\n  overflow-x: hidden;\r\n}\r\n.container {\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\nbutton {\r\n  background: none;\r\n  appearance: none;\r\n  border: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/global.css"],"names":[],"mappings":"AACA;EACE,gCAAgC;EAChC,qCAAqC;EACrC,gCAAgC;EAChC,oCAAoC;EACpC,yCAAyC;EACzC,6BAA6B;EAC7B,mCAAmC;EACnC,0BAA0B;EAC1B,uCAAuC;EACvC,6CAA6C;EAC7C,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,4BAA4B;EAC5B,+BAA+B;EAC/B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,iCAAiC;EACjC,gCAAgC;EAChC,oCAAoC;EACpC,6BAA6B;EAC7B,0BAA0B;EAC1B,qBAAqB;EACrB,2BAA2B;EAC3B,uDAAuD;EACvD,sDAAsD;EACtD,sDAAsD;EACtD,oCAAoC;EACpC,2BAA2B;EAC3B,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,eAAe;EACf,gCAAgC;EAChC,wBAAwB;EACxB,2BAA2B;AAC7B;AACA;EACE,8CAA8C;EAC9C,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');\r\n:root {\r\n  --color-background-page: #D8FFDB;\r\n  --color-background-container: #008F8C;\r\n  --color-background-hover:#F2F2F2;\r\n  --color-background-btn-add:#a1a1a13a;\r\n  --color-background-btn-add-hover: #A9ABAB;\r\n  --color-background-card: #fff;\r\n  --color-background-modal: #0000004d;\r\n  --color-btn-modal: #DEEFE7;\r\n  --color-btn-modal-background: #002333ea;\r\n  --color-btn-modal-background-hover: #b2bebf8f;\r\n  --color-white: #fff;\r\n  --color-black: #000;\r\n  --color-red: #D92525;\r\n  --color-red-hover: #d925253b;\r\n  --color-black-shadow: #00000023;\r\n  --color-border: #e1e1e1;\r\n  --color-man: #003554ff;\r\n  --color-woman:#990000;\r\n  --color-generic-person: #525252f1;\r\n  --color-background-tree: #dddfdf;\r\n  --color-tree-line-conection: #545659;\r\n  --color-modal-border: #B2BEBF;\r\n  --color-no-file: #c7c7c72b;\r\n  --padding-top: 1.5rem;\r\n  --border-radius-card: .8rem;\r\n  --box-shadow: -.3em .3em .5em var(--color-black-shadow);\r\n  --box-shadow-modal: 0 0 .5em var(--color-black-shadow);\r\n  --box-shadow-input: 0 0 .5em var(--color-black-shadow);\r\n  --transition-background-color: 130ms;\r\n  --transition-opacity: 350ms;\r\n  --transition-height: 350ms;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\r\n  font-family: 'Inter', sans-serif;\r\n  -ms-overflow-style: none;\r\n  /* scrollbar-width: none; */\r\n}\r\nbody {\r\n  background-color: var(--color-background-tree);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  user-select: none;\r\n  overflow-x: hidden;\r\n}\r\n.container {\r\n  position: relative;\r\n  margin: 0 auto;\r\n}\r\nbutton {\r\n  background: none;\r\n  appearance: none;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/informations.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/informations.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".box-infos-modal.informations {\r\n  height: 15rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 2rem;\r\n}\r\n.box-infos-modal.informations div {\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.informations b {\r\n  color: var(--color-btn-modal-background);\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.birth-certificate-information,\r\n.box-infos-modal.marriage-certificate-information {\r\n  height: 9rem;\r\n  padding: 2rem;\r\n  display: grid;\r\n  grid-template-columns: 70% 2% 28%;\r\n}\r\n.box-infos-modal.birth-certificate-information div,\r\n.box-infos-modal.marriage-certificate-information div {\r\n  max-height: 100%;\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.birth-certificate-information > div,\r\n.box-infos-modal.marriage-certificate-information > div{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  max-height: 5rem;\r\n}\r\n.box-infos-modal.birth-certificate-information .line,\r\n.box-infos-modal.marriage-certificate-information .line {\r\n  border-left: 0.12em solid var(--color-modal-border);\r\n  height: 100%;\r\n}\r\n.birth-certificate-information .title,\r\n.marriage-certificate-information .title {\r\n  font-size: 1.3rem;\r\n  text-transform: uppercase;\r\n}\r\n.birth-certificate-information .info-text,\r\n.marriage-certificate-information .info-text {\r\n  font-weight: bold;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btns-edit-delete {\r\n  width: 50%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.btns-edit-delete.btn-delete {\r\n  border: 0.1rem solid var(--color-red);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  color: var(--color-red);\r\n}\r\n.btns-edit-delete.btn-delete:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.btns-edit-delete.btn-edit {\r\n  border: 0.1rem solid var(--color-btn-modal-background);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btns-edit-delete.btn-edit:hover {\r\n  background-color: var(--color-btn-modal-background-hover);\r\n}\r\n.ctnr-btns-edit-delete {\r\n  display: flex;\r\n  gap: 2rem;\r\n  height: 3rem;\r\n}\r\n.container-infos-member {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.container-infos-member div .tooltip {\r\n  margin-left: 1rem;\r\n  height: 1.6rem;\r\n  width: 1.6rem;\r\n  transform: translate(0px, 2.5px);\r\n}\r\n.third-box .container-show-all-files {\r\n  overflow-y: scroll;\r\n}\r\n.container-show-all-files .container-file {\r\n  margin: 0 0 1rem 0;\r\n  border-bottom: 0.1em solid var(--color-modal-border);\r\n  padding-bottom: 0.25rem;\r\n  padding-right: 0;\r\n}\r\n.container-show-all-files .container-file:last-child {\r\n  margin: 0;\r\n}\r\n.container-show-all-files .container-file .container-infos-file {\r\n  max-width: 15.5rem;\r\n}\r\n.container-show-all-files::-webkit-scrollbar {\r\n  width: .5rem;\r\n}\r\n.container-show-all-files::-webkit-scrollbar-thumb {\r\n  background-color: #9e9c9c;\r\n  background-clip: padding-box;\r\n  border-radius: 4px;\r\n}\r\n.no-files-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--color-no-file);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.no-files-container img {\r\n  max-width: 2rem;\r\n}\r\n.no-files-container span {\r\n  font-weight: bold;\r\n  margin-bottom: .2rem;\r\n  color: #9e9c9c;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/informations.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;EACE,wCAAwC;EACxC,iBAAiB;AACnB;AACA;;EAEE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,iCAAiC;AACnC;AACA;;EAEE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,gBAAgB;AAClB;AACA;;EAEE,mDAAmD;EACnD,YAAY;AACd;AACA;;EAEE,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;;EAEE,iBAAiB;EACjB,wCAAwC;AAC1C;AACA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;AACnB;AACA;EACE,qCAAqC;EACrC,2EAA2E;EAC3E,uBAAuB;AACzB;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,sDAAsD;EACtD,2EAA2E;EAC3E,wCAAwC;AAC1C;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,gCAAgC;AAClC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,oDAAoD;EACpD,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,cAAc;AAChB","sourcesContent":[".box-infos-modal.informations {\r\n  height: 15rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 2rem;\r\n}\r\n.box-infos-modal.informations div {\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.informations b {\r\n  color: var(--color-btn-modal-background);\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.birth-certificate-information,\r\n.box-infos-modal.marriage-certificate-information {\r\n  height: 9rem;\r\n  padding: 2rem;\r\n  display: grid;\r\n  grid-template-columns: 70% 2% 28%;\r\n}\r\n.box-infos-modal.birth-certificate-information div,\r\n.box-infos-modal.marriage-certificate-information div {\r\n  max-height: 100%;\r\n  font-size: 1.3rem;\r\n}\r\n.box-infos-modal.birth-certificate-information > div,\r\n.box-infos-modal.marriage-certificate-information > div{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  max-height: 5rem;\r\n}\r\n.box-infos-modal.birth-certificate-information .line,\r\n.box-infos-modal.marriage-certificate-information .line {\r\n  border-left: 0.12em solid var(--color-modal-border);\r\n  height: 100%;\r\n}\r\n.birth-certificate-information .title,\r\n.marriage-certificate-information .title {\r\n  font-size: 1.3rem;\r\n  text-transform: uppercase;\r\n}\r\n.birth-certificate-information .info-text,\r\n.marriage-certificate-information .info-text {\r\n  font-weight: bold;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btns-edit-delete {\r\n  width: 50%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.btns-edit-delete.btn-delete {\r\n  border: 0.1rem solid var(--color-red);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  color: var(--color-red);\r\n}\r\n.btns-edit-delete.btn-delete:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.btns-edit-delete.btn-edit {\r\n  border: 0.1rem solid var(--color-btn-modal-background);\r\n  transition: background-color var(--transition-background-color) ease-in-out;\r\n  color: var(--color-btn-modal-background);\r\n}\r\n.btns-edit-delete.btn-edit:hover {\r\n  background-color: var(--color-btn-modal-background-hover);\r\n}\r\n.ctnr-btns-edit-delete {\r\n  display: flex;\r\n  gap: 2rem;\r\n  height: 3rem;\r\n}\r\n.container-infos-member {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.container-infos-member div .tooltip {\r\n  margin-left: 1rem;\r\n  height: 1.6rem;\r\n  width: 1.6rem;\r\n  transform: translate(0px, 2.5px);\r\n}\r\n.third-box .container-show-all-files {\r\n  overflow-y: scroll;\r\n}\r\n.container-show-all-files .container-file {\r\n  margin: 0 0 1rem 0;\r\n  border-bottom: 0.1em solid var(--color-modal-border);\r\n  padding-bottom: 0.25rem;\r\n  padding-right: 0;\r\n}\r\n.container-show-all-files .container-file:last-child {\r\n  margin: 0;\r\n}\r\n.container-show-all-files .container-file .container-infos-file {\r\n  max-width: 15.5rem;\r\n}\r\n.container-show-all-files::-webkit-scrollbar {\r\n  width: .5rem;\r\n}\r\n.container-show-all-files::-webkit-scrollbar-thumb {\r\n  background-color: #9e9c9c;\r\n  background-clip: padding-box;\r\n  border-radius: 4px;\r\n}\r\n.no-files-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--color-no-file);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.no-files-container img {\r\n  max-width: 2rem;\r\n}\r\n.no-files-container span {\r\n  font-weight: bold;\r\n  margin-bottom: .2rem;\r\n  color: #9e9c9c;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/medias.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/medias.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 450px)\r\n{\r\n  * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 6.5px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  .modal-dialog {\r\n    max-width: 90vw;\r\n    max-height: 90vh;\r\n  }\r\n  label {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  div.no-child-add::after,\r\n  div.last-card-person::before {\r\n    opacity: 1;\r\n  }\r\n}\r\n@media (min-width: 451px) and (max-width: 768px) {\r\n  * {\r\n    font-size: 8.5px;\r\n  }\r\n}\r\n@media (orientation: landscape) and (max-width: 1024px)\r\n{\r\n  * {\r\n    font-size: 8.5px;\r\n  }\r\n  .modal-dialog {\r\n    max-height: 90vh;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/medias.css"],"names":[],"mappings":"AAAA;;EAEE;IACE,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,gDAAgD;EAClD;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;AACF;AACA;EACE;;IAEE,UAAU;EACZ;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;;EAEE;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@media (max-width: 450px)\r\n{\r\n  * {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 6.5px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  .modal-dialog {\r\n    max-width: 90vw;\r\n    max-height: 90vh;\r\n  }\r\n  label {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  div.no-child-add::after,\r\n  div.last-card-person::before {\r\n    opacity: 1;\r\n  }\r\n}\r\n@media (min-width: 451px) and (max-width: 768px) {\r\n  * {\r\n    font-size: 8.5px;\r\n  }\r\n}\r\n@media (orientation: landscape) and (max-width: 1024px)\r\n{\r\n  * {\r\n    font-size: 8.5px;\r\n  }\r\n  .modal-dialog {\r\n    max-height: 90vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/modal.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/modal.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-modal {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  user-select: text;\r\n  display: none;\r\n}\r\n.modal {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) linear;\r\n  background-color: var(--color-background-modal);\r\n}\r\n.modal-dialog {\r\n  position: absolute;\r\n  width: 50rem;\r\n  height: 0;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--color-white);\r\n  border-radius: var(--border-radius-card);\r\n  transition: height var(--transition-height) linear, opacity var(--transition-opacity) linear;\r\n  overflow: hidden;\r\n}\r\n.modal-dialog.infos-member {\r\n  width: 80rem;\r\n}\r\n.close:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.close-img {\r\n  width: 1.4rem;\r\n}\r\n.infos-modal {\r\n  position: relative;\r\n  padding-top: 2rem;\r\n  height: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/modal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oDAAoD;EACpD,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,oCAAoC;EACpC,wCAAwC;EACxC,4FAA4F;EAC5F,gBAAgB;AAClB;AACA;EACE,YAAY;AACd;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd","sourcesContent":[".container-modal {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  user-select: text;\r\n  display: none;\r\n}\r\n.modal {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) linear;\r\n  background-color: var(--color-background-modal);\r\n}\r\n.modal-dialog {\r\n  position: absolute;\r\n  width: 50rem;\r\n  height: 0;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--color-white);\r\n  border-radius: var(--border-radius-card);\r\n  transition: height var(--transition-height) linear, opacity var(--transition-opacity) linear;\r\n  overflow: hidden;\r\n}\r\n.modal-dialog.infos-member {\r\n  width: 80rem;\r\n}\r\n.close:hover {\r\n  background-color: var(--color-red-hover);\r\n}\r\n.close-img {\r\n  width: 1.4rem;\r\n}\r\n.infos-modal {\r\n  position: relative;\r\n  padding-top: 2rem;\r\n  height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/tree.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/tree.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/add-icon.svg */ "./frontend/assets/img/add-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container-tree {\r\n  min-width: fit-content;\r\n  padding: 6rem;\r\n  padding-bottom: 8rem;\r\n  margin: 0 auto;\r\n}\r\n.gen {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  width: fit-content;\r\n  gap: 6rem;\r\n}\r\n.entry-gen-root {\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n.entry-gen-root > .card-container::before {\r\n  content: none;\r\n}\r\n.card-container::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  bottom: -2rem;\r\n}\r\n.card-container::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  top: -2rem;\r\n}\r\n.entry-gen {\r\n  position: relative;\r\n  margin-top: 4rem;\r\n}\r\n.entry-gen.no-child > .card-container::after {\r\n  content: none;\r\n}\r\n.entry-gen-root.no-child > .card-container::after {\r\n  content: none;\r\n}\r\n.entry-gen:first-child::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  top: -2rem;\r\n  width: calc(50% + 6em);\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  border-top-left-radius: 1rem;\r\n}\r\n.entry-gen:nth-last-child(1):before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  top: -2rem;\r\n  width: 50%;\r\n  right: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n  border-right: .18em solid var(--color-tree-line-conection);\r\n  border-top-right-radius: 1rem;\r\n}\r\n.entry-gen:nth-last-child(1) > .card-container::before,\r\n.entry-gen:first-child > .card-container::before\r\n{\r\n  content: none;\r\n}\r\n.entry-gen:only-child::before {\r\n  content: \"\";\r\n  width: 0;\r\n  left: 50%;\r\n  border-right: none;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  border-radius: 0;\r\n}\r\n.entry-gen::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  top: -2rem;\r\n  width: calc(100% + 6em);\r\n  right: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n}\r\n.last-card-person,\r\n.no-child-add {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.last-card-person:hover::before,\r\n.no-child-add:hover::after {\r\n  opacity: 1;\r\n}\r\n.last-card-person::before,\r\n.no-child-add::after {\r\n  position: absolute;\r\n  left: calc(50% + 6em);\r\n  top: -9rem;\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  width: 2rem;\r\n  height: 2rem;\r\n  padding: .8rem;\r\n  background-color: var(--color-background-btn-add);\r\n  border-radius: 100%;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) ease-in-out;\r\n}\r\n.no-child-add::after {\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  top: 1rem;\r\n}\r\n.card-container:hover ~ .no-child-add::after {\r\n  opacity: 1;\r\n}\r\n.entry-gen:hover .card-container:hover ~ .last-card-person::before {\r\n  opacity: 1;\r\n}\r\n.card-container:hover ~ .last-card-person::before {\r\n  opacity: 1;\r\n}\r\n.no-child-add.temp-show::after,\r\n.last-card-person.temp-show::before {\r\n  opacity: 1;\r\n}\r\ndiv.no-child-add.hidden {\r\n  display: none;\r\n}\r\n\r\n.card-name > .name {\r\n  user-select: text;\r\n}\r\n", "",{"version":3,"sources":["webpack://./frontend/assets/css/tree.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,yDAAyD;EACzD,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;EACZ,yDAAyD;EACzD,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,wDAAwD;EACxD,yDAAyD;EACzD,4BAA4B;AAC9B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,UAAU;EACV,UAAU;EACV,YAAY;EACZ,wDAAwD;EACxD,0DAA0D;EAC1D,6BAA6B;AAC/B;AACA;;;EAGE,aAAa;AACf;AACA;EACE,WAAW;EACX,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,yDAAyD;EACzD,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,UAAU;EACV,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,wDAAwD;AAC1D;AACA;;EAEE,kBAAkB;EAClB,eAAe;AACjB;AACA;;EAEE,UAAU;AACZ;AACA;;EAEE,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,gDAAmC;EACnC,WAAW;EACX,YAAY;EACZ,cAAc;EACd,iDAAiD;EACjD,mBAAmB;EACnB,UAAU;EACV,yDAAyD;AAC3D;AACA;EACE,SAAS;EACT,6BAA6B;EAC7B,SAAS;AACX;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;;EAEE,UAAU;AACZ;AACA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".container-tree {\r\n  min-width: fit-content;\r\n  padding: 6rem;\r\n  padding-bottom: 8rem;\r\n  margin: 0 auto;\r\n}\r\n.gen {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  width: fit-content;\r\n  gap: 6rem;\r\n}\r\n.entry-gen-root {\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n.entry-gen-root > .card-container::before {\r\n  content: none;\r\n}\r\n.card-container::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  bottom: -2rem;\r\n}\r\n.card-container::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  top: -2rem;\r\n}\r\n.entry-gen {\r\n  position: relative;\r\n  margin-top: 4rem;\r\n}\r\n.entry-gen.no-child > .card-container::after {\r\n  content: none;\r\n}\r\n.entry-gen-root.no-child > .card-container::after {\r\n  content: none;\r\n}\r\n.entry-gen:first-child::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  top: -2rem;\r\n  width: calc(50% + 6em);\r\n  left: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  border-top-left-radius: 1rem;\r\n}\r\n.entry-gen:nth-last-child(1):before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  top: -2rem;\r\n  width: 50%;\r\n  right: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n  border-right: .18em solid var(--color-tree-line-conection);\r\n  border-top-right-radius: 1rem;\r\n}\r\n.entry-gen:nth-last-child(1) > .card-container::before,\r\n.entry-gen:first-child > .card-container::before\r\n{\r\n  content: none;\r\n}\r\n.entry-gen:only-child::before {\r\n  content: \"\";\r\n  width: 0;\r\n  left: 50%;\r\n  border-right: none;\r\n  border-left: .18em solid var(--color-tree-line-conection);\r\n  border-radius: 0;\r\n}\r\n.entry-gen::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  top: -2rem;\r\n  width: calc(100% + 6em);\r\n  right: 50%;\r\n  height: 2rem;\r\n  border-top: .18em solid var(--color-tree-line-conection);\r\n}\r\n.last-card-person,\r\n.no-child-add {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.last-card-person:hover::before,\r\n.no-child-add:hover::after {\r\n  opacity: 1;\r\n}\r\n.last-card-person::before,\r\n.no-child-add::after {\r\n  position: absolute;\r\n  left: calc(50% + 6em);\r\n  top: -9rem;\r\n  content: url('../img/add-icon.svg');\r\n  width: 2rem;\r\n  height: 2rem;\r\n  padding: .8rem;\r\n  background-color: var(--color-background-btn-add);\r\n  border-radius: 100%;\r\n  opacity: 0;\r\n  transition: opacity var(--transition-opacity) ease-in-out;\r\n}\r\n.no-child-add::after {\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  top: 1rem;\r\n}\r\n.card-container:hover ~ .no-child-add::after {\r\n  opacity: 1;\r\n}\r\n.entry-gen:hover .card-container:hover ~ .last-card-person::before {\r\n  opacity: 1;\r\n}\r\n.card-container:hover ~ .last-card-person::before {\r\n  opacity: 1;\r\n}\r\n.no-child-add.temp-show::after,\r\n.last-card-person.temp-show::before {\r\n  opacity: 1;\r\n}\r\ndiv.no-child-add.hidden {\r\n  display: none;\r\n}\r\n\r\n.card-name > .name {\r\n  user-select: text;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./frontend/assets/css/card.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/card.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./card.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/form.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/form.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/global.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/global.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/informations.css":
/*!**********************************************!*\
  !*** ./frontend/assets/css/informations.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_informations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./informations.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/informations.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_informations_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_informations_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_informations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_informations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/medias.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/medias.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_medias_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./medias.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/medias.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_medias_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_medias_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_medias_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_medias_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/modal.css":
/*!***************************************!*\
  !*** ./frontend/assets/css/modal.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/assets/css/tree.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/tree.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tree_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./tree.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/assets/css/tree.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./frontend/assets/img/add-icon.svg":
/*!******************************************!*\
  !*** ./frontend/assets/img/add-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47a4f3341762e23a15ba.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/global.css */ "./frontend/assets/css/global.css");
/* harmony import */ var _assets_css_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/card.css */ "./frontend/assets/css/card.css");
/* harmony import */ var _assets_css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/modal.css */ "./frontend/assets/css/modal.css");
/* harmony import */ var _assets_css_medias_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/medias.css */ "./frontend/assets/css/medias.css");
/* harmony import */ var _assets_css_tree_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/tree.css */ "./frontend/assets/css/tree.css");
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/form.css */ "./frontend/assets/css/form.css");
/* harmony import */ var _assets_css_informations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/css/informations.css */ "./frontend/assets/css/informations.css");
/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Form */ "./frontend/modules/Form.js");
/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Modal */ "./frontend/modules/Modal.js");
/* harmony import */ var _modules_selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/selectorOfCardSelected */ "./frontend/modules/selectorOfCardSelected.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var btnCloseModal = document.querySelector('.close');
var rootCardInitial = document.querySelector('.container.card-container.add-root-infos');
rootCardInitial.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var modal, selectorCSS, form, modalDialog;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        modal = new _modules_Modal__WEBPACK_IMPORTED_MODULE_8__["default"]();
        selectorCSS = (0,_modules_selectorOfCardSelected__WEBPACK_IMPORTED_MODULE_9__["default"])(rootCardInitial);
        _context.next = 4;
        return new _modules_Form__WEBPACK_IMPORTED_MODULE_7__["default"]('Dante Causa (Italiano)', selectorCSS, 'dante').createForm();
      case 4:
        form = _context.sent;
        modalDialog = document.querySelector('.modal-dialog');
        modalDialog.appendChild(form);
        modal.showModal();
      case 8:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
btnCloseModal.addEventListener('click', function () {
  var modal = new _modules_Modal__WEBPACK_IMPORTED_MODULE_8__["default"]();
  modal.closeModal();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map