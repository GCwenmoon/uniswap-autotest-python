LavaPack.loadBundle([[910,{"@firebase/app":908,"@firebase/component":909,"@firebase/util":914,idb:5634},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteInstallations=
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
async function(e){const{appConfig:t}=e,n=await F(t,e=>e&&0===e.registrationStatus?undefined:e);if(n){if(1===n.registrationStatus)throw g.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw g.create("app-offline");
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
await async function(e,t){const n=function(e,{fid:t}){return`${b(e)}/${t}`}(e,t),r=S(e,t),i={method:"DELETE",headers:r},o=await _(()=>fetch(n,i));if(!o.ok)throw await y("Delete Installation",o)}(t,n),await U(t)}}}
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
 */,n.getId=Y,n.getInstallations=
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
function(e=(0,r.getApp)()){return(0,r._getProvider)(e,"installations").getImmediate()}
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
 */,n.getToken=Q,n.onIdChange=function(e,t){const{appConfig:n}=e;return function(e,t){N();const n=C(e);let r=O.get(n);r||(r=new Set,O.set(n,r));r.add(t)}(n,t),()=>{!function(e,t){const n=C(e),r=O.get(n);if(!r)return;r.delete(t),0===r.size&&O.delete(n);j()}(n,t)}};var r=e("@firebase/app"),i=e("@firebase/component"),o=e("@firebase/util"),a=e("idb");const s="@firebase/installations",c="0.6.12",l=1e4,u=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,h={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},g=new o.ErrorFactory("installations","Installations",h);function m(e){return e instanceof o.FirebaseError&&e.code.includes("request-failed")}
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
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function v(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function y(e,t){const n=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function w({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S(e,{refreshToken:t}){const n=w(e);return n.append("Authorization",function(e){return`${d} ${e}`}
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
 */(t)),n}async function _(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function E(e){return new Promise(t=>{setTimeout(t,e)})}
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
const k=/^[cdef][\w-]{21}$/,T="";function M(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return k.test(t)?t:T}catch(e){return T}}function C(e){return`${e.appName}!${e.appId}`}
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
 */const O=new Map;function I(e,t){const n=C(e);A(n,t),function(e,t){const n=N();n&&n.postMessage({key:e,fid:t});j()}(n,t)}function A(e,t){const n=O.get(e);if(n)for(const e of n)e(t)}let P=null;function N(){return!P&&"BroadcastChannel"in self&&(P=new BroadcastChannel("[Firebase] FID Change"),P.onmessage=e=>{A(e.data.key,e.data.fid)}),P}function j(){0===O.size&&P&&(P.close(),P=null)}
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
 */const L="firebase-installations-database",R=1,D="firebase-installations-store";let x=null;function B(){return x||(x=(0,a.openDB)(L,R,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(D)}})),x}async function $(e,t){const n=C(e),r=(await B()).transaction(D,"readwrite"),i=r.objectStore(D),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||I(e,t.fid),t}async function U(e){const t=C(e),n=(await B()).transaction(D,"readwrite");await n.objectStore(D).delete(t),await n.done}async function F(e,t){const n=C(e),r=(await B()).transaction(D,"readwrite"),i=r.objectStore(D),o=await i.get(n),a=t(o);return a===undefined?await i.delete(n):await i.put(a,n),await r.done,!a||o&&o.fid===a.fid||I(e,a.fid),a}
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
 */async function K(e){let t;const n=await F(e.appConfig,n=>{const r=function(e){const t=e||{fid:M(),registrationStatus:0};return W(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=w(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:n,authVersion:d,appId:e.appId,sdkVersion:u},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await _(()=>fetch(r,s));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:v(e.authToken)}}throw await y("Create Installation",c)}(e,t);return $(e.appConfig,n)}catch(n){throw m(n)&&409===n.customData.serverCode?await U(e.appConfig):await $(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===T?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function V(e){let t=await H(e.appConfig);for(;1===t.registrationStatus;)await E(100),t=await H(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await K(e);return n||t}return t}function H(e){return F(e,e=>{if(!e)throw g.create("installation-not-found");return W(e)})}function W(e){return 1===(t=e).registrationStatus&&t.registrationTime+l<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function q({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=S(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:u,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await _(()=>fetch(r,s));if(c.ok){return v(await c.json())}throw await y("Generate Auth Token",c)}async function G(e,t=!1){let n;const r=await F(e.appConfig,r=>{if(!J(r))throw g.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await z(e.appConfig);for(;1===n.authToken.requestStatus;)await E(100),n=await z(e.appConfig);const r=n.authToken;return 0===r.requestStatus?G(e,t):r}(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await q(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await $(e.appConfig,r),n}catch(n){if(!m(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await $(e.appConfig,n)}else await U(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function z(e){return F(e,e=>{if(!J(e))throw g.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+l<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */})}function J(e){return e!==undefined&&2===e.registrationStatus}async function Y(e){const t=e,{installationEntry:n,registrationPromise:r}=await K(t);return r?r.catch(console.error):G(t).catch(console.error),n.fid}
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
 */async function Q(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await K(e);t&&await t}(n);return(await G(n,t)).token}function X(e){return g.create("missing-app-config-values",{valueName:e})}
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
 */const Z="installations",ee=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw X("App Configuration");if(!e.name)throw X("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw X(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,r._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r._getProvider)(t,Z).getImmediate();return{getId:()=>Y(n),getToken:e=>Q(n,e)}};(0,r._registerComponent)(new i.Component(Z,ee,"PUBLIC")),(0,r._registerComponent)(new i.Component("installations-internal",te,"PRIVATE")),(0,r.registerVersion)(s,c),(0,r.registerVersion)(s,c,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/installations",file:"node_modules/@firebase/installations/dist/esm/index.esm2017.js"}],[911,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});
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
const r=[];var i;n.LogLevel=void 0,(i=n.LogLevel||(n.LogLevel={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const o={debug:n.LogLevel.DEBUG,verbose:n.LogLevel.VERBOSE,info:n.LogLevel.INFO,warn:n.LogLevel.WARN,error:n.LogLevel.ERROR,silent:n.LogLevel.SILENT},a=n.LogLevel.INFO,s={[n.LogLevel.DEBUG]:"log",[n.LogLevel.VERBOSE]:"log",[n.LogLevel.INFO]:"info",[n.LogLevel.WARN]:"warn",[n.LogLevel.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};n.Logger=class{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n.LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.DEBUG,...e),this._logHandler(this,n.LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.VERBOSE,...e),this._logHandler(this,n.LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.INFO,...e),this._logHandler(this,n.LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.WARN,...e),this._logHandler(this,n.LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.ERROR,...e),this._logHandler(this,n.LogLevel.ERROR,...e)}},n.setLogLevel=function(e){r.forEach(t=>{t.setLogLevel(e)})},n.setUserLogHandler=function(e,t){for(const i of r){let r=null;t&&t.level&&(r=o[t.level]),i.userLogHandler=null===e?null:(t,i,...o)=>{const a=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");i>=(null!=r?r:t.logLevel)&&e({level:n.LogLevel[i].toLowerCase(),message:a,args:o,type:t.name})}}}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app>@firebase/logger",file:"node_modules/@firebase/logger/dist/index.cjs.js"}],[912,{"@firebase/app":908,"@firebase/component":909,"@firebase/installations":910,"@firebase/util":914,idb:5634},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteToken=function(e){
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
return async function(e){if(!navigator)throw I.create("only-available-in-window");e.swRegistration||await U(e);return async function(e){const t=await T(e.firebaseDependencies);t&&(await A(e.firebaseDependencies,t.token),await async function(e){const t=C(e),n=(await k()).transaction(_,"readwrite");await n.objectStore(_).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();if(n)return n.unsubscribe();return!0}(e)}
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
 */(e=(0,o.getModularInstance)(e))},n.getMessaging=
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
function(e=(0,a.getApp)()){return z().then(e=>{if(!e)throw I.create("unsupported-browser")},e=>{throw I.create("indexed-db-unsupported")}),(0,a._getProvider)((0,o.getModularInstance)(e),"messaging").getImmediate()},n.getToken=async function(e,t){return F(e=(0,o.getModularInstance)(e),t)},n.isSupported=z,n.onMessage=function(e,t){return function(e,t){if(!navigator)throw I.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,o.getModularInstance)(e),t)},e("@firebase/installations");var r=e("@firebase/component"),i=e("idb"),o=e("@firebase/util"),a=e("@firebase/app");
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
const s="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",d="google.c.a.c_id",f=1e4;var p,h;
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
function g(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function m(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
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
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(p||(p={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(h||(h={}));const b="fcm_token_details_db",v=5,y="fcm_token_object_Store";
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
const w="firebase-messaging-database",S=1,_="firebase-messaging-store";let E=null;function k(){return E||(E=(0,i.openDB)(w,S,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(_)}})),E}async function T(e){const t=C(e),n=await k(),r=await n.transaction(_).objectStore(_).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(b))return null}let t=null;return(await(0,i.openDB)(b,v,{upgrade:async(n,r,i,o)=>{var a;if(r<2)return;if(!n.objectStoreNames.contains(y))return;const s=o.objectStore(y),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:g(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}}})).close(),await(0,i.deleteDB)(b),await(0,i.deleteDB)("fcm_vapid_details_db"),await(0,i.deleteDB)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await M(e,t),t}}async function M(e,t){const n=C(e),r=(await k()).transaction(_,"readwrite");return await r.objectStore(_).put(t,n),await r.done,t}function C({appConfig:e}){return e.appId}
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
 */const O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},I=new o.ErrorFactory("messaging","Messaging",O);async function A(e,t){const n={method:"DELETE",headers:await N(e)};try{const r=await fetch(`${P(e.appConfig)}/${t}`,n),i=await r.json();if(i.error){const e=i.error.message;throw I.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw I.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function P({projectId:e}){return`${u}/projects/${e}/registrations`}async function N({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function j({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==l&&(i.web.applicationPubKey=r),i}
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
 */const L=6048e5;async function R(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:g(t.getKey("auth")),p256dh:g(t.getKey("p256dh"))},r=await T(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}
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
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+L?async function(e,t){try{const n=await async function(e,t){const n=await N(e),r=j(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{const n=await fetch(`${P(e.appConfig)}/${t.token}`,i);o=await n.json()}catch(e){throw I.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(o.error){const e=o.error.message;throw I.create("token-update-failed",{errorInfo:e})}if(!o.token)throw I.create("token-update-no-token");return o.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await M(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await A(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return D(e.firebaseDependencies,n)}return D(e.firebaseDependencies,n)}async function D(e,t){const n=
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
 */await async function(e,t){const n=await N(e),r=j(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{const t=await fetch(P(e.appConfig),i);o=await t.json()}catch(e){throw I.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(o.error){const e=o.error.message;throw I.create("token-subscribe-failed",{errorInfo:e})}if(!o.token)throw I.create("token-subscribe-no-token");return o.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await M(e,r),r.token}function x(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const o=t.notification.icon;o&&(e.notification.icon=o)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,r,i,o,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(i=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(o=t.notification)||void 0===o?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */(t,e),t}function B(e){return I.create("missing-app-config-values",{valueName:e})}
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
!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
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
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ${constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw B("App Configuration Object");if(!e.name)throw B("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw B(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function U(e){try{e.swRegistration=await navigator.serviceWorker.register(s,{scope:c}),e.swRegistration.update().catch(()=>{}),await async function(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${f} ms`)),f),i=e.installing||e.waiting;e.active?(clearTimeout(r),t()):i?i.onstatechange=e=>{var n;"activated"===(null===(n=e.target)||void 0===n?void 0:n.state)&&(i.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}
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
 */(e.swRegistration)}catch(e){throw I.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}
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
async function F(e,t){if(!navigator)throw I.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw I.create("permission-blocked");
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
return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=l)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await U(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw I.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),R(e)}
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
 */async function K(e,t,n){const r=function(e){switch(e){case h.NOTIFICATION_CLICKED:return"notification_open";case h.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[d],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function V(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===h.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(x(n)):e.onMessageHandler.next(x(n)));const r=n.data;var i;"object"==typeof(i=r)&&i&&d in i&&"1"===r["google.c.a.e"]&&await K(e,n.messageType,r)}const H="@firebase/messaging",W="0.12.16",q=e=>{const t=new $(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>V(t,e)),t},G=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>F(t,e)}};
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
async function z(){try{await(0,o.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,o.isIndexedDBAvailable)()&&(0,o.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}(0,a._registerComponent)(new r.Component("messaging",q,"PUBLIC")),(0,a._registerComponent)(new r.Component("messaging-internal",G,"PRIVATE")),(0,a.registerVersion)(H,W),(0,a.registerVersion)(H,W,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/esm/index.esm2017.js"}],[913,{"@firebase/app":908,"@firebase/component":909,"@firebase/installations":910,"@firebase/util":914,idb:5634},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),e("@firebase/installations");var r=e("@firebase/component"),i=e("idb"),o=e("@firebase/util"),a=e("@firebase/app");
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
const s="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",c="FCM_MSG";var l,u;
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
function d(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function f(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
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
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(l||(l={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(u||(u={}));const p="fcm_token_details_db",h="fcm_token_object_Store";
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
const g="firebase-messaging-store";let m=null;function b(){return m||(m=i.openDB("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(g)}})),m}async function v(e){const t=w(e),n=await b(),r=await n.transaction(g).objectStore(g).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(p))return null}let t=null;return(await i.openDB(p,5,{upgrade:async(n,r,i,o)=>{var a;if(r<2)return;if(!n.objectStoreNames.contains(h))return;const s=o.objectStore(h),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(a=e.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:d(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}}})).close(),await i.deleteDB(p),await i.deleteDB("fcm_vapid_details_db"),await i.deleteDB("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await y(e,t),t}}async function y(e,t){const n=w(e),r=(await b()).transaction(g,"readwrite");return await r.objectStore(g).put(t,n),await r.done,t}function w({appConfig:e}){return e.appId}
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
 */const S={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_=new o.ErrorFactory("messaging","Messaging",S);async function E(e,t){const n={method:"DELETE",headers:await T(e)};try{const r=await fetch(`${k(e.appConfig)}/${t}`,n),i=await r.json();if(i.error){const e=i.error.message;throw _.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw _.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function k({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function T({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function M({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==s&&(i.web.applicationPubKey=r),i}
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
 */async function C(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:d(t.getKey("auth")),p256dh:d(t.getKey("p256dh"))},r=await v(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}
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
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await T(e),r=M(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{const n=await fetch(`${k(e.appConfig)}/${t.token}`,i);o=await n.json()}catch(e){throw _.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(o.error){const e=o.error.message;throw _.create("token-update-failed",{errorInfo:e})}if(!o.token)throw _.create("token-update-no-token");return o.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await y(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await E(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return I(e.firebaseDependencies,n)}return I(e.firebaseDependencies,n)}async function O(e){const t=await v(e.firebaseDependencies);t&&(await E(e.firebaseDependencies,t.token),await async function(e){const t=w(e),n=(await b()).transaction(g,"readwrite");await n.objectStore(g).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function I(e,t){const n=
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
 */await async function(e,t){const n=await T(e),r=M(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{const t=await fetch(k(e.appConfig),i);o=await t.json()}catch(e){throw _.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(o.error){const e=o.error.message;throw _.create("token-subscribe-failed",{errorInfo:e})}if(!o.token)throw _.create("token-subscribe-no-token");return o.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await y(e,r),r.token}async function A(e,t){const n=function(e,t){var n,r;const i={};e.from&&(i.project_number=e.from);e.fcmMessageId&&(i.message_id=e.fcmMessageId);i.instance_id=t,e.notification?i.message_type=l.DISPLAY_NOTIFICATION.toString():i.message_type=l.DATA_MESSAGE.toString();i.sdk_platform=3..toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(i.collapse_key=e.collapse_key);i.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(i.analytics_label=null===(r=e.fcmOptions)||void 0===r?void 0:r.analytics_label);return i}(t,await e.firebaseDependencies.installations.getId());!function(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),!n||(r.compliance_data=function(e){const t={privacy_context:{prequest:{origin_associated_product_id:e}}};return t}(n));e.logEvents.push(r)}(e,n,t.productId)}async function P(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await A(t,n);const r=await j();if(function(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}(r))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=u.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(r,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:r}=Notification;n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[c]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const o=t.notification.icon;o&&(e.notification.icon=o)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,r,i,o,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(i=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==i?i:null===(o=t.notification)||void 0===o?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function N(e){var t,n;const r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[c];if(!r)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const i=function(e){var t,n,r;const i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return o=e.data,"object"==typeof o&&o&&"google.c.a.c_id"in o?self.location.origin:null;var o;
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
 */}
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
 */(r);if(!i)return;const o=new URL(i,self.location.href),a=new URL(self.location.origin);if(o.host!==a.host)return;let s=await async function(e){const t=await j();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(o);var l;
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
 */return s?s=await s.focus():(s=await self.clients.openWindow(i),await(l=3e3,new Promise(e=>{setTimeout(e,l)}))),s?(r.messageType=u.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,s.postMessage(r)):void 0}function j(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function L(e){return _.create("missing-app-config-values",{valueName:e})}
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
 */!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
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
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class R{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw L("App Configuration Object");if(!e.name)throw L("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw L(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */const D=e=>{const t=new R(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(P(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n,r;const{newSubscription:i}=e;if(!i)return void await O(t);const o=await v(t.firebaseDependencies);await O(t),t.vapidKey=null!==(r=null===(n=null==o?void 0:o.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==r?r:s,await C(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(N(e))}),t};
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
async function x(){return o.isIndexedDBAvailable()&&await o.validateIndexedDBOpenable()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
 */a._registerComponent(new r.Component("messaging-sw",D,"PUBLIC")),n.experimentalSetDeliveryMetricsExportedToBigQueryEnabled=function(e,t){
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
return function(e,t){e.deliveryMetricsExportedToBigQueryEnabled=t}
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
 */(e=o.getModularInstance(e),t)}
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
 */,n.getMessaging=function(e=a.getApp()){return x().then(e=>{if(!e)throw _.create("unsupported-browser")},e=>{throw _.create("indexed-db-unsupported")}),a._getProvider(o.getModularInstance(e),"messaging-sw").getImmediate()},n.isSupported=x,n.onBackgroundMessage=function(e,t){return function(e,t){if(self.document!==undefined)throw _.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=o.getModularInstance(e),t)}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/index.sw.cjs"}],[914,{_process:6176},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(e){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.Sha1=n.RANDOM_FACTOR=n.MAX_VALUE_MILLIS=n.FirebaseError=n.ErrorFactory=n.Deferred=n.DecodeBase64StringError=n.CONSTANTS=void 0,n.areCookiesEnabled=function(){if("undefined"==typeof navigator||!navigator.cookieEnabled)return!1;return!0}
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
 */,n.assertionError=n.assert=void 0,n.async=function(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}},n.base64urlEncodeWithoutPadding=n.base64Encode=n.base64Decode=n.base64=void 0,n.calculateBackoffMillis=function(e,t=I,n=A){const r=t*Math.pow(n,e),i=Math.round(N*r*(Math.random()-.5)*2);return Math.min(P,r+i)}
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
 */,n.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(o)),""].join(".")}
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
 */,n.createSubscribe=function(e,t){const n=new M(e,t);return n.subscribe.bind(n)},n.decode=void 0,n.deepCopy=function(e){return d(undefined,e)},n.deepEqual=function e(t,n){if(t===n)return!0;const r=Object.keys(t),i=Object.keys(n);for(const o of r){if(!i.includes(o))return!1;const r=t[o],a=n[o];if(T(r)&&T(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(const e of i)if(!r.includes(e))return!1;return!0},n.deepExtend=d,n.errorPrefix=O,n.extractQuerystring=function(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:undefined)}
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
 */,n.getExperimentalSetting=n.getDefaults=n.getDefaultEmulatorHostnameAndPort=n.getDefaultEmulatorHost=n.getDefaultAppConfig=void 0,n.getGlobal=p,n.getModularInstance=
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
function(e){return e&&e._delegate?e._delegate:e},n.getUA=b,n.isAdmin=void 0,n.isBrowser=function(){return"undefined"!=typeof window||y()},n.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:undefined;return"object"==typeof e&&e.id!==undefined},n.isCloudflareWorker=function(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent},n.isElectron=function(){return b().indexOf("Electron/")>=0},n.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},n.isIE=function(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},n.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},n.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())},n.isNode=v,n.isNodeSdk=function(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN},n.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},n.isSafari=function(){return!v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},n.isUWP=function(){return b().indexOf("MSAppHost/")>=0},n.isValidTimestamp=n.isValidFormat=void 0,n.isWebWorker=y,n.issuedAtTime=void 0,n.jsonEval=E,n.map=function(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r},n.ordinal=function(e){if(!Number.isFinite(e))return`${e}`;return e+function(e){e=Math.abs(e);const t=e%100;if(t>=10&&t<=20)return"th";const n=e%10;if(1===n)return"st";if(2===n)return"nd";if(3===n)return"rd";return"th"}(e)},n.promiseWithTimeout=
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
 */
function(e,t=2e3){const n=new m;return setTimeout(()=>n.reject("timeout!"),t),e.then(n.resolve,n.reject),n.promise}
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
 */,n.querystring=function(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""},n.querystringDecode=function(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t},n.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:undefined},n.stringToByteArray=n.stringLength=void 0,n.stringify=function(e){return JSON.stringify(e)}
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
 */,n.validateArgCount=void 0,n.validateCallback=function(e,t,n,r){if(r&&!n)return;if("function"!=typeof n)throw new Error(O(e,t)+"must be a valid function.")},n.validateContextObject=function(e,t,n,r){if(r&&!n)return;if("object"!=typeof n||null===n)throw new Error(O(e,t)+"must be a valid context object.")}
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
 */,n.validateIndexedDBOpenable=function(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})},n.validateNamespace=function(e,t,n){if(n&&!t)return;if("string"!=typeof t)throw new Error(O(e,"namespace")+"must be a valid firebase namespace.")};
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
const t=n.CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw i(t)};
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
 */n.assert=r;const i=function(e){return new Error("Firebase Database ("+t.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};
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
 */n.assertionError=i;const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=n.base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|a>>4;let d=(15&a)<<2|c>>6,f=63&c;s||(f=64,o||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==c)throw new s;const l=i<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}n.DecodeBase64StringError=s;const c=function(e){const t=o(e);return a.encodeByteArray(t,!0)};n.base64Encode=c;const l=function(e){return c(e).replace(/\./g,"")};n.base64urlEncodeWithoutPadding=l;const u=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:e===undefined&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=d(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
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
 */function p(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
 */n.base64Decode=u;const h=()=>{try{return p().__FIREBASE_DEFAULTS__||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};n.getDefaults=h;const g=e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]};n.getDefaultEmulatorHost=g;n.getDefaultEmulatorHostnameAndPort=e=>{const t=g(e);if(!t)return undefined;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]};n.getDefaultAppConfig=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config};
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
n.getExperimentalSetting=e=>{var t;return null===(t=h())||void 0===t?void 0:t[`_${e}`]};class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){var e;const t=null===(e=h())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function y(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}n.Deferred=m;class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}n.FirebaseError=w;class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(_,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new w(r,a,n)}}n.ErrorFactory=S;const _=/\{\$([^}]+)}/g;
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
 */function E(e){return JSON.parse(e)}const k=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=E(u(o[0])||""),n=E(u(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};n.decode=k;n.isValidTimestamp=function(e){const t=k(e).claims,n=Math.floor((new Date).getTime()/1e3);let r=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i};n.issuedAtTime=function(e){const t=k(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};n.isValidFormat=function(e){const t=k(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};function T(e){return null!==e&&"object"==typeof e}
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
n.isAdmin=function(e){const t=k(e).claims;return"object"==typeof t&&!0===t.admin};n.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],a=this.chain_[1],s=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^a&(s^c),i=1518500249):(r=a^s^c,i=1859775393):e<60?(r=a&s|c&(a|s),i=2400959708):(r=a^s^c,i=3395469782);const t=(o<<5|o>>>27)+r+l+i+n[e]&4294967295;l=c,c=s,s=4294967295&(a<<30|a>>>2),a=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;t===undefined&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===undefined&&t===undefined&&n===undefined)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},r.next===undefined&&(r.next=C),r.error===undefined&&(r.error=C),r.complete===undefined&&(r.complete=C);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){this.observers!==undefined&&this.observers[e]!==undefined&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&this.onNoObservers!==undefined&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==undefined&&this.observers[e]!==undefined)try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==undefined&&(this.finalError=e),this.task.then(()=>{this.observers=undefined,this.onNoObservers=undefined}))}}function C(){}
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
 */function O(e,t){return`${e} failed: ${t} argument `}n.validateArgCount=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")}};n.stringToByteArray=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");o=65536+(t<<10)+(e.charCodeAt(i)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t};
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
n.stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};const I=1e3,A=2,P=n.MAX_VALUE_MILLIS=144e5,N=n.RANDOM_FACTOR=.5}).call(this)}).call(this,e("_process"))}}},{package:"@metamask/notification-services-controller>firebase>@firebase/util",file:"node_modules/@firebase/util/dist/index.esm2017.js"}],[915,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});class r{static parse(e){if(""===e)return new r([]);if(!e.startsWith("/"))throw new i(e);const[,...t]=e.split("/");return new r(t.map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~")))}constructor(e){this.tokens=e}toString(){if(0===this.tokens.length)return"";return`/${this.tokens.map(e=>e.replace(/~/g,"~0").replace(/\//g,"~1")).join("/")}`}shmeval(e){for(const t of this.tokens){if(!e.hasOwnProperty(t))throw new o(e,t);e=e[t]}return e}}n.default=r;class i extends Error{constructor(e){super(`Invalid JSON Pointer: ${e}`),this.ptr=e}}n.InvalidPtrError=i;class o extends Error{constructor(e,t){super(`Error evaluating JSON Pointer: no attribute ${t} on ${e}`),this.instance=e,this.token=t}}n.EvalError=o}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver>@json-schema-spec/json-pointer",file:"node_modules/@json-schema-spec/json-pointer/lib/index.js"}],[916,{"@json-schema-tools/reference-resolver":921,"@json-schema-tools/traverse":924,"fast-safe-stringify":5444},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var s=a(e("@json-schema-tools/traverse")),c=a(e("@json-schema-tools/reference-resolver")),l=a(e("fast-safe-stringify")),u=function(e){this.name="NonStringRefError",this.message=["NonStringRefError","Found an improperly formatted $ref in schema. $ref must be a string","schema in question: ".concat((0,l.default)(e))].join("\n")};n.NonStringRefError=u;var d=function(e,t){if(e.$ref!==undefined&&Object.keys(e).length>1&&!0!==t&&!1!==t){var n=r(r({},t),e);return delete n.$ref,n}return t},f=function(){function e(e,t){var n;if(void 0===t&&(t={}),this.options=t,this.refCache={},n=!0===this.options.mutate||!0===e||!1===e?e:r({},e),this.options.recursive===undefined&&(this.options.recursive=!0),this.options.rootSchema===undefined&&(this.options.rootSchema=n),!0!==e&&!1!==e&&e.$id&&(this.options.rootSchema=n),this.options.refCache&&(this.refCache=this.options.refCache),this.options.protocolHandlerMap)for(var i=0,o=Object.keys(this.options.protocolHandlerMap);i<o.length;i++){var a=o[i];c.default.protocolHandlerMap[a]=this.options.protocolHandlerMap[a]}this.schema=n,this.refs=this.collectRefs()}return e.prototype.resolve=function(){return i(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this._resolve()];case 1:return e.sent(),delete this.schema.definitions,delete this.schema.components,[2,this.schema]}})})},e.prototype._resolve=function(){return i(this,void 0,void 0,function(){var t,n,i,a,l,u,f,p,h,g,m,b=this;return o(this,function(o){switch(o.label){case 0:if(!0===this.schema||!1===this.schema)return[2,Promise.resolve(this.schema)];if(0===this.refs.length)return[2,Promise.resolve(this.schema)];t=this.refs.filter(function(e){return b.refCache[e]===undefined}),n=[],i=0,a=t,o.label=1;case 1:return i<a.length?(l=a[i],u=void 0,this.refCache[l]===undefined?[3,2]:(u=this.refCache[l],[3,5])):[3,11];case 2:if("#"!==l)return[3,3];if(this.options.rootSchema===undefined)throw new Error("options.rootSchema was not provided, but one of the schemas references '#'");return u=this.options.rootSchema,[3,5];case 3:return f=c.default.resolve(l,this.options.rootSchema),n.push(f),[4,f];case 4:u=o.sent(),o.label=5;case 5:return!0!==this.options.recursive||!0===u||!1===u||"#"===l?[3,9]:(p=r(r({},this.options),{refCache:this.refCache}),0===(h=new e(u,p)).refs.length?[3,7]:(g=h._resolve(),n.push(g),[4,g]));case 6:return m=o.sent(),this.refCache[l]=d(u,m),[3,8];case 7:this.refCache[l]=u,o.label=8;case 8:return[3,10];case 9:this.refCache[l]=u,o.label=10;case 10:return i++,[3,1];case 11:return this.schema.$ref!==undefined?this.schema=d(this.schema,this.refCache[this.schema.$ref]):(0,s.default)(this.schema,function(e){if(!0===e||!1===e)return e;if(e.$ref!==undefined){var t=b.refCache[e.$ref];return d(e,t)}return e},{mutable:!0}),[4,Promise.all(n)];case 12:return o.sent(),[2,this.schema]}})})},e.prototype.collectRefs=function(){var e=[];return(0,s.default)(this.schema,function(t){if(!0===t||!1===t)return t;if(t.$ref&&-1===e.indexOf(t.$ref)){if("string"!=typeof t.$ref)throw new u(t);e.push(t.$ref)}return t}),e},e}();n.default=f}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/dereferencer.js"}],[917,{"./dereferencer":916},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var i=r(e("./dereferencer")),o=e("./dereferencer");Object.defineProperty(n,"NonStringRefError",{enumerable:!0,get:function(){return o.NonStringRefError}}),n.default=i.default}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/index.js"}],[918,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.jsonSchema=void 0,n.jsonSchema={$schema:"https://meta.json-schema.tools/",$id:"https://meta.json-schema.tools/",title:"JSONSchema",default:{},oneOf:[{$ref:"#/definitions/JSONSchemaObject"},{$ref:"#/definitions/JSONSchemaBoolean"}],definitions:{JSONSchemaBoolean:{title:"JSONSchemaBoolean",description:"Always valid if true. Never valid if false. Is constant.",type:"boolean"},JSONSchemaObject:{title:"JSONSchemaObject",type:"object",properties:{$id:{title:"$id",type:"string",format:"uri-reference"},$schema:{title:"$schema",type:"string",format:"uri"},$ref:{title:"$ref",type:"string",format:"uri-reference"},$comment:{title:"$comment",type:"string"},title:{title:"title",type:"string"},description:{title:"description",type:"string"},default:!0,readOnly:{title:"readOnly",type:"boolean",default:!1},examples:{title:"examples",type:"array",items:!0},multipleOf:{title:"multipleOf",type:"number",exclusiveMinimum:0},maximum:{title:"maximum",type:"number"},exclusiveMaximum:{title:"exclusiveMaximum",type:"number"},minimum:{title:"minimum",type:"number"},exclusiveMinimum:{title:"exclusiveMinimum",type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{title:"pattern",type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{title:"items",anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{title:"uniqueItems",type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{title:"definitions",type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{title:"properties",type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{title:"patternProperties",type:"object",additionalProperties:{$ref:"#"},propertyNames:{title:"propertyNames",format:"regex"},default:{}},dependencies:{title:"dependencies",type:"object",additionalProperties:{title:"dependenciesSet",anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{title:"enum",type:"array",items:!0,minItems:1,uniqueItems:!0},type:{title:"type",anyOf:[{$ref:"#/definitions/simpleTypes"},{title:"arrayOfSimpleTypes",type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{title:"format",type:"string"},contentMediaType:{title:"contentMediaType",type:"string"},contentEncoding:{title:"contentEncoding",type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}}},schemaArray:{title:"schemaArray",type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{title:"nonNegativeInteger",type:"integer",minimum:0},nonNegativeIntegerDefault0:{title:"nonNegativeIntegerDefaultZero",type:"integer",minimum:0,default:0},simpleTypes:{title:"simpleTypes",type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{title:"stringArray",type:"array",items:{type:"string"},uniqueItems:!0,default:[]}}},n.default=n.jsonSchema}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/meta-schema",file:"node_modules/@json-schema-tools/meta-schema/index.js"}],[919,{"./errors":920,"isomorphic-fetch":5672},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./errors"),s=o(e("isomorphic-fetch")),c=function(e){return r(void 0,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,s.default)(e)];case 1:return t=r.sent(),[3,3];case 2:throw r.sent(),new a.InvalidRemoteURLError(e);case 3:return r.trys.push([3,5,,6]),[4,t.json()];case 4:return[2,r.sent()];case 5:throw n=r.sent(),new a.NonJsonRefError({$ref:e},n.message);case 6:return[2]}})})};n.default={https:c,http:c}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/default-protocol-handler-map.js"}],[92,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClaimsServiceInitMessenger=function(e){return new r.Messenger({namespace:"ClaimsServiceInit",parent:e})},n.getClaimsServiceMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:[]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/claims/claims-service-messenger.ts"}],[920,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidFileSystemPathError=n.InvalidRemoteURLError=n.NotResolvableError=n.NonJsonRefError=void 0;var r=function(e,t){this.name="NonJsonRefError",this.message=["NonJsonRefError","The resolved value at the reference: ".concat(e.$ref," was not JSON.parse 'able"),"The non-json content in question: ".concat(t)].join("\n")};n.NonJsonRefError=r;var i=function(e){this.name="NotResolvableError",this.message=["NotResolvableError","Could not resolve the reference: ".concat(e),"No protocol handler was found, and it was not found to be an internal reference"].join("\n")};n.NotResolvableError=i;var o=function(e){this.name="InvalidRemoteURLError",this.message=["InvalidRemoteURLError","The url was not resolvable: ".concat(e)].join("\n")};n.InvalidRemoteURLError=o;var a=function(e){this.name="InvalidFileSystemPathError",this.message=["InvalidFileSystemPathError","The path was not resolvable: ".concat(e)].join("\n")};n.InvalidFileSystemPathError=a}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/errors.js"}],[921,{"./default-protocol-handler-map":919,"./reference-resolver":922},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=a(e("./default-protocol-handler-map")),c=a(e("./reference-resolver")),l=r(r({},s.default),{file:function(){return i(void 0,void 0,void 0,function(){return o(this,function(e){return[2,undefined]})})}});n.default=new c.default(l)}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/index-web.js"}],[922,{"./errors":920,"./resolve-pointer":923},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./errors"),s=o(e("./resolve-pointer")),c=function(){function e(e){this.protocolHandlerMap=e}return e.prototype.resolve=function(e){return r(this,arguments,void 0,function(e,t){var n,r,o,c,l,u,d,f,p,h;return void 0===t&&(t={}),i(this,function(i){switch(i.label){case 0:if("#"===e[0])return[2,Promise.resolve((0,s.default)(e,t))];(n=e.split("#")).length>1&&(r=n[n.length-1]),o=n[0],i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.protocolHandlerMap.file(o,t)];case 2:return c=i.sent(),[3,4];case 3:throw l=i.sent(),new a.NonJsonRefError({$ref:e},l.message);case 4:if(c!==undefined)return h=c,r&&(h=(0,s.default)(r,h)),[2,h];if(!1===e.includes("://"))throw new a.InvalidFileSystemPathError(e);u=0,d=Object.keys(this.protocolHandlerMap),i.label=5;case 5:return u<d.length?(f=d[u],o.startsWith(f)?[4,this.protocolHandlerMap[f](o,t)]:[3,7]):[3,8];case 6:if((p=i.sent())!==undefined)return h=p,r&&(h=(0,s.default)(r,h)),[2,h];i.label=7;case 7:return u++,[3,5];case 8:throw new a.NotResolvableError(e)}})})},e}();n.default=c}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/reference-resolver.js"}],[923,{"@json-schema-spec/json-pointer":915},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidJsonPointerRefError=void 0;var i=r(e("@json-schema-spec/json-pointer")),o=function(e,t){this.name="InvalidJsonPointerRefError",this.message=["InvalidJsonPointerRefError","The provided RFC6901 JSON Pointer is invalid: ".concat(e),"","addition info: ",t].join("\n")};n.InvalidJsonPointerRefError=o,n.default=function(e,t){try{var n=e.replace("#","");return i.default.parse(n).shmeval(t)}catch(t){throw new o(e,t.message)}}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/resolve-pointer.js"}],[924,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(n,"__esModule",{value:!0}),n.defaultOptions=void 0,n.defaultOptions={skipFirstMutation:!1,mutable:!1,bfs:!1};var o=function(e){return e.map(function(e){return""===e?"$":".".concat(e)}).join("")},a=function(e,t){var n=t.find(function(t){return t===e});return n||!1},s=function(e,t){return void 0===t&&(t=1),e[e.length-t]};n.default=function e(t,c,l,u,d,f,p,h,g){void 0===l&&(l=n.defaultOptions),void 0===u&&(u=0),void 0===d&&(d=[]),void 0===f&&(f=[]),void 0===p&&(p=[]),void 0===h&&(h=[]),void 0===g&&(g=[]);var m=r(r({},n.defaultOptions),l);if(0===u&&(p=[""]),"boolean"==typeof t||t instanceof Boolean)return!0===m.skipFirstMutation&&0===u?t:c(t,!1,o(p),s(f));var b=t;!1===m.mutable&&(b=r({},t)),f.push(b),!0===m.bfs&&(!1!==m.skipFirstMutation&&0===u||(b=c(b,!1,o(p),s(f,2)))),d.push(t),h.push([t,b]);var v=function(t,n){var r=a(t,d);return r?(g.push(r),!0===m.skipFirstMutation&&r===d[0]?c(t,!0,o(n),s(f)):h.find(function(e){var t=e[0];return r===t})[1]):e(t,c,l,u+1,d,f,n,h,g)};if(t.anyOf)b.anyOf=t.anyOf.map(function(e,t){return v(e,i(i([],p,!0),["anyOf[".concat(t,"]")],!1))});else if(t.allOf)b.allOf=t.allOf.map(function(e,t){return v(e,i(i([],p,!0),["allOf[".concat(t,"]")],!1))});else if(t.oneOf)b.oneOf=t.oneOf.map(function(e,t){return v(e,i(i([],p,!0),["oneOf[".concat(t,"]")],!1))});else{if(t.items)if(t.items instanceof Array)b.items=t.items.map(function(e,t){return v(e,i(i([],p,!0),["items[".concat(t,"]")],!1))});else{var y=a(t.items,d);if(y)if(g.push(y),!0===m.skipFirstMutation&&y===d[0])b.items=c(t.items,!0,o(p),s(f));else{var w=h.find(function(e){var t=e[0];return y===t})[1];b.items=w}else b.items=e(t.items,c,l,u+1,d,f,i(i([],p,!0),["items"],!1),h,g)}if(t.additionalItems!==undefined&&(b.additionalItems=v(t.additionalItems,i(i([],p,!0),["additionalItems"],!1))),t.properties!==undefined){var S=t.properties,_={};Object.keys(t.properties).forEach(function(e){_[e]=v(S[e],i(i([],p,!0),["properties",e.toString()],!1))}),b.properties=_}if(t.patternProperties!==undefined){var E=t.patternProperties,k={};Object.keys(t.patternProperties).forEach(function(e){k[e]=v(E[e],i(i([],p,!0),["patternProperties",e.toString()],!1))}),b.patternProperties=k}t.additionalProperties!==undefined&&!0==!!t.additionalProperties&&(b.additionalProperties=v(t.additionalProperties,i(i([],p,!0),["additionalProperties"],!1)))}if(!0===m.skipFirstMutation&&0===u)return b;if(!0===m.bfs)return f.pop(),b;var T=-1!==g.indexOf(t);return f.pop(),c(b,T,o(p),s(f))}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer>@json-schema-tools/traverse",file:"node_modules/@json-schema-tools/traverse/build/index.js"}],[93,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getConnectivityControllerMessenger=function(e){return new r.Messenger({namespace:"ConnectivityController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/connectivity-controller-messenger.ts"}],[94,{"./connectivity-controller-messenger":93},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getConnectivityControllerMessenger",{enumerable:!0,get:function(){return r.getConnectivityControllerMessenger}});var r=e("./connectivity-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/index.ts"}],[95,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountActivityServiceMessenger=function(e){const t=new r.Messenger({namespace:"AccountActivityService",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","BackendWebSocketService:connect","BackendWebSocketService:forceReconnection","BackendWebSocketService:subscribe","BackendWebSocketService:getConnectionInfo","BackendWebSocketService:channelHasSubscription","BackendWebSocketService:getSubscriptionsByChannel","BackendWebSocketService:findSubscriptionsByChannelPrefix","BackendWebSocketService:addChannelCallback","BackendWebSocketService:removeChannelCallback"],events:["AccountsController:selectedAccountChange","BackendWebSocketService:connectionStateChanged"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/account-activity-service-messenger.ts"}],[96,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBackendWebSocketServiceInitMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketServiceInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","AuthenticationController:getBearerToken"]}),t},n.getBackendWebSocketServiceMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:["AuthenticationController:stateChange","KeyringController:lock","KeyringController:unlock"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/backend-websocket-service-messenger.ts"}],[97,{"./account-activity-service-messenger":95,"./backend-websocket-service-messenger":96},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAccountActivityServiceMessenger",{enumerable:!0,get:function(){return i.getAccountActivityServiceMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceInitMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceInitMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceMessenger}});var r=e("./backend-websocket-service-messenger"),i=e("./account-activity-service-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/index.ts"}],[98,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCurrencyRateControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"]}),t},n.getCurrencyRateControllerMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/currency-rate-controller-messenger.ts"}],[99,{"@metamask/messenger":2827},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getDecryptMessageControllerMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","ApprovalController:rejectRequest","KeyringController:decryptMessage"],events:["DecryptMessageManager:stateChange","DecryptMessageManager:unapprovedMessage"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-controller-messenger.ts"}],[9,{"../../shared/constants/app":7242,"../../shared/constants/defi-referrals":7247,"../../shared/constants/errors":7248,"../../shared/constants/infura-project-id":7253,"../../shared/constants/messages":7257,"../../shared/constants/metametrics":7258,"../../shared/constants/offscreen-communication":7264,"../../shared/constants/onboarding":7265,"../../shared/constants/start-up-errors":7275,"../../shared/constants/ui-initialization":7283,"../../shared/lib/browser-runtime.utils":7300,"../../shared/lib/caip-stream":7302,"../../shared/lib/deep-links/utils":7337,"../../shared/lib/fetch-with-timeout":7368,"../../shared/lib/get-first-preferred-lang-code":7375,"../../shared/lib/manifestFlags":7379,"../../shared/lib/mv3.utils":7389,"../../shared/lib/object.utils":7392,"../../shared/lib/promise-with-resolvers":7395,"../../shared/lib/selectors/networks":7404,"../../shared/lib/sentry":7409,"./constants/marketing-site-whitelist":10,"./constants/sentry-state":11,"./constants/snaps":12,"./constants/stream":13,"./first-time-state":264,"./lib/CronjobControllerStorageManager":268,"./lib/createDefiReferralMiddleware":277,"./lib/deep-links/deep-link-router":292,"./lib/deep-links/metrics":293,"./lib/ens-ipfs/setup":298,"./lib/extension-lazy-listener/extension-lazy-listener":299,"./lib/getObjStructure":301,"./lib/migrator":307,"./lib/notification-manager":311,"./lib/safe-reload":340,"./lib/setup-initial-state-hooks":344,"./lib/start-up-errors/start-up-errors":356,"./lib/state-corruption/state-corruption-recovery":357,"./lib/stores/persistence-manager":364,"./lib/stream-utils":366,"./lib/update-remote-feature-flags":400,"./lib/use-split-state-storage":401,"./lib/util":402,"./metamask-controller":403,"./migrations":636,"./offscreen":637,"./on-update":638,"./platforms/extension":639,"@metamask/base-controller":1681,"@metamask/utils":3938,"extension-port-stream":5429,loglevel:5870,"readable-stream":6333,"webextension-polyfill":7153},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.loadStateFromPersistence=Ve,n.setupController=ze;var r=e("./lib/setup-initial-state-hooks");e("../../shared/constants/infura-project-id");var i=e("readable-stream"),o=re(e("loglevel")),a=re(e("webextension-polyfill")),s=e("@metamask/utils"),c=e("@metamask/base-controller"),l=e("extension-port-stream"),u=e("../../shared/lib/promise-with-resolvers"),d=e("../../shared/constants/onboarding"),f=e("../../shared/constants/app"),p=e("../../shared/constants/messages"),h=e("../../shared/constants/ui-initialization"),g=e("../../shared/constants/metametrics"),m=e("../../shared/lib/browser-runtime.utils"),b=e("../../shared/lib/mv3.utils"),v=e("../../shared/lib/object.utils"),y=(e("../../shared/constants/offscreen-communication"),e("../../shared/lib/sentry")),w=e("../../shared/lib/selectors/networks"),S=e("../../shared/lib/caip-stream"),_=re(e("../../shared/lib/fetch-with-timeout")),E=e("../../shared/constants/errors"),k=re(e("../../shared/lib/get-first-preferred-lang-code")),T=(e("../../shared/lib/manifestFlags"),e("../../shared/constants/start-up-errors")),M=e("../../shared/constants/defi-referrals"),C=e("../../shared/lib/deep-links/utils"),O=e("./lib/state-corruption/state-corruption-recovery"),I=e("./lib/stores/persistence-manager"),A=e("./lib/use-split-state-storage"),P=re(e("./migrations")),N=re(e("./lib/migrator")),j=e("./lib/update-remote-feature-flags"),L=re(e("./platforms/extension")),R=e("./constants/sentry-state"),D=ne(e("./lib/notification-manager")),x=ne(e("./metamask-controller")),B=re(e("./lib/getObjStructure")),$=re(e("./lib/ens-ipfs/setup")),U=e("./lib/util"),F=e("./offscreen"),K=e("./lib/stream-utils"),V=re(e("./first-time-state")),H=e("./on-update"),W=e("./constants/marketing-site-whitelist"),q=e("./constants/stream"),G=e("./constants/snaps"),z=e("./lib/extension-lazy-listener/extension-lazy-listener"),J=e("./lib/deep-links/deep-link-router"),Y=e("./lib/deep-links/metrics"),Q=e("./lib/safe-reload"),X=e("./lib/start-up-errors/start-up-errors"),Z=e("./lib/CronjobControllerStorageManager"),ee=e("./lib/createDefiReferralMiddleware");function te(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(te=function(e){return e?n:t})(e)}function ne(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=te(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function re(e){return e&&e.__esModule?e:{default:e}}const ie=globalThis.stateHooks.lazyListener??new z.ExtensionLazyListener(a.default),oe="#0376C9",ae=9,{safePersist:se,requestSafeReload:ce,evacuate:le}=(0,Q.getRequestSafeReload)(r.persistenceManager);global.stateHooks.getMostRecentPersistedState=()=>r.persistenceManager.mostRecentRetrievedState,global.stateHooks.getStorageKind=()=>r.persistenceManager.storageKind,global.logEncryptedVault=()=>{r.persistenceManager.logEncryptedVault()};const{sentry:ue}=global;let de={...V.default};const fe={[f.ENVIRONMENT_TYPE_POPUP]:!0,[f.ENVIRONMENT_TYPE_NOTIFICATION]:!0,[f.ENVIRONMENT_TYPE_FULLSCREEN]:!0},pe=["trezor-connect"];o.default.setLevel("info",!1);const he=new L.default,ge=new D.default,me=(0,U.getPlatform)()===f.PLATFORM_FIREFOX;function be(e){var t;const n=e.name,r=null!==(t=e.sender)&&void 0!==t&&t.url?new URL(e.sender.url):null;let i;return i=me?Boolean(fe[n]):(null==r?void 0:r.origin)===`chrome-extension://${a.default.runtime.id}`,{processName:n,senderUrl:r,isMetaMaskUIPort:i}}let ve=0,ye=!1,we=!1,Se=0;const _e={},Ee={};let ke;const Te={},Me={};const Ce=new URL("https://metamask.github.io/phishing-warning/v5.1.0/"),Oe=Ce.toString();let Ie,Ae,Pe;function Ne(){const e=(0,u.withResolvers)();Ie=e.promise,Ae=e.resolve,Pe=e.reject}ie.once("runtime","onInstalled").then(e=>{!async function([e]){if("install"===e.reason)await async function(){o.default.debug("First install detected"),he.openExtensionInBrowser();await Ye()}();else if("update"===e.reason){const{previousVersion:t}=e;if(!t||t===he.getVersion())return;await Ie,(0,H.onUpdate)(ke,he,t,ce)}}(e)}),Ne();let je,Le,Re,De;const xe=new O.CorruptionHandler,Be=async e=>{try{e.postMessage({data:{method:h.BACKGROUND_LIVENESS_METHOD},name:"background-liveness"})}catch(e){return void o.default.error("MetaMask - background-liveness check: Failed to message to port",e)}try{await Ie,je(e)}catch(n){if(null==ue||ue.captureException(n),be(e).isMetaMaskUIPort)if((0,E.isStateCorruptionError)(n))await xe.handleStateCorruptionError({port:e,error:n,database:r.persistenceManager,repairCallback:async e=>{Ne(),(0,O.hasVault)(e)?(await Qe(e),ke.onboardingController.setFirstTimeFlowType(d.FirstTimeFlowType.restore)):(await r.persistenceManager.reset(),await Qe(null))}});else{var t;const r=(0,s.isObject)(n)?{message:n.message??"Unknown error",name:n.name??"UnknownError",stack:n.stack,...n.sentryTags&&{sentryTags:n.sentryTags}}:{message:String(n),name:"UnknownError",stack:""};(0,X.tryPostMessage)(e,T.DISPLAY_GENERAL_STARTUP_ERROR,{error:r,currentLocale:null===(t=ke)||void 0===t||null===(t=t.preferencesController)||void 0===t||null===(t=t.state)||void 0===t?void 0:t.currentLocale})}}},$e=()=>{ie.addListener("runtime","onConnect",Be)};function Ue(){const e=(new Date).toISOString();a.default.storage.session.set({timestamp:e})}async function Fe(e){(0,U.initInstallType)();const t=b.isManifestV3?(0,F.createOffscreen)():null;let n=null,i=!1;b.isManifestV3&&(0,F.addOffscreenConnectivityListener)(e=>{if(i&&ke.controllerApi.setConnectivityStatus){const t=e?"online":"offline";ke.controllerApi.setConnectivityStatus(t)}else n=e});const o=await Ve(e),s=o.data,c=await(0,k.default)();let l;if(b.isManifestV3){var u;if(!1!==(null===(u=s.PreferencesController)||void 0===u?void 0:u.enableMV3TimestampSave)){const e=2e3;Ue(),setInterval(Ue,e)}const e=await a.default.storage.session.get(["isFirstMetaMaskControllerSetup"]);l=(null==e?void 0:e.isFirstMetaMaskControllerSetup)===undefined,await a.default.storage.session.set({isFirstMetaMaskControllerSetup:l})}const d={},f=await async function(){const e=(0,_.default)(),t=G.PREINSTALLED_SNAPS_URLS.map(async t=>{const n=await e(t);if(t.pathname.endsWith(".json.gz")){const e=new DecompressionStream("gzip"),t=n.body.pipeThrough(e);return await new Response(t).json()}return await n.json()});return Promise.all(t)}(),h=new Z.CronjobControllerStorageManager;if(await h.init(),ze(s,c,d,l,o.meta,t,f,h),ke.metaMetricsController.updateTraits({[g.MetaMetricsUserTrait.StorageKind]:r.persistenceManager.storageKind}),function(e){async function t(e,t){try{const n=await a.default.tabs.get(e);return!(n.url&&n.url.startsWith("https://www.google.com/search")||(await a.default.tabs.update(e,{url:t}),0))}catch(e){return null==ue||ue.captureException(e),!1}}const n=!b.isManifestV3;a.default.webRequest.onBeforeRequest.addListener(r=>{var i,o,s;if(r.tabId===a.default.tabs.TAB_ID_NONE)return{};const{completedOnboarding:c}=e.onboardingController.state;if(!c)return{};if(!e.preferencesController.state.usePhishDetect)return{};if(r.initiator&&"null"!==r.initiator&&new URL(r.initiator).host===Ce.host)return{};const{hostname:l,href:u,searchParams:d}=new URL(r.url);e.phishingController.maybeUpdateState();const f=e.phishingController.isBlockedRequest(r.url);let p,h;if("main_frame"!==r.type&&"sub_frame"!==r.type||(p=e.phishingController.test(r.url)),!(null!==(i=p)&&void 0!==i&&i.result||f.result))return{};let m,b=u;null!==(o=p)&&void 0!==o&&o.result&&f.result?h=`${p.type} and ${f.type}`:null!==(s=p)&&void 0!==s&&s.result?h=p.type:(h=f.type,b=r.initiator);try{m=new URL(b).hostname}catch{m=l,b=u}const v=new URLSearchParams({hostname:m,href:b}),y=new URL(Oe);y.hash=v.toString();const w=y.toString(),S=()=>{me||e.metaMetricsController.trackEvent({event:g.MetaMetricsEventName.PhishingPageDisplayed,category:g.MetaMetricsEventCategory.Phishing,properties:{url:b,referrer:{url:b},reason:h,requestDomain:f.result?l:undefined}},{excludeMetaMetricsId:!0})};return n?"main_frame"===r.type?(S(),{redirectUrl:w}):(t(r.tabId,w).then(e=>{e&&S()}),{cancel:!0}):(t(r.tabId,w).then(e=>{e&&S()}),{})},{urls:["http://*/*","https://*/*","ws://*/*","wss://*/*"]},n?["blocking"]:[])}(ke),b.isManifestV3){if(i=!0,null!==n){const e=n?"online":"offline";ke.controllerApi.setConnectivityStatus(e)}}else{const e=e=>{const t=e?"online":"offline";ke.controllerApi.setConnectivityStatus(t)};e(globalThis.navigator.onLine),globalThis.addEventListener("online",()=>e(!0)),globalThis.addEventListener("offline",()=>e(!1))}b.isManifestV3||await async function(){let e;try{const t=new URL(Oe);let n,r;t.hash="#extensionStartup",e=window.document.createElement("iframe"),e.setAttribute("src",t.href),e.setAttribute("sandbox","allow-scripts allow-same-origin");const i=new Promise((e,t)=>{n=e,r=t});e.addEventListener("load",n),window.document.body.appendChild(e),setTimeout(()=>r(new Ke),1e3),await i}catch(e){e instanceof Ke?console.warn("Phishing warning page timeout; page not guaranteed to work offline."):console.error("Failed to initialize phishing warning page",e)}finally{e&&e.remove()}}(),await(async()=>{const e=await a.default.tabs.query({url:"<all_urls>",windowType:"normal"}).then(e=>((0,m.checkForLastErrorAndLog)(),e)).catch(()=>{(0,m.checkForLastErrorAndLog)()});for(const t of e)a.default.tabs.sendMessage(t.id,{name:p.EXTENSION_MESSAGES.READY}).then(()=>{(0,m.checkForLastErrorAndLog)()}).catch(()=>{(0,m.checkForLastErrorAndLog)()})})(),new J.DeepLinkRouter({getExtensionURL:he.getExtensionURL,getState:ke.getState.bind(ke)}).on("navigate",async({url:e,parsed:t})=>{"redirectTo"in t||await ke.metaMetricsController.trackEvent((0,Y.createEvent)({signature:t.signature,url:e}))}).on("error",e=>null==ue?void 0:ue.captureException(e)).install()}$e(),a.default.runtime.onConnectExternal.addListener(async(...e)=>{await Ie,Le(...e)});class Ke extends Error{constructor(){super("Timeout failed")}}async function Ve(e){var t,n;let i;if(e){i={data:{},meta:{}};for(const t of I.backedUpStateKeys)(0,s.hasProperty)(e,t)&&(i.data[t]=e[t]);(0,s.hasProperty)(e,"meta")&&(0,s.isObject)(e.meta)&&(i.meta=e.meta,"split"===e.meta.storageKind||"data"===e.meta.storageKind?r.persistenceManager.storageKind=e.meta.storageKind:r.persistenceManager.storageKind="data"),"number"!=typeof i.meta.version&&(o.default.error("The `backup`'s `meta.version` property was missing during backup restore."),i.meta.version=155)}else{const e=!0;i=await r.persistenceManager.get({validateVault:e})}const a=new N.default({migrations:P.default,defaultVersion:null});a.on("error",e=>{console.warn(e);const t=(0,B.default)(i);null==ue||ue.captureException(e,{extra:{vaultStructure:t}})});let c=!1;null!==(t=i)&&void 0!==t&&t.data||null!==(n=i)&&void 0!==n&&n.meta||(c=!0,i=a.generateInitialState(de));const{state:l,changedKeys:u}=await a.migrateData(i),d=async t=>{var n,o,a,s,c,u,d,f;const p=null===(n=i)||void 0===n||null===(n=n.meta)||void 0===n?void 0:n.version,h="number"==typeof p&&p>=157;let g=(null==e||null===(o=e.AppMetadataController)||void 0===o?void 0:o.firstTimeInfo)??(null==l||null===(a=l.data)||void 0===a||null===(a=a.AppMetadataController)||void 0===a?void 0:a.firstTimeInfo)??(null==l||null===(s=l.data)||void 0===s?void 0:s.firstTimeInfo)??(null===(c=i)||void 0===c||null===(c=c.data)||void 0===c||null===(c=c.AppMetadataController)||void 0===c?void 0:c.firstTimeInfo)??(null===(u=i)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.firstTimeInfo);if(!g)try{var m;const e=await r.persistenceManager.getBackup();g=null==e||null===(m=e.AppMetadataController)||void 0===m?void 0:m.firstTimeInfo}catch{}const b=new Error(t);return b.sentryTags={"corruption.preMigrationVersion":String(p??"unknown"),"corruption.backupShouldExist":String(h),"corruption.installVersion":String((null===(d=g)||void 0===d?void 0:d.version)??"unknown"),"corruption.installDate":String((null===(f=g)||void 0===f?void 0:f.date)??"unknown")},b};if(!l)throw await d("MetaMask - migrator returned undefined");if(!(0,s.isObject)(l.meta))throw await d(`MetaMask - migrator metadata has invalid type '${typeof l.meta}'`);if("number"!=typeof l.meta.version)throw await d(`MetaMask - migrator metadata version has invalid type '${typeof l.meta.version}'`);if(!["data","split",undefined].includes(l.meta.storageKind))throw await d(`MetaMask - migrator metadata storageKind has invalid value '${l.meta.storageKind}'`);if(!(0,s.isObject)(l.data))throw await d(`MetaMask - migrator data has invalid type '${typeof l.data}'`);if(r.persistenceManager.setMetadata(l.meta),o.default.debug("[Split State]: Loaded data from persistence with storageKind '%s'",r.persistenceManager.storageKind),"data"===r.persistenceManager.storageKind){const e=!0===l.meta.platformSplitStateGradualRolloutAttempted,t=!e&&await(0,A.useSplitStateStorage)(l.data);o.default.debug("[Split State]: shouldUseSplitStateStorage: %s (alreadyTried: %s)",t,e),t&&(l.meta.platformSplitStateGradualRolloutAttempted=!0,r.persistenceManager.setMetadata(l.meta)),o.default.debug("[Split State]: Writing data to persistence with storageKind 'data'"),await r.persistenceManager.set(l.data),t&&(await r.persistenceManager.migrateToSplitState(l.data),l.meta=r.persistenceManager.getMetaData(),l.meta!==undefined&&(delete l.meta.platformSplitStateGradualRolloutAttempted,r.persistenceManager.setMetadata(l.meta)),await r.persistenceManager.persist())}else{if("split"!==r.persistenceManager.storageKind)throw new Error(`MetaMask - persistenceManager has invalid storageKind '${r.persistenceManager.storageKind}'`);if(c)for(const[e,t]of Object.entries(l.data))r.persistenceManager.update(e,t);else for(const e of u)r.persistenceManager.update(e,l.data[e]);await r.persistenceManager.persist()}return o.default.debug("[Split State]: Load complete."),l}function He(e){const{metaMetricsId:t}=ke.metaMetricsController.state;if(!(0,U.shouldEmitDappViewedEvent)(t))return;const n=ke.getPermittedAccounts(e).length;if(0===n)return;const r=ke.controllerMessenger.call("AccountsController:getState"),i=Object.keys(r.internalAccounts.accounts).length;ke.metaMetricsController.trackEvent({event:g.MetaMetricsEventName.DappViewed,category:g.MetaMetricsEventCategory.InpageProvider,referrer:{url:e},properties:{is_first_visit:!1,number_of_accounts:i,number_of_accounts_connected:n}},{excludeMetaMetricsId:!0})}function We(e){var t,n,r;if(null===(t=e.sender)||void 0===t||!t.tab||null===(n=e.sender)||void 0===n||!n.url||null===(r=e.sender)||void 0===r||null===(r=r.tab)||void 0===r||!r.url)return;const i=e.sender.tab.id,o=new URL(e.sender.url),{origin:a}=o,s=new URL(e.sender.tab.url),{origin:c}=s;Object.keys(Te).includes(i)||(Te[i]=a),i in Me||(Me[i]=c);const l=ke.controllerMessenger.call("PermissionController:hasPermissions",a),u="New Tab"!==e.sender.tab.title;l&&u&&He(a)}function qe(e){const t=[f.ENVIRONMENT_TYPE_POPUP,f.ENVIRONMENT_TYPE_NOTIFICATION,f.ENVIRONMENT_TYPE_FULLSCREEN];!(Object.values(_e).some(Boolean)||ye||ve>0||Se>0)&&t.includes(e)&&function(){const{metaMetricsId:e,participateInMetaMetrics:t}=ke.metaMetricsController.state;(null!==e||t)&&ke.metaMetricsController.trackEvent({event:g.MetaMetricsEventName.AppOpened,category:g.MetaMetricsEventCategory.App})}()}const Ge=async()=>{if(await Ie,ke)try{const e=await a.default.tabs.query({active:!0,currentWindow:!0});if(!e||0===e.length)return;const t=e[0],{id:n,title:r,url:i,favIconUrl:o}=t;if(!i)return void ke.appStateController.clearAppActiveTab();const{origin:s,protocol:c,host:l,href:u}=new URL(i);if(!(0,U.isWebOrigin)(s))return void ke.appStateController.clearAppActiveTab();ke.appStateController.setAppActiveTab({id:n,title:r,origin:s,protocol:c,url:i,host:l,href:u,favIconUrl:o}),ke.subjectMetadataController.addSubjectMetadata({origin:s,name:r||l||s,iconUrl:o||null,subjectType:"website"})}catch(e){console.log("Error refreshing appActiveTab:",e.message)}};function ze(e,t,n,s,u,d,p,h){ke=new x.default({infuraProjectId:globalThis.INFURA_PROJECT_ID,showUserConfirmation:Je,initState:e,initLangCode:t,platform:he,notificationManager:ge,browser:a.default,getRequestAccountTabIds:()=>Ee,getOpenMetamaskTabsIds:()=>_e,overrides:n,isFirstMetaMaskControllerSetup:s,currentMigrationVersion:u.version,featureFlags:{},offscreenPromise:d,preinstalledSnaps:p,requestSafeReload:ce,cronjobControllerStorageManager:h}),r.persistenceManager.setOnSetFailed(e=>{ke.appStateController.setStorageWriteErrorType(e)});const m=[],_=ke.store.getState();for(const t of Object.keys(_)){const n=e[t]||{},r=_[t];if(null===r||"object"!=typeof r){(0,y.captureException)(new Error(`Invalid controller state for '${t}' of type '${null===r?"null":typeof r}'`));continue}const i=Object.keys(r);if(i.length===Object.keys(n).length){for(const e of i)if(r[e]!==n[e]){m.push(t);break}}else m.push(t)}var E;"split"===r.persistenceManager.storageKind?(m.length>0&&(o.default.info(`MetaMaskController state changed during configuration for controllers: ${m.join(", ")}. Persisting updated state.`),m.forEach(e=>{r.persistenceManager.update(e,_[e])}),se().catch(e=>{o.default.error("Error persisting updated state:",e),null==ue||ue.captureException(e)})),ke.store.on("stateChange",async({controllerKey:e,newState:t,_oldState:n,_patches:i})=>{r.persistenceManager.update(e,t),I.backedUpStateKeys.includes(e)&&I.backedUpStateKeys.forEach(t=>{if(t===e)return;const n=ke.store.config[t];if(null==n||!n.metadata)throw new Error(`Cannot backup ${t}: controller metadata is required but not found. All controllers in backedUpStateKeys must extend BaseController and define metadata.`);const i=ke.controllerMessenger.call(`${t}:getState`),o=(0,c.deriveStateFromMetadata)(i,n.metadata,"persist");r.persistenceManager.update(t,o)});try{await se()}catch(e){o.default.error("Error persisting state change:",e),null==ue||ue.captureException(e)}})):(m.length>0&&(o.default.info(`MetaMaskController state changed during configuration for controllers: ${m.join(", ")}. Persisting updated state.`),se(_).catch(e=>{o.default.error("Error persisting updated controller state:",e),null==ue||ue.captureException(e)})),ke.store.on("update",se)),ke.store.on("error",e=>{o.default.error("MetaMask controller.store error:",e),null==ue||ue.captureException(e)}),(0,$.default)({getCurrentChainId:()=>(0,w.getCurrentChainId)({metamask:ke.networkController.state}),getIpfsGateway:ke.preferencesController.getIpfsGateway.bind(ke.preferencesController),getUseAddressBarEnsResolution:()=>ke.preferencesController.state.useAddressBarEnsResolution,provider:ke.provider}),E=ke,global.stateHooks.getSentryAppState=function(){const e=E.memStore.getState();return(0,v.maskObject)(e,R.SENTRY_BACKGROUND_STATE)};const k=()=>ve>0||Boolean(Object.keys(_e).length)||ye||Se>0||!1,T=(e,t)=>{if(!1===e)ke.onClientClosed();else{if(t===f.ENVIRONMENT_TYPE_FULLSCREEN&&Boolean(Object.keys(_e).length)||t===f.ENVIRONMENT_TYPE_SIDEPANEL&&Se>0)return;ke.onEnvironmentTypeClosed(t)}};function M(){const e=C();let t="";const n=oe;var r,i;e&&(t=(r=e)>(i=ae)?`${i}+`:String(r));try{const e={text:t},r={color:n};b.isManifestV3?(a.default.action.setBadgeText(e),a.default.action.setBadgeBackgroundColor(r)):(a.default.browserAction.setBadgeText(e),a.default.browserAction.setBadgeBackgroundColor(r))}catch(e){console.error("Error updating browser badge:",e)}}function C(){try{return ke.appStateController.waitingForUnlock.length+ke.approvalController.getTotalApprovalCount()}catch(e){return console.error("Failed to get pending approval count:",e),0}}je=e=>{if(pe.includes(e.name))return;const{processName:t,senderUrl:r,isMetaMaskUIPort:o}=be(e);if(o){var a;const r=(null==n||null===(a=n.getPortStream)||void 0===a?void 0:a.call(n,e))||new l.ExtensionPortStream(e),o=function({chunkSize:e}){ke.metaMetricsController.trackEvent({event:g.MetaMetricsEventName.PortStreamChunked,category:g.MetaMetricsEventCategory.PortStream,properties:{chunkSize:e}})};if(e.onDisconnect.addListener(()=>r.off("message-too-large",o)),r.on("message-too-large",o),ke.isClientOpen=!0,ke.setupTrustedCommunication(r,e.sender),qe(t),(0,j.updateRemoteFeatureFlags)(ke),t===f.ENVIRONMENT_TYPE_POPUP&&(ve+=1,(0,i.finished)(r,()=>{ve-=1;const e=k();ke.isClientOpen=e,T(e,f.ENVIRONMENT_TYPE_POPUP)})),t===f.ENVIRONMENT_TYPE_SIDEPANEL&&(Se+=1,Ge(),(0,i.finished)(r,()=>{Se=Math.max(Se-1,0);const e=k();ke.isClientOpen=e,T(e,f.ENVIRONMENT_TYPE_SIDEPANEL)})),t===f.ENVIRONMENT_TYPE_NOTIFICATION&&(ye=!0,(0,i.finished)(r,()=>{ye=!1;const e=k();ke.isClientOpen=e,T(e,f.ENVIRONMENT_TYPE_NOTIFICATION)})),t===f.ENVIRONMENT_TYPE_FULLSCREEN){const t=e.sender.tab.id;_e[t]=!0,(0,i.finished)(r,()=>{delete _e[t];const e=k();ke.isClientOpen=e,T(e,f.ENVIRONMENT_TYPE_FULLSCREEN)})}}else if(r&&r.origin===Ce.origin&&r.pathname===Ce.pathname){var s;const t=(null==n||null===(s=n.getPortStream)||void 0===s?void 0:s.call(n,e))||new l.ExtensionPortStream(e,{chunkSize:0});ke.setupPhishingCommunication({connectionStream:t})}else{var c;if(e.sender&&e.sender.tab&&e.sender.url){const t=e.sender.tab.id,n=new URL(e.sender.url),{origin:r}=n;We(e),e.onMessage.addListener(e=>{e.data&&e.data.method===f.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS&&(Ee[r]=t)})}if(r&&W.COOKIE_ID_MARKETING_WHITELIST_ORIGINS.some(e=>e===r.origin)){var u;const t=(null==n||null===(u=n.getPortStream)||void 0===u?void 0:u.call(n,e))||new l.ExtensionPortStream(e,{chunkSize:0});ke.setUpCookieHandlerCommunication({connectionStream:t})}const t=(null==n||null===(c=n.getPortStream)||void 0===c?void 0:c.call(n,e))||new l.ExtensionPortStream(e,{chunkSize:0});if(Re(t,e.sender),me||!b.isManifestV3){const n=(0,K.setupMultiplex)(t);n.ignoreStream(q.METAMASK_EIP_1193_PROVIDER),De(n.createStream(q.METAMASK_CAIP_MULTICHAIN_PROVIDER),e.sender)}}},Le=e=>{var t;const r=(null==n||null===(t=n.getPortStream)||void 0===t?void 0:t.call(n,e))||new l.ExtensionPortStream(e,{chunkSize:0});if(!e.sender.id){if(pe.includes(e.name))return;We(e),De((0,S.createCaipStream)(r),e.sender)}else Re(r,e.sender)},Re=(e,t)=>{ke.setupUntrustedCommunicationEip1193({connectionStream:e,sender:t})},De=(e,t)=>{ke.setupUntrustedCommunicationCaip({connectionStream:e,sender:t})},null!=n&&n.registerConnectListeners&&n.registerConnectListeners(je,Re),M(),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.DECRYPT_MESSAGE_MANAGER_UPDATE_BADGE,M),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.ENCRYPTION_PUBLIC_KEY_MANAGER_UPDATE_BADGE,M),ke.signatureController.hub.on(x.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE,M),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.APP_STATE_UNLOCK_CHANGE,M),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE,M),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_LIST_UPDATED,M),ke.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_MARK_AS_READ,M),ge.on(D.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED,({automaticallyClosed:e})=>{e?C()>0&&Je():(ke.signatureController.rejectUnapproved(g.REJECT_NOTIFICATION_CLOSE_SIG),ke.decryptMessageController.rejectUnapproved(g.REJECT_NOTIFICATION_CLOSE),ke.encryptionPublicKeyController.rejectUnapproved(g.REJECT_NOTIFICATION_CLOSE),ke.rejectAllPendingApprovals()),M()})}async function Je(){const e=await he.getActiveTabs(),t=Boolean(e.find(e=>_e[e.id])),n=e.length>0&&e[0].extData&&e[0].extData.indexOf("vivaldi_tab")>-1;if(!we&&(n||0===ve)&&!t&&0===Se){we=!0;try{const e=ke.appStateController.getCurrentPopupId();await ge.showPopup(e=>ke.appStateController.setCurrentPopupId(e),e)}finally{we=!1}}}const Ye=async()=>{if(ke){ke.metaMetricsController.updateTraits({[g.MetaMetricsUserTrait.InstallDateExt]:(new Date).toISOString().split("T")[0]});const e=await(0,C.getDeferredDeepLinkFromCookie)(),t={};return e&&(ke.appStateController.setDeferredDeepLink(e),t.install_source="deeplink",t.deeplink_path=e.referringLink),void ke.metaMetricsController.addEventBeforeMetricsOptIn({category:g.MetaMetricsEventCategory.App,event:g.MetaMetricsEventName.AppInstalled,properties:t})}setTimeout(async()=>{await Ye()},500)};a.default.runtime.onUpdateAvailable.addListener(async function(e){await Ie,o.default.info("An update is available",null==e?void 0:e.version),ke.appStateController.setPendingExtensionVersion((null==e?void 0:e.version)??null)});(async()=>{if(null!==a.default&&void 0!==a.default&&a.default.sidePanel)try{var e,t;await Ie;const n=(null===(e=ke)||void 0===e||null===(e=e.preferencesController)||void 0===e||null===(e=e.state)||void 0===e||null===(e=e.preferences)||void 0===e?void 0:e.useSidePanelAsDefault)??!1;null!==a.default&&void 0!==a.default&&null!==(t=a.default.sidePanel)&&void 0!==t&&t.setPanelBehavior&&await a.default.sidePanel.setPanelBehavior({openPanelOnActionClick:n})}catch(e){console.error("Error setting side panel behavior:",e)}})();(async()=>{if(null!==a.default&&void 0!==a.default&&a.default.sidePanel)try{var e;await Ie,null===(e=ke)||void 0===e||null===(e=e.controllerMessenger)||void 0===e||e.subscribe("PreferencesController:stateChange",e=>{var t,n;const r=(null==e||null===(t=e.preferences)||void 0===t?void 0:t.useSidePanelAsDefault)??!1;null!==a.default&&void 0!==a.default&&null!==(n=a.default.sidePanel)&&void 0!==n&&n.setPanelBehavior&&a.default.sidePanel.setPanelBehavior({openPanelOnActionClick:r}).catch(e=>console.error("Error updating panel behavior:",e))})}catch(e){console.error("Error setting up preference listener:",e)}})();async function Qe(e){a.default.tabs.onActivated.addListener(e=>{if(ke){const{tabId:t}=e,n=Te[t],r=Me[t];n&&ke.permissionController.state.subjects[n]!==undefined&&He(n);const i=(0,M.getPartnerByOrigin)(r);i&&ke.permissionController.state.subjects[r]!==undefined&&ke.handleDefiReferral(i,t,ee.ReferralTriggerType.OnNavigateConnectedTab).catch(e=>{o.default.error(`Failed to handle ${i.name} referral after navigation to connected tab: `,e)})}});try{await Fe(e),r.persistenceManager.cleanUpMostRecentRetrievedState(),o.default.info("MetaMask initialization complete."),Ae()}catch(e){o.default.error(e),Pe(e)}}(async()=>{await Ge()})(),a.default.tabs.onActivated.addListener(async({tabId:e})=>{if(await Ie,!ke)return{};try{const t=await a.default.tabs.get(e),{id:n,title:r,url:i,favIconUrl:o}=t;if(!i)return ke.appStateController.clearAppActiveTab(),{};const{origin:s,protocol:c,host:l,href:u}=new URL(i);if(!(0,U.isWebOrigin)(s))return ke.appStateController.clearAppActiveTab(),{};ke.appStateController.setAppActiveTab({id:n,title:r,origin:s,protocol:c,url:i,host:l,href:u,favIconUrl:o}),ke.subjectMetadataController.addSubjectMetadata({origin:s,name:r||l||s,iconUrl:o||null,subjectType:"website"})}catch(e){console.log("Error in tabs.onActivated listener:",e.message)}return{}}),a.default.tabs.onUpdated.addListener(async(e,t,n)=>{if(await Ie,!ke)return{};const r=t.url!==undefined,i="complete"===t.status;if(!r&&!i)return{};try{const t=n||await a.default.tabs.get(e),{id:o,title:s,url:c,favIconUrl:l}=t,u=ke.appStateController.state.appActiveTab,d=(null==u?void 0:u.id)===o;if(!c)return d&&ke.appStateController.clearAppActiveTab(),{};const{origin:f,protocol:p,host:h,href:g}=new URL(c);if(!f||"null"===f||f.startsWith("chrome-extension://")||f.startsWith("moz-extension://"))return d&&ke.appStateController.clearAppActiveTab(),{};let m=!1;try{m=(await a.default.tabs.query({active:!0,currentWindow:!0})).some(e=>e.id===o)}catch(e){m=d}(r||i)&&m&&(ke.appStateController.setAppActiveTab({id:o,title:s,origin:f,protocol:p,url:c,host:h,href:g,favIconUrl:l}),ke.subjectMetadataController.addSubjectMetadata({origin:f,name:s||h||f,iconUrl:l||null,subjectType:"website"}))}catch(e){console.log("Error in tabs.onUpdated listener:",e.message)}return{}}),Qe(null)}}},{package:"$root$",file:"app/scripts/background.js"}]],[9],{});