---
title: Git guidelines
---

## Make a lot of small commits

As soon as you have made some progress and the code compiles, make a commit !

Try to avoid mixing _unrelated_ changes in a single commit: If you have made lots of changes, consider pushing them in separate commits that make sense.

## Message style

Be explicit. Don't strip words from your sentence.

When appropriate, specify inside `[]` which class / file / module is modified by the commit.

Example commit message: The class `NodeEditor` of the `is0` module has been modified:

```
[is0::NodeEditor] Generate sceneSDF from the nodes
```

## Gitmoji

Use [gitmoji](https://youtu.be/uBLWVxnPLP4).

You can see the ones we use regularly in the [tooling](https://github.com/CoolLibs/tooling/blob/main/gitmoji.md) folder of any Cool project.

## Work on a branch

**Never commit directly to the `main` branch !** This is to avoid having to resolve merge conflicts on every commit while many people work on different aspects of the code. It is simpler that we each work on a branch, and only merge once in a while.

When you start working on a feature, create a dedicated branch and work there.

Once the feature is finished (or advanced enough that it would be interesting to merge):

- merge `main` into your branch and resolve any conflict that might arise
- submit a pull request and wait for the peer review
- once the review is done the reviewer will merge your pull request

## Write nice Pull Requests

Before you submit your PR for review:

- Double check the names you gave. Ask yourself: would someone who doesn't know the codebase have a clue as to what `functionXxx()` does?
- Look for duplicated code and refactor it away.
- Make sure the code will be easy to change in the future.
