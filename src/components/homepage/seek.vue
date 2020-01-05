<template>
  <!-- 搜索页面 -->
  <div class="seekwrap">
    <seekhead ></seekhead>
   
  </div>
</template>
<script>


import seekhead from "./seekhead.vue";
export default {
  components: {
    seekhead: seekhead
  },
  name: "seek",
  data() {
    return {
    
    };
  },
  methods: {
 
  },
  mounted() {
    
  }
};
</script>
<style>
.seekwrap {
  width: 100%;
  height: 100%;
}
</style>