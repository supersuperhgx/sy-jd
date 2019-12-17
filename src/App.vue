<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div class="menu">
      <p @click="jump1">首页 </p>
      <p @click="jump2">分类 </p>
      <p @click="jump3">购物车</p>
      <p @click="jump4">未登录</p>
    </div> -->
  </div> 
 
</template>

<script>


export default {
 
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
  height: 100%
}
#app{
  width: 100%;
  height: 100%
}

</style>
