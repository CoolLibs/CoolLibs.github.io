"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[2803],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,h=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},702:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Camera",date:new Date("2021-05-23T22:46:44.000Z"),author:"jules",tags:[],toc:!0,draft:!1},l=void 0,p={permalink:"/home/blog/camera",source:"@site/blog/camera.md",title:"Camera",description:"Separate the data from the controller",date:"2021-05-23T22:46:44.000Z",formattedDate:"May 23, 2021",tags:[],readingTime:.67,truncated:!1,authors:[{name:"jules"}],prevItem:{title:"Single Source of Truth",permalink:"/home/blog/single-source-of-truth"},nextItem:{title:"Long Blog Post",permalink:"/home/blog/long-blog-post"}},u={authorsImageUrls:[void 0]},s=[{value:"Separate the data from the controller",id:"separate-the-data-from-the-controller",children:[]},{value:"How separate should the view and the projection be ?",id:"how-separate-should-the-view-and-the-projection-be-",children:[]},{value:"What&#39;s the point of clipping at a near and far plane ?",id:"whats-the-point-of-clipping-at-a-near-and-far-plane-",children:[]},{value:"Don&#39;t confuse projection and perspective",id:"dont-confuse-projection-and-perspective",children:[]}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"separate-the-data-from-the-controller"},"Separate the data from the controller"),(0,a.kt)("p",null,"Especially since there can be different ways of controlling a camera (trackball, freefly, turntable, etc.)"),(0,a.kt)("h2",{id:"how-separate-should-the-view-and-the-projection-be-"},"How separate should the view and the projection be ?"),(0,a.kt)("p",null,"Although we tend to separate these into two matrices (and for good reasons), they should still stay together in a same class, because we need both to define a camera frustum. For example, to compute a ray passing through a given pixel, we need both the view and the projection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Ray Camera::rayThroughPixel(const glm::vec2& positionInPixels) {\n    glm::vec3 pos = position();\n    glm::vec3 pixelPos = glm::unProject(glm::vec3(positionInPixels, 0.0f), viewMatrix(), projMatrix(), glm::vec4(0.0f, 0.0f, RenderState::Size().width(), RenderState::Size().height()));\n    glm::vec3 dir = pixelPos - pos;\n    return Ray(pos, dir);\n}\n")),(0,a.kt)("h2",{id:"whats-the-point-of-clipping-at-a-near-and-far-plane-"},"What's the point of clipping at a near and far plane ?"),(0,a.kt)("h2",{id:"dont-confuse-projection-and-perspective"},"Don't confuse projection and perspective"))}d.isMDXComponent=!0}}]);