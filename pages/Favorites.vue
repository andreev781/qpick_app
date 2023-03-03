<template>
    <div class="favorites">
        <div class="favorites__content">
            <h6 class="favorites__title">Избранное</h6>
            <div class="main-goods" v-for="(i, key) in favorites" :key="key">
                <h5 class="main-goods__title">Наушники</h5>
                <Products v-for="(item, key) in i" :key="key" :items="item"/>
            </div>
        </div>
    </div>
</template>
<script>
import Products from "~/components/Products.vue"
export default {
    data(){
        return {
            favorites: [
                [
                [
                    {
                        title: "Apple BYZ S852I",
                        image: "02.png",
                        favourite: true,
                        price: "2927",
                        last_price: "3527",
                        rating: "4.7"
                    },
                    {
                        title: "Apple EarPods",
                        image: "03.png",
                        favourite: true,
                        price: "2327",
                        rating: "4.5"
                    },
                    {
                        title: "Apple EarPods",
                        image: "04.png",
                        favourite: true,
                        price: "2327",
                        rating: "4.5"
                    },
                    {
                        title: "Apple BYZ S852I",
                        image: "02.png",
                        favourite: true,
                        price: "2327",
                        last_price: "3527",
                        rating: "4.7",
                        percent: "20"
                    },
                    {
                        title: "Apple BYZ S852I",
                        image: "03.png",
                        favourite: true,
                        price: "2327",
                        last_price: "3527",
                        rating: "4.7",
                        percent: "20"
                    },
                    {
                        title: "Apple BYZ S852I",
                        image: "04.png",
                        favourite: true,
                        price: "2327",
                        last_price: "3527",
                        rating: "4.7",
                        percent: "20"
                    },
                ],
                ]
            ]
        }
    },
    components: { Products }
}
</script>
<style lang="scss">
    .favorites {
        &__title, .main-goods__title {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
    .main-goods__title {
        color: #838383;
    }
</style>