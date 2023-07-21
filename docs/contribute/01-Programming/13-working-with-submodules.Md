---
title: Working with submodules
---

Whenever you change branch on Lab, go to Cool and make sure to exit the "Detached HEAD" mode.

When creating a branch : create one branch on Lab and one on Cool, with the same names
When merging main into your branch : Lab first, then Cool and commit, then go back to Lab and commit only once Cool is at the right version
When merging PR : merge Cool first, then go to Lab and update it so that it points to the main branch of Cool, then you can merge the Lab PR.