<template>
  <div class="shoppingcraft">
    <crafthead></crafthead>
    <tolog></tolog>
    <countdown></countdown>
  </div>
</template>

<script>
import crafthead from "../craftpage/crafthead.vue";
import tolog from "../craftpage/tolog.vue";
import countdown from "../homepage/countdown.vue";
 export default   {
    components:{
      crafthead:crafthead,
      tolog:tolog,
      countdown:countdown
    }
    }


</script>


<style scoped>
 .shoppingcraft {
  width: 100%;
  height: 100%}
</style>