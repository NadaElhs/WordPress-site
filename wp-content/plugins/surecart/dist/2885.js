"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[2885],{4805:function(n,e,t){t.d(e,{a:function(){return p},b:function(){return u},g:function(){return l}});var r=t(4467),i=t(296);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.A)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return s(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var _n=0,r=function(){};return{s:r,n:function(){return _n>=n.length?{done:!0}:{done:!1,value:n[_n++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return o=n.done,n},e:function(n){a=!0,i=n},f:function(){try{o||null==t.return||t.return()}finally{if(a)throw i}}}}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function u(n){for(var e,t="",r=Object.entries(n);e=r.shift();){var o=e,a=(0,i.A)(o,2),s=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var d,l=c(Object.entries(u).reverse());try{for(l.s();!(d=l.n()).done;){var p=(0,i.A)(d.value,2),f=p[0],v=p[1];r.unshift(["".concat(s,"[").concat(f,"]"),v])}}catch(n){l.e(n)}finally{l.f()}}else void 0!==u&&(null===u&&(u=""),t+="&"+[s,u].map(encodeURIComponent).join("="))}return t.substr(1)}function d(n){try{return decodeURIComponent(n)}catch(e){return n}}function l(n){return(function(n){var e;try{e=new URL(n,"http://example.com").search.substring(1)}catch(n){}if(e)return e}(n)||"").replace(/\+/g,"%20").split("&").reduce((function(n,e){var t=e.split("=").filter(Boolean).map(d),r=(0,i.A)(t,2),o=r[0],c=r[1],s=void 0===c?"":c;return o&&function(n,e,t){for(var r=e.length,i=r-1,o=0;o<r;o++){var c=e[o];!c&&Array.isArray(n)&&(c=n.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var s=!isNaN(Number(e[o+1]));n[c]=o===i?t:n[c]||(s?[]:{}),Array.isArray(n[c])&&!s&&(n[c]=a({},n[c])),n=n[c]}}(n,o.replace(/\]/g,"").split("["),s),n}),Object.create(null))}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(!e||!Object.keys(e).length)return n;var t=n,r=n.indexOf("?");return-1!==r&&(e=Object.assign(l(n),e),t=t.substr(0,r)),t+"?"+u(e)}},488:function(n,e,t){t.d(e,{i:function(){return o},m:function(){return i},z:function(){return r}});var r=["bif","byr","clp","djf","gnf","isk","jpy","kmf","krw","pyg","rwf","ugx","vnd","vuv","xaf","xag","xau","xba","xbb","xbc","xbd","xdr","xof","xpd","xpf","xpt","xts"],i=function(n,e){return o(e)?n:n/100},o=function(n){var e;return r.includes(null===(e=null==n?void 0:n.toLowerCase)||void 0===e?void 0:e.call(n))}},4883:function(n,e,t){t.d(e,{a:function(){return F},h:function(){return z}});var r=t(467),i=t(45),o=t(296),a=t(4467),c=t(9280),s=t.n(c),u=t(4805),d=t(3506),l=["rest_route"],p=["path","url"],f=["url","path","data","parse"];function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,a.A)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function _(n,e){return void 0!==(0,d.g)(n,e)}function w(n){var e=n.split("?"),t=e[1],r=e[0];return t?r+"?"+t.split("&").map((function(n){return n.split("=")})).map((function(n){return n.map(decodeURIComponent)})).sort((function(n,e){return n[0].localeCompare(e[0])})).map((function(n){return n.map(encodeURIComponent)})).map((function(n){return n.join("=")})).join("&"):r}var b=function(n,e){var t,r,i=n.path;return"string"==typeof n.namespace&&"string"==typeof n.endpoint&&(t=n.namespace.replace(/^\/|\/$/g,""),i=(r=n.endpoint.replace(/^\//,""))?t+"/"+r:t),delete n.namespace,delete n.endpoint,e(h(h({},n),{},{path:i}))};function g(n,e){return Promise.resolve(e?n.body:new window.Response(JSON.stringify(n.body),{status:200,statusText:"OK",headers:n.headers}))}var y=function(n){return n.json?n.json():Promise.reject(n)},m=function(n){return function(n){if(!n)return{};var e=n.match(/<([^>]+)>; rel="next"/);return e?{next:e[1]}:{}}(n.headers.get("link")).next},x=function(n){var e=!!n.path&&-1!==n.path.indexOf("per_page=-1"),t=!!n.url&&-1!==n.url.indexOf("per_page=-1");return e||t},O=function(){var n=(0,r.A)(s().mark((function n(e,t){var r,o,a,c,d,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==e.parse){n.next=2;break}return n.abrupt("return",t(e));case 2:if(x(e)){n.next=4;break}return n.abrupt("return",t(e));case 4:return n.next=6,F(h(h({},(f={per_page:100},void 0,void 0,v=(s=e).path,_=s.url,h(h({},(0,i.A)(s,p)),{},{url:_&&(0,u.a)(_,f),path:v&&(0,u.a)(v,f)}))),{},{parse:!1}));case 6:return r=n.sent,n.next=9,y(r);case 9:if(o=n.sent,Array.isArray(o)){n.next=12;break}return n.abrupt("return",o);case 12:if(a=m(r)){n.next=15;break}return n.abrupt("return",o);case 15:c=[].concat(o);case 16:if(!a){n.next=27;break}return n.next=19,F(h(h({},e),{},{path:void 0,url:a,parse:!1}));case 19:return d=n.sent,n.next=22,y(d);case 22:l=n.sent,c=c.concat(l),a=m(d),n.next=16;break;case 27:return n.abrupt("return",c);case 28:case"end":return n.stop()}var s,f,v,_}),n)})));return function(_x,e){return n.apply(this,arguments)}}(),k=new Set(["PATCH","PUT","DELETE"]),P=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(n){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?n:204===n.status?null:n.json?n.json():Promise.reject(n)}(n,e)).catch((function(n){return j(n,e)}))};function j(n){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw n;return function(n){var e={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!n||!n.json)throw e;return n.json().catch((function(){throw e}))}(n).then((function(n){var e={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw n||e}))}var A,T,S,C,U,M,R,D={Accept:"application/json, */*;q=0.1"},N={credentials:"include"},E=[function(n,e){return"string"!=typeof n.url||_(n.url,"_locale")||(n.url=(0,u.a)(n.url,{_locale:"user"})),"string"!=typeof n.path||_(n.path,"_locale")||(n.path=(0,u.a)(n.path,{_locale:"user"})),e(n)},b,function(n,e){var t=n.method,r=void 0===t?"GET":t;return k.has(r.toUpperCase())&&(n=h(h({},n),{},{headers:h(h({},n.headers),{},{"X-HTTP-Method-Override":r,"Content-Type":"application/json"}),method:"POST"})),e(n)},O],I=function(n){if(n.status>=200&&n.status<300)return n;throw n},X=function(n){var e=n.url,t=n.path,r=n.data,o=n.parse,a=void 0===o||o,c=(0,i.A)(n,f),s=n.body,u=n.headers;return u=h(h({},D),u),r&&(s=JSON.stringify(r),u["Content-Type"]="application/json"),window.fetch(e||t||window.location.href,h(h(h({},N),c),{},{body:s,headers:u})).then((function(n){return Promise.resolve(n).then(I).catch((function(n){return j(n,a)})).then((function(n){return P(n,a)}))}),(function(n){if(n&&"AbortError"===n.name)throw n;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function F(n){return E.reduceRight((function(n,e){return function(t){return e(t,n)}}),X)(n).catch((function(e){return"rest_cookie_invalid_nonce"!==e.code?Promise.reject(e):window.fetch(F.nonceEndpoint).then(I).then((function(n){return n.text()})).then((function(e){return F.nonceMiddleware.nonce=e,F(n)}))}))}F.use=function(n){E.unshift(n)},F.setFetchHandler=function(n){X=n},F.createNonceMiddleware=function(n){var e=function n(e,t){var r=e.headers,i=void 0===r?{}:r;for(var o in i)if("x-wp-nonce"===o.toLowerCase()&&i[o]===n.nonce)return t(e);return t(h(h({},e),{},{headers:h(h({},i),{},{"X-WP-Nonce":n.nonce})}))};return e.nonce=n,e},F.createPreloadingMiddleware=function(n){var e=Object.fromEntries(Object.entries(n).map((function(n){var e=(0,o.A)(n,2),t=e[0],r=e[1];return[w(t),r]})));return function(n,t){var r=n.parse,o=void 0===r||r,a=n.path;if(!a&&n.url){var c=(0,u.g)(n.url),s=c.rest_route,d=(0,i.A)(c,l);"string"==typeof s&&(a=(0,u.a)(s,d))}if("string"!=typeof a)return t(n);var p=n.method||"GET",f=w(a);if("GET"===p&&e[f]){var v=e[f];return delete e[f],g(v,!!o)}if("OPTIONS"===p&&e[p]&&e[p][f]){var h=e[p][f];return delete e[p][f],g(h,!!o)}return t(n)}},F.createRootURLMiddleware=function(n){return function(e,t){return b(e,(function(e){var r,i=e.url,o=e.path;return"string"==typeof o&&(r=n,-1!==n.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(o=o.replace("?","&")),i=r+o),t(h(h({},e),{},{url:i}))}))}},F.fetchAllMiddleware=O,F.mediaUploadMiddleware=function(n,e){if(!function(n){var e=!!n.method&&"POST"===n.method;return(!!n.path&&-1!==n.path.indexOf("/wp/v2/media")||!!n.url&&-1!==n.url.indexOf("/wp/v2/media"))&&e}(n))return e(n);var t=0,r=function n(r){return t++,e({path:"/wp/v2/media/".concat(r,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return t<5?n(r):(e({path:"/wp/v2/media/".concat(r,"?force=true"),method:"DELETE"}),Promise.reject())}))};return e(h(h({},n),{},{parse:!1})).catch((function(e){var t=e.headers.get("x-wp-upload-attachment-id");return e.status>=500&&e.status<600&&t?r(t).catch((function(){return!1!==n.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(e)})):j(e,n.parse)})).then((function(e){return P(e,n.parse)}))},F.createThemePreviewMiddleware=function(n){return function(e,t){if("string"==typeof e.url){var r=(0,d.g)(e.url,"wp_theme_preview");void 0===r?e.url=(0,u.a)(e.url,{wp_theme_preview:n}):""===r&&(e.url=(0,d.r)(e.url,"wp_theme_preview"))}if("string"==typeof e.path){var i=(0,d.g)(e.path,"wp_theme_preview");void 0===i?e.path=(0,u.a)(e.path,{wp_theme_preview:n}):""===i&&(e.path=(0,d.r)(e.path,"wp_theme_preview"))}return t(e)}},F.fetchAllMiddleware=null,F.use(F.createRootURLMiddleware((null===(T=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===T?void 0:T.root_url)||(null===(S=null===window||void 0===window?void 0:window.scData)||void 0===S?void 0:S.root_url))),(null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.nonce)&&(F.nonceMiddleware=F.createNonceMiddleware(null===(U=null===window||void 0===window?void 0:window.scData)||void 0===U?void 0:U.nonce),F.use(F.nonceMiddleware)),(null===(M=null===window||void 0===window?void 0:window.scData)||void 0===M?void 0:M.nonce_endpoint)&&(F.nonceEndpoint=null===(R=null===window||void 0===window?void 0:window.scData)||void 0===R?void 0:R.nonce_endpoint),F.use((function(n,e){return n.path=(0,u.a)(n.path,{t:Date.now()}),e(n)})),F.use((function(n,e){var t=e(n);return t.catch((function(n){return"invalid_json"===n.code&&(n.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),n.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),Promise.reject(n)})),t}));var Y=function(n){var e={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==n?void 0:n.code)&&(null==n?void 0:n.message))throw n;if(!n||!n.json)throw e;return n.json().catch((function(){throw e}))},z=function(){var n=(0,r.A)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y(e);case 2:if("rest_cookie_invalid_nonce"===(t=n.sent).code){n.next=5;break}throw t;case 5:return n.abrupt("return",window.fetch(F.nonceEndpoint).then((function(n){if(n.status>=200&&n.status<300)return n;throw n})).then((function(n){return n.text()})).then((function(n){F.nonceMiddleware.nonce=n})));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1517:function(n,e,t){t.d(e,{a:function(){return i},b:function(){return l},c:function(){return f},d:function(){return a},g:function(){return o},i:function(){return s},p:function(){return p},t:function(){return c}});var r=t(488),i=function(n){return(null==n?void 0:n.amount_off)&&(null==n?void 0:n.currency)?o({amount:n.amount_off,currency:n.currency}):(null==n?void 0:n.percent_off)?wp.i18n.sprintf(wp.i18n.__("%1d%% off","surecart"),0|n.percent_off):""},o=function(n){var e=n.amount,t=n.currency,i=function(n,e){return r.z.includes(e)?n:n/100}(e,t);return"".concat(new Intl.NumberFormat(void 0,{style:"currency",currency:t}).format(parseFloat(i.toFixed(2))))},a=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"usd";return null===(n=new Intl.NumberFormat(void 0,{style:"currency",currency:e}).formatToParts().find((function(n){return"currency"===n.type})))||void 0===n?void 0:n.value},c=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("every","surecart"),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:wp.i18n.__("once","surecart"),i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];switch(e){case"day":return"".concat(t," ").concat(wp.i18n.sprintf(i?wp.i18n._n("%d day","%d days",n,"surecart"):wp.i18n._n("day","%d days",n,"surecart"),n));case"week":return"".concat(t," ").concat(wp.i18n.sprintf(i?wp.i18n._n("%d week","%d weeks",n,"surecart"):wp.i18n._n("week","%d weeks",n,"surecart"),n));case"month":return"".concat(t," ").concat(wp.i18n.sprintf(i?wp.i18n._n("%d month","%d months",n,"surecart"):wp.i18n._n("month","%d months",n,"surecart"),n));case"year":return"".concat(t," ").concat(wp.i18n.sprintf(i?wp.i18n._n("%d year","%d years",n,"surecart"):wp.i18n._n("year","%d years",n,"surecart"),n));default:return r}},s=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!n)return"";var t=e.showOnce,r=e.labels,i=e.abbreviate,o=(r||{}).interval,a=void 0===o?wp.i18n.__("every","surecart"):o;return"".concat(u(n,a,t?wp.i18n.__("once","surecart"):"",i)," ").concat(d(n,i))},u=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("once","surecart"),r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.recurring_interval_count&&n.recurring_interval&&1!==(null==n?void 0:n.recurring_period_count)?r?function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("once","surecart"),r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];switch(e){case"day":return" / ".concat(wp.i18n.sprintf(r?wp.i18n._n("%d day","%d days",n,"surecart"):wp.i18n._n("day","%d days",n,"surecart"),n));case"week":return" / ".concat(wp.i18n.sprintf(r?wp.i18n._n("%d wk","%d wks",n,"surecart"):wp.i18n._n("wk","%d wks",n,"surecart"),n));case"month":return" / ".concat(wp.i18n.sprintf(r?wp.i18n._n("%d mo","%d months",n,"surecart"):wp.i18n._n("mo","%d mos",n,"surecart"),n));case"year":return" / ".concat(wp.i18n.sprintf(r?wp.i18n._n("%d yr","%d yrs",n,"surecart"):wp.i18n._n("yr","%d yrs",n,"surecart"),n));default:return t}}(n.recurring_interval_count,n.recurring_interval,t):c(n.recurring_interval_count,n.recurring_interval," ".concat(e),t):""},d=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(null==n?void 0:n.recurring_period_count)&&1!==(null==n?void 0:n.recurring_period_count)?e?"x ".concat(n.recurring_period_count):" (".concat(wp.i18n.sprintf(wp.i18n._n("%d payment","%d payments",n.recurring_period_count,"surecart"),n.recurring_period_count),")"):""},l=function(n){return wp.i18n.sprintf(wp.i18n._n("%d payment remaining","%d payments remaining",n,"surecart"),n)},p=function(n){var e;return n?"".concat(null===(e=null==n?void 0:n.product)||void 0===e?void 0:e.name," ").concat((null==n?void 0:n.name)?"— ".concat(n.name):""):""},f=function(n){switch(n){case"invalid":return wp.i18n.__("Not valid","surecart");case"expired":return wp.i18n.__("Expired","surecart");case"gone":return wp.i18n.__("Not available","surecart");case"less_than_min_subtotal_amount":return wp.i18n.__("Minimum not met","surecart");case"greater_than_max_subtotal_amount":return wp.i18n.__("Order too large","surecart");case"not_applicable":return wp.i18n.__("Product(s) not eligible","surecart");case"not_applicable_to_customer":return wp.i18n.__("Not eligible","surecart");case"":return"";default:return wp.i18n.__("Not redeemable","surecart")}}},3506:function(n,e,t){t.d(e,{g:function(){return i},r:function(){return o}});var r=t(4805);function i(n,e){return(0,r.g)(n)[e]}function o(n){var e=n.indexOf("?");if(-1===e)return n;for(var t=(0,r.g)(n),i=n.substr(0,e),o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];a.forEach((function(n){return delete t[n]}));var s=(0,r.b)(t);return s?i+"?"+s:i}},2885:function(n,e,t){t.r(e),t.d(e,{sc_subscription_details:function(){return f},sc_subscription_status_badge:function(){return v}});var r=t(467),i=t(3029),o=t(2901),a=t(9280),c=t.n(a),s=t(1346),u=t(4883),d=t(1517),l=t(4805),p=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Intl.NumberFormat([],{style:"currency",currency:e.toUpperCase(),currencyDisplay:"symbol"}).format(function(n,e){return["BIF","BYR","CLP","DJF","GNF","ISK","JPY","KMF","KRW","PYG","RWF","UGX","VND","VUV","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XDR","XOF","XPD","XPF","XPT","XTS"].includes(null==e?void 0:e.toUpperCase())?n:n/100}(n,e.toUpperCase()))},f=function(){return(0,o.A)((function n(e){(0,i.A)(this,n),(0,s.r)(this,e),this.subscription=void 0,this.pendingPrice=void 0,this.hideRenewalText=void 0,this.activationsModal=void 0,this.loading=void 0,this.hasPendingUpdate=void 0}),[{key:"renderName",value:function(){var n,e,t;return"string"!=typeof(null===(e=null===(n=this.subscription)||void 0===n?void 0:n.price)||void 0===e?void 0:e.product)?(0,d.p)(null===(t=this.subscription)||void 0===t?void 0:t.price):wp.i18n.__("Subscription","surecart")}},{key:"handleSubscriptionChange",value:(e=(0,r.A)(c().mark((function n(){var e,t,r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.hasPendingUpdate=!!(null===(t=Object.keys((null===(e=null==this?void 0:this.subscription)||void 0===e?void 0:e.pending_update)||{}))||void 0===t?void 0:t.length),!(null===(i=null===(r=null==this?void 0:this.subscription)||void 0===r?void 0:r.pending_update)||void 0===i?void 0:i.price)||(null==this?void 0:this.pendingPrice)||this.hideRenewalText){n.next=5;break}return n.next=4,this.fetchPrice(this.subscription.pending_update.price);case 4:this.pendingPrice=n.sent;case 5:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.handleSubscriptionChange()}},{key:"fetchPrice",value:(n=(0,r.A)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.loading=!0,n.next=4,(0,u.a)({path:(0,l.a)("surecart/v1/prices/".concat(e),{expand:["product"]})});case 4:return t=n.sent,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:return n.prev=11,this.loading=!1,n.finish(11);case 14:case"end":return n.stop()}}),n,this,[[0,8,11,14]])}))),function(e){return n.apply(this,arguments)})},{key:"renderRenewalText",value:function(){var n,e,t,r,i,o,a,c,u,l,f,v,h,_,w,b,g,y,m,x,O,_x,k,P=(0,s.h)("sc-subscription-status-badge",{subscription:null==this?void 0:this.subscription});return(null===(n=null==this?void 0:this.subscription)||void 0===n?void 0:n.cancel_at_period_end)&&(null===(e=null==this?void 0:this.subscription)||void 0===e?void 0:e.current_period_end_at)?(0,s.h)("span",{"aria-label":wp.i18n.sprintf(/* translators: %s: current period end date */
wp.i18n.__("Renewal Update - Your plan will be canceled on %s","surecart"),this.subscription.current_period_end_at_date)},P," "," ",/* translators: %s: current period end date */
wp.i18n.sprintf(wp.i18n.__("Your plan will be canceled on %s","surecart"),this.subscription.current_period_end_at_date)):this.hasPendingUpdate?this.pendingPrice||(null===(r=null===(t=this.subscription)||void 0===t?void 0:t.pending_update)||void 0===r?void 0:r.ad_hoc_amount)?(null===(o=null===(i=this.subscription)||void 0===i?void 0:i.pending_update)||void 0===o?void 0:o.ad_hoc_amount)?(0,s.h)("span",{"aria-label":wp.i18n.sprintf(/* translators: 1: new price, 2: current period end date */
wp.i18n.__("Renewal Update - Your plan switches to %1s on %2s","surecart"),p(null===(c=null===(a=this.subscription)||void 0===a?void 0:a.pending_update)||void 0===c?void 0:c.ad_hoc_amount,(null===(u=this.pendingPrice)||void 0===u?void 0:u.currency)||(null===(f=null===(l=this.subscription)||void 0===l?void 0:l.price)||void 0===f?void 0:f.currency)),this.subscription.current_period_end_at_date)},wp.i18n.__("Your plan switches to","surecart")," ",(0,s.h)("strong",null,(0,s.h)("sc-format-number",{type:"currency",currency:(null===(v=this.pendingPrice)||void 0===v?void 0:v.currency)||(null===(_=null===(h=this.subscription)||void 0===h?void 0:h.price)||void 0===_?void 0:_.currency),value:null===(b=null===(w=this.subscription)||void 0===w?void 0:w.pending_update)||void 0===b?void 0:b.ad_hoc_amount})," ",(0,d.i)(this.pendingPrice||(null===(g=this.subscription)||void 0===g?void 0:g.price)))," ",wp.i18n.__("on","surecart")," ",this.subscription.current_period_end_at_date):(0,s.h)("span",{"aria-label":wp.i18n.sprintf(/* translators: 1: new plan name, 2: current period end date */
wp.i18n.__("Renewal Update - Your plan switches to %1s on %2s","surecart"),this.pendingPrice.product.name,this.subscription.current_period_end_at_date)},wp.i18n.__("Your plan switches to","surecart")," ",(0,s.h)("strong",null,this.pendingPrice.product.name)," ",wp.i18n.__("on","surecart")," ",this.subscription.current_period_end_at_date):(0,s.h)("sc-skeleton",null):"trialing"===(null===(y=null==this?void 0:this.subscription)||void 0===y?void 0:y.status)&&(null===(m=null==this?void 0:this.subscription)||void 0===m?void 0:m.trial_end_at)?(0,s.h)("span",{"aria-label":wp.i18n.sprintf(/* translators: %s: trial end date */
wp.i18n.__("Renewal Update - Your plan begins on %s.","surecart"),this.subscription.trial_end_at_date)},P," ",wp.i18n.sprintf(/* translators: %s: trial end date */
wp.i18n.__("Your plan begins on %s","surecart"),null===(x=null==this?void 0:this.subscription)||void 0===x?void 0:x.trial_end_at_date)):"active"===(null===(O=this.subscription)||void 0===O?void 0:O.status)&&(null===(_x=this.subscription)||void 0===_x?void 0:_x.current_period_end_at)?(0,s.h)("span",{"aria-label":wp.i18n.sprintf(/* translators: %s: current period end date */
wp.i18n.__("Renewal Update - Your next payment is on %s","surecart"),this.subscription.current_period_end_at_date)},P," ",null===(null===(k=this.subscription)||void 0===k?void 0:k.remaining_period_count)?/* translators: %s: current period end date */wp.i18n.sprintf(wp.i18n.__("Your plan renews on %s","surecart"),this.subscription.current_period_end_at_date):/* translators: %s: current period end date */wp.i18n.sprintf(wp.i18n.__("Your next payment is on %s","surecart"),this.subscription.current_period_end_at_date)):P}},{key:"getActivations",value:function(){var n,e,t,r;return((null===(r=null===(t=null===(e=null===(n=this.subscription)||void 0===n?void 0:n.purchase)||void 0===e?void 0:e.license)||void 0===t?void 0:t.activations)||void 0===r?void 0:r.data)||[]).filter((function(n){return null==n?void 0:n.counted}))}},{key:"renderActivations",value:function(){var n,e=this,t=this.getActivations();return(null==t?void 0:t.length)?(0,s.h)("sc-flex",{justifyContent:"flex-start",alignItems:"center"},(0,s.h)("sc-tag",{size:"small"},null===(n=null==t?void 0:t[0])||void 0===n?void 0:n.name),(null==t?void 0:t.length)>1&&(0,s.h)("sc-text",{style:{"--font-size":"var(--sc-font-size-small)",cursor:"pointer"},onClick:function(n){n.preventDefault(),n.stopImmediatePropagation(),e.activationsModal=!0}},"+ ",(null==t?void 0:t.length)-1," More")):null}},{key:"showWarning",value:function(){var n,e,t,r,i,o,a;return!(null===(n=this.subscription)||void 0===n?void 0:n.payment_method)&&!this.subscription.manual_payment&&!!["active","past_due","unpaid","incomplete"].includes(null===(e=this.subscription)||void 0===e?void 0:e.status)&&((null===(r=null===(t=this.subscription)||void 0===t?void 0:t.price)||void 0===r?void 0:r.ad_hoc)?0!==(null===(i=this.subscription)||void 0===i?void 0:i.ad_hoc_amount):0!==(null===(a=null===(o=this.subscription)||void 0===o?void 0:o.price)||void 0===a?void 0:a.amount))}},{key:"render",value:function(){var n=this;return(0,s.h)("div",{key:"cf831edde3bfc8a1216f87e2f78c2120ddfc9c08",class:"subscription-details"},this.hasPendingUpdate&&(0,s.h)("div",{key:"f952d4ff5d641ca852a9c5449846864c667ff204"},(0,s.h)("sc-tag",{key:"f30265be642e183135f2c7f7928003808220d9e6",size:"small",type:"warning"},wp.i18n.__("Update Scheduled","surecart"))),(0,s.h)("sc-flex",{key:"2cf3e8c6239499154a8f744e3c6a6956647fdf69",alignItems:"center",justifyContent:"flex-start"},(0,s.h)("sc-text",{key:"92343b43b2d3def03896baa1394deb669f0af456","aria-label":wp.i18n.sprintf(/* translators: %s: plan name */
wp.i18n.__("Plan name - %s","surecart"),this.renderName()),style:{"--font-weight":"var(--sc-font-weight-bold)"}},this.renderName()),this.renderActivations()),!this.hideRenewalText&&(0,s.h)("div",{key:"9a9f3fb6c288780c5873f26326ff1b44a52a5424"},this.renderRenewalText()," "),(0,s.h)("slot",{key:"6a3a019c11d81476846c6ce50174472d180c8721"}),(0,s.h)("sc-dialog",{key:"0ab9ac467ad2d8700e5bc57b96770cf451aeb3e8",label:wp.i18n.__("Activations","surecart"),onScRequestClose:function(){return n.activationsModal=!1},open:!!this.activationsModal},(0,s.h)("sc-card",{key:"58ae6a0b6488e824cfc335502b3355032d360f33","no-padding":!0,style:{"--overflow":"hidden"}},(0,s.h)("sc-stacked-list",{key:"a0e701f486f7e8e2644a63d4b2c973f7bcd2aef4"},(this.getActivations()||[]).map((function(n){return(0,s.h)("sc-stacked-list-row",{style:{"--columns":"2"},mobileSize:0},(0,s.h)("sc-text",{style:{"--line-height":"var(--sc-line-height-dense)"}},(0,s.h)("strong",null,null==n?void 0:n.name),(0,s.h)("div",null,(0,s.h)("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},null==n?void 0:n.fingerprint))),(0,s.h)("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},null==n?void 0:n.created_at_date))}))))),this.showWarning()&&(0,s.h)("div",{key:"7cf0247ba10ccafb275090fd87e157ad9b0217a9"},(0,s.h)("sc-tag",{key:"c80722f8068e6ea7272ce8ab14a1c7c97471eb7e",type:"warning"},(0,s.h)("div",{key:"4ff3fdd5a010557ae0c53ed94c56957c0bd1d61e",class:"subscription-details__missing-method"},(0,s.h)("sc-icon",{key:"a7f3aa814c32a8fb325193de376d7ecd8c94e7f4",name:"alert-triangle"}),wp.i18n.__("Payment Method Missing","surecart")))))}}],[{key:"watchers",get:function(){return{subscription:["handleSubscriptionChange"]}}}]);var n,e}();f.style=":host{display:block}.subscription-details{display:grid;gap:0.25em;color:var(--sc-input-label-color)}.subscription-details__missing-method{display:flex;align-items:center;gap:var(--sc-spacing-x-small)}";var v=function(){return(0,o.A)((function n(e){(0,i.A)(this,n),(0,s.r)(this,e),this.status=void 0,this.subscription=void 0,this.size="medium",this.pill=!1,this.clearable=!1}),[{key:"getType",value:function(){var n,e,t;if(null===(n=this.subscription)||void 0===n?void 0:n.cancel_at_period_end)return"info";switch(this.status||(null===(e=this.subscription)||void 0===e?void 0:e.status)){case"incomplete":case"past_due":case"unpaid":return"warning";case"trialing":return"info";case"active":case"completed":return"success";case"canceled":return(null===(t=this.subscription)||void 0===t?void 0:t.restore_at)?"info":"danger"}}},{key:"getText",value:function(){var n,e,t,r,i;if((null===(n=this.subscription)||void 0===n?void 0:n.cancel_at_period_end)&&this.subscription.current_period_end_at&&"canceled"!==(null===(e=this.subscription)||void 0===e?void 0:e.status))return(0,s.h)(s.F,null,(null===(t=this.subscription)||void 0===t?void 0:t.restore_at)?wp.i18n.__("Pauses","surecart"):wp.i18n.__("Cancels","surecart")," ",this.subscription.current_period_end_at_date);switch(this.status||(null===(r=this.subscription)||void 0===r?void 0:r.status)){case"incomplete":return wp.i18n.__("Incomplete","surecart");case"trialing":return wp.i18n.__("Trialing","surecart");case"active":return wp.i18n.__("Active","surecart");case"past_due":return wp.i18n.__("Past Due","surecart");case"canceled":return(null===(i=this.subscription)||void 0===i?void 0:i.restore_at)?"Paused":wp.i18n.__("Canceled","surecart");case"completed":return wp.i18n.__("Completed","surecart");case"unpaid":return wp.i18n.__("Unpaid","surecart")}}},{key:"render",value:function(){return(0,s.h)("sc-tag",{key:"1ac73efd661a9d997b52552ff94c963fed3fd962","aria-label":wp.i18n.sprintf(wp.i18n.__("Plan Status - %s","surecart"),this.getText()),type:this.getType()},this.getText())}}])}();v.style=":host{display:inline-block}"},45:function(n,e,t){t.d(e,{A:function(){return i}});var r=t(8587);function i(n,e){if(null==n)return{};var t,i,o=(0,r.A)(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}},8587:function(n,e,t){function r(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}t.d(e,{A:function(){return r}})}}]);