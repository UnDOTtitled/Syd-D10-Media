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
(0, focus_within_1["default"])(document, {
  attr: false,
  className: 'focus-within'
});
if (document.querySelectorAll('.gallery')) {
  baguettebox_js_1["default"].run('.gallery');
}
var menuBurgerBtn = document.querySelector('.a-nav-toggle');
function toggleNav() {
  (0, toggleDataAttr_1["default"])(document.body, 'nav', 'open', 'closed');
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
  el.setAttribute("data-".concat(dataname), el.getAttribute("data-".concat(dataname)) === onState ? offState : onState);
}
exports["default"] = toggleDataAttr;

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

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/defaults": 0,
/******/ 			"css/print": 0,
/******/ 			"css/global": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksyd_d10"] = self["webpackChunksyd_d10"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/pippip/assets/js/defaults.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/pippip/assets/sass/global.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/pippip/assets/sass/print.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZURDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxnQ0FB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Q0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3lkLWQxMC8uL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9qcy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL3V0aWxzL3RvZ2dsZURhdGFBdHRyLnRzIiwid2VicGFjazovL3N5ZC1kMTAvLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvZGlzdC9iYWd1ZXR0ZUJveC5taW4uanMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3MiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9zYXNzL3ByaW50LnNjc3MiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL25vZGVfbW9kdWxlcy92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9kaXN0L3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhLm1pbi5qcyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtbGF6eWxvYWQvZGlzdC9sYXp5bG9hZC5taW4uanMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzIiwid2VicGFjazovL3N5ZC1kMTAvLi9ub2RlX21vZHVsZXMvZm9jdXMtd2l0aGluL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3lkLWQxMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3lkLWQxMC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm9jdXMtdmlzaWJsZSdcbmltcG9ydCBGb2N1c1dpdGhpbiBmcm9tICdmb2N1cy13aXRoaW4nXG5pbXBvcnQgemVuc2Nyb2xsIGZyb20gJ3plbnNjcm9sbCdcbmltcG9ydCBMYXp5TG9hZCBmcm9tICd2YW5pbGxhLWxhenlsb2FkJ1xuaW1wb3J0IHRvZ2dsZURhdGFBdHRyIGZyb20gJy4vdXRpbHMvdG9nZ2xlRGF0YUF0dHInXG5pbXBvcnQgJ3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhJ1xuaW1wb3J0IGJhZ3VldHRlQm94IGZyb20gJ2JhZ3VldHRlYm94LmpzJ1xuLy8gaW1wb3J0IE1vZGFsRm9jdXNUcmFwIGZyb20gJy4vY2xhc3Nlcy9Nb2RhbEZvY3VzVHJhcCc7XG4vL2ltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuXG4vKipcbiAqIEZvY3VzIHdpdGhpbiBwb2x5ZmlsbFxuICovXG5Gb2N1c1dpdGhpbihkb2N1bWVudCwge1xuICBhdHRyOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnZm9jdXMtd2l0aGluJyxcbn0pXG5cbi8qXG4gIEJldHRlciA8c2VsZWN0PiBlbGVtZW50c1xuICB1cmw6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2Nob2ljZXMuanNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgU2VsZWN0cyBhbGwgPHNlbGVjdD4gZWxlbWVudHMgYnkgZGVmYXVsdFxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvY2hvaWNlcy5qcy9hc3NldHMvc3R5bGVzL3Njc3MvY2hvaWNlc1wiOyBmcm9tIGBhc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc2BcbiovXG4vLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykubGVuZ3RoID4gMCkge1xuLy8gICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IG5ldyBDaG9pY2VzKCdzZWxlY3QnKTtcbi8vIH1cblxuLypcbiAgSW1hZ2UgZ2FsbGVyaWVzXG4gIHVybDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxpY2tpdHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICAgIDxhIGhyZWY9XCJwYXRoLXRvLWxhcmdlLWltYWdlXCIgZGF0YS1jYXB0aW9uPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJwYXRoLXRvLXRodW1ibmFpbFwiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvc3JjL2JhZ3VldHRlQm94XCI7IGZyb20gYGFzc2V0cy9zYXNzL2dsb2JhbC5zY3NzYFxuKi9cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5JykpIHtcbiAgYmFndWV0dGVCb3gucnVuKCcuZ2FsbGVyeScpXG59XG5cbi8qXG4gIE1lbnUgYnVyZ2VyXG4qL1xuY29uc3QgbWVudUJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hLW5hdi10b2dnbGUnKVxuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gIHRvZ2dsZURhdGFBdHRyKGRvY3VtZW50LmJvZHksICduYXYnLCAnb3BlbicsICdjbG9zZWQnKVxufVxuXG5pZiAobWVudUJ1cmdlckJ0bikge1xuICBtZW51QnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2KVxufVxuXG4vKlxuICBBdXRvbWF0aWNhbGx5IHNldCBleHRlcm5hbCBsaW5rcyB0byBoYXZlIG5vZm9sbG93L25vb3BlbmVyIGF0dHJzXG4qL1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgaWYgKGxpbmsuaG9zdG5hbWUgIT0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub2ZvbGxvdyBub29wZW5lcicpXG4gIH1cbn0pXG5cbi8vIExhenlMb2FkXG5jb25zdCBsYXp5TG9hZEltYWdlcyA9IG5ldyBMYXp5TG9hZCgpXG5cbi8qXG4gIFplbnNjcm9sbFxuICAtIFNldCBlZGdlIG9mZnNldCB0byAwIHRvIHByZXZuZXQgYnJlYWtpbmcgdGFiIG9yZGVyXG4qL1xuemVuc2Nyb2xsLnNldHVwKG51bGwsIDApXG5cblxuLypcbiAgTW9kYWxGb2N1c1RyYXBcblxuY29uc3QgTW9kYWxDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXBvcHVwLW1vZGFsJyk7XG5cbmlmIChNb2RhbENvbnRhaW5lcnMpIHtcbiAgTW9kYWxDb250YWluZXJzLmZvckVhY2goKE1vZGFsQ29udGFpbmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIG5ldyBNb2RhbEZvY3VzVHJhcChNb2RhbENvbnRhaW5lcik7XG4gIH0pXG59XG5cbiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGF0YUF0dHIoXG4gIGVsOiBFbGVtZW50LFxuICBkYXRhbmFtZTogc3RyaW5nLFxuICBvblN0YXRlOiBzdHJpbmcsXG4gIG9mZlN0YXRlOiBzdHJpbmdcbikge1xuICBlbC5zZXRBdHRyaWJ1dGUoXG4gICAgYGRhdGEtJHtkYXRhbmFtZX1gLFxuICAgIGVsLmdldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFuYW1lfWApID09PSBvblN0YXRlID8gb2ZmU3RhdGUgOiBvblN0YXRlXG4gIClcbn1cbiIsIi8qIVxuICogYmFndWV0dGVCb3guanNcbiAqIEBhdXRob3IgIGZlaW1vc2lcbiAqIEB2ZXJzaW9uIDEuMTEuMVxuICogQHVybCBodHRwczovL2dpdGh1Yi5jb20vZmVpbW9zaS9iYWd1ZXR0ZUJveC5qc1xuICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLmJhZ3VldHRlQm94PXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciByLGwsdSxjLGQsZj0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMzAgMTAgMTAgMzAgMzAgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicsZz0nPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNjBcIj48cG9seWxpbmUgcG9pbnRzPVwiMTQgMTAgMzQgMzAgMTQgNTBcIiBzdHJva2U9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIiBzdHJva2Utd2lkdGg9XCI0XCJzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPjwvc3ZnPicscD0nPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48ZyBzdHJva2U9XCJyZ2IoMTYwLDE2MCwxNjApXCIgc3Ryb2tlLXdpZHRoPVwiNFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiNVwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIvPjxsaW5lIHgxPVwiNVwiIHkxPVwiMjVcIiB4Mj1cIjI1XCIgeTI9XCI1XCIvPjwvZz48L3N2Zz4nLGI9e30sdj17Y2FwdGlvbnM6ITAsYnV0dG9uczpcImF1dG9cIixmdWxsU2NyZWVuOiExLG5vU2Nyb2xsYmFyczohMSxib2R5Q2xhc3M6XCJiYWd1ZXR0ZUJveC1vcGVuXCIsdGl0bGVUYWc6ITEsYXN5bmM6ITEscHJlbG9hZDoyLGFuaW1hdGlvbjpcInNsaWRlSW5cIixhZnRlclNob3c6bnVsbCxhZnRlckhpZGU6bnVsbCxvbkNoYW5nZTpudWxsLG92ZXJsYXlCYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLC44KVwifSxtPXt9LGg9W10sbz0wLG49ITEsaT17fSxhPSExLHk9Ly4rXFwuKGdpZnxqcGU/Z3xwbmd8d2VicCkvaSx3PXt9LGs9W10scz1udWxsLHg9ZnVuY3Rpb24oZSl7LTEhPT1lLnRhcmdldC5pZC5pbmRleE9mKFwiYmFndWV0dGUtaW1nXCIpJiZqKCl9LEU9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxEKCl9LEM9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxYKCl9LEI9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24/ZS5zdG9wUHJvcGFnYXRpb24oKTplLmNhbmNlbEJ1YmJsZT0hMCxqKCl9LFQ9ZnVuY3Rpb24oZSl7aS5jb3VudCsrLDE8aS5jb3VudCYmKGkubXVsdGl0b3VjaD0hMCksaS5zdGFydFg9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxpLnN0YXJ0WT1lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZfSxOPWZ1bmN0aW9uKGUpe2lmKCFhJiYhaS5tdWx0aXRvdWNoKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExO3ZhciB0PWUudG91Y2hlc1swXXx8ZS5jaGFuZ2VkVG91Y2hlc1swXTs0MDx0LnBhZ2VYLWkuc3RhcnRYPyhhPSEwLEQoKSk6dC5wYWdlWC1pLnN0YXJ0WDwtNDA/KGE9ITAsWCgpKToxMDA8aS5zdGFydFktdC5wYWdlWSYmaigpfX0sTD1mdW5jdGlvbigpe2kuY291bnQtLSxpLmNvdW50PD0wJiYoaS5tdWx0aXRvdWNoPSExKSxhPSExfSxBPWZ1bmN0aW9uKCl7TCgpfSxQPWZ1bmN0aW9uKGUpe1wiYmxvY2tcIj09PXIuc3R5bGUuZGlzcGxheSYmci5jb250YWlucyYmIXIuY29udGFpbnMoZS50YXJnZXQpJiYoZS5zdG9wUHJvcGFnYXRpb24oKSxZKCkpfTtmdW5jdGlvbiBTKGUpe2lmKHcuaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PXdbZV0uZ2FsbGVyaWVzO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe1tdLmZvckVhY2guY2FsbChlLGZ1bmN0aW9uKGUpe1coZS5pbWFnZUVsZW1lbnQsXCJjbGlja1wiLGUuZXZlbnRIYW5kbGVyKX0pLGg9PT1lJiYoaD1bXSl9KSxkZWxldGUgd1tlXX19ZnVuY3Rpb24gRihlKXtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDM3OkQoKTticmVhaztjYXNlIDM5OlgoKTticmVhaztjYXNlIDI3OmooKTticmVhaztjYXNlIDM2OiFmdW5jdGlvbiB0KGUpe2UmJmUucHJldmVudERlZmF1bHQoKTtyZXR1cm4gTSgwKX0oZSk7YnJlYWs7Y2FzZSAzNTohZnVuY3Rpb24gbihlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oaC5sZW5ndGgtMSl9KGUpfX1mdW5jdGlvbiBIKGUsdCl7aWYoaCE9PWUpe2ZvcihoPWUsZnVuY3Rpb24gcyhlKXtlPWV8fHt9O2Zvcih2YXIgdCBpbiB2KWJbdF09dlt0XSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZVt0XSYmKGJbdF09ZVt0XSk7bC5zdHlsZS50cmFuc2l0aW9uPWwuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImZhZGVJblwiPT09Yi5hbmltYXRpb24/XCJvcGFjaXR5IC40cyBlYXNlXCI6XCJzbGlkZUluXCI9PT1iLmFuaW1hdGlvbj9cIlwiOlwibm9uZVwiLFwiYXV0b1wiPT09Yi5idXR0b25zJiYoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8MT09PWgubGVuZ3RoKSYmKGIuYnV0dG9ucz0hMSk7dS5zdHlsZS5kaXNwbGF5PWMuc3R5bGUuZGlzcGxheT1iLmJ1dHRvbnM/XCJcIjpcIm5vbmVcIjt0cnl7ci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Yi5vdmVybGF5QmFja2dyb3VuZENvbG9yfWNhdGNoKG4pe319KHQpO2wuZmlyc3RDaGlsZDspbC5yZW1vdmVDaGlsZChsLmZpcnN0Q2hpbGQpO2Zvcih2YXIgbixvPVtdLGk9W10sYT1rLmxlbmd0aD0wO2E8ZS5sZW5ndGg7YSsrKShuPUooXCJkaXZcIikpLmNsYXNzTmFtZT1cImZ1bGwtaW1hZ2VcIixuLmlkPVwiYmFndWV0dGUtaW1nLVwiK2Esay5wdXNoKG4pLG8ucHVzaChcImJhZ3VldHRlQm94LWZpZ3VyZS1cIithKSxpLnB1c2goXCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK2EpLGwuYXBwZW5kQ2hpbGQoa1thXSk7ci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIixvLmpvaW4oXCIgXCIpKSxyLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIixpLmpvaW4oXCIgXCIpKX19ZnVuY3Rpb24gSShlKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cInNjcm9sbFwiKSxcImJsb2NrXCIhPT1yLnN0eWxlLmRpc3BsYXkmJihVKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGk9e2NvdW50OjAsc3RhcnRYOm51bGwsc3RhcnRZOm51bGx9LHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLHIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYi5mdWxsU2NyZWVuJiZmdW5jdGlvbiB0KCl7ci5yZXF1ZXN0RnVsbHNjcmVlbj9yLnJlcXVlc3RGdWxsc2NyZWVuKCk6ci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbj9yLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk6ci5tb3pSZXF1ZXN0RnVsbFNjcmVlbiYmci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpfSgpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLmNsYXNzTmFtZT1cInZpc2libGVcIixiLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChiLmJvZHlDbGFzcyksYi5hZnRlclNob3cmJmIuYWZ0ZXJTaG93KCl9LDUwKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLHM9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxZKCksbj0hMCl9ZnVuY3Rpb24gWSgpe2IuYnV0dG9ucz91LmZvY3VzKCk6ZC5mb2N1cygpfWZ1bmN0aW9uIGooKXtiLm5vU2Nyb2xsYmFycyYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIpLFwibm9uZVwiIT09ci5zdHlsZS5kaXNwbGF5JiYoVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxyLmNsYXNzTmFtZT1cIlwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuZnVsbHNjcmVlbiYmZnVuY3Rpb24gZSgpe2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuP2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk6ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbj9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk6ZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4mJmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCl9KCksYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJIaWRlJiZiLmFmdGVySGlkZSgpLHMmJnMuZm9jdXMoKSxuPSExfSw1MDApKX1mdW5jdGlvbiBxKHQsbil7dmFyIGU9a1t0XSxvPWhbdF07aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09bylpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdKW4mJm4oKTtlbHNle3ZhciBpPW8uaW1hZ2VFbGVtZW50LGE9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY2FwdGlvbnM/Yi5jYXB0aW9ucy5jYWxsKGgsaSk6aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcHRpb25cIil8fGkudGl0bGUscj1mdW5jdGlvbiBkKGUpe3ZhciB0PWUuaHJlZjtpZihlLmRhdGFzZXQpe3ZhciBuPVtdO2Zvcih2YXIgbyBpbiBlLmRhdGFzZXQpXCJhdC1cIiE9PW8uc3Vic3RyaW5nKDAsMyl8fGlzTmFOKG8uc3Vic3RyaW5nKDMpKXx8KG5bby5yZXBsYWNlKFwiYXQtXCIsXCJcIildPWUuZGF0YXNldFtvXSk7Zm9yKHZhciBpPU9iamVjdC5rZXlzKG4pLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gcGFyc2VJbnQoZSwxMCk8cGFyc2VJbnQodCwxMCk/LTE6MX0pLGE9d2luZG93LmlubmVyV2lkdGgqd2luZG93LmRldmljZVBpeGVsUmF0aW8scz0wO3M8aS5sZW5ndGgtMSYmaVtzXTxhOylzKys7dD1uW2lbc11dfHx0fXJldHVybiB0fShpKSxsPUooXCJmaWd1cmVcIik7aWYobC5pZD1cImJhZ3VldHRlQm94LWZpZ3VyZS1cIit0LGwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtc3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1kb3VibGUtYm91bmNlMlwiPjwvZGl2PjwvZGl2PicsYi5jYXB0aW9ucyYmcyl7dmFyIHU9SihcImZpZ2NhcHRpb25cIik7dS5pZD1cImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrdCx1LmlubmVySFRNTD1zLGwuYXBwZW5kQ2hpbGQodSl9ZS5hcHBlbmRDaGlsZChsKTt2YXIgYz1KKFwiaW1nXCIpO2Mub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWd1ZXR0ZS1pbWctXCIrdCtcIiAuYmFndWV0dGVCb3gtc3Bpbm5lclwiKTtsLnJlbW92ZUNoaWxkKGUpLCFiLmFzeW5jJiZuJiZuKCl9LGMuc2V0QXR0cmlidXRlKFwic3JjXCIsciksYy5hbHQ9YSYmYS5hbHR8fFwiXCIsYi50aXRsZVRhZyYmcyYmKGMudGl0bGU9cyksbC5hcHBlbmRDaGlsZChjKSxiLmFzeW5jJiZuJiZuKCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm4gTShvKzEpfWZ1bmN0aW9uIEQoKXtyZXR1cm4gTShvLTEpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4hbiYmMDw9ZSYmZTx0Lmxlbmd0aD8oSCh0LGIpLEkoZSksITApOmU8MD8oYi5hbmltYXRpb24mJk8oXCJsZWZ0XCIpLCExKTplPj1rLmxlbmd0aD8oYi5hbmltYXRpb24mJk8oXCJyaWdodFwiKSwhMSk6KHEobz1lLGZ1bmN0aW9uKCl7eihvKSxWKG8pfSksUigpLGIub25DaGFuZ2UmJmIub25DaGFuZ2UobyxrLmxlbmd0aCksITApfWZ1bmN0aW9uIE8oZSl7bC5jbGFzc05hbWU9XCJib3VuY2UtZnJvbS1cIitlLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLmNsYXNzTmFtZT1cIlwifSw0MDApfWZ1bmN0aW9uIFIoKXt2YXIgZT0xMDAqLW8rXCIlXCI7XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uPyhsLnN0eWxlLm9wYWNpdHk9MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bS50cmFuc2Zvcm1zP2wuc3R5bGUudHJhbnNmb3JtPWwuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6bC5zdHlsZS5sZWZ0PWUsbC5zdHlsZS5vcGFjaXR5PTF9LDQwMCkpOm0udHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lfWZ1bmN0aW9uIHooZSl7ZS1vPj1iLnByZWxvYWR8fHEoZSsxLGZ1bmN0aW9uKCl7eihlKzEpfSl9ZnVuY3Rpb24gVihlKXtvLWU+PWIucHJlbG9hZHx8cShlLTEsZnVuY3Rpb24oKXtWKGUtMSl9KX1mdW5jdGlvbiBVKGUsdCxuLG8pe2UuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIodCxuLG8pOmUuYXR0YWNoRXZlbnQoXCJvblwiK3QsZnVuY3Rpb24oZSl7KGU9ZXx8d2luZG93LmV2ZW50KS50YXJnZXQ9ZS50YXJnZXR8fGUuc3JjRWxlbWVudCxuKGUpfSl9ZnVuY3Rpb24gVyhlLHQsbixvKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixvKTplLmRldGFjaEV2ZW50KFwib25cIit0LG4pfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfWZ1bmN0aW9uIEooZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSl9cmV0dXJuW10uZm9yRWFjaHx8KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspZS5jYWxsKHQsdGhpc1tuXSxuLHRoaXMpfSksW10uZmlsdGVyfHwoQXJyYXkucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihlLHQsbixvLGkpe2ZvcihuPXRoaXMsbz1bXSxpPTA7aTxuLmxlbmd0aDtpKyspZS5jYWxsKHQsbltpXSxpLG4pJiZvLnB1c2gobltpXSk7cmV0dXJuIG99KSx7cnVuOmZ1bmN0aW9uIEsoZSx0KXtyZXR1cm4gbS50cmFuc2Zvcm1zPWZ1bmN0aW9uIG4oKXt2YXIgZT1KKFwiZGl2XCIpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLnBlcnNwZWN0aXZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZX0oKSxtLnN2Zz1mdW5jdGlvbiBvKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8c3ZnLz5cIixcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT0oZS5maXJzdENoaWxkJiZlLmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKX0oKSxtLnBhc3NpdmVFdmVudHM9ZnVuY3Rpb24gaSgpe3ZhciBlPSExO3RyeXt2YXIgdD1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe2U9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbnVsbCx0KX1jYXRjaChuKXt9cmV0dXJuIGV9KCksZnVuY3Rpb24gYSgpe2lmKHI9RyhcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpcmV0dXJuIGw9RyhcImJhZ3VldHRlQm94LXNsaWRlclwiKSx1PUcoXCJwcmV2aW91cy1idXR0b25cIiksYz1HKFwibmV4dC1idXR0b25cIiksdm9pZChkPUcoXCJjbG9zZS1idXR0b25cIikpOyhyPUooXCJkaXZcIikpLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImRpYWxvZ1wiKSxyLmlkPVwiYmFndWV0dGVCb3gtb3ZlcmxheVwiLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChyKSwobD1KKFwiZGl2XCIpKS5pZD1cImJhZ3VldHRlQm94LXNsaWRlclwiLHIuYXBwZW5kQ2hpbGQobCksKHU9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLHUuaWQ9XCJwcmV2aW91cy1idXR0b25cIix1LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlByZXZpb3VzXCIpLHUuaW5uZXJIVE1MPW0uc3ZnP2Y6XCImbHQ7XCIsci5hcHBlbmRDaGlsZCh1KSwoYz1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksYy5pZD1cIm5leHQtYnV0dG9uXCIsYy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJOZXh0XCIpLGMuaW5uZXJIVE1MPW0uc3ZnP2c6XCImZ3Q7XCIsci5hcHBlbmRDaGlsZChjKSwoZD1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZC5pZD1cImNsb3NlLWJ1dHRvblwiLGQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiQ2xvc2VcIiksZC5pbm5lckhUTUw9bS5zdmc/cDpcIiZ0aW1lcztcIixyLmFwcGVuZENoaWxkKGQpLHUuY2xhc3NOYW1lPWMuY2xhc3NOYW1lPWQuY2xhc3NOYW1lPVwiYmFndWV0dGVCb3gtYnV0dG9uXCIsZnVuY3Rpb24gbigpe3ZhciBlPW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMX06bnVsbCx0PW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMH06bnVsbDtVKHIsXCJjbGlja1wiLHgpLFUodSxcImNsaWNrXCIsRSksVShjLFwiY2xpY2tcIixDKSxVKGQsXCJjbGlja1wiLEIpLFUobCxcImNvbnRleHRtZW51XCIsQSksVShyLFwidG91Y2hzdGFydFwiLFQsdCksVShyLFwidG91Y2htb3ZlXCIsTixlKSxVKHIsXCJ0b3VjaGVuZFwiLEwpLFUoZG9jdW1lbnQsXCJmb2N1c1wiLFAsITApfSgpfSgpLFMoZSksZnVuY3Rpb24gcyhlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksbj17Z2FsbGVyaWVzOltdLG5vZGVMaXN0OnR9O3JldHVybiB3W2VdPW4sW10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7YSYmYS5maWx0ZXImJih5PWEuZmlsdGVyKTt2YXIgdD1bXTtpZih0PVwiQVwiPT09ZS50YWdOYW1lP1tlXTplLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSwwIT09KHQ9W10uZmlsdGVyLmNhbGwodCxmdW5jdGlvbihlKXtpZigtMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoYSYmYS5pZ25vcmVDbGFzcykpcmV0dXJuIHkudGVzdChlLmhyZWYpfSkpLmxlbmd0aCl7dmFyIGk9W107W10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExLEgoaSxhKSxJKHQpfSxvPXtldmVudEhhbmRsZXI6bixpbWFnZUVsZW1lbnQ6ZX07VShlLFwiY2xpY2tcIixuKSxpLnB1c2gobyl9KSxuLmdhbGxlcmllcy5wdXNoKGkpfX0pLG4uZ2FsbGVyaWVzfShlLHQpfSxzaG93Ok0sc2hvd05leHQ6WCxzaG93UHJldmlvdXM6RCxoaWRlOmosZGVzdHJveTpmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uIG4oKXt2YXIgZT1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITF9Om51bGwsdD1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VyhyLFwiY2xpY2tcIix4KSxXKHUsXCJjbGlja1wiLEUpLFcoYyxcImNsaWNrXCIsQyksVyhkLFwiY2xpY2tcIixCKSxXKGwsXCJjb250ZXh0bWVudVwiLEEpLFcocixcInRvdWNoc3RhcnRcIixULHQpLFcocixcInRvdWNobW92ZVwiLE4sZSksVyhyLFwidG91Y2hlbmRcIixMKSxXKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKSxmdW5jdGlvbiB0KCl7Zm9yKHZhciBlIGluIHcpdy5oYXNPd25Qcm9wZXJ0eShlKSYmUyhlKX0oKSxXKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3VldHRlQm94LW92ZXJsYXlcIikpLHc9e30saD1bXSxvPTB9fX0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIDpmb2N1cy12aXNpYmxlIHBvbHlmaWxsIGF0IHRoZSBnaXZlbiBzY29wZS5cbiAgICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAgICpcbiAgICogQHBhcmFtIHsoRG9jdW1lbnR8U2hhZG93Um9vdCl9IHNjb3BlXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChzY29wZSkge1xuICAgIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gbnVsbDtcblxuICAgIHZhciBpbnB1dFR5cGVzQWxsb3dsaXN0ID0ge1xuICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgIHNlYXJjaDogdHJ1ZSxcbiAgICAgIHVybDogdHJ1ZSxcbiAgICAgIHRlbDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICBudW1iZXI6IHRydWUsXG4gICAgICBkYXRlOiB0cnVlLFxuICAgICAgbW9udGg6IHRydWUsXG4gICAgICB3ZWVrOiB0cnVlLFxuICAgICAgdGltZTogdHJ1ZSxcbiAgICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxlZ2FjeSBicm93c2VycyBhbmQgaWZyYW1lcyB3aGljaCBzb21ldGltZXMgZm9jdXNcbiAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsICYmXG4gICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgICAgIGVsLm5vZGVOYW1lICE9PSAnQk9EWScgJiZcbiAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgJ2NvbnRhaW5zJyBpbiBlbC5jbGFzc0xpc3RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAqIGA6Zm9jdXMtdmlzaWJsZWAgd2hlbiBmb2N1c2VkLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGVsKSB7XG4gICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnSU5QVVQnICYmIGlucHV0VHlwZXNBbGxvd2xpc3RbdHlwZV0gJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3QgYWRkZWQgYnlcbiAgICAgKiB0aGUgYXV0aG9yLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRGb2N1c1Zpc2libGVDbGFzcyhlbCkge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXZpc2libGUnKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJywgJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQgaWYgaXQgd2FzIG5vdFxuICAgICAqIG9yaWdpbmFsbHkgYWRkZWQgYnkgdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICAgICAqIGFuZCB0aGUga2V5IHByZXNzIGRpZCBub3QgaW5jbHVkZSBhIG1ldGEsIGFsdC9vcHRpb24sIG9yIGNvbnRyb2wga2V5O1xuICAgICAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gICAgICogQXBwbHkgYGZvY3VzLXZpc2libGVgIHRvIGFueSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGFuZCBrZWVwIHRyYWNrXG4gICAgICogb2Ygb3VyIGtleWJvYXJkIG1vZGFsaXR5IHN0YXRlIHdpdGggYGhhZEtleWJvYXJkRXZlbnRgLlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1ZhbGlkRm9jdXNUYXJnZXQoc2NvcGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3Moc2NvcGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICAgICAqIHRoZSBtb2RhbGl0eSBhd2F5IGZyb20ga2V5Ym9hcmQuXG4gICAgICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAgICAgKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gICAgICogcG9pbnRpbmcgZGV2aWNlLCB3aGlsZSB3ZSBzdGlsbCB0aGluayB3ZSdyZSBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGZvY3VzYCwgYWRkIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgdG8gdGhlIHRhcmdldCBpZjpcbiAgICAgKiAtIHRoZSB0YXJnZXQgcmVjZWl2ZWQgZm9jdXMgYXMgYSByZXN1bHQgb2Yga2V5Ym9hcmQgbmF2aWdhdGlvbiwgb3JcbiAgICAgKiAtIHRoZSBldmVudCB0YXJnZXQgaXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgbGlrZWx5IHJlcXVpcmUgaW50ZXJhY3Rpb25cbiAgICAgKiAgIHZpYSB0aGUga2V5Ym9hcmQgKGUuZy4gYSB0ZXh0IGJveClcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICAvLyBQcmV2ZW50IElFIGZyb20gZm9jdXNpbmcgdGhlIGRvY3VtZW50IG9yIEhUTUwgZWxlbWVudC5cbiAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGUudGFyZ2V0KSkge1xuICAgICAgICBhZGRGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gYGJsdXJgLCByZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSB0YXJnZXQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtdmlzaWJsZScpIHx8XG4gICAgICAgIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJylcbiAgICAgICkge1xuICAgICAgICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gICAgICAgIC8vIHJhcGlkbHkgYnkgYSB2aXNpYmlsaXR5IGNoYW5nZS5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3Qgc2VlIGEgdmlzaWJpbGl0eSBjaGFuZ2Ugd2l0aGluIDEwMG1zLCBpdCdzIHByb2JhYmx5IGFcbiAgICAgICAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gdHJ1ZTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQpO1xuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICByZW1vdmVGb2N1c1Zpc2libGVDbGFzcyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHVzZXIgY2hhbmdlcyB0YWJzLCBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBwcmV2aW91c2x5XG4gICAgICogZm9jdXNlZCBlbGVtZW50IGhhZCAuZm9jdXMtdmlzaWJsZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKGUpIHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgICAgLy8gb24gdGhlIGVsZW1lbnQgKFNhZmFyaSBhY3R1YWxseSBjYWxscyBpdCB0d2ljZSkuXG4gICAgICAgIC8vIElmIHRoaXMgdGFiIGNoYW5nZSBjYXVzZWQgYSBibHVyIG9uIGFuIGVsZW1lbnQgd2l0aCBmb2N1cy12aXNpYmxlLFxuICAgICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICAgIGlmIChoYWRGb2N1c1Zpc2libGVSZWNlbnRseSkge1xuICAgICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGdyb3VwIG9mIGxpc3RlbmVycyB0byBkZXRlY3QgdXNhZ2Ugb2YgYW55IHBvaW50aW5nIGRldmljZXMuXG4gICAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAgICogdGhlIHdpbmRvdyBpcyBibHVycmVkLCBzbyB0aGF0IHRoZXkgYXJlIGFjdGl2ZSB3aGVuIHRoZSB3aW5kb3cgcmVnYWluc1xuICAgICAqIGZvY3VzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogSWYgYW55IGV2ZW50IGlzIHJlY2VpdmVkIGZyb20gYSBwb2ludGluZyBkZXZpY2UgKGUuZy4gbW91c2UsIHBvaW50ZXIsXG4gICAgICogdG91Y2gpLCB0dXJuIG9mZiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgICAvLyBXb3JrIGFyb3VuZCBhIFNhZmFyaSBxdWlyayB0aGF0IGZpcmVzIGEgbW91c2Vtb3ZlIG9uIDxodG1sPiB3aGVuZXZlciB0aGVcbiAgICAgIC8vIHdpbmRvdyBibHVycywgZXZlbiBpZiB5b3UncmUgdGFiYmluZyBvdXQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgcmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAgIC8vIG9ubHkuIEZvciBleGFtcGxlLCBnbG9iYWwgcG9pbnRlciBpbnB1dCwgZ2xvYmFsIGtleSBwcmVzc2VzIGFuZCBnbG9iYWxcbiAgICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBzaG91bGQgYWZmZWN0IHRoZSBzdGF0ZSBhdCBldmVyeSBzY29wZTpcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcblxuICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuXG4gICAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAgIC8vIHNjb3BlLiBUaGlzIGlzIGJlY2F1c2UgZm9jdXMgLyBibHVyIGV2ZW50cyB0aGF0IG9yaWdpbmF0ZSBmcm9tIHdpdGhpbiBhXG4gICAgLy8gc2hhZG93IHJvb3QgYXJlIG5vdCByZS1kaXNwYXRjaGVkIGZyb20gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCB3YXMgYWxyZWFkeVxuICAgIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cywgdHJ1ZSk7XG4gICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1ciwgdHJ1ZSk7XG5cbiAgICAvLyBXZSBkZXRlY3QgdGhhdCBhIG5vZGUgaXMgYSBTaGFkb3dSb290IGJ5IGVuc3VyaW5nIHRoYXQgaXQgaXMgYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIGFsc28gaGFzIGEgaG9zdCBwcm9wZXJ0eS4gVGhpcyBjaGVjayBjb3ZlcnMgbmF0aXZlXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYW5kIHBvbHlmaWxsIGltcGxlbWVudGF0aW9uIHRyYW5zcGFyZW50bHkuIElmIHdlIG9ubHkgY2FyZWRcbiAgICAvLyBhYm91dCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCB3ZSBjb3VsZCBqdXN0IGNoZWNrIGlmIHRoZSBzY29wZSB3YXNcbiAgICAvLyBhbiBpbnN0YW5jZSBvZiBhIFNoYWRvd1Jvb3QuXG4gICAgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiYgc2NvcGUuaG9zdCkge1xuICAgICAgLy8gU2luY2UgYSBTaGFkb3dSb290IGlzIGEgc3BlY2lhbCBraW5kIG9mIERvY3VtZW50RnJhZ21lbnQsIGl0IGRvZXMgbm90XG4gICAgICAvLyBoYXZlIGEgcm9vdCBlbGVtZW50IHRvIGFkZCBhIGNsYXNzIHRvLiBTbywgd2UgYWRkIHRoaXMgYXR0cmlidXRlIHRvIHRoZVxuICAgICAgLy8gaG9zdCBlbGVtZW50IGluc3RlYWQ6XG4gICAgICBzY29wZS5ob3N0LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1mb2N1cy12aXNpYmxlJywgJycpO1xuICAgIH0gZWxzZSBpZiAoc2NvcGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzLWZvY3VzLXZpc2libGUnKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8gd3JhcCBhbGwgcmVmZXJlbmNlcyB0byBnbG9iYWwgd2luZG93IGFuZCBkb2N1bWVudCBpblxuICAvLyB0aGVzZSBjaGVja3MgdG8gc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgdXNlIGNhc2VzXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZS9pc3N1ZXMvMTk5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTWFrZSB0aGUgcG9seWZpbGwgaGVscGVyIGdsb2JhbGx5IGF2YWlsYWJsZS4gVGhpcyBjYW4gYmUgdXNlZCBhcyBhIHNpZ25hbFxuICAgIC8vIHRvIGludGVyZXN0ZWQgbGlicmFyaWVzIHRoYXQgd2lzaCB0byBjb29yZGluYXRlIHdpdGggdGhlIHBvbHlmaWxsIGZvciBlLmcuLFxuICAgIC8vIGFwcGx5aW5nIHRoZSBwb2x5ZmlsbCB0byBhIHNoYWRvdyByb290OlxuICAgIHdpbmRvdy5hcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsID0gYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbDtcblxuICAgIC8vIE5vdGlmeSBpbnRlcmVzdGVkIGxpYnJhcmllcyBvZiB0aGUgcG9seWZpbGwncyBwcmVzZW5jZSwgaW4gY2FzZSB0aGVcbiAgICAvLyBwb2x5ZmlsbCB3YXMgbG9hZGVkIGxhemlseTpcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2ZvY3VzLXZpc2libGUtcG9seWZpbGwtcmVhZHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHVzaW5nIEN1c3RvbUV2ZW50IGFzIGEgY29uc3RydWN0b3IgZGlyZWN0bHk6XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5JywgZmFsc2UsIGZhbHNlLCB7fSk7XG4gICAgfVxuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBBcHBseSB0aGUgcG9seWZpbGwgdG8gdGhlIGdsb2JhbCBkb2N1bWVudCwgc28gdGhhdCBubyBKYXZhU2NyaXB0XG4gICAgLy8gY29vcmRpbmF0aW9uIGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgcG9seWZpbGwgaW4gdGhlIHRvcC1sZXZlbCBkb2N1bWVudDpcbiAgICBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKGRvY3VtZW50KTtcbiAgfVxuXG59KSkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiB2YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYSAtIEVTMjAxNSBhY2Nlc3NpYmxlIGFjY29yZGlvbiBzeXN0ZW0sIHVzaW5nIEFSSUEgKGNvbXBhdGlibGUgSUU5KyB3aGVuIHRyYW5zcGlsZWQpXG4gKiBAdmVyc2lvbiB2My4wLjFcbiAqIEBsaW5rIGh0dHBzOi8vdmFuMTF5Lm5ldC9hY2Nlc3NpYmxlLWFjY29yZGlvbi9cbiAqIEBsaWNlbnNlIE1JVCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNvMzMzM2ZyL3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX12YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9YXJndW1lbnRzW3RdO2Zvcih2YXIgbiBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiYoZVtuXT1yW25dKX1yZXR1cm4gZX0sbG9hZENvbmZpZz1mdW5jdGlvbigpe3ZhciBlPXt9LHQ9ZnVuY3Rpb24odCxyKXtlW3RdPXJ9LHI9ZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LG49ZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19O3JldHVybntzZXQ6dCxnZXQ6cixyZW1vdmU6bn19LERBVEFfSEFTSF9JRD1cImRhdGEtaGFzaGFjY29yZGlvbi1pZFwiLHBsdWdpbkNvbmZpZz1sb2FkQ29uZmlnKCksZmluZEJ5SWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitlK1wiW1wiK0RBVEFfSEFTSF9JRCsnPVwiJyt0KydcIl0nKX0sYWRkQ2xhc3M9ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5hZGQodCk6ZS5jbGFzc05hbWUrPVwiIFwiK3R9LHJlbW92ZUNsYXNzPWZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QucmVtb3ZlKHQpOmUuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxiKVwiK3Quc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKFxcXFxifCQpXCIsXCJnaVwiKSxcIiBcIil9LGhhc0NsYXNzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmNvbnRhaW5zKHQpOm5ldyBSZWdFeHAoXCIoXnwgKVwiK3QrXCIoIHwkKVwiLFwiZ2lcIikudGVzdChlLmNsYXNzTmFtZSl9LHNldEF0dHJpYnV0ZXM9ZnVuY3Rpb24oZSx0KXtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2Uuc2V0QXR0cmlidXRlKHIsdFtyXSl9KX0sc2VhcmNoUGFyZW50SGFzaElkPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPSExLG49ZTsxPT09bi5ub2RlVHlwZSYmbiYmcj09PSExOyluLmhhc0F0dHJpYnV0ZSh0KT09PSEwP3I9ITA6bj1uLnBhcmVudE5vZGU7cmV0dXJuIHI9PT0hMD9uLmdldEF0dHJpYnV0ZSh0KTpcIlwifSxzZWFyY2hQYXJlbnQ9ZnVuY3Rpb24oZSx0LHIpe2Zvcih2YXIgbj0hMSxBPWU7QSYmbj09PSExOyloYXNDbGFzcyhBLHQpPT09ITAmJkEuZ2V0QXR0cmlidXRlKERBVEFfSEFTSF9JRCk9PT1yP249ITA6QT1BLnBhcmVudE5vZGU7cmV0dXJuIG49PT0hMD9BLmdldEF0dHJpYnV0ZShcImlkXCIpOlwiXCJ9LHVuU2VsZWN0SGVhZGVycz1mdW5jdGlvbihlLHQpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtzZXRBdHRyaWJ1dGVzKGUsX2RlZmluZVByb3BlcnR5KHt9LHQsXCJmYWxzZVwiKSl9KX0sc2VsZWN0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7ZS5zZXRBdHRyaWJ1dGUodCwhMCl9LHNlbGVjdEhlYWRlckluTGlzdD1mdW5jdGlvbihlLHQscil7dmFyIG49dm9pZCAwO2UuZm9yRWFjaChmdW5jdGlvbihlLHQpe1widHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUocikmJihuPXQpfSksXCJuZXh0XCI9PT10JiYoc2VsZWN0SGVhZGVyKGVbbisxXSksc2V0VGltZW91dChmdW5jdGlvbigpe2VbbisxXS5mb2N1cygpfSwwKSksXCJwcmV2XCI9PT10JiYoc2VsZWN0SGVhZGVyKGVbbi0xXSksc2V0VGltZW91dChmdW5jdGlvbigpe2Vbbi0xXS5mb2N1cygpfSwwKSl9LHBsdWdpbj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT97fTphcmd1bWVudHNbMF0sdD1fZXh0ZW5kcyh7QUNDT1JESU9OX0pTOlwianMtYWNjb3JkaW9uXCIsQUNDT1JESU9OX0pTX0hFQURFUjpcImpzLWFjY29yZGlvbl9faGVhZGVyXCIsQUNDT1JESU9OX0pTX1BBTkVMOlwianMtYWNjb3JkaW9uX19wYW5lbFwiLEFDQ09SRElPTl9EQVRBX1BSRUZJWF9DTEFTUzpcImRhdGEtYWNjb3JkaW9uLXByZWZpeC1jbGFzc2VzXCIsQUNDT1JESU9OX0RBVEFfT1BFTkVEOlwiZGF0YS1hY2NvcmRpb24tb3BlbmVkXCIsQUNDT1JESU9OX0RBVEFfTVVMVElTRUxFQ1RBQkxFOlwiZGF0YS1hY2NvcmRpb24tbXVsdGlzZWxlY3RhYmxlXCIsQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlM6XCJkYXRhLWFjY29yZGlvbi1jb29sLXNlbGVjdG9yc1wiLEFDQ09SRElPTl9QUkVGSVhfSURTOlwiYWNjb3JkaW9uXCIsQUNDT1JESU9OX0JVVFRPTl9JRDpcIl90YWJcIixBQ0NPUkRJT05fUEFORUxfSUQ6XCJfcGFuZWxcIixBQ0NPUkRJT05fU1RZTEU6XCJhY2NvcmRpb25cIixBQ0NPUkRJT05fVElUTEVfU1RZTEU6XCJhY2NvcmRpb25fX3RpdGxlXCIsQUNDT1JESU9OX0hFQURFUl9TVFlMRTpcImFjY29yZGlvbl9faGVhZGVyXCIsQUNDT1JESU9OX1BBTkVMX1NUWUxFOlwiYWNjb3JkaW9uX19wYW5lbFwiLEFDQ09SRElPTl9ST0xFX1RBQkxJU1Q6XCJ0YWJsaXN0XCIsQUNDT1JESU9OX1JPTEVfVEFCOlwidGFiXCIsQUNDT1JESU9OX1JPTEVfVEFCUEFORUw6XCJ0YWJwYW5lbFwiLEFUVFJfUk9MRTpcInJvbGVcIixBVFRSX01VTFRJU0VMRUNUQUJMRTpcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCIsQVRUUl9FWFBBTkRFRDpcImFyaWEtZXhwYW5kZWRcIixBVFRSX0xBQkVMTEVEQlk6XCJhcmlhLWxhYmVsbGVkYnlcIixBVFRSX0hJRERFTjpcImFyaWEtaGlkZGVuXCIsQVRUUl9DT05UUk9MUzpcImFyaWEtY29udHJvbHNcIixBVFRSX1NFTEVDVEVEOlwiYXJpYS1zZWxlY3RlZFwifSxlKSxyPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIsMTIpO3BsdWdpbkNvbmZpZy5zZXQocix0KTt2YXIgbj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT9kb2N1bWVudDphcmd1bWVudHNbMF07cmV0dXJuW10uc2xpY2UuY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdC5BQ0NPUkRJT05fSlMpKX0sQT1mdW5jdGlvbihlKXtuKGUpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIG49XCJ6XCIrTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMiwxMiksQT1lLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX1BSRUZJWF9DTEFTUyk9PT0hMD9lLmdldEF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX1BSRUZJWF9DTEFTUykrXCItXCI6XCJcIixhPWUuaGFzQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITA7XCJub25lXCI9PT1lLmdldEF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX01VTFRJU0VMRUNUQUJMRSk/ZS5zZXRBdHRyaWJ1dGUodC5BVFRSX01VTFRJU0VMRUNUQUJMRSxcImZhbHNlXCIpOmUuc2V0QXR0cmlidXRlKHQuQVRUUl9NVUxUSVNFTEVDVEFCTEUsXCJ0cnVlXCIpLGUuc2V0QXR0cmlidXRlKHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCTElTVCksZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLG4pLGUuc2V0QXR0cmlidXRlKERBVEFfSEFTSF9JRCxyKSxhZGRDbGFzcyhlLEErdC5BQ0NPUkRJT05fU1RZTEUpO3ZhciBpPVtdLnNsaWNlLmNhbGwoZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3QuQUNDT1JESU9OX0pTX0hFQURFUikpO2kuZm9yRWFjaChmdW5jdGlvbihpLF8pe3ZhciBvLFQ7aWYoaS5wYXJlbnROb2RlPT09ZXx8YSE9PSExKXt2YXIgRT1fKzEscz1pLm5leHRFbGVtZW50U2libGluZyxDPWkuaW5uZXJIVE1MLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKSxEPWkuaGFzQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfT1BFTkVEKT09PSEwP2kuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfT1BFTkVEKTpcIlwiO2MuaW5uZXJIVE1MPUMsYWRkQ2xhc3MoYyx0LkFDQ09SRElPTl9KU19IRUFERVIpLGFkZENsYXNzKGMsQSt0LkFDQ09SRElPTl9IRUFERVJfU1RZTEUpLHNldEF0dHJpYnV0ZXMoYywobz17fSxfZGVmaW5lUHJvcGVydHkobyx0LkFUVFJfUk9MRSx0LkFDQ09SRElPTl9ST0xFX1RBQiksX2RlZmluZVByb3BlcnR5KG8sXCJpZFwiLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9CVVRUT05fSUQrRSksX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX0NPTlRST0xTLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9QQU5FTF9JRCtFKSxfZGVmaW5lUHJvcGVydHkobyx0LkFUVFJfU0VMRUNURUQsXCJmYWxzZVwiKSxfZGVmaW5lUHJvcGVydHkobyxcInR5cGVcIixcImJ1dHRvblwiKSxfZGVmaW5lUHJvcGVydHkobyxEQVRBX0hBU0hfSUQsciksbykpLGkuaW5uZXJIVE1MPVwiXCIsaS5hcHBlbmRDaGlsZChjKSxhZGRDbGFzcyhpLEErdC5BQ0NPUkRJT05fVElUTEVfU1RZTEUpLHJlbW92ZUNsYXNzKGksdC5BQ0NPUkRJT05fSlNfSEVBREVSKSxhZGRDbGFzcyhzLEErdC5BQ0NPUkRJT05fUEFORUxfU1RZTEUpLHNldEF0dHJpYnV0ZXMocywoVD17fSxfZGVmaW5lUHJvcGVydHkoVCx0LkFUVFJfUk9MRSx0LkFDQ09SRElPTl9ST0xFX1RBQlBBTkVMKSxfZGVmaW5lUHJvcGVydHkoVCx0LkFUVFJfTEFCRUxMRURCWSx0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fQlVUVE9OX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShULFwiaWRcIix0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fUEFORUxfSUQrRSksX2RlZmluZVByb3BlcnR5KFQsREFUQV9IQVNIX0lELHIpLFQpKSxcInRydWVcIj09PUQ/KGMuc2V0QXR0cmlidXRlKHQuQVRUUl9FWFBBTkRFRCxcInRydWVcIiksaS5yZW1vdmVBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpLHMuc2V0QXR0cmlidXRlKHQuQVRUUl9ISURERU4sXCJmYWxzZVwiKSk6KGMuc2V0QXR0cmlidXRlKHQuQVRUUl9FWFBBTkRFRCxcImZhbHNlXCIpLHMuc2V0QXR0cmlidXRlKHQuQVRUUl9ISURERU4sXCJ0cnVlXCIpKX19KX0pfTtyZXR1cm57YXR0YWNoOkF9fSxtYWluPWZ1bmN0aW9uKCl7cmV0dXJuW1wiY2xpY2tcIixcImtleWRvd25cIixcImZvY3VzXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGUsZnVuY3Rpb24odCl7dmFyIHI9c2VhcmNoUGFyZW50SGFzaElkKHQudGFyZ2V0LERBVEFfSEFTSF9JRCk7XCJcIiE9PXImJiFmdW5jdGlvbigpe3ZhciBuPXBsdWdpbkNvbmZpZy5nZXQocik7aGFzQ2xhc3ModC50YXJnZXQsbi5BQ0NPUkRJT05fSlNfSEVBREVSKT09PSEwJiZcImZvY3VzXCI9PT1lJiYhZnVuY3Rpb24oKXt2YXIgZT10LnRhcmdldCxBPWZpbmRCeUlkKHNlYXJjaFBhcmVudChlLG4uQUNDT1JESU9OX0pTLHIpLHIpLGE9QS5oYXNBdHRyaWJ1dGUobi5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMCxpPVtdLnNsaWNlLmNhbGwoQS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK24uQUNDT1JESU9OX0pTX0hFQURFUikpO2E9PT0hMSYmKGk9aS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZS5wYXJlbnROb2RlPT09QX0pKSx1blNlbGVjdEhlYWRlcnMoaSxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihlLG4uQVRUUl9TRUxFQ1RFRCl9KCksaGFzQ2xhc3ModC50YXJnZXQsbi5BQ0NPUkRJT05fSlNfSEVBREVSKT09PSEwJiZcImNsaWNrXCI9PT1lJiYhZnVuY3Rpb24oKXt2YXIgZT10LnRhcmdldCxBPWZpbmRCeUlkKHNlYXJjaFBhcmVudChlLG4uQUNDT1JESU9OX0pTLHIpLHIpLGE9QS5oYXNBdHRyaWJ1dGUobi5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMCxpPVtdLnNsaWNlLmNhbGwoQS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK24uQUNDT1JESU9OX0pTX0hFQURFUikpLF89QS5nZXRBdHRyaWJ1dGUobi5BVFRSX01VTFRJU0VMRUNUQUJMRSksbz1maW5kQnlJZChlLmdldEF0dHJpYnV0ZShuLkFUVFJfQ09OVFJPTFMpLHIpLFQ9ZS5nZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVEKTthPT09ITEmJihpPWkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PUF9KSksXCJmYWxzZVwiPT09VD8oZS5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCEwKSxvLnJlbW92ZUF0dHJpYnV0ZShuLkFUVFJfSElEREVOKSk6KGUuc2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCwhMSksby5zZXRBdHRyaWJ1dGUobi5BVFRSX0hJRERFTiwhMCkpLFwiZmFsc2VcIj09PV8mJmkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgQT1maW5kQnlJZCh0LmdldEF0dHJpYnV0ZShuLkFUVFJfQ09OVFJPTFMpLHIpO3QhPT1lPyh0LnNldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQsITEpLHQuc2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCwhMSksQS5zZXRBdHRyaWJ1dGUobi5BVFRSX0hJRERFTiwhMCkpOnQuc2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCwhMCl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCl9KCksaGFzQ2xhc3ModC50YXJnZXQsbi5BQ0NPUkRJT05fSlNfSEVBREVSKT09PSEwJiZcImtleWRvd25cIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9c2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksYT1maW5kQnlJZChBLHIpLGk9YS5oYXNBdHRyaWJ1dGUobi5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMCxfPVtdLnNsaWNlLmNhbGwoYS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK24uQUNDT1JESU9OX0pTX0hFQURFUikpO2k9PT0hMSYmKF89Xy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZS5wYXJlbnROb2RlPT09YX0pKSwzNj09PXQua2V5Q29kZT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1swXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfWzBdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6MzU9PT10LmtleUNvZGU/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bXy5sZW5ndGgtMV0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1tfLmxlbmd0aC0xXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOjM3IT09dC5rZXlDb2RlJiYzOCE9PXQua2V5Q29kZXx8dC5jdHJsS2V5PzQwIT09dC5rZXlDb2RlJiYzOSE9PXQua2V5Q29kZXx8dC5jdHJsS2V5fHwoXCJ0cnVlXCI9PT1fW18ubGVuZ3RoLTFdLmdldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQpPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfWzBdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bMF0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTooc2VsZWN0SGVhZGVySW5MaXN0KF8sXCJuZXh0XCIsbi5BVFRSX1NFTEVDVEVEKSx0LnByZXZlbnREZWZhdWx0KCkpKTpcInRydWVcIj09PV9bMF0uZ2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCk/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bXy5sZW5ndGgtMV0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1tfLmxlbmd0aC0xXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOihzZWxlY3RIZWFkZXJJbkxpc3QoXyxcInByZXZcIixuLkFUVFJfU0VMRUNURUQpLHQucHJldmVudERlZmF1bHQoKSl9KCl9KCl9LCEwKX0pLHBsdWdpbn07d2luZG93LnZhbjExeUFjY2Vzc2libGVBY2NvcmRpb25BcmlhPW1haW4oKTt2YXIgb25Mb2FkPWZ1bmN0aW9uIGUoKXt2YXIgdD13aW5kb3cudmFuMTF5QWNjZXNzaWJsZUFjY29yZGlvbkFyaWEoKTt0LmF0dGFjaCgpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsb25Mb2FkKTsiLCIhZnVuY3Rpb24obix0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KToobj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOm58fHNlbGYpLkxhenlMb2FkPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7cmV0dXJuIG49T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24obil7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIGU9YXJndW1lbnRzW3RdO2Zvcih2YXIgaSBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYobltpXT1lW2ldKX1yZXR1cm4gbn0sbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyxlPXQmJiEoXCJvbnNjcm9sbFwiaW4gd2luZG93KXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGk9dCYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiaW4gd2luZG93LG89dCYmXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLGE9dCYmd2luZG93LmRldmljZVBpeGVsUmF0aW8+MSxyPXtlbGVtZW50c19zZWxlY3RvcjpcIi5sYXp5XCIsY29udGFpbmVyOmV8fHQ/ZG9jdW1lbnQ6bnVsbCx0aHJlc2hvbGQ6MzAwLHRocmVzaG9sZHM6bnVsbCxkYXRhX3NyYzpcInNyY1wiLGRhdGFfc3Jjc2V0Olwic3Jjc2V0XCIsZGF0YV9zaXplczpcInNpemVzXCIsZGF0YV9iZzpcImJnXCIsZGF0YV9iZ19oaWRwaTpcImJnLWhpZHBpXCIsZGF0YV9iZ19tdWx0aTpcImJnLW11bHRpXCIsZGF0YV9iZ19tdWx0aV9oaWRwaTpcImJnLW11bHRpLWhpZHBpXCIsZGF0YV9iZ19zZXQ6XCJiZy1zZXRcIixkYXRhX3Bvc3RlcjpcInBvc3RlclwiLGNsYXNzX2FwcGxpZWQ6XCJhcHBsaWVkXCIsY2xhc3NfbG9hZGluZzpcImxvYWRpbmdcIixjbGFzc19sb2FkZWQ6XCJsb2FkZWRcIixjbGFzc19lcnJvcjpcImVycm9yXCIsY2xhc3NfZW50ZXJlZDpcImVudGVyZWRcIixjbGFzc19leGl0ZWQ6XCJleGl0ZWRcIix1bm9ic2VydmVfY29tcGxldGVkOiEwLHVub2JzZXJ2ZV9lbnRlcmVkOiExLGNhbmNlbF9vbl9leGl0OiEwLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX2FwcGxpZWQ6bnVsbCxjYWxsYmFja19sb2FkaW5nOm51bGwsY2FsbGJhY2tfbG9hZGVkOm51bGwsY2FsbGJhY2tfZXJyb3I6bnVsbCxjYWxsYmFja19maW5pc2g6bnVsbCxjYWxsYmFja19jYW5jZWw6bnVsbCx1c2VfbmF0aXZlOiExLHJlc3RvcmVfb25fZXJyb3I6ITF9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIG4oe30scix0KX0sbD1mdW5jdGlvbihuLHQpe3ZhciBlLGk9XCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWRcIixvPW5ldyBuKHQpO3RyeXtlPW5ldyBDdXN0b21FdmVudChpLHtkZXRhaWw6e2luc3RhbmNlOm99fSl9Y2F0Y2gobil7KGU9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGksITEsITEse2luc3RhbmNlOm99KX13aW5kb3cuZGlzcGF0Y2hFdmVudChlKX0sdT1cInNyY1wiLHM9XCJzcmNzZXRcIixkPVwic2l6ZXNcIixmPVwicG9zdGVyXCIsXz1cImxsT3JpZ2luYWxBdHRyc1wiLGc9XCJkYXRhXCIsdj1cImxvYWRpbmdcIixiPVwibG9hZGVkXCIscD1cImFwcGxpZWRcIixtPVwiZXJyb3JcIixoPVwibmF0aXZlXCIsRT1cImRhdGEtXCIsST1cImxsLXN0YXR1c1wiLHk9ZnVuY3Rpb24obix0KXtyZXR1cm4gbi5nZXRBdHRyaWJ1dGUoRSt0KX0saz1mdW5jdGlvbihuKXtyZXR1cm4geShuLEkpfSx3PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1cImRhdGEtbGwtc3RhdHVzXCI7bnVsbCE9PWU/bi5zZXRBdHRyaWJ1dGUoaSxlKTpuLnJlbW92ZUF0dHJpYnV0ZShpKX0obiwwLHQpfSxBPWZ1bmN0aW9uKG4pe3JldHVybiB3KG4sbnVsbCl9LEw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PT1rKG4pfSxPPWZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09aH0seD1bdixiLHAsbV0sQz1mdW5jdGlvbihuLHQsZSxpKXtuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYodm9pZCAwPT09aT92b2lkIDA9PT1lP24odCk6bih0LGUpOm4odCxlLGkpKX0sTj1mdW5jdGlvbihuLHQpe28/bi5jbGFzc0xpc3QuYWRkKHQpOm4uY2xhc3NOYW1lKz0obi5jbGFzc05hbWU/XCIgXCI6XCJcIikrdH0sTT1mdW5jdGlvbihuLHQpe28/bi5jbGFzc0xpc3QucmVtb3ZlKHQpOm4uY2xhc3NOYW1lPW4uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKylcIit0K1wiKFxcXFxzK3wkKVwiKSxcIiBcIikucmVwbGFjZSgvXlxccysvLFwiXCIpLnJlcGxhY2UoL1xccyskLyxcIlwiKX0sej1mdW5jdGlvbihuKXtyZXR1cm4gbi5sbFRlbXBJbWFnZX0sVD1mdW5jdGlvbihuLHQpe2lmKHQpe3ZhciBlPXQuX29ic2VydmVyO2UmJmUudW5vYnNlcnZlKG4pfX0sUj1mdW5jdGlvbihuLHQpe24mJihuLmxvYWRpbmdDb3VudCs9dCl9LEc9ZnVuY3Rpb24obix0KXtuJiYobi50b0xvYWRDb3VudD10KX0saj1mdW5jdGlvbihuKXtmb3IodmFyIHQsZT1bXSxpPTA7dD1uLmNoaWxkcmVuW2ldO2krPTEpXCJTT1VSQ0VcIj09PXQudGFnTmFtZSYmZS5wdXNoKHQpO3JldHVybiBlfSxEPWZ1bmN0aW9uKG4sdCl7dmFyIGU9bi5wYXJlbnROb2RlO2UmJlwiUElDVFVSRVwiPT09ZS50YWdOYW1lJiZqKGUpLmZvckVhY2godCl9LEg9ZnVuY3Rpb24obix0KXtqKG4pLmZvckVhY2godCl9LFY9W3VdLEY9W3UsZl0sQj1bdSxzLGRdLEo9W2ddLFA9ZnVuY3Rpb24obil7cmV0dXJuISFuW19dfSxTPWZ1bmN0aW9uKG4pe3JldHVybiBuW19dfSxVPWZ1bmN0aW9uKG4pe3JldHVybiBkZWxldGUgbltfXX0sJD1mdW5jdGlvbihuLHQpe2lmKCFQKG4pKXt2YXIgZT17fTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2VbdF09bi5nZXRBdHRyaWJ1dGUodCl9KSksbltfXT1lfX0scT1mdW5jdGlvbihuLHQpe2lmKFAobikpe3ZhciBlPVMobik7dC5mb3JFYWNoKChmdW5jdGlvbih0KXshZnVuY3Rpb24obix0LGUpe2U/bi5zZXRBdHRyaWJ1dGUodCxlKTpuLnJlbW92ZUF0dHJpYnV0ZSh0KX0obix0LGVbdF0pfSkpfX0sSz1mdW5jdGlvbihuLHQsZSl7TihuLHQuY2xhc3NfYXBwbGllZCksdyhuLHApLGUmJih0LnVub2JzZXJ2ZV9jb21wbGV0ZWQmJlQobix0KSxDKHQuY2FsbGJhY2tfYXBwbGllZCxuLGUpKX0sUT1mdW5jdGlvbihuLHQsZSl7TihuLHQuY2xhc3NfbG9hZGluZyksdyhuLHYpLGUmJihSKGUsMSksQyh0LmNhbGxiYWNrX2xvYWRpbmcsbixlKSl9LFc9ZnVuY3Rpb24obix0LGUpe2UmJm4uc2V0QXR0cmlidXRlKHQsZSl9LFg9ZnVuY3Rpb24obix0KXtXKG4sZCx5KG4sdC5kYXRhX3NpemVzKSksVyhuLHMseShuLHQuZGF0YV9zcmNzZXQpKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSxZPXtJTUc6ZnVuY3Rpb24obix0KXtEKG4sKGZ1bmN0aW9uKG4peyQobixCKSxYKG4sdCl9KSksJChuLEIpLFgobix0KX0sSUZSQU1FOmZ1bmN0aW9uKG4sdCl7JChuLFYpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFZJREVPOmZ1bmN0aW9uKG4sdCl7SChuLChmdW5jdGlvbihuKXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0pKSwkKG4sRiksVyhuLGYseShuLHQuZGF0YV9wb3N0ZXIpKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpLG4ubG9hZCgpfSxPQkpFQ1Q6ZnVuY3Rpb24obix0KXskKG4sSiksVyhuLGcseShuLHQuZGF0YV9zcmMpKX19LFo9W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCIsXCJPQkpFQ1RcIl0sbm49ZnVuY3Rpb24obix0KXshdHx8ZnVuY3Rpb24obil7cmV0dXJuIG4ubG9hZGluZ0NvdW50PjB9KHQpfHxmdW5jdGlvbihuKXtyZXR1cm4gbi50b0xvYWRDb3VudD4wfSh0KXx8QyhuLmNhbGxiYWNrX2ZpbmlzaCx0KX0sdG49ZnVuY3Rpb24obix0LGUpe24uYWRkRXZlbnRMaXN0ZW5lcih0LGUpLG4ubGxFdkxpc25yc1t0XT1lfSxlbj1mdW5jdGlvbihuLHQsZSl7bi5yZW1vdmVFdmVudExpc3RlbmVyKHQsZSl9LG9uPWZ1bmN0aW9uKG4pe3JldHVybiEhbi5sbEV2TGlzbnJzfSxhbj1mdW5jdGlvbihuKXtpZihvbihuKSl7dmFyIHQ9bi5sbEV2TGlzbnJzO2Zvcih2YXIgZSBpbiB0KXt2YXIgaT10W2VdO2VuKG4sZSxpKX1kZWxldGUgbi5sbEV2TGlzbnJzfX0scm49ZnVuY3Rpb24obix0LGUpeyFmdW5jdGlvbihuKXtkZWxldGUgbi5sbFRlbXBJbWFnZX0obiksUihlLC0xKSxmdW5jdGlvbihuKXtuJiYobi50b0xvYWRDb3VudC09MSl9KGUpLE0obix0LmNsYXNzX2xvYWRpbmcpLHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLGUpfSxjbj1mdW5jdGlvbihuLHQsZSl7dmFyIGk9eihuKXx8bjtvbihpKXx8ZnVuY3Rpb24obix0LGUpe29uKG4pfHwobi5sbEV2TGlzbnJzPXt9KTt2YXIgaT1cIlZJREVPXCI9PT1uLnRhZ05hbWU/XCJsb2FkZWRkYXRhXCI6XCJsb2FkXCI7dG4obixpLHQpLHRuKG4sXCJlcnJvclwiLGUpfShpLChmdW5jdGlvbihvKXshZnVuY3Rpb24obix0LGUsaSl7dmFyIG89Tyh0KTtybih0LGUsaSksTih0LGUuY2xhc3NfbG9hZGVkKSx3KHQsYiksQyhlLmNhbGxiYWNrX2xvYWRlZCx0LGkpLG98fG5uKGUsaSl9KDAsbix0LGUpLGFuKGkpfSksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19lcnJvciksdyh0LG0pLEMoZS5jYWxsYmFja19lcnJvcix0LGkpLGUucmVzdG9yZV9vbl9lcnJvciYmcSh0LEIpLG98fG5uKGUsaSl9KDAsbix0LGUpLGFuKGkpfSkpfSxsbj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe3JldHVybiBaLmluZGV4T2Yobi50YWdOYW1lKT4tMX0obik/ZnVuY3Rpb24obix0LGUpeyFmdW5jdGlvbihuKXtuLmxsVGVtcEltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIil9KG4pLGNuKG4sdCxlKSxmdW5jdGlvbihuKXtQKG4pfHwobltfXT17YmFja2dyb3VuZEltYWdlOm4uc3R5bGUuYmFja2dyb3VuZEltYWdlfSl9KG4pLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT15KG4sdC5kYXRhX2JnKSxvPXkobix0LmRhdGFfYmdfaGlkcGkpLHI9YSYmbz9vOmk7ciYmKG4uc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoXCInLmNvbmNhdChyLCdcIiknKSx6KG4pLnNldEF0dHJpYnV0ZSh1LHIpLFEobix0LGUpKX0obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT15KG4sdC5kYXRhX2JnX211bHRpKSxvPXkobix0LmRhdGFfYmdfbXVsdGlfaGlkcGkpLHI9YSYmbz9vOmk7ciYmKG4uc3R5bGUuYmFja2dyb3VuZEltYWdlPXIsSyhuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfc2V0KTtpZihpKXt2YXIgbz1pLnNwbGl0KFwifFwiKSxhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cImltYWdlLXNldChcIi5jb25jYXQobixcIilcIil9KSk7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YS5qb2luKCksXCJcIj09PW4uc3R5bGUuYmFja2dyb3VuZEltYWdlJiYoYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCItd2Via2l0LWltYWdlLXNldChcIi5jb25jYXQobixcIilcIil9KSksbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YS5qb2luKCkpLEsobix0LGUpfX0obix0LGUpfShuLHQsZSk6ZnVuY3Rpb24obix0LGUpe2NuKG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9WVtuLnRhZ05hbWVdO2kmJihpKG4sdCksUShuLHQsZSkpfShuLHQsZSl9KG4sdCxlKX0sdW49ZnVuY3Rpb24obil7bi5yZW1vdmVBdHRyaWJ1dGUodSksbi5yZW1vdmVBdHRyaWJ1dGUocyksbi5yZW1vdmVBdHRyaWJ1dGUoZCl9LHNuPWZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7cShuLEIpfSkpLHEobixCKX0sZG49e0lNRzpzbixJRlJBTUU6ZnVuY3Rpb24obil7cShuLFYpfSxWSURFTzpmdW5jdGlvbihuKXtIKG4sKGZ1bmN0aW9uKG4pe3EobixWKX0pKSxxKG4sRiksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuKXtxKG4sSil9fSxmbj1mdW5jdGlvbihuLHQpeyhmdW5jdGlvbihuKXt2YXIgdD1kbltuLnRhZ05hbWVdO3Q/dChuKTpmdW5jdGlvbihuKXtpZihQKG4pKXt2YXIgdD1TKG4pO24uc3R5bGUuYmFja2dyb3VuZEltYWdlPXQuYmFja2dyb3VuZEltYWdlfX0obil9KShuKSxmdW5jdGlvbihuLHQpe0wobil8fE8obil8fChNKG4sdC5jbGFzc19lbnRlcmVkKSxNKG4sdC5jbGFzc19leGl0ZWQpLE0obix0LmNsYXNzX2FwcGxpZWQpLE0obix0LmNsYXNzX2xvYWRpbmcpLE0obix0LmNsYXNzX2xvYWRlZCksTShuLHQuY2xhc3NfZXJyb3IpKX0obix0KSxBKG4pLFUobil9LF9uPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiXSxnbj1mdW5jdGlvbihuKXtyZXR1cm4gbi51c2VfbmF0aXZlJiZcImxvYWRpbmdcImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfSx2bj1mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG4uaXNJbnRlcnNlY3Rpbmd8fG4uaW50ZXJzZWN0aW9uUmF0aW8+MH0obik/ZnVuY3Rpb24obix0LGUsaSl7dmFyIG89ZnVuY3Rpb24obil7cmV0dXJuIHguaW5kZXhPZihrKG4pKT49MH0obik7dyhuLFwiZW50ZXJlZFwiKSxOKG4sZS5jbGFzc19lbnRlcmVkKSxNKG4sZS5jbGFzc19leGl0ZWQpLGZ1bmN0aW9uKG4sdCxlKXt0LnVub2JzZXJ2ZV9lbnRlcmVkJiZUKG4sZSl9KG4sZSxpKSxDKGUuY2FsbGJhY2tfZW50ZXIsbix0LGkpLG98fGxuKG4sZSxpKX0obi50YXJnZXQsbix0LGUpOmZ1bmN0aW9uKG4sdCxlLGkpe0wobil8fChOKG4sZS5jbGFzc19leGl0ZWQpLGZ1bmN0aW9uKG4sdCxlLGkpe2UuY2FuY2VsX29uX2V4aXQmJmZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09dn0obikmJlwiSU1HXCI9PT1uLnRhZ05hbWUmJihhbihuKSxmdW5jdGlvbihuKXtEKG4sKGZ1bmN0aW9uKG4pe3VuKG4pfSkpLHVuKG4pfShuKSxzbihuKSxNKG4sZS5jbGFzc19sb2FkaW5nKSxSKGksLTEpLEEobiksQyhlLmNhbGxiYWNrX2NhbmNlbCxuLHQsaSkpfShuLHQsZSxpKSxDKGUuY2FsbGJhY2tfZXhpdCxuLHQsaSkpfShuLnRhcmdldCxuLHQsZSl9KSl9LGJuPWZ1bmN0aW9uKG4pe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKX0scG49ZnVuY3Rpb24obil7cmV0dXJuIG4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwobi5lbGVtZW50c19zZWxlY3Rvcil9LG1uPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gayhuKT09PW19KG4pfSxobj1mdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gYm4obikuZmlsdGVyKEwpfShufHxwbih0KSl9LEVuPWZ1bmN0aW9uKG4sZSl7dmFyIG89YyhuKTt0aGlzLl9zZXR0aW5ncz1vLHRoaXMubG9hZGluZ0NvdW50PTAsZnVuY3Rpb24obix0KXtpJiYhZ24obikmJih0Ll9vYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe3ZuKGUsbix0KX0pLGZ1bmN0aW9uKG4pe3JldHVybntyb290Om4uY29udGFpbmVyPT09ZG9jdW1lbnQ/bnVsbDpuLmNvbnRhaW5lcixyb290TWFyZ2luOm4udGhyZXNob2xkc3x8bi50aHJlc2hvbGQrXCJweFwifX0obikpKX0obyx0aGlzKSxmdW5jdGlvbihuLGUpe3QmJihlLl9vbmxpbmVIYW5kbGVyPWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKG4sdCl7dmFyIGU7KGU9cG4obiksYm4oZSkuZmlsdGVyKG1uKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7TSh0LG4uY2xhc3NfZXJyb3IpLEEodCl9KSksdC51cGRhdGUoKX0obixlKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIixlLl9vbmxpbmVIYW5kbGVyKSl9KG8sdGhpcyksdGhpcy51cGRhdGUoZSl9O3JldHVybiBFbi5wcm90b3R5cGU9e3VwZGF0ZTpmdW5jdGlvbihuKXt2YXIgdCxvLGE9dGhpcy5fc2V0dGluZ3Mscj1obihuLGEpO0codGhpcyxyLmxlbmd0aCksIWUmJmk/Z24oYSk/ZnVuY3Rpb24obix0LGUpe24uZm9yRWFjaCgoZnVuY3Rpb24obil7LTEhPT1fbi5pbmRleE9mKG4udGFnTmFtZSkmJmZ1bmN0aW9uKG4sdCxlKXtuLnNldEF0dHJpYnV0ZShcImxvYWRpbmdcIixcImxhenlcIiksY24obix0LGUpLGZ1bmN0aW9uKG4sdCl7dmFyIGU9WVtuLnRhZ05hbWVdO2UmJmUobix0KX0obix0KSx3KG4saCl9KG4sdCxlKX0pKSxHKGUsMCl9KHIsYSx0aGlzKToobz1yLGZ1bmN0aW9uKG4pe24uZGlzY29ubmVjdCgpfSh0PXRoaXMuX29ic2VydmVyKSxmdW5jdGlvbihuLHQpe3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5vYnNlcnZlKHQpfSkpfSh0LG8pKTp0aGlzLmxvYWRBbGwocil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9vYnNlcnZlciYmdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHQmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib25saW5lXCIsdGhpcy5fb25saW5lSGFuZGxlcikscG4odGhpcy5fc2V0dGluZ3MpLmZvckVhY2goKGZ1bmN0aW9uKG4pe1Uobil9KSksZGVsZXRlIHRoaXMuX29ic2VydmVyLGRlbGV0ZSB0aGlzLl9zZXR0aW5ncyxkZWxldGUgdGhpcy5fb25saW5lSGFuZGxlcixkZWxldGUgdGhpcy5sb2FkaW5nQ291bnQsZGVsZXRlIHRoaXMudG9Mb2FkQ291bnR9LGxvYWRBbGw6ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPXRoaXMuX3NldHRpbmdzO2huKG4sZSkuZm9yRWFjaCgoZnVuY3Rpb24obil7VChuLHQpLGxuKG4sZSx0KX0pKX0scmVzdG9yZUFsbDpmdW5jdGlvbigpe3ZhciBuPXRoaXMuX3NldHRpbmdzO3BuKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe2ZuKHQsbil9KSl9fSxFbi5sb2FkPWZ1bmN0aW9uKG4sdCl7dmFyIGU9Yyh0KTtsbihuLGUpfSxFbi5yZXNldFN0YXR1cz1mdW5jdGlvbihuKXtBKG4pfSx0JiZmdW5jdGlvbihuLHQpe2lmKHQpaWYodC5sZW5ndGgpZm9yKHZhciBlLGk9MDtlPXRbaV07aSs9MSlsKG4sZSk7ZWxzZSBsKG4sdCl9KEVuLHdpbmRvdy5sYXp5TG9hZE9wdGlvbnMpLEVufSkpO1xuIiwiLyoqXG4gKiBaZW5zY3JvbGwgNC4wLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5nYWJvci96ZW5zY3JvbGwvXG4gKlxuICogQ29weXJpZ2h0IDIwMTXigJMyMDE4IEdhYm9yIExlbmFyZFxuICpcbiAqIFRoaXMgaXMgZnJlZSBhbmQgdW5lbmN1bWJlcmVkIHNvZnR3YXJlIHJlbGVhc2VkIGludG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiBcbiAqIEFueW9uZSBpcyBmcmVlIHRvIGNvcHksIG1vZGlmeSwgcHVibGlzaCwgdXNlLCBjb21waWxlLCBzZWxsLCBvclxuICogZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlLCBlaXRoZXIgaW4gc291cmNlIGNvZGUgZm9ybSBvciBhcyBhIGNvbXBpbGVkXG4gKiBiaW5hcnksIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBub24tY29tbWVyY2lhbCwgYW5kIGJ5IGFueVxuICogbWVhbnMuXG4gKiBcbiAqIEluIGp1cmlzZGljdGlvbnMgdGhhdCByZWNvZ25pemUgY29weXJpZ2h0IGxhd3MsIHRoZSBhdXRob3Igb3IgYXV0aG9yc1xuICogb2YgdGhpcyBzb2Z0d2FyZSBkZWRpY2F0ZSBhbnkgYW5kIGFsbCBjb3B5cmlnaHQgaW50ZXJlc3QgaW4gdGhlXG4gKiBzb2Z0d2FyZSB0byB0aGUgcHVibGljIGRvbWFpbi4gV2UgbWFrZSB0aGlzIGRlZGljYXRpb24gZm9yIHRoZSBiZW5lZml0XG4gKiBvZiB0aGUgcHVibGljIGF0IGxhcmdlIGFuZCB0byB0aGUgZGV0cmltZW50IG9mIG91ciBoZWlycyBhbmRcbiAqIHN1Y2Nlc3NvcnMuIFdlIGludGVuZCB0aGlzIGRlZGljYXRpb24gdG8gYmUgYW4gb3ZlcnQgYWN0IG9mXG4gKiByZWxpbnF1aXNobWVudCBpbiBwZXJwZXR1aXR5IG9mIGFsbCBwcmVzZW50IGFuZCBmdXR1cmUgcmlnaHRzIHRvIHRoaXNcbiAqIHNvZnR3YXJlIHVuZGVyIGNvcHlyaWdodCBsYXcuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SXG4gKiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSxcbiAqIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIDxodHRwOi8vdW5saWNlbnNlLm9yZz5cbiAqIFxuICovXG5cbi8qanNoaW50IGRldmVsOnRydWUsIGFzaTp0cnVlICovXG5cbi8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlICovXG5cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbXSwgZmFjdG9yeSgpKVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuXHR9IGVsc2Uge1xuXHRcdChmdW5jdGlvbiBpbnN0YWxsKCkge1xuXHRcdFx0Ly8gVG8gbWFrZSBzdXJlIFplbnNjcm9sbCBjYW4gYmUgcmVmZXJlbmNlZCBmcm9tIHRoZSBoZWFkZXIsIGJlZm9yZSBgYm9keWAgaXMgYXZhaWxhYmxlXG5cdFx0XHRpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuXHRcdFx0XHRyb290LnplbnNjcm9sbCA9IGZhY3RvcnkoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmV0cnkgOW1zIGxhdGVyXG5cdFx0XHRcdHNldFRpbWVvdXQoaW5zdGFsbCwgOSlcblx0XHRcdH1cblx0XHR9KSgpXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIlxuXG5cblx0Ly8gRGV0ZWN0IGlmIHRoZSBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgbmF0aXZlIHNtb290aCBzY3JvbGxpbmcgKGUuZy4sIEZpcmVmb3ggMzYrIGFuZCBDaHJvbWUgNDkrKSBhbmQgaXQgaXMgZW5hYmxlZDpcblx0dmFyIGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRyZXR1cm4gZWxlbSAmJiBcImdldENvbXB1dGVkU3R5bGVcIiBpbiB3aW5kb3cgJiZcblx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pW1wic2Nyb2xsLWJlaGF2aW9yXCJdID09PSBcInNtb290aFwiXG5cdH1cblxuXG5cdC8vIEV4aXQgaWYgaXTigJlzIG5vdCBhIGJyb3dzZXIgZW52aXJvbm1lbnQ6XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICEoXCJkb2N1bWVudFwiIGluIHdpbmRvdykpIHtcblx0XHRyZXR1cm4ge31cblx0fVxuXG5cblx0dmFyIG1ha2VTY3JvbGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXG5cdFx0Ly8gVXNlIGRlZmF1bHRzIGlmIG5vdCBwcm92aWRlZFxuXHRcdGRlZmF1bHREdXJhdGlvbiA9IGRlZmF1bHREdXJhdGlvbiB8fCA5OTkgLy9tc1xuXHRcdGlmICghZWRnZU9mZnNldCAmJiBlZGdlT2Zmc2V0ICE9PSAwKSB7XG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZywgdGhpcyBhbW91bnQgb2YgZGlzdGFuY2UgaXMga2VwdCBmcm9tIHRoZSBlZGdlcyBvZiB0aGUgY29udGFpbmVyOlxuXHRcdFx0ZWRnZU9mZnNldCA9IDkgLy9weFxuXHRcdH1cblxuXHRcdC8vIEhhbmRsaW5nIHRoZSBsaWZlLWN5Y2xlIG9mIHRoZSBzY3JvbGxlclxuXHRcdHZhciBzY3JvbGxUaW1lb3V0SWRcblx0XHR2YXIgc2V0U2Nyb2xsVGltZW91dElkID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG5cdFx0XHRzY3JvbGxUaW1lb3V0SWQgPSBuZXdWYWx1ZVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFN0b3AgdGhlIGN1cnJlbnQgc21vb3RoIHNjcm9sbCBvcGVyYXRpb24gaW1tZWRpYXRlbHlcblx0XHQgKi9cblx0XHR2YXIgc3RvcFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0SWQpXG5cdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoMClcblx0XHR9XG5cblx0XHR2YXIgZ2V0VG9wV2l0aEVkZ2VPZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byBhIHNwZWNpZmljIHZlcnRpY2FsIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7dGFyZ2V0WX0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogICAgICAgIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBkdXJhdGlvbiBpcyB1c2VkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9ZID0gZnVuY3Rpb24gKHRhcmdldFksIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHN0b3BTY3JvbGwoKVxuXHRcdFx0aWYgKGR1cmF0aW9uID09PSAwIHx8IChkdXJhdGlvbiAmJiBkdXJhdGlvbiA8IDApIHx8IGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGNvbnRhaW5lci5ib2R5KSkge1xuXHRcdFx0XHRjb250YWluZXIudG9ZKHRhcmdldFkpXG5cdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc3RhcnRZID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLm1heCgwLCB0YXJnZXRZKSAtIHN0YXJ0WVxuXHRcdFx0XHR2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihNYXRoLmFicyhkaXN0YW5jZSksIGRlZmF1bHREdXJhdGlvbik7XG5cdFx0XHRcdChmdW5jdGlvbiBsb29wU2Nyb2xsKCkge1xuXHRcdFx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlOlxuXHRcdFx0XHRcdFx0dmFyIHAgPSBNYXRoLm1pbigxLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIGFic29sdXRlIHZlcnRpY2FsIHBvc2l0aW9uOlxuXHRcdFx0XHRcdFx0dmFyIHkgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHN0YXJ0WSArIGRpc3RhbmNlKihwIDwgMC41ID8gMipwKnAgOiBwKig0IC0gcCoyKS0xKSkpXG5cdFx0XHRcdFx0XHRjb250YWluZXIudG9ZKHkpXG5cdFx0XHRcdFx0XHRpZiAocCA8IDEgJiYgKGNvbnRhaW5lci5nZXRIZWlnaHQoKSArIHkpIDwgY29udGFpbmVyLmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdGxvb3BTY3JvbGwoKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChzdG9wU2Nyb2xsLCA5OSkgLy8gd2l0aCBjb29sZG93biB0aW1lXG5cdFx0XHRcdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSkpXG5cdFx0XHRcdH0pKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgYSBzcGVjaWZpYyBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0VsZW0gPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgYW4gZWxlbWVudCBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHZhciBlbGVtSGVpZ2h0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblx0XHRcdHZhciBlbGVtQm90dG9tID0gY29udGFpbmVyLmdldFRvcE9mKGVsZW0pICsgZWxlbUhlaWdodFxuXHRcdFx0dmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5nZXRIZWlnaHQoKVxuXHRcdFx0dmFyIHkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHR2YXIgY29udGFpbmVyQm90dG9tID0geSArIGNvbnRhaW5lckhlaWdodFxuXHRcdFx0aWYgKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pIDwgeSB8fCAoZWxlbUhlaWdodCArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0b3Agb3IgaXMgaGlnaGVyIHRoYW4gc2NyZWVuLlxuXHRcdFx0XHRzY3JvbGxUb0VsZW0oZWxlbSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAoKGVsZW1Cb3R0b20gKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckJvdHRvbSkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdGhlIGJvdHRvbS5cblx0XHRcdFx0c2Nyb2xsVG9ZKGVsZW1Cb3R0b20gLSBjb250YWluZXJIZWlnaHQgKyBlZGdlT2Zmc2V0LCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmIChvbkRvbmUpIHtcblx0XHRcdFx0b25Eb25lKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSBjZW50ZXIgb2YgYW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvZmZzZXR9IE9wdGlvbmFsbHkgdGhlIG9mZnNldCBvZiB0aGUgdG9wIG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuLlxuXHRcdCAqICAgICAgICBBIHZhbHVlIG9mIDAgaXMgaWdub3JlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvQ2VudGVyT2YgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9mZnNldCwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gY29udGFpbmVyLmdldEhlaWdodCgpLzIgKyAob2Zmc2V0IHx8IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LzIpKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGFuZ2VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgc2Nyb2xsZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge25ld0RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdFx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHBhcmFtIHtuZXdFZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzLlxuXHRcdCAqL1xuXHRcdHZhciBzZXR1cCA9IGZ1bmN0aW9uIChuZXdEZWZhdWx0RHVyYXRpb24sIG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdGlmIChuZXdEZWZhdWx0RHVyYXRpb24gPT09IDAgfHwgbmV3RGVmYXVsdER1cmF0aW9uKSB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbiA9IG5ld0RlZmF1bHREdXJhdGlvblxuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0VkZ2VPZmZzZXQgPT09IDAgfHwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0XHRlZGdlT2Zmc2V0ID0gbmV3RWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uOiBkZWZhdWx0RHVyYXRpb24sXG5cdFx0XHRcdGVkZ2VPZmZzZXQ6IGVkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0dXA6IHNldHVwLFxuXHRcdFx0dG86IHNjcm9sbFRvRWxlbSxcblx0XHRcdHRvWTogc2Nyb2xsVG9ZLFxuXHRcdFx0aW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuXHRcdFx0Y2VudGVyOiBzY3JvbGxUb0NlbnRlck9mLFxuXHRcdFx0c3RvcDogc3RvcFNjcm9sbCxcblx0XHRcdG1vdmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFzY3JvbGxUaW1lb3V0SWQgfSxcblx0XHRcdGdldFk6IGNvbnRhaW5lci5nZXRZLFxuXHRcdFx0Z2V0VG9wT2Y6IGNvbnRhaW5lci5nZXRUb3BPZlxuXHRcdH1cblxuXHR9XG5cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXHR2YXIgZ2V0RG9jWSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IGRvY0VsZW0uc2Nyb2xsVG9wIH1cblxuXHQvLyBDcmVhdGUgYSBzY3JvbGxlciBmb3IgdGhlIGRvY3VtZW50OlxuXHR2YXIgemVuc2Nyb2xsID0gbWFrZVNjcm9sbGVyKHtcblx0XHRib2R5OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmJvZHksXG5cdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgeSkgfSxcblx0XHRnZXRZOiBnZXREb2NZLFxuXHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IH0sXG5cdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGdldERvY1koKSAtIGRvY0VsZW0ub2Zmc2V0VG9wIH1cblx0fSlcblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc2Nyb2xsZXIgZnJvbSB0aGUgcHJvdmlkZWQgY29udGFpbmVyIGVsZW1lbnQgKGUuZy4sIGEgRElWKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3Njcm9sbENvbnRhaW5lcn0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdCAqIEBwYXJhbSB7ZGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHQgKiAgICAgICAgSWdub3JlZCBpZiAwIG9yIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge2VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBcblx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEByZXR1cm5zIEEgc2Nyb2xsZXIgb2JqZWN0LCBzaW1pbGFyIHRvIGB6ZW5zY3JvbGxgIGJ1dCBjb250cm9sbGluZyB0aGUgcHJvdmlkZWQgZWxlbWVudC5cblx0ICovXG5cdHplbnNjcm9sbC5jcmVhdGVTY3JvbGxlciA9IGZ1bmN0aW9uIChzY3JvbGxDb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXHRcdHJldHVybiBtYWtlU2Nyb2xsZXIoe1xuXHRcdFx0Ym9keTogc2Nyb2xsQ29udGFpbmVyLFxuXHRcdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0geSB9LFxuXHRcdFx0Z2V0WTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB9LFxuXHRcdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLm1pbihzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIH0sXG5cdFx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIH1cblx0XHR9LCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpXG5cdH1cblxuXG5cdC8vIEF1dG9tYXRpYyBsaW5rLXNtb290aGluZyBvbiBhY2hvcnNcblx0Ly8gRXhjbHVkZSBJRTgtIG9yIHdoZW4gbmF0aXZlIGlzIGVuYWJsZWQgb3IgWmVuc2Nyb2xsIGF1dG8tIGlzIGRpc2FibGVkXG5cdGlmIChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB3aW5kb3cgJiYgIXdpbmRvdy5ub1plbnNtb290aCAmJiAhaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oZG9jdW1lbnQuYm9keSkpIHtcblxuXHRcdHZhciBpc0hpc3RvcnlTdXBwb3J0ZWQgPSBcImhpc3RvcnlcIiBpbiB3aW5kb3cgJiYgXCJwdXNoU3RhdGVcIiBpbiBoaXN0b3J5XG5cdFx0dmFyIGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQgPSBpc0hpc3RvcnlTdXBwb3J0ZWQgJiYgXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIGhpc3RvcnlcblxuXHRcdC8vIE9uIGZpcnN0IGxvYWQgJiByZWZyZXNoIG1ha2Ugc3VyZSB0aGUgYnJvd3NlciByZXN0b3JlcyB0aGUgcG9zaXRpb24gZmlyc3Rcblx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0Ly8gU2V0IGl0IHRvIG1hbnVhbFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCIgfSwgOSlcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoZXZlbnQuc3RhdGUgJiYgXCJ6ZW5zY3JvbGxZXCIgaW4gZXZlbnQuc3RhdGUpIHtcblx0XHRcdFx0XHRcdHplbnNjcm9sbC50b1koZXZlbnQuc3RhdGUuemVuc2Nyb2xsWSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZhbHNlKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWRnZSBvZmZzZXQgb24gZmlyc3QgbG9hZCBpZiBuZWNlc3Nhcnlcblx0XHRcdC8vIFRoaXMgbWF5IG5vdCB3b3JrIG9uIElFIChvciBvbGRlciBjb21wdXRlcj8pIGFzIGl0IHJlcXVpcmVzIG1vcmUgdGltZW91dCwgYXJvdW5kIDEwMCBtc1xuXHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIEFkanVzdG1lbnQgaXMgb25seSBuZWVkZWQgaWYgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQ6XG5cdFx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzFdKVxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldFkgPSBNYXRoLm1heCgwLCB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdFx0XHR2YXIgZGlmZiA9IHplbnNjcm9sbC5nZXRZKCkgLSB0YXJnZXRZXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgZG8gdGhlIGFkanVzdG1lbnQgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBjbG9zZSB0byB0aGUgZWxlbWVudDpcblx0XHRcdFx0XHRcdFx0aWYgKDAgPD0gZGlmZiAmJiBkaWZmIDwgOSApIHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgdGFyZ2V0WSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgOSlcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKVxuXG5cdFx0Ly8gSGFuZGxpbmcgY2xpY2tzIG9uIGFuY2hvcnNcblx0XHR2YXIgUkVfbm9aZW5zbW9vdGggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpbm9aZW5zbW9vdGgoXFxcXHN8JClcIilcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIGFuY2hvciA9IGV2ZW50LnRhcmdldFxuXHRcdFx0d2hpbGUgKGFuY2hvciAmJiBhbmNob3IudGFnTmFtZSAhPT0gXCJBXCIpIHtcblx0XHRcdFx0YW5jaG9yID0gYW5jaG9yLnBhcmVudE5vZGVcblx0XHRcdH1cblx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIGl0IHdhc24ndCB3aXRoIHRoZSBwcmltYXJ5IGJ1dHRvbiwgb3Igd2l0aCBzb21lIG1vZGlmaWVyIGtleXM6XG5cdFx0XHRpZiAoIWFuY2hvciB8fCBldmVudC53aGljaCAhPT0gMSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGxpbmcgcG9zaXRpb24gc28gaXQgY2FuIGJlIHVzZWQgZm9yIHNjcm9sbCByZXN0b3JhdGlvbjpcblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdHZhciBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5LnN0YXRlICYmIHR5cGVvZiBoaXN0b3J5LnN0YXRlID09PSBcIm9iamVjdFwiID8gaGlzdG9yeS5zdGF0ZSA6IHt9XG5cdFx0XHRcdGhpc3RvcnlTdGF0ZS56ZW5zY3JvbGxZID0gemVuc2Nyb2xsLmdldFkoKVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIilcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vIEF2b2lkIHRoZSBDaHJvbWUgU2VjdXJpdHkgZXhjZXB0aW9uIG9uIGZpbGUgcHJvdG9jb2wsIGUuZy4sIGZpbGU6Ly9pbmRleC5odG1sXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZpbmQgdGhlIHJlZmVyZW5jZWQgSUQ6XG5cdFx0XHR2YXIgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCJcblx0XHRcdGlmIChocmVmLmluZGV4T2YoXCIjXCIpID09PSAwICYmICFSRV9ub1plbnNtb290aC50ZXN0KGFuY2hvci5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRZID0gMFxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKVxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gXCIjXCIpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIHRoZSB0YXJnZXQgSUQgaXMgbm90IGZvdW5kLlxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldFkgPSB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdC8vIEJ5IGRlZmF1bHQgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGBoYXNoY2hhbmdlYCBldmVudC4uLlxuXHRcdFx0XHR2YXIgb25Eb25lID0gZnVuY3Rpb24gKCkgeyB3aW5kb3cubG9jYXRpb24gPSBocmVmIH1cblx0XHRcdFx0Ly8gLi4udW5sZXNzIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0IHNwZWNpZmllZFxuXHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHR0YXJnZXRZID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0aWYgKGlzSGlzdG9yeVN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdFx0b25Eb25lID0gZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgaHJlZikgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR6ZW5zY3JvbGwudG9ZKHRhcmdldFksIG51bGwsIG9uRG9uZSlcblx0XHRcdH1cblx0XHR9LCBmYWxzZSlcblxuXHR9XG5cblxuXHRyZXR1cm4gemVuc2Nyb2xsXG5cblxufSkpO1xuIiwiZnVuY3Rpb24gZm9jdXNXaXRoaW4oZG9jdW1lbnQsIG9wdHMpIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gT2JqZWN0KG9wdHMpLmNsYXNzTmFtZTtcbiAgY29uc3QgYXR0ciA9IE9iamVjdChvcHRzKS5hdHRyIHx8ICdmb2N1cy13aXRoaW4nO1xuICBjb25zdCBmb3JjZSA9IE9iamVjdChvcHRzKS5mb3JjZTtcbiAgY29uc3QgbGFzdEVsZW1lbnRzID0gW107XG5cbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMtd2l0aGluJyk7XG5cbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbGl6ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGlnbm9yZWRFcnJvcikge1xuICAgIC8qIGRvIG5vdGhpbmcgYW5kIGNvbnRpbnVlICovXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvY3VzY2hhbmdlKCkge1xuICAgIGxldCBsYXN0RWxlbWVudDtcblxuICAgIHdoaWxlIChsYXN0RWxlbWVudCA9IGxhc3RFbGVtZW50cy5wb3AoKSkge1xuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGxhc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIG9ubHkgYWRkIGZvY3VzIGlmIGl0IGhhcyBub3QgYmVlbiBhZGRlZCBhbmQgaXMgbm90IHRoZSBkb2N1bWVudCBlbGVtZW50XG5cbiAgICBpZiAoIS9eKCNkb2N1bWVudHxIVE1MfEJPRFkpJC8udGVzdChPYmplY3QoYWN0aXZlRWxlbWVudCkubm9kZU5hbWUpKSB7XG4gICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEVsZW1lbnRzLnB1c2goYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uZm9jdXNjaGFuZ2UsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbmZvY3VzY2hhbmdlLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgKiBDYWxsYmFjayB3cmFwcGVyIGZvciBjaGVjayBsb2FkZWQgc3RhdGVcbiAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cbiAgIWZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgaWYgKC9tLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbG9hZCkgfCBpbml0aWFsaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsb2FkKTtcbiAgICB9XG4gIH0oKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIHJldHVybiBpbml0aWFsaXplO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb2N1c1dpdGhpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9kZWZhdWx0c1wiOiAwLFxuXHRcImNzcy9wcmludFwiOiAwLFxuXHRcImNzcy9nbG9iYWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3lkX2QxMFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzeWRfZDEwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL2RlZmF1bHRzLnRzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9zYXNzL2dsb2JhbC5zY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJmb2N1c193aXRoaW5fMSIsIl9faW1wb3J0RGVmYXVsdCIsInplbnNjcm9sbF8xIiwidmFuaWxsYV9sYXp5bG9hZF8xIiwidG9nZ2xlRGF0YUF0dHJfMSIsImJhZ3VldHRlYm94X2pzXzEiLCJkb2N1bWVudCIsImF0dHIiLCJjbGFzc05hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicnVuIiwibWVudUJ1cmdlckJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVOYXYiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwiZm9yRWFjaCIsImxpbmsiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwibGF6eUxvYWRJbWFnZXMiLCJzZXR1cCIsInRvZ2dsZURhdGFBdHRyIiwiZWwiLCJkYXRhbmFtZSIsIm9uU3RhdGUiLCJvZmZTdGF0ZSIsImNvbmNhdCIsImdldEF0dHJpYnV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9