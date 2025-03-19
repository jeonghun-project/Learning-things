(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{601:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nestjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nestjs"}},[t._v("#")]),t._v(" nestjs")]),t._v(" "),s("p",[t._v("현재 회사의 신규 프로젝트로 nestjs로 구성된 서버를 빌드업 중에 있다.")]),t._v(" "),s("p",[t._v("앞으로 nestjs + mongodb + graphql + swagger + jest 에 대한 내용을 천천히 살펴볼 예정이다.")]),t._v(" "),s("p",[t._v("이번 글에서는 nestjs와 그 핵심 개념에 대하여 알아보도록 하겠다.")]),t._v(" "),s("h2",{attrs:{id:"nestjs-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nestjs-2"}},[t._v("#")]),t._v(" nestjs")]),t._v(" "),s("p",[t._v("nestjs 홈페이지 메인을 살펴보면 이러한 문구를 가장 처음 만날 수 있다.")]),t._v(" "),s("blockquote",[s("p",[t._v("A progressive Node.js framework for building efficient, reliable and scalable server-side applications.")])]),t._v(" "),s("p",[t._v("효율적이고 안정적이면서 확장성 있는 서버사이드 어플리케이션을 구축하기 위한 진보한 node.js 프레임워크이다.")]),t._v(" "),s("p",[t._v("과연 이 말은 어디까지가 진짜이고 어디까지가 가짜인 것일까 한번 살펴보기로하자.")]),t._v(" "),s("p",[t._v("우선은 진보한 node.js framework이라는 것은 기존의 node.js 서버사이드 프레임워크인 express가 대표적인 비교군이 될 것 같다.")]),t._v(" "),s("p",[t._v("소개 페이지를 살펴보면 완벽한 "),s("code",[t._v("Typescript")]),t._v("를 지원하고, 선택적으로 "),s("code",[t._v("javascript")]),t._v("또한 지원하며 OOP, FP, FRP 등의 페러다임을 모두 조합하는 것 또한 가능하다고 한다.(와우...)")]),t._v(" "),s("h3",{attrs:{id:"philosophy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#philosophy"}},[t._v("#")]),t._v(" Philosophy")]),t._v(" "),s("p",[s("code",[t._v("nest.js")]),t._v("의 철학은 매우 빠르고 효과적인 프론트엔드 프레임워크들은 존재 하지만, 편의성뿐 아니라 구조적(Architecture)에 대한 문제도 해결할 수 있는 "),s("code",[t._v("server-side")]),t._v(" 프레임워크에 대한 부제(javascript)에 대한 갈증을 해결하기 위하여 등장하였다고 한다.")]),t._v(" "),s("p",[t._v("아키텍쳐 자체는 "),s("code",[t._v("Angular")]),t._v("에서 큰 영감을 받았고, 테스트 가능성과 느슨한 결합, 쉬운 유지 관리, 확장성등을 확보하는 것을 주요한 철학으로 생각한다고 한다.")]),t._v(" "),s("h2",{attrs:{id:"nest-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nest-cli"}},[t._v("#")]),t._v(" nest Cli")]),t._v(" "),s("p",[s("code",[t._v("nest.js")]),t._v("에 경우에는 간단하게 CLI를 통해서 프로젝트를 시작할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" @nestjs/cli\n$ nest new project-name\n")])])]),s("p",[t._v("이러한 커맨드를 통해서 기본적인 nest.js 프로젝트 파일을 만들고, "),s("code",[t._v("npm run start")]),t._v("를 통해서 "),s("code",[t._v("3000")]),t._v(" 포트로 서버를 열어 볼 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"nest-기본-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nest-기본-구조"}},[t._v("#")]),t._v(" nest 기본 구조")]),t._v(" "),s("p",[s("code",[t._v("nest.js")]),t._v("를 구성하는 핵심 구조에 대하여서 알아보자. nest.js App을 구성하는 필수적인 구성요소에 대해 다룬다.")]),t._v(" "),s("p",[t._v("nest project 구조를 살펴보면")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("src\n - app.controller.spec.ts\n - app.controller.ts\n - app.module.ts\n - app.service.ts\n - main.ts\n")])])]),s("p",[t._v("이러한 구조의 파일 트리를 볼수 있을 것이고")]),t._v(" "),s("p",[t._v("nest.js 홈페이지에서 각각의 확장자들이 어떤역활을 하는지 알 수 있다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("files")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("controller.ts")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("single router를 포함한 기본 컨트롤러")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("controller.spec.ts")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("unit test")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("module.ts")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("어플리케이션의 모듈")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("service.ts")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("single method를 포함한 기본 service")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("main.ts")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("서버의 시작 파일 NestFactory 함수를 사용하여 어플리케이션의 인스턴스를 생성")])])])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NestFactory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@nestjs/core"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NestFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("NestFactory의 내장 메소드를 통하여 서버를 생성하고, 열어줄 수 있다. 이는 Express서버에서 사용하는 일반적인 구조와 유사하다.")]),t._v(" "),s("p",[t._v("기본적으로 nest.js는 node 환경의 http를 사용하는 모든 프레임워크와 호환이 가능하니 참고하자.")]),t._v(" "),s("h2",{attrs:{id:"controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),s("p",[t._v("컨트롤러는 요청(Request)를 처리하고 응답(Response)를 반환하는 역활을 한다.")])])}),[],!1,null,null,null);s.default=n.exports}}]);