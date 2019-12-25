import Vue from 'vue'
import VueRouter from "vue-router"
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import router from"./routers/index.js"
import App from './App.vue'
import store from"./store/index.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 Vue.use(VueLazyLoad,{
     preLoad: 1.3,
   
     attempt: 1
 })
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(vueSwiper)
Vue.use(ElementUI);



new Vue({
  render: h => h(App),
  store:store,
  router:router,
}).$mount('#app')
