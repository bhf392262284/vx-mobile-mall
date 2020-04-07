<template>
  <div id="index">
    <van-tabs active="a">
      <van-tab title="推荐" name="a">
        <van-row>
          <van-col offset="1.5">热门推荐</van-col>
        </van-row>
        <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题" thumb="{{ imageURL }}"></van-card>
      </van-tab>
      <van-tab title="手机" name="b">手机</van-tab>
      <van-tab title="电视" name="c">电视</van-tab>
      <van-tab title="笔记本" name="c">笔记本</van-tab>
      <van-tab title="家电" name="c">家电</van-tab>
      <van-tab title="居家" name="c">居家</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      imageURL: "/static/img/ipad.jpeg"
    };
  },
  methods: {},
  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
</style>
