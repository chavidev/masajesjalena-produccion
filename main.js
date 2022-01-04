!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,o=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${d}`),h="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],o=document.createTreeWalker(t.content,133,null,!1);let r=0,n=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=o.nextNode();if(null!==e){if(n++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)m(t[e].name,h)&&s++;for(;s-- >0;){const t=l[a],i=f.exec(t)[2],s=i.toLowerCase()+h,o=e.getAttribute(s);e.removeAttribute(s);const r=o.split(p);this.parts.push({type:"attribute",index:n,name:i,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const s=e.parentNode,o=t.split(p),r=o.length-1;for(let t=0;t<r;t++){let i,r=o[t];if(""===r)i=b();else{const e=f.exec(r);null!==e&&m(e[2],h)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),i=document.createTextNode(r)}s.insertBefore(i,e),this.parts.push({type:"node",index:++n})}""===o[r]?(s.insertBefore(b(),e),i.push(e)):e.data=o[r],a+=r}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&n!==r||(n++,t.insertBefore(b(),e)),r=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const m=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},g=e=>-1!==e.index,b=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,n=0,a=0,l=s.nextNode();for(;n<i.length;)if(o=i[n],g(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));n++}else this.__parts.push(void 0),n++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const r=f.exec(e);t+=null===r?e+(i?c:d):e.substr(0,r.index)+r[1]+r[2]+h+r[3]+c}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(_(e)||!x(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||_(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(b()),this.endNode=e.appendChild(b())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=b()),e.__insert(this.endNode=b())}insertAfterPart(e){e.__insert(this.startNode=b()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(_(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const o of e)void 0===(i=t[s])&&(i=new C(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(o),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class E extends w{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends S{}let j=!1;try{const e={get capture(){return j=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=z(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const z=e=>e&&(j?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,i,s){const o=t[0];return"."===o?new E(e,t.slice(1),i).parts:"@"===o?[new N(e,t.slice(1),s.eventContext)]:"?"===o?[new P(e,t.slice(1),i)]:new w(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(e){let t=q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},q.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(c);return void 0===(i=t.keyString.get(s))&&(i=new u(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const q=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const $=(e,...t)=>new y(e,t,"html",T),V=133;function U(e,t){const{element:{content:i},parts:s}=e,o=document.createTreeWalker(i,V,null,!1);let r=R(s),n=s[r],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==n&&n.index===a;)n.index=null!==d?-1:n.index-l,n=s[r=R(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const O=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,V,null,!1);for(;i.nextNode();)t++;return t},R=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(g(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const D=e=>t=>{const i=F(t.type,e);let s=q.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},q.set(i,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(c);if(void 0===(o=s.keyString.get(r))){const i=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(i,e),o=new u(t,i),s.keyString.set(r,o)}return s.stringsArray.set(t.strings,o),o},H=["html","svg"],I=new Set,B=(e,t,i)=>{I.add(i);const s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(t.element,i);const r=document.createElement("style");for(let e=0;e<o;e++){const t=s[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=q.get(F(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),U(e,i)})})})(i);const n=t.element.content;!function(e,t,i=null){const{element:{content:s},parts:o}=e;if(null==i)return void s.appendChild(t);const r=document.createTreeWalker(s,V,null,!1);let n=R(o),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=O(t),i.parentNode.insertBefore(t,i));-1!==n&&o[n].index===l;){if(a>0){for(;-1!==n;)o[n].index+=a,n=R(o,n);return}n=R(o,n)}}(t,r,n.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,i);const a=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{n.insertBefore(r,n.firstChild);const e=new Set;e.add(r),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),Q={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:W},X=Promise.resolve(!0),Y=1,G=4,Z=8,K=16,ee=32;class te extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Q){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const s=this[e];this[i]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=W){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||J,o="function"==typeof s?s:s.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||J.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Q){const s=this.constructor,o=s._attributeNameForProperty(e,i);if(void 0!==o){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i._classProperties.get(s)||Q;this._updateState=this._updateState|K,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~K}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,o=s._classProperties.get(e)||Q;s._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||this._updateState&K||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|G;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{e=i,t=s});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Y}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}te.finalized=!0;const ie="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol();class oe{constructor(e,t){if(t!==se)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ie?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof oe)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new oe(i,se)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let s=0,o=t.length;s<o;s++){const o=t[s];Array.isArray(o)?e(o,i):i.push(o)}return i}(e);class ae extends te{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ie?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ae.finalized=!0,ae.render=(e,t,i)=>{const s=i.scopeName,o=M.has(t),r=L&&11===t.nodeType&&!!t.host&&e instanceof y,a=r&&!I.has(s),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let s=M.get(t);void 0===s&&(n(t,t.firstChild),M.set(t,s=new C(Object.assign({templateFactory:A},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:D(s)},i)),a){const e=M.get(l);M.delete(l),e.value instanceof v&&B(l,e.value.template,s),n(t,t.firstChild),t.appendChild(l),M.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};customElements.define("view-cabezera",class extends ae{static get styles(){return re`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
          @media (max-width: 310px) {
            .title {
              padding-bottom: 5px;
              font-size: 20px;
            }
            h1 {
              font-size: 18px;
              padding: 5px;
            }
		      }
          @media (max-width: 210px) {
            .title {
              padding-bottom: 2px;
              font-size: 14px;
            }
            h1 {
              font-size: 12px;             
            }
		      } 
        `}render(){return $`
    <p class="title">
    <img src="img/logo-masaje.png" width="50px" height="50px">
    <br>
      masajesJalena.com
    </p>
    <!--<h1>Mejora tu calidad de vida</h1>-->
    
    `}});customElements.define("view-footer",class extends ae{static get styles(){return re`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: #1E500C;
            color: whitesmoke;
            text-align:center;
            padding-bottom: 30px;
          }
          .margenTop {
            padding-top: 30px; 
          }
          .footer2 {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: whitesmoke;
            color: #1E500C;
            text-align:center;
            padding-bottom: 30px;
          }
          .jc_cal {
            /*
                border-style: dotted ;
                border-color: #4027cf;*/
                border: 3px dotted #4027cf;
                
                color: #ffffff;
                background-color: #1a8f14;
                
                padding: 20px;
                
                z-index:100;
                
                line-height: 1.6;
                font-size: 1.5em;
                border-radius: 50%;/* border-radius: 50px;*/

                cursor: pointer;
            }            
            .center{
              text-align: center;
            }
            .padding{
              padding: 0px  10%;
            }
          @media (max-width: 615px) {
            .email {
              font-size: 1em;
            }
            p {
              font-size: 2em;
            }
          }
          @media (max-width: 400px) {
            .email {
              font-size: 0.5em;
              margin-bottom:200px;
            }
            p {
              font-size: 2em;
              margin-bottom:90px;
            }
          }
        `}render(){return $`
    <p>
    <span class="email">~</span>
    <br>  
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.go} name="whatsapp" >
    <img src="img/whatsapp.jpg" width="50px" height="50px">
    </a>650.718.774<br>
    ~<br>
    masajesjalena.com
    </p>
  <!--
    <div class="center">
      <a href="https://www.instagram.com/masajesjalena/" @click= ${this.pendiente} name="instagram" >
      <img class="padding" src="img/instagram.png" width="50px" height="50px">
      </a>

      <a href="https://www.facebook.com/MasajesJalena-101353038813858/" @click= ${this.pendiente} name="facebook" >
      <img class="padding" src="img/facebook.png" width="50px" height="50px">
      </a>

      <a href="https://twitter.com/masajesjalena" @click= ${this.pendiente} name="twitter" >
      <img class="padding" src="img/twitter.png" width="50px" height="50px">
      </a>

      <a href="https://www.youtube.com/channel/UC47vthNZ29L5366nDYAFVog/videos" @click= ${this.pendiente} name="youtube" >
      <img class="padding" src="img/youtube.png" width="50px" height="50px">
      </a>

      <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.pendiente} name="whatsapp" >
      <img class="padding" src="img/whatsapp.png" width="50px" height="50px">
      </a>
    <div/>

  
    <p class="footer2 ">
     <a href="https://calendly.com/masajesjalena/30min?back=1" @click= ${this.go} name="calendario" >
     
     <button class="jc_cal">Pide Cita</button>  <br>
      </a>
    </p>
     
  -->
    
