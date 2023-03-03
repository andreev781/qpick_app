<template>
    <div class="contacts">
        <b-row>
            <b-col lg="8" offset-md="1">
                <div class="contacts__container">
                    <h6 class="contacts__title">Наш офис</h6>
                    <div class="contacts-map">
                        <client-only>
                            <yandex-map :settings="settings" :coords="[43.233406, 76.825998]" :ymap-class="'contacts-map__item'">
                                <!-- <ymap-marker :coords="[43.233406, 76.825998]" :marker-id="'321321'"></ymap-marker> -->
                            </yandex-map>
                        </client-only>
                    </div>

                    <div class="contacts__address address-contacts">
                        <div class="address-contacts__icon">
                            <v-icon>fa-solid fa-location-dot</v-icon>
                        </div>
                        <div class="address-contacts__text">
                            <span class="address-contacts__house">Аксай-3а, 62ф, Алматы, Казахстан</span>
                            <span class="address-contacts__floor">3 этаж 35 кабинет</span>
                        </div>
                    </div>
                </div>
                <div class="contacts__phone">
                    <v-icon>fa-solid fa-phone</v-icon>
                    <span>
                        +7 777 777 77 77
                    </span>
                </div>
            </b-col>
            <b-col lg="1" offset="1">
                <ul class="contacts__social">
                    <li class="contacts__icon">
                        <v-icon>fa-brands fa-whatsapp</v-icon>
                    </li>
                    <li class="contacts__icon">
                        <v-icon>fa-brands fa-vk</v-icon>
                    </li>
                    <li class="contacts__icon">
                        <v-icon>fa-brands fa-instagram</v-icon>
                    </li>
                    <li class="contacts__icon">
                        <v-icon>fa-brands fa-telegram</v-icon>
                    </li>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { yandexMap } from '../node_modules/vue-yandex-maps'
export default {
    data(){
        return {
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
}
</script>
<style lang="scss">
    .contacts__title {
        font-size: 17px;
        font-weight: 600;
        color: #1C1C27;
        margin-bottom: 15px;
    }
    .contacts__container {
        background: #fff;
        padding: 15px 17px 30px 17px;
        border-radius: 30px;
    }
    .contacts-map__item {
        width: 730px;
        height: 424px;
    }
    .address-contacts {
        display: flex;
        align-items: center;
        margin-top: 15px;
        &__text {
            margin-left: 10px;
        }
        &__house, &__floor {
            display: block;
        }
        &__house {
            font-size: 15px;
            color: #000;
            margin-bottom: 5px;
        }
        &__floor {
            font-size: 13px;
            color: #838383
        }
    }
    .contacts__icon {
        width: 97px;
        height: 97px;
        background: #fff;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
        .v-icon {
            font-size: 40px;
            width: 40px !important;
            height: 40px !important;
        }
    }
    .contacts__phone {
        display: flex;
        align-items: center;
        margin-top: 40px;
        .v-icon {
            font-size: 30px;
            margin-right: 28px;
            color: #000
        }
        span {
            font-size: 25px;
            font-weight: 600;
            color: #000;
        }
    }
    @media screen and (max-width: 1300px) {
        .contacts-map__item {
        width: auto;
        height: 424px;
    }
    @media screen and (max-width: 991px) {
        .contacts__social {
            display: flex;
        }
        .contacts__icon:not(:last-child) {
            margin-bottom: 0;
            margin-right: 20px;
        }
    }
    }
</style>