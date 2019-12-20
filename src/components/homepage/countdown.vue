<template>
  <div class="timewrap">
    <div class="timehead">
      <div class="timeimgwrap">
        <div class="timeimg">
          <img src="../../assets/homepageimg/secondkill.png" alt />
        </div>
        <div class="clock">
          <p>14点场</p>
          <div>
            <div class="hour">{{hour}}</div>
            <span class="behind">:</span>
            <div class="hour minute">{{minute}}</div>
            <span class="behind">:</span>
            <div class="hour second">{{second}}</div>
          </div>
        </div>
      </div>
      <div class="morekill">
        <p>更多秒杀</p>
        <i></i>
      </div>
    </div>

    <div>
      <div class="flashsale_down">
        <div class="flashsale_down_container">
          <div class="item" v-for="(item) in flashsale_list" :key="item.id" @click="catmore">
            <div class="item_up">
              <img :src="item.img" />
            </div>
            <div class="item_down">
              <span class="nowprice">
                <span>￥</span>
                <span class="nowprice_number">{{item.nowPrice}}</span>
              </span>
              <span class="preprice">
                <span>￥</span>
                <span class="preprice-number">{{item.prePrice}}</span>
              </span>
            </div>
          </div>
          <div class="cat_more">
            <div class="circle" @click="catmore">
              <i></i>
            </div>查看更多
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      hour:"",
      minute:"",
      second:"",
      flashsale_list: [
        {
          id: 1,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t2491/181/2574460450/105743/229f26b4/570f173aN1a621481.jpg.dpg",
          nowPrice: 5998,
          prePrice: 8999
        },
        {
          id: 2,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/77107/16/12806/122156/5da415d9E9ca34dfc/a2f355e248b471c4.png.webp",
          nowPrice: 109,
          prePrice: 129
        },
        {
          id: 3,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/55987/14/12716/86190/5d9c37e6E0f1ba2a3/c350ba85d31877e0.jpg.dpg",
          nowPrice: 185,
          prePrice: 429
        },
        {
          id: 4,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/68592/12/2824/498668/5d102226E180583a5/fa253799ab67feb0.jpg.dpg",
          nowPrice: 48.8,
          prePrice: 54.9
        },
        {
          id: 5,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/34108/33/7080/220825/5cc01becEc9cd2853/8c6a07fbbe88aaf5.jpg.dpg",
          nowPrice: 3899,
          prePrice: 4199
        },
        {
          id: 6,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/65633/23/12667/180634/5d9ea477E3bf834a5/1660bd2ba16cc93c.jpg.dpg",
          nowPrice: 188,
          prePrice: 626
        },
        {
          id: 7,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/70411/34/12553/83600/5d9db4b7E87f2b179/6499d8b36f41163d.jpg.dpg",
          nowPrice: 129,
          prePrice: 169
        },
        {
          id: 8,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/81933/40/12556/203739/5d9d69bdE83520ab1/4c589c648cd4cd0a.jpg.dpg",
          nowPrice: 89,
          prePrice: 209
        },
        {
          id: 9,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/61394/7/12425/108292/5d9d3af3Ecb71120c/9f7c8e1ec38189b3.jpg.dpg",
          nowPrice: 79,
          prePrice: 128
        },
        {
          id: 10,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t13231/167/907633607/191495/debb9c6/5a16ae95N69bd64ec.jpg.dpg",
          nowPrice: 109,
          prePrice: 189
        }
      ],
      countDownList: "00天00时00分00秒",
      actEndTime: "2019-12-20 10:00:00"
    };
  },
  created() {
    this.countDown();
  },
  methods: {
    catmore() {
      window.open("https://wqs.jd.com/portal/wx/seckill_m/index.shtml?st=1");
    },
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null; // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          clearInterval(interval);
        }
        this.hour = obj.hou;
        this.minute = obj.min;
        this.second = obj.sec
          
      }, 1000);
    }
  }
};
</script>

<style scoped>
.timeimgwrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.timewrap {
  width: 94.6%;
  height: 19%;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.timehead {
  width: 100%;
  height: 22%;
  background: url("../../assets/homepageimg/background3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
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
  align-items: center;
   /* border: 1px solid red */
}
.clock > p {
  font-size: 12px;
  color: #232326;
  font-weight: 700;
  text-align: center;
}

.clock > div > * {
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

.morekill {
  color: #f23030;
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.morekill i {
  display: inline-block;
  width: 11px;
  height: 11px;
  background: url("../../assets/homepageimg/arrow.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.flashsale_down {
  height: 126px;
  overflow-x: scroll;
  border-radius: 0 0 8px 8px;
  position: relative;
}

.flashsale_down_container {
  padding-left: 10px;
  width: 222%;
  height: 100%;
  display: flex;
  background-color: #fff;
}

.flashsale_down::-webkit-scrollbar {
  display: none;
}

.flashsale_down_container .item {
  width: 10%;
  height: 100%;
  background-color: #fff;
}

.flashsale_down_container .item .item_up {
  width: 100%;
  height: 73px;
  text-align: center;
}

.flashsale_up_more_ms_circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e93b3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flashsale_up_more_ms_circle img {
  width: 10px;
  height: 10px;
}

.flashsale_down_container .item .item_up img {
  width: 82.2%;
  height: 100%;
}

.flashsale_down_container .item .item_down {
  width: 100%;
  height: 43px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.flashsale_down_container .item .item_down .nowprice {
  margin-top: 10px;
  display: block;
  color: #e93b3d;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  text-align: center;
  font-weight: bold;
}

.flashsale_down_container .item .item_down .preprice {
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  text-decoration: line-through;
}

.flashsale_down_container .cat_more {
  margin: 0 0 0 20px;
  padding: 5px 0;
  text-align: center;
  width: 2.4%;
  text-align: center;
  color: rgb(100, 95, 95);
  font-size: 12px;
  height: 90px;
  background-color: #f5f5f5;
  margin-right: 10px;
}

.flashsale_down_container .cat_more .circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e93b3d;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nowprice > span:first-child {
  font-size: 12px;
}

.circle > i {
  width: 12px;
  height: 12px;
  background: url(//wq.360buyimg.com/fd/h5/wxsq_dev/m_jd_index/images/index/jd-sprites_c4019063.png) -107px -109px
    no-repeat;
  background-size: 200px 200px;
  display: block;
  margin: 0 4px 3px;
}
</style>