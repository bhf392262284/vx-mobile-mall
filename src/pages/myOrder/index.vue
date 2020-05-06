<template>
  <div class="myOrder">
    <van-tabs @change="whole">
      <van-tab :title="data.title" v-for="(data,i) in tabData" :key="i"></van-tab>
    </van-tabs>
    <div class="productDetails" v-for="(item,index) in commodity" :key="index">
      <div class="productDetails-top">
        <div class="shop-list-tuik">
          <p>订单编号</p>
          <p class="font">{{item.statusName}}</p>
        </div>
        <div class="shop-dingdan">
          <p>{{item.orderSn}}</p>
        </div>
      </div>
      <div class="productDetails-content" v-for="(items,s) in item.items " :key="s">
        <div class="shop-img">
          <img :src="imgUrl + items.goods.pic" />
          <div class="right-content">
            <div class="kuan">
              <p>{{items.title}}</p>
              <p class="p2">{{items.goods.descript}}</p>
            </div>
            <div class="Price">
              <i>￥{{(items.price) / 100}}.00</i>
              <i class="chen1">x{{items.count }}</i>
            </div>
          </div>
        </div>
      </div>
      <div class="heji">
        <p>合计:{{(item.totalPrice) / 100}}.00</p>
      </div>
      <div class="productDetails-footer">
        <van-button
          color="#ee0a24"
          type="default"
          size="small"
          v-if="item.payStatus===1 && item.status ===1"
          @click="cancellationOfOrder(item.orderSn)"
        >取消订单</van-button>&nbsp; &nbsp;
        <van-button
          color="#ee0a24"
          type="danger"
          size="small"
          v-if="item.payStatus===1 && item.status ===1"
        >立即费款</van-button>
        <van-button
          color="#ee0a24"
          type="danger"
          size="small"
          v-if="item.payStatus === 1 && item.status === 5"
        >已取消</van-button>
        <van-button
          color="#ee0a24"
          type="danger"
          size="small"
          v-if="item.payStatus === 2 && item.status === 2"
        >待发货</van-button>
        <van-button
          color="#ee0a24"
          type="danger"
          size="small"
          v-if="item.payStatus === 2 && item. status === 3"
        >确认收货</van-button>
        <van-button
          color="#ee0a24"
          type="danger"
          size="small"
          v-if="item.payStatus === 2 && item. status === 4"
        >已完成</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { baseImageUrl } from "@/utils/index";
export default {
  name: "myOrder",
  data() {
    return {
      imgUrl: baseImageUrl,
      commodity: [],
      tabIndex: 0,
      tabData: [
        {
          title: "全部"
        },
        {
          title: "待付款"
        },
        {
          title: "待发货"
        },
        {
          title: "已发货"
        },
        {
          title: "已完成"
        }
      ]
    };
  },
  methods: {
    whole(e) {
      let index = e.mp.detail.index;
      this.tabIndex = index;
      this.wholes(index);
    },
    wholes(index) {
      // 订单列表
      this.$http("user/order/getOrders", "get", {
        page: 1,
        limit: 50,
        status: index
      }).then(res => {
        this.commodity = res.data.records;
      });
    },
    cancellationOfOrder(orderSn) {
      this.$http("user/order/cancel/" + orderSn, "post").then(res => {
        this.wholes(this.tabIndex);
      });
    }
  },

  onShow() {
    this.wholes(0);
  }
};
</script>

<style scoped>
.productDetails {
  background-color: #fff;
  margin-top: 5px;
  font-size: 14px;
}
.productDetails-top {
  line-height: 24px;
  padding: 10px 16px;
  position: relative;
}
.productDetails-top::after {
  position: absolute;
  bottom: 0;
  content: "";
  right: 0;
  left: 0;
  border-bottom: 1px solid #ebedf0;
  transform: scaleY(0.5);
}
.shop-list-tuik {
  display: flex;
  justify-content: space-between;
}
.shop-list-tuik .font {
  color: red;
}
.productDetails-footer {
  padding: 10px 16px;
}
.shop-img {
  padding: 10px 16px;
  display: flex;
}
.shop-img img {
  margin-right: 8px;
  border-radius: 8px;
  width: 88px;
  height: 88px;
  background-color: pink;
}
.right-content {
  flex: 1;
}
.kuan {
  font-size: 12px;
}
.kuan .p2 {
  color: #646566;
}
.Price {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}
.chen1 {
  color: #969799;
  font-size: 12px;
}
.heji {
  position: relative;
  padding: 10px;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
}
.heji::after {
  position: absolute;
  bottom: 0;
  content: "";
  right: 0;
  left: 0;
  border-bottom: 1px solid #ebedf0;
  transform: scaleY(0.5);
}
.productDetails-footer {
  padding: 10px 16px;
  display: flex;
  justify-content: flex-end;
}
</style>
