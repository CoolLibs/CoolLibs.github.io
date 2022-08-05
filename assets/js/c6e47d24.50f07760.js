"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[1799],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),h=i,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2260:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={title:"Guidelines | Coding"},l=void 0,d={unversionedId:"contribute/Programming/coding-guidelines",id:"contribute/Programming/coding-guidelines",title:"Guidelines | Coding",description:"Keep functions short",source:"@site/docs/contribute/01-Programming/10-coding-guidelines.md",sourceDirName:"contribute/01-Programming",slug:"/contribute/Programming/coding-guidelines",permalink:"/contribute/Programming/coding-guidelines",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Guidelines | Coding"},sidebar:"contribute",previous:{title:"Workflow | Create a new library",permalink:"/contribute/Programming/creating-a-new-library"},next:{title:"Guidelines | Git",permalink:"/contribute/Programming/git-guidelines"}},c=[{value:"Keep functions short",id:"keep-functions-short",children:[],level:2},{value:"Prefer free functions",id:"prefer-free-functions",children:[],level:2},{value:"Appreciate simple structs",id:"appreciate-simple-structs",children:[],level:2},{value:"Keep cohesion inside your classes",id:"keep-cohesion-inside-your-classes",children:[],level:2},{value:"Use behavioural inheritance with great care",id:"use-behavioural-inheritance-with-great-care",children:[],level:2},{value:"Name with empathy",id:"name-with-empathy",children:[],level:2},{value:"Fix bugs as you see them",id:"fix-bugs-as-you-see-them",children:[],level:2},{value:"Refer to the C++ Core Guidelines",id:"refer-to-the-c-core-guidelines",children:[],level:2},{value:"Write debug checks",id:"write-debug-checks",children:[],level:2},{value:"Coding style",id:"coding-style",children:[{value:"Snake Case",id:"snake-case",children:[],level:3},{value:"Member variables",id:"member-variables",children:[],level:3},{value:"Formatting",id:"formatting",children:[],level:3},{value:"No const on by-value parameters",id:"no-const-on-by-value-parameters",children:[],level:3},{value:"Use trailing return types",id:"use-trailing-return-types",children:[],level:3},{value:"Initialize with <code>{}</code>",id:"initialize-with-",children:[],level:3},{value:"Distinguish pointers and references",id:"distinguish-pointers-and-references",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keep-functions-short"},"Keep functions short"),(0,o.kt)("p",null,"This helps a lot with code readability and code reuse."),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/write-small-functions/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As soon as a function becomes too long, split it into several smaller functions."))),(0,o.kt)("h2",{id:"prefer-free-functions"},"Prefer free functions"),(0,o.kt)("p",null,"They help a lot with decoupling, code reuse, testing, ",(0,o.kt)("em",{parentName:"p"},"etc.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," This doesn't mean that member functions are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a member function is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function."),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All the free functions related to a class ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassName")," should be put in a namespace called ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassNameU"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"U"),' stands for "Utility".'))),(0,o.kt)("h2",{id:"appreciate-simple-structs"},"Appreciate simple structs"),(0,o.kt)("p",null,"They are amazing to group data together, and make for very great abstractions. As long as your data doesn't have to respect any invariant, a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," is preferable to a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," because it is simpler."),(0,o.kt)("p",null,"Often they will help with parameter passing: if you realize that you are passing the same 4 arguments around, then it probably means that there is room for an abstraction here. Puting these 4 values into a struct makes the intent clearer, and also reduces knowledge duplication (if you at some point need to add a 5th value to achieve what you need to do, you don't have to edit a bunch of functions that had the same 4 parameters, you can just edit the struct)."),(0,o.kt)("p",null,"With C++ 20's ",(0,o.kt)("em",{parentName:"p"},"designated initializers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"struct"),"s have become even more awesome: they make your code more readable and allow for named parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// Not readable at all! You have to go look up what WindowConfig is.\nCool::run<App>({Cool::WindowConfig{"Cool Lab",\n                                   1280,\n                                   720,\n                                   true,\n                                   false}});\n\n// Completely clear\nCool::run<App>({Cool::WindowConfig{.title                       = "Cool Lab",\n                                   .initial_width               = 1280,\n                                   .initial_height              = 720,\n                                   .cap_framerate_on_startup_if = true,\n                                   .maximize_on_startup_if      = false}});\n')),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("h2",{id:"keep-cohesion-inside-your-classes"},"Keep cohesion inside your classes"),(0,o.kt)("p",null,"A class should not be too big, and should not be handling the details of more than one system. If you start to see different and independent bits of logic grow inside a class, then separate them in two classes."),(0,o.kt)("p",null,"In short, follow the Single Responsibility Principle."),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("h2",{id:"use-behavioural-inheritance-with-great-care"},"Use behavioural inheritance with great care"),(0,o.kt)("p",null,"Class hierarchies can easily become wild and hard to understand. Also, there are very few domains that are actually accurately modeled by a hierarchical structure. This means that often (in poorly designed class hierarchies), some child classes end up inheriting things that they don't need, because there isn't a strict ",(0,o.kt)("em",{parentName:"p"},"is a")," relationship between them and their parents."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Composition")," is much more flexible than inheritance and should be prefered in most cases. By using small structs and free functions you can achieve the same code reuse as with inheritance, but with less coupling! (And actually it is even easier to reuse code this way)."),(0,o.kt)("p",null,"If you are want polymorphism, you can achieve it dynamically through ",(0,o.kt)("inlineCode",{parentName:"p"},"std::variant")," or ",(0,o.kt)("em",{parentName:"p"},"type erasure"),", and statically through ",(0,o.kt)("em",{parentName:"p"},"function overloading")," and ",(0,o.kt)("em",{parentName:"p"},"templates"),"."),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("h2",{id:"name-with-empathy"},"Name with empathy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Naming is important (and hard)"),", so please be mindful when you choose a name. Be explicit, ",(0,o.kt)("strong",{parentName:"p"},"don't be too afraid of long names"),". And most importantly: make sure the name describes what the thing is, nothing more, nothing less.\nAlso, ",(0,o.kt)("strong",{parentName:"p"},"don't hesitate to rename")," as soon as you find a better name to describe what your thing actually is or does. (And by the way, ",(0,o.kt)("em",{parentName:"p"},"right click -> Rename")," is an amazing feature)."),(0,o.kt)("p",null,"The ideal name is very concise and allows readers to instantly understand what the thing is / does.\nIf you can't find such a name, then the second best thing is a long name that still perfectly describes the object.\nOnly misleading names are bad and not tolerated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/FyCYva9DhsI?t=2494"},"About naming")," (watch from 41:34 to 51:30 if you want to laugh a lot) (By the way, watch the whole conference it's great)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/MBRoCdtZOYg"},"A whole conference by Kate Gregory"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To help you find good names, imagine yourself explaining to someone what the function does (or even better, actually find someone and explain it to them). Listen to the words that you will naturally say: they will often be a very good name for your function. And even if it is a full sentence, a long name is better than a bad one."))),(0,o.kt)("p",null,"To learn more: ",(0,o.kt)("a",{parentName:"p",href:"https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/naming/"},(0,o.kt)("em",{parentName:"a"},"Learn Clean Code with C++")),"."),(0,o.kt)("h2",{id:"fix-bugs-as-you-see-them"},"Fix bugs as you see them"),(0,o.kt)("p",null,"Or at least write them down ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/CoolLibs/projects/1/views/1"},"in our To-Do list"),".",(0,o.kt)("br",null),"\nNo codebase is perfect and bugs and poor code exist everywhere. If you think you just spotted one, take a deeper look into it. Try to fix it or at least raise other people's attention about it."),(0,o.kt)("h2",{id:"refer-to-the-c-core-guidelines"},"Refer to the ",(0,o.kt)("a",{parentName:"h2",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines"},"C++ Core Guidelines")),(0,o.kt)("p",null,"There are a lot of great people out there that have gathered a big list of great ideas and best practices."),(0,o.kt)("p",null,"You can start by watching this amazing conference:"),(0,o.kt)("iframe",{width:"880",height:"495",src:"https://www.youtube.com/embed/XkDEzfpdcSg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"write-debug-checks"},"Write debug checks"),(0,o.kt)("p",null,"If there is some invariant that must be verified, add debug checks to make sure users of your code don't mess up!\nYou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"assert()")," in the simpler cases, but sometimes you will need to add variables to keep track of some state. In that case, wrap the debug code in a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#if DEBUG\n// . . .\n#endif\n")),(0,o.kt)("p",null,"block so that it doesn't impact release build performance."),(0,o.kt)("p",null,"An example would be to make sure an initialization function is called once, and only once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass {\npublic:\n    void initialize() {\n#if DEBUG\n        assert(!_is_initialized);\n        _is_initialized = true;\n#endif\n        // . . .\n    }\n\n    void use_my_class() {\n        assert(_is_initialized);\n        // . . .\n    }\n\nprivate:\n#if DEBUG\n    bool _is_initialized = false;\n#endif\n};\n")),(0,o.kt)("h2",{id:"coding-style"},"Coding style"),(0,o.kt)("p",null,"Coding styles don't matter, and that's why we simply have to choose one and stick to it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"There is no right answer")," to where you should put your curly braces, or whether you shoud use camelCase or snake_case. If there was, all the developers of the world would have agreed on it years ago."),(0,o.kt)("h3",{id:"snake-case"},"Snake Case"),(0,o.kt)("p",null,"I used to use camelCase, and then started to learn Rust which forces you to use snake_case. And well, after a short period of adaptation I started really enjoying snake case because the separation between words is clearer, and therefore long names are easier to read."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("em",{parentName:"li"},"snake_case")," for variables and functions."),(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("em",{parentName:"li"},"PascalCase")," for types, namespaces and enum values.")),(0,o.kt)("h3",{id:"member-variables"},"Member variables"),(0,o.kt)("p",null,"They are prefixed with an underscore like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass {\n    // ...\nprivate:\n    float _my_member_variable = 0.f;\n};\n")),(0,o.kt)("h3",{id:"formatting"},"Formatting"),(0,o.kt)("p",null,"We use the famous ",(0,o.kt)("inlineCode",{parentName:"p"},"clang-format")," as our formatting tool. You will need to install it (on Windows this happens through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Installer"),": modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Build Tools")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"C++ Clang Tools for Windows"),")."),(0,o.kt)("p",null,"Then for VS Code I recommend this extension: ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=xaver.clang-format"},"xaver.clang-format"),"; and you should enable ",(0,o.kt)("inlineCode",{parentName:"p"},"Format on Save")," in your VS Code settings. After that it should just work."),(0,o.kt)("p",null,"Note that in some very specific cases you can disable ",(0,o.kt)("inlineCode",{parentName:"p"},"clang-format")," locally to use some non-standard formatting, using these special comments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// clang-format off\nvoid on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }\nvoid on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }\nvoid on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }\nvoid on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }\n// clang-format on\n")),(0,o.kt)("h3",{id:"no-const-on-by-value-parameters"},"No const on by-value parameters"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don't")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void do_something(const int some_parameter) {/*...*/}\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Do")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void do_something(int some_parameter) {/*...*/}\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," This doesn't apply to references! They should be declared ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," whenever you don't intend to mutate the argument: ",(0,o.kt)("inlineCode",{parentName:"p"},"void do_something(const SomeClass& some_parameter); // GOOD")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reason:")," This clutters the declaration and brings little information. It is already implicit that parameters are not gonna be mutated."),(0,o.kt)("h3",{id:"use-trailing-return-types"},"Use trailing return types"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don't")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"bool do_something();\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Do")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"auto do_something() -> bool;\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Do")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void do_something();\n")))),(0,o.kt)("h3",{id:"initialize-with-"},"Initialize with ",(0,o.kt)("inlineCode",{parentName:"h3"},"{}")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Don't")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int a = 5;\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Do")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int a{5};\n")))),(0,o.kt)("h3",{id:"distinguish-pointers-and-references"},"Distinguish pointers and references"),(0,o.kt)("p",null," (nb: no raw pointers, that's another story)"))}m.isMDXComponent=!0}}]);