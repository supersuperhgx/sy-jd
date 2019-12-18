<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" class="homepageswiper2">
      <swiper-slide class="swiper-slide">
        <div class="signlistwrap">
          <div class="signlist" v-for="(item,index) in signlist" :key="index">
            <img :src="item.url" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="signlistwrap">
          <div class="signlist" v-for="(item,index) in signlist1" :key="index">
            <img :src="item.url" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="zhouimg">
      <div>
        <img src="../../assets/homepageimg/left.jpg" alt />
      </div>
      <div>
        <img src="../../assets/homepageimg/middle.jpg" alt />
      </div>
      <div>
        <img src="../../assets/homepageimg/right.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signlist: [
        {
          url: require("../../assets/signlist/supermarket.png"),
          name: "京东超市"
        },
        {
          url: require("../../assets/signlist/shuma.png"),
          name: "数码电器"
        },
        {
          url: require("../../assets/signlist/clothes.png"),
          name: "京东服饰"
        },
        {
          url: require("../../assets/signlist/fresh.png"),
          name: "京东生鲜"
        },
        {
          url: require("../../assets/signlist/onehour.png"),
          name: "京东到家"
        },
        {
          url: require("../../assets/signlist/chong.png"),
          name: "充值缴费"
        },
        {
          url: require("../../assets/signlist/shop.png"),
          name: "9.9元拼"
        },
        {
          url: require("../../assets/signlist/juan.png"),
          name: "领卷"
        },
        {
          url: require("../../assets/signlist/cost.png"),
          name: "赚钱"
        },
        {
          url: require("../../assets/signlist/vip.png"),
          name: "PLUS会员"
        }
      ],
      signlist1: [
        {
          url: require("../../assets/signlist/guoji.png"),
          name: "京东国际"
        },
        {
          url: require("../../assets/signlist/paimai.png"),
          name: "京东拍卖"
        },
        {
          url: require("../../assets/signlist/weipinhui.png"),
          name: "唯品会"
        },
        {
          url: require("../../assets/signlist/3C.jpg"),
          name: "玩3C"
        },
        {
          url: require("../../assets/signlist/woerma.png"),
          name: "沃尔玛"
        },
        {
          url: require("../../assets/signlist/meizhuang.png"),
          name: "美妆馆"
        },
        {
          url: require("../../assets/signlist/travel.png"),
          name: "京东旅行"
        },
        {
          url: require("../../assets/signlist/paipai.png"),
          name: "拍拍二手"
        },
        {
          url: require("../../assets/signlist/wuliu.png"),
          name: "物流查询"
        },
        {
          url: require("../../assets/signlist/all.png"),
          name: "全部"
        }
      ],
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          renderCustom: function(swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i == current - 1) {
                customPaginationHtml +=
                  '<span class="swiper1-pagination-customs swiper1-pagination-customs-active"></span>';
              } else {
                customPaginationHtml +=
                  '<span class="swiper1-pagination-customs"></span>';
              }
            }
            return '<div class="swiper1Pag">' + customPaginationHtml + "</div>";
          }
        },

        loop: true
      }
    };
  }
};
</script>
<style >
.swiper-wrap {
  height: 58.35%;
  /* width: 100%; */
  
}

/* .swiper-pagination{
  position: absolute;
  bottom: 20px
} */
</style>
<style scoped>
.zhouimg {
  display: flex;
}
.zhouimg > div {
  flex-grow: 1;

  display: flex;
  align-items: flex-end;
}
.zhouimg > div > img {
  width: 100%;
  height: 100%;
}

.homepageswiper2 {
  width: 100%;
  height: 62.55%;
  background: url("../../assets/homepageimg/background2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.signlistwrap {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.signlistwrap > div {
  width: 20%;
  height: 45.65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signlistwrap > div img {
  width: 53.3%;
  height: 54.09%;
  margin-top: 0.6rem;
}
.signlistwrap > div p {
  width: 100%;
  margin-top: 0.4rem;
  font-size: 12px;
  text-align: center;
}
</style>


