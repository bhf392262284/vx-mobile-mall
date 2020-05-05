<template>
  <div class="shoppingInformation">
    <van-cell title=" " is-link link-type="navigateTo" url />
    <div class="list-header" v-for="(item,index) in userlist" :key="index">
      <img class="list-img" :src="baseImage +item.goods.pic" />
      <div class="lisit-title">
        <div class="list-content-top">
          <div class="van-card">{{item.title}}</div>
          <div class="van-card__desc">{{item.goods.category.descript}}</div>
        </div>
        <div class="list-content-footer">
          <div class="van-card__title">
            <span class="van-card__price-currency">¥</span>
            <span class="van-card__price-integer">{{(item.price) /100}}</span>.
            <span class="van-card__price-decimal">00</span>
          </div>
          <div class="van-card__desc">x{{item.count}}</div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="jiage" button-text="提交订单" decimal-length="2" round />
  </div>
</template>
<script>
import { baseImageUrl } from "@/utils/index";
export default {
  name: "shoppingInformation",
  data() {
    return {
      baseImage: baseImageUrl,
      userlist: [],
      jiage: 30,
      url: ""
    };
  },
  methods: {
    logNot() {
      this.$http("user/order/prepareCheckout?chosenAddressId= ", "get").then(
        res => {
          this.userlist = res.data;
        }
      );
    }
  },
  onShow() {
    console.log(this.url);
    this.logNot();
  }
};
</script>

<style scoped>
.shoppingInformation .list-header {
  display: flex;
  padding: 5px 15px;
}
.shoppingInformation .list-header .list-img {
  width: 88px;
  height: 88px;
  background-color: red;
  margin-right: 8px;
}
.shoppingInformation .list-header .lisit-title {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.shoppingInformation .list-header .lisit-title .list-content-top .van-card {
  color: #323233;
  font-size: 12px;
}
.shoppingInformation
  .list-header
  .lisit-title
  .list-content-top
  .van-card__desc {
  font-size: 12px;
  color: #646566;
}
.shoppingInformation .list-header .lisit-title .van-card__title {
  color: #f44;
}
.shoppingInformation
  .list-header
  .lisit-title
  .van-card__title
  .van-card__price-currency {
  font-size: 12px;
}
.shoppingInformation
  .list-header
  .lisit-title
  .van-card__title
  .van-card__price-integer {
  font-size: 16px;
}
.shoppingInformation
  .list-header
  .lisit-title
  .van-card__title
  .van-card__price-decimal {
  font-size: 12px;
}
.shoppingInformation .list-header .list-content-footer {
  display: flex;
  justify-content: space-between;
}
.shoppingInformation .list-header .list-content-footer .van-card__desc {
  color: #969799;
  font-size: 12px;
}
</style>
