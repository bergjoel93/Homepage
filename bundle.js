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
  --clipped-background-color: rgb(8 145 178);
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
  --carousel-color-0: #e0f2fe;
  --carousel-color-1: #ede9fe;
  --carousel-color-2: #ccfbf1;
  --carousel-color-3: #fbcfe8;
  /*Sizes*/
  --max-width: 960px;
}

html {
  background-color: var(--background-color-01);
}

body {
  font-family: var(--font-roboto);
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  height: 100vh;
  box-sizing: border-box;
  max-width: var(--max-width);
  width: 100%;
}

.clipped-background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: var(--clipped-background-color);
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
}

.space {
  width: 100%;
  height: 100px;
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

nav .nav-buttons-container a {
  padding: 1rem;
  cursor: pointer;
  border-style: none;
  background-color: var(--background-color-01);
  font-size: 1.5rem;
  font-family: var(--font-strong);
  transition: transform 0.2s;
  text-decoration: none;
  color: black;
}

nav .nav-buttons-container a:hover {
  transform: translateY(-6px);
}

/* Home Section  */
section#section-home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headshot,
.home-details-container {
  box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);
}

.home-main-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  justify-content: center;
}

.about-container {
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  background-color: var(--about-color-0);
  display: flex;
  flex-direction: column;
  max-height: 80%;
  margin-top: 24px;
}

.about-info-container {
  flex: 1;
  display: flex;
  padding: 12px;
  overflow-y: auto;
}

.about-me-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px;
}

.about-me-container-2 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: clamp(45ch, 100%, 75ch);
  background-color: white;
  padding: 32px;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
}

.about-me-img {
  height: 500px;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
}

.about-me-container h2 {
  margin-bottom: 0.3rem;
}

/* Skills Section */
.skills-container {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
}

