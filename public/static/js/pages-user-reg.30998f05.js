(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-reg"],{"1b0f":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"todo"},[i("v-uni-view",{staticClass:"lo_hd"},[i("Icon",{attrs:{type:"&#xe74d;",size:"50",color:"#00355f"}})],1),i("v-uni-view",{staticClass:"inputs"},[i("v-uni-text",{staticClass:"lo_text"},[t._v("ID号:")]),i("v-uni-input",{staticClass:"input_end",attrs:{"placeholder-style":"color:#00355f",placeholder:"请输入账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),i("v-uni-view",{staticClass:"inputs"},[i("v-uni-text",{staticClass:"lo_text"},[t._v("密码:")]),i("v-uni-input",{staticClass:"input_end",attrs:{"placeholder-style":"color:#00355f",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"inputs"},[i("v-uni-text",{staticClass:"lo_text"},[t._v("邮箱：")]),i("v-uni-input",{staticClass:"input_end",attrs:{"placeholder-style":"color:#00355f",type:"text",placeholder:"请输入邮箱号码"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-uni-view",{staticClass:"lo_btn"},[i("v-uni-button",{staticClass:"login",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("注册")])],1),i("v-uni-view",{staticClass:"action-row"},[i("v-uni-navigator",{attrs:{url:"../user/login"}},[t._v("立即登录")]),i("v-uni-navigator",{attrs:{url:"../user/pwd"}},[t._v("忘记密码")])],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"3c6e":function(t,e,i){"use strict";i.r(e);var a=i("1b0f"),n=i("d2a2");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("53fa");var s,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"9db072fc",null,!1,a["a"],s);e["default"]=l.exports},"53fa":function(t,e,i){"use strict";var a=i("fd6b"),n=i.n(a);n.a},6192:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o="USERS_KEY",s=function(){var t="";return t=uni.getStorageSync(o),t||(t="[]"),JSON.parse(t)},c=function(t){var e=s();e.push({account:t.account,password:t.password}),uni.setStorageSync(o,(0,n.default)(e))},l={getUsers:s,addUser:c};e.default=l},ae4d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".iconfont[data-v-9db072fc]{color:#00355f}.imgs[data-v-9db072fc]{width:60%;height:60%}.todo[data-v-9db072fc]{width:100%;height:100%;background:#ffdcf7}.todo .lo_hd[data-v-9db072fc]{text-align:center;padding-top:%?200?%}.todo .login[data-v-9db072fc]{background:#a990cc;color:#00355f}.todo .inputs[data-v-9db072fc]{margin:%?30?% %?60?%;margin-top:%?50?%;border-bottom:%?1?% solid #00355f;color:#00355f;padding-bottom:%?20?%}.todo .lo_btn[data-v-9db072fc]{margin:%?30?% %?60?%;margin-top:%?70?%}.todo .lo_text[data-v-9db072fc]{font-size:%?30?%;display:inline-block;line-height:%?80?%}.todo .input_end[data-v-9db072fc]{display:inline-block;line-height:%?80?%;height:%?80?%;vertical-align:top;padding-left:%?20?%}.action-row[data-v-9db072fc]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 %?40?%;color:#00355f;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.oauth-row[data-v-9db072fc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:0;left:0;width:100%}.oauth-image[data-v-9db072fc]{width:%?100?%;height:%?100?%;border-radius:%?100?%;margin:0 %?40?%;border:1px solid #00355f;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#477497}",""])},d2a2:function(t,e,i){"use strict";i.r(e);var a=i("d306"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},d306:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6192")),o={data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)uni.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)uni.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))uni.showToast({icon:"none",title:"邮箱地址不合法"});else{var t={account:this.account,password:this.password,email:this.email};n.default.addUser(t),uni.showToast({title:"注册成功"}),uni.navigateBack({delta:1})}}}};e.default=o},fd6b:function(t,e,i){var a=i("ae4d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("555ad934",a,!0,{sourceMap:!1,shadowMode:!1})}}]);