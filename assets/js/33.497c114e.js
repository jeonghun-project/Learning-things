(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{447:function(s,t,a){s.exports=a.p+"assets/img/rxjs1.d78523fe.png"},448:function(s,t,a){s.exports=a.p+"assets/img/rxjs2.e3ec56e3.png"},587:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rxjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rxjs"}},[s._v("#")]),s._v(" rxjs")]),s._v(" "),t("p",[s._v("비동기 처리를 하기 위한 라이브러리 중 하나이다.")]),s._v(" "),t("ul",[t("li",[s._v("Callback")]),s._v(" "),t("li",[s._v("Promise")]),s._v(" "),t("li",[s._v("Generator")]),s._v(" "),t("li",[s._v("Async/Await")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("비동기 처리 뿐 아니라 데이터의 상태를 전파하고 처리를 위한 라이브러리")])]),s._v(" "),t("p",[s._v("일관된 방식으로 안전하게 데이터 흐름을 처리하는 라이브러리이다.")]),s._v(" "),t("p",[s._v("Application은 크게는 입력 => 로직 => 결과로 나누어 볼 수 있다.")]),s._v(" "),t("p",[s._v("우리는 이러한 입력값을 처리해야한다.")]),s._v(" "),t("p",[s._v("입력값은 크게 두 가지로 나뉜다. 동기(sync) 비동기(async)")]),s._v(" "),t("p",[s._v("이런 입력값을 받는 방식은 js에서는 무수히 다양하다.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("strong",[s._v("Rxjs는 이러한 다양한 방식을 일원화하여 처리할 수 있도록 돕는다.")])])]),s._v(" "),t("p",[s._v("이런 모든 Input을 "),t("code",[s._v("Observable")]),s._v("로 처리한다.")]),s._v(" "),t("p",[s._v("우리가 구성하는 어플리케이션은 대부분 상태를 다루른 함수들의 집합이다.")]),s._v(" "),t("p",[s._v("각각의 상태에 의존 관계를 가지고 각각을 처리하는 고민을 하는 과정이 개발자가 주로 고민하는 관점이 되겠다.")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("여기서 등장하는 관점이 "),t("code",[s._v("Reactive Programing")]),s._v(" 이다.")])]),s._v(" "),t("p",[s._v("데이터 흐름 상태 변화 전파에 중점을 둔 프로그램 패러다임, "),t("strong",[s._v("데이터의 변화의 흐름이 자동으로 전파되는 것이 핵심이다.")])]),s._v(" "),t("p",[t("strong",[s._v("Observer Pattern")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(447),alt:"rxjs"}})]),s._v(" "),t("p",[s._v("subject와 Observer 의 의존성이 줄어들어 쉽게 유지보수가 편리해진다.")]),s._v(" "),t("p",[s._v("Rxjs는 이러한 Observer Pattern을 적용할 수 있도록 돕는다.")]),s._v(" "),t("p",[t("img",{attrs:{src:a(448),alt:"rxjs"}})]),s._v(" "),t("p",[t("strong",[s._v("핵심 인터페이스")])]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("Observable")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Operator")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Observer")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Subscription")])])]),s._v(" "),t("li",[t("p",[s._v("Subject")])]),s._v(" "),t("li",[t("p",[s._v("Schesuler")])])]),s._v(" "),t("h3",{attrs:{id:"rxjs로-oberver-pattern-구현하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rxjs로-oberver-pattern-구현하기"}},[s._v("#")]),s._v(" Rxjs로 Oberver pattern 구현하기")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("모든 데이터 소스를 Observable로 만든다.")])]),s._v(" "),t("li",[t("p",[s._v("Operatro를 사용하여 데이터를 변경, 추출 합침, 분리를 이룬다.")])]),s._v(" "),t("li",[t("p",[s._v("원하는 데이터를 받아 처리하는 Observer를 만든다.")])]),s._v(" "),t("li",[t("p",[s._v("Observable의 subscribe를 통해 Observer를 등록한다.")])]),s._v(" "),t("li",[t("p",[s._v("Observable 구족을 정지하고 자원을 해지한다.")])])]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("rxjs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generic-function"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connectorUrl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Observable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("AxiosResponse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vendorModel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("httpService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token generic-function"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connectorUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" query"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" gql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("axiosResponse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" AxiosResponse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" axiosResponse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Reactive Programming의 핵심인 Observables를 통해 배열과 같은 데티어 항목의 컬렉션을 사용하는 것과 같이 동일하고 단순하게 작업 비동기 이벤트 스트림을 처리할 수 있도록하여,")]),s._v(" "),t("p",[s._v("불필요한 콜백 루프를 피할 수 있고, 코드를 더욱 가독성 있게 만들어 준다.")]),s._v(" "),t("p",[s._v("이는 함수형 프로그래밍을 구현하기위한 클로저 패턴이나 순수함수 형태의 함수를 구성하기에 유리하게 코드를 구성 할 수 있도록 돕는다.")]),s._v(" "),t("p",[s._v("Observables에 대하여 알아보자")]),s._v(" "),t("h3",{attrs:{id:"observables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#observables"}},[s._v("#")]),s._v(" Observables")]),s._v(" "),t("blockquote",[t("p",[s._v("서로 의존하지 않는 여러잡업이 있을 때 다음 작업을 시작하기 전에 각 작업이 완료되기를 기다리는 대신 동시에 모든 작업을 시작할 수 있도록 함.")])]),s._v(" "),t("p",[s._v("가장 긴 작업만큼 완료하는 데 시간이 걸림")]),s._v(" "),t("p",[s._v("Observables를 구독하고, 호출함으로써 모든 데이터의 흐름을 따라서 로직을 진행할 수 있다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);