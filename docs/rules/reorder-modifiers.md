---
title: Reorder Modifiers
description:
    This rule reorders the modifiers on Type, Field and Method declarations.

tags: ["Java 1.1", "Coding Conventions", "Readability"]
---

# Reorder Modifiers

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [3.6.0](/eclipse/release-notes.html#_3-6-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 2 min |
| Links                           | [squid:ModifiersOrderCheck](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AModifiersOrderCheck&q=ModifiersOrderCheck) |

## Description

This rule reorders the modifiers on Type, Field and Method Declarations in the following priority: 

* ```public```
* ```protected```
* ```private```
* ```abstract```
* ```default```
* ```static```
* ```final```
* ```transient```
* ```volatile```
* ```synchronized```
* ```native```
* ```strictfp```

## Benefits

Improves the readability by unifying the order of modifiers in Type, Field and Method declarations. 

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Field Declarations 
__Pre__
```java
final static public String FINAL_STATIC_PUBLIC = "";  
static final public String STATIC_FINAL_PUBLIC = "";  
final public static String FINAL_PUBLIC_STATIC = "";  
public final static String PUBLIC_FINAL_STATIC = "";  
static public final String STATIC_PUBLIC_FINAL = "";  
public static final String PUBLIC_STATIC_FINAL = "";  
```
__Post__
```java
public static final String FINAL_STATIC_PUBLIC = "";
public static final String STATIC_FINAL_PUBLIC = "";
public static final String FINAL_PUBLIC_STATIC = "";
public static final String PUBLIC_FINAL_STATIC = "";
public static final String STATIC_PUBLIC_FINAL = "";
public static final String PUBLIC_STATIC_FINAL = "";
```

### Methods Declaration
__Pre__
```java
static synchronized protected final void staticMethod() {
    ...
}
```
__Post__
```java
protected static final synchronized void staticMethod() {
    ...
}
```

### Type Declaration 
__Pre__
```java
static private class PrivateStaticClass {
    ...
} 
```
__Post__
```java
private static class PrivateStaticClass {
    ...
} 
```

<VersionNotice />
