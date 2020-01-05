<template>
  <div class="sorthead">
    <div class="arrow" @click="back">
      <span></span>
    </div>
    <div class="input">
      <i></i>
      <input type="text" placeholder="键盘鼠标套装" v-model="message" @input="ele" />
    </div>
    <div class="point">
      <!-- <span></span> -->
      <button>搜索</button>
    </div>
  <!-- <ul>
        <li v-for="(item,index) in mySeeklist"  :key="index">
          {{item.title}}
        </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // mySeeklist: null,
      message: "",
      timer: null,
      myItem: [],
      seekPro: {}
    };
  },
  computed:{
      mySeeklist(){
        return this.$store.state.craftarr
      }
  },
  methods: {
    back() {
      window.history.go(-1);
    },
    ele() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.myItem = this.mySeeklist.filter(item => {
          if (this.message != "") {
            if (item.title.includes(this.message)) {
              return item;
              
            }
          }
        });
         console.log(this.message)
      }, 500);
     
      //  console.log( this.myItem)
      //  console.log(this.mySeeklist)
       this.$emit("test",this.myItem)
      //  console.log( this.$emit("test",this.myItem))
    }
  },
  mounted() {
    this.$store.dispatch("getNewcraft");
    // this.mySeeklist = this.$store.state.craftarr;
    // this.mySeeklist.push(this.$store.state.craftarr) 
    console.log(this.$store.state.craftarr)
    console.log(this.mySeeklist)
   
  }
};
</script>
<style  scoped>
.sorthead {
  width: 100%;
  height: 5.41%;
  display: flex;
  background: #ffffff;
  border-bottom: 1px solid #cccccc;
}

.arrow,
.point {
  width: 12%;
  height: 100%;
  /* border: 1px solid red */
}
.arrow span {
  display: inline-block;
  margin: 12px 0 0 10px;
  width: 20px;
  height: 20px;
  background: url("../../assets/sortimg/arrow.jpg") no-repeat;
  background-size: 100% 100%;
}

.point {
  display: flex;
  align-items: center;
}

.point button {
  width: 40px;
  height: 28px;
  border: none;
  color: #ffffff;
  background: #e93b3d;
  padding: 6px;
  border-radius: 5px;
}
.input {
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.input input {
  width: 100%;
  height: 68.18%;
  /* border: 1px solid #cccccc; */
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0px 5px 0px 45px;
  background: rgb(240, 242, 245);
}
i {
  display: block;
  width: 18px;
  height: 15px;
  background: url("../../assets/sortimg/jd-sprites.png") no-repeat;
  background-position: -80px 0;
  background-size: 200px;
  margin-left: 10px;
  margin: 8px 0 0 15px;
  position: absolute;
  bottom: 14px;
}
</style>