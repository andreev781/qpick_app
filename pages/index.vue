<template>
  <div class="div">
    <div class="banner">
      <div class="banner__content">
        <div class="banner__text">
          <h1>Аксессуары для 
            Iphone 13 Pro Max</h1>
        </div>
        <div class="banner__image">
          <img src="~assets/img/banner.png" alt="">
        </div>
      </div>
    </div>
    <div class="main-goods">
      <h5 class="main-goods__title">
        Чехлы
      </h5>
      <div class="main-goods__content">
        <div class="main-goods__item goods-item" v-for="item in 3" :key="item">
          <img src="~assets/img/products/01.png" alt="assets" class="goods-item__image">
          <p class="goods-item__title">Стеклянные</p>
          </div>
      </div>
    </div>
    <div class="main-goods" v-for="(item, key) in Object.keys($store.getters.productsToView)" :key="key">
      <h5 class="main-goods__title">{{item.category}}</h5>
      <Products :items="$store.getters.productsToView[item]"/>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products.vue"
export default {
    name: "IndexPage",
    components: { Products }
}
</script>
<style lang="scss">
img {
  max-width: 100%;
}
  .banner {
    margin-top: 22px;
    padding-bottom: -100px;
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      border-radius: 30px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
    &__text {
      color: #fff;
      font-size: 30px;
      line-height: 37px;
      font-weight: 600;
      margin-right: 200px;
      max-width: 300px;
    }
  }
  .main-goods {
    margin-top: 44px;
    &__title {
      font-size: 20px;
      font-weight: 600;
      color: #838383;
      margin-bottom: 20px;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
  }
  &__item {
    padding: 25px 0 50px 0;
    text-align: center;
    background: #fff;
    border-radius: 30px;
  }
  }
  .goods-item {
    &__title {
      color: #1C1C27;
      font-size: 17px;
      font-weight: 600;
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 1200px) {
    .banner {
      &__content {
        padding: 0 20px;
      }
      &__text {
        font-size: 20px;
      }
    }
}
@media screen and (max-width: 768px) {
  .banner {
    &__text {
      font-size: 16px;
    }
  }
  .main-goods {
    &__content {
      grid-column-gap: 10px ;
    }
    &__item {
      padding: 15px 0 20px 0;
    }
  }
}
@media screen and (max-width: 576px) {
  .banner {
    &__image {
      display: none;
    }
    &__text {
      margin-right: 0;
      padding: 20px 0;
      font-size: 14px;
    }
  }
  .goods-item {
    border-radius: 10px;
    padding: 6px;
    &__title {
      font-size: 14px;
    }
  }
}
</style>