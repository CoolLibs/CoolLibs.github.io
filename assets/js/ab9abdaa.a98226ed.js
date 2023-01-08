"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[1930],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s=void 0,p={unversionedId:"lab/Writing Nodes/Color Spaces",id:"lab/Writing Nodes/Color Spaces",title:"Color Spaces",description:"There exist quite a few different color spaces and alpha spaces. They all have a reason to be and address a different aspect of the complex problem that is color representation. Understanding the differences between these spaces is essential to determine which space will be better suited for the node you want to implement.",source:"@site/docs/lab/03-Writing Nodes/40-Color Spaces.md",sourceDirName:"lab/03-Writing Nodes",slug:"/lab/Writing Nodes/Color Spaces",permalink:"/lab/Writing Nodes/Color Spaces",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"lab",previous:{title:"Presets",permalink:"/lab/Writing Nodes/Presets"},next:{title:"Output Indices",permalink:"/lab/Writing Nodes/Output Indices"}},u=[{value:"Color Spaces",id:"color-spaces",children:[{value:"CIELAB",id:"cielab",children:[],level:3},{value:"HSLuv",id:"hsluv",children:[],level:3},{value:"Linear RGB",id:"linear-rgb",children:[],level:3},{value:"sRGB",id:"srgb",children:[],level:3}],level:2},{value:"Alpha Spaces",id:"alpha-spaces",children:[{value:"Premultiplied",id:"premultiplied",children:[],level:3},{value:"Straight",id:"straight",children:[],level:3}],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There exist quite a few different color spaces and alpha spaces. They all have a reason to be and address a different aspect of the complex problem that is color representation. Understanding the differences between these spaces is essential to determine which space will be better suited for the node you want to implement."),(0,i.kt)("h2",{id:"color-spaces"},"Color Spaces"),(0,i.kt)("p",null,"You can watch this presentation to get of good first introduction to color spaces: ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/AS1OHMW873s"},"RGB to XYZ: The Science and History of Color"),"."),(0,i.kt)("p",null,"If you have the choice between several color spaces because your effect will work the same in any of those, here is a list in order of which to prefer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CIELAB"),(0,i.kt)("li",{parentName:"ul"},"Linear RGB"),(0,i.kt)("li",{parentName:"ul"},"sRGB"),(0,i.kt)("li",{parentName:"ul"},"HSLuv")),(0,i.kt)("p",null,"Now let's see why you might prefer one space over another:"),(0,i.kt)("h3",{id:"cielab"},"CIELAB"),(0,i.kt)("p",null,"In this space the euclidean distance between the ",(0,i.kt)("inlineCode",{parentName:"p"},"vec3"),"s accurately represents the perceived difference in color by a human. This means that if you need to do anything that is perceptually accurate, e.g. blending between two colors, CIELAB is what you need.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"This is the space that most effects will want to use.")),(0,i.kt)("p",null,"The first component stores the lightness, a number between 0 and 1.",(0,i.kt)("br",null),"\nThe second and third components store chromaticity information. They don't have a specific range."),(0,i.kt)("h3",{id:"hsluv"},"HSLuv"),(0,i.kt)("p",null,"You might already be familiar with HSL (Hue - Saturation - Lightness); ",(0,i.kt)("a",{parentName:"p",href:"https://www.hsluv.org/"},"HSLuv")," is simply a perceptually-accurate version of it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This is what you will want to use in nodes that directly manipulate either the hue and / or the saturation.")," (Note that CIELAB also gives you access to the lightness so there is no need to use HSLuv if you are only interested in the lightness)."),(0,i.kt)("p",null,"The three channels are numbers between 0 and 1."),(0,i.kt)("h3",{id:"linear-rgb"},"Linear RGB"),(0,i.kt)("p",null,"When doing physically-based rendering in 3D, you are using Linear RGB because you are manipulating amounts of light (photons) and adding them together.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"This is why this space will be the one that a 3D renderer will manipulate and output.")),(0,i.kt)("p",null,"All the three channels are numbers between 0 and 1."),(0,i.kt)("h3",{id:"srgb"},"sRGB"),(0,i.kt)("p",null,"This is the standard input and output format. All the colors in our UI are expressed in sRGB, and all the images you will import most likely contain sRGB values. If you go to any color picker / color palette website, they will give you values in sRGB.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Effects hardly ever need to manipulate sRGB though"),", because this space is neither perceptually nor physically correct."),(0,i.kt)("p",null,"All the three channels are numbers between 0 and 1."),(0,i.kt)("h2",{id:"alpha-spaces"},"Alpha Spaces"),(0,i.kt)("h3",{id:"premultiplied"},"Premultiplied"),(0,i.kt)("p",null,"Premultiplied alpha is when the color components have been multiplied by the alpha. This might sound like a surprising thing to do, but it actually helps effects like blurring and blending to behave properly. ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E&t=960"},"See this great lesson"),".",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"This is why premultiplied alpha will almost always be what you want to use.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NB: for Color->Color effects that don't use the alpha, if some premultiplied alpha is plugged in as input we first un-premultiply the color, then pass it to the effect, then re-premultiply. This is the same behavior as ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/klqSJiPqmGU"},'"Pre-Divide / Post-Multiply" in Resolve/Fusion'),". This basically means that everything will work as expected intuitively and you don't have to worry about it.")),(0,i.kt)("h3",{id:"straight"},"Straight"),(0,i.kt)("p",null,"Straight alpha is what most people know. This is what is used in our UI and what any imported image will most likely use. ",(0,i.kt)("strong",{parentName:"p"},"Effects will hardly ever need to use it though")," because it doesn't work quite as good as premultiplied alpha."))}h.isMDXComponent=!0}}]);