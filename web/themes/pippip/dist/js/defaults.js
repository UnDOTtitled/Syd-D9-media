/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/themes/pippip/assets/js/defaults.ts":
/*!*************************************************!*\
  !*** ./web/themes/pippip/assets/js/defaults.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");

var focus_within_1 = __importDefault(__webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs"));

var zenscroll_1 = __importDefault(__webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js"));

var vanilla_lazyload_1 = __importDefault(__webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js"));

var toggleDataAttr_1 = __importDefault(__webpack_require__(/*! ./utils/toggleDataAttr */ "./web/themes/pippip/assets/js/utils/toggleDataAttr.ts"));

__webpack_require__(/*! van11y-accessible-accordion-aria */ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js");

var baguettebox_js_1 = __importDefault(__webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js"));

focus_within_1["default"](document, {
  attr: false,
  className: 'focus-within'
});

if (document.querySelectorAll('.gallery')) {
  baguettebox_js_1["default"].run('.gallery');
}

var menuBurgerBtn = document.querySelector('.a-nav-toggle');

function toggleNav() {
  toggleDataAttr_1["default"](document.body, 'nav', 'open', 'closed');
}

if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener('click', toggleNav);
}

var links = document.querySelectorAll('a');
links.forEach(function (link) {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener');
  }
});
var lazyLoadImages = new vanilla_lazyload_1["default"]();
zenscroll_1["default"].setup(null, 0);

/***/ }),

/***/ "./web/themes/pippip/assets/js/utils/toggleDataAttr.ts":
/*!*************************************************************!*\
  !*** ./web/themes/pippip/assets/js/utils/toggleDataAttr.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function toggleDataAttr(el, dataname, onState, offState) {
  el.setAttribute("data-" + dataname, el.getAttribute("data-" + dataname) === onState ? offState : onState);
}

exports.default = toggleDataAttr;

/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){"use strict";var r,l,u,c,d,f='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',g='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',p='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',b={},v={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},m={},h=[],o=0,n=!1,i={},a=!1,y=/.+\.(gif|jpe?g|png|webp)/i,w={},k=[],s=null,x=function(e){-1!==e.target.id.indexOf("baguette-img")&&j()},E=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,D()},C=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,X()},B=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},T=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},N=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,D()):t.pageX-i.startX<-40?(a=!0,X()):100<i.startY-t.pageY&&j()}},L=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},A=function(){L()},P=function(e){"block"===r.style.display&&r.contains&&!r.contains(e.target)&&(e.stopPropagation(),Y())};function S(e){if(w.hasOwnProperty(e)){var t=w[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){W(e.imageElement,"click",e.eventHandler)}),h===e&&(h=[])}),delete w[e]}}function F(e){switch(e.keyCode){case 37:D();break;case 39:X();break;case 27:j();break;case 36:!function t(e){e&&e.preventDefault();return M(0)}(e);break;case 35:!function n(e){e&&e.preventDefault();return M(h.length-1)}(e)}}function H(e,t){if(h!==e){for(h=e,function s(e){e=e||{};for(var t in v)b[t]=v[t],"undefined"!=typeof e[t]&&(b[t]=e[t]);l.style.transition=l.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===h.length)&&(b.buttons=!1);u.style.display=c.style.display=b.buttons?"":"none";try{r.style.backgroundColor=b.overlayBackgroundColor}catch(n){}}(t);l.firstChild;)l.removeChild(l.firstChild);for(var n,o=[],i=[],a=k.length=0;a<e.length;a++)(n=J("div")).className="full-image",n.id="baguette-img-"+a,k.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),l.appendChild(k[a]);r.setAttribute("aria-labelledby",o.join(" ")),r.setAttribute("aria-describedby",i.join(" "))}}function I(e){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==r.style.display&&(U(document,"keydown",F),i={count:0,startX:null,startY:null},q(o=e,function(){z(o),V(o)}),R(),r.style.display="block",b.fullScreen&&function t(){r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.mozRequestFullScreen&&r.mozRequestFullScreen()}(),setTimeout(function(){r.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()},50),b.onChange&&b.onChange(o,k.length),s=document.activeElement,Y(),n=!0)}function Y(){b.buttons?u.focus():d.focus()}function j(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==r.style.display&&(W(document,"keydown",F),r.className="",setTimeout(function(){r.style.display="none",document.fullscreen&&function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),s&&s.focus(),n=!1},500))}function q(t,n){var e=k[t],o=h[t];if(void 0!==e&&void 0!==o)if(e.getElementsByTagName("img")[0])n&&n();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof b.captions?b.captions.call(h,i):i.getAttribute("data-caption")||i.title,r=function d(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;t=n[i[s]]||t}return t}(i),l=J("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&s){var u=J("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=s,l.appendChild(u)}e.appendChild(l);var c=J("img");c.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(e),!b.async&&n&&n()},c.setAttribute("src",r),c.alt=a&&a.alt||"",b.titleTag&&s&&(c.title=s),l.appendChild(c),b.async&&n&&n()}}function X(){return M(o+1)}function D(){return M(o-1)}function M(e,t){return!n&&0<=e&&e<t.length?(H(t,b),I(e),!0):e<0?(b.animation&&O("left"),!1):e>=k.length?(b.animation&&O("right"),!1):(q(o=e,function(){z(o),V(o)}),R(),b.onChange&&b.onChange(o,k.length),!0)}function O(e){l.className="bounce-from-"+e,setTimeout(function(){l.className=""},400)}function R(){var e=100*-o+"%";"fadeIn"===b.animation?(l.style.opacity=0,setTimeout(function(){m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e,l.style.opacity=1},400)):m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e}function z(e){e-o>=b.preload||q(e+1,function(){z(e+1)})}function V(e){o-e>=b.preload||q(e-1,function(){V(e-1)})}function U(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function W(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function G(e){return document.getElementById(e)}function J(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function K(e,t){return m.transforms=function n(){var e=J("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),m.svg=function o(){var e=J("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),m.passiveEvents=function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}(),function a(){if(r=G("baguetteBox-overlay"))return l=G("baguetteBox-slider"),u=G("previous-button"),c=G("next-button"),void(d=G("close-button"));(r=J("div")).setAttribute("role","dialog"),r.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(r),(l=J("div")).id="baguetteBox-slider",r.appendChild(l),(u=J("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=m.svg?f:"&lt;",r.appendChild(u),(c=J("button")).setAttribute("type","button"),c.id="next-button",c.setAttribute("aria-label","Next"),c.innerHTML=m.svg?g:"&gt;",r.appendChild(c),(d=J("button")).setAttribute("type","button"),d.id="close-button",d.setAttribute("aria-label","Close"),d.innerHTML=m.svg?p:"&times;",r.appendChild(d),u.className=c.className=d.className="baguetteBox-button",function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;U(r,"click",x),U(u,"click",E),U(c,"click",C),U(d,"click",B),U(l,"contextmenu",A),U(r,"touchstart",T,t),U(r,"touchmove",N,e),U(r,"touchend",L),U(document,"focus",P,!0)}()}(),S(e),function s(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return w[e]=n,[].forEach.call(t,function(e){a&&a.filter&&(y=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return y.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,H(i,a),I(t)},o={eventHandler:n,imageElement:e};U(e,"click",n),i.push(o)}),n.galleries.push(i)}}),n.galleries}(e,t)},show:M,showNext:X,showPrevious:D,hide:j,destroy:function e(){!function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;W(r,"click",x),W(u,"click",E),W(c,"click",C),W(d,"click",B),W(l,"contextmenu",A),W(r,"touchstart",T,t),W(r,"touchmove",N,e),W(r,"touchend",L),W(document,"focus",P,!0)}(),function t(){for(var e in w)w.hasOwnProperty(e)&&S(e)}(),W(document,"keydown",F),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),w={},h=[],o=0}}});

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/***/ (function() {

(function (global, factory) {
   true ? factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));


/***/ }),

/***/ "./node_modules/focus-within/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/focus-within/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function focusWithin(document, opts) {
  const className = Object(opts).className;
  const attr = Object(opts).attr || 'focus-within';
  const force = Object(opts).force;
  const lastElements = [];

  try {
    document.querySelector(':focus-within');

    if (!force) {
      return initialize;
    }
  } catch (ignoredError) {
    /* do nothing and continue */
  }

  function onfocuschange() {
    let lastElement;

    while (lastElement = lastElements.pop()) {
      if (attr) {
        lastElement.removeAttribute(attr);
      }

      if (className) {
        lastElement.classList.remove(className);
      }
    }

    let activeElement = document.activeElement; // only add focus if it has not been added and is not the document element

    if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
      while (activeElement && activeElement.nodeType === 1) {
        if (attr) {
          activeElement.setAttribute(attr, '');
        }

        if (className) {
          activeElement.classList.add(className);
        }

        lastElements.push(activeElement);
        activeElement = activeElement.parentNode;
      }
    }
  }

  function initialize() {
    document.addEventListener('focus', onfocuschange, true);
    document.addEventListener('blur', onfocuschange, true);
  }
  /**
  * Callback wrapper for check loaded state
  */

  /* eslint-disable */


  !function load() {
    if (/m/.test(document.readyState)) {
      document.removeEventListener('readystatechange', load) | initialize();
    } else {
      document.addEventListener('readystatechange', load);
    }
  }();
  /* eslint-enable */

  return initialize;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (focusWithin);
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./web/themes/pippip/assets/sass/global.scss":
/*!***************************************************!*\
  !*** ./web/themes/pippip/assets/sass/global.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./web/themes/pippip/assets/sass/print.scss":
/*!**************************************************!*\
  !*** ./web/themes/pippip/assets/sass/print.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js ***!
  \****************************************************************************************************/
