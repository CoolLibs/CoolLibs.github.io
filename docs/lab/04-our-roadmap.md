---
title: "Our Roadmap"
toc: true
---

## ✅ Done

### Node system

- Integrate a library to create node graphs and use it to create scenes.
- Make it easy for any user to add new nodes.

### Ray Marching

- Generate a shader that contains the sdf of the scene (described by the node graph).
- Render that scene within the same shader.
- Implement many cool rendering effects that are allowed by Ray Marching.

### Parameter system

- Control them through the UI
- Save changes to them in a history
- Be able to create presets

## 🚧 Doing

### Abstract GPU API

- Create generic classes that can be implemented both with OpenGL and Vulkan to abstract those away and allow users to write cross-platform code.
- Add even more APIs, like WebGPU.
- Add a type-safe C++ wrapper around OpenGL: [GL++](https://github.com/CoolLibs/glpp).

### Setup a material system

- Have PBR materials and a UI for them.
- Attach those materials to objects in the is0 scene.

### Write libraries of shader functions

- Group common functions in libraries:
  - Camera and 3D geometry
  - Random
  - PBR calculations
  - Color conversions

### Meta language on top of glsl

- Add a `#include` directive.
- Add recursive functions.
- Do generic glsl parsing: look at [shaderc](https://github.com/google/shaderc) (https://www.youtube.com/watch?v=SXDlZRDjtXg) and [naga](https://github.com/gfx-rs/naga).

## 💪 To Do

### Post-processing

- Here is a [great inspiration](https://youtu.be/Y3d8jR_IwYw?t=4378). Especially the gradient technique is pretty cool.
- Here is a very good resource about [bloom](https://youtu.be/tI70-HIc5ro).
- Here is a discussion of [outlines effects](https://alexanderameye.github.io/notes/rendering-outlines/) (the edge-detection one is particularly good).

### Layer system

- Think about the design: How do we combine the outputs from our different systems or from different instances of the same system.
  Do we use a classic layer structure, or a graph?

One module = something that takes inputs and gives us outputs (often images (color, depth, mask (\approx_equal alpha) etc.)). E.g. : is0, the color grader, the depth of field effect etc.
Inputs can also be a camera for example. So that we can decide if the different modules share the same 3D camera or not.

The modules are composited in a graph system: you connect images outputed by one as input to another.

Users should be able to create entire modules as plugins that they can add to CoolLab easily.

### Color palettes

Use [IQ's color palettes](https://iquilezles.org/www/articles/palettes/palettes.htm) everywhere!

Can we generate an IQ palette from a discrete palette with colors hand-picked by an artist?

### Particle system

2D and 3D.

Fully GPU based.

### Audio

- Import audio files and play them along the image generation (ideal to produce audio clips).
- Retrieve data from the audio to drive the images (pitch, bpm, volume etc.).
- We can search a lib in [this list](https://awesomeopensource.com/projects/audio-library). I currently found [miniaudio](https://github.com/mackron/miniaudio) for audio playback and [kfrlib](https://www.kfrlib.com/newdocs/index.html) or [aubio](https://aubio.org/) for audio analysis.

### Compile for the web

- Use emscripten and WebGL (or WebGPU) to be able to run our software in the browser.

### History / Multiple histories in parallel ?

### Lights system

### Simple compute shaders

### Project save

### Color spaces ?

### Bezier instead of interpolation for function curves (a.k.a. RGB curves).

See [Bezier Rgb Curves](https://github.com/CoolLibs/Cool/blob/main/src/Cool/RgbCurve/_README.md)

And how do we send these curves to the shader ? Do we bake it into a texture ?

### Premultiplied alpha

https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E

### Improve timeline navigation / display

https://youtu.be/Y3d8jR_IwYw?t=5577

### Keybinds remapping (inspired from Django ?)

### Scripting

Everythin that is doable from the UI should be doable via scripting.

For the language I really like Typescript, but all options should be considered.
