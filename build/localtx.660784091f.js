!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1603)}({0:function(t,e,n){t.exports=n(1)(0)},1:function(t,e){t.exports=vendor_lib},1174:function(t,e){t.exports={container:"application__container___dWREr"}},1175:function(t,e){t.exports={icon:"identityIcon__icon___2xaw4"}},1176:function(t,e){t.exports={from:"transaction__from___2ZZAo",txhash:"transaction__txhash___wqgBH",transaction:"transaction__transaction___1T4nd",local:"transaction__local___1EOjZ",nowrap:"transaction__nowrap___1Ay46",edit:"transaction__edit___30QxL"}},12:function(t,e,n){t.exports=n(1)(765)},14:function(t,e,n){t.exports=n(1)(22)},15:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},16:function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=p[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(i(o.parts[a],e))}else{for(var u=[],a=0;a<o.parts.length;a++)u.push(i(o.parts[a],e));p[o.id]={id:o.id,refs:1,parts:u}}}}function o(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],a=r[0],u=r[1],l=r[2],i=r[3],c={css:u,media:l,sourceMap:i};n[a]?n[a].parts.push(c):e.push(n[a]={id:a,parts:[c]})}return e}function r(t,e){var n=m(),o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function i(t,e){var n,o,r;if(e.singleton){var i=g++;n=b||(b=u(e)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),o=s.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function c(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var a=document.createTextNode(r),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(a,u[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var p={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},d=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,y=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=d()),void 0===e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var a=[],u=0;u<r.length;u++){var l=r[u],i=p[l.id];i.refs--,a.push(i)}if(t){n(o(t),e)}for(var u=0;u<a.length;u++){var i=a[u];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete p[i.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},1603:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),r=n.n(o),a=n(0),u=n.n(a),l=n(25),i=(n.n(l),n(17)),c=n.n(i),s=n(489),f=n(18),p=(n.n(f),n(19)),h=(n.n(p),n(21));n.n(h);c()(),r.a.render(u.a.createElement(l.AppContainer,null,u.a.createElement(s.a,null)),document.querySelector("#container"))},17:function(t,e,n){var o=(n(50),n(49)),r=!1;t.exports=function(t){t=t||{};var e=t.shouldRejectClick||o;r=!0,n(51).injection.injectEventPluginsByName({TapEventPlugin:n(47)(e)})}},18:function(t,e,n){var o=n(29);"string"==typeof o&&(o=[[t.i,o,""]]);n(16)(o,{});o.locals&&(t.exports=o.locals)},19:function(t,e,n){var o=n(30);"string"==typeof o&&(o=[[t.i,o,""]]);n(16)(o,{});o.locals&&(t.exports=o.locals)},21:function(t,e){},222:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=window.parent.secureApi},25:function(t,e,n){t.exports=n(80)},29:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,'@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(33)+') format("woff2");unicode-range:u+0460-052f,u+20b4,u+2de0-2dff,u+a640-a69f}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(34)+') format("woff2");unicode-range:u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(32)+') format("woff2");unicode-range:u+1f??}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(36)+') format("woff2");unicode-range:u+0370-03ff}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(37)+') format("woff2");unicode-range:u+0102-0103,u+1ea0-1ef9,u+20ab}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(38)+') format("woff2");unicode-range:u+0100-024f,u+1e??,u+20a0-20ab,u+20ad-20cf,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Roboto;font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url('+n(35)+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215,u+e0ff,u+effd,u+f000}',""])},30:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,'@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(40)+') format("woff2");unicode-range:u+0460-052f,u+20b4,u+2de0-2dff,u+a640-a69f}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(42)+') format("woff2");unicode-range:u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(45)+') format("woff2");unicode-range:u+1f??}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(41)+') format("woff2");unicode-range:u+0370-03ff}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(39)+') format("woff2");unicode-range:u+0102-0103,u+1ea0-1ef9,u+20ab}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(43)+') format("woff2");unicode-range:u+0100-024f,u+1e??,u+20a0-20ab,u+20ad-20cf,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Roboto Mono;font-style:normal;font-weight:300;src:local("Roboto Mono Light"),local("RobotoMono-Light"),url('+n(44)+') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2212,u+2215,u+e0ff,u+effd,u+f000}',""])},31:function(t,e,n){"use strict";var o=function(t){var e;for(e in t)if(t.hasOwnProperty(e))return e;return null};t.exports=o},32:function(t,e,n){t.exports=n.p+"fonts/-L14Jk06m6pUHB-5mXQQnYX0hVgzZQUfRDuZrPvH3D885b8ec3ad2.woff2"},324:function(t,e,n){t.exports=n(1)(23)},33:function(t,e,n){t.exports=n.p+"fonts/0eC6fl06luXEYWpBSJvXCIX0hVgzZQUfRDuZrPvH3D89b68886401.woff2"},34:function(t,e,n){t.exports=n.p+"fonts/Fl4y0QdOxyyTHEGMXX8kcYX0hVgzZQUfRDuZrPvH3D8af34a57573.woff2"},35:function(t,e,n){t.exports=n.p+"fonts/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans92016a9467557.woff2"},36:function(t,e,n){t.exports=n.p+"fonts/I3S1wsgSg9YCurV6PUkTOYX0hVgzZQUfRDuZrPvH3D8890137f2a9.woff2"},37:function(t,e,n){t.exports=n.p+"fonts/NYDWBdD4gIq26G5XYbHsFIX0hVgzZQUfRDuZrPvH3D8bcb5918360.woff2"},38:function(t,e,n){t.exports=n.p+"fonts/Pru33qjShpZSmG3z6VYwnYX0hVgzZQUfRDuZrPvH3D889028d2d23.woff2"},39:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz-pRBTtN4E2_qSPBnw6AgMc62f2f972e0.woff2"},40:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz0ExlR2MysFCBK8OirNw2kMc9e9d851eb.woff2"},41:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz2MSHb9EAJwuSzGfuRChQzQ3c4e397d8b.woff2"},42:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz2dsm03krrxlabhmVQFB99s200142f539.woff2"},43:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz9Dnm4qiMZlH5rhYv_7LI2Ybd43bb45b2.woff2"},44:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59Fz9TIkQYohD4BpHvJ3NvbHoA63cba37360.woff2"},45:function(t,e,n){t.exports=n.p+"fonts/N4duVc9C58uwPiY8_59FzyJ0caWjaSBdV-xZbEgst_kefb845429d.woff2"},46:function(t,e,n){"use strict";var o={topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null},r={topLevelTypes:o};t.exports=r},47:function(t,e,n){"use strict";function o(t,e){var n=s.extractSingleTouch(e);return n?n[t.page]:t.page in e?e[t.page]:e[t.client]+f[t.envScroll]}function r(t,e){var n=o(w.x,e),r=o(w.y,e);return Math.pow(Math.pow(n-t.x,2)+Math.pow(r-t.y,2),.5)}function a(t){return{tapMoveThreshold:b,ignoreMouseThreshold:g,eventTypes:_,extractEvents:function(e,n,a,u){if(!h(e)&&!d(e))return null;if(m(e))v=R();else if(t(v,R()))return null;var l=null,s=r(y,a);return d(e)&&s<b&&(l=c.getPooled(_.touchTap,n,a,u)),h(e)?(y.x=o(w.x,a),y.y=o(w.y,a)):d(e)&&(y.x=0,y.y=0),i.accumulateTwoPhaseDispatches(l),l}}}var u=n(46),l=n(54),i=n(52),c=n(53),s=n(48),f=n(55),p=n(31),h=(u.topLevelTypes,l.isStartish),d=l.isEndish,m=function(t){return["topTouchCancel","topTouchEnd","topTouchStart","topTouchMove"].indexOf(t)>=0},b=10,g=750,y={x:null,y:null},v=null,w={x:{page:"pageX",client:"clientX",envScroll:"currentPageScrollLeft"},y:{page:"pageY",client:"clientY",envScroll:"currentPageScrollTop"}},E=["topTouchStart","topTouchCancel","topTouchEnd","topTouchMove"],x=["topMouseDown","topMouseMove","topMouseUp"].concat(E),_={touchTap:{phasedRegistrationNames:{bubbled:p({onTouchTap:null}),captured:p({onTouchTapCapture:null})},dependencies:x}},R=function(){return Date.now?Date.now:function(){return+new Date}}();t.exports=a},48:function(t,e){var n={extractSingleTouch:function(t){var e=t.touches,n=t.changedTouches,o=e&&e.length>0,r=n&&n.length>0;return!o&&r?n[0]:o?e[0]:t}};t.exports=n},489:function(t,e,n){"use strict";var o=n(592);n.d(e,"a",function(){return o.a})},49:function(t,e){t.exports=function(t,e){if(t&&e-t<750)return!0}},50:function(t,e,n){t.exports=n(1)(13)},51:function(t,e,n){t.exports=n(1)(178)},52:function(t,e,n){t.exports=n(1)(179)},53:function(t,e,n){t.exports=n(1)(180)},54:function(t,e,n){t.exports=n(1)(329)},55:function(t,e,n){t.exports=n(1)(665)},592:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(12),l=n.n(u),i=n(0),c=n.n(i),s=n(222),f=n(1174),p=n.n(f),h=n(595);n.d(e,"a",function(){return b});var d=function(){function t(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),b=function(t){function e(){var t,n,a,u;o(this,e);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=a=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),a.state={loading:!0,transactions:[],localTransactions:{},blockNumber:0},u=n,r(a,u)}return a(e,t),m(e,[{key:"componentDidMount",value:function(){var t=this;!function e(){t._timeout=window.setTimeout(function(){t.fetchTransactionData().then(e).catch(e)},1e3)}()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timeout)}},{key:"fetchTransactionData",value:function(){var t=this;return Promise.all([s.a.parity.pendingTransactions(),s.a.parity.pendingTransactionsStats(),s.a.parity.localTransactions(),s.a.eth.blockNumber()]).then(function(e){var n=d(e,4),o=n[0],r=n[1],a=n[2],u=n[3],i=o.map(function(t){return{transaction:t,stats:r[t.hash],isLocal:!!a[t.hash]}});i.filter(function(t){return t.isLocal}).map(function(t){var e=t.transaction;a[e.hash].transaction=e,a[e.hash].stats=t.stats});var c=Object.keys(a).map(function(t){var e=a[t];return e.txHash=t,e});c.sort(function(t,e){return t=t.transaction||{},e=e.transaction||{},t.from&&e.from&&t.from!==e.from?t.from<e.from:t.nonce&&e.nonce?new l.a(t.nonce).comparedTo(new l.a(e.nonce)):t.nonce?-1:1}),t.setState({loading:!1,transactions:i,localTransactions:c,blockNumber:u})})}},{key:"render",value:function(){return this.state.loading?c.a.createElement("div",{className:p.a.container},"Loading..."):c.a.createElement("div",{className:p.a.container},c.a.createElement("h1",null,"Your local transactions"),this.renderLocals(),c.a.createElement("h1",null,"Transactions in the queue"),this.renderQueueSummary(),this.renderQueue())}},{key:"renderQueueSummary",value:function(){var t=this.state.transactions;if(!t.length)return null;var e=t.length,n=t.filter(function(t){return t.isLocal}).length,o=t.map(function(t){return t.transaction}).map(function(t){return t.gasPrice.mul(t.gas)}).reduce(function(t,e){return t.add(e)},new l.a(0));return c.a.createElement("h3",null,"Count: ",c.a.createElement("strong",null,n?e+" ("+n+")":e),"  Total Fee: ",c.a.createElement("strong",null,s.a.util.fromWei(o).toFixed(3)," ETH"))}},{key:"renderQueue",value:function(){var t=this.state,e=t.blockNumber,n=t.transactions;return n.length?c.a.createElement("table",{cellSpacing:"0"},c.a.createElement("thead",null,h.a.renderHeader()),c.a.createElement("tbody",null,n.map(function(t,n){return c.a.createElement(h.a,{key:t.transaction.hash,idx:n+1,isLocal:t.isLocal,transaction:t.transaction,stats:t.stats,blockNumber:e})}))):c.a.createElement("h3",null,"The queue seems is empty.")}},{key:"renderLocals",value:function(){var t=this.state.localTransactions;return t.length?c.a.createElement("table",{cellSpacing:"0"},c.a.createElement("thead",null,h.b.renderHeader()),c.a.createElement("tbody",null,t.map(function(t){return c.a.createElement(h.b,{key:t.txHash,hash:t.txHash,transaction:t.transaction,status:t.status,stats:t.stats,details:t})}))):c.a.createElement("h3",null,"You haven't sent any transactions yet.")}}]),e}(i.Component)},593:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(0),l=n.n(u),i=n(222),c=n(1175),s=n.n(c);n.d(e,"a",function(){return p});var f=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),f(e,[{key:"render",value:function(){var t=this.props.address;return l.a.createElement("img",{className:s.a.icon,src:i.a.util.createIdentityImg(t,3)})}}]),e}(u.Component)},594:function(t,e,n){"use strict";var o=n(593);n.d(e,"a",function(){return o.a})},595:function(t,e,n){"use strict";var o=n(596);n.d(e,"a",function(){return o.a}),n.d(e,"b",function(){return o.b})},596:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(12),i=n.n(l),c=n(0),s=n.n(c),f=n(324),p=n.n(f),h=n(222),d=n(1176),m=n.n(d),b=n(594);n.d(e,"a",function(){return _}),n.d(e,"b",function(){return R});var g,y,v,w,E=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),x=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),E(e,[{key:"shortHash",value:function(t){return t.substr(0,5)+".."+t.substr(t.length-3)}},{key:"renderHash",value:function(t){return s.a.createElement("code",{title:t,className:m.a.txhash},t)}},{key:"renderFrom",value:function(t){return t?s.a.createElement("div",{title:t.from,className:m.a.from},s.a.createElement(b.a,{address:t.from})):"-"}},{key:"renderGasPrice",value:function(t){return t?s.a.createElement("span",{title:t.gasPrice.toFormat(0)+" wei"},h.a.util.fromWei(t.gasPrice,"shannon").toFormat(2)," shannon"):"-"}},{key:"renderGas",value:function(t){return t?s.a.createElement("span",{title:t.gas.toFormat(0)+" Gas"},t.gas.div(Math.pow(10,6)).toFormat(3)," MGas"):"-"}},{key:"renderPropagation",value:function(t){var e=Object.keys(t.propagatedTo).length,n=Object.values(t.propagatedTo).reduce(function(t,e){return t+e},0);return s.a.createElement("span",{className:m.a.nowrap},n," (",e," peers)")}}]),e}(c.Component),_=(y=g=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),E(e,[{key:"render",value:function(){var t=this.props,e=t.isLocal,n=t.stats,r=t.transaction,a=t.idx,u=new i.a(n.firstSeen),l=p()(m.a.transaction,o({},m.a.local,e));return s.a.createElement("tr",{className:l},s.a.createElement("td",null,a,"."),s.a.createElement("td",null,this.renderHash(r.hash)),s.a.createElement("td",null,this.renderFrom(r)),s.a.createElement("td",null,this.renderGasPrice(r)),s.a.createElement("td",null,this.renderGas(r)),s.a.createElement("td",{title:u.toFormat(0)},this.renderTime(n.firstSeen)),s.a.createElement("td",null,this.renderPropagation(n)))}},{key:"renderTime",value:function(t){var e=this.props.blockNumber;return t?e.sub(t).mul(14).div(60).toFormat(1)+" minutes ago":"never"}}],[{key:"renderHeader",value:function(){return s.a.createElement("tr",{className:m.a.header},s.a.createElement("th",null),s.a.createElement("th",null,"Transaction"),s.a.createElement("th",null,"From"),s.a.createElement("th",null,"Gas Price"),s.a.createElement("th",null,"Gas"),s.a.createElement("th",null,"First propagation"),s.a.createElement("th",null,"# Propagated"),s.a.createElement("th",null))}}]),e}(x),g.defaultProps={isLocal:!1,stats:{firstSeen:0,propagatedTo:{}}},y),R=(w=v=function(t){function e(){var t,n,o,u;r(this,e);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.state={isSending:!1,isResubmitting:!1,gasPrice:null,gas:null},o.toggleResubmit=function(){var t=o.props.transaction,e=o.state.isResubmitting,n={isResubmitting:!e};e||(n.gasPrice=h.a.util.fromWei(t.gasPrice,"shannon").toNumber(),n.gas=t.gas.div(1e6).toNumber()),o.setState(n)},o.setGasPrice=function(t){o.setState({gasPrice:t.target.value})},o.setGas=function(t){o.setState({gas:t.target.value})},o.sendTransaction=function(){var t=o.props,e=t.transaction,n=t.status,r=o.state,a=r.gasPrice,u=r.gas,l={from:e.from,value:e.value,data:e.input,gasPrice:h.a.util.toWei(a,"shannon"),gas:new i.a(u).mul(1e6)};o.setState({isResubmitting:!1,isSending:!0});var c=function(){o.setState({isSending:!1,gasPrice:null,gas:null})};e.to&&(l.to=e.to),["mined","replaced"].includes(n)||(l.nonce=e.nonce),h.a.eth.sendTransaction(l).then(c).catch(c)},u=n,a(o,u)}return u(e,t),E(e,[{key:"render",value:function(){if(this.state.isResubmitting)return this.renderResubmit();var t=this.props,e=t.stats,n=t.transaction,o=t.hash,r=t.status,a=this.state.isSending,u=a?"sending...":s.a.createElement("button",{onClick:this.toggleResubmit},"resubmit");return s.a.createElement("tr",{className:m.a.transaction},s.a.createElement("td",null,n?u:null),s.a.createElement("td",null,this.renderHash(o)),s.a.createElement("td",null,this.renderFrom(n)),s.a.createElement("td",null,this.renderGasPrice(n)),s.a.createElement("td",null,this.renderGas(n)),s.a.createElement("td",null,this.renderStatus(),s.a.createElement("br",null),"pending"===r?this.renderPropagation(e):null))}},{key:"renderStatus",value:function(){var t=this,e=this.props.details,n={pending:function(){return"In queue: Pending"},future:function(){return"In queue: Future"},mined:function(){return"Mined"},dropped:function(){return"Dropped because of queue limit"},invalid:function(){return"Transaction is invalid"},rejected:function(){return"Rejected: "+e.error},replaced:function(){return"Replaced by "+t.shortHash(e.hash)}}[this.props.status];return n?n():"unknown"}},{key:"renderResubmit",value:function(){var t=this.props.transaction,e=this.state,n=e.gasPrice,o=e.gas;return s.a.createElement("tr",{className:m.a.transaction},s.a.createElement("td",null,s.a.createElement("button",{onClick:this.toggleResubmit},"cancel")),s.a.createElement("td",null,this.renderHash(t.hash)),s.a.createElement("td",null,this.renderFrom(t)),s.a.createElement("td",{className:m.a.edit},s.a.createElement("input",{type:"number",value:n,onChange:this.setGasPrice}),s.a.createElement("span",null,"shannon")),s.a.createElement("td",{className:m.a.edit},s.a.createElement("input",{type:"number",value:o,onChange:this.setGas}),s.a.createElement("span",null,"MGas")),s.a.createElement("td",{colSpan:"2"},s.a.createElement("button",{onClick:this.sendTransaction},"Send")))}}],[{key:"renderHeader",value:function(){return s.a.createElement("tr",{className:m.a.header},s.a.createElement("th",null),s.a.createElement("th",null,"Transaction"),s.a.createElement("th",null,"From"),s.a.createElement("th",null,"Gas Price"),s.a.createElement("th",null,"Gas"),s.a.createElement("th",null,"Status"))}}]),e}(x),v.defaultProps={stats:{propagatedTo:{}}},w)},78:function(t,e,n){"use strict";t.exports=n(79)},79:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),i=l.Component,c=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),u(e,[{key:"render",value:function(){return this.props.component?l.createElement(this.props.component,this.props.props):l.Children.only(this.props.children)}}]),e}(i);t.exports=c},80:function(t,e,n){"use strict";var o=n(78);t.exports=function(t){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):t&&t.types&&t.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},t.exports.AppContainer=o}});