.skills-card {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-width: 90%;
  border-bottom: 0.2px solid black;
  padding: 8px;
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
  width: 54px;
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
#section-projects {
  margin-top: 5rem;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-container {
  padding: 24px;
  width: 350px;
  height: 200px;
  position: relative;
  perspective: 3500px;
  margin: 0 auto;
}

.carousel {
  transform-style: preserve-3d;
  transition: transform 1s;
}

/* Project Cards */
.project-card {
  display: block;
  position: absolute;
  width: 300px;
  height: 500px;
  background-color: var(--about-color-0);
  padding: 16px;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info-title-container {
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  padding: 6px;
}

.project-name {
  font-size: 16px;
}

.project-name,
.project-links {
  padding: 4px;
}

.project-links {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.project-description {
  font-size: 13px;
}

.view-code,
.view-live {
  cursor: pointer;
}

.view-code img,
.view-live img {
  width: 20px;
  overflow: visible;
}

.carousel-arrows {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel-button {
  font-size: 4rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  padding-bottom: 0.4rem;
}

.carousel-button:hover,
.carousel-button:focus {
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.3);
}

.carousel-button:focus {
  outline: 1px solid black;
}

/* Contact Stuff */
#section-contact {
  height: 50vh;
}

.contact-main-container {
  display: flex;
  background-color: var(--clipped-background-color);
  padding: 24px;
  flex-direction: column;
  gap: 12px;
  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);
  align-items: center;
}

.phone-container,
.location-container,
.email-container {
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 16px;
}

.phone-container img,
.location-container img,
.email-container img {
  width: 48px;
}

.back-to-top-button img {
  width: 16px;
}

footer {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  align-items: center;
}

footer button {
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

footer button:hover {
  transform: translateY(-6px);
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Playwrite+CA:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --clipped-background-color: rgb(8 145 178);\n  /* colors */\n  --background-color-01: #f1f1f1;\n  --background-color-02: #7dd3fc;\n  --about-color-0: #e0f2fe;\n  --about-color-1: #e2e8f0;\n  --about-color-2: #ede9fe;\n  --about-color-3: #ccfbf1;\n  --button-color-1: #7dd3fc;\n  /* fonts */\n  --font-cursive: \"Playwrite CA\", cursive;\n  --font-roboto: \"Roboto Mono\", monospace;\n  --font-strong: \"Arsenal SC\", sans-serif;\n\n  --carousel-color-0: #e0f2fe;\n  --carousel-color-1: #ede9fe;\n  --carousel-color-2: #ccfbf1;\n  --carousel-color-3: #fbcfe8;\n\n  /*Sizes*/\n  --max-width: 960px;\n}\n\nhtml {\n  background-color: var(--background-color-01);\n}\n\nbody {\n  font-family: var(--font-roboto);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nsection {\n  height: 100vh;\n  box-sizing: border-box;\n  max-width: var(--max-width);\n  width: 100%;\n}\n\n.clipped-background {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--clipped-background-color);\n  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);\n}\n\n.space {\n  width: 100%;\n  height: 100px;\n}\n\n/* Navigation Bar */\nnav {\n  width: 100%;\n  min-height: 72px;\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n  background-color: var(--background-color-01);\n  display: grid;\n  grid-template-columns: 1fr 8fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n}\n\nnav .nav-name-container {\n  /* give it a fancy font */\n  margin: 1rem;\n  font-family: \"Playwrite CA\", cursive;\n}\n\nnav .nav-buttons-container {\n  margin: 1rem;\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n  gap: 80px;\n}\n\nnav .nav-buttons-container a {\n  padding: 1rem;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--background-color-01);\n  font-size: 1.5rem;\n  font-family: var(--font-strong);\n  transition: transform 0.2s;\n  text-decoration: none;\n  color: black;\n}\n\nnav .nav-buttons-container a:hover {\n  transform: translateY(-6px);\n}\n\n/* Home Section  */\n\nsection#section-home {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.headshot,\n.home-details-container {\n  box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);\n  -webkit-box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);\n  -moz-box-shadow: 24px 29px 23px 1px rgba(0, 0, 0, 0.63);\n}\n\n.home-main-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.home-details-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 400px;\n  height: 560px;\n  background-color: var(--background-color-02);\n  border-radius: 25%;\n  padding: 1rem;\n}\n\n.headshot {\n  width: 400px;\n  border-radius: 25%;\n}\n\n.home-text-container {\n  padding: 0 0 18px 36px;\n}\n\n.home-text-container h1 {\n  font-family: var(--font-strong);\n  font-size: 2.5rem;\n}\n\n.home-buttons-container {\n  margin: 8px 8px;\n  display: flex;\n  gap: 8px;\n}\n\n.home-buttons-container button {\n  background: linear-gradient(90deg, #00c9ff, #92fe9d);\n  border: none;\n  padding: 15px 30px;\n  font-size: 16px;\n  border-radius: 16px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n  outline: none;\n}\n\n.home-buttons-container button:hover {\n  transform: translateY(-6px);\n}\n\n.home-web-links-container {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  align-items: center;\n}\n\n.linkedin-icon {\n}\n\n/* About Section Menu */\n\n.about-menu-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.about-menu-container button {\n  font-size: 28px;\n  font-family: var(--font-roboto);\n  border-style: none;\n  padding: 0.5rem;\n  border-right: solid 1px var(--background-color-01);\n  cursor: pointer;\n  transform-origin: bottom;\n  transition: transform ease 0.3s;\n}\n\n.about-menu-container button:hover {\n  transform: scaleY(1.4);\n}\n\n.about-menu-container button:nth-child(1) {\n  background-color: var(--about-color-0);\n}\n\n.about-menu-container button:nth-child(2) {\n  background-color: var(--about-color-1);\n}\n\n.about-menu-container button:nth-child(3) {\n  background-color: var(--about-color-2);\n}\n\n.about-menu-container button:nth-child(4) {\n  background-color: var(--about-color-3);\n}\n\n.about-menu-container button:last-child {\n  border-right: none;\n}\n\n/*About SEction contet */\n\n#section-about {\n  display: flex;\n  justify-content: center;\n}\n\n.about-container {\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  background-color: var(--about-color-0);\n  display: flex;\n  flex-direction: column;\n  max-height: 80%;\n  margin-top: 24px;\n}\n\n.about-info-container {\n  flex: 1;\n  display: flex;\n  padding: 12px;\n  overflow-y: auto;\n}\n\n.about-me-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 16px;\n}\n\n.about-me-container-2 {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: clamp(45ch, 100%, 75ch);\n  background-color: white;\n  padding: 32px;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n}\n\n.about-me-img {\n  height: 500px;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n}\n\n.about-me-container h2 {\n  margin-bottom: 0.3rem;\n}\n\n/* Skills Section */\n.skills-container {\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n  height: 100%;\n}\n\n.skills-card {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  min-width: 90%;\n  border-bottom: 0.2px solid black;\n  padding: 8px;\n}\n\n.skills-card .column-1 h3 {\n  font-size: 32px;\n  font-family: var(--font-strong);\n  font-weight: lighter;\n}\n\n.skills-card .column-2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n.skills-card .column-2 img {\n  width: 54px;\n}\n\n/*  message box */\n.message-box {\n  position: absolute;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  border-radius: 5px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease, transform 0.5s ease;\n  transform: translateY(-10px);\n}\n\n/* Projects Section  */\n#section-projects {\n  margin-top: 5rem;\n  padding-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.carousel-container {\n  padding: 24px;\n  width: 350px;\n  height: 200px;\n  position: relative;\n  perspective: 3500px;\n  margin: 0 auto;\n}\n\n.carousel {\n  transform-style: preserve-3d;\n  transition: transform 1s;\n}\n\n/* Project Cards */\n.project-card {\n  display: block;\n  position: absolute;\n  width: 300px;\n  height: 500px;\n  background-color: var(--about-color-0);\n  padding: 16px;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n}\n\n.project-card-img-container {\n}\n\n.project-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-info-title-container {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n  padding: 6px;\n}\n\n.project-name {\n  font-size: 16px;\n}\n\n.project-name,\n.project-links {\n  padding: 4px;\n}\n\n.project-links {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n\n.project-description {\n  font-size: 13px;\n}\n\n.view-code,\n.view-live {\n  cursor: pointer;\n}\n\n.view-code img,\n.view-live img {\n  width: 20px;\n  overflow: visible;\n}\n\n.carousel-arrows {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.carousel-button {\n  font-size: 4rem;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  padding-bottom: 0.4rem;\n}\n.carousel-button:hover,\n.carousel-button:focus {\n  color: rgba(255, 255, 255, 0.9);\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.carousel-button:focus {\n  outline: 1px solid black;\n}\n\n/* Contact Stuff */\n\n#section-contact {\n  height: 50vh;\n}\n\n.contact-main-container {\n  display: flex;\n  background-color: var(--clipped-background-color);\n  padding: 24px;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -webkit-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  -moz-box-shadow: 7px 9px 5px -2px rgba(74, 74, 74, 0.75);\n  align-items: center;\n}\n\n.phone-container,\n.location-container,\n.email-container {\n  display: flex;\n  padding: 12px;\n  align-items: center;\n  gap: 16px;\n}\n\n.phone-container img,\n.location-container img,\n.email-container img {\n  width: 48px;\n}\n\n.back-to-top-button img {\n  width: 16px;\n}\n\nfooter {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  margin: 2rem;\n  align-items: center;\n}\n\nfooter button {\n  background: linear-gradient(90deg, #00c9ff, #92fe9d);\n  border: none;\n  padding: 15px 30px;\n  font-size: 16px;\n  border-radius: 16px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n  outline: none;\n}\n\nfooter button:hover {\n  transform: translateY(-6px);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/Carousel.mjs":
/*!**********************************!*\
  !*** ./src/modules/Carousel.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carousel)
/* harmony export */ });
/**
 * This module is responsible for running the card carousel for projects.
 */

class Carousel {
  constructor() {
    this.carousel = $(".carousel");
    this.currdeg = 0;
    this.num = 1;
    this.totalItems = 8;

    $(".next").on("click", { d: "n" }, this.rotate.bind(this));
    $(".prev").on("click", { d: "p" }, this.rotate.bind(this));
  }

  rotate(e) {
    if (e.data.d === "n") {
      this.currdeg -= 45;
      this.fadeOutText(this.num);
      this.num = this.num === this.totalItems ? 1 : this.num + 1;
      this.fadeInText(this.num);
    } else if (e.data.d === "p") {
      this.currdeg += 45;
      this.fadeOutText(this.num);
      this.num = this.num === 1 ? this.totalItems : this.num - 1;
      this.fadeInText(this.num);
    }

    this.carousel.css({
      "-webkit-transform": `rotateY(${this.currdeg}deg)`,
      "-moz-transform": `rotateY(${this.currdeg}deg)`,
      "-o-transform": `rotateY(${this.currdeg}deg)`,
      transform: `rotateY(${this.currdeg}deg)`,
    });
  }

  fadeOutText(num) {
    $(`.text${num}`).fadeOut();
  }

  fadeInText(num) {
    $(`.text${num}`).fadeIn();
  }
}


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


/***/ }),

