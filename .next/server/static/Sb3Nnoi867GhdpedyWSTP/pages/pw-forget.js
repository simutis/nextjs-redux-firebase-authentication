module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LANDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PASSWORD_FORGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT; });
var LANDING = '/';
var SIGN_UP = '/signup';
var SIGN_IN = '/signin';
var PASSWORD_FORGET = '/pw-forget';
var HOME = '/home';
var ACCOUNT = '/account';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var firebase_namespaceObject = {};
__webpack_require__.r(firebase_namespaceObject);
__webpack_require__.d(firebase_namespaceObject, "db", function() { return db; });
__webpack_require__.d(firebase_namespaceObject, "auth", function() { return auth; });
var firebase_auth_namespaceObject = {};
__webpack_require__.r(firebase_auth_namespaceObject);
__webpack_require__.d(firebase_auth_namespaceObject, "doCreateUserWithEmailAndPassword", function() { return auth_doCreateUserWithEmailAndPassword; });
__webpack_require__.d(firebase_auth_namespaceObject, "doSignInWithEmailAndPassword", function() { return auth_doSignInWithEmailAndPassword; });
__webpack_require__.d(firebase_auth_namespaceObject, "doSignOut", function() { return auth_doSignOut; });
__webpack_require__.d(firebase_auth_namespaceObject, "doPasswordReset", function() { return auth_doPasswordReset; });
__webpack_require__.d(firebase_auth_namespaceObject, "doPasswordUpdate", function() { return auth_doPasswordUpdate; });
var db_namespaceObject = {};
__webpack_require__.r(db_namespaceObject);
__webpack_require__.d(db_namespaceObject, "doCreateUser", function() { return db_doCreateUser; });
__webpack_require__.d(db_namespaceObject, "onceGetUsers", function() { return db_onceGetUsers; });

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(5);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(10);

// EXTERNAL MODULE: external "firebase/database"
var database_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/firebase/firebase.js



var prodConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID
};
var devConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID
};
var config =  true ? prodConfig : undefined;

if (!app_default.a.apps.length) {
  app_default.a.initializeApp(config);
}

var db = app_default.a.database();
var auth = app_default.a.auth();

// CONCATENATED MODULE: ./src/firebase/auth.js
 // Sign Up

var auth_doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}; // Sign In

var auth_doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}; // Sign out

var auth_doSignOut = function doSignOut() {
  return auth.signOut();
}; // Password Reset

var auth_doPasswordReset = function doPasswordReset(email) {
  return auth.sendPasswordResetEmail(email);
}; // Password Change

var auth_doPasswordUpdate = function doPasswordUpdate(password) {
  return auth.currentUser.updatePassword(password);
};
// CONCATENATED MODULE: ./src/firebase/db.js
 // User API

var db_doCreateUser = function doCreateUser(id, username, email) {
  return db.ref("users/".concat(id)).set({
    username: username,
    email: email
  });
};
var db_onceGetUsers = function onceGetUsers() {
  return db.ref('users').once('value');
}; // Other db APIs ...
// CONCATENATED MODULE: ./src/firebase/index.js
/* concated harmony reexport auth */__webpack_require__.d(__webpack_exports__, "a", function() { return firebase_auth_namespaceObject; });
/* concated harmony reexport db */__webpack_require__.d(__webpack_exports__, "b", function() { return db_namespaceObject; });
/* concated harmony reexport firebase */__webpack_require__.d(__webpack_exports__, "c", function() { return firebase_namespaceObject; });





/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(8);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__(1);

// EXTERNAL MODULE: ./src/firebase/index.js + 3 modules
var firebase = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/SignOut/index.js



var SignOut_SignOutButton = function SignOutButton() {
  return external_react_default.a.createElement("button", {
    type: "button",
    onClick: firebase["a" /* auth */].doSignOut
  }, "Sign Out");
};

/* harmony default export */ var SignOut = (SignOut_SignOutButton);
// CONCATENATED MODULE: ./src/components/Navigation/index.js






var Navigation_Navigation = function Navigation(_ref) {
  var authUser = _ref.authUser;
  return external_react_default.a.createElement("div", null, authUser ? external_react_default.a.createElement(Navigation_NavigationAuth, null) : external_react_default.a.createElement(Navigation_NavigationNonAuth, null));
};

var Navigation_NavigationAuth = function NavigationAuth() {
  return external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: routes["c" /* LANDING */]
  }, external_react_default.a.createElement("a", null, "Landing"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: routes["b" /* HOME */]
  }, external_react_default.a.createElement("a", null, "Home"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: routes["a" /* ACCOUNT */]
  }, external_react_default.a.createElement("a", null, "Account"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(SignOut, null)));
};

var Navigation_NavigationNonAuth = function NavigationNonAuth() {
  return external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: routes["c" /* LANDING */]
  }, external_react_default.a.createElement("a", null, "Landing"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: routes["e" /* SIGN_IN */]
  }, external_react_default.a.createElement("a", null, "Sign In"))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

/* harmony default export */ var components_Navigation = (Object(external_react_redux_["connect"])(mapStateToProps)(Navigation_Navigation));
// CONCATENATED MODULE: ./src/components/Session/withAuthentication.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var withAuthentication_withAuthentication = function withAuthentication(Component) {
  var WithAuthentication =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithAuthentication, _React$Component);

    function WithAuthentication() {
      _classCallCheck(this, WithAuthentication);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithAuthentication).apply(this, arguments));
    }

    _createClass(WithAuthentication, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var onSetAuthUser = this.props.onSetAuthUser;
        firebase["c" /* firebase */].auth.onAuthStateChanged(function (authUser) {
          authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return external_react_default.a.createElement(Component, this.props);
      }
    }]);

    return WithAuthentication;
  }(external_react_default.a.Component);

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onSetAuthUser: function onSetAuthUser(authUser) {
        return dispatch({
          type: 'AUTH_USER_SET',
          authUser: authUser
        });
      }
    };
  };

  return Object(external_react_redux_["connect"])(null, mapDispatchToProps)(WithAuthentication);
};

