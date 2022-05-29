(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{615:function(e,a,r){"use strict";r.r(a);var t=r(17),l=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"第三题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三题"}},[e._v("#")]),e._v(" 第三题")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[3, 2, 1].reduce(Math.pow);\n")])])]),r("ul",[r("li",[e._v("Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  reduce((pre, item) => {\n      Math.pow(pre, item)\n  });\n")])])]),r("ul",[r("li",[e._v("第一次循环pre, item 为(3, 2) 经过math.pow() 返回 9")]),e._v(" "),r("li",[e._v("第二次循环pre, item 为(9, 1) 再次返回 9")])]),e._v(" "),r("p",[r("code",[e._v("[].reduce(Math.pow)")])]),e._v(" "),r("ul",[r("li",[e._v("reduce所遍历的数组不应当为空数组 TypeError")]),e._v(" "),r("li",[e._v("数组为空且初始值 initialValue 未提供。会报错")])]),e._v(" "),r("h2",{attrs:{id:"reduce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[e._v("#")]),e._v(" reduce()")]),e._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[e._v("#")]),e._v(" 语法")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("   Arrow function\n   reduce((previousValue, currentValue) => { /* ... */ } )\n   reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )\n   reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )\n   reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)\n\n      Callback function\n   reduce(callbackFn)\n   reduce(callbackFn, initialValue)\n")])])]),r("ul",[r("li",[r("p",[e._v("callbackFn一个 “reducer” 函数，包含四个参数：")])]),e._v(" "),r("li",[r("p",[e._v("previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。")])]),e._v(" "),r("li",[r("p",[e._v("currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。")])]),e._v(" "),r("li",[r("p",[e._v("currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。")])]),e._v(" "),r("li",[r("p",[e._v("array：用于遍历的数组。")])]),e._v(" "),r("li",[r("p",[e._v("initialValue 可选\n作为第一次调用 callback 函数时参数 previousValue 的值。若指定了初始值 initialValue，则 currentValue 则将使用数组第一个元素；否则 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。")])]),e._v(" "),r("li",[r("p",[e._v("异常\nTypeError\n数组为空且初始值 initialValue 未提供。")])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("   const a = [1, 2, 3, 4, 5].reduce((pre, item, index, arr) => {\n       console.log(pre, item, index, arr);     \n          console.log(pre);\n       return pre + item\n   })\n   console.log(a);\n/**    返回结果为：\n   1 2 1 [ 1, 2, 3, 4, 5 ]\n   3 3 2 [ 1, 2, 3, 4, 5 ]\n   6 4 3 [ 1, 2, 3, 4, 5 ]\n   10 5 4 [ 1, 2, 3, 4, 5 ]\n   15\n*/ \n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);