(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{412:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"running-sum-of-1d-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-sum-of-1d-array"}},[t._v("#")]),t._v(" Running Sum of 1d Array")]),t._v(" "),a("ul",[a("li",[t._v("생성일: 2021년 2월 9일 오후 8:23")]),t._v(" "),a("li",[t._v("태그: leetCode, 완료")]),t._v(" "),a("li",[t._v("언어: Javascript")])]),t._v(" "),a("h1",{attrs:{id:"문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문제"}},[t._v("#")]),t._v(" 문제")]),t._v(" "),a("p",[t._v("Given an array "),a("code",[t._v("nums")]),t._v(". We define a running sum of an array as "),a("code",[t._v("runningSum[i] = sum(nums[0]…nums[i])")]),t._v(".")]),t._v(" "),a("p",[t._v("Return the running sum of "),a("code",[t._v("nums")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"제한사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제한사항"}},[t._v("#")]),t._v(" 제한사항")]),t._v(" "),a("h2",{attrs:{id:"입출력-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#입출력-예"}},[t._v("#")]),t._v(" 입출력 예")]),t._v(" "),a("p",[a("img",{attrs:{src:"src/_2021-02-09__8.24.13.png",alt:"src/_2021-02-09__8.24.13.png"}})]),t._v(" "),a("h2",{attrs:{id:"풀이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#풀이"}},[t._v("#")]),t._v(" 풀이")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("runningSum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//for문으로 nums의 요소를 result 배열에 push한다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//임시 저장소에 요소를 저장하고, ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//다음 요소와 더하여 result 배열에 push한다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//끝 까지 반복한다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"유의할-점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유의할-점"}},[t._v("#")]),t._v(" 유의할 점")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("runningSum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nums.slice(0, i) 를 통해 nums 배열을 i길이 만큼의 형태로 만든다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reduce에 해당 slice형태를 넘긴다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return 값을 새로운 arr의 i번째 인덱스에 추가한다.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" last "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vcc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" vcc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("reduce의 경우 빅오 표기법에 의해 O(1)의 push과정과 할당 과정이 추가되어 상대적으로 미세하게 느림")])])}),[],!1,null,null,null);s.default=r.exports}}]);