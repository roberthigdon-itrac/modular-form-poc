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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,i,e=null)=>{for(;i!==e;){const e=i.nextSibling;t.removeChild(i),i=e}},e=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${e}--\x3e`,n=new RegExp(`${e}|${s}`);class o{constructor(t,i){this.parts=[],this.element=i;const s=[],o=[],h=document.createTreeWalker(i.content,133,null,!1);let l=0,u=-1,d=0;const{strings:f,values:{length:p}}=t;for(;d<p;){const t=h.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const i=t.attributes,{length:e}=i;let s=0;for(let t=0;t<e;t++)r(i[t].name,"$lit$")&&s++;for(;s-- >0;){const i=f[d],e=a.exec(i)[2],s=e.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:u,name:e,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const i=t.data;if(i.indexOf(e)>=0){const e=t.parentNode,o=i.split(n),h=o.length-1;for(let i=0;i<h;i++){let s,n=o[i];if(""===n)s=c();else{const t=a.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}e.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===o[h]?(e.insertBefore(c(),t),s.push(t)):t.data=o[h],d+=h}}else if(8===t.nodeType)if(t.data===e){const i=t.parentNode;null!==t.previousSibling&&u!==l||(u++,i.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),d++}else{let i=-1;for(;-1!==(i=t.data.indexOf(e,i+1));)this.parts.push({type:"node",index:-1}),d++}}else h.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,i)=>{const e=t.length-i.length;return e>=0&&t.slice(e)===i},h=t=>-1!==t.index,c=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,i){const{element:{content:e},parts:s}=t,n=document.createTreeWalker(e,133,null,!1);let o=d(s),r=s[o],h=-1,c=0;const a=[];let l=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),i.has(t)&&(a.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==r&&r.index===h;)r.index=null!==l?-1:r.index-c,o=d(s,o),r=s[o]}a.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let i=11===t.nodeType?0:1;const e=document.createTreeWalker(t,133,null,!1);for(;e.nextNode();)i++;return i},d=(t,i=-1)=>{for(let e=i+1;e<t.length;e++){const i=t[e];if(h(i))return e}return-1};
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
const f=new WeakMap,p=t=>"function"==typeof t&&f.has(t),w={},m={};
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
class y{constructor(t,i,e){this.t=[],this.template=t,this.processor=i,this.options=e}update(t){let i=0;for(const e of this.t)void 0!==e&&e.setValue(t[i]),i++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const i=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(i,133,null,!1);let o,r=0,c=0,a=n.nextNode();for(;r<s.length;)if(o=s[r],h(o)){for(;c<o.index;)c++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(i),customElements.upgrade(i)),i}}
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
 */const b=` ${e} `;class v{constructor(t,i,e,s){this.strings=t,this.values=i,this.type=e,this.processor=s}getHTML(){const t=this.strings.length-1;let i="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const h=a.exec(t);i+=null===h?t+(n?b:s):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const g=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,i,e){this.dirty=!0,this.element=t,this.name=i,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new A(this)}_getValue(){const t=this.strings,i=t.length-1;let e="";for(let s=0;s<i;s++){e+=t[s];const i=this.parts[s];if(void 0!==i){const t=i.value;if(g(t)||!x(t))e+="string"==typeof t?t:String(t);else for(const i of t)e+="string"==typeof i?i:String(i)}}return e+=t[i],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||g(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.i);){const t=this.i;this.i=w,t(this)}const t=this.i;t!==w&&(g(t)?t!==this.value&&this.o(t):t instanceof v?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===m?(this.value=m,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const i=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);i===this.endNode.previousSibling&&3===i.nodeType?i.data=e:this.l(document.createTextNode(e)),this.value=t}h(t){const i=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===i)this.value.update(t.values);else{const e=new y(i,t.processor,this.options),s=e._clone();e.update(t.values),this.l(s),this.value=e}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let e,s=0;for(const n of t)e=i[s],void 0===e&&(e=new _(this.options),i.push(e),0===s?e.appendIntoPart(this):e.insertAfterPart(i[s-1])),e.setValue(n),e.commit(),s++;s<i.length&&(i.length=s,this.clear(e&&e.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,i,e){if(this.value=void 0,this.i=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=e}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=w}}class T extends S{constructor(t,i,e){super(t,i,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends A{}let U=!1;(()=>{try{const t={get capture(){return U=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class j{constructor(t,i,e){this.value=void 0,this.i=void 0,this.element=t,this.eventName=i,this.eventContext=e,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=this.i,i=this.value,e=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),s=null!=t&&(null==i||e);e&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=k(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(U?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function C(t){let i=O.get(t.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(e);return s=i.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),i.keyString.set(n,s)),i.stringsArray.set(t.strings,s),s}const O=new Map,$=new WeakMap;
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
 */const F=new
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
class{handleAttributeExpressions(t,i,e,s){const n=i[0];if("."===n){return new T(t,i.slice(1),e).parts}return"@"===n?[new j(t,i.slice(1),s.eventContext)]:"?"===n?[new E(t,i.slice(1),e)]:new S(t,i,e).parts}handleTextExpression(t){return new _(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const R=(t,...i)=>new v(t,i,"html",F)
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
 */,M=(t,i)=>`${t}--${i}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const N=t=>i=>{const s=M(i.type,t);let n=O.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(s,n));let r=n.stringsArray.get(i.strings);if(void 0!==r)return r;const h=i.strings.join(e);if(r=n.keyString.get(h),void 0===r){const e=i.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(e,t),r=new o(i,e),n.keyString.set(h,r)}return n.stringsArray.set(i.strings,r),r},B=["html","svg"],I=new Set,D=(t,i,e)=>{I.add(t);const s=e?e.element:document.createElement("template"),n=i.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const i=n[t];i.parentNode.removeChild(i),r.textContent+=i.textContent}(t=>{B.forEach(i=>{const e=O.get(M(i,t));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:i}}=t,e=new Set;Array.from(i.querySelectorAll("style")).forEach(t=>{e.add(t)}),l(t,e)})})})(t);const h=s.content;e?function(t,i,e=null){const{element:{content:s},parts:n}=t;if(null==e)return void s.appendChild(i);const o=document.createTreeWalker(s,133,null,!1);let r=d(n),h=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===e&&(h=u(i),e.parentNode.insertBefore(i,e));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=d(n,r);return}r=d(n,r)}}}(e,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)i.insertBefore(c.cloneNode(!0),i.firstChild);else if(e){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),l(e,t)}};window.JSCompiler_renameProperty=(t,i)=>t;const L={toAttribute(t,i){switch(i){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){switch(i){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},V=(t,i)=>i!==t&&(i==i||t==t),z={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:V};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,e)=>{const s=this._attributeNameForProperty(e,i);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(t,i=z){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||z}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of i)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,i,e=V){return e(t,i)}static _propertyValueFromAttribute(t,i){const e=i.type,s=i.converter||L,n="function"==typeof s?s:s.fromAttribute;return n?n(t,e):t}static _propertyValueToAttribute(t,i){if(void 0===i.reflect)return;const e=i.type,s=i.converter;return(s&&s.toAttribute||L.toAttribute)(t,e)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,e){i!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,i,e=z){const s=this.constructor,n=s._attributeNameForProperty(t,e);if(void 0!==n){const t=s._propertyValueToAttribute(i,e);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const e=this.constructor,s=e._attributeToPropertyMap.get(t);if(void 0!==s){const t=e.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=e._propertyValueFromAttribute(i,t),this._updateState=-17&this._updateState}}_requestUpdate(t,i){let e=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],i,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):e=!1}!this._hasRequestedUpdate&&e&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this._requestUpdate(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}H.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const J="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class G{constructor(t,i){if(i!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(t,...i)=>{const e=i.reduce((i,e,s)=>i+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[s+1],t[0]);return new G(e,W)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const K={};class Q extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const i=(t,e)=>t.reduceRight((t,e)=>Array.isArray(e)?i(e,t):(t.add(e),t),e),e=i(t,new Set),s=[];e.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==K&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,this.renderRoot.appendChild(i)}))}render(){return K}}Q.finalized=!0,Q.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=$.has(e),r=q&&11===e.nodeType&&!!e.host,h=r&&!I.has(n),c=h?document.createDocumentFragment():e;if(((t,e,s)=>{let n=$.get(e);void 0===n&&(i(e,e.firstChild),$.set(e,n=new _(Object.assign({templateFactory:C},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:N(n)},s)),h){const t=$.get(c);$.delete(c);const s=t.value instanceof y?t.value.template:void 0;D(n,c,s),i(e,e.firstChild),e.appendChild(c),$.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var Y="URLSearchParams"in self,Z="Symbol"in self&&"iterator"in Symbol,tt="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),it="FormData"in self,et="ArrayBuffer"in self;if(et)var st=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],nt=ArrayBuffer.isView||function(t){return t&&st.indexOf(Object.prototype.toString.call(t))>-1};function ot(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function rt(t){return"string"!=typeof t&&(t=String(t)),t}function ht(t){var i={next:function(){var i=t.shift();return{done:void 0===i,value:i}}};return Z&&(i[Symbol.iterator]=function(){return i}),i}function ct(t){this.map={},t instanceof ct?t.forEach((function(t,i){this.append(i,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(i){this.append(i,t[i])}),this)}function at(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function lt(t){return new Promise((function(i,e){t.onload=function(){i(t.result)},t.onerror=function(){e(t.error)}}))}function ut(t){var i=new FileReader,e=lt(i);return i.readAsArrayBuffer(t),e}function dt(t){if(t.slice)return t.slice(0);var i=new Uint8Array(t.byteLength);return i.set(new Uint8Array(t)),i.buffer}function ft(){return this.bodyUsed=!1,this._initBody=function(t){var i;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:tt&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:it&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:Y&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():et&&tt&&((i=t)&&DataView.prototype.isPrototypeOf(i))?(this._bodyArrayBuffer=dt(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):et&&(ArrayBuffer.prototype.isPrototypeOf(t)||nt(t))?this._bodyArrayBuffer=dt(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):Y&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},tt&&(this.blob=function(){var t=at(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?at(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(ut)}),this.text=function(){var t,i,e,s=at(this);if(s)return s;if(this._bodyBlob)return t=this._bodyBlob,i=new FileReader,e=lt(i),i.readAsText(t),e;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var i=new Uint8Array(t),e=new Array(i.length),s=0;s<i.length;s++)e[s]=String.fromCharCode(i[s]);return e.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},it&&(this.formData=function(){return this.text().then(mt)}),this.json=function(){return this.text().then(JSON.parse)},this}ct.prototype.append=function(t,i){t=ot(t),i=rt(i);var e=this.map[t];this.map[t]=e?e+", "+i:i},ct.prototype.delete=function(t){delete this.map[ot(t)]},ct.prototype.get=function(t){return t=ot(t),this.has(t)?this.map[t]:null},ct.prototype.has=function(t){return this.map.hasOwnProperty(ot(t))},ct.prototype.set=function(t,i){this.map[ot(t)]=rt(i)},ct.prototype.forEach=function(t,i){for(var e in this.map)this.map.hasOwnProperty(e)&&t.call(i,this.map[e],e,this)},ct.prototype.keys=function(){var t=[];return this.forEach((function(i,e){t.push(e)})),ht(t)},ct.prototype.values=function(){var t=[];return this.forEach((function(i){t.push(i)})),ht(t)},ct.prototype.entries=function(){var t=[];return this.forEach((function(i,e){t.push([e,i])})),ht(t)},Z&&(ct.prototype[Symbol.iterator]=ct.prototype.entries);var pt=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function wt(t,i){var e,s,n=(i=i||{}).body;if(t instanceof wt){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,i.headers||(this.headers=new ct(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=i.credentials||this.credentials||"same-origin",!i.headers&&this.headers||(this.headers=new ct(i.headers)),this.method=(e=i.method||this.method||"GET",s=e.toUpperCase(),pt.indexOf(s)>-1?s:e),this.mode=i.mode||this.mode||null,this.signal=i.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function mt(t){var i=new FormData;return t.trim().split("&").forEach((function(t){if(t){var e=t.split("="),s=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");i.append(decodeURIComponent(s),decodeURIComponent(n))}})),i}function yt(t,i){i||(i={}),this.type="default",this.status=void 0===i.status?200:i.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in i?i.statusText:"OK",this.headers=new ct(i.headers),this.url=i.url||"",this._initBody(t)}wt.prototype.clone=function(){return new wt(this,{body:this._bodyInit})},ft.call(wt.prototype),ft.call(yt.prototype),yt.prototype.clone=function(){return new yt(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new ct(this.headers),url:this.url})},yt.error=function(){var t=new yt(null,{status:0,statusText:""});return t.type="error",t};var bt=[301,302,303,307,308];yt.redirect=function(t,i){if(-1===bt.indexOf(i))throw new RangeError("Invalid status code");return new yt(null,{status:i,headers:{location:t}})};var vt=self.DOMException;try{new vt}catch(t){(vt=function(t,i){this.errorMessage=t,this.name=i;var e=Error(t);this.stack=e.stack}).prototype=Object.create(Error.prototype),vt.prototype.constructor=vt}function gt(t,i){return new Promise((function(e,s){var n=new wt(t,i);if(n.signal&&n.signal.aborted)return s(new vt("Aborted","AbortError"));var o=new XMLHttpRequest;function r(){o.abort()}o.onload=function(){var t,i,s={status:o.status,statusText:o.statusText,headers:(t=o.getAllResponseHeaders()||"",i=new ct,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var e=t.split(":"),s=e.shift().trim();if(s){var n=e.join(":").trim();i.append(s,n)}})),i)};s.url="responseURL"in o?o.responseURL:s.headers.get("X-Request-URL");var n="response"in o?o.response:o.responseText;e(new yt(n,s))},o.onerror=function(){s(new TypeError("Network request failed"))},o.ontimeout=function(){s(new TypeError("Network request failed"))},o.onabort=function(){s(new vt("Aborted","AbortError"))},o.open(n.method,n.url,!0),"include"===n.credentials?o.withCredentials=!0:"omit"===n.credentials&&(o.withCredentials=!1),"responseType"in o&&tt&&(o.responseType="blob"),n.headers.forEach((function(t,i){o.setRequestHeader(i,t)})),n.signal&&(n.signal.addEventListener("abort",r),o.onreadystatechange=function(){4===o.readyState&&n.signal.removeEventListener("abort",r)}),o.send(void 0===n._bodyInit?null:n._bodyInit)}))}gt.polyfill=!0,self.fetch||(self.fetch=gt,self.Headers=ct,self.Request=wt,self.Response=yt);class xt extends Q{static get styles(){return X`
      :host {
        display: block;
      }
      * {
        box-sizing: border-box;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
      form > div {
        position: relative;
        margin-bottom: 10px;
      }
      label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        /* color: #969696; */
        font-size: 10px;
        text-transform: uppercase;
        position: absolute;
        top: 6px;
        left: 10px;
        cursor: text;
        transition: all .25s ease;
      }
      .form-control {
        display: block;
        width: 100%;
        padding: 26px 16px 6px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #555;
        border-radius: 4px;
      }
      button {
        text-shadow: none;
        padding: 10px 20px;
        line-height: 1.6;
        -webkit-box-shadow: none;
        box-shadow: none;
        font-size: 13px;
        font-weight: 700;
        border-color: #555;
        border-style: solid;
        border-radius: 3px;
        -webkit-transition: background-color .15s ease-out;
        transition: background-color .15s ease-out;
      }
    `}static get properties(){return{apikey:{type:String},message:{type:String},submitted:{type:Boolean},submitting:{type:Boolean}}}constructor(){super(),this.apikey="7fb35345-752d-4792-9480-cd3db6674a62",this.submitted=!1,this.submitting=!1,this.formData={name:null,email:null,phone:null}}render(){const t=R`
      <form id="requestForm">
        <div>
          <label for="name">Name:</label>
          <input class="form-control appointment_form" id="name" name="name" type="text" required>
        </div>
        <div class="sr-only">
          <label for="email" tabindex="-1">Email:</label>
          <input class="form-control" id="email" name="email" type="text" tabindex="-1" required>
        </div>
        <div>
          <label for="confirmed_email">Email:</label>
          <input class="form-control" id="confirmed_email" name="confirmed_email" type="text">
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input class="form-control" id="phone" name="phone" type="text" required>
        </div>
        <button
          part="button"
          type="submit"
          class="btn btn-block mt-3"
          ?disabled=${this.submitting}
          @click=${this._submit}
        >
          Request an Appointment
        </button>
        <p>${this.errorMessage}</p>
      </form>
    `,i=R`
      <p>Congratulations! Dentistry is a big part of a healthy life, and we're excited to be a part of yours. We will contact you in the next 2 business days to schedule your appointment. Thank&nbsp;you!</p>
    `;return this.submitted?i:t}_submit(t){t.preventDefault(),this.submitting=!0,fetch(`https://web-api.tysonsteele.com/v1/webprops/${this.apikey}/schedule`,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{console.log("res",t),this.submitted=!0}).catch(t=>{this.errorMessage=t,this.submitting=!1})}}window.customElements.define("modular-form-poc",xt);export{xt as ModularFormPoc};
