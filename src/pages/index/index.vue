<template>
  <div id="index">
    <van-tabs @change="clickTabs">
      <van-tab title="推荐">
        <swiper
          duration="duration"
          indicator-dots="indicatorDots"
          autoplay="autoplay"
          interval="interval"
        >
          <block v-for="(item,index) in background" :key="index">
            <swiper-item>
              <view class="swiper-item">{{item}}</view>
            </swiper-item>
          </block>
        </swiper>
        <div class="rap">
          <div class="Popular">
            <span>热门推荐</span>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
        </div>
        <div class="rap">
          <div class="Popular">
            <span>热门推荐</span>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
          <div class="list-describe">
            <img :src="imageURL" alt />
            <div class="list-head">
              <div>
                <h4>红米8A</h4>
                <p>5000mAh大电量 / 最高可选4GB+64GB版本</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>16</span>.00
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="手机">手机</van-tab>
      <van-tab title="电视">电视</van-tab>
      <van-tab title="笔记本">笔记本</van-tab>
      <van-tab title="家电">家电</van-tab>
      <van-tab title="居家">居家</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      autoplay: true,
      indicatorDots: true,
      duration: 500,
      interval: 2000,
      background: [
        "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png",
        "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
      ],
      imageURL: "../../static/img/ipad.jpg"
    };
  },
  methods: {
    //热门接口
    // clickTabs(e) {
    //   const index = e.mp.detail.index;
    //   if (index === 0) {
    //     this.Recommend();
    //   } else if (index === 1) {
    //     console.log("我是手机");
    //   }
    // }
  },
  created: {
    // Recommend() {
    //   this.$http({
    //     url: "goods/searchHot",
    //     method: "get"
    //   }).then(res => {
    //     console.log(res);
    //   });
    //   this.$http({
    //     url: "goods/searchHot",
    //     method: "get"
    //   }).then(res => {
    //     console.log(res);
    //   });
    // }
  }
};
</script>

<style scoped>
#index .list-describe {
  box-sizing: border-box;
  padding: 8px 16px;
  display: flex;
}
#index .Popular {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
}
#index .Popular::after {
  content: "";
  border-bottom: 1px solid #ebedf0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 16px;
  transform: scaleY(0.5);
}
#index .rap {
  background-color: #fff;
}
</style>
