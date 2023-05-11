/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MinionRunner; }\n/* harmony export */ });\n// import drawMinion from './minion';\n\nclass MinionRunner {\n  constructor(canvas) {\n    const ctx = canvas.getContext(\"2d\");\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(20, 20, 50, 50);\n    ctx.beginPath();\n    ctx.moveTo(0, 400);\n    ctx.lineTo(600, 400);\n    ctx.lineWidth = 5;\n    ctx.strokeStyle = \"white\";\n    ctx.stroke();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBRWUsTUFBTUEsWUFBWSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFbkNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7SUFDeEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUU1QkgsR0FBRyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUNmSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2xCTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3BCTixHQUFHLENBQUNPLFNBQVMsR0FBRyxDQUFDO0lBQ2pCUCxHQUFHLENBQUNRLFdBQVcsR0FBRyxPQUFPO0lBQ3pCUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxDQUFDO0VBR2hCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pb25zX3J1bm5lci8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgZHJhd01pbmlvbiBmcm9tICcuL21pbmlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlvblJ1bm5lciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwLCAyMCwgNTAsIDUwKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgNDAwKTtcbiAgICAgICAgY3R4LmxpbmVUbyg2MDAsIDQwMCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1pbmlvblJ1bm5lciIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n__webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n// import { init, Sprite, SpriteSheet, GameLoop } from 'kontra';\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const minion_canvas = document.getElementById('minion_canvas');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](minion_canvas);\n\n  // const mo = new MovingObject({ // test \n  //     pos: [30, 30],\n  //     vel: [10, 10],\n  //     radius: 5,\n  //     color: \"#00FF00\"\n  //   });\n\n  // window.mo = mo; // test\n\n  // let { canvas } = init();\n\n  // let block = Sprite({\n  //   x: canvas.width,        // starting x,y position of the me\n  //   y: canvas.height - 50,\n  //   color: '#ff0',  // fill color of the me rectangle\n  //   width: 30,     // width and height of the me rectangle\n  //   height: 20,\n  //   dx: -2,\n  //   anchor: {x: 1, y: 1}\n  // });\n\n  // let ground = Sprite({\n  //   x: 0,\n  //   y: canvas.height - 50,\n  //   color: '#a0a0a0',\n  //   width: canvas.width,\n  //   height: 50,\n  // });\n\n  // let image = new Image();\n  // image.src = 'src/character_walk_sheet.png';\n\n  // image.onload = function() {\n\n  //   let spriteSheet = SpriteSheet({\n  //     image: image,\n  //     frameWidth: 72,\n  //     frameHeight: 97,\n  //     animations: {\n  //       // create a named animation: walk\n  //       walk: {\n  //         frames: \"0..9\",  \n  //         frameRate: 30\n  //       }\n  //     }\n  //   });\n\n  //   let sprite = Sprite({\n  //     x: canvas.width / 2,\n  //     y: 305,\n  //     anchor: {x: 0.5, y: 0.5},\n\n  //     // use the sprite sheet animations for the sprite\n  //     animations: spriteSheet.animations\n  //   });\n\n  //   let loop = GameLoop({  // create the main game loop\n  //     update: function() { // update the game state\n  //       sprite.update();\n  //       block.update();\n\n  //       if(block.x < 0) {\n  //         block.x = canvas.width;\n  //       }\n  //     },\n  //     render: function() { // render the game state\n  //       sprite.render();\n  //       ground.render();\n  //       block.render();\n  //     }\n  //   });\n\n  //   loop.start();    // start the game\n  // };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQUEsbUJBQU8sQ0FBQyxzQ0FBYyxDQUFDO0FBQ3ZCOztBQUVrQztBQUVsQ0UsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBRWhELE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzlELElBQUlKLDZDQUFZLENBQUNHLGFBQWEsQ0FBQzs7RUFFL0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUlBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmlvbnNfcnVubmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9pbmRleC5zY3NzJylcbi8vIGltcG9ydCB7IGluaXQsIFNwcml0ZSwgU3ByaXRlU2hlZXQsIEdhbWVMb29wIH0gZnJvbSAna29udHJhJztcblxuaW1wb3J0IE1pbmlvblJ1bm5lciBmcm9tICcuL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1pbmlvbl9jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW9uX2NhbnZhcycpO1xuICAgIG5ldyBNaW5pb25SdW5uZXIobWluaW9uX2NhbnZhcyk7XG5cbiAgICAvLyBjb25zdCBtbyA9IG5ldyBNb3ZpbmdPYmplY3QoeyAvLyB0ZXN0IFxuICAgIC8vICAgICBwb3M6IFszMCwgMzBdLFxuICAgIC8vICAgICB2ZWw6IFsxMCwgMTBdLFxuICAgIC8vICAgICByYWRpdXM6IDUsXG4gICAgLy8gICAgIGNvbG9yOiBcIiMwMEZGMDBcIlxuICAgIC8vICAgfSk7XG5cbiAgICAvLyB3aW5kb3cubW8gPSBtbzsgLy8gdGVzdFxuXG4gICAgXG5cbiAgICAvLyBsZXQgeyBjYW52YXMgfSA9IGluaXQoKTtcbiAgICBcbiAgICAvLyBsZXQgYmxvY2sgPSBTcHJpdGUoe1xuICAgIC8vICAgeDogY2FudmFzLndpZHRoLCAgICAgICAgLy8gc3RhcnRpbmcgeCx5IHBvc2l0aW9uIG9mIHRoZSBtZVxuICAgIC8vICAgeTogY2FudmFzLmhlaWdodCAtIDUwLFxuICAgIC8vICAgY29sb3I6ICcjZmYwJywgIC8vIGZpbGwgY29sb3Igb2YgdGhlIG1lIHJlY3RhbmdsZVxuICAgIC8vICAgd2lkdGg6IDMwLCAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgbWUgcmVjdGFuZ2xlXG4gICAgLy8gICBoZWlnaHQ6IDIwLFxuICAgIC8vICAgZHg6IC0yLFxuICAgIC8vICAgYW5jaG9yOiB7eDogMSwgeTogMX1cbiAgICAvLyB9KTtcbiAgICBcbiAgICAvLyBsZXQgZ3JvdW5kID0gU3ByaXRlKHtcbiAgICAvLyAgIHg6IDAsXG4gICAgLy8gICB5OiBjYW52YXMuaGVpZ2h0IC0gNTAsXG4gICAgLy8gICBjb2xvcjogJyNhMGEwYTAnLFxuICAgIC8vICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAvLyAgIGhlaWdodDogNTAsXG4gICAgLy8gfSk7XG4gICAgXG4gICAgLy8gbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgLy8gaW1hZ2Uuc3JjID0gJ3NyYy9jaGFyYWN0ZXJfd2Fsa19zaGVldC5wbmcnO1xuICAgIFxuICAgIC8vIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgLy8gICBsZXQgc3ByaXRlU2hlZXQgPSBTcHJpdGVTaGVldCh7XG4gICAgLy8gICAgIGltYWdlOiBpbWFnZSxcbiAgICAvLyAgICAgZnJhbWVXaWR0aDogNzIsXG4gICAgLy8gICAgIGZyYW1lSGVpZ2h0OiA5NyxcbiAgICAvLyAgICAgYW5pbWF0aW9uczoge1xuICAgIC8vICAgICAgIC8vIGNyZWF0ZSBhIG5hbWVkIGFuaW1hdGlvbjogd2Fsa1xuICAgIC8vICAgICAgIHdhbGs6IHtcbiAgICAvLyAgICAgICAgIGZyYW1lczogXCIwLi45XCIsICBcbiAgICAvLyAgICAgICAgIGZyYW1lUmF0ZTogMzBcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIFxuICAgIC8vICAgbGV0IHNwcml0ZSA9IFNwcml0ZSh7XG4gICAgLy8gICAgIHg6IGNhbnZhcy53aWR0aCAvIDIsXG4gICAgLy8gICAgIHk6IDMwNSxcbiAgICAvLyAgICAgYW5jaG9yOiB7eDogMC41LCB5OiAwLjV9LFxuICAgIFxuICAgIC8vICAgICAvLyB1c2UgdGhlIHNwcml0ZSBzaGVldCBhbmltYXRpb25zIGZvciB0aGUgc3ByaXRlXG4gICAgLy8gICAgIGFuaW1hdGlvbnM6IHNwcml0ZVNoZWV0LmFuaW1hdGlvbnNcbiAgICAvLyAgIH0pO1xuICAgIFxuICAgIC8vICAgbGV0IGxvb3AgPSBHYW1lTG9vcCh7ICAvLyBjcmVhdGUgdGhlIG1haW4gZ2FtZSBsb29wXG4gICAgLy8gICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7IC8vIHVwZGF0ZSB0aGUgZ2FtZSBzdGF0ZVxuICAgIC8vICAgICAgIHNwcml0ZS51cGRhdGUoKTtcbiAgICAvLyAgICAgICBibG9jay51cGRhdGUoKTtcbiAgICBcbiAgICAvLyAgICAgICBpZihibG9jay54IDwgMCkge1xuICAgIC8vICAgICAgICAgYmxvY2sueCA9IGNhbnZhcy53aWR0aDtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC8vIHJlbmRlciB0aGUgZ2FtZSBzdGF0ZVxuICAgIC8vICAgICAgIHNwcml0ZS5yZW5kZXIoKTtcbiAgICAvLyAgICAgICBncm91bmQucmVuZGVyKCk7XG4gICAgLy8gICAgICAgYmxvY2sucmVuZGVyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIFxuICAgIC8vICAgbG9vcC5zdGFydCgpOyAgICAvLyBzdGFydCB0aGUgZ2FtZVxuICAgIC8vIH07XG5cbn0pIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJNaW5pb25SdW5uZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtaW5pb25fY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pb25zX3J1bm5lci8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;