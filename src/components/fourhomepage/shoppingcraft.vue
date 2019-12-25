<template>
  <div class="shoppingcraft">
    <crafthead v-if="list != null"></crafthead>
    <!-- <crafthead v-if="list.length>0"></crafthead> -->
    <tolog v-else></tolog>
    <craftdetails></craftdetails>
    <countdown></countdown>
    <wantto></wantto>
  </div>
</template>

<script>
import crafthead from "../craftpage/crafthead.vue";
import tolog from "../craftpage/tolog.vue";
import countdown from "../homepage/countdown.vue";
import wantto from "../craftpage/wantto.vue";
import craftdetails from "../craftpage/craftdetails.vue"
 export default   {
    components:{
      crafthead:crafthead,
      tolog:tolog,
      countdown:countdown,
      wantto:wantto,
      craftdetails:craftdetails
    },
  
    computed:{
      list(){
        return JSON.parse(localStorage.getItem('buylist'))
      }

    },
    created(){
      console.log(this.list)
      console.log(this.list != null)
    }
    // created(){
    //   this.getData()
    // },
    // methods:{
    //   getData(){
    //     this.cartList = JSON.parse(localStorage.getItem('buylist')) 
    //     console.log(this.cartList == true)
    //   }
    // }

    }
</script>


<style scoped>
 .shoppingcraft {
  width: 100%;
  height: 100%}
</style>