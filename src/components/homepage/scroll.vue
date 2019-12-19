<template>
    <div class="homepage-head1">
        <div class="homemenu" @click="homemenujump">
          <span></span>
        </div>
        <div class="homepageinput">
          <span class="jdimg"></span>
          <i></i>
          <span class="jdsprites"></span>
          <input type="text" placeholder="奥克斯空调" />
        </div>
        <div class="homelog" @click="homelog">
          <span>登录</span>
        </div>
      </div>
</template>
<script>
export default {
     methods: {
    homemenujump() {
      this.$router.push({ path: "sort" });
    },
    homelog() {
      this.$router.push({ path: "unlog" });
    }
  }
}
</script>
<style scoped>
.homepage-head1 {
    width:100%;
  height: 5.2%;
  /* display: flex; */
  flex-direction: row;
  justify-content: space-between;
  background: red;
  display: none;
  position: fixed;
  /* top: 0; */
  z-index: 101
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


</style>