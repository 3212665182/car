(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-169ee669"],{4195:function(a,t,e){},b81a:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{title:"搜索",fixed:!0,"left-arrow":"","left-text":"返回"},on:{"click-left":a.onClickLeft}}),e("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{input:a.onSearch},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}},[e("div",{attrs:{slot:"action"},on:{click:a.onSearch},slot:"action"},[a._v("搜索")])]),a.flag?e("van-row",a._l(a.carList,(function(t,n){return e("van-col",{key:n,attrs:{span:"8"}},[e("van-button",{attrs:{type:"default"},on:{click:function(e){return a.toCarInfo(t.SerialID)}}},[a._v(a._s(t.AliasName))])],1)})),1):e("van-cell-group",a._l(a.suglist,(function(t,n){return e("van-cell",{key:n,attrs:{title:t.name},on:{click:function(e){return a.toCarInfo(t.id)}}})})),1)],1)},r=[],i=(e("96cf"),e("89ba")),l=e("365c"),s={data:function(){return{value:"",flag:!0,suglist:[],carList:[{AliasName:"享域",SerialID:5644},{AliasName:"思域",SerialID:1661},{AliasName:"雅阁",SerialID:2406},{AliasName:"轩逸",SerialID:1699},{AliasName:"速腾",SerialID:1765},{AliasName:"卡罗拉",SerialID:1879},{AliasName:"帕萨特",SerialID:1796},{AliasName:"宝马3系",SerialID:1729},{AliasName:"迈腾",SerialID:1909}]}},methods:{onClickLeft:function(){this.$router.go(-1)},toCarInfo:function(a){this.$router.push({path:"/carinfo",query:{SerialID:a}})},onSearch:function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(t){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["j"](t);case 2:e=a.sent,this.suglist=e.Data.suglist;case 4:case"end":return a.stop()}}),a,this)})));function t(t){return a.apply(this,arguments)}return t}()},watch:{value:function(a){0===a.length?this.flag=!0:this.flag=!1}}},c=s,o=(e("daa7"),e("2877")),u=Object(o["a"])(c,n,r,!1,null,null,null);t["default"]=u.exports},daa7:function(a,t,e){"use strict";var n=e("4195"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-169ee669.a87ee864.js.map