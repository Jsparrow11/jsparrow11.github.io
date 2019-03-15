---
title: Use Stream::collect
description:
    Replaces 'Stream::forEach' with 'Stream::collect' if the argument of the 'forEach' statement is only used for adding elements to a list.
    This simplifies adding elements to a list.
tags: ["Java 8", "Lambda", "Loop"]
---

# Use Stream::collect

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 15 min |
| Links                           |       |

## Description
Replaces `Stream::forEach` with `Stream::collect` if the argument of the `forEach` statement is only used for adding elements to a list.
This simplifies adding elements to a list.

## Benefits

This rule provides an easier-to read alternative to add items in a list.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
objectList.stream()
    .map(o -> o.substring(0))
    .forEach( oString -> {
         oStrings.add(oString);
     });
```

__Post__
```java
oStrings.addAll(objectList.stream()
    .map(o -> o.substring(0))
    .collect(Collectors.toList()));
```