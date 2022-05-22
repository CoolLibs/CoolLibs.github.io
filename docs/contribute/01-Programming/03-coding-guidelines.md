---
title: Coding guidelines
---

## Keep functions short

This helps a lot with code readability and code reuse.

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/write-small-functions/).

## Prefer free functions

They help a lot with decoupling, code reuse, testing, _etc._

**NB:** This doesn't mean that member functions are bad or that you should never use them. If you need to encapsulate data and only access it in well defined ways, a member function is the way to go. But if something can be done using only the public interface of a class, then a free function is preferable to a member function.

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions/).

## Appreciate simple structs

They are amazing to group data together, and make for very great abstractions. As long as your data doesn't have to respect any invariant, a `struct` is preferable to a `class` because it is simpler.

Often they will help with parameter passing: if you realize that you are passing the same 4 arguments around, then it probably means that there is room for an abstraction here. Puting these 4 values into a struct makes the intent clearer, and also reduces knowledge duplication (if you at some point need to add a 5th value to achieve what you need to do, you don't have to edit a bunch of functions that had the same 4 parameters, you can just edit the struct).

With C++ 20's _designated initializers_, `struct`s have become even more awesome: they make your code more readable and allow for named parameters:

```cpp
// Not readable at all! You have to go look up what WindowConfig is.
Cool::run<App>({Cool::WindowConfig{"Cool Lab",
                                   1280,
                                   720,
                                   true,
                                   false}});

// Completely clear
Cool::run<App>({Cool::WindowConfig{.title                       = "Cool Lab",
                                   .initial_width               = 1280,
                                   .initial_height              = 720,
                                   .cap_framerate_on_startup_if = true,
                                   .maximize_on_startup_if      = false}});
```

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data/).

## Keep cohesion inside your classes

A class should not be too big, and should not be handling the details of more than one system. If you start to see different and independent bits of logic grow inside a class, then separate them in two classes.

In short, follow the Single Responsibility Principle.

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes/).

## Use behavioural inheritance with great care

Class hierarchies can easily become wild and hard to understand. Also, there are very few domains that are actually accurately modeled by a hierarchical structure. This means that often (in poorly designed class hierarchies), some child classes end up inheriting things that they don't need, because there isn't a strict _is a_ relationship between them and their parents.

_Composition_ is much more flexible than inheritance and should be prefered in most cases. By using small structs and free functions you can achieve the same code reuse as with inheritance, but with less coupling! (And actually it is even easier to reuse code this way).

If you are want polymorphism, you can achieve it dynamically through `std::variant` or _type erasure_, and statically through _function overloading_ and _templates_.

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance/).

## Name with empathy

**Naming is important (and hard)**, so please be mindful when you choose a name. Be explicit, **don't be too afraid of long names**. And most importantly: make sure the name describes what the thing is, nothing more, nothing less.
Also, **don't hesitate to rename** as soon as you find a better name to describe what your thing actually is or does. (And by the way, _right click -> Rename_ is an amazing feature).

The ideal name is very concise and allows readers to instantly understand what the thing is / does.
If you can't find such a name, then the second best thing is a long name that still perfectly describes the object.
Only misleading names are bad and not tolerated.

[About naming](https://youtu.be/FyCYva9DhsI?t=2494) (watch from 41:34 to 51:30 if you want to laugh a lot) (By the way, watch the whole conference it's great).

[A whole conference by Kate Gregory](https://youtu.be/MBRoCdtZOYg).

:::tip
To help you find good names, imagine yourself explaining to someone what the function does (or even better, actually find someone and explain it to them). Listen to the words that you will naturally say: they will often be a very good name for your function. And even if it is a full sentence, a long name is better than a bad one.
:::

To learn more: [_Learn Clean Code with C++_](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/naming/).

## Fix bugs as you see them

Or at least write them down [in our To-Do list](https://github.com/orgs/CoolLibs/projects/1/views/1).<br/>
No codebase is perfect and bugs and poor code exist everywhere. If you think you just spotted one, take a deeper look into it. Try to fix it or at least raise other people's attention about it.

## Refer to the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

There are a lot of great people out there that have gathered a big list of great ideas and best practices.

You can start by watching this amazing conference:

<iframe width="880" height="495" src="https://www.youtube.com/embed/XkDEzfpdcSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Write debug checks

If there is some invariant that must be verified, add debug checks to make sure users of your code don't mess up!
You can use `assert()` in the simpler cases, but sometimes you will need to add variables to keep track of some state. In that case, wrap the debug code in a

```cpp
#if DEBUG
// . . .
#endif
```

block so that it doesn't impact release build performance.

An example would be to make sure an initialization function is called once, and only once:

```cpp
class MyClass {
public:
    void initialize() {
#if DEBUG
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
#if DEBUG
    bool _is_initialized = false;
#endif
};
```

## Coding style

Coding styles don't matter, and that's why we simply have to choose one and stick to it.

**There is no right answer** to where you should put your curly braces, or whether you shoud use camelCase or snake_case. If there was, all the developers of the world would have agreed on it years ago.

### Snake Case

I used to use camelCase, and then started to learn Rust which forces you to use snake_case. And well, after a short period of adaptation I started really enjoying snake case because the separation between words is clearer, and therefore long names are easier to read.

- We use _snake_case_ for variables and functions.
- We use _PascalCase_ for types, namespaces and enum values.

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

We use the famous `clang-format` as our formatting tool. You will need to install it (on Windows this happens through the `Visual Studio Installer`: modify your `Visual Studio Build Tools` and add `C++ Clang Tools for Windows`).

Then for VS Code I recommend this extension: [xaver.clang-format](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format); and you should enable `Format on Save` in your VS Code settings. After that it should just work.

Note that in some very specific cases you can disable `clang-format` locally to use some non-standard formatting, using these special comments:

```cpp
// clang-format off
void on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }
void on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }
void on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }
void on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }
// clang-format on
```
