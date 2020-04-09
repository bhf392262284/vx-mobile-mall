<template>
  <div id="index">
    <van-tabs @change="clickTabs">
      <van-tab title="推荐">
        <van-row>
          <van-col
            :span="(index === 0 || (index % 3 === 0)) ? 12 : 6"
            v-for="(item,index) in exhibition"
            :key="index"
          >
            <img
              @click="Jump(item.id)"
              style="max-width: 100%; height: 100px"
              :src="baseImage + item.article.img"
              alt
            />
          </van-col>
        </van-row>
        <div class="rap">
          <div class="Popular">
            <span>热门推荐</span>
          </div>
          <div
            class="list-describe"
            v-for="(item,index) in hot"
            :key="index"
            @click="deviceStatus(item.id)"
          >
            <img :src="baseImage + item.pic" alt />
            <div class="list-head">
              <div>
                <h4>{{item.name}}</h4>
                <p>{{item.descript}}</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>{{item.price / 100}}</span>.00
              </div>
            </div>
          </div>
        </div>
        <div class="rap">
          <div class="Popular">
            <span>新品推荐</span>
          </div>
          <div class="list-describe" v-for="(item,index) in news" :key="index">
            <img @click="deviceStatus(item.id)" :src="baseImage + item.pic" alt />
            <div class="list-head">
              <div>
                <h4>{{item.name}}</h4>
                <p>{{item.descript}}</p>
              </div>
              <div class="fsize">
                <i>¥</i>
                <span>{{(item.price) /100 }}</span>.00
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
import { baseImageUrl } from "@/utils/index";
export default {
  name: "index",
  data() {
    return {
      baseImage: baseImageUrl,
      background: [
        "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png",
        "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
      ],
      // 热门数据
      hot: [],
      // 新品数据
      news: [],
      // 推荐头部展示图片
      exhibition: []
    };
  },
  methods: {
    recommend() {
      //热门接口
      this.$http("goods/searchHot", "get").then(res => {
        this.hot = res.data;
      });
      //新品接口
      this.$http("goods/searchNew", "get").then(res => {
        this.news = res.data;
      });
      // 头部展示
      this.$http("topic/list", "get").then(res => {
        this.exhibition = res.data;
      });
    },
    // 点击首页头部tab回调
    clickTabs(e) {
      const index = e.mp.detail.index;
      if (index === 0) {
        this.recommend();
      } else {
      }
    },
    //头部详情
    Jump(id) {
      const url = "/pages/details/main?id=" + id;
      wx.navigateTo({ url });
    },
    //热门商品详情
    deviceStatus(id) {
      const url = "/pages/phoneHot/main?id=" + id;
      wx.navigateTo({ url });
    }
  },
  created() {
    this.recommend();
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
