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
// import menulist from "../menu/menulist.vue";
import rightgoods from "../sortpage/rightgoods.vue";
export default {
  components: {
    // menulist: menulist,
    sorthead: sorthead,
    leftmenu: leftmenu,
    rightgoods: rightgoods
  }
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