"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[6165],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=r,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return t?o.createElement(d,l(l({ref:n},p),{},{components:t})):o.createElement(d,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7595:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],c={title:"One or Many Repos",date:new Date("2021-06-05T16:35:44.000Z"),author:"jules",tags:[],toc:!0,draft:!1},i=void 0,u={permalink:"/home/blog/one-or-many-repos",source:"@site/blog/one-or-many-repos.md",title:"One or Many Repos",description:"One repo for all the Cool modules",date:"2021-06-05T16:35:44.000Z",formattedDate:"June 5, 2021",tags:[],readingTime:.435,truncated:!1,authors:[{name:"jules"}],prevItem:{title:"Parameters",permalink:"/home/blog/parameters"},nextItem:{title:"Unit Type-System",permalink:"/home/blog/unit-type-system"}},p={authorsImageUrls:[void 0]},s=[{value:"One repo for all the Cool modules",id:"one-repo-for-all-the-cool-modules",children:[]},{value:"One repo for each Cool module",id:"one-repo-for-each-cool-module",children:[]}],f={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"one-repo-for-all-the-cool-modules"},"One repo for all the Cool modules"),(0,a.kt)("p",null,"All modules are always up-to-date with one another. Since users have only one repo to pull from, this is always a working version (unlike having many repos, each one relying on a specific version of the other ones)."),(0,a.kt)("p",null,"Changing the API only requires one single Rename operation on the whole project."),(0,a.kt)("h2",{id:"one-repo-for-each-cool-module"},"One repo for each Cool module"),(0,a.kt)("p",null,"Users can choose which ones they want to download and which ones they don't need."),(0,a.kt)("p",null,"Encourages more decoupling between the modules."))}m.isMDXComponent=!0}}]);