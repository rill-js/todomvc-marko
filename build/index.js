require("source-map-support").install({ hookRequire: true })
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/src/html");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/src/runtime/html/helpers");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(1),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(__webpack_require__(35));

function render(input, out) {
  var data = input;

  out.w("<footer id=\"info\" class=\"info\">");

  include_tag({
      _target: input.renderBody
    }, out);

  out.w("<p>Template by <a href=\"http://sindresorhus.com\">Sindre Sorhus</a></p><p>Created by <a href=\"http://todomvc.com\">Dylan Piercey</a></p><p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p></footer>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__rill_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_redirect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_redirect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__rill_redirect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_unhandled__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_unhandled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__rill_unhandled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__middleware_error_handler__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__middleware_preload__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages__ = __webpack_require__(27);




















/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: 'rgba(175, 47, 47, .3)' })).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_12__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_14__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_13__rill_redirect___default()('/404'))).use(__WEBPACK_IMPORTED_MODULE_15__middleware_error_handler__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_16__middleware_preload__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_17__actions__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_18__pages__["a" /* default */]).listen({ port: process.env.PORT || 8080 }, function () {
  if (!undefined && "production" === 'production') {
    console.log('Server started on port \'' + this.address().port + '\'.');
    process.send && process.send('online');
  }
}));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@rill/session");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@rill/redirect");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/unhandled");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_error__);




/**
 * Simple error handling middleware which redirects to the error page.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    var message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return next();

          case 3:
            _context.next = 10;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);
            message = _context.t0.message;


            if (!(_context.t0 instanceof __WEBPACK_IMPORTED_MODULE_2__rill_error___default.a)) {
              message = 'An unknown error has occurred.';
              console && console.error && console.error(_context.t0);
            }
            res.redirect('/500?message=' + message);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  function errorHandlerMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return errorHandlerMiddleware;
})());

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@rill/error");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    var type;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
            type = res.get('Content-Type');
            // If we are sending out a react component then we need the main JS and CSS.

            if (type && type.startsWith('text/html')) {
              res.append('Link', '</index.css>; rel=preload; as=style;');
              res.append('Link', '</polyfill.js>; rel=preload; as=script;');
              res.append('Link', '</index.js>; rel=preload; as=script;');
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function preloadMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return preloadMiddleware;
})());

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos__ = __webpack_require__(25);



// Create a nested rill router for the controller routes.
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_rill___default.a()
// Created a nested prefixed router for todo controls.
.at('/todo/*', new __WEBPACK_IMPORTED_MODULE_0_rill___default.a().post('/create', __WEBPACK_IMPORTED_MODULE_1__todos__["a" /* create */]).get('/open/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["b" /* openById */]).post('/update/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["g" /* updateById */]).get('/toggle/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["f" /* toggleById */]).get('/toggle-all', __WEBPACK_IMPORTED_MODULE_1__todos__["e" /* toggleAll */]).get('/remove/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["c" /* removeById */]).get('/remove-completed', __WEBPACK_IMPORTED_MODULE_1__todos__["d" /* removeCompleted */])));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = openById;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateById;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleById;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleAll;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeById;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeCompleted;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cuid__);


/**
 * Creates a new TODO.
 */
