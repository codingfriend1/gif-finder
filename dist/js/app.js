webpackJsonp([5],{100:function(t,n,e){"use strict";function r(t){return function(){return e(102)("./"+t+".vue")}}var a=e(25),o=e(101);a.a.use(o.a),n.a=new o.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:r("Layout"),children:[{path:"/",component:r("Welcome")},{path:"dashboard",component:r("Dashboard")}]},{path:"*",component:r("Error404")}]})},102:function(t,n,e){function r(t){var n=a[t];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./Dashboard.vue":[136,3],"./Error404.vue":[137,2],"./Layout.vue":[138,1],"./Welcome.vue":[139,0]};r.keys=function(){return Object.keys(a)},r.id=102,t.exports=r},121:function(t,n,e){"use strict";var r=e(25),a=e(122),o=e.n(a);r.a.use(o.a),n.a={search:null,visibleGifUrl:null,matchingGIFs:[],isSearching:!1}},125:function(t,n){},127:function(t,n){},129:function(t,n){},130:function(t,n,e){"use strict";function r(t){e(131)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(132),o=e(133),u=e(49),i=r,c=u(a.a,o.a,!1,i,null,null);n.default=c.exports},131:function(t,n){},132:function(t,n,e){"use strict";n.a={}},133:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},a=[],o={render:r,staticRenderFns:a};n.a=o},53:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=window.to=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t,null]})}},55:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(50),a=e.n(r),o=e(51),u=e.n(o),i=e(52),c=e.n(i),s=e(25),f=e(48),l=e(100),h=e(121),d=e(53),p=e(54),v=e.n(p),m=e(126),g=(e.n(m),e(128));e.n(g);e(96),s.a.config.productionTip=!1,s.a.use(f.n),e(124),f.n.start(function(){new s.a({el:"#q-app",router:l.a,data:{store:h.a},methods:{search:function(t){var n=this;return c()(a.a.mark(function e(){var r,o,i,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.$store.isSearching=!0,e.next=3,Object(d.a)(v.a.get("https://api.giphy.com/v1/gifs/search",{params:{api_key:"Lt0ZPVfwAdej0NrmcRsxhLLxHWZA5g4M",q:t,limit:"3",rating:"pg",lang:"en"}}));case 3:r=e.sent,o=u()(r,2),i=o[0],c=o[1],n.$store.isSearching=!1,i?f.m.create({html:"Sorry but something went wrong an we could not find your gif...",timeout:4e3,color:"#f8c1c1"}):(n.$store.matchingGIFs=c.data.data,"/"===l.a.currentRoute.path&&l.a.push("/dashboard"));case 9:case"end":return e.stop()}},e,n)}))()},shareOptions:function(t){var n=void 0;if("IMG"!==t.target.tagName)return!1;n=t.target.src,f.a.create({title:"Share",gallery:!0,actions:[{label:"Share on Twitter",icon:"fa-twitter",handler:function(){Object(f.o)("https://twitter.com/intent/tweet?text="+n)}}]})}},render:function(t){return t(e(130).default)}})})},96:function(t,n){}},[55]);