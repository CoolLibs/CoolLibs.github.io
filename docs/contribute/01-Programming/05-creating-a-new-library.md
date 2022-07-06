---
title: How To | Create a new library
---

## Brief

If you are about to create a small system that doesn't have any dependencies on the rest of *Cool*, then making it into a standalone library makes a lot of sense.<br/>
We try to do that whenever possible because it encourages a more decoupled and flexible design, and makes it easily reusable by others without having to include the whole of *Cool*.

## How to

- Create a new repository from [our template](https://github.com/CoolLibs/library-template).<br/>
⚠️ **Make sure the _Owner_ is set to CoolLibs, not to your personal account!**

![](./img/set_owner_to_coollibs.png)
- Make sure the repo is public.
- In the newly created repo, fill in "setup.py", run the script, and then amend the initial commit and rename it as `🎉 Initial commit`.
- Add it to [our list of libraries](https://github.com/CoolLibs/.github/edit/main/profile/README.md).
- Implement the library.
- Once the library is stable and you are ready to mark it as V1, make a release on GitHub and write an article about it in our blog.