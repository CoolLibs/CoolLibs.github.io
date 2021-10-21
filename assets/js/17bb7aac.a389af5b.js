"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[5898],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1534:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={title:"Details you need to know"},u=void 0,p={unversionedId:"tutorials/details",id:"tutorials/details",isDocsHomePage:!1,title:"Details you need to know",description:"imgui.ini",source:"@site/docs/tutorials/03-details.md",sourceDirName:"tutorials",slug:"/tutorials/details",permalink:"/home/docs/tutorials/details",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Details you need to know"},sidebar:"tutorials",previous:{title:"Compiling your first project",permalink:"/home/docs/tutorials/building"}},s=[{value:"imgui.ini",id:"imguiini",children:[]},{value:"Logging",id:"logging",children:[]},{value:"OpenGL",id:"opengl",children:[{value:"GLDebug",id:"gldebug",children:[]},{value:"Modern Debugging (requires OpenGL 4.3 or later)",id:"modern-debugging-requires-opengl-43-or-later",children:[]}]}],c={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"imguiini"},"imgui.ini"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"imgui.ini")," file stores the position and size of our ImGui windows. It is nice to have it on the repo so that anyone cloning it will get a nice UI layout from the get go."),(0,i.kt)("p",null,"But you might want to do "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git update-index --assume-unchanged imgui.ini\n")),(0,i.kt)("p",null,"to ignore it from your commits (It does change every time you move a window in your app, so basically it would be present in every commit)."),(0,i.kt)("p",null,"You should only commit it once in a while, when new windows are added for example."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"To log to the console, use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Log::info("You can use a variable, or a string like this one, which can be templated with some curly braces like so : {} {}", variable1ThatWillGoInTheCurlyBraces, variable2);\nLog::warn("same parameters");\nLog::error("same parameters");\n')),(0,i.kt)("p",null,"The difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," outputs green text, ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," is yellow and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," is red.\nAlso, ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," will trigger a breakpoint (you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"error_without_breakpoint")," instead if you don't want that behaviour)."),(0,i.kt)("p",null,"Note that those logs will be removed in release builds.\nIf you want to display a message to the end user, use ",(0,i.kt)("inlineCode",{parentName:"p"},"Log::ToUser")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," (you will need to include ",(0,i.kt)("inlineCode",{parentName:"p"},"<Cool/Log/ToUser.h> "),")."),(0,i.kt)("h2",{id:"opengl"},"OpenGL"),(0,i.kt)("h3",{id:"gldebug"},"GLDebug"),(0,i.kt)("p",null,"Always wrap your OpenGL calls in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GLDebug(...)")," macro. It will add debug checks even if your computer doesn't support modern OpenGL debugging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"GLDebug(GLuint program_id = glCreateProgram());\nGLDebug(glLinkProgram(program_id));\nGLDebug(glValidateProgram(program_id));\n")),(0,i.kt)("h3",{id:"modern-debugging-requires-opengl-43-or-later"},"Modern Debugging (requires OpenGL 4.3 or later)"),(0,i.kt)("p",null,"Modern debugging happens automatically."),(0,i.kt)("p",null,"You can ignore some warnings and control the look of the messages in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," module, under ",(0,i.kt)("inlineCode",{parentName:"p"},"internal/GLDebugCallback.h"),"."))}d.isMDXComponent=!0}}]);