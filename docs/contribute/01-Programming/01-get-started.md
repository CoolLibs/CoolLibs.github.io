---
title: Get started
---

Install [clang-format](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/formatting-tool/) and [clang-tidy](https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/lessons/static-analysers/).

You can find our To-Do list [here](https://github.com/orgs/CoolLibs/projects/1/views/2).

Create a "gitignored" folder a save a "test.clb" project there. It will then automatically be saved whenever you make changes to it, and opened whenever you open Coollab. This allows you to keep your test setup upon restarting Coollab.
TODO create a page explaining how to edit the Default User Data (imgui.ini, color_config.json, etc)
If you add a third-party library, check its license and, if it requires it, make sure we install the license in the CMake:
```cmake
# LICENSE
set(CPACK_RESOURCE_FILE_LICENSE "${CMAKE_SOURCE_DIR}\\\\LICENSE")
install(FILES "lib/cpp-httplib/LICENSE" DESTINATION license/cpp-httplib)
```

Talk about debug options (and you can create your own)

Talk about shortcut for ImGui Item Picker
Talk about the ImGui demo window

TODO edit Lab's readme to point to the right section of this website for the devs. And move the part about how to run tests in this website.