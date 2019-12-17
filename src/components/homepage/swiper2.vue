<template>
<div class="swiper-wrap">
  <swiper :options="swiperOption" class="homepageswiper2">
    <swiper-slide class="swiper-slide">
      <div class="sinlist1" v-for="(item,index) in signlist1" :key="index">

      </div>
      <div>2</div>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination1" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
 export default {
        data(){
            return {

                signlist:[
                    {url:"",name:"京东超市"}
                ],

            


                swiperOption:{
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination1'
                    },
                    //设置点击箭头
                
                    //自动轮播
                    autoplay: {
                      delay: 2000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
                }
            }
        }
    }
</script>
<style >
.swiper-wrap{
    height: 58.35%;
    /* width: 100%; */
    background: url("../../assets/homepageimg/background2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  
}
</style>>


