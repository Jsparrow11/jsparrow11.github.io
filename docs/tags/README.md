---
title: Tags
sidebarDepth: 3
---

# Tags

Tags describe properties of [jSparrow rules](/rules/) with the intent of grouping similar rules together and making them easier to find and search for. 

## Coding Conventions

Coding conventions for Java consist of a set of recommended code styles and best practices. 
Rules with this tag will alter source code parts to follow guides such as the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) more closely. 

<Tag tag-name="Coding Conventions" />

## Free

Rules with this tag are free to use without limitation. See [jSparrow Starter Registration](/eclipse/jsparrow-starter-registration.html) for more details.

<Tag tag-name="Free" />

## Lambda

Lambda expressions are anonymous and unnamed functions that enable you to treat functionality as a method argument or code as data. Lambda expressions are an integral part of the `java.util.stream` API.  

Whenever a rule has this tag, it means that either a lambda expression is introduced or manipulated. 

<Tag tag-name="Lambda" />

## Logging

Logging frameworks ease and standardize the process of logging for the Java platform. In particular, they provide flexibility by avoiding explicit output to the console. The location where logs are written becomes independent of the code and can be customized at runtime.

Rules marked with this tag either introduce logging or improve aspects of the same. 

<Tag tag-name="Logging" />

## Loop

A loop is an instruction that repeats until a specified condition is reached. Examples would be `for`, `while`, or `forEach` loops. Respectively, rules with this tag will interact with such loops. 

<Tag tag-name="Loop" />

## Old Language Constructs

With additions to the Java platform, a shift towards new best practices is not uncommon, leading to old language constructs that can be improved by using more modern alternatives. 

jSparrow rules having this tag replace such constructs with more up-to-date alternatives. 

<Tag tag-name="Old Language Constructs" />

## Performance

Performance in programs is usually related to avoiding unnecessary computations, optimizing loops, or using efficient methods provided by common APIs. 

For rules, this tag indicates that a code fragment is replaced by a more performant one. 

<Tag tag-name="Performance" />

## Readability

Readability refers to the ease with which a human reader can comprehend the purpose, control flow, and operation of source code. It affects aspects of quality, including portability, usability, and most importantly maintainability.

According to that, rules marked with this tag improve on such aspects. 

<Tag tag-name="Readability" />

## Security

Security issues refer to vulnerabilities that can be exploited by an attacker to perform unauthorized actions within a computer program. 
Rules marked with this tag replace vulnerable code fragments with secure alternatives. 

<Tag tag-name="Security" />

## String Manipulation

String manipulation is the process of creating, parsing, or changing `String` variables or literals. Typical operations on strings include a concatenation of values or the creation of a `String` output based on the input of another type. 

jSparrow rules having this tag will therefore be related to such `String` operations. 

<Tag tag-name="String Manipulation" />

## Java Version Tags

Each rule has one Java version related tag, indicating the minimum required Java version of a project to apply the rule. 

### Java 1.1

<Tag tag-name="Java 1.1" />

### Java 1.2 

<Tag tag-name="Java 1.2" />

### Java 1.3

<Tag tag-name="Java 1.3" />

### Java 1.4

<Tag tag-name="Java 1.4" />

### Java 5

<Tag tag-name="Java 5" />

### Java 6

<Tag tag-name="Java 6" />

### Java 7

<Tag tag-name="Java 7" />

### Java 8

<Tag tag-name="Java 8" />

### Java 9

<Tag tag-name="Java 9" />

### Java 10

<Tag tag-name="Java 10" />