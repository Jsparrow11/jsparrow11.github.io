---
title: Remove Modifiers in Interface Properties
description:
    Removes the 'public' modifiers from method declarations and 'public static final' modifiers from field declarations in Java interfaces.

tags: ["Java 1.1", "Readability"]
---

# Remove Modifiers in Interface Properties

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 3.3.0 |
| Minimum Java version            | 1.1   |
| Remediation cost                | 1 min |
| Links                           | [S2333](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AS2333&q=S2333) |

## Description

By default, the attributes declared in Java interfaces are `public`.
This rule, removes the `public` modifiers from method declarations and `public static final` modifiers from field declarations in interfaces.

Note, from Java 9 it is possible to have [`private` methods](http://openjdk.java.net/jeps/213) in interfaces, too. 

## Benefits

Removes the clutter and unifies the attributes of Java interfaces. 

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
public interface InterfaceWithProperties {
	
	public String FIELD_WITH_PUBLIC_MODIFIER = "";
	
	public static String FIELD_WITH_PUBLIC_STATIC_MODIFIER = "";
	
	public static final String FIELD_WITH_PUBLIC_STATIC_FINAL_MODIFIER = "";
	
	void method();
	
	public void publicMethod();
	
	public static void publicStaticMethod() {
		
	}
	
	public default void publicDefaultMethod() {
		
	}
}

```

__Post__
```java
public interface InterfaceWithProperties {
	
	String FIELD_WITH_PUBLIC_MODIFIER = "";
	
	String FIELD_WITH_PUBLIC_STATIC_MODIFIER = "";
	
	String FIELD_WITH_PUBLIC_STATIC_FINAL_MODIFIER = "";
	
	void method();
	
	void publicMethod();
	
	static void publicStaticMethod() {
		
	}
	
	default void publicDefaultMethod() {
		
	}
}
```