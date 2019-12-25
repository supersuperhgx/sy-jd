<template>
  <div class="recommend">
    <div class="recommendhead">
      <img src="../../assets/homepageimg/recommend.png" alt />
    </div>
    <div class="recommendcontent">
      <div v-for="(item,index) in list" :key="index" @click="goods(item,index)">
        <div class="recommendimg">
          <img v-lazy="item.url" alt />
        </div>
        <div class="recommendtext">
          <span class="jdsup">
            <img src="../../assets/homepageimg/jdsup.png" alt />
            {{item.title}}
          </span>
        </div>
        <div class="recommendbottom">
          <span class="price">{{item.price}}</span>
          <span class="similar">看相似</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      // list: []
    };
  },
  // mounted() {
  //   axios.get("http://localhost:8080/goods.json").then(response => {
  //     this.list = response.data.list;
  //   });
  // },
  computed:{
    list(){
      return this.$store.state.craftarr;
    }
  },
  methods: {
    goods(item,index) {
      this.$router.push({
        path: "goodsdetail",
        query: {
          url:item.url,
          context: item.title,
          price: item.price,
          id:index
        }
      });
      // console.log(index)
    }
  },
  created() {
    this.$store.dispatch('getNewcraft')
  }
};
</script>
<style scoped>
.recommend {
  width: 100%;
  height: 800px;
  /* border: 1px solid red; */
  padding: 10px;
}
.recommendhead {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #cccccc;
}
.recommendhead > img {
  width: 100%;
  height: 100%;
}

.recommendcontent {
  width: 100%;
  height: 267px;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommendcontent > div {
  width: 49%;
  height: 100%;

  /* border: 1px solid blue */
}

.recommendimg {
  width: 100%;
  height: 65.9%;
}
.recommendimg > img {
  width: 100%;
  height: 100%;
}
.recommendtext {
  width: 100%;
  height: 11.61%;
  /* border: 1px solid red; */
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 16px;
  margin-bottom: 3px;
  padding: 0 4px;
}
.jdsup {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.jdsup > img {
  width: 27.05%;
}

.price {
  color: #f23030;
  display: inline-block;
  padding: 0 5px 0 4px;
  position: relative;
  top: 1px;
  height: 25px;
  line-height: 25px;
}

.similar {
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  font-size: 12px;
  line-height: 22px;
}
.recommendbottom {
  display: flex;
  justify-content: space-between;
}
</style>