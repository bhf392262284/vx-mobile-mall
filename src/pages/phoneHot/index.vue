<template>
  <div class="phoneHot">
    <div class="carousel">
      <swiper indicator-dots="false" autoplay="true" interval="2000" duration="500">
        <block v-for="(item,index) in images" :key="index">
          <swiper-item>
            <img :src="item.url" alt />
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
        <p>{{price / 100}}</p>
      </div>
    </div>
    <div class="yunfei">
      <van-row>
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：443</van-col>
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
export default {
  name: "phoneHot",
  data() {
    return {
      images: [
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4263124123,4148890043&fm=11&gp=0.jpg"
        },
        {
          url:
            "https://img.ivsky.com/img/tupian/pre/201906/23/diannaoshouji-007.jpg"
        },
        {
          url:
            "https://img.ivsky.com/img/tupian/pre/201906/23/diannaoshouji-008.jpg"
        },
        {
          url:
            "https://img.ivsky.com/img/tupian/pre/201906/23/diannaoshouji-009.jpg"
        }
      ],
      shopList: {}
    };
  },
  onLoad(options) {
    let id = options.id;
    this.$http("goods/" + id).then(res => {
      this.shopList = res.data.goods;
    });
  },
  methods: {
    detailed() {
      wx.showToast({
        title: "敬请期待",
        icon: "success",
        duration: 2000
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
