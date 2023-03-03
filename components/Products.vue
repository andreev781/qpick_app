<template>
    <div class="products">
        <h5 class="main-goods__title">{{items[Object.keys(items)[0]].category}}</h5>
        <div class="products__content">
            <ul class="products__list">
                <client-only>
                    <li v-for="(item, key) in items" :key="key" class="products__item" >
                        <nuxt-link :to="{path: `/product/${item.id}`}">
                            <div class="products__container">
                                <div class="products__icons" v-if="item.favourite">
                                    <a href="#" class="products__apple" v-if="item.apple">
                                        <v-icon>fa-brands fa-apple</v-icon>
                                    </a>
                                </div>
                                <img class="products__image" :src="require(`@/assets/img/products/${item.image}`)" alt="product">
                                <div class="products__text">
                                    <p class="products__title">
                                        {{item.title}} 
                                    </p>
                                    <p class="products__price" :class="{'red': item.percent}">
                                        <span>{{parseInt(item.price).toLocaleString()}} ₸  
                                            <span class="products__percent" v-if="item.percent">
                                                -{{item.percent}}%
                                            </span>
                                        </span>
                                        <span class="products__discount" :class="{'red': item.percent}" v-if="item.last_price">
                                            {{parseInt(item.last_price).toLocaleString()}} ₸ 

                                        </span>
                                    </p>
                                </div>
                                <div class="products__rating" v-if="item.rating">
                                    <v-icon>
                                        fa-solid fa-star
                                    </v-icon>
                                    <span>{{item.rating}}</span>
                                </div>
                            </div>
                        </nuxt-link>
                    </li>
                </client-only>

            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['items']
    
}
</script>
<style lang="scss">
    .products {
        &__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px
        }
        &__item {
            display: block;
            background: #fff;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }
        &__container {
            padding: 15px 20px 30px 20px;
            @media screen and (max-width: 1400px) {
                padding: 10px 15px 20px 15px;
            }
        }
        &__icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            .v-icon {
            display: block;
            color: #1C1C27;
            font-size: 25px;
            }
        }
        &__apple {
            font-size: 30px;
        }
        &__image {
            display: block;
            margin: 0 auto;
            height: 240px;
        }
        &__text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 40px;
        }
        &__title {
            font-size: 17px;
            font-weight: 600;
            color: #000;
            margin-bottom: 25px;
        }
        &__price {
            position: relative;
            font-size: 17px;
            font-weight: 600;
            color: #FFA542;
            &.red {
                color: #DF6464;
            }
        }
        &__discount {
            position: absolute;
            bottom: -120%;
            left: 10%;
            font-size: 13px;
            color: #FFCE7F;
            text-decoration: line-through;
            &.red {
                color: #AAAA;
                text-decoration-color: #DF6464
            }
        }
        &__rating {
            display: flex;
            align-items: center;
            .v-icon {
                color: #FFCE7F
            }
            span {
                font-size: 17px;
                color: #838383;
                font-weight: 600;
                margin-left: 10px;
                line-height: 0;
            }
        }
        &__percent {
            margin-left: 25px;
        }
        @media screen and (max-width: 1400px) {
            &__title {
                font-size: 14px;
            }
            &__price {
                font-size: 14px;
            }
            &__percent {
                font-size: 12px;
                margin-left: 10px;
            }
        }
        @media screen and (max-width: 1200px) {
                &__discount {
                    bottom: -200%;
                
                    &.red {
                        bottom: -120%
                    }
                }
        }
        @media screen and (max-width: 991px) {
            &__image {
                height: 150px;
            }
            &__title {
                font-size: 13px;
            }
            &__price {
                font-size: 12px;
            }
            &__discount.red {
                bottom: -80%
            }
        }
        @media screen and (max-width: 768px) {
            &__list {
                grid-template-columns: 1fr;
            }
            &__image {
                height: 100%;
            }
            &__title {
                font-size: 17px;
            }
            &__price {
                font-size: 15px;
            }
            &__discount {
                bottom: -100% !important
            }
        }
    }
</style>