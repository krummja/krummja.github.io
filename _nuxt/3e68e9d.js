(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{313:function(t,n,e){var content=e(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("5674022a",content,!0,{sourceMap:!1})},445:function(t,n,e){"use strict";e(313)},446:function(t,n,e){var o=e(23)(!1);o.push([t.i,'.log-header{text-align:center}.log{text-align:justify}.nuxt-content h1{margin-top:30px;font-weight:700;font-size:28px}.nuxt-content h2{margin-top:30px;font-weight:700;font-size:22px}.nuxt-content h3{margin-top:30px;font-style:italic;font-size:20px}.nuxt-content p{line-height:20pt;margin:16px 0}.nuxt-content .footnote-ref{color:red}.nuxt-content .footnotes{margin-top:40px}.nuxt-content .footnotes:before{content:"References";font-weight:700;font-size:28px}.nuxt-content .footnote-backref{margin-left:6px;color:red}.nuxt-content .footnotes li{margin-top:8px;padding-left:30px;text-indent:-30px}',""]),t.exports=o},480:function(t,n,e){"use strict";e.r(n);e(32);var o=e(5),r={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,n.next=3,e("logs",o.slug).fetch();case 3:return r=n.sent,n.abrupt("return",{log:r});case 5:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(e(445),e(11)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"log xs:w-full md:w-full px-2 xs:mb-6 md:mb-12"},[e("div",{staticClass:"log-header"},[e("h1",{staticClass:"log-title tracking-wide font-bold xs:text-2xl md:text-3xl xs:my-4 md:my-8"},[t._v("\n        "+t._s(t.log.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"xs:my-2 md:my-8"},[t._v("\n        "+t._s(t.formatDate(t.log.createdAt))+"\n      ")])]),t._v(" "),e("div",{staticClass:"log-body sm:mx-1 md:mx-16 lg:mx-32 xl:mx-64"},[e("nuxt-content",{attrs:{document:t.log}})],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);