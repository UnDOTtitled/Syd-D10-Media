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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZURDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxnQ0FBZ0MseUNBQXlDLGtEQUFrRCxXQUFXLHdDQUF3QyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx1QkFBdUIsUUFBUSxpQkFBaUIsT0FBTyxlQUFlLFlBQVksZUFBZSxhQUFhLE9BQU8sc0JBQXNCLHVGQUF1RixrRUFBa0Usd0JBQXdCLGtEQUFrRCwyQkFBMkIsbUlBQW1JLHdCQUF3QixnR0FBZ0csNkJBQTZCLG1DQUFtQyx1QkFBdUIsRUFBRSxrQ0FBa0MsaUJBQWlCLDBCQUEwQiw0Q0FBNEMsbUNBQW1DLDhCQUE4QixpQkFBaUIsVUFBVSwwRUFBMEUsc0NBQXNDLCtCQUErQixzQkFBc0Isa0NBQWtDLGFBQWEsRUFBRSw0QkFBNEIscUJBQXFCLG9DQUFvQyxhQUFhLHdCQUF3QixrQ0FBa0MsMERBQTBELGVBQWUsNkRBQTZELGVBQWUsS0FBSyxtQkFBbUIsbURBQW1ELDBCQUEwQix5M0JBQXkzQiw2Q0FBNkMsc0JBQXNCLGlCQUFpQix1RUFBdUUsNERBQTRELGVBQWUseUJBQXlCLGtOQUFrTixrU0FBa1MsbUVBQW1FLHdCQUF3QixRQUFRLDZCQUE2Qiw0S0FBNEssNEdBQTRHLDJlQUEyZSxtZEFBbWQsRUFBRSxHQUFHLE9BQU8sVUFBVSxpQkFBaUIsc0RBQXNELDZDQUE2QyxnREFBZ0Qsb0JBQW9CLDBCQUEwQix3RUFBd0Usb0xBQW9MLGdDQUFnQyxtQ0FBbUMsc0VBQXNFLDJFQUEyRSw2U0FBNlMsZ0NBQWdDLG1DQUFtQyw4TEFBOEwsa0RBQWtELGtKQUFrSix3QkFBd0IsVUFBVSx1QkFBdUIsNkVBQTZFLHdMQUF3TCxnQ0FBZ0MsbUNBQW1DLCtHQUErRyxhQUFhLDZJQUE2SSxzQkFBc0IsZ1FBQWdRLGFBQWEsNk9BQTZPLHNCQUFzQiwwRkFBMEYsR0FBRyxHQUFHLEtBQUssVUFBVSw0Q0FBNEMsd0JBQXdCLDZDQUE2QywrREFBK0Q7Ozs7Ozs7Ozs7QUNOMXBQLGVBQWUsS0FBb0Qsb0JBQW9CLENBQWtILENBQUMsa0JBQWtCLGFBQWEsYUFBYSxvQ0FBb0MsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMseUJBQXlCLDZRQUE2USx3cUJBQXdxQixlQUFlLFdBQVcsTUFBTSxpQkFBaUIsMkNBQTJDLElBQUkscUJBQXFCLFFBQVEsWUFBWSxFQUFFLFNBQVMsaUVBQWlFLFdBQVcsRUFBRSx3QkFBd0Isc0tBQXNLLDJCQUEyQixlQUFlLGNBQWMsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0RBQWtELFFBQVEsZUFBZSxpQkFBaUIsZUFBZSxtQkFBbUIsZUFBZSxnQkFBZ0IsaUNBQWlDLHNFQUFzRSxpQkFBaUIseURBQXlELGlCQUFpQix1SUFBdUksZUFBZSxxQkFBcUIsaUJBQWlCLE1BQU0sa0JBQWtCLG1CQUFtQixpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsZUFBZSxtQkFBbUIsZ0JBQWdCLHFDQUFxQyxTQUFTLGlCQUFpQixtQkFBbUIsMENBQTBDLGlCQUFpQixnQkFBZ0IsNkNBQTZDLGFBQWEsZUFBZSxZQUFZLGVBQWUsbUJBQW1CLGlCQUFpQixVQUFVLFNBQVMsdUJBQXVCLHVCQUF1QixXQUFXLGlCQUFpQixTQUFTLFdBQVcsdUJBQXVCLGlCQUFpQiwyQ0FBMkMsV0FBVyxJQUFJLG1CQUFtQix5RkFBeUYsbUJBQW1CLGtFQUFrRSxtQkFBbUIsdUJBQXVCLGlCQUFpQiwwRUFBMEUsSUFBSSxrQkFBa0IsaUJBQWlCLGNBQWMsaUJBQWlCLHNCQUFzQiw4QkFBOEIscUJBQXFCLGlCQUFpQiw4QkFBOEIsb0VBQW9FLHNCQUFzQiwrQkFBK0Isc0RBQXNELGdCQUFnQix3QkFBd0IsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsb0JBQW9CLDBDQUEwQyxvQkFBb0IsMkJBQTJCLGdCQUFnQixxQkFBcUIsZ0JBQWdCLFVBQVUsbUJBQW1CLGdCQUFnQixXQUFXLFVBQVUscUJBQXFCLG9CQUFvQixhQUFhLHFCQUFxQix3QkFBd0Isc0JBQXNCLHVEQUF1RCxvQkFBb0IsY0FBYyx1QkFBdUIsdUJBQXVCLEVBQUUsOENBQThDLDBCQUEwQixnQkFBZ0IsbUJBQW1CLFdBQVcseUVBQXlFLGdCQUFnQixlQUFlLG1CQUFtQixXQUFXLGtHQUFrRyxnQkFBZ0IsR0FBRyxvQkFBb0IsYUFBYSwrQkFBK0Isb0JBQW9CLGFBQWEsNENBQTRDLDBCQUEwQixhQUFhLHdDQUF3QyxFQUFFLG9CQUFvQix1REFBdUQsb0ZBQW9GLHdCQUF3QixtRUFBbUUsd0NBQXdDLHdCQUF3Qix5QkFBeUIsTUFBTSx3Q0FBd0MsaUNBQWlDLEdBQUcscUZBQXFGLHlDQUF5QywrQ0FBK0MsUUFBUSx3QkFBd0IsMEJBQTBCLG1CQUFtQixxQkFBcUIsUUFBUSxRQUFRLGdCQUFnQiwrREFBK0QsZ0JBQWdCLGlCQUFpQixPQUFPLFVBQVUsS0FBSywwQkFBMEIsT0FBTyxtQkFBbUIsaUJBQWlCLE9BQU8sbUJBQW1CLG9CQUFvQixRQUFRLGtCQUFrQixhQUFhLG9CQUFvQixtQkFBbUIsU0FBUyxXQUFXLDJDQUEyQyxJQUFJLG1CQUFtQix3SUFBd0ksZ0JBQWdCLDRDQUE0Qyw0REFBNEQsb0JBQW9CLHVCQUF1QixtQkFBbUIsK0NBQStDLHNCQUFzQixrQkFBa0IsMEJBQTBCLElBQUksd0VBQXdFLDRCQUE0QiwrQ0FBK0MsbUNBQW1DLDZDQUE2Qyw4QkFBOEIsZ0JBQWdCLDJDQUEyQyxpQkFBaUIsTUFBTSxTQUFTLHdFQUF3RSxvQ0FBb0MsaUJBQWlCLEdBQUcsZ0JBQWdCLHFDQUFxQyxnQkFBZ0IseURBQXlELGdCQUFnQixtQkFBbUIsZ0JBQWdCLElBQUksa0JBQWtCLG1CQUFtQix1QkFBdUIsV0FBVyxrQkFBa0IsV0FBVyxtREFBbUQsOERBQThELFVBQVUsY0FBYyxPQUFPLHdGQUF3RixNQUFNLHVCQUF1QixnQ0FBZ0MsZUFBZSxNQUFNLGdEQUFnRCx3QkFBd0IsY0FBYyxNQUFNLHFEQUFxRCx5QkFBeUIscUJBQXFCLG1CQUFtQixtQ0FBbUMsNkNBQTZDLHVCQUF1Qiw0Q0FBNEMseURBQXlELG1CQUFtQixVQUFVLGFBQWEsUUFBUSxVQUFVLDRCQUE0QixlQUFlLGlDQUFpQyx1QkFBdUIsYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0pBQWdKLEtBQUssMkhBQTJILHFCQUFxQiw0QkFBNEIsNkJBQTZCLGlCQUFpQixHQUFHLHVCQUF1QixxQkFBcUIsMkJBQTJCLFFBQVEsSUFBSSx1QkFBdUIsV0FBVyxRQUFRLDRCQUE0QixLQUFLLGtCQUFrQiwrQkFBK0IsT0FBTyxZQUFZLFlBQVksK0JBQStCOzs7Ozs7Ozs7OztBQ0Evc1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsaUNBQU8sRUFBRSxvQ0FBRSxTQUFTO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ3ZCLEdBQUcsS0FBSyxFQVlOO0FBQ0YsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFVBQVU7QUFDdkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQSwyQkFBMkIsbURBQW1EO0FBQzlFLDhCQUE4QjtBQUM5QixFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGlCQUFpQjtBQUM3QjtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3RELHVCQUF1QixrQ0FBa0M7QUFDekQsNEJBQTRCLDJGQUEyRjtBQUN2SCwrQkFBK0I7QUFDL0IsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwV0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQztBQUMzQjs7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3lkLWQxMC8uL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9qcy9kZWZhdWx0cy50cyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL2pzL3V0aWxzL3RvZ2dsZURhdGFBdHRyLnRzIiwid2VicGFjazovL3N5ZC1kMTAvLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvZGlzdC9iYWd1ZXR0ZUJveC5taW4uanMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3M/YzdlZSIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vd2ViL3RoZW1lcy9waXBwaXAvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzcz9lZGI3Iiwid2VicGFjazovL3N5ZC1kMTAvLi9ub2RlX21vZHVsZXMvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEvZGlzdC92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS5taW4uanMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC8uL25vZGVfbW9kdWxlcy92YW5pbGxhLWxhenlsb2FkL2Rpc3QvbGF6eWxvYWQubWluLmpzIiwid2VicGFjazovL3N5ZC1kMTAvLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zeWQtZDEwLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLXdpdGhpbi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3lkLWQxMC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3lkLWQxMC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N5ZC1kMTAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zeWQtZDEwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2ZvY3VzLXZpc2libGUnXG5pbXBvcnQgRm9jdXNXaXRoaW4gZnJvbSAnZm9jdXMtd2l0aGluJ1xuaW1wb3J0IHplbnNjcm9sbCBmcm9tICd6ZW5zY3JvbGwnXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAndmFuaWxsYS1sYXp5bG9hZCdcbmltcG9ydCB0b2dnbGVEYXRhQXR0ciBmcm9tICcuL3V0aWxzL3RvZ2dsZURhdGFBdHRyJ1xuaW1wb3J0ICd2YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYSdcbmltcG9ydCBiYWd1ZXR0ZUJveCBmcm9tICdiYWd1ZXR0ZWJveC5qcydcbi8vaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbi8qKlxuICogRm9jdXMgd2l0aGluIHBvbHlmaWxsXG4gKi9cbkZvY3VzV2l0aGluKGRvY3VtZW50LCB7XG4gIGF0dHI6IGZhbHNlLFxuICBjbGFzc05hbWU6ICdmb2N1cy13aXRoaW4nLFxufSlcblxuLypcbiAgQmV0dGVyIDxzZWxlY3Q+IGVsZW1lbnRzXG4gIHVybDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY2hvaWNlcy5qc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIFVzYWdlOlxuICBTZWxlY3RzIGFsbCA8c2VsZWN0PiBlbGVtZW50cyBieSBkZWZhdWx0XG5cbiAgTm90ZTogSWYgbm90IHVzaW5nLCByZW1vdmUgQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9jaG9pY2VzLmpzL2Fzc2V0cy9zdHlsZXMvc2Nzcy9jaG9pY2VzXCI7IGZyb20gYGFzc2V0cy9zYXNzL2dsb2JhbC5zY3NzYFxuKi9cbi8vIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5sZW5ndGggPiAwKSB7XG4vLyAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gbmV3IENob2ljZXMoJ3NlbGVjdCcpO1xuLy8gfVxuXG4vKlxuICBJbWFnZSBnYWxsZXJpZXNcbiAgdXJsOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9mbGlja2l0eVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIFVzYWdlOlxuICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxuICAgICAgPGEgaHJlZj1cInBhdGgtdG8tbGFyZ2UtaW1hZ2VcIiBkYXRhLWNhcHRpb249XCJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInBhdGgtdG8tdGh1bWJuYWlsXCIgYWx0PVwiXCIgLz5cbiAgICAgIDwvYT5cbiAgPC9kaXY+XG5cbiAgTm90ZTogSWYgbm90IHVzaW5nLCByZW1vdmUgQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9iYWd1ZXR0ZWJveC5qcy9zcmMvYmFndWV0dGVCb3hcIjsgZnJvbSBgYXNzZXRzL3Nhc3MvZ2xvYmFsLnNjc3NgXG4qL1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKSkge1xuICBiYWd1ZXR0ZUJveC5ydW4oJy5nYWxsZXJ5Jylcbn1cblxuLypcbiAgTWVudSBidXJnZXJcbiovXG5jb25zdCBtZW51QnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtbmF2LXRvZ2dsZScpXG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgdG9nZ2xlRGF0YUF0dHIoZG9jdW1lbnQuYm9keSwgJ25hdicsICdvcGVuJywgJ2Nsb3NlZCcpXG59XG5cbmlmIChtZW51QnVyZ2VyQnRuKSB7XG4gIG1lbnVCdXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOYXYpXG59XG5cbi8qXG4gIEF1dG9tYXRpY2FsbHkgc2V0IGV4dGVybmFsIGxpbmtzIHRvIGhhdmUgbm9mb2xsb3cvbm9vcGVuZXIgYXR0cnNcbiovXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5saW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBpZiAobGluay5ob3N0bmFtZSAhPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vZm9sbG93IG5vb3BlbmVyJylcbiAgfVxufSlcblxuLy8gTGF6eUxvYWRcbmNvbnN0IGxhenlMb2FkSW1hZ2VzID0gbmV3IExhenlMb2FkKClcblxuLypcbiAgWmVuc2Nyb2xsXG4gIC0gU2V0IGVkZ2Ugb2Zmc2V0IHRvIDAgdG8gcHJldm5ldCBicmVha2luZyB0YWIgb3JkZXJcbiovXG56ZW5zY3JvbGwuc2V0dXAobnVsbCwgMClcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZURhdGFBdHRyKFxuICBlbDogRWxlbWVudCxcbiAgZGF0YW5hbWU6IHN0cmluZyxcbiAgb25TdGF0ZTogc3RyaW5nLFxuICBvZmZTdGF0ZTogc3RyaW5nXG4pIHtcbiAgZWwuc2V0QXR0cmlidXRlKFxuICAgIGBkYXRhLSR7ZGF0YW5hbWV9YCxcbiAgICBlbC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhbmFtZX1gKSA9PT0gb25TdGF0ZSA/IG9mZlN0YXRlIDogb25TdGF0ZVxuICApXG59XG4iLCIvKiFcbiAqIGJhZ3VldHRlQm94LmpzXG4gKiBAYXV0aG9yICBmZWltb3NpXG4gKiBAdmVyc2lvbiAxLjExLjFcbiAqIEB1cmwgaHR0cHM6Ly9naXRodWIuY29tL2ZlaW1vc2kvYmFndWV0dGVCb3guanNcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6ZS5iYWd1ZXR0ZUJveD10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgcixsLHUsYyxkLGY9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMwIDEwIDEwIDMwIDMwIDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLGc9Jzxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjYwXCI+PHBvbHlsaW5lIHBvaW50cz1cIjE0IDEwIDM0IDMwIDE0IDUwXCIgc3Ryb2tlPVwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCIgc3Ryb2tlLXdpZHRoPVwiNFwic3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz48L3N2Zz4nLHA9Jzxzdmcgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCI+PGcgc3Ryb2tlPVwicmdiKDE2MCwxNjAsMTYwKVwiIHN0cm9rZS13aWR0aD1cIjRcIj48bGluZSB4MT1cIjVcIiB5MT1cIjVcIiB4Mj1cIjI1XCIgeTI9XCIyNVwiLz48bGluZSB4MT1cIjVcIiB5MT1cIjI1XCIgeDI9XCIyNVwiIHkyPVwiNVwiLz48L2c+PC9zdmc+JyxiPXt9LHY9e2NhcHRpb25zOiEwLGJ1dHRvbnM6XCJhdXRvXCIsZnVsbFNjcmVlbjohMSxub1Njcm9sbGJhcnM6ITEsYm9keUNsYXNzOlwiYmFndWV0dGVCb3gtb3BlblwiLHRpdGxlVGFnOiExLGFzeW5jOiExLHByZWxvYWQ6MixhbmltYXRpb246XCJzbGlkZUluXCIsYWZ0ZXJTaG93Om51bGwsYWZ0ZXJIaWRlOm51bGwsb25DaGFuZ2U6bnVsbCxvdmVybGF5QmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwuOClcIn0sbT17fSxoPVtdLG89MCxuPSExLGk9e30sYT0hMSx5PS8uK1xcLihnaWZ8anBlP2d8cG5nfHdlYnApL2ksdz17fSxrPVtdLHM9bnVsbCx4PWZ1bmN0aW9uKGUpey0xIT09ZS50YXJnZXQuaWQuaW5kZXhPZihcImJhZ3VldHRlLWltZ1wiKSYmaigpfSxFPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsRCgpfSxDPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsWCgpfSxCPWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uP2Uuc3RvcFByb3BhZ2F0aW9uKCk6ZS5jYW5jZWxCdWJibGU9ITAsaigpfSxUPWZ1bmN0aW9uKGUpe2kuY291bnQrKywxPGkuY291bnQmJihpLm11bHRpdG91Y2g9ITApLGkuc3RhcnRYPWUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsaS5zdGFydFk9ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWX0sTj1mdW5jdGlvbihlKXtpZighYSYmIWkubXVsdGl0b3VjaCl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMTt2YXIgdD1lLnRvdWNoZXNbMF18fGUuY2hhbmdlZFRvdWNoZXNbMF07NDA8dC5wYWdlWC1pLnN0YXJ0WD8oYT0hMCxEKCkpOnQucGFnZVgtaS5zdGFydFg8LTQwPyhhPSEwLFgoKSk6MTAwPGkuc3RhcnRZLXQucGFnZVkmJmooKX19LEw9ZnVuY3Rpb24oKXtpLmNvdW50LS0saS5jb3VudDw9MCYmKGkubXVsdGl0b3VjaD0hMSksYT0hMX0sQT1mdW5jdGlvbigpe0woKX0sUD1mdW5jdGlvbihlKXtcImJsb2NrXCI9PT1yLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMmJiFyLmNvbnRhaW5zKGUudGFyZ2V0KSYmKGUuc3RvcFByb3BhZ2F0aW9uKCksWSgpKX07ZnVuY3Rpb24gUyhlKXtpZih3Lmhhc093blByb3BlcnR5KGUpKXt2YXIgdD13W2VdLmdhbGxlcmllcztbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbihlKXtbXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlKXtXKGUuaW1hZ2VFbGVtZW50LFwiY2xpY2tcIixlLmV2ZW50SGFuZGxlcil9KSxoPT09ZSYmKGg9W10pfSksZGVsZXRlIHdbZV19fWZ1bmN0aW9uIEYoZSl7c3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzNzpEKCk7YnJlYWs7Y2FzZSAzOTpYKCk7YnJlYWs7Y2FzZSAyNzpqKCk7YnJlYWs7Y2FzZSAzNjohZnVuY3Rpb24gdChlKXtlJiZlLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIE0oMCl9KGUpO2JyZWFrO2Nhc2UgMzU6IWZ1bmN0aW9uIG4oZSl7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBNKGgubGVuZ3RoLTEpfShlKX19ZnVuY3Rpb24gSChlLHQpe2lmKGghPT1lKXtmb3IoaD1lLGZ1bmN0aW9uIHMoZSl7ZT1lfHx7fTtmb3IodmFyIHQgaW4gdiliW3RdPXZbdF0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGVbdF0mJihiW3RdPWVbdF0pO2wuc3R5bGUudHJhbnNpdGlvbj1sLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJmYWRlSW5cIj09PWIuYW5pbWF0aW9uP1wib3BhY2l0eSAuNHMgZWFzZVwiOlwic2xpZGVJblwiPT09Yi5hbmltYXRpb24/XCJcIjpcIm5vbmVcIixcImF1dG9cIj09PWIuYnV0dG9ucyYmKFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fDE9PT1oLmxlbmd0aCkmJihiLmJ1dHRvbnM9ITEpO3Uuc3R5bGUuZGlzcGxheT1jLnN0eWxlLmRpc3BsYXk9Yi5idXR0b25zP1wiXCI6XCJub25lXCI7dHJ5e3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPWIub3ZlcmxheUJhY2tncm91bmRDb2xvcn1jYXRjaChuKXt9fSh0KTtsLmZpcnN0Q2hpbGQ7KWwucmVtb3ZlQ2hpbGQobC5maXJzdENoaWxkKTtmb3IodmFyIG4sbz1bXSxpPVtdLGE9ay5sZW5ndGg9MDthPGUubGVuZ3RoO2ErKykobj1KKFwiZGl2XCIpKS5jbGFzc05hbWU9XCJmdWxsLWltYWdlXCIsbi5pZD1cImJhZ3VldHRlLWltZy1cIithLGsucHVzaChuKSxvLnB1c2goXCJiYWd1ZXR0ZUJveC1maWd1cmUtXCIrYSksaS5wdXNoKFwiYmFndWV0dGVCb3gtZmlnY2FwdGlvbi1cIithKSxsLmFwcGVuZENoaWxkKGtbYV0pO3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsby5qb2luKFwiIFwiKSksci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsaS5qb2luKFwiIFwiKSl9fWZ1bmN0aW9uIEkoZSl7Yi5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIsZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIiksXCJibG9ja1wiIT09ci5zdHlsZS5kaXNwbGF5JiYoVShkb2N1bWVudCxcImtleWRvd25cIixGKSxpPXtjb3VudDowLHN0YXJ0WDpudWxsLHN0YXJ0WTpudWxsfSxxKG89ZSxmdW5jdGlvbigpe3oobyksVihvKX0pLFIoKSxyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGIuZnVsbFNjcmVlbiYmZnVuY3Rpb24gdCgpe3IucmVxdWVzdEZ1bGxzY3JlZW4/ci5yZXF1ZXN0RnVsbHNjcmVlbigpOnIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4/ci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpOnIubW96UmVxdWVzdEZ1bGxTY3JlZW4mJnIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKX0oKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5jbGFzc05hbWU9XCJ2aXNpYmxlXCIsYi5ib2R5Q2xhc3MmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0JiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYi5ib2R5Q2xhc3MpLGIuYWZ0ZXJTaG93JiZiLmFmdGVyU2hvdygpfSw1MCksYi5vbkNoYW5nZSYmYi5vbkNoYW5nZShvLGsubGVuZ3RoKSxzPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsWSgpLG49ITApfWZ1bmN0aW9uIFkoKXtiLmJ1dHRvbnM/dS5mb2N1cygpOmQuZm9jdXMoKX1mdW5jdGlvbiBqKCl7Yi5ub1Njcm9sbGJhcnMmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKSxcIm5vbmVcIiE9PXIuc3R5bGUuZGlzcGxheSYmKFcoZG9jdW1lbnQsXCJrZXlkb3duXCIsRiksci5jbGFzc05hbWU9XCJcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LmZ1bGxzY3JlZW4mJmZ1bmN0aW9uIGUoKXtkb2N1bWVudC5leGl0RnVsbHNjcmVlbj9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOmRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4/ZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOmRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuJiZkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpfSgpLGIuYm9keUNsYXNzJiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGIuYm9keUNsYXNzKSxiLmFmdGVySGlkZSYmYi5hZnRlckhpZGUoKSxzJiZzLmZvY3VzKCksbj0hMX0sNTAwKSl9ZnVuY3Rpb24gcSh0LG4pe3ZhciBlPWtbdF0sbz1oW3RdO2lmKHZvaWQgMCE9PWUmJnZvaWQgMCE9PW8paWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSluJiZuKCk7ZWxzZXt2YXIgaT1vLmltYWdlRWxlbWVudCxhPWkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0scz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNhcHRpb25zP2IuY2FwdGlvbnMuY2FsbChoLGkpOmkuZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXB0aW9uXCIpfHxpLnRpdGxlLHI9ZnVuY3Rpb24gZChlKXt2YXIgdD1lLmhyZWY7aWYoZS5kYXRhc2V0KXt2YXIgbj1bXTtmb3IodmFyIG8gaW4gZS5kYXRhc2V0KVwiYXQtXCIhPT1vLnN1YnN0cmluZygwLDMpfHxpc05hTihvLnN1YnN0cmluZygzKSl8fChuW28ucmVwbGFjZShcImF0LVwiLFwiXCIpXT1lLmRhdGFzZXRbb10pO2Zvcih2YXIgaT1PYmplY3Qua2V5cyhuKS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHBhcnNlSW50KGUsMTApPHBhcnNlSW50KHQsMTApPy0xOjF9KSxhPXdpbmRvdy5pbm5lcldpZHRoKndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLHM9MDtzPGkubGVuZ3RoLTEmJmlbc108YTspcysrO3Q9bltpW3NdXXx8dH1yZXR1cm4gdH0oaSksbD1KKFwiZmlndXJlXCIpO2lmKGwuaWQ9XCJiYWd1ZXR0ZUJveC1maWd1cmUtXCIrdCxsLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LXNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYmFndWV0dGVCb3gtZG91YmxlLWJvdW5jZTJcIj48L2Rpdj48L2Rpdj4nLGIuY2FwdGlvbnMmJnMpe3ZhciB1PUooXCJmaWdjYXB0aW9uXCIpO3UuaWQ9XCJiYWd1ZXR0ZUJveC1maWdjYXB0aW9uLVwiK3QsdS5pbm5lckhUTUw9cyxsLmFwcGVuZENoaWxkKHUpfWUuYXBwZW5kQ2hpbGQobCk7dmFyIGM9SihcImltZ1wiKTtjLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFndWV0dGUtaW1nLVwiK3QrXCIgLmJhZ3VldHRlQm94LXNwaW5uZXJcIik7bC5yZW1vdmVDaGlsZChlKSwhYi5hc3luYyYmbiYmbigpfSxjLnNldEF0dHJpYnV0ZShcInNyY1wiLHIpLGMuYWx0PWEmJmEuYWx0fHxcIlwiLGIudGl0bGVUYWcmJnMmJihjLnRpdGxlPXMpLGwuYXBwZW5kQ2hpbGQoYyksYi5hc3luYyYmbiYmbigpfX1mdW5jdGlvbiBYKCl7cmV0dXJuIE0obysxKX1mdW5jdGlvbiBEKCl7cmV0dXJuIE0oby0xKX1mdW5jdGlvbiBNKGUsdCl7cmV0dXJuIW4mJjA8PWUmJmU8dC5sZW5ndGg/KEgodCxiKSxJKGUpLCEwKTplPDA/KGIuYW5pbWF0aW9uJiZPKFwibGVmdFwiKSwhMSk6ZT49ay5sZW5ndGg/KGIuYW5pbWF0aW9uJiZPKFwicmlnaHRcIiksITEpOihxKG89ZSxmdW5jdGlvbigpe3oobyksVihvKX0pLFIoKSxiLm9uQ2hhbmdlJiZiLm9uQ2hhbmdlKG8say5sZW5ndGgpLCEwKX1mdW5jdGlvbiBPKGUpe2wuY2xhc3NOYW1lPVwiYm91bmNlLWZyb20tXCIrZSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5jbGFzc05hbWU9XCJcIn0sNDAwKX1mdW5jdGlvbiBSKCl7dmFyIGU9MTAwKi1vK1wiJVwiO1wiZmFkZUluXCI9PT1iLmFuaW1hdGlvbj8obC5zdHlsZS5vcGFjaXR5PTAsc2V0VGltZW91dChmdW5jdGlvbigpe20udHJhbnNmb3Jtcz9sLnN0eWxlLnRyYW5zZm9ybT1sLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsMCwwKVwiOmwuc3R5bGUubGVmdD1lLGwuc3R5bGUub3BhY2l0eT0xfSw0MDApKTptLnRyYW5zZm9ybXM/bC5zdHlsZS50cmFuc2Zvcm09bC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitlK1wiLDAsMClcIjpsLnN0eWxlLmxlZnQ9ZX1mdW5jdGlvbiB6KGUpe2Utbz49Yi5wcmVsb2FkfHxxKGUrMSxmdW5jdGlvbigpe3ooZSsxKX0pfWZ1bmN0aW9uIFYoZSl7by1lPj1iLnByZWxvYWR8fHEoZS0xLGZ1bmN0aW9uKCl7VihlLTEpfSl9ZnVuY3Rpb24gVShlLHQsbixvKXtlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKHQsbixvKTplLmF0dGFjaEV2ZW50KFwib25cIit0LGZ1bmN0aW9uKGUpeyhlPWV8fHdpbmRvdy5ldmVudCkudGFyZ2V0PWUudGFyZ2V0fHxlLnNyY0VsZW1lbnQsbihlKX0pfWZ1bmN0aW9uIFcoZSx0LG4sbyl7ZS5yZW1vdmVFdmVudExpc3RlbmVyP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4sbyk6ZS5kZXRhY2hFdmVudChcIm9uXCIrdCxuKX1mdW5jdGlvbiBHKGUpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKX1mdW5jdGlvbiBKKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpfXJldHVybltdLmZvckVhY2h8fChBcnJheS5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bisrKWUuY2FsbCh0LHRoaXNbbl0sbix0aGlzKX0pLFtdLmZpbHRlcnx8KEFycmF5LnByb3RvdHlwZS5maWx0ZXI9ZnVuY3Rpb24oZSx0LG4sbyxpKXtmb3Iobj10aGlzLG89W10saT0wO2k8bi5sZW5ndGg7aSsrKWUuY2FsbCh0LG5baV0saSxuKSYmby5wdXNoKG5baV0pO3JldHVybiBvfSkse3J1bjpmdW5jdGlvbiBLKGUsdCl7cmV0dXJuIG0udHJhbnNmb3Jtcz1mdW5jdGlvbiBuKCl7dmFyIGU9SihcImRpdlwiKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdHlsZS5wZXJzcGVjdGl2ZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuc3R5bGUud2Via2l0UGVyc3BlY3RpdmV9KCksbS5zdmc9ZnVuY3Rpb24gbygpe3ZhciBlPUooXCJkaXZcIik7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPHN2Zy8+XCIsXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09KGUuZmlyc3RDaGlsZCYmZS5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSl9KCksbS5wYXNzaXZlRXZlbnRzPWZ1bmN0aW9uIGkoKXt2YXIgZT0hMTt0cnl7dmFyIHQ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtlPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLG51bGwsdCl9Y2F0Y2gobil7fXJldHVybiBlfSgpLGZ1bmN0aW9uIGEoKXtpZihyPUcoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKXJldHVybiBsPUcoXCJiYWd1ZXR0ZUJveC1zbGlkZXJcIiksdT1HKFwicHJldmlvdXMtYnV0dG9uXCIpLGM9RyhcIm5leHQtYnV0dG9uXCIpLHZvaWQoZD1HKFwiY2xvc2UtYnV0dG9uXCIpKTsocj1KKFwiZGl2XCIpKS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJkaWFsb2dcIiksci5pZD1cImJhZ3VldHRlQm94LW92ZXJsYXlcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQociksKGw9SihcImRpdlwiKSkuaWQ9XCJiYWd1ZXR0ZUJveC1zbGlkZXJcIixyLmFwcGVuZENoaWxkKGwpLCh1PUooXCJidXR0b25cIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSx1LmlkPVwicHJldmlvdXMtYnV0dG9uXCIsdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJQcmV2aW91c1wiKSx1LmlubmVySFRNTD1tLnN2Zz9mOlwiJmx0O1wiLHIuYXBwZW5kQ2hpbGQodSksKGM9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGMuaWQ9XCJuZXh0LWJ1dHRvblwiLGMuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiTmV4dFwiKSxjLmlubmVySFRNTD1tLnN2Zz9nOlwiJmd0O1wiLHIuYXBwZW5kQ2hpbGQoYyksKGQ9SihcImJ1dHRvblwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpLGQuaWQ9XCJjbG9zZS1idXR0b25cIixkLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIkNsb3NlXCIpLGQuaW5uZXJIVE1MPW0uc3ZnP3A6XCImdGltZXM7XCIsci5hcHBlbmRDaGlsZChkKSx1LmNsYXNzTmFtZT1jLmNsYXNzTmFtZT1kLmNsYXNzTmFtZT1cImJhZ3VldHRlQm94LWJ1dHRvblwiLGZ1bmN0aW9uIG4oKXt2YXIgZT1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITF9Om51bGwsdD1tLnBhc3NpdmVFdmVudHM/e3Bhc3NpdmU6ITB9Om51bGw7VShyLFwiY2xpY2tcIix4KSxVKHUsXCJjbGlja1wiLEUpLFUoYyxcImNsaWNrXCIsQyksVShkLFwiY2xpY2tcIixCKSxVKGwsXCJjb250ZXh0bWVudVwiLEEpLFUocixcInRvdWNoc3RhcnRcIixULHQpLFUocixcInRvdWNobW92ZVwiLE4sZSksVShyLFwidG91Y2hlbmRcIixMKSxVKGRvY3VtZW50LFwiZm9jdXNcIixQLCEwKX0oKX0oKSxTKGUpLGZ1bmN0aW9uIHMoZSxhKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpLG49e2dhbGxlcmllczpbXSxub2RlTGlzdDp0fTtyZXR1cm4gd1tlXT1uLFtdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUpe2EmJmEuZmlsdGVyJiYoeT1hLmZpbHRlcik7dmFyIHQ9W107aWYodD1cIkFcIj09PWUudGFnTmFtZT9bZV06ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksMCE9PSh0PVtdLmZpbHRlci5jYWxsKHQsZnVuY3Rpb24oZSl7aWYoLTE9PT1lLmNsYXNzTmFtZS5pbmRleE9mKGEmJmEuaWdub3JlQ2xhc3MpKXJldHVybiB5LnRlc3QoZS5ocmVmKX0pKS5sZW5ndGgpe3ZhciBpPVtdO1tdLmZvckVhY2guY2FsbCh0LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSxIKGksYSksSSh0KX0sbz17ZXZlbnRIYW5kbGVyOm4saW1hZ2VFbGVtZW50OmV9O1UoZSxcImNsaWNrXCIsbiksaS5wdXNoKG8pfSksbi5nYWxsZXJpZXMucHVzaChpKX19KSxuLmdhbGxlcmllc30oZSx0KX0sc2hvdzpNLHNob3dOZXh0Olgsc2hvd1ByZXZpb3VzOkQsaGlkZTpqLGRlc3Ryb3k6ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbiBuKCl7dmFyIGU9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiExfTpudWxsLHQ9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiEwfTpudWxsO1cocixcImNsaWNrXCIseCksVyh1LFwiY2xpY2tcIixFKSxXKGMsXCJjbGlja1wiLEMpLFcoZCxcImNsaWNrXCIsQiksVyhsLFwiY29udGV4dG1lbnVcIixBKSxXKHIsXCJ0b3VjaHN0YXJ0XCIsVCx0KSxXKHIsXCJ0b3VjaG1vdmVcIixOLGUpLFcocixcInRvdWNoZW5kXCIsTCksVyhkb2N1bWVudCxcImZvY3VzXCIsUCwhMCl9KCksZnVuY3Rpb24gdCgpe2Zvcih2YXIgZSBpbiB3KXcuaGFzT3duUHJvcGVydHkoZSkmJlMoZSl9KCksVyhkb2N1bWVudCxcImtleWRvd25cIixGKSxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIpKSx3PXt9LGg9W10sbz0wfX19KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSA6Zm9jdXMtdmlzaWJsZSBwb2x5ZmlsbCBhdCB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSB7KERvY3VtZW50fFNoYWRvd1Jvb3QpfSBzY29wZVxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoc2NvcGUpIHtcbiAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5cbiAgICB2YXIgaW5wdXRUeXBlc0FsbG93bGlzdCA9IHtcbiAgICAgIHRleHQ6IHRydWUsXG4gICAgICBzZWFyY2g6IHRydWUsXG4gICAgICB1cmw6IHRydWUsXG4gICAgICB0ZWw6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgbnVtYmVyOiB0cnVlLFxuICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgd2VlazogdHJ1ZSxcbiAgICAgIHRpbWU6IHRydWUsXG4gICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICdkYXRldGltZS1sb2NhbCc6IHRydWVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICogZWxlbWVudHMgbGlrZSBkb2N1bWVudCwgYm9keSwgYW5kIG5vbi1pbnRlcmFjdGl2ZSBTVkcuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb2N1c1RhcmdldChlbCkge1xuICAgICAgaWYgKFxuICAgICAgICBlbCAmJlxuICAgICAgICBlbCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgICAgZWwubm9kZU5hbWUgIT09ICdIVE1MJyAmJlxuICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICdjbGFzc0xpc3QnIGluIGVsICYmXG4gICAgICAgICdjb250YWlucycgaW4gZWwuY2xhc3NMaXN0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAqIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBiZWluZyBhZGRlZCwgaS5lLiB3aGV0aGVyIGl0IHNob3VsZCBhbHdheXMgbWF0Y2hcbiAgICAgKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgdmFyIHR5cGUgPSBlbC50eXBlO1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90IGFkZGVkIGJ5XG4gICAgICogdGhlIGF1dGhvci5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZWwpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmb2N1cy12aXNpYmxlJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcsICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IGlmIGl0IHdhcyBub3RcbiAgICAgKiBvcmlnaW5hbGx5IGFkZGVkIGJ5IHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbW9zdCByZWNlbnQgdXNlciBpbnRlcmFjdGlvbiB3YXMgdmlhIHRoZSBrZXlib2FyZDtcbiAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAqIEFwcGx5IGBmb2N1cy12aXNpYmxlYCB0byBhbnkgY3VycmVudCBhY3RpdmUgZWxlbWVudCBhbmQga2VlcCB0cmFja1xuICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICogLSB0aGUgZXZlbnQgdGFyZ2V0IGlzIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGxpa2VseSByZXF1aXJlIGludGVyYWN0aW9uXG4gICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFkS2V5Ym9hcmRFdmVudCB8fCBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlLnRhcmdldCkpIHtcbiAgICAgICAgYWRkRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXZpc2libGUnKSB8fFxuICAgICAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQ2xhc3MoZS50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAqIGZvY3VzZWQgZWxlbWVudCBoYWQgLmZvY3VzLXZpc2libGUuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZShlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAvLyBJZiB0aGUgdGFiIGJlY29tZXMgYWN0aXZlIGFnYWluLCB0aGUgYnJvd3NlciB3aWxsIGhhbmRsZSBjYWxsaW5nIGZvY3VzXG4gICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgLy8gcmUtYXBwbHkgdGhlIGNsYXNzIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgYmFjayB0byB0aGUgdGFiLlxuICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAqIFRoZXNlIGxpc3RlbmVycyB3aWxsIGJlIGFkZGVkIHdoZW4gdGhlIHBvbHlmaWxsIGZpcnN0IGxvYWRzLCBhbmQgYW55dGltZVxuICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgKiBmb2N1cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBwb2xmeWlsbCBmaXJzdCBsb2FkcywgYXNzdW1lIHRoZSB1c2VyIGlzIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICogVGhpcyBhY2NvdW50cyBmb3Igc2l0dWF0aW9ucyB3aGVyZSBmb2N1cyBlbnRlcnMgdGhlIHBhZ2UgZnJvbSB0aGUgVVJMIGJhci5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsUG9pbnRlck1vdmUoZSkge1xuICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICYmIGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZvciBzb21lIGtpbmRzIG9mIHN0YXRlLCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBjaGFuZ2VzIGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIC8vIEZvciBmb2N1cyBhbmQgYmx1ciwgd2Ugc3BlY2lmaWNhbGx5IGNhcmUgYWJvdXQgc3RhdGUgY2hhbmdlcyBpbiB0aGUgbG9jYWxcbiAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAvLyB0aGUgYWN0aXZlIGVsZW1lbnQgaW4gaXRzIG93biBzY29wZTpcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuXG4gICAgLy8gV2UgZGV0ZWN0IHRoYXQgYSBub2RlIGlzIGEgU2hhZG93Um9vdCBieSBlbnN1cmluZyB0aGF0IGl0IGlzIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCBhbHNvIGhhcyBhIGhvc3QgcHJvcGVydHkuIFRoaXMgY2hlY2sgY292ZXJzIG5hdGl2ZVxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFuZCBwb2x5ZmlsbCBpbXBsZW1lbnRhdGlvbiB0cmFuc3BhcmVudGx5LiBJZiB3ZSBvbmx5IGNhcmVkXG4gICAgLy8gYWJvdXQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgd2UgY291bGQganVzdCBjaGVjayBpZiB0aGUgc2NvcGUgd2FzXG4gICAgLy8gYW4gaW5zdGFuY2Ugb2YgYSBTaGFkb3dSb290LlxuICAgIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIHNjb3BlLmhvc3QpIHtcbiAgICAgIC8vIFNpbmNlIGEgU2hhZG93Um9vdCBpcyBhIHNwZWNpYWwga2luZCBvZiBEb2N1bWVudEZyYWdtZW50LCBpdCBkb2VzIG5vdFxuICAgICAgLy8gaGF2ZSBhIHJvb3QgZWxlbWVudCB0byBhZGQgYSBjbGFzcyB0by4gU28sIHdlIGFkZCB0aGlzIGF0dHJpYnV0ZSB0byB0aGVcbiAgICAgIC8vIGhvc3QgZWxlbWVudCBpbnN0ZWFkOlxuICAgICAgc2NvcGUuaG9zdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMtZm9jdXMtdmlzaWJsZScsICcnKTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqcy1mb2N1cy12aXNpYmxlJyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWpzLWZvY3VzLXZpc2libGUnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIHdyYXAgYWxsIHJlZmVyZW5jZXMgdG8gZ2xvYmFsIHdpbmRvdyBhbmQgZG9jdW1lbnQgaW5cbiAgLy8gdGhlc2UgY2hlY2tzIHRvIHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHVzZSBjYXNlc1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvaXNzdWVzLzE5OVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1ha2UgdGhlIHBvbHlmaWxsIGhlbHBlciBnbG9iYWxseSBhdmFpbGFibGUuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBzaWduYWxcbiAgICAvLyB0byBpbnRlcmVzdGVkIGxpYnJhcmllcyB0aGF0IHdpc2ggdG8gY29vcmRpbmF0ZSB3aXRoIHRoZSBwb2x5ZmlsbCBmb3IgZS5nLixcbiAgICAvLyBhcHBseWluZyB0aGUgcG9seWZpbGwgdG8gYSBzaGFkb3cgcm9vdDpcbiAgICB3aW5kb3cuYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCA9IGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGw7XG5cbiAgICAvLyBOb3RpZnkgaW50ZXJlc3RlZCBsaWJyYXJpZXMgb2YgdGhlIHBvbHlmaWxsJ3MgcHJlc2VuY2UsIGluIGNhc2UgdGhlXG4gICAgLy8gcG9seWZpbGwgd2FzIGxvYWRlZCBsYXppbHk6XG4gICAgdmFyIGV2ZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdmb2N1cy12aXNpYmxlLXBvbHlmaWxsLXJlYWR5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCB1c2luZyBDdXN0b21FdmVudCBhcyBhIGNvbnN0cnVjdG9yIGRpcmVjdGx5OlxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScsIGZhbHNlLCBmYWxzZSwge30pO1xuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQXBwbHkgdGhlIHBvbHlmaWxsIHRvIHRoZSBnbG9iYWwgZG9jdW1lbnQsIHNvIHRoYXQgbm8gSmF2YVNjcmlwdFxuICAgIC8vIGNvb3JkaW5hdGlvbiBpcyByZXF1aXJlZCB0byB1c2UgdGhlIHBvbHlmaWxsIGluIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQ6XG4gICAgYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbChkb2N1bWVudCk7XG4gIH1cblxufSkpKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEgLSBFUzIwMTUgYWNjZXNzaWJsZSBhY2NvcmRpb24gc3lzdGVtLCB1c2luZyBBUklBIChjb21wYXRpYmxlIElFOSsgd2hlbiB0cmFuc3BpbGVkKVxuICogQHZlcnNpb24gdjMuMC4xXG4gKiBAbGluayBodHRwczovL3ZhbjExeS5uZXQvYWNjZXNzaWJsZS1hY2NvcmRpb24vXG4gKiBAbGljZW5zZSBNSVQgOiBodHRwczovL2dpdGh1Yi5jb20vbmljbzMzMzNmci92YW4xMXktYWNjZXNzaWJsZS1hY2NvcmRpb24tYXJpYS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9cmV0dXJuIGV9LGxvYWRDb25maWc9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PWZ1bmN0aW9uKHQscil7ZVt0XT1yfSxyPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSxuPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfTtyZXR1cm57c2V0OnQsZ2V0OnIscmVtb3ZlOm59fSxEQVRBX0hBU0hfSUQ9XCJkYXRhLWhhc2hhY2NvcmRpb24taWRcIixwbHVnaW5Db25maWc9bG9hZENvbmZpZygpLGZpbmRCeUlkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZStcIltcIitEQVRBX0hBU0hfSUQrJz1cIicrdCsnXCJdJyl9LGFkZENsYXNzPWZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz1cIiBcIit0fSxyZW1vdmVDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LnJlbW92ZSh0KTplLmNsYXNzTmFtZT1lLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcYnwkKVwiLFwiZ2lcIiksXCIgXCIpfSxoYXNDbGFzcz1mdW5jdGlvbihlLHQpe3JldHVybiBlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5jb250YWlucyh0KTpuZXcgUmVnRXhwKFwiKF58IClcIit0K1wiKCB8JClcIixcImdpXCIpLnRlc3QoZS5jbGFzc05hbWUpfSxzZXRBdHRyaWJ1dGVzPWZ1bmN0aW9uKGUsdCl7T2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihyKXtlLnNldEF0dHJpYnV0ZShyLHRbcl0pfSl9LHNlYXJjaFBhcmVudEhhc2hJZD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0hMSxuPWU7MT09PW4ubm9kZVR5cGUmJm4mJnI9PT0hMTspbi5oYXNBdHRyaWJ1dGUodCk9PT0hMD9yPSEwOm49bi5wYXJlbnROb2RlO3JldHVybiByPT09ITA/bi5nZXRBdHRyaWJ1dGUodCk6XCJcIn0sc2VhcmNoUGFyZW50PWZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIG49ITEsQT1lO0EmJm49PT0hMTspaGFzQ2xhc3MoQSx0KT09PSEwJiZBLmdldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQpPT09cj9uPSEwOkE9QS5wYXJlbnROb2RlO3JldHVybiBuPT09ITA/QS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTpcIlwifSx1blNlbGVjdEhlYWRlcnM9ZnVuY3Rpb24oZSx0KXtlLmZvckVhY2goZnVuY3Rpb24oZSl7c2V0QXR0cmlidXRlcyhlLF9kZWZpbmVQcm9wZXJ0eSh7fSx0LFwiZmFsc2VcIikpfSl9LHNlbGVjdEhlYWRlcj1mdW5jdGlvbihlLHQpe2Uuc2V0QXR0cmlidXRlKHQsITApfSxzZWxlY3RIZWFkZXJJbkxpc3Q9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXZvaWQgMDtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKHIpJiYobj10KX0pLFwibmV4dFwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24rMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24rMV0uZm9jdXMoKX0sMCkpLFwicHJldlwiPT09dCYmKHNlbGVjdEhlYWRlcihlW24tMV0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlW24tMV0uZm9jdXMoKX0sMCkpfSxwbHVnaW49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLHQ9X2V4dGVuZHMoe0FDQ09SRElPTl9KUzpcImpzLWFjY29yZGlvblwiLEFDQ09SRElPTl9KU19IRUFERVI6XCJqcy1hY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9KU19QQU5FTDpcImpzLWFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1M6XCJkYXRhLWFjY29yZGlvbi1wcmVmaXgtY2xhc3Nlc1wiLEFDQ09SRElPTl9EQVRBX09QRU5FRDpcImRhdGEtYWNjb3JkaW9uLW9wZW5lZFwiLEFDQ09SRElPTl9EQVRBX01VTFRJU0VMRUNUQUJMRTpcImRhdGEtYWNjb3JkaW9uLW11bHRpc2VsZWN0YWJsZVwiLEFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTOlwiZGF0YS1hY2NvcmRpb24tY29vbC1zZWxlY3RvcnNcIixBQ0NPUkRJT05fUFJFRklYX0lEUzpcImFjY29yZGlvblwiLEFDQ09SRElPTl9CVVRUT05fSUQ6XCJfdGFiXCIsQUNDT1JESU9OX1BBTkVMX0lEOlwiX3BhbmVsXCIsQUNDT1JESU9OX1NUWUxFOlwiYWNjb3JkaW9uXCIsQUNDT1JESU9OX1RJVExFX1NUWUxFOlwiYWNjb3JkaW9uX190aXRsZVwiLEFDQ09SRElPTl9IRUFERVJfU1RZTEU6XCJhY2NvcmRpb25fX2hlYWRlclwiLEFDQ09SRElPTl9QQU5FTF9TVFlMRTpcImFjY29yZGlvbl9fcGFuZWxcIixBQ0NPUkRJT05fUk9MRV9UQUJMSVNUOlwidGFibGlzdFwiLEFDQ09SRElPTl9ST0xFX1RBQjpcInRhYlwiLEFDQ09SRElPTl9ST0xFX1RBQlBBTkVMOlwidGFicGFuZWxcIixBVFRSX1JPTEU6XCJyb2xlXCIsQVRUUl9NVUxUSVNFTEVDVEFCTEU6XCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiLEFUVFJfRVhQQU5ERUQ6XCJhcmlhLWV4cGFuZGVkXCIsQVRUUl9MQUJFTExFREJZOlwiYXJpYS1sYWJlbGxlZGJ5XCIsQVRUUl9ISURERU46XCJhcmlhLWhpZGRlblwiLEFUVFJfQ09OVFJPTFM6XCJhcmlhLWNvbnRyb2xzXCIsQVRUUl9TRUxFQ1RFRDpcImFyaWEtc2VsZWN0ZWRcIn0sZSkscj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKTtwbHVnaW5Db25maWcuc2V0KHIsdCk7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/ZG9jdW1lbnQ6YXJndW1lbnRzWzBdO3JldHVybltdLnNsaWNlLmNhbGwoZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK3QuQUNDT1JESU9OX0pTKSl9LEE9ZnVuY3Rpb24oZSl7bihlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPVwielwiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIsMTIpLEE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpPT09ITA/ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9QUkVGSVhfQ0xBU1MpK1wiLVwiOlwiXCIsYT1lLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwO1wibm9uZVwiPT09ZS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEUpP2Uuc2V0QXR0cmlidXRlKHQuQVRUUl9NVUxUSVNFTEVDVEFCTEUsXCJmYWxzZVwiKTplLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwidHJ1ZVwiKSxlLnNldEF0dHJpYnV0ZSh0LkFUVFJfUk9MRSx0LkFDQ09SRElPTl9ST0xFX1RBQkxJU1QpLGUuc2V0QXR0cmlidXRlKFwiaWRcIixuKSxlLnNldEF0dHJpYnV0ZShEQVRBX0hBU0hfSUQsciksYWRkQ2xhc3MoZSxBK3QuQUNDT1JESU9OX1NUWUxFKTt2YXIgaT1bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KU19IRUFERVIpKTtpLmZvckVhY2goZnVuY3Rpb24oaSxfKXt2YXIgbyxUO2lmKGkucGFyZW50Tm9kZT09PWV8fGEhPT0hMSl7dmFyIEU9XysxLHM9aS5uZXh0RWxlbWVudFNpYmxpbmcsQz1pLmlubmVySFRNTCxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCVVRUT05cIiksRD1pLmhhc0F0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk9PT0hMD9pLmdldEF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCk6XCJcIjtjLmlubmVySFRNTD1DLGFkZENsYXNzKGMsdC5BQ0NPUkRJT05fSlNfSEVBREVSKSxhZGRDbGFzcyhjLEErdC5BQ0NPUkRJT05fSEVBREVSX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKGMsKG89e30sX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUIpLF9kZWZpbmVQcm9wZXJ0eShvLFwiaWRcIix0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fQlVUVE9OX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9DT05UUk9MUyx0LkFDQ09SRElPTl9QUkVGSVhfSURTK24rdC5BQ0NPUkRJT05fUEFORUxfSUQrRSksX2RlZmluZVByb3BlcnR5KG8sdC5BVFRSX1NFTEVDVEVELFwiZmFsc2VcIiksX2RlZmluZVByb3BlcnR5KG8sXCJ0eXBlXCIsXCJidXR0b25cIiksX2RlZmluZVByb3BlcnR5KG8sREFUQV9IQVNIX0lELHIpLG8pKSxpLmlubmVySFRNTD1cIlwiLGkuYXBwZW5kQ2hpbGQoYyksYWRkQ2xhc3MoaSxBK3QuQUNDT1JESU9OX1RJVExFX1NUWUxFKSxyZW1vdmVDbGFzcyhpLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MocyxBK3QuQUNDT1JESU9OX1BBTkVMX1NUWUxFKSxzZXRBdHRyaWJ1dGVzKHMsKFQ9e30sX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJQQU5FTCksX2RlZmluZVByb3BlcnR5KFQsdC5BVFRSX0xBQkVMTEVEQlksdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShULERBVEFfSEFTSF9JRCxyKSxUKSksXCJ0cnVlXCI9PT1EPyhjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJ0cnVlXCIpLGkucmVtb3ZlQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfT1BFTkVEKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwiZmFsc2VcIikpOihjLnNldEF0dHJpYnV0ZSh0LkFUVFJfRVhQQU5ERUQsXCJmYWxzZVwiKSxzLnNldEF0dHJpYnV0ZSh0LkFUVFJfSElEREVOLFwidHJ1ZVwiKSl9fSl9KX07cmV0dXJue2F0dGFjaDpBfX0sbWFpbj1mdW5jdGlvbigpe3JldHVybltcImNsaWNrXCIsXCJrZXlkb3duXCIsXCJmb2N1c1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihlLGZ1bmN0aW9uKHQpe3ZhciByPXNlYXJjaFBhcmVudEhhc2hJZCh0LnRhcmdldCxEQVRBX0hBU0hfSUQpO1wiXCIhPT1yJiYhZnVuY3Rpb24oKXt2YXIgbj1wbHVnaW5Db25maWcuZ2V0KHIpO2hhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJmb2N1c1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTthPT09ITEmJihpPWkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PUF9KSksdW5TZWxlY3RIZWFkZXJzKGksbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoZSxuLkFUVFJfU0VMRUNURUQpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJjbGlja1wiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1maW5kQnlJZChzZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxyKSxhPUEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsaT1bXS5zbGljZS5jYWxsKEEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKSxfPUEuZ2V0QXR0cmlidXRlKG4uQVRUUl9NVUxUSVNFTEVDVEFCTEUpLG89ZmluZEJ5SWQoZS5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKSxUPWUuZ2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLFwiZmFsc2VcIj09PVQ/KGUuc2V0QXR0cmlidXRlKG4uQVRUUl9FWFBBTkRFRCwhMCksby5yZW1vdmVBdHRyaWJ1dGUobi5BVFRSX0hJRERFTikpOihlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLG8uc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKSxcImZhbHNlXCI9PT1fJiZpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIEE9ZmluZEJ5SWQodC5nZXRBdHRyaWJ1dGUobi5BVFRSX0NPTlRST0xTKSxyKTt0IT09ZT8odC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCExKSx0LnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITEpLEEuc2V0QXR0cmlidXRlKG4uQVRUUl9ISURERU4sITApKTp0LnNldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQsITApfSksc2V0VGltZW91dChmdW5jdGlvbigpe2UuZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpfSgpLGhhc0NsYXNzKHQudGFyZ2V0LG4uQUNDT1JESU9OX0pTX0hFQURFUik9PT0hMCYmXCJrZXlkb3duXCI9PT1lJiYhZnVuY3Rpb24oKXt2YXIgZT10LnRhcmdldCxBPXNlYXJjaFBhcmVudChlLG4uQUNDT1JESU9OX0pTLHIpLGE9ZmluZEJ5SWQoQSxyKSxpPWEuaGFzQXR0cmlidXRlKG4uQUNDT1JESU9OX0RBVEFfQ09PTF9TRUxFQ1RPUlMpPT09ITAsXz1bXS5zbGljZS5jYWxsKGEucXVlcnlTZWxlY3RvckFsbChcIi5cIituLkFDQ09SRElPTl9KU19IRUFERVIpKTtpPT09ITEmJihfPV8uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUucGFyZW50Tm9kZT09PWF9KSksMzY9PT10LmtleUNvZGU/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOjM1PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNyE9PXQua2V5Q29kZSYmMzghPT10LmtleUNvZGV8fHQuY3RybEtleT80MCE9PXQua2V5Q29kZSYmMzkhPT10LmtleUNvZGV8fHQuY3RybEtleXx8KFwidHJ1ZVwiPT09X1tfLmxlbmd0aC0xXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1swXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfWzBdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwibmV4dFwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKSk6XCJ0cnVlXCI9PT1fWzBdLmdldEF0dHJpYnV0ZShuLkFUVFJfU0VMRUNURUQpPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfW18ubGVuZ3RoLTFdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bXy5sZW5ndGgtMV0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTooc2VsZWN0SGVhZGVySW5MaXN0KF8sXCJwcmV2XCIsbi5BVFRSX1NFTEVDVEVEKSx0LnByZXZlbnREZWZhdWx0KCkpfSgpfSgpfSwhMCl9KSxwbHVnaW59O3dpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYT1tYWluKCk7dmFyIG9uTG9hZD1mdW5jdGlvbiBlKCl7dmFyIHQ9d2luZG93LnZhbjExeUFjY2Vzc2libGVBY2NvcmRpb25BcmlhKCk7dC5hdHRhY2goKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLG9uTG9hZCk7IiwiIWZ1bmN0aW9uKG4sdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpufHxzZWxmKS5MYXp5TG9hZD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe3JldHVybiBuPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG4pe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBlPWFyZ3VtZW50c1t0XTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmKG5baV09ZVtpXSl9cmV0dXJuIG59LG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3csZT10JiYhKFwib25zY3JvbGxcImluIHdpbmRvdyl8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJi8oZ2xlfGluZ3xybylib3R8Y3Jhd2x8c3BpZGVyL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpPXQmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyxvPXQmJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSxhPXQmJndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPjEscj17ZWxlbWVudHNfc2VsZWN0b3I6XCIubGF6eVwiLGNvbnRhaW5lcjplfHx0P2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjMwMCx0aHJlc2hvbGRzOm51bGwsZGF0YV9zcmM6XCJzcmNcIixkYXRhX3NyY3NldDpcInNyY3NldFwiLGRhdGFfc2l6ZXM6XCJzaXplc1wiLGRhdGFfYmc6XCJiZ1wiLGRhdGFfYmdfaGlkcGk6XCJiZy1oaWRwaVwiLGRhdGFfYmdfbXVsdGk6XCJiZy1tdWx0aVwiLGRhdGFfYmdfbXVsdGlfaGlkcGk6XCJiZy1tdWx0aS1oaWRwaVwiLGRhdGFfYmdfc2V0OlwiYmctc2V0XCIsZGF0YV9wb3N0ZXI6XCJwb3N0ZXJcIixjbGFzc19hcHBsaWVkOlwiYXBwbGllZFwiLGNsYXNzX2xvYWRpbmc6XCJsb2FkaW5nXCIsY2xhc3NfbG9hZGVkOlwibG9hZGVkXCIsY2xhc3NfZXJyb3I6XCJlcnJvclwiLGNsYXNzX2VudGVyZWQ6XCJlbnRlcmVkXCIsY2xhc3NfZXhpdGVkOlwiZXhpdGVkXCIsdW5vYnNlcnZlX2NvbXBsZXRlZDohMCx1bm9ic2VydmVfZW50ZXJlZDohMSxjYW5jZWxfb25fZXhpdDohMCxjYWxsYmFja19lbnRlcjpudWxsLGNhbGxiYWNrX2V4aXQ6bnVsbCxjYWxsYmFja19hcHBsaWVkOm51bGwsY2FsbGJhY2tfbG9hZGluZzpudWxsLGNhbGxiYWNrX2xvYWRlZDpudWxsLGNhbGxiYWNrX2Vycm9yOm51bGwsY2FsbGJhY2tfZmluaXNoOm51bGwsY2FsbGJhY2tfY2FuY2VsOm51bGwsdXNlX25hdGl2ZTohMSxyZXN0b3JlX29uX2Vycm9yOiExfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBuKHt9LHIsdCl9LGw9ZnVuY3Rpb24obix0KXt2YXIgZSxpPVwiTGF6eUxvYWQ6OkluaXRpYWxpemVkXCIsbz1uZXcgbih0KTt0cnl7ZT1uZXcgQ3VzdG9tRXZlbnQoaSx7ZGV0YWlsOntpbnN0YW5jZTpvfX0pfWNhdGNoKG4peyhlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChpLCExLCExLHtpbnN0YW5jZTpvfSl9d2luZG93LmRpc3BhdGNoRXZlbnQoZSl9LHU9XCJzcmNcIixzPVwic3Jjc2V0XCIsZD1cInNpemVzXCIsZj1cInBvc3RlclwiLF89XCJsbE9yaWdpbmFsQXR0cnNcIixnPVwiZGF0YVwiLHY9XCJsb2FkaW5nXCIsYj1cImxvYWRlZFwiLHA9XCJhcHBsaWVkXCIsbT1cImVycm9yXCIsaD1cIm5hdGl2ZVwiLEU9XCJkYXRhLVwiLEk9XCJsbC1zdGF0dXNcIix5PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4uZ2V0QXR0cmlidXRlKEUrdCl9LGs9ZnVuY3Rpb24obil7cmV0dXJuIHkobixJKX0sdz1mdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihuLHQsZSl7dmFyIGk9XCJkYXRhLWxsLXN0YXR1c1wiO251bGwhPT1lP24uc2V0QXR0cmlidXRlKGksZSk6bi5yZW1vdmVBdHRyaWJ1dGUoaSl9KG4sMCx0KX0sQT1mdW5jdGlvbihuKXtyZXR1cm4gdyhuLG51bGwpfSxMPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT09ayhuKX0sTz1mdW5jdGlvbihuKXtyZXR1cm4gayhuKT09PWh9LHg9W3YsYixwLG1dLEM9ZnVuY3Rpb24obix0LGUsaSl7biYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKHZvaWQgMD09PWk/dm9pZCAwPT09ZT9uKHQpOm4odCxlKTpuKHQsZSxpKSl9LE49ZnVuY3Rpb24obix0KXtvP24uY2xhc3NMaXN0LmFkZCh0KTpuLmNsYXNzTmFtZSs9KG4uY2xhc3NOYW1lP1wiIFwiOlwiXCIpK3R9LE09ZnVuY3Rpb24obix0KXtvP24uY2xhc3NMaXN0LnJlbW92ZSh0KTpuLmNsYXNzTmFtZT1uLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIrdCtcIihcXFxccyt8JClcIiksXCIgXCIpLnJlcGxhY2UoL15cXHMrLyxcIlwiKS5yZXBsYWNlKC9cXHMrJC8sXCJcIil9LHo9ZnVuY3Rpb24obil7cmV0dXJuIG4ubGxUZW1wSW1hZ2V9LFQ9ZnVuY3Rpb24obix0KXtpZih0KXt2YXIgZT10Ll9vYnNlcnZlcjtlJiZlLnVub2JzZXJ2ZShuKX19LFI9ZnVuY3Rpb24obix0KXtuJiYobi5sb2FkaW5nQ291bnQrPXQpfSxHPWZ1bmN0aW9uKG4sdCl7biYmKG4udG9Mb2FkQ291bnQ9dCl9LGo9ZnVuY3Rpb24obil7Zm9yKHZhciB0LGU9W10saT0wO3Q9bi5jaGlsZHJlbltpXTtpKz0xKVwiU09VUkNFXCI9PT10LnRhZ05hbWUmJmUucHVzaCh0KTtyZXR1cm4gZX0sRD1mdW5jdGlvbihuLHQpe3ZhciBlPW4ucGFyZW50Tm9kZTtlJiZcIlBJQ1RVUkVcIj09PWUudGFnTmFtZSYmaihlKS5mb3JFYWNoKHQpfSxIPWZ1bmN0aW9uKG4sdCl7aihuKS5mb3JFYWNoKHQpfSxWPVt1XSxGPVt1LGZdLEI9W3UscyxkXSxKPVtnXSxQPWZ1bmN0aW9uKG4pe3JldHVybiEhbltfXX0sUz1mdW5jdGlvbihuKXtyZXR1cm4gbltfXX0sVT1mdW5jdGlvbihuKXtyZXR1cm4gZGVsZXRlIG5bX119LCQ9ZnVuY3Rpb24obix0KXtpZighUChuKSl7dmFyIGU9e307dC5mb3JFYWNoKChmdW5jdGlvbih0KXtlW3RdPW4uZ2V0QXR0cmlidXRlKHQpfSkpLG5bX109ZX19LHE9ZnVuY3Rpb24obix0KXtpZihQKG4pKXt2YXIgZT1TKG4pO3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7IWZ1bmN0aW9uKG4sdCxlKXtlP24uc2V0QXR0cmlidXRlKHQsZSk6bi5yZW1vdmVBdHRyaWJ1dGUodCl9KG4sdCxlW3RdKX0pKX19LEs9ZnVuY3Rpb24obix0LGUpe04obix0LmNsYXNzX2FwcGxpZWQpLHcobixwKSxlJiYodC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sdCksQyh0LmNhbGxiYWNrX2FwcGxpZWQsbixlKSl9LFE9ZnVuY3Rpb24obix0LGUpe04obix0LmNsYXNzX2xvYWRpbmcpLHcobix2KSxlJiYoUihlLDEpLEModC5jYWxsYmFja19sb2FkaW5nLG4sZSkpfSxXPWZ1bmN0aW9uKG4sdCxlKXtlJiZuLnNldEF0dHJpYnV0ZSh0LGUpfSxYPWZ1bmN0aW9uKG4sdCl7VyhuLGQseShuLHQuZGF0YV9zaXplcykpLFcobixzLHkobix0LmRhdGFfc3Jjc2V0KSksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sWT17SU1HOmZ1bmN0aW9uKG4sdCl7RChuLChmdW5jdGlvbihuKXskKG4sQiksWChuLHQpfSkpLCQobixCKSxYKG4sdCl9LElGUkFNRTpmdW5jdGlvbihuLHQpeyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSxWSURFTzpmdW5jdGlvbihuLHQpe0gobiwoZnVuY3Rpb24obil7JChuLFYpLFcobix1LHkobix0LmRhdGFfc3JjKSl9KSksJChuLEYpLFcobixmLHkobix0LmRhdGFfcG9zdGVyKSksVyhuLHUseShuLHQuZGF0YV9zcmMpKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4sdCl7JChuLEopLFcobixnLHkobix0LmRhdGFfc3JjKSl9fSxaPVtcIklNR1wiLFwiSUZSQU1FXCIsXCJWSURFT1wiLFwiT0JKRUNUXCJdLG5uPWZ1bmN0aW9uKG4sdCl7IXR8fGZ1bmN0aW9uKG4pe3JldHVybiBuLmxvYWRpbmdDb3VudD4wfSh0KXx8ZnVuY3Rpb24obil7cmV0dXJuIG4udG9Mb2FkQ291bnQ+MH0odCl8fEMobi5jYWxsYmFja19maW5pc2gsdCl9LHRuPWZ1bmN0aW9uKG4sdCxlKXtuLmFkZEV2ZW50TGlzdGVuZXIodCxlKSxuLmxsRXZMaXNucnNbdF09ZX0sZW49ZnVuY3Rpb24obix0LGUpe24ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGUpfSxvbj1mdW5jdGlvbihuKXtyZXR1cm4hIW4ubGxFdkxpc25yc30sYW49ZnVuY3Rpb24obil7aWYob24obikpe3ZhciB0PW4ubGxFdkxpc25ycztmb3IodmFyIGUgaW4gdCl7dmFyIGk9dFtlXTtlbihuLGUsaSl9ZGVsZXRlIG4ubGxFdkxpc25yc319LHJuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7ZGVsZXRlIG4ubGxUZW1wSW1hZ2V9KG4pLFIoZSwtMSksZnVuY3Rpb24obil7biYmKG4udG9Mb2FkQ291bnQtPTEpfShlKSxNKG4sdC5jbGFzc19sb2FkaW5nKSx0LnVub2JzZXJ2ZV9jb21wbGV0ZWQmJlQobixlKX0sY249ZnVuY3Rpb24obix0LGUpe3ZhciBpPXoobil8fG47b24oaSl8fGZ1bmN0aW9uKG4sdCxlKXtvbihuKXx8KG4ubGxFdkxpc25ycz17fSk7dmFyIGk9XCJWSURFT1wiPT09bi50YWdOYW1lP1wibG9hZGVkZGF0YVwiOlwibG9hZFwiO3RuKG4saSx0KSx0bihuLFwiZXJyb3JcIixlKX0oaSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2xvYWRlZCksdyh0LGIpLEMoZS5jYWxsYmFja19sb2FkZWQsdCxpKSxvfHxubihlLGkpfSgwLG4sdCxlKSxhbihpKX0pLChmdW5jdGlvbihvKXshZnVuY3Rpb24obix0LGUsaSl7dmFyIG89Tyh0KTtybih0LGUsaSksTih0LGUuY2xhc3NfZXJyb3IpLHcodCxtKSxDKGUuY2FsbGJhY2tfZXJyb3IsdCxpKSxlLnJlc3RvcmVfb25fZXJyb3ImJnEodCxCKSxvfHxubihlLGkpfSgwLG4sdCxlKSxhbihpKX0pKX0sbG49ZnVuY3Rpb24obix0LGUpeyFmdW5jdGlvbihuKXtyZXR1cm4gWi5pbmRleE9mKG4udGFnTmFtZSk+LTF9KG4pP2Z1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7bi5sbFRlbXBJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpfShuKSxjbihuLHQsZSksZnVuY3Rpb24obil7UChuKXx8KG5bX109e2JhY2tncm91bmRJbWFnZTpuLnN0eWxlLmJhY2tncm91bmRJbWFnZX0pfShuKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZyksbz15KG4sdC5kYXRhX2JnX2hpZHBpKSxyPWEmJm8/bzppO3ImJihuLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKFwiJy5jb25jYXQociwnXCIpJykseihuKS5zZXRBdHRyaWJ1dGUodSxyKSxRKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19tdWx0aSksbz15KG4sdC5kYXRhX2JnX211bHRpX2hpZHBpKSxyPWEmJm8/bzppO3ImJihuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1yLEsobix0LGUpKX0obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT15KG4sdC5kYXRhX2JnX3NldCk7aWYoaSl7dmFyIG89aS5zcGxpdChcInxcIiksYT1vLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCJpbWFnZS1zZXQoXCIuY29uY2F0KG4sXCIpXCIpfSkpO24uc3R5bGUuYmFja2dyb3VuZEltYWdlPWEuam9pbigpLFwiXCI9PT1uLnN0eWxlLmJhY2tncm91bmRJbWFnZSYmKGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiLXdlYmtpdC1pbWFnZS1zZXQoXCIuY29uY2F0KG4sXCIpXCIpfSkpLG4uc3R5bGUuYmFja2dyb3VuZEltYWdlPWEuam9pbigpKSxLKG4sdCxlKX19KG4sdCxlKX0obix0LGUpOmZ1bmN0aW9uKG4sdCxlKXtjbihuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPVlbbi50YWdOYW1lXTtpJiYoaShuLHQpLFEobix0LGUpKX0obix0LGUpfShuLHQsZSl9LHVuPWZ1bmN0aW9uKG4pe24ucmVtb3ZlQXR0cmlidXRlKHUpLG4ucmVtb3ZlQXR0cmlidXRlKHMpLG4ucmVtb3ZlQXR0cmlidXRlKGQpfSxzbj1mdW5jdGlvbihuKXtEKG4sKGZ1bmN0aW9uKG4pe3EobixCKX0pKSxxKG4sQil9LGRuPXtJTUc6c24sSUZSQU1FOmZ1bmN0aW9uKG4pe3EobixWKX0sVklERU86ZnVuY3Rpb24obil7SChuLChmdW5jdGlvbihuKXtxKG4sVil9KSkscShuLEYpLG4ubG9hZCgpfSxPQkpFQ1Q6ZnVuY3Rpb24obil7cShuLEopfX0sZm49ZnVuY3Rpb24obix0KXsoZnVuY3Rpb24obil7dmFyIHQ9ZG5bbi50YWdOYW1lXTt0P3Qobik6ZnVuY3Rpb24obil7aWYoUChuKSl7dmFyIHQ9UyhuKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT10LmJhY2tncm91bmRJbWFnZX19KG4pfSkobiksZnVuY3Rpb24obix0KXtMKG4pfHxPKG4pfHwoTShuLHQuY2xhc3NfZW50ZXJlZCksTShuLHQuY2xhc3NfZXhpdGVkKSxNKG4sdC5jbGFzc19hcHBsaWVkKSxNKG4sdC5jbGFzc19sb2FkaW5nKSxNKG4sdC5jbGFzc19sb2FkZWQpLE0obix0LmNsYXNzX2Vycm9yKSl9KG4sdCksQShuKSxVKG4pfSxfbj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIl0sZ249ZnVuY3Rpb24obil7cmV0dXJuIG4udXNlX25hdGl2ZSYmXCJsb2FkaW5nXCJpbiBIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZX0sdm49ZnVuY3Rpb24obix0LGUpe24uZm9yRWFjaCgoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBuLmlzSW50ZXJzZWN0aW5nfHxuLmludGVyc2VjdGlvblJhdGlvPjB9KG4pP2Z1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPWZ1bmN0aW9uKG4pe3JldHVybiB4LmluZGV4T2YoayhuKSk+PTB9KG4pO3cobixcImVudGVyZWRcIiksTihuLGUuY2xhc3NfZW50ZXJlZCksTShuLGUuY2xhc3NfZXhpdGVkKSxmdW5jdGlvbihuLHQsZSl7dC51bm9ic2VydmVfZW50ZXJlZCYmVChuLGUpfShuLGUsaSksQyhlLmNhbGxiYWNrX2VudGVyLG4sdCxpKSxvfHxsbihuLGUsaSl9KG4udGFyZ2V0LG4sdCxlKTpmdW5jdGlvbihuLHQsZSxpKXtMKG4pfHwoTihuLGUuY2xhc3NfZXhpdGVkKSxmdW5jdGlvbihuLHQsZSxpKXtlLmNhbmNlbF9vbl9leGl0JiZmdW5jdGlvbihuKXtyZXR1cm4gayhuKT09PXZ9KG4pJiZcIklNR1wiPT09bi50YWdOYW1lJiYoYW4obiksZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXt1bihuKX0pKSx1bihuKX0obiksc24obiksTShuLGUuY2xhc3NfbG9hZGluZyksUihpLC0xKSxBKG4pLEMoZS5jYWxsYmFja19jYW5jZWwsbix0LGkpKX0obix0LGUsaSksQyhlLmNhbGxiYWNrX2V4aXQsbix0LGkpKX0obi50YXJnZXQsbix0LGUpfSkpfSxibj1mdW5jdGlvbihuKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobil9LHBuPWZ1bmN0aW9uKG4pe3JldHVybiBuLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKG4uZWxlbWVudHNfc2VsZWN0b3IpfSxtbj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1tfShuKX0saG49ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGJuKG4pLmZpbHRlcihMKX0obnx8cG4odCkpfSxFbj1mdW5jdGlvbihuLGUpe3ZhciBvPWMobik7dGhpcy5fc2V0dGluZ3M9byx0aGlzLmxvYWRpbmdDb3VudD0wLGZ1bmN0aW9uKG4sdCl7aSYmIWduKG4pJiYodC5fb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChmdW5jdGlvbihlKXt2bihlLG4sdCl9KSxmdW5jdGlvbihuKXtyZXR1cm57cm9vdDpuLmNvbnRhaW5lcj09PWRvY3VtZW50P251bGw6bi5jb250YWluZXIscm9vdE1hcmdpbjpuLnRocmVzaG9sZHN8fG4udGhyZXNob2xkK1wicHhcIn19KG4pKSl9KG8sdGhpcyksZnVuY3Rpb24obixlKXt0JiYoZS5fb25saW5lSGFuZGxlcj1mdW5jdGlvbigpeyFmdW5jdGlvbihuLHQpe3ZhciBlOyhlPXBuKG4pLGJuKGUpLmZpbHRlcihtbikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe00odCxuLmNsYXNzX2Vycm9yKSxBKHQpfSkpLHQudXBkYXRlKCl9KG4sZSl9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsZS5fb25saW5lSGFuZGxlcikpfShvLHRoaXMpLHRoaXMudXBkYXRlKGUpfTtyZXR1cm4gRW4ucHJvdG90eXBlPXt1cGRhdGU6ZnVuY3Rpb24obil7dmFyIHQsbyxhPXRoaXMuX3NldHRpbmdzLHI9aG4obixhKTtHKHRoaXMsci5sZW5ndGgpLCFlJiZpP2duKGEpP2Z1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pey0xIT09X24uaW5kZXhPZihuLnRhZ05hbWUpJiZmdW5jdGlvbihuLHQsZSl7bi5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsXCJsYXp5XCIpLGNuKG4sdCxlKSxmdW5jdGlvbihuLHQpe3ZhciBlPVlbbi50YWdOYW1lXTtlJiZlKG4sdCl9KG4sdCksdyhuLGgpfShuLHQsZSl9KSksRyhlLDApfShyLGEsdGhpcyk6KG89cixmdW5jdGlvbihuKXtuLmRpc2Nvbm5lY3QoKX0odD10aGlzLl9vYnNlcnZlciksZnVuY3Rpb24obix0KXt0LmZvckVhY2goKGZ1bmN0aW9uKHQpe24ub2JzZXJ2ZSh0KX0pKX0odCxvKSk6dGhpcy5sb2FkQWxsKHIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fb2JzZXJ2ZXImJnRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSx0JiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLHRoaXMuX29ubGluZUhhbmRsZXIpLHBuKHRoaXMuX3NldHRpbmdzKS5mb3JFYWNoKChmdW5jdGlvbihuKXtVKG4pfSkpLGRlbGV0ZSB0aGlzLl9vYnNlcnZlcixkZWxldGUgdGhpcy5fc2V0dGluZ3MsZGVsZXRlIHRoaXMuX29ubGluZUhhbmRsZXIsZGVsZXRlIHRoaXMubG9hZGluZ0NvdW50LGRlbGV0ZSB0aGlzLnRvTG9hZENvdW50fSxsb2FkQWxsOmZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT10aGlzLl9zZXR0aW5ncztobihuLGUpLmZvckVhY2goKGZ1bmN0aW9uKG4pe1Qobix0KSxsbihuLGUsdCl9KSl9LHJlc3RvcmVBbGw6ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl9zZXR0aW5ncztwbihuKS5mb3JFYWNoKChmdW5jdGlvbih0KXtmbih0LG4pfSkpfX0sRW4ubG9hZD1mdW5jdGlvbihuLHQpe3ZhciBlPWModCk7bG4obixlKX0sRW4ucmVzZXRTdGF0dXM9ZnVuY3Rpb24obil7QShuKX0sdCYmZnVuY3Rpb24obix0KXtpZih0KWlmKHQubGVuZ3RoKWZvcih2YXIgZSxpPTA7ZT10W2ldO2krPTEpbChuLGUpO2Vsc2UgbChuLHQpfShFbix3aW5kb3cubGF6eUxvYWRPcHRpb25zKSxFbn0pKTtcbiIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsImZ1bmN0aW9uIGZvY3VzV2l0aGluKGRvY3VtZW50LCBvcHRzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IE9iamVjdChvcHRzKS5jbGFzc05hbWU7XG4gIGNvbnN0IGF0dHIgPSBPYmplY3Qob3B0cykuYXR0ciB8fCAnZm9jdXMtd2l0aGluJztcbiAgY29uc3QgZm9yY2UgPSBPYmplY3Qob3B0cykuZm9yY2U7XG4gIGNvbnN0IGxhc3RFbGVtZW50cyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOmZvY3VzLXdpdGhpbicpO1xuXG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgcmV0dXJuIGluaXRpYWxpemU7XG4gICAgfVxuICB9IGNhdGNoIChpZ25vcmVkRXJyb3IpIHtcbiAgICAvKiBkbyBub3RoaW5nIGFuZCBjb250aW51ZSAqL1xuICB9XG5cbiAgZnVuY3Rpb24gb25mb2N1c2NoYW5nZSgpIHtcbiAgICBsZXQgbGFzdEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAobGFzdEVsZW1lbnQgPSBsYXN0RWxlbWVudHMucG9wKCkpIHtcbiAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgIGxhc3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBsYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50OyAvLyBvbmx5IGFkZCBmb2N1cyBpZiBpdCBoYXMgbm90IGJlZW4gYWRkZWQgYW5kIGlzIG5vdCB0aGUgZG9jdW1lbnQgZWxlbWVudFxuXG4gICAgaWYgKCEvXigjZG9jdW1lbnR8SFRNTHxCT0RZKSQvLnRlc3QoT2JqZWN0KGFjdGl2ZUVsZW1lbnQpLm5vZGVOYW1lKSkge1xuICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAoYXR0cikge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RFbGVtZW50cy5wdXNoKGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbmZvY3VzY2hhbmdlLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25mb2N1c2NoYW5nZSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICogQ2FsbGJhY2sgd3JhcHBlciBmb3IgY2hlY2sgbG9hZGVkIHN0YXRlXG4gICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuXG4gICFmdW5jdGlvbiBsb2FkKCkge1xuICAgIGlmICgvbS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGxvYWQpIHwgaW5pdGlhbGl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbG9hZCk7XG4gICAgfVxuICB9KCk7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZXR1cm4gaW5pdGlhbGl6ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9jdXNXaXRoaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCIvanMvZGVmYXVsdHNcIjogMCxcblx0XCJjc3MvcHJpbnRcIjogMCxcblx0XCJjc3MvZ2xvYmFsXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N5ZF9kMTBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3lkX2QxMFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9qcy9kZWZhdWx0cy50c1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvcHJpbnRcIixcImNzcy9nbG9iYWxcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93ZWIvdGhlbWVzL3BpcHBpcC9hc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dlYi90aGVtZXMvcGlwcGlwL2Fzc2V0cy9zYXNzL3ByaW50LnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZm9jdXNfd2l0aGluXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJ6ZW5zY3JvbGxfMSIsInZhbmlsbGFfbGF6eWxvYWRfMSIsInRvZ2dsZURhdGFBdHRyXzEiLCJiYWd1ZXR0ZWJveF9qc18xIiwiZG9jdW1lbnQiLCJhdHRyIiwiY2xhc3NOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsInJ1biIsIm1lbnVCdXJnZXJCdG4iLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlTmF2IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsImZvckVhY2giLCJsaW5rIiwiaG9zdG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldEF0dHJpYnV0ZSIsImxhenlMb2FkSW1hZ2VzIiwic2V0dXAiLCJ0b2dnbGVEYXRhQXR0ciIsImVsIiwiZGF0YW5hbWUiLCJvblN0YXRlIiwib2ZmU3RhdGUiLCJjb25jYXQiLCJnZXRBdHRyaWJ1dGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==