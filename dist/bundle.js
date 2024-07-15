/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+CA:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* colors */
  --background-color-01: #f1f1f1;
  --background-color-02: #7dd3fc;
  --about-color-0: #e0f2fe;
  --about-color-1: #e2e8f0;
  --about-color-2: #ede9fe;
  --about-color-3: #ccfbf1;
  --button-color-1: #7dd3fc;
  /* fonts */
  --font-cursive: "Playwrite CA", cursive;
  --font-roboto: "Roboto Mono", monospace;
  --font-strong: "Arsenal SC", sans-serif;
}

html {
  background-color: var(--background-color-01);
}

body {
  font-family: var(--font-roboto);
}

section {
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

/* Navigation Bar */
nav {
  width: 100%;
  min-height: 72px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: var(--background-color-01);
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  justify-content: space-between;
  align-items: center;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
}

nav .nav-name-container {
  /* give it a fancy font */
  margin: 1rem;
  font-family: "Playwrite CA", cursive;
}

nav .nav-buttons-container {
  margin: 1rem;
  justify-self: center;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 80px;
}

nav .nav-buttons-container button {
  padding: 1rem;
  cursor: pointer;
  border-style: none;
  background-color: var(--background-color-01);
  font-size: 1.5rem;
  font-family: var(--font-strong);
  transition: transform 0.2s;
}

nav .nav-buttons-container button:hover {
  transform: translateY(-6px);
}

/* Home Section  */
section#section-home {
  display: flex;
  justify-content: center;
  padding-top: 12rem;
}

.home-main-container {
  display: flex;
  gap: 24px;
}

.home-details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 560px;
  background-color: var(--background-color-02);
  border-radius: 25%;
  padding: 1rem;
}

.headshot {
  width: 400px;
  border-radius: 25%;
}

.home-text-container {
  padding: 0 0 18px 36px;
}

.home-text-container h1 {
  font-family: var(--font-strong);
  font-size: 2.5rem;
}

.home-buttons-container {
  margin: 8px 8px;
  display: flex;
  gap: 8px;
}

.home-buttons-container button {
  background: linear-gradient(90deg, #00c9ff, #92fe9d);
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  outline: none;
}

.home-buttons-container button:hover {
  transform: translateY(-6px);
}

.home-web-links-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
}

/* About Section Menu */
.about-menu-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.about-menu-container button {
  font-size: 28px;
  font-family: var(--font-roboto);
  border-style: none;
  padding: 0.5rem;
  border-right: solid 1px var(--background-color-01);
  cursor: pointer;
  transform-origin: bottom;
  transition: transform ease 0.3s;
}

.about-menu-container button:hover {
  transform: scaleY(1.4);
}

.about-menu-container button:nth-child(1) {
  background-color: var(--about-color-0);
}

.about-menu-container button:nth-child(2) {
  background-color: var(--about-color-1);
}

.about-menu-container button:nth-child(3) {
  background-color: var(--about-color-2);
}

.about-menu-container button:nth-child(4) {
  background-color: var(--about-color-3);
}

.about-menu-container button:last-child {
  border-right: none;
}

/*About SEction contet */
#section-about {
  margin: 3rem;
  display: flex;
  justify-content: center;
}

.about-container {
  width: 75%;
  height: 85%;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  background-color: var(--about-color-0);
  display: flex;
  flex-direction: column;
}

.about-info-container {
  flex: 1;
  display: flex;
  padding: 12px 48px 12px 48px;
  overflow-y: auto;
}

/* About Me Section */
.about-me-container {
  padding: 1.5rem;
}

.about-me-container h2 {
  margin-bottom: 0.3rem;
}

/* Skills Section */
.skills-container {
  flex: 1;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}

.skills-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-width: 90%;
  border-bottom: 0.2px solid black;
  padding: 12px;
}

.skills-card .column-1 h3 {
  font-size: 32px;
  font-family: var(--font-strong);
  font-weight: lighter;
}

.skills-card .column-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.skills-card .column-2 img {
  width: 64px;
}

/*  message box */
.message-box {
  position: absolute;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.5s ease;
  transform: translateY(-10px);
}

/* Projects Section  */
/* Project Cards */
.view-code img,
.view-live img {
  width: 18px;
}

/* Contact Stuff */
.phone-container img,
.location-container img,
.email-container img {
  width: 48px;
}

