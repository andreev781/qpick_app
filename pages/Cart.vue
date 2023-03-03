<template>
    <div class="cart">
        <div v-if="(this.products.length == 0)" class="cart-content cart-content_empty">
            <b-row class="justify-content-center">
                <b-col md="6">
                    <div class="cart-content__image">
                        <img src="~/assets/img/basket.png" alt="basket">
                        <p class="cart-content__title">Корзина пуста</p>
                        <p class="cart-content__subtitle">Но это никогда не поздно исправить :)</p>
                    </div>
                    <nuxt-link :to="{path: '/'}" class="cart-content__button">В каталог товаров</nuxt-link>
                </b-col>
            </b-row>
        </div>
        <div class="cart-content" v-else>
            <h6 class="cart-content__title">Корзина</h6>
            <b-row>
                <b-col md="7">
                    <ul class="cart-content__items">
                        <li class="cart-content__product cart-content__item product-cart" v-for="item in products" :key="item.title">
                            <div class="product-cart__image">
                                <img  class="w-100" :src="require(`@/assets/img/products/${item.image}`)" alt="product">
                                <div class="product-cart__count">
                                    <button class="product-cart__button" @click="item.count > 1 ? item.count -= 1 : item.count = 99"></button>
                                    <div class="product-cart__number">
                                        <span>{{item.count}}</span>
                                    </div>
                                    <button class="product-cart__button" @click="item.count == 99 ? item.count = 1 : item.count += 1"></button>
                                </div>
                            </div>
                            <div class="product-cart__title">
                                <h4>{{item.title}}</h4>
                                <span class="product-cart__price product-cart__price_grey">{{item.price}} ₸</span>
                            </div>
                            <div class="product-cart__remove">
                                <v-icon class="product-cart__icon"  @click="remove(item.id )">fa-solid fa-trash</v-icon>
                                <span class="product-cart__price">{{getPrice(item)}} ₸</span>
                            </div>
                        </li>
                    </ul>
                </b-col>
                <b-col md="4" offset-lg="1">
                    <div class="cart-content__result">
                        <div class="cart-content__price">
                            <span>Итого</span>
                            <span>₸ {{commonPrice}}</span>
                        </div>
                        <nuxt-link :to="{path: '/ordering'}" class="main-button">Перейти к оформлению</nuxt-link>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="7">
                    <div class="cart-content__item map-cart">
                        <h6 class="map-cart__title">Доставка</h6>
                        <client-only>
                            <yandex-map :settings="settings" :coords="[43.233406, 76.825998]" :ymap-class="'map-cart__item'">
                            <!-- <ymap-marker :coords="[43.233406, 76.825998]" :marker-id="'321321'"></ymap-marker> -->
                        </yandex-map>
                        </client-only>
                        <div class="map-cart__footer">
                            <b-form-select class="map-cart__select" v-model="selected" :options="options"></b-form-select>
                            <span class="map-cart__price">{{selected}} ₸</span>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import { yandexMap } from '../node_modules/vue-yandex-maps'
export default {
    data(){
        return {
            currentSum: 0,
            options: [
                { value: 499, text: 'Доставка курьером' },
                { value: 0, text: 'Самовывоз' },
                { value: 300, text: 'Доставка по Почте России' },
                { value: 100, text: 'Доставка по СДЭКУ' },
            ],
            selected: 499,
            settings: {
                apiKey: 'b5d10270-f83b-45ac-ba79-c00f65854448',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1'
            }
        }
    },
    components: {yandexMap},
    computed: {
        commonPrice(){
            let sum = 0
            this.products.forEach(element => {
                sum += Number(element.price) * Number(element.count)
            });
            return sum.toLocaleString()
        },
        products(){
            return this.$store.getters.getProductFromBasket
        }
    },
    methods: {
        remove(id){
            this.$store.dispatch('removeFromBasket', id)
        },
        getPrice(item){
            return (parseInt(item.price) * item.count).toLocaleString();
        }
    }
}
</script>
<style lang="scss">
    .cart {
        &-content_empty {
            margin: 30px 0 200px 0;
            text-align: center;
            .cart-content {
                &__title {
                    font-size: 30px;
                    font-weight: 500;
                    margin-top: 30px;
                    color: #101010;
                }
                &__subtitle {
                    font-size: 20px;
                    font-weight: 600;
                    color: #838383;
                    margin-bottom: 30px;
                }
                &__button {
                    display: block;
                    width: 100%;
                    margin-top: 30px;
                    padding: 20px 0;
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                    background: #101010;
                    border-radius: 20px;
                }
            }
        }
    }
    .cart-content {
        &__title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        &__result {
            display: flex;
            flex-direction: column;
        }
        &__price {
            display: flex;
            justify-content: space-between;
            background: #fff;
            padding: 21px 16px 55px 21px;
            border-radius: 30px;
            span {
                font-size: 15px;
                font-weight: 600;
                color: #000
            }
        }
        &__button {
            position: relative;
            padding: 22px 14px;
            font-size: 17px;
            font-weight: 600;
            color: #fff;
            background: #101010;
            border-radius: 20px;
        }
    }
    .cart-content__item {
        position: relative;
        padding: 18px 28px 17px 16px;
        background: #fff;
        border-radius: 30px;
    }
    .product-cart {

        display: grid;
        grid-template-columns: 150px 4fr 1fr;
        align-items: center;
        &__image {
            margin-right: 23px;
        }
        margin-bottom: 20px;
        &__count {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
            span {
                font-size: 17px;
            }
        }
        &__number {
            width: 30px;
            text-align: center;
        }
        &__button {
            position: relative;
            &:first-child {
                margin-right: 10px;
            }
            &:first-child, &:last-child {
                width: 35px;
                height: 30px;
                border-radius: 50px;
                background: #FFCE7F;
                &::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    width: 16px;
                    height: 2px;
                    background: #fff;
                }
            }
            &:last-child {
                margin-left: 10px;
                &::after {
                    content: '';
                    position: absolute;
                    height: 14px;
                    width: 2px;
                    background: #fff;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                }
            }
        }
        &__title {
            h4 {
                font-size: 17px;
                font-weight: 500;
                color: #1C1C27
            }
        }
        &__price {
            font-size: 15px;
            color: #1C1C27;
            font-weight: 600;
            &_grey {
                color: #AAAAAA
            }
        }
        &__remove {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
        }
        &__icon {
            color: #DF6464 !important
        }
    }
    .map-cart {
        &__item {
            width: 100%;
            height: 170px;
            // border-radius: 30px;
        }
        &__select {
            width: 280px;
            border: none;
            padding: 0;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            color: #000000;
            &:focus {
                box-shadow: none;
            }
        }
        &__title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 17px;
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
        &__price {
            display: block;
            font-size: 15px;
            font-weight: 600;
        }
    }
    @media screen and (max-width: 991px){
        .product {
            &-cart {
                grid-template-columns: 150px 3fr 2fr;
                &__title h4{
                    font-size: 15px;
                }
            }
        }
    }
    @media screen and (max-width: 576px) {
        .map-cart__select {
            width: 200px;
        }
        .cart-content_empty {
            .cart-content {
            &__title {
                font-size: 20px;
            }
            &__subtitle {
                font-size: 16px;
            }
        }
        }
    }
</style>