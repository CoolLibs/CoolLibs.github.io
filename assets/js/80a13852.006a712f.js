"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[7610],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3809:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const l={title:"Compiling your first project"},a=void 0,i={unversionedId:"cool/building",id:"cool/building",title:"Compiling your first project",description:"Clone",source:"@site/docs/cool/02-building.md",sourceDirName:"cool",slug:"/cool/building",permalink:"/cool/building",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Compiling your first project"},sidebar:"cool",previous:{title:"Welcome",permalink:"/cool"},next:{title:"Details you need to know",permalink:"/cool/details"}},c={},u=[{value:"Clone",id:"clone",level:2},{value:"Vulkan",id:"vulkan",level:2},{value:"Build",id:"build",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clone"},"Clone"),(0,r.kt)("p",null,"Since we use Git submodules you need to clone them alongside the project. The easiest way is to use the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone --recursive https://github.com/CoolLibs/Lab\n")),(0,r.kt)("p",null,"If later on while compiling you get an error like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"include could not find requested file:\n  Cool/cmake/IncludeMe.cmake\n")),(0,r.kt)("p",null,"it most likely means you forgot the submodules. To grab them after having cloned the project, use "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git submodule update --init --recursive\n")),(0,r.kt)("h2",{id:"vulkan"},"Vulkan"),(0,r.kt)("p",null,"If you want to use Vulkan instead of OpenGL you will need to ",(0,r.kt)("a",{parentName:"p",href:"https://vulkan.lunarg.com/sdk/home"},"install the Vulkan SDK"),"."),(0,r.kt)("p",null,"Note that this is not required to get started with the Demo."),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/download/"},"CMake"),". If you already have it, make sure you have version 3.20 or greater."),(0,r.kt)("p",null,"Then we recommend to use this VS Code extension: ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools"},"ms-vscode.cmake-tools"),". You will need to setup the extension with a compiler. Here is ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/cpp/cmake-linux"},"the tutorial"),". It is based on Linux but at the bottom of the page you will find the explanations to adapt it for ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/cpp/config-msvc"},"Windows")," and ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/cpp/config-clang-mac"},"Mac"),"."))}d.isMDXComponent=!0}}]);