<template>
  <div class="timewrap">
    <div class="timehead">
      <div class="timeimg">
        <img src="../../assets/homepageimg/secondkill.png" alt />
      </div>
      <div class="clock">
        <p>14点场</p>
        <div>
          <div class="hour">01</div>
          <span class="behind">:</span>
          <div class="hour minute">01</div>
          <span class="behind">:</span>
          <div class="hour second">01</div>
        </div>
      </div>
      <div class="morekill">
          <p>更多秒杀</p>
          <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timewrap {
  width: 94.6%;
  height: 19%;
  margin: 10px;
}

.timehead {
  width: 100%;
  height: 22%;
  background: url("../../assets/homepageimg/background3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between
}
.timeimg {
  width: 18.86%;
  height: 79.4%;
  margin: 8px 6px 0px 9px;
}
.timeimg > img {
  width: 100%;
  height: 65.8%;
}

.clock {
  display: flex;
  align-items: center
}
.clock > p {
    font-size: 12px;
    color: #232326;
    font-weight: 700;
 text-align: center
}

.clock>div>*{
    float: left;
}

.hour {
  width: 18px;
  line-height: 17px;
  color: #232326;
  font-size: 12px;
  position: relative;
}

.hour::after {
  border-radius: 2px;
  height: 200%;
  content: "";
  width: 200%;
  border: 1px solid #dfdfdf;
  position: absolute;
  top: -10px;
  left: -10px;

  transform: scale(0.5);
}

.morekill{
    color: #f23030;
    font-size: 12px;
    display: flex;
    align-items: center
}
.morekill i{
    display: inline-block;
    width: 11px;
    height: 11px;
    background: url("../../assets/homepageimg/arrow.png");
    background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>