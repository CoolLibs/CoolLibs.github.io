"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/gouvernance-model-of-open-softwares","metadata":{"permalink":"/blog/gouvernance-model-of-open-softwares","source":"@site/blog/gouvernance-model-of-open-softwares.md","title":"How do open source software organize themself ?","description":"Cool and CoolLab are open source softwares (and even free software, see this article for more informations INSERER LIEN ARTICLE ) meaning their source code - how the program is written in binary or in programming languages - is available for anyone having a copy of the software. In consequence, any willing developers can use, modify and redistribute the software. Thus, programmers having access to the source code can change a program by adding to it, changing it or fixing parts that are non working properly. Oftenly, open source software comes with a specific license, specifying precisely to what extent these modifications or redistributions can be done - for instance, one may prohibit a commercial use of their products, or someone copying a version of their code to sell it online.","date":"2022-08-23T08:07:37.746Z","formattedDate":"August 23, 2022","tags":[],"readingTime":4.8,"truncated":true,"authors":[{"name":"Yvan Smorag","key":"yvan"}],"frontMatter":{"title":"How do open source software organize themself ?","authors":"yvan"},"nextItem":{"title":"Shader Programming made Functional","permalink":"/blog/2022/08/23/shader-programming-made-functional"}},"content":"Cool and CoolLab are open source softwares (and even free software, see this **article** for more informations **INSERER LIEN ARTICLE** ) meaning their source code - how the program is written in binary or in programming languages - is available for anyone **having a copy of the software**. In consequence, any willing developers can use, modify and redistribute the software. Thus, programmers having access to the source code can change a program by adding to it, changing it or fixing parts that are non working properly. Oftenly, open source software comes with a specific license, specifying precisely to what extent these modifications or redistributions can be done - for instance, one may prohibit a commercial use of their products, or someone copying a version of their code to sell it online. <br></br>\\nIn our case, CoolLab is provided with a [MIT license](https://github.com/CoolLibs/Cool/blob/main/LICENSE), allowing any modification, use or selling, without charge to anyone having a copy of the software - [freely available on GitHub](https://github.com/CoolLibs/Cool). Whatever you wanna do, you can.  \\n \\nOpen source software often begins that way : a single person, or a bunch of developers wants to make a specific program. They begin to develop it, and end up proposing it to anyone. Little by little, a community forms itself around the project, and people that were not involved in the project at the beginning start to write some code, new features, propose new designs and ideas, fix bugs : open software is the result of communities of developers. Unlike to companies though, communities are horizontal, everyone can contribute (with a peer-review system of course), and there is, no president, no **appointed** authority to resolve conflicts, lead development choices, and no communication hierarchy, more and more necessary as the project rises in size, and so in possibilities. How do you handle this situation ? How do you organize an open source community based work ? \\\\EST CE QUE CE NE SERAIT PAS L\'INTRO DE CETTE ARTICLE ?\\\\\\n \\n\x3c!--truncate--\x3e\\n### Founder-leader or Benevolent Dictator for life\\n \\nOne may say this \\"power\\" would logicaly belong to the initiator of the project, and sometimes this is what happens. The initial creator of the project became what is commonly called \\"Benevolent Dictator for life\\" (BDFL), meaning they will define the general orientation of the project. This term is used as a joke, because if in fact the BDFL has dictator-like powers over the project, this power originated from the trust people in the community have in them. The benevolent dictator only has responsibilities because people lend confidence to them. As examples, they are Linus Torvalds (linux\'s kernel creator), Guido Van Rossum (Python\'s creator) and [more](https://en.wikipedia.org/wiki/Benevolent_Dictator_for_Life). These conception prevails a lot in small projects, as the founder is naturally leading all the coding and designing process. (\\\\design ?) It also allows far quicker decision making, as the BDFL doesn\'t have to go for the consensus with the developers community. Yet, it can be source of conflicts, all the more if the BDFL has a toxic behavior or management despite all its authority : you can read more [here](https://www.cmswire.com/information-management/is-the-end-of-the-benevolent-dictator-for-life-in-open-source-software-here/).\\n \\n### The \\"Appointed Committee decides everything\\" model\\n \\nSometimes, the community members can appoint one or several leadership groups, each one ruling a specific part of the project (UI, Rendering, UX, AI ...), similarly to how a company works a its board of directors, and a split in differents fields of competences, each division having its own hierarchy. There are various manners to select these committees. They can be officially elected, as among associations, with the risk of a long and tedious process and a lack of participation. They can also be implicitly choosed : the most contributing (and so implied) people will little by little take on more and more responsibilities and tasks. Thus, this tacit governance model can be observed in the community interaction : who reviews, commits, communicates the most. The harder you work, the more decisions you take, it is sometimes called a **do-ocracy**.\\n \\n### The Foundation model\\n \\nSome open source projects choose to be managed by a non profitable organization so as to officially state the project is not made to be lucrative, and is the result of a community, not a company. Moreover, a foundation can also be used to promote broader purposes than just the management of its programs. The Blender foundation, for instance, is not only in charge of the development of the eponymous software, but to \\"give the worldwide Internet community access to 3D technology in general, with Blender as a core\\", with in addition to Blender, assets, community-driven add-on etc...\\nFoundations aren\'t necessarily the sole ruling instance : they are sometimes created when a project becomes too wide to handle every non technical topic - conference, communication, juridic matters, search for funds - while committees will still lead the development work.\\n \\n### Entreprises-driven project\\n \\nNowadays, more and more open source projects are released by companies. The reasons are numerous : lower maintenance costs - as the community will contribute to fix bugs, reach potential developers and users, support a development ecosystem (add-on, development of another open source  existing technology). A common drawback to this model is the stern control ensured by the company. For somes software, non-employed developers can\'t directly collaborate to the project or have to follow a very strict procedure : it\'s closer to a \\"free\\" product delivered by a company than a genuine community work, but it is not the case for all the \\"companies-baked\\" projects.\\n \\n### Conclusion\\n \\nA good [in depth guide to governance model and find your own](https://www.redhat.com/en/resources/guide-to-open-source-project-governance-models-overview)\\n \\nA RAJOUTER :\\n \\nCool comment ca marche ?\\nExemples pour chacun ?\\nRajouter une petite explicationsur Cool au d\xe9but de chaque article?\\n \\nSources :\\n \\nhttps://www.synopsys.com/glossary/what-is-open-source-software.html <br></br>\\nhttps://www.redhat.com/en/blog/understanding-open-source-governance-models <br></br>\\nhttps://www.cmswire.com/information-management/is-the-end-of-the-benevolent-dictator-for-life-in-open-source-software-here/<br></br>\\nhttps://fr.wikipedia.org/wiki/Benevolent_Dictator_for_Life <br></br>\\nhttps://www.blender.org/about/ <br></br>\\nhttps://www.redhat.com/en/resources/guide-to-open-source-project-governance-models-overview <br></br>"},{"id":"/2022/08/23/shader-programming-made-functional","metadata":{"permalink":"/blog/2022/08/23/shader-programming-made-functional","source":"@site/blog/2022-08-23-shader-programming-made-functional.md","title":"Shader Programming made Functional","description":"GLSL is a pretty low-level language. But what if we turned it into a classy functional programming language capable of handling higher-order functions? A.k.a. giving it the ability to pass functions as parameters to other functions. Well, this is exactly what CoolLab does!","date":"2022-08-23T00:00:00.000Z","formattedDate":"August 23, 2022","tags":[],"readingTime":0.93,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Shader Programming made Functional","authors":"jules"},"prevItem":{"title":"How do open source software organize themself ?","permalink":"/blog/gouvernance-model-of-open-softwares"},"nextItem":{"title":"Introduction to raymarching","permalink":"/blog/2022/07/04/an-introduction-to-raymarching"}},"content":"GLSL is a pretty low-level language. But what if we turned it into a classy **functional programming language** capable of handling **higher-order functions**? A.k.a. giving it the ability to pass functions as parameters to other functions. *Well, this is exactly what CoolLab does!*\\n\\n\x3c!--truncate--\x3e\\n\\nIn fact higher-order functions are so important that this is what [Inigo Quilez often does in pseudo-code](https://iquilezles.org/articles/distfunctions/):\\n![](./img/spmf1.png)\\n\\nThis idea stemed from the observation that *modifiers*, in order to modify an existing SDF, must change either its input or its output (sometimes both). This is why a CoolLab graph cannot be interpreted as a flow of data between functions: some nodes even though after some other node, must apply changes to the input of the function coming before them. In order to make this generic and give each node full control, we hade to make this functional: each node receives one (or more) function.s, and does whatever it wants with them: it can evaluate them with different input, evaluate them several times, whatever!\\n\\nTODO show how we define a node\\n\\nTODO Show a graph\\n\\nTODO Here is the code that gets generated:"},{"id":"/2022/07/04/an-introduction-to-raymarching","metadata":{"permalink":"/blog/2022/07/04/an-introduction-to-raymarching","source":"@site/blog/2022-07-04-an-introduction-to-raymarching.md","title":"Introduction to raymarching","description":"Cool is a software aimed at visual generative art, meaning it has to render - display a 2D or 3D scene onto a computer screen. To do so, Cool uses a specific technique called \\"Ray Marching\\" - fairly uncommon among computer graphic softwares, allowing for instance, a very quick rendering of scene with a lot of identical objects (a space filled with infinite spheres for example).","date":"2022-07-04T00:00:00.000Z","formattedDate":"July 4, 2022","tags":[],"readingTime":7.775,"truncated":true,"authors":[{"name":"Yvan Smorag"}],"frontMatter":{"title":"Introduction to raymarching","author":"Yvan Smorag"},"prevItem":{"title":"Shader Programming made Functional","permalink":"/blog/2022/08/23/shader-programming-made-functional"},"nextItem":{"title":"What is cool good at (and not that good) at ? - title to change -","permalink":"/blog/2022/07/04/cool-pros-and-cons"}},"content":"Cool is a software aimed at visual generative art, meaning it has to **render** - display a 2D or 3D scene onto a computer screen. To do so, Cool uses a specific technique called ***\\"Ray Marching\\"*** - fairly uncommon among computer graphic softwares, allowing for instance, a very quick rendering of scene with a lot of identical objects (a space filled with infinite spheres for example).<br></br>\\n### IMAGE INFINI ?\\nIn this article we will present this technique and discuss about the pros and cons compared to other rendering methods used in the industry.\\n \\n\x3c!--truncate--\x3e\\n \\n### How do you represent a 3D image on a 2D screen ?\\nA commonly used way to render a 3D scene is called raytracing, but before explainig you how it works, we need to understand how an image is displayed on screen.\\nWe have a 3D scene, in which we place a camera (i.e the point of view from where we are looking at the scene). From this point, we are watching a 3D scene that we have now to represent on a 2D plane : our computer screen. In order to do so, the process is exactly the same as for drawing. To draw a scene you are looking at with your eye (the camera), you will use the rule of perspective to project it on paper. For 3D images, we are simply replacing paper by the computer monitor. Eventually, we just have to use the perspective rules for each object of the scene and we will have the shape of our 3d scene. *Question : Perspective Implement\xe9e naturellement dans OpenGL non ?* Let\'s spice it up with colors !\\n\\n![perspective](../static/img/Blog/RayMarching/Perspective2.gif) \\n\\nLofe\\n \\n### Colors\\nNow that we know how to represent 3d shapes on a 2d screen, we can then make it more realistic, with lights, shadow and colors. In real world, the reason we see objects, is because of ***photons***. They are emitted by sources of light (sun, lamp)..., and will fly through space and time until hitting objects. Once they do so, they have three choices : either being absorbed, re-emitted or transmitted. It is that final bunch of protons emitted and transmitted by the object arriving up to our eyes that will make us \\"see\\" the object. For instance, an object reflecting every but \\"red\\" photons - light being the sum of all the nuances of colored photons on the visible spectrum - will only emit red photons towards us and therefore look red for the viewer.\\n \\n### SHEMA VISION ?\\n \\nRaytracing is a reversed version of what nature does. Instead of computing the reflection of photons emitted by sources and objects up to the camera (that would take far too long), we are going to cast a ray from our camera through every pixel of our screen, and calculate if this ray intersects with an object of our scene. If so, we check if there are any objects between our sources of light, and the point hit by the ray. We can now draw on our screen : if the ray casted from a specific pixel touches a part of an object, we know that we have to project that part of the object according to the distance between the pixel and the object on that particular pixel following the perspective. In addition, if this part of the object is in direct contact with any source of light, the pixel will be enlightened, otherwise it will be shadowy.\\n\\n![Raytracing](../static/img/Blog/RayMarching/RayTracing_gif.gif)\\n \\n#### SHEMA RAYTRACING SCRATCHA PIXEL\\n \\nOne of the main concerns in the ray tracing method is finding the intersection between the ray you cast through your pixel (which is a straight line), and the shapes composing the objects of your scene. In practice, objects are often composed of thousands of small triangles or squares (= two triangles), and the goal is to find what triangle is touched by the ray sent through the pixel by the camera (\\\\TROUVER UNE IMAGE MAYBE DE PERSOS DECOMPOSES EN TRIANGLE ?). We know analytically how to test and find an intersection between a straight line (the camera ray) and a triangle but two problems may appear :\\n1. The more complex your scene, the more triangles you get and therefore the more tests and calculs you have to do meaning a longer render time (for instance rendering a very repetitive pattern, thousands of distorted spheres will be very long all the more in real time).\\n2. There are some shapes you can\'t mathematically describe, and therefore you can\'t analytically find an intersection between itself and the ray defined as a straight line. For instance there are forms that you can\'t split in small triangles because of their complexity - such as fractals - or/and because it would imply too many triangles to have a good approximation of it and so, \\\\making render time \\\\explode.\\n \\nThe question is then : Is there a way to have a fast render for these specific objects (repetitive pattern of objects, fractals...) ? And yes ! Let me introduce to you... ray marching !\\n \\n### Ray Marching\\n \\nLet\'s summarize. To render an object, you will cast a ray - i.e a straight line - from the camera through every pixel of your screen and find how they intersect - or not - with this object to find out how to project this 3D shape onto your 2D computer monitor, following the rules of perspective. One way to find the intersection is to mathematically compute the straight line - shape intersection, and then figure out -by another intersection calculation - how they interact with lights for placing shadows accordingly ; it is *raytracing*. Another way to do - and this is what *cool* uses - is **RayMarching**\\nRayMarching is a more iterative approach to rendering. Instead of computing an intersection between a straight line and an object, we are going to process by \\"steps\u201d along each ray shooted. How does it work ? I will show you right away !\\n \\nAt every step, we are going to determine the distance from our current position on the ray - the first step being the camera position - to every object of the scene. If none of these distances is close to zero (meaning that the ray is hitting one object) and if we didn\'t reach the max numbers of step, we move on to the next step : we \\"march\\" - hence the name of ray**Marching** - of the minimum distance we found between all the objects - in the ray direction. We then repeat the process until the ray meets an object or we arrive at the maximum number of steps. It is an iterative strategy where we march along the ray to determine the collision or not of the ray with the objects within the scene.\\n \\nFor instance, if my project contains three spheres. I send a ray through a pixel from the camera. I begin the first step at the camera position, and I compute my distances to these spheres : I found s1:2, s2:3, s3:6 meters. I can then surely advance on the ray direction of at least 2 meters (I am sure i won\'t be \\"inside\\" an object). I do so and then compute my distances : s1:4, s3:2, s3:1 meters. I advance 1 meter and check the distances again : s1:5, s2:0.01, s3:2.\\n**0.01** is close enough in my definition to say that the ray is hitting something - here sphere 2. So, I can send to my render algorithm, that on this pixel, 3 meters away following the camera direction (the distance I advanced along the ray in two steps : 2+1) is a part of sphere2, and render it accordingly.\\n \\n### SHEMA RAY MARCHNG 3 SPHERES ? (Le faire moi m\xeame)\\n \\nThus, unlike raytracing, the issues are not mathematically finding an intersection point, but figuring out an expression of the distance position on the ray to object shape or outline, which is far easier for certain objects (LESQUELS ?).\\nFor example, we can define a distance from any point in space (x, y, z) to a sphere s of center c, and radius r by the formula *(first and only math/code function you will see in this page, I promise)* :\\n```c\\ndistance(p, s) = distance(p, c) - r; //Distance between the center of the sphere\\n                                //and the point minus the radius of the sphere\\n```\\n![Sh\xe9ma cercle](../static/img/Blog/RayMarching/circle-distance.png)\\n \\nFor a mathematical and coding development, see the bibliography ! :smile: (rajouter lien \xe0 biblio)\\n \\n### Pros and cons of Raymarching\\n \\nSo, why did we choose to use rayMarching ? (A review avec Jules)\\n1. Innovative. Few softwares use it : allow creativity and a different approach to generative and procedural art (transition pt2)\\n2. RayMarching and cool workflow ==> Combine, blend, twist and apply a lot of different effects of \\"basic\\" shapes easy to do in raymarching, allowing to quickly create weird forms, that may be different or more difficult to achieve in other 3D softwares\\n3. Very quick render of a big number of the same objects (meshes vs distance comparison) : possibility to \\"infinitely\\" fill a space with a certain shape and navigate through it far fluidier than with meshes : very good for procedural worlds and art in general.\\n\\n![infinite_sphere](../static/img/Blog/RayMarching/Infinite_Sphere.png)\\n \\nAutre chose ?\\n \\n \\n \\nSource :\\n\\nhttps://michaelwalczyk.com/blog-ray-marching.html"},{"id":"/2022/07/04/cool-pros-and-cons","metadata":{"permalink":"/blog/2022/07/04/cool-pros-and-cons","source":"@site/blog/2022-07-04-cool-pros-and-cons.md","title":"What is cool good at (and not that good) at ? - title to change -","description":"","date":"2022-07-04T00:00:00.000Z","formattedDate":"July 4, 2022","tags":[],"readingTime":0,"truncated":false,"authors":[{"name":"Yvan Smorag"}],"frontMatter":{"title":"What is cool good at (and not that good) at ? - title to change -","author":"Yvan Smorag"},"prevItem":{"title":"Introduction to raymarching","permalink":"/blog/2022/07/04/an-introduction-to-raymarching"},"nextItem":{"title":"How I implemented scripting in two hours","permalink":"/blog/2022/04/29/scripting"}},"content":""},{"id":"/2022/04/29/scripting","metadata":{"permalink":"/blog/2022/04/29/scripting","source":"@site/blog/2022-04-29-scripting.md","title":"How I implemented scripting in two hours","description":"You can now write scripts to control CoolLab. Everything that you can do in the UI in now also doable through scripts.","date":"2022-04-29T00:00:00.000Z","formattedDate":"April 29, 2022","tags":[],"readingTime":0.515,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"How I implemented scripting in two hours","authors":"jules"},"prevItem":{"title":"What is cool good at (and not that good) at ? - title to change -","permalink":"/blog/2022/07/04/cool-pros-and-cons"},"nextItem":{"title":"Doing better than C++\'s references (&)","permalink":"/blog/2021/05/28/doing-better-than-cpp-references"}},"content":"You can now write scripts to control CoolLab. Everything that you can do in the UI in now also doable through scripts.<br/>\\nMoreover, you can write those scripts in **_the language of your choice_**! That\'s right, **_every_** language in the world will do, even the one you wrote last weekend and that only you possesses an interpreter for.\\n\\nAll of this magic relies on a well knwown friend: **the HTTP protocol**.\\n\\n\x3c!--truncate--\x3e\\n\\nWe provide an API that anyone can call; as long as you know how to make http requests from your language, you can write scripts for CoolLab.\\n\\nPros:\\n\\n-\\n\\nCons:\\n\\n-"},{"id":"/2021/05/28/doing-better-than-cpp-references","metadata":{"permalink":"/blog/2021/05/28/doing-better-than-cpp-references","source":"@site/blog/2021-05-28-doing-better-than-cpp-references.md","title":"Doing better than C++\'s references (&)","description":"Introducing our reg library!","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":0.025,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Doing better than C++\'s references (&)","authors":"jules"},"prevItem":{"title":"How I implemented scripting in two hours","permalink":"/blog/2022/04/29/scripting"},"nextItem":{"title":"Ints cause precision errors","permalink":"/blog/2021/05/28/ints-cause-precision-errors"}},"content":"Introducing our [*reg*](https://github.com/CoolLibs/reg) library!\\n\\n\x3c!--truncate--\x3e"},{"id":"/2021/05/28/ints-cause-precision-errors","metadata":{"permalink":"/blog/2021/05/28/ints-cause-precision-errors","source":"@site/blog/2021-05-28-ints-cause-precision-errors.md","title":"Ints cause precision errors","description":"After a lot of trouble and bugs, I have come to the conclusion that you sould use floats most of the time.","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":1.47,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Ints cause precision errors","authors":"jules"},"prevItem":{"title":"Doing better than C++\'s references (&)","permalink":"/blog/2021/05/28/doing-better-than-cpp-references"},"nextItem":{"title":"Ints cause precision errors","permalink":"/blog/2021/05/28/the-dear-imgui-model"}},"content":"After a lot of trouble and bugs, I have come to the conclusion that you sould use floats most of the time.\\n\\nThe reason is simple : when you are doing maths, it is rare that the logic of your calculations will only output integers.\\n\\n\x3c!--truncate--\x3e\\n\\nIntegers are good for one thing : absolutely perfect 100% exactness. This properly is rarely required ; the only case I typically encounter is indexing into an array. But even though they are good at representing _some_ numbers exactly, they are very bad at doing calculations in general because they need to _round_ to the nearest integer. And in most cases I much rather have 3 / 2 = 1.5000000000001 than 3 / 2 = 1 ; this second calculation is really not what you want in 99% of the cases, except if you are specifically dealing with an integer reasoning. And, let me reiterate it, there is almost no problem or domain model were the only sensible values are integers. Most of the time we want the middle of 1 and 4 to be 2.5, not 2.\\n\\nOne common misconception is that, when positionning shapes in space, since the coordinates are expressed in pixels, people tend to use integer to represent them. But this is wrong, and I realized it as I was doing a fractal.\\n\\nWhy is it so tilted ? Because I am constantly rounding my position to the nearest integer as I trace the fractal, and the errors accumulate to some significant amounts over time.\\nThe rounding to an integer should be done at the last moment, when rendering. Before that we want to be as exact as possible about are actual position in space, and integers are absolutely not fit for that job."},{"id":"/2021/05/28/the-dear-imgui-model","metadata":{"permalink":"/blog/2021/05/28/the-dear-imgui-model","source":"@site/blog/2021-05-28-the-dear-imgui-model.md","title":"Ints cause precision errors","description":"Remove dependency on a backend, let users implement it the way they like, and provide implementations for popluar backend.","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":0.46,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Ints cause precision errors","authors":"jules"},"prevItem":{"title":"Ints cause precision errors","permalink":"/blog/2021/05/28/ints-cause-precision-errors"},"nextItem":{"title":"Unit Type-System","permalink":"/blog/2021/05/28/unit-type-system"}},"content":"Remove dependency on a backend, let users implement it the way they like, and provide implementations for popluar backend.\\n\\nI was scared to generalize my _cam_ library because I thought I would need to use template, and know how to get the transpose of a matric for example. But this is much simpler, flexible, and does come with all the annoyances of templates (all the code in headers, harder for ides to handle)\\n\\n\x3c!--truncate--\x3e\\n\\nI don\'t know if its fait to call it that way; don\'t know if others do the same;."},{"id":"/2021/05/28/unit-type-system","metadata":{"permalink":"/blog/2021/05/28/unit-type-system","source":"@site/blog/2021-05-28-unit-type-system.md","title":"Unit Type-System","description":"How often have you used an angle in radians when the function was expecting it in degrees, or vice-versa? I personnaly have, way too often. And so I decided that that time was over. We need to enforce these kind of checks in the signature of our functions and our type-system!","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":1.06,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Unit Type-System","authors":"jules"},"prevItem":{"title":"Ints cause precision errors","permalink":"/blog/2021/05/28/the-dear-imgui-model"},"nextItem":{"title":"Hijacking the Dereference Operators","permalink":"/blog/2021/05/26/hijacking-the-dereference-operators"}},"content":"How often have you used an angle in radians when the function was expecting it in degrees, or vice-versa? I personnaly have, way too often. And so I decided that that time was over. We need to enforce these kind of checks in the signature of our functions and our type-system!\\n\\n\x3c!--truncate--\x3e\\n\\n```C++\\nvoid rotate(Radian angle);\\nvoid rotate(Degree angle);\\n\\nrotate(60_deg);  // User-defined litteral that creates a Degree\\nrotate(1.3_rad); // User-defined litteral that creates a Radian\\n```\\n\\nHow nice would such an API be? No more confusion as to what type you are supposed to use ; and the compiler can check it too.\\n\\nWe can do the same for things like pixels vs. screen coordinates vs. normalized position, and much more! Maybe even space conversion (world space vs. object space. vs view space vs light space vs. *etc.*): applying a matrix of type *World2View* to a vector of type *World* would return a vector of type *View*.\\n\\nWe could also implement all the nice things we are used to in physics: you cannot add meters and seconds, but you can divide meters per seconds to get a velocity. (NB: I have no idea yet as to how to implement the magic the *builds* a type \\"meter/second\\" from the types \\"meter\\" and \\"second\\")"},{"id":"/2021/05/26/hijacking-the-dereference-operators","metadata":{"permalink":"/blog/2021/05/26/hijacking-the-dereference-operators","source":"@site/blog/2021-05-26-hijacking-the-dereference-operators.md","title":"Hijacking the Dereference Operators","description":"I often end up writting classes that wrap other classes or primitive types.","date":"2021-05-26T00:00:00.000Z","formattedDate":"May 26, 2021","tags":[],"readingTime":2.33,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Hijacking the Dereference Operators","authors":"jules"},"prevItem":{"title":"Unit Type-System","permalink":"/blog/2021/05/28/unit-type-system"}},"content":"I often end up writting classes that wrap other classes or primitive types.\\n\\n```cpp\\nstruct MyData {\\n      float field1;\\n      float field2;\\n      float field3;\\n      float field4;\\n      float field5;\\n\\n      void do_something();\\n};\\n```\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\n\\nAnd for a long time I was annoyed when needing to access the underlying wrapped class. At first I was writting one getter function for each method or field of the wrapped class that I still needed to access.\\n\\n\x3c!--truncate--\x3e\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      float field1() { return _my_data.field1; }\\n      float field2() { return _my_data.field2; }\\n      float field3() { return _my_data.field3; }\\n      float field4() { return _my_data.field4; }\\n      float field5() { return _my_data.field5; }\\n      void do_something() { _my_data.do_something(); }\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nBut that was a lot of boilerplate code to write and I couldn\'t stand it. It get\'s especially annoying when you do some refactor or API change, because now you have to propagate the changes in two classes instead of one.\\n\\n So I moved to having only one getter function, typically called *get*, that would return a reference to the whole wrapped class.\\n\\n ```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      const MyData& get() const { return _my_data; }\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nIn my opinion this is already much better because the implementor of the wrapper class needs to write way less code, and doesn\'t need to maintain it when the wrapped class changes.\\n\\nBut the API isn\'t as nice anymore ! We moved from\\n\\n```cpp\\nmy_data_wrapper.do_something();\\n```\\n\\nto\\n\\n```cpp\\nmy_data_wrapper.get().do_something();\\n```\\n\\nBasically, no matter what I call my getter function, it is still too long of a name and clutters the code.\\n\\nSo here comes the ultimate solution : **Overload the dereference operators** ! This makes the API only one character longuer than the original solution, and doesn\'t require the implementor to write a lot of boilerplate code either ! The best of both worlds !\\n\\n```cpp\\nmy_data_wrapper->do_something();\\n```\\n\\nThe only downside I can think of is that the syntax can be confusing for people who are not used to this pattern ; but I swear that when you are used to it, this is the greatest thing ever !\\n\\nFor reference, this is how you would overload the dereference operators :\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      const MyData& operator* () const { return _my_data; }\\n      const MyData* operator->() const { return &operator*(); } // Reuse the implementation of operator*\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nYou can see this pattern in action in the [*Params* module](https://github.com/CoolLibs/Params/blob/main/src/Cool/Params/Params.h) for example.\\n\\nThis is also used in [std::optional](https://en.cppreference.com/w/cpp/utility/optional) by the way !"}]}')}}]);