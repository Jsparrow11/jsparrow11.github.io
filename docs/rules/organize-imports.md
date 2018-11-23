---
title: Organize Imports
description:
    Organize Imports according to the Eclipse's built in Organize Imports functionality.
---

# Organize Imports

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9.2   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 1 min |
| Links                           | [RSPEC-1128](https://rules.sonarsource.com/java/RSPEC-1128) |

## Description

Organizes the imports of a java class. Removes unused imports and applies an alphanumeric order.   

## Benefits

Imports that are not used are optimized away by the compiler. Regardless, they clutter up the file and might lead to confusion. Removing unused imports and applying alphanumeric order improves readability and maintainability.    

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, Formatting, Readability
:::

## Code Changes

__Pre__

``` java
package at.splendit.simonykees.sample.preRule;
import java.util.ArrayList;
import java.util.Locale;
import java.util.List;
import java.util.stream.*;
import org.apache.commons.lang3.StringUtils;
public class OrganiseImportsRule {
    public String a(String s) {
        return StringUtils.upperCase(s, Locale.CANADA_FRENCH);
    }
    public String b(String s) {
        List<String> list = new ArrayList<>();
        list.add(s);
        return list.get(list.indexOf(s));
    }
}
```

__Post__

``` java
package at.splendit.simonykees.sample.postRule.allRules;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import org.apache.commons.lang3.StringUtils;
public class OrganiseImportsRule {
    public String a(String s) {
        return StringUtils.upperCase(s, Locale.CANADA_FRENCH);
    }
    public String b(String s) {
        List<String> list = new ArrayList<>();
        list.add(s);
        return list.get(list.indexOf(s));
    }
}
```