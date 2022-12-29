
All our user inputs are in **sRGB, straight alpha** space.<br/>
BUT when the shader asks for some *RGB* or *RGBA*, we use **linear RGB and premultiplied alpha**. Using premultiplied alpha means that things like blending and blurring will behave naturally ([see this great lesson](https://youtu.be/WtYfF48Z9mA?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E&t=960)). Linear RGB is better for most computations (see [this](https://youtu.be/LKnqECcg6Gw) (and also [this](https://youtu.be/nIaczt4F2D4) to see why Lab is even better)). Light-based effects should be done in linear (blur, chromatic aberration, addition, over, etc.); color-distance based effects should be done in Lab (gradient, mapping a color to the closest one in a set, etc.)

NB: for RGB->RGB effects, if some RGBA is plugged in as input, we first un-premultiply the RGB, then pass it to the effect, then re-premultiply. This is the same behavior as ["Pre-Divide / Post-Multiply" in Resolve/Fusion](https://youtu.be/klqSJiPqmGU). This basically means that everything will work as expected intuitively and you don't have to worry about it.

### CIELAB

In this space, the euclidean distance between the `vec3`s exactly corresponds to the perceived difference in color by a human. This means that if you need to do anything that is perceptually accurate, e.g. blending between two colors, CIELAB is what you need. This is the space that most effects will want to use.

### Linear RGB

When doing physically-based rendering in 3D, you are using Linear RGB because you are manipulating amounts of light (photons) and adding them together.

### sRGB

This is the standard input and output format. Compared to Linear RGB, it matches our perception more closely (for example (0.5, 0.5, 0.5) in sRGB is perceived as a middle-grey, whereas (0.5, 0.5, 0.5) in Linear RGB is perceived as very bright, close to white). All the images you will use will almost certainly be stored as sRGB. This is why this is the default guess when CoolLab imports an image.
This is also what color pickers will give you, so this is the input format, used in our GUI. Effects hardly ever need to manipulate sRGB.