.back-to-top-button img {
  width: 16px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,WAAA;EACA,8BAAA;EACA,8BAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,yBAAA;EACA,UAAA;EACA,uCAAA;EACA,uCAAA;EACA,uCAAA;AACF;;AAEA;EACE,4CAAA;AACF;;AAEA;EACE,+BAAA;AACF;;AAEA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA,mBAAA;AACA;EACE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,MAAA;EACA,aAAA;EACA,4CAAA;EACA,aAAA;EACA,kCAAA;EACA,8BAAA;EACA,mBAAA;EACA,mDAAA;EACA,2DAAA;EACA,wDAAA;AACF;;AAEA;EACE,yBAAA;EACA,YAAA;EACA,oCAAA;AACF;;AAEA;EACE,YAAA;EACA,oBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,4CAAA;EACA,iBAAA;EACA,+BAAA;EACA,0BAAA;AACF;;AAEA;EACE,2BAAA;AACF;;AAEA,kBAAA;AAEA;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,4CAAA;EACA,kBAAA;EACA,aAAA;AAAF;;AAGA;EACE,YAAA;EACA,kBAAA;AAAF;;AAGA;EACE,sBAAA;AAAF;;AAGA;EACE,+BAAA;EACA,iBAAA;AAAF;;AAGA;EACE,eAAA;EACA,aAAA;EACA,QAAA;AAAF;;AAGA;EACE,oDAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,wCAAA;EACA,0BAAA;EACA,aAAA;AAAF;;AAGA;EACE,2BAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,mBAAA;AAAF;;AAMA,uBAAA;AAEA;EACE,aAAA;EACA,qCAAA;AAJF;;AAOA;EACE,eAAA;EACA,+BAAA;EACA,kBAAA;EACA,eAAA;EACA,kDAAA;EACA,eAAA;EACA,wBAAA;EACA,+BAAA;AAJF;;AAOA;EACE,sBAAA;AAJF;;AAOA;EACE,sCAAA;AAJF;;AAOA;EACE,sCAAA;AAJF;;AAOA;EACE,sCAAA;AAJF;;AAOA;EACE,sCAAA;AAJF;;AAOA;EACE,kBAAA;AAJF;;AAOA,wBAAA;AAEA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;AALF;;AAQA;EACE,UAAA;EACA,WAAA;EACA,mDAAA;EACA,2DAAA;EACA,wDAAA;EACA,sCAAA;EACA,aAAA;EACA,sBAAA;AALF;;AAQA;EACE,OAAA;EACA,aAAA;EACA,4BAAA;EACA,gBAAA;AALF;;AAQA,qBAAA;AACA;EACE,eAAA;AALF;;AAQA;EACE,qBAAA;AALF;;AAQA,mBAAA;AACA;EACE,OAAA;EACA,aAAA;EACA,kCAAA;AALF;;AAQA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,gCAAA;EACA,aAAA;AALF;;AAQA;EACE,eAAA;EACA,+BAAA;EACA,oBAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;AALF;;AAQA;EACE,WAAA;AALF;;AAQA,iBAAA;AACA;EACE,kBAAA;EACA,aAAA;EACA,oCAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,kDAAA;EACA,4BAAA;AALF;;AAQA,sBAAA;AAEA,kBAAA;AAEA;;EAEE,WAAA;AAPF;;AAUA,kBAAA;AAEA;;;EAGE,WAAA;AARF;;AAWA;EACE,WAAA;AARF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+CA:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  /* colors */\n  --background-color-01: #f1f1f1;\n  --background-color-02: #7dd3fc;\n  --about-color-0: #e0f2fe;\n  --about-color-1: #e2e8f0;\n  --about-color-2: #ede9fe;\n  --about-color-3: #ccfbf1;\n  --button-color-1: #7dd3fc;\n  /* fonts */\n  --font-cursive: \"Playwrite CA\", cursive;\n  --font-roboto: \"Roboto Mono\", monospace;\n  --font-strong: \"Arsenal SC\", sans-serif;\n}\n\nhtml {\n  background-color: var(--background-color-01);\n}\n\nbody {\n  font-family: var(--font-roboto);\n}\n\nsection {\n  height: 100vh;\n  padding: 2rem;\n  box-sizing: border-box;\n}\n\n/* Navigation Bar */\nnav {\n  width: 100%;\n  min-height: 72px;\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n  background-color: var(--background-color-01);\n  display: grid;\n  grid-template-columns: 1fr 8fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n}\n\nnav .nav-name-container {\n  /* give it a fancy font */\n  margin: 1rem;\n  font-family: \"Playwrite CA\", cursive;\n}\n\nnav .nav-buttons-container {\n  margin: 1rem;\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  gap: 80px;\n}\n\nnav .nav-buttons-container button {\n  padding: 1rem;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--background-color-01);\n  font-size: 1.5rem;\n  font-family: var(--font-strong);\n  transition: transform 0.2s;\n}\n\nnav .nav-buttons-container button:hover {\n  transform: translateY(-6px);\n}\n\n/* Home Section  */\n\nsection#section-home {\n  display: flex;\n  justify-content: center;\n  padding-top: 12rem;\n}\n\n.home-main-container {\n  display: flex;\n  gap: 24px;\n}\n\n.home-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 400px;\n  height: 560px;\n  background-color: var(--background-color-02);\n  border-radius: 25%;\n  padding: 1rem;\n}\n\n.headshot {\n  width: 400px;\n  border-radius: 25%;\n}\n\n.home-text-container {\n  padding: 0 0 18px 36px;\n}\n\n.home-text-container h1 {\n  font-family: var(--font-strong);\n  font-size: 2.5rem;\n}\n\n.home-buttons-container {\n  margin: 8px 8px;\n  display: flex;\n  gap: 8px;\n}\n\n.home-buttons-container button {\n  background: linear-gradient(90deg, #00c9ff, #92fe9d);\n  border: none;\n  padding: 15px 30px;\n  font-size: 16px;\n  border-radius: 16px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n  outline: none;\n}\n\n.home-buttons-container button:hover {\n  transform: translateY(-6px);\n}\n\n.home-web-links-container {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  align-items: center;\n}\n\n.linkedin-icon {\n}\n\n/* About Section Menu */\n\n.about-menu-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.about-menu-container button {\n  font-size: 28px;\n  font-family: var(--font-roboto);\n  border-style: none;\n  padding: 0.5rem;\n  border-right: solid 1px var(--background-color-01);\n  cursor: pointer;\n  transform-origin: bottom;\n  transition: transform ease 0.3s;\n}\n\n.about-menu-container button:hover {\n  transform: scaleY(1.4);\n}\n\n.about-menu-container button:nth-child(1) {\n  background-color: var(--about-color-0);\n}\n\n.about-menu-container button:nth-child(2) {\n  background-color: var(--about-color-1);\n}\n\n.about-menu-container button:nth-child(3) {\n  background-color: var(--about-color-2);\n}\n\n.about-menu-container button:nth-child(4) {\n  background-color: var(--about-color-3);\n}\n\n.about-menu-container button:last-child {\n  border-right: none;\n}\n\n/*About SEction contet */\n\n#section-about {\n  margin: 3rem;\n  display: flex;\n  justify-content: center;\n}\n\n.about-container {\n  width: 75%;\n  height: 85%;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  background-color: var(--about-color-0);\n  display: flex;\n  flex-direction: column;\n}\n\n.about-info-container {\n  flex: 1;\n  display: flex;\n  padding: 12px 48px 12px 48px;\n  overflow-y: auto;\n}\n\n/* About Me Section */\n.about-me-container {\n  padding: 1.5rem;\n}\n\n.about-me-container h2 {\n  margin-bottom: 0.3rem;\n}\n\n/* Skills Section */\n.skills-container {\n  flex: 1;\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n}\n\n.skills-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  min-width: 90%;\n  border-bottom: 0.2px solid black;\n  padding: 12px;\n}\n\n.skills-card .column-1 h3 {\n  font-size: 32px;\n  font-family: var(--font-strong);\n  font-weight: lighter;\n}\n\n.skills-card .column-2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.skills-card .column-2 img {\n  width: 64px;\n}\n\n/*  message box */\n.message-box {\n  position: absolute;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 5px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease, transform 0.5s ease;\n  transform: translateY(-10px);\n}\n\n/* Projects Section  */\n\n/* Project Cards */\n\n.view-code img,\n.view-live img {\n  width: 18px;\n}\n\n/* Contact Stuff */\n\n.phone-container img,\n.location-container img,\n.email-container img {\n  width: 48px;\n}\n\n.back-to-top-button img {\n  width: 16px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/HandleAboutMe.mjs":
/*!***************************************!*\
  !*** ./src/modules/HandleAboutMe.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutMe)
/* harmony export */ });
/**
 * Responsible for handling the interactions between the user and the About Me section.
 */

