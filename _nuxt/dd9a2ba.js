(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10],{242:function(t,e,n){"use strict";n.r(e);var r={props:{content:Object,tags:Object}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row-reverse"},t._l(t.content.tags,(function(e,r){return n("span",{key:r},[n("NuxtLink",{attrs:{to:"/tag/"+t.tags[e].slug}},[n("span",{staticClass:"px-2 py-1\n                rounded-full border border-light-border dark:border-dark-border\n                hover:border-purple-700\n                transition-colors duration-300 ease-linear\n                truncate tracking-wider font-medium text-ss\n            "},[t._v("\n                "+t._s(t.tags[e].name)+"\n            ")])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("083745fe",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(260)},273:function(t,e,n){var r=n(23)(!1);r.push([t.i,'.article-header{text-align:center;font-weight:700;letter-spacing:.025em}.abstract{font-style:italic}.abstract,.article{text-align:justify}.article-title{color:rgba(75,60,90,.8)}.nuxt-content a{color:#4b3c5a;text-decoration:none;font-weight:600;box-shadow:inset 0 -.225rem 0 0 #f7f3ef,inset 0 -.475rem 0 0 rgba(115,90,140,.25)}.nuxt-content h1,.nuxt-content h2{font-size:28px}.nuxt-content h1,.nuxt-content h2,.nuxt-content h3{color:rgba(75,60,90,.8);margin-top:30px;font-weight:700}.nuxt-content h3{font-size:22px}.nuxt-content h4{color:rgba(75,60,90,.8);margin-top:30px;font-style:italic;font-size:20px}.nuxt-content p{margin:16px 0}.nuxt-content ol{margin:32px 0;padding:0 60px;list-style-type:decimal}.nuxt-content ul{margin:32px 0;padding:0 60px;list-style-type:circle}.nuxt-content li{padding-left:10px}.dropcap{color:rgba(75,60,90,.8);float:left;font-size:75px;line-height:60px;padding-top:4px;padding-right:8px;padding-left:3px}.nuxt-content .footnote-ref{color:red}.nuxt-content .footnotes{margin-top:40px}.nuxt-content .footnotes:before{content:"References";font-weight:700;font-size:28px}.nuxt-content .footnote-backref{margin-left:6px;color:red}.nuxt-content .footnotes li{margin-top:8px}',""]),t.exports=r},306:function(t,e,n){"use strict";n.r(e);n(50),n(27),n(33);var r=n(18),o=n(66),c=(n(32),n(5)),l={components:{TagList:n(242).default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,article,l,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,e.next=3,n("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,n("tags").only(["name","slug"]).where({name:{$containsAny:article.tags}}).fetch();case 6:return l=e.sent,x=Object.assign.apply(Object,[{}].concat(Object(o.a)(l.map((function(s){return Object(r.a)({},s.name,s)}))))),e.abrupt("return",{article:article,tags:x});case 9:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},x=(n(272),n(11)),component=Object(x.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"article xs:w-full md:w-full px-2 xs:mb-6 md:mb-12"},[n("TagList",{attrs:{content:t.article,tags:t.tags}}),t._v(" "),n("div",{staticClass:"article-header"},[n("h1",{staticClass:"article-title xs:text-2xl md:text-3xl xs:my-4 md:my-8"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"xs:my-2 md:my-8"},[t._v("\n        "+t._s(t.formatDate(t.article.createdAt))+"\n      ")])]),t._v(" "),n("div",{staticClass:"article-body\n      sm:mx-1    md:mx-16     lg:mx-32    xl:mx-64\n      sm:text-sm md:text-base lg:text-lg  xl:text-xl\n    "},[n("div",{staticClass:"abstract my-10 sm:mx-8 md:mx-8 lg:mx-16 xl:mx-24"},[n("hr",{staticClass:"mb-2"}),t._v("\n          "+t._s(t.article.description)+"\n        "),n("hr",{staticClass:"mt-2"})]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagList:n(242).default})}}]);