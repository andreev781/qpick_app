<template>
    <b-container>
       <Header />
       <Nuxt />
       <Footer />
    </b-container>
</template>
<script>

export default({
    mounted(){
      this.$store.dispatch('fetchBasket')
    },
})
</script>

<style lang="scss">
    img {
        max-width: 100%;
    }
    .main-button {
        position: relative;
        padding: 13px 0px 14px 0;
        border-radius: 10px;
        font-size: 18px;
        background: #101010;
        color: #fff;
        font-weight: 500;
        text-align: center;
        &:not(:last-child) {
            margin-bottom: 18px;
        }
        .v-icon {
            color: #fff;
            font-size: 20px;
            margin-right: 10px;
        }
        &:hover {
            opacity: .8;
            color: #fff
        }
        @media screen and(max-width: 991px) {
            font-size: 15px;
            margin-top: 15px;
        }

    }
</style>