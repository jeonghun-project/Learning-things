(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{490:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"listen-eaccces-permission-denied-0-0-0-0-portnum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listen-eaccces-permission-denied-0-0-0-0-portnum"}},[s._v("#")]),s._v(" listen EACCCES : permission denied 0.0.0.0:portnum")]),s._v(" "),t("p",[s._v("우선적으로 해당 오류문구 상황을 보자")]),s._v(" "),t("p",[s._v("nodemon 과 ts-node를 이용하여 express 서버를 구동하는 코드를 작성중에 있었고 테스트를 위하여 nodemon script를 이용하여 서버를 구동하는 순간")]),s._v(" "),t("p",[t("code",[s._v("listen EACCES: permission denied 0.0.0.0:334")]),s._v("를 만나게 되었다.")]),s._v(" "),t("p",[s._v("리눅스에서 1024 이하의 well known port를 사용하려면 root 권한이 필요하다고 한다.")]),s._v(" "),t("p",[s._v("여기에는 몇 가지 해결방법이 존재하는데")]),s._v(" "),t("ol",[t("li",[s._v("1025 이상의 포트를 쓰거나 루트 권한으로 실행하자.")]),s._v(" "),t("li",[s._v("root 권한으로 실행하기 위해 sudo로 실행한다.")]),s._v(" "),t("li",[s._v("linux 환경에서 강제로 root 권한으로 전환하는 패키지를 사용한다.")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libcap2-bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" setcap "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cap_net_bind_service")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+ep "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("readlink "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("``\n")])])]),t("p",[s._v("하지만 우선 local에서 테스트하는 목적으로 문제를 해결하고 싶었던 것이라.")]),s._v(" "),t("p",[s._v("4000포트를 설정해주는 것으로 문제는 일단 해결하였다.")])])}),[],!1,null,null,null);t.default=n.exports}}]);