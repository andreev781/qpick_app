<template>
    <header class="header">
    <nav class="navigation">
        <b-row class="header__row">
            <b-col cols="3" sm="2">
                <nuxt-link :to="{path: '/'}" class="header__logo">
                  <img src="~assets/img/logo.png" alt="">
                </nuxt-link>     
            </b-col>
            <b-col cols="8" sm="9">
                <v-icon class="header__phone">fa-solid fa-mobile-screen</v-icon>
                <client-only>
                  <b-dropdown  ref="dropdown" id="dropdown-1" text="Выбрать модель телефона" class="m-md-2 header-dropdown">
                    <b-dropdown v-for="item in 10" :key="item" id="dropdown-2" text="Apple" class="m-md-2 header-subdropdown" >
                        <b-dropdown-item @click="isNavLink = true">
                           <nuxt-link :to="{path: `/product/10`}" >
                           iPhone 10
                           </nuxt-link>
                        </b-dropdown-item>
                        <b-dropdown-item @click="isNavLink = true">
                          <nuxt-link :to="{path: `/product/11`}">
                            iPhone 12 Pro
                          </nuxt-link>
                        </b-dropdown-item>
                        <b-dropdown-item @click="isNavLink = true">
                          <nuxt-link :to="{path: `/product/12`}">
                            iPhone 13
                          </nuxt-link>
                        </b-dropdown-item>
                        <b-dropdown-item @click="isNavLink = true">
                          <nuxt-link :to="{path: `/product/13`}">
                            iPhone 13 Pro
                          </nuxt-link>
                        </b-dropdown-item>
                    </b-dropdown>
                </b-dropdown>
                </client-only>
            </b-col>
            <b-col cols="1" >
              <div class="header__icons">
                <nuxt-link class="header-icon" :to="{path: '/cart'}">
                  <v-icon>fa-solid fa-cart-shopping</v-icon>
                    <div class="header-icon__counter" v-if="(itemsInBasket > 0)">
                      {{itemsInBasket}}
                  </div>
                </nuxt-link>
            </div>
            </b-col>
        </b-row>
    </nav>        
    </header>
</template>
<script>
export default {
    data(){
      return {
        isNavLink: false
      }
    },
    computed: {
      itemsInBasket(){
        return this.$store.getters.getCountFromBasket
      }
    },
    mounted: function () {
      this.$root.$on('bv::dropdown::show', bvEvent => {
        if(bvEvent.componentId === 'dropdown-2') {
          this.isDropdown2Visible = true;
        }
        })
      this.$root.$on('bv::dropdown::hide', bvEvent => {
        if(bvEvent.componentId === 'dropdown-2') {
          this.isDropdown2Visible = false;
          if (this.isNavLink) {
            this.$refs.dropdown.visible = false;
            this.isNavLink = false
          }
        }
        if(this.isDropdown2Visible) {
          bvEvent.preventDefault()
        }
        else {
        }
        })
    },
    methods: {
      changeDropdown() {
        this.showDropdown = false
      }
    }
    
}
</script>
<style lang="scss">
.header {
  margin-bottom: 15px;
  &__phone {
    color: #838383;
  }
  &__row {
    align-items: center;
  }
  &-dropdown, &-subdropdown {
    button {
      font-size: 17px;
      font-weight: 500;
    }
    button, .dropdown-item {
      background: transparent !important;
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
      color: #101010 !important;
      &:hover {
        color: #FFA542 !important
      }        
    }
  }
  &-subdropdown {
    display: inline-block;
    margin: 0;
    .dropdown-item {
      font-size: 15px;
      font-weight: 500;
    }
    button {
      display: inline-block;
      width: 100%;
      text-align-last: left;
      &:after {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateX(-50%);
      }
    }
    .dropdown-menu {
      display: block ;
      position: relative !important ;
      transform: translate(0) !important;
      max-height: 0px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      transition: max-height .8s cubic-bezier(0, 1, 0, 1) -.1s;
      border: none;
      &.show {
        max-height: 1000px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0); 
        transition-delay: 0s;
      }
    }
  }
  &__icons {
    display: flex;
    justify-content: space-between;
  }
  &-icon {
    position: relative;
    i:hover {
      color: #B0B0B0
    }
    &__counter {
      position: absolute;
      top: -8px; right: -8px;
      width: 17px;
      height: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FFA542;
      color: #fff;
      padding: 5px;
      border-radius: 50px ;
      font-size: 14px;
      font-weight: 500;
  }

  }
  @media screen and (max-width: 576px) {
    padding: 10px 0;
    &-dropdown button, &-subdropdown button {
      font-size: 13px;
    }
    &__phone {
      display: none !important;
    }
    &-icon {
      i {
        font-size: 15px !important;
      }
      &__counter {
        width: 12px;
        height: 12px;
        font-size: 12px;
      }
    }
    
  }
}
</style>