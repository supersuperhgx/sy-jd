<template>
  <!-- 搜索页面 -->
  <div class="seekwrap">
    <seekhead ref="seekhead"></seekhead>
    <ul>
      <li v-for="(item,index) in myItem" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
// import axios from "axios";

import seekhead from "./seekhead.vue";
export default {
  components: {
    seekhead: seekhead
  },
  name: "seek",
  data() {
    return {
      mySeeklist: null,
      message: "",
      timer: null,
      myItem: [],
      seekPro: {}
    };
  },
  methods: {
    ele() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.myItem = this.mySeeklist.filter(item => {
          if (this.message != "") {
            if (item.title.includes(this.message)) {
              return item;
            }
          }
        });
      }, 500);
    },
   
    // myClick(index) {
    //   this.seekPro = JSON.stringify(this.myItem[index]);
    //   sessionStorage.setItem("foo", this.seekPro);
    //   this.$router.push({
    //     path: "/commodityDetails", query:{id:this.myItem[index].id}

    //   });
    // }
  },
  mounted() {
    this.$store.dispatch("getNewcraft");
    this.mySeeklist = this.$store.state.craftarr;
  }
};
</script>
<style>
.seekwrap {
  width: 100%;
  height: 100%;
}
</style>