/***/ (() => {

"use strict";
/**
 * van11y-accessible-accordion-aria - ES2015 accessible accordion system, using ARIA (compatible IE9+ when transpiled)
 * @version v3.0.1
 * @link https://van11y.net/accessible-accordion/
 * @license MIT : https://github.com/nico3333fr/van11y-accessible-accordion-aria/blob/master/LICENSE
 */
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},loadConfig=function(){var e={},t=function(t,r){e[t]=r},r=function(t){return e[t]},n=function(t){return e[t]};return{set:t,get:r,remove:n}},DATA_HASH_ID="data-hashaccordion-id",pluginConfig=loadConfig(),findById=function(e,t){return document.querySelector("#"+e+"["+DATA_HASH_ID+'="'+t+'"]')},addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setAttributes=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},searchParentHashId=function(e,t){for(var r=!1,n=e;1===n.nodeType&&n&&r===!1;)n.hasAttribute(t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute(t):""},searchParent=function(e,t,r){for(var n=!1,A=e;A&&n===!1;)hasClass(A,t)===!0&&A.getAttribute(DATA_HASH_ID)===r?n=!0:A=A.parentNode;return n===!0?A.getAttribute("id"):""},unSelectHeaders=function(e,t){e.forEach(function(e){setAttributes(e,_defineProperty({},t,"false"))})},selectHeader=function(e,t){e.setAttribute(t,!0)},selectHeaderInList=function(e,t,r){var n=void 0;e.forEach(function(e,t){"true"===e.getAttribute(r)&&(n=t)}),"next"===t&&(selectHeader(e[n+1]),setTimeout(function(){e[n+1].focus()},0)),"prev"===t&&(selectHeader(e[n-1]),setTimeout(function(){e[n-1].focus()},0))},plugin=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=_extends({ACCORDION_JS:"js-accordion",ACCORDION_JS_HEADER:"js-accordion__header",ACCORDION_JS_PANEL:"js-accordion__panel",ACCORDION_DATA_PREFIX_CLASS:"data-accordion-prefix-classes",ACCORDION_DATA_OPENED:"data-accordion-opened",ACCORDION_DATA_MULTISELECTABLE:"data-accordion-multiselectable",ACCORDION_DATA_COOL_SELECTORS:"data-accordion-cool-selectors",ACCORDION_PREFIX_IDS:"accordion",ACCORDION_BUTTON_ID:"_tab",ACCORDION_PANEL_ID:"_panel",ACCORDION_STYLE:"accordion",ACCORDION_TITLE_STYLE:"accordion__title",ACCORDION_HEADER_STYLE:"accordion__header",ACCORDION_PANEL_STYLE:"accordion__panel",ACCORDION_ROLE_TABLIST:"tablist",ACCORDION_ROLE_TAB:"tab",ACCORDION_ROLE_TABPANEL:"tabpanel",ATTR_ROLE:"role",ATTR_MULTISELECTABLE:"aria-multiselectable",ATTR_EXPANDED:"aria-expanded",ATTR_LABELLEDBY:"aria-labelledby",ATTR_HIDDEN:"aria-hidden",ATTR_CONTROLS:"aria-controls",ATTR_SELECTED:"aria-selected"},e),r=Math.random().toString(32).slice(2,12);pluginConfig.set(r,t);var n=function(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS))},A=function(e){n(e).forEach(function(e){var n="z"+Math.random().toString(32).slice(2,12),A=e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS)===!0?e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS)+"-":"",a=e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS)===!0;"none"===e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE)?e.setAttribute(t.ATTR_MULTISELECTABLE,"false"):e.setAttribute(t.ATTR_MULTISELECTABLE,"true"),e.setAttribute(t.ATTR_ROLE,t.ACCORDION_ROLE_TABLIST),e.setAttribute("id",n),e.setAttribute(DATA_HASH_ID,r),addClass(e,A+t.ACCORDION_STYLE);var i=[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS_HEADER));i.forEach(function(i,_){var o,T;if(i.parentNode===e||a!==!1){var E=_+1,s=i.nextElementSibling,C=i.innerHTML,c=document.createElement("BUTTON"),D=i.hasAttribute(t.ACCORDION_DATA_OPENED)===!0?i.getAttribute(t.ACCORDION_DATA_OPENED):"";c.innerHTML=C,addClass(c,t.ACCORDION_JS_HEADER),addClass(c,A+t.ACCORDION_HEADER_STYLE),setAttributes(c,(o={},_defineProperty(o,t.ATTR_ROLE,t.ACCORDION_ROLE_TAB),_defineProperty(o,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(o,t.ATTR_CONTROLS,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(o,t.ATTR_SELECTED,"false"),_defineProperty(o,"type","button"),_defineProperty(o,DATA_HASH_ID,r),o)),i.innerHTML="",i.appendChild(c),addClass(i,A+t.ACCORDION_TITLE_STYLE),removeClass(i,t.ACCORDION_JS_HEADER),addClass(s,A+t.ACCORDION_PANEL_STYLE),setAttributes(s,(T={},_defineProperty(T,t.ATTR_ROLE,t.ACCORDION_ROLE_TABPANEL),_defineProperty(T,t.ATTR_LABELLEDBY,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(T,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(T,DATA_HASH_ID,r),T)),"true"===D?(c.setAttribute(t.ATTR_EXPANDED,"true"),i.removeAttribute(t.ACCORDION_DATA_OPENED),s.setAttribute(t.ATTR_HIDDEN,"false")):(c.setAttribute(t.ATTR_EXPANDED,"false"),s.setAttribute(t.ATTR_HIDDEN,"true"))}})})};return{attach:A}},main=function(){return["click","keydown","focus"].forEach(function(e){document.body.addEventListener(e,function(t){var r=searchParentHashId(t.target,DATA_HASH_ID);""!==r&&!function(){var n=pluginConfig.get(r);hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"focus"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER));a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),unSelectHeaders(i,n.ATTR_SELECTED),selectHeader(e,n.ATTR_SELECTED)}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"click"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER)),_=A.getAttribute(n.ATTR_MULTISELECTABLE),o=findById(e.getAttribute(n.ATTR_CONTROLS),r),T=e.getAttribute(n.ATTR_EXPANDED);a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),"false"===T?(e.setAttribute(n.ATTR_EXPANDED,!0),o.removeAttribute(n.ATTR_HIDDEN)):(e.setAttribute(n.ATTR_EXPANDED,!1),o.setAttribute(n.ATTR_HIDDEN,!0)),"false"===_&&i.forEach(function(t){var A=findById(t.getAttribute(n.ATTR_CONTROLS),r);t!==e?(t.setAttribute(n.ATTR_SELECTED,!1),t.setAttribute(n.ATTR_EXPANDED,!1),A.setAttribute(n.ATTR_HIDDEN,!0)):t.setAttribute(n.ATTR_SELECTED,!0)}),setTimeout(function(){e.focus()},0),t.preventDefault()}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"keydown"===e&&!function(){var e=t.target,A=searchParent(e,n.ACCORDION_JS,r),a=findById(A,r),i=a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,_=[].slice.call(a.querySelectorAll("."+n.ACCORDION_JS_HEADER));i===!1&&(_=_.filter(function(e){return e.parentNode.parentNode===a})),36===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):35===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):37!==t.keyCode&&38!==t.keyCode||t.ctrlKey?40!==t.keyCode&&39!==t.keyCode||t.ctrlKey||("true"===_[_.length-1].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):(selectHeaderInList(_,"next",n.ATTR_SELECTED),t.preventDefault())):"true"===_[0].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):(selectHeaderInList(_,"prev",n.ATTR_SELECTED),t.preventDefault())}()}()},!0)}),plugin};window.van11yAccessibleAccordionAria=main();var onLoad=function e(){var t=window.van11yAccessibleAccordionAria();t.attach(),document.removeEventListener("DOMContentLoaded",e)};document.addEventListener("DOMContentLoaded",onLoad);

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",p=function(t,n){return t.getAttribute(g+n)},b=function(t){return p(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===b(t)},y=function(t){return b(t)===_},A=[l,u,d,f],I=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},x=function(t,n){t&&(t.loadingCount+=n)},z=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},j=function(t,n){N(t,"sizes",p(t,n.data_sizes)),N(t,"srcset",p(t,n.data_srcset)),N(t,"src",p(t,n.data_src))},D=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},F=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},P={IMG:function(t,n){F(t,(function(t){G(t),j(t,n)})),G(t),j(t,n)},IFRAME:function(t,n){N(t,"src",p(t,n.data_src))},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",p(t,n.data_src))}))}(t),N(t,"poster",p(t,n.data_poster)),N(t,"src",p(t,n.data_src)),t.load()}},S=function(t,n){var e=P[t.tagName];e&&e(t,n)},V=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),I(n.callback_loading,t,e)},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||I(t.callback_finish,n)},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},H=function(t,n,e){t.removeEventListener(n,e)},B=function(t){return!!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i)}delete t.llEvLisnrs}},K=function(t,n,e){!function(t){delete t.llTempImage}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e)},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),I(e.callback_loaded,n,i),o||$(e,i)}(0,t,n,e),J(i)}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),I(e.callback_error,n,i),o||$(e,i)}(0,t,n,e),J(i)}))},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,n,e),function(t,n,e){var i=p(t,n.data_bg),o=p(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),V(t,n,e))}(t,n,e),function(t,n,e){var i=p(t,n.data_bg_multi),o=p(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),I(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),S(t,n),V(t,n,e)}(t,n,e)},Y=["IMG","IFRAME"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e)}(t,e,i),I(e.callback_enter,t,n,i),function(t){return A.indexOf(b(t))>=0}(t)||X(t,e,i)}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return b(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){F(t,(function(t){D(t)})),D(t)}(t),function(t){F(t,(function(t){T(t)})),T(t)}(t),w(t,e.class_loading),x(i,-1),m(t),I(e.callback_cancel,t,n,i))}(t,n,e,i),I(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return b(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n)})),n.update()}(t,e)}))}(o,this),this.update(e)};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){Q(t,n,e),S(t,n),h(t,_)}(t,n,e))})),z(e,0)}(a,r,this):(o=a,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n)}))}},rt.load=function(t,n){var e=c(n);X(t,e)},rt.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(rt,window.lazyLoadOptions),rt}));


