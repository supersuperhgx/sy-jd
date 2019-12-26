<template>
  <div class="shoppingcraft">
    <crafthead ></crafthead>
    
    <tolog v-if="list.length==0"></tolog>
    
    <craftdetails v-else></craftdetails>
    <countdown></countdown>
    <wantto></wantto>
  </div>
</template>

<script>
import crafthead from "../craftpage/crafthead.vue";
import tolog from "../craftpage/tolog.vue";
import countdown from "../homepage/countdown.vue";
import wantto from "../craftpage/wantto.vue";
import craftdetails from "../craftpage/craftdetails.vue";
export default {
  components: {
    crafthead: crafthead,
    tolog: tolog,
    countdown: countdown,
    wantto: wantto,
    craftdetails: craftdetails
  },

  computed: {
    list() {
      // if (localStorage.getItem("buylist")) {
      //   return JSON.parse(localStorage.getItem("buylist"));
      // }else{
      //   return []
      // }
    if(this.$store.state.buylist){
      return this.$store.state.buylist
    }else{
      return []
    }

      
    }
  },
  beforeMount(){
    this.$store.state.buylist = JSON.parse(localStorage.getItem("buylist"))
    // console.log(this.$store.state.buylist)
  }
  // created() {
    
  //   console.log(localStorage.getItem("buylist"))
  // }
  // created(){
  //   this.getData()
  // },
  // methods:{
  //   getData(){
  //     this.cartList = JSON.parse(localStorage.getItem('buylist'))
  //     console.log(this.cartList == true)
  //   }
  // }
};
</script>


<style scoped>
.shoppingcraft {
  width: 100%;
  height: 100%;
}
</style>