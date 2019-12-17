<template>
  <swiper :options="swiperOption" class="homepageswiper">
    <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
      <img :src="item.url" />
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 左右箭头 -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>

export default {
  data() {
    return {
     
      carouselArr: [
        { url: require('../../assets/swiperimg/1.jpg')  },
        { url: require('../../assets/swiperimg/2.jpg')  },
        { url: require('../../assets/swiperimg/3.jpg')  },
        { url: require('../../assets/swiperimg/4.jpg')  },
        { url: require('../../assets/swiperimg/5.jpg')  },
        { url: require('../../assets/swiperimg/6.jpg')  },
        { url: require('../../assets/swiperimg/7.jpg')  },
        { url: require('../../assets/swiperimg/8.jpg')  },
   
      ],

      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          type:"custom",
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml +=
                  '<span class="swiper-pagination-customs"></span>';
              }
            }
            return '<div class="swiperPag">'+customPaginationHtml+'</div>';
          }
  


          
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    };
  }
  
};


</script>

<style scoped>


.homepageswiper{
  width: 100%;
  height: 31.18%;
  /* border: 1px solid red */
}
.swiper-slide{
    width: 93.3%;
    /* width: 350px; */
    height: 100%;
    text-align: center;
  
}
.swiper-slide>img{
 /* width: 100%; */
    width: 350px;
  border-radius: 5px;
 height: 100%
}
</style>
<style >

.swiperPag{
  display: flex;
  flex-direction: row;
  justify-content: center
}
.swiper-pagination span{
    color: blue;
    display: inline-block;
    width: 8px;
    height: 3px;
    margin:0px 3px
    /* background: #ffffff */
}
 .swiper-pagination-customs {
  /* width: 1.5rem;
  height: 0.14rem; */
  display: inline-block;
   background-color: rgba(237, 237, 237, 0.4)
}

 .swiper-pagination-customs-active {
  /* width: 1.5rem;
  height: 0.14rem; */
  display: inline-block;
  /* border-radius: 0.07rem; */
  background-color: #ffffff
} 


</style>