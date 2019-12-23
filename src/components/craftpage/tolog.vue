<template>
  <div class="tolog">
    <div class="tologhead" v-if="show==1">
      <span>登录后可同步购物车账号中的商品</span>
      <span @click="craftlog" class="log">登录</span>
    </div>
    <div class="logimg">
      <div>
        <img
          src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
          alt
        />
      </div>
      <p>{{logimg}}</p>
    </div>
    <div class="jdkillwrap">
      <span class="jdkill">京东秒杀</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show:1
    } 
  },
  created() {
    this.craftshow();
  },
  computed: {
    // craftshow() {
    //   return this.$store.state.craftshow;
    // },
    logimg() {
      return this.$store.state.logimg;
    }
  },

  methods: {
    craftlog() {
      this.$router.push({ path: "unlog" });
    },
    craftshow() {
      if (localStorage.getItem("show")) {
        console.log(localStorage.getItem("show"))
this.show = localStorage.getItem("show")
        return localStorage.getItem("show");
      } else {
        console.log(this.$store.state.craftshow)
        this.show = this.$store.state.craftshow
        return this.$store.state.craftshow;
      }
    }
  }
};
</script>
<style  scoped>
.tolog {
  width: 100%;
  height: 40.3%;
}

.tologhead {
  width: 100%;
  height: 18.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff;
}
.logimg {
  padding: 70px 0 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logimg > div {
  width: 90px;
  height: 90px;
}
.logimg > div > img {
  width: 100%;
  height: 100%;
}
.log {
  display: inline-block;
  margin-left: 10px;
  padding: 0 21px;
  height: 30px;
  border-radius: 4px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #f2270c;
}

.jdkillwrap {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: #f7f7f7;
  text-align: center;
}

.jdkill::before,
.jdkill::after {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: red;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>