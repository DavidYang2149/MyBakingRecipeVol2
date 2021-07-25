(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2:function(t,r,e){"use strict";(function(t){e.d(r,"a",(function(){return h})),e.d(r,"b",(function(){return g})),e.d(r,"c",(function(){return S})),e.d(r,"d",(function(){return C})),e.d(r,"e",(function(){return c})),e.d(r,"f",(function(){return O})),e.d(r,"g",(function(){return s})),e.d(r,"h",(function(){return a})),e.d(r,"i",(function(){return w})),e.d(r,"j",(function(){return u})),e.d(r,"k",(function(){return d})),e.d(r,"l",(function(){return b})),e.d(r,"m",(function(){return _})),e.d(r,"n",(function(){return v})),e.d(r,"o",(function(){return f})),e.d(r,"p",(function(){return p})),e.d(r,"q",(function(){return l})),e.d(r,"r",(function(){return y}));var i=e(0),n=function(t){for(var r=[],e=0,i=0;i<t.length;i++){var n=t.charCodeAt(i);n<128?r[e++]=n:n<2048?(r[e++]=n>>6|192,r[e++]=63&n|128):55296==(64512&n)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&t.charCodeAt(++i)),r[e++]=n>>18|240,r[e++]=n>>12&63|128,r[e++]=n>>6&63|128,r[e++]=63&n|128):(r[e++]=n>>12|224,r[e++]=n>>6&63|128,r[e++]=63&n|128)}return r},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,r){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var e=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],n=0;n<t.length;n+=3){var o=t[n],s=n+1<t.length,a=s?t[n+1]:0,h=n+2<t.length,c=h?t[n+2]:0,u=o>>2,f=(3&o)<<4|a>>4,p=(15&a)<<2|c>>6,d=63&c;h||(d=64,s||(p=64)),i.push(e[u],e[f],e[p],e[d])}return i.join("")},encodeString:function(t,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(t):this.encodeByteArray(n(t),r)},decodeString:function(t,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(t):function(t){for(var r=[],e=0,i=0;e<t.length;){var n=t[e++];if(n<128)r[i++]=String.fromCharCode(n);else if(n>191&&n<224){var o=t[e++];r[i++]=String.fromCharCode((31&n)<<6|63&o)}else if(n>239&&n<365){var s=((7&n)<<18|(63&(o=t[e++]))<<12|(63&(a=t[e++]))<<6|63&t[e++])-65536;r[i++]=String.fromCharCode(55296+(s>>10)),r[i++]=String.fromCharCode(56320+(1023&s))}else{o=t[e++];var a=t[e++];r[i++]=String.fromCharCode((15&n)<<12|(63&o)<<6|63&a)}}return r.join("")}(this.decodeStringToByteArray(t,r))},decodeStringToByteArray:function(t,r){this.init_();for(var e=r?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],n=0;n<t.length;){var o=e[t.charAt(n++)],s=n<t.length?e[t.charAt(n)]:0,a=++n<t.length?e[t.charAt(n)]:64,h=++n<t.length?e[t.charAt(n)]:64;if(++n,null==o||null==s||null==a||null==h)throw Error();var c=o<<2|s>>4;if(i.push(c),64!==a){var u=s<<4&240|a>>2;if(i.push(u),64!==h){var f=a<<6&192|h;i.push(f)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
function s(t){return a(void 0,t)}function a(t,r){if(!(r instanceof Object))return r;switch(r.constructor){case Date:return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return r}for(var e in r)r.hasOwnProperty(e)&&"__proto__"!==e&&(t[e]=a(t[e],r[e]));return t}
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
var h=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(r,e){t.resolve=r,t.reject=e}))}return t.prototype.wrapCallback=function(t){var r=this;return function(e,i){e?r.reject(e):r.resolve(i),"function"==typeof t&&(r.promise.catch((function(){})),1===t.length?t(e):t(e,i))}},t}();
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
 */function c(t,r){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var e=r||"demo-project",n=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(i.a)({iss:"https://securetoken.google.com/"+e,aud:e,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o.encodeString(JSON.stringify({alg:"none",type:"JWT"}),!1),o.encodeString(JSON.stringify(a),!1),""].join(".")}
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
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function f(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}function d(){return"object"==typeof self&&self.self===self}function b(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function l(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){return u().indexOf("Electron/")>=0}function v(){var t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return u().indexOf("MSAppHost/")>=0}
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
var S=function(t){function r(e,i,n){var o=t.call(this,i)||this;return o.code=e,o.customData=n,o.name="FirebaseError",Object.setPrototypeOf(o,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,g.prototype.create),o}return Object(i.c)(r,t),r}(Error),g=function(){function t(t,r,e){this.service=t,this.serviceName=r,this.errors=e}return t.prototype.create=function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];var i=r[0]||{},n=this.service+"/"+t,o=this.errors[t],s=o?E(o,i):"Error",a=this.serviceName+": "+s+" ("+n+").",h=new S(n,a,i);return h},t}();function E(t,r){return t.replace(A,(function(t,e){var i=r[e];return null!=i?String(i):"<"+e+"?>"}))}var A=/\{\$([^}]+)}/g;
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
function C(t,r){return Object.prototype.hasOwnProperty.call(t,r)}
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
!function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,r){r||(r=0);var e=this.W_;if("string"==typeof t)for(var i=0;i<16;i++)e[i]=t.charCodeAt(r)<<24|t.charCodeAt(r+1)<<16|t.charCodeAt(r+2)<<8|t.charCodeAt(r+3),r+=4;else for(i=0;i<16;i++)e[i]=t[r]<<24|t[r+1]<<16|t[r+2]<<8|t[r+3],r+=4;for(i=16;i<80;i++){var n=e[i-3]^e[i-8]^e[i-14]^e[i-16];e[i]=4294967295&(n<<1|n>>>31)}var o,s,a=this.chain_[0],h=this.chain_[1],c=this.chain_[2],u=this.chain_[3],f=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(o=u^h&(c^u),s=1518500249):(o=h^c^u,s=1859775393):i<60?(o=h&c|u&(h|c),s=2400959708):(o=h^c^u,s=3395469782);n=(a<<5|a>>>27)+o+f+s+e[i]&4294967295;f=u,u=c,c=4294967295&(h<<30|h>>>2),h=a,a=n}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},t.prototype.update=function(t,r){if(null!=t){void 0===r&&(r=t.length);for(var e=r-this.blockSize,i=0,n=this.buf_,o=this.inbuf_;i<r;){if(0===o)for(;i<=e;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<r;)if(n[o]=t.charCodeAt(i),++i,++o===this.blockSize){this.compress_(n),o=0;break}}else for(;i<r;)if(n[o]=t[i],++i,++o===this.blockSize){this.compress_(n),o=0;break}}this.inbuf_=o,this.total_+=r}},t.prototype.digest=function(){var t=[],r=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&r,r/=256;this.compress_(this.buf_);var i=0;for(e=0;e<5;e++)for(var n=24;n>=0;n-=8)t[i]=this.chain_[e]>>n&255,++i;return t}}();function O(t,r){var e=new m(t,r);return e.subscribe.bind(e)}var m=function(){function t(t,r){var e=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(e)})).catch((function(t){e.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(r){r.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(r){r.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,r,e){var i,n=this;if(void 0===t&&void 0===r&&void 0===e)throw new Error("Missing Observer.");void 0===(i=function(t,r){if("object"!=typeof t||null===t)return!1;for(var e=0,i=r;e<i.length;e++){var n=i[e];if(n in t&&"function"==typeof t[n])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:r,complete:e}).next&&(i.next=T),void 0===i.error&&(i.error=T),void 0===i.complete&&(i.complete=T);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{n.finalError?i.error(n.finalError):i.complete()}catch(t){}})),this.observers.push(i),o},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,t)},t.prototype.sendOne=function(t,r){var e=this;this.task.then((function(){if(void 0!==e.observers&&void 0!==e.observers[t])try{r(e.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var r=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){r.observers=void 0,r.onNoObservers=void 0})))},t}();function T(){}
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
function w(t){return t&&t._delegate?t._delegate:t}}).call(this,e(24))}}]);