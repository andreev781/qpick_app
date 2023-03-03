<template>
    <div class="product">
        <h3 class="product__title">{{product.category}}</h3>
        <b-row>
            <b-col lg="12" class="product__main main-product">
                <div class="main-product__top">
                    <div class="main-product__icon">
                        <v-icon>fa-regular fa-heart</v-icon>
                    </div>
                    <div class="main-product__logo">
                        <a href="#"><img src="~assets/img/products/logo.png" alt="logo"></a>
                    </div>
                </div>
                <div class="main-product__images">
                    <b-row>
                        <b-col v-for="(item, index) in 4" :key="index" cols="6" sm="3">
                            <img :src="require(`@/assets/img/products/${product.image}`)" alt="image" class="main-product__image">
                        </b-col>
                    </b-row>
                </div>
                <div class="main-product__bottom">
                    <h4 class="main-product__title">
                        {{product.title}}
                    </h4>
                    <div class="main-product__price">
                        <div class="main-product__price-block">
                            <span class="main-product__current-price" :class="{'red': product.last_price}">{{parseInt(product.price).toLocaleString()}} ₸</span>
                            <span class="main-product__last-price" v-if="product.last_price">{{parseInt(product.last_price).toLocaleString()}} ₸</span>
                        </div>
                        <div class="main-product__discount" v-if="product.percent">{{product.percent}}%</div>
                    </div>
                </div>
            </b-col>
            <b-col lg="9" class="product__characteristics characteristics-product">
                <h5 class="characteristics-product__title">Описание и характеристики</h5>
                <ul class="characteristics-product__list">
                    <li 
                        v-for="(item, index) in product.characteristics" :key="index"
                        class="characteristics-product__item">{{item.title}}: {{item.value}}
                    </li>
                </ul>
            </b-col>
            <b-col lg="3" class="product__buttons">
                <button @click="buyNow()" class="main-button">Купить!</button>
                <b-button v-b-modal.modal-basket class="main-button" @click="addToBasket(product);">
                        <v-icon>fa-solid fa-cart-shopping</v-icon>
                        Добавить в корзину
                </b-button>
            </b-col>
        </b-row>


    </div>
</template>
<script>
export default {
    methods: {
        addToBasket(product){
            let itemsInBasket = this.$store.getters.getProductFromBasket;
            const checkArr = (element) => element.id == product.id
            if (itemsInBasket.some(checkArr)) {
                alert('Этот элемент уже есть в корзине!')
                return
            }
            
            else {
                this.$store.commit('addItemToBasket', product);
                alert('Элемент успешно добавлен в корзину!')
            }
        },
        buyNow(item) {
            this.$store.commit('addSingleItem', this.product)
            this.$router.push('/ordering');
        }
    },
    computed: {
        product(){
            return this.$store.getters.getProductById(this.$route.params.id)
        }
    },    
}
</script>
<style lang="scss">
    .product__title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #838383
    }
    .main-product{
        padding: 15px 20px;
        background: #fff;
        border-radius: 30px;
    }
    .main-product {
        margin-bottom: 25px;
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__icon .v-icon{
            cursor: pointer;
            &:hover{
                color: #FFA542
            }
        }
        &__images {
            padding-left: 40px;
            padding-right: 80px;
            margin-bottom: 40px;
        }
        &__bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__title {
            font-size: 25px;
            font-weight: 600;
            color: #1C1C27
        }
        &__price {
            display: flex;
            align-items: center;
        }
        &__price-block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__current-price {
            font-size: 20px;
            font-weight: 600;
            color: #1C1C27;
            &.red {
                font-size: 28px;
                color: #DF6464
            }
        }
        &__last-price {
            position: relative;
            align-self: flex-end;
            right: -5px;
            font-size: 20px;
            text-decoration:line-through;
            text-decoration-color: #DF6464;
            color: #AAAAAA;
        }
        &__discount {
            color: #DF6464;
            font-size: 20px;
            font-weight: 600;
            margin-left: 50px;
        }
    }
    .characteristics-product {
        padding: 0;
        background: #F9F9F9;
        border-radius: 15px;
        &__title {
            display: block;
            padding: 15px 20px;
            font-size: 20px;
            font-weight: 600;
            color: #1C1C27;
            background: #fff;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
        }
        &__list {
            padding: 15px 20px;
        }
        &__item {
            font-size: 15px;
            font-weight: 500;
            color: #1C1C27;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
    .product__buttons {
        display: flex;
        flex-direction: column;
        padding-top: 0;
    }
    @media screen and (max-width: 1200px) {
        .main-product {
            &__current-price {
                font-size: 20px;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .main-product {
            &__title {
                font-size: 20px;
            }
            &__current-price {
                font-size: 16px;
            }
        }
        .characteristics-product {
            &__title {
                font-size: 17px;
            }
            &__item {
                font-size: 14px;
            }
        }
    }
</style>