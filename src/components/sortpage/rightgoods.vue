<template>
  <div class="rightgoods">{{message}}</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  }, 
  computed: {
    message() {
      return this.$store.state.item;
    }
  },
  mounted() {
    axios.get("http://localhost:8080/menulist.json").then(response => {
      // console.log(response.data.list);
      this.list = response.data.result;
      console.log(this.list);
    });
  }
};
</script>
<style scoped>
.rightgoods {
  width: 200px;
  height: 500px;
  background: red;
  flex-grow: 1;
}
</style>