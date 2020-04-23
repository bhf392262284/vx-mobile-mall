<template>
  <div class="shoppingCart">
    <p v-if="loginoOrNot">
      <van-icon size="48px" name="shopping-cart-o" />
      <i>还没有登录</i>
      <van-button round type="primary" block>立即登录</van-button>
    </p>
    <div class="shop-list" v-else>
      <div v-for="(item,index) in shoppingList" :key="index">
        <div class="tow">
          <van-checkbox class="checkbox" :value="item.isChoose" @change="changes($event,index)"></van-checkbox>
          <van-card
            :num="item.count"
            :price="(item.price)"
            :desc="item.goods.descript"
            :title="item.sku.title"
            :thumb=" url+ item.goods.pic"
          />
        </div>
        <van-stepper
          disable-input="true"
          :value="item.count"
          @change="onChange($event,index,item.id)"
        />
      </div>
      <van-submit-bar
        decimal-length="2"
        type="info"
        price=" prices "
        label="合计"
        button-text="结算"
        bind:submit="onSubmit"
      >
        <div class="check-width">
          <van-checkbox :value="allChcek" @change="allCheckChange">全选</van-checkbox>
          <div class="duiqi">
            <i>合计：</i>
            <span>￥</span>
            <i class="jiacu">{{heji}}</i>
            <span style="padding-right:12px;">.00</span>
          </div>
        </div>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { baseImageUrl } from "@/utils/index";
export default {
  name: "shoppingCart",
  data() {
    return {
      url: baseImageUrl,
      shoppingList: [],
      loginoOrNot: false, //false 是已登录 true是未登录
      allChcek: true,
      prices: "30",
      checked: true,
      heji: ""
    };
  },
  onShow() {
    this.logNot();
  },
  methods: {
    logNot() {
      if (wx.getStorageSync("token")) {
        this.loginoOrNot = false;
        this.$http("user/cart/queryByUser", "get").then(res => {
          let shopping = res.data;
          for (let i = 0; i < shopping.length; i++) {
            shopping[i].isChoose = true;
            shopping[i].price = shopping[i].price / 100;
          }
          this.shoppingList = shopping;
          this.PriceCalculation();
        });
      } else {
        this.loginoOrNot = true;
      }
    },
    //累加
    onChange(event, index, id) {
      this.shoppingList[index].count = event.mp.detail;
      this.$http(
        "user/cart/update/" + id + "/" + this.shoppingList[index].count,
        "post"
      );
      this.PriceCalculation();
    },

    //商品复选按钮
    changes(event, index) {
      console.log(event, "商品索引" + index);
      for (let m = 0; m < this.shoppingList.length; m++) {
        if (m === index) {
          this.shoppingList[m].isChoose = event.mp.detail;
          break;
        }
      }
      this.PriceCalculation();
    },
    //商品提交
    onClickButton() {},
    // 购物车全选
    allCheckChange(s) {
      this.allChcek = s.mp.detail;
      for (let v = 0; v < this.shoppingList.length; v++) {
        this.shoppingList[v].isChoose = this.allChcek;
      }
      this.PriceCalculation();
    },
    //价格计算
    PriceCalculation() {
      let heji = 0;
      for (let o = 0; o < this.shoppingList.length; o++) {
        if (this.shoppingList[o].isChoose) {
          heji = heji + this.shoppingList[o].price * this.shoppingList[o].count;
        }
      }
      this.heji = heji;
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
