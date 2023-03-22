(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{396:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("Table of Contents")]),s._v(" "),a("em",[s._v("generated with "),a("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[s._v("DocToc"),a("OutboundLink")],1)])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%A8%8B%E5%BA%8F%E8%AE%A1%E6%95%B0%E5%99%A8"}},[s._v("程序计数器")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[s._v("介绍")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BD%9C%E7%94%A8"}},[s._v("作用")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA"}},[s._v("代码演示")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8pc%E5%AF%84%E5%AD%98%E5%99%A8%E5%AD%98%E5%82%A8%E5%AD%97%E8%8A%82%E7%A0%81%E6%8C%87%E4%BB%A4%E5%9C%B0%E5%9D%80%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8%E5%91%A2"}},[s._v("使用PC寄存器存储字节码指令地址有什么用呢？")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#pc%E5%AF%84%E5%AD%98%E5%99%A8%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%E8%AE%BE%E5%AE%9A%E4%B8%BA%E7%A7%81%E6%9C%89%E7%9A%84"}},[s._v("PC寄存器为什么被设定为私有的？")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#cpu%E6%97%B6%E9%97%B4%E7%89%87"}},[s._v("CPU时间片")])])])])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"程序计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[s._v("#")]),s._v(" 程序计数器")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("JVM中的程序计数寄存器（Program Counter Register）中，Register的命名源于CPU的寄存器，寄存器存储指令相关的现场信息。CPU只有把数据装载到寄存器才能够运行。这里，并非是广义上所指的物理寄存器，或许将其翻译为PC计数器（或指令计数器）会更加贴切（也称为程序钩子），并且也不容易引起一些不必要的误会。"),a("strong",[s._v("JVM中的PC寄存器是对物理PC寄存器的一种抽象模拟。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705155551919.png",alt:"image-20200705155551919"}})]),s._v(" "),a("p",[s._v("它是一块很小的内存空间，几乎可以忽略不记。也是运行速度最快的存储区域。")]),s._v(" "),a("p",[s._v("在JVM规范中，每个线程都有它自己的程序计数器，是线程私有的，生命周期与线程的生命周期保持一致。")]),s._v(" "),a("p",[s._v("任何时间一个线程都只有一个方法在执行，也就是所谓的当前方法。程序计数器会存储当前线程正在执行的Java方法的JVM指令地址；或者，如果是在执行native方法，则是未指定值（undefined）。")]),s._v(" "),a("p",[s._v("它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令。")]),s._v(" "),a("p",[a("strong",[s._v("它是唯一一个在Java虚拟机规范中没有规定任何OutOfMemoryError情况的区域。")])]),s._v(" "),a("h2",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),a("blockquote",[a("p",[s._v("PC寄存器用来存储指向下一条指令的地址，即下一步将要执行的指令代码。由执行引擎读取下一条指令。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705155728557.png",alt:"image-20200705155728557"}})]),s._v(" "),a("h2",{attrs:{id:"代码演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[s._v("#")]),s._v(" 代码演示")]),s._v(" "),a("p",[s._v("我们首先写一个简单的代码")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PCRegisterTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后将代码进行编译成字节码文件，我们再次查看 ，发现在字节码的左边有一个行号标识，它其实就是指令地址，用于指向当前执行到哪里。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": bipush        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": istore_1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": bipush        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": istore_2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": iload_1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": iload_2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": iadd\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(": istore_3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("通过PC寄存器，我们就可以知道当前程序执行到哪一步了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705161007423.png",alt:"image-20200705161007423"}})]),s._v(" "),a("h2",{attrs:{id:"使用pc寄存器存储字节码指令地址有什么用呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用pc寄存器存储字节码指令地址有什么用呢"}},[s._v("#")]),s._v(" 使用PC寄存器存储字节码指令地址有什么用呢？")]),s._v(" "),a("p",[s._v("因为CPU需要不停的切换各个线程，这时候切换回来以后，就得知道切换到的当前线程应该接着从哪开始继续执行")]),s._v(" "),a("p",[s._v("JVM的字节码解释器就需要通过改变PC寄存器的值来明确下一条应该执行什么样的字节码指令。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705161409533.png",alt:"image-20200705161409533"}})]),s._v(" "),a("h2",{attrs:{id:"pc寄存器为什么被设定为私有的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc寄存器为什么被设定为私有的"}},[s._v("#")]),s._v(" PC寄存器为什么被设定为私有的？")]),s._v(" "),a("p",[s._v("我们都知道由于CPU时间片轮限制，众多线程在并发执行过程中，在一个特定的时间段内只会执行其中某一个线程的方法，任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令，CPU会不停地做任务切换，这样必然导致经常中断或恢复，如何保证分毫无差呢？")]),s._v(" "),a("p",[s._v("为了能够准确地记录各个线程正在执行的当前字节码指令地址，最好的办法自然是为每一个线程都分配一个PC寄存器，这样一来各个线程之间便可以进行独立计算，从而不会出现相互干扰的情况。")]),s._v(" "),a("p",[s._v("每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器在各个线程之间互不影响。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705161812542.png",alt:"image-20200705161812542"}})]),s._v(" "),a("h2",{attrs:{id:"cpu时间片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu时间片"}},[s._v("#")]),s._v(" CPU时间片")]),s._v(" "),a("p",[s._v("CPU时间片即CPU分配给各个程序的时间，每个线程被分配一个时间段，称作它的时间片。")]),s._v(" "),a("p",[s._v("在宏观上：我们可以同时打开多个应用程序，每个程序并行不悖，同时运行。")]),s._v(" "),a("p",[s._v("但在微观上：由于只有一个CPU，一次只能处理程序要求的一部分，如何处理公平，一种方法就是引入时间片，每个程序轮流执行。")]),s._v(" "),a("p",[s._v("所以我们通常说的多线程并发并不是多个线程同时执行，虽然在不停的切换线程进行执行，但由于CPU运行速度很快，看着像并行，实际并不是")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images.zaiolos.top/images/image-20200705161849557.png",alt:"image-20200705161849557"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);