<template>
  <div class="serch">
    <van-search placeholder="请输入搜索关键词" @search="search" />
    <div class="line">
      <i></i>
      <p>热门商品</p>
    </div>
    <div class="rap">
      <div
        class="list-describe"
        v-for="(item,index) in searchs"
        :key="index"
        @click="tiaozhuan(item.id)"
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
    </div>
  </div>
</template>

<script>
import { baseImageUrl } from "@/utils/index";
export default {
  name: "serch",
  data() {
    return {
      baseImage: baseImageUrl,
      searchs: []
    };
  },
  methods: {
    mingzi(i) {
      this.$http("goods/searchHot", "get", {
        page: 1,
        limit: 20,
        key: i
      }).then(res => {
        this.searchs = res.data;
      });
    },
    search(e) {
      this.mingzi(e.mp.detail);
    },
    tiaozhuan(id) {
      var url = "/pages/phoneHot/main?id=" + id;
      wx.navigateTo({ url });
    }
  },
  created() {
    this.mingzi("");
  }
};
</script>

<style scoped>
.line {
  height: 24px;
  text-align: center;
  position: relative;
  margin: 16px 0;
}
.line i {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;

  border-bottom: 1px dashed #ebedf0;
}
.line p {
  color: #969799;
  font-size: 14px;
  position: absolute;
  width: 90px;
  padding: 0 10px;
  background-color: #f7f7f7;
  left: 50%;
  margin-left: -45px;
}
.list-head .fsize {
  display: flex;
  justify-content: space-between;
}
.list-head .fsize i {
  color: #969799;
}
</style>
