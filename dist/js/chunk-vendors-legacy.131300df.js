(self["webpackChunklottery_game"]=self["webpackChunklottery_game"]||[]).push([[998],{1294:function(t,e,n){"use strict";n.d(e,{ET:function(){return wh},hJ:function(){return _l},oe:function(){return yh},JU:function(){return El},PL:function(){return vh},ad:function(){return Sl},Xo:function(){return lh},IO:function(){return oh},Bt:function(){return _h},ar:function(){return ch}});var r,i=n(2238),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var I=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=m(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function k(t){t:{var e=Gn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function x(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var R,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var j=M.userAgent;if(j){R=j;break t}}R=""}function U(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function F(t){const e={};for(const n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function B(t){return B[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=f;var z,H=L(R,"Opera"),G=L(R,"Trident")||L(R,"MSIE"),K=L(R,"Edge"),W=K||G,X=L(R,"Gecko")&&!(L(R.toLowerCase(),"webkit")&&!L(R,"Edge"))&&!(L(R,"Trident")||L(R,"MSIE"))&&!L(R,"Edge"),Y=L(R.toLowerCase(),"webkit")&&!L(R,"Edge");function J(){var t=h.document;return t?t.documentMode:void 0}t:{var Q="",Z=function(){var t=R;return X?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):H?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Q=Z?Z[1]:""),G){var tt=J();if(null!=tt&&tt>parseFloat(Q)){z=String(tt);break t}}z=Q}var et,nt={};function rt(){return q((function(){let t=0;const e=D(String(z)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&G){var it=J();et=it||(parseInt(z,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{B(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=A(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function wt(t,e,n,r,i){if(r&&r.once)return Et(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ct(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_t(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(St(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function Et(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Et(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ot(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,r,i),-1<n&&(dt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&It(n))}function It(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])mt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(St(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ct(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):dt(t)}}}function St(t){return t in yt?yt[t]:yt[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&It(t),t=n.call(r,e)}return t}function Ct(t){return t=t[vt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function xt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),$(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rt(o,r,!0,e)&&i}if(o=e.g=t,i=Rt(o,r,!0,e)&&i,i=Rt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rt(o,r,!1,e)&&i}function Rt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(xt,T),xt.prototype[lt]=!0,xt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},xt.prototype.M=function(){if(xt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},xt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},xt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,jt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ut),(t=>t.reset()));class Ut{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ft(t){h.setTimeout((()=>{throw t}),0)}function Vt(t,e){Mt||$t(),Bt||(Mt(),Bt=!0),qt.add(t,e)}function $t(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(zt)}}var Bt=!1,qt=new Pt;function zt(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ft(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function Ht(t,e){xt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Ht,xt),r=Ht.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(Gt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ht.Z.M.call(this),Gt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){T.call(this),this.h=t,this.g={}}E(Yt,T);var Jt=[];function Qt(t,e,n,r){Array.isArray(n)||(n&&(Jt[0]=n.toString()),n=Jt);for(var i=0;i<n.length;i++){var s=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){U(t.g,(function(t,e){this.g.hasOwnProperty(e)&&It(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Dt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Zt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new xt}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();Nt(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Nt(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",E(ue,at),oe.STAT_EVENT="statevent",E(he,at),oe.Na="timingevent",E(de,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function we(){}ve.prototype.h=null;var be,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ie(){}function Se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Yt(this),this.P=Ce,t=W?125:void 0,this.W=new Ht(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ie,ve),Ie.prototype.g=function(){return new XMLHttpRequest},Ie.prototype.i=function(){return{}},be=new Ie;var Ce=45e3,ke={},Oe={};function xe(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Pe(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ae,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Qt(t.V,t.g,"readystatechange",t.gb),e=t.H?F(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==Oe){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),Ve(t,r)}Re(t)&&r!=Oe&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Fe(t),Ue(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?Oe:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function je(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ue(t){0==t.l.G||t.I||yr(t.l,t)}function Fe(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Sn(n.i,t)))if(n.I=t.N,!t.J&&Sn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),sr(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=In(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&vr(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(An(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(je(a),Pe(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function $e(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=$e(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ze(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];He(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],He(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function He(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Se.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Qn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Qn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=f?3:2),je(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Fe(this),Ue(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Fe(this),Ue(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.U?(De(this,l,o),W&&this.i&&3==l&&(Qt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Ve(this,o)),4==l&&Fe(this),this.i&&!this.I&&(4==l?yr(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Fe(this),Ue(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Qn(this.g),e=this.g.ga();this.C<e.length&&(je(this),De(this,t,e),this.i&&4!=t&&Pe(this))}},r.cancel=function(){this.I=!0,Fe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),fe(17)),Fe(this),this.o=2,Ue(this)):Me(this,this.Y-t)},r=qe.prototype,r.R=function(){ze(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return ze(this),this.g.concat()},r.get=function(t,e){return He(this.h,t)?this.h[t]:e},r.set=function(t,e){He(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Je(this,t.i),Qe(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=sn(n[2]||""),Je(this,n[3]||"",!0),Qe(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Xe(t){return new We(t)}function Ye(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Je(t,e,n){t.i=n?sn(e,!0):e}function Qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Xe(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Ye(i,t),e&&Je(i,e),n&&Qe(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){pn(t),e=yn(t,e),He(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,He(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ze(t)))}function gn(t,e){return pn(t),e=yn(t,e),He(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),x(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){C(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=O(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function In(t){return t.h?1:t.g?t.g.size:0}function Sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return x(t.i)}function On(){}function xn(){this.g=new On}function Nn(t,e,n){const r=n||"";try{Be(t,(function(t,n){let i=t;p(t)&&(i=Dt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=_(Dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Dn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Dn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){xt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Ln,ve),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),E(Pn,xt);var Mn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Un(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fn(t)}function Fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Pn.prototype,r.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Mn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Un(this):Fn(this),3==this.readyState&&jn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Un(this))},r.Ta=function(t){this.g&&(this.response=t,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=h.JSON.parse;function $n(t){xt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}E($n,xt);var Bn="",qn=/^https?$/i,zn=["POST","PUT"];function Hn(t){return G&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Yn(t)}function Wn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Qn(t)||2!=t.ba()))if(t.v&&4==Qn(t))Kt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Qn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ge)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var o=2<Qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Jn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Nt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Qn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return U(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new xn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Se(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}_r(t)}function sr(t){t.g&&(mr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function ur(t,e){return!(In(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),xe(n,r,e)}function hr(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{Nn(a,t,"req"+n+"_")}catch(Jr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function mr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,Ne(n,t)}function vr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){vr(t),mr(t),t.g=null;var r=2}else{if(!Sn(t.i,e))return;n=e.D,Cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Nt(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ye(n,"https"),en(n)),Rn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),_r(t),or(t)}function _r(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,x(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=nn(n);if(""!=r.i)e&&Je(r,e+"."+r.i),Qe(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&U(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $n(new Ln({ib:!0})):new $n(t.qa),e.L=t.H,e}function Ir(){}function Sr(){if(G&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function Ar(t,e){xt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}function Cr(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function Or(t){this.g=t}r=$n.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const i=new qe(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=k(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=A(zn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),$n.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Se(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=F(s),$(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,xe(i,n,null)):xe(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Ir.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(t,e){return new Ar(t,e)},E(Ar,xt),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),cr(t)},Ar.prototype.close=function(){ir(this.g)},Ar.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ar(this.g,e)):ar(this.g,t)},Ar.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Ar.Z.M.call(this)},E(Cr,Ee),E(kr,Te),E(Or,Ir),Or.prototype.xa=function(){Nt(this.g,"a")},Or.prototype.wa=function(t){Nt(this.g,new Cr(t))},Or.prototype.va=function(t){Nt(this.g,new kr(t))},Or.prototype.ua=function(){Nt(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",we.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",xt.prototype.listen=xt.prototype.N,$n.prototype.listenOnce=$n.prototype.O,$n.prototype.getLastError=$n.prototype.La,$n.prototype.getLastErrorCode=$n.prototype.Da,$n.prototype.getStatus=$n.prototype.ba,$n.prototype.getResponseJson=$n.prototype.Qa,$n.prototype.getResponseText=$n.prototype.ga,$n.prototype.send=$n.prototype.ea;var xr=u.createWebChannelTransport=function(){return new Sr},Nr=u.getStatEventTarget=function(){return ce()},Rr=u.ErrorCode=me,Dr=u.EventType=ge,Lr=u.Event=oe,Pr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Ln,jr=u.WebChannel=we,Ur=u.XhrIo=$n;const Fr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $r="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new o.Yd("@firebase/firestore");function qr(){return Br.logLevel}function zr(t,...e){if(Br.logLevel<=o["in"].DEBUG){const n=e.map(Kr);Br.debug(`Firestore (${$r}): ${t}`,...n)}}function Hr(t,...e){if(Br.logLevel<=o["in"].ERROR){const n=e.map(Kr);Br.error(`Firestore (${$r}): ${t}`,...n)}}function Gr(t,...e){if(Br.logLevel<=o["in"].WARN){const n=e.map(Kr);Br.warn(`Firestore (${$r}): ${t}`,...n)}}function Kr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+t;throw Hr(e),new Error(e)}function Xr(t,e){t||Wr()}function Yr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new Vr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=Vr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.A=-1;class ui{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ci(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function li(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qr(Jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qr(Jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qr(Jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qr(Jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return fi.fromMillis(Date.now())}static fromDate(t){return fi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new fi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?li(this.nanoseconds,t.nanoseconds):li(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new fi(0,0))}static max(){return new di(new fi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yi extends vi{construct(t,e,n){return new yi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qr(Jr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new yi(e)}static emptyPath(){return new yi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bi extends vi{construct(t,e,n){return new bi(t,e,n)}static isValidIdentifier(t){return wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Qr(Jr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Qr(Jr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qr(Jr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Qr(Jr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bi(e)}static emptyPath(){return new bi([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.fields=t,t.sort(bi.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ei(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ei(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return li(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ei.EMPTY_BYTE_STRING=new Ei("");const Ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=Ti.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Si(t.seconds),nanos:Si(t.nanos)}}function Si(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ai(t){return"string"==typeof t?Ei.fromBase64String(t):Ei.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Ci(e)?ki(e):e}function Oi(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new fi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ni{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ni&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){return null==t}function Di(t){return 0===t&&1/t==-1/0}function Li(t){return"number"==typeof t&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.path=t}static fromPath(t){return new Pi(yi.fromString(t))}static fromName(t){return new Pi(yi.fromString(t).popFirst(5))}static empty(){return new Pi(yi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===yi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Pi(new yi(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ci(t)?4:Yi(t)?9:10:Wr()}function ji(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ii(t.timestampValue),r=Ii(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ai(t.bytesValue).isEqual(Ai(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Si(t.geoPointValue.latitude)===Si(e.geoPointValue.latitude)&&Si(t.geoPointValue.longitude)===Si(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Si(t.integerValue)===Si(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Si(t.doubleValue),r=Si(e.doubleValue);return n===r?Di(n)===Di(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],ji);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(pi(n)!==pi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ji(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function Ui(t,e){return void 0!==(t.values||[]).find((t=>ji(t,e)))}function Fi(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return li(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return li(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Si(t.integerValue||t.doubleValue),r=Si(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Vi(t.timestampValue,e.timestampValue);case 4:return Vi(Oi(t),Oi(e));case 5:return li(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ai(t),r=Ai(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=li(n[i],r[i]);if(0!==t)return t}return li(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=li(Si(t.latitude),Si(e.latitude));return 0!==n?n:li(Si(t.longitude),Si(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Fi(n[i],r[i]);if(t)return t}return li(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=li(r[o],s[o]);if(0!==t)return t;const e=Fi(n[r[o]],i[s[o]]);if(0!==e)return e}return li(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function Vi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return li(t,e);const n=Ii(t),r=Ii(e),i=li(n.seconds,r.seconds);return 0!==i?i:li(n.nanos,r.nanos)}function $i(t){return Bi(t)}function Bi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ii(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ai(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Pi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Bi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Bi(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function qi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zi(t){return!!t&&"integerValue"in t}function Hi(t){return!!t&&"arrayValue"in t}function Gi(t){return!!t&&"nullValue"in t}function Ki(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wi(t){return!!t&&"mapValue"in t}function Xi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Xi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.value=t}static empty(){return new Ji({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xi(e)}setAll(t){let e=bi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Xi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Wi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ji(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Wi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ji(Xi(this.value))}}function Qi(t){const e=[];return mi(t.fields,((t,n)=>{const r=new bi([t]);if(Wi(n)){const t=Qi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new _i(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zi{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new Zi(t,0,di.min(),di.min(),Ji.empty(),0)}static newFoundDocument(t,e,n){return new Zi(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new Zi(t,2,e,di.min(),Ji.empty(),0)}static newUnknownDocument(t,e){return new Zi(t,3,e,di.min(),Ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Zi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ts{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ts.UNKNOWN_ID=-1;function es(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new fi(n+1,0):new fi(n,r));return new rs(i,Pi.empty(),e)}function ns(t){return new rs(t.readTime,t.key,-1)}class rs{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rs(di.min(),Pi.empty(),-1)}static max(){return new rs(di.max(),Pi.empty(),-1)}}function is(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Pi.comparator(t.documentKey,e.documentKey),0!==n?n:li(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function os(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ss(t,e,n,r,i,s,o)}function as(t){const e=Yr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+$i(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>$i(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>$i(t))).join(",")),e.P=t}return e.P}function cs(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${$i(e.value)}`;var e})).join(", ")}]`),Ri(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>$i(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>$i(t))).join(",")),`Target(${e})`}function us(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Es(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ji(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Is(t.startAt,e.startAt)&&Is(t.endAt,e.endAt)}function ls(t){return Pi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class hs extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new fs(t,e,n):"array-contains"===e?new gs(t,n):"in"===e?new vs(t,n):"not-in"===e?new ys(t,n):"array-contains-any"===e?new ws(t,n):new hs(t,e,n)}static V(t,e,n){return"in"===e?new ds(t,n):new ps(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Fi(e,this.value)):null!==e&&Mi(this.value)===Mi(e)&&this.v(Fi(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fs extends hs{constructor(t,e,n){super(t,e,n),this.key=Pi.fromName(n.referenceValue)}matches(t){const e=Pi.comparator(t.key,this.key);return this.v(e)}}class ds extends hs{constructor(t,e){super(t,"in",e),this.keys=ms("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ps extends hs{constructor(t,e){super(t,"not-in",e),this.keys=ms("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ms(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Pi.fromName(t.referenceValue)))}class gs extends hs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hi(e)&&Ui(e.arrayValue,this.value)}}class vs extends hs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ui(this.value.arrayValue,e)}}class ys extends hs{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ui(this.value.arrayValue,e)}}class ws extends hs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ui(this.value.arrayValue,t)))}}class bs{constructor(t,e){this.position=t,this.inclusive=e}}class _s{constructor(t,e="asc"){this.field=t,this.dir=e}}function Es(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ts(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Pi.comparator(Pi.fromName(o.referenceValue),n.key):Fi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Is(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ji(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function As(t,e,n,r,i,s,o,a){return new Ss(t,e,n,r,i,s,o,a)}function Cs(t){return new Ss(t)}function ks(t){return!Ri(t.limit)&&"F"===t.limitType}function Os(t){return!Ri(t.limit)&&"L"===t.limitType}function xs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ns(t){for(const e of t.filters)if(e.S())return e.field;return null}function Rs(t){return null!==t.collectionGroup}function Ds(t){const e=Yr(t);if(null===e.D){e.D=[];const t=Ns(e),n=xs(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new _s(t)),e.D.push(new _s(bi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new _s(bi.keyField(),t))}}}return e.D}function Ls(t){const e=Yr(t);if(!e.C)if("F"===e.limitType)e.C=os(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ds(e)){const e="desc"===i.dir?"asc":"desc";t.push(new _s(i.field,e))}const n=e.endAt?new bs(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new bs(e.startAt.position,!e.startAt.inclusive):null;e.C=os(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function Ps(t,e,n){return new Ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ms(t,e){return us(Ls(t),Ls(e))&&t.limitType===e.limitType}function js(t){return`${as(Ls(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${cs(Ls(t))}; limitType=${t.limitType})`}function Fs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Pi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ts(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ds(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ts(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ds(t),e))}(t,e)}function Vs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $s(t){return(e,n)=>{let r=!1;for(const i of Ds(t)){const t=Bs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bs(t,e,n){const r=t.field.isKeyField()?Pi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Fi(r,i):Wr()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function zs(t){return{integerValue:""+t}}function Hs(t,e){return Li(e)?zs(e):qs(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this._=void 0}}function Ks(t,e,n){return t instanceof Ys?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Js?Qs(t,e):t instanceof Zs?to(t,e):function(t,e){const n=Xs(t,e),r=no(n)+no(t.k);return zi(n)&&zi(t.k)?zs(r):qs(t.M,r)}(t,e)}function Ws(t,e,n){return t instanceof Js?Qs(t,e):t instanceof Zs?to(t,e):n}function Xs(t,e){return t instanceof eo?zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ys extends Gs{}class Js extends Gs{constructor(t){super(),this.elements=t}}function Qs(t,e){const n=ro(e);for(const r of t.elements)n.some((t=>ji(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Gs{constructor(t){super(),this.elements=t}}function to(t,e){let n=ro(e);for(const r of t.elements)n=n.filter((t=>!ji(t,r)));return{arrayValue:{values:n}}}class eo extends Gs{constructor(t,e){super(),this.M=t,this.k=e}}function no(t){return Si(t.integerValue||t.doubleValue)}function ro(t){return Hi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,e){this.field=t,this.transform=e}}function so(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Js&&e instanceof Js||t instanceof Zs&&e instanceof Zs?hi(t.elements,e.elements,ji):t instanceof eo&&e instanceof eo?ji(t.k,e.k):t instanceof Ys&&e instanceof Ys}(t.transform,e.transform)}class oo{constructor(t,e){this.version=t,this.transformResults=e}}class ao{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ao}static exists(t){return new ao(void 0,t)}static updateTime(t){return new ao(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function co(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class uo{}function lo(t,e,n){t instanceof go?function(t,e,n){const r=t.value.clone(),i=wo(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof vo?function(t,e,n){if(!co(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=wo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(yo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n){t instanceof go?function(t,e,n){if(!co(t.precondition,e))return;const r=t.value.clone(),i=bo(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(mo(e),r).setHasLocalMutations()}(t,e,n):t instanceof vo?function(t,e,n){if(!co(t.precondition,e))return;const r=bo(t.fieldTransforms,n,e),i=e.data;i.setAll(yo(t)),i.setAll(r),e.convertToFoundDocument(mo(e),i).setHasLocalMutations()}(t,e,n):function(t,e){co(t.precondition,e)&&e.convertToNoDocument(di.min())}(t,e)}function fo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Xs(r.transform,t||null);null!=i&&(null==n&&(n=Ji.empty()),n.set(r.field,i))}return n||null}function po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hi(t,e,((t,e)=>so(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function mo(t){return t.isFoundDocument()?t.version:di.min()}class go extends uo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class vo extends uo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function yo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function wo(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ws(o,a,n[i]))}return r}function bo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Ks(t,s,e))}return r}class _o extends uo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Eo extends uo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io,So;function Ao(t){switch(t){default:return Wr();case Jr.CANCELLED:case Jr.UNKNOWN:case Jr.DEADLINE_EXCEEDED:case Jr.RESOURCE_EXHAUSTED:case Jr.INTERNAL:case Jr.UNAVAILABLE:case Jr.UNAUTHENTICATED:return!1;case Jr.INVALID_ARGUMENT:case Jr.NOT_FOUND:case Jr.ALREADY_EXISTS:case Jr.PERMISSION_DENIED:case Jr.FAILED_PRECONDITION:case Jr.ABORTED:case Jr.OUT_OF_RANGE:case Jr.UNIMPLEMENTED:case Jr.DATA_LOSS:return!0}}function Co(t){if(void 0===t)return Hr("GRPC error has no .code"),Jr.UNKNOWN;switch(t){case Io.OK:return Jr.OK;case Io.CANCELLED:return Jr.CANCELLED;case Io.UNKNOWN:return Jr.UNKNOWN;case Io.DEADLINE_EXCEEDED:return Jr.DEADLINE_EXCEEDED;case Io.RESOURCE_EXHAUSTED:return Jr.RESOURCE_EXHAUSTED;case Io.INTERNAL:return Jr.INTERNAL;case Io.UNAVAILABLE:return Jr.UNAVAILABLE;case Io.UNAUTHENTICATED:return Jr.UNAUTHENTICATED;case Io.INVALID_ARGUMENT:return Jr.INVALID_ARGUMENT;case Io.NOT_FOUND:return Jr.NOT_FOUND;case Io.ALREADY_EXISTS:return Jr.ALREADY_EXISTS;case Io.PERMISSION_DENIED:return Jr.PERMISSION_DENIED;case Io.FAILED_PRECONDITION:return Jr.FAILED_PRECONDITION;case Io.ABORTED:return Jr.ABORTED;case Io.OUT_OF_RANGE:return Jr.OUT_OF_RANGE;case Io.UNIMPLEMENTED:return Jr.UNIMPLEMENTED;case Io.DATA_LOSS:return Jr.DATA_LOSS;default:return Wr()}}(So=Io||(Io={}))[So.OK=0]="OK",So[So.CANCELLED=1]="CANCELLED",So[So.UNKNOWN=2]="UNKNOWN",So[So.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",So[So.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",So[So.NOT_FOUND=5]="NOT_FOUND",So[So.ALREADY_EXISTS=6]="ALREADY_EXISTS",So[So.PERMISSION_DENIED=7]="PERMISSION_DENIED",So[So.UNAUTHENTICATED=16]="UNAUTHENTICATED",So[So.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",So[So.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",So[So.ABORTED=10]="ABORTED",So[So.OUT_OF_RANGE=11]="OUT_OF_RANGE",So[So.UNIMPLEMENTED=12]="UNIMPLEMENTED",So[So.INTERNAL=13]="INTERNAL",So[So.UNAVAILABLE=14]="UNAVAILABLE",So[So.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){mi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.comparator=t,this.root=e||No.EMPTY}insert(t,e){return new Oo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,No.BLACK,null,null))}remove(t){return new Oo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,No.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xo(this.root,t,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xo(this.root,t,this.comparator,!0)}}class xo{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class No{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:No.RED,this.left=null!=r?r:No.EMPTY,this.right=null!=i?i:No.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new No(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return No.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return No.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,No.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,No.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}No.EMPTY=null,No.RED=!0,No.BLACK=!1,No.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new No(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.comparator=t,this.data=new Oo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(t){return new Do(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ro))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ro(this.comparator);return e.data=t,e}}class Do{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lo=new Oo(Pi.comparator);function Po(){return Lo}const Mo=new Oo(Pi.comparator);function jo(){return Mo}function Uo(){return new ko((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Fo=new Oo(Pi.comparator),Vo=new Ro(Pi.comparator);function $o(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const Bo=new Ro(li);function qo(){return Bo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ho.createSynthesizedTargetChangeForCurrentChange(t,e)),new zo(di.min(),n,qo(),Po(),$o())}}class Ho{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ho(Ei.EMPTY_BYTE_STRING,e,$o(),$o(),$o())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Ko{constructor(t,e){this.targetId=t,this.$=e}}class Wo{constructor(t,e,n=Ei.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xo{constructor(){this.B=0,this.L=Qo(),this.U=Ei.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=$o(),e=$o(),n=$o();return this.L.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Wr()}})),new Ho(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=Qo()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Yo{constructor(t){this.nt=t,this.st=new Map,this.it=Po(),this.rt=Jo(),this.ot=new Ro(li)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Wr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(ls(t))if(0===n){const n=new Pi(t.path);this.ct(e,n,Zi.newNoDocument(n,di.min()))}else Xr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ls(i.target)){const e=new Pi(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,Zi.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}}));let n=$o();this.rt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const r=new zo(t,e,this.ot,this.it,n);return this.it=Po(),this.rt=Jo(),this.ot=new Ro(li),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Xo,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Ro(li),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||zr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Xo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Jo(){return new Oo(Pi.comparator)}function Qo(){return new Oo(Pi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ta=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ea{constructor(t,e){this.databaseId=t,this.N=e}}function na(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ra(t,e){return t.N?e.toBase64():e.toUint8Array()}function ia(t,e){return na(t,e.toTimestamp())}function sa(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Ii(t);return new fi(e.seconds,e.nanos)}(t))}function oa(t,e){return function(t){return new yi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function aa(t){const e=yi.fromString(t);return Xr(xa(e)),e}function ca(t,e){return oa(t.databaseId,e.path)}function ua(t,e){const n=aa(e);if(n.get(1)!==t.databaseId.projectId)throw new Qr(Jr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Qr(Jr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Pi(da(n))}function la(t,e){return oa(t.databaseId,e)}function ha(t){const e=aa(t);return 4===e.length?yi.emptyPath():da(e)}function fa(t){return new yi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function da(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function pa(t,e,n){return{name:ca(t,e),fields:n.value.mapValue.fields}}function ma(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.N?(Xr(void 0===e||"string"==typeof e),Ei.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),Ei.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Jr.UNKNOWN:Co(t.code);return new Qr(e,t.message||"")}(o);n=new Wo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ua(t,r.document.name),s=sa(r.document.updateTime),o=new Ji({mapValue:{fields:r.document.fields}}),a=Zi.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Go(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ua(t,r.document),s=r.readTime?sa(r.readTime):di.min(),o=Zi.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ua(t,r.document),s=r.removedTargetIds||[];n=new Go([],s,i,null)}else{if(!("filter"in e))return Wr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new To(r),s=t.targetId;n=new Ko(s,i)}}return n}function ga(t,e){let n;if(e instanceof go)n={update:pa(t,e.key,e.value)};else if(e instanceof _o)n={delete:ca(t,e.key)};else if(e instanceof vo)n={update:pa(t,e.key,e.data),updateMask:Oa(e.fieldMask)};else{if(!(e instanceof Eo))return Wr();n={verify:ca(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ys)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Js)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ia(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function va(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?sa(t.updateTime):sa(e);return n.isEqual(di.min())&&(n=sa(e)),new oo(n,t.transformResults||[])}(t,e)))):[]}function ya(t,e){return{documents:[la(t,e.path)]}}function wa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=la(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=la(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ki(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NAN"}};if(Gi(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ki(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NOT_NAN"}};if(Gi(t.value))return{unaryFilter:{field:Sa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sa(t.field),op:Ia(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Sa(t.field),direction:Ta(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||Ri(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ba(t){let e=ha(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ea(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new _s(Aa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ri(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new bs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new bs(n,e)}(n.endAt)),As(e,i,o,s,a,"F",c,u)}function _a(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ea(t){return t?void 0!==t.unaryFilter?[ka(t)]:void 0!==t.fieldFilter?[Ca(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ea(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function Ta(t){return Zo[t]}function Ia(t){return ta[t]}function Sa(t){return{fieldPath:t.canonicalString()}}function Aa(t){return bi.fromServerFormat(t.fieldPath)}function Ca(t){return hs.create(Aa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Aa(t.unaryFilter.field);return hs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Aa(t.unaryFilter.field);return hs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Aa(t.unaryFilter.field);return hs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Aa(t.unaryFilter.field);return hs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function Oa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ra=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Da="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pa(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pa?e:Pa.resolve(e)}catch(t){return Pa.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pa.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pa.reject(e)}static resolve(t){return new Pa(((e,n)=>{e(t)}))}static reject(t){return new Pa(((e,n)=>{n(t)}))}static waitFor(t){return new Pa(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Pa.resolve(!1);for(const n of t)e=e.next((t=>t?Pa.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&lo(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&ho(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&ho(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(di.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$o())}isEqual(t){return this.batchId===t.batchId&&hi(this.mutations,t.mutations,((t,e)=>po(t,e)))&&hi(this.baseMutations,t.baseMutations,((t,e)=>po(t,e)))}}class Ua{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=Fo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ua(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,r,i=di.min(),s=di.min(),o=Ei.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.Jt=t}}function Ba(t){const e=ba({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ps(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Si(t.integerValue));else if("doubleValue"in t){const n=Si(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Di(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Ai(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Yi(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Wr()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),Pi.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}qa.fe=new qa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){this.qe=new Ha}addToCollectionParentIndex(t,e){return this.qe.add(e),Pa.resolve()}getCollectionParents(t,e){return Pa.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Pa.resolve()}deleteFieldIndex(t,e){return Pa.resolve()}getDocumentsMatchingTarget(t,e){return Pa.resolve(null)}getFieldIndex(t,e){return Pa.resolve(null)}getFieldIndexes(t,e){return Pa.resolve([])}getNextCollectionGroupToUpdate(t){return Pa.resolve(null)}updateCollectionGroup(t,e,n){return Pa.resolve()}updateIndexEntries(t,e){return Pa.resolve()}}class Ha{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ro(yi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ro(yi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ga{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ga(t,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.DEFAULT_COLLECTION_PERCENTILE=10,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ga.DEFAULT=new Ga(41943040,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ga.DISABLED=new Ga(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Ka(0)}static yn(){return new Ka(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wa(t){if(t.code!==Jr.FAILED_PRECONDITION||t.message!==Da)throw t;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(){this.changes=new ko((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Zi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pa.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Pi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Rs(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Pi(e)).next((t=>{let e=jo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const r=e.collectionGroup;let i=jo();return this.indexManager.getCollectionParents(t,r).next((s=>Pa.forEach(s,(s=>{const o=function(t,e){return new Ss(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let r;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Zi.newInvalidDocument(n),r=r.insert(n,i)),ho(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((t,n)=>{Fs(e,n)||(r=r.remove(t))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=r}static Ys(t,e){let n=$o(),r=$o();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ja(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{Xs(t){this.Zs=t}Qs(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(di.min())?this.ti(t,e):this.Zs.Ks(t,r).next((i=>{const s=this.ei(e,i);return(ks(e)||Os(e))&&this.ni(e.limitType,s,r,n)?this.ti(t,e):(qr()<=o["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Us(e)),this.Zs.Qs(t,e,es(n,-1)).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ei(t,e){let n=new Ro($s(t));return e.forEach(((e,r)=>{Fs(t,r)&&(n=n.add(r))})),n}ni(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(t,e){return qr()<=o["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Us(e)),this.Zs.Qs(t,e,rs.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,r){this.persistence=t,this.si=e,this.M=r,this.ii=new Oo(li),this.ri=new ko((t=>as(t)),us),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new Ya(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ii)))}}function tc(t,e,n,r){return new Za(t,e,n,r)}async function ec(t,e){const n=Yr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.Bs.getAllMutationBatches(t).next((i=>(r=i,n.ai(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=$o();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next((t=>({hi:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function nc(t,e){const n=Yr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Pa.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,r)))}))}function rc(t){const e=Yr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function ic(t,e){const n=Yr(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ei.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(t,u))}));let a=Po();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(sc(t,s,e.documentUpdates).next((t=>{a=t}))),!r.isEqual(di.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Pa.waitFor(o).next((()=>s.apply(t))).next((()=>n.ci.Gs(t,a))).next((()=>a))})).then((t=>(n.ii=i,t)))}function sc(t,e,n){let r=$o();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Po();return n.forEach(((n,i)=>{const s=t.get(n);i.isNoDocument()&&i.version.isEqual(di.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function oc(t,e){const n=Yr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function ac(t,e){const n=Yr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.fs.getTargetData(t,e).next((i=>i?(r=i,Pa.resolve(r)):n.fs.allocateTargetId(t).next((i=>(r=new Va(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ii.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t}))}async function cc(t,e,n){const r=Yr(t),i=r.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ma(t))throw t;zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function uc(t,e,n){const r=Yr(t);let i=di.min(),s=$o();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Yr(t),i=r.ri.get(n);return void 0!==i?Pa.resolve(r.ii.get(i)):r.fs.getTargetData(e,n)}(r,t,Ls(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.si.Qs(t,e,n?i:di.min(),n?s:$o()))).next((t=>(lc(r,Vs(e),t),{documents:t,li:s})))))}function lc(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.oi.set(e,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return Pa.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:sa(n.createTime)}),Pa.resolve()}getNamedQuery(t,e){return Pa.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:Ba(t.bundledQuery),readTime:sa(t.readTime)}}(e)),Pa.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.overlays=new Oo(Pi.comparator),this.gi=new Map}getOverlay(t,e){return Pa.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Xt(t,e,r)})),Pa.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.gi.delete(n)),Pa.resolve()}getOverlaysForCollection(t,e,n){const r=Uo(),i=e.length+1,s=new Pi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Pa.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Oo(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Uo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Uo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Pa.resolve(o)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fa(e,n));let i=this.gi.get(e);void 0===i&&(i=$o(),this.gi.set(e,i)),this.gi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.yi=new Ro(pc.pi),this.Ii=new Ro(pc.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new pc(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ai(new pc(t,e))}Ri(t,e){t.forEach((t=>this.removeReference(t,e)))}Pi(t){const e=new Pi(new yi([])),n=new pc(e,t),r=new pc(e,t+1),i=[];return this.Ii.forEachInRange([n,r],(t=>{this.Ai(t),i.push(t.key)})),i}bi(){this.yi.forEach((t=>this.Ai(t)))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new Pi(new yi([])),n=new pc(e,t),r=new pc(e,t+1);let i=$o();return this.Ii.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new pc(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class pc{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return Pi.comparator(t.key,e.key)||li(t.vi,e.vi)}static Ti(t,e){return li(t.vi,e.vi)||Pi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Ro(pc.pi)}checkEmpty(t){return Pa.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new ja(i,e,n,r);this.Bs.push(s);for(const o of r)this.Di=this.Di.add(new pc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Pa.resolve(s)}lookupMutationBatch(t,e){return Pa.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.xi(n),i=r<0?0:r;return Pa.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Pa.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return Pa.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new pc(e,0),r=new pc(e,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,r],(t=>{const e=this.Ci(t.vi);i.push(e)})),Pa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ro(li);return e.forEach((t=>{const e=new pc(t,0),r=new pc(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,r],(t=>{n=n.add(t.vi)}))})),Pa.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Pi.isDocumentKey(i)||(i=i.child(""));const s=new pc(new Pi(i),0);let o=new Ro(li);return this.Di.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.vi)),!0)}),s),Pa.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach((t=>{const n=this.Ci(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return Pa.forEach(e.mutations,(r=>{const i=new pc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Di=n}))}_n(t){}containsKey(t,e){const n=new pc(e,0),r=this.Di.firstAfterOrEqual(n);return Pa.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,Pa.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.Mi=t,this.docs=new Oo(Pi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pa.resolve(n?n.document.mutableCopy():Zi.newInvalidDocument(e))}getEntries(t,e){let n=Po();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Zi.newInvalidDocument(t))})),Pa.resolve(n)}getAllFromCollection(t,e,n){let r=Po();const i=new Pi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||is(ns(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Pa.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Oi(t,e){return Pa.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new vc(this)}getSize(t){return Pa.resolve(this.size)}}class vc extends Xa{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(n)})),Pa.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.persistence=t,this.Fi=new ko((t=>as(t)),us),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.$i=0,this.Bi=new dc,this.targetCount=0,this.Li=Ka.gn()}forEachTarget(t,e){return this.Fi.forEach(((t,n)=>e(n))),Pa.resolve()}getLastRemoteSnapshotVersion(t){return Pa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pa.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),Pa.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),Pa.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new Ka(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Pa.resolve()}updateTargetData(t,e){return this.Tn(e),Pa.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,Pa.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fi.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Pa.waitFor(i).next((()=>r))}getTargetCount(t){return Pa.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return Pa.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),Pa.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Pa.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),Pa.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return Pa.resolve(n)}containsKey(t,e){return Pa.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e){this.Ui={},this.overlays={},this.es=new ai(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new yc(this),this.indexManager=new za,this.ds=function(t){return new gc(t)}((t=>this.referenceDelegate.qi(t))),this.M=new $a(e),this._s=new hc(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new mc(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){zr("MemoryPersistence","Starting transaction:",t);const r=new bc(this.es.next());return this.referenceDelegate.Ki(),n(r).next((t=>this.referenceDelegate.Gi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Qi(t,e){return Pa.or(Object.values(this.Ui).map((n=>()=>n.containsKey(t,e))))}}class bc extends La{constructor(t){super(),this.currentSequenceNumber=t}}class _c{constructor(t){this.persistence=t,this.ji=new dc,this.Wi=null}static zi(t){return new _c(t)}get Hi(){if(this.Wi)return this.Wi;throw Wr()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),Pa.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),Pa.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),Pa.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach((t=>this.Hi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pa.forEach(this.Hi,(n=>{const r=Pi.fromPath(n);return this.Ji(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.Wi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ji(t,e).next((t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())}))}qi(t){return 0}Ji(t,e){return Pa.or([()=>Pa.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.activeTargetIds=qo()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tc{constructor(){this.$r=new Ec,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new Ec,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,r,i){const s=this.uo(t,e);zr("RestConnection","Sending: ",s,n);const o={};return this.ao(o,r,i),this.co(t,s,o,n).then((t=>(zr("RestConnection","Received: ",t),t)),(e=>{throw Gr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ho(t,e,n,r,i){return this.oo(t,e,n,r,i)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+$r,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}uo(t,e){const n=Ac[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Dr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rr.NO_ERROR:const e=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Rr.TIMEOUT:zr("Connection",'RPC "'+t+'" timed out'),s(new Qr(Jr.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Jr).indexOf(e)>=0?e:Jr.UNKNOWN}(t.status);s(new Qr(e,t.message))}else s(new Qr(Jr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Qr(Jr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}lo(t,e,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=xr(),s=Nr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.ao(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");zr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const f=new Cc({Wr:t=>{h?zr("Connection","Not sending because WebChannel is closed:",t):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",t),u.send(t))},zr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,jr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),d(u,jr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),f.no())})),d(u,jr.EventType.ERROR,(t=>{h||(h=!0,Gr("Connection","WebChannel transport errored:",t),f.no(new Qr(Jr.UNAVAILABLE,"The operation could not be completed")))})),d(u,jr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){zr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Io[t];if(void 0!==e)return Co(e)}(t),n=i.message;void 0===e&&(e=Jr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.no(new Qr(e,n)),u.close()}else zr("Connection","WebChannel received:",n),f.so(n)}})),d(s,Lr.STAT_EVENT,(t=>{t.stat===Pr.PROXY?zr("Connection","Detected buffering proxy"):t.stat===Pr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.eo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return new ea(t,!0)}class Nc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,e-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.po=Date.now(),t()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,r,i,s,o,a){this.Yn=t,this.Ro=n,this.Po=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Nc(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===Jr.RESOURCE_EXHAUSTED?(Hr(e.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===Jr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.qo(t,n)}),(e=>{t((()=>{const t=new Qr(Jr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)}))}))}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((t=>{n((()=>this.Ko(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(t){return zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget((()=>this.Vo===t?e():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dc extends Rc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.M=i}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=ma(this.M,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?sa(e.readTime):di.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=fa(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=ls(r)?{documents:ya(t,r)}:{query:wa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ra(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=na(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=_a(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=fa(this.M),e.removeTarget=t,this.Fo(e)}}class Lc extends Rc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=va(t.writeResults,t.commitTime),n=sa(t.commitTime);return this.listener.Yo(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=fa(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ga(this.M,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=r,this.tu=!1}eu(){if(this.tu)throw new Qr(Jr.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.oo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Jr.UNKNOWN,t.toString())}))}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ho(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qr(Jr.UNKNOWN,t.toString())}))}terminate(){this.tu=!0}}class Mc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Hr(e),this.iu=!1):zr("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr((t=>{n.enqueueAndForget((async()=>{Gc(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yr(t);e.fu.add(4),await Fc(e),e.wu.set("Unknown"),e.fu.delete(4),await Uc(e)}(this))}))})),this.wu=new Mc(n,r)}}async function Uc(t){if(Gc(t))for(const e of t.du)await e(!0)}async function Fc(t){for(const e of t.du)await e(!1)}function Vc(t,e){const n=Yr(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Hc(n)?zc(n):lu(n).xo()&&Bc(n,e))}function $c(t,e){const n=Yr(t),r=lu(n);n.lu.delete(e),r.xo()&&qc(n,e),0===n.lu.size&&(r.xo()?r.Mo():Gc(n)&&n.wu.set("Unknown"))}function Bc(t,e){t.mu.Z(e.targetId),lu(t).jo(e)}function qc(t,e){t.mu.Z(e),lu(t).Wo(e)}function zc(t){t.mu=new Yo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),lu(t).start(),t.wu.ru()}function Hc(t){return Gc(t)&&!lu(t).Co()&&t.lu.size>0}function Gc(t){return 0===Yr(t).fu.size}function Kc(t){t.mu=void 0}async function Wc(t){t.lu.forEach(((e,n)=>{Bc(t,e)}))}async function Xc(t,e){Kc(t),Hc(t)?(t.wu.au(e),zc(t)):t.wu.set("Unknown")}async function Yc(t,e,n){if(t.wu.set("Online"),e instanceof Wo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.lu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.lu.delete(r),t.mu.removeTarget(r))}(t,e)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Jc(t,n)}else if(e instanceof Go?t.mu.ut(e):e instanceof Ko?t.mu._t(e):t.mu.ht(e),!n.isEqual(di.min()))try{const e=await rc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.lu.get(r);i&&t.lu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(Ei.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(t,e);const r=new Va(n.target,e,1,n.sequenceNumber);Bc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){zr("RemoteStore","Failed to raise snapshot:",e),await Jc(t,e)}}async function Jc(t,e,n){if(!Ma(e))throw e;t.fu.add(1),await Fc(t),t.wu.set("Offline"),n||(n=()=>rc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Uc(t)}))}function Qc(t,e){return e().catch((n=>Jc(t,n,e)))}async function Zc(t){const e=Yr(t),n=hu(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;tu(e);)try{const t=await oc(e.localStore,r);if(null===t){0===e.hu.length&&n.Mo();break}r=t.batchId,eu(e,t)}catch(t){await Jc(e,t)}nu(e)&&ru(e)}function tu(t){return Gc(t)&&t.hu.length<10}function eu(t,e){t.hu.push(e);const n=hu(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function nu(t){return Gc(t)&&!hu(t).Co()&&t.hu.length>0}function ru(t){hu(t).start()}async function iu(t){hu(t).Zo()}async function su(t){const e=hu(t);for(const n of t.hu)e.Jo(n.mutations)}async function ou(t,e,n){const r=t.hu.shift(),i=Ua.from(r,e,n);await Qc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Zc(t)}async function au(t,e){e&&hu(t).Ho&&await async function(t,e){if(n=e.code,Ao(n)&&n!==Jr.ABORTED){const n=t.hu.shift();hu(t).ko(),await Qc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zc(t)}var n}(t,e),nu(t)&&ru(t)}async function cu(t,e){const n=Yr(t);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=Gc(n);n.fu.add(3),await Fc(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Uc(n)}async function uu(t,e){const n=Yr(t);e?(n.fu.delete(2),await Uc(n)):e||(n.fu.add(2),await Fc(n),n.wu.set("Unknown"))}function lu(t){return t.gu||(t.gu=function(t,e,n){const r=Yr(t);return r.eu(),new Dc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:Wc.bind(null,t),Yr:Xc.bind(null,t),Qo:Yc.bind(null,t)}),t.du.push((async e=>{e?(t.gu.ko(),Hc(t)?zc(t):t.wu.set("Unknown")):(await t.gu.stop(),Kc(t))}))),t.gu}function hu(t){return t.yu||(t.yu=function(t,e,n){const r=Yr(t);return r.eu(),new Lc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{Hr:iu.bind(null,t),Yr:au.bind(null,t),Xo:su.bind(null,t),Yo:ou.bind(null,t)}),t.du.push((async e=>{e?(t.yu.ko(),await Zc(t)):(await t.yu.stop(),t.hu.length>0&&(zr("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))}))),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new fu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qr(Jr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(t,e){if(Hr("AsyncQueue",`${e}: ${t}`),Ma(t))return new Qr(Jr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Pi.comparator(e.key,n.key):(t,e)=>Pi.comparator(t.key,e.key),this.keyedMap=jo(),this.sortedSet=new Oo(this.comparator)}static emptySet(t){return new pu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.pu=new Oo(Pi.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):Wr():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class gu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new gu(t,e,pu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.Tu=void 0,this.listeners=[]}}class yu{constructor(){this.queries=new ko((t=>js(t)),Ms),this.onlineState="Unknown",this.Eu=new Set}}async function wu(t,e){const n=Yr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vu),i)try{s.Tu=await n.onListen(r)}catch(t){const n=du(t,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&Tu(n)}async function bu(t,e){const n=Yr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _u(t,e){const n=Yr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(i)&&(r=!0);e.Tu=i}}r&&Tu(n)}function Eu(t,e,n){const r=Yr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Tu(t){t.Eu.forEach((t=>{t.next()}))}class Iu{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=gu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(t){this.key=t}}class Au{constructor(t){this.key=t}}class Cu{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=$o(),this.mutatedKeys=$o(),this.Uu=$s(t),this.qu=new pu(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new mu,r=e?e.qu:this.qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ks(this.query)&&r.size===this.query.limit?r.last():null,c=Os(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Fs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.ju(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Uu(l,a)>0||c&&this.Uu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),ks(this.query)||Os(this.query))for(;s.size>this.query.limit;){const t=ks(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{qu:s,Qu:n,ni:o,mutatedKeys:i}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc))),this.Wu(n);const s=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==i.length||a?{snapshot:new gu(this.query,t.qu,r,i,t.mutatedKeys,0===o,a,!1),Hu:s}:{Hu:s}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new mu,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach((t=>this.$u=this.$u.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.$u=this.$u.delete(t))),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=$o(),this.qu.forEach((t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))}));const e=[];return t.forEach((t=>{this.Lu.has(t)||e.push(new Au(t))})),this.Lu.forEach((n=>{t.has(n)||e.push(new Su(n))})),e}Yu(t){this.$u=t.li,this.Lu=$o();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return gu.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class ku{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ou{constructor(t){this.key=t,this.Zu=!1}}class xu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ta={},this.ea=new ko((t=>js(t)),Ms),this.na=new Map,this.sa=new Set,this.ia=new Oo(Pi.comparator),this.ra=new Map,this.oa=new dc,this.ua={},this.aa=new Map,this.ca=Ka.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Nu(t,e){const n=Yu(t);let r,i;const s=n.ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const t=await ac(n.localStore,Ls(e));n.isPrimaryClient&&Vc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ru(n,e,r,"current"===s)}return i}async function Ru(t,e,n,r){t.la=(e,n,r)=>async function(t,e,n,r){let i=e.view.Gu(n);i.ni&&(i=await uc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return zu(t,e.targetId,o.Hu),o.snapshot}(t,e,n,r);const i=await uc(t.localStore,e,!0),s=new Cu(e,i.li),o=s.Gu(i.documents),a=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);zu(t,n,c.Hu);const u=new ku(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function Du(t,e){const n=Yr(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter((t=>!Ms(t,e)))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),$c(n.remoteStore,r.targetId),Bu(n,r.targetId)})).catch(Wa)):(Bu(n,r.targetId),await cc(n.localStore,r.targetId,!0))}async function Lu(t,e,n){const r=Ju(t);try{const t=await function(t,e){const n=Yr(t),r=fi.now(),i=e.reduce(((t,e)=>t.add(e.key)),$o());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ci.Ks(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=fo(t,s.get(t.key));null!=e&&o.push(new vo(t.key,e,Qi(e.value.mapValue),ao.exists(!0)))}return n.Bs.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ua[t.currentUser.toKey()];r||(r=new Oo(li)),r=r.insert(e,n),t.ua[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ku(r,t.changes),await Zc(r.remoteStore)}catch(t){const e=du(t,"Failed to persist write");n.reject(e)}}async function Pu(t,e){const n=Yr(t);try{const t=await ic(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ra.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Zu=!0:t.modifiedDocuments.size>0?Xr(r.Zu):t.removedDocuments.size>0&&(Xr(r.Zu),r.Zu=!1))})),await Ku(n,t,e)}catch(t){await Wa(t)}}function Mu(t,e,n){const r=Yr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ea.forEach(((n,r)=>{const i=r.view.Au(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Yr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Au(e)&&(r=!0)})),r&&Tu(n)}(r.eventManager,e),t.length&&r.ta.Qo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ju(t,e,n){const r=Yr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),s=i&&i.key;if(s){let t=new Oo(Pi.comparator);t=t.insert(s,Zi.newNoDocument(s,di.min()));const n=$o().add(s),i=new zo(di.min(),new Map,new Ro(li),t,n);await Pu(r,i),r.ia=r.ia.remove(s),r.ra.delete(e),Gu(r)}else await cc(r.localStore,e,!1).then((()=>Bu(r,e,n))).catch(Wa)}async function Uu(t,e){const n=Yr(t),r=e.batch.batchId;try{const t=await nc(n.localStore,e);$u(n,r,null),Vu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(n,t)}catch(t){await Wa(t)}}async function Fu(t,e,n){const r=Yr(t);try{const t=await function(t,e){const n=Yr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.Bs.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.ci.Ks(t,r)))}))}(r.localStore,e);$u(r,e,n),Vu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ku(r,t)}catch(n){await Wa(n)}}function Vu(t,e){(t.aa.get(e)||[]).forEach((t=>{t.resolve()})),t.aa.delete(e)}function $u(t,e,n){const r=Yr(t);let i=r.ua[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach((e=>{t.oa.containsKey(e)||qu(t,e)}))}function qu(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&($c(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Gu(t))}function zu(t,e,n){for(const r of n)r instanceof Su?(t.oa.addReference(r.key,e),Hu(t,r)):r instanceof Au?(zr("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||qu(t,r.key)):Wr()}function Hu(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(zr("SyncEngine","New document in limbo: "+n),t.sa.add(r),Gu(t))}function Gu(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Pi(yi.fromString(e)),r=t.ca.next();t.ra.set(r,new Ou(n)),t.ia=t.ia.insert(n,r),Vc(t.remoteStore,new Va(Ls(Cs(n.path)),r,2,ai.A))}}async function Ku(t,e,n){const r=Yr(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach(((t,a)=>{o.push(r.la(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ja.Ys(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.ta.Qo(i),await async function(t,e){const n=Yr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pa.forEach(e,(e=>Pa.forEach(e.Hs,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Pa.forEach(e.Js,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ma(t))throw t;zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ii.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(t,i)}}}(r.localStore,s))}async function Wu(t,e){const n=Yr(t);if(!n.currentUser.isEqual(e)){zr("SyncEngine","User change. New user:",e.toKey());const t=await ec(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach((t=>{t.forEach((t=>{t.reject(new Qr(Jr.CANCELLED,e))}))})),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ku(n,t.hi)}}function Xu(t,e){const n=Yr(t),r=n.ra.get(e);if(r&&r.Zu)return $o().add(r.key);{let t=$o();const r=n.na.get(e);if(!r)return t;for(const e of r){const r=n.ea.get(e);t=t.unionWith(r.view.Ku)}return t}}function Yu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ju.bind(null,e),e.ta.Qo=_u.bind(null,e.eventManager),e.ta.fa=Eu.bind(null,e.eventManager),e}function Ju(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fu.bind(null,e),e}class Qu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=xc(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return tc(this.persistence,new Qa,t.initialUser,this.M)}wa(t){return new wc(_c.zi,this.M)}_a(t){return new Tc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Mu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wu.bind(null,this.syncEngine),await uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yu}createDatastore(t){const e=xc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new kc(r));var r;return function(t,e,n,r){return new Pc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Mu(this.syncEngine,t,0),s=Sc.vt()?new Sc:new Ic,new jc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new xu(t,e,n,r,i,s);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Yr(t);zr("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await Fc(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Vr.UNAUTHENTICATED,this.clientId=ui.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qr(Jr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=du(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function nl(t,e){t.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ec(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await il(t);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>cu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>cu(e.remoteStore,n))),t.onlineComponents=e}async function il(t){return t.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await nl(t,new Qu)),t.offlineComponents}async function sl(t){return t.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await rl(t,new Zu)),t.onlineComponents}function ol(t){return sl(t).then((t=>t.syncEngine))}async function al(t){const e=await sl(t),n=e.eventManager;return n.onListen=Nu.bind(null,e.syncEngine),n.onUnlisten=Du.bind(null,e.syncEngine),n}function cl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:n=>{e.enqueueAndForget((()=>bu(t,o))),n.fromCache&&"server"===r.source?i.reject(new Qr(Jr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Iu(n,s,{includeMetadataChanges:!0,Cu:!0});return wu(t,o)}(await al(t),t.asyncQueue,e,n,r))),r.promise}const ul=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new Qr(Jr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hl(t,e,n,r){if(!0===e&&!0===r)throw new Qr(Jr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fl(t){if(!Pi.isDocumentKey(t))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dl(t){if(Pi.isDocumentKey(t))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function ml(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qr(Jr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pl(t);throw new Qr(Jr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qr(Jr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qr(Jr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1,t instanceof Ni?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qr(Jr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qr(Jr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qr(Jr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qr(Jr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ul.get(t);e&&(zr("ComponentProvider","Removing Datastore"),ul.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yl(this.firestore,t,this._key)}}class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class bl extends wl{constructor(t,e,n){super(t,e,Cs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yl(this.firestore,null,new Pi(t))}withConverter(t){return new bl(this.firestore,t,this._path)}}function _l(t,e,...n){if(t=(0,a.m9)(t),ll("collection","path",e),t instanceof vl){const r=yi.fromString(e,...n);return dl(r),new bl(t,null,r)}{if(!(t instanceof yl||t instanceof bl))throw new Qr(Jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return dl(r),new bl(t.firestore,null,r)}}function El(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ui.R()),ll("doc","path",e),t instanceof vl){const r=yi.fromString(e,...n);return fl(r),new yl(t,null,new Pi(r))}{if(!(t instanceof yl||t instanceof bl))throw new Qr(Jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return fl(r),new yl(t.firestore,t instanceof bl?t.converter:null,new Pi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Nc(this,"async_queue_retry"),this.qa=()=>{const t=Oc();t&&zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Oc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Oc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise((()=>{}));const e=new Zr;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ma.push(t),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(E){if(!Ma(E))throw E;zr("AsyncQueue","Operation failed with retryable error: "+E)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(t){const e=this.ka.then((()=>(this.Ba=!0,t().catch((t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Hr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ba=!1,t))))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const r=fu.createAndSchedule(this,t,e,n,(t=>this.ja(t)));return this.Fa.push(r),r}Ka(){this.$a&&Wr()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then((()=>{this.Fa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()}))}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}class Il extends vl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Tl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Cl(this),this._firestoreClient.terminate()}}function Sl(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function Al(t){return t._firestoreClient||Cl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new xi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new el(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qr(Jr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ol(Ei.fromBase64String(t))}catch(t){throw new Qr(Jr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ol(Ei.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qr(Jr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qr(Jr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return li(this._lat,t._lat)||li(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=/^__.*__$/;class Dl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new vo(t,this.data,this.fieldMask,e,this.fieldTransforms):new go(t,this.data,e,this.fieldTransforms)}}function Ll(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class Pl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new Pl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Za({path:n,ec:!1});return r.nc(t),r}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return Wl(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(Ll(this.Xa)&&Rl.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class Ml{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||xc(t)}ac(t,e,n,r=!1){return new Pl({Xa:t,methodName:e,uc:n,path:bi.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function jl(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new Ml(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ul(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);zl("Data must be an object, but it was:",o,r);const a=Bl(r,o);let c,u;if(s.merge)c=new _i(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Hl(e,r,n);if(!o.contains(i))throw new Qr(Jr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Xl(t,i)||t.push(i)}c=new _i(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Dl(new Ji(a),c,u)}class Fl extends xl{_toFieldTransform(t){return new io(t.path,new Ys)}isEqual(t){return t instanceof Fl}}function Vl(t,e,n,r=!1){return $l(n,t.ac(r?4:3,e))}function $l(t,e){if(ql(t=(0,a.m9)(t)))return zl("Unsupported field value:",e,t),Bl(t,e);if(t instanceof xl)return function(t,e){if(!Ll(e.Xa))throw e.rc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.rc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=$l(i,e.ic(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Hs(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=fi.fromDate(t);return{timestampValue:na(e.M,n)}}if(t instanceof fi){const n=new fi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:na(e.M,n)}}if(t instanceof Nl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ol)return{bytesValue:ra(e.M,t._byteString)};if(t instanceof yl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc(`Unsupported field value: ${pl(t)}`)}(t,e)}function Bl(t,e){const n={};return gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,((t,r)=>{const i=$l(r,e.tc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ql(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof fi||t instanceof Nl||t instanceof Ol||t instanceof yl||t instanceof xl)}function zl(t,e,n){if(!ql(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=pl(n);throw"an object"===r?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function Hl(t,e,n){if((e=(0,a.m9)(e))instanceof kl)return e._internalPath;if("string"==typeof e)return Kl(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gl=new RegExp("[~\\*/\\[\\]]");function Kl(t,e,n){if(e.search(Gl)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kl(...e.split("."))._internalPath}catch(r){throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Qr(Jr.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Jl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ql("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Jl extends Yl{data(){return super.data()}}function Ql(t,e){return"string"==typeof e?Kl(t,e):e instanceof kl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class th extends Yl{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new eh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ql("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class eh extends th{data(t={}){return super.data(t)}}class nh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Zl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new eh(this._firestore,this._userDataWriter,n.key,n,new Zl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Qr(Jr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new eh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Zl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new eh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Zl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:rh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function rh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ih(t){if(Os(t)&&0===t.explicitOrderBy.length)throw new Qr(Jr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}function oh(t,...e){for(const n of e)t=n._apply(t);return t}class ah extends sh{constructor(t,e,n){super(),this.lc=t,this.fc=e,this.dc=n,this.type="where"}_apply(t){const e=jl(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Qr(Jr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){fh(o,s);const e=[];for(const n of o)e.push(hh(r,t,n));a={arrayValue:{values:e}}}else a=hh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||fh(o,s),a=Vl(n,e,o,"in"===s||"not-in"===s);const c=hs.create(i,s,a);return function(t,e){if(e.S()){const n=Ns(t);if(null!==n&&!n.isEqual(e.field))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=xs(t);null!==r&&dh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Qr(Jr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Qr(Jr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.lc,this.fc,this.dc);return new wl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function ch(t,e,n){const r=e,i=Ql("where",t);return new ah(i,r,n)}class uh extends sh{constructor(t,e){super(),this.lc=t,this._c=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Qr(Jr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Qr(Jr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new _s(e,n);return function(t,e){if(null===xs(t)){const n=Ns(t);null!==n&&dh(t,n,e.field)}}(t,r),r}(t._query,this.lc,this._c);return new wl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ss(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function lh(t,e="asc"){const n=e,r=Ql("orderBy",t);return new uh(r,n)}function hh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Qr(Jr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rs(e)&&-1!==n.indexOf("/"))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(yi.fromString(n));if(!Pi.isDocumentKey(r))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qi(t,new Pi(r))}if(n instanceof yl)return qi(t,n._key);throw new Qr(Jr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pl(n)}.`)}function fh(t,e){if(!Array.isArray(t)||0===t.length)throw new Qr(Jr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Qr(Jr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function dh(t,e,n){if(!n.isEqual(e))throw new Qr(Jr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{convertValue(t,e="none"){switch(Mi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Si(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ai(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wr()}}convertObject(t,e){const n={};return mi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Nl(Si(t.latitude),Si(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Oi(t));default:return null}}convertTimestamp(t){const e=Ii(t);return new fi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yi.fromString(t);Xr(xa(n));const r=new Ni(n.get(1),n.get(3)),i=new Pi(n.popFirst(5));return r.isEqual(e)||Hr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class gh extends ph{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ol(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yl(this.firestore,null,e)}}function vh(t){t=ml(t,wl);const e=ml(t.firestore,Il),n=Al(e),r=new gh(e);return ih(t._query),cl(n,t._query).then((n=>new nh(e,r,t,n)))}function yh(t){return bh(ml(t.firestore,Il),[new _o(t._key,ao.none())])}function wh(t,e){const n=ml(t.firestore,Il),r=El(t),i=mh(t.converter,e);return bh(n,[Ul(jl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ao.exists(!1))]).then((()=>r))}function bh(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Lu(await ol(t),e,n))),n.promise}(Al(t),e)}function _h(){return new Fl("serverTimestamp")}!function(t,e=!0){!function(t){$r=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Il(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Fr,"3.4.8",t),(0,i.KN)(Fr,"3.4.8","esm2017")}()},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return u},L:function(){return a},LL:function(){return _},Mn:function(){return g},X3:function(){return V},ZR:function(){return b},b$:function(){return d},d:function(){return p},eu:function(){return y},hl:function(){return v},m9:function(){return L},ne:function(){return x},pd:function(){return O},ru:function(){return f},tV:function(){return c},uI:function(){return h},vZ:function(){return S},w1:function(){return m},xO:function(){return C},xb:function(){return I},z$:function(){return l},zd:function(){return k}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?E(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new b(r,o,n);return a}}function E(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function S(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(A(n)&&A(s)){if(!S(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function O(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=new N(t,e);return n.subscribe.bind(n)}class N{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return new Promise(((n,r)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;r(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class M{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new j(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new U(this._db.createObjectStore(t,e))}close(){this._db.close()}}class j{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new U(this._transaction.objectStore(t))}}class U{constructor(t){this._store=t}index(t){return new F(this._store.index(t))}createIndex(t,e,n){return new F(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return P(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return P(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return P(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return P(t,"Error clearing IndexedDB object store")}}class F{constructor(t){this._index=t}get(t){const e=this._index.get(t);return P(e,"Error reading from IndexedDB")}}function V(t,e,n){return new Promise(((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=t=>{r(new M(t.target.result))},s.onerror=t=>{var e;i(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},s.onupgradeneeded=t=>{n(new M(s.result),t.oldVersion,t.newVersion,new j(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}}))}},4013:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",style:t.style},[n("table",[n("tbody",[n("tr",[t.hasImage?t._e():n("td",[t._v(" "+t._s(t.initials)+" ")])])])])])},i=[],s={name:"Avatar",props:{fullname:{type:String,default:""},size:{type:Number,default:48},radius:{type:Number,default:50,validator:t=>t>=0&&t<=50},color:{type:String,default:""},image:{type:String,default:""}},computed:{initials(){const t=this.fullname.split(/[\s-]+/);return t.map((t=>t.substr(0,1))).join("").substr(0,3).toUpperCase()},style(){const t=this.initials.length>2?this.size/3:this.size/2;return{width:this.size+"px",height:this.size+"px","border-radius":this.radius+"%","font-size":t+"px","background-color":""===this.color?this.toColor(this.fullname):this.color,"background-image":this.hasImage?"url("+this.image+")":"none"}},hasImage(){return""!==this.image}},methods:{toColor(t){let e=0;if(!t)return"black";for(const n of t.split(""))e=(e<<8-e)+n.charCodeAt(0);return"#"+Math.abs(e).toString(16).substr(0,6)}}},o=s,a=n(1001),c=(0,a.Z)(o,r,i,!1,null,"0da76b57",null),u=c.exports},1001:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},9483:function(t,e,n){var r=n(7854),i=n(4411),s=n(6330),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},6077:function(t,e,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7854),i=n(7976),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,i=n(9341),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},8457:function(t,e,n){"use strict";var r=n(7854),i=n(9974),s=n(6916),o=n(7908),a=n(3411),c=n(7659),u=n(4411),l=n(6244),h=n(6135),f=n(8554),d=n(1246),p=r.Array;t.exports=function(t){var e=o(t),n=u(this),r=arguments.length,m=r>1?arguments[1]:void 0,g=void 0!==m;g&&(m=i(m,r>2?arguments[2]:void 0));var v,y,w,b,_,E,T=d(e),I=0;if(!T||this==p&&c(T))for(v=l(e),y=n?new this(v):p(v);v>I;I++)E=g?m(e[I],I):e[I],h(y,I,E);else for(b=f(e,T),_=b.next,y=n?new this:[];!(w=s(_,b)).done;I++)E=g?a(b,m,[w.value,I],!0):w.value,h(y,I,E);return y.length=I,y}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},2092:function(t,e,n){var r=n(9974),i=n(1702),s=n(8361),o=n(7908),a=n(6244),c=n(5417),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,m,g,v){for(var y,w,b=o(p),_=s(b),E=r(m,g),T=a(_),I=0,S=v||c,A=e?S(p,T):n||f?S(p,0):void 0;T>I;I++)if((d||I in _)&&(y=_[I],w=E(y,I,b),t))if(e)A[I]=w;else if(w)switch(t){case 3:return!0;case 5:return y;case 6:return I;case 2:u(A,y)}else switch(t){case 4:return!1;case 7:u(A,y)}return h?-1:i||l?l:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:function(t,e,n){var r=n(7293),i=n(5112),s=n(7392),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},1589:function(t,e,n){var r=n(7854),i=n(1400),s=n(6244),o=n(6135),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=s(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),f=0;u<l;u++,f++)o(h,f,t[u]);return h.length=f,h}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},7475:function(t,e,n){var r=n(7854),i=n(3157),s=n(4411),o=n(111),a=n(5112),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,s(e)&&(e===u||i(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},3411:function(t,e,n){var r=n(9670),i=n(9212);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},7072:function(t,e,n){var r=n(5112),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=r("".replace),s=function(t){return String(Error(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=i(t,o,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},4964:function(t,e,n){var r=n(5112),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,e,n){"use strict";var r=n(3383).IteratorPrototype,i=n(30),s=n(9114),o=n(8003),a=n(7497),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,l,!1,!0),a[l]=c,t}},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var r=n(4948),i=n(3070),s=n(9114);t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},654:function(t,e,n){"use strict";var r=n(2109),i=n(6916),s=n(1913),o=n(6530),a=n(614),c=n(4994),u=n(9518),l=n(7674),h=n(8003),f=n(8880),d=n(1320),p=n(5112),m=n(7497),g=n(3383),v=o.PROPER,y=o.CONFIGURABLE,w=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),E="keys",T="values",I="entries",S=function(){return this};t.exports=function(t,e,n,o,p,g,A){c(n,e,o);var C,k,O,x=function(t){if(t===p&&P)return P;if(!b&&t in D)return D[t];switch(t){case E:return function(){return new n(this,t)};case T:return function(){return new n(this,t)};case I:return function(){return new n(this,t)}}return function(){return new n(this)}},N=e+" Iterator",R=!1,D=t.prototype,L=D[_]||D["@@iterator"]||p&&D[p],P=!b&&L||x(p),M="Array"==e&&D.entries||L;if(M&&(C=u(M.call(new t)),C!==Object.prototype&&C.next&&(s||u(C)===w||(l?l(C,w):a(C[_])||d(C,_,S)),h(C,N,!0,!0),s&&(m[N]=S))),v&&p==T&&L&&L.name!==T&&(!s&&y?f(D,"name",T):(R=!0,P=function(){return i(L,this)})),p)if(k={values:x(T),keys:g?P:x(E),entries:x(I)},A)for(O in k)(b||R||!(O in D))&&d(D,O,k[O]);else r({target:e,proto:!0,forced:b||R},k);return s&&!A||D[_]===P||d(D,_,P,{name:p}),m[e]=P,k}},7235:function(t,e,n){var r=n(857),i=n(2597),s=n(6061),o=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,e,n){var r=n(317),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},7871:function(t){t.exports="object"==typeof window},1528:function(t,e,n){var r=n(8113),i=n(7854);t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},1036:function(t,e,n){var r=n(8113);t.exports=/web0s(?!.*chrome)/i.test(r)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},1246:function(t,e,n){var r=n(648),i=n(8173),s=n(7497),o=n(5112),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},8554:function(t,e,n){var r=n(7854),i=n(6916),s=n(9662),o=n(9670),a=n(6330),c=n(1246),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},842:function(t,e,n){var r=n(7854);t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),f=n(5465),d=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var b=f.state||(f.state=new v),_=c(b.get),E=c(b.has),T=c(b.set);r=function(t,e){if(E(b,t))throw new g(m);return e.facade=t,T(b,t,e),e},i=function(t){return _(b,t)||{}},s=function(t){return E(b,t)}}else{var I=d("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new g(m);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:w}},7659:function(t,e,n){var r=n(5112),i=n(7497),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(648),a=n(5005),c=n(2788),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),m=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},g=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,c(t))}catch(e){return!0}};g.sham=!0,t.exports=!h||i((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?g:m},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),i=n(4326),s=n(5112),o=s("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},2190:function(t,e,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},408:function(t,e,n){var r=n(7854),i=n(9974),s=n(6916),o=n(9670),a=n(6330),c=n(7659),u=n(6244),l=n(7976),h=n(8554),f=n(1246),d=n(9212),p=r.TypeError,m=function(t,e){this.stopped=t,this.result=e},g=m.prototype;t.exports=function(t,e,n){var r,v,y,w,b,_,E,T=n&&n.that,I=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),A=!(!n||!n.INTERRUPTED),C=i(e,T),k=function(t){return r&&d(r,"normal",t),new m(!0,t)},O=function(t){return I?(o(t),A?C(t[0],t[1],k):C(t[0],t[1])):A?C(t,k):C(t)};if(S)r=t;else{if(v=f(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,w=u(t);w>y;y++)if(b=O(t[y]),b&&l(g,b))return b;return new m(!1)}r=h(t,v)}_=r.next;while(!(E=s(_,r)).done){try{b=O(E.value)}catch(x){d(r,"throw",x)}if("object"==typeof b&&b&&l(g,b))return b}return new m(!1)}},9212:function(t,e,n){var r=n(6916),i=n(9670),s=n(8173);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},3383:function(t,e,n){"use strict";var r,i,s,o=n(7293),a=n(614),c=n(30),u=n(9518),l=n(1320),h=n(5112),f=n(1913),d=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var t={};return r[d].call(t)!==t}));m?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},5948:function(t,e,n){var r,i,s,o,a,c,u,l,h=n(7854),f=n(9974),d=n(1236).f,p=n(261).set,m=n(6833),g=n(1528),v=n(1036),y=n(5268),w=h.MutationObserver||h.WebKitMutationObserver,b=h.document,_=h.process,E=h.Promise,T=d(h,"queueMicrotask"),I=T&&T.value;I||(r=function(){var t,e;y&&(t=_.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},m||y||v||!w||!b?!g&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=f(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=f(p,h),o=function(){p(r)}):(a=!0,c=b.createTextNode(""),new w(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=I||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},3366:function(t,e,n){var r=n(7854);t.exports=r.Promise},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},8523:function(t,e,n){"use strict";var r=n(9662),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3929:function(t,e,n){var r=n(7854),i=n(7850),s=r.TypeError;t.exports=function(t){if(i(t))throw s("The method doesn't accept regular expressions");return t}},1574:function(t,e,n){"use strict";var r=n(9781),i=n(1702),s=n(6916),o=n(7293),a=n(1956),c=n(5181),u=n(5296),l=n(7908),h=n(8361),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||o((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,f=c.f,d=u.f;while(i>o){var m,g=h(arguments[o++]),v=f?p(a(g),f(g)):a(g),y=v.length,w=0;while(y>w)m=v[w++],r&&!s(d,g,m)||(n[m]=g[m])}return n}:f},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[m]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},1156:function(t,e,n){var r=n(4326),i=n(5656),s=n(8006).f,o=n(1589),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):s(i(t))}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),i=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},288:function(t,e,n){"use strict";var r=n(1694),i=n(648);t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},2140:function(t,e,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},9478:function(t,e,n){var r=n(9670),i=n(111),s=n(8523);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},8572:function(t){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=e},2248:function(t,e,n){var r=n(1320);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},1320:function(t,e,n){var r=n(7854),i=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=f(n),u.source||(u.source=d.join("string"==typeof g?g:""))),t!==r?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},2261:function(t,e,n){"use strict";var r=n(6916),i=n(1702),s=n(1340),o=n(7066),a=n(2999),c=n(2309),u=n(30),l=n(9909).get,h=n(9441),f=n(7168),d=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),y=i("".replace),w=i("".slice),b=function(){var t=/a/,e=/b*/g;return r(p,t,"a"),r(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],T=b||E||_||h||f;T&&(m=function(t){var e,n,i,a,c,h,f,T=this,I=l(T),S=s(t),A=I.raw;if(A)return A.lastIndex=T.lastIndex,e=r(m,A,S),T.lastIndex=A.lastIndex,e;var C=I.groups,k=_&&T.sticky,O=r(o,T),x=T.source,N=0,R=S;if(k&&(O=y(O,"y",""),-1===v(O,"g")&&(O+="g"),R=w(S,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==g(S,T.lastIndex-1))&&(x="(?: "+x+")",R=" "+R,N++),n=new RegExp("^(?:"+x+")",O)),E&&(n=new RegExp("^"+x+"$(?!\\s)",O)),b&&(i=T.lastIndex),a=r(p,k?n:T,R),k?a?(a.input=w(a.input,N),a[0]=w(a[0],N),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:b&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(d,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&C)for(a.groups=h=u(null),c=0;c<C.length;c++)f=C[c],h[f[0]]=a[f[1]];return a}),t.exports=m},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){var r=n(7293),i=n(7854),s=i.RegExp,o=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},9441:function(t,e,n){var r=n(7293),i=n(7854),s=i.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,n){var r=n(7293),i=n(7854),s=i.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6340:function(t,e,n){"use strict";var r=n(5005),i=n(3070),s=n(5112),o=n(9781),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},8003:function(t,e,n){var r=n(3070).f,i=n(2597),s=n(5112),o=s("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,o)&&r(t,o,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,e,n){var r=n(9670),i=n(9483),s=n(5112),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},8710:function(t,e,n){var r=n(1702),i=n(9303),s=n(1340),o=n(4488),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=s(o(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},261:function(t,e,n){var r,i,s,o,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),m=n(317),g=n(8053),v=n(6833),y=n(5268),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,I=a.MessageChannel,S=a.String,A=0,C={},k="onreadystatechange";try{r=a.location}catch(D){}var O=function(t){if(h(C,t)){var e=C[t];delete C[t],e()}},x=function(t){return function(){O(t)}},N=function(t){O(t.data)},R=function(t){a.postMessage(S(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){g(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return C[++A]=function(){c(e,void 0,n)},i(A),A},b=function(t){delete C[t]},y?i=function(t){_.nextTick(x(t))}:E&&E.now?i=function(t){E.now(x(t))}:I&&!v?(s=new I,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(R)?(i=R,a.addEventListener("message",N,!1)):i=k in m("script")?function(t){d.appendChild(m("script"))[k]=function(){d.removeChild(this),O(t)}}:function(t){setTimeout(x(t),0)}),t.exports={set:w,clear:b}},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),s=r.Object;t.exports=function(t){return s(i(t))}},7593:function(t,e,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(7854),i=n(648),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var r=n(7854),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},6061:function(t,e,n){var r=n(5112);e.f=r},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),f=n(7741),d=n(2914),p=n(1913);t.exports=function(t,e,n,m){var g=m?2:1,v=t.split("."),y=v[v.length-1],w=r.apply(null,v);if(w){var b=w.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return w;var _=r("Error"),E=e((function(t,e){var n=l(m?e:t,void 0),r=m?new w(t):new w;return void 0!==n&&s(r,"message",n),d&&s(r,"stack",f(r.stack,2)),this&&o(b,this)&&u(r,this,E),arguments.length>g&&h(r,arguments[g]),r}));if(E.prototype=b,"Error"!==y&&(a?a(E,_):c(E,_,{name:!0})),c(E,w),!p)try{b.name!==y&&s(b,"name",y),b.constructor=E}catch(T){}return E}}},7327:function(t,e,n){"use strict";var r=n(2109),i=n(2092).filter,s=n(1194),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},1038:function(t,e,n){var r=n(2109),i=n(8457),s=n(7072),o=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},6699:function(t,e,n){"use strict";var r=n(2109),i=n(1318).includes,s=n(1223);r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},6992:function(t,e,n){"use strict";var r=n(5656),i=n(1223),s=n(7497),o=n(9909),a=n(3070).f,c=n(654),u=n(1913),l=n(9781),h="Array Iterator",f=o.set,d=o.getterFor(h);t.exports=c(Array,"Array",(function(t,e){f(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},7042:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(3157),o=n(4411),a=n(111),c=n(1400),u=n(6244),l=n(5656),h=n(6135),f=n(5112),d=n(1194),p=n(206),m=d("slice"),g=f("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var n,r,i,f=l(this),d=u(f),m=c(t,d),w=c(void 0===e?d:e,d);if(s(f)&&(n=f.constructor,o(n)&&(n===v||s(n.prototype))?n=void 0:a(n)&&(n=n[g],null===n&&(n=void 0)),n===v||void 0===n))return p(f,m,w);for(r=new(void 0===n?v:n)(y(w-m,0)),i=0;m<w;m++,i++)m in f&&h(r,i,f[m]);return r.length=i,r}})},1703:function(t,e,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},8309:function(t,e,n){var r=n(9781),i=n(6530).EXISTS,s=n(1702),o=n(3070).f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},9601:function(t,e,n){var r=n(2109),i=n(1574);r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},5003:function(t,e,n){var r=n(2109),i=n(7293),s=n(5656),o=n(1236).f,a=n(9781),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},9337:function(t,e,n){var r=n(2109),i=n(9781),s=n(3887),o=n(5656),a=n(1236),c=n(6135);r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},7941:function(t,e,n){var r=n(2109),i=n(7908),s=n(1956),o=n(7293),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},1539:function(t,e,n){var r=n(1694),i=n(1320),s=n(288);r||i(Object.prototype,"toString",s,{unsafe:!0})},7727:function(t,e,n){"use strict";var r=n(2109),i=n(1913),s=n(3366),o=n(7293),a=n(5005),c=n(614),u=n(6707),l=n(9478),h=n(1320),f=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var d=a("Promise").prototype["finally"];s.prototype["finally"]!==d&&h(s.prototype,"finally",d,{unsafe:!0})}},8674:function(t,e,n){"use strict";var r,i,s,o,a=n(2109),c=n(1913),u=n(7854),l=n(5005),h=n(6916),f=n(3366),d=n(1320),p=n(2248),m=n(7674),g=n(8003),v=n(6340),y=n(9662),w=n(614),b=n(111),_=n(5787),E=n(2788),T=n(408),I=n(7072),S=n(6707),A=n(261).set,C=n(5948),k=n(9478),O=n(842),x=n(8523),N=n(2534),R=n(8572),D=n(9909),L=n(4705),P=n(5112),M=n(7871),j=n(5268),U=n(7392),F=P("species"),V="Promise",$=D.getterFor(V),B=D.set,q=D.getterFor(V),z=f&&f.prototype,H=f,G=z,K=u.TypeError,W=u.document,X=u.process,Y=x.f,J=Y,Q=!!(W&&W.createEvent&&u.dispatchEvent),Z=w(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,st=1,ot=2,at=!1,ct=L(V,(function(){var t=E(H),e=t!==String(H);if(!e&&66===U)return!0;if(c&&!G["finally"])return!0;if(U>=51&&/native code/.test(t))return!1;var n=new H((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,at=n.then((function(){}))instanceof r,!at||!e&&M&&!Z})),ut=ct||!I((function(t){H.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!b(t)||!w(e=t.then))&&e},ht=function(t,e){var n,r,i,s=e.value,o=e.state==rt,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(e.rejection===ot&&gt(e),e.rejection=st),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===t.promise?u(K("Promise-chain cycle")):(r=lt(n))?h(r,n,c,u):c(n)):u(s)}catch(f){l&&!i&&l.exit(),u(f)}},ft=function(t,e){t.notified||(t.notified=!0,C((function(){var n,r=t.reactions;while(n=r.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},dt=function(t,e,n){var r,i;Q?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===tt&&O("Unhandled promise rejection",n)},pt=function(t){h(A,u,(function(){var e,n=t.facade,r=t.value,i=mt(t);if(i&&(e=N((function(){j?X.emit("unhandledRejection",r,n):dt(tt,n,r)})),t.rejection=j||mt(t)?ot:st,e.error))throw e.value}))},mt=function(t){return t.rejection!==st&&!t.parent},gt=function(t){h(A,u,(function(){var e=t.facade;j?X.emit("rejectionHandled",e):dt(et,e,t.value)}))},vt=function(t,e,n){return function(r){t(e,r,n)}},yt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,ft(t,!0))},wt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw K("Promise can't be resolved itself");var r=lt(e);r?C((function(){var n={done:!1};try{h(r,e,vt(wt,n,t),vt(yt,n,t))}catch(i){yt(n,i,t)}})):(t.value=e,t.state=rt,ft(t,!1))}catch(i){yt({done:!1},i,t)}}};if(ct&&(H=function(t){_(this,G),y(t),h(r,this);var e=$(this);try{t(vt(wt,e),vt(yt,e))}catch(n){yt(e,n)}},G=H.prototype,r=function(t){B(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:nt,value:void 0})},r.prototype=p(G,{then:function(t,e){var n=q(this),r=Y(S(this,H));return n.parent=!0,r.ok=!w(t)||t,r.fail=w(e)&&e,r.domain=j?X.domain:void 0,n.state==nt?n.reactions.add(r):C((function(){ht(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=$(t);this.promise=t,this.resolve=vt(wt,e),this.reject=vt(yt,e)},x.f=Y=function(t){return t===H||t===s?new i(t):J(t)},!c&&w(f)&&z!==Object.prototype)){o=z.then,at||(d(z,"then",(function(t,e){var n=this;return new H((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),d(z,"catch",G["catch"],{unsafe:!0}));try{delete z.constructor}catch(bt){}m&&m(z,G)}a({global:!0,wrap:!0,forced:ct},{Promise:H}),g(H,V,!1,!0),v(V),s=l(V),a({target:V,stat:!0,forced:ct},{reject:function(t){var e=Y(this);return h(e.reject,void 0,t),e.promise}}),a({target:V,stat:!0,forced:c||ct},{resolve:function(t){return k(c&&this===s?H:this,t)}}),a({target:V,stat:!0,forced:ut},{all:function(t){var e=this,n=Y(e),r=n.resolve,i=n.reject,s=N((function(){var n=y(e.resolve),s=[],o=0,a=1;T(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=Y(e),r=n.reject,i=N((function(){var i=y(e.resolve);T(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},4916:function(t,e,n){"use strict";var r=n(2109),i=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},7601:function(t,e,n){"use strict";n(4916);var r=n(2109),i=n(7854),s=n(6916),o=n(1702),a=n(614),c=n(111),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=i.Error,h=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!a(e))return h(this,t);var n=s(e,this,t);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},2023:function(t,e,n){"use strict";var r=n(2109),i=n(1702),s=n(3929),o=n(4488),a=n(1340),c=n(4964),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(a(o(this)),a(s(t)),arguments.length>1?arguments[1]:void 0)}})},8783:function(t,e,n){"use strict";var r=n(8710).charAt,i=n(1340),s=n(9909),o=n(654),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},1817:function(t,e,n){"use strict";var r=n(2109),i=n(9781),s=n(7854),o=n(1702),a=n(2597),c=n(614),u=n(7976),l=n(1340),h=n(3070).f,f=n(9920),d=s.Symbol,p=d&&d.prototype;if(i&&c(d)&&(!("description"in p)||void 0!==d().description)){var m={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new d(t):void 0===t?d():d(t);return""===t&&(m[e]=!0),e};f(g,d),g.prototype=p,p.constructor=g;var v="Symbol(test)"==String(d("test")),y=o(p.toString),w=o(p.valueOf),b=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),E=o("".slice);h(p,"description",{configurable:!0,get:function(){var t=w(this),e=y(t);if(a(m,t))return"";var n=v?E(e,7,-1):_(e,b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},2165:function(t,e,n){var r=n(7235);r("iterator")},2526:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(2104),a=n(6916),c=n(1702),u=n(1913),l=n(9781),h=n(133),f=n(7293),d=n(2597),p=n(3157),m=n(614),g=n(111),v=n(7976),y=n(2190),w=n(9670),b=n(7908),_=n(5656),E=n(4948),T=n(1340),I=n(9114),S=n(30),A=n(1956),C=n(8006),k=n(1156),O=n(5181),x=n(1236),N=n(3070),R=n(6048),D=n(5296),L=n(206),P=n(1320),M=n(2309),j=n(6200),U=n(3501),F=n(9711),V=n(5112),$=n(6061),B=n(7235),q=n(8003),z=n(9909),H=n(2092).forEach,G=j("hidden"),K="Symbol",W="prototype",X=V("toPrimitive"),Y=z.set,J=z.getterFor(K),Q=Object[W],Z=i.Symbol,tt=Z&&Z[W],et=i.TypeError,nt=i.QObject,rt=s("JSON","stringify"),it=x.f,st=N.f,ot=k.f,at=D.f,ct=c([].push),ut=M("symbols"),lt=M("op-symbols"),ht=M("string-to-symbol-registry"),ft=M("symbol-to-string-registry"),dt=M("wks"),pt=!nt||!nt[W]||!nt[W].findChild,mt=l&&f((function(){return 7!=S(st({},"a",{get:function(){return st(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(Q,e);r&&delete Q[e],st(t,e,n),r&&t!==Q&&st(Q,e,r)}:st,gt=function(t,e){var n=ut[t]=S(tt);return Y(n,{type:K,tag:t,description:e}),l||(n.description=e),n},vt=function(t,e,n){t===Q&&vt(lt,e,n),w(t);var r=E(e);return w(n),d(ut,r)?(n.enumerable?(d(t,G)&&t[G][r]&&(t[G][r]=!1),n=S(n,{enumerable:I(0,!1)})):(d(t,G)||st(t,G,I(1,{})),t[G][r]=!0),mt(t,r,n)):st(t,r,n)},yt=function(t,e){w(t);var n=_(e),r=A(n).concat(Tt(n));return H(r,(function(e){l&&!a(bt,n,e)||vt(t,e,n[e])})),t},wt=function(t,e){return void 0===e?S(t):yt(S(t),e)},bt=function(t){var e=E(t),n=a(at,this,e);return!(this===Q&&d(ut,e)&&!d(lt,e))&&(!(n||!d(this,e)||!d(ut,e)||d(this,G)&&this[G][e])||n)},_t=function(t,e){var n=_(t),r=E(e);if(n!==Q||!d(ut,r)||d(lt,r)){var i=it(n,r);return!i||!d(ut,r)||d(n,G)&&n[G][r]||(i.enumerable=!0),i}},Et=function(t){var e=ot(_(t)),n=[];return H(e,(function(t){d(ut,t)||d(U,t)||ct(n,t)})),n},Tt=function(t){var e=t===Q,n=ot(e?lt:_(t)),r=[];return H(n,(function(t){!d(ut,t)||e&&!d(Q,t)||ct(r,ut[t])})),r};if(h||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,e=F(t),n=function(t){this===Q&&a(n,lt,t),d(this,G)&&d(this[G],e)&&(this[G][e]=!1),mt(this,e,I(1,t))};return l&&pt&&mt(Q,e,{configurable:!0,set:n}),gt(e,t)},tt=Z[W],P(tt,"toString",(function(){return J(this).tag})),P(Z,"withoutSetter",(function(t){return gt(F(t),t)})),D.f=bt,N.f=vt,R.f=yt,x.f=_t,C.f=k.f=Et,O.f=Tt,$.f=function(t){return gt(V(t),t)},l&&(st(tt,"description",{configurable:!0,get:function(){return J(this).description}}),u||P(Q,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),H(A(dt),(function(t){B(t)})),r({target:K,stat:!0,forced:!h},{for:function(t){var e=T(t);if(d(ht,e))return ht[e];var n=Z(e);return ht[e]=n,ft[n]=e,n},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(d(ft,t))return ft[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:wt,defineProperty:vt,defineProperties:yt,getOwnPropertyDescriptor:_t}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Et,getOwnPropertySymbols:Tt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),rt){var It=!h||f((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:It},{stringify:function(t,e,n){var r=L(arguments),i=e;if((g(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(m(i)&&(e=a(i,this,t,e)),!y(e))return e}),r[1]=e,o(rt,null,r)}})}if(!tt[X]){var St=tt.valueOf;P(tt,X,(function(t){return a(St,this)}))}q(Z,K),U[G]=!0},4747:function(t,e,n){var r=n(7854),i=n(8324),s=n(8509),o=n(8533),a=n(8880),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},3948:function(t,e,n){var r=n(7854),i=n(8324),s=n(8509),o=n(6992),a=n(8880),c=n(5112),u=c("iterator"),l=c("toStringTag"),h=o.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(s,"DOMTokenList")},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(2238),i="firebase",s="9.6.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},5319:function(t,e,n){"use strict";n.d(e,{Xb:function(){return ae},v0:function(){return cr},Aj:function(){return ue},e5:function(){return ce},w7:function(){return le}});var r=n(4444),i=n(2238);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function f(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===A()||"https:"===A()}function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);d(t,a)}}catch(s){if(s instanceof r.ZR)throw s;d(t,"network-request-failed")}}async function j(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&d(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?x(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=G(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(H(s.auth_time)),issuedAtTime:q(H(s.iat)),expirationTime:q(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function G(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s),null}}function K(t){const e=G(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=e;v(w&&T,t,"internal-error");const I=rt.fromJSON(this.name,T);v("string"===typeof w,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),it(f,t.name),it(d,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(y,t.name);const S=new st({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(_(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||_(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function ft(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function vt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)}function wt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function _t(t=(0,r.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new At(this),this.idTokenSubscription=new At(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function St(t){return(0,r.m9)(t)}class At{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Nt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Ct{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Rt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Rt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Ot(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class Pt extends Ct{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Dt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function jt(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Ut(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ft={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ct{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new $t({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new $t({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return jt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ut(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new $t({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class zt{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Bt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=qt(t);try{return new zt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return Rt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=zt.parseLink(e);return v(n,"argument-error"),Rt._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt extends Kt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch(e){return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Kt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return j(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=te(n),o=new Zt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await W(t,ne(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=G(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&d(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e,n=!1){const r="signIn",i=await ne(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oe(t,e){return se(St(t),e)}async function ae(t,e,n){const r=St(t),i=await Qt(r,{returnSecureToken:!0,email:e,password:n}),s=await Zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ce(t,e,n){return oe((0,r.m9)(t),Ht.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function le(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const de="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(de,"1"),this.storage.removeItem(de),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){const t=(0,r.z$)();return ft(t)||yt(t)}const ge=1e3,ve=10;class ye extends pe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=me()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ve):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ye.type="LOCAL";const we=ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends pe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}be.type="SESSION";const _e=be;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Te(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Ee(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te.receivers=[];class Se{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ie("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function Ce(t){Ae().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return"undefined"!==typeof Ae()["WorkerGlobalScope"]&&"function"===typeof Ae()["importScripts"]}async function Oe(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function xe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ne(){return ke()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="firebaseLocalStorageDb",De=1,Le="firebaseLocalStorage",Pe="fbase_key";class Me{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function je(t,e){return t.transaction([Le],e?"readwrite":"readonly").objectStore(Le)}function Ue(){const t=indexedDB.deleteDatabase(Re);return new Me(t).toPromise()}function Fe(){const t=indexedDB.open(Re,De);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Le,{keyPath:Pe})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Le)?e(n):(n.close(),await Ue(),e(await Fe()))}))}))}async function Ve(t,e,n){const r=je(t,!0).put({[Pe]:e,value:n});return new Me(r).toPromise()}async function $e(t,e){const n=je(t,!1).get(e),r=await new Me(n).toPromise();return void 0===r?null:r.value}function Be(t,e){const n=je(t,!0).delete(e);return new Me(n).toPromise()}const qe=800,ze=3;class He{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Fe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ze)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ke()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Te._getInstance(Ne()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Oe(),!this.activeServiceWorker)return;this.sender=new Se(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&xe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fe();return await Ve(t,de,"1"),await Be(t,de),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ve(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>$e(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Be(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=je(t,!1).getAll();return new Me(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}He.type="LOCAL";const Ge=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function We(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)}))}function Je(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Je("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe="recaptcha";async function Ze(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===Qe,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Ke(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(t){this.providerId=tn.PROVIDER_ID,this.auth=St(t)}verifyPhoneNumber(t,e){return Ze(this.auth,t,(0,r.m9)(e))}static credential(t,e){return $t._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tn.credentialFromTaggedObject(e)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?$t._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class nn extends Ct{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function rn(t){return se(t.auth,new nn(t),t.bypassAuthState)}function sn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ie(n,new nn(t),t.bypassAuthState)}async function on(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new nn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:d(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new O(2e3,1e4);class un extends an{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Ie();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,cn.get())};t()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",hn=new Map;class fn extends an{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await dn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(t,e){const n=mn(e),r=pn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function pn(t){return _(t._redirectPersistence)}function mn(t){return ct(ln,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e,n=!1){const r=St(t),i=en(r,e),s=new fn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class yn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!_n(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!bn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(t))}saveEventToCache(t){this.cachedEventUids.add(wn(t)),this.lastProcessedEventTime=Date.now()}}function wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function bn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function _n(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function Sn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await En(t);for(const r of e)try{if(An(r))return}catch(n){}d(t,"unauthorized-domain")}function An(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!In.test(n))return!1;if(Tn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new O(3e4,6e4);function kn(){const t=Ae().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function On(t){return new Promise(((e,n)=>{var r,i,s;function o(){kn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kn(),n(p(t,"network-request-failed"))},timeout:Cn.get()})}if(null===(i=null===(r=Ae().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ae().gapi)||void 0===s?void 0:s.load)){const e=Je("iframefcb");return Ae()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ye(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw xn=null,t}))}let xn=null;function Nn(t){return xn=xn||On(t),xn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new O(5e3,15e3),Dn="__/auth/iframe",Ln="emulator/auth/iframe",Pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x(e,Ln):`https://${t.config.authDomain}/${Dn}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Mn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Un(t){const e=await Nn(t),n=Ae().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:jn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Ae().setTimeout((()=>{r(i)}),Rn.get());function o(){Ae().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,$n=600,Bn="_blank",qn="http://localhost";class zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Hn(t,e,n,i=Vn,s=$n){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Fn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=dt(l)?Bn:n),ht(l)&&(e=e||qn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(wt(l)&&"_self"!==c)return Gn(e||"",c),new zn(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new zn(f)}function Gn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="__/auth/handler",Wn="emulator/auth/handler";function Xn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Gt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Kt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yn(t)}?${(0,r.xO)(u).slice(1)}`}function Yn({config:t}){return t.emulator?x(t,Wn):`https://${t.authDomain}/${Kn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="webStorageSupport";class Qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_e,this._completeRedirectFn=gn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Xn(t,e,n,I(),r);return Hn(t,s,Ie())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ce(Xn(t,e,n,I(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Un(t),n=new yn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Jn,{type:Jn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Jn];void 0!==i&&e(!!i),d(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||ft()||yt()}}const Zn=Qn;class tr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class er extends tr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new er(t)}_finalizeEnroll(t,e,n){return fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return We(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(t){return er._fromCredential(t)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new It(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=St(t.getProvider("auth").getImmediate());return(t=>new sr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(rr,ir,or(t)),(0,i.KN)(rr,ir,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:Zn,persistence:[Ge,we,_e]})}ar("Browser")},6257:function(t,e,n){"use strict";n.d(e,{Bt:function(){return r.Bt},ET:function(){return r.ET},IO:function(){return r.IO},JU:function(){return r.JU},PL:function(){return r.PL},Xo:function(){return r.Xo},ad:function(){return r.ad},ar:function(){return r.ar},hJ:function(){return r.hJ},oe:function(){return r.oe}});var r=n(1294)},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,s=Object.create(i.prototype),o=new O(r||[]);return s._invoke=S(t,n,o),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function v(){}function y(){}var w={};c(w,s,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(x([])));_&&_!==n&&r.call(_,s)&&(w=_);var E=y.prototype=g.prototype=Object.create(w);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(i,s,o,a){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(t,e,n){var r=h;return function(i,s){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=A(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function x(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},T(I.prototype),c(I.prototype,o,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new I(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(E),c(E,a,"Generator"),c(E,s,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var r=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,o=function(t){return encodeURIComponent(t).replace(r,i).replace(s,",")};function a(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var r,i=n||l;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(u):u(o)}return r}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function l(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=a(n.shift()),i=n.length>0?a(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return o(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(o(e)):r.push(o(e)+"="+o(t)))})),r.join("&")}return o(e)+"="+o(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function d(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=p(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:v(e,i),matched:t?g(t):[]};return n&&(o.redirectedFrom=v(n,i)),Object.freeze(o)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=p(t[n]);return e}return t}var m=d(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function v(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||h;return(n||"/")+s(r)+i}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function b(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var n in e)if(!(n in t))return!1;return!0}function E(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,i=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=r.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,f=!1;while(s&&s._routerRoot!==s){var d=s.$vnode?s.$vnode.data:{};d.routerView&&h++,d.keepAlive&&s._directInactive&&s._inactive&&(f=!0),s=s.$parent}if(o.routerViewDepth=h,f){var p=l[c],m=p&&p.component;return m?(p.configProps&&I(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),E(u)};var y=g.props&&g.props[c];return y&&(n(l[c],{route:u,configProps:y}),I(v,o,u,y)),a(v,o,i)}};function I(t,e,r,i){var s=e.props=S(r,i);if(s){s=e.props=n({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function A(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/+/g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},x=X,N=M,R=j,D=V,L=W,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],f=n[2],d=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=f&&null!=h&&h!==f,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:E?B(E):v?".*":"[^"+$(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function j(t,e){return V(M(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function H(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",z(n));return q(s,e)}function K(t,e,n){return W(M(t,n),e,n)}function W(t,e,n){O(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=$(a);else{var c=$(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=$(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,z(n)),e)}function X(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?H(t,e):O(t)?G(t,e,n):K(t,e,n)}x.parse=N,x.compile=R,x.tokensToFunction=D,x.tokensToRegExp=L;var Y=Object.create(null);function J(t,e,n){e=e||{};try{var r=Y[t]||(Y[t]=x.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Q(t,e,r,i){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=n({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&e){s=n({},s),s._normalized=!0;var a=n(n({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;s.path=J(u,a,"path "+e.path)}else 0;return s}var l=C(s.path||""),h=e&&e.path||"/",f=l.path?A(l.path,h,r||s.append):h,d=c(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var Z,tt=[String,Object],et=[String,Array],nt=function(){},rt={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,r=this.$router,i=this.$route,s=r.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=r.options.linkActiveClass,h=r.options.linkExactActiveClass,f=null==l?"router-link-active":l,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?f:this.activeClass,g=null==this.exactActiveClass?p:this.exactActiveClass,v=a.redirectedFrom?d(null,Q(a.redirectedFrom),null,r):a;u[g]=y(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:b(i,v);var w=u[g]?this.ariaCurrentValue:null,_=function(t){it(t)&&(e.replace?r.replace(o,nt):r.push(o,nt))},E={click:it};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=_})):E[this.event]=_;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":w};else{var S=st(this.$slots.default);if(S){S.isStatic=!1;var A=S.data=n({},S.data);for(var C in A.on=A.on||{},A.on){var k=A.on[C];C in E&&(A.on[C]=Array.isArray(k)?k:[k])}for(var O in E)O in A.on?A.on[O].push(E[O]):A.on[O]=_;var x=S.data.attrs=n({},S.data.attrs);x.href=c,x["aria-current"]=w}else T.on=E}return t(this.tag,T,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ot(t){if(!ot.installed||Z!==t){ot.installed=!0,Z=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",T),t.component("RouterLink",rt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var at="undefined"!==typeof window;function ct(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ut(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ut(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ht(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:lt(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?k(s+"/"+r.path):void 0;ut(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};ut(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function lt(t,e){var n=x(t,[],e);return n}function ht(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function ft(t,e){var n=ct(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){ct(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ct([e||t],r,i,s,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=Q(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),f(u,a,o)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],m=i[p];if(dt(m.regex,a.path,a.params))return f(m,a,o)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(d(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,p=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:p},void 0,n)}if(c){var m=pt(c,t),g=J(m,p,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,f(o,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):d(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function dt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?a(r[i]):r[i])}return!0}function pt(t,e){return A(t,e.parent?e.parent.path:"/",!0)}var mt=at&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var vt=gt();function yt(){return vt}function wt(t){return vt=t}var bt=Object.create(null);function _t(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=yt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",It),function(){window.removeEventListener("popstate",It)}}function Et(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=St(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Rt(t,s)})).catch((function(t){0})):Rt(o,s))}))}}function Tt(){var t=yt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function It(t){Tt(),t.state&&t.state.key&&wt(t.state.key)}function St(){var t=yt();if(t)return bt[t]}function At(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ct(t){return xt(t.x)||xt(t.y)}function kt(t){return{x:xt(t.x)?t.x:window.pageXOffset,y:xt(t.y)?t.y:window.pageYOffset}}function Ot(t){return{x:xt(t.x)?t.x:0,y:xt(t.y)?t.y:0}}function xt(t){return"number"===typeof t}var Nt=/^#\d/;function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Ot(i),e=At(r,i)}else Ct(t)&&(e=kt(t))}else n&&Ct(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Dt=at&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Tt();var r=window.history;try{if(e){var i=n({},r.state);i.key=yt(),r.replaceState(i,"",t)}else r.pushState({key:wt(gt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Pt(t){Lt(t,!0)}function Mt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var jt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ut(t,e){return Bt(t,e,jt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function Ft(t,e){var n=Bt(t,e,jt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Bt(t,e,jt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return Bt(t,e,jt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var qt=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return qt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Gt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t){return function(e,n,r){var i=!1,s=0,o=null;Wt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=Qt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:Z.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=Qt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Wt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Yt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Yt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Zt=function(t,e){this.router=t,this.base=te(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(at){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,r){var i=Wt(t,(function(t,r,i,s){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Xt(r?i.reverse():i)}function re(t,e){return"function"!==typeof t&&(t=Z.extend(t)),t.options[e]}function ie(t){return ne(t,"beforeRouteLeave",oe,!0)}function se(t){return ne(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function ae(t){return ne(t,"beforeRouteEnter",(function(t,e,n,r){return ce(t,n,r)}))}function ce(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}Zt.prototype.listen=function(t){this.cb=t},Zt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Zt.prototype.onError=function(t){this.errorCbs.push(t)},Zt.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Gt(t,jt.redirected)&&s===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},Zt.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s=function(t){!Gt(t)&&Ht(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=i.matched.length-1;if(y(t,i)&&o===a&&t.matched[o]===i.matched[a])return this.ensureURL(),t.hash&&Et(this.router,i,t,!1),s(Ft(i,t));var c=ee(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(ie(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Kt(h)),d=function(e,n){if(r.pending!==t)return s(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),s($t(i,t))):Ht(e)?(r.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ut(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(o){s(o)}};Mt(f,d,(function(){var n=ae(h),o=n.concat(r.router.resolveHooks);Mt(o,d,(function(){if(r.pending!==t)return s(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){E(t)}))}))}))},Zt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Zt.prototype.setupListeners=function(){},Zt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=le(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Dt&&n;r&&this.listeners.push(_t());var i=function(){var n=t.current,i=le(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Et(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Lt(k(r.base+t.fullPath)),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Pt(k(r.base+t.fullPath)),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(le(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Lt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return le(this.base)},e}(Zt);function le(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(k(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||de()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Dt&&n;r&&this.listeners.push(_t());var i=function(){var e=t.current;de()&&t.transitionTo(pe(),(function(n){r&&Et(t.router,n,e,!0),Dt||ve(n.fullPath)}))},s=Dt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ge(t.fullPath),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Et(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;pe()!==e&&(t?ge(e):ve(e))},e.prototype.getCurrentLocation=function(){return pe()},e}(Zt);function fe(t){var e=le(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function de(){var t=pe();return"/"===t.charAt(0)||(ve("/"+t),!1)}function pe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ge(t){Dt?Lt(me(t)):window.location.hash=t}function ve(t){Dt?Pt(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Gt(t,jt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Zt),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Dt&&!1!==t.fallback,this.fallback&&(e="hash"),at||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function _e(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ee(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof he){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Dt&&i;s&&"fullPath"in t&&Et(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return _e(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return _e(this.resolveHooks,t)},we.prototype.afterEach=function(t){return _e(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Q(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Ee(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,be),we.install=ot,we.version="3.5.3",we.isNavigationFailure=Gt,we.NavigationFailureType=jt,we.START_LOCATION=m,at&&window.Vue&&window.Vue.use(we),e["Z"]=we},144:function(t,e,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var r=Object.freeze({});function i(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function w(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var T=/-(\w)/g,I=E((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),S=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,C=E((function(t){return t.replace(A,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var x=Function.prototype.bind?O:k;function N(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function R(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function L(t,e,n){}var P=function(t,e,n){return!1},M=function(t){return t};function j(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return j(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return j(t[n],e[n])}))}catch(c){return!1}}function U(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var V="data-server-rendered",$=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:L,parsePlatformTagName:M,mustUseProp:P,async:!0,_lifecycleHooks:B},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+z.source+".$_\\d]");function W(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,Y="__proto__"in{},J="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=Q&&WXEnvironment.platform.toLowerCase(),tt=J&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0,it=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Z),st=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(J)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,ct)}catch(So){}var ut=function(){return void 0===X&&(X=!J&&!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),X},lt=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,dt="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);ft="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=L,mt=0,gt=function(){this.id=mt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){w(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var vt=[];function yt(t){vt.push(t),gt.target=t}function wt(){vt.pop(),gt.target=vt[vt.length-1]}var bt=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,_t);var Et=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Tt(t){return new bt(void 0,void 0,void 0,String(t))}function It(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=Array.prototype,At=Object.create(St),Ct=["push","pop","shift","unshift","splice","sort","reverse"];Ct.forEach((function(t){var e=St[t];G(At,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var kt=Object.getOwnPropertyNames(At),Ot=!0;function xt(t){Ot=t}var Nt=function(t){this.value=t,this.dep=new gt,this.vmCount=0,G(t,"__ob__",this),Array.isArray(t)?(Y?Rt(t,At):Dt(t,At,kt),this.observeArray(t)):this.walk(t)};function Rt(t,e){t.__proto__=e}function Dt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];G(t,s,e[s])}}function Lt(t,e){var n;if(u(t)&&!(t instanceof bt))return _(t,"__ob__")&&t.__ob__ instanceof Nt?n=t.__ob__:Ot&&!ut()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Nt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,i){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Ut(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Lt(e),s.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function jt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ut(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ut(e)}Nt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Nt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var Ft=q.optionMergeStrategies;function Vt(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&h(r)&&h(i)&&Vt(r,i):Mt(t,n,i));return t}function $t(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Vt(r,i):i}:e?t?function(){return Vt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function zt(t,e,n,r){var i=Object.create(t||null);return e?R(i,e):i}Ft.data=function(t,e,n){return n?$t(t,e,n):e&&"function"!==typeof e?t:$t(t,e)},B.forEach((function(t){Ft[t]=Bt})),$.forEach((function(t){Ft[t+"s"]=zt})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in R(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return R(i,t),e&&R(i,e),i},Ft.provide=$t;var Ht=function(t,e){return void 0===e?t:e};function Gt(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=I(i),o[s]={type:null})}else if(h(n))for(var a in n)i=n[a],s=I(a),o[s]=h(i)?i:{type:i};else 0;t.props=o}}function Kt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var s in n){var o=n[s];r[s]=h(o)?R({from:s},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Xt(t,e,n){if("function"===typeof e&&(e=e.options),Gt(e,n),Kt(e,n),Wt(e),!e._base&&(e.extends&&(t=Xt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Xt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)_(t,s)||a(s);function a(r){var i=Ft[r]||Ht;o[r]=i(t[r],e[r],n,r)}return o}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var s=I(n);if(_(i,s))return i[s];var o=S(s);if(_(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Jt(t,e,n,r){var i=e[t],s=!_(n,t),o=n[t],a=ne(Boolean,i.type);if(a>-1)if(s&&!_(i,"default"))o=!1;else if(""===o||o===C(t)){var c=ne(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Qt(r,i,t);var u=Ot;xt(!0),Lt(o),xt(u)}return o}function Qt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==te(e.type)?r.call(t):r}}var Zt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(ee(e[n],t))return n;return-1}function re(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(So){se(So,r,"errorCaptured hook")}}}se(t,e,n)}finally{wt()}}function ie(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(t){return re(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(So){re(So,r,i)}return s}function se(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(So){So!==t&&oe(So,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!J&&!Q||"undefined"===typeof console)throw t;console.error(t)}var ae,ce=!1,ue=[],le=!1;function he(){le=!1;var t=ue.slice(0);ue.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var fe=Promise.resolve();ae=function(){fe.then(he),it&&setTimeout(L)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var de=1,pe=new MutationObserver(he),me=document.createTextNode(String(de));pe.observe(me,{characterData:!0}),ae=function(){de=(de+1)%2,me.data=String(de)},ce=!0}function ge(t,e){var n;if(ue.push((function(){if(t)try{t.call(e)}catch(So){re(So,e,"nextTick")}else n&&n(e)})),le||(le=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ft;function ye(t){we(t,ve),ve.clear()}function we(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)we(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)we(t[r[n]],e)}}}var be=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function _e(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return ie(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)ie(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function Ee(t,e,n,r,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=_e(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(h=be(c),r(h.name,e[c],h.capture))}function Te(t,e,n){var r;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),w(r.fns,c)}i(a)?r=_e([c]):s(a.fns)&&o(a.merged)?(r=a,r.fns.push(c)):r=_e([a,c]),r.merged=!0,t[e]=r}function Ie(t,e,n){var r=e.options.props;if(!i(r)){var o={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=C(u);Se(o,c,u,l,!0)||Se(o,a,u,l,!1)}return o}}function Se(t,e,n,r,i){if(s(e)){if(_(e,n))return t[n]=e[n],i||delete e[n],!0;if(_(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Ae(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ce(t){return c(t)?[Tt(t)]:Array.isArray(t)?Oe(t):void 0}function ke(t){return s(t)&&s(t.text)&&a(t.isComment)}function Oe(t,e){var n,r,a,u,l=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(a=l.length-1,u=l[a],Array.isArray(r)?r.length>0&&(r=Oe(r,(e||"")+"_"+n),ke(r[0])&&ke(u)&&(l[a]=Tt(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?ke(u)?l[a]=Tt(u.text+r):""!==r&&l.push(Tt(r)):ke(r)&&ke(u)?l[a]=Tt(u.text+r.text):(o(t._isVList)&&s(r.tag)&&i(r.key)&&s(e)&&(r.key="__vlist"+e+"_"+n+"__"),l.push(r)));return l}function xe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ne(t){var e=Re(t.$options.inject,t);e&&(xt(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),xt(!0))}function Re(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Le)&&delete n[u];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Me(t,e,n){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==r&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=je(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Ue(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),G(i,"$stable",o),G(i,"$key",a),G(i,"$hasNormal",s),i}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ce(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ue(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,i,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(dt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=e(t[a],a,r);return s(n)||(n=[]),n._isVList=!0,n}function Ve(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=R(R({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function $e(t){return Yt(this.$options,"filters",t,!0)||M}function Be(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var s=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Be(i,r):s?Be(s,t):r?C(r)!==e:void 0===t}function ze(t,e,n,r,i){if(n)if(u(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||q.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(o),u=C(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ke(r,"__static__"+t,!1)),r}function Ge(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Xe(t,e){if(e)if(h(e)){var n=t.on=t.on?R({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Je(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Qe(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=Ge,t._n=g,t._s=m,t._l=Fe,t._t=Ve,t._q=j,t._i=U,t._m=He,t._f=$e,t._k=qe,t._b=ze,t._v=Tt,t._e=Et,t._u=Ye,t._g=Xe,t._d=Je,t._p=Qe}function tn(t,e,n,i,s){var a,c=this,u=s.options;_(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Re(u.inject,i),this.slots=function(){return c.$slots||Me(t.scopedSlots,c.$slots=De(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Me(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Me(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=pn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return pn(a,t,e,n,r,h)}}function en(t,e,n,i,o){var a=t.options,c={},u=a.props;if(s(u))for(var l in u)c[l]=Jt(l,u,e||r);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new tn(n,c,o,i,t),f=a.render.call(null,h._c,h);if(f instanceof bt)return nn(f,n,h.parent,a,h);if(Array.isArray(f)){for(var d=Ce(f)||[],p=new Array(d.length),m=0;m<d.length;m++)p[m]=nn(d[m],n,h.parent,a,h);return p}}function nn(t,e,n,r,i){var s=It(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function rn(t,e){for(var n in e)t[I(n)]=e[n]}Ze(tn.prototype);var sn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sn.prepatch(n,n)}else{var r=t.componentInstance=cn(t,Rn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),t.data.keepAlive&&(e._isMounted?tr(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Vn(e,!0):e.$destroy())}},on=Object.keys(sn);function an(t,e,n,r,a){if(!i(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=In(l,c),void 0===t))return Tn(l,e,n,r,a);e=e||{},Tr(t),s(e.model)&&hn(t.options,e);var h=Ie(e,t,a);if(o(t.options.functional))return en(t,h,e,n,r);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}un(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:r},l);return m}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function un(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],s=sn[r];i===s||i&&i._merged||(e[r]=i?ln(s,i):s)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),o=i[r],a=e.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var fn=1,dn=2;function pn(t,e,n,r,i,s){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),mn(t,e,n,r,i)}function mn(t,e,n,r,i){if(s(n)&&s(n.__ob__))return Et();if(s(n)&&s(n.is)&&(e=n.is),!e)return Et();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Ce(r):i===fn&&(r=Ae(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),o=q.isReservedTag(e)?new bt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(c=Yt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):an(c,n,t,r,e)):o=an(e,n,t,r);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):Et()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,a=t.children.length;r<a;r++){var c=t.children[r];s(c.tag)&&(i(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function vn(t){u(t.style)&&ye(t.style),u(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=De(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return pn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return pn(t,e,n,r,i,!0)};var s=n&&n.data;Pt(t,"$attrs",s&&s.attrs||r,null,!0),Pt(t,"$listeners",e._parentListeners||r,null,!0)}var wn,bn=null;function _n(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Me(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(So){re(So,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=Et()),t.parent=i,t}}function En(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Tn(t,e,n,r,i){var s=Et();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function In(t,e){if(o(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=bn;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var h=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=F((function(n){t.resolved=En(n,e),a?r.length=0:h(!0)})),d=F((function(e){s(t.errorComp)&&(t.error=!0,h(!0))})),m=t(f,d);return u(m)&&(p(m)?i(t.resolved)&&m.then(f,d):p(m.component)&&(m.component.then(f,d),s(m.error)&&(t.errorComp=En(m.error,e)),s(m.loading)&&(t.loadingComp=En(m.loading,e),0===m.delay?t.loading=!0:c=setTimeout((function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&d(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Pe(n)))return n}}function An(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&xn(t,e)}function Cn(t,e){wn.$on(t,e)}function kn(t,e){wn.$off(t,e)}function On(t,e){var n=wn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function xn(t,e,n){wn=t,Ee(e,n||{},Cn,kn,On,t),wn=void 0}function Nn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)ie(n[s],e,r,e,i)}return e}}var Rn=null;function Dn(t){var e=Rn;return Rn=t,function(){Rn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Dn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$n(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$n(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Mn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Et),$n(t,"beforeMount"),r=function(){t._update(t._render(),n)},new ir(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&$n(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,$n(t,"mounted")),t}function jn(t,e,n,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){xt(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Jt(d,p,e,t)}xt(!0),t.$options.propsData=e}n=n||r;var m=t.$options._parentListeners;t.$options._parentListeners=n,xn(t,n,m),u&&(t.$slots=De(s,i.context),t.$forceUpdate())}function Un(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,Un(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);$n(t,"activated")}}function Vn(t,e){if((!e||(t._directInactive=!0,!Un(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Vn(t.$children[n]);$n(t,"deactivated")}}function $n(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)ie(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),wt()}var Bn=[],qn=[],zn={},Hn=!1,Gn=!1,Kn=0;function Wn(){Kn=Bn.length=qn.length=0,zn={},Hn=Gn=!1}var Xn=0,Yn=Date.now;if(J&&!et){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Jn.now()})}function Qn(){var t,e;for(Xn=Yn(),Gn=!0,Bn.sort((function(t,e){return t.id-e.id})),Kn=0;Kn<Bn.length;Kn++)t=Bn[Kn],t.before&&t.before(),e=t.id,zn[e]=null,t.run();var n=qn.slice(),r=Bn.slice();Wn(),er(n),Zn(r),lt&&q.devtools&&lt.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function tr(t){t._inactive=!1,qn.push(t)}function er(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function nr(t){var e=t.id;if(null==zn[e]){if(zn[e]=!0,Gn){var n=Bn.length-1;while(n>Kn&&Bn[n].id>t.id)n--;Bn.splice(n+1,0,t)}else Bn.push(t);Hn||(Hn=!0,ge(Qn))}}var rr=0,ir=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(So){if(!this.user)throw So;re(So,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),wt(),this.cleanupDeps()}return t},ir.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ir.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||w(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var sr={enumerable:!0,configurable:!0,get:L,set:L};function or(t,e,n){sr.get=function(){return this[e][n]},sr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,sr)}function ar(t){t._watchers=[];var e=t.$options;e.props&&cr(t,e.props),e.methods&&gr(t,e.methods),e.data?ur(t):Lt(t._data={},!0),e.computed&&fr(t,e.computed),e.watch&&e.watch!==ot&&vr(t,e.watch)}function cr(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||xt(!1);var o=function(s){i.push(s);var o=Jt(s,e,n,t);Pt(r,s,o),s in t||or(t,"_props",s)};for(var a in e)o(a);xt(!0)}function ur(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},h(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&_(r,s)||H(s)||or(t,"_data",s)}Lt(e,!0)}function lr(t,e){yt();try{return t.call(e,e)}catch(So){return re(So,e,"data()"),{}}finally{wt()}}var hr={lazy:!0};function fr(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new ir(t,o||L,L,hr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ut();"function"===typeof n?(sr.get=r?pr(e):mr(n),sr.set=L):(sr.get=n.get?r&&!1!==n.cache?pr(e):mr(n.get):L,sr.set=n.set||L),Object.defineProperty(t,e,sr)}function pr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function mr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:x(e[n],t)}function vr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function wr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var r=this;if(h(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new ir(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';yt(),ie(e,r,[i.value],r,s),wt()}return function(){i.teardown()}}}var br=0;function _r(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?Er(e,t):e.$options=Xt(Tr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),An(e),yn(e),$n(e,"beforeCreate"),Ne(e),ar(e),xe(e),$n(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Er(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tr(t){var e=t.options;if(t.super){var n=Tr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Ir(t);i&&R(t.extendOptions,i),e=t.options=Xt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ir(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Sr(t){this._init(t)}function Ar(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Cr(t){t.mixin=function(t){return this.options=Xt(this.options,t),this}}function kr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Xt(n.options,t),o["super"]=n,o.options.props&&Or(o),o.options.computed&&xr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=R({},o.options),i[r]=o,o}}function Or(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function xr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Nr(t){$.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Rr(t){return t&&(t.Ctor.options.name||t.tag)}function Dr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Lr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pr(n,s,r,i)}}}function Pr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}_r(Sr),wr(Sr),Nn(Sr),Pn(Sr),_n(Sr);var Mr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Mr,exclude:Mr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Rr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Pr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Lr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Lr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var r=Rr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Dr(s,r))||o&&r&&Dr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Ur={KeepAlive:jr};function Fr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:R,mergeOptions:Xt,defineReactive:Pt},t.set=Mt,t.delete=jt,t.nextTick=ge,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),$.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,Ur),Ar(t),Cr(t),kr(t),Nr(t)}Fr(Sr),Object.defineProperty(Sr.prototype,"$isServer",{get:ut}),Object.defineProperty(Sr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Sr,"FunctionalRenderContext",{value:tn}),Sr.version="2.6.14";var Vr=v("style,class"),$r=v("input,textarea,option,select,progress"),Br=function(t,e,n){return"value"===n&&$r(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=v("contenteditable,draggable,spellcheck"),zr=v("events,caret,typing,plaintext-only"),Hr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&zr(e)?e:"true"},Gr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Xr=function(t){return Wr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Jr(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Qr(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Qr(e,n.data));return Zr(e.staticClass,e.class)}function Qr(t,e){return{staticClass:ti(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Zr(t,e){return s(t)||s(e)?ti(t,ei(e)):""}function ti(t,e){return t?e?t+" "+e:t:e||""}function ei(t){return Array.isArray(t)?ni(t):u(t)?ri(t):"string"===typeof t?t:""}function ni(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=ei(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ri(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},si=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(t){return si(t)||oi(t)};function ci(t){return oi(t)?"svg":"math"===t?"math":void 0}var ui=Object.create(null);function li(t){if(!J)return!0;if(ai(t))return!1;if(t=t.toLowerCase(),null!=ui[t])return ui[t];var e=document.createElement(t);return t.indexOf("-")>-1?ui[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ui[t]=/HTMLUnknownElement/.test(e.toString())}var hi=v("text,number,password,search,email,tel,url");function fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pi(t,e){return document.createElementNS(ii[t],e)}function mi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function vi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function wi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function _i(t){return t.nextSibling}function Ei(t){return t.tagName}function Ti(t,e){t.textContent=e}function Ii(t,e){t.setAttribute(e,"")}var Si=Object.freeze({createElement:di,createElementNS:pi,createTextNode:mi,createComment:gi,insertBefore:vi,removeChild:yi,appendChild:wi,parentNode:bi,nextSibling:_i,tagName:Ei,setTextContent:Ti,setStyleScope:Ii}),Ai={create:function(t,e){Ci(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ci(t,!0),Ci(e))},destroy:function(t){Ci(t,!0)}};function Ci(t,e){var n=t.data.ref;if(s(n)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?w(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var ki=new bt("",{},[]),Oi=["create","activate","update","remove","destroy"];function xi(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&Ni(t,e)||o(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ni(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||hi(r)&&hi(i)}function Ri(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function Di(t){var e,n,r={},a=t.modules,u=t.nodeOps;for(e=0;e<Oi.length;++e)for(r[Oi[e]]=[],n=0;n<a.length;++n)s(a[n][Oi[e]])&&r[Oi[e]].push(a[n][Oi[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);s(e)&&u.removeChild(e,t)}function d(t,e,n,r,i,a,c){if(s(t.elm)&&s(a)&&(t=a[c]=It(t)),t.isRootInsert=!i,!p(t,e,n,r)){var l=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),E(t),w(t,h,e),s(l)&&_(t,e),y(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var i=t.data;if(s(i)){var a=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),o(a)&&g(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(_(t,e),E(t)):(Ci(t),e.push(t))}function g(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](ki,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function w(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function _(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ki,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(ki,t),s(e.insert)&&n.push(t))}function E(t){var e;if(s(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}s(e=Rn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,s){for(;r<=i;++r)d(n[r],s,t,e,!1,n,r)}function I(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(A(r),I(r)):f(r.elm))}}function A(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=h(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&A(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else f(t.elm)}function C(t,e,n,r,o){var a,c,l,h,f=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,w=n[0],b=n[y],_=!o;while(f<=m&&p<=y)i(g)?g=e[++f]:i(v)?v=e[--m]:xi(g,w)?(O(g,w,r,n,p),g=e[++f],w=n[++p]):xi(v,b)?(O(v,b,r,n,y),v=e[--m],b=n[--y]):xi(g,b)?(O(g,b,r,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++f],b=n[--y]):xi(v,w)?(O(v,w,r,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],w=n[++p]):(i(a)&&(a=Ri(e,f,m)),c=s(w.key)?a[w.key]:k(w,e,f,m),i(c)?d(w,r,t,g.elm,!1,n,p):(l=e[c],xi(l,w)?(O(l,w,r,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):d(w,r,t,g.elm,!1,n,p)),w=n[++p]);f>m?(h=i(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,r)):p>y&&S(e,f,m)}function k(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&xi(t,o))return i}}function O(t,e,n,a,c,l){if(t!==e){s(e.elm)&&s(a)&&(e=a[c]=It(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,m=e.children;if(s(d)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}i(e.text)?s(p)&&s(m)?p!==m&&C(h,p,m,n,l):s(m)?(s(t.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):s(p)?S(p,0,p.length-1):s(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function x(t,e,n){if(o(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=v("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var i,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(a)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!R(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,_(e,n);break}!d&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,d(e,h);else{var f=s(t.nodeType);if(!f&&xi(t,e))O(t,e,h,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(V)&&(t.removeAttribute(V),n=!0),o(n)&&R(t,e,h))return x(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(d(e,h,p._leaveCb?null:m,u.nextSibling(p)),s(e.parent)){var g=e.parent,v=b(e);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ki,g);var _=g.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Ci(g);g=g.parent}}s(m)?S([t],0,0):s(t.tag)&&I(t)}}return x(e,h,c),e.elm}s(t)&&I(t)}}var Li={create:Pi,update:Pi,destroy:function(t){Pi(t,ki)}};function Pi(t,e){(t.data.directives||e.data.directives)&&Mi(t,e)}function Mi(t,e){var n,r,i,s=t===ki,o=e===ki,a=Ui(t.data.directives,t.context),c=Ui(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Vi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Vi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Vi(u[n],"inserted",e,t)};s?Te(e,"insert",h):h()}if(l.length&&Te(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Vi(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Vi(a[n],"unbind",t,t,o)}var ji=Object.create(null);function Ui(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=ji),i[Fi(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Vi(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(So){re(So,n.context,"directive "+t.name+" "+e+" hook")}}var $i=[Ai,Li];function Bi(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var r,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in s(l.__ob__)&&(l=e.data.attrs=R({},l)),l)o=l[r],a=u[r],a!==o&&qi(c,r,o,e.data.pre);for(r in(et||rt)&&l.value!==u.value&&qi(c,"value",l.value),u)i(l[r])&&(Wr(r)?c.removeAttributeNS(Kr,Xr(r)):qr(r)||c.removeAttribute(r))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?zi(t,e,n):Gr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,Hr(e,n)):Wr(e)?Yr(n)?t.removeAttributeNS(Kr,Xr(e)):t.setAttributeNS(Kr,e,n):zi(t,e,n)}function zi(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Hi={create:Bi,update:Bi};function Gi(t,e){var n=e.elm,r=e.data,o=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Jr(e),c=n._transitionClasses;s(c)&&(a=ti(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Wi={create:Gi,update:Gi},Xi="__r",Yi="__c";function Ji(t){if(s(t[Xi])){var e=et?"change":"input";t[e]=[].concat(t[Xi],t[e]||[]),delete t[Xi]}s(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Qi(t,e,n){var r=Ki;return function i(){var s=e.apply(null,arguments);null!==s&&es(t,i,n,r)}}var Zi=ce&&!(st&&Number(st[1])<=53);function ts(t,e,n,r){if(Zi){var i=Xn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Ki.addEventListener(t,e,at?{capture:n,passive:r}:n)}function es(t,e,n,r){(r||Ki).removeEventListener(t,e._wrapper||e,n)}function ns(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Ki=e.elm,Ji(n),Ee(n,r,ts,es,Qi,e.context),Ki=void 0}}var rs,is={create:ns,update:ns};function ss(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in s(c.__ob__)&&(c=e.data.domProps=R({},c)),a)n in c||(o[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=r;var u=i(r)?"":String(r);os(o,u)&&(o.value=u)}else if("innerHTML"===n&&oi(o.tagName)&&i(o.innerHTML)){rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+r+"</svg>";var l=rs.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(r!==a[n])try{o[n]=r}catch(So){}}}}function os(t,e){return!t.composing&&("OPTION"===t.tagName||as(t,e)||cs(t,e))}function as(t,e){var n=!0;try{n=document.activeElement!==t}catch(So){}return n&&t.value!==e}function cs(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var us={create:ss,update:ss},ls=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hs(t){var e=fs(t.style);return t.staticStyle?R(t.staticStyle,e):e}function fs(t){return Array.isArray(t)?D(t):"string"===typeof t?ls(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=hs(i.data))&&R(r,n)}(n=hs(t.data))&&R(r,n);var s=t;while(s=s.parent)s.data&&(n=hs(s.data))&&R(r,n);return r}var ps,ms=/^--/,gs=/\s*!important$/,vs=function(t,e,n){if(ms.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(C(e),n.replace(gs,""),"important");else{var r=ws(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},ys=["Webkit","Moz","ms"],ws=E((function(t){if(ps=ps||document.createElement("div").style,t=I(t),"filter"!==t&&t in ps)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var r=ys[n]+e;if(r in ps)return r}}));function bs(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var o,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=fs(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?R({},f):f;var d=ds(e,!0);for(a in h)i(d[a])&&vs(c,a,"");for(a in d)o=d[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var _s={create:bs,update:bs},Es=/\s+/;function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Es).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Is(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Es).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ss(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&R(e,As(t.name||"v")),R(e,t),e}return"string"===typeof t?As(t):void 0}}var As=E((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Cs=J&&!nt,ks="transition",Os="animation",xs="transition",Ns="transitionend",Rs="animation",Ds="animationend";Cs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xs="WebkitTransition",Ns="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Rs="WebkitAnimation",Ds="webkitAnimationEnd"));var Ls=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Ls((function(){Ls(t)}))}function Ms(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ts(t,e))}function js(t,e){t._transitionClasses&&w(t._transitionClasses,e),Is(t,e)}function Us(t,e,n){var r=Vs(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===ks?Ns:Ds,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Vs(t,e){var n,r=window.getComputedStyle(t),i=(r[xs+"Delay"]||"").split(", "),s=(r[xs+"Duration"]||"").split(", "),o=$s(i,s),a=(r[Rs+"Delay"]||"").split(", "),c=(r[Rs+"Duration"]||"").split(", "),u=$s(a,c),l=0,h=0;e===ks?o>0&&(n=ks,l=o,h=s.length):e===Os?u>0&&(n=Os,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?ks:Os:null,h=n?n===ks?s.length:c.length:0);var f=n===ks&&Fs.test(r[xs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function $s(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Bs(e)+Bs(t[n])})))}function Bs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Ss(t.data.transition);if(!i(r)&&!s(n._enterCb)&&1===n.nodeType){var o=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,h=r.enterActiveClass,f=r.appearClass,d=r.appearToClass,p=r.appearActiveClass,m=r.beforeEnter,v=r.enter,y=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,_=r.appear,E=r.afterAppear,T=r.appearCancelled,I=r.duration,S=Rn,A=Rn.$vnode;while(A&&A.parent)S=A.context,A=A.parent;var C=!S._isMounted||!t.isRootInsert;if(!C||_||""===_){var k=C&&f?f:c,O=C&&p?p:h,x=C&&d?d:l,N=C&&b||m,R=C&&"function"===typeof _?_:v,D=C&&E||y,L=C&&T||w,P=g(u(I)?I.enter:I);0;var M=!1!==o&&!nt,j=Gs(R),U=n._enterCb=F((function(){M&&(js(n,x),js(n,O)),U.cancelled?(M&&js(n,k),L&&L(n)):D&&D(n),n._enterCb=null}));t.data.show||Te(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,U)})),N&&N(n),M&&(Ms(n,k),Ms(n,O),Ps((function(){js(n,k),U.cancelled||(Ms(n,x),j||(Hs(P)?setTimeout(U,P):Us(n,a,U)))}))),t.data.show&&(e&&e(),R&&R(n,U)),M||j||U()}}}function zs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Ss(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var o=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,y=r.duration,w=!1!==o&&!nt,b=Gs(d),_=g(u(y)?y.leave:y);0;var E=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(js(n,l),js(n,h)),E.cancelled?(w&&js(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&(Ms(n,c),Ms(n,h),Ps((function(){js(n,c),E.cancelled||(Ms(n,l),b||(Hs(_)?setTimeout(E,_):Us(n,a,E)))}))),d&&d(n,E),w||b||E())}}function Hs(t){return"number"===typeof t&&!isNaN(t)}function Gs(t){if(i(t))return!1;var e=t.fns;return s(e)?Gs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ks(t,e){!0!==e.data.show&&qs(e)}var Ws=J?{create:Ks,activate:Ks,remove:function(t,e){!0!==t.data.show?zs(t,e):e()}}:{},Xs=[Hi,Wi,is,us,_s,Ws],Ys=Xs.concat($i),Js=Di({nodeOps:Si,modules:Ys});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&so(t,"input")}));var Qs={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Te(n,"postpatch",(function(){Qs.componentUpdated(t,e,n)})):Zs(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ro),t.addEventListener("compositionend",io),t.addEventListener("change",io),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,no);if(i.some((function(t,e){return!j(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return eo(t,i)})):e.value!==e.oldValue&&eo(e.value,i);s&&so(t,"change")}}}};function Zs(t,e,n){to(t,e,n),(et||rt)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=U(r,no(o))>-1,o.selected!==s&&(o.selected=s);else if(j(no(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!j(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function ro(t){t.target.composing=!0}function io(t){t.target.composing&&(t.target.composing=!1,so(t.target,"input"))}function so(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var ao={bind:function(t,e,n){var r=e.value;n=oo(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qs(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?qs(n,(function(){t.style.display=t.__vOriginalDisplay})):zs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},co={model:Qs,show:ao},uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(Sn(e.children)):t}function ho(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[I(s)]=i[s];return e}function fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function mo(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||Pe(t)},vo=function(t){return"show"===t.name},yo={name:"transition",props:uo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var r=this.mode;0;var i=n[0];if(po(this.$vnode))return i;var s=lo(i);if(!s)return i;if(this._leaving)return fo(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),u=this._vnode,l=lo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!mo(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},a);if("out-in"===r)return this._leaving=!0,Te(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fo(t,i);if("in-out"===r){if(Pe(s))return u;var f,d=function(){f()};Te(a,"afterEnter",d),Te(a,"enterCancelled",d),Te(h,"delayLeave",(function(t){f=t}))}}return i}}},wo=R({tag:String,moveClass:String},uo);delete wo.mode;var bo={props:wo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=o,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_o),t.forEach(Eo),t.forEach(To),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ms(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ns,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ns,t),n._moveCb=null,js(n,e))})}})))},methods:{hasMove:function(t,e){if(!Cs)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Is(n,t)})),Ts(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function _o(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Eo(t){t.data.newPos=t.elm.getBoundingClientRect()}function To(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var Io={Transition:yo,TransitionGroup:bo};Sr.config.mustUseProp=Br,Sr.config.isReservedTag=ai,Sr.config.isReservedAttr=Vr,Sr.config.getTagNamespace=ci,Sr.config.isUnknownElement=li,R(Sr.options.directives,co),R(Sr.options.components,Io),Sr.prototype.__patch__=J?Js:L,Sr.prototype.$mount=function(t,e){return t=t&&J?fi(t):void 0,Mn(this,t,e)},J&&setTimeout((function(){q.devtools&&lt&&lt.emit("init",Sr)}),0),e["Z"]=Sr},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{OI:function(){return L},Se:function(){return P},nv:function(){return M}});var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;g(t.concat(r),e.getChild(r),n.modules[r])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&o(this)},w={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};u(i,(function(e,n){s[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&O(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=I(t,o,n);r.forEachMutation((function(e,n){var r=o+n;A(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;C(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachChild((function(r,s){T(t,e,n.concat(s),r,i)}))}function I(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return S(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function S(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function A(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function C(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){v&&t===v||(v=t,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,w);var D=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=$(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),L=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=$(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),P=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||$(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=V((function(t,e){var n={};return U(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=$(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:D.bind(null,t),mapGetters:P.bind(null,t),mapMutations:L.bind(null,t),mapActions:M.bind(null,t)}};function U(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function $(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=H(),u=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),z(l)}h=o})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var r=H(),i=o(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),z(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+K(t.getHours(),2)+":"+K(t.getMinutes(),2)+":"+K(t.getSeconds(),2)+"."+K(t.getMilliseconds(),3)}function G(t,e){return new Array(e+1).join(t)}function K(t,e){return G("0",e-t.toString().length)+t}var W={Store:y,install:R,version:"3.6.2",mapState:D,mapMutations:L,mapGetters:P,mapActions:M,createNamespacedHelpers:j,createLogger:B};e["ZP"]=W},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return G},KN:function(){return X},Mq:function(){return W},Xd:function(){return $},ZF:function(){return K},qX:function(){return B}});var r=n(8463),i=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.21",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",S="@firebase/messaging-compat",A="@firebase/performance",C="@firebase/performance-compat",k="@firebase/remote-config",O="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",P="9.6.11",M="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[S]:"fire-fcm-compat",[A]:"fire-perf",[C]:"fire-perf-compat",[k]:"fire-rc",[O]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},U=new Map,F=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of U.values())V(n,t);return!0}function B(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},z=new s.LL("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=P;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const o=U.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw z.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of F.values())a.addComponent(r);const c=new H(t,n,a);return U.set(i,c),c}function W(t=M){const e=U.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function X(t,e,n){var i;let s=null!==(i=j[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}$(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y="firebase-heartbeat-database",J=1,Q="firebase-heartbeat-store";let Z=null;function tt(){return Z||(Z=(0,s.X3)(Y,J,((t,e)=>{switch(e){case 0:t.createObjectStore(Q)}})).catch((t=>{throw z.create("storage-open",{originalErrorMessage:t.message})}))),Z}async function et(t){try{const e=await tt();return e.transaction(Q).objectStore(Q).get(rt(t))}catch(e){throw z.create("storage-get",{originalErrorMessage:e.message})}}async function nt(t,e){try{const n=await tt(),r=n.transaction(Q,"readwrite"),i=r.objectStore(Q);return await i.put(e,rt(t)),r.complete}catch(n){throw z.create("storage-set",{originalErrorMessage:n.message})}}function rt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=1024,st=2592e6;class ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=at();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=st})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=at(),{heartbeatsToSend:e,unsentEntries:n}=ct(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function at(){const t=new Date;return t.toISOString().substring(0,10)}function ct(t,e=it){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),lt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function lt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){$(new r.wA("platform-logger",(t=>new o(t)),"PRIVATE")),$(new r.wA("heartbeat",(t=>new ot(t)),"PRIVATE")),X(c,u,t),X(c,u,"esm2017"),X("fire-js","")}ht("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6198:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(1539);function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},3019:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},4479:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){if(Array.isArray(t))return r(t)}n.d(e,{Z:function(){return c}});n(2526),n(1817),n(1539),n(2165),n(8783),n(3948),n(1038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n(7042),n(8309),n(4916),n(7601);function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}n(1703);function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||s(t)||o(t)||a()}}}]);
//# sourceMappingURL=chunk-vendors-legacy.131300df.js.map