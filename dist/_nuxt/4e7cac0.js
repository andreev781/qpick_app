(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{384:function(t,o,e){t.exports=e.p+"img/01.efb6976.png"},385:function(t,o,e){t.exports=e.p+"img/logo.b1bbcc8.png"},386:function(t,o,e){var map={"./01.png":384,"./02.png":387,"./03.png":388,"./04.png":389,"./05.png":390,"./06.png":391,"./07.png":392,"./08.png":393,"./09.png":394,"./10.png":395,"./logo.png":385};function n(t){var o=c(t);return e(o)}function c(t){if(!e.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=386},387:function(t,o,e){t.exports=e.p+"img/02.13f4301.png"},388:function(t,o,e){t.exports=e.p+"img/03.9fbb754.png"},389:function(t,o,e){t.exports=e.p+"img/04.9d26cd3.png"},390:function(t,o,e){t.exports=e.p+"img/05.7d5cf0f.png"},391:function(t,o,e){t.exports=e.p+"img/06.252f3cf.png"},392:function(t,o,e){t.exports=e.p+"img/07.3437133.png"},393:function(t,o,e){t.exports=e.p+"img/08.c75f2b6.png"},394:function(t,o,e){t.exports=e.p+"img/09.f59d4e4.png"},395:function(t,o,e){t.exports=e.p+"img/10.5cd6756.png"},396:function(t,o,e){var content=e(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(73).default)("597ceaf9",content,!0,{sourceMap:!1})},397:function(t,o,e){"use strict";e.r(o);var n={props:["items"]},c=(e(398),e(74)),r=e(175),_=e.n(r),d=e(382),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"products"},[n("h5",{staticClass:"main-goods__title"},[t._v(t._s(t.items[Object.keys(t.items)[0]].category))]),t._v(" "),n("div",{staticClass:"products__content"},[n("ul",{staticClass:"products__list"},[n("client-only",t._l(t.items,(function(o,c){return n("li",{key:c,staticClass:"products__item"},[n("nuxt-link",{attrs:{to:{path:"/product/"+o.id}}},[n("div",{staticClass:"products__container"},[o.favourite?n("div",{staticClass:"products__icons"},[o.apple?n("a",{staticClass:"products__apple",attrs:{href:"#"}},[n("v-icon",[t._v("fa-brands fa-apple")])],1):t._e()]):t._e(),t._v(" "),n("img",{staticClass:"products__image",attrs:{src:e(386)("./"+o.image),alt:"product"}}),t._v(" "),n("div",{staticClass:"products__text"},[n("p",{staticClass:"products__title"},[t._v("\n                                    "+t._s(o.title)+" \n                                ")]),t._v(" "),n("p",{staticClass:"products__price",class:{red:o.percent}},[n("span",[t._v(t._s(parseInt(o.price).toLocaleString())+" ₸  \n                                        "),o.percent?n("span",{staticClass:"products__percent"},[t._v("\n                                            -"+t._s(o.percent)+"%\n                                        ")]):t._e()]),t._v(" "),o.last_price?n("span",{staticClass:"products__discount",class:{red:o.percent}},[t._v("\n                                        "+t._s(parseInt(o.last_price).toLocaleString())+" ₸ \n\n                                    ")]):t._e()])]),t._v(" "),o.rating?n("div",{staticClass:"products__rating"},[n("v-icon",[t._v("\n                                    fa-solid fa-star\n                                ")]),t._v(" "),n("span",[t._v(t._s(o.rating))])],1):t._e()])])],1)})),0)],1)])])}),[],!1,null,null,null);o.default=component.exports;_()(component,{VIcon:d.a})},398:function(t,o,e){"use strict";e(396)},399:function(t,o,e){var n=e(72)(!1);n.push([t.i,".products__list{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:30px;gap:30px}.products__item{display:block;background:#fff;border-radius:30px;cursor:pointer;box-shadow:0 0 20px rgba(0,0,0,.1)}.products__container{padding:15px 20px 30px}@media screen and (max-width:1400px){.products__container{padding:10px 15px 20px}}.products__icons{display:flex;align-items:center;justify-content:space-between;position:absolute}.products__icons .v-icon{display:block;color:#1c1c27;font-size:25px}.products__apple{font-size:30px}.products__image{display:block;margin:0 auto;height:240px}.products__text{display:flex;align-items:center;justify-content:space-between;margin-top:40px}.products__title{font-size:17px;font-weight:600;color:#000;margin-bottom:25px}.products__price{position:relative;font-size:17px;font-weight:600;color:#ffa542}.products__price.red{color:#df6464}.products__discount{position:absolute;bottom:-120%;left:10%;font-size:13px;color:#ffce7f;text-decoration:line-through}.products__discount.red{color:hsla(0,0%,66.7%,.66667);-webkit-text-decoration-color:#df6464;text-decoration-color:#df6464}.products__rating{display:flex;align-items:center}.products__rating .v-icon{color:#ffce7f}.products__rating span{font-size:17px;color:#838383;font-weight:600;margin-left:10px;line-height:0}.products__percent{margin-left:25px}@media screen and (max-width:1400px){.products__price,.products__title{font-size:14px}.products__percent{font-size:12px;margin-left:10px}}@media screen and (max-width:1200px){.products__discount{bottom:-200%}.products__discount.red{bottom:-120%}}@media screen and (max-width:991px){.products__image{height:150px}.products__title{font-size:13px}.products__price{font-size:12px}.products__discount.red{bottom:-80%}}@media screen and (max-width:768px){.products__list{grid-template-columns:1fr}.products__image{height:100%}.products__title{font-size:17px}.products__price{font-size:15px}.products__discount{bottom:-100%!important}}",""]),t.exports=n}}]);