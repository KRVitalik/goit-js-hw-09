!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]'),c=document.querySelector("button");c.addEventListener("click",(function(t){t.preventDefault();var n=Number(l.value),o=Number(a.value),i=Number(u.value);if(n<0||o<0||i<0)return;!function(t,n,o){for(var i=function(i){var u=i;c.setAttribute("disabled","disabled"),1===i||(o+=n),function(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}(u,o).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})).finally((function(){i===t?c.removeAttribute("disabled","disabled"):c.setAttribute("disabled","disabled")}))},u=1;u<=t;u+=1)i(u)}(n,o,i)})),e(r).Notify.init({position:"center-center",cssAnimationStyle:"zoom"})}();
//# sourceMappingURL=03-promises.d420ee6f.js.map
