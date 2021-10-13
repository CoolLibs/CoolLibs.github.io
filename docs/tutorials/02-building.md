

## Clone

Since we use Git submodules, you need to clone them alongside the project. The easiest way is to use the command
```
git clone --recurse-submodules https://github.com/CoolLibs/CoolLab
```

If, while building, you get an error like
```cmake
include could not find requested file:
  Cool/cmake/IncludeMe.cmake
```

it most likely means you are missing the submodules. To grab them after having cloned the project, use 
```
git submodule update --init --recursive
```

## Build

Install [CMake](https://cmake.org/download/). If you already have it, make sure you have version 3.16 or later.

Then, I recommend this VS Code extension : [ms-vscode.cmake-tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools).

Finally you will need to setup the extension with a compiler. Here is [the tutorial](https://code.visualstudio.com/docs/cpp/cmake-linux). It is based on Linux but at the bottom of the page you will find the explanations to adapt it for [Windows](https://code.visualstudio.com/docs/cpp/config-msvc) and [Mac](https://code.visualstudio.com/docs/cpp/config-clang-mac).

## imgui.ini

The ```imgui.ini``` file stores the position and size of our ImGui windows. It is nice to have it on the repo so that anyone cloning it will get a nice UI layout from the get go.

But you might want to do 

```
git update-index --assume-unchanged imgui.ini
```

to ignore it from your commits (It does change every time you move a window in your app, so basically it would be present in every commit).

You should only commit it once in a while, when new windows are added for example.

## Logging

To log to the console, use
```cpp
Log::info("You can use a variable, or a string like this one, which can be templated with some curly braces like so : {} {}", variable1ThatWillGoInTheCurlyBraces, variable2);
Log::warn("same parameters");
Log::error("same parameters");
```
The difference is that ```info``` outputs green text, ```warn``` is yellow and ```error``` is red.
Also, ```error``` will trigger a breakpoint (you can use ```error_without_breakpoint``` instead if you don't want that behaviour).

Note that those logs will be removed in release builds.
If you want to display a message to the end user, use ```Log::ToUser``` instead of ```Log``` (you will need to include ```<Cool/Log/ToUser.h> ```).

## OpenGL

### GLDebug

Always wrap your OpenGL calls in the ```GLDebug(...)``` macro. It will add debug checks even if your computer doesn't support modern OpenGL debugging.

```cpp
GLDebug(GLuint program_id = glCreateProgram());
GLDebug(glLinkProgram(program_id));
GLDebug(glValidateProgram(program_id));
```

### Modern Debugging (requires OpenGL 4.3 or later)

Modern debugging happens automatically.

You can ignore some warnings and control the look of the messages in the ```App``` module, under ```internal/GLDebugCallback.h```.
