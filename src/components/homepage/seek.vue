<template>
  <!-- 搜索页面 -->
  <div class="seekwrap" >
    <seekhead @test="test1" ></seekhead>
    <ul class="seekul" >
        <li v-for="(item,index) in list"  :key="index">
          {{item.title}}
        </li>
    </ul>
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
      list:[]
    };
  },
  methods: {
      test1($event){
        this.list=$event
        
  },
  mounted() {
    console.log(this.list)
      }
  }
};
</script>
<style>
.seekwrap {
  width: 100%;
  height: 100%;
}



.seekul{
  width: 100%;
  padding: 0px 10px;
  font-size: 14px
}

.seekul li{
  margin-bottom: 10px
}
</style>