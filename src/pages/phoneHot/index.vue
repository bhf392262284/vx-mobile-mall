<template>
  <div class="phoneHot">
    <van-toast id="van-toast" />
    <div class="carousel">
      <swiper
        indicator-dots="false"
        autoplay="true"
        interval="3000"
        duration="500"
        style="height:450px"
        indicator-color="#ebedf0"
        indicator-active-color="#1989fa"
      >
        <block v-for="(item,index) in bannerList" :key="index">
          <swiper-item>
            <img style="height:100%; width:100%" :src="url+item" alt />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="list-introduce">
      <div class="list-title">
        <p>{{shopList.name}}</p>
      </div>
      <div class="list-jiage">
        <p>{{shopList.descript}}</p>
      </div>
      <div class="list-yunfei">
        <p>{{ shopList.price}}</p>
      </div>
    </div>
    <div class="yunfei">
      <van-row>
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：{{shopList.stock}}</van-col>
      </van-row>
    </div>
    <div class="group" @click="detailed">
      <p>查看商品评论</p>
      <p>></p>
    </div>
    <div class="neirong" v-html="shopList.detail"></div>
  </div>
</template>
<script>
import Toast from "../../../static/vant/toast/toast";
import { baseImageUrl } from "@/utils/index";
export default {
  name: "phoneHot",
  data() {
    //试试
    return {
      url: baseImageUrl,
      shopList: {},
      bannerList: []
    };
  },
  onLoad(option) {
    this.getGoods(option.id);
  },
  methods: {
    getGoods(id) {
      this.$http("goods/" + id).then(res => {
        let shop = res.data.goods;
        shop.detail = shop.detail.replace(
          /\<img/gi,
          '<img style="max-width:100%"'
        );
        this.shopList = shop;
        this.bannerList = shop.gallery.split(",");
      });
    },
    detailed() {
      Toast({
        message: "敬请期待",
        duration: 1500
      });
    }
  }
};
</script>

<style scoped>
.list-introduce {
  position: relative;
  background-color: #fff;
  padding: 10px 16px;
  font-size: 14px;
}
.list-introduce::after {
  content: " ";
  border-bottom: 1px solid #ebedf0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 16px;
  transform: scaleY(0.5);
}
.list-title p {
  font-size: 16px;
  color: #323233;
}
.list-jiage p {
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  line-height: 18px;
  margin: 6px 0;
}
.list-yunfei {
  color: #f44;
}
.yunfei {
  color: #323233;
  font-size: 12px;
  padding: 5px 15px;
  background-color: #fff;
}
.group {
  justify-content: space-between;
  display: flex;
  margin: 15px 0;
  padding: 10px 16px;
  font-size: 14px;
  background-color: #fff;
}
</style>
