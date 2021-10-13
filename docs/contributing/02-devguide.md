---
title: "Dev Guide"
---

Here you will find useful information to start working on the project :

## Formatting

We use the famous ```clang-format``` as our formatting tool. You will need to install it (on Windows this happens through the ```Visual Studio Installer``` : modify your ```Visual Studio Build Tools``` and add ```C++ Clang Tools for Windows```).

Then on VS Code I recommended this extension : [xaver.clang-format](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format) ; and you should enable ```Format on Save``` in your VS Code settings.

Note that in some very specific cases you can disable ```clang-format``` locally to use some non-standard formatting, using these special comments : 

```cpp
// clang-format off
void on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }
void on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }
void on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }
void on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }
// clang-format on
```

## Write documentation

We use Doxygen-style documentation. I would suggest you install this extension for VS Code : [cschlosser.doxdocgen](https://marketplace.visualstudio.com/items?itemName=cschlosser.doxdocgen)

Then you simply need to type */\*\** and press *enter* to generate the documenting comment for the class or method.

Try to be as descriptive as possible in your documentation : mention any hickups and subtleties, and give an example if the usage is not obvious.

```cpp
/**
 * @brief Returns the Color of the (x, y) pixel. No bound checking is done, so this will crash if x is not inside [0, width() - 1] or y is not inside [0, height() - 1]
 * 
 * @param x x coordinate of the pixel (0 is at the left of the image)
 * @param y y coordinate of the pixel (0 is at the bottom of the image)
 * @return The Color of the given pixel
 */
Color& color_at(unsigned int x, unsigned int y) { return _pixel_colors[x + y * _width]; }
```

## Write an article

It would be nice to have an article on this website for each module we write. The goal of those articles is to describe our thought process and the technical choices that we make (architecture, design pattern, optimization / simplicity of the API, . . .).

It is a great way of creating and sharing knowledge : these resources will surely prove useful to many one day, and forcing you to write down the choices you made should have you question whether they are really the best, and strive to improve your own design.

**To learn how to edit this website**, check it out [on GitHub](https://github.com/CoolLibs/CoolLab-Devlog/).

## Write debug checks

If there is some invariant that must be verified, add debug checks to make sure users of your code don't mess up !
You can use ```assert``` in the simpler cases, but sometimes you will need to add variables to keep track of some state. In that case, wrap the debug code in a 
```
#ifdef DEBUG
// . . .
#endif
```
block so that it doesn't impact release build performance.

An example would be to make sure an initialization function is called once, and only once :

```cpp
class MyClass {
public:
    void initialize() {
#ifdef DEBUG
        assert(!_is_initialized);
        _is_initialized = true;
#endif
        // . . .
    }

    void use_my_class() {
        assert(_is_initialized);
        // . . .
    }

private:
#ifdef DEBUG
    bool _is_initialized = false;
#endif
};
```

## How to : Write a Cool module

Create a dedicated folder.
Wrap your code in the ```Cool``` namespace

```cpp
namespace Cool {

class MyClass {
    // . . .
};

} // namespace Cool
```

## When to : Write a Cool module

Everything that might be reused across projects should be part of the *Cool* framework.

## Work on a branch

**Never commit directly on the ```main``` branch !** This is to avoid having to resolve merge conflicts on every commit while many people work on different areas. It is simpler that we each work on a branch, and only merge once in a while.

When you start working on a feature, create a dedicated branch and work there.

Once the feature is finished (or advanced enough that it would be interesting to merge) :
- merge ```main``` into your branch and resolve any conflict that might arise
- submit a pull request and wait for the peer review

## Commit Guidelines


## Coding Guidelines
