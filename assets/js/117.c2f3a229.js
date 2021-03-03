(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{541:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stringbuffer-to-stringbuilder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stringbuffer-to-stringbuilder"}},[t._v("#")]),t._v(" StringBuffer() to StringBuilder()")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#properties"}},[t._v("Properties")])]),s("li",[s("a",{attrs:{href:"#description"}},[t._v("Description")])]),s("li",[s("a",{attrs:{href:"#benefits"}},[t._v("Benefits")])]),s("li",[s("a",{attrs:{href:"#code-changes"}},[t._v("Code Changes")]),s("ul",[s("li",[s("a",{attrs:{href:"#bytecode-jdk-1-8"}},[t._v("Bytecode JDK 1.8")])])])]),s("li",[s("a",{attrs:{href:"#tags"}},[t._v("Tags")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("RuleProperties"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("This rule changes the type of local variables from StringBuffer() to StringBuilder(). The "),s("code",[t._v("java.lang.StringBuilder")]),t._v(" and the "),s("code",[t._v("java.lang.StringBuffer")]),t._v(" have exactly the same API and functionality, so it could just be replaced without any effort. The only difference is, that "),s("code",[t._v("StringBuffer")]),t._v(" uses synchronized methods, which doesn't automatically result in thread safety. In almost all cases, it is recommended to use StringBuilder because no locking and syncing is done. Hence, it's faster. Also the java compiler optimizes strings, which are altered, and replaces them with "),s("code",[t._v("StringBuilder")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"benefits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[t._v("#")]),t._v(" Benefits")]),t._v(" "),s("p",[t._v("When running programs in a single thread, which is generally the case, "),s("code",[t._v("StringBuilder")]),t._v(" offers performance benefits over StringBuffer. This is due to the fact that "),s("code",[t._v("StringBuffer")]),t._v(" is synchronized and "),s("code",[t._v("StringBuilder")]),t._v(" is not. For a reference see "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/index.html?java/lang/StringBuilder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"code-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-changes"}},[t._v("#")]),t._v(" Code Changes")]),t._v(" "),s("p",[s("strong",[t._v("Pre")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" localStringBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Post")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" localStringBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"bytecode-jdk-1-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bytecode-jdk-1-8"}},[t._v("#")]),t._v(" Bytecode JDK 1.8")]),t._v(" "),s("p",[s("strong",[t._v("Pre")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("original")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" 0 new #2 <java/lang/StringBuffer>\n 3 dup\n 4 invokespecial #3 <java/lang/StringBuffer.<init>>\n 7 astore_1\n 8 aload_1\n 9 ldc #4 <val1>\n11 invokevirtual #5 <java/lang/StringBuffer.append>\n14 pop\n15 aload_1\n16 ldc #6 <val2>\n18 invokevirtual #5 <java/lang/StringBuffer.append>\n21 pop\n22 aload_1\n23 invokevirtual #7 <java/lang/StringBuffer.toString>\n26 astore_2\n27 aload_2\n28 areturn\n")])])]),s("p",[s("strong",[t._v("Post")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" 0 new #8 <java/lang/StringBuilder>\n 3 dup\n 4 invokespecial #9 <java/lang/StringBuilder.<init>>\n 7 astore_1\n 8 aload_1\n 9 ldc #4 <val1>\n11 invokevirtual #10 <java/lang/StringBuilder.append>\n14 pop\n15 aload_1\n16 ldc #6 <val2>\n18 invokevirtual #10 <java/lang/StringBuilder.append>\n21 pop\n22 aload_1\n23 invokevirtual #11 <java/lang/StringBuilder.toString>\n26 astore_2\n27 aload_2\n28 areturn\n")])])]),s("VersionNotice"),t._v(" "),s("h2",{attrs:{id:"tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" Tags")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tags")]),t._v(" "),s("TagLinks")],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);