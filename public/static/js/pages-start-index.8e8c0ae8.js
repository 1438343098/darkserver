(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-start-index"],{"1e9e":function(t,a,n){"use strict";n.r(a);var e=n("b155"),s=n("c54e");for(var i in s)"default"!==i&&function(t){n.d(a,t,function(){return s[t]})}(i);n("ab86");var r,o=n("f0c5"),u=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"76611617",null,!1,e["a"],r);a["default"]=u.exports},"451f":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".todo[data-v-76611617]{position:absolute;top:0;bottom:0;right:0;left:0;overflow:hidden}.todo>uni-text[data-v-76611617]{color:red}.todo .titles[data-v-76611617]{position:absolute;z-index:10;background:transparent;top:50%;left:50%;height:%?700?%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.todo .button[data-v-76611617]{position:absolute;bottom:0;background:transparent;text-align:center;left:50%;border:0;width:%?240?%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.todo .texts[data-v-76611617]{font-family:Times New Roman,Times,serif;color:rgba(160,137,137,.8);font-size:%?80?%;letter-spacing:%?2?%}.todo .upt[data-v-76611617]{display:inline-block;-webkit-transform:translateY(%?20?%);transform:translateY(%?20?%)}.todo .upt[data-v-76611617]:first-child{-webkit-animation:upts-data-v-76611617 5s infinite;animation:upts-data-v-76611617 5s infinite}.todo .upt[data-v-76611617]:nth-child(2){-webkit-animation:upts-data-v-76611617 5s infinite .5s;animation:upts-data-v-76611617 5s infinite .5s}.todo .upt[data-v-76611617]:nth-child(3){-webkit-animation:upts-data-v-76611617 5s infinite 1s;animation:upts-data-v-76611617 5s infinite 1s}.todo .upt[data-v-76611617]:nth-child(4){-webkit-animation:upts-data-v-76611617 5s infinite 1.5s;animation:upts-data-v-76611617 5s infinite 1.5s}.imgBg[data-v-76611617]{width:200%;height:100%;-webkit-animation:gor-data-v-76611617 30s linear infinite;animation:gor-data-v-76611617 30s linear infinite;position:fixed}@-webkit-keyframes gor-data-v-76611617{0%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(-50%);transform:translateX(-50%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes gor-data-v-76611617{0%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(-50%);transform:translateX(-50%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes upts-data-v-76611617{0%{-webkit-transform:translateY(%?20?%);transform:translateY(%?20?%)}50%{-webkit-transform:translateY(%?-20?%);transform:translateY(%?-20?%)}to{-webkit-transform:translateY(%?20?%);transform:translateY(%?20?%)}}@keyframes upts-data-v-76611617{0%{-webkit-transform:translateY(%?20?%);transform:translateY(%?20?%)}50%{-webkit-transform:translateY(%?-20?%);transform:translateY(%?-20?%)}to{-webkit-transform:translateY(%?20?%);transform:translateY(%?20?%)}}",""])},"4e69":function(t,a,n){var e=n("451f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=n("4f06").default;s("52d26137",e,!0,{sourceMap:!1,shadowMode:!1})},"9f32":function(t,a,n){"use strict";var e=n("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e(n("edb8")),i={onLoad:function(){console.log(s.default.getUsers()),setTimeout(function(){console.log(5555),uni.switchTab({url:"/pages/index/index"})},3e3)},methods:{goIndex:function(){uni.switchTab({url:"/pages/index/index"})}}};a.default=i},ab86:function(t,a,n){"use strict";var e=n("4e69"),s=n.n(e);s.a},b155:function(t,a,n){"use strict";var e,s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"todo"},[n("v-uni-view",{staticClass:"one",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goIndex.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"imgBg",attrs:{src:"/static/image/start.jpg"}}),n("v-uni-view",{staticClass:"titles"},[n("v-uni-text",{staticClass:"texts"},[t._v("darkSky")]),n("v-uni-button",{staticClass:"button",attrs:{type:"primary"}},[n("v-uni-text",{staticClass:"upt"},[t._v("融")]),n("v-uni-text",{staticClass:"upt"},[t._v("入")]),n("v-uni-text",{staticClass:"upt"},[t._v("夜")]),n("v-uni-text",{staticClass:"upt"},[t._v("空")])],1)],1)],1)],1)},i=[];n.d(a,"b",function(){return s}),n.d(a,"c",function(){return i}),n.d(a,"a",function(){return e})},c54e:function(t,a,n){"use strict";n.r(a);var e=n("9f32"),s=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,function(){return e[t]})}(i);a["default"]=s.a},edb8:function(t,a,n){"use strict";var e=n("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=e(n("f499")),i="USERS_KEY",r=function(){var t="";return t=uni.getStorageSync(i),t||(t="[]"),JSON.parse(t)},o=function(t){var a=r();a.push({account:t.account,password:t.password}),uni.setStorageSync(i,(0,s.default)(a))},u={getUsers:r,addUser:o};a.default=u}}]);