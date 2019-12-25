<template>
  <div class="rightgoods">
    <ul>
      <li v-for="(item,index) in list" :key="index" >
        <h3>{{item.title}}</h3>
        <div class="goodscontent">
          <div v-for="(icon,index) in item.list" :key="index">
            <img :src="icon.url" alt />
             <h6>{{icon.type}}</h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  computed: {
    list() {
      return this.$store.state.arr;
    }
  },
  methods:{
     check1() {
      this.$store.commit("check", "热门推荐");
    },
  },
   created(){

  this.check1()
    }
  }
 
 
 

</script>
<style scoped>
.rightgoods {
  width: 200px;
  height: 100%;

  flex-grow: 1;

}
.rightgoods>ul{
  overflow-y: auto
} 
.rightgoods img {
  width: 70px;
  height: 70px;
}

.goodscontent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.goodscontent>div{
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px
}
</style>