(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
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
 *//**
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
 */const Wo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Fl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(p=64)),i.push(n[u],n[h],n[p],n[w])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw new Vl;const p=s<<2|a>>4;if(i.push(p),l!==64){const w=a<<4&240|l>>2;if(i.push(w),h!==64){const C=l<<6&192|h;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $l=function(t){const e=Wo(t);return Qo.encodeByteArray(e,!0)},Hn=function(t){return $l(t).replace(/\./g,"")},Xo=function(t){try{return Qo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jl=()=>Bl().__FIREBASE_DEFAULTS__,Hl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},$r=()=>{try{return jl()||Hl()||zl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jo=t=>{var e,n;return(n=(e=$r())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ql=t=>{const e=Jo(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Kl=()=>{var t;return(t=$r())===null||t===void 0?void 0:t.config},Yo=t=>{var e;return(e=$r())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Wl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hn(JSON.stringify(n)),Hn(JSON.stringify(o)),a].join(".")}/**
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
 */function Y(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ql(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function Xl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yl(){const t=Y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zl(){try{return typeof indexedDB=="object"}catch{return!1}}function eu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const tu="FirebaseError";class ke extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=tu,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?nu(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ke(r,a,i)}}function nu(t,e){return t.replace(iu,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const iu=/\{\$([^}]+)}/g;function ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Us(s)&&Us(o)){if(!zn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Us(t){return t!==null&&typeof t=="object"}/**
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
 */function cn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Lt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Mt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function su(t,e){const n=new ou(t,e);return n.subscribe.bind(n)}class ou{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");au(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=qi),r.error===void 0&&(r.error=qi),r.complete===void 0&&(r.complete=qi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function au(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qi(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class We{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class cu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Gl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uu(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lu(t){return t===Be?void 0:t}function uu(t){return t.instantiationMode==="EAGER"}/**
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
 */class hu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const du={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},fu=S.INFO,pu={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},gu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=pu[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=fu,this._logHandler=gu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?du[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const mu=(t,e)=>e.some(n=>t instanceof n);let Fs,Vs;function yu(){return Fs||(Fs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vu(){return Vs||(Vs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zo=new WeakMap,fr=new WeakMap,ea=new WeakMap,Ki=new WeakMap,jr=new WeakMap;function wu(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pe(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zo.set(n,t)}).catch(()=>{}),jr.set(e,t),e}function Eu(t){if(fr.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fr.set(t,e)}let pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ea.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iu(t){pr=t(pr)}function _u(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Gi(this),e,...n);return ea.set(i,e.sort?e.sort():[e]),Pe(i)}:vu().includes(t)?function(...e){return t.apply(Gi(this),e),Pe(Zo.get(this))}:function(...e){return Pe(t.apply(Gi(this),e))}}function Tu(t){return typeof t=="function"?_u(t):(t instanceof IDBTransaction&&Eu(t),mu(t,yu())?new Proxy(t,pr):t)}function Pe(t){if(t instanceof IDBRequest)return wu(t);if(Ki.has(t))return Ki.get(t);const e=Tu(t);return e!==t&&(Ki.set(t,e),jr.set(e,t)),e}const Gi=t=>jr.get(t);function Au(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Pe(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Pe(o.result),c.oldVersion,c.newVersion,Pe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Su=["get","getKey","getAll","getAllKeys","count"],Cu=["put","add","delete","clear"],Wi=new Map;function $s(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wi.get(e))return Wi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Cu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Su.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Wi.set(e,s),s}Iu(t=>({...t,get:(e,n,i)=>$s(e,n)||t.get(e,n,i),has:(e,n)=>!!$s(e,n)||t.has(e,n)}));/**
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
 */class ku{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gr="@firebase/app",Bs="0.9.9";/**
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
 */const Qe=new Br("@firebase/app"),Ru="@firebase/app-compat",Du="@firebase/analytics-compat",Nu="@firebase/analytics",Ou="@firebase/app-check-compat",Pu="@firebase/app-check",Lu="@firebase/auth",Mu="@firebase/auth-compat",xu="@firebase/database",Uu="@firebase/database-compat",Fu="@firebase/functions",Vu="@firebase/functions-compat",$u="@firebase/installations",Bu="@firebase/installations-compat",ju="@firebase/messaging",Hu="@firebase/messaging-compat",zu="@firebase/performance",qu="@firebase/performance-compat",Ku="@firebase/remote-config",Gu="@firebase/remote-config-compat",Wu="@firebase/storage",Qu="@firebase/storage-compat",Xu="@firebase/firestore",Ju="@firebase/firestore-compat",Yu="firebase",Zu="9.21.0";/**
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
 */const mr="[DEFAULT]",eh={[gr]:"fire-core",[Ru]:"fire-core-compat",[Nu]:"fire-analytics",[Du]:"fire-analytics-compat",[Pu]:"fire-app-check",[Ou]:"fire-app-check-compat",[Lu]:"fire-auth",[Mu]:"fire-auth-compat",[xu]:"fire-rtdb",[Uu]:"fire-rtdb-compat",[Fu]:"fire-fn",[Vu]:"fire-fn-compat",[$u]:"fire-iid",[Bu]:"fire-iid-compat",[ju]:"fire-fcm",[Hu]:"fire-fcm-compat",[zu]:"fire-perf",[qu]:"fire-perf-compat",[Ku]:"fire-rc",[Gu]:"fire-rc-compat",[Wu]:"fire-gcs",[Qu]:"fire-gcs-compat",[Xu]:"fire-fst",[Ju]:"fire-fst-compat","fire-js":"fire-js",[Yu]:"fire-js-all"};/**
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
 */const qn=new Map,yr=new Map;function th(t,e){try{t.container.addComponent(e)}catch(n){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pt(t){const e=t.name;if(yr.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,t);for(const n of qn.values())th(n,t);return!0}function Hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new an("app","Firebase",nh);/**
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
 */class ih{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
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
 */const Tt=Zu;function ta(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mr,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=Kl()),!n)throw Le.create("no-options");const s=qn.get(r);if(s){if(zn(n,s.options)&&zn(i,s.config))return s;throw Le.create("duplicate-app",{appName:r})}const o=new hu(r);for(const c of yr.values())o.addComponent(c);const a=new ih(n,i,o);return qn.set(r,a),a}function na(t=mr){const e=qn.get(t);if(!e&&t===mr)return ta();if(!e)throw Le.create("no-app",{appName:t});return e}function Me(t,e,n){var i;let r=(i=eh[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}pt(new We(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const rh="firebase-heartbeat-database",sh=1,zt="firebase-heartbeat-store";let Qi=null;function ia(){return Qi||(Qi=Au(rh,sh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zt)}}}).catch(t=>{throw Le.create("idb-open",{originalErrorMessage:t.message})})),Qi}async function oh(t){try{return(await ia()).transaction(zt).objectStore(zt).get(ra(t))}catch(e){if(e instanceof ke)Qe.warn(e.message);else{const n=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(n.message)}}}async function js(t,e){try{const i=(await ia()).transaction(zt,"readwrite");return await i.objectStore(zt).put(e,ra(t)),i.done}catch(n){if(n instanceof ke)Qe.warn(n.message);else{const i=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(i.message)}}}function ra(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ah=1024,ch=30*24*60*60*1e3;class lh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=ch}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:n,unsentEntries:i}=uh(this._heartbeatsCache.heartbeats),r=Hn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hs(){return new Date().toISOString().substring(0,10)}function uh(t,e=ah){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),zs(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class hh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zl()?eu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zs(t){return Hn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dh(t){pt(new We("platform-logger",e=>new ku(e),"PRIVATE")),pt(new We("heartbeat",e=>new lh(e),"PRIVATE")),Me(gr,Bs,t),Me(gr,Bs,"esm2017"),Me("fire-js","")}dh("");function zr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function sa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fh=sa,oa=new an("auth","Firebase",sa());/**
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
 */const Kn=new Br("@firebase/auth");function ph(t,...e){Kn.logLevel<=S.WARN&&Kn.warn(`Auth (${Tt}): ${t}`,...e)}function Un(t,...e){Kn.logLevel<=S.ERROR&&Kn.error(`Auth (${Tt}): ${t}`,...e)}/**
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
 */function he(t,...e){throw qr(t,...e)}function pe(t,...e){return qr(t,...e)}function gh(t,e,n){const i=Object.assign(Object.assign({},fh()),{[e]:n});return new an("auth","Firebase",i).create(e,{appName:t.name})}function qr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return oa.create(t,...e)}function y(t,e,...n){if(!t)throw qr(e,...n)}function ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Un(e),new Error(e)}function Ae(t,e){t||ve(e)}/**
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
 */function vr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mh(){return qs()==="http:"||qs()==="https:"}function qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mh()||Xl()||"connection"in navigator)?navigator.onLine:!0}function vh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ln{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ae(n>e,"Short delay should be less than long delay!"),this.isMobile=Ql()||Jl()}get(){return yh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kr(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aa{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Eh=new ln(3e4,6e4);function At(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function et(t,e,n,i,r={}){return ca(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=cn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),aa.fetch()(la(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ca(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},wh),e);try{const r=new Ih(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw kn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw kn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw kn(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gh(t,u,l);he(t,u)}}catch(r){if(r instanceof ke)throw r;he(t,"network-request-failed",{message:String(r)})}}async function yi(t,e,n,i,r={}){const s=await et(t,e,n,i,r);return"mfaPendingCredential"in s&&he(t,"multi-factor-auth-required",{_serverResponse:s}),s}function la(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Kr(t.config,r):`${t.config.apiScheme}://${r}`}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(pe(this.auth,"network-request-failed")),Eh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=pe(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function _h(t,e){return et(t,"POST","/v1/accounts:delete",e)}async function Th(t,e){return et(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ft(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ah(t,e=!1){const n=ne(t),i=await n.getIdToken(e),r=Gr(i);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ft(Xi(r.auth_time)),issuedAtTime:Ft(Xi(r.iat)),expirationTime:Ft(Xi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xi(t){return Number(t)*1e3}function Gr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Un("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xo(n);return r?JSON.parse(r):(Un("Failed to decode base64 JWT payload"),null)}catch(r){return Un("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Sh(t){const e=Gr(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ke&&Ch(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ch({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await qt(t,Th(n,{idToken:i}));y(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dh(s.providerUserInfo):[],a=Rh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function bh(t){const e=ne(t);await Gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rh(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Dh(t){return t.map(e=>{var{providerId:n}=e,i=zr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Nh(t,e){const n=await ca(t,{},async()=>{const i=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=la(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aa.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Nh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Kt;return i&&(y(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
 */function be(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qt(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ah(this,e)}reload(){return bh(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,_h(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Z=(l=n.createdAt)!==null&&l!==void 0?l:void 0,oe=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:ae,emailVerified:Nt,isAnonymous:it,providerData:rt,stsTokenManager:Sn}=n;y(ae&&Sn,e,"internal-error");const Cn=Kt.fromJSON(this.name,Sn);y(typeof ae=="string",e,"internal-error"),be(h,e.name),be(p,e.name),y(typeof Nt=="boolean",e,"internal-error"),y(typeof it=="boolean",e,"internal-error"),be(w,e.name),be(C,e.name),be(A,e.name),be(M,e.name),be(Z,e.name),be(oe,e.name);const zi=new qe({uid:ae,auth:e,email:p,emailVerified:Nt,displayName:h,isAnonymous:it,photoURL:C,phoneNumber:w,tenantId:A,stsTokenManager:Cn,createdAt:Z,lastLoginAt:oe});return rt&&Array.isArray(rt)&&(zi.providerData=rt.map(Ul=>Object.assign({},Ul))),M&&(zi._redirectEventId=M),zi}static async _fromIdTokenResponse(e,n,i=!1){const r=new Kt;r.updateFromServerResponse(n);const s=new qe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Gn(s),s}}/**
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
 */const Ks=new Map;function we(t){Ae(t instanceof Function,"Expected a class definition");let e=Ks.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ks.set(t,e),e)}/**
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
 */class ha{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ha.type="NONE";const Gs=ha;/**
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
 */function Fn(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Fn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Fn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new lt(we(Gs),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||we(Gs);const o=Fn(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=qe._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new lt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new lt(s,e,i))}}/**
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
 */function Ws(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(da(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ma(e))return"Blackberry";if(ya(e))return"Webos";if(Wr(e))return"Safari";if((e.includes("chrome/")||fa(e))&&!e.includes("edge/"))return"Chrome";if(ga(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function da(t=Y()){return/firefox\//i.test(t)}function Wr(t=Y()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fa(t=Y()){return/crios\//i.test(t)}function pa(t=Y()){return/iemobile/i.test(t)}function ga(t=Y()){return/android/i.test(t)}function ma(t=Y()){return/blackberry/i.test(t)}function ya(t=Y()){return/webos/i.test(t)}function vi(t=Y()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Oh(t=Y()){var e;return vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ph(){return Yl()&&document.documentMode===10}function va(t=Y()){return vi(t)||ga(t)||ya(t)||ma(t)||/windows phone/i.test(t)||pa(t)}function Lh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wa(t,e=[]){let n;switch(t){case"Browser":n=Ws(Y());break;case"Worker":n=`${Ws(Y())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tt}/${i}`}async function Ea(t,e){return et(t,"GET","/v2/recaptchaConfig",At(t,e))}function Qs(t){return t!==void 0&&t.enterprise!==void 0}class Ia{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Mh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _a(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=pe("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Mh().appendChild(i)})}function xh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Uh="https://www.google.com/recaptcha/enterprise.js?render=",Fh="recaptcha-enterprise",Vh="NO_RECAPTCHA";class Ta{constructor(e){this.type=Fh,this.auth=St(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ea(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ia(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Qs(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Vh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Qs(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_a(Uh+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wn(t,e,n,i=!1){const r=new Ta(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class $h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Bh{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new $h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=we(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await lt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}async initializeRecaptchaConfig(){const e=await Ea(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ia(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ta(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&we(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[we(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ph(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function St(t){return ne(t)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=su(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jh(t,e){const n=Hr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(zn(s,e??{}))return r;he(r,"already-initialized")}return n.initialize({options:e})}function Hh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(we);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zh(t,e,n){const i=St(t);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Aa(e),{host:o,port:a}=qh(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Kh()}function Aa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qh(t){const e=Aa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Js(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Js(o)}}}function Js(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,n){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}async function Gh(t,e){return et(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ji(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",At(t,e))}async function Wh(t,e){return et(t,"POST","/v1/accounts:sendOobCode",At(t,e))}async function Yi(t,e){return Wh(t,e)}/**
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
 */async function Qh(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}async function Xh(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",At(t,e))}/**
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
 */class Gt extends Qr{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Gt(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Gt(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Wn(e,i,"signInWithPassword");return Ji(e,r)}else return Ji(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Wn(e,i,"signInWithPassword");return Ji(e,s)}else return Promise.reject(r)});case"emailLink":return Qh(e,{email:this._email,oobCode:this._password});default:he(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xh(e,{idToken:n,email:this._email,oobCode:this._password});default:he(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ut(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",At(t,e))}/**
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
 */const Jh="http://localhost";class Xe extends Qr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):he("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=zr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Xe(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ut(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ut(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ut(e,n)}buildRequest(){const e={requestUri:Jh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cn(n)}return e}}/**
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
 */function Yh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zh(t){const e=Lt(Mt(t)).link,n=e?Lt(Mt(e)).deep_link_id:null,i=Lt(Mt(t)).deep_link_id;return(i?Lt(Mt(i)).link:null)||i||n||e||t}class Xr{constructor(e){var n,i,r,s,o,a;const c=Lt(Mt(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=Yh((r=c.mode)!==null&&r!==void 0?r:null);y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zh(e);try{return new Xr(n)}catch{return null}}}/**
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
 */class Ct{constructor(){this.providerId=Ct.PROVIDER_ID}static credential(e,n){return Gt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Xr.parseLink(n);return y(i,"argument-error"),Gt._fromEmailAndCode(e,i.code,i.tenantId)}}Ct.PROVIDER_ID="password";Ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class un extends Sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Re extends un{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
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
 */class De extends un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return De.credential(n,i)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
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
 */class Ne extends un{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
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
 */class Oe extends un{constructor(){super("twitter.com")}static credential(e,n){return Xe._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Oe.credential(n,i)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await qe._fromIdTokenResponse(e,i,r),o=Ys(i);return new gt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ys(i);return new gt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ys(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qn extends ke{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Qn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Qn(e,n,i,r)}}function Ca(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qn._fromErrorAndOperation(t,s,e,i):s})}async function ed(t,e,n=!1){const i=await qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gt._forOperation(t,"link",i)}/**
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
 */async function td(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await qt(t,Ca(i,r,e,t),n);y(s.idToken,i,"internal-error");const o=Gr(s.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(t.uid===a,i,"user-mismatch"),gt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&he(i,"user-mismatch"),s}}/**
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
 */async function ka(t,e,n=!1){const i="signIn",r=await Ca(t,i,e),s=await gt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function nd(t,e){return ka(St(t),e)}/**
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
 */function Zi(t,e,n){var i;y(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),y(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Jm(t,e,n){var i;const r=St(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await Wn(r,s,"getOobCode",!0);n&&Zi(r,o,n),await Yi(r,o)}else n&&Zi(r,s,n),await Yi(r,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Wn(r,s,"getOobCode",!0);n&&Zi(r,a,n),await Yi(r,a)}else return Promise.reject(o)})}function Ym(t,e,n){return nd(ne(t),Ct.credential(e,n))}/**
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
 */function Zm(t,e){return ne(t).setPersistence(e)}function id(t,e,n,i){return ne(t).onIdTokenChanged(e,n,i)}function rd(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function ey(t,e,n,i){return ne(t).onAuthStateChanged(e,n,i)}function ty(t){return ne(t).signOut()}const Xn="__sak";/**
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
 */class ba{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xn,"1"),this.storage.removeItem(Xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sd(){const t=Y();return Wr(t)||vi(t)}const od=1e3,ad=10;class Ra extends ba{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sd()&&Lh(),this.fallbackToPolling=va(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Ph()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ad):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},od)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ra.type="LOCAL";const cd=Ra;/**
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
 */class Da extends ba{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Da.type="SESSION";const Na=Da;/**
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
 */function ld(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new wi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await ld(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
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
 */function Jr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ud{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Jr("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ge(){return window}function hd(t){ge().location.href=t}/**
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
 */function Oa(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function dd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pd(){return Oa()?self:null}/**
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
 */const Pa="firebaseLocalStorageDb",gd=1,Jn="firebaseLocalStorage",La="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ei(t,e){return t.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function md(){const t=indexedDB.deleteDatabase(Pa);return new hn(t).toPromise()}function wr(){const t=indexedDB.open(Pa,gd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Jn,{keyPath:La})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Jn)?e(i):(i.close(),await md(),e(await wr()))})})}async function Zs(t,e,n){const i=Ei(t,!0).put({[La]:e,value:n});return new hn(i).toPromise()}async function yd(t,e){const n=Ei(t,!1).get(e),i=await new hn(n).toPromise();return i===void 0?null:i.value}function eo(t,e){const n=Ei(t,!0).delete(e);return new hn(n).toPromise()}const vd=800,wd=3;class Ma{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>wd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(pd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dd(),!this.activeServiceWorker)return;this.sender=new ud(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wr();return await Zs(e,Xn,"1"),await eo(e,Xn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zs(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>yd(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ei(r,!1).getAll();return new hn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ma.type="LOCAL";const Ed=Ma;new ln(3e4,6e4);/**
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
 */function Id(t,e){return e?we(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yr extends Qr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ut(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _d(t){return ka(t.auth,new Yr(t),t.bypassAuthState)}function Td(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),td(n,new Yr(t),t.bypassAuthState)}async function Ad(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),ed(n,new Yr(t),t.bypassAuthState)}/**
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
 */class xa{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _d;case"linkViaPopup":case"linkViaRedirect":return Ad;case"reauthViaPopup":case"reauthViaRedirect":return Td;default:he(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Sd=new ln(2e3,1e4);class at extends xa{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,at.currentPopupAction&&at.currentPopupAction.cancel(),at.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=Jr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,at.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sd.get())};e()}}at.currentPopupAction=null;/**
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
 */const Cd="pendingRedirect",Vn=new Map;class kd extends xa{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const i=await bd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bd(t,e){const n=Nd(e),i=Dd(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Rd(t,e){Vn.set(t._key(),e)}function Dd(t){return we(t._redirectPersistence)}function Nd(t){return Fn(Cd,t.config.apiKey,t.name)}async function Od(t,e,n=!1){const i=St(t),r=Id(i,e),o=await new kd(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Pd=10*60*1e3;class Ld{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Md(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ua(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(pe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pd&&this.cachedEventUids.clear(),this.cachedEventUids.has(to(e))}saveEventToCache(e){this.cachedEventUids.add(to(e)),this.lastProcessedEventTime=Date.now()}}function to(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ua({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Md(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ua(t);default:return!1}}/**
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
 */async function xd(t,e={}){return et(t,"GET","/v1/projects",e)}/**
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
 */const Ud=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fd=/^https?/;async function Vd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xd(t);for(const n of e)try{if($d(n))return}catch{}he(t,"unauthorized-domain")}function $d(t){const e=vr(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Fd.test(n))return!1;if(Ud.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Bd=new ln(3e4,6e4);function no(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jd(t){return new Promise((e,n)=>{var i,r,s;function o(){no(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{no(),n(pe(t,"network-request-failed"))},timeout:Bd.get()})}if(!((r=(i=ge().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=xh("iframefcb");return ge()[a]=()=>{gapi.load?o():n(pe(t,"network-request-failed"))},_a(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $n=null,e})}let $n=null;function Hd(t){return $n=$n||jd(t),$n}/**
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
 */const zd=new ln(5e3,15e3),qd="__/auth/iframe",Kd="emulator/auth/iframe",Gd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qd(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kr(e,Kd):`https://${t.config.authDomain}/${qd}`,i={apiKey:e.apiKey,appName:t.name,v:Tt},r=Wd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${cn(i).slice(1)}`}async function Xd(t){const e=await Hd(t),n=ge().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Qd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gd,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=pe(t,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},zd.get());function c(){ge().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Jd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yd=500,Zd=600,ef="_blank",tf="http://localhost";class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nf(t,e,n,i=Yd,r=Zd){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jd),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Y().toLowerCase();n&&(a=fa(l)?ef:n),da(l)&&(e=e||tf,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[w,C])=>`${p}${w}=${C},`,"");if(Oh(l)&&a!=="_self")return rf(e||"",a),new io(null);const h=window.open(e||"",a,u);y(h,t,"popup-blocked");try{h.focus()}catch{}return new io(h)}function rf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const sf="__/auth/handler",of="emulator/auth/handler",af=encodeURIComponent("fac");async function ro(t,e,n,i,r,s){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Tt,eventId:r};if(e instanceof Sa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof un){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${af}=${encodeURIComponent(c)}`:"";return`${cf(t)}?${cn(a).slice(1)}${l}`}function cf({config:t}){return t.emulator?Kr(t,of):`https://${t.authDomain}/${sf}`}/**
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
 */const er="webStorageSupport";class lf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Na,this._completeRedirectFn=Od,this._overrideRedirectResult=Rd}async _openPopup(e,n,i,r){var s;Ae((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ro(e,n,i,vr(),r);return nf(e,o,Jr())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await ro(e,n,i,vr(),r);return hd(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ae(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Xd(e),i=new Ld(e);return n.register("authEvent",r=>(y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(er,{type:er},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[er];o!==void 0&&n(!!o),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return va()||Wr()||vi()}}const uf=lf;var so="@firebase/auth",oo="0.23.1";/**
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
 */class hf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function df(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ff(t){pt(new We("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),y(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wa(t)},l=new Bh(i,r,s,c);return Hh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),pt(new We("auth-internal",e=>{const n=St(e.getProvider("auth").getImmediate());return(i=>new hf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Me(so,oo,df(t)),Me(so,oo,"esm2017")}/**
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
 */const pf=5*60,gf=Yo("authIdTokenMaxAge")||pf;let ao=null;const mf=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>gf)return;const r=n==null?void 0:n.token;ao!==r&&(ao=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function yf(t=na()){const e=Hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jh(t,{popupRedirectResolver:uf,persistence:[Ed,cd,Na]}),i=Yo("authTokenSyncURL");if(i){const s=mf(i);rd(n,s,()=>s(n.currentUser)),id(n,o=>s(o))}const r=Jo("auth");return r&&zh(n,`http://${r}`),n}ff("Browser");var vf="firebase",wf="9.21.0";/**
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
 */Me(vf,wf,"app");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Zr=Zr||{},v=Ef||self;function Yn(){}function Ii(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function dn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function If(t){return Object.prototype.hasOwnProperty.call(t,tr)&&t[tr]||(t[tr]=++_f)}var tr="closure_uid_"+(1e9*Math.random()>>>0),_f=0;function Tf(t,e,n){return t.call.apply(t.bind,arguments)}function Af(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function X(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Tf:X=Af,X.apply(null,arguments)}function bn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function B(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ve(){this.s=this.s,this.o=this.o}var Sf=0;Ve.prototype.s=!1;Ve.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Sf!=0)&&If(this)};Ve.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function es(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function co(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ii(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Cf=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",Yn,e),v.removeEventListener("test",Yn,e)}catch{}return t}();function Zn(t){return/^[\s\xa0]*$/.test(t)}var lo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nr(t,e){return t<e?-1:t>e?1:0}function _i(){var t=v.navigator;return t&&(t=t.userAgent)?t:""}function de(t){return _i().indexOf(t)!=-1}function ts(t){return ts[" "](t),t}ts[" "]=Yn;function Va(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var kf=de("Opera"),mt=de("Trident")||de("MSIE"),$a=de("Edge"),Er=$a||mt,Ba=de("Gecko")&&!(_i().toLowerCase().indexOf("webkit")!=-1&&!de("Edge"))&&!(de("Trident")||de("MSIE"))&&!de("Edge"),bf=_i().toLowerCase().indexOf("webkit")!=-1&&!de("Edge");function ja(){var t=v.document;return t?t.documentMode:void 0}var ei;e:{var ir="",rr=function(){var t=_i();if(Ba)return/rv:([^\);]+)(\)|;)/.exec(t);if($a)return/Edge\/([\d\.]+)/.exec(t);if(mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bf)return/WebKit\/(\S+)/.exec(t);if(kf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rr&&(ir=rr?rr[1]:""),mt){var sr=ja();if(sr!=null&&sr>parseFloat(ir)){ei=String(sr);break e}}ei=ir}var Rf={};function Df(){return Va(Rf,9,function(){let t=0;const e=lo(String(ei)).split("."),n=lo("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=nr(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||nr(r[2].length==0,s[2].length==0)||nr(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Ir;if(v.document&&mt){var uo=ja();Ir=uo||parseInt(ei,10)||void 0}else Ir=void 0;var Nf=Ir;function Wt(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ba){e:{try{ts(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Of[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wt.$.h.call(this)}}B(Wt,J);var Of={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),Pf=0;function Lf(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Pf,this.fa=this.ia=!1}function Ti(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ns(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ha(t){const e={};for(const n in t)e[n]=t[n];return e}const ho="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<ho.length;s++)n=ho[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ai(t){this.src=t,this.g={},this.h=0}Ai.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tr(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Lf(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function _r(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Fa(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Ti(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tr(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var is="closure_lm_"+(1e6*Math.random()|0),or={};function qa(t,e,n,i,r){if(i&&i.once)return Ga(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)qa(t,e[s],n,i,r);return null}return n=os(n),t&&t[fn]?t.O(e,n,dn(i)?!!i.capture:!!i,r):Ka(t,e,n,!1,i,r)}function Ka(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=dn(r)?!!r.capture:!!r,a=ss(t);if(a||(t[is]=a=new Ai(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Mf(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Cf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Qa(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Mf(){function t(n){return e.call(t.src,t.listener,n)}const e=xf;return t}function Ga(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ga(t,e[s],n,i,r);return null}return n=os(n),t&&t[fn]?t.P(e,n,dn(i)?!!i.capture:!!i,r):Ka(t,e,n,!0,i,r)}function Wa(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Wa(t,e[s],n,i,r);else i=dn(i)?!!i.capture:!!i,n=os(n),t&&t[fn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tr(s,n,i,r),-1<n&&(Ti(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ss(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tr(e,n,i,r)),(n=-1<t?e[t]:null)&&rs(n))}function rs(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fn])_r(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Qa(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ss(e))?(_r(n,t),n.h==0&&(n.src=null,e[is]=null)):Ti(t)}}}function Qa(t){return t in or?or[t]:or[t]="on"+t}function xf(t,e){if(t.fa)t=!0;else{e=new Wt(e,this);var n=t.listener,i=t.la||t.src;t.ia&&rs(t),t=n.call(i,e)}return t}function ss(t){return t=t[is],t instanceof Ai?t:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function os(t){return typeof t=="function"?t:(t[ar]||(t[ar]=function(e){return t.handleEvent(e)}),t[ar])}function V(){Ve.call(this),this.i=new Ai(this),this.S=this,this.J=null}B(V,Ve);V.prototype[fn]=!0;V.prototype.removeEventListener=function(t,e,n,i){Wa(this,t,e,n,i)};function q(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var r=e;e=new J(i,t),za(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Rn(o,i,!0,e)&&r}if(o=e.g=t,r=Rn(o,i,!0,e)&&r,r=Rn(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Rn(o,i,!1,e)&&r}V.prototype.N=function(){if(V.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ti(n[i]);delete t.g[e],t.h--}}this.J=null};V.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};V.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Rn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_r(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var as=v.JSON.stringify;function Uf(){var t=Ya;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ff{constructor(){this.h=this.g=null}add(e,n){const i=Xa.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Xa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vf,t=>t.reset());class Vf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $f(t){v.setTimeout(()=>{throw t},0)}function Ja(t,e){Ar||Bf(),Sr||(Ar(),Sr=!0),Ya.add(t,e)}var Ar;function Bf(){var t=v.Promise.resolve(void 0);Ar=function(){t.then(jf)}}var Sr=!1,Ya=new Ff;function jf(){for(var t;t=Uf();){try{t.h.call(t.g)}catch(n){$f(n)}var e=Xa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sr=!1}function Si(t,e){V.call(this),this.h=t||1,this.g=e||v,this.j=X(this.qb,this),this.l=Date.now()}B(Si,V);g=Si.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),q(this,"tick"),this.ga&&(cs(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cs(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}g.N=function(){Si.$.N.call(this),cs(this),delete this.g};function ls(t,e,n){if(typeof t=="function")n&&(t=X(t,n));else if(t&&typeof t.handleEvent=="function")t=X(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function Za(t){t.g=ls(()=>{t.g=null,t.i&&(t.i=!1,Za(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Hf extends Ve{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Za(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(t){Ve.call(this),this.h=t,this.g={}}B(Qt,Ve);var fo=[];function ec(t,e,n,i){Array.isArray(n)||(n&&(fo[0]=n.toString()),n=fo);for(var r=0;r<n.length;r++){var s=qa(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tc(t){ns(t.g,function(e,n){this.g.hasOwnProperty(n)&&rs(e)},t),t.g={}}Qt.prototype.N=function(){Qt.$.N.call(this),tc(this)};Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ci(){this.g=!0}Ci.prototype.Ea=function(){this.g=!1};function zf(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function qf(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ct(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gf(t,n)+(i?" "+i:"")})}function Kf(t,e){t.info(function(){return"TIMEOUT: "+e})}Ci.prototype.info=function(){};function Gf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return as(n)}catch{return e}}var tt={},po=null;function ki(){return po=po||new V}tt.Ta="serverreachability";function nc(t){J.call(this,tt.Ta,t)}B(nc,J);function Xt(t){const e=ki();q(e,new nc(e))}tt.STAT_EVENT="statevent";function ic(t,e){J.call(this,tt.STAT_EVENT,t),this.stat=e}B(ic,J);function ee(t){const e=ki();q(e,new ic(e,t))}tt.Ua="timingevent";function rc(t,e){J.call(this,tt.Ua,t),this.size=e}B(rc,J);function pn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},e)}var bi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function us(){}us.prototype.h=null;function go(t){return t.h||(t.h=t.i())}function oc(){}var gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hs(){J.call(this,"d")}B(hs,J);function ds(){J.call(this,"c")}B(ds,J);var Cr;function Ri(){}B(Ri,us);Ri.prototype.g=function(){return new XMLHttpRequest};Ri.prototype.i=function(){return{}};Cr=new Ri;function mn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Qt(this),this.P=Wf,t=Er?125:void 0,this.V=new Si(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var Wf=45e3,kr={},ti={};g=mn.prototype;g.setTimeout=function(t){this.P=t};function br(t,e,n){t.L=1,t.v=Ni(Se(e)),t.s=n,t.S=!0,cc(t,null)}function cc(t,e){t.G=Date.now(),yn(t),t.A=Se(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),mc(n.i,"t",i),t.C=0,n=t.l.I,t.h=new ac,t.g=Uc(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Hf(X(t.Pa,t,t.g),t.O)),ec(t.U,t.g,"readystatechange",t.nb),e=t.I?Ha(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Xt(),zf(t.j,t.u,t.A,t.m,t.W,t.s)}g.nb=function(t){t=t.target;const e=this.M;e&&Ee(t)==3?e.l():this.Pa(t)};g.Pa=function(t){try{if(t==this.g)e:{const u=Ee(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Er||this.g&&(this.h.h||this.g.ja()||wo(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Xt(3):Xt(2)),Di(this);var n=this.g.da();this.aa=n;t:if(lc(this)){var i=wo(this.g);t="";var r=i.length,s=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){je(this),Vt(this);var o="";break t}this.h.i=new v.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qf(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zn(a)){var l=a;break t}}l=null}if(n=l)ct(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rr(this,n);else{this.i=!1,this.o=3,ee(12),je(this),Vt(this);break e}}this.S?(uc(this,u,o),Er&&this.i&&u==3&&(ec(this.U,this.V,"tick",this.mb),this.V.start())):(ct(this.j,this.m,o,null),Rr(this,o)),u==4&&je(this),this.i&&!this.J&&(u==4?Pc(this.l,this):(this.i=!1,yn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ee(12)):(this.o=0,ee(13)),je(this),Vt(this)}}}catch{}finally{}};function lc(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function uc(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=Qf(t,n),r==ti){e==4&&(t.o=4,ee(14),i=!1),ct(t.j,t.m,null,"[Incomplete Response]");break}else if(r==kr){t.o=4,ee(15),ct(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ct(t.j,t.m,r,null),Rr(t,r);lc(t)&&r!=ti&&r!=kr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ee(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ws(e),e.L=!0,ee(11))):(ct(t.j,t.m,n,"[Invalid Chunked Response]"),je(t),Vt(t))}g.mb=function(){if(this.g){var t=Ee(this.g),e=this.g.ja();this.C<e.length&&(Di(this),uc(this,t,e),this.i&&t!=4&&yn(this))}};function Qf(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ti:(n=Number(e.substring(n,i)),isNaN(n)?kr:(i+=1,i+n>e.length?ti:(e=e.substr(i,n),t.C=i+n,e)))}g.cancel=function(){this.J=!0,je(this)};function yn(t){t.Y=Date.now()+t.P,hc(t,t.P)}function hc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pn(X(t.lb,t),e)}function Di(t){t.B&&(v.clearTimeout(t.B),t.B=null)}g.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Kf(this.j,this.A),this.L!=2&&(Xt(),ee(17)),je(this),this.o=2,Vt(this)):hc(this,this.Y-t)};function Vt(t){t.l.H==0||t.J||Pc(t.l,t)}function je(t){Di(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,cs(t.V),tc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Rr(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dr(n.h,t))){if(!t.K&&Dr(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ri(n),Li(n);else break e;vs(n),ee(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=pn(X(n.ib,n),6e3));if(1>=wc(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else He(n,11)}else if((t.K||n.g==t)&&ri(n),!Zn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const w=t.g;if(w){const C=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var s=i.h;s.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fs(s,s.h),s.h=null))}if(i.F){const A=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.Da=A,D(i.G,i.F,A))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=xc(i,i.I?i.oa:null,i.Y),o.K){Ec(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Di(a),yn(a)),i.g=o}else Nc(i);0<n.i.length&&Mi(n)}else l[0]!="stop"&&l[0]!="close"||He(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?He(n,7):ys(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}Xt(4)}catch{}}function Xf(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ii(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Jf(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ii(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function dc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ii(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Jf(t),i=Xf(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ke){this.h=e!==void 0?e:t.h,ni(this,t.j),this.s=t.s,this.g=t.g,ii(this,t.m),this.l=t.l,e=t.i;var n=new Jt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mo(this,n),this.o=t.o}else t&&(n=String(t).match(fc))?(this.h=!!e,ni(this,n[1]||"",!0),this.s=xt(n[2]||""),this.g=xt(n[3]||"",!0),ii(this,n[4]),this.l=xt(n[5]||"",!0),mo(this,n[6]||"",!0),this.o=xt(n[7]||"")):(this.h=!!e,this.i=new Jt(null,this.h))}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ut(e,yo,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ut(e,yo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ut(n,n.charAt(0)=="/"?tp:ep,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ut(n,ip)),t.join("")};function Se(t){return new Ke(t)}function ni(t,e,n){t.j=n?xt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mo(t,e,n){e instanceof Jt?(t.i=e,rp(t.i,t.h)):(n||(e=Ut(e,np)),t.i=new Jt(e,t.h))}function D(t,e,n){t.i.set(e,n)}function Ni(t){return D(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ut(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yo=/[#\/\?@]/g,ep=/[#\?:]/g,tp=/[#\?]/g,np=/[#\?@]/g,ip=/#/g;function Jt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $e(t){t.g||(t.g=new Map,t.h=0,t.i&&Yf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=Jt.prototype;g.add=function(t,e){$e(this),this.i=null,t=kt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pc(t,e){$e(t),e=kt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gc(t,e){return $e(t),e=kt(t,e),t.g.has(e)}g.forEach=function(t,e){$e(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};g.sa=function(){$e(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};g.Z=function(t){$e(this);let e=[];if(typeof t=="string")gc(this,t)&&(e=e.concat(this.g.get(kt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};g.set=function(t,e){return $e(this),this.i=null,t=kt(this,t),gc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function mc(t,e,n){pc(t,e),0<n.length&&(t.i=null,t.g.set(kt(t,e),es(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function kt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rp(t,e){e&&!t.j&&($e(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(pc(this,i),mc(this,r,n))},t)),t.j=e}var sp=class{constructor(t,e){this.h=t,this.g=e}};function yc(t){this.l=t||op,v.PerformanceNavigationTiming?(t=v.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var op=10;function vc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wc(t){return t.h?1:t.g?t.g.size:0}function Dr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fs(t,e){t.g?t.g.add(e):t.h=e}function Ec(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yc.prototype.cancel=function(){if(this.i=Ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ic(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return es(t.i)}function ps(){}ps.prototype.stringify=function(t){return v.JSON.stringify(t,void 0)};ps.prototype.parse=function(t){return v.JSON.parse(t,void 0)};function ap(){this.g=new ps}function cp(t,e,n){const i=n||"";try{dc(t,function(r,s){let o=r;dn(r)&&(o=as(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function lp(t,e){const n=new Ci;if(v.Image){const i=new Image;i.onload=bn(Dn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=bn(Dn,n,i,"TestLoadImage: error",!1,e),i.onabort=bn(Dn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=bn(Dn,n,i,"TestLoadImage: timeout",!1,e),v.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Dn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function vn(t){this.l=t.fc||null,this.j=t.ob||!1}B(vn,us);vn.prototype.g=function(){return new Oi(this.l,this.j)};vn.prototype.i=function(t){return function(){return t}}({});function Oi(t,e){V.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(Oi,V);var gs=0;g=Oi.prototype;g.open=function(t,e){if(this.readyState!=gs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yt(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||v).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=gs};g.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yt(this)),this.g&&(this.readyState=3,Yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_c(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _c(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}g.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wn(this):Yt(this),this.readyState==3&&_c(this)}};g.Za=function(t){this.g&&(this.response=this.responseText=t,wn(this))};g.Ya=function(t){this.g&&(this.response=t,wn(this))};g.ka=function(){this.g&&wn(this)};function wn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yt(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var up=v.JSON.parse;function O(t){V.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tc,this.L=this.M=!1}B(O,V);var Tc="",hp=/^https?$/i,dp=["POST","PUT"];g=O.prototype;g.Oa=function(t){this.M=t};g.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cr.g(),this.C=this.u?go(this.u):go(Cr),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){vo(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=v.FormData&&t instanceof v.FormData,!(0<=Fa(dp,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cc(this),0<this.B&&((this.L=fp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=ls(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vo(this,s)}};function fp(t){return mt&&Df()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}g.ua=function(){typeof Zr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function vo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ac(t),Pi(t)}function Ac(t){t.F||(t.F=!0,q(t,"complete"),q(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,q(this,"complete"),q(this,"abort"),Pi(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pi(this,!0)),O.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Sc(this):this.kb())};g.kb=function(){Sc(this)};function Sc(t){if(t.h&&typeof Zr<"u"&&(!t.C[1]||Ee(t)!=4||t.da()!=2)){if(t.v&&Ee(t)==4)ls(t.La,0,t);else if(q(t,"readystatechange"),Ee(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.I).match(fc)[1]||null;if(!r&&v.self&&v.self.location){var s=v.self.location.protocol;r=s.substr(0,s.length-1)}i=!hp.test(r?r.toLowerCase():"")}n=i}if(n)q(t,"complete"),q(t,"success");else{t.m=6;try{var o=2<Ee(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Ac(t)}}finally{Pi(t)}}}}function Pi(t,e){if(t.g){Cc(t);const n=t.g,i=t.C[0]?Yn:null;t.g=null,t.C=null,e||q(t,"ready");try{n.onreadystatechange=i}catch{}}}function Cc(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(v.clearTimeout(t.A),t.A=null)}function Ee(t){return t.g?t.g.readyState:0}g.da=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),up(e)}};function wo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Tc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kc(t){let e="";return ns(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ms(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=kc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):D(t,e,n))}function Ot(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bc(t){this.Ga=0,this.i=[],this.j=new Ci,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ot("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ot("baseRetryDelayMs",5e3,t),this.hb=Ot("retryDelaySeedMs",1e4,t),this.eb=Ot("forwardChannelMaxRetries",2,t),this.xa=Ot("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new yc(t&&t.concurrentRequestLimit),this.Ja=new ap,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}g=bc.prototype;g.qa=8;g.H=1;function ys(t){if(Rc(t),t.H==3){var e=t.W++,n=Se(t.G);D(n,"SID",t.J),D(n,"RID",e),D(n,"TYPE","terminate"),En(t,n),e=new mn(t,t.j,e,void 0),e.L=2,e.v=Ni(Se(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(e.v.toString(),"")),!n&&v.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uc(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yn(e)}Mc(t)}function Li(t){t.g&&(ws(t),t.g.cancel(),t.g=null)}function Rc(t){Li(t),t.u&&(v.clearTimeout(t.u),t.u=null),ri(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&v.clearTimeout(t.m),t.m=null)}function Mi(t){vc(t.h)||t.m||(t.m=!0,Ja(t.Na,t),t.C=0)}function pp(t,e){return wc(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pn(X(t.Na,t,e),Lc(t,t.C)),t.C++,!0)}g.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new mn(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Ha(s),za(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dc(this,r,e),n=Se(this.G),D(n,"RID",t),D(n,"CVER",22),this.F&&D(n,"X-HTTP-Session-Id",this.F),En(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(kc(s)))+"&"+e:this.o&&ms(n,this.o,s)),fs(this.h,r),this.bb&&D(n,"TYPE","init"),this.P?(D(n,"$req",e),D(n,"SID","null"),r.ba=!0,br(r,n,null)):br(r,n,e),this.H=2}}else this.H==3&&(t?Eo(this,t):this.i.length==0||vc(this.h)||Eo(this))};function Eo(t,e){var n;e?n=e.m:n=t.W++;const i=Se(t.G);D(i,"SID",t.J),D(i,"RID",n),D(i,"AID",t.V),En(t,i),t.o&&t.s&&ms(i,t.o,t.s),n=new mn(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Dc(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fs(t.h,n),br(n,i,e)}function En(t,e){t.ma&&ns(t.ma,function(n,i){D(e,i,n)}),t.l&&dc({},function(n,i){D(e,i,n)})}function Dc(t,e,n){n=Math.min(t.i.length,n);var i=t.l?X(t.l.Va,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{cp(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function Nc(t){t.g||t.u||(t.ba=1,Ja(t.Ma,t),t.A=0)}function vs(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pn(X(t.Ma,t),Lc(t,t.A)),t.A++,!0)}g.Ma=function(){if(this.u=null,Oc(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=pn(X(this.jb,this),t)}};g.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ee(10),Li(this),Oc(this))};function ws(t){t.B!=null&&(v.clearTimeout(t.B),t.B=null)}function Oc(t){t.g=new mn(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Se(t.wa);D(e,"RID","rpc"),D(e,"SID",t.J),D(e,"CI",t.M?"0":"1"),D(e,"AID",t.V),D(e,"TYPE","xmlhttp"),En(t,e),t.o&&t.s&&ms(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ni(Se(e)),n.s=null,n.S=!0,cc(n,t)}g.ib=function(){this.v!=null&&(this.v=null,Li(this),vs(this),ee(19))};function ri(t){t.v!=null&&(v.clearTimeout(t.v),t.v=null)}function Pc(t,e){var n=null;if(t.g==e){ri(t),ws(t),t.g=null;var i=2}else if(Dr(t.h,e))n=e.F,Ec(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=ki(),q(i,new rc(i,n)),Mi(t)}else Nc(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(i==1&&pp(t,e)||i==2&&vs(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:He(t,5);break;case 4:He(t,10);break;case 3:He(t,6);break;default:He(t,2)}}}function Lc(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function He(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=X(t.pb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||ni(n,"https"),Ni(n)),lp(n.toString(),i)}else ee(2);t.H=0,t.l&&t.l.za(e),Mc(t),Rc(t)}g.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Mc(t){if(t.H=0,t.pa=[],t.l){const e=Ic(t.h);(e.length!=0||t.i.length!=0)&&(co(t.pa,e),co(t.pa,t.i),t.h.i.length=0,es(t.i),t.i.length=0),t.l.ya()}}function xc(t,e,n){var i=n instanceof Ke?Se(n):new Ke(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),ii(i,i.m);else{var r=v.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ke(null,void 0);i&&ni(s,i),e&&(s.g=e),r&&ii(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&D(i,n,e),D(i,"VER",t.qa),En(t,i),i}function Uc(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new O(new vn({ob:!0})):new O(t.va),e.Oa(t.I),e}function Fc(){}g=Fc.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.Va=function(){};function si(){if(mt&&!(10<=Number(Nf)))throw Error("Environmental error: no available transport.")}si.prototype.g=function(t,e){return new re(t,e)};function re(t,e){V.call(this),this.g=new bc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Zn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bt(this)}B(re,V);re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ee(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=xc(t,null,t.Y),Mi(t)};re.prototype.close=function(){ys(this.g)};re.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=as(t),t=n);e.i.push(new sp(e.fb++,t)),e.H==3&&Mi(e)};re.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,re.$.N.call(this)};function Vc(t){hs.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}B(Vc,hs);function $c(){ds.call(this),this.status=1}B($c,ds);function bt(t){this.g=t}B(bt,Fc);bt.prototype.Ba=function(){q(this.g,"a")};bt.prototype.Aa=function(t){q(this.g,new Vc(t))};bt.prototype.za=function(t){q(this.g,new $c)};bt.prototype.ya=function(){q(this.g,"b")};function gp(){this.blockSize=-1}function me(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}B(me,gp);me.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cr(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}me.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)cr(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){cr(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){cr(this,i),r=0;break}}this.h=r,this.i+=e};me.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function k(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var mp={};function Es(t){return-128<=t&&128>t?Va(mp,t,function(e){return new k([e|0],0>e?-1:0)}):new k([t|0],0>t?-1:0)}function fe(t){if(isNaN(t)||!isFinite(t))return ht;if(0>t)return z(fe(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Nr;return new k(e,0)}function Bc(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return z(Bc(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fe(Math.pow(e,8)),i=ht,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=fe(Math.pow(e,s)),i=i.R(s).add(fe(o))):(i=i.R(n),i=i.add(fe(o)))}return i}var Nr=4294967296,ht=Es(0),Or=Es(1),Io=Es(16777216);g=k.prototype;g.ea=function(){if(se(this))return-z(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Nr+i)*e,e*=Nr}return t};g.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ie(this))return"0";if(se(this))return"-"+z(this).toString(t);for(var e=fe(Math.pow(t,6)),n=this,i="";;){var r=ai(n,e).g;n=oi(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ie(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};g.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ie(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function se(t){return t.h==-1}g.X=function(t){return t=oi(this,t),se(t)?-1:Ie(t)?0:1};function z(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new k(n,~t.h).add(Or)}g.abs=function(){return se(this)?z(this):this};g.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new k(n,n[n.length-1]&-2147483648?-1:0)};function oi(t,e){return t.add(z(e))}g.R=function(t){if(Ie(this)||Ie(t))return ht;if(se(this))return se(t)?z(this).R(z(t)):z(z(this).R(t));if(se(t))return z(this.R(z(t)));if(0>this.X(Io)&&0>t.X(Io))return fe(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,Nn(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Nn(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Nn(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Nn(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new k(n,0)};function Nn(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Pt(t,e){this.g=t,this.h=e}function ai(t,e){if(Ie(e))throw Error("division by zero");if(Ie(t))return new Pt(ht,ht);if(se(t))return e=ai(z(t),e),new Pt(z(e.g),z(e.h));if(se(e))return e=ai(t,z(e)),new Pt(z(e.g),e.h);if(30<t.g.length){if(se(t)||se(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Or,i=e;0>=i.X(t);)n=_o(n),i=_o(i);var r=st(n,1),s=st(i,1);for(i=st(i,2),n=st(n,2);!Ie(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=st(i,1),n=st(n,1)}return e=oi(t,r.R(e)),new Pt(r,e)}for(r=ht;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=fe(n),o=s.R(e);se(o)||0<o.X(t);)n-=i,s=fe(n),o=s.R(e);Ie(s)&&(s=Or),r=r.add(s),t=oi(t,o)}return new Pt(r,t)}g.gb=function(t){return ai(this,t).h};g.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new k(n,this.h&t.h)};g.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new k(n,this.h|t.h)};g.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new k(n,this.h^t.h)};function _o(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new k(n,t.h)}function st(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new k(r,t.h)}si.prototype.createWebChannel=si.prototype.g;re.prototype.send=re.prototype.u;re.prototype.open=re.prototype.m;re.prototype.close=re.prototype.close;bi.NO_ERROR=0;bi.TIMEOUT=8;bi.HTTP_ERROR=6;sc.COMPLETE="complete";oc.EventType=gn;gn.OPEN="a";gn.CLOSE="b";gn.ERROR="c";gn.MESSAGE="d";V.prototype.listen=V.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;me.prototype.digest=me.prototype.l;me.prototype.reset=me.prototype.reset;me.prototype.update=me.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=fe;k.fromString=Bc;var yp=function(){return new si},vp=function(){return ki()},lr=bi,wp=sc,Ep=tt,To={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ip=vn,On=oc,_p=O,Tp=k;const Ao="@firebase/firestore";/**
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
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
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
 */let Rt="9.21.0";/**
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
 */const Je=new Br("@firebase/firestore");function So(){return Je.logLevel}function m(t,...e){if(Je.logLevel<=S.DEBUG){const n=e.map(Is);Je.debug(`Firestore (${Rt}): ${t}`,...n)}}function Ye(t,...e){if(Je.logLevel<=S.ERROR){const n=e.map(Is);Je.error(`Firestore (${Rt}): ${t}`,...n)}}function ci(t,...e){if(Je.logLevel<=S.WARN){const n=e.map(Is);Je.warn(`Firestore (${Rt}): ${t}`,...n)}}function Is(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function _(t="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function $(t,e){t||_()}function R(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ke{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ge{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Sp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cp{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($(typeof i.accessToken=="string"),new jc(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new G(e)}}class kp{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=G.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class bp{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new kp(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dp{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new Rp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Np(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Hc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Np(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function b(t,e){return t<e?-1:t>e?1:0}function yt(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class F{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new F(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?b(this.nanoseconds,e.nanoseconds):b(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new F(0,0))}static max(){return new N(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zt{constructor(e,n,i){n===void 0?n=0:n>e.length&&_(),i===void 0?i=e.length-n:i>e.length-n&&_(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class L extends Zt{construct(e,n,i){return new L(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new L(n)}static emptyPath(){return new L([])}}const Op=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Zt{construct(e,n,i){return new Q(e,n,i)}static isValidIdentifier(e){return Op.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(n)}static emptyPath(){return new Q([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(L.fromString(e))}static fromName(e){return new I(L.fromString(e).popFirst(5))}static empty(){return new I(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return L.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new L(e.slice()))}}function Pp(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=N.fromTimestamp(i===1e9?new F(n+1,0):new F(n,i));return new xe(r,I.empty(),e)}function Lp(t){return new xe(t.readTime,t.key,-1)}class xe{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new xe(N.min(),I.empty(),-1)}static max(){return new xe(N.max(),I.empty(),-1)}}function Mp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:b(t.largestBatchId,e.largestBatchId))}/**
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
 */const xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Up{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zc(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==xp)throw t;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new d((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):d.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):d.reject(n)}static resolve(e){return new d((n,i)=>{n(e)})}static reject(e){return new d((n,i)=>{i(e)})}static waitFor(e){return new d((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=d.resolve(!1);for(const i of e)n=n.next(r=>r?d.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new d((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new d((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}qc.ct=-1;function _s(t){return t==null}function li(t){return t===0&&1/t==-1/0}function Fp(t){return typeof t=="number"&&Number.isInteger(t)&&!li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Co(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function In(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ie{constructor(e,n){this.comparator=e,this.root=n||j.EMPTY}insert(e,n){return new ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,j.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pn(this.root,e,this.comparator,!0)}}class Pn{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class j{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??j.RED,this.left=r??j.EMPTY,this.right=s??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new j(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return j.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(t,e,n,i,r){return this}insert(t,e,n){return new j(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class te{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ko(this.data.getIterator())}getIteratorFrom(e){return new ko(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new te(this.comparator);return n.data=e,n}}class ko{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ue{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new ue([])}unionWith(e){let n=new te(Q.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new ue(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yt(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Vp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vp("Invalid base64 string: "+r):r}}(e);return new Ce(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return b(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const $p=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(t){if($(!!t),typeof t=="string"){let e=0;const n=$p.exec(t);if($(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function en(t){return typeof t=="string"?Ce.fromBase64String(t):Ce.fromUint8Array(t)}/**
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
 */function Ts(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gc(t){const e=t.mapValue.fields.__previous_value__;return Ts(e)?Gc(e):e}function ui(t){const e=Ze(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
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
 */class Bp{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ts(t)?4:jp(t)?9007199254740991:10:_()}function ye(t,e){if(t===e)return!0;const n=vt(t);if(n!==vt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ze(i.timestampValue),o=Ze(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return en(i.bytesValue).isEqual(en(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return H(i.geoPointValue.latitude)===H(r.geoPointValue.latitude)&&H(i.geoPointValue.longitude)===H(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return H(i.integerValue)===H(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=H(i.doubleValue),o=H(r.doubleValue);return s===o?li(s)===li(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return yt(t.arrayValue.values||[],e.arrayValue.values||[],ye);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Co(s)!==Co(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ye(s[a],o[a])))return!1;return!0}(t,e);default:return _()}}function tn(t,e){return(t.values||[]).find(n=>ye(n,e))!==void 0}function wt(t,e){if(t===e)return 0;const n=vt(t),i=vt(e);if(n!==i)return b(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=H(r.integerValue||r.doubleValue),a=H(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bo(t.timestampValue,e.timestampValue);case 4:return bo(ui(t),ui(e));case 5:return b(t.stringValue,e.stringValue);case 6:return function(r,s){const o=en(r),a=en(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=b(o[c],a[c]);if(l!==0)return l}return b(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=b(H(r.latitude),H(s.latitude));return o!==0?o:b(H(r.longitude),H(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=wt(o[c],a[c]);if(l)return l}return b(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Ln.mapValue&&s===Ln.mapValue)return 0;if(r===Ln.mapValue)return 1;if(s===Ln.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=b(a[u],l[u]);if(h!==0)return h;const p=wt(o[a[u]],c[l[u]]);if(p!==0)return p}return b(a.length,l.length)}(t.mapValue,e.mapValue);default:throw _()}}function bo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return b(t,e);const n=Ze(t),i=Ze(e),r=b(n.seconds,i.seconds);return r!==0?r:b(n.nanos,i.nanos)}function Et(t){return Pr(t)}function Pr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ze(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?en(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Pr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Pr(i.fields[a])}`;return s+"}"}(t.mapValue):_();var e,n}function Lr(t){return!!t&&"integerValue"in t}function As(t){return!!t&&"arrayValue"in t}function Bn(t){return!!t&&"mapValue"in t}function $t(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return In(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=$t(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$t(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jp(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class le{constructor(e){this.value=e}static empty(){return new le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Bn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$t(n)}setAll(e){let n=Q.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=$t(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Bn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ye(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Bn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){In(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new le($t(this.value))}}function Wc(t){const e=[];return In(t.fields,(n,i)=>{const r=new Q([n]);if(Bn(i)){const s=Wc(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new ue(e)}/**
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
 */class ce{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,N.min(),N.min(),N.min(),le.empty(),0)}static newFoundDocument(e,n,i,r){return new ce(e,1,n,N.min(),i,r,0)}static newNoDocument(e,n){return new ce(e,2,n,N.min(),N.min(),le.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,N.min(),N.min(),le.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,n){this.position=e,this.inclusive=n}}function Ro(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=wt(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Do(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ye(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hp(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qc{}class U extends Qc{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new qp(e,n,i):n==="array-contains"?new Wp(e,i):n==="in"?new Qp(e,i):n==="not-in"?new Xp(e,i):n==="array-contains-any"?new Jp(e,i):new U(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Kp(e,i):new Gp(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wt(n,this.value)):n!==null&&vt(this.value)===vt(n)&&this.matchesComparison(wt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ue extends Qc{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ue(e,n)}matches(e){return Xc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xc(t){return t.op==="and"}function Jc(t){return zp(t)&&Xc(t)}function zp(t){for(const e of t.filters)if(e instanceof Ue)return!1;return!0}function Mr(t){if(t instanceof U)return t.field.canonicalString()+t.op.toString()+Et(t.value);if(Jc(t))return t.filters.map(e=>Mr(e)).join(",");{const e=t.filters.map(n=>Mr(n)).join(",");return`${t.op}(${e})`}}function Yc(t,e){return t instanceof U?function(n,i){return i instanceof U&&n.op===i.op&&n.field.isEqual(i.field)&&ye(n.value,i.value)}(t,e):t instanceof Ue?function(n,i){return i instanceof Ue&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&Yc(s,i.filters[o]),!0):!1}(t,e):void _()}function Zc(t){return t instanceof U?function(e){return`${e.field.canonicalString()} ${e.op} ${Et(e.value)}`}(t):t instanceof Ue?function(e){return e.op.toString()+" {"+e.getFilters().map(Zc).join(" ,")+"}"}(t):"Filter"}class qp extends U{constructor(e,n,i){super(e,n,i),this.key=I.fromName(i.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kp extends U{constructor(e,n){super(e,"in",n),this.keys=el("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gp extends U{constructor(e,n){super(e,"not-in",n),this.keys=el("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function el(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class Wp extends U{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return As(n)&&tn(n.arrayValue,this.value)}}class Qp extends U{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tn(this.value.arrayValue,n)}}class Xp extends U{constructor(e,n){super(e,"not-in",n)}matches(e){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tn(this.value.arrayValue,n)}}class Jp extends U{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!As(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>tn(this.value.arrayValue,i))}}/**
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
 */class Yp{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function No(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Yp(t,e,n,i,r,s,o)}function Ss(t){const e=R(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Mr(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),_s(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Et(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Et(i)).join(",")),e.ft=n}return e.ft}function Cs(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Hp(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Do(t.startAt,e.startAt)&&Do(t.endAt,e.endAt)}/**
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
 */class Ui{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Zp(t,e,n,i,r,s,o,a){return new Ui(t,e,n,i,r,s,o,a)}function eg(t){return new Ui(t)}function Oo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ng(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ig(t){return t.collectionGroup!==null}function dt(t){const e=R(t);if(e.dt===null){e.dt=[];const n=ng(e),i=tg(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Bt(n)),e.dt.push(new Bt(Q.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Bt(Q.keyField(),s))}}}return e.dt}function It(t){const e=R(t);if(!e._t)if(e.limitType==="F")e._t=No(e.path,e.collectionGroup,dt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of dt(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Bt(s.field,o))}const i=e.endAt?new di(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new di(e.startAt.position,e.startAt.inclusive):null;e._t=No(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e._t}function xr(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tl(t,e){return Cs(It(t),It(e))&&t.limitType===e.limitType}function nl(t){return`${Ss(It(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Zc(i)).join(", ")}]`),_s(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Et(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Et(i)).join(",")),`Target(${n})`}(It(t))}; limitType=${t.limitType})`}function ks(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of dt(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Ro(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,dt(n),i)||n.endAt&&!function(r,s,o){const a=Ro(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,dt(n),i))}(t,e)}function rg(t){return(e,n)=>{let i=!1;for(const r of dt(t)){const s=sg(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function sg(t,e,n){const i=t.field.isKeyField()?I.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?wt(a,c):_()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return _()}}/**
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
 */class Dt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Kc(this.inner)}size(){return this.innerSize}}/**
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
 */const og=new ie(I.comparator);function fi(){return og}const il=new ie(I.comparator);function Mn(...t){let e=il;for(const n of t)e=e.insert(n.key,n);return e}function rl(t){let e=il;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function ze(){return jt()}function sl(){return jt()}function jt(){return new Dt(t=>t.toString(),(t,e)=>t.isEqual(e))}const ag=new ie(I.comparator),cg=new te(I.comparator);function W(...t){let e=cg;for(const n of t)e=e.add(n);return e}const lg=new te(b);function ug(){return lg}/**
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
 */function ol(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function al(t){return{integerValue:""+t}}function hg(t,e){return Fp(e)?al(e):ol(t,e)}/**
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
 */class Fi{constructor(){this._=void 0}}function dg(t,e,n){return t instanceof pi?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ts(r)&&(r=Gc(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof nn?ll(t,e):t instanceof rn?ul(t,e):function(i,r){const s=cl(i,r),o=Lo(s)+Lo(i.wt);return Lr(s)&&Lr(i.wt)?al(o):ol(i.serializer,o)}(t,e)}function fg(t,e,n){return t instanceof nn?ll(t,e):t instanceof rn?ul(t,e):n}function cl(t,e){return t instanceof gi?Lr(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class pi extends Fi{}class nn extends Fi{constructor(e){super(),this.elements=e}}function ll(t,e){const n=hl(e);for(const i of t.elements)n.some(r=>ye(r,i))||n.push(i);return{arrayValue:{values:n}}}class rn extends Fi{constructor(e){super(),this.elements=e}}function ul(t,e){let n=hl(e);for(const i of t.elements)n=n.filter(r=>!ye(r,i));return{arrayValue:{values:n}}}class gi extends Fi{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Lo(t){return H(t.integerValue||t.doubleValue)}function hl(t){return As(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pg(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof nn&&i instanceof nn||n instanceof rn&&i instanceof rn?yt(n.elements,i.elements,ye):n instanceof gi&&i instanceof gi?ye(n.wt,i.wt):n instanceof pi&&i instanceof pi}(t.transform,e.transform)}class gg{constructor(e,n){this.version=e,this.transformResults=n}}class _e{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vi{}function dl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pl(t.key,_e.none()):new _n(t.key,t.data,_e.none());{const n=t.data,i=le.empty();let r=new te(Q.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new nt(t.key,i,new ue(r.toArray()),_e.none())}}function mg(t,e,n){t instanceof _n?function(i,r,s){const o=i.value.clone(),a=xo(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nt?function(i,r,s){if(!jn(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=xo(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(fl(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ht(t,e,n,i){return t instanceof _n?function(r,s,o,a){if(!jn(r.precondition,s))return o;const c=r.value.clone(),l=Uo(r.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof nt?function(r,s,o,a){if(!jn(r.precondition,s))return o;const c=Uo(r.fieldTransforms,a,s),l=s.data;return l.setAll(fl(r)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return jn(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function yg(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=cl(i.transform,r||null);s!=null&&(n===null&&(n=le.empty()),n.set(i.field,s))}return n||null}function Mo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&yt(n,i,(r,s)=>pg(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _n extends Vi{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nt extends Vi{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function xo(t,e,n){const i=new Map;$(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,fg(o,a,n[r]))}return i}function Uo(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,dg(s,o,e))}return i}class pl extends Vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vg extends Vi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wg{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&mg(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Ht(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Ht(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=sl();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=dl(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&yt(this.mutations,e.mutations,(n,i)=>Mo(n,i))&&yt(this.baseMutations,e.baseMutations,(n,i)=>Mo(n,i))}}class bs{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){$(e.mutations.length===i.length);let r=ag;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new bs(e,n,i,r)}}/**
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
 */class Eg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var P,T;function Ig(t){switch(t){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function _g(t){if(t===void 0)return Ye("GRPC error has no .code"),f.UNKNOWN;switch(t){case P.OK:return f.OK;case P.CANCELLED:return f.CANCELLED;case P.UNKNOWN:return f.UNKNOWN;case P.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case P.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case P.INTERNAL:return f.INTERNAL;case P.UNAVAILABLE:return f.UNAVAILABLE;case P.UNAUTHENTICATED:return f.UNAUTHENTICATED;case P.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case P.NOT_FOUND:return f.NOT_FOUND;case P.ALREADY_EXISTS:return f.ALREADY_EXISTS;case P.PERMISSION_DENIED:return f.PERMISSION_DENIED;case P.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case P.ABORTED:return f.ABORTED;case P.OUT_OF_RANGE:return f.OUT_OF_RANGE;case P.UNIMPLEMENTED:return f.UNIMPLEMENTED;case P.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(T=P||(P={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Tp([4294967295,4294967295],0);class Tg{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ur(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ag(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sg(t,e){return Ur(t,e.toTimestamp())}function ft(t){return $(!!t),N.fromTimestamp(function(e){const n=Ze(e);return new F(n.seconds,n.nanos)}(t))}function gl(t,e){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cg(t){const e=L.fromString(t);return $(Lg(e)),e}function Fr(t,e){return gl(t.databaseId,e.path)}function kg(t){const e=Cg(t);return e.length===4?L.emptyPath():Rg(e)}function bg(t){return new L(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rg(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fo(t,e,n){return{name:Fr(t,e),fields:n.value.mapValue.fields}}function Dg(t,e){let n;if(e instanceof _n)n={update:Fo(t,e.key,e.value)};else if(e instanceof pl)n={delete:Fr(t,e.key)};else if(e instanceof nt)n={update:Fo(t,e.key,e.data),updateMask:Pg(e.fieldMask)};else{if(!(e instanceof vg))return _();n={verify:Fr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof pi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gi)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw _()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Sg(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_()}(t,e.precondition)),n}function Ng(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?ft(i.updateTime):ft(r);return s.isEqual(N.min())&&(s=ft(r)),new gg(s,i.transformResults||[])}(n,e))):[]}function Og(t){let e=kg(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){$(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=ml(u);return h instanceof Ue&&Jc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bt(ot(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,_s(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,p=u.values||[];return new di(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,p=u.values||[];return new di(p,h)}(n.endAt)),Zp(e,r,o,s,a,"F",c,l)}function ml(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ot(e.unaryFilter.field);return U.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ot(e.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ot(e.unaryFilter.field);return U.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ot(e.unaryFilter.field);return U.create(s,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(t):t.fieldFilter!==void 0?function(e){return U.create(ot(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ue.create(e.compositeFilter.filters.map(n=>ml(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(e.compositeFilter.op))}(t):_()}function ot(t){return Q.fromServerFormat(t.fieldPath)}function Pg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mg{constructor(e){this.le=e}}function xg(t){const e=Og({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xr(e,e.limit,"L"):e}/**
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
 */class Ug{constructor(){this.sn=new Fg}addToCollectionParentIndex(e,n){return this.sn.add(n),d.resolve()}getCollectionParents(e,n){return d.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return d.resolve()}deleteFieldIndex(e,n){return d.resolve()}getDocumentsMatchingTarget(e,n){return d.resolve(null)}getIndexType(e,n){return d.resolve(0)}getFieldIndexes(e,n){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}getMinOffset(e,n){return d.resolve(xe.min())}getMinOffsetFromCollectionGroup(e,n){return d.resolve(xe.min())}updateCollectionGroup(e,n,i){return d.resolve()}updateIndexEntries(e,n){return d.resolve()}}class Fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new te(L.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new te(L.comparator)).toArray()}}/**
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
 */class _t{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new _t(0)}static kn(){return new _t(-1)}}/**
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
 */class Vg{constructor(){this.changes=new Dt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?d.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $g{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bg{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Ht(i.mutation,r,ue.empty(),F.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,W()).next(()=>i))}getLocalViewOfDocuments(e,n,i=W()){const r=ze();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Mn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=ze();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,W()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=fi();const o=jt(),a=jt();return n.forEach((c,l)=>{const u=i.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof nt)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ht(u.mutation,l,u.mutation.getFieldMask(),F.now())):o.set(l.key,ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $g(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=jt();let r=new ie((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||ue.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(r.get(a.batchId)||W()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=sl();u.forEach(p=>{if(!s.has(p)){const w=dl(n.get(p),i.get(p));w!==null&&h.set(p,w),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return d.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ig(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):d.resolve(ze());let a=-1,c=s;return o.next(l=>d.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?d.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,W())).next(u=>({batchId:a,changes:rl(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(i=>{let r=Mn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Mn();return this.indexManager.getCollectionParents(e,r).next(o=>d.forEach(o,a=>{const c=function(l,u){return new Ui(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,ce.newInvalidDocument(l)))});let o=Mn();return s.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ht(l.mutation,c,ue.empty(),F.now()),ks(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class jg{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return d.resolve(this.us.get(n))}saveBundleMetadata(e,n){var i;return this.us.set(n.id,{id:(i=n).id,version:i.version,createTime:ft(i.createTime)}),d.resolve()}getNamedQuery(e,n){return d.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(i){return{name:i.name,query:xg(i.bundledQuery),readTime:ft(i.readTime)}}(n)),d.resolve()}}/**
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
 */class Hg{constructor(){this.overlays=new ie(I.comparator),this.hs=new Map}getOverlay(e,n){return d.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ze();return d.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.de(e,n,s)}),d.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.hs.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(i)),d.resolve()}getOverlaysForCollection(e,n,i){const r=ze(),s=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return d.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=ze(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ze(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return d.resolve(a)}de(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(i.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Eg(n,i));let s=this.hs.get(n);s===void 0&&(s=W(),this.hs.set(n,s)),this.hs.set(n,s.add(i.key))}}/**
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
 */class Rs{constructor(){this.ls=new te(x.fs),this.ds=new te(x._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const i=new x(e,n);this.ls=this.ls.add(i),this.ds=this.ds.add(i)}ws(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gs(new x(e,n))}ys(e,n){e.forEach(i=>this.removeReference(i,n))}ps(e){const n=new I(new L([])),i=new x(n,e),r=new x(n,e+1),s=[];return this.ds.forEachInRange([i,r],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new I(new L([])),i=new x(n,e),r=new x(n,e+1);let s=W();return this.ds.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new x(e,0),i=this.ls.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class x{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return I.comparator(e.key,n.key)||b(e.Es,n.Es)}static _s(e,n){return b(e.Es,n.Es)||I.comparator(e.key,n.key)}}/**
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
 */class zg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new te(x.fs)}checkEmpty(e){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wg(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new x(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,n){return d.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.Ps(i),s=r<0?0:r;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new x(n,0),r=new x(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([i,r],o=>{const a=this.vs(o.Es);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new te(b);return n.forEach(r=>{const s=new x(r,0),o=new x(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{i=i.add(a.Es)})}),d.resolve(this.bs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;I.isDocumentKey(s)||(s=s.child(""));const o=new x(new I(s),0);let a=new te(b);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),d.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(i=>{const r=this.vs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){$(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return d.forEach(n.mutations,r=>{const s=new x(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=i})}Dn(e){}containsKey(e,n){const i=new x(n,0),r=this.Rs.firstAfterOrEqual(i);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,d.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qg{constructor(e){this.Ss=e,this.docs=new ie(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return d.resolve(i?i.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let i=fi();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():ce.newInvalidDocument(r))}),d.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=fi();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Mp(Lp(u),i)<=0||(r.has(u.key)||ks(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(e,n,i,r){_()}Ds(e,n){return d.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Kg(this)}getSize(e){return d.resolve(this.size)}}class Kg extends Vg{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(i)}),d.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class Gg{constructor(e){this.persistence=e,this.Cs=new Dt(n=>Ss(n),Cs),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Rs,this.targetCount=0,this.ks=_t.Nn()}forEachTarget(e,n){return this.Cs.forEach((i,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.xs&&(this.xs=n),d.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new _t(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,d.resolve()}updateTargetData(e,n){return this.$n(n),d.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),d.waitFor(s).next(()=>r)}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cs.get(n)||null;return d.resolve(i)}addMatchingKeys(e,n,i){return this.Ns.ws(n,i),d.resolve()}removeMatchingKeys(e,n,i){this.Ns.ys(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),d.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ns.Ts(n);return d.resolve(i)}containsKey(e,n){return d.resolve(this.Ns.containsKey(n))}}/**
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
 */class Wg{constructor(e,n){this.Ms={},this.overlays={},this.Os=new qc(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new Gg(this),this.indexManager=new Ug,this.remoteDocumentCache=function(i){return new qg(i)}(i=>this.referenceDelegate.Bs(i)),this.serializer=new Mg(n),this.Ls=new jg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ms[e.toKey()];return i||(i=new zg(n,this.referenceDelegate),this.Ms[e.toKey()]=i),i}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,i){m("MemoryPersistence","Starting transaction:",e);const r=new Qg(this.Os.next());return this.referenceDelegate.qs(),i(r).next(s=>this.referenceDelegate.Us(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ks(e,n){return d.or(Object.values(this.Ms).map(i=>()=>i.containsKey(e,n)))}}class Qg extends Up{constructor(e){super(),this.currentSequenceNumber=e}}class Ds{constructor(e){this.persistence=e,this.Gs=new Rs,this.Qs=null}static js(e){return new Ds(e)}get zs(){if(this.Qs)return this.Qs;throw _()}addReference(e,n,i){return this.Gs.addReference(i,n),this.zs.delete(i.toString()),d.resolve()}removeReference(e,n,i){return this.Gs.removeReference(i,n),this.zs.add(i.toString()),d.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),d.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.zs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.zs,i=>{const r=I.fromPath(i);return this.Ws(e,r).next(s=>{s||n.removeEntry(r,N.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(i=>{i?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return d.or([()=>d.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Ns{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.$i=i,this.Fi=r}static Bi(e,n){let i=W(),r=W();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ns(e,n.fromCache,i,r)}}/**
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
 */class Xg{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ui(e,n).next(s=>s||this.Ki(e,n,r,i)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Oo(n))return d.resolve(null);let i=It(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xr(n,null,"F"),i=It(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=W(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,xr(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,i,r){return Oo(n)||r.isEqual(N.min())?this.Gi(e,n):this.qi.getDocuments(e,i).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,i,r)?this.Gi(e,n):(So()<=S.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Po(n)),this.zi(e,o,n,Pp(r,-1)))})}Qi(e,n){let i=new te(rg(e));return n.forEach((r,s)=>{ks(e,s)&&(i=i.add(s))}),i}ji(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Gi(e,n){return So()<=S.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Po(n)),this.qi.getDocumentsMatchingQuery(e,n,xe.min())}zi(e,n,i,r){return this.qi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Jg{constructor(e,n,i,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new ie(b),this.Ji=new Dt(s=>Ss(s),Cs),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(i)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bg(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function Yg(t,e,n,i){return new Jg(t,e,n,i)}async function yl(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=W();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zg(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let p=d.resolve();return h.forEach(w=>{p=p.next(()=>l.getEntry(a,w)).next(C=>{const A=c.docVersions.get(w);$(A!==null),C.version.compareTo(A)<0&&(u.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),l.addEntry(C)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=W();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function em(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function tm(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class Vo{constructor(){this.activeTargetIds=ug()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nm{constructor(){this.Wr=new Vo,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,i){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Vo,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class im{Jr(e){}shutdown(){}}/**
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
 */class $o{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let xn=null;function ur(){return xn===null?xn=268435456+Math.round(2147483648*Math.random()):xn++,"0x"+xn.toString(16)}/**
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
 */const rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sm{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const K="WebChannelConnection";class om extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,i,r,s){const o=ur(),a=this.Io(e,n);m("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.To(c,r,s),this.Eo(e,a,c,i).then(l=>(m("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ci("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}Ao(e,n,i,r,s,o){return this.po(e,n,i,r,s)}To(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}Io(e,n){const i=rm[e];return`${this.wo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,i,r){const s=ur();return new Promise((o,a)=>{const c=new _p;c.setWithCredentials(!0),c.listenOnce(wp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case lr.NO_ERROR:const u=c.getResponseJson();m(K,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case lr.TIMEOUT:m(K,`RPC '${e}' ${s} timed out`),a(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const h=c.getStatus();if(m(K,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const w=p==null?void 0:p.error;if(w&&w.status&&w.message){const C=function(A){const M=A.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(M)>=0?M:f.UNKNOWN}(w.status);a(new E(C,w.message))}else a(new E(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{m(K,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);m(K,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",l,i,15)})}Ro(e,n,i){const r=ur(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yp(),a=vp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Ip({})),this.To(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const l=s.join("");m(K,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,p=!1;const w=new sm({io:A=>{p?m(K,`Not sending because RPC '${e}' stream ${r} is closed:`,A):(h||(m(K,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),m(K,`RPC '${e}' stream ${r} sending:`,A),u.send(A))},ro:()=>u.close()}),C=(A,M,Z)=>{A.listen(M,oe=>{try{Z(oe)}catch(ae){setTimeout(()=>{throw ae},0)}})};return C(u,On.EventType.OPEN,()=>{p||m(K,`RPC '${e}' stream ${r} transport opened.`)}),C(u,On.EventType.CLOSE,()=>{p||(p=!0,m(K,`RPC '${e}' stream ${r} transport closed`),w.fo())}),C(u,On.EventType.ERROR,A=>{p||(p=!0,ci(K,`RPC '${e}' stream ${r} transport errored:`,A),w.fo(new E(f.UNAVAILABLE,"The operation could not be completed")))}),C(u,On.EventType.MESSAGE,A=>{var M;if(!p){const Z=A.data[0];$(!!Z);const oe=Z,ae=oe.error||((M=oe[0])===null||M===void 0?void 0:M.error);if(ae){m(K,`RPC '${e}' stream ${r} received error:`,ae);const Nt=ae.status;let it=function(Sn){const Cn=P[Sn];if(Cn!==void 0)return _g(Cn)}(Nt),rt=ae.message;it===void 0&&(it=f.INTERNAL,rt="Unknown error status: "+Nt+" with message "+ae.message),p=!0,w.fo(new E(it,rt)),u.close()}else m(K,`RPC '${e}' stream ${r} received:`,Z),w._o(Z)}}),C(a,Ep.STAT_EVENT,A=>{A.stat===To.PROXY?m(K,`RPC '${e}' stream ${r} detected buffering proxy`):A.stat===To.NOPROXY&&m(K,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.lo()},0),w}}function hr(){return typeof document<"u"?document:null}/**
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
 */function $i(t){return new Tg(t,!0)}/**
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
 */class vl{constructor(e,n,i=1e3,r=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=i,this.Po=r,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),i=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-i);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class am{constructor(e,n,i,r,s,o,a,c){this.si=e,this.Mo=i,this.Oo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new vl(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.$o===n&&this.Xo(i,r)},i=>{e(()=>{const r=new E(f.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Zo(r)})})}Xo(e,n){const i=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{i(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{i(()=>this.Zo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cm extends am{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=Ng(e.writeResults,e.commitTime),i=ft(e.commitTime);return this.listener.uu(i,n)}return $(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=bg(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Dg(this.serializer,i))};this.zo(n)}}/**
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
 */class lm extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.po(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(f.UNKNOWN,r.toString())})}Ao(e,n,i,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(f.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class um{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ye(n),this.wu=!1):m("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hm{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{i.enqueueAndForget(async()=>{An(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.Au.add(4),await Tn(c),c.Pu.set("Unknown"),c.Au.delete(4),await Bi(c)}(this))})}),this.Pu=new um(i,r)}}async function Bi(t){if(An(t))for(const e of t.Ru)await e(!0)}async function Tn(t){for(const e of t.Ru)await e(!1)}function An(t){return R(t).Au.size===0}async function wl(t,e,n){if(!xi(e))throw e;t.Au.add(1),await Tn(t),t.Pu.set("Offline"),n||(n=()=>em(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Bi(t)})}function El(t,e){return e().catch(n=>wl(t,n,e))}async function ji(t){const e=R(t),n=Fe(e);let i=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;dm(e);)try{const r=await tm(e.localStore,i);if(r===null){e.Tu.length===0&&n.Qo();break}i=r.batchId,fm(e,r)}catch(r){await wl(e,r)}Il(e)&&_l(e)}function dm(t){return An(t)&&t.Tu.length<10}function fm(t,e){t.Tu.push(e);const n=Fe(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Il(t){return An(t)&&!Fe(t).qo()&&t.Tu.length>0}function _l(t){Fe(t).start()}async function pm(t){Fe(t).au()}async function gm(t){const e=Fe(t);for(const n of t.Tu)e.ou(n.mutations)}async function mm(t,e,n){const i=t.Tu.shift(),r=bs.from(i,e,n);await El(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ji(t)}async function ym(t,e){e&&Fe(t).ru&&await async function(n,i){if(r=i.code,Ig(r)&&r!==f.ABORTED){const s=n.Tu.shift();Fe(n).Go(),await El(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ji(n)}var r}(t,e),Il(t)&&_l(t)}async function Bo(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const i=An(n);n.Au.add(3),await Tn(n),i&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Bi(n)}async function vm(t,e){const n=R(t);e?(n.Au.delete(2),await Bi(n)):e||(n.Au.add(2),await Tn(n),n.Pu.set("Unknown"))}function Fe(t){return t.Su||(t.Su=function(e,n,i){const r=R(e);return r.lu(),new cm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{oo:pm.bind(null,t),co:ym.bind(null,t),cu:gm.bind(null,t),uu:mm.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await ji(t)):(await t.Su.stop(),t.Tu.length>0&&(m("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Os{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Os(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tl(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),xi(t))return new E(f.UNAVAILABLE,`${e}: ${t}`);throw t}class wm{constructor(){this.queries=new Dt(e=>nl(e),tl),this.onlineState="Unknown",this.Nu=new Set}}function Em(t){t.Nu.forEach(e=>{e.next()})}class Im{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Dt(a=>nl(a),tl),this._c=new Map,this.wc=new Set,this.mc=new ie(I.comparator),this.gc=new Map,this.yc=new Rs,this.Ic={},this.Tc=new Map,this.Ec=_t.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function _m(t,e,n){const i=Cm(t);try{const r=await function(s,o){const a=R(s),c=F.now(),l=o.reduce((p,w)=>p.add(w.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let w=fi(),C=W();return a.Xi.getEntries(p,l).next(A=>{w=A,w.forEach((M,Z)=>{Z.isValidDocument()||(C=C.add(M))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,w)).next(A=>{u=A;const M=[];for(const Z of o){const oe=yg(Z,u.get(Z.key).overlayedDocument);oe!=null&&M.push(new nt(Z.key,oe,Wc(oe.value.mapValue),_e.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,M,o)}).next(A=>{h=A;const M=A.applyToLocalDocumentSet(u,C);return a.documentOverlayCache.saveOverlays(p,A.batchId,M)})}).then(()=>({batchId:h.batchId,changes:rl(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.Ic[s.currentUser.toKey()];c||(c=new ie(b)),c=c.insert(o,a),s.Ic[s.currentUser.toKey()]=c}(i,r.batchId,n),await Hi(i,r.changes),await ji(i.remoteStore)}catch(r){const s=Tl(r,"Failed to persist write");n.reject(s)}}function jo(t,e,n){const i=R(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Em(a)}(i.eventManager,e),r.length&&i.fc.eu(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Tm(t,e){const n=R(t),i=e.batch.batchId;try{const r=await Zg(n.localStore,e);Sl(n,i,null),Al(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Hi(n,r)}catch(r){await zc(r)}}async function Am(t,e,n){const i=R(t);try{const r=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>($(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);Sl(i,e,n),Al(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Hi(i,r)}catch(r){await zc(r)}}function Al(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Sl(t,e,n){const i=R(t);let r=i.Ic[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.Ic[i.currentUser.toKey()]=r}}async function Hi(t,e,n){const i=R(t),r=[],s=[],o=[];i.dc.isEmpty()||(i.dc.forEach((a,c)=>{o.push(i.Rc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ns.Bi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.fc.eu(r),await async function(a,c){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(c,h=>d.forEach(h.$i,p=>l.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>d.forEach(h.Fi,p=>l.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!xi(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const p=l.Hi.get(h),w=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(w);l.Hi=l.Hi.insert(h,C)}}}(i.localStore,s))}async function Sm(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const i=await yl(n.localStore,e);n.currentUser=e,function(r,s){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new E(f.CANCELLED,s))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Hi(n,i.tr)}}function Cm(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Am.bind(null,e),e}class Ho{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$i(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Yg(this.persistence,new Xg,e.initialUser,this.serializer)}createPersistence(e){return new Wg(Ds.js,this.serializer)}createSharedClientState(e){return new nm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class km{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>jo(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sm.bind(null,this.syncEngine),await vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wm}createDatastore(e){const n=$i(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new om(r));var r;return function(s,o,a,c){return new lm(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>jo(this.syncEngine,a,0),o=$o.D()?new $o:new im,new hm(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,l){const u=new Im(i,r,s,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);m("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Tn(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class bm{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=G.UNAUTHENTICATED,this.clientId=Hc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{m("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(m("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Tl(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function dr(t,e){t.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await yl(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dm(t);m("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Bo(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bo(e.remoteStore,s)),t._onlineComponents=e}function Rm(t){return t.name==="FirebaseError"?t.code===f.FAILED_PRECONDITION||t.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Dm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await dr(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Rm(n))throw n;ci("Error using user provided cache. Falling back to memory cache: "+n),await dr(t,new Ho)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await dr(t,new Ho);return t._offlineComponents}async function Nm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await zo(t,t._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await zo(t,new km))),t._onlineComponents}function Om(t){return Nm(t).then(e=>e.syncEngine)}/**
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
 */const qo=new Map;/**
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
 */function Pm(t,e,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lm(t,e,n,i){if(e===!0&&i===!0)throw new E(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ko(t){if(!I.isDocumentKey(t))throw new E(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ps(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_()}function Vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ps(t);throw new E(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Go{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ls{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ap;switch(n.type){case"firstParty":return new bp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qo.get(e);n&&(m("ComponentProvider","Removing Datastore"),qo.delete(e),n.terminate())}(this),Promise.resolve()}}function Mm(t,e,n,i={}){var r;const s=(t=Vr(t,Ls))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ci("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=G.MOCK_USER;else{o=Wl(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new E(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new G(c)}t._authCredentials=new Sp(new jc(o,a))}}/**
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
 */class Te{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class Ms{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class sn extends Ms{constructor(e,n,i){super(e,n,eg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new I(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function ny(t,e,...n){if(t=ne(t),arguments.length===1&&(e=Hc.A()),Pm("doc","path",e),t instanceof Ls){const i=L.fromString(e,...n);return Ko(i),new Te(t,null,new I(i))}{if(!(t instanceof Te||t instanceof sn))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(L.fromString(e,...n));return Ko(i),new Te(t.firestore,t instanceof sn?t.converter:null,new I(i))}}/**
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
 */class xm{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new vl(this,"async_queue_retry"),this.Yc=()=>{const n=hr();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=hr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=hr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Ge;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!xi(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(i=>{this.zc=i,this.Wc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ye("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Wc=!1,i))));return this.Kc=n,n}enqueueAfterDelay(e,n,i){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Os.createAndSchedule(this,e,n,i,s=>this.ea(s));return this.jc.push(r),r}Xc(){this.zc&&_()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Cl extends Ls{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new xm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kl(this),this._firestoreClient.terminate()}}function Um(t,e){const n=typeof t=="object"?t:na(),i=typeof t=="string"?t:e||"(default)",r=Hr(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=ql("firestore");s&&Mm(r,...s)}return r}function Fm(t){return t._firestoreClient||kl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kl(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,l){return new Bp(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new bm(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(Ce.fromBase64String(e))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new on(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rl{constructor(e){this._methodName=e}}/**
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
 */class Dl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return b(this._lat,e._lat)||b(this._long,e._long)}}/**
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
 */const Vm=/^__.*__$/;class $m{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new nt(e,this.data,this.fieldMask,n,this.fieldTransforms):new _n(e,this.data,n,this.fieldTransforms)}}function Nl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class xs{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new xs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:i,ha:!1});return r.la(e),r}fa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:i,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return mi(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Nl(this.ua)&&Vm.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Bm{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||$i(e)}ga(e,n,i,r=!1){return new xs({ua:e,methodName:n,ma:i,path:Q.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jm(t){const e=t._freezeSettings(),n=$i(t._databaseId);return new Bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hm(t,e,n,i,r,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,r);Ml("Data must be an object, but it was:",o,i);const a=Pl(i,o);let c,l;if(s.merge)c=new ue(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=zm(e,h,n);if(!o.contains(p))throw new E(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Gm(u,p)||u.push(p)}c=new ue(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new $m(new le(a),c,l)}function Ol(t,e){if(Ll(t=ne(t)))return Ml("Unsupported field value:",e,t),Pl(t,e);if(t instanceof Rl)return function(n,i){if(!Nl(i.ua))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Ol(o,i.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hg(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=F.fromDate(n);return{timestampValue:Ur(i.serializer,r)}}if(n instanceof F){const r=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(i.serializer,r)}}if(n instanceof Dl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof on)return{bytesValue:Ag(i.serializer,n._byteString)};if(n instanceof Te){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:gl(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${Ps(n)}`)}(t,e)}function Pl(t,e){const n={};return Kc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(t,(i,r)=>{const s=Ol(r,e.aa(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Ll(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Dl||t instanceof on||t instanceof Te||t instanceof Rl)}function Ml(t,e,n){if(!Ll(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Ps(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function zm(t,e,n){if((e=ne(e))instanceof bl)return e._internalPath;if(typeof e=="string")return Km(t,e);throw mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const qm=new RegExp("[~\\*/\\[\\]]");function Km(t,e,n){if(e.search(qm)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mi(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new E(f.INVALID_ARGUMENT,a+t+c)}function Gm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Wm(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function iy(t,e,n){t=Vr(t,Te);const i=Vr(t.firestore,Cl),r=Wm(t.converter,e,n);return Qm(i,[Hm(jm(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,_e.none())])}function Qm(t,e){return function(n,i){const r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>_m(await Om(n),i,r)),r.promise}(Fm(t),e)}(function(t,e=!0){(function(n){Rt=n})(Tt),pt(new We("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Cl(new Cp(n.getProvider("auth-internal")),new Dp(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Me(Ao,"3.11.0",t),Me(Ao,"3.11.0","esm2017")})();const Xm={apiKey:"AIzaSyCyHr3B3mRWHS9NQ-ezaXA6JFsT8Jw31ng",authDomain:"quick-test-6788e.firebaseapp.com",projectId:"quick-test-6788e",storageBucket:"quick-test-6788e.appspot.com",messagingSenderId:"175116675341",appId:"1:175116675341:web:702181b854ca82ca0de844",measurementId:"G-1JL4J7D26D"},xl=ta(Xm),ry=Um(xl),sy=yf(xl);export{sy as a,Zm as b,Ym as c,ry as d,Na as e,Jm as f,ny as m,ey as o,ty as s,iy as w};
