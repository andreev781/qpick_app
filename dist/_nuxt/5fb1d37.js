(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{384:function(t,o,c){t.exports=c.p+"img/01.efb6976.png"},385:function(t,o,c){t.exports=c.p+"img/logo.b1bbcc8.png"},386:function(t,o,c){var map={"./01.png":384,"./02.png":387,"./03.png":388,"./04.png":389,"./05.png":390,"./06.png":391,"./07.png":392,"./08.png":393,"./09.png":394,"./10.png":395,"./logo.png":385};function r(t){var o=n(t);return c(o)}function n(t){if(!c.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=386},387:function(t,o,c){t.exports=c.p+"img/02.13f4301.png"},388:function(t,o,c){t.exports=c.p+"img/03.9fbb754.png"},389:function(t,o,c){t.exports=c.p+"img/04.9d26cd3.png"},390:function(t,o,c){t.exports=c.p+"img/05.7d5cf0f.png"},391:function(t,o,c){t.exports=c.p+"img/06.252f3cf.png"},392:function(t,o,c){t.exports=c.p+"img/07.3437133.png"},393:function(t,o,c){t.exports=c.p+"img/08.c75f2b6.png"},394:function(t,o,c){t.exports=c.p+"img/09.f59d4e4.png"},395:function(t,o,c){t.exports=c.p+"img/10.5cd6756.png"},407:function(t,o,c){var content=c(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(73).default)("1b7ac24a",content,!0,{sourceMap:!1})},422:function(t,o,c){"use strict";c(407)},423:function(t,o,c){var r=c(72)(!1);r.push([t.i,".product__title{font-size:20px;font-weight:600;margin-bottom:20px;color:#838383}.main-product{padding:15px 20px;background:#fff;border-radius:30px;margin-bottom:25px}.main-product__top{display:flex;justify-content:space-between;align-items:center}.main-product__icon .v-icon{cursor:pointer}.main-product__icon .v-icon:hover{color:#ffa542}.main-product__images{padding-left:40px;padding-right:80px;margin-bottom:40px}.main-product__bottom{display:flex;justify-content:space-between;align-items:center}.main-product__title{font-size:25px;font-weight:600;color:#1c1c27}.main-product__price,.main-product__price-block{display:flex;align-items:center}.main-product__price-block{flex-direction:column}.main-product__current-price{font-size:20px;font-weight:600;color:#1c1c27}.main-product__current-price.red{font-size:28px;color:#df6464}.main-product__last-price{position:relative;align-self:flex-end;right:-5px;font-size:20px;text-decoration:line-through;-webkit-text-decoration-color:#df6464;text-decoration-color:#df6464;color:#aaa}.main-product__discount{color:#df6464;font-size:20px;font-weight:600;margin-left:50px}.characteristics-product{padding:0;background:#f9f9f9;border-radius:15px}.characteristics-product__title{display:block;padding:15px 20px;font-size:20px;font-weight:600;color:#1c1c27;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.1);border-radius:15px}.characteristics-product__list{padding:15px 20px}.characteristics-product__item{font-size:15px;font-weight:500;color:#1c1c27}.characteristics-product__item:not(:last-child){margin-bottom:10px}.product__buttons{display:flex;flex-direction:column;padding-top:0}@media screen and (max-width:1200px){.main-product__current-price{font-size:20px}}@media screen and (max-width:576px){.main-product__title{font-size:20px}.main-product__current-price{font-size:16px}.characteristics-product__title{font-size:17px}.characteristics-product__item{font-size:14px}}",""]),t.exports=r},432:function(t,o,c){"use strict";c.r(o);c(9);var r={methods:{addToBasket:function(t){this.$store.getters.getProductFromBasket.some((function(element){return element.id==t.id}))?alert("Этот элемент уже есть в корзине!"):(this.$store.commit("addItemToBasket",t),alert("Элемент успешно добавлен в корзину!"))},buyNow:function(t){this.$store.commit("addSingleItem",this.product),this.$router.push("/ordering")}},computed:{product:function(){return this.$store.getters.getProductById(this.$route.params.id)}}},n=(c(422),c(74)),e=c(175),d=c.n(e),l=c(382),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"product"},[r("h3",{staticClass:"product__title"},[t._v(t._s(t.product.category))]),t._v(" "),r("b-row",[r("b-col",{staticClass:"product__main main-product",attrs:{lg:"12"}},[r("div",{staticClass:"main-product__top"},[r("div",{staticClass:"main-product__icon"},[r("v-icon",[t._v("fa-regular fa-heart")])],1),t._v(" "),r("div",{staticClass:"main-product__logo"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:c(385),alt:"logo"}})])])]),t._v(" "),r("div",{staticClass:"main-product__images"},[r("b-row",t._l(4,(function(o,n){return r("b-col",{key:n,attrs:{cols:"6",sm:"3"}},[r("img",{staticClass:"main-product__image",attrs:{src:c(386)("./"+t.product.image),alt:"image"}})])})),1)],1),t._v(" "),r("div",{staticClass:"main-product__bottom"},[r("h4",{staticClass:"main-product__title"},[t._v("\n                    "+t._s(t.product.title)+"\n                ")]),t._v(" "),r("div",{staticClass:"main-product__price"},[r("div",{staticClass:"main-product__price-block"},[r("span",{staticClass:"main-product__current-price",class:{red:t.product.last_price}},[t._v(t._s(parseInt(t.product.price).toLocaleString())+" ₸")]),t._v(" "),t.product.last_price?r("span",{staticClass:"main-product__last-price"},[t._v(t._s(parseInt(t.product.last_price).toLocaleString())+" ₸")]):t._e()]),t._v(" "),t.product.percent?r("div",{staticClass:"main-product__discount"},[t._v(t._s(t.product.percent)+"%")]):t._e()])])]),t._v(" "),r("b-col",{staticClass:"product__characteristics characteristics-product",attrs:{lg:"9"}},[r("h5",{staticClass:"characteristics-product__title"},[t._v("Описание и характеристики")]),t._v(" "),r("ul",{staticClass:"characteristics-product__list"},t._l(t.product.characteristics,(function(o,c){return r("li",{key:c,staticClass:"characteristics-product__item"},[t._v(t._s(o.title)+": "+t._s(o.value)+"\n                ")])})),0)]),t._v(" "),r("b-col",{staticClass:"product__buttons",attrs:{lg:"3"}},[r("button",{staticClass:"main-button",on:{click:function(o){return t.buyNow()}}},[t._v("Купить!")]),t._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-basket",modifiers:{"modal-basket":!0}}],staticClass:"main-button",on:{click:function(o){return t.addToBasket(t.product)}}},[r("v-icon",[t._v("fa-solid fa-cart-shopping")]),t._v("\n                    Добавить в корзину\n            ")],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;d()(component,{VIcon:l.a})}}]);