function create(_ref) {
  var req = _ref.req,
      res = _ref.res,
      session = _ref.session;

  var todos = session.get('todos') || [];
  if (!req.body.text) return;
  todos.push({ id: __WEBPACK_IMPORTED_MODULE_0_cuid___default()(), text: req.body.text });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Opens a todo to be updated.
 */
function openById(_ref2) {
  var req = _ref2.req,
      res = _ref2.res,
      session = _ref2.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.editing = true;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Update an existing todo.
 */
function updateById(_ref3) {
  var req = _ref3.req,
      res = _ref3.res,
      session = _ref3.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo || !req.body.text) return;
  todo.text = req.body.text;
  todo.editing = false;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles a todo's completion.
 */
function toggleById(_ref4) {
  var req = _ref4.req,
      res = _ref4.res,
      session = _ref4.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.completed = !todo.completed;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles all todos completion.
 */
function toggleAll(_ref5) {
  var req = _ref5.req,
      res = _ref5.res,
      session = _ref5.session;

  var todos = session.get('todos') || [];
  todos.forEach(function (todo) {
    todo.completed = !todo.completed;
  });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes an existing todo.
 */
function removeById(_ref6) {
  var req = _ref6.req,
      res = _ref6.res,
      session = _ref6.session;

  var todos = session.get('todos') || [];
  todos.splice(todos.findIndex(function (todo) {
    return todo.id === req.params.id;
  }), 1);
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes all completed todos.
 */
function removeCompleted(_ref7) {
  var req = _ref7.req,
      res = _ref7.res,
      session = _ref7.session;

  var todos = session.get('todos') || [];
  session.set('todos', todos.filter(function (todo) {
    return !todo.completed;
  }));
  res.redirect('back');
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_page__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_marko__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_marko__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__home_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__500_marko__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__500_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__500_marko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__404_marko__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__404_marko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__404_marko__);








/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().get(__WEBPACK_IMPORTED_MODULE_2__rill_page___default.a.html({ lang: 'en', 'data-framework': 'Rill' }).meta({ charset: 'utf-8' }).meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }).title('TodoMVC').meta({ name: 'description', content: 'Todo MVC app using Rill and Marko.' }).link({ rel: 'stylesheet', href: '/index.css' }).script({ src: '/polyfill.js', async: true }).script({ src: '/index.js', async: true })).get('/404', __WEBPACK_IMPORTED_MODULE_3__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_6__404_marko___default.a)).get('/500', function (_ref, next) {
  var req = _ref.req,
      locals = _ref.locals;

  locals.message = req.query.message;
  return next();
}, __WEBPACK_IMPORTED_MODULE_3__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_5__500_marko___default.a)).get('/:filter(all|pending|completed)?', function (_ref2, next) {
  var req = _ref2.req,
      session = _ref2.session,
      locals = _ref2.locals;

  locals.todos = session.get('todos') || [];
  locals.filter = req.params.filter || 'all';
  return next();
}, __WEBPACK_IMPORTED_MODULE_3__rill_marko___default()(__WEBPACK_IMPORTED_MODULE_4__home_marko___default.a)));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@rill/page");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@rill/marko");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    Header_template = __webpack_require__(32),
    marko_helpers = __webpack_require__(1),
    marko_loadTag = marko_helpers.t,
    Header_tag = marko_loadTag(Header_template),
    TodoList_template = __webpack_require__(33),
    TodoList_tag = marko_loadTag(TodoList_template),
    Footer_template = __webpack_require__(3),
    Footer_tag = marko_loadTag(Footer_template);

