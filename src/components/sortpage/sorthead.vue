<template>
  
    <div class="sorthead">
      <div class="arrow">
        <span></span>
      </div>
      <div class="input">
          <i></i>
        <input type="text" placeholder="键盘鼠标套装" />
      </div>
      <div class="point">
        <span></span>
      </div>
    </div>
 
</template>
<script>
export default {};
</script>
<style  scoped>

.sorthead{
    width: 100%;
    height: 5.41%;
    display: flex;
    background: #ffffff;
    border-bottom: 1px solid #cccccc
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
.input{
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;
}
.input input{
    width: 100%;
    height: 68.18%;
    /* border: 1px solid #cccccc; */
    border: none;
    outline: none;
    border-radius: 15px;
    padding:0px 5px 0px 45px;
    background: rgb(240, 242, 245)
    
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