(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d15be60"],{"0c75":function(e,t,n){},2953:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{type:"flex"}},[n("left-nav"),n("el-col",[n("el-card",{staticClass:"content"},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n        "+e._s(e.$route.name)+"\n      ")]),n("router-view")],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{staticClass:"left-nav",attrs:{span:4}},[n("el-menu",{staticClass:"left-nav-menu",attrs:{"default-active":e.$route.path,router:!0}},[n("side-bar")],1)],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-bar-wrapper"},[e._l(e.menuConfig,function(t){return[t.children?n("el-submenu",{key:"sub-"+t.name,attrs:{index:t.path}},[n("template",{slot:"title"},[e._v("\n        "+e._s(t.name)+"\n      ")]),t.children?n("side-bar",{attrs:{"menu-config":t.children}}):e._e()],2):n("el-menu-item",{key:"item-"+t.name,attrs:{index:t.path}},[e._v("\n      "+e._s(t.name)+"\n    ")])]})],2)},i=[],l=n("a18c"),o={name:"SideBar",props:{menuConfig:{type:Array,default:function(){return l["a"]}}},data:function(){return{}}},f=o,d=(n("6428"),n("2877")),m=Object(d["a"])(f,c,i,!1,null,"ad453ed8",null),p=m.exports,v={name:"LeftNav",components:{SideBar:p},data:function(){return{defaultActive:"/home"}}},h=v,_=(n("59cd"),Object(d["a"])(h,s,u,!1,null,"6d9704e6",null)),b=_.exports,w={name:"AdminMain",components:{LeftNav:b},data:function(){return{}},updated:function(){console.log("route",this.$route)}},x=w,C=(n("6f1f"),Object(d["a"])(x,a,r,!1,null,"8611d0a8",null));t["default"]=C.exports},"37b1":function(e,t,n){},"520a":function(e,t,n){},"59cd":function(e,t,n){"use strict";var a=n("37b1"),r=n.n(a);r.a},6428:function(e,t,n){"use strict";var a=n("0c75"),r=n.n(a);r.a},"6f1f":function(e,t,n){"use strict";var a=n("520a"),r=n.n(a);r.a}}]);