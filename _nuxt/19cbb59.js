(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{249:function(t,e,n){var content=n(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4f550034",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n(249)},256:function(t,e,n){var o=n(18)(!1);o.push([t.i,".container[data-v-9694d8fe]{float:left;position:-webkit-sticky;position:sticky;top:0;left:0;width:auto;text-align:left}",""]),t.exports=o},265:function(t,e,n){var content=n(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("645ee13a",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n.r(e);var o={props:{log:Object}},r=(n(255),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ul",t._l(t.log.toc,(function(link){return n("li",{key:link.id,class:{toc3:3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)])}),[],!1,null,"9694d8fe",null);e.default=component.exports},278:function(t,e,n){"use strict";n(265)},279:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media (min-width:320px){.nuxt-content code{font-size:.75rem}}@media (min-width:640px){.nuxt-content code{font-size:.875rem}}@media (min-width:768px){.nuxt-content code{font-size:.875rem}}@media (min-width:1024px){.nuxt-content code{font-size:1rem}}@media (min-width:320px){.nuxt-content pre code{font-size:.75rem}}@media (min-width:640px){.nuxt-content pre code{font-size:.875rem}}@media (min-width:768px){.nuxt-content pre code{font-size:1rem}}@media (min-width:1024px){.nuxt-content pre code{font-size:1rem}}.log-header{text-align:center;width:100%}.log{text-align:justify}.project-title a{color:#4b3c5a;text-decoration:none;font-weight:600;box-shadow:inset 0 -.2rem 0 0 #f7f3ef,inset 0 -.6rem 0 0 rgba(115,90,140,.25)}",""]),t.exports=o},311:function(t,e,n){"use strict";n.r(e);n(32);var o=n(5),r={components:{TableOfContents:n(271).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("logs",o.slug).fetch();case 3:return r=e.sent,console.log(r.toc),e.abrupt("return",{log:r});case 6:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(n(278),n(11)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"log xs:w-full md:w-full px-2 xs:mb-6 md:mb-12"},[n("div",{staticClass:"log-header"},[n("h1",{staticClass:"log-title tracking-wide font-bold xs:text-2xl md:text-3xl xs:my-4 md:mt-8 mb-2"},[t._v("\n        "+t._s(t.log.title)+"\n      ")]),t._v(" "),n("h2",{staticClass:"project-title tracking-wide font-bold xs:text-xl md:text-2xl"},[n("a",{attrs:{href:t.log.repo}},[t._v(t._s(t.log.project))])]),t._v(" "),n("div",{staticClass:"xs:my-2 md:my-8"},[t._v("\n        "+t._s(t.formatDate(t.log.createdAt))+"\n      ")])]),t._v(" "),n("div",{staticClass:"log-body\n      xs: text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl\n                  sm:mx-1    md:mx-16     lg:mx-32   xl:mx-64"},[n("nuxt-content",{attrs:{document:t.log}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);