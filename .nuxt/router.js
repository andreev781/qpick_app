import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d1d2558 = () => interopDefault(import('..\\pages\\Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _7be6c7c3 = () => interopDefault(import('..\\pages\\Completed.vue' /* webpackChunkName: "pages/Completed" */))
const _dfc1c620 = () => interopDefault(import('..\\pages\\Conditions.vue' /* webpackChunkName: "pages/Conditions" */))
const _87b92dea = () => interopDefault(import('..\\pages\\Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _3d6c55cf = () => interopDefault(import('..\\pages\\Favorites.vue' /* webpackChunkName: "pages/Favorites" */))
const _9690f3e8 = () => interopDefault(import('..\\pages\\Ordering.vue' /* webpackChunkName: "pages/Ordering" */))
const _507883df = () => interopDefault(import('..\\pages\\product\\_id\\index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _f63d222c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Cart",
    component: _6d1d2558,
    name: "Cart"
  }, {
    path: "/Completed",
    component: _7be6c7c3,
    name: "Completed"
  }, {
    path: "/Conditions",
    component: _dfc1c620,
    name: "Conditions"
  }, {
    path: "/Contacts",
    component: _87b92dea,
    name: "Contacts"
  }, {
    path: "/Favorites",
    component: _3d6c55cf,
    name: "Favorites"
  }, {
    path: "/Ordering",
    component: _9690f3e8,
    name: "Ordering"
  }, {
    path: "/product/:id",
    component: _507883df,
    name: "product-id"
  }, {
    path: "/",
    component: _f63d222c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
