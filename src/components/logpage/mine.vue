<template>
  <div class="Mine">
    <minehead></minehead>
    <div class="Mine-container">
      <div class="mine-header">
        <div class="account_wrap_content">
          <span
            class="account-icon"
            style="background: url(&quot;https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png&quot;) 0px 0px / 100% 100% no-repeat;"
          ></span>
          账号管理
        </div>
        <div class="account-left-container">
          <img style="height:70px;width:35%;" src="../../assets/login/mineHeader.png" />
          <div class="smallimg">
            <div class="username1">{{name}}</div>
            <div class="username2">当前用户名:{{name}}</div>
          </div>
        </div>
        <div style="left:8%;position:absolute;bottom:15px;color:rgb(255,230,120);font-size:15px;">
          <img
            style="height:15px;transform:translateY(2px)"
            src="https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png"
          />
          | 每月5张运费券
        </div>
        <div
          style="right:8%;position:absolute;bottom:15px;color:rgb(255,230,120);font-size:15px;"
        >立即查看</div>
        <img src="../../assets/login/mine.png" />
      </div>
    </div>
    <div class="sp-box">
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png"
        />
        <div>代付款</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png"
        />
        <div>代收货</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png"
        />
        <div>退换/售后</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png"
        />
        <div>全部订单</div>
      </div>
    </div>
    <div class="sp-box">
      <div class="sp-box-item">
        <div style="width:24px;height:24px;margin-bottom:5px;text-align:center;line-height:24px">1张</div>
        <div>京东劵</div>
      </div>
      <div class="sp-box-item">
        <div
          style="overflow:hidden;width:80px;height:24px;margin-bottom:5px;text-align:center;line-height:24px"
        >开通有礼</div>
        <div>白条</div>
      </div>
      <div class="sp-box-item">
        <div style="width:24px;height:24px;margin-bottom:5px;text-align:center;line-height:24px">86个</div>
        <div>京豆</div>
      </div>
      <div class="sp-box-item">
        <div style="width:24px;height:24px;margin-bottom:5px;text-align:center;line-height:24px">0元</div>
        <div>红包</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png"
        />
        <div>我的资产</div>
      </div>
    </div>
    <div class="sp-box">
      <div class="sp-box-item">
        <div
          style="font-weight:600;overflow:hidden;width:80px;height:24px;margin-bottom:5px;text-align:center;line-height:24px"
        >0</div>
        <div>商品收藏</div>
      </div>
      <div class="sp-box-item">
        <div
          style="font-weight:600;overflow:hidden;width:80px;height:24px;margin-bottom:5px;text-align:center;line-height:24px"
        >0</div>
        <div>店铺收藏</div>
      </div>
      <div class="sp-box-item">
        <div
          style="font-weight:600;overflow:hidden;width:80px;height:24px;margin-bottom:5px;text-align:center;line-height:24px"
        >45</div>
        <div>我的足迹</div>
      </div>
    </div>
    <div class="sp-box">
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="//img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp"
        />
        <div>我的预约</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp"
        />
        <div>京东火车票</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="//img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp"
        />
        <div>应用推荐</div>
      </div>
      <div class="sp-box-item">
        <img
          style="width:24px;height:24px;margin-bottom:5px"
          src="//img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png!q70.webp"
        />
        <div>京东通信营业</div>
      </div>
    </div>
    <div class="sp-box" style="font-size:15px;color:#555;padding-left:20px">客户服务</div>
    <div class="recommend-box"></div>
  </div>
</template>

<script>
import minehead from "./minehead.vue";
export default {
  components: {
    minehead: minehead
  },
  computed: {
    name() {
      return this.$store.state.userinformation.username;
    }
  }
};
</script>

<style scoped>
.mine-header {
  position: relative;
  width: 100%;
  height: 137px;
}
.mine-header > img {
  width: 100%;
  height: 100%;
}
.Mine {
  width: 100%;
  height: 100%;
  background-color: rgb(247, 247, 247);
}
.Mine-container {
  width: 100%;
  background-color: rgb(246, 246, 246);
  position: relative;
}
.recommend-box {
  width: 100%;
  margin-top: 15px;
  background-color: rgb(246, 246, 246);
  position: relative;
}
.account_wrap_content {
  color: rgba(76, 0, 0, 0.7);
  font-size: 12px;
  padding-left: 15px;
  position: absolute;
  height: 40px;
  right: 15px;
  line-height: 40px;
}
.account-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;
  right: 2px;
  background: url(https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png)
    0px 0px / 100% 100% no-repeat;
}
.account-left-container {
  display: flex;
  width: 70%;
  overflow: hidden;
  height: 70px;
  position: absolute;
  top: 20px;
  left: 15px;
  background: #ccc;
}
.sp-box {
  width: 100%;
  background-color: #fff;
  display: flex;
  padding: 15px 0;
  align-items: center;
  margin-top: 15px;
}
.sp-box-item {
  flex-grow: 1;
  font-size: 14px;
  color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.smallimg {
  position: relative;
  height: 100%;
  width: 70%;
  background-image: url("../../assets/login/3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.username1 {
  color: #fff;
  position: absolute;
  top: 2px;
  left: 15px;
  font-size: 12px;
}

.username2 {
  color: #ccc;
  position: absolute;
  top: 23px;
  left: 15px;
  font-size: 12px;
}
</style>