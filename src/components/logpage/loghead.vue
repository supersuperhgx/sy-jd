<template>
    <div class="crafthead">
      <div class="arrow" @click="back">
        <span></span>
      </div>
          京东登录注册
    </div>
 
</template>
<script>
export default {
    methods:{
        back(){
            window.history.go(-1)
        }
    }
};
</script>
<style  scoped>

.crafthead{
    width: 100%;
    height: 5.41%;
    text-align: center;
    background: #ffffff;
    line-height: 43px;
    display: flex
}
.craft{
    line-height: 42.93px;
    margin: 0 auto
    /* flex-grow: 1; */
   
    
}
.arrow{
    width: 10.6%;
    height: 100%;
    display: flex;
    align-items: center
    /* border: 1px solid red */
}
.arrow span{
    display: inline-block;
    /* margin: 12px 0 0 10px; */
    width: 20px;
    height: 20px;
    background: url("../../assets/sortimg/arrow.jpg") no-repeat;
    background-size: 100% 100%
}


i{
    display: block;
    width: 18px;
    height: 15px;
    background: url("../../assets/sortimg/jd-sprites.png") no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin-left: 10px;
    margin: 8px 0 0 15px;
    position: absolute;
    bottom: 14px
}
</style>