<template>
    <footer class="footer">
        <div class="footer__content">
            <b-row class="footer__row">
                <b-col md="4">
                    <a href="#" class="footer__logo">
                        <img src="~assets/img/logo.png" alt="">
                    </a>
                </b-col>
                <b-col cols="3">
                    <nav class="footer-nav">
                        <ul class="footer-nav__list">
                            <li class="footer-nav__item">
                                <nuxt-link :to="{path: 'cart'}" href="#" class="footer-nav__link">Корзина</nuxt-link>
                            </li>
                            <li class="footer-nav__item">
                                <nuxt-link :to="{path: 'contacts'}" class="footer-nav__link">Контакты</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </b-col>
                <b-col md="5">
                    <div class="footer__conditions">
                        <nuxt-link :to="{path: '/conditions'}" href="#" @click="show($event)">Условия сервиса</nuxt-link>
                    </div>
                </b-col>
            </b-row>
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        show(e){
            e.preventDefault();
            
            alert('Этот сайт создан для портфолио. Данная функция недоступна.')
        }
    }
}
</script>
<style lang="scss">
    .footer {
        margin-top: 60px;
        &__content {
            background: #fff;
            border-radius: 30px;
            padding: 30px 0 0 30px;
        }
        &-nav {
            &__item {
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
            }
            &__link {
                font-size: 17px;
                font-weight: 400;
                color: #000;
                &:hover {
                    color: #FFA542
                }
            }
        }
        &__conditions {
            a {
            font-size: 17px;
            font-weight: 400;
            color: #000;
            &:hover {
                color: #FFA542
            }
            }
        }
        @media screen and (max-width: 768px) {
            &__logo  img{
                margin-bottom: 15px;
            }
        }
    }
</style>