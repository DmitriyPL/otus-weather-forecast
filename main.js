/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";var t,e,r,n,o={};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function p(){}function y(){}function d(){}var v={};s(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==e&&r.call(g,o)&&(v=g);var w=d.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,a,c,u){var s=l(t[o],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==i(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=d,s(w,"constructor",d),s(d,"constructor",y),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}function s(t,e){localStorage.setItem(t,JSON.stringify(e))}function f(t){var e=document.querySelector("#list");e.innerHTML="";var r=document.createElement("ol");t.forEach((function(t){var e=document.createElement("li");e.innerText=t,r.appendChild(e),e.addEventListener("click",function(){var t=u(a().mark((function t(e){var r,n,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=e.target,t.next=4,d(r.innerText);case 4:n=t.sent,o=n.coord.lat,i=n.coord.lon,m(n,o,i);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.onmouseover=e.onmouseout=l})),e.appendChild(r)}function l(t){"mouseover"==t.type&&(t.target.style.background="grey"),"mouseout"==t.type&&(t.target.style.background="")}function h(t,e){var r=t.target.querySelector("input"),n=r.value;return r.value="",e.push(n),e.length>10&&e.shift(),n}function p(){return y.apply(this,arguments)}function y(){return(y=u(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://get.geojs.io/v1/ip/geo.json");case 3:return e=t.sent,t.abrupt("return",e.json());case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return v=u(a().mark((function t(e){var r,n,o,i,c,u,s=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=!(s.length>1&&void 0!==s[1])||s[1],n="21ca9df46444fbd55278f1acab840a5a",o="",r?o="https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&appid=").concat(n):(i=e.latitude,c=e.longitude,o="https://api.openweathermap.org/data/2.5/weather?lat=".concat(i,"&lon=").concat(c,"&appid=").concat(n)),t.next=6,fetch(o);case 6:return u=t.sent,t.abrupt("return",u.json());case 8:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function m(e,r,n){document.querySelector("#weather-info").innerHTML="\n  <h1>".concat(e.name,'</h1>\n  <img src="http://openweathermap.org/img/wn/').concat(e.weather[0].icon,'@2x.png" alt="Weather icon">\n  '),t.setCenter([r,n])}function g(){return(g=u(a().mark((function t(){var e,r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:return e=t.sent,t.next=5,d(e,!1);case 5:r=t.sent,n=e.latitude,o=e.longitude,m(r,n,o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r=document.querySelector("form"),n=null===(e=JSON.parse(localStorage.getItem("list")))?[]:e,ymaps.ready((function(){t=new ymaps.Map("map",{center:[55.76,37.64],zoom:7})})),function(){g.apply(this,arguments)}(),f(n),r.addEventListener("submit",function(){var t=u(a().mark((function t(e){var r,o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=h(e,n),f(n),s("list",n),t.next=6,d(r);case 6:o=t.sent,i=o.coord.lat,c=o.coord.lon,m(o,i,c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}();
//# sourceMappingURL=main.js.map