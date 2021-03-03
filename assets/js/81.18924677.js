(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{505:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"use-local-variable-type-inference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-local-variable-type-inference"}},[t._v("#")]),t._v(" Use Local Variable Type Inference")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#properties"}},[t._v("Properties")])]),s("li",[s("a",{attrs:{href:"#description"}},[t._v("Description")])]),s("li",[s("a",{attrs:{href:"#benefits"}},[t._v("Benefits")])]),s("li",[s("a",{attrs:{href:"#code-changes"}},[t._v("Code Changes")]),s("ul",[s("li",[s("a",{attrs:{href:"#variable-declarations"}},[t._v("Variable Declarations")])]),s("li",[s("a",{attrs:{href:"#loops"}},[t._v("Loops")])])])]),s("li",[s("a",{attrs:{href:"#limitations"}},[t._v("Limitations")]),s("ul",[s("li",[s("a",{attrs:{href:"#initializer-containing-diamond-operator"}},[t._v("Initializer containing  diamond operator")])]),s("li",[s("a",{attrs:{href:"#initialization-with-a-subtype"}},[t._v("Initialization with a subtype")])]),s("li",[s("a",{attrs:{href:"#raw-types"}},[t._v("Raw types")])])])]),s("li",[s("a",{attrs:{href:"#tags"}},[t._v("Tags")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("RuleProperties"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("The derivable types on the declaration of local variables are replaced by the reserved word "),s("code",[t._v("var")]),t._v(".\nKeep in mind that the transformation is only useful, if the variables have speaking names, otherwise it is only disguising the nature of the variable.\nThe transformation is avoided for primitive types. For safety reasons, the transformation is also avoided if the initializer is an anonymous class declaration.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Requirements")]),t._v(" "),s("p",[t._v("Java 10")])]),t._v(" "),s("h2",{attrs:{id:"benefits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[t._v("#")]),t._v(" Benefits")]),t._v(" "),s("p",[t._v("This rule reduces the length of variable definitions and therefore  improves the readability if the variable is named properly drastically.")]),t._v(" "),s("h2",{attrs:{id:"code-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-changes"}},[t._v("#")]),t._v(" Code Changes")]),t._v(" "),s("h3",{attrs:{id:"variable-declarations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variable-declarations"}},[t._v("#")]),t._v(" Variable Declarations")]),t._v(" "),s("p",[t._v("The list is currently not complete.")]),t._v(" "),s("p",[s("strong",[t._v("Pre")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDefinedType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDefinedType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Post")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDefinedType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"loops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loops"}},[t._v("#")]),t._v(" Loops")]),t._v(" "),s("p",[s("strong",[t._v("Pre")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDefinedType")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Post")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("p",[t._v("The following contains a list of cases where a transformation of type to "),s("code",[t._v("var")]),t._v(" is not possible.")]),t._v(" "),s("h3",{attrs:{id:"initializer-containing-diamond-operator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initializer-containing-diamond-operator"}},[t._v("#")]),t._v(" Initializer containing  diamond operator")]),t._v(" "),s("p",[t._v("If the initialization of a local variable declaration uses diamond operator, then "),s("code",[t._v("var")]),t._v(" can still be used but the argument type will be converted to Object. This may lead to compilation errors. Consider the example:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" userIds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumeIds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumeIds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" userIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Transforming the "),s("code",[t._v("List<String>")]),t._v(" to "),s("code",[t._v("var")]),t._v(", would change the type of the userIds to "),s("code",[t._v("ArrayList<Object>")]),t._v(" which is not expected by the consumeIds method.")]),t._v(" "),s("h3",{attrs:{id:"initialization-with-a-subtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialization-with-a-subtype"}},[t._v("#")]),t._v(" Initialization with a subtype")]),t._v(" "),s("p",[t._v("If the type of the initializer is a subtype of the declared type, then the transformation is not always possible. Consider the following lines:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The type "),s("code",[t._v("List<String>")]),t._v(" cannot be replaced with "),s("code",[t._v("var")]),t._v(" because in the second line, list is being reassigned with LinkedList which is not assign-compatible with ArrayList.")]),t._v(" "),s("h3",{attrs:{id:"raw-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raw-types"}},[t._v("#")]),t._v(" Raw types")]),t._v(" "),s("p",[t._v("If the declaration or the initializer are raw type, then the transformation is not possible without changing the type of the variable. The following table shows the cases when a "),s("code",[t._v("var")]),t._v(" can be used instead of the concrete type:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("declaration")]),t._v(" "),s("th",[t._v("initialization")]),t._v(" "),s("th",[t._v("state")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("raw")]),t._v(" "),s("td",[t._v("raw")]),t._v(" "),s("td",[t._v("works")])]),t._v(" "),s("tr",[s("td",[t._v("raw")]),t._v(" "),s("td",[t._v("concrete")]),t._v(" "),s("td",[t._v("not all cases are possible")])]),t._v(" "),s("tr",[s("td",[t._v("concrete")]),t._v(" "),s("td",[t._v("raw")]),t._v(" "),s("td",[t._v("not all cases are possible")])]),t._v(" "),s("tr",[s("td",[t._v("concrete")]),t._v(" "),s("td",[t._v("concrete")]),t._v(" "),s("td",[t._v("works")])])])]),t._v(" "),s("VersionNotice"),t._v(" "),s("h2",{attrs:{id:"tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" Tags")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tags")]),t._v(" "),s("TagLinks")],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);