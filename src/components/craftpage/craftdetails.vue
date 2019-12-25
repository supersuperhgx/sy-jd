<template>
  <div class="craftwrap">
    <div class="crafthead">
      <input type="checkbox" />
      <span class="jdzy">
        <i class="jd"></i> 京东自营
      </span>
    </div>
    <div class="crafttitle">
      <img src="../../assets/homepageimg/change.jpg" alt />
      <span>购满1件，可用优惠价换购商品</span>
    </div>
    <div class="craftdetails">
      <div class="craftinput">
        <input type="checkbox" />
      </div>
      <div class="goodsimg">
        <img
          src="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/94422/14/143/35077/5da82db6E45f6fcb4/9865ee5e9b23e4d9.jpg!q70.dpg.webp"
          alt
        />
      </div>
      <div class="detailsright">
        <span class="jdimg">
          <img
            src="https://img11.360buyimg.com/jdphoto/s102x28_jfs/t21409/260/833321392/886/c44769dd/5b1a1df5Nb769c394.png"
            alt
          />
          <span class="goodsdec">巴布豆(BOBDOG)柔薄乐动纸尿裤L码104片(9-14kg)</span>
        </span>

        <span class="craftsize">菠萝裤L码104片</span>
        <span class="change">满一件享换购</span>
        <div class="craftprice">
          <span>￥169</span>
            <div>
              <span class="minus">-</span>
              <span class="goodscount">1</span>
              <span class="plus">+</span>
            </div>
        </div>
      </div>
    </div>
    <div class="sumcraft">
      

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
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
  padding-right: 10px
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
</style>