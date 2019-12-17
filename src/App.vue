<template>
  <div id="app">
    <router-view></router-view>
   <menulist></menulist>
  </div> 
 
</template>

<script>

import menulist from "./components/menu/menulist.vue";
export default {
 components:{
   menulist:menulist
 }
//  methods:{
//    jump1(){
//       this.$router.push({ path: "/" })
//    },
//     jump2(){
//       this.$router.push({ path: "sort" })
//    },
//     jump3(){
//       this.$router.push({ path: "shoppingcraft" })
//    },
//     jump4(){
//       this.$router.push({ path: "unlog" })
//    },
//  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
html,body{
  height: 100%;
  
}
#app{
  width: 100%;
  height: 100%;
 
}

</style>
