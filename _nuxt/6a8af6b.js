(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{230:function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);t.exports=function(){return r(o),o}}else{var n=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),n[i]=t>>>((3&i)<<3)&255;return n}}},231:function(t,e){for(var r=[],i=0;i<256;++i)r[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,o=r;return[o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]]].join("")}},232:function(t,e,r){var content=r(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("352958d8",content,!0,{sourceMap:!1})},236:function(t,e,r){"use strict";r.r(e);var o=r(242),n=r.n(o),c={props:{tagName:{type:String,default:""}},data:function(){return{uid:n()(),tagActive:!1}},methods:{toggleActiveState:function(){var t=document.getElementById(this.uid);!1===this.tagActive?(this.tagActive=!0,this.$store.commit("tags/add",this),this.refresh(),t.style.backgroundColor="rgba(115, 90, 140, 0.3)",t.style.color="rgba(115, 90, 140, 1)"):!0===this.tagActive&&(this.tagActive=!1,this.$store.commit("tags/remove",this),this.refresh(),t.style.backgroundColor="inherit",t.style.color="rgba(144, 144, 144, 1)")},refresh:function(){this.$nuxt.refresh()}}},d=(r(245),r(51)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tag-body flex flex-col",attrs:{id:t.uid},on:{click:function(e){return t.toggleActiveState()}}},[t._v("\n  "+t._s(t.tagName)+"\n")])}),[],!1,null,"1f5972b1",null);e.default=component.exports},239:function(t,e,r){var content=r(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("da9473b6",content,!0,{sourceMap:!1})},242:function(t,e,r){var o=r(243),n=r(244),c=n;c.v1=o,c.v4=n,t.exports=c},243:function(t,e,r){var o,n,c=r(230),d=r(231),l=0,f=0;t.exports=function(t,e,r){var i=e&&r||0,b=e||[],v=(t=t||{}).node||o,x=void 0!==t.clockseq?t.clockseq:n;if(null==v||null==x){var m=c();null==v&&(v=o=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==x&&(x=n=16383&(m[6]<<8|m[7]))}var h=void 0!==t.msecs?t.msecs:(new Date).getTime(),y=void 0!==t.nsecs?t.nsecs:f+1,dt=h-l+(y-f)/1e4;if(dt<0&&void 0===t.clockseq&&(x=x+1&16383),(dt<0||h>l)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=h,f=y,n=x;var w=(1e4*(268435455&(h+=122192928e5))+y)%4294967296;b[i++]=w>>>24&255,b[i++]=w>>>16&255,b[i++]=w>>>8&255,b[i++]=255&w;var k=h/4294967296*1e4&268435455;b[i++]=k>>>8&255,b[i++]=255&k,b[i++]=k>>>24&15|16,b[i++]=k>>>16&255,b[i++]=x>>>8|128,b[i++]=255&x;for(var A=0;A<6;++A)b[i+A]=v[A];return e||d(b)}},244:function(t,e,r){var o=r(230),n=r(231);t.exports=function(t,e,r){var i=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var c=(t=t||{}).random||(t.rng||o)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,e)for(var d=0;d<16;++d)e[i+d]=c[d];return e||n(c)}},245:function(t,e,r){"use strict";r(232)},246:function(t,e,r){var o=r(30)(!1);o.push([t.i,'.page-enter-active[data-v-1f5972b1],.page-leave-active[data-v-1f5972b1]{transition:opacity .2s}.page-enter[data-v-1f5972b1],.page-leave-to[data-v-1f5972b1]{opacity:0}.todo[data-v-1f5972b1]{margin-right:10px;font-size:14pt;padding:.2rem;border-radius:3px;border:1px solid rgba(52,61,68,.1);background-color:rgba(200,90,0,.2);color:#c85a00}.orgtag[data-v-1f5972b1],.todo[data-v-1f5972b1]{font-weight:700;box-shadow:0 1px 2px rgba(52,61,68,.1)}.orgtag[data-v-1f5972b1]{float:right;padding:0 .3rem;margin:0 3px;border-radius:10px;border:1px solid rgba(52,61,68,.1);background-color:rgba(115,90,140,.4)}.orgtag[data-v-1f5972b1],.tag-body[data-v-1f5972b1]{font-size:12pt;text-transform:uppercase}.tag-body[data-v-1f5972b1]{margin:4px;padding:4px 6px;height:34px;border:1px solid rgba(52,61,68,.05);border-radius:6px;box-shadow:0 1px 2px rgba(52,61,68,.1);justify-content:center;text-align:center;font-family:"Raleway",sans-serif;color:#909090;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s ease-in-out 0s}.tag-body[data-v-1f5972b1]:hover{color:#735a8c;background-color:rgba(115,90,140,.3)}',""]),t.exports=o},249:function(t,e,r){"use strict";r.r(e);var o={components:{Tag:r(236).default},props:{tags:{type:Array,default:[]}}},n=(r(254),r(51)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag-block flex flex-row flex-wrap"},t._l(t.tags,(function(t){return r("div",{key:t.slug},[r("Tag",{attrs:{"tag-name":t.title}})],1)})),0)}),[],!1,null,"75684080",null);e.default=component.exports;installComponents(component,{Tag:r(236).default})},254:function(t,e,r){"use strict";r(239)},255:function(t,e,r){var o=r(30)(!1);o.push([t.i,".page-enter-active[data-v-75684080],.page-leave-active[data-v-75684080]{transition:opacity .2s}.page-enter[data-v-75684080],.page-leave-to[data-v-75684080]{opacity:0}.todo[data-v-75684080]{margin-right:10px;font-size:14pt;padding:.2rem;border-radius:3px;border:1px solid rgba(52,61,68,.1);background-color:rgba(200,90,0,.2);color:#c85a00}.orgtag[data-v-75684080],.todo[data-v-75684080]{font-weight:700;box-shadow:0 1px 2px rgba(52,61,68,.1)}.orgtag[data-v-75684080]{float:right;font-size:12pt;text-transform:uppercase;padding:0 .3rem;margin:0 3px;border-radius:10px;border:1px solid rgba(52,61,68,.1);background-color:rgba(115,90,140,.4)}.tag-block[data-v-75684080]{grid-column-start:2;grid-column-end:8;height:auto}",""]),t.exports=o}}]);