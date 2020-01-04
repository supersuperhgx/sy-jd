<template>
  <div class="leftmenu" ref="wrap">
    <ul >
      <li v-for="(item,index) in list" :key="index" @click="check(item,index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      wrap:{}
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
     initScroll() {
       if(!this.scroll){
          this.scroll = new BScroll(this.$refs.wrap,{
                  click:true,
                  scrollY:true,
                  startY: 0
       })}else{
         this.scroll.refresh();
       }
            },
    check(item, index) {
      this.$store.commit("check", item);
      let element = this.$refs.wrap.querySelectorAll("li")[index];
      // console.log(element)
      this.scroll.scrollToElement(element,300,0,70);
      console.log(this.scroll)
    }
  },
  created() {
    this.$store.dispatch("getNewDate");
    this.$nextTick(() => {
      setTimeout(()=>{
                    this.initScroll();
                },10)
      
    });
  }
};
</script>

<style scoped>
.leftmenu {
  width: 22.66%;
  height: 94.1%;
  overflow: hidden;
}
.leftmenu ul {
  width: 100%;
  height: 150%;
}
.leftmenu ul li {
  width: 100%;
  height: 5.7%;
  text-align: center;
  line-height: 46px;
  font-size: 14px;
}
</style>