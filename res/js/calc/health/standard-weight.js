!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=34)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",a=e[3];if(!a)return o;if(t&&"function"==typeof btoa){var n=(r=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[o].concat(i).concat([n]).join("\n")}var r;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(a[i]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&a[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),t.push(r))}},t}},function(e,t,o){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=o(3),i={},r=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,b=!1,l=function(){},u=null,p="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e){for(var t=0;t<e.length;t++){var o=e[t],a=i[o.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](o.parts[n]);for(;n<o.parts.length;n++)a.parts.push(g(o.parts[n]));a.parts.length>o.parts.length&&(a.parts.length=o.parts.length)}else{var r=[];for(n=0;n<o.parts.length;n++)r.push(g(o.parts[n]));i[o.id]={id:o.id,refs:1,parts:r}}}}function x(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function g(e){var t,o,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(b)return l;a.parentNode.removeChild(a)}if(c){var n=d++;a=s||(s=x()),t=v.bind(null,a,n,!1),o=v.bind(null,a,n,!0)}else a=x(),t=function(e,t){var o=t.css,a=t.media,n=t.sourceMap;a&&e.setAttribute("media",a);u.ssrId&&e.setAttribute(p,t.id);n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,a),o=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else o()}}e.exports=function(e,t,o,a){b=o,u=a||{};var r=n(e,t);return f(r),function(t){for(var o=[],a=0;a<r.length;a++){var s=r[a];(d=i[s.id]).refs--,o.push(d)}t?f(r=n(e,t)):r=[];for(a=0;a<o.length;a++){var d;if(0===(d=o[a]).refs){for(var b=0;b<d.parts.length;b++)d.parts[b]();delete i[d.id]}}}};var h,w=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function v(e,t,o,a){var n=o?"":a.css;if(e.styleSheet)e.styleSheet.cssText=w(t,n);else{var i=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e,t,o,a,n,i){var r,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(r=e,s=e.default);var b,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId=n),i?(b=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=b):a&&(b=a),b){var u=l.functional,p=u?l.render:l.beforeCreate;u?(l._injectStyles=b,l.render=function(e,t){return b.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,b):[b]}return{esModule:r,exports:s,options:l}}},function(e,t){e.exports=function(e,t){for(var o=[],a={},n=0;n<t.length;n++){var i=t[n],r=i[0],s={id:e+":"+n,css:i[1],media:i[2],sourceMap:i[3]};a[r]?a[r].parts.push(s):o.push(a[r]={id:r,parts:[s]})}return o}},function(e,t,o){"use strict";var a=o(5),n=o.n(a);t.a={el:"section.calculator",components:{"health-calculator-results":n.a},data:{sex:"man",value:0,grade:"",gaugeData:{}},computed:{sexName:function(){return"man"===this.sex?"남자":"woman"===this.sex?"여자":""}},watch:{},created:function(){this._created()},mounted:function(){this._mounted()},methods:{_created:function(){var e=this;this._defaults={sex:null,value:null},$("[v-model]",this.$el).each(function(t,o){var a=$(o),n=a.attr("id")||a.attr("name");e._defaults[n]=null})},_mounted:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(void 0!==this[e]?this._defaults[e]=this[e]:delete this._defaults[e])},reset:function(){for(var e in this._defaults)this._defaults.hasOwnProperty(e)&&(this[e]=this._defaults[e])},updateGrade:function(e){this.grade=e}}}},function(e,t,o){var a=o(2)(o(8),o(14),!1,function(e){o(6)},null,null);e.exports=a.exports},function(e,t,o){var a=o(7);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(1)("a1b970a2",a,!0,{})},function(e,t,o){(e.exports=o(0)(!1)).push([e.i,'strong{font-weight:700}.button-default{background-color:#f2f2f2;background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f2f2),to(#f2f2f2));background-image:linear-gradient(180deg,#f2f2f2,#f2f2f2);border:1px solid #bfbfbf;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px rgba(0,0,0,.2);border-radius:3px;cursor:pointer;display:inline-block;font-family:Verdana,sans-serif;font-size:12px;font-weight:400;line-height:20px;padding:9px 16px;margin:16px 0 0 16px;-webkit-transition:all 20ms ease-out;transition:all 20ms ease-out;vertical-align:top}.button-default,.button-default:visited{color:#8c8c8c;text-shadow:0 1px 0 hsla(0,0%,100%,.5)}.button-default:focus,.button-default:hover{background:#f2f2f2;border-color:#8c8c8c;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2;box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2}.button-default:active{background:#f2f2f2;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-default .fa{color:#bfbfbf;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-blue{background-color:#42b0e3;background-image:-webkit-gradient(linear,left top,left bottom,from(#42b0e3),to(#2ba9e3));background-image:linear-gradient(180deg,#42b0e3,#2ba9e3);border:1px solid #107db0;-webkit-box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3,0 2px 4px rgba(0,0,0,.2)}.button-blue,.button-blue:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-blue:focus,.button-blue:hover{background:#2ba9e3;border-color:#004c6f;-webkit-box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3;box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3}.button-blue:active{background:#2ba9e3;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-blue .fa{color:#107db0;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-green{background-color:#97cc76;background-image:-webkit-gradient(linear,left top,left bottom,from(#97cc76),to(#8bcc62));background-image:linear-gradient(180deg,#97cc76,#8bcc62);border:1px solid #5f993a;-webkit-box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b,0 2px 4px rgba(0,0,0,.2)}.button-green,.button-green:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-green:focus,.button-green:hover{background:#8bcc62;border-color:#326612;-webkit-box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b;box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b}.button-green:active{background:#8bcc62;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-green .fa{color:#5f993a;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-purple{background-color:#847bba;background-image:-webkit-gradient(linear,left top,left bottom,from(#847bba),to(#7568ba));background-image:linear-gradient(180deg,#847bba,#7568ba);border:1px solid #493e87;-webkit-box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba,0 2px 4px rgba(0,0,0,.2)}.button-purple,.button-purple:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-purple:focus,.button-purple:hover{background:#7568ba;border-color:#1f1654;-webkit-box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba;box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba}.button-purple:active{background:#7568ba;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-purple .fa{color:#493e87;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-orange{background-color:#f58a38;background-image:-webkit-gradient(linear,left top,left bottom,from(#f58a38),to(#f57c20));background-image:linear-gradient(180deg,#f58a38,#f57c20);border:1px solid #c25706;-webkit-box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851,0 2px 4px rgba(0,0,0,.2)}.button-orange,.button-orange:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-orange:focus,.button-orange:hover{background:#f57c20;border-color:#730;-webkit-box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851;box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851}.button-orange:active{background:#f57c20;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-orange .fa{color:#c25706;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-red{background-color:#ed6d64;background-image:-webkit-gradient(linear,left top,left bottom,from(#ed6d64),to(#ed574c));background-image:linear-gradient(180deg,#ed6d64,#ed574c);border:1px solid #ba3329;-webkit-box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b,0 2px 4px rgba(0,0,0,.2)}.button-red,.button-red:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-red:focus,.button-red:hover{background:#ed574c;border-color:#870c03;-webkit-box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b;box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b}.button-red:active{background:#ed574c;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-red .fa{color:#ba3329;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-yellow{background-color:#fce374;background-image:-webkit-gradient(linear,left top,left bottom,from(#fce374),to(#fcdf5b));background-image:linear-gradient(180deg,#fce374,#fcdf5b);border:1px solid #c9ae34;-webkit-box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d,0 2px 4px rgba(0,0,0,.2)}.button-yellow,.button-yellow:visited{color:#967d09;text-shadow:0 1px 0 hsla(0,0%,100%,.5)}.button-yellow:focus,.button-yellow:hover{background:#fcdf5b;border-color:#967d09;-webkit-box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d;box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d}.button-yellow:active{background:#fcdf5b;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-yellow .fa{color:#c9ae34;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button .fa{float:left;font-size:14px;line-height:20px;margin:-1px 8px 0 -4px;vertical-align:top}.vue-health-calculator-results .title{display:block;font-size:2.1em;text-align:center;line-height:2.4rem}.vue-health-calculator-results .title .health{font-weight:700;color:#f58222}.vue-health-calculator-results .title .health-grade{font-weight:400;color:#999}.vue-health-calculator-results .title .health-grade:before{content:"( "}.vue-health-calculator-results .title .health-grade:after{content:" )"}.vue-health-calculator-results.view-guide .vue-gauge.small ul{padding-bottom:1.5em}.vue-health-calculator-results.view-guide .vue-gauge.small .guide{letter-spacing:5px;display:block;border-top:1px solid #f58222;text-align:center;position:absolute;bottom:0;right:0;font-size:1.1rem;color:#f58222}',""])},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(9),n=o.n(a);t.default={props:{title:{type:String,required:!0},data:{type:Array,required:!0},value:{type:Number,required:!0},guideTitle:{type:String,required:!1}},components:{gauge:n.a},data:function(){return{grade:""}},mounted:function(){},methods:{updateGauge:function(e){if(this.grade=e.grade,this.$emit("update:grade",e.grade),this.guideTitle){for(var t=this.data.cells||[],o=t.length,a=100,n=0;n<o&&!t[n].guideBase;n++)a-=e.cellWidth[n];if(a>0){var i=$(this.$el).addClass("view-guide");i.find("span.guide").css("width",a+"%").html(this.guideTitle),i=null}}}}}},function(e,t,o){var a=o(2)(o(12),o(13),!1,function(e){o(10)},null,null);e.exports=a.exports},function(e,t,o){var a=o(11);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(1)("3d22c876",a,!0,{})},function(e,t,o){(e.exports=o(0)(!1)).push([e.i,'strong{font-weight:700}.button-default{background-color:#f2f2f2;background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f2f2),to(#f2f2f2));background-image:linear-gradient(180deg,#f2f2f2,#f2f2f2);border:1px solid #bfbfbf;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2,0 2px 4px rgba(0,0,0,.2);border-radius:3px;cursor:pointer;display:inline-block;font-family:Verdana,sans-serif;font-size:12px;font-weight:400;line-height:20px;padding:9px 16px;margin:16px 0 0 16px;-webkit-transition:all 20ms ease-out;transition:all 20ms ease-out;vertical-align:top}.button-default,.button-default:visited{color:#8c8c8c;text-shadow:0 1px 0 hsla(0,0%,100%,.5)}.button-default:focus,.button-default:hover{background:#f2f2f2;border-color:#8c8c8c;-webkit-box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2;box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 #d9d9d9,inset 0 0 0 1px #f2f2f2}.button-default:active{background:#f2f2f2;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-default .fa{color:#bfbfbf;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-blue{background-color:#42b0e3;background-image:-webkit-gradient(linear,left top,left bottom,from(#42b0e3),to(#2ba9e3));background-image:linear-gradient(180deg,#42b0e3,#2ba9e3);border:1px solid #107db0;-webkit-box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3,0 2px 4px rgba(0,0,0,.2)}.button-blue,.button-blue:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-blue:focus,.button-blue:hover{background:#2ba9e3;border-color:#004c6f;-webkit-box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3;box-shadow:inset 0 1px 0 #7cd4fc,inset 0 -1px 0 #2696c9,inset 0 0 0 1px #59b7e3}.button-blue:active{background:#2ba9e3;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-blue .fa{color:#107db0;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-green{background-color:#97cc76;background-image:-webkit-gradient(linear,left top,left bottom,from(#97cc76),to(#8bcc62));background-image:linear-gradient(180deg,#97cc76,#8bcc62);border:1px solid #5f993a;-webkit-box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b,0 2px 4px rgba(0,0,0,.2)}.button-green,.button-green:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-green:focus,.button-green:hover{background:#8bcc62;border-color:#326612;-webkit-box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b;box-shadow:inset 0 1px 0 #c6e6b3,inset 0 -1px 0 #79b356,inset 0 0 0 1px #a4cc8b}.button-green:active{background:#8bcc62;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-green .fa{color:#5f993a;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-purple{background-color:#847bba;background-image:-webkit-gradient(linear,left top,left bottom,from(#847bba),to(#7568ba));background-image:linear-gradient(180deg,#847bba,#7568ba);border:1px solid #493e87;-webkit-box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba,0 2px 4px rgba(0,0,0,.2)}.button-purple,.button-purple:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-purple:focus,.button-purple:hover{background:#7568ba;border-color:#1f1654;-webkit-box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba;box-shadow:inset 0 1px 0 #bab6d4,inset 0 -1px 0 #655aa1,inset 0 0 0 1px #948dba}.button-purple:active{background:#7568ba;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-purple .fa{color:#493e87;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-orange{background-color:#f58a38;background-image:-webkit-gradient(linear,left top,left bottom,from(#f58a38),to(#f57c20));background-image:linear-gradient(180deg,#f58a38,#f57c20);border:1px solid #c25706;-webkit-box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851,0 2px 4px rgba(0,0,0,.2)}.button-orange,.button-orange:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-orange:focus,.button-orange:hover{background:#f57c20;border-color:#730;-webkit-box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851;box-shadow:inset 0 1px 0 #ffb984,inset 0 -1px 0 #db6f1d,inset 0 0 0 1px #f59851}.button-orange:active{background:#f57c20;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-orange .fa{color:#c25706;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-red{background-color:#ed6d64;background-image:-webkit-gradient(linear,left top,left bottom,from(#ed6d64),to(#ed574c));background-image:linear-gradient(180deg,#ed6d64,#ed574c);border:1px solid #ba3329;-webkit-box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b,0 2px 4px rgba(0,0,0,.2)}.button-red,.button-red:visited{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3)}.button-red:focus,.button-red:hover{background:#ed574c;border-color:#870c03;-webkit-box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b;box-shadow:inset 0 1px 0 #ffb0aa,inset 0 -1px 0 #d44d44,inset 0 0 0 1px #ed837b}.button-red:active{background:#ed574c;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-red .fa{color:#ba3329;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button-yellow{background-color:#fce374;background-image:-webkit-gradient(linear,left top,left bottom,from(#fce374),to(#fcdf5b));background-image:linear-gradient(180deg,#fce374,#fcdf5b);border:1px solid #c9ae34;-webkit-box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d,0 2px 4px rgba(0,0,0,.2);box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d,0 2px 4px rgba(0,0,0,.2)}.button-yellow,.button-yellow:visited{color:#967d09;text-shadow:0 1px 0 hsla(0,0%,100%,.5)}.button-yellow:focus,.button-yellow:hover{background:#fcdf5b;border-color:#967d09;-webkit-box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d;box-shadow:inset 0 1px 0 #fff6ce,inset 0 -1px 0 #e3c852,inset 0 0 0 1px #fce88d}.button-yellow:active{background:#fcdf5b;-webkit-box-shadow:inset 0 2px 3px rgba(0,0,0,.2);box-shadow:inset 0 2px 3px rgba(0,0,0,.2)}.button-yellow .fa{color:#c9ae34;text-shadow:0 1px 0 hsla(0,0%,100%,.3)}.button .fa{float:left;font-size:14px;line-height:20px;margin:-1px 8px 0 -4px;vertical-align:top}.vue-gauge{padding:32px 0 0;overflow:hidden}.vue-gauge,.vue-gauge ul{position:relative;margin:0}.vue-gauge ul{display:table;width:100%}.vue-gauge ul li{display:table-cell;text-align:center;font-size:1.1rem;color:#8f8f8f;position:relative}.vue-gauge ul li p{margin:0}.vue-gauge ul li p:before{content:"";display:block;height:5px;margin-bottom:2px;background:#47c8a6}.vue-gauge ul li p:after{content:"";display:block;height:4px;width:1px;position:absolute;top:-4px;left:0;background:#c5c6c7}.vue-gauge ul li span{display:block;width:30px;text-align:center;position:absolute;top:-22px;left:-15px}.vue-gauge ul li strong{font-weight:400}.vue-gauge ul li strong i{font-style:normal}.vue-gauge ul li:first-child span{left:-6px}.vue-gauge ul li:first-child p:before{background:#47c8a6}.vue-gauge ul li:nth-child(2) p:before{background:#2f9eef}.vue-gauge ul li:nth-child(3) p:before{background:#6577dc}.vue-gauge ul li:nth-child(4) p:before{background:#ac74ea}.vue-gauge ul li:nth-child(5) p:before{background:#e263a9}.vue-gauge ul li:nth-child(6) p:before{background:#ff63a9}.vue-gauge .arrow{display:block;position:absolute;top:6px;left:0;right:0;height:29px}.vue-gauge .arrow:after{content:"";display:inline-block;height:29px;width:20px;position:absolute;top:0;right:-10px;background:url("/res/img/bmi/point.png") no-repeat;background-size:20px 29px}.vue-gauge.small ul li i{display:none}',""])},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{data:{type:Array,required:!0},value:{type:Number,required:!0}},data:function(){return{graphSize:"",smallSize:670,arrow:0,grade:"",cellRange:[],cellWidth:[],fullWidth:0}},watch:{data:function(){this.refineData()},value:function(e){var t=this.data.cells||[],o=t.length;if(!(o<=0)){for(var a=100,n=t[o-1].title,i=0,r=0;r<o-1;r++){if(void 0!==t[r+1].value&&e<t[r+1].value){a=i+(e-t[r].value)/this.fullWidth*100,n=t[r].title;break}i+=this.cellWidth[r]}a=Math.min(Math.max(a,0),100),this.arrow=a+"%",this.grade=$("<span>"+n+"</span>").text(),this.$emit("update:gauge",this)}}},created:function(){this.refineData()},mounted:function(){var e=this,t=function(e){e.graphSize=$(e.$el).outerWidth()<e.smallSize?"small":""};$(window).resize(function(){t(e)}),t(this)},methods:{refineData:function(){var e=this.data.cells||[],t=e.length;if(!(t<=0)){var o=e[0].value;this.fullWidth=e[t-1].maxValue-o,this.cellRange[0]=e[1].value-o;for(var a=1;a<t-1;a++)this.cellRange[a]=e[a+1].value-e[a].value;for(var n=0;n<t-1;n++)this.cellWidth[n]=this.cellRange[n]/this.fullWidth*100}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-gauge",class:e.graphSize},[o("ul",e._l(e.data.cells,function(t,a){return o("li",{style:{width:void 0===e.cellWidth[a]?"auto":e.cellWidth[a]+"%"}},[o("p",[o("span",{staticClass:"text"},[e._v(e._s(t.valueTitle||t.value||""))]),o("strong",{domProps:{innerHTML:e._s(t.title||"&nbsp;")}})])])})),e._v(" "),o("span",{staticClass:"arrow",style:{width:e.arrow}}),e._v(" "),o("span",{staticClass:"guide"})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-health-calculator-results"},[o("strong",{staticClass:"title"},[o("span",[e._v(e._s(e.title))]),e._v(" "),o("span",{staticClass:"health"},[e._v(e._s(e.value))]),e._v(" "),o("span",{staticClass:"health-grade"},[e._v(e._s(e.grade))])]),e._v(" "),o("gauge",{attrs:{value:e.value,data:e.data},on:{"update:gauge":e.updateGauge}})],1)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,function(e,t,o){e.exports=o(35)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(4);new Vue({mixins:[a.a],data:{method:"pibw",height:"",weight:"",ibw:0,gaugeData:{cells:[{title:"저체중",value:70,valueTitle:"PIBW"},{title:"정상",value:90},{title:"과체중",value:110,guideBase:!0},{title:"경도<i>비만</i>",value:120},{title:"중정도<i>비만</i>",value:130},{title:"고도<i>비만</i>",value:160,maxValue:180}]}},watch:{method:function(){this._calc(!1)}},methods:{calc:function(){this._calc(!0)},_calc:function(e){this.height<=0||this.weight<=0?e&&alertify.error("신장과 체중을 입력하세요."):("pibw"===this.method?this.ibw=Math.round(Math.pow(this.height/100,2)*("man"===this.sex?22:21)*100)/100:this.height<150?this.ibw=this.height-100:this.height>160?this.ibw=.9*(this.height-100):this.ibw=this.height/2+50,this.value=Math.round(this.weight/this.ibw*100*10)/10)}}})}]);