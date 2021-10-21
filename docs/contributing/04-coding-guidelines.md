---
title: Coding guidelines
---

## Prefer free functions when possible

https://youtu.be/WLDT1lDOsb4

## Keep functions short

## Naming

**Naming is important (and hard)**, so please be mindful when you choose a name. Be explicit, **don't be too afraid of long names**. And most importantly : make sure the name describes what the thing is, nothing more, nothing less.
Also, **don't hesitate to rename** as soon as you realize the name doesn't quite match what the thing actually is or does. (And by the way, *right click -> Rename* is an amazing feature).

*About naming* :
https://www.youtube.com/watch?v=FyCYva9DhsI&t=41m34s (watch until at least 51:30 if you want to laugh a lot)

*About comments* :
https://www.youtube.com/watch?v=FyCYva9DhsI&t=24m49s

(By the way, watch the whole conference it's great)

## Refer to the [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

There is a lot of great people out there that have gathered a big list of great ideas for your code, and they might prove useful to you one day.

I would suggest you start by watching this amazing conference :

<iframe width="880" height="495" src="https://www.youtube.com/embed/XkDEzfpdcSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- ## Alignment

When you have multiple lines that are very similar, try to align the corresponding terms. This makes the similarities and differences between the lines way more obvious, and therefore the code structure clearer.

For example this :

```cpp
_angle_ground = _initial_angle_ground + delta.x;
_angle_up     = _initial_angle_up     + delta.y;
```

is, in my humble opinion, more readable than :

```cpp
_angle_ground = _initial_angle_ground + delta.x;
_angle_up = _initial_angle_up + delta.y;
``` -->

## Coding style

Coding styles don't matter, and that's why we simply have to choose one and stick to it.

**There is no right answer** to where you should put your curly braces, or whether you shoud use camelCase or snake_case. If there was, all the developers of the world would have agreed on it years ago.

https://www.youtube.com/watch?v=XkDEzfpdcSg&t=3m15s

### Snake Case

I used to use camel case, and then started to learn Rust which forces you to use snake_case. And well, after a short period of adaptation I started really enjoying snake case because the separation between words is clearer, and therefore long names are easier to read.

### Member variables

They are prefixed with an underscore like so :

```cpp
class MyClass {
public:
    MyClass() = default;
    MyClass(float my_member_variable);

private:
    float _my_member_variable = 0.f;
};
```

### Formatting

The formatting is done automatically through ```clang-format```.