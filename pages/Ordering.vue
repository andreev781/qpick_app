<template>
    <div class="ordering">
        <div class="row">
            <b-col lg="10" offset-md="1">
                <h5 class="ordering__title">Оформление заказа</h5>
                <b-row>
                    <b-col lg="6">
                        <div class="ordering-delivery">
                            <div class="ordering-delivery__title">
                                <h6>Доставка курьером</h6>
                                <span>499 ₸</span>
                            </div>
                            <div class="ordering-map">
                                <client-only>
                                    <!-- <yandex-map :coords="[43.233406, 76.825998]" :ymap-class="'ordering-map__item'"> -->
                                        <!-- <ymap-marker :coords="[43.233406, 76.825998]" :marker-id="'321321'"></ymap-marker> -->
                                <!-- </yandex-map> -->
                                </client-only>
                            </div>
                            <form class="ordering-delivery__form ordering-form">
                                <h6 class="ordering-form__title">
                                    <v-icon>fa-solid fa-location-dot</v-icon>
                                    Адрес доставки
                                </h6>
                                <b-form-select class="ordering-form__select" v-model="selected" :options="cities"></b-form-select>
                                <input type="text" class="ordering-form__input" placeholder="Улица/Район">
                                <div class="ordering-form__row">
                                    <input type="text" class="ordering-form__input" placeholder="Дом">
                                    <input type="text" class="ordering-form__input" placeholder="Подъезд">
                                    <input type="text" class="ordering-form__input" placeholder="Квартира">
                                </div>
                            </form>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="ordering-payment">
                            <div class="ordering-payment__block">
                                <h6 class="ordering-payment__title">
                                    Ваш заказ
                                </h6>
                                <ul class="ordering-payment__sum">
                                    <li class="ordering-payment__product" v-for="item, ind in getProducts" :key="ind">
                                        <p class="ordering-payment__item">
                                            <span v-if="item.count">{{item.count}}x</span>
                                            {{item.title}}
                                        </p>
                                        <p>₸ {{Number(item.price).toLocaleString()}}</p>
                                    </li>
                                    <li class="ordering-payment__product">
                                        <p class="ordering-payment__item">
                                            Доставка
                                        </p>
                                        <p>₸ 499</p>
                                    </li>
                                    <li class="ordering-payment__product">
                                        <p class="ordering-payment__item">
                                            Итого
                                        </p>
                                        <p>₸ {{sum.toLocaleString()}}</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="ordering-payment__block">
                                <h6 class="ordering-payment__title">
                                    Способ оплаты
                                </h6>
                                <div class="ordering-payment__select">
                                    <i class="fa-brands fa-cc-visa"></i>
                                    <b-form-select v-model="secondSelect" :options="methods"></b-form-select>
                                </div>
                                <div class="ordering-payment__promo">
                                    <i class="fa-solid fa-ticket-simple"></i>
                                    <input type="text" placeholder="Есть промокод?">
                                </div>
                            </div>  
                            <div class="ordering-payment__block">
                                <h6 class="ordering-payment__title">
                                    Номер телефона
                                </h6>
                                <div class="ordering-payment__input">
                                    <input v-phone type="text" placeholder="+7 ___ ___ __ __">
                                </div>
                            </div>
                            <nuxt-link :to="{path: 'completed'}" class="main-button">
                                Закончить оформление
                            </nuxt-link>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected: 499,
            secondSelect: 'visa',
            cities: [
                { value: 499, text: 'Доставка курьером' },
                { value: 0, text: 'Самовывоз' },
                { value: 300, text: 'Доставка по Почте России' },
                { value: 100, text: 'Доставка по СДЭКУ' },
            ],
            methods: [
                {value: 'visa', text: 'Счет на kaspi.kz'},
                {value: 'visa', text: 'Счет на kaspi.kz'},
                {value: 'visa', text: 'Счет на kaspi.kz'}
            ]
        }
    },
    computed: {
        getProducts(){
            let productsForOrdering =  (this.$store.getters.productForOrdering)
            let ProductsFromBasket = (this.$store.getters.getProductFromBasket)
            let result =  productsForOrdering.length > 0 ? productsForOrdering : ProductsFromBasket
            return result
        },
        sum(){
            let total = 0;
            this.getProducts.forEach(element => {
                total = Number(element.count) ? Number(element.price) * Number(element.count) : Number(element.price)
            });
            return total + 499
        }
    },
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
        if (answer) {
            setTimeout(() => {
                this.$store.commit('clearSingleItem')
            }, 0);
            next()

        } else {
            next(false)
        }
    }
}
</script>
<style lang="scss">
    .ordering {
        &__title {
            font-size: 20px;
            font-weight: 600;
            color: #1C1C27;
            margin-bottom: 10px;
        }
        &-delivery {
            padding: 23px 30px 30px 35px;
            background: #fff;
            border-radius: 30px;
            &__title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h6 {
                    font-size: 17px;
                    font-weight: 600;
                }
                span {
                    display: block;
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
        &-map {
            &__item {
                width: 100%;
                height: 200px;
                margin-top: 20px;
            }
        }
        &-form {
            margin-top: 20px;
            &__title {
                font-size: 15px;
                font-weight: 500;
                .v-icon {
                    margin-right: 10px;
                }
            }
            &__select, &__input {
                height: auto;
                padding: 13px;
                border: none;
                border-radius: 15px;
                font-size: 15px;
                color: #8E8E8E;
                background: #D6D6D6;
                option {
                    background: #fff;
                }
                &:focus {
                    background: #E6E0E0;
                }
            }
            &__select {
                &:focus {
                    border: none;
                    box-shadow: none;
                    cursor: pointer;
                }
            }
            &__input {
                width: 100%;
                margin-top: 10px;
            }
            &__row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 30px;
            }
        }
        &-payment {
            display: grid;
            height: 100%;
            &__block {
                padding: 15px;
                background: #fff;
                border-radius: 30px;
                margin-bottom: 10px;
            }
            &__title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 25px;
            }
            &__sum {
                margin-bottom: 0;
            }
            &__product {
                position: relative;
                display: flex;
                justify-content: space-between;
            }
            p {
                font-size: 15px;
                font-weight: 500;
                color: #000
            }
            &__item {
                margin-left: 40px;
                span {
                    position: absolute;
                    left: 0;
                    top: 0;
                    margin-right: 20px;
                }
            }
            &__select {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                select {
                    height: auto;
                    padding: 0;
                    border: none;
                    border-radius: 15px;
                    font-size: 15px;
                    color: #000;
                    &:focus {
                        border: none;
                        box-shadow: none;
                    }
                    cursor: pointer;
                    margin-left: 9px;
                }
            }
            &__promo {
                input {
                    margin-left: 9px;
                    &::placeholder {
                        color: #838383
                    }
                }
            }
            &__input {
                padding: 14px;
                font-size: 15px;
                color: #8E8E8E;
                background: #D6D6D6;
                border-radius: 15px;
                &:focus {
                    background: #E6E0E0;
                }
                input {
                    width: 100%;
                }

            }
            &__button {
                padding: 14px 0;
                width: 100%;
                font-size: 15px;
                font-weight: 500;
                border-radius: 10px;
                background: #000;
                color: #fff;

            }
        }
    }
    @media screen and (max-width: 576px) {
        .ordering-delivery {
            &__title {
                h6 {
                    font-size: 14px;
                }
                span {
                    font-size: 13px;
                }
            }
        }
        .ordering-form__input {
            font-size: 13px;
        }
    }
</style>