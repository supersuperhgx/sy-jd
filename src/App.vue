<template>
  <div id="app">
    <router-view ></router-view>
    <menulist v-if="$route.meta.isshow"></menulist>
  </div>
</template>

<script>
import menulist from "./components/menu/menulist";
export default {
  data() {
    return {};
  },
  components: {
    menulist
  },
  methods: {},
  mounted() {
    window.addEventListener("scroll", function() {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop)
      if (scrollTop != 0) {
        document.querySelector(".homepage-head1").style.display = "flex";
      } else {
        document.querySelector(".homepage-head1").style.display = "none";
      }

      // let height = document.querySelector(".east")
      // console.log(height.scrollTop)
      console.log(window.innerHeight);
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
html,
body {
  height: 100%;
  /* overflow: hidden; */
}
#app {
  width: 100%;
  height: 100%;
  background: rgb(240, 242, 245);
  /* background: red */
}
</style>
