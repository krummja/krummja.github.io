(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5,16],{238:function(t,e,r){var content=r(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("741e17dc",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";r.r(e);var n={props:{tags:Array}},o=(r(241),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",{staticClass:"mb-4 font-bold text-2xl text-center"},[t._v("Topic Index")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/tag/"+e.slug}},[r("span",{staticClass:"px-2 py-1\n                rounded-full border border-light-border dark:border-dark-border\n                hover:border-purple-700\n                transition-colors duration-300 ease-linear\n                truncate tracking-wider font-medium text-ss\n                "},[t._v("\n                    "+t._s(e.name)+"\n                ")])])],1)})),0)])}),[],!1,null,"460504cc",null);e.default=component.exports},241:function(t,e,r){"use strict";r(238)},242:function(t,e,r){var n=r(23)(!1);n.push([t.i,"h3[data-v-460504cc]{color:rgba(75,60,90,.8)}",""]),t.exports=n},247:function(t,e,r){var content=r(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("6cf53e16",content,!0,{sourceMap:!1})},259:function(t,e,r){"use strict";r(247)},260:function(t,e,r){var n=r(23)(!1);n.push([t.i,'.article-card[data-v-198f3552]{text-align:justify}.article-card[data-v-198f3552],.article-card a[data-v-198f3552]{border-radius:8px}.article-card img div[data-v-198f3552]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-198f3552]{color:rgba(75,60,90,.8)}.date[data-v-198f3552]{color:grey}.desc[data-v-198f3552]{width:100%;color:#404040;padding-top:5px;padding-right:5px;font-style:italic;overflow:hidden}.fade[data-v-198f3552]{position:relative;height:3.2em}.fade[data-v-198f3552]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:40%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=n},265:function(t,e,r){"use strict";r.r(e);var n={props:{logs:Array,tags:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(r(259),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap"},t._l(t.logs,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/4 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"devlog-slug",params:{slug:e.slug}}}},[r("div",{staticClass:"p-5 px-5 flex flex-col w-full"},[r("div",{staticClass:"flex flex-row justify-between"},[r("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(e.title))]),t._v(" "),r("h2",{staticClass:"text-lg font-bold place-self-auto"},[t._v(t._s(e.project))])]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),r("p",{staticClass:"desc fade"},[t._v(t._s(e.description))])])])],1)})),0)}),[],!1,null,"198f3552",null);e.default=component.exports},310:function(t,e,r){var content=r(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5e40cfb0",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";r(310)},442:function(t,e,r){var n=r(23)(!1);n.push([t.i,"h1[data-v-2a4cb6f9]{color:rgba(75,60,90,.8);padding:10px 0;font-size:1.8rem;font-weight:700;line-height:1.4em}",""]),t.exports=n},482:function(t,e,r){"use strict";r.r(e);r(32);var n=r(5),o=r(265),l=r(239),c={components:{DevlogListing:o.default,TagListing:l.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("logs",n.slug).only(["title","description","project","createdAt","img","slug"]).sortBy("createdAt","desc").fetch();case 3:return o=e.sent,e.next=6,r("tags",n.slug).only(["name","slug"]).sortBy("createdAt","asc").fetch();case 6:return l=e.sent,e.abrupt("return",{logs:o,tags:l});case 8:case"end":return e.stop()}}),e)})))()}},d=(r(441),r(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"mb-6"},[t._v("Development Logs")]),t._v(" "),r("DevlogListing",{attrs:{logs:this.logs,tags:this.tags}})],1)}),[],!1,null,"2a4cb6f9",null);e.default=component.exports;installComponents(component,{DevlogListing:r(265).default})}}]);