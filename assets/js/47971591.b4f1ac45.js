"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[5218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"Guidelines | Git"},a=void 0,l={unversionedId:"contribute/Programming/git-guidelines",id:"contribute/Programming/git-guidelines",title:"Guidelines | Git",description:"Make a lot of small commits",source:"@site/docs/contribute/01-Programming/11-git-guidelines.md",sourceDirName:"contribute/01-Programming",slug:"/contribute/Programming/git-guidelines",permalink:"/contribute/Programming/git-guidelines",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Guidelines | Git"},sidebar:"contribute",previous:{title:"Guidelines | Coding",permalink:"/contribute/Programming/coding-guidelines"},next:{title:"Guidelines | Documentation",permalink:"/contribute/Programming/documentation-guidelines"}},s={},c=[{value:"Make a lot of small commits",id:"make-a-lot-of-small-commits",level:2},{value:"Message style",id:"message-style",level:2},{value:"Gitmoji",id:"gitmoji",level:2},{value:"Work on a branch",id:"work-on-a-branch",level:2},{value:"Write nice Pull Requests",id:"write-nice-pull-requests",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"make-a-lot-of-small-commits"},"Make a lot of small commits"),(0,o.kt)("p",null,"As soon as you have made some progress and the code compiles, make a commit !"),(0,o.kt)("p",null,"Try to avoid mixing ",(0,o.kt)("em",{parentName:"p"},"unrelated")," changes in a single commit: If you have made lots of changes, consider pushing them in separate commits that make sense."),(0,o.kt)("h2",{id:"message-style"},"Message style"),(0,o.kt)("p",null,"Be explicit. Don't strip words from your sentence."),(0,o.kt)("p",null,"When appropriate, specify inside ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," which class / file / module is modified by the commit."),(0,o.kt)("p",null,"Example commit message: The class ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeEditor")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"is0")," module has been modified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2728 [is0::NodeEditor] Generate sceneSDF from the nodes\n")),(0,o.kt)("h2",{id:"gitmoji"},"Gitmoji"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/uBLWVxnPLP4"},"gitmoji"),"."),(0,o.kt)("p",null,"You can see the ones we use regularly in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/tooling/blob/main/gitmoji.md"},"tooling")," folder of any Cool project."),(0,o.kt)("h2",{id:"work-on-a-branch"},"Work on a branch"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Never commit directly to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"main")," branch !")," This is to avoid having to resolve merge conflicts on every commit while many people work on different aspects of the code. It is simpler that we each work on a branch, and only merge once in a while."),(0,o.kt)("p",null,"When you start working on a feature, create a dedicated branch and work there."),(0,o.kt)("p",null,"Once the feature is finished (or advanced enough that it would be interesting to merge):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"merge ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," into your branch and resolve any conflict that might arise"),(0,o.kt)("li",{parentName:"ul"},"submit a pull request and wait for the peer review"),(0,o.kt)("li",{parentName:"ul"},"once the review is done the reviewer will merge your pull request")),(0,o.kt)("h2",{id:"write-nice-pull-requests"},"Write nice Pull Requests"),(0,o.kt)("p",null,"Before you submit your PR for review:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double check the names you gave. Ask yourself: would someone who doesn't know the codebase have a clue as to what ",(0,o.kt)("inlineCode",{parentName:"li"},"functionXxx()")," does?"),(0,o.kt)("li",{parentName:"ul"},"Look for duplicated code and refactor it away."),(0,o.kt)("li",{parentName:"ul"},"Make sure the code will be easy to change in the future.")))}p.isMDXComponent=!0}}]);