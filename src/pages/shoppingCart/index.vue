<template>
  <div class="shoppingCart">
    <p>
      <van-icon size="48px" name="shopping-cart-o" />
      <i>还没有登录</i>
      <van-button round type="primary" block>立即登录</van-button>
    </p>
    <div class="shop-list">
      <van-checkbox value="checked" @change="onChanges">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="imageURL " />
        <template slot="footer">
          <van-stepper value=" 1" @change="onChange" />
        </template>
      </van-checkbox>
      <van-submit-bar price="3050" button-text="提交订单" bind:submit="onSubmit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  data() {
    return {
      checked: true,
      imageURL: ""
    };
  },
  methods: {
    //累加
    onChange(event) {
      console.log(event.detail);
    },
    //商品复选按钮
    onChanges(event) {
      checked: event.detail;
    },
    //商品提交
    onClickButton() {}
  },
  created() {}
};
</script>

<style scoped>
.shoppingCart {
  background-color: #f8f8f8;
  height: 100%;
  width: 100%;
}
.shoppingCart p {
  margin-top: 50%;
  text-align: center;
  color: lightgray;
}
.shoppingCart p i {
  margin-bottom: 16px;
}
</style>
