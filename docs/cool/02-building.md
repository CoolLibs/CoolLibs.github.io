---
title: Compiling your first project
---

## Clone

Since we use Git submodules you need to clone them alongside the project. The easiest way is to use the command
```
git clone --recursive https://github.com/CoolLibs/Lab
```

If later on while compiling you get an error like
```cmake
include could not find requested file:
  Cool/cmake/IncludeMe.cmake
```

it most likely means you forgot the submodules. To grab them after having cloned the project, use 
```
git submodule update --init --recursive
```

## Vulkan

If you want to use Vulkan instead of OpenGL you will need to [install the Vulkan SDK](https://vulkan.lunarg.com/sdk/home).

Note that this is not required to get started with the Demo.

## Build

Install [CMake](https://cmake.org/download/). If you already have it, make sure you have version 3.20 or greater.

Then we recommend to use this VS Code extension: [ms-vscode.cmake-tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools). You will need to setup the extension with a compiler. Here is [the tutorial](https://code.visualstudio.com/docs/cpp/cmake-linux). It is based on Linux but at the bottom of the page you will find the explanations to adapt it for [Windows](https://code.visualstudio.com/docs/cpp/config-msvc) and [Mac](https://code.visualstudio.com/docs/cpp/config-clang-mac).