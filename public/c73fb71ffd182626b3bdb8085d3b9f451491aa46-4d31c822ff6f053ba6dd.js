(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[356],{3809:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(1721),o=n(7294),i=n(5414),a=n.p+"static/logo-4f6ab1127a54ca4527a23d2f7538cb98.png";let s=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){const{image:t,url:e,description:n,isPost:r}=this.props,a=(""===this.props.title?"":`${this.props.title} · `)+"Joshua Stamps",s=[{"@context":"http://schema.org","@type":"WebSite",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/u/0/101542534057875808813","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],url:e,name:a,alternateName:n}];return r&&s.push([{"@context":"http://schema.org","@type":"BreadcrumbList",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/u/0/101542534057875808813","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],itemListElement:[{"@type":"ListItem",position:1,item:{"@id":e,name:a,image:t}}]},{"@context":"http://schema.org","@type":"BlogPosting",sameAs:["https://twitter.com/stamps_dev","https://plus.google.com/","https://www.github.com/jstamps91","https://www.linkedin.com/in/joshua-stamps"],url:e,name:a,alternateName:`${e} | Joshua Stamps`,headline:a,image:{"@type":"ImageObject",url:t},description:n}]),o.createElement(i.Z,null,o.createElement("title",null,a),o.createElement("meta",{name:"description",content:n}),o.createElement("meta",{name:"image",content:t}),o.createElement("script",{type:"application/ld+json"},JSON.stringify(s)),o.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.createElement("meta",{name:"twitter:site",content:"@stamps_dev"}),o.createElement("meta",{name:"twitter:creator",content:"@stamps_dev"}),o.createElement("meta",{name:"twitter:title",content:a}),o.createElement("meta",{name:"twitter:description",content:n}),o.createElement("meta",{name:"twitter:image",content:t}))},e}(o.PureComponent);s.defaultProps={title:"Joshua Stamps",image:`https://jstamps.dev${a}`,url:"https://jstamps.dev/",description:"Joshua Stamps - Software Engineer",isPost:!1}},9155:function(t,e,n){"use strict";n.d(e,{L:function(){return r},B:function(){return o}});const r={home:"",blog:"Blog",about:"About",portfolio:"Portfolio",contact:"Contact"},o=t=>{for(const e of t)if(!e.includes(" "))return e;return t[0]}},1989:function(t,e,n){var r=n(1789),o=n(401),i=n(7667),a=n(1327),s=n(1866);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},8407:function(t,e,n){var r=n(7040),o=n(4125),i=n(2117),a=n(7518),s=n(4705);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},7071:function(t,e,n){var r=n(852)(n(5639),"Map");t.exports=r},3369:function(t,e,n){var r=n(4785),o=n(1285),i=n(6e3),a=n(9916),s=n(5265);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=a,c.prototype.set=s,t.exports=c},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},8470:function(t,e,n){var r=n(7813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},7786:function(t,e,n){var r=n(1811),o=n(327);t.exports=function(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[o(e[n++])];return n&&n==i?t:void 0}},4239:function(t,e,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},8458:function(t,e,n){var r=n(3560),o=n(5346),i=n(3218),a=n(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:s).test(a(t))}},531:function(t,e,n){var r=n(2705),o=n(9932),i=n(1469),a=n(3448),s=r?r.prototype:void 0,c=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},1811:function(t,e,n){var r=n(1469),o=n(5403),i=n(5514),a=n(9833);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:i(a(t))}},4429:function(t,e,n){var r=n(5639)["__core-js_shared__"];t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},5050:function(t,e,n){var r=n(7019);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},852:function(t,e,n){var r=n(8458),o=n(7801);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},9607:function(t,e,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},1789:function(t,e,n){var r=n(4536);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},1327:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},1866:function(t,e,n){var r=n(4536);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},5403:function(t,e,n){var r=n(1469),o=n(3448),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},7019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:function(t,e,n){var r,o=n(4429),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,e,n){var r=n(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},2117:function(t,e,n){var r=n(8470);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},7518:function(t,e,n){var r=n(8470);t.exports=function(t){return r(this.__data__,t)>-1}},4705:function(t,e,n){var r=n(8470);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},4785:function(t,e,n){var r=n(1989),o=n(8407),i=n(7071);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},1285:function(t,e,n){var r=n(5050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},6e3:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).get(t)}},9916:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).has(t)}},5265:function(t,e,n){var r=n(5050);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},4523:function(t,e,n){var r=n(8306);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},4536:function(t,e,n){var r=n(852)(Object,"create");t.exports=r},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},5514:function(t,e,n){var r=n(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}));t.exports=a},327:function(t,e,n){var r=n(3448);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:function(t,e,n){var r=n(7786);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},1469:function(t){var e=Array.isArray;t.exports=e},3560:function(t,e,n){var r=n(4239),o=n(3218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},8306:function(t,e,n){var r=n(3369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}}}]);
//# sourceMappingURL=c73fb71ffd182626b3bdb8085d3b9f451491aa46-4d31c822ff6f053ba6dd.js.map