/* harmony default export */ var Session_withAuthentication = (withAuthentication_withAuthentication);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/Session/withAuthorization.js
function withAuthorization_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withAuthorization_typeof = function _typeof(obj) { return typeof obj; }; } else { withAuthorization_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withAuthorization_typeof(obj); }

function withAuthorization_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withAuthorization_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withAuthorization_createClass(Constructor, protoProps, staticProps) { if (protoProps) withAuthorization_defineProperties(Constructor.prototype, protoProps); if (staticProps) withAuthorization_defineProperties(Constructor, staticProps); return Constructor; }

function withAuthorization_possibleConstructorReturn(self, call) { if (call && (withAuthorization_typeof(call) === "object" || typeof call === "function")) { return call; } return withAuthorization_assertThisInitialized(self); }

function withAuthorization_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withAuthorization_getPrototypeOf(o) { withAuthorization_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withAuthorization_getPrototypeOf(o); }

function withAuthorization_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withAuthorization_setPrototypeOf(subClass, superClass); }

function withAuthorization_setPrototypeOf(o, p) { withAuthorization_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withAuthorization_setPrototypeOf(o, p); }






var withAuthorization_withAuthorization = function withAuthorization(needsAuthorization) {
  return function (Component) {
    var WithAuthorization =
    /*#__PURE__*/
    function (_React$Component) {
      withAuthorization_inherits(WithAuthorization, _React$Component);

      function WithAuthorization() {
        withAuthorization_classCallCheck(this, WithAuthorization);

        return withAuthorization_possibleConstructorReturn(this, withAuthorization_getPrototypeOf(WithAuthorization).apply(this, arguments));
      }

      withAuthorization_createClass(WithAuthorization, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          firebase["c" /* firebase */].auth.onAuthStateChanged(function (authUser) {
            if (!authUser && needsAuthorization) {
              router_default.a.push(routes["e" /* SIGN_IN */]);
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(Component, this.props);
        }
      }]);

      return WithAuthorization;
    }(external_react_default.a.Component);

    return WithAuthorization;
  };
};

/* harmony default export */ var Session_withAuthorization = (withAuthorization_withAuthorization);
// CONCATENATED MODULE: ./src/components/App/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWithAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppWithAuthorization; });







var App_App = function App(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-3766902959" + " " + "app"
  }, external_react_default.a.createElement(components_Navigation, null), external_react_default.a.createElement("hr", {
    className: "jsx-3766902959"
  }), children, external_react_default.a.createElement("hr", {
    className: "jsx-3766902959"
  }), external_react_default.a.createElement("span", {
    className: "jsx-3766902959"
  }, "Found in", " ", external_react_default.a.createElement("a", {
    href: "https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE",
    className: "jsx-3766902959"
  }, "Taming the State in React")), " ", "|", " ", external_react_default.a.createElement("span", {
    className: "jsx-3766902959"
  }, "Star the", " ", external_react_default.a.createElement("a", {
    href: "https://github.com/rwieruch/nextjs-redux-firebase-authentication",
    className: "jsx-3766902959"
  }, "Repository")), " ", "|", " ", external_react_default.a.createElement("span", {
    className: "jsx-3766902959"
  }, "Receive a", " ", external_react_default.a.createElement("a", {
    href: "https://www.getrevue.co/profile/rwieruch",
    className: "jsx-3766902959"
  }, "Developer's Newsletter")), external_react_default.a.createElement(style_default.a, {
    styleId: "3766902959",
    css: [".app.jsx-3766902959{margin:20px;}"]
  }));
};

var AppWithAuthentication = Object(external_recompose_["compose"])(Session_withAuthentication, Session_withAuthorization(false))(App_App);
var AppWithAuthorization = Object(external_recompose_["compose"])(Session_withAuthentication, Session_withAuthorization(true))(App_App);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetForm", function() { return PasswordForgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetLink", function() { return PasswordForgetLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PasswordForgetPage = function PasswordForgetPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_2__[/* AppWithAuthentication */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "PasswordForget"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PasswordForgetForm, null));
};

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return _defineProperty({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  email: "",
  error: null
};

var PasswordForgetForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordForgetForm, _Component);

  function PasswordForgetForm(props) {
    var _this;

    _classCallCheck(this, PasswordForgetForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordForgetForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      var email = _this.state.email;
      _src_firebase__WEBPACK_IMPORTED_MODULE_4__[/* auth */ "a"].doPasswordReset(email).then(function () {
        _this.setState(function () {
          return _objectSpread({}, INITIAL_STATE);
        });
      }).catch(function (error) {
        _this.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    _this.state = _objectSpread({}, INITIAL_STATE);
    return _this;
  }

  _createClass(PasswordForgetForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          error = _this$state.error;
      var isInvalid = email === "";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName("email", event.target.value));
        },
        type: "text",
        placeholder: "Email Address"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: isInvalid,
        type: "submit"
      }, "Reset My Password"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, error.message));
    }
  }]);

  return PasswordForgetForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var PasswordForgetLink = function PasswordForgetLink() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_3__[/* PASSWORD_FORGET */ "d"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Forgot Password?")));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordForgetPage);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);