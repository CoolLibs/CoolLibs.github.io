"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[213],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},489:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Parameters",date:new Date("2021-06-13T10:11:45.000Z"),author:"jules",tags:[],toc:!0,draft:!1},s=void 0,l={permalink:"/home/blog/parameters",source:"@site/blog/parameters.md",title:"Parameters",description:"The concept of a parameter is a value that you can modify through the UI, query throughout the different systems, create presets for, track changes in an history, and so on.",date:"2021-06-13T10:11:45.000Z",formattedDate:"June 13, 2021",tags:[],readingTime:.84,truncated:!1,authors:[{name:"jules"}],prevItem:{title:"Registry",permalink:"/home/blog/registry"},nextItem:{title:"One or Many Repos",permalink:"/home/blog/one-or-many-repos"}},u={authorsImageUrls:[void 0]},p=[{value:"A common interface",id:"a-common-interface",children:[]},{value:"Parameters.h",id:"parametersh",children:[]},{value:"AnyParameter.h",id:"anyparameterh",children:[]}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The concept of a parameter is a value that you can modify through the UI, query throughout the different systems, create presets for, track changes in an history, and so on."),(0,o.kt)("p",null,"Basically, this is a value that has meaning for the user and we want to provide as many utilities around it as possible."),(0,o.kt)("h2",{id:"a-common-interface"},"A common interface"),(0,o.kt)("p",null,"We currently provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"IParameter")," interface. It is not strictly required since the polymorphism is achieved through templates rather than subtyping (inheritance), but it allows us to benefit from the amazing ",(0,o.kt)("inlineCode",{parentName:"p"},"override")," keyword and also make sure we don't forget to implement any required method."),(0,o.kt)("p",null,"This approach could probably be replaced or at least complemented with C++20's concepts."),(0,o.kt)("h2",{id:"parametersh"},"Parameters.h"),(0,o.kt)("p",null,"This file simply provides all the different parameters : Parameter::Float, Parameter::Color and so on.\nThis is what you need to include to create parameters"),(0,o.kt)("h2",{id:"anyparameterh"},"AnyParameter.h"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AnyParameter")," is a std::variant that can be any of the parameter types. This is what is used in order to achieve polymorphism in ",(0,o.kt)("inlineCode",{parentName:"p"},"ParameterDynamicList")))}f.isMDXComponent=!0}}]);