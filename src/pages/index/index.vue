<template>
  <div id="index">
    <van-tabs @change="clickTabs">
      <!-- 推荐页 -->
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
                <span>¥{{item.price / 100}}.00</span>
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
                <span>¥{{(item.price) /100 }}.00</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 手机页 -->
      <van-tab title="手机">
        <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="500"
          indicator-color="#ebedf0"
          indicator-active-color="#1989fa"
        >
          <block v-for="(item,index) in imgPicture" :key="index">
            <swiper-item>
              <img style="height:100%; width:100%" :src="baseImage + item" alt />
            </swiper-item>
          </block>
        </swiper>
        <div
          class="list-describe"
          v-for="(item,index) in electricalAppliancesSeries"
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
              <span>¥{{item.price / 100}}.00</span>
              <i>x{{item.stock}}</i>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 电视页 -->
      <van-tab title="电视">
        <swiper interval="3000" duration="500">
          <block v-for="(item,index) in imgPicture" :key="index">
            <swiper-item>
              <img style="height:100%; width:100%" :src="baseImage + item" alt />
            </swiper-item>
          </block>
        </swiper>
        <div
          class="list-describe"
          v-for="(item,index) in electricalAppliancesSeries"
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
              <span>¥{{item.price / 100}}.00</span>
              <i>x{{item.stock}}</i>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 笔记本 -->
      <van-tab title="笔记本">
        <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="500"
          indicator-color="#ebedf0"
          indicator-active-color="#1989fa"
        >
          <block v-for="(item,index) in imgPicture" :key="index">
            <swiper-item>
              <img style="height:100%; width:100%" :src="baseImage + item" alt />
            </swiper-item>
          </block>
        </swiper>
        <div
          class="list-describe"
          v-for="(item,index) in electricalAppliancesSeries"
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
              <span>¥{{item.price / 100}}.00</span>
              <i>x{{item.stock}}</i>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 家电 -->
      <van-tab title="家电">
        <swiper interval="3000" duration="500">
          <block v-for="(item,index) in imgPicture" :key="index">
            <swiper-item>
              <img style="height:100%; width:100%" :src="baseImage + item" alt />
            </swiper-item>
          </block>
        </swiper>
        <div
          class="list-describe"
          v-for="(item,index) in electricalAppliancesSeries"
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
              <span>¥{{item.price / 100}}.00</span>
              <i>x{{item.stock}}</i>
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 居家 -->
      <van-tab title="居家">
        <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="500"
          indicator-color="#ebedf0"
          indicator-active-color="#1989fa"
        >
          <block v-for="(item,index) in imgPicture" :key="index">
            <swiper-item>
              <img style="height:100%; width:100%" :src="baseImage + item" alt />
            </swiper-item>
          </block>
        </swiper>
        <div
          class="list-describe"
          v-for="(item,index) in electricalAppliancesSeries"
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
              <span>¥{{item.price / 100}}.00</span>
              <i>x{{item.stock}}</i>
            </div>
          </div>
        </div>
      </van-tab>
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
      // 热门数据
      hot: [],
      // 新品数据
      news: [],
      // 推荐头部展示图片
      exhibition: [],
      //tab 所有
      electricalAppliancesSeries: [],
      //详情 轮播
      imgPicture: []
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
        this.allDtata(index);
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
    },
    //头部 Tab 接口
    allDtata(index) {
      this.$http("goods/queryGoods", "get", {
        page: 1,
        limit: 50,
        idCategory: index
      }).then(res => {
        this.electricalAppliancesSeries = res.data.records;
        this.imgPicture = res.data.records[0].gallery.split(",");
      });
    }
  },
  created() {
    this.recommend();
  }
};
</script>

<style scoped>
#index {
  background-color: #fff;
}
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

.list-head .fsize {
  display: flex;
  justify-content: space-between;
}
.list-head .fsize i {
  color: #969799;
}
</style>
