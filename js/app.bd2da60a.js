(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],f=0,d=[];f<s.length;f++)o=s[f],i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-pomodoro/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"4b88":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Stay Focused")]),n("div",{staticClass:"card task"},[n("CurrentTask")],1),n("div",{staticClass:"card timer"},[n("h2",[t._v("Time Left:")]),n("Timer")],1)])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer"},[n("h1",[t._v(t._s(t.timeDisplay))]),n("button",{staticClass:"start-stop-button",on:{click:t.toggleCountdown}},[t.intervalId?n("span",[t._v("Pause")]):n("span",[t._v("Start")])]),n("button",{on:{click:function(e){return t.setTimeLeft(t.startTime)}}},[t._v("Reset")])])},s=[],u=n("5118");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Math.floor(t/60),n="00".concat(t%60).slice(-2);return"".concat(e,":").concat(n)}var l=function(t){"Notification"in window?"granted"===Notification.permission&&new Notification(t):alert(t)},f=l,d=1800,p={name:"Timer",data:function(){return{startTime:d,timeLeft:d,timeDisplay:c(d),intervalId:null}},methods:{toggleCountdown:function(){var t=this;this.intervalId?this.clearTimer():this.intervalId=Object(u["setInterval"])(function(){return t.updateTimeLeft()},1e3)},setTimeLeft:function(t){this.timeLeft=t,this.timeDisplay=c(t)},updateTimeLeft:function(){this.timeLeft>0?this.setTimeLeft(this.timeLeft-1):(this.clearTimer(),this.onOutOfTime())},onOutOfTime:function(){this.setTimeLeft(this.startTime),f("Time to take a break!")},clearTimer:function(){Object(u["clearInterval"])(this.intervalId),this.intervalId=null}}},m=p,v=(n("cd3d"),n("2877")),h=Object(v["a"])(m,o,s,!1,null,"1d3fbb9f",null),b=h.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"current-task"},[n("label",[t._v("What am I working on right now?")]),n("textarea",{attrs:{rows:"3"}})])}],g={name:"CurrentTask"},y=g,w=(n("8a8c"),Object(v["a"])(y,T,_,!1,null,"13f88be7",null)),O=w.exports,j={name:"app",components:{Timer:b,CurrentTask:O}},k=j,L=(n("034f"),Object(v["a"])(k,i,a,!1,null,null,null)),x=L.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app"),Notification.requestPermission()},"64a9":function(t,e,n){},"76f9":function(t,e,n){},"8a8c":function(t,e,n){"use strict";var r=n("4b88"),i=n.n(r);i.a},cd3d:function(t,e,n){"use strict";var r=n("76f9"),i=n.n(r);i.a}});
//# sourceMappingURL=app.bd2da60a.js.map