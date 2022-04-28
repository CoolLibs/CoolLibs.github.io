---
title: The Big Architectural Plan
---

Our _Big Architectural Plan_ (informally known as _BAP_) will lay out the foundations for a composable and extensible software that will allow the convergence and interaction of many different generative art techniques. It will be easy to change, control, customize, script and reuse existing components in many different ways.

## [✅ Part 1: Objects Registries](https://github.com/CoolLibs/reg)

[**Done!** This is our _reg_ library.](https://github.com/CoolLibs/reg)

## 🚧 Part 2: The Command pattern

[See the readme of our _cmd_ library.](https://github.com/CoolLibs/cmd)

## 🚧 Part 2b: Parameters and History

Once the Registries and the Commands are in place we can improve our existing Parameters and History systems. This is an optional step that doesn't prevent us from moving on to part 3.

## 🔭 Part 3: The Rendering Dispatcher

We want to "multithread" our use of the GPU. For example the UI (ImGui) is rendered on the GPU, and we don't want it to be blocked by the fact that some of our shaders could take seconds to render a nice ray-traced scene. This should be possible to achieve by using _Async Compute_: ImGui is rendered using the "main" graphics queue, while the heavy rendering work is dony on compute-only queues. [See this explanation of the different queues and the architecture of modern GPUs](https://stackoverflow.com/questions/55272626/what-is-actually-a-queue-family-in-vulkan).<br/>
Since most of our shaders are fullscreen passes they should be easy to turn into compute shaders and run asynchronously.

Another technique that will help us is to split the rendering of an image into tiles, allowing us to split the rendering over several frames, and display parts of the image as they get rendered. Or alternatively we could render for example one pixel out of four: this would allow us to have a "low-res" version of our image quickly, and then the other pixels can be computed later. This should be better than the tile-based approach to get an idea of what the whole image looks like. On the other hand the tile-based version quickly shows you the final quality, though on only a fraction of the image.

[Mesh shaders](https://www.youtube.com/watch?v=CFXKTXtil34) are also an interesting topic to look into.

## 🔭 Part 4: Modules and Scenes

Modules know what their dependencies are, and only refresh their output image when needed. A `Scene` is a graph of modules that interact together.

## 🔭 Part 5: The Timeline

The `Timeline` lays out the different `Scene`s in time, and allows basic compositing of them (for example one scene on top of another).