<p class="margenTop"><MARQUEE> activa la energía que hay dentro de ti </MARQUEE></p>
    `}});customElements.define("view-servicios",class extends ae{static get styles(){return re`    
      .marco {
        border:solid blueviolet 5px;
      }
      .center{
        text-align: center;
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }      
      .green {
        color: green;
      }      
      .blue {
        color: blue;
      }
      .doble {
        font-size: 2em;
      }
      .mayor {
        font-size: 1.3em;
      }
      .lila {
        color:#CB1DCE;
        font-weight: 900;
      }
    `}render(){return $`

    <div class="center">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/w26daLH7Oqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen" ></iframe>  
    </div>  
    <br><br>
    <div class="center">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/sgoX5Mit4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen" ></iframe>  
    </div>

    <p class="center doble blue">
    Cabina en Santa Cruz y Adeje<br> servicio a domicilio en todo Tenerife con camilla portátil<br><br>
    </p>
    
    <p class="center doble blue marco"><br>
    <span class="green">Masaje Descontracturante <br> y masaje relajante del tejido profundo </span><br> <br>
    
    espalda, piernas, abdomen, brazos, cuello, cabeza, cara y planta de los pies <br>
    <span class="green mayor ">¿Que parte quieres trabajar?</span><br> <br>
    Elimina tus puntos de dolor,<br>
    <span class="green">mejorando tu calidad de vida.</span><br>
    o disfruta de la experiencia de un masaje relajante, 
    <span class="green"> te lo mereces</span>
    <br><br> 
    </p> 
    `}});customElements.define("view-serviciosyamile",class extends ae{static get styles(){return re`
      .center{
        text-align: center;         
      }
      .marco {
        border:solid blueviolet 5px;
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
      .blue {
        font-size: 2em;
        color: blue;
      }
      .green {
        color: green;
      }
      .doble {
        font-size: 2em;
      }
      .mayor {
        font-size: 1.3em;
      }
      .lila {
        color:#CB1DCE;
        font-weight: 900;
      }
    `}render(){return $`
    <div class="center">
      <iframe  width="90%" height="700px" src="https://www.youtube.com/embed/vupjFs5Uo2E"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div>
    
    <p class="center green doble">
     Desde aquí puedes ver una muestra de las diferentes técnicas de masaje con las que trabajo. <br>
    </p>
    <p class=" blue center marco"><br>   
    Cabina a 7 minutos del aeropuerto TF Norte y en Santa Cruz.   <br> Servicio a domicilio en todo Tenerife con camilla portátil<br><br>
    <span class="green">Masaje deportivo <br></span>
    Descargante Muscular <br>
    <span class="green">Descontracturante <br></span>
    Relajante <br>
    <span class="green">Masaje descargante de piernas<br></span>
    bambú<br>
    <span class="green"> maderoterapia<br> </span>   
     Masaje corporal con piedras calientes: <br>
    alivia y relaja puntos de energía..<br>
    <span class="green">PINDAS, Ventosas <br></span>    
    Masaje facial<br>
    <span class="green"> Refexología <br></span>
    <br>
    <span class="mayor lila">¿Que masaje te apetece? </span>
    <br><br>
    </p>
    `}});customElements.define("view-precio",class extends ae{static get styles(){return re`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
    `}render(){return $`
      <p style="text-align: center; font-size: 2em; color: blue">
        Tarifa:<br>
       (50 min X 30€) <br>
      ( 90 min y pico X 50€) sin reloj
      <br> <br>
        sin reloj, me alargo un poco mas dependiendo de la persona.<br><br>
      </p>
      <p>  
      Desplazamiento Zona sur: 10€ <br>
      </p>

    `}});customElements.define("view-precioyamile",class extends ae{static get styles(){return re`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
      .azul {
        text-align: center;
        font-size: 2em;
        color: blue;
      }
    `}render(){return $`
      <p class="azul">
        Tarifa:<br>
      (50 min X 35€) <br> (2 horas X 70€) <br> <br>        
      </p>
      <p class="azul">
      Desplazamiento a domicilio:<br>
      10€ a cualquier parte de la isla de Tenerife <br><br>      
      </p>
    `}});customElements.define("view-contacto",class extends ae{static get styles(){return re`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          .p .parrafo {
            font-family: Roboto;
            font-size: 1.5em;
            font-weight: 500;
            text-align:center;
            padding-bottom: 30px;
          }
          
          .center{
            text-align: center;
            border:solid blueviolet 5px; 
          }
          .ancho {
            width: "700px";
            height:"1500px"
          }
          .red {
            color: red;
          }
        `}render(){return $`

    <div class="center">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qN3BNjMOFXAwG9O0lnDiNXsuGJFuvukC" width="90%" height="500px"></iframe>
    </div>

      <p style="text-align: center ; font-size: 2em; color: blue">
      
      Horario: <br>
      Lunes a Domingo <br> 
      con cita previa <br>
       
      </p>
        
    `}});customElements.define("dile-pages",class extends ae{static get properties(){return{attrForSelected:{type:String},selected:{type:String}}}render(){return $`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization()}static get styles(){return re`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let e=this.children;for(let t of e)t.style.display="none",t.style.transition=`opacity ${this.transitionTime}ms`,t.style.opacity="0",this.pages.push(t)}initializeExternalPages(e){this.innerHTML=e,this._pageInitialization()}firstUpdated(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block")}updated(e){if(this._updatedAndNotUndefined(e,"selected")||this._updatedAndNotUndefined(e,"attrForSelected")){let t=this._getLastValueProperty(e,"selected"),i=this._getLastValueProperty(e,"attrForSelected");this.hidePage(t,i)}this._showCurrentPage()}_selectPage(e,t){let i;if(t){for(let s of this.pages)if(s.getAttribute(t)==e){i=s;break}}else i=this.pages[e];return i}_showCurrentPage(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50))}hidePage(e,t){let i=this._selectPage(e,t);i&&(i.style.display="none",i.style.opacity="0")}_updatedAndNotUndefined(e,t){return e.has(t)&&null!=e.get(t)}_getLastValueProperty(e,t){return e.has(t)?e.get(t):this[t]}});customElements.define("dile-tab",class extends ae{static get styles(){return re`
      :host {
        display: inline-block;
        margin: 0 3px;
      }
      article {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
        cursor: pointer;
      }
      div.label {
        padding: var(--dile-label-padding, 8px 12px 6px 12px);
        text-transform: uppercase;
        white-space: nowrap;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `}static get properties(){return{selected:{type:Boolean},index:{type:Number}}}constructor(){super(),this.selected=!1}render(){return $`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}select(){this.dispatchEvent(new CustomEvent("dile-tab-selected",{bubbles:!0,composed:!0,detail:this}))}});window.customElements.define("dile-tabs",class extends ae{static get styles(){return re`
      :host {
        display: flex;
      }
    `}static get properties(){return{selected:{type:String},attrForSelected:{type:String}}}constructor(){super(),this.selected=0,this.tabs=[],this.addEventListener("dile-tab-selected",this.tabSelectedChanged.bind(this))}render(){return $`
      <slot></slot>
    `}firstUpdated(){let e=this.children,t=0;for(let i of e)"dile-tab"==i.tagName.toLowerCase()&&(i.index=t,t++,this.tabs.push(i));this.setSelectedTab()}setSelectedTab(){if(this.attrForSelected)for(let e of this.tabs)e.getAttribute(this.attrForSelected)==this.selected?e.selected=!0:e.selected=!1;else{let e=parseInt(this.selected);if(!isNaN(e)&&this.tabs[e])for(let t in this.tabs)this.tabs[t].selected=t==e}}tabSelectedChanged(e){this.attrForSelected?this.selected=e.detail.getAttribute(this.attrForSelected):this.selected=e.detail.index,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-tabs-selected-changed",{bubbles:!0,composed:!0,detail:this.selected}))}updated(e){this.setSelectedTab()}});customElements.define("pwa-live",class extends ae{static get styles(){return re`
			:host {
				display: block;
				
				--primary-color: red;
				--_________primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: Blue; 
				--____secondary-color: #fbc02d; 
				--secondary-light-color: blue ;
				--_________secondary-light-color: #fbd09d;
				--text-color: #303030;
				--reverse-text-color: #fff;
				--reverse-accent-color: blue;
				--__________reverse-accent-color: #fdd835;
				
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-line-color: var(--secondary-color);
				--dile-tab-text-color: var(--reverse-color, blueviolet);
				--dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
				background-color: #f9f9f9;
			}
			__h1 {
				font-weight: 300;
				flex-grow: 1;
			}
			.menumobile {
				margin-top: 10px;
				padding: 10px 0 20px 5px;
			}
			.menumobile a {
				display: block;
				margin: 10px 20px;
				text-decoration: none;
				text-transform: uppercase;
				font-weight: bold;
				color: var(--secondary-light-color);
			}
			.page {
				display: none;
			}
			.page[active] {
				display: block;
			}
			dile-tabs {
				border-bottom: 1px solid #ddd;
				margin-bottom: 15px;
				margin-right: 15px;
			}
			dile-pages {
				padding: 0 10px 10px;
			}
			header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: var(--primary-color, #ddd);
				color: var(--reverse-text-color, #303030);
				padding: 10px;
				--eit-icon-size: 32px;
				--eit-icon-color: var(--secondary-color);
			}

			dile-spinner-modal {
				--dile-spinner-color: var(--secondary-color);
			}

			.homelink {
				color: inherit;
				text-decoration: none;
			}
			footer {
				text-align: center;
				padding 10px;
				font-size: 0.8em;
			}
			.center{
				_border: solid #7710d9 5px;
				text-align:center;
			}
			.border-dev {
				border: 2px solid #4CAF50;
			}
			.botonMenu{
				padding:15px;
				border-radius:50%;
				font-style:tahoma;
				font-size: 3em;
				display: inline-block;
				width: 32%;
			}
			.activo{
				background-color:white;
				color:#7710d9;
				border: solid #7710d9 5px; 
				
			}
			.pasivo{
				__background-color:#1E500C;
				background-color:#10d913;
				color:white;
				cursor: pointer;		
			}
			.botonEquipo{
				padding:15px;
				border-radius:50%;
				font-style:tahoma;
				font-size: 3em;
				display: inline-block;
				width: 49%;
			}
			.alignMiddle {
				vertical-align: middle;
			}
			.azul {
				text-align: center;
				font-size: 3em;
				color: blue;
			}			
			.blue {
				font-size: 2em;
				color: blue;
			}
			.title {
				color:red;
				padding-bottom: 10px;
				text-align:center;
				font-size: 30px;
			}			
			h1 {
				font-family: Roboto;
				font-size: 26px;
				font-weight: 500;
				background-color: #7710d9;
				color: whitesmoke;
				text-align:center;
			}	
			@media (max-width: 1200px) {
				.botonMenu{
				padding:13px;
				font-size: 2.5em;
				}
			}
			@media (max-width: 900px) {
				.botonMenu{
				padding:10px;
				font-size: 1.5em;
				}
			}
			@media (max-width: 600px) {
				.botonMenu{
				padding:7px;
				font-size: 1em;
				}
			}
			@media (max-width: 600px) {
				.botonMenu{
				padding:10px;
				font-size: 1.5em;
				display: block;
				position: relative;
				text-align:center;
				width: 97%;
				}
				.title {
				color:red;
				padding-bottom: 10px;
				text-align:center;
				font-size: 30px;
			}		
			}
		`}static get properties(){return{page:{type:String}}}constructor(){super(),this.page="servicios",this.equipo="javi"}render(){return $`	  

	  <c-idioma></c-idioma>
	  <view-cabezera></view-cabezera>
	  <pixcel-facebook></pixcel-facebook>
	  

	<!--
	  ${"equipo"==this.equipo?$`<br><p class="azul">¿Con quién quieres trabajar de nuestro equipo?</p><br>`:$`<h1>elimina tus puntos de dolor</h1>`}
-->
<!--
	  <div class="center _border-dev" >
	  ${"javi"==this.equipo||"equipo"==this.equipo?$`<button class="activo botonEquipo " @click= ${this.goEquipo} name="javi"> <img name="javi" src="img/javi.png"><div name="javi" class="alignMiddle"> Javi </div></button>`:$`<button class="pasivo botonEquipo" @click= ${this.goEquipo} name="javi"> <img name="javi" src="img/javi.png"><div name="javi" class="alignMiddle"> Javi </div></button>`}
	  ${"yamile"==this.equipo||"equipo"==this.equipo?$`<button class="activo botonEquipo " @click= ${this.goEquipo} name="yamile"> <img name="yamile" src="img/yamile5.png"> <div name="yamile" class="alignMiddle"> Yamile </div></button>`:$`<button class="pasivo botonEquipo " @click= ${this.goEquipo} name="yamile"> <img name="yamile" src="img/yamile5.png"> <div name="yamile" class="alignMiddle"> Yamile </div></button>`}	
	  </div>
	-->

	  ${"equipo"==this.equipo?$``:$`
		<div class="center _border-dev" >
		${"servicios"==this.page?$`<button class="activo botonMenu" @click= ${this.go} name="servicios"> Servicios</button>`:$`<button class="pasivo botonMenu" @click= ${this.go} name="servicios"> Servicios</button>`}
		${"precio"==this.page?$`<button class="activo botonMenu" @click= ${this.go} name="precio">Precio</button>`:$`<button class="pasivo botonMenu" @click= ${this.go} name="precio">Precio</button>`}
		${"contacto"==this.page?$`<button class="activo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`:$`<button class="pasivo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`}
		</div>
	  `}	
	<br>

	<!-- inicio de los javi-->
	${"servicios"==this.page&&"javi"==this.equipo?$`<view-servicios name="servicios" ?active=${"servicios"==this.page}></view-servicios>`:""}
	${"precio"==this.page&&"javi"==this.equipo?$`<view-precio name="masajes" ?active=${"precio"==this.page}></view-precio>`:""}
	${"contacto"==this.page&&"javi"==this.equipo?$`<view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>`:""}

	<!-- inicio de los yamile-->
	${"servicios"==this.page&&"yamile"==this.equipo?$`<view-serviciosyamile name="serviciosYamile" ?active=${"servicios"==this.page}></view-servicios>`:""}
	${"precio"==this.page&&"yamile"==this.equipo?$`<view-precioyamile name="masajes" ?active=${"precio"==this.page}></view-precio>`:""}
	${"contacto"==this.page&&"yamile"==this.equipo?$`<view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>`:""}

	<view-footer></view-footer>
	<view-whatsapp></view-whatsapp>
	`}go(e){e.preventDefault(),this.page=e.target.getAttribute("name"),console.log(this.page),this.requestUpdate()}goEquipo(e){e.preventDefault(),this.equipo=e.target.getAttribute("name"),console.log(this.equipo),this.requestUpdate()}selectedChanged(){console.log("estoy dentro de selectedChanged"),this.requestUpdate()}});customElements.define("view-whatsapp",class extends ae{static get styles(){return re`
                    
            .jc_cta {
                border-style: dotted;
                border-color: #4027cf;
                color: #ffffff;
                background-color: #1a8f14;
                display: block ;
                padding: 15px;
                position: fixed ;	
                right: 5px;
                width:50px;
                z-index:100;
                bottom:0em;
                line-height: 1.6;
                font-size: 14px;
                border-radius: 50px;
            }
        `}render(){return $`
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" target="_blank">
<div class="jc_cta" >
<img src="img/whatsapp-fixed.png" alt="icono whatsapp" width="50px" height="50px">

</div></a>
  
    `}});customElements.define("c-idioma",class extends ae{static get styles(){return re`
        `}constructor(){super(),this.lengu="",this.idioma=navigator.language||navigator.userLanguage,this.lenguaje()}render(){return $`
    `}lenguaje(){this.lengu=this.idioma.slice(0,2).toUpperCase(),console.log(`el lenguaje es = ${this.idioma.slice(0,2).toUpperCase()}`),console.log(`lengu es = ${this.idioma.slice(0,2).toUpperCase()}`),"ES"==this.lengu?console.log("ESPAÑOL"):console.log("inglés por defecto sea el idioma que sea")}});customElements.define("view-test",class extends ae{static get styles(){return re`
        `}constructor(){super()}render(){return $` test
    `}})}]);