class AboutMe {
  constructor() {
    this.aboutInfoContainer = document.querySelector(".about-info-container");
    this.aboutContainer = document.querySelector(".about-container");
    this.handleAboutMe();
  }

  handleAboutMe() {
    // Select the about me button
    const aboutMeBtn = document.querySelector(".about-about-me");
    aboutMeBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = "";
      this.aboutInfoContainer.appendChild(this.injectAboutMe());
      this.aboutContainer.style.backgroundColor = "var(--about-color-0)";
    });
    // select the skills button
    const skillsBtn = document.querySelector(".about-skills");
    skillsBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = "";
      this.aboutInfoContainer.appendChild(this.injectSkills());
      this.aboutContainer.style.backgroundColor = "var(--about-color-1)";
      this.labelWhenHover();
    });

    const certificatesBtn = document.querySelector(".about-certificates");
    certificatesBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = ``;
      // append the html to above.
      this.aboutContainer.style.backgroundColor = "var(--about-color-2)";
    });

    const otherBtn = document.querySelector(".about-other");
    otherBtn.addEventListener("click", () => {
      this.aboutInfoContainer.innerHTML = ``;
      // append stuff
      this.aboutContainer.style.backgroundColor = "var(--about-color-3)";
    });
  }
  injectAboutMe() {
    const aboutMeContainer = document.createElement("div");
    aboutMeContainer.className = "about-me-container";
    aboutMeContainer.innerHTML = `
          <h2>A little bit about me</h2>
          <p>
          My name is Joel, and I'm an educated/self-taught web developer
          with a passion for user-experience, design, and back-end coding. I
          am passionate about creating websites with crisp, clean designs
          that prioritize user-freindliness. A great website offers an
          intuitive and seamless experience, focusing on what the user needs
          to control and ensuring they can do so with minimal effort. I
          enjoy the challenge of solving problems to enhance the user
          interaction and satisfaction.
          </p>
    `;
    return aboutMeContainer;
  }
  injectSkills() {
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills-container";
    skillsContainer.innerHTML = `
              <div class="skills-container">
              <div class="skills-card">
                <div class="column-1">
                  <h3>Web Development:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript logo"
                    data="JavaScript"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                    alt="CSS logo"
                    data="CSS"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                    alt="HTML5 logo"
                    data="HTML5"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    alt="PHP logo"
                    data="PHP"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Programming Languages:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                    alt="Java logo"
                    data="Java"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    alt="C++ logo"
                    data="C++"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Database:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    alt="MySQL logo"
                    data="MySQL"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Other:</h3>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
                    alt="WebPack Logo"
                    data="WebPack"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"
                    alt="esLint Logo"
                    data="esLint"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
                    alt="VSCode Logo"
                    data="VSCode"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                    alt="Node Package Manager Logo"
                    data="Node Package Manager"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                    alt="GitHub Logo"
                    data="GitHub"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                    alt="Git Logo"
                    data="Git"
                  />
                </div>
              </div>
  
              <div class="skills-card">
                <div class="column-1">
                  <h3>Currently Learning:</h3>
                  <h4>As of July 10th 2024</h4>
                </div>
                <div class="column-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt="React Logo"
                    data="React"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt="Node.js Logo"
                    data="Node.js"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB Logo"
                    data="MongoDB"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt="Express Logo"
                    data="Express"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                    alt="Next.js Logo"
                    data="Next.Js"
                  />
  
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    alt="TypeScript Logo"
                    data="TypeScript"
                  />
                </div>
              </div>
            </div>
    `;
    return skillsContainer;
  }

  labelWhenHover() {
    const icons = document.querySelectorAll(".column-2 img");

    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (event) => {
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box");
        messageBox.textContent = icon.getAttribute("data");
        document.body.appendChild(messageBox);

        const updateMessageBoxPosition = (e) => {
          messageBox.style.left = `${e.pageX + 10}px`;
          messageBox.style.top = `${e.pageY + 10}px`;
        };

        updateMessageBoxPosition(event); // Initial position
        messageBox.style.opacity = 1;
        messageBox.style.transform = "translateY(0)";

        icon.addEventListener("mousemove", updateMessageBoxPosition);

        icon.addEventListener(
          "mouseout",
          () => {
            messageBox.style.opacity = 0;
            messageBox.style.transform = "translateY(-10px)";
            setTimeout(() => {
              document.body.removeChild(messageBox);
            }, 300); // Match the transition duration
          },
          { once: true }
        );
      });
    });
  }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_HandleAboutMe_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HandleAboutMe.mjs */ "./src/modules/HandleAboutMe.mjs");



