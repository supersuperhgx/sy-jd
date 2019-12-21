<template>
  <div class="leftmenu">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="check(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    check(item) {
      this.$store.commit("check", item);
    },
    
  },
  created() {
    this.$store.dispatch('getNewDate')
  }
};
</script>

<style scoped>
.leftmenu {
  width: 22.66%;
  height: 100%;
}
.leftmenu ul {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.leftmenu ul li {
  width: 100%;
  height: 5.7%;
  text-align: center;
  line-height: 46px;
  font-size: 14px;
  /* border: 1px solid red */
}
</style>