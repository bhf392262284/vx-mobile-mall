<template>
  <div class="shoppingInformation">
    <van-cell is-link title="单元格" link-type="navigateTo" url />
    <div class="shopList">
      123
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
    </div>
    <van-submit-bar price="3050" button-text="提交订单" />
  </div>
</template>
<script>
export default {
  name: "shoppingInformation",
  data() {
    return {};
  },
  methods: {},
  onShow() {}
};
</script>

<style scoped>
</style>
