(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(t,e,r){var content=r(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("71bca56f",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r(249)},264:function(t,e,r){var l=r(23)(!1);l.push([t.i,'.article-card[data-v-7a32c877]{text-align:justify}.article-card[data-v-7a32c877],.article-card a[data-v-7a32c877]{border-radius:8px}.article-card img div[data-v-7a32c877]{border-radius:8px 0 0 8px}.article-card:hover h2[data-v-7a32c877]{color:rgba(75,60,90,.8)}.date[data-v-7a32c877]{color:grey}.desc[data-v-7a32c877]{width:100%;color:#404040;padding-top:5px;font-style:italic;overflow:hidden}.fade[data-v-7a32c877]{position:relative;height:6em}.fade[data-v-7a32c877]:after{content:"";text-align:right;position:absolute;bottom:0;right:0;width:70%;height:1.2em;background:linear-gradient(90deg,hsla(0,0%,100%,0),#f7f3ef 50%)}',""]),t.exports=l},267:function(t,e,r){"use strict";r.r(e);var l={props:{articles:Array},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},c=(r(263),r(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"desc-box p-5 flex flex-col xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),r("p",{staticClass:"desc fade"},[t._v(t._s(article.description))])])])],1)})),0)}),[],!1,null,"7a32c877",null);e.default=component.exports}}]);