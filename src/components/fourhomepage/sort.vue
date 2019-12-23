<template>
  <div class="sort">
    <sorthead></sorthead>
    <div class="sortcontent">
      <leftmenu></leftmenu>
      <rightgoods></rightgoods>
    </div>

    <!-- <menulist></menulist> -->
  </div>
</template>

<script>
import sorthead from "../sortpage/sorthead.vue";
import leftmenu from "../sortpage/leftmenu.vue";
import rightgoods from "../sortpage/rightgoods.vue";
export default {
  // data(){
  //   return{
  //     list:[]
  //   }
  // },
  components: {
    // menulist: menulist,
    sorthead: sorthead,
    leftmenu: leftmenu,
    rightgoods: rightgoods
  },
  created(){
    this.$store.dispatch('getNewDate');
    if(this.list){
        this.list = this.$store.state.arr[0]
        console.log(this.$store.state.arr[0])
    }
  },
};
</script>


<style scoped>
.sort {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sortcontent{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>