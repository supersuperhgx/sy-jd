import Vue from 'vue'
import VueRouter from "vue-router"
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import router from"./routers/index.js"
import App from './App.vue'

 Vue.use(VueLazyLoad,{
     preLoad: 1.3,
     error:'./static/error.png',
     loading:'./static/loading.png',
     attempt: 1
 })
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueSwiper)

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
