<template>
  <div class="homepage">
    <div class="homepage-head">
      <div class="homemenu">
          <span></span>
      </div>
      <div>
            <input type="text"> 
      </div>
      
      <div class="homelog">
        <span>登录</span>
      </div>
    </div>
    <menulist></menulist>
  </div>
  
</template>

<script>
import menulist from "../menu/menulist.vue"

 export default   {
      
      components:{
        "menulist":menulist
      }
    }


</script>


<style scoped>
 .homepage{
 
   /* border: 1px solid red; */
    height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between
 }

.homepage-head{
   height: 5.4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

.homelog,.homemenu{
 
  width: 10.6%
}
 .homemenu>span{
    margin: 14px 0 0 15px;
    width: 20px;
    height: 18px;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR…CbKdwabaaAlw0rmhaDAAIIIIBAQYA2U8CLX2kzFcB8m/kAgGUmQShl8pcAAAAASUVORK5CYII=) no-repeat;
    background-size: 100% 100%;
 }
.homelog>span{
    display: inline-block;
    margin: 10px 0;
    /* color: #fff; */
    font-size: 14px;
}

input{
  height: 30px;
  border-radius: 15px
}

</style>

