<template>
  <div class="shoppingCart">
    <p>
      <van-icon size="48px" name="shopping-cart-o" />
      <i>还没有登录</i>
      <van-button round type="primary" block>立即登录</van-button>
    </p>
    <div class="shop-list">
      <div class="tow">
        <van-checkbox class="checkbox" value="checked" @change="onChanges"></van-checkbox>
        <van-card num="2" price="30" desc="描述信息" title="商品标题" :thumb="imageURL " />
      </div>
      <van-stepper value=" 1" @change="onChange" />
      <van-submit-bar
        decimal-length="2"
        type="info"
        price=" prices "
        label="合计"
        button-text="结算"
        bind:submit="onSubmit"
      >
        <div class="check-width">
          <van-checkbox :value="allChcek" @change="allCheckChange">复选框</van-checkbox>
          <div class="duiqi">
            <i>合计：</i>
            <span>￥</span>
            <i class="jiacu">250</i>
            <span style="padding-right:12px;">.00</span>
          </div>
        </div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingCart",
  data() {
    return {
      allChcek: false,
      prices: "30",
      checked: true,
      imageURL:
        "https://linjiashop.microapp.store/prod-api/file/getImgStream?idFile=5ad73a65-3ae1-4a62-8d90-3cd4f5a48ef1.jpg"
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
    onClickButton() {},
    // 购物车全选
    allCheckChange(v) {
      this.allChcek = v.mp.detail;
    }
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
.shop-list .tow {
  margin-top: 8px;
  margin-left: 15px;
  display: flex;
  align-items: center;
}
.check-width {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.duiqi {
  display: flex;
  align-items: center;
}
.duiqi span {
  color: #ee0a24;
  font-size: 12px;
  align-items: flex-end;
}
.shoppingCart .check-width .duiqi .jiacu {
  align-items: flex-end;
  color: #ee0a24;
  font-size: 20px;

  align-items: flex-end;
}
</style>
