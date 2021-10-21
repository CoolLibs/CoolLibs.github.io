---
title: Coding guidelines
---

## Keep functions short

This helps a lot with code readability. See [here](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rf-single) what the *C++ Core Guidelines* have to say about it.

## Prefer free functions

They help a lot with decoupling, code reuse, testing, *etc.*

Check out [this great conference](https://youtu.be/WLDT1lDOsb4) about why you should love free functions.

**NB:** This doesn't mean that member functions are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a member function is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function.

## Name with empathy

**Naming is important (and hard)**, so please be mindful when you choose a name. Be explicit, **don't be too afraid of long names**. And most importantly : make sure the name describes what the thing is, nothing more, nothing less.
Also, **don't hesitate to rename** as soon as you find a better name to describe what your thing actually is or does. (And by the way, *right click -> Rename* is an amazing feature).

The ideal name is very concise and allows readers to instantly understand what the thing is / does.
If you can't find such a name, then the second best thing is a long name that still perfectly describes the object.
Only misleading names are bad and not tolerated.

[About naming](https://youtu.be/FyCYva9DhsI?t=2494) (watch from 41:34 to 51:30 if you want to laugh a lot) (By the way, watch the whole conference it's great)

[A whole conference by Kate Gregory](https://youtu.be/MBRoCdtZOYg)

## Refer to the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

There are a lot of great people out there that have gathered a big list of great ideas and best practices.

You can start by watching this amazing conference:

<iframe width="880" height="495" src="https://www.youtube.com/embed/XkDEzfpdcSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Write debug checks

If there is some invariant that must be verified, add debug checks to make sure users of your code don't mess up!
You can use ```assert()``` in the simpler cases, but sometimes you will need to add variables to keep track of some state. In that case, wrap the debug code in a 
```cpp
#if defined(DEBUG)
// . . .
#endif
```
block so that it doesn't impact release build performance.

An example would be to make sure an initialization function is called once, and only once:

```cpp
class MyClass {
public:
    void initialize() {
#if defined(DEBUG)
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
#if defined(DEBUG)
    bool _is_initialized = false;
#endif
};
```

## Coding style

Coding styles don't matter, and that's why we simply have to choose one and stick to it.

**There is no right answer** to where you should put your curly braces, or whether you shoud use camelCase or snake_case. If there was, all the developers of the world would have agreed on it years ago.

### Snake Case

I used to use camelCase, and then started to learn Rust which forces you to use snake_case. And well, after a short period of adaptation I started really enjoying snake case because the separation between words is clearer, and therefore long names are easier to read.

 - We use *snake_case* for variables and functions.
 - We use *PascalCase* for types.

### Member variables

They are prefixed with an underscore like so:

```cpp
class MyClass {
    // ...
private:
    float _my_member_variable = 0.f;
};
```

### Formatting

We use the famous ```clang-format``` as our formatting tool. You will need to install it (on Windows this happens through the ```Visual Studio Installer```: modify your ```Visual Studio Build Tools``` and add ```C++ Clang Tools for Windows```).

Then for VS Code I recommended this extension: [xaver.clang-format](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format) ; and you should enable ```Format on Save``` in your VS Code settings. After that it should just work.

Note that in some very specific cases you can disable ```clang-format``` locally to use some non-standard formatting, using these special comments:

```cpp
// clang-format off
void on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }
void on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }
void on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }
void on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }
// clang-format on
```
