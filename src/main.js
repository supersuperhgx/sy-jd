import Vue from 'vue'
import VueRouter from "vue-router"
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



import router from"./routers/index.js"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueSwiper)

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