// work on about section.
// When I click skills, the .about-me-container will clear and then the skills table will be inserted.
const handleAboutMe = new _modules_HandleAboutMe_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
const projects = {
  Battleship: {
    name: "Battleship",
    img: "./assets/screenshots/Battleship.png",
    description: "The Battleship project from The Odin Project focuses on implementing the classic game Battleship using Test Driven Development (TDD). The purpose of the project is to practice TDD by writing tests for each feature before implementing it, thus ensuring that the code is robust and reliable. By completing this project, I gained a deeper understanding of TDD principles and improved my ability to isolate application functionality from DOM manipulation. The project involves creating classes or factories for Ships, Gameboards, and Players, each with specific methods to handle game logic such as placing ships, recording hits, and determining game outcomes. Players interact with the game through a user interface that allows them to take turns attacking each other's gameboards until one player's ships are all sunk. This project enhanced my skills in object-oriented programming, event handling, and creating interactive web applications.",
    repo: "https://github.com/bergjoel93/Battleship",
    live: "https://bergjoel93.github.io/Battleship/",
    for: "The Odin Project",
    learned: "Test-Driven-Development"
  },
  WeatherApp: {
    name: "Weather App",
    img: "./assets/screenshots/WeatherApp.png",
    description: "The Weather App project from The Odin Project involves creating a web application that displays weather information for a specified location using data fetched from a weather API. The purpose of this project is to practice integrating external APIs into a web application and to handle asynchronous operations using promises or async/await. By completing this project, I gained experience in working with APIs, processing JSON data, and dynamically updating the DOM based on user input and API responses. The application allows users to input a location, fetches the relevant weather data, and displays it on the webpage. Additionally, the app features dynamic styling based on the weather conditions, enhancing the user experience. This project improved my skills in API handling, asynchronous JavaScript, and responsive web design.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/Weather-App/",
    for: "The Odin Project",
    learned: "Retrieveing Data From API, Async Functions "
  },
  FormValidationPractice: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  Carousel: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  DatePractice: {
    name: "",
    img: "./assets/screenshots/",
    description: "",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  Taskr: {
    name: "To-Do List",
    img: "./assets/screenshots/",
    description: "The Todo List project from The Odin Project is designed to consolidate and demonstrate the various web development techniques learned so far. The purpose of the project is to create a functional and user-friendly todo list application that allows users to organize tasks into projects, set priorities, and manage deadlines. By completing this project, I gained practical experience in using JavaScript to create dynamic objects, manage application logic separately from the DOM, and implement data persistence using the Web Storage API. The application features the ability to create, edit, and delete todos, organize them into projects, and store data locally to retain user input across sessions. This project helped enhance my skills in object-oriented programming, modular code structure, and utilizing external libraries for date manipulation.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  RestaurantPage: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Restaurant Page project from The Odin Project focuses on practicing DOM manipulation by dynamically generating a restaurant homepage using JavaScript. The purpose of this project is to enhance proficiency in using JavaScript to create and manipulate HTML elements, as well as to integrate Webpack for efficient module bundling. By completing this project, I gained valuable experience in setting up and configuring Webpack, creating modular JavaScript code, and managing the dynamic content of a web page through event listeners. The application features a header with navigation buttons that allow users to switch between different tabs, such as Home, Menu, and Contact, each with its own content module. The project emphasizes the separation of concerns by keeping the application logic and DOM manipulation in separate modules, improving code organization and maintainability. This project significantly improved my skills in modern JavaScript development, module bundling, and dynamic webpage creation.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  TicTacToe: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Tic Tac Toe project from The Odin Project entails creating a browser-based version of the classic game, focusing on object-oriented programming and DOM manipulation. The purpose of this project is to practice organizing code using objects and factories, ensuring minimal global variables and a clean module pattern. By completing this project, I gained experience in structuring JavaScript code to manage game state, player interactions, and game flow control efficiently. The application includes a Gameboard object to store the game state, Player objects to manage player data, and a controller object to handle the game logic and DOM interactions. Features include player name input, gameboard rendering, player move validation, and game end conditions such as win or tie detection. This project enhanced my understanding of modular code design, event handling, and dynamic UI updates.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  Library: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Library project from The Odin Project involves creating a small web application to manage a collection of books, extending the 'Book' example from a previous lesson. The purpose of this project is to practice object-oriented programming and DOM manipulation by allowing users to add, display, and manage books in a library. By completing this project, I gained experience in creating and manipulating arrays to store book objects, dynamically generating HTML elements to display book information, and handling user input through forms. The application includes features such as adding new books via a form, displaying books in a table or card format, and providing buttons to remove books or toggle their read status. This project improved my skills in working with constructors, prototypes, event handling, and associating DOM elements with data attributes for efficient data management and user interaction.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  AdminDashboard: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Admin Dashboard project from The Odin Project focuses on building a full dashboard layout using CSS Grid for the majority of the layout work. The purpose of this project is to apply and solidify knowledge of CSS Grid in a real-world scenario. By completing this project, I gained practical experience in structuring complex layouts, utilizing grid nesting for different sections, and integrating assets such as icons and fonts. The project involves setting up a sidebar, header, and main content area, each containing nested grid layouts for elements like navigation, search bars, user information, and various dashboard widgets. This project also offered an opportunity to enhance design skills by experimenting with color palettes, fonts, and overall aesthetics. The final result is a functional and visually appealing admin dashboard that demonstrates proficiency in modern CSS techniques.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  SignUpForm: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Sign-up Form project from The Odin Project is designed to apply and consolidate the HTML and CSS concepts learned in previous lessons by creating a sign-up form for an imaginary service. The purpose of this project is to practice structuring a form, applying external assets, and using advanced CSS techniques for styling. By completing this project, I gained experience in setting up a project repository, organizing HTML and CSS files, and managing design assets such as background images and custom fonts. The form includes various input fields with specific styling for states like invalid and focused inputs, achieved using pseudo-classes. This project also involves adding a semi-transparent background for better text readability and ensuring the form's responsiveness across different desktop resolutions. Overall, this project enhanced my skills in creating aesthetically pleasing and functional web forms.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  Calculator: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Calculator project from The Odin Project is a comprehensive exercise designed to consolidate the JavaScript, HTML, and CSS skills learned throughout the course. The purpose of this project is to create a functional on-screen calculator that performs basic arithmetic operations. By completing this project, I gained experience in creating and testing mathematical functions, managing state within the application, and dynamically updating the user interface based on user interactions. The calculator features functions for addition, subtraction, multiplication, and division, as well as a display area and buttons for digits and operations. The project emphasizes avoiding the use of the dangerous `eval()` function by building custom functions to evaluate expressions. Additionally, it includes handling edge cases such as rounding long decimals, preventing multiple decimal points, and providing error messages for invalid operations like division by zero. This project enhanced my ability to structure complex JavaScript logic, create interactive web applications, and refine the user interface for a better user experience.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  EtchASketch: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Etch-a-Sketch project from The Odin Project is a creative exercise designed to strengthen DOM manipulation skills using JavaScript and Flexbox for layout. The purpose of this project is to build a browser-based sketchpad that allows users to draw by hovering over a grid of squares. By completing this project, I gained experience in dynamically creating and styling elements, setting up event listeners for user interactions, and using Flexbox to create a grid layout. The application features a grid of div elements that change color when hovered over, simulating the effect of drawing. Additionally, a button allows users to customize the grid size, prompting for a new number of squares per side and regenerating the grid accordingly. Extra credit challenges include randomizing square colors and implementing a progressive darkening effect. This project enhanced my proficiency in JavaScript event handling, dynamic content generation, and CSS layout techniques.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  },
  LandingPage: {
    name: "",
    img: "./assets/screenshots/",
    description: "The Landing Page project from The Odin Project involves creating a complete web page based on provided design images, focusing on HTML and CSS skills. The purpose of this project is to practice translating a visual design into a functional web page, honing layout and styling skills. By completing this project, I gained experience in setting up a project repository, structuring HTML content, and applying CSS to match the design specifications. The project is divided into manageable sections, such as the header, main content, and footer, which are styled individually to achieve the desired layout. Key tasks include using Flexbox for layout, selecting appropriate fonts, and integrating images. This project also emphasizes the importance of committing changes frequently and using external resources to solve challenges. The end result is a polished, visually appealing landing page that demonstrates proficiency in web design and development fundamentals.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/",
    for: "",
    learned: ""
  }
};
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map