/***/ "./src/modules/Nav.mjs":
/*!*****************************!*\
  !*** ./src/modules/Nav.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleNav: () => (/* binding */ handleNav)
/* harmony export */ });
/**
 * This module is responsible for handling the navigation buttons so that when the user clicks on them, they will automatically scroll down to the relavent parts of the page.
 */

function handleNav() {
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-button");
    const navBarHeight = document.querySelector("nav").offsetHeight;

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        console.log(targetSection);

        window.scrollTo({
          top: targetSection.offsetTop - navBarHeight,
          behavior: "smooth",
        });
      });
    });
  });
}




/***/ }),

/***/ "./src/modules/Projects.mjs":
/*!**********************************!*\
  !*** ./src/modules/Projects.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/**
 * This module contains the Projects object.
 */

const projects = {
  Battleship: {
    name: "Battleship",
    img: "./assets/screenshots/Battleship.png",
    description:
      "The purpose of this project was to practice Test Driven Development using Jest. Tests were written for each feature first before implementing them. This project enhanced my skills in OOP, event handling, and creating an interactive web application.",
    repo: "https://github.com/bergjoel93/Battleship",
    live: "https://bergjoel93.github.io/Battleship/",
    for: "The Odin Project",
    learned: "Test-Driven-Development",
  },
  WeatherApp: {
    name: "Weather App",
    img: "./assets/screenshots/WeatherApp.png",
    description:
      "This is an app to show you current weather conditions and a 2 day forecast. The data comes from a weather API. The purpose of this project is to practice integrating external API's into a web application to handle asynchronouse operations using promises or async/await.",
    repo: "https://github.com/bergjoel93/",
    live: "https://bergjoel93.github.io/Weather-App/",
    for: "The Odin Project",
    learned: "Retrieveing Data From API, Async Functions ",
  },
  FormValidationPractice: {
    name: "Form Validation Practice",
    img: "./assets/screenshots/FormPractice.png",
    description:
      "This was a personal project that I did to help me practice real-time form validation. I made sure I also gave it a nice look because, why not?",
    repo: "https://github.com/bergjoel93/form-validation-practice",
    live: "https://bergjoel93.github.io/form-validation-practice",
    for: "",
    learned: "",
  },
  Carousel: {
    name: "Drop Down/Carousel Practice",
    img: "./assets/screenshots/Carousel.png",
    description:
      "This project helped me practice dynamic user interface interactions. It's not very stylish, but it's a good example of a drop-down menu (top left corner) and an image carousel. ",
    repo: "https://github.com/bergjoel93/drop-down-and-carousel-assignment",
    live: "https://bergjoel93.github.io/drop-down-and-carousel-assignment",
    for: "",
    learned: "",
  },
  DatePractice: {
    name: "Date Practice",
    img: "./assets/screenshots/DatePractice.png",
    description:
      "This was a personal project to help me practice using JavaScript Date objects. In the previous project, 'To-Do list', I was struggling with dates because of time-zone issues. So I did a quick project to test using timestamps as a way to store dates, which were later parsed into date-strings.",
    repo: "https://github.com/bergjoel93/Date-Practice",
    live: "https://bergjoel93.github.io/Date-Practice",
    for: "",
    learned: "",
  },
  Taskr: {
    name: "To-Do List",
    img: "./assets/screenshots/Taskr.png",
    description:
      "This purpose of this project was to practice using ES6 modules, Classes, and WebPack to create a functional and user-friendly todo list for organizing tasks into projects, setting priorities, and managing deadlines. This one was a doozy but it made me so much better as a programme in the end. ",
    repo: "https://github.com/bergjoel93/Taskr",
    live: "https://bergjoel93.github.io/Taskr",
    for: "",
    learned: "",
  },
  RestaurantPage: {
    name: "Restaurant Page",
    img: "./assets/screenshots/Restaurant.png",
    description:
      "This project was my first introduction to diving my code into ES6 modules. This project also used WebPack. The content was injected using JavaScript when the user clicked a menu button. ",
    repo: "https://github.com/bergjoel93/Restaurant-Page",
    live: "https://bergjoel93.github.io/Restaurant-Page",
    for: "",
    learned: "",
  },
  TicTacToe: {
    name: "Tic-Tac-Toe",
    img: "./assets/screenshots/TicTacToe.png",
    description:
      " The purpose of this project is to practice organizing code using objects and factories, ensuring minimal global variables and a clean module pattern. By completing this project, I gained experience in structuring JavaScript code to manage game state, player interactions, and game flow control efficiently.",
    repo: "https://github.com/bergjoel93/Tic_Tac_Toe",
    live: "https://bergjoel93.github.io/Tic_Tac_Toe",
    for: "",
    learned: "",
  },

  // Library: {
  //   name: "",
  //   img: "./assets/screenshots/Library.png",
  //   description:
  //     "The Library project from The Odin Project involves creating a small web application to manage a collection of books, extending the 'Book' example from a previous lesson. The purpose of this project is to practice object-oriented programming and DOM manipulation by allowing users to add, display, and manage books in a library.",
  //   repo: "https://github.com/bergjoel93/library",
  //   live: "https://bergjoel93.github.io/library",
  //   for: "",
  //   learned: "",
  // },

  // AdminDashboard: {
  //   name: "",
  //   img: "./assets/screenshots/AdminDashboard.png",
  //   description:
  //     "The Admin Dashboard project from The Odin Project focuses on building a full dashboard layout using CSS Grid for the majority of the layout work. The purpose of this project is to apply and solidify knowledge of CSS Grid in a real-world scenario.",
  //   repo: "https://github.com/bergjoel93/",
  //   live: "https://bergjoel93.github.io/",
  //   for: "",
  //   learned: "",
  // },
  // SignUpForm: {
  //   name: "Sign Up Form",
  //   img: "./assets/screenshots/SignUp.png",
  //   description:
  //     "The Sign-up Form project from The Odin Project is designed to apply and consolidate the HTML and CSS concepts learned in previous lessons by creating a sign-up form for an imaginary service. The purpose of this project is to practice structuring a form, applying external assets, and using advanced CSS techniques for styling. ",
  //   repo: "https://github.com/bergjoel93/sign-up-form",
  //   live: "https://bergjoel93.github.io/sign-up-form",
  //   for: "",
  //   learned: "",
  // },
  // Calculator: {
  //   name: "Calculator",
  //   img: "./assets/screenshots/Calculator.png",
  //   description:
  //     "The Calculator project from The Odin Project is a comprehensive exercise designed to consolidate the JavaScript, HTML, and CSS skills learned throughout the course. The purpose of this project is to create a functional on-screen calculator that performs basic arithmetic operations. ",
  //   repo: "https://github.com/bergjoel93/Calculator",
  //   live: "https://bergjoel93.github.io/Calculator",
  //   for: "",
  //   learned: "",
  // },
  // EtchASketch: {
  //   name: "Etch-A-Sketch",
  //   img: "./assets/screenshots/EtchaSketch.png",
  //   description:
  //     "The Etch-a-Sketch project from The Odin Project is a creative exercise designed to strengthen DOM manipulation skills using JavaScript and Flexbox for layout. The purpose of this project is to build a browser-based sketchpad that allows users to draw by hovering over a grid of squares. ",
  //   repo: "https://github.com/bergjoel93/odin-project-Etch-a-Sketch",
  //   live: "https://bergjoel93.github.io/odin-project-Etch-a-Sketch",
  //   for: "",
  //   learned: "",
  // },
  // LandingPage: {
  //   name: "Landing Page",
  //   img: "./assets/screenshots/OdinLandingPage.png",
  //   description:
  //     "The Landing Page project from The Odin Project involves creating a complete web page based on provided design images, focusing on HTML and CSS skills. The purpose of this project is to practice translating a visual design into a functional web page, honing layout and styling skills.",
  //   repo: "https://github.com/bergjoel93/odin-landing-page",
  //   live: "https://bergjoel93.github.io/odin-landing-page",
  //   for: "",
  //   learned: "",
  // },
};




