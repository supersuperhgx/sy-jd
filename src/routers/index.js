import VueRouter from "vue-router"

import homepage from "../components/fourhomepage/homepage.vue"
import sort from "../components/fourhomepage/sort.vue"
import shoppingcraft from "../components/fourhomepage/shoppingcraft.vue"
import unlog from "../components/fourhomepage/unlog.vue"
const routes = [
    {
        path: "/",
        component: homepage,
        meta:{
            isshow:true
        }
    },
    {
        path: "/sort",
        component: sort,
        meta:{
            isshow:true
        }
    },
    {
        path: "/shoppingcraft",
        component: shoppingcraft,
        meta:{
            isshow:false
        }
    },
    {
        path: "/unlog",
        component: unlog,
        meta:{
            isshow:false
        }
    },
]

const router = new VueRouter({
    routes: routes
})


export default router