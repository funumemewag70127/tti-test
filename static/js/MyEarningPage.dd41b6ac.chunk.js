(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{23:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(2),a=n(18),u=n.n(a),s=n(28),c={back:"back",push:"push"},f=new s.b;n.d(t,"b",function(){return p}),n.d(t,"a",function(){return m});var l=[],v="|";function h(e){var t=document.location.hash;document.location.hash="".concat(t).concat(t?v:"").concat(e)}function p(e,t){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(i.a.mark(function e(t,n){var r,o,a=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:{},h(o=n.key),l.push({navigator:t,router:n,options:r,routerName:o}),e.next=6,t.pushPage(n,r);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){window.history.back()}window.addEventListener("hashchange",function(e){var t=e.newURL,n=e.oldURL;if(t.length<n.length){var r=n.replace(t,"").replace("#","");!function(e){f.emit(c.back,e)}(r),function(e){var t=u.a.last(l),n=t.navigator,r=t.routerName;l.pop(),r===e&&n.popPage()}(r)}}),window.location.hash&&window.history.replaceState(null,"","#")},28:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(29),i=n(38),o=n(16),a=n(33),u=n(37),s=n(22),c=n(24),f=n(32),l=function(){function e(){Object(s.a)(this,e),this.collection=[]}return Object(c.a)(e,[{key:"push",value:function(){var e;return(e=this.collection).push.apply(e,arguments),this}},{key:"removeAll",value:function(){this.collection.forEach(function(e){return e()}),this.collection=[]}},{key:"getCollection",value:function(){return this.collection}}]),e}(),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this))).EventKeys={},n.removeEventListeners=[],n.EventKeys=Object(r.a)({},e),n.setMaxListeners(9999),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"on",value:function(e,n){var r=this;Object(a.a)(Object(o.a)(t.prototype),"on",this).call(this,e,n);var i=function t(){r.removeListener(e,n),r.removeEventListeners=r.removeEventListeners.filter(function(e){return e!==t})};return i.eventName=e,this.removeEventListeners||(this.removeEventListeners=[]),this.removeEventListeners.push(i),i}},{key:"one",value:function(e,t){var n=this.on(e,function(){t.apply(void 0,arguments),n()});return n}},{key:"removeByName",value:function(e){this.removeEventListeners.forEach(function(t){t.eventName===e&&t()}),this.removeEventListeners=this.removeEventListeners.filter(function(t){return t.eventName!==e})}},{key:"removeAll",value:function(){this.removeEventListeners.forEach(function(e){return e()}),this.removeEventListeners=[]}},{key:"createCollection",value:function(){return new l}},{key:"listenToMany",value:function(){var e,t=this.createCollection();return(e=t.getCollection()).push.apply(e,arguments),function(){return t.removeAll()}}}]),t}(f.EventEmitter);t.b=v},29:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(30);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}},30:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},307:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"MyEarningPagePure",function(){return d}),n.d(t,"MyEarningPage",function(){return m});var r=n(1),i=n.n(r),o=n(2),a=n(0),u=n.n(a),s=n(15),c=n(19),f=n(41),l=n(17),v=n(34),h=n(36),p=n(31);function d(){var e=Object(p.a)(Object(s.a)().HOME_PAGE.MY_EARNING);return u.a.createElement(c.Page,{renderFixed:e},u.a.createElement(f.a,null),u.a.createElement("div",{style:{padding:10}},"My Earning",u.a.createElement("br",null)))}var m=Object(l.a)(e,u.a.memo,v.a,Object(h.a)(Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e)}))))(d);t.default=m}.call(this,n(20)(e))},308:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TradingLogPagePure",function(){return f}),n.d(t,"TradingLogPage",function(){return l});var r=n(0),i=n.n(r),o=n(15),a=n(19),u=n(41),s=n(17),c=n(31);function f(){var e=Object(c.a)(Object(o.a)().HOME_PAGE.TRADING_LOG);return i.a.createElement(a.Page,{renderFixed:e},i.a.createElement(u.a,null),i.a.createElement("div",{style:{padding:10}},Object(o.a)().HOME_PAGE.ABOUT_US_CONTENT,i.a.createElement("br",null)))}var l=Object(s.a)(e,i.a.memo)(f);t.default=l}.call(this,n(20)(e))},31:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return f});var r=n(0),i=n.n(r),o=n(19),a=n(15),u=n(23);function s(e){var t=e.backText,n=void 0===t?Object(a.a)().BACK:t,r=e.hasBack,s=void 0===r||r,c=e.onBack,f=void 0===c?function(){return Object(u.a)()}:c,l=e.title,v=void 0===l?"":l,h=e.renderRightButton,p=void 0===h?function(){return null}:h;return i.a.createElement(o.Toolbar,null,i.a.createElement("div",{className:"left"},s?i.a.createElement(o.BackButton,{onClick:f},n):null),i.a.createElement("div",{className:"center"},v),i.a.createElement("div",{className:"right"},p()))}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){return i.a.createElement(s,Object.assign({title:e},t))}},f=function(e){return c(e,{hasBack:!1})}},32:function(e,t,n){"use strict";var r,i="object"===typeof Reflect?Reflect:null,o=i&&"function"===typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"===typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var s=10;function c(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,a,u;if("function"!==typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"===typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=c(e))>0&&a.length>i&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,u=s,console&&console.warn&&console.warn(u)}return e}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,e))}.bind(r);return i.listener=n,r.wrapFn=i,i}function v(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):p(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!==typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return c(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var s=i[e];if(void 0===s)return!1;if("function"===typeof s)o(s,this,t);else{var c=s.length,f=p(s,c);for(n=0;n<c;++n)o(f[n],this,t)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,l(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,l(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,a;if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return v(this,e,!0)},u.prototype.rawListeners=function(e){return v(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},u.prototype.listenerCount=h,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},33:function(e,t,n){"use strict";var r=n(16);function i(e,t,n){return(i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}n.d(t,"a",function(){return i})},34:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(25),i=n(17);function o(e){return Object(r.b)(function(e){var t=e.accountStore;return{locale:t.locale,dataVersion:t.dataVersion,updateDataVersion:function(){return t.updateDataVersion()}}})(e)}function a(e){return Object(i.a)(r.c,o)(e)}},36:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(1),i=n.n(r),o=n(2),a=n(35),u=n(0),s=n.n(u),c=n(18),f=n.n(c),l=function(e){return Object(c.values)(e)};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return function(n){return s.a.memo(function(r){var c=Object(u.useState)({}),l=Object(a.a)(c,2),v=l[0],h=l[1],p=t(r),d=f.a.get(r,"dataVersion");d&&p.push(d),Object(u.useEffect)(function(){Object(o.a)(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(r);case 2:n=t.sent,h(n);case 4:case"end":return t.stop()}},t)}))()},p);var m=n;return s.a.createElement(m,Object.assign({},r,v))})}}},41:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),i=n.n(r),o=i.a.memo(function(){return i.a.createElement("div",{style:{height:10}})})}}]);
//# sourceMappingURL=MyEarningPage.dd41b6ac.chunk.js.map