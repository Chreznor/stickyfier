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
/***/ (function(module, exports, __webpack_require__) {

//It would take a lot of time to create 100 blocks. Therefore, I've made a small function to generate them.
function generateEntries() {
    const list = document.querySelector('.list');
    for (let i = 0; i < 100; i++) {
        const classes = ['red', 'wheat', 'crimson', 'green', 'coral', 'red', 'wheat', 'crimson', 'green', 'coral'];
        list.innerHTML +=
            ` <li class="list-container">
        <div class="headline-container ${classes[Math.floor(Math.random() * classes.length)]}">
          <h1>Headline #${i+1}</h1>
        </div>
        <div class="text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum harum assumenda voluptate sed! Ullam repellat eum qui necessitatibus odit illo, harum praesentium omnis reiciendis neque. Vel iure dicta, modi in, quidem aliquid exercitationem autem minima repudiandae hic est numquam totam nesciunt, ipsa ipsum. Velit hic, dolore numquam tempore voluptatum nesciunt! Minima soluta laborum doloremque? Ipsam, at excepturi nam necessitatibus, amet saepe. Velit eos, dolorum debitis? Doloribus vero, dolorum quia nesciunt soluta, sint unde tempora neque provident dolorem explicabo molestiae expedita delectus corporis, aut magni laboriosam cumque. Molestiae aperiam, dolore fugiat dolores amet! Itaque recusandae, repellendus magnam ullam aut accusantium?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur dicta, optio cumque adipisci fugit iure? Expedita sit eligendi, recusandae, quia repellat neque quis. Molestiae ab, beatae, laboriosam inventore dolorem esse deserunt, voluptatibus optio consequuntur aliquid distinctio? Aspernatur nemo atque, amet vel similique, voluptatum! Fugiat dolorem quam necessitatibus, ab excepturi ut praesentium quos aliquam soluta quibusdam error fuga voluptas et beatae quae architecto assumenda facere unde voluptates. Maxime, perspiciatis nostrum.</p>
        </div>
      </li>
      `;
    }
};
generateEntries();

const initializeBtn = document.querySelector('#initialize');
const disableBtn = document.querySelector('#disable');

const headlineContainers = document.querySelectorAll('.headline-container');
const listContainers = document.querySelectorAll('.list-container');


const stickyfier = __webpack_require__(1);
const methods = stickyfier(headlineContainers, listContainers);
initializeBtn.addEventListener('click', methods.initialize);
disableBtn.addEventListener('click', methods.disable);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const stickyfier = (HeadlineContainers, listContainers) => {

    let arr = [];

    const fixedHeadline = () => {
        for (var i = 0; i < HeadlineContainers.length; i++) {
            const headlineContainer = HeadlineContainers[i];
            const headlineContainerTop = headlineContainer.getBoundingClientRect().top + window.scrollY;
            const listEntry = listContainers[i];

            console.log(headlineContainerTop, headlineContainer.getBoundingClientRect().height, listEntry.getBoundingClientRect().top + window.scrollY, arr)

            if (arr.includes(Math.floor(headlineContainerTop)) === false) {
                if (arr.length < HeadlineContainers.length) {
                    arr.push(Math.floor(headlineContainerTop));
                }
            }

            // if ((arr[1] - arr[0]) - listEntry.getBoundingClientRect().height > 50) {
            //   arr = [];
            // }

            if (window.scrollY >= (listEntry.getBoundingClientRect().top + window.scrollY)) {
                listEntry.style.paddingTop = headlineContainer.getBoundingClientRect().height + 'px';
                headlineContainer.classList.add('fixed-nav');
            } else {
                listEntry.style.paddingTop = 0;
                headlineContainer.classList.remove('fixed-nav');
            }

            if (window.scrollY >= headlineContainerTop + headlineContainer.getBoundingClientRect().height) {
                headlineContainer.classList.add("bottom");
            } else {
                headlineContainer.classList.remove("bottom");
            }
        }
    }

    return {
        initialize() {
            window.addEventListener('scroll', fixedHeadline);
        },
        disable() {
            window.removeEventListener('scroll', fixedHeadline);
            HeadlineContainers.forEach(element => {
                element.classList.remove('fixed-nav');
                element.classList.remove('bottom');
            });
            listContainers.forEach(listEntry => {
                listEntry.style.paddingTop = 0;
            })
        }
    }

}

module.exports = stickyfier;


/***/ })
/******/ ]);