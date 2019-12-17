<template>
  <swiper :options="swiperOption">
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
          el: ".swiper-pagination"
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
.swiper-slide{
    width: 93.3%;
    height:200px,
}
.swiper-slide>img{
    width: 100%;
    height: 100%;
}
</style>