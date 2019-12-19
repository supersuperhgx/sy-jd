<template>
  <div class="east">
    <div class="easthead">
      <img src="../../assets/homepageimg/east.jpg" alt />
    </div>
    <div class="eastwrap">
      <div class="eastcontent east-right">
        <div class="eastcontenthead world">我愿把世界给你</div>
        <div class="eastcontentimg">
          <div>
            <img src="../../assets/homepageimg/dog.jpg" alt />
          </div>
          <div>
            <img src="../../assets/homepageimg/dog2.jpg" alt />
          </div>
        </div>
      </div>
      <div class="eastcontent">
        <div class="eastcontenthead special">
          <p class="colortext">演绎酷感</p>
          <p class="world">修饰颈部显精神</p>
        </div>
        <div class="eastcontentimg">
          <div>
            <img src="../../assets/homepageimg/mancloth.jpg" alt />
          </div>
          <div>
            <img src="../../assets/homepageimg/mancloth2.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="east-down-wrap">
      <div>
        <p class="east-down-head">程序猿</p>
        <p class="world">装备必须牛</p>
        <div >
          <img src="../../assets/homepageimg/computer.jpg" alt />
        </div>
      </div>
       <div>
        <p  class="east-down-head">程序猿</p>
        <p class="world">装备必须牛</p>
        <div >
          <img src="../../assets/homepageimg/computer.jpg" alt />
        </div>
      </div>
       <div>
        <p  class="east-down-head">程序猿</p>
        <p class="world">装备必须牛</p>
        <div >
          <img src="../../assets/homepageimg/computer.jpg" alt />
        </div>
      </div>
       <div>
        <p  class="east-down-head">程序猿</p>
        <p class="world">装备必须牛</p>
        <div >
          <img src="../../assets/homepageimg/computer.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>

.east{
    width: 100%;
    /* background: red */
}
.special {
  padding-left: 9px;
}
.easthead {
  width: 100%;
  height: 4.3%;
}
.easthead > img {
  width: 100%;
  height: 100%;
}
.eastwrap {
  width: 94.6%;
  height: 14.77%;
  margin: 10px;
  margin-top: 0px;
  position: relative;
  display: flex;
  /* background: red */
  /* background: rgb(255, 255, 255) */
}
.eastwrap>div {
  flex-grow: 1;
  padding: 6.5px 0px 5px;
}
.eastcontenthead {
  height: 37.98px;
}
.eastcontentimg {
  display: flex;
}
.eastcontentimg > div {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eastcontentimg > div > img {
  width: 67.65%;
  height: 93.77%;
  margin: 5.5px 7px 0px;
}

.world {
  font-size: 12px;
  color: #667771;
}

.colortext {
  background: linear-gradient(90deg, #45caff, #1471fb);
  color: transparent;
  font-weight: 700;

  background-clip: text;
}

.east-right::after {
  height: 100%;
  content: "";
  width: 1px;
  /* border-right: 1px solid red; */
  position: absolute;
  top: 0;
  right: 50%;

  transform: scaleX(0.5);
  z-index: 10;
}


.east-down-wrap{
  width: 94.6%;
  height: 14.77%;
  margin: 10px;
  margin-top: 0px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  
}
.east-down-wrap>div{
  flex-grow: 1;
  padding: 6.5px 0px 5px 10px
}

.east-down-head{
  font-weight: 700
}

.east-down-wrap>div img{
  width: 60px;
  height: 60px
}
</style>