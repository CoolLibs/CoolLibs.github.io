
All our user inputs are in **sRGB, straight alpha** space.<br/>
BUT when the shader asks for some *RGB* or *RGBA*, we use **linear RGB and premultiplied alpha**. Using premultiplied alpha means that things like blending and blurring will behave naturally (see [TODO]()).

NB: for RGB->RGB effects, if some RGBA is plugged in as input, we first un-premultiply the RGB, then pass it to the effect, then re-premultiply. This is the same behavior as ["Pre-Divide / Post-Multiply" in Resolve/Fusion](https://youtu.be/klqSJiPqmGU). This basically means that everything will work as expected intuitively and you don't have to worry about it.