/***/ }),

/***/ "./src/modules/RenderProjects.mjs":
/*!****************************************!*\
  !*** ./src/modules/RenderProjects.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenderProjects)
/* harmony export */ });
/* harmony import */ var _Projects_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.mjs */ "./src/modules/Projects.mjs");

/**
 * The purpose of this module is to render all of the project cards with their respective handlers (if needed)
 */

class RenderProjects {
  constructor() {
    this.projects = _Projects_mjs__WEBPACK_IMPORTED_MODULE_0__.projects;
    this.cardContainer = document.querySelector(".carousel");
    this.colors = [
      "--carousel-color-0",
      "--carousel-color-1",
      "--carousel-color-2",
      "--carousel-color-3",
    ];
    this.renderCards();
  }
  // Renders the cards by appending them to the project-card-container
  renderCards() {
    let degree = 0;
    let i = 0;
    Object.keys(this.projects).forEach((key) => {
      if (i > 3) i = 0;
      const project = _Projects_mjs__WEBPACK_IMPORTED_MODULE_0__.projects[key];
      this.cardContainer.appendChild(this.generateCard(project, degree, i));
      degree += 45;
      i++;
    });
  }

  generateCard(project, degree, i) {
    let card = document.createElement("div");
    card.className = "project-card";
    card.style.backgroundColor = `var(${this.colors[i]})`;
    card.style.transform = `rotateY(${degree}deg) translateZ(366px)`;
    card.innerHTML = `
        <div class="project-card-img-container">
        <img src="${project.img}" alt="${project.name} Screenshot" class="project-screenshot">
        </div>

        <div class="project-info-container">
        <div class="project-info-title-container">
            <h3 class="project-name">${project.name}</h3>
            <div class="project-links">
            <a class="view-code" href="${project.repo}"  target="_blank">
                <img src="./assets/icons/github-142-svgrepo-com.svg" alt="Go to code">
            </a>
            <a class="view-live" href="${project.live}"  target="_blank">
                <img src="./assets/icons/open-in-new-svgrepo-com.svg" alt="Go to live website">
            </a>
            </div>
        </div>
        <div class="project-description-container">
            <p class="project-description">
            ${project.description}
            </p>
        </div>
        </div>

    `;
    return card;
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
/* harmony import */ var _modules_RenderProjects_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RenderProjects.mjs */ "./src/modules/RenderProjects.mjs");
/* harmony import */ var _modules_Carousel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Carousel.mjs */ "./src/modules/Carousel.mjs");
/* harmony import */ var _modules_Nav_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Nav.mjs */ "./src/modules/Nav.mjs");






// work on about section.
// When I click skills, the .about-me-container will clear and then the skills table will be inserted.
const handleAboutMe = new _modules_HandleAboutMe_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
const renderProjects = new _modules_RenderProjects_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]();

// Carousel
$(document).ready(function () {
  const carousel = new _modules_Carousel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](".carousel", ".next", ".prev");
});

// Handle navigation menu
(0,_modules_Nav_mjs__WEBPACK_IMPORTED_MODULE_4__.handleNav)();

// handle resume button
const resumeBtn = document.querySelector(".download-resume");
resumeBtn.addEventListener("click", () => {
  window.open("./assets/resume/Joel-Resume.pdf");
});

// handle back to top button
const backToTopBtn = document.querySelector(".back-to-top-button");
backToTopBtn.addEventListener("click", () => {
  const home = document.querySelector("#section-home");
  window.scrollTo({
    top: home.offsetTop,
    behavior: "smooth"
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map