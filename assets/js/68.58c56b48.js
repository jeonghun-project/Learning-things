(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{499:function(t,e,s){"use strict";s.r(e);var o=s(1),p=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iptble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptble"}},[t._v("#")]),t._v(" iptble")]),t._v(" "),e("p",[e("code",[t._v("$ sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080")])]),t._v(" "),e("p",[t._v("이 명령을 사용하게 된 이유는 현재 AWS EC2 인스턴스에 올라가 있는 서버의 포트포워당 때문이다.")]),t._v(" "),e("p",[t._v("AWS 로드 밸런서를 통하여 서버에 SSL 인증을 통과시키기 위해서 443 port를 통한 인증을 해주었기에 서버측에서 모든 포트의 수신을 옳바르게 처리하기 위함이다.")])])}),[],!1,null,null,null);e.default=p.exports}}]);