<template>
  <div class="menulistwrap">
    <div class="menulist">
      <div @click="jump1">
        <img src="../../assets/menuimg/82c582e7c375e4b3.png" alt v-show="ok1" />
        <img src="../../assets/menuimg/81328b0609c60a3c.png" alt v-show="no1" />
      </div>
      <div @click="jump2">
        <img src="../../assets/menuimg/4481f5b3dbad979d.png" alt v-show="ok2" />
        <img src="../../assets/menuimg/4af32f42575509d8.png" alt v-show="no2" />
      </div>
      <div>
        <a
          href="https://wqs.jd.com/portal/wx/tuan/pingouv3.shtml?sceneval=2&fromM=1&ptag=138097.1.17"
        >
          <img src="../../assets/menuimg/03e867ef611e6685.gif" alt v-show="ok3" />
          <img src="../../assets/menuimg/2467c20113c50451.png" alt v-show="no3" />
        </a>
      </div>
      <div @click="jump3">
        <img src="../../assets/menuimg/f2fe0a88bf344736.png" alt />
      </div>
      <div @click="jump4">
        <img src="../../assets/menuimg/876c40f17d91ce44.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ok1: false,
      no1: true,
      ok2: false,
      no2: true,
      ok3: true,
      no3: false
    };
  },
  methods: {
    jump1() {
      this.$router.push({ path: "/" });
      (this.ok1 = false), (this.no1 = true), (this.ok2 = false);
      this.no2 = true;
      this.ok3 = true;
      this.no3 = false;
    },
    jump2() {
      this.$router.push({ path: "sort" });
      (this.no1 = false), (this.ok1 = true), (this.ok2 = true);
      this.no2 = false;
      this.ok3 = false;
      this.no3 = true;
    },
    jump3() {
      this.$router.push({ path: "shoppingcraft" });
    },
    jump4() {
     let show = localStorage.getItem('show');
     if(show == 0){
      this.$router.push({ path: this.$store.state.path1 });

     }else{
      this.$router.push({ path: this.$store.state.path }); 

     }
    }
  }
};
</script>
<style scoped>

.menulistwrap{
  position: fixed;
  bottom: 0;
  margin-top: 10px;
  background: #ffffff
}
.menulist {
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
  height: 6.133%;
}
.menulist > div {
  flex-grow: 1;
  width: 25%;
}
.menulist > div img {
  width: 80%;
  height: 92.3%;
}
</style>