(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{319:function(e,t,o){"use strict";var n=TypeError;e.exports=function(e,t){if(e<t)throw new n("Not enough arguments");return e}},320:function(e,t,o){"use strict";var n=o(51),a=o(8),s=o(153),i=o(319),r=URLSearchParams,c=r.prototype,u=a(c.append),l=a(c.delete),h=a(c.forEach),d=a([].push),p=new r("a=1&a=2&b=3");p.delete("a",1),p.delete("b",void 0),p+""!="a=2"&&n(c,"delete",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return l(this,e);var n=[];h(this,(function(e,t){d(n,{key:t,value:e})})),i(t,1);for(var a,r=s(e),c=s(o),p=0,f=0,v=!1,y=n.length;p<y;)a=n[p++],v||a.key===r?(v=!0,l(this,a.key)):f++;for(;f<y;)(a=n[f++]).key===r&&a.value===c||u(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},321:function(e,t,o){"use strict";var n=o(51),a=o(8),s=o(153),i=o(319),r=URLSearchParams,c=r.prototype,u=a(c.getAll),l=a(c.has),h=new r("a=1");!h.has("a",2)&&h.has("a",void 0)||n(c,"has",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return l(this,e);var n=u(this,e);i(t,1);for(var a=s(o),r=0;r<n.length;)if(n[r++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},322:function(e,t,o){"use strict";var n=o(9),a=o(8),s=o(154),i=URLSearchParams.prototype,r=a(i.forEach);n&&!("size"in i)&&s(i,"size",{get:function(){var e=0;return r(this,(function(){e++})),e},configurable:!0,enumerable:!0})},333:function(e,t,o){},490:function(e,t,o){"use strict";o(333)},504:function(e,t,o){"use strict";o.r(t);o(320),o(321),o(322);var n={data:()=>({copied:!1,textToCopy:""}),mounted(){const e=new URLSearchParams(window.location.search);this.textToCopy=e.get("text")||""},methods:{async handleCopy(){if(this.textToCopy)if(navigator.clipboard&&window.isSecureContext)try{await navigator.clipboard.writeText(this.textToCopy),this.showSuccess()}catch(e){this.fallbackCopy()}else this.fallbackCopy();else alert("⚠️ 복사할 텍스트가 없습니다.")},fallbackCopy(){const e=document.createElement("div");e.textContent=this.textToCopy,e.style.position="absolute",e.style.left="-9999px",e.style.whiteSpace="pre",e.contentEditable=!0,document.body.appendChild(e);const t=document.createRange();t.selectNode(e);const o=window.getSelection();o.removeAllRanges(),o.addRange(t),document.execCommand("copy"),document.body.removeChild(e),this.showSuccess()},showSuccess(){this.copied=!0,alert("✅ 복사 완료!")}}},a=(o(490),o(1)),s=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"copy-container"},[t("p",[t("strong",[e._v(e._s(e.textToCopy?"📋 "+e.textToCopy:"없음"))])]),e._v(" "),t("button",{staticClass:"copy-button",on:{click:e.handleCopy}},[e._v("\n    "+e._s(e.copied?"✅ 복사 완료!":"📋 복사하기")+"\n  ")])])}),[],!1,null,"6ab1bcac",null);t.default=s.exports}}]);