<template>
  <div class="completed">
    <b-row>
        <b-col lg="8" offset-md="2">
            <div class="completed__text">
                <p>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</p>
            </div>
        </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
    .completed {
        margin-bottom: 620px;
    }
    .completed__text {
        text-align: center;
        padding: 35px 0;
        font-size: 17px;
        font-weight: 600;
        background: #fff;
        border-radius: 30px;
        p {
            margin: 0;
        }
    }
    @media screen and (max-width: 450px) {
        .completed {
            margin-bottom: 400px;
            &__text {
                padding: 25px 0;
                font-size: 15px;
            }
        }
    }
</style>