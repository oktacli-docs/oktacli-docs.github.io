(function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},2794:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("OktaCliDocs")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-tabs",{attrs:{"content-class":"mt-3",pills:"",fill:""}},e._l(e.platformOrder,(function(e){return n("b-tab",{key:e,attrs:{title:e}},[n(e,{key:e,tag:"component"})],1)})),1)],1)])},u=[],i=(n("a434"),n("e0c4")),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",[e._v("        choco install okta --version=0.4.0\n    ")])])}],f={name:"Windows"},p=f,d=n("2877"),v=Object(d["a"])(p,c,s,!1,null,null,null),m=v.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",[e._v("        brew cask install oktadeveloper/tap/okta\n    ")])])}],_={name:"macOS"},O=_,y=Object(d["a"])(O,b,h,!1,null,null,null),k=y.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",[e._v('    # Add Flathub repo\n    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n\n    # install the package\n    flatpak install com.okta.developer.CLI\n\n    # add this to your appropriate dot file\n    alias okta="flatpak run com.okta.developer.CLI"\n    ')])])}],x={name:"Linux"},j=x,S=Object(d["a"])(j,g,w,!1,null,null,null),$=S.exports,E={name:"Home",components:{Windows:m,MacOS:k,Linux:$},props:{msg:String},data:function(){return{}},computed:{platformOrder:function(){var e=["MacOS","Windows","Linux"];return i["a"].windows?this.move(e,1,0):i["a"].linux&&this.move(e,2,0),e}},methods:{move:function(e,t,n){e.splice(n,0,e.splice(t,1)[0])}}},P=E,M=(n("ef9f"),Object(d["a"])(P,l,u,!1,null,"1d63ec46",null)),L=M.exports,C={name:"App",components:{OktaCliDocs:L}},T=C,W=(n("034f"),Object(d["a"])(T,o,a,!1,null,null,null)),A=W.exports,D=n("5f5b"),I=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(D["a"]),r["default"].use(I["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,n){},ef9f:function(e,t,n){"use strict";var r=n("2794"),o=n.n(r);o.a}});
//# sourceMappingURL=app.40007685.js.map