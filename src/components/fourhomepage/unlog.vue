<template>
  <div class="log">
   <div class="logwrap">
     <loghead></loghead>
     <formlog></formlog>
     </div> 
    
  </div>
</template>

<script>
import loghead from "../logpage/loghead.vue";
import formlog from "../logpage/formlog.vue";
 export default   {
      components:{
        loghead:loghead,
        formlog:formlog
      }
    }


</script>


<style scoped>
 

.log{
  background: #ffffff;
  widows: 100%;
  height: 100%;
  overflow: hidden;
}

.logwrap{
   width: 86.6%;
    height: 100%;
    margin: 0 auto
}
</style>