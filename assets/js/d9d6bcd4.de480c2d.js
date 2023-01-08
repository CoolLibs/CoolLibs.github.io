"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[6902],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"lab/Writing Nodes/Output Indices",id:"lab/Writing Nodes/Output Indices",title:"Output Indices",description:"Some nodes can output some values that can be used by the nodes that come before them. This is typically used by nodes that duplicate their input, so that said input can change between each iteration / instantiation.",source:"@site/docs/lab/03-Writing Nodes/50-Output Indices.md",sourceDirName:"lab/03-Writing Nodes",slug:"/lab/Writing Nodes/Output Indices",permalink:"/lab/Writing Nodes/Output Indices",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"lab",previous:{title:"Color Spaces",permalink:"/lab/Writing Nodes/Color Spaces"},next:{title:"Helper functions",permalink:"/lab/Writing Nodes/Helper functions"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some nodes can output some values that can be used by the nodes that come before them. This is typically used by nodes that duplicate their input, so that said input can change between each iteration / instantiation.",(0,o.kt)("br",null),"\nSuch outputs are declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," keyword, must have a name that starts and ends with backticks (","`",") and must be of type ",(0,o.kt)("inlineCode",{parentName:"p"},"float"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". If your output is an int, just cast it to a float. If your output is a vector, just declare several outputs."),(0,o.kt)("p",null,"You can then simply assign to your output whenever it needs to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'title="Render N Times.clbnode"',title:'"Render',N:!0,'Times.clbnode"':!0},"INPUT UV->CIELAB_PremultipliedA `Image`;\nINPUT int `N`;\nINPUT(CIELAB_PremultipliedA, CIELAB_PremultipliedA)->CIELAB_PremultipliedA `Blend Mode`;\n\nOUTPUT float `Index`;\n\nCIELAB_PremultipliedA main(UV uv)\n{\n    vec4 color = vec4(0.);\n\n    for (int i = 0; i < `N`; ++i)\n    {\n        `Index` = float(i); // Set `Index` before calling our INPUT `Image` function that might depend on that `Index`.\n        color   = `Blend Mode`(`Image`(uv), color);\n    }\n\n    return color;\n}\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Setting the current index should be the first thing you do before calling any of your INPUT functions. This is very important in order to ensure they will see the correct index when they execute."))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"If you have a use case for outputs that are not of type float, feel free to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CoolLibs/Lab/issues/new?assignees=&labels=enhancement%2Ctriage&template=feature-suggestion.yaml&title=%5BFeature%5D+"},"contact us")," and we will happily consider your use case and improve CoolLab to make it fit your needs.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);