/***/ }),

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/defaults": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./web/themes/pippip/assets/js/defaults.ts"],
/******/ 			["./web/themes/pippip/assets/sass/global.scss"],
/******/ 			["./web/themes/pippip/assets/sass/print.scss"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksyd_d9"] = self["webpackChunksyd_d9"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeWQtZDkvLi93ZWIvdGhlbWVzL3BpcHBpcC9hc3NldHMvanMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL3V0aWxzL3RvZ2dsZURhdGFBdHRyLnRzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy9iYWd1ZXR0ZWJveC5qcy9kaXN0L2JhZ3VldHRlQm94Lm1pbi5qcyIsIndlYnBhY2s6Ly9zeWQtZDkvLi9ub2RlX21vZHVsZXMvZm9jdXMtdmlzaWJsZS9kaXN0L2ZvY3VzLXZpc2libGUuanMiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vbm9kZV9tb2R1bGVzL2ZvY3VzLXdpdGhpbi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3M/NmU0NSIsIndlYnBhY2s6Ly9zeWQtZDkvLi93ZWIvdGhlbWVzL3BpcHBpcC9hc3NldHMvc2Fzcy9wcmludC5zY3NzP2U5MGEiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vbm9kZV9tb2R1bGVzL3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhL2Rpc3QvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEubWluLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy92YW5pbGxhLWxhenlsb2FkL2Rpc3QvbGF6eWxvYWQubWluLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQSwwQkFBWSxRQUFaLEVBQXNCO0FBQ3BCLE1BQUksRUFBRSxLQURjO0FBRXBCLFdBQVMsRUFBRTtBQUZTLENBQXRCOztBQWtDQSxJQUFJLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixVQUExQixDQUFKLEVBQTJDO0FBQ3pDLDhCQUFZLEdBQVosQ0FBZ0IsVUFBaEI7QUFDRDs7QUFLRCxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUF0Qjs7QUFFQSxTQUFTLFNBQVQsR0FBa0I7QUFDaEIsOEJBQWUsUUFBUSxDQUFDLElBQXhCLEVBQThCLEtBQTlCLEVBQXFDLE1BQXJDLEVBQTZDLFFBQTdDO0FBQ0Q7O0FBRUQsSUFBSSxhQUFKLEVBQW1CO0FBQ2pCLGVBQWEsQ0FBQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxTQUF4QztBQUNEOztBQUtELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixHQUExQixDQUFkO0FBRUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxnQkFBSTtBQUNoQixNQUFJLElBQUksQ0FBQyxRQUFMLElBQWlCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLFFBQXJDLEVBQStDO0FBQzdDLFFBQUksQ0FBQyxZQUFMLENBQWtCLEtBQWxCLEVBQXlCLG1CQUF6QjtBQUNEO0FBQ0YsQ0FKRDtBQU9BLElBQU0sY0FBYyxHQUFHLElBQUksNkJBQUosRUFBdkI7QUFNQSx1QkFBVSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLENBQXRCLEU7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQztBQUMzQjs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxnQ0FBZ0MseUNBQXlDLGtEQUFrRCxXQUFXLHdDQUF3QyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx1QkFBdUIsUUFBUSxpQkFBaUIsT0FBTyxlQUFlLFlBQVksZUFBZSxhQUFhLE9BQU8sc0JBQXNCLHVGQUF1RixrRUFBa0Usd0JBQXdCLGtEQUFrRCwyQkFBMkIsbUlBQW1JLHdCQUF3QixnR0FBZ0csNkJBQTZCLG1DQUFtQyx1QkFBdUIsRUFBRSxrQ0FBa0MsaUJBQWlCLDBCQUEwQiw0Q0FBNEMsbUNBQW1DLDhCQUE4QixpQkFBaUIsVUFBVSwwRUFBMEUsc0NBQXNDLCtCQUErQixzQkFBc0Isa0NBQWtDLGFBQWEsRUFBRSw0QkFBNEIscUJBQXFCLG9DQUFvQyxhQUFhLHdCQUF3QixrQ0FBa0MsMERBQTBELGVBQWUsNkRBQTZELGVBQWUsS0FBSyxtQkFBbUIsbURBQW1ELDBCQUEwQix5M0JBQXkzQiw2Q0FBNkMsc0JBQXNCLGlCQUFpQix1RUFBdUUsNERBQTRELGVBQWUseUJBQXlCLGtOQUFrTixrU0FBa1MsbUVBQW1FLHdCQUF3QixRQUFRLDZCQUE2Qiw0S0FBNEssNEdBQTRHLDJlQUEyZSxtZEFBbWQsRUFBRSxHQUFHLE9BQU8sVUFBVSxpQkFBaUIsc0RBQXNELDZDQUE2QyxnREFBZ0Qsb0JBQW9CLDBCQUEwQix3RUFBd0Usb0xBQW9MLGdDQUFnQyxtQ0FBbUMsc0VBQXNFLDJFQUEyRSw2U0FBNlMsZ0NBQWdDLG1DQUFtQyw4TEFBOEwsa0RBQWtELGtKQUFrSix3QkFBd0IsVUFBVSx1QkFBdUIsNkVBQTZFLHdMQUF3TCxnQ0FBZ0MsbUNBQW1DLCtHQUErRyxhQUFhLDZJQUE2SSxzQkFBc0IsZ1FBQWdRLGFBQWEsNk9BQTZPLHNCQUFzQiwwRkFBMEYsR0FBRyxHQUFHLEtBQUssVUFBVSw0Q0FBNEMsd0JBQXdCLDZDQUE2QywrREFBK0QscUQ7Ozs7Ozs7Ozs7QUNOMXBQLGVBQWUsS0FBb0Qsb0JBQW9CLENBQXdFLENBQUMsa0JBQWtCLGFBQWEsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMsd0JBQXdCLDZRQUE2USwrbkJBQStuQixlQUFlLFdBQVcsTUFBTSxpQkFBaUIsMkNBQTJDLElBQUkscUJBQXFCLFFBQVEsWUFBWSxFQUFFLFNBQVMsaUVBQWlFLFdBQVcsRUFBRSx3QkFBd0IsaUdBQWlHLDJCQUEyQixlQUFlLGNBQWMsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0RBQWtELFFBQVEsZUFBZSxpQkFBaUIsZUFBZSxtQkFBbUIsZUFBZSxnQkFBZ0IsaUNBQWlDLGdEQUFnRCxpQkFBaUIseURBQXlELGlCQUFpQix1SUFBdUksZUFBZSxxQkFBcUIsaUJBQWlCLE1BQU0sa0JBQWtCLG1CQUFtQixpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsZUFBZSxtQkFBbUIsZ0JBQWdCLHFDQUFxQyxTQUFTLG1CQUFtQix1QkFBdUIsaUJBQWlCLHFCQUFxQixlQUFlLDBCQUEwQixlQUFlLFVBQVUsU0FBUyxtSEFBbUgsZUFBZSxTQUFTLHdCQUF3Qiw4REFBOEQsaUJBQWlCLDJGQUEyRixlQUFlLHNDQUFzQyxpQkFBaUIsbUJBQW1CLDBDQUEwQyxJQUFJLGtCQUFrQixpQkFBaUIsWUFBWSxlQUFlLHNCQUFzQiwyQkFBMkIscUJBQXFCLGVBQWUsMEJBQTBCLDJCQUEyQixHQUFHLDBFQUEwRSxpQkFBaUIsbUJBQW1CLFVBQVUsbUJBQW1CLDZEQUE2RCw0Q0FBNEMsZ0JBQWdCLHdCQUF3QixpQkFBaUIsdUJBQXVCLDRCQUE0QixtQkFBbUIsMENBQTBDLG1CQUFtQiwyQkFBMkIsZUFBZSxxQkFBcUIsZUFBZSxTQUFTLG1CQUFtQixnQkFBZ0IsV0FBVyxTQUFTLHFCQUFxQixtQkFBbUIsYUFBYSxxQkFBcUIsd0JBQXdCLHNCQUFzQix1REFBdUQsbUJBQW1CLGNBQWMsc0JBQXNCLHNCQUFzQixFQUFFLDhDQUE4Qyx3QkFBd0IsZ0JBQWdCLG1CQUFtQixXQUFXLHVFQUF1RSxlQUFlLGVBQWUsbUJBQW1CLFdBQVcscUVBQXFFLGVBQWUsR0FBRyxtQkFBbUIsYUFBYSw0Q0FBNEMsNkJBQTZCLHVEQUF1RCx3RkFBd0Ysd0JBQXdCLG1FQUFtRSw4Q0FBOEMsb0ZBQW9GLFNBQVMsUUFBUSxtQkFBbUIsYUFBYSwrQkFBK0IsNkJBQTZCLHlCQUF5QixRQUFRLGtDQUFrQyw0REFBNEQsb0JBQW9CLHVCQUF1QixtQkFBbUIsK0NBQStDLHNCQUFzQix3RUFBd0UsNEJBQTRCLDhDQUE4QywwQkFBMEIsY0FBYyxtQ0FBbUMsNkNBQTZDLDhCQUE4QixnQkFBZ0IsMENBQTBDLGlCQUFpQixLQUFLLFFBQVEsZ0JBQWdCLGlCQUFpQixLQUFLLFFBQVEsa0VBQWtFLG9DQUFvQyxpQkFBaUIsR0FBRyxnQkFBZ0IscUNBQXFDLGdCQUFnQix5REFBeUQsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsSUFBSSxrQkFBa0IsbUJBQW1CLHVCQUF1QixXQUFXLGtCQUFrQixXQUFXLG1EQUFtRCw2REFBNkQsVUFBVSxjQUFjLE9BQU8sd0ZBQXdGLE1BQU0sdUJBQXVCLGdEQUFnRCxlQUFlLE1BQU0sZ0RBQWdELHdCQUF3QixjQUFjLE1BQU0sR0FBRyx5QkFBeUIscUJBQXFCLG1CQUFtQixtQ0FBbUMsNENBQTRDLHVCQUF1Qiw2RUFBNkUsdUJBQXVCLFNBQVMsVUFBVSw0QkFBNEIsZUFBZSxpQ0FBaUMsdUJBQXVCLGFBQWEsR0FBRyx1QkFBdUIsb0JBQW9CLG9GQUFvRix5QkFBeUIsZ0dBQWdHLHFCQUFxQiw0QkFBNEIsNkJBQTZCLGdCQUFnQixJQUFJLHVCQUF1QixXQUFXLE9BQU8sNEJBQTRCLEtBQUssa0JBQWtCLCtCQUErQixPQUFPLFlBQVksWUFBWSwrQkFBK0I7Ozs7Ozs7Ozs7O0FDQTcxTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxpQ0FBTyxFQUFFLG9DQUFFLFNBQVM7QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDdkIsRUFBRSxNQUFNLEVBWU47QUFDRixDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBLDBCQUEwQixvREFBb0Q7QUFDOUUsNkJBQTZCO0FBQzdCLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQsc0JBQXNCLG1DQUFtQztBQUN6RCwyQkFBMkIsNEZBQTRGO0FBQ3ZILDhCQUE4QjtBQUM5QixHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTs7O0FBR0EsQ0FBQzs7Ozs7OztVQ3BXRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7OztVQ3RGQTtVQUNBIiwiZmlsZSI6Ii9qcy9kZWZhdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm9jdXMtdmlzaWJsZSdcbmltcG9ydCBGb2N1c1dpdGhpbiBmcm9tICdmb2N1cy13aXRoaW4nXG5pbXBvcnQgemVuc2Nyb2xsIGZyb20gJ3plbnNjcm9sbCdcbmltcG9ydCBMYXp5TG9hZCBmcm9tICd2YW5pbGxhLWxhenlsb2FkJ1xuaW1wb3J0IHRvZ2dsZURhdGFBdHRyIGZyb20gJy4vdXRpbHMvdG9nZ2xlRGF0YUF0dHInXG5pbXBvcnQgJ3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhJ1xuaW1wb3J0IGJhZ3VldHRlQm94IGZyb20gJ2JhZ3VldHRlYm94LmpzJ1xuLy9pbXBvcnQgQ2hvaWNlcyBmcm9tICdjaG9pY2VzLmpzJztcblxuLyoqXG4gKiBGb2N1cyB3aXRoaW4gcG9seWZpbGxcbiAqL1xuRm9jdXNXaXRoaW4oZG9jdW1lbnQsIHtcbiAgYXR0cjogZmFsc2UsXG4gIGNsYXNzTmFtZTogJ2ZvY3VzLXdpdGhpbicsXG59KVxuXG4vKlxuICBCZXR0ZXIgPHNlbGVjdD4gZWxlbWVudHNcbiAgdXJsOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9jaG9pY2VzLmpzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgVXNhZ2U6XG4gIFNlbGVjdHMgYWxsIDxzZWxlY3Q+IGVsZW1lbnRzIGJ5IGRlZmF1bHRcblxuICBOb3RlOiBJZiBub3QgdXNpbmcsIHJlbW92ZSBAaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvYXNzZXRzL3N0eWxlcy9zY3NzL2Nob2ljZXNcIjsgZnJvbSBgYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3NgXG4qL1xuLy8gaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpLmxlbmd0aCA+IDApIHtcbi8vICAgY29uc3Qgc2VsZWN0RWxlbWVudHMgPSBuZXcgQ2hvaWNlcygnc2VsZWN0Jyk7XG4vLyB9XG5cbi8qXG4gIEltYWdlIGdhbGxlcmllc1xuICB1cmw6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZsaWNraXR5XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgVXNhZ2U6XG4gIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG4gICAgICA8YSBocmVmPVwicGF0aC10by1sYXJnZS1pbWFnZVwiIGRhdGEtY2FwdGlvbj1cIlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwicGF0aC10by10aHVtYm5haWxcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9hPlxuICA8L2Rpdj5cblxuICBOb3RlOiBJZiBub3QgdXNpbmcsIHJlbW92ZSBAaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL3NyYy9iYWd1ZXR0ZUJveFwiOyBmcm9tIGBhc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc2BcbiovXG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeScpKSB7XG4gIGJhZ3VldHRlQm94LnJ1bignLmdhbGxlcnknKVxufVxuXG4vKlxuICBNZW51IGJ1cmdlclxuKi9cbmNvbnN0IG1lbnVCdXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1uYXYtdG9nZ2xlJylcblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICB0b2dnbGVEYXRhQXR0cihkb2N1bWVudC5ib2R5LCAnbmF2JywgJ29wZW4nLCAnY2xvc2VkJylcbn1cblxuaWYgKG1lbnVCdXJnZXJCdG4pIHtcbiAgbWVudUJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdilcbn1cblxuLypcbiAgQXV0b21hdGljYWxseSBzZXQgZXh0ZXJuYWwgbGlua3MgdG8gaGF2ZSBub2ZvbGxvdy9ub29wZW5lciBhdHRyc1xuKi9cbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbmxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gIGlmIChsaW5rLmhvc3RuYW1lICE9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkge1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9mb2xsb3cgbm9vcGVuZXInKVxuICB9XG59KVxuXG4vLyBMYXp5TG9hZFxuY29uc3QgbGF6eUxvYWRJbWFnZXMgPSBuZXcgTGF6eUxvYWQoKVxuXG4vKlxuICBaZW5zY3JvbGxcbiAgLSBTZXQgZWRnZSBvZmZzZXQgdG8gMCB0byBwcmV2bmV0IGJyZWFraW5nIHRhYiBvcmRlclxuKi9cbnplbnNjcm9sbC5zZXR1cChudWxsLCAwKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGF0YUF0dHIoXG4gIGVsOiBFbGVtZW50LFxuICBkYXRhbmFtZTogc3RyaW5nLFxuICBvblN0YXRlOiBzdHJpbmcsXG4gIG9mZlN0YXRlOiBzdHJpbmdcbikge1xuICBlbC5zZXRBdHRyaWJ1dGUoXG4gICAgYGRhdGEtJHtkYXRhbmFtZX1gLFxuICAgIGVsLmdldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFuYW1lfWApID09PSBvblN0YXRlID8gb2ZmU3RhdGUgOiBvblN0YXRlXG4gIClcbn1cbiIsIi8qIVxuICogYmFndWV0dGVCb3guanNcbiAqIEBhdXRob3IgIGZlaW1vc2lcbiAqIEB2ZXJzaW9uIDEuMTEuMVxuICogQHVybCBodHRwczovL2dpdGh1Yi5jb20vZmVpbW9zaS9iYWd1ZXR0ZUJveC5qc1xuICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLmJhZ3VldHRlQm94PXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciByLGwsdSxjLGQsZj0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMzAgMTAgMTAgMzAgMzAgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsZz0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMTQgMTAgMzQgMzAgMTQgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicscD0nPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48ZyBzdHJva2U9XCJyZ2IoMTYwLDE2MCwxNjApXCIgc3Ryb2tlLXdpZHRoPVwiNFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiNVwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIvPjxsaW5lIHgxPVwiNVwiIHkxPVwiMjVcIiB4Mj1cIjI1XCIgeTI9XCI1XCIvPjwvZz48L3N2Zz4nLGI9e30sdj17Y2FwdGlvbnM6ITAsYnV0dG9uczpcImF1dG9cIixmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSxib2R5Q2xhc3M6XCJiYWd1ZXR0ZUJveC1vcGVuXCIsdGl0bGVUYWc6ITEsYXN5bmM6ITEscHJlbG9hZDoyLGFuaW1hdGlvbjpcInNsaWRlSW5cIixhZnRlclNob3c6bnVsbCxhZnRlckhpZGU6bnVsbCxvbkNoYW5nZTpudWxsLG92ZXJsYXlCYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC44KVwifSxtPXt9LGg9W10sbz0wLG49ITEsaT17fSxhPSExLHk9Ly4rXFwuKGdpZnxqcGU/Z3xwbmd8d2VicCkvaSx3PXt9LGs9W10scz1udWxsLHg9ZnVuY3Rpb24oZSl7LTEhPT1lLnRhcmdldC5pZC5pbmRleE9mKFwiYmFndWV0dGUtaW1nXCIpJiZqKCl9LEU9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxEKCl9LEM9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxYKCl9LEI9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxqKCl9LFQ9ZnVuY3Rpb24oZSl7aS5jb3VudCsrLDE8aS5jb3VudCYmKGkubXVsdGl0b3VjaD0hMCksaS5zdGFydFg9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxpLnN0YXJ0WT1lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZfSxOPWZ1bmN0aW9uKGUpe2lmKCFhJiYhaS5tdWx0aXRvdWNoKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExO3ZhciB0PWUudG91Y2hlc1swXXx8ZS5jaGFuZ2VkVG91Y2hlc1swXTs0MDx0LnBhZ2VYLWkuc3RhcnRYPyhhPSEwLEQoKSk6dC5wYWdlWC1pLnN0YXJ0WDwtNDA/KGE9ITAsWCgpKToxMDA8aS5zdGFydFktdC5wYWdlWSYmaigpfX0sTD1mdW5jdGlvbigpe2kuY291bnQtLSxpLmNvdW50PD0wJiYoaS5tdWx0aXRvdWNoPSExKSxhPSExfSxBPWZ1bmN0aW9uKCl7TCgpfSxQPWZ1bmN0aW9uKGUpe1wiYmxvY2tcIj09PXIuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyYmIXIuY29udGFpbnMoZS50YXJnZXQpJiYoZS5zdG9wUHJvcGFnYXRpb24oKSxZKCkpfTtmdW5jdGlvbiBTKGUpe2lmKHcuaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PXdbZV0uZ2FsbGVyaWVzO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe1tdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpe1coZS5pbWFnZUVsZW1lbnQsXCJjbGlja1wiLGUuZXZlbnRIYW5kbGVyKX0pLGg9PT1lJiYoaD1bXSl9KSxkZWxldGUgd1tlXX19ZnVuY3Rpb24gRihlKXtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDM3OkQoKTticmVhaztjYXNlIDM5OlgoKTticmVhaztjYXNlIDI3OmooKTticmVhaztjYXNlIDM2OiFmdW5jdGlvbiB0KGUpe2UmJmUucHJldmVudERlZmF1bHQoKTtyZXR1cm4gTSgwKX0oZSk7YnJlYWs7Y2FzZSAzNTohZnVuY3Rpb24gbihlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oaC5sZW5ndGgtMSl9KGUpfX1mdW5jdGlvbiBIKGUsdCl7aWYoaCE9PWUpe2ZvcihoPWUsZnVuY3Rpb24gcyhlKXtlPWV8fHt9O2Zvcih2YXIgdCBpbiB2KWJbdF09dlt0XSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZVt0XSYmKGJbdF09ZVt0XSk7bC5zdHlsZS50cmFuc2l0aW9uPWwuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImZhZGVJblwiPT09Yi5hbmltYXRpb24/XCJvcGFjaXR5IC40cyBlYXNlXCI6XCJzbGlkZUluXCI9PT1iLmFuaW1hdGlvbj9cIlwiOlwibm9uZVwiLFwiYXV0b1wiPT09Yi5idXR0b25zJiYoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8MT09PWgubGVuZ3RoKSYmKGIuYnV0dG9ucz0hMSk7dS5zdHlsZS5kaXNwbGF5PWMuc3R5bGUuZGlzcGxheT1iLmJ1dHRvbnM/XCJcIjpcIm5vbmVcIjt0cnl7ci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Yi5vdmVybGF5QmFja2dyb3VuZENvbG9yfWNhdGNoKG4pe319KHQpO2wuZmlyc3RDaGlsZDspbC5yZW1vdmVDaGlsZChsLmZpcnN0Q2hpbGQpO2Zvcih2YXIgbixvPVtdLGk9W10sYT1rLmxlbmd0aD0wO2E8ZS5sZW5ndGg7YSsrKShuPUooXCJkaXZcIikpLmNsYXNzTmFtZT1cImZ1bGwtaW1hZ2VcIixuLmlkPVwiYmFndWV0dGUtaW1nLVwiK2Esay5wdXNoKG4pLG8ucHVzaChcImJhZ3VldHRlQm94LWZpZ3VyZS1cIithKSxpLnB1c2goXCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2EpLGwuYXBwZW5kQ2hpbGQoa1thXSk7ci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixvLmpvaW4oXCIgXCIpKSxyLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmpvaW4oXCIgXCIpKX19ZnVuY3Rpb24gSShlKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiKSxcImJsb2NrXCIhPT1yLnN0eWxlLmRpc3BsYXkmJihVKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGk9e2NvdW50OjAsc3RhcnRYOm51bGwsc3RhcnRZOm51bGx9LHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLHIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYi5mdWxsU2NyZWVuJiZmdW5jdGlvbiB0KCl7ci5yZXF1ZXN0RnVsbHNjcmVlbj9yLnJlcXVlc3RGdWxsc2NyZWVuKCk6ci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9yLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6ci5tb3pSZXF1ZXN0RnVsbFNjcmVlbiYmci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpfSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLmNsYXNzTmFtZT1cInZpc2libGVcIixiLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChiLmJvZHlDbGFzcyksYi5hZnRlclNob3cmJmIuYWZ0ZXJTaG93KCl9LDUwKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLHM9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxZKCksbj0hMCl9ZnVuY3Rpb24gWSgpe2IuYnV0dG9ucz91LmZvY3VzKCk6ZC5mb2N1cygpfWZ1bmN0aW9uIGooKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpLFwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiYoVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxyLmNsYXNzTmFtZT1cIlwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuZnVsbHNjcmVlbiYmZnVuY3Rpb24gZSgpe2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbj9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk6ZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCl9KCksYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJIaWRlJiZiLmFmdGVySGlkZSgpLHMmJnMuZm9jdXMoKSxuPSExfSw1MDApKX1mdW5jdGlvbiBxKHQsbil7dmFyIGU9a1t0XSxvPWhbdF07aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09bylpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKW4mJm4oKTtlbHNle3ZhciBpPW8uaW1hZ2VFbGVtZW50LGE9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY2FwdGlvbnM/Yi5jYXB0aW9ucy5jYWxsKGgsaSk6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIil8fGkudGl0bGUscj1mdW5jdGlvbiBkKGUpe3ZhciB0PWUuaHJlZjtpZihlLmRhdGFzZXQpe3ZhciBuPVtdO2Zvcih2YXIgbyBpbiBlLmRhdGFzZXQpXCJhdC1cIiE9PW8uc3Vic3RyaW5nKDAsMyl8fGlzTmFOKG8uc3Vic3RyaW5nKDMpKXx8KG5bby5yZXBsYWNlKFwiYXQtXCIsXCJcIildPWUuZGF0YXNldFtvXSk7Zm9yKHZhciBpPU9iamVjdC5rZXlzKG4pLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gcGFyc2VJbnQoZSwxMCk8cGFyc2VJbnQodCwxMCk/LTE6MX0pLGE9d2luZG93LmlubmVyV2lkdGgqd2luZG93LmRldmljZVBpeGVsUmF0aW8scz0wO3M8aS5sZW5ndGgtMSYmaVtzXTxhOylzKys7dD1uW2lbc11dfHx0fXJldHVybiB0fShpKSxsPUooXCJmaWd1cmVcIik7aWYobC5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIit0LGwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtc3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMlwiPjwvZGl2PjwvZGl2PicsYi5jYXB0aW9ucyYmcyl7dmFyIHU9SihcImZpZ2NhcHRpb25cIik7dS5pZD1cImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrdCx1LmlubmVySFRNTD1zLGwuYXBwZW5kQ2hpbGQodSl9ZS5hcHBlbmRDaGlsZChsKTt2YXIgYz1KKFwiaW1nXCIpO2Mub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrdCtcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtsLnJlbW92ZUNoaWxkKGUpLCFiLmFzeW5jJiZuJiZuKCl9LGMuc2V0QXR0cmlidXRlKFwic3JjXCIsciksYy5hbHQ9YSYmYS5hbHR8fFwiXCIsYi50aXRsZVRhZyYmcyYmKGMudGl0bGU9cyksbC5hcHBlbmRDaGlsZChjKSxiLmFzeW5jJiZuJiZuKCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm4gTShvKzEpfWZ1bmN0aW9uIEQoKXtyZXR1cm4gTShvLTEpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4hbiYmMDw9ZSYmZTx0Lmxlbmd0aD8oSCh0LGIpLEkoZSksITApOmU8MD8oYi5hbmltYXRpb24mJk8oXCJsZWZ0XCIpLCExKTplPj1rLmxlbmd0aD8oYi5hbmltYXRpb24mJk8oXCJyaWdodFwiKSwhMSk6KHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLGIub25DaGFuZ2UmJmIub25DaGFuZ2UobyxrLmxlbmd0aCksITApfWZ1bmN0aW9uIE8oZSl7bC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1cIitlLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLmNsYXNzTmFtZT1cIlwifSw0MDApfWZ1bmN0aW9uIFIoKXt2YXIgZT0xMDAqLW8rXCIlXCI7XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uPyhsLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bS50cmFuc2Zvcm1zP2wuc3R5bGUudHJhbnNmb3JtPWwuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6bC5zdHlsZS5sZWZ0PWUsbC5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOm0udHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lfWZ1bmN0aW9uIHooZSl7ZS1vPj1iLnByZWxvYWR8fHEoZSsxLGZ1bmN0aW9uKCl7eihlKzEpfSl9ZnVuY3Rpb24gVihlKXtvLWU+PWIucHJlbG9hZHx8cShlLTEsZnVuY3Rpb24oKXtWKGUtMSl9KX1mdW5jdGlvbiBVKGUsdCxuLG8pe2UuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIodCxuLG8pOmUuYXR0YWNoRXZlbnQoXCJvblwiK3QsZnVuY3Rpb24oZSl7KGU9ZXx8d2luZG93LmV2ZW50KS50YXJnZXQ9ZS50YXJnZXR8fGUuc3JjRWxlbWVudCxuKGUpfSl9ZnVuY3Rpb24gVyhlLHQsbixvKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixvKTplLmRldGFjaEV2ZW50KFwib25cIit0LG4pfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfWZ1bmN0aW9uIEooZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSl9cmV0dXJuW10uZm9yRWFjaHx8KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspZS5jYWxsKHQsdGhpc1tuXSxuLHRoaXMpfSksW10uZmlsdGVyfHwoQXJyYXkucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihlLHQsbixvLGkpe2ZvcihuPXRoaXMsbz1bXSxpPTA7aTxuLmxlbmd0aDtpKyspZS5jYWxsKHQsbltpXSxpLG4pJiZvLnB1c2gobltpXSk7cmV0dXJuIG99KSx7cnVuOmZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gbS50cmFuc2Zvcm1zPWZ1bmN0aW9uIG4oKXt2YXIgZT1KKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX0oKSxtLnN2Zz1mdW5jdGlvbiBvKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0oZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX0oKSxtLnBhc3NpdmVFdmVudHM9ZnVuY3Rpb24gaSgpe3ZhciBlPSExO3RyeXt2YXIgdD1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2U9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbnVsbCx0KX1jYXRjaChuKXt9cmV0dXJuIGV9KCksZnVuY3Rpb24gYSgpe2lmKHI9RyhcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpcmV0dXJuIGw9RyhcImJhZ3VldHRlQm94LXNsaWRlclwiKSx1PUcoXCJwcmV2aW91cy1idXR0b25cIiksYz1HKFwibmV4dC1idXR0b25cIiksdm9pZChkPUcoXCJjbG9zZS1idXR0b25cIikpOyhyPUooXCJkaXZcIikpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSxyLmlkPVwiYmFndWV0dGVCb3gtb3ZlcmxheVwiLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChyKSwobD1KKFwiZGl2XCIpKS5pZD1cImJhZ3VldHRlQm94LXNsaWRlclwiLHIuYXBwZW5kQ2hpbGQobCksKHU9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLHUuaWQ9XCJwcmV2aW91cy1idXR0b25cIix1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlByZXZpb3VzXCIpLHUuaW5uZXJIVE1MPW0uc3ZnP2Y6XCImbHQ7XCIsci5hcHBlbmRDaGlsZCh1KSwoYz1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5pZD1cIm5leHQtYnV0dG9uXCIsYy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJOZXh0XCIpLGMuaW5uZXJIVE1MPW0uc3ZnP2c6XCImZ3Q7XCIsci5hcHBlbmRDaGlsZChjKSwoZD1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZC5pZD1cImNsb3NlLWJ1dHRvblwiLGQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiQ2xvc2VcIiksZC5pbm5lckhUTUw9bS5zdmc/cDpcIiZ0aW1lcztcIixyLmFwcGVuZENoaWxkKGQpLHUuY2xhc3NOYW1lPWMuY2xhc3NOYW1lPWQuY2xhc3NOYW1lPVwiYmFndWV0dGVCb3gtYnV0dG9uXCIsZnVuY3Rpb24gbigpe3ZhciBlPW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMX06bnVsbCx0PW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMH06bnVsbDtVKHIsXCJjbGlja1wiLHgpLFUodSxcImNsaWNrXCIsRSksVShjLFwiY2xpY2tcIixDKSxVKGQsXCJjbGlja1wiLEIpLFUobCxcImNvbnRleHRtZW51XCIsQSksVShyLFwidG91Y2hzdGFydFwiLFQsdCksVShyLFwidG91Y2htb3ZlXCIsTixlKSxVKHIsXCJ0b3VjaGVuZFwiLEwpLFUoZG9jdW1lbnQsXCJmb2N1c1wiLFAsITApfSgpfSgpLFMoZSksZnVuY3Rpb24gcyhlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksbj17Z2FsbGVyaWVzOltdLG5vZGVMaXN0OnR9O3JldHVybiB3W2VdPW4sW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7YSYmYS5maWx0ZXImJih5PWEuZmlsdGVyKTt2YXIgdD1bXTtpZih0PVwiQVwiPT09ZS50YWdOYW1lP1tlXTplLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSwwIT09KHQ9W10uZmlsdGVyLmNhbGwodCxmdW5jdGlvbihlKXtpZigtMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoYSYmYS5pZ25vcmVDbGFzcykpcmV0dXJuIHkudGVzdChlLmhyZWYpfSkpLmxlbmd0aCl7dmFyIGk9W107W10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLEgoaSxhKSxJKHQpfSxvPXtldmVudEhhbmRsZXI6bixpbWFnZUVsZW1lbnQ6ZX07VShlLFwiY2xpY2tcIixuKSxpLnB1c2gobyl9KSxuLmdhbGxlcmllcy5wdXNoKGkpfX0pLG4uZ2FsbGVyaWVzfShlLHQpfSxzaG93Ok0sc2hvd05leHQ6WCxzaG93UHJldmlvdXM6RCxoaWRlOmosZGVzdHJveTpmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uIG4oKXt2YXIgZT1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITF9Om51bGwsdD1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VyhyLFwiY2xpY2tcIix4KSxXKHUsXCJjbGlja1wiLEUpLFcoYyxcImNsaWNrXCIsQyksVyhkLFwiY2xpY2tcIixCKSxXKGwsXCJjb250ZXh0bWVudVwiLEEpLFcocixcInRvdWNoc3RhcnRcIixULHQpLFcocixcInRvdWNobW92ZVwiLE4sZSksVyhyLFwidG91Y2hlbmRcIixMKSxXKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKSxmdW5jdGlvbiB0KCl7Zm9yKHZhciBlIGluIHcpdy5oYXNPd25Qcm9wZXJ0eShlKSYmUyhlKX0oKSxXKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLHc9e30saD1bXSxvPTB9fX0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIDpmb2N1cy12aXNpYmxlIHBvbHlmaWxsIGF0IHRoZSBnaXZlbiBzY29wZS5cbiAgICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8U2hhZG93Um9vdCl9IHNjb3BlXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChzY29wZSkge1xuICAgIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gbnVsbDtcblxuICAgIHZhciBpbnB1dFR5cGVzQWxsb3dsaXN0ID0ge1xuICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgIHNlYXJjaDogdHJ1ZSxcbiAgICAgIHVybDogdHJ1ZSxcbiAgICAgIHRlbDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBudW1iZXI6IHRydWUsXG4gICAgICBkYXRlOiB0cnVlLFxuICAgICAgbW9udGg6IHRydWUsXG4gICAgICB3ZWVrOiB0cnVlLFxuICAgICAgdGltZTogdHJ1ZSxcbiAgICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxlZ2FjeSBicm93c2VycyBhbmQgaWZyYW1lcyB3aGljaCBzb21ldGltZXMgZm9jdXNcbiAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsICYmXG4gICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgICAgIGVsLm5vZGVOYW1lICE9PSAnQk9EWScgJiZcbiAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgJ2NvbnRhaW5zJyBpbiBlbC5jbGFzc0xpc3RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAqIGA6Zm9jdXMtdmlzaWJsZWAgd2hlbiBmb2N1c2VkLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGVsKSB7XG4gICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnSU5QVVQnICYmIGlucHV0VHlwZXNBbGxvd2xpc3RbdHlwZV0gJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3QgYWRkZWQgYnlcbiAgICAgKiB0aGUgYXV0aG9yLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRGb2N1c1Zpc2libGVDbGFzcyhlbCkge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXZpc2libGUnKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJywgJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQgaWYgaXQgd2FzIG5vdFxuICAgICAqIG9yaWdpbmFsbHkgYWRkZWQgYnkgdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICAgICAqIGFuZCB0aGUga2V5IHByZXNzIGRpZCBub3QgaW5jbHVkZSBhIG1ldGEsIGFsdC9vcHRpb24sIG9yIGNvbnRyb2wga2V5O1xuICAgICAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gICAgICogQXBwbHkgYGZvY3VzLXZpc2libGVgIHRvIGFueSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGFuZCBrZWVwIHRyYWNrXG4gICAgICogb2Ygb3VyIGtleWJvYXJkIG1vZGFsaXR5IHN0YXRlIHdpdGggYGhhZEtleWJvYXJkRXZlbnRgLlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1ZhbGlkRm9jdXNUYXJnZXQoc2NvcGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3Moc2NvcGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICAgICAqIHRoZSBtb2RhbGl0eSBhd2F5IGZyb20ga2V5Ym9hcmQuXG4gICAgICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAgICAgKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gICAgICogcG9pbnRpbmcgZGV2aWNlLCB3aGlsZSB3ZSBzdGlsbCB0aGluayB3ZSdyZSBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGZvY3VzYCwgYWRkIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgdG8gdGhlIHRhcmdldCBpZjpcbiAgICAgKiAtIHRoZSB0YXJnZXQgcmVjZWl2ZWQgZm9jdXMgYXMgYSByZXN1bHQgb2Yga2V5Ym9hcmQgbmF2aWdhdGlvbiwgb3JcbiAgICAgKiAtIHRoZSBldmVudCB0YXJnZXQgaXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgbGlrZWx5IHJlcXVpcmUgaW50ZXJhY3Rpb25cbiAgICAgKiAgIHZpYSB0aGUga2V5Ym9hcmQgKGUuZy4gYSB0ZXh0IGJveClcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICAvLyBQcmV2ZW50IElFIGZyb20gZm9jdXNpbmcgdGhlIGRvY3VtZW50IG9yIEhUTUwgZWxlbWVudC5cbiAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGUudGFyZ2V0KSkge1xuICAgICAgICBhZGRGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGJsdXJgLCByZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSB0YXJnZXQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpIHx8XG4gICAgICAgIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJylcbiAgICAgICkge1xuICAgICAgICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gICAgICAgIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3Qgc2VlIGEgdmlzaWJpbGl0eSBjaGFuZ2Ugd2l0aGluIDEwMG1zLCBpdCdzIHByb2JhYmx5IGFcbiAgICAgICAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQpO1xuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICByZW1vdmVGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHVzZXIgY2hhbmdlcyB0YWJzLCBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBwcmV2aW91c2x5XG4gICAgICogZm9jdXNlZCBlbGVtZW50IGhhZCAuZm9jdXMtdmlzaWJsZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKGUpIHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgICAgLy8gb24gdGhlIGVsZW1lbnQgKFNhZmFyaSBhY3R1YWxseSBjYWxscyBpdCB0d2ljZSkuXG4gICAgICAgIC8vIElmIHRoaXMgdGFiIGNoYW5nZSBjYXVzZWQgYSBibHVyIG9uIGFuIGVsZW1lbnQgd2l0aCBmb2N1cy12aXNpYmxlLFxuICAgICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICAgIGlmIChoYWRGb2N1c1Zpc2libGVSZWNlbnRseSkge1xuICAgICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGdyb3VwIG9mIGxpc3RlbmVycyB0byBkZXRlY3QgdXNhZ2Ugb2YgYW55IHBvaW50aW5nIGRldmljZXMuXG4gICAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAgICogdGhlIHdpbmRvdyBpcyBibHVycmVkLCBzbyB0aGF0IHRoZXkgYXJlIGFjdGl2ZSB3aGVuIHRoZSB3aW5kb3cgcmVnYWluc1xuICAgICAqIGZvY3VzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogSWYgYW55IGV2ZW50IGlzIHJlY2VpdmVkIGZyb20gYSBwb2ludGluZyBkZXZpY2UgKGUuZy4gbW91c2UsIHBvaW50ZXIsXG4gICAgICogdG91Y2gpLCB0dXJuIG9mZiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgICAvLyBXb3JrIGFyb3VuZCBhIFNhZmFyaSBxdWlyayB0aGF0IGZpcmVzIGEgbW91c2Vtb3ZlIG9uIDxodG1sPiB3aGVuZXZlciB0aGVcbiAgICAgIC8vIHdpbmRvdyBibHVycywgZXZlbiBpZiB5b3UncmUgdGFiYmluZyBvdXQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgcmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAgIC8vIG9ubHkuIEZvciBleGFtcGxlLCBnbG9iYWwgcG9pbnRlciBpbnB1dCwgZ2xvYmFsIGtleSBwcmVzc2VzIGFuZCBnbG9iYWxcbiAgICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBzaG91bGQgYWZmZWN0IHRoZSBzdGF0ZSBhdCBldmVyeSBzY29wZTpcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcblxuICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuXG4gICAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAgIC8vIHNjb3BlLiBUaGlzIGlzIGJlY2F1c2UgZm9jdXMgLyBibHVyIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZSBmcm9tIHdpdGhpbiBhXG4gICAgLy8gc2hhZG93IHJvb3QgYXJlIG5vdCByZS1kaXNwYXRjaGVkIGZyb20gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCB3YXMgYWxyZWFkeVxuICAgIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cywgdHJ1ZSk7XG4gICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1ciwgdHJ1ZSk7XG5cbiAgICAvLyBXZSBkZXRlY3QgdGhhdCBhIG5vZGUgaXMgYSBTaGFkb3dSb290IGJ5IGVuc3VyaW5nIHRoYXQgaXQgaXMgYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIGFsc28gaGFzIGEgaG9zdCBwcm9wZXJ0eS4gVGhpcyBjaGVjayBjb3ZlcnMgbmF0aXZlXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYW5kIHBvbHlmaWxsIGltcGxlbWVudGF0aW9uIHRyYW5zcGFyZW50bHkuIElmIHdlIG9ubHkgY2FyZWRcbiAgICAvLyBhYm91dCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjb3VsZCBqdXN0IGNoZWNrIGlmIHRoZSBzY29wZSB3YXNcbiAgICAvLyBhbiBpbnN0YW5jZSBvZiBhIFNoYWRvd1Jvb3QuXG4gICAgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiYgc2NvcGUuaG9zdCkge1xuICAgICAgLy8gU2luY2UgYSBTaGFkb3dSb290IGlzIGEgc3BlY2lhbCBraW5kIG9mIERvY3VtZW50RnJhZ21lbnQsIGl0IGRvZXMgbm90XG4gICAgICAvLyBoYXZlIGEgcm9vdCBlbGVtZW50IHRvIGFkZCBhIGNsYXNzIHRvLiBTbywgd2UgYWRkIHRoaXMgYXR0cmlidXRlIHRvIHRoZVxuICAgICAgLy8gaG9zdCBlbGVtZW50IGluc3RlYWQ6XG4gICAgICBzY29wZS5ob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1mb2N1cy12aXNpYmxlJywgJycpO1xuICAgIH0gZWxzZSBpZiAoc2NvcGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzLWZvY3VzLXZpc2libGUnKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8gd3JhcCBhbGwgcmVmZXJlbmNlcyB0byBnbG9iYWwgd2luZG93IGFuZCBkb2N1bWVudCBpblxuICAvLyB0aGVzZSBjaGVja3MgdG8gc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgdXNlIGNhc2VzXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZS9pc3N1ZXMvMTk5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTWFrZSB0aGUgcG9seWZpbGwgaGVscGVyIGdsb2JhbGx5IGF2YWlsYWJsZS4gVGhpcyBjYW4gYmUgdXNlZCBhcyBhIHNpZ25hbFxuICAgIC8vIHRvIGludGVyZXN0ZWQgbGlicmFyaWVzIHRoYXQgd2lzaCB0byBjb29yZGluYXRlIHdpdGggdGhlIHBvbHlmaWxsIGZvciBlLmcuLFxuICAgIC8vIGFwcGx5aW5nIHRoZSBwb2x5ZmlsbCB0byBhIHNoYWRvdyByb290OlxuICAgIHdpbmRvdy5hcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsID0gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbDtcblxuICAgIC8vIE5vdGlmeSBpbnRlcmVzdGVkIGxpYnJhcmllcyBvZiB0aGUgcG9seWZpbGwncyBwcmVzZW5jZSwgaW4gY2FzZSB0aGVcbiAgICAvLyBwb2x5ZmlsbCB3YXMgbG9hZGVkIGxhemlseTpcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2ZvY3VzLXZpc2libGUtcG9seWZpbGwtcmVhZHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHVzaW5nIEN1c3RvbUV2ZW50IGFzIGEgY29uc3RydWN0b3IgZGlyZWN0bHk6XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5JywgZmFsc2UsIGZhbHNlLCB7fSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBBcHBseSB0aGUgcG9seWZpbGwgdG8gdGhlIGdsb2JhbCBkb2N1bWVudCwgc28gdGhhdCBubyBKYXZhU2NyaXB0XG4gICAgLy8gY29vcmRpbmF0aW9uIGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgcG9seWZpbGwgaW4gdGhlIHRvcC1sZXZlbCBkb2N1bWVudDpcbiAgICBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKGRvY3VtZW50KTtcbiAgfVxuXG59KSkpO1xuIiwiZnVuY3Rpb24gZm9jdXNXaXRoaW4oZG9jdW1lbnQsIG9wdHMpIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0KG9wdHMpLmNsYXNzTmFtZTtcbiAgY29uc3QgYXR0ciA9IE9iamVjdChvcHRzKS5hdHRyIHx8ICdmb2N1cy13aXRoaW4nO1xuICBjb25zdCBmb3JjZSA9IE9iamVjdChvcHRzKS5mb3JjZTtcbiAgY29uc3QgbGFzdEVsZW1lbnRzID0gW107XG5cbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMtd2l0aGluJyk7XG5cbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbGl6ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGlnbm9yZWRFcnJvcikge1xuICAgIC8qIGRvIG5vdGhpbmcgYW5kIGNvbnRpbnVlICovXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvY3VzY2hhbmdlKCkge1xuICAgIGxldCBsYXN0RWxlbWVudDtcblxuICAgIHdoaWxlIChsYXN0RWxlbWVudCA9IGxhc3RFbGVtZW50cy5wb3AoKSkge1xuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGxhc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIG9ubHkgYWRkIGZvY3VzIGlmIGl0IGhhcyBub3QgYmVlbiBhZGRlZCBhbmQgaXMgbm90IHRoZSBkb2N1bWVudCBlbGVtZW50XG5cbiAgICBpZiAoIS9eKCNkb2N1bWVudHxIVE1MfEJPRFkpJC8udGVzdChPYmplY3QoYWN0aXZlRWxlbWVudCkubm9kZU5hbWUpKSB7XG4gICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEVsZW1lbnRzLnB1c2goYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uZm9jdXNjaGFuZ2UsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbmZvY3VzY2hhbmdlLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgKiBDYWxsYmFjayB3cmFwcGVyIGZvciBjaGVjayBsb2FkZWQgc3RhdGVcbiAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cbiAgIWZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgaWYgKC9tLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbG9hZCkgfCBpbml0aWFsaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsb2FkKTtcbiAgICB9XG4gIH0oKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHJldHVybiBpbml0aWFsaXplO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb2N1c1dpdGhpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEgLSBFUzIwMTUgYWNjZXNzaWJsZSBhY2NvcmRpb24gc3lzdGVtLCB1c2luZyBBUklBIChjb21wYXRpYmxlIElFOSsgd2hlbiB0cmFuc3BpbGVkKVxuICogQHZlcnNpb24gdjMuMC4xXG4gKiBAbGluayBodHRwczovL3ZhbjExeS5uZXQvYWNjZXNzaWJsZS1hY2NvcmRpb24vXG4gKiBAbGljZW5zZSBNSVQgOiBodHRwczovL2dpdGh1Yi5jb20vbmljbzMzMzNmci92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9cmV0dXJuIGV9LGxvYWRDb25maWc9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PWZ1bmN0aW9uKHQscil7ZVt0XT1yfSxyPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSxuPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfTtyZXR1cm57c2V0OnQsZ2V0OnIscmVtb3ZlOm59fSxEQVRBX0hBU0hfSUQ9XCJkYXRhLWhhc2hhY2NvcmRpb24taWRcIixwbHVnaW5Db25maWc9bG9hZENvbmZpZygpLGZpbmRCeUlkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZStcIltcIitEQVRBX0hBU0hfSUQrJz1cIicrdCsnXCJdJyl9LGFkZENsYXNzPWZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz1cIiBcIit0fSxyZW1vdmVDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LnJlbW92ZSh0KTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcYnwkKVwiLFwiZ2lcIiksXCIgXCIpfSxoYXNDbGFzcz1mdW5jdGlvbihlLHQpe3JldHVybiBlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5jb250YWlucyh0KTpuZXcgUmVnRXhwKFwiKF58IClcIit0K1wiKCB8JClcIixcImdpXCIpLnRlc3QoZS5jbGFzc05hbWUpfSxzZXRBdHRyaWJ1dGVzPWZ1bmN0aW9uKGUsdCl7T2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihyKXtlLnNldEF0dHJpYnV0ZShyLHRbcl0pfSl9LHNlYXJjaFBhcmVudEhhc2hJZD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0hMSxuPWU7MT09PW4ubm9kZVR5cGUmJm4mJnI9PT0hMTspbi5oYXNBdHRyaWJ1dGUodCk9PT0hMD9yPSEwOm49bi5wYXJlbnROb2RlO3JldHVybiByPT09ITA/bi5nZXRBdHRyaWJ1dGUodCk6XCJcIn0sc2VhcmNoUGFyZW50PWZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIG49ITEsQT1lO0EmJm49PT0hMTspaGFzQ2xhc3MoQSx0KT09PSEwJiZBLmdldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQpPT09cj9uPSEwOkE9QS5wYXJlbnROb2RlO3JldHVybiBuPT09ITA/QS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTpcIlwifSx1blNlbGVjdEhlYWRlcnM9ZnVuY3Rpb24oZSx0KXtlLmZvckVhY2goZnVuY3Rpb24oZSl7c2V0QXR0cmlidXRlcyhlLF9kZWZpbmVQcm9wZXJ0eSh7fSx0LFwiZmFsc2VcIikpfSl9LHNlbGVjdEhlYWRlcj1mdW5jdGlvbihlLHQpe2Uuc2V0QXR0cmlidXRlKHQsITApfSxzZWxlY3RIZWFkZXJJbkxpc3Q9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXZvaWQgMDtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKHIpJiYobj10KX0pLFwibmV4dFwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24rMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24rMV0uZm9jdXMoKX0sMCkpLFwicHJldlwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24tMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24tMV0uZm9jdXMoKX0sMCkpfSxwbHVnaW49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLHQ9X2V4dGVuZHMoe0FDQ09SRElPTl9KUzpcImpzLWFjY29yZGlvblwiLEFDQ09SRElPTl9KU19IRUFERVI6XCJqcy1hY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9KU19QQU5FTDpcImpzLWFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1M6XCJkYXRhLWFjY29yZGlvbi1wcmVmaXgtY2xhc3Nlc1wiLEFDQ09SRElPTl9EQVRBX09QRU5FRDpcImRhdGEtYWNjb3JkaW9uLW9wZW5lZFwiLEFDQ09SRElPTl9EQVRBX01VTFRJU0VMRUNUQUJMRTpcImRhdGEtYWNjb3JkaW9uLW11bHRpc2VsZWN0YWJsZVwiLEFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTOlwiZGF0YS1hY2NvcmRpb24tY29vbC1zZWxlY3RvcnNcIixBQ0NPUkRJT05fUFJFRklYX0lEUzpcImFjY29yZGlvblwiLEFDQ09SRElPTl9CVVRUT05fSUQ6XCJfdGFiXCIsQUNDT1JESU9OX1BBTkVMX0lEOlwiX3BhbmVsXCIsQUNDT1JESU9OX1NUWUxFOlwiYWNjb3JkaW9uXCIsQUNDT1JESU9OX1RJVExFX1NUWUxFOlwiYWNjb3JkaW9uX190aXRsZVwiLEFDQ09SRElPTl9IRUFERVJfU1RZTEU6XCJhY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9QQU5FTF9TVFlMRTpcImFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fUk9MRV9UQUJMSVNUOlwidGFibGlzdFwiLEFDQ09SRElPTl9ST0xFX1RBQjpcInRhYlwiLEFDQ09SRElPTl9ST0xFX1RBQlBBTkVMOlwidGFicGFuZWxcIixBVFRSX1JPTEU6XCJyb2xlXCIsQVRUUl9NVUxUSVNFTEVDVEFCTEU6XCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiLEFUVFJfRVhQQU5ERUQ6XCJhcmlhLWV4cGFuZGVkXCIsQVRUUl9MQUJFTExFREJZOlwiYXJpYS1sYWJlbGxlZGJ5XCIsQVRUUl9ISURERU46XCJhcmlhLWhpZGRlblwiLEFUVFJfQ09OVFJPTFM6XCJhcmlhLWNvbnRyb2xzXCIsQVRUUl9TRUxFQ1RFRDpcImFyaWEtc2VsZWN0ZWRcIn0sZSkscj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKTtwbHVnaW5Db25maWcuc2V0KHIsdCk7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/ZG9jdW1lbnQ6YXJndW1lbnRzWzBdO3JldHVybltdLnNsaWNlLmNhbGwoZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3QuQUNDT1JESU9OX0pTKSl9LEE9ZnVuY3Rpb24oZSl7bihlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPVwielwiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIsMTIpLEE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpPT09ITA/ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpK1wiLVwiOlwiXCIsYT1lLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwO1wibm9uZVwiPT09ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEUpP2Uuc2V0QXR0cmlidXRlKHQuQVRUUl9NVUxUSVNFTEVDVEFCTEUsXCJmYWxzZVwiKTplLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwidHJ1ZVwiKSxlLnNldEF0dHJpYnV0ZSh0LkFUVFJfUk9MRSx0LkFDQ09SRElPTl9ST0xFX1RBQkxJU1QpLGUuc2V0QXR0cmlidXRlKFwiaWRcIixuKSxlLnNldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQsciksYWRkQ2xhc3MoZSxBK3QuQUNDT1JESU9OX1NUWUxFKTt2YXIgaT1bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KU19IRUFERVIpKTtpLmZvckVhY2goZnVuY3Rpb24oaSxfKXt2YXIgbyxUO2lmKGkucGFyZW50Tm9kZT09PWV8fGEhPT0hMSl7dmFyIEU9XysxLHM9aS5uZXh0RWxlbWVudFNpYmxpbmcsQz1pLmlubmVySFRNTCxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIiksRD1pLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk9PT0hMD9pLmdldEF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk6XCJcIjtjLmlubmVySFRNTD1DLGFkZENsYXNzKGMsdC5BQ0NPUkRJT05fSlNfSEVBREVSKSxhZGRDbGFzcyhjLEErdC5BQ0NPUkRJT05fSEVBREVSX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKGMsKG89e30sX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUIpLF9kZWZpbmVQcm9wZXJ0eShvLFwiaWRcIix0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fQlVUVE9OX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9DT05UUk9MUyx0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fUEFORUxfSUQrRSksX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1NFTEVDVEVELFwiZmFsc2VcIiksX2RlZmluZVByb3BlcnR5KG8sXCJ0eXBlXCIsXCJidXR0b25cIiksX2RlZmluZVByb3BlcnR5KG8sREFUQV9IQVNIX0lELHIpLG8pKSxpLmlubmVySFRNTD1cIlwiLGkuYXBwZW5kQ2hpbGQoYyksYWRkQ2xhc3MoaSxBK3QuQUNDT1JESU9OX1RJVExFX1NUWUxFKSxyZW1vdmVDbGFzcyhpLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MocyxBK3QuQUNDT1JESU9OX1BBTkVMX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKHMsKFQ9e30sX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJQQU5FTCksX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX0xBQkVMTEVEQlksdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShULERBVEFfSEFTSF9JRCxyKSxUKSksXCJ0cnVlXCI9PT1EPyhjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJ0cnVlXCIpLGkucmVtb3ZlQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfT1BFTkVEKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwiZmFsc2VcIikpOihjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJmYWxzZVwiKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwidHJ1ZVwiKSl9fSl9KX07cmV0dXJue2F0dGFjaDpBfX0sbWFpbj1mdW5jdGlvbigpe3JldHVybltcImNsaWNrXCIsXCJrZXlkb3duXCIsXCJmb2N1c1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihlLGZ1bmN0aW9uKHQpe3ZhciByPXNlYXJjaFBhcmVudEhhc2hJZCh0LnRhcmdldCxEQVRBX0hBU0hfSUQpO1wiXCIhPT1yJiYhZnVuY3Rpb24oKXt2YXIgbj1wbHVnaW5Db25maWcuZ2V0KHIpO2hhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJmb2N1c1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTthPT09ITEmJihpPWkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PUF9KSksdW5TZWxlY3RIZWFkZXJzKGksbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoZSxuLkFUVFJfU0VMRUNURUQpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJjbGlja1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKSxfPUEuZ2V0QXR0cmlidXRlKG4uQVRUUl9NVUxUSVNFTEVDVEFCTEUpLG89ZmluZEJ5SWQoZS5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKSxUPWUuZ2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLFwiZmFsc2VcIj09PVQ/KGUuc2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCwhMCksby5yZW1vdmVBdHRyaWJ1dGUobi5BVFRSX0hJRERFTikpOihlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLG8uc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKSxcImZhbHNlXCI9PT1fJiZpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIEE9ZmluZEJ5SWQodC5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKTt0IT09ZT8odC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCExKSx0LnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLEEuc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKTp0LnNldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQsITApfSksc2V0VGltZW91dChmdW5jdGlvbigpe2UuZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJrZXlkb3duXCI9PT1lJiYhZnVuY3Rpb24oKXt2YXIgZT10LnRhcmdldCxBPXNlYXJjaFBhcmVudChlLG4uQUNDT1JESU9OX0pTLHIpLGE9ZmluZEJ5SWQoQSxyKSxpPWEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsXz1bXS5zbGljZS5jYWxsKGEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTtpPT09ITEmJihfPV8uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PWF9KSksMzY9PT10LmtleUNvZGU/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOjM1PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNyE9PXQua2V5Q29kZSYmMzghPT10LmtleUNvZGV8fHQuY3RybEtleT80MCE9PXQua2V5Q29kZSYmMzkhPT10LmtleUNvZGV8fHQuY3RybEtleXx8KFwidHJ1ZVwiPT09X1tfLmxlbmd0aC0xXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1swXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfWzBdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwibmV4dFwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKSk6XCJ0cnVlXCI9PT1fWzBdLmdldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQpPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTooc2VsZWN0SGVhZGVySW5MaXN0KF8sXCJwcmV2XCIsbi5BVFRSX1NFTEVDVEVEKSx0LnByZXZlbnREZWZhdWx0KCkpfSgpfSgpfSwhMCl9KSxwbHVnaW59O3dpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYT1tYWluKCk7dmFyIG9uTG9hZD1mdW5jdGlvbiBlKCl7dmFyIHQ9d2luZG93LnZhbjExeUFjY2Vzc2libGVBY2NvcmRpb25BcmlhKCk7dC5hdHRhY2goKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLG9uTG9hZCk7IiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KHQ9dHx8c2VsZikuTGF6eUxvYWQ9bigpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQoKXtyZXR1cm4odD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgZT1hcmd1bWVudHNbbl07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csZT1uJiYhKFwib25zY3JvbGxcImluIHdpbmRvdyl8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi8oZ2xlfGluZ3xybylib3R8Y3Jhd2x8c3BpZGVyL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpPW4mJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyxvPW4mJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSxyPW4mJndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPjEsYT17ZWxlbWVudHNfc2VsZWN0b3I6XCIubGF6eVwiLGNvbnRhaW5lcjplfHxuP2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfYmdfaGlkcGk6XCJiZy1oaWRwaVwiLGRhdGFfYmdfbXVsdGk6XCJiZy1tdWx0aVwiLGRhdGFfYmdfbXVsdGlfaGlkcGk6XCJiZy1tdWx0aS1oaWRwaVwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITF9LGM9ZnVuY3Rpb24obil7cmV0dXJuIHQoe30sYSxuKX0scz1mdW5jdGlvbih0LG4pe3ZhciBlLGk9XCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWRcIixvPW5ldyB0KG4pO3RyeXtlPW5ldyBDdXN0b21FdmVudChpLHtkZXRhaWw6e2luc3RhbmNlOm99fSl9Y2F0Y2godCl7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGksITEsITEse2luc3RhbmNlOm99KX13aW5kb3cuZGlzcGF0Y2hFdmVudChlKX0sbD1cImxvYWRpbmdcIix1PVwibG9hZGVkXCIsZD1cImFwcGxpZWRcIixmPVwiZXJyb3JcIixfPVwibmF0aXZlXCIsZz1cImRhdGEtXCIsdj1cImxsLXN0YXR1c1wiLHA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5nZXRBdHRyaWJ1dGUoZytuKX0sYj1mdW5jdGlvbih0KXtyZXR1cm4gcCh0LHYpfSxoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1cImRhdGEtbGwtc3RhdHVzXCI7bnVsbCE9PWU/dC5zZXRBdHRyaWJ1dGUoaSxlKTp0LnJlbW92ZUF0dHJpYnV0ZShpKX0odCwwLG4pfSxtPWZ1bmN0aW9uKHQpe3JldHVybiBoKHQsbnVsbCl9LEU9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT1iKHQpfSx5PWZ1bmN0aW9uKHQpe3JldHVybiBiKHQpPT09X30sQT1bbCx1LGQsZl0sST1mdW5jdGlvbih0LG4sZSxpKXt0JiYodm9pZCAwPT09aT92b2lkIDA9PT1lP3Qobik6dChuLGUpOnQobixlLGkpKX0sTD1mdW5jdGlvbih0LG4pe28/dC5jbGFzc0xpc3QuYWRkKG4pOnQuY2xhc3NOYW1lKz0odC5jbGFzc05hbWU/XCIgXCI6XCJcIikrbn0sdz1mdW5jdGlvbih0LG4pe28/dC5jbGFzc0xpc3QucmVtb3ZlKG4pOnQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKylcIituK1wiKFxcXFxzK3wkKVwiKSxcIiBcIikucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xccyskLyxcIlwiKX0saz1mdW5jdGlvbih0KXtyZXR1cm4gdC5sbFRlbXBJbWFnZX0sTz1mdW5jdGlvbih0LG4pe2lmKG4pe3ZhciBlPW4uX29ic2VydmVyO2UmJmUudW5vYnNlcnZlKHQpfX0seD1mdW5jdGlvbih0LG4pe3QmJih0LmxvYWRpbmdDb3VudCs9bil9LHo9ZnVuY3Rpb24odCxuKXt0JiYodC50b0xvYWRDb3VudD1uKX0sQz1mdW5jdGlvbih0KXtmb3IodmFyIG4sZT1bXSxpPTA7bj10LmNoaWxkcmVuW2ldO2krPTEpXCJTT1VSQ0VcIj09PW4udGFnTmFtZSYmZS5wdXNoKG4pO3JldHVybiBlfSxOPWZ1bmN0aW9uKHQsbixlKXtlJiZ0LnNldEF0dHJpYnV0ZShuLGUpfSxNPWZ1bmN0aW9uKHQsbil7dC5yZW1vdmVBdHRyaWJ1dGUobil9LFI9ZnVuY3Rpb24odCl7cmV0dXJuISF0LmxsT3JpZ2luYWxBdHRyc30sRz1mdW5jdGlvbih0KXtpZighUih0KSl7dmFyIG49e307bi5zcmM9dC5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksbi5zcmNzZXQ9dC5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksbi5zaXplcz10LmdldEF0dHJpYnV0ZShcInNpemVzXCIpLHQubGxPcmlnaW5hbEF0dHJzPW59fSxUPWZ1bmN0aW9uKHQpe2lmKFIodCkpe3ZhciBuPXQubGxPcmlnaW5hbEF0dHJzO04odCxcInNyY1wiLG4uc3JjKSxOKHQsXCJzcmNzZXRcIixuLnNyY3NldCksTih0LFwic2l6ZXNcIixuLnNpemVzKX19LGo9ZnVuY3Rpb24odCxuKXtOKHQsXCJzaXplc1wiLHAodCxuLmRhdGFfc2l6ZXMpKSxOKHQsXCJzcmNzZXRcIixwKHQsbi5kYXRhX3NyY3NldCkpLE4odCxcInNyY1wiLHAodCxuLmRhdGFfc3JjKSl9LEQ9ZnVuY3Rpb24odCl7TSh0LFwic3JjXCIpLE0odCxcInNyY3NldFwiKSxNKHQsXCJzaXplc1wiKX0sRj1mdW5jdGlvbih0LG4pe3ZhciBlPXQucGFyZW50Tm9kZTtlJiZcIlBJQ1RVUkVcIj09PWUudGFnTmFtZSYmQyhlKS5mb3JFYWNoKG4pfSxQPXtJTUc6ZnVuY3Rpb24odCxuKXtGKHQsKGZ1bmN0aW9uKHQpe0codCksaih0LG4pfSkpLEcodCksaih0LG4pfSxJRlJBTUU6ZnVuY3Rpb24odCxuKXtOKHQsXCJzcmNcIixwKHQsbi5kYXRhX3NyYykpfSxWSURFTzpmdW5jdGlvbih0LG4peyFmdW5jdGlvbih0LGUpe0ModCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7Tih0LFwic3JjXCIscCh0LG4uZGF0YV9zcmMpKX0pKX0odCksTih0LFwicG9zdGVyXCIscCh0LG4uZGF0YV9wb3N0ZXIpKSxOKHQsXCJzcmNcIixwKHQsbi5kYXRhX3NyYykpLHQubG9hZCgpfX0sUz1mdW5jdGlvbih0LG4pe3ZhciBlPVBbdC50YWdOYW1lXTtlJiZlKHQsbil9LFY9ZnVuY3Rpb24odCxuLGUpe3goZSwxKSxMKHQsbi5jbGFzc19sb2FkaW5nKSxoKHQsbCksSShuLmNhbGxiYWNrX2xvYWRpbmcsdCxlKX0sVT1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIl0sJD1mdW5jdGlvbih0LG4peyFufHxmdW5jdGlvbih0KXtyZXR1cm4gdC5sb2FkaW5nQ291bnQ+MH0obil8fGZ1bmN0aW9uKHQpe3JldHVybiB0LnRvTG9hZENvdW50PjB9KG4pfHxJKHQuY2FsbGJhY2tfZmluaXNoLG4pfSxxPWZ1bmN0aW9uKHQsbixlKXt0LmFkZEV2ZW50TGlzdGVuZXIobixlKSx0LmxsRXZMaXNucnNbbl09ZX0sSD1mdW5jdGlvbih0LG4sZSl7dC5yZW1vdmVFdmVudExpc3RlbmVyKG4sZSl9LEI9ZnVuY3Rpb24odCl7cmV0dXJuISF0LmxsRXZMaXNucnN9LEo9ZnVuY3Rpb24odCl7aWYoQih0KSl7dmFyIG49dC5sbEV2TGlzbnJzO2Zvcih2YXIgZSBpbiBuKXt2YXIgaT1uW2VdO0godCxlLGkpfWRlbGV0ZSB0LmxsRXZMaXNucnN9fSxLPWZ1bmN0aW9uKHQsbixlKXshZnVuY3Rpb24odCl7ZGVsZXRlIHQubGxUZW1wSW1hZ2V9KHQpLHgoZSwtMSksZnVuY3Rpb24odCl7dCYmKHQudG9Mb2FkQ291bnQtPTEpfShlKSx3KHQsbi5jbGFzc19sb2FkaW5nKSxuLnVub2JzZXJ2ZV9jb21wbGV0ZWQmJk8odCxlKX0sUT1mdW5jdGlvbih0LG4sZSl7dmFyIGk9ayh0KXx8dDtCKGkpfHxmdW5jdGlvbih0LG4sZSl7Qih0KXx8KHQubGxFdkxpc25ycz17fSk7dmFyIGk9XCJWSURFT1wiPT09dC50YWdOYW1lP1wibG9hZGVkZGF0YVwiOlwibG9hZFwiO3EodCxpLG4pLHEodCxcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbih0LG4sZSxpKXt2YXIgbz15KG4pO0sobixlLGkpLEwobixlLmNsYXNzX2xvYWRlZCksaChuLHUpLEkoZS5jYWxsYmFja19sb2FkZWQsbixpKSxvfHwkKGUsaSl9KDAsdCxuLGUpLEooaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBvPXkobik7SyhuLGUsaSksTChuLGUuY2xhc3NfZXJyb3IpLGgobixmKSxJKGUuY2FsbGJhY2tfZXJyb3IsbixpKSxvfHwkKGUsaSl9KDAsdCxuLGUpLEooaSl9KSl9LFc9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXt0LmxsVGVtcEltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIil9KHQpLFEodCxuLGUpLGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1wKHQsbi5kYXRhX2JnKSxvPXAodCxuLmRhdGFfYmdfaGlkcGkpLGE9ciYmbz9vOmk7YSYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoXCInLmNvbmNhdChhLCdcIiknKSxrKHQpLnNldEF0dHJpYnV0ZShcInNyY1wiLGEpLFYodCxuLGUpKX0odCxuLGUpLGZ1bmN0aW9uKHQsbixlKXt2YXIgaT1wKHQsbi5kYXRhX2JnX211bHRpKSxvPXAodCxuLmRhdGFfYmdfbXVsdGlfaGlkcGkpLGE9ciYmbz9vOmk7YSYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPWEsZnVuY3Rpb24odCxuLGUpe0wodCxuLmNsYXNzX2FwcGxpZWQpLGgodCxkKSxuLnVub2JzZXJ2ZV9jb21wbGV0ZWQmJk8odCxuKSxJKG4uY2FsbGJhY2tfYXBwbGllZCx0LGUpfSh0LG4sZSkpfSh0LG4sZSl9LFg9ZnVuY3Rpb24odCxuLGUpeyFmdW5jdGlvbih0KXtyZXR1cm4gVS5pbmRleE9mKHQudGFnTmFtZSk+LTF9KHQpP1codCxuLGUpOmZ1bmN0aW9uKHQsbixlKXtRKHQsbixlKSxTKHQsbiksVih0LG4sZSl9KHQsbixlKX0sWT1bXCJJTUdcIixcIklGUkFNRVwiXSxaPWZ1bmN0aW9uKHQpe3JldHVybiB0LnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHR0PWZ1bmN0aW9uKHQsbixlKXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5pc0ludGVyc2VjdGluZ3x8dC5pbnRlcnNlY3Rpb25SYXRpbz4wfSh0KT9mdW5jdGlvbih0LG4sZSxpKXtoKHQsXCJlbnRlcmVkXCIpLEwodCxlLmNsYXNzX2VudGVyZWQpLHcodCxlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24odCxuLGUpe24udW5vYnNlcnZlX2VudGVyZWQmJk8odCxlKX0odCxlLGkpLEkoZS5jYWxsYmFja19lbnRlcix0LG4saSksZnVuY3Rpb24odCl7cmV0dXJuIEEuaW5kZXhPZihiKHQpKT49MH0odCl8fFgodCxlLGkpfSh0LnRhcmdldCx0LG4sZSk6ZnVuY3Rpb24odCxuLGUsaSl7RSh0KXx8KEwodCxlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24odCxuLGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24odCl7cmV0dXJuIGIodCk9PT1sfSh0KSYmXCJJTUdcIj09PXQudGFnTmFtZSYmKEoodCksZnVuY3Rpb24odCl7Rih0LChmdW5jdGlvbih0KXtEKHQpfSkpLEQodCl9KHQpLGZ1bmN0aW9uKHQpe0YodCwoZnVuY3Rpb24odCl7VCh0KX0pKSxUKHQpfSh0KSx3KHQsZS5jbGFzc19sb2FkaW5nKSx4KGksLTEpLG0odCksSShlLmNhbGxiYWNrX2NhbmNlbCx0LG4saSkpfSh0LG4sZSxpKSxJKGUuY2FsbGJhY2tfZXhpdCx0LG4saSkpfSh0LnRhcmdldCx0LG4sZSl9KSl9LG50PWZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX0sZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodC5lbGVtZW50c19zZWxlY3Rvcil9LGl0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gYih0KT09PWZ9KHQpfSxvdD1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbnQodCkuZmlsdGVyKEUpfSh0fHxldChuKSl9LHJ0PWZ1bmN0aW9uKHQsZSl7dmFyIG89Yyh0KTt0aGlzLl9zZXR0aW5ncz1vLHRoaXMubG9hZGluZ0NvdW50PTAsZnVuY3Rpb24odCxuKXtpJiYhWih0KSYmKG4uX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dHQoZSx0LG4pfSksZnVuY3Rpb24odCl7cmV0dXJue3Jvb3Q6dC5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOnQuY29udGFpbmVyLHJvb3RNYXJnaW46dC50aHJlc2hvbGRzfHx0LnRocmVzaG9sZCtcInB4XCJ9fSh0KSkpfShvLHRoaXMpLGZ1bmN0aW9uKHQsZSl7biYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwoZnVuY3Rpb24oKXshZnVuY3Rpb24odCxuKXt2YXIgZTsoZT1ldCh0KSxudChlKS5maWx0ZXIoaXQpKS5mb3JFYWNoKChmdW5jdGlvbihuKXt3KG4sdC5jbGFzc19lcnJvciksbShuKX0pKSxuLnVwZGF0ZSgpfSh0LGUpfSkpfShvLHRoaXMpLHRoaXMudXBkYXRlKGUpfTtyZXR1cm4gcnQucHJvdG90eXBlPXt1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIG4sbyxyPXRoaXMuX3NldHRpbmdzLGE9b3QodCxyKTt6KHRoaXMsYS5sZW5ndGgpLCFlJiZpP1oocik/ZnVuY3Rpb24odCxuLGUpe3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7LTEhPT1ZLmluZGV4T2YodC50YWdOYW1lKSYmKHQuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxmdW5jdGlvbih0LG4sZSl7USh0LG4sZSksUyh0LG4pLGgodCxfKX0odCxuLGUpKX0pKSx6KGUsMCl9KGEscix0aGlzKToobz1hLGZ1bmN0aW9uKHQpe3QuZGlzY29ubmVjdCgpfShuPXRoaXMuX29ic2VydmVyKSxmdW5jdGlvbih0LG4pe24uZm9yRWFjaCgoZnVuY3Rpb24obil7dC5vYnNlcnZlKG4pfSkpfShuLG8pKTp0aGlzLmxvYWRBbGwoYSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9vYnNlcnZlciYmdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLGV0KHRoaXMuX3NldHRpbmdzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtkZWxldGUgdC5sbE9yaWdpbmFsQXR0cnN9KSksZGVsZXRlIHRoaXMuX29ic2VydmVyLGRlbGV0ZSB0aGlzLl9zZXR0aW5ncyxkZWxldGUgdGhpcy5sb2FkaW5nQ291bnQsZGVsZXRlIHRoaXMudG9Mb2FkQ291bnR9LGxvYWRBbGw6ZnVuY3Rpb24odCl7dmFyIG49dGhpcyxlPXRoaXMuX3NldHRpbmdzO290KHQsZSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7Tyh0LG4pLFgodCxlLG4pfSkpfX0scnQubG9hZD1mdW5jdGlvbih0LG4pe3ZhciBlPWMobik7WCh0LGUpfSxydC5yZXNldFN0YXR1cz1mdW5jdGlvbih0KXttKHQpfSxuJiZmdW5jdGlvbih0LG4pe2lmKG4paWYobi5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPW5baV07aSs9MSlzKHQsZSk7ZWxzZSBzKHQsbil9KHJ0LHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLHJ0fSkpO1xuIiwiLyoqXG4gKiBaZW5zY3JvbGwgNC4wLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5nYWJvci96ZW5zY3JvbGwvXG4gKlxuICogQ29weXJpZ2h0IDIwMTXigJMyMDE4IEdhYm9yIExlbmFyZFxuICpcbiAqIFRoaXMgaXMgZnJlZSBhbmQgdW5lbmN1bWJlcmVkIHNvZnR3YXJlIHJlbGVhc2VkIGludG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiBcbiAqIEFueW9uZSBpcyBmcmVlIHRvIGNvcHksIG1vZGlmeSwgcHVibGlzaCwgdXNlLCBjb21waWxlLCBzZWxsLCBvclxuICogZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlLCBlaXRoZXIgaW4gc291cmNlIGNvZGUgZm9ybSBvciBhcyBhIGNvbXBpbGVkXG4gKiBiaW5hcnksIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBub24tY29tbWVyY2lhbCwgYW5kIGJ5IGFueVxuICogbWVhbnMuXG4gKiBcbiAqIEluIGp1cmlzZGljdGlvbnMgdGhhdCByZWNvZ25pemUgY29weXJpZ2h0IGxhd3MsIHRoZSBhdXRob3Igb3IgYXV0aG9yc1xuICogb2YgdGhpcyBzb2Z0d2FyZSBkZWRpY2F0ZSBhbnkgYW5kIGFsbCBjb3B5cmlnaHQgaW50ZXJlc3QgaW4gdGhlXG4gKiBzb2Z0d2FyZSB0byB0aGUgcHVibGljIGRvbWFpbi4gV2UgbWFrZSB0aGlzIGRlZGljYXRpb24gZm9yIHRoZSBiZW5lZml0XG4gKiBvZiB0aGUgcHVibGljIGF0IGxhcmdlIGFuZCB0byB0aGUgZGV0cmltZW50IG9mIG91ciBoZWlycyBhbmRcbiAqIHN1Y2Nlc3NvcnMuIFdlIGludGVuZCB0aGlzIGRlZGljYXRpb24gdG8gYmUgYW4gb3ZlcnQgYWN0IG9mXG4gKiByZWxpbnF1aXNobWVudCBpbiBwZXJwZXR1aXR5IG9mIGFsbCBwcmVzZW50IGFuZCBmdXR1cmUgcmlnaHRzIHRvIHRoaXNcbiAqIHNvZnR3YXJlIHVuZGVyIGNvcHlyaWdodCBsYXcuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SXG4gKiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSxcbiAqIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIDxodHRwOi8vdW5saWNlbnNlLm9yZz5cbiAqIFxuICovXG5cbi8qanNoaW50IGRldmVsOnRydWUsIGFzaTp0cnVlICovXG5cbi8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlICovXG5cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbXSwgZmFjdG9yeSgpKVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuXHR9IGVsc2Uge1xuXHRcdChmdW5jdGlvbiBpbnN0YWxsKCkge1xuXHRcdFx0Ly8gVG8gbWFrZSBzdXJlIFplbnNjcm9sbCBjYW4gYmUgcmVmZXJlbmNlZCBmcm9tIHRoZSBoZWFkZXIsIGJlZm9yZSBgYm9keWAgaXMgYXZhaWxhYmxlXG5cdFx0XHRpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuXHRcdFx0XHRyb290LnplbnNjcm9sbCA9IGZhY3RvcnkoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmV0cnkgOW1zIGxhdGVyXG5cdFx0XHRcdHNldFRpbWVvdXQoaW5zdGFsbCwgOSlcblx0XHRcdH1cblx0XHR9KSgpXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIlxuXG5cblx0Ly8gRGV0ZWN0IGlmIHRoZSBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgbmF0aXZlIHNtb290aCBzY3JvbGxpbmcgKGUuZy4sIEZpcmVmb3ggMzYrIGFuZCBDaHJvbWUgNDkrKSBhbmQgaXQgaXMgZW5hYmxlZDpcblx0dmFyIGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRyZXR1cm4gZWxlbSAmJiBcImdldENvbXB1dGVkU3R5bGVcIiBpbiB3aW5kb3cgJiZcblx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pW1wic2Nyb2xsLWJlaGF2aW9yXCJdID09PSBcInNtb290aFwiXG5cdH1cblxuXG5cdC8vIEV4aXQgaWYgaXTigJlzIG5vdCBhIGJyb3dzZXIgZW52aXJvbm1lbnQ6XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICEoXCJkb2N1bWVudFwiIGluIHdpbmRvdykpIHtcblx0XHRyZXR1cm4ge31cblx0fVxuXG5cblx0dmFyIG1ha2VTY3JvbGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXG5cdFx0Ly8gVXNlIGRlZmF1bHRzIGlmIG5vdCBwcm92aWRlZFxuXHRcdGRlZmF1bHREdXJhdGlvbiA9IGRlZmF1bHREdXJhdGlvbiB8fCA5OTkgLy9tc1xuXHRcdGlmICghZWRnZU9mZnNldCAmJiBlZGdlT2Zmc2V0ICE9PSAwKSB7XG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZywgdGhpcyBhbW91bnQgb2YgZGlzdGFuY2UgaXMga2VwdCBmcm9tIHRoZSBlZGdlcyBvZiB0aGUgY29udGFpbmVyOlxuXHRcdFx0ZWRnZU9mZnNldCA9IDkgLy9weFxuXHRcdH1cblxuXHRcdC8vIEhhbmRsaW5nIHRoZSBsaWZlLWN5Y2xlIG9mIHRoZSBzY3JvbGxlclxuXHRcdHZhciBzY3JvbGxUaW1lb3V0SWRcblx0XHR2YXIgc2V0U2Nyb2xsVGltZW91dElkID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG5cdFx0XHRzY3JvbGxUaW1lb3V0SWQgPSBuZXdWYWx1ZVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFN0b3AgdGhlIGN1cnJlbnQgc21vb3RoIHNjcm9sbCBvcGVyYXRpb24gaW1tZWRpYXRlbHlcblx0XHQgKi9cblx0XHR2YXIgc3RvcFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0SWQpXG5cdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoMClcblx0XHR9XG5cblx0XHR2YXIgZ2V0VG9wV2l0aEVkZ2VPZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byBhIHNwZWNpZmljIHZlcnRpY2FsIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7dGFyZ2V0WX0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogICAgICAgIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBkdXJhdGlvbiBpcyB1c2VkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9ZID0gZnVuY3Rpb24gKHRhcmdldFksIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHN0b3BTY3JvbGwoKVxuXHRcdFx0aWYgKGR1cmF0aW9uID09PSAwIHx8IChkdXJhdGlvbiAmJiBkdXJhdGlvbiA8IDApIHx8IGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGNvbnRhaW5lci5ib2R5KSkge1xuXHRcdFx0XHRjb250YWluZXIudG9ZKHRhcmdldFkpXG5cdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc3RhcnRZID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLm1heCgwLCB0YXJnZXRZKSAtIHN0YXJ0WVxuXHRcdFx0XHR2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihNYXRoLmFicyhkaXN0YW5jZSksIGRlZmF1bHREdXJhdGlvbik7XG5cdFx0XHRcdChmdW5jdGlvbiBsb29wU2Nyb2xsKCkge1xuXHRcdFx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlOlxuXHRcdFx0XHRcdFx0dmFyIHAgPSBNYXRoLm1pbigxLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIGFic29sdXRlIHZlcnRpY2FsIHBvc2l0aW9uOlxuXHRcdFx0XHRcdFx0dmFyIHkgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHN0YXJ0WSArIGRpc3RhbmNlKihwIDwgMC41ID8gMipwKnAgOiBwKig0IC0gcCoyKS0xKSkpXG5cdFx0XHRcdFx0XHRjb250YWluZXIudG9ZKHkpXG5cdFx0XHRcdFx0XHRpZiAocCA8IDEgJiYgKGNvbnRhaW5lci5nZXRIZWlnaHQoKSArIHkpIDwgY29udGFpbmVyLmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdGxvb3BTY3JvbGwoKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChzdG9wU2Nyb2xsLCA5OSkgLy8gd2l0aCBjb29sZG93biB0aW1lXG5cdFx0XHRcdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSkpXG5cdFx0XHRcdH0pKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgYSBzcGVjaWZpYyBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0VsZW0gPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgYW4gZWxlbWVudCBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHZhciBlbGVtSGVpZ2h0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblx0XHRcdHZhciBlbGVtQm90dG9tID0gY29udGFpbmVyLmdldFRvcE9mKGVsZW0pICsgZWxlbUhlaWdodFxuXHRcdFx0dmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5nZXRIZWlnaHQoKVxuXHRcdFx0dmFyIHkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHR2YXIgY29udGFpbmVyQm90dG9tID0geSArIGNvbnRhaW5lckhlaWdodFxuXHRcdFx0aWYgKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pIDwgeSB8fCAoZWxlbUhlaWdodCArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0b3Agb3IgaXMgaGlnaGVyIHRoYW4gc2NyZWVuLlxuXHRcdFx0XHRzY3JvbGxUb0VsZW0oZWxlbSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAoKGVsZW1Cb3R0b20gKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckJvdHRvbSkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdGhlIGJvdHRvbS5cblx0XHRcdFx0c2Nyb2xsVG9ZKGVsZW1Cb3R0b20gLSBjb250YWluZXJIZWlnaHQgKyBlZGdlT2Zmc2V0LCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmIChvbkRvbmUpIHtcblx0XHRcdFx0b25Eb25lKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSBjZW50ZXIgb2YgYW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvZmZzZXR9IE9wdGlvbmFsbHkgdGhlIG9mZnNldCBvZiB0aGUgdG9wIG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuLlxuXHRcdCAqICAgICAgICBBIHZhbHVlIG9mIDAgaXMgaWdub3JlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvQ2VudGVyT2YgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9mZnNldCwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gY29udGFpbmVyLmdldEhlaWdodCgpLzIgKyAob2Zmc2V0IHx8IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LzIpKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGFuZ2VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgc2Nyb2xsZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge25ld0RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdFx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHBhcmFtIHtuZXdFZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzLlxuXHRcdCAqL1xuXHRcdHZhciBzZXR1cCA9IGZ1bmN0aW9uIChuZXdEZWZhdWx0RHVyYXRpb24sIG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdGlmIChuZXdEZWZhdWx0RHVyYXRpb24gPT09IDAgfHwgbmV3RGVmYXVsdER1cmF0aW9uKSB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbiA9IG5ld0RlZmF1bHREdXJhdGlvblxuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0VkZ2VPZmZzZXQgPT09IDAgfHwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0XHRlZGdlT2Zmc2V0ID0gbmV3RWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uOiBkZWZhdWx0RHVyYXRpb24sXG5cdFx0XHRcdGVkZ2VPZmZzZXQ6IGVkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0dXA6IHNldHVwLFxuXHRcdFx0dG86IHNjcm9sbFRvRWxlbSxcblx0XHRcdHRvWTogc2Nyb2xsVG9ZLFxuXHRcdFx0aW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuXHRcdFx0Y2VudGVyOiBzY3JvbGxUb0NlbnRlck9mLFxuXHRcdFx0c3RvcDogc3RvcFNjcm9sbCxcblx0XHRcdG1vdmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFzY3JvbGxUaW1lb3V0SWQgfSxcblx0XHRcdGdldFk6IGNvbnRhaW5lci5nZXRZLFxuXHRcdFx0Z2V0VG9wT2Y6IGNvbnRhaW5lci5nZXRUb3BPZlxuXHRcdH1cblxuXHR9XG5cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXHR2YXIgZ2V0RG9jWSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IGRvY0VsZW0uc2Nyb2xsVG9wIH1cblxuXHQvLyBDcmVhdGUgYSBzY3JvbGxlciBmb3IgdGhlIGRvY3VtZW50OlxuXHR2YXIgemVuc2Nyb2xsID0gbWFrZVNjcm9sbGVyKHtcblx0XHRib2R5OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmJvZHksXG5cdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgeSkgfSxcblx0XHRnZXRZOiBnZXREb2NZLFxuXHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IH0sXG5cdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGdldERvY1koKSAtIGRvY0VsZW0ub2Zmc2V0VG9wIH1cblx0fSlcblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc2Nyb2xsZXIgZnJvbSB0aGUgcHJvdmlkZWQgY29udGFpbmVyIGVsZW1lbnQgKGUuZy4sIGEgRElWKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3Njcm9sbENvbnRhaW5lcn0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdCAqIEBwYXJhbSB7ZGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHQgKiAgICAgICAgSWdub3JlZCBpZiAwIG9yIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge2VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBcblx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEByZXR1cm5zIEEgc2Nyb2xsZXIgb2JqZWN0LCBzaW1pbGFyIHRvIGB6ZW5zY3JvbGxgIGJ1dCBjb250cm9sbGluZyB0aGUgcHJvdmlkZWQgZWxlbWVudC5cblx0ICovXG5cdHplbnNjcm9sbC5jcmVhdGVTY3JvbGxlciA9IGZ1bmN0aW9uIChzY3JvbGxDb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXHRcdHJldHVybiBtYWtlU2Nyb2xsZXIoe1xuXHRcdFx0Ym9keTogc2Nyb2xsQ29udGFpbmVyLFxuXHRcdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0geSB9LFxuXHRcdFx0Z2V0WTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB9LFxuXHRcdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLm1pbihzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIH0sXG5cdFx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIH1cblx0XHR9LCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpXG5cdH1cblxuXG5cdC8vIEF1dG9tYXRpYyBsaW5rLXNtb290aGluZyBvbiBhY2hvcnNcblx0Ly8gRXhjbHVkZSBJRTgtIG9yIHdoZW4gbmF0aXZlIGlzIGVuYWJsZWQgb3IgWmVuc2Nyb2xsIGF1dG8tIGlzIGRpc2FibGVkXG5cdGlmIChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB3aW5kb3cgJiYgIXdpbmRvdy5ub1plbnNtb290aCAmJiAhaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oZG9jdW1lbnQuYm9keSkpIHtcblxuXHRcdHZhciBpc0hpc3RvcnlTdXBwb3J0ZWQgPSBcImhpc3RvcnlcIiBpbiB3aW5kb3cgJiYgXCJwdXNoU3RhdGVcIiBpbiBoaXN0b3J5XG5cdFx0dmFyIGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQgPSBpc0hpc3RvcnlTdXBwb3J0ZWQgJiYgXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIGhpc3RvcnlcblxuXHRcdC8vIE9uIGZpcnN0IGxvYWQgJiByZWZyZXNoIG1ha2Ugc3VyZSB0aGUgYnJvd3NlciByZXN0b3JlcyB0aGUgcG9zaXRpb24gZmlyc3Rcblx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0Ly8gU2V0IGl0IHRvIG1hbnVhbFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCIgfSwgOSlcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoZXZlbnQuc3RhdGUgJiYgXCJ6ZW5zY3JvbGxZXCIgaW4gZXZlbnQuc3RhdGUpIHtcblx0XHRcdFx0XHRcdHplbnNjcm9sbC50b1koZXZlbnQuc3RhdGUuemVuc2Nyb2xsWSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZhbHNlKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWRnZSBvZmZzZXQgb24gZmlyc3QgbG9hZCBpZiBuZWNlc3Nhcnlcblx0XHRcdC8vIFRoaXMgbWF5IG5vdCB3b3JrIG9uIElFIChvciBvbGRlciBjb21wdXRlcj8pIGFzIGl0IHJlcXVpcmVzIG1vcmUgdGltZW91dCwgYXJvdW5kIDEwMCBtc1xuXHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIEFkanVzdG1lbnQgaXMgb25seSBuZWVkZWQgaWYgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQ6XG5cdFx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzFdKVxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldFkgPSBNYXRoLm1heCgwLCB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdFx0XHR2YXIgZGlmZiA9IHplbnNjcm9sbC5nZXRZKCkgLSB0YXJnZXRZXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgZG8gdGhlIGFkanVzdG1lbnQgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBjbG9zZSB0byB0aGUgZWxlbWVudDpcblx0XHRcdFx0XHRcdFx0aWYgKDAgPD0gZGlmZiAmJiBkaWZmIDwgOSApIHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgdGFyZ2V0WSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgOSlcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKVxuXG5cdFx0Ly8gSGFuZGxpbmcgY2xpY2tzIG9uIGFuY2hvcnNcblx0XHR2YXIgUkVfbm9aZW5zbW9vdGggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpbm9aZW5zbW9vdGgoXFxcXHN8JClcIilcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIGFuY2hvciA9IGV2ZW50LnRhcmdldFxuXHRcdFx0d2hpbGUgKGFuY2hvciAmJiBhbmNob3IudGFnTmFtZSAhPT0gXCJBXCIpIHtcblx0XHRcdFx0YW5jaG9yID0gYW5jaG9yLnBhcmVudE5vZGVcblx0XHRcdH1cblx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIGl0IHdhc24ndCB3aXRoIHRoZSBwcmltYXJ5IGJ1dHRvbiwgb3Igd2l0aCBzb21lIG1vZGlmaWVyIGtleXM6XG5cdFx0XHRpZiAoIWFuY2hvciB8fCBldmVudC53aGljaCAhPT0gMSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGxpbmcgcG9zaXRpb24gc28gaXQgY2FuIGJlIHVzZWQgZm9yIHNjcm9sbCByZXN0b3JhdGlvbjpcblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdHZhciBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5LnN0YXRlICYmIHR5cGVvZiBoaXN0b3J5LnN0YXRlID09PSBcIm9iamVjdFwiID8gaGlzdG9yeS5zdGF0ZSA6IHt9XG5cdFx0XHRcdGhpc3RvcnlTdGF0ZS56ZW5zY3JvbGxZID0gemVuc2Nyb2xsLmdldFkoKVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIilcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vIEF2b2lkIHRoZSBDaHJvbWUgU2VjdXJpdHkgZXhjZXB0aW9uIG9uIGZpbGUgcHJvdG9jb2wsIGUuZy4sIGZpbGU6Ly9pbmRleC5odG1sXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZpbmQgdGhlIHJlZmVyZW5jZWQgSUQ6XG5cdFx0XHR2YXIgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCJcblx0XHRcdGlmIChocmVmLmluZGV4T2YoXCIjXCIpID09PSAwICYmICFSRV9ub1plbnNtb290aC50ZXN0KGFuY2hvci5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRZID0gMFxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKVxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gXCIjXCIpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIHRoZSB0YXJnZXQgSUQgaXMgbm90IGZvdW5kLlxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldFkgPSB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdC8vIEJ5IGRlZmF1bHQgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGBoYXNoY2hhbmdlYCBldmVudC4uLlxuXHRcdFx0XHR2YXIgb25Eb25lID0gZnVuY3Rpb24gKCkgeyB3aW5kb3cubG9jYXRpb24gPSBocmVmIH1cblx0XHRcdFx0Ly8gLi4udW5sZXNzIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0IHNwZWNpZmllZFxuXHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHR0YXJnZXRZID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0aWYgKGlzSGlzdG9yeVN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdFx0b25Eb25lID0gZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgaHJlZikgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR6ZW5zY3JvbGwudG9ZKHRhcmdldFksIG51bGwsIG9uRG9uZSlcblx0XHRcdH1cblx0XHR9LCBmYWxzZSlcblxuXHR9XG5cblxuXHRyZXR1cm4gemVuc2Nyb2xsXG5cblxufSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbi8vIEl0J3MgZW1wdHkgYXMgc29tZSBydW50aW1lIG1vZHVsZSBoYW5kbGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2pzL2RlZmF1bHRzXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL2RlZmF1bHRzLnRzXCJdLFxuXHRbXCIuL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9zYXNzL2dsb2JhbC5zY3NzXCJdLFxuXHRbXCIuL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9zYXNzL3ByaW50LnNjc3NcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3lkX2Q5XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N5ZF9kOVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==