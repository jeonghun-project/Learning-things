(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{390:function(s,a,t){s.exports=t.p+"assets/img/ls_al.fc08e46f.png"},391:function(s,a,t){s.exports=t.p+"assets/img/manchmod1.cc6bba41.png"},392:function(s,a,t){s.exports=t.p+"assets/img/manchmod2.c9270cf6.png"},498:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chmod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[s._v("#")]),s._v(" chmod")]),s._v(" "),a("p",[s._v("기본적인 shell script 커멘드로서 파일의 권한을 설정할 때 사용하는 명령어이다.")]),s._v(" "),a("p",[s._v("기본적으로 shell script 에서는 "),a("code",[s._v("ls -al")]),s._v(" 을 통해서 파일의 상세 내역을 확인 할 수 있다.")]),s._v(" "),a("p",[a("img",{attrs:{src:t(390),alt:"ls-al"}})]),s._v(" "),a("p",[s._v("여기서 우리는 각각의 정보를 분류해서 볼 수 있는데 자세한 내용은 따로다뤄 보겠다.")]),s._v(" "),a("p",[s._v("여기서 주목 할 것은 drwxr-xr-x 중 첫 글자를 제외한 나머지 9자는 파일의 권한을 분류하여 나타내어 준다.")]),s._v(" "),a("p",[s._v("9자는 3자씩 각각 분류하여 나타내는 것이 다르다.")]),s._v(" "),a("ul",[a("li",[s._v('첫 3자 → User의 권한 "u"')]),s._v(" "),a("li",[s._v('4~6자 → Group의 권한 "g"')]),s._v(" "),a("li",[s._v('7~9자 → other의 권한 "o"')])]),s._v(" "),a("p",[s._v("각각 3문자는 r , w , x 의 순서를 가지고 있다")]),s._v(" "),a("ul",[a("li",[s._v("r :: read 읽기 권한을 의미")]),s._v(" "),a("li",[s._v("w :: write 쓰기 권한을 의미")]),s._v(" "),a("li",[s._v("x :: excute 실행 권한을 의미")])]),s._v(" "),a("p",[s._v("실제 쓰임이 많은 명령")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" filename g+r\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" filename // rwxr-xr-x 가 된다.\n")])])]),a("h3",{attrs:{id:"_8진법을-이용한-권한-부여"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8진법을-이용한-권한-부여"}},[s._v("#")]),s._v(" 8진법을 이용한 권한 부여")]),s._v(" "),a("p",[s._v("rwx 권한을 8진수로 치환하여 나타낼 수 있다.")]),s._v(" "),a("p",[s._v("rwx/rwx/rwx")]),s._v(" "),a("p",[s._v("421/421/421")]),s._v(" "),a("p",[s._v("man chmod 참고")]),s._v(" "),a("p",[s._v("chmod  - - file mode or Access control List")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -- "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("op")]),s._v(" perm\n")])])]),a("p",[a("img",{attrs:{src:t(391),alt:"man chmod"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(392),alt:"man chmod"}})]),s._v(" "),a("h2",{attrs:{id:"chown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[s._v("#")]),s._v(" chown")]),s._v(" "),a("p",[s._v("파일의 소유권자를 변경하는데 쓰이는 명령어")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("chwon 소유자 filename\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);