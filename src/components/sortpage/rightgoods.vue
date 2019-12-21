<template>
  <div class="rightgoods">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <h3>{{item.title}}</h3>
        <div v-for="(icon,index) in item.list" :key="index">
          <h6>{{icon.type}}</h6>
          <img :src="icon.url" alt />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    list(){
      console.log( this.$store.state.arr)
      return this.$store.state.arr
    }
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