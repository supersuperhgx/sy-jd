<template>
  <div class="homepage">
    <scroll></scroll>
    <div class="homepage-wrap">
      <div class="homepage-head">
        <div class="homemenu" @click="homemenujump">
          <span></span>
        </div>
        <div class="homepageinput" @click="jumpinput()">
          <span class="jdimg"></span>
          <i></i>
          <span class="jdsprites"></span>
          <input type="text" placeholder="奥克斯空调" />
        </div>
        <div class="homelog" @click="homelog">
          <span>登录</span>
        </div>
      </div>
      <swiper></swiper>
      <swiper2></swiper2>
    </div>
    <countdown></countdown>
    <newman></newman>
    <east></east>
    <everyday></everyday>
    <announcement></announcement>
    <recommend></recommend>

    <i class="up" @click="scroll"></i>
      <div class="one">
     
      </div>
    <!-- <menulist></menulist> -->
  </div>
</template>

<script>
// import menulist from "../menu/menulist.vue";
import swiper from "../homepage/swiper.vue";
import swiper2 from "../homepage/swiper2.vue";
import countdown from "../homepage/countdown.vue";
import newman from "../homepage/newman.vue";
import east from "../homepage/east.vue";
import everyday from "../homepage/everyday.vue";
import announcement from "../homepage/announcement.vue";
import recommend from "../homepage/recommend.vue";
import scroll from "../homepage/scroll.vue";
export default {
  components: {
    // menulist: menulist,
    swiper: swiper,
    swiper2: swiper2,
    countdown: countdown,
    newman: newman,
    east: east,
    everyday: everyday,
    announcement:announcement,
    recommend:recommend,
    scroll:scroll,

  },
  methods: {
    homemenujump() {
      this.$router.push({ path: "sort" });
    },
    homelog() {
      this.$router.push({ path: "unlog" });
    },
    scroll(){
      window.scrollTo(0,0)
    },
    jumpinput(){
       this.$router.push({ path: "seek" });
    }
  }
};
</script>


<style scoped>

.one{
  height: 100px;
}
.homepage {
  height: 100%;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.homepage-wrap {
  background-image: url("../../assets/homepageimg/background1.jpg");
  background-repeat: no-repeat;
  height: 55.28%;
  background-size: 100% 100%;
}
.homepage-head {
  height: 9.8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.homelog,
.homemenu {
  width: 10.6%;
}
.homemenu > span {
  margin: 14px 0 0 15px;
  width: 20px;
  height: 18px;
  display: block;
  background-image: url("../../assets/homepageimg/menu.png");
  background-size: 100% 100%;
}
.homelog > span {
  display: inline-block;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
}

input {
  height: 30px;
  border-radius: 15px;
  border: none;
  flex-grow: 1;
  padding-left: 70px;
}

.homepageinput {
  flex-grow: 1;
  position: relative;
  margin-top: 7px;
  display: flex;
  padding: 0px 10px;
  /* justify-content: space-between */
}

.jdimg {
  display: inline-block;
  width: 20px;
  height: 15px;
  background: url("../../assets/homepageimg/jd.png") no-repeat;
  background-size: 20px 15px;
  margin: 8px 8px 0 15px;
  position: absolute;
  left: 10px;
}

.homepageinput i::after {
  content: "";
  position: absolute;
  border-right: 1px solid red;
  top: 0;
  left: 50px;
  height: 16px;
  margin-top: 8px;
}
.jdsprites {
  display: block;
  width: 18px;
  height: 15px;
  background: url("../../assets/homepageimg/jd-sprites.png") no-repeat;
  background-position: -80px 0;
  background-size: 200px;
  margin: 8px 0 0 15px;
  position: absolute;
  left: 40px;
}

.up{
  position: fixed;
    bottom: 80px;
    right: 9px;
    width: 38px;
    height: 38px;
    background-image: url("../../assets/homepageimg/down.png");
    background-size: 38px 38px;
    background-repeat: no-repeat;
    background-position: 50%;
    z-index: 20;
}
</style>

