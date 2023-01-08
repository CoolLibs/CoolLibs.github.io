
Setting the current index should be the first thing you do, eg

```c
for(int i = 0; i < `N`; ++i)
{
    `Index` = i;

    vec4 col = `Image`(uv);
    color = `Blend Mode`(col, color);
}
```