"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/05/28/int-or-float","metadata":{"permalink":"/blog/2021/05/28/int-or-float","source":"@site/blog/2021-05-28-int-or-float.md","title":"Int or Float?","description":"After a lot of trouble and bugs, I have come to the conclusion that you sould use floats most of the time.","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":1.47,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/home/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Int or Float?","authors":"jules"},"nextItem":{"title":"Unit Type-System","permalink":"/blog/2021/05/28/unit-type-system"}},"content":"After a lot of trouble and bugs, I have come to the conclusion that you sould use floats most of the time.\\n\\nThe reason is simple : when you are doing maths, it is rare that the logic of your calculations will only output integers.\\n\\n\x3c!--truncate--\x3e\\n\\nIntegers are good for one thing : absolutely perfect 100% exactness. This properly is rarely required ; the only case I typically encounter is indexing into an array. But even though they are good at representing *some* numbers exactly, they are very bad at doing calculations in general because they need to *round* to the nearest integer. And in most cases I much rather have 3 / 2 = 1.5000000000001 than 3 / 2 = 1 ; this second calculation is really not what you want in 99% of the cases, except if you are specifically dealing with an integer reasoning. And, let me reiterate it, there is almost no problem or domain model were the only sensible values are integers. Most of the time we want the middle of 1 and 4 to be 2.5, not 2.\\n\\nOne common misconception is that, when positionning shapes in space, since the coordinates are expressed in pixels, people tend to use integer to represent them. But this is wrong, and I realized it as I was doing a fractal.\\n\\nWhy is it so tilted ? Because I am constantly rounding my position to the nearest integer as I trace the fractal, and the errors accumulate to some significant amounts over time.\\nThe rounding to an integer should be done at the last moment, when rendering. Before that we want to be as exact as possible about are actual position in space, and integers are absolutely not fit for that job."},{"id":"/2021/05/28/unit-type-system","metadata":{"permalink":"/blog/2021/05/28/unit-type-system","source":"@site/blog/2021-05-28-unit-type-system.md","title":"Unit Type-System","description":"How often have you used an angle in radians when the function was expecting it in degrees, or vice-versa? I personnaly have, way too often. And so I decided that that time was over. We need to enforce these kind of checks in the signature of our functions and our type-system!","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":1.06,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/home/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Unit Type-System","authors":"jules"},"prevItem":{"title":"Int or Float?","permalink":"/blog/2021/05/28/int-or-float"},"nextItem":{"title":"Hijacking the Dereference Operators","permalink":"/blog/2021/05/26/hijacking-the-dereference-operators"}},"content":"How often have you used an angle in radians when the function was expecting it in degrees, or vice-versa? I personnaly have, way too often. And so I decided that that time was over. We need to enforce these kind of checks in the signature of our functions and our type-system!\\n\\n\x3c!--truncate--\x3e\\n\\n```C++\\nvoid rotate(Radian angle);\\nvoid rotate(Degree angle);\\n\\nrotate(60_deg);  // User-defined litteral that creates a Degree\\nrotate(1.3_rad); // User-defined litteral that creates a Radian\\n```\\n\\nHow nice would such an API be? No more confusion as to what type you are supposed to use ; and the compiler can check it too.\\n\\nWe can do the same for things like pixels vs. screen coordinates vs. normalized position, and much more! Maybe even space conversion (world space vs. object space. vs view space vs light space vs. *etc.*): applying a matrix of type *World2View* to a vector of type *World* would return a vector of type *View*.\\n\\nWe could also implement all the nice things we are used to in physics: you cannot add meters and seconds, but you can divide meters per seconds to get a velocity. (NB: I have no idea yet as to how to implement the magic the *builds* a type \\"meter/second\\" from the types \\"meter\\" and \\"second\\")"},{"id":"/2021/05/26/hijacking-the-dereference-operators","metadata":{"permalink":"/blog/2021/05/26/hijacking-the-dereference-operators","source":"@site/blog/2021-05-26-hijacking-the-dereference-operators.md","title":"Hijacking the Dereference Operators","description":"I often end up writting classes that wrap other classes or primitive types.","date":"2021-05-26T00:00:00.000Z","formattedDate":"May 26, 2021","tags":[],"readingTime":2.33,"truncated":true,"authors":[{"name":"Jules Fouchy","title":"Cool developer & cool developer","url":"https://julesfouchy.github.io/home/","imageURL":"https://github.com/julesfouchy.png","key":"jules"}],"frontMatter":{"title":"Hijacking the Dereference Operators","authors":"jules"},"prevItem":{"title":"Unit Type-System","permalink":"/blog/2021/05/28/unit-type-system"}},"content":"I often end up writting classes that wrap other classes or primitive types.\\n\\n```cpp\\nstruct MyData {\\n      float field1;\\n      float field2;\\n      float field3;\\n      float field4;\\n      float field5;\\n\\n      void do_something();\\n};\\n```\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\n\\nAnd for a long time I was annoyed when needing to access the underlying wrapped class. At first I was writting one getter function for each method or field of the wrapped class that I still needed to access.\\n\\n\x3c!--truncate--\x3e\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      float field1() { return _my_data.field1; }\\n      float field2() { return _my_data.field2; }\\n      float field3() { return _my_data.field3; }\\n      float field4() { return _my_data.field4; }\\n      float field5() { return _my_data.field5; }\\n      void do_something() { _my_data.do_something(); }\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nBut that was a lot of boilerplate code to write and I couldn\'t stand it. It get\'s especially annoying when you do some refactor or API change, because now you have to propagate the changes in two classes instead of one.\\n\\n So I moved to having only one getter function, typically called *get*, that would return a reference to the whole wrapped class.\\n\\n ```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      const MyData& get() const { return _my_data; }\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nIn my opinion this is already much better because the implementor of the wrapper class needs to write way less code, and doesn\'t need to maintain it when the wrapped class changes.\\n\\nBut the API isn\'t as nice anymore ! We moved from\\n\\n```cpp\\nmy_data_wrapper.do_something();\\n```\\n\\nto\\n\\n```cpp\\nmy_data_wrapper.get().do_something();\\n```\\n\\nBasically, no matter what I call my getter function, it is still too long of a name and clutters the code.\\n\\nSo here comes the ultimate solution : **Overload the dereference operators** ! This makes the API only one character longuer than the original solution, and doesn\'t require the implementor to write a lot of boilerplate code either ! The best of both worlds !\\n\\n```cpp\\nmy_data_wrapper->do_something();\\n```\\n\\nThe only downside I can think of is that the syntax can be confusing for people who are not used to this pattern ; but I swear that when you are used to it, this is the greatest thing ever !\\n\\nFor reference, this is how you would overload the dereference operators :\\n\\n```cpp\\nclass MyDataWrapper {\\npublic:\\n      void do_something_else();\\n      // -- Getters --\\n      const MyData& operator* () const { return _my_data; }\\n      const MyData* operator->() const { return &operator*(); } // Reuse the implementation of operator*\\n      // -- Getters --\\n\\nprivate:\\n      MyData _my_data;\\n};\\n```\\n\\nYou can see this pattern in action in the [*Params* module](https://github.com/CoolLibs/Params/blob/main/src/Cool/Params/Params.h) for example.\\n\\nThis is also used in [std::optional](https://en.cppreference.com/w/cpp/utility/optional) by the way !"}]}')}}]);