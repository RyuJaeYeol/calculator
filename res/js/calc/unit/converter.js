!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=40)}({0:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},1:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(3),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(h(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(h(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function h(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=v()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,f=r||{};var a=o(t,e);return m(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(u=i[s.id]).refs--,n.push(u)}e?m(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}};var _,g=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},2:function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:l}}},3:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},40:function(t,e,n){t.exports=n(41)},41:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__vue_common__=__webpack_require__(42);$(function(){var units=[],fromUnit=0,toUnit=1;$("#units > li").each(function(index,el){var li=$(el),p=li.data("pos");"from"===p?fromUnit=index:"to"===p&&(toUnit=index),units.push([eval(li.data("exp")),li.attr("title"),li.data("unit")])}),new Vue({mixins:[__WEBPACK_IMPORTED_MODULE_0__vue_common__.a],data:{data:{fromUnit:fromUnit,toUnit:toUnit,units:units}},methods:{updateValue:function(t,e){},calcTemperature:function(t,e,n){var r=["°C","°F","K","°R"],o=r.indexOf(e[2]),i=r.indexOf(n[2]);switch(parseInt(o,10)){case 0:t+=273.15;break;case 1:t=(5*(t-32)+2458.35)/9;break;case 2:break;case 3:t=(5*(t-459.67-32)+2458.35)/9;break;default:t=1e5}switch(parseInt(i,10)){case 0:t-=273.15;break;case 1:t=(9*(t-273.15)+160)/5;break;case 2:break;case 3:t=(9*(t-273.15)+160+2298.35)/5;break;default:t=1e4}return t}}})})},42:function(t,e,n){"use strict";var r=n(43),o=n.n(r);e.a={el:"section.converter",components:{"unit-converter":o.a},data:{from:0,to:0},computed:{},watch:{},created:function(){this._created()},mounted:function(){this._mounted()},methods:{_created:function(){},_mounted:function(){}}}},43:function(t,e,n){var r=n(2)(n(46),n(47),!1,function(t){n(44)},null,null);t.exports=r.exports},44:function(t,e,n){var r=n(45);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("f07ea00c",r,!0,{})},45:function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".vue-unit-converter>fieldset{border:1px solid #ebebeb;border-radius:3px;padding:20px 10px}.vue-unit-converter .column{padding-right:0;margin-right:1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vue-unit-converter .column>p{width:100%;margin:0}.vue-unit-converter .column>p.unit{padding-left:5px;-webkit-box-flex:1;-ms-flex:1;flex:1}.vue-unit-converter .column>p.unit select{width:110px}.vue-unit-converter .column>p.arrow{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:2.2rem}.vue-unit-converter .column input,.vue-unit-converter .column select{margin-bottom:0;color:#666;text-align:right;font-size:1em;-webkit-transform-origin:top left;transform-origin:top left}.vue-unit-converter .column input[type=number]::-webkit-inner-spin-button,.vue-unit-converter .column input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.vue-unit-converter .column.to input{border:0 none}",""])},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:Array,required:!0},from:{type:Number,required:!1},calc:{type:Function,required:!1}},data:function(){return{fromUnit:null,toUnit:null,to:""}},watch:{from:function(){this.$nextTick(function(){this.from.length>9?this.from=this.from.slice(0,9):this.convert()})},fromUnit:function(){this.$nextTick(function(){this.convert()})},toUnit:function(){this.$nextTick(function(){this.convert()})}},mounted:function(){this.from=1,this.fromUnit=this.data.units[this.data.fromUnit],this.toUnit=this.data.units[this.data.toUnit]},methods:{convert:function(){if(!isNaN(this.from)&&this.fromUnit&&this.toUnit){var t=void 0;t=this.calc?this.calc(this.from,this.fromUnit,this.toUnit):this.from*this.toUnit[0]/this.fromUnit[0],this.to=this._resultFormat(t),this.$emit("update:value",this.to,this)}},_resultFormat:function(t){var e=void 0,n=t.toString(),r=n.indexOf("."),o=n.substring(0,r),i=n.substring(r+1),a=n.indexOf("e");if(""===o&&(o=n),a<0){if(o.length>9)t=parseFloat((t/Math.pow(10,o.length-1)).toFixed(4))+"e+"+(o.length-1);else if("0"===o){for(e=0;e<i.length&&"0"===i[e];e++);e<5?t=parseFloat(t.toFixed(6)):(t=(t*Math.pow(10,e+1)).toFixed(4),t=parseFloat(t)+"e-"+(e+1))}else if("0"!==o&&o.length+i.length>9){if(o.length>3){if((o=(r=(n=(t=t.toFixed(6-(o.length-3))).toString()).indexOf("."))>-1?n.substring(0,r):n).length>9)return this._resultFormat(t)}else t=t.toFixed(6);t=parseFloat(t)}}else{var s=n.substring(0,a),u=n.substring(a);n.substring(r+1,a).length>5&&(t=parseFloat(parseFloat(s).toFixed(4)),t+=u)}return t}}}},47:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"vue-unit-converter",on:{submit:function(e){return e.preventDefault(),t.convert(e)}}},[n("fieldset",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column from"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.from,expression:"from"}],attrs:{type:"number",id:"from",min:"0",max:"999999999"},domProps:{value:t.from},on:{input:function(e){e.target.composing||(t.from=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"unit"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.fromUnit,expression:"fromUnit"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.fromUnit=e.target.multiple?n:n[0]}}},t._l(t.data.units,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e[2])+"("+t._s(e[1])+")")])}))])]),t._v(" "),n("div",{staticClass:"column to"},[n("p",{staticClass:"arrow"},[t._v("→")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.to,expression:"to"}],attrs:{type:"number",id:"to",readonly:"readonly",disabled:"disabled"},domProps:{value:t.to},on:{input:function(e){e.target.composing||(t.to=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"unit"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.toUnit,expression:"toUnit"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.toUnit=e.target.multiple?n:n[0]}}},t._l(t.data.units,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e[2])+"("+t._s(e[1])+")")])}))])])])])])},staticRenderFns:[]}}});