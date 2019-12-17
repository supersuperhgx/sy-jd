import VueRouter from "vue-router"

import homepage from"../components/fourhomepage/homepage.vue"
import sort from"../components/fourhomepage/sort.vue"
import shoppingcraft from"../components/fourhomepage/shoppingcraft.vue"
import unlog from"../components/fourhomepage/unlog.vue"
const routes =[
    {path:"/",
    component:homepage},
    {path:"/sort",
    component:sort},
    {path:"/shoppingcraft",
    component:shoppingcraft},
    {path:"/unlog",
    component:unlog},
]

const router = new VueRouter({
    routes:routes
})


export default router