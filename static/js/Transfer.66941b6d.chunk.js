(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);function i(e){var t=e.children,n=e.style,r=void 0===n?{}:n;return a.a.createElement("div",{style:r},t)}function o(e){var t=e.children;return a.a.createElement("span",null,t)}},23:function(e,t,n){"use strict";var r=n(1),a=n.n(r),i=n(2),o=n(15),u=n.n(o),c=n(28),s={back:"back",push:"push"},l=new c.b;n.d(t,"b",function(){return h}),n.d(t,"a",function(){return b});var f=[],v="|";function p(e){var t=document.location.hash;document.location.hash="".concat(t).concat(t?v:"").concat(e)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark(function e(t,n){var r,i,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:{},p(i=n.key),f.push({navigator:t,router:n,options:r,routerName:i}),e.next=6,t.pushPage(n,r);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){window.history.back()}window.addEventListener("hashchange",function(e){var t=e.newURL,n=e.oldURL;if(t.length<n.length){var r=n.replace(t,"").replace("#","");!function(e){l.emit(s.back,e)}(r),function(e){var t=u.a.last(f),n=t.navigator,r=t.routerName;f.pop(),r===e&&n.popPage()}(r)}}),window.location.hash&&window.history.replaceState(null,"","#")},28:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(29),a=n(41),i=n(19),o=n(37),u=n(42),c=n(22),s=n(25),l=n(35),f=function(){function e(){Object(c.a)(this,e),this.collection=[]}return Object(s.a)(e,[{key:"push",value:function(){var e;return(e=this.collection).push.apply(e,arguments),this}},{key:"removeAll",value:function(){this.collection.forEach(function(e){return e()}),this.collection=[]}},{key:"getCollection",value:function(){return this.collection}}]),e}(),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this))).EventKeys={},n.removeEventListeners=[],n.EventKeys=Object(r.a)({},e),n.setMaxListeners(9999),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"on",value:function(e,n){var r=this;Object(o.a)(Object(i.a)(t.prototype),"on",this).call(this,e,n);var a=function t(){r.removeListener(e,n),r.removeEventListeners=r.removeEventListeners.filter(function(e){return e!==t})};return a.eventName=e,this.removeEventListeners||(this.removeEventListeners=[]),this.removeEventListeners.push(a),a}},{key:"one",value:function(e,t){var n=this.on(e,function(){t.apply(void 0,arguments),n()});return n}},{key:"removeByName",value:function(e){this.removeEventListeners.forEach(function(t){t.eventName===e&&t()}),this.removeEventListeners=this.removeEventListeners.filter(function(t){return t.eventName!==e})}},{key:"removeAll",value:function(){this.removeEventListeners.forEach(function(e){return e()}),this.removeEventListeners=[]}},{key:"createCollection",value:function(){return new f}},{key:"listenToMany",value:function(){var e,t=this.createCollection();return(e=t.getCollection()).push.apply(e,arguments),function(){return t.removeAll()}}}]),t}(l.EventEmitter);t.b=v},29:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(32);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}},310:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"TransferPagePure",function(){return T}),n.d(t,"TransferPage",function(){return L});var r=n(1),a=n.n(r),i=n(2),o=n(34),u=n(0),c=n.n(u),s=n(15),l=n.n(s),f=n(21),v=n(70),p=n(45),h=n(23),m=n(14),b=n(36),d=n(17),y=n(24),O=n(133),E=n(38),g=n(49),j={input:{width:"100%"},label:{fontSize:12},button:{float:"right"}},w={TTI:{text:"TTi",value:"TTI"},TT:{text:"TT",value:"TT"}},T=c.a.memo(function(e){var t=e.account,n=void 0===t?"":t,r=e.onTransfer,a=Object(u.useState)(w.TTI.value),i=Object(o.a)(a,2),s=i[0],v=i[1],p=Object(u.useState)(""),h=Object(o.a)(p,2),b=h[0],d=h[1],y=Object(u.useState)(""),T=Object(o.a)(y,2),L=T[0],_=T[1];return c.a.createElement(f.Page,{renderFixed:Object(E.a)(Object(m.a)().HOME_PAGE.TRANSFER)},c.a.createElement(f.Card,null,c.a.createElement(O.a,null,Object(m.a)().HOME_PAGE.TRANSFER_FROM),c.a.createElement("br",null),c.a.createElement(O.b,{style:j.label},c.a.createElement(O.a,null,n)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(g.a,null,l.a.map(w,function(e){return c.a.createElement("label",{style:{width:"100%"}},c.a.createElement(f.Radio,{key:e.value,name:"type",value:e.value,checked:e.value===s,modifier:"material",onChange:function(e){return v(e.target.value)}}),"  ",e.text)})),c.a.createElement("br",null),c.a.createElement(f.Input,{placeholder:Object(m.a)().HOME_PAGE.TRANSFER_TO,float:!0,modifier:"material",style:j.input,value:b,onChange:function(e){return d(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(f.Input,{placeholder:Object(m.a)().HOME_PAGE.TRANSFER_AMOUNT,float:!0,modifier:"material",style:j.input,type:"number",value:L,onChange:function(e){return _(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(f.Button,{style:j.button,onClick:function(){return r({toAccount:b,amount:Number(L),type:s})}},Object(m.a)().HOME_PAGE.TRANSFER),c.a.createElement("br",null),c.a.createElement("br",null)))}),L=Object(d.a)(e,Object(y.b)(function(e){var t=e.accountStore;return{updateDataVersion:function(){return t.updateDataVersion()}}}),Object(b.a)(function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r,u,c,s,l,f,m,b;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.updateDataVersion,e.next=3,Object(v.a)();case 3:return r=e.sent,e.next=6,Object(p.a)();case 6:return u=e.sent,e.next=9,r.getAccount();case 9:return c=e.sent,s=Object(o.a)(c,1),l=s[0],e.next=14,r.getTokenBalance();case 14:return f=e.sent,e.next=17,r.getTTBalance();case 17:return m=e.sent,b=function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.transfer(t);case 3:n(),Object(h.a)(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),e.abrupt("return",{account:l,tokenBalance:f,ttBalance:m,onTransfer:b});case 20:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))(T);t.default=L}.call(this,n(18)(e))},32:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},329:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"DonatePagePure",function(){return O}),n.d(t,"DonatePage",function(){return E});var r=n(1),a=n.n(r),i=n(2),o=n(34),u=n(0),c=n.n(u),s=n(21),l=n(45),f=n(23),v=n(14),p=n(36),h=n(17),m=n(24),b=n(133),d=n(38),y={input:{width:"100%"},label:{fontSize:12},button:{float:"right"}},O=c.a.memo(function(e){var t=e.donationInfo,n=e.onDonate,r=Object(u.useState)(""),a=Object(o.a)(r,2),i=a[0],l=a[1];return c.a.createElement(s.Page,{renderFixed:Object(d.a)(Object(v.a)().DONATE.DONATE)},c.a.createElement(s.Card,null,c.a.createElement(b.a,null,Object(v.a)().DONATE.CURRENT_DAY,t&&t.currentDay,Object(v.a)().DONATE.DAY),c.a.createElement("br",null),c.a.createElement(b.a,null,Object(v.a)().DONATE.RATE,"1TT = ",t&&t.rate,"TTi"),c.a.createElement("br",null),c.a.createElement(b.a,null,Object(v.a)().DONATE.REMAIN_TOKEN_TODAY,t&&t.remainTokenOfDay),c.a.createElement("br",null),c.a.createElement(b.a,null,Object(v.a)().DONATE.TOKEN_TODAY,t&&t.tokenOfDay),c.a.createElement("br",null),c.a.createElement(b.a,null,Object(v.a)().DONATE.TT_LIMIT,t&&t.ttLimit),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(s.Input,{placeholder:Object(v.a)().DONATE.TT_AMOUNT,float:!0,modifier:"material",style:y.input,type:"number",value:i,onChange:function(e){return l(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(s.Button,{style:y.button,onClick:function(){return n({ttAmount:Number(i)})}},Object(v.a)().DONATE.DONATE),c.a.createElement("br",null),c.a.createElement("br",null)))}),E=Object(h.a)(e,Object(m.b)(function(e){var t=e.accountStore;return{updateDataVersion:function(){return t.updateDataVersion()}}}),Object(p.a)(function(){var e=Object(i.a)(a.a.mark(function e(t){var n,r,o,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.updateDataVersion,e.next=3,Object(l.a)();case 3:return r=e.sent,e.next=6,r.getDonationInfo();case 6:return o=e.sent,u=function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.doDonate(t);case 3:n(),Object(f.a)(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),e.abrupt("return",{donationInfo:o,onDonate:u});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))(O);t.default=E}.call(this,n(18)(e))},35:function(e,t,n){"use strict";var r,a="object"===typeof Reflect?Reflect:null,i=a&&"function"===typeof a.apply?a.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=a&&"function"===typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function s(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var a,i,o,u;if("function"!==typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),o=i[t]),void 0===o)o=i[t]=n,++e._eventsCount;else if("function"===typeof o?o=i[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(a=s(e))>0&&o.length>a&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,u=c,console&&console.warn&&console.warn(u)}return e}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},a=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}.bind(r);return a.listener=n,r.wrapFn=a,a}function v(e,t,n){var r=e._events;if(void 0===r)return[];var a=r[t];return void 0===a?[]:"function"===typeof a?n?[a.listener||a]:[a]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(a):h(a,a.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return s(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,a=this._events;if(void 0!==a)r=r&&void 0===a.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=o,u}var c=a[e];if(void 0===c)return!1;if("function"===typeof c)i(c,this,t);else{var s=c.length,l=h(c,s);for(n=0;n<s;++n)i(l[n],this,t)}return!0},u.prototype.addListener=function(e,t){return l(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return l(this,e,t,!0)},u.prototype.once=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,f(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,f(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,a,i,o;if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(a=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){o=n[i].listener,a=i;break}if(a<0)return this;0===a?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,a),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var a,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(a=i[r])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return v(this,e,!0)},u.prototype.rawListeners=function(e){return v(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},u.prototype.listenerCount=p,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},36:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(1),a=n.n(r),i=n(2),o=n(34),u=n(0),c=n.n(u),s=n(15),l=n.n(s),f=function(e){return Object(s.values)(e)};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return function(n){return c.a.memo(function(r){var s=Object(u.useState)({}),f=Object(o.a)(s,2),v=f[0],p=f[1],h=t(r),m=l.a.get(r,"dataVersion");m&&h.push(m),Object(u.useEffect)(function(){Object(i.a)(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(r);case 2:n=t.sent,p(n);case 4:case"end":return t.stop()}},t)}))()},h);var b=n;return c.a.createElement(b,Object.assign({},r,v))})}}},37:function(e,t,n){"use strict";var r=n(19);function a(e,t,n){return(a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(r.a)(e)););return e}(e,t);if(a){var i=Object.getOwnPropertyDescriptor(a,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}n.d(t,"a",function(){return a})},38:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),i=n(21),o=n(14),u=n(23);function c(e){var t=e.backText,n=void 0===t?Object(o.a)().BACK:t,r=e.hasBack,c=void 0===r||r,s=e.onBack,l=void 0===s?function(){return Object(u.a)()}:s,f=e.title,v=void 0===f?"":f,p=e.renderRightButton,h=void 0===p?function(){return null}:p;return a.a.createElement(i.Toolbar,null,a.a.createElement("div",{className:"left"},c?a.a.createElement(i.BackButton,{onClick:l},n):null),a.a.createElement("div",{className:"center"},v),a.a.createElement("div",{className:"right"},h()))}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){return a.a.createElement(c,Object.assign({title:e},t))}}},45:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1),a=n.n(r),i=n(2),o=n(54);function u(){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(o.a)()){e.next=2;break}return e.abrupt("return",n.e(21).then(n.bind(null,80)).then(function(e){return e.default}));case 2:return e.abrupt("return",Promise.all([n.e(0),n.e(1),n.e(22),n.e(3),n.e(16)]).then(n.bind(null,81)).then(function(e){return e.default}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}},49:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});var r=n(82),a=n(0),i=n.n(a),o=n(17),u=n(55),c=n.n(u),s=Object(o.a)(e,i.a.memo)(function(e){var t=e.children,n=e.className,a=void 0===n?"":n,o=Object(r.a)(e,["children","className"]),u=c()("flexContainer",o,a);return i.a.createElement("div",{className:u},t)})}).call(this,n(18)(e))}}]);
//# sourceMappingURL=Transfer.66941b6d.chunk.js.map