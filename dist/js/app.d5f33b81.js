(function(e){function n(n){for(var o,i,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)i=c[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d7635":"ad7dda69","chunk-2d0e19c3":"3b777cb4","chunk-2d0e5f03":"923eeeff","chunk-2d22d815":"789ed5d0"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),a=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"09a1":function(e,n,t){},"173a":function(e,n,t){"use strict";var o=t("629f"),r=t.n(o);r.a},"368b":function(e,n,t){"use strict";var o=t("09a1"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=t("5c96"),a=t.n(r),i=(t("0fae"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-row",{attrs:{type:"flex"}},[t("left-nav"),t("el-col",[t("el-card",{staticClass:"content"},[t("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n        "+e._s(e.title)+"\n      ")]),t("router-view")],1)],1)],1)}),c=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-col",{staticClass:"left-nav",attrs:{span:4}},[t("el-menu",{staticClass:"left-nav-menu",attrs:{"default-active":e.defaultActive,router:!0}},[t("side-bar")],1)],1)},s=[],d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"side-bar-wrapper"},[e._l(e.menuConfig,function(n){return[n.children?t("el-submenu",{attrs:{index:n.index}},[t("template",{slot:"title"},[e._v("\n        "+e._s(n.title)+"\n      ")]),n.children?t("side-bar",{attrs:{"menu-config":n.children}}):e._e()],2):t("el-menu-item",{attrs:{index:n.index}},[e._v("\n      "+e._s(n.title)+"\n    ")])]})],2)},l=[],f=[{title:"首页",index:"/home",icon:"",children:[{title:"首页1",index:"/home/index",icon:""}]},{title:"个人中心",index:"/personal",icon:""},{title:"商品",index:"/goods",icon:""},{title:"购物车",index:"/shopCart",icon:""}],p=f,h={name:"SideBar",props:{menuConfig:{type:Array,default:function(){return p}}},data:function(){return{}}},m=h,v=(t("368b"),t("2877")),g=Object(v["a"])(m,d,l,!1,null,"07db5081",null),b=g.exports,k={name:"LeftNav",components:{SideBar:b},data:function(){return{defaultActive:"/home/index"}},watch:{$route:function(e){this.defaultActive=e.path}}},x=k,w=(t("173a"),Object(v["a"])(x,u,s,!1,null,"50aa07ce",null)),y=w.exports,_={name:"App",components:{LeftNav:y},data:function(){return{title:""}},updated:function(){this.title=this.$route.meta.title}},C=_,O=(t("b530"),Object(v["a"])(C,i,c,!1,null,"457887fd",null)),j=O.exports,N=t("8c4f");o["default"].use(N["a"]);var P=function(e){return function(){return t("9dac")("./".concat(e))}},A=new N["a"]({routes:[{path:"/",redirect:"home"},{path:"/home/index",name:"home",component:P("home"),meta:{title:"首页"}},{path:"/goods",name:"goods",component:P("goods"),meta:{title:"商品"}},{path:"/personal",name:"personal",component:P("personal"),meta:{title:"个人中心"}},{path:"/shopCart",name:"shopCart",component:P("shopCart"),meta:{title:"购物车"}}]}),S={namespaced:!0,state:{name:"I am user"},mutations:{changeName:function(e){e.name="userChangeName"}},actions:{}},E=S,T={namespaced:!0,state:{name:"I am goods"},mutations:{changeName:function(e){e.name="goodsChangeName"}},actions:{}},$=T,M=t("2f62");o["default"].use(M["a"]);var L=new M["a"].Store({modules:{user:E,goods:$},state:{count:0},mutations:{plus:function(e){e.count++},minus:function(e){e.count--}},actions:{asyncPlus:function(e){var n=e.commit;n("plus")}}}),B=(t("8190"),t("b19f"),t("9483"));Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["default"].use(a.a),o["default"].config.productionTip=!1,new o["default"]({router:A,store:L,render:function(e){return e(j)}}).$mount("#app")},"629f":function(e,n,t){},8190:function(e,n,t){},"9dac":function(e,n,t){var o={"./goods":["7732","chunk-2d0d7635"],"./goods/":["7732","chunk-2d0d7635"],"./goods/index":["7732","chunk-2d0d7635"],"./goods/index.vue":["7732","chunk-2d0d7635"],"./home":["7abe","chunk-2d0e19c3"],"./home/":["7abe","chunk-2d0e19c3"],"./home/index":["7abe","chunk-2d0e19c3"],"./home/index.vue":["7abe","chunk-2d0e19c3"],"./personal":["972a","chunk-2d0e5f03"],"./personal/":["972a","chunk-2d0e5f03"],"./personal/index":["972a","chunk-2d0e5f03"],"./personal/index.vue":["972a","chunk-2d0e5f03"],"./shopCart":["f87d","chunk-2d22d815"],"./shopCart/":["f87d","chunk-2d22d815"],"./shopCart/index":["f87d","chunk-2d22d815"],"./shopCart/index.vue":["f87d","chunk-2d22d815"]};function r(e){var n=o[e];return n?t.e(n[1]).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(o)},r.id="9dac",e.exports=r},b19f:function(e,n,t){},b530:function(e,n,t){"use strict";var o=t("dd68"),r=t.n(o);r.a},dd68:function(e,n,t){}});
//# sourceMappingURL=app.d5f33b81.js.map