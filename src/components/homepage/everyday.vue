<template>
  <div class="everyday">
    <div class="everydayhead">
      <img src="../../assets/homepageimg/everyday.jpg" alt />
    </div>
    <div class="every-content">
      <div>
        <p class="every-content-head1">免息星球</p>
        <p class="world">白条免息购</p>
        <div>
          <img src="../../assets/homepageimg/phone.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head2">每日特价</p>
        <p class="world">9块9疯抢</p>
        <div>
          <img src="../../assets/homepageimg/orange.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head3">品牌闪购</p>
        <p class="world">汇大牌好价</p>
        <div>
          <img src="../../assets/homepageimg/huazhuang.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head4">京东直播</p>
        <p class="world">边看边买</p>
        <div>
          <img src="../../assets/homepageimg/kouhong.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head5">排行榜</p>
        <p class="world">销量排行推荐</p>
        <div>
          <img src="../../assets/homepageimg/naifen.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head6">拍拍好物</p>
        <p class="world">二手优品</p>
        <div>
          <img src="../../assets/homepageimg/pubg.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head7">新品首发</p>
        <p class="world">京东小魔方</p>
        <div>
          <img src="../../assets/homepageimg/airpods.jpg" alt />
        </div>
      </div>
      <div>
        <p class="every-content-head8">发现好货</p>
        <p class="world">教你买买买</p>
        <div>
          <img src="../../assets/homepageimg/wash.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.world {
  font-size: 12px;
  color: #667771;
}
.everyday {
  width: 94.6%;
  height: 34%;
  border: 1px solid red;
  margin: 0 auto;
  background: #ffffff
}

.everydayhead {
  width: 100%;
  height: 12.6%;
}
.everydayhead > img {
  width: 100%;
  height: 100%;
}

.every-content{
    display: flex;
    flex-wrap: wrap
}
.every-content>div{
    width: 25%;
    padding: 6.5px 0px 5px 10px
}
.every-content>div img{
    width: 60px;
    height: 60px
}

.every-content-head1{
    
    background: linear-gradient(90deg, #FF2A2A,#F139D2);
     color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head2{
    
    background: linear-gradient(90deg, #FE8537,#F02B2B);
     color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head3{
    
    background: linear-gradient(90deg, #FF765C,#FF23B3);
     color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head4{
    
   background: linear-gradient(90deg, #FF2A00,#FF00AF);
    color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head5{
     
    background: linear-gradient(90deg, #D400FF,#FF320A);
    color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head6{
    
    background: linear-gradient(90deg, #00C2AB,#3E94FF);
     color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head7{
   
    background: linear-gradient(90deg, #FF765C,#FF23B3);
      color: transparent;
    background-clip: text;
    font-weight: 700;
   
}
.every-content-head8{
     
    background: linear-gradient(90deg, #2AD396,#85BB1F);
    color: transparent;
    background-clip: text;
    font-weight: 700;
   
}

</style>