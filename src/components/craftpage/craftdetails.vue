<template>
  <div class="craftwrap">
    <div class="crafthead">
      <input type="checkbox"  @change="checkAll($event)"/>
      <span class="jdzy">
        <i class="jd"></i> 京东自营
      </span>
    </div>
    <div class="crafttitle">
      <img src="../../assets/homepageimg/change.jpg" alt />
      <span>购满1件，可用优惠价换购商品</span>
    </div>
    <div class="craftdetails" v-for="(item,index) in list" :key="index">
      <div class="craftinput">
        <input type="checkbox"   class="checkbox" :value="index"/>
      </div>
      <div class="goodsimg">
        <img
          :src="item.url"
          alt
        />
      </div>
      <div class="detailsright">
        <span class="jdimg">
          <img
            src="https://img11.360buyimg.com/jdphoto/s102x28_jfs/t21409/260/833321392/886/c44769dd/5b1a1df5Nb769c394.png"
            alt
          />
          <span class="goodsdec">{{item.context}}</span>
        </span>

        <span class="craftsize">菠萝裤L码104片</span>
        <span class="change">满一件享换购</span>
        <div class="craftprice">
          <span>{{item.price}}</span>
            <div>
              <span class="minus" @click="minus">-</span>
              <span class="goodscount">{{number}}</span>
              <span class="plus" @click="plus">+</span>
            </div>
        </div>
      </div>
    </div>
    <div class="sumcraft">
        <div class="sumcraftwrap">
          <div class="suminput">
            <input type="checkbox" @change="checkAll($event)">
            <span>全选</span>
          </div>
          <div class="sumprice">
            <p><span class="total">总计：</span><span class="totalprice">￥169</span></p>
            <p class="discount">已优惠￥10.00</p>
            
          </div>
          <div class="craftconfirm">
              <span>去结算</span>
              <span>1件</span>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      number:1,
      value:""
    };
  
  },
  methods:{
   checkAll(e){
    var checkObj = document.querySelectorAll('input');
    for(let i = 0;i<checkObj.length;i++){
      if(e.target.checked){
        checkObj[i].checked =true
      }else{
         checkObj[i].checked =false
      }
    }
 },
//  minus(){
//     if (this.number > 1) {
//         this.number = this.number - 1;
//       }
//  },
//  plus(){
//      this.number = this.number + 1;
//  }

  },
  computed:{
    list(){
      return JSON.parse(localStorage.getItem("buylist")) 
    }
  },

};
</script>
<style  scoped>
.jdimg > img {
  width: 51px;
  height: 14px;
}
.craftwrap {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.crafthead {
  width: 100%;
  height: 5.6%;
  border: 1px solid red;
  padding: 5px 10px 5px 42px;
  display: flex;
  align-items: center;
}

.jd {
  display: inline-block;
  background-image: url("../../assets/homepageimg/jdzy.png");
  background-size: 116px 110px;
  background-position: -20px -46px;
  width: 20px;
  height: 20px;
}

.jdzy {
  font-weight: 700;
  font-size: 16px;
  color: #333333;
}

.crafttitle {
  /* line-height: 1.45; */
  font-size: 14px;
  color: #333;
}
.crafttitle span {
  vertical-align: top;
}

.goodsdec {
  font-size: 14px;
}
.goodsimg {
  margin: 0px 8px;
}

.goodsimg > img {
  width: 100px;
  height: 100px;
}

.craftdetails {
  width: 100%;
  height: 21.1%;
  display: flex;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-right: 10px;
  border-bottom: 1px solid #cccccc
}
.craftinput {
  width: 13.3%;
  height: 100%;
}

.detailsright {
  display: flex;
  flex-direction: column;
}

.craftsize {
  font-size: 10px;
  background: #f7f7f7;
  padding: 0 15px 0 5px;
  height: 20px;
  border-radius: 2px;
}

.change {
  width: 95px;
  height: 20px;
  line-height: 20px;
  padding: 0 17px 0 5px;
  background: #fcedeb;
  color: #f2270c;
  border-radius: 2px;
  position: relative;
  font-size: 10px;
}


.craftprice>span{
  line-height: 16px;
    color: #f2270c;
    font-size: 16px;
    
}

.craftprice{
  display: flex;
  justify-content: space-between
}

.minus,.plus{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #f7f7f7;
  text-align: center
}

.goodscount{
  display: inline-block;
  width: 30px;
  height: 20px;
  background: #f7f7f7;
  text-align: center
}


.sumcraft{
  position: fixed;
  bottom: 0;
    width: 100%;
  height: 6.2%;
  background: #ffffff;
  z-index: 999
}

.sumcraftwrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between
}


.sumprice{
  width: 57.3%;
  height: 100%;
  border: 1px solid red
}

.craftconfirm{
  flex-shrink: 0;
    margin-left: 10px;
    font-weight: 700;
    display: block;
    width: 110px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    border-radius: 2px;
    background-color: #f2270c;
    color: #fff;
}


.suminput{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center

}
.suminput>input{
  width: 20px;
  height: 20px;
  border-radius: 50%
}

.suminput>span{
  width: 40px;
    
    font-size: 10px;
    text-align: center;
    height: 15px;
    color: #999;
}

.sumprice>p{
  text-align: right
}
.total{
  font-weight: 700;
    font-size: 16px;
}

.totalprice{
      color: #f2270c;
       font-weight: 700;
    font-size: 16px;
}

.discount{
  padding-top: 5px;
    display: block;
    font-size: 10px;
    line-height: 1em;
    color: #999;
}
.discount::after{
      content: "";
    display: inline-block;
    vertical-align: middle;
    width: 6px;
    height: 10px;
    background-image: url("../../assets/homepageimg/toarrow.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    /* position: absolute; */
    right: 0;
    top: 50%;
    margin-top: -5px;
}

</style>