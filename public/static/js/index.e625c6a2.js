(function(e){function n(n){for(var t,r,u=n[0],s=n[1],g=n[2],d=0,l=[];d<u.length;d++)r=u[d],o[r]&&l.push(o[r][0]),o[r]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);c&&c(n);while(l.length)l.shift()();return i.push.apply(i,g||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],t=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(t=!1)}t&&(i.splice(n--,1),e=u(u.s=a[0]))}return e}var t={},o={index:0},i=[];function r(e){return u.p+"static/js/"+({"pages-friend-index":"pages-friend-index","pages-index-index":"pages-index-index","pages-photo-index":"pages-photo-index","pages-start-index":"pages-start-index","pages-user-info":"pages-user-info","pages-user-login":"pages-user-login","pages-user-pwd":"pages-user-pwd","pages-user-reg":"pages-user-reg","pages-user-user":"pages-user-user"}[e]||e)+"."+{"pages-friend-index":"eda3b78d","pages-index-index":"9d17a566","pages-photo-index":"709a3b7c","pages-start-index":"8e8c0ae8","pages-user-info":"79a68a80","pages-user-login":"6a34e915","pages-user-pwd":"a4199267","pages-user-reg":"46835755","pages-user-user":"5adbe75c"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var n=[],a=o[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise(function(n,t){a=o[e]=[n,t]});n.push(a[2]=t);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(e),i=function(n){s.onerror=s.onload=null,clearTimeout(g);var a=o[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+t+": "+i+")");r.type=t,r.request=i,a[1](r)}o[e]=void 0}};var g=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,a){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(a,t,function(n){return e[n]}.bind(null,t));return a},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],g=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=g;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("3270")},3270:function(e,n,a){"use strict";var t=a("288e"),o=t(a("cebc"));a("cadf"),a("551c"),a("097d"),a("6542"),a("1c31"),a("921b");var i=t(a("e143")),r=t(a("dfca")),u=t(a("b54e"));i.default.config.productionTip=!1,i.default.prototype.$store=u.default,r.default.mpType="app";var s=new i.default((0,o.default)({store:u.default},r.default));s.$mount()},4494:function(e,n,a){n=e.exports=a("2350")(!1),n.push([e.i,'@charset "UTF-8";.uni-body::-webkit-scrollbar{display:none}.uni-input-placeholder{color:#00355f}.imgs{width:100%;height:100%}.ac{text-align:center}.al{text-align:left}.ar{text-align:right}uni-page-body{width:100%;height:100%;display:block}swan-template{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n/* 原生组件模式下需要注意组件外部样式 */custom-component{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}',""])},6542:function(e,n,a){"use strict";(function(e){var n=a("288e"),t=n(a("5176")),o=n(a("e143"));e["____0777B4E____"]=!0,delete e["____0777B4E____"],e.__uniConfig={globalStyle:{navigationBarBackgroundColor:"#b97d9f",backgroundColor:"#b97d9f",background:"#477497"},tabBar:{color:"#00355f",selectedColor:"#1296db",backgroundColor:"#477497",list:[{pagePath:"pages/index/index",text:"出发",iconPath:"static/image/play.png",selectedIconPath:"static/image/playend.png",redDot:!1,badge:""},{pagePath:"pages/friend/index",text:"好友",iconPath:"static/image/friend.png",selectedIconPath:"static/image/friended.png",redDot:!1,badge:""},{pagePath:"pages/photo/index",text:"视听",iconPath:"static/image/photo.png",selectedIconPath:"static/image/photoend.png",redDot:!1,badge:""},{pagePath:"pages/user/user",text:"MY",iconPath:"static/image/user.png",selectedIconPath:"static/image/userend.png",redDot:!1,badge:""}],borderStyle:"black"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-start-index",function(e){var n={component:a.e("pages-start-index").then(function(){return e(a("1e9e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-index-index",function(e){var n={component:a.e("pages-index-index").then(function(){return e(a("7a63"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-friend-index",function(e){var n={component:a.e("pages-friend-index").then(function(){return e(a("b396"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-photo-index",function(e){var n={component:a.e("pages-photo-index").then(function(){return e(a("0850"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-user",function(e){var n={component:a.e("pages-user-user").then(function(){return e(a("eb9a"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-login",function(e){var n={component:a.e("pages-user-login").then(function(){return e(a("576d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-reg",function(e){var n={component:a.e("pages-user-reg").then(function(){return e(a("bba9"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-pwd",function(e){var n={component:a.e("pages-user-pwd").then(function(){return e(a("2c78"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),o.default.component("pages-user-info",function(e){var n={component:a.e("pages-user-info").then(function(){return e(a("3ba4"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/start/index",component:{render:function(e){return e("Page",{props:(0,t.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom",titleNView:!1})},[e("pages-start-index",{slot:"page"})])}},meta:{id:1,name:"pages-start-index",isNVue:!1,pagePath:"pages/start/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,t.default)({isQuit:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"出发",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:2,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/friend/index",component:{render:function(e){return e("Page",{props:(0,t.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"好友",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-friend-index",{slot:"page"})])}},meta:{id:3,name:"pages-friend-index",isNVue:!1,pagePath:"pages/friend/index",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/photo/index",component:{render:function(e){return e("Page",{props:(0,t.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"视听",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-photo-index",{slot:"page"})])}},meta:{id:4,name:"pages-photo-index",isNVue:!1,pagePath:"pages/photo/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:(0,t.default)({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"MY",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-user-user",{slot:"page"})])}},meta:{id:5,name:"pages-user-user",isNVue:!1,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/user/login",component:{render:function(e){return e("Page",{props:(0,t.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"登录",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-user-login",{slot:"page"})])}},meta:{name:"pages-user-login",isNVue:!1,pagePath:"pages/user/login",windowTop:44}},{path:"/pages/user/reg",component:{render:function(e){return e("Page",{props:(0,t.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"注册",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-user-reg",{slot:"page"})])}},meta:{name:"pages-user-reg",isNVue:!1,pagePath:"pages/user/reg",windowTop:44}},{path:"/pages/user/pwd",component:{render:function(e){return e("Page",{props:(0,t.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"找回密码",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-user-pwd",{slot:"page"})])}},meta:{name:"pages-user-pwd",isNVue:!1,pagePath:"pages/user/pwd",windowTop:44}},{path:"/pages/user/info",component:{render:function(e){return e("Page",{props:(0,t.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"个人资料",navigationBarBackgroundColor:"#b97d9f"})},[e("pages-user-info",{slot:"page"})])}},meta:{name:"pages-user-info",isNVue:!1,pagePath:"pages/user/info",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,a("c8ba"))},"6d8b":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch"),uni.getSystemInfo({success:function(e){e.windowWidth>510&&!window.top.isPC&&(window.location.pathname="/static/html/pc.html")}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},"851c":function(e,n,a){var t=a("4494");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=a("4f06").default;o("4bb40490",t,!0,{sourceMap:!1,shadowMode:!1})},b54e:function(e,n,a){"use strict";var t=a("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a("e143")),i=t(a("2f62"));o.default.use(i.default);var r=new i.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",city:""},mutations:{login:function(e,n){e.userName=n||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1},addCity:function(e,n){e.city=n}}}),u=r;n.default=u},b78c:function(e,n,a){"use strict";var t=a("851c"),o=a.n(t);o.a},bee9:function(e,n,a){"use strict";a.r(n);var t=a("6d8b"),o=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,function(){return t[e]})}(i);n["default"]=o.a},dc56:function(e,n,a){"use strict";var t,o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];a.d(n,"b",function(){return o}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return t})},dfca:function(e,n,a){"use strict";a.r(n);var t=a("dc56"),o=a("bee9");for(var i in o)"default"!==i&&function(e){a.d(n,e,function(){return o[e]})}(i);a("b78c");var r,u=a("f0c5"),s=Object(u["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);n["default"]=s.exports},e6eb:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={pages:{"pages/start/index":{navigationStyle:"custom",titleNView:!1},"pages/index/index":{navigationBarTitleText:"出发",navigationBarBackgroundColor:"#b97d9f"},"pages/friend/index":{navigationBarTitleText:"好友",navigationBarBackgroundColor:"#b97d9f"},"pages/photo/index":{navigationBarTitleText:"视听",navigationBarBackgroundColor:"#b97d9f"},"pages/user/user":{navigationBarTitleText:"MY",navigationBarBackgroundColor:"#b97d9f"},"pages/user/login":{navigationBarTitleText:"登录",navigationBarBackgroundColor:"#b97d9f"},"pages/user/reg":{navigationBarTitleText:"注册",navigationBarBackgroundColor:"#b97d9f"},"pages/user/pwd":{navigationBarTitleText:"找回密码",navigationBarBackgroundColor:"#b97d9f"},"pages/user/info":{navigationBarTitleText:"个人资料",navigationBarBackgroundColor:"#b97d9f"}},globalStyle:{navigationBarBackgroundColor:"#b97d9f",backgroundColor:"#b97d9f",background:"#477497"}};n.default=t},ea48:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={appid:"__UNI__0777B4E"};n.default=t}});