function render(input, out) {
  var data = input;

  const { todos, filter } = out.global;

  out.w("<section class=\"todoapp\">");

  Header_tag({}, out);

  if (todos.length) {
    TodoList_tag({
        filter: filter,
        todos: todos
      }, out);
  }

  out.w("</section>");

  Footer_tag({
      renderBody: function renderBody(out) {
        out.w("<h3>Go ahead, disable JavaScript.</h3><p>Single-click to edit a todo</p>");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/Header.marko",
      "../components/TodoList.marko",
      "../components/Footer.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename);

function render(input, out) {
  var data = input;

  out.w("<header class=\"header\"><h1>todos</h1><form class=\"create-form\" action=\"/app/todo/create\" method=\"POST\" autocomplete=\"off\"><input class=\"new-todo\" name=\"text\" placeholder=\"What needs to be done?\" autocomplete=\"off\" autofocus><button type=\"submit\"></button></form></header>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(1),
    marko_forEach = marko_helpers.f,
    TodoItem_template = __webpack_require__(34),
    marko_loadTag = marko_helpers.t,
    TodoItem_tag = marko_loadTag(TodoItem_template),
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  const { todos, filter } = input
  const completed = todos.filter(todo => todo.completed)
  const pending = todos.filter(todo => !todo.completed)
  const display = (
    filter === 'all' ? todos
    : filter === 'pending' ? pending
    : filter === 'completed' ? completed
    : null
  )

  out.w("<section class=\"main\"><a href=\"/app/todo/toggle-all\"><input class=\"toggle-all\" type=\"checkbox\"><label for=\"toggle-all\">Mark all as complete</label></a><ul class=\"todo-list\">");

  marko_forEach(display, function(todo) {
    TodoItem_tag({
        todo: todo
      }, out);
  });

  out.w("</ul></section><footer class=\"footer\"><span class=\"todo-count\"><strong>" +
    marko_escapeXml(pending.length) +
    "</strong> item left</span><ul class=\"filters\"><li><a" +
    marko_classAttr({
      selected: filter === "all"
    }) +
    " href=\"/\">All</a></li><li><a" +
    marko_classAttr({
      selected: filter === "pending"
    }) +
    " href=\"/pending\">Active</a></li><li><a" +
    marko_classAttr({
      selected: filter === "completed"
    }) +
    " href=\"/completed\">Completed</a></li></ul><form action=\"/app/todo/remove-completed\"><button type=\"submit\" class=\"clear-completed\">Clear completed</button></form></footer>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./TodoItem.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(1),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  const { id, completed, editing, text } = input.todo;

  out.w("<li" +
    marko_classAttr({
      completed: completed,
      editing: editing
    }) +
    "><div class=\"view\"><a" +
    marko_attr("href", (`/app/todo/toggle/${id}`)) +
    "><input class=\"toggle\" type=\"checkbox\"" +
    marko_attr("checked", completed) +
    "><label></label></a><a" +
    marko_attr("href", (`/app/todo/open/${id}`)) +
    "><label>" +
    marko_escapeXml(text) +
    "</label></a><form" +
    marko_attr("action", (`/app/todo/remove/${id}`)) +
    "><button class=\"destroy\" type=\"submit\"></button></form></div>");

  if (editing) {
    out.w("<form class=\"update-form\"" +
      marko_attr("action", (`/app/todo/update/${id}`)) +
      " method=\"POST\"><input class=\"edit\" name=\"text\"" +
      marko_attr("value", text) +
      " autofocus><button type=\"submit\"></button></form>");
  }

  out.w("</li>");
}

marko_template._ = render;

marko_template.meta = {};

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("marko/src/taglibs/core/include-tag");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(1),
    marko_escapeXml = marko_helpers.x,
    Footer_template = __webpack_require__(3),
    marko_loadTag = marko_helpers.t,
    Footer_tag = marko_loadTag(Footer_template);

function render(input, out) {
  var data = input;

  Footer_tag({
      class: "info",
      renderBody: function renderBody(out) {
        out.w("<h3>" +
          marko_escapeXml(out.global.message) +
          "</h3><h2><a href=\"/\">Click here to go back</a></h2>");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/Footer.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.4.27 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    Footer_template = __webpack_require__(3),
    marko_helpers = __webpack_require__(1),
    marko_loadTag = marko_helpers.t,
    Footer_tag = marko_loadTag(Footer_template);

function render(input, out) {
  var data = input;

  Footer_tag({
      renderBody: function renderBody(out) {
        out.w("<h3>The requested page could not be found.</h3><h2><a href=\"/\">Click here to go back</a></h2>");
      }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../components/Footer.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5OTFhMzU4YjdkNDdlMzBkYTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya28vc3JjL2h0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLm1hcmtvIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V0YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9leHBvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvdW5oYW5kbGVkXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXJyb3JcIiIsIndlYnBhY2s6Ly8vYXBwL21pZGRsZXdhcmUvcHJlbG9hZC5qcyIsIndlYnBhY2s6Ly8vYXBwL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImN1aWRcIiIsIndlYnBhY2s6Ly8vYXBwL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL21hcmtvXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2hvbWUubWFya28iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLm1hcmtvIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0Lm1hcmtvIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9JdGVtLm1hcmtvIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvNTAwLm1hcmtvIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy80MDQubWFya28iXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjE5OTFhMzU4YjdkNDdlMzBkYTMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1hcmtvL3NyYy9odG1sXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJpbGxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21waWxlZCB1c2luZyBtYXJrb0A0LjQuMjcgLSBETyBOT1QgRURJVFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYXJrb190ZW1wbGF0ZSA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9odG1sXCIpLnQoX19maWxlbmFtZSksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBpbmNsdWRlX3RhZyA9IG1hcmtvX2xvYWRUYWcocmVxdWlyZShcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIikpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGZvb3RlciBpZD1cXFwiaW5mb1xcXCIgY2xhc3M9XFxcImluZm9cXFwiPlwiKTtcblxuICBpbmNsdWRlX3RhZyh7XG4gICAgICBfdGFyZ2V0OiBpbnB1dC5yZW5kZXJCb2R5XG4gICAgfSwgb3V0KTtcblxuICBvdXQudyhcIjxwPlRlbXBsYXRlIGJ5IDxhIGhyZWY9XFxcImh0dHA6Ly9zaW5kcmVzb3JodXMuY29tXFxcIj5TaW5kcmUgU29yaHVzPC9hPjwvcD48cD5DcmVhdGVkIGJ5IDxhIGhyZWY9XFxcImh0dHA6Ly90b2RvbXZjLmNvbVxcXCI+RHlsYW4gUGllcmNleTwvYT48L3A+PHA+UGFydCBvZiA8YSBocmVmPVxcXCJodHRwOi8vdG9kb212Yy5jb21cXFwiPlRvZG9NVkM8L2E+PC9wPjwvZm9vdGVyPlwiKTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIlxuICAgIF1cbiAgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLm1hcmtvXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBwb2x5ZmlsbCBmcm9tICdAcmlsbC9wb2x5ZmlsbCdcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IGJvZHkgZnJvbSAnQHJpbGwvYm9keSdcbmltcG9ydCBzZXNzaW9uIGZyb20gJ0ByaWxsL3Nlc3Npb24nXG5pbXBvcnQgcmVkaXJlY3QgZnJvbSAnQHJpbGwvcmVkaXJlY3QnXG5pbXBvcnQgdW5oYW5kbGVkIGZyb20gJ0ByaWxsL3VuaGFuZGxlZCdcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyJ1xuaW1wb3J0IHByZWxvYWRNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9wcmVsb2FkJ1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4vcGFnZXMnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAudXNlKGhlbG1ldCgpKVxuICAudXNlKGZyZXNoKCkpXG4gIC51c2UoZXRhZygpKVxuICAudXNlKGNvbXByZXNzKCkpXG4gIC5nZXQoJy9wb2x5ZmlsbC5qcycsIHBvbHlmaWxsKCkpXG4gIC5nZXQoc2VydmUoJ2J1aWxkL3B1YmxpYycsIHsgZ3ppcDogdHJ1ZSwgY2FjaGU6IGAke21zKCczMCBkYXlzJyl9OyBpbW11dGFibGVgIH0pKVxuICAudXNlKHByb2dyZXNzKHsgc3Bpbm5lcjogZmFsc2UsIGNvbG9yOiAncmdiYSgxNzUsIDQ3LCA0NywgLjMpJyB9KSlcbiAgLnVzZShib2R5KCkpXG4gIC51c2Uoc2Vzc2lvbigpKVxuICAudXNlKGxvZ2dlcigpKVxuICAudXNlKGV4cG9zZSgpKVxuICAudXNlKHVuaGFuZGxlZChyZWRpcmVjdCgnLzQwNCcpKSlcbiAgLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKVxuICAudXNlKHByZWxvYWRNaWRkbGV3YXJlKVxuICAuYXQoJy9hcHAvKicsIGFjdGlvbnMpXG4gIC5nZXQocGFnZXMpXG4gIC5saXN0ZW4oeyBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICcke3RoaXMuYWRkcmVzcygpLnBvcnR9Jy5gKVxuICAgICAgcHJvY2Vzcy5zZW5kICYmIHByb2Nlc3Muc2VuZCgnb25saW5lJylcbiAgICB9XG4gIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2hlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZnJlc2hcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ldGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9jb21wcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V4cG9zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ib2R5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvYm9keVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc2Vzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWRpcmVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSHR0cEVycm9yIGZyb20gJ0ByaWxsL2Vycm9yJ1xuXG4vKipcbiAqIFNpbXBsZSBlcnJvciBoYW5kbGluZyBtaWRkbGV3YXJlIHdoaWNoIHJlZGlyZWN0cyB0byB0aGUgZXJyb3IgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXJyb3JIYW5kbGVyTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5leHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsZXQgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yKSkge1xuICAgICAgbWVzc2FnZSA9ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nXG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IgJiYgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIHJlcy5yZWRpcmVjdChgLzUwMD9tZXNzYWdlPSR7bWVzc2FnZX1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2Vycm9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXJyb3JcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBNaWRkbGV3YXJlIHdoaWNoIHdpbGwgdGVsbCB0aGUgYnJvd3NlciB0byBwcmVsb2FkIGZpbGVzXG4gKiB3ZSBrbm93IGFyZSBnb2luZyB0byBiZSBuZWVkZWQgdG8gcmVuZGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICBhd2FpdCBuZXh0KClcbiAgY29uc3QgdHlwZSA9IHJlcy5nZXQoJ0NvbnRlbnQtVHlwZScpXG4gIC8vIElmIHdlIGFyZSBzZW5kaW5nIG91dCBhIHJlYWN0IGNvbXBvbmVudCB0aGVuIHdlIG5lZWQgdGhlIG1haW4gSlMgYW5kIENTUy5cbiAgaWYgKHR5cGUgJiYgdHlwZS5zdGFydHNXaXRoKCd0ZXh0L2h0bWwnKSkge1xuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgICByZXMuYXBwZW5kKCdMaW5rJywgJzwvcG9seWZpbGwuanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvcHJlbG9hZC5qcyIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHRvZG9DdHJsIGZyb20gJy4vdG9kb3MnXG5cbi8vIENyZWF0ZSBhIG5lc3RlZCByaWxsIHJvdXRlciBmb3IgdGhlIGNvbnRyb2xsZXIgcm91dGVzLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC8vIENyZWF0ZWQgYSBuZXN0ZWQgcHJlZml4ZWQgcm91dGVyIGZvciB0b2RvIGNvbnRyb2xzLlxuICAuYXQoJy90b2RvLyonLCBuZXcgUm91dGVyKClcbiAgICAucG9zdCgnL2NyZWF0ZScsIHRvZG9DdHJsLmNyZWF0ZSlcbiAgICAuZ2V0KCcvb3Blbi86aWQnLCB0b2RvQ3RybC5vcGVuQnlJZClcbiAgICAucG9zdCgnL3VwZGF0ZS86aWQnLCB0b2RvQ3RybC51cGRhdGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUvOmlkJywgdG9kb0N0cmwudG9nZ2xlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLWFsbCcsIHRvZG9DdHJsLnRvZ2dsZUFsbClcbiAgICAuZ2V0KCcvcmVtb3ZlLzppZCcsIHRvZG9DdHJsLnJlbW92ZUJ5SWQpXG4gICAgLmdldCgnL3JlbW92ZS1jb21wbGV0ZWQnLCB0b2RvQ3RybC5yZW1vdmVDb21wbGV0ZWQpXG4gIClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCB1aWQgZnJvbSAnY3VpZCdcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFRPRE8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGlmICghcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG9zLnB1c2goeyBpZDogdWlkKCksIHRleHQ6IHJlcS5ib2R5LnRleHQgfSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogT3BlbnMgYSB0b2RvIHRvIGJlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmVkaXRpbmcgPSB0cnVlXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyB0b2RvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8gfHwgIXJlcS5ib2R5LnRleHQpIHJldHVyblxuICB0b2RvLnRleHQgPSByZXEuYm9keS50ZXh0XG4gIHRvZG8uZWRpdGluZyA9IGZhbHNlXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFRvZ2dsZXMgYSB0b2RvJ3MgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvKSByZXR1cm5cbiAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWRcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhbGwgdG9kb3MgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFsbCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHsgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQgfSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBleGlzdGluZyB0b2RvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgdG9kb3Muc3BsaWNlKHRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpLCAxKVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBjb21wbGV0ZWQgdG9kb3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCkpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2FjdGlvbnMvdG9kb3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjdWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3VpZFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IHBhZ2UgZnJvbSAnQHJpbGwvcGFnZSdcbmltcG9ydCByZW5kZXIgZnJvbSAnQHJpbGwvbWFya28nXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLm1hcmtvJ1xuaW1wb3J0IGVycm9yUGFnZSBmcm9tICcuLzUwMC5tYXJrbydcbmltcG9ydCBtaXNzaW5nUGFnZSBmcm9tICcuLzQwNC5tYXJrbydcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC5nZXQocGFnZVxuICAgIC5odG1sKHsgbGFuZzogJ2VuJywgJ2RhdGEtZnJhbWV3b3JrJzogJ1JpbGwnIH0pXG4gICAgLm1ldGEoeyBjaGFyc2V0OiAndXRmLTgnIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAndmlld3BvcnQnLCBjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgfSlcbiAgICAudGl0bGUoJ1RvZG9NVkMnKVxuICAgIC5tZXRhKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ1RvZG8gTVZDIGFwcCB1c2luZyBSaWxsIGFuZCBNYXJrby4nIH0pXG4gICAgLmxpbmsoeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy9pbmRleC5jc3MnIH0pXG4gICAgLnNjcmlwdCh7IHNyYzogJy9wb2x5ZmlsbC5qcycsIGFzeW5jOiB0cnVlIH0pXG4gICAgLnNjcmlwdCh7IHNyYzogJy9pbmRleC5qcycsIGFzeW5jOiB0cnVlIH0pXG4gIClcbiAgLmdldCgnLzQwNCcsIHJlbmRlcihtaXNzaW5nUGFnZSkpXG4gIC5nZXQoJy81MDAnLFxuICAgICh7IHJlcSwgbG9jYWxzIH0sIG5leHQpID0+IHtcbiAgICAgIGxvY2Fscy5tZXNzYWdlID0gcmVxLnF1ZXJ5Lm1lc3NhZ2VcbiAgICAgIHJldHVybiBuZXh0KClcbiAgICB9LFxuICAgIHJlbmRlcihlcnJvclBhZ2UpXG4gIClcbiAgLmdldCgnLzpmaWx0ZXIoYWxsfHBlbmRpbmd8Y29tcGxldGVkKT8nLFxuICAgICh7IHJlcSwgc2Vzc2lvbiwgbG9jYWxzIH0sIG5leHQpID0+IHtcbiAgICAgIGxvY2Fscy50b2RvcyA9IChzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXSlcbiAgICAgIGxvY2Fscy5maWx0ZXIgPSByZXEucGFyYW1zLmZpbHRlciB8fCAnYWxsJ1xuICAgICAgcmV0dXJuIG5leHQoKVxuICAgIH0sXG4gICAgcmVuZGVyKGhvbWVQYWdlKVxuICApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9wYWdlcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL21hcmtvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbWFya29cIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI3IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIEhlYWRlcl90ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0hlYWRlci5tYXJrb1wiKSxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19sb2FkVGFnID0gbWFya29faGVscGVycy50LFxuICAgIEhlYWRlcl90YWcgPSBtYXJrb19sb2FkVGFnKEhlYWRlcl90ZW1wbGF0ZSksXG4gICAgVG9kb0xpc3RfdGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdC5tYXJrb1wiKSxcbiAgICBUb2RvTGlzdF90YWcgPSBtYXJrb19sb2FkVGFnKFRvZG9MaXN0X3RlbXBsYXRlKSxcbiAgICBGb290ZXJfdGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Gb290ZXIubWFya29cIiksXG4gICAgRm9vdGVyX3RhZyA9IG1hcmtvX2xvYWRUYWcoRm9vdGVyX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBjb25zdCB7IHRvZG9zLCBmaWx0ZXIgfSA9IG91dC5nbG9iYWw7XG5cbiAgb3V0LncoXCI8c2VjdGlvbiBjbGFzcz1cXFwidG9kb2FwcFxcXCI+XCIpO1xuXG4gIEhlYWRlcl90YWcoe30sIG91dCk7XG5cbiAgaWYgKHRvZG9zLmxlbmd0aCkge1xuICAgIFRvZG9MaXN0X3RhZyh7XG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxuICAgICAgICB0b2RvczogdG9kb3NcbiAgICAgIH0sIG91dCk7XG4gIH1cblxuICBvdXQudyhcIjwvc2VjdGlvbj5cIik7XG5cbiAgRm9vdGVyX3RhZyh7XG4gICAgICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KG91dCkge1xuICAgICAgICBvdXQudyhcIjxoMz5HbyBhaGVhZCwgZGlzYWJsZSBKYXZhU2NyaXB0LjwvaDM+PHA+U2luZ2xlLWNsaWNrIHRvIGVkaXQgYSB0b2RvPC9wPlwiKTtcbiAgICAgIH1cbiAgICB9LCBvdXQpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gcmVuZGVyO1xuXG5tYXJrb190ZW1wbGF0ZS5tZXRhID0ge1xuICAgIHRhZ3M6IFtcbiAgICAgIFwiLi4vY29tcG9uZW50cy9IZWFkZXIubWFya29cIixcbiAgICAgIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdC5tYXJrb1wiLFxuICAgICAgXCIuLi9jb21wb25lbnRzL0Zvb3Rlci5tYXJrb1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvcGFnZXMvaG9tZS5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI3IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIG91dC53KFwiPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj48aDE+dG9kb3M8L2gxPjxmb3JtIGNsYXNzPVxcXCJjcmVhdGUtZm9ybVxcXCIgYWN0aW9uPVxcXCIvYXBwL3RvZG8vY3JlYXRlXFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj48aW5wdXQgY2xhc3M9XFxcIm5ldy10b2RvXFxcIiBuYW1lPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1xcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIGF1dG9mb2N1cz48YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+PC9idXR0b24+PC9mb3JtPjwvaGVhZGVyPlwiKTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9IZWFkZXIubWFya29cbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNyAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19mb3JFYWNoID0gbWFya29faGVscGVycy5mLFxuICAgIFRvZG9JdGVtX3RlbXBsYXRlID0gcmVxdWlyZShcIi4vVG9kb0l0ZW0ubWFya29cIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBUb2RvSXRlbV90YWcgPSBtYXJrb19sb2FkVGFnKFRvZG9JdGVtX3RlbXBsYXRlKSxcbiAgICBtYXJrb19lc2NhcGVYbWwgPSBtYXJrb19oZWxwZXJzLngsXG4gICAgbWFya29fY2xhc3NBdHRyID0gbWFya29faGVscGVycy5jYTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBjb25zdCB7IHRvZG9zLCBmaWx0ZXIgfSA9IGlucHV0XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKVxuICBjb25zdCBwZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKVxuICBjb25zdCBkaXNwbGF5ID0gKFxuICAgIGZpbHRlciA9PT0gJ2FsbCcgPyB0b2Rvc1xuICAgIDogZmlsdGVyID09PSAncGVuZGluZycgPyBwZW5kaW5nXG4gICAgOiBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnID8gY29tcGxldGVkXG4gICAgOiBudWxsXG4gIClcblxuICBvdXQudyhcIjxzZWN0aW9uIGNsYXNzPVxcXCJtYWluXFxcIj48YSBocmVmPVxcXCIvYXBwL3RvZG8vdG9nZ2xlLWFsbFxcXCI+PGlucHV0IGNsYXNzPVxcXCJ0b2dnbGUtYWxsXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCI+PGxhYmVsIGZvcj1cXFwidG9nZ2xlLWFsbFxcXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPjwvYT48dWwgY2xhc3M9XFxcInRvZG8tbGlzdFxcXCI+XCIpO1xuXG4gIG1hcmtvX2ZvckVhY2goZGlzcGxheSwgZnVuY3Rpb24odG9kbykge1xuICAgIFRvZG9JdGVtX3RhZyh7XG4gICAgICAgIHRvZG86IHRvZG9cbiAgICAgIH0sIG91dCk7XG4gIH0pO1xuXG4gIG91dC53KFwiPC91bD48L3NlY3Rpb24+PGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj48c3BhbiBjbGFzcz1cXFwidG9kby1jb3VudFxcXCI+PHN0cm9uZz5cIiArXG4gICAgbWFya29fZXNjYXBlWG1sKHBlbmRpbmcubGVuZ3RoKSArXG4gICAgXCI8L3N0cm9uZz4gaXRlbSBsZWZ0PC9zcGFuPjx1bCBjbGFzcz1cXFwiZmlsdGVyc1xcXCI+PGxpPjxhXCIgK1xuICAgIG1hcmtvX2NsYXNzQXR0cih7XG4gICAgICBzZWxlY3RlZDogZmlsdGVyID09PSBcImFsbFwiXG4gICAgfSkgK1xuICAgIFwiIGhyZWY9XFxcIi9cXFwiPkFsbDwvYT48L2xpPjxsaT48YVwiICtcbiAgICBtYXJrb19jbGFzc0F0dHIoe1xuICAgICAgc2VsZWN0ZWQ6IGZpbHRlciA9PT0gXCJwZW5kaW5nXCJcbiAgICB9KSArXG4gICAgXCIgaHJlZj1cXFwiL3BlbmRpbmdcXFwiPkFjdGl2ZTwvYT48L2xpPjxsaT48YVwiICtcbiAgICBtYXJrb19jbGFzc0F0dHIoe1xuICAgICAgc2VsZWN0ZWQ6IGZpbHRlciA9PT0gXCJjb21wbGV0ZWRcIlxuICAgIH0pICtcbiAgICBcIiBocmVmPVxcXCIvY29tcGxldGVkXFxcIj5Db21wbGV0ZWQ8L2E+PC9saT48L3VsPjxmb3JtIGFjdGlvbj1cXFwiL2FwcC90b2RvL3JlbW92ZS1jb21wbGV0ZWRcXFwiPjxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiY2xlYXItY29tcGxldGVkXFxcIj5DbGVhciBjb21wbGV0ZWQ8L2J1dHRvbj48L2Zvcm0+PC9mb290ZXI+XCIpO1xufVxuXG5tYXJrb190ZW1wbGF0ZS5fID0gcmVuZGVyO1xuXG5tYXJrb190ZW1wbGF0ZS5tZXRhID0ge1xuICAgIHRhZ3M6IFtcbiAgICAgIFwiLi9Ub2RvSXRlbS5tYXJrb1wiXG4gICAgXVxuICB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC5tYXJrb1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29tcGlsZWQgdXNpbmcgbWFya29ANC40LjI3IC0gRE8gTk9UIEVESVRcblwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFya29fdGVtcGxhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvaHRtbFwiKS50KF9fZmlsZW5hbWUpLFxuICAgIG1hcmtvX2hlbHBlcnMgPSByZXF1aXJlKFwibWFya28vc3JjL3J1bnRpbWUvaHRtbC9oZWxwZXJzXCIpLFxuICAgIG1hcmtvX2F0dHIgPSBtYXJrb19oZWxwZXJzLmEsXG4gICAgbWFya29fZXNjYXBlWG1sID0gbWFya29faGVscGVycy54LFxuICAgIG1hcmtvX2NsYXNzQXR0ciA9IG1hcmtvX2hlbHBlcnMuY2E7XG5cbmZ1bmN0aW9uIHJlbmRlcihpbnB1dCwgb3V0KSB7XG4gIHZhciBkYXRhID0gaW5wdXQ7XG5cbiAgY29uc3QgeyBpZCwgY29tcGxldGVkLCBlZGl0aW5nLCB0ZXh0IH0gPSBpbnB1dC50b2RvO1xuXG4gIG91dC53KFwiPGxpXCIgK1xuICAgIG1hcmtvX2NsYXNzQXR0cih7XG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgIGVkaXRpbmc6IGVkaXRpbmdcbiAgICB9KSArXG4gICAgXCI+PGRpdiBjbGFzcz1cXFwidmlld1xcXCI+PGFcIiArXG4gICAgbWFya29fYXR0cihcImhyZWZcIiwgKGAvYXBwL3RvZG8vdG9nZ2xlLyR7aWR9YCkpICtcbiAgICBcIj48aW5wdXQgY2xhc3M9XFxcInRvZ2dsZVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiXCIgK1xuICAgIG1hcmtvX2F0dHIoXCJjaGVja2VkXCIsIGNvbXBsZXRlZCkgK1xuICAgIFwiPjxsYWJlbD48L2xhYmVsPjwvYT48YVwiICtcbiAgICBtYXJrb19hdHRyKFwiaHJlZlwiLCAoYC9hcHAvdG9kby9vcGVuLyR7aWR9YCkpICtcbiAgICBcIj48bGFiZWw+XCIgK1xuICAgIG1hcmtvX2VzY2FwZVhtbCh0ZXh0KSArXG4gICAgXCI8L2xhYmVsPjwvYT48Zm9ybVwiICtcbiAgICBtYXJrb19hdHRyKFwiYWN0aW9uXCIsIChgL2FwcC90b2RvL3JlbW92ZS8ke2lkfWApKSArXG4gICAgXCI+PGJ1dHRvbiBjbGFzcz1cXFwiZGVzdHJveVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj48L2J1dHRvbj48L2Zvcm0+PC9kaXY+XCIpO1xuXG4gIGlmIChlZGl0aW5nKSB7XG4gICAgb3V0LncoXCI8Zm9ybSBjbGFzcz1cXFwidXBkYXRlLWZvcm1cXFwiXCIgK1xuICAgICAgbWFya29fYXR0cihcImFjdGlvblwiLCAoYC9hcHAvdG9kby91cGRhdGUvJHtpZH1gKSkgK1xuICAgICAgXCIgbWV0aG9kPVxcXCJQT1NUXFxcIj48aW5wdXQgY2xhc3M9XFxcImVkaXRcXFwiIG5hbWU9XFxcInRleHRcXFwiXCIgK1xuICAgICAgbWFya29fYXR0cihcInZhbHVlXCIsIHRleHQpICtcbiAgICAgIFwiIGF1dG9mb2N1cz48YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+PC9idXR0b24+PC9mb3JtPlwiKTtcbiAgfVxuXG4gIG91dC53KFwiPC9saT5cIik7XG59XG5cbm1hcmtvX3RlbXBsYXRlLl8gPSByZW5kZXI7XG5cbm1hcmtvX3RlbXBsYXRlLm1ldGEgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvVG9kb0l0ZW0ubWFya29cbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvL3NyYy90YWdsaWJzL2NvcmUvaW5jbHVkZS10YWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtYXJrby9zcmMvdGFnbGlicy9jb3JlL2luY2x1ZGUtdGFnXCJcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNyAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBtYXJrb19oZWxwZXJzID0gcmVxdWlyZShcIm1hcmtvL3NyYy9ydW50aW1lL2h0bWwvaGVscGVyc1wiKSxcbiAgICBtYXJrb19lc2NhcGVYbWwgPSBtYXJrb19oZWxwZXJzLngsXG4gICAgRm9vdGVyX3RlbXBsYXRlID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvRm9vdGVyLm1hcmtvXCIpLFxuICAgIG1hcmtvX2xvYWRUYWcgPSBtYXJrb19oZWxwZXJzLnQsXG4gICAgRm9vdGVyX3RhZyA9IG1hcmtvX2xvYWRUYWcoRm9vdGVyX3RlbXBsYXRlKTtcblxuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBvdXQpIHtcbiAgdmFyIGRhdGEgPSBpbnB1dDtcblxuICBGb290ZXJfdGFnKHtcbiAgICAgIGNsYXNzOiBcImluZm9cIixcbiAgICAgIHJlbmRlckJvZHk6IGZ1bmN0aW9uIHJlbmRlckJvZHkob3V0KSB7XG4gICAgICAgIG91dC53KFwiPGgzPlwiICtcbiAgICAgICAgICBtYXJrb19lc2NhcGVYbWwob3V0Lmdsb2JhbC5tZXNzYWdlKSArXG4gICAgICAgICAgXCI8L2gzPjxoMj48YSBocmVmPVxcXCIvXFxcIj5DbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+PC9oMj5cIik7XG4gICAgICB9XG4gICAgfSwgb3V0KTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBcIi4uL2NvbXBvbmVudHMvRm9vdGVyLm1hcmtvXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9wYWdlcy81MDAubWFya29cbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbXBpbGVkIHVzaW5nIG1hcmtvQDQuNC4yNyAtIERPIE5PVCBFRElUXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG1hcmtvX3RlbXBsYXRlID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya28vc3JjL2h0bWxcIikudChfX2ZpbGVuYW1lKSxcbiAgICBGb290ZXJfdGVtcGxhdGUgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Gb290ZXIubWFya29cIiksXG4gICAgbWFya29faGVscGVycyA9IHJlcXVpcmUoXCJtYXJrby9zcmMvcnVudGltZS9odG1sL2hlbHBlcnNcIiksXG4gICAgbWFya29fbG9hZFRhZyA9IG1hcmtvX2hlbHBlcnMudCxcbiAgICBGb290ZXJfdGFnID0gbWFya29fbG9hZFRhZyhGb290ZXJfdGVtcGxhdGUpO1xuXG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIG91dCkge1xuICB2YXIgZGF0YSA9IGlucHV0O1xuXG4gIEZvb3Rlcl90YWcoe1xuICAgICAgcmVuZGVyQm9keTogZnVuY3Rpb24gcmVuZGVyQm9keShvdXQpIHtcbiAgICAgICAgb3V0LncoXCI8aDM+VGhlIHJlcXVlc3RlZCBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC48L2gzPjxoMj48YSBocmVmPVxcXCIvXFxcIj5DbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+PC9oMj5cIik7XG4gICAgICB9XG4gICAgfSwgb3V0KTtcbn1cblxubWFya29fdGVtcGxhdGUuXyA9IHJlbmRlcjtcblxubWFya29fdGVtcGxhdGUubWV0YSA9IHtcbiAgICB0YWdzOiBbXG4gICAgICBcIi4uL2NvbXBvbmVudHMvRm9vdGVyLm1hcmtvXCJcbiAgICBdXG4gIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9wYWdlcy80MDQubWFya29cbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUM3REE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FDN0VBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hDQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9