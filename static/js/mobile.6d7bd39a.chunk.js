(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),i=(n(141),n(19));function c(){return r.a.createElement(i.Page,{key:"PageLoading"},r.a.createElement("div",{className:"bubblingG",style:{height:"100%",display:"flex",alignItems:"center"}},r.a.createElement("span",{id:"bubblingG_1"}),r.a.createElement("span",{id:"bubblingG_2"}),r.a.createElement("span",{id:"bubblingG_3"})))}},102:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u});var a=n(101),r=n.n(a),i="locale";function c(e){r.a.locale=e,localStorage.setItem(i,e)}function o(){return localStorage.getItem(i)||window.navigator.language||"en"}function u(){return[{locale:"en",text:"English"},{locale:"zh",text:"\u4e2d\u6587"}]}},103:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"i",function(){return o}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return T}),n.d(t,"c",function(){return l}),n.d(t,"g",function(){return E}),n.d(t,"h",function(){return O});var a=n(135),r=function(){return Promise.all([n.e(1),n.e(16),n.e(11)]).then(n.bind(null,272))},i=Object(a.a)(r),c=function(){return n.e(7).then(n.bind(null,303))},o=function(){return n.e(9).then(n.bind(null,334))},u=function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,304))},T=function(){return n.e(4).then(n.bind(null,305))},l=function(){return n.e(5).then(n.bind(null,306))},E=function(){return n.e(8).then(n.bind(null,307))},O=function(){return Promise.all([n.e(3),n.e(19),n.e(13)]).then(n.bind(null,309))}},13:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"MobileApplication",function(){return f});var a=n(1),r=n.n(a),i=n(2),c=n(34),o=n(0),u=n.n(o),T=n(59),l=n(25),E=n(19),O=n(134),s=n(100),_=n(16),A=n(14),N=n(103),b=(n(142),n(42)),R=function(e,t){return u.a.createElement(e.component,{key:e.key,navigator:t})},f=function(){var e=O.accountStore,t=Object(o.useState)(null),n=Object(c.a)(t,2),a=n[0],_=n[1],f=Object(o.useState)(""),I=Object(c.a)(f,2),p=I[0],S=I[1],M=Object(o.useState)(0),m=Object(c.a)(M,2),P=m[0],d=m[1];return Object(o.useEffect)(function(){var t=setInterval(Object(i.a)(r.a.mark(function t(){var n,a,i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T.a)();case 3:return n=t.sent,t.next=6,n.getAccount();case 6:a=t.sent,i=Object(c.a)(a,1),o=i[0],e.account&&e.initialTimes>0&&o!==e.account&&document.location.reload(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])})),1e3);return function(){return clearInterval(t)}},[]),Object(o.useEffect)(function(){Object(i.a)(r.a.mark(function t(){var n,a,i,o,u,l,E,O;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T.a)();case 3:return n=t.sent,t.next=6,n.getWeb3();case 6:return a=t.sent,t.next=9,n.getAccount();case 9:return i=t.sent,o=Object(c.a)(i,1),u=o[0],t.next=14,n.getTokenBalance();case 14:return l=t.sent,t.next=17,n.getTTBalance();case 17:E=t.sent,e.init({account:u,tokenBalance:l,ttBalance:E}),_(a),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(0),O=t.t0 instanceof Error?t.t0.message:t.t0,S(O);case 26:case"end":return t.stop()}},t,null,[[0,22]])}))()},[P]),p?u.a.createElement(E.Page,null,u.a.createElement(E.Modal,{isOpen:!0},u.a.createElement(b.a,{transparent:!0,style:{wordBreak:"break-word"}},p,u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(E.Button,{onClick:function(){d(P+1),S("")}},Object(A.a)().RETRY_GET_WEB3_NOW)))):a&&e.account?u.a.createElement(l.a,Object.assign({},O,{web3:a}),u.a.createElement(E.Navigator,{renderPage:R,initialRoute:{component:N.a,key:"MAIN_PAGE"}})):u.a.createElement(s.a,null)};t.default=Object(_.a)(e)(f)}.call(this,n(20)(e))},134:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o,u,T,l,E,O,s,_,A,N,b,R,f,I=n(63),p=n(22),S=n(24),M=n(38),m=n(18),P=n(79),d=n(37),U=n(64),C=(n(65),n(47)),h=n(17),g=n.n(h),j=new(c=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(M.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r))),Object(I.a)(n,"dataVersion",o,Object(P.a)(n)),Object(I.a)(n,"account",u,Object(P.a)(n)),Object(I.a)(n,"password",T,Object(P.a)(n)),Object(I.a)(n,"gas",l,Object(P.a)(n)),Object(I.a)(n,"tokenBalance",E,Object(P.a)(n)),Object(I.a)(n,"ttBalance",O,Object(P.a)(n)),Object(I.a)(n,"betAddress",s,Object(P.a)(n)),Object(I.a)(n,"locale",_,Object(P.a)(n)),n}return Object(d.a)(t,e),Object(S.a)(t,[{key:"updateDataVersion",value:function(){this.dataVersion="".concat(Date.now())}}]),t}((a=function e(){Object(p.a)(this,e),Object(I.a)(this,"initialTimes",r,this),Object(I.a)(this,"init",i,this)},r=Object(U.a)(a.prototype,"initialTimes",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),i=Object(U.a)(a.prototype,"init",[C.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.initialTimes=e.initialTimes+1,g.a.forEach(t,function(t,n){Object(C.g)(e,n)&&(e[n]=t)})}}}),a)),o=Object(U.a)(c.prototype,"dataVersion",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"".concat(Date.now())}}),u=Object(U.a)(c.prototype,"account",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),T=Object(U.a)(c.prototype,"password",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),l=Object(U.a)(c.prototype,"gas",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 355e4}}),E=Object(U.a)(c.prototype,"tokenBalance",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=Object(U.a)(c.prototype,"ttBalance",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=Object(U.a)(c.prototype,"betAddress",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),_=Object(U.a)(c.prototype,"locale",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"en"}}),Object(U.a)(c.prototype,"updateDataVersion",[C.b],Object.getOwnPropertyDescriptor(c.prototype,"updateDataVersion"),c.prototype),c),y=n(71),B=new(A=function(){function e(){Object(p.a)(this,e),Object(I.a)(this,"scene",N,this),Object(I.a)(this,"visiblePopup",b,this),Object(I.a)(this,"popupData",R,this),Object(I.a)(this,"sceneData",f,this)}return Object(S.a)(e,[{key:"setScene",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.sceneData=t,this.scene=e}},{key:"setVisiblePopup",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.popupData=t,this.visiblePopup=e}}]),e}(),N=Object(U.a)(A.prototype,"scene",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return y.a.moneySelector}}),b=Object(U.a)(A.prototype,"visiblePopup",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return y.b.none}}),R=Object(U.a)(A.prototype,"popupData",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=Object(U.a)(A.prototype,"sceneData",[C.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(U.a)(A.prototype,"setScene",[C.b],Object.getOwnPropertyDescriptor(A.prototype,"setScene"),A.prototype),Object(U.a)(A.prototype,"setVisiblePopup",[C.b],Object.getOwnPropertyDescriptor(A.prototype,"setVisiblePopup"),A.prototype),A);n.d(t,"accountStore",function(){return j}),n.d(t,"gameUIStore",function(){return B})},135:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(100);n.d(t,"a",function(){return c});var c=function(e){return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).fallback,n=Object(a.lazy)(e);return function(e){var i=t?t():r.a.createElement("div",null,"Loading...");return r.a.createElement(a.Suspense,{fallback:i},r.a.createElement(n,e))}}(e,{fallback:i.a})}},14:function(e,t,n){"use strict";var a=n(101),r=n.n(a),i={APP_TITLE:"APP",HOME:"Home",SHOPS:"Shops",MY:"My",GAME:"Game",GAME_IS_NOT_READY:"Game is not ready. Please wait a moment.",RANK:"Rank",LANGUAGE_SETTING:"Language Settings",BACK:"Back",TT_BALANCE:"TT Balance",TOKEN_BALANCE:"TTi Balance",AMOUNT:"Amount",BUY_NOW:"Buy Now",OTHER:"Other",COPIED:"Copied",RETRY_GET_WEB3_NOW:"Retry connect to web3.",HOME_PAGE:{ASSET_MANAGEMENT:"Asset Management",RECEIVE:"Receive",TRANSFER:"Transfer",ANNOUNCEMENT:"Announcement",BALANCE:"Balance",TOTAL_EARNINGS:"Total Earnings",TRANSFER_ACCOUNT:"Account",TRANSFER_FROM:"From",TRANSFER_TO:"To",TRANSFER_AMOUNT:"Amount",PRODUCT_NAME_0:"Task I",PRODUCT_NAME_1:"Task II",PRODUCT_NAME_2:"Task III",PRODUCT_NAME_3:"Task IV",PRODUCT_CTC_VALUE:"TTi Value",PRODUCT_BENEFIT:"Benefit",PRODUCT_PURCHASE_LIMITATION:"Purchase Limited",PRODUCT_USE_TIMES:"Available Use Times",PRODUCT_IS_ALLOW_PURCHASE:"Is Allow Purchase",PRODUCT_REMAIN_USE_TIMES:"Remain Use Times",PRODUCT_LATEST_GAIN:"Latest Gain",PRODUCT_VALUE:"Value (TTi)",PRODUCT_EARNING:"Earnings (TTi)",PRODUCT_TODAY_EARNING:"Earnings (TTi)",PRODUCT_TOTAL_EARNING:"Total Earning",INVITATION:"Invitation",ABOUT_US:"About US",ABOUT_US_CONTENT:"About US Content",SYSTEM_ANNOUNCEMENT:"System Announcement",MY_EARNING:"My Earning",TRADING_LOG:"Trading Log",TODAY_TOTAL_IN_COME:"total income:",THIS_QUOTER_AVAILABLE_BONUS:"total rewards of quarters:",AVAILABLE_TIMES:" times available",EARNING_TIMES:" times",LATEST_GAIN:"latest:",STATIC_PROFIT_OF_ONE_TIME:"one time ",STATIC_PROFIT_TODAY:"today ",RELEASE_SCROLL:"RELEASE",RENEW_SCROLL:"RENEW",TASK:"Task",MY_INVITOR:"My Invitor",MY_INVITATION_CODE:"My Invitation Code:",MY_GROUP:"My Group",SET_INVITOR:"Set Invitor",QUARTER:"Quarter ",AVAILABLE_QUARTER_REWARD:"available reward ",STRAIT_REFERER_RANK:"Strait Referer Rank",GAME_PLAY_RANK:"Game Play Rank",MY_PERFORMANCE:"My Performance: ",MY_BET:"My Bet: ",RANK_ACCOUNT:"Account",RANK_AMOUNT:"Amount",PROFIT:"profit",MY_ASSET:"My Asset",MY_TASK_TITLE:"My Tasks",MY_QUARTER_REWARD:"My Quarterly Rewards",CAN_BUY:"can get ",CAN_USE:"can use ",TIMES:" times",GAIN_DATE:"Gain Date",TASKS:"Tasks"},GAIN:"Gain",GET:"Get",OPEN_BOX_PAGE:{OPEN_BOX:"Open Box",OPEN_BOX_MONEY_TEXT_1:"10",OPEN_BOX_MONEY_TEXT_2:"2000",OPEN_BOX_MONEY_TEXT_3:"5000",OPEN_BOX_MONEY_TEXT_4:"10000",OPEN_BOX_MONEY_TEXT_5:"50000",HISTORY:"History",HISTORY_NO:"NO",HISTORY_DATE:"Date"},WEB3:{NO_WEB3_PROVIDER:"No connection to Thunder.Please make sure you are using a DApp browser such as MetaMask or Trust Wallet.Install MetaMask pleaase access\uff1ahttps://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",WRONG_NETWORK:"Wrong network! Please switch to test net https://testnet-rpc.thundercore.com or mainnet https://mainnet-rpc.thundercore.com."},CONFIRM_SUBMIT:"Confirm of submit",SUBMIT:"Submit",ACCOUNT:"Account"},c=n(102);function o(){return new Proxy(i,{get:function(e,t){return r.a.t(t)||e[t]}})}r.a.fallbacks=!0,r.a.translations={en:i,zh:{APP_TITLE:"\u5e94\u7528\u6807\u9898",HOME:"\u9996\u9875",SHOPS:"\u5546\u57ce",MY:"\u6211\u7684",GAME:"\u6e38\u620f",GAME_IS_NOT_READY:"\u6e38\u620f\u5c1a\u672a\u5f00\u59cb\uff0c\u8bf7\u7a0d\u540e.",RANK:"\u6392\u884c",LANGUAGE_SETTING:"\u8bbe\u7f6e\u8bed\u8a00",BACK:"\u8fd4\u56de",TT_BALANCE:"TT \u4f59\u989d",TOKEN_BALANCE:"TTi \u4f59\u989d",AMOUNT:"\u91d1\u989d",BUY_NOW:"\u7acb\u5373\u8d2d\u4e70",OTHER:"\u5176\u4ed6",COPIED:"\u5df2\u590d\u5236",RETRY_GET_WEB3_NOW:"\u91cd\u8bd5\u8fde\u63a5web3.",HOME_PAGE:{ASSET_MANAGEMENT:"\u8d44\u4ea7\u7ba1\u7406",RECEIVE:"\u63a5\u6536",TRANSFER:"\u8f6c\u8d26",ANNOUNCEMENT:"\u516c\u5171",BALANCE:"\u4f59\u989d",TOTAL_EARNINGS:"\u603b\u6536\u76ca",TRANSFER_ACCOUNT:"\u8d26\u6237",TRANSFER_FROM:"\u4ece",TRANSFER_TO:"\u8f6c\u7ed9",TRANSFER_AMOUNT:"\u91d1\u989d",PRODUCT_NAME_0:"\u4efb\u52a1 I",PRODUCT_NAME_1:"\u4efb\u52a1 II",PRODUCT_NAME_2:"\u4efb\u52a1 III",PRODUCT_NAME_3:"\u4efb\u52a1 IV",PRODUCT_BENEFIT:"\u4efb\u52a1\u6536\u76ca",PRODUCT_CTC_VALUE:"\u4efb\u52a1\u4ef7\u503c(TTi)",PRODUCT_IS_ALLOW_PURCHASE:"\u5141\u8bb8\u8d2d\u4e70",PRODUCT_PURCHASE_LIMITATION:"\u4efb\u52a1\u9650\u5236\u8d2d\u4e70",PRODUCT_USE_TIMES:"\u53ef\u7528\u6b21\u6570",PRODUCT_REMAIN_USE_TIMES:"\u5269\u4f59\u4f7f\u7528\u6b21\u6570",PRODUCT_LATEST_GAIN:"\u9886\u53d6\u65e5\u671f",PRODUCT_VALUE:"\u4efb\u52a1\u4ef7\u503c (TTi)",PRODUCT_EARNING:"\u4efb\u52a1\u4ea7\u751f\u6536\u76ca (TTi)",PRODUCT_TODAY_EARNING:"\u4eca\u65e5\u53ef\u9886\u53d6\u6536\u76ca (TTi)",PRODUCT_TOTAL_EARNING:"\u603b\u6536\u76ca",INVITATION:"\u9080\u8bf7",ABOUT_US:"\u5173\u4e8e\u6211\u4eec",ABOUT_US_CONTENT:"\u5173\u4e8e\u6211\u4eec\u7684\u8be6\u60c5",SYSTEM_ANNOUNCEMENT:"\u7cfb\u7edf\u516c\u544a",MY_EARNING:"\u6211\u7684\u6536\u76ca",TRADING_LOG:"\u4ea4\u6613\u65e5\u5fd7",TODAY_TOTAL_IN_COME:"\u603b\u6536\u76ca:",THIS_QUOTER_AVAILABLE_BONUS:"\u603b\u5b63\u5ea6\u5956:",AVAILABLE_TIMES:" \u6b21\u53ef\u7528",EARNING_TIMES:" \u6b21",LATEST_GAIN:"\u6700\u8fd1\u9886\u53d6:",STATIC_PROFIT_OF_ONE_TIME:"\u6bcf\u6b21\u6536\u76ca ",STATIC_PROFIT_TODAY:"\u4eca\u65e5\u6536\u76ca ",RELEASE_SCROLL:"\u8d4e\u56de",RENEW_SCROLL:"\u7eed\u7ea6",TASK:"\u4efb\u52a1",MY_INVITOR:"\u6211\u7684\u9080\u8bf7\u4eba:",MY_INVITATION_CODE:"\u6211\u7684\u9080\u8bf7\u7801:",MY_GROUP:"\u6211\u7684\u56e2\u961f",SET_INVITOR:"\u8bbe\u7f6e\u9080\u8bf7\u4eba",QUARTER:"\u5b63\u5ea6 ",AVAILABLE_QUARTER_REWARD:"\u6709\u6548\u5956\u52b1 ",STRAIT_REFERER_RANK:"\u76f4\u63a8\u4e1a\u7ee9\u699c\u5355",GAME_PLAY_RANK:"\u6e38\u620f\u6295\u6ce8\u699c\u5355",MY_PERFORMANCE:"\u6211\u7684\u4e1a\u7ee9: ",MY_BET:"\u6211\u7684\u6295\u6ce8\u989d: ",RANK_ACCOUNT:"\u8d26\u53f7",RANK_AMOUNT:"\u91d1\u989d",PROFIT:"\u6536\u76ca",MY_ASSET:"\u6211\u7684\u8d44\u4ea7",MY_TASK_TITLE:"\u6211\u7684\u4efb\u52a1",MY_QUARTER_REWARD:"\u6211\u7684\u5b63\u5ea6\u5956",CAN_BUY:"\u53ef\u9886\u53d6 ",CAN_USE:"\u53ef\u4f7f\u7528 ",TIMES:" \u6b21",GAIN_DATE:"\u9886\u53d6\u65e5\u671f",TASKS:"\u4efb\u52a1\u5217\u8868"},GAIN:"\u9886\u53d6",GET:"\u9886\u53d6",OPEN_BOX_PAGE:{OPEN_BOX:"\u5f00\u7bb1\u5b50",OPEN_BOX_MONEY_TEXT_1:"10",OPEN_BOX_MONEY_TEXT_2:"2000",OPEN_BOX_MONEY_TEXT_3:"5000",OPEN_BOX_MONEY_TEXT_4:"10000",OPEN_BOX_MONEY_TEXT_5:"50000",HISTORY:"\u6295\u6ce8\u8bb0\u5f55",HISTORY_NO:"\u671f\u53f7",HISTORY_DATE:"\u65e5\u671f"},WEB3:{NO_WEB3_PROVIDER:"\u6ca1\u6709\u8fde\u63a5\u5230TT\u94fe,\u8bf7\u786e\u8ba4\u60a8\u662f\u5426\u5b89\u88c5\u4e86MetaMask\u6216\u8005Trust Wallet.\u5b89\u88c5MetaMask\u8bf7\u8bbf\u95ee\uff1ahttps://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",WRONG_NETWORK:"\u9519\u8bef\u7684\u94fe\uff01\u8bf7\u5207\u6362\u5230TT\u6d4b\u8bd5\u94fe\uff1ahttps://testnet-rpc.thundercore.com\uff0c\u6216\u8005TT\u6b63\u5f0f\u516c\u94fe\uff1ahttps://mainnet-rpc.thundercore.com\u3002"},CONFIRM_SUBMIT:"\u786e\u8ba4\u63d0\u4ea4",SUBMIT:"\u63d0\u4ea4",ACCOUNT:"\u8d26\u53f7"}},Object(c.c)(Object(c.a)()),n.d(t,"a",function(){return o})},141:function(e,t,n){},142:function(e,t,n){"use strict";n(143),n(144),n(145),n(146)},145:function(e,t,n){},146:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(17),r=n.n(a),i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return r.a.reverse((n=t,r.a.filter(n,function(e){return"function"===typeof e}))).reduce(function(e,t){return t(e)},e);var n}}},42:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return T});var a=n(99),r=n(0),i=n.n(r),c=n(16),o=n(66),u=n.n(o),T=Object(c.a)(e,i.a.memo)(function(e){var t=e.children,n=e.className,r=void 0===n?"":n,c=e.style,o=Object(a.a)(e,["children","className","style"]),T=u()("block",o,r);return i.a.createElement("div",{className:T,style:c},t)})}).call(this,n(20)(e))},59:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(1),r=n.n(a),i=n(2),c=n(60);function o(){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(c.a)()){e.next=2;break}return e.abrupt("return",n.e(23).then(n.bind(null,147)).then(function(e){return e.default}));case 2:return e.abrupt("return",Promise.all([n.e(0),n.e(2),n.e(24)]).then(n.bind(null,148)).then(function(e){return e.default}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}},60:function(e,t,n){"use strict";function a(){return"true"===localStorage.getItem("useMock")||window.location.search.indexOf("useMock=true")>=0}n.d(t,"a",function(){return a})},71:function(e,t,n){"use strict";var a,r;n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),function(e){e.none="",e.moneySelector="moneySelector",e.gamePlayer="gamePlayer"}(a||(a={})),function(e){e.none="",e.authForm="authForm",e.history="history",e.gameResult="gameResult"}(r||(r={}))}}]);
//# sourceMappingURL=mobile.6d7bd39a.chunk.js.map