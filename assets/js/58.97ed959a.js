(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{520:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-event"}},[s._v("#")]),s._v(" mysql event")]),s._v(" "),t("p",[s._v("몽고나 nosql에서 제공하는 TTL 기능을 mysql에서 실행하기 위하여 찾아본 서치 결과 공유 입니다.")]),s._v(" "),t("p",[s._v("mysql은 최근 event를 통해 일정 주기에 job을 추가하여 실행할 수 있는 event기능을 추가로 제공합니다.")]),s._v(" "),t("p",[s._v("이를 통해 TTL과 같은 기능을 구현할 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EVENT\n    clearlogs\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" SCHEDULE EVERY "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DAY")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DO")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n            log\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" created_at "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NOW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DAY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);