import Vue from 'vue'
import VueRouter from "vue-router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from"./routers/index.js"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
