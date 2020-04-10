<template>
  <div class="serch">
    <van-search placeholder="请输入搜索关键词" @search="search()" />
    <div class="rap">
      <div class="list-describe" v-for="(item,index) in search" :key="index">
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
      search: []
    };
  },
  methods: {
    search() {
      this.$http("goods/searchHot", "get").then(res => {
        this.search = res.data;
      });
    }
  }
};
</script>

<style scoped>
</style>
