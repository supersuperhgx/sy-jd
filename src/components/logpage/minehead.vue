<template>
    <div class="crafthead">
      <div class="arrow" @click="back">
        <span></span>
      </div>
      <div class="craft">我的京东</div>
      <div class="point">
        <span></span>
      </div>
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
    display: flex;
    background: #ffffff;
    border-bottom: 1px solid #cccccc;
    justify-content: space-between;
}
.craft{
    line-height: 42.93px
}
.arrow,.point{
    width: 10.6%;
    height: 100%;
    /* border: 1px solid red */
}
.arrow span{
    display: inline-block;
    margin: 12px 0 0 10px;
    width: 20px;
    height: 20px;
    background: url("../../assets/sortimg/arrow.jpg") no-repeat;
    background-size: 100% 100%
}
.point span{
    display: inline-block;
    margin: 12px 0 0 10px;
    width: 20px;
    height: 20px;
    background: url("../../assets/sortimg/point.jpg") no-repeat 50%;
    background-size: 20px;
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