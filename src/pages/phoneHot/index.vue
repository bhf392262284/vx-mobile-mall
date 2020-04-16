<template>
  <div class="phoneHot">
    <van-toast id="van-toast" />
    <div class="carousel">
      <swiper
        indicator-dots="false"
        autoplay="true"
        interval="3000"
        duration="500"
        style="height:450px"
        indicator-color="#ebedf0"
        indicator-active-color="#1989fa"
      >
        <block v-for="(item,index) in bannerList" :key="index">
          <swiper-item>
            <img style="height:100%; width:100%" :src="url+item" alt />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="list-introduce">
      <div class="list-title">
        <p>{{shopList.name}}</p>
      </div>
      <div class="list-jiage">
        <p>{{shopList.descript}}</p>
      </div>
      <div class="list-yunfei">
        <p>{{ shopList.price}}</p>
      </div>
    </div>
    <div class="yunfei">
      <van-row>
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：{{shopList.stock}}</van-col>
      </van-row>
    </div>
    <div class="group" @click="detailed">
      <p>查看商品评论</p>
      <p></p>
    </div>
    <div class="neirong" v-html="shopList.detail"></div>
    <div class="gaodu"></div>
    <van-action-sheet :show="show" title=" " round="true" @close="onClose">
      <div class="whole">
        <div class="package">
          <img v-if="shopList.pic" :src="url + shopList.pic" alt />
          <div class="information">
            <div class="one">
              ￥
              <span>{{kucun.price}}</span>
            </div>
            <div class="two">剩余{{kucun.stock}}件</div>
            <div class="see">{{Choice}}</div>
          </div>
        </div>
        <div class="Edition" v-for="(item,index) in skuTree" :key="index">
          <p>{{item.k}}</p>
          <div>
            <p
              :class="{styleColor:skuTree[index].v[s].color}"
              v-for="(i,s) in item.v"
              :key="s"
              @click="selectColor(index, s)"
            >{{i.name}}</p>
          </div>
        </div>
        <div class="shuliang">
          <p>购买数量</p>
          <div>
            <i @click="clickNumber('jian')">-</i>
            <span>{{shuzi}}</span>
            <i @click="clickNumber('jia')">+</i>
          </div>
        </div>
        <van-goods-action class="goumai-gouwuche">
          <van-goods-action-button @click="gouwuche()" text="加入购物车" type="warning" />
          <van-goods-action-button @click="goumai()" text="立即购买" />
        </van-goods-action>
      </div>
    </van-action-sheet>
    <div>
      <van-goods-action class="aciton-height">
        <van-goods-action-icon icon="home-o" plain="ture" text="主页" @click="onClickHome" />
        <van-goods-action-icon icon="like-o" text="喜欢" />
        <van-goods-action-icon icon="cart-o" info="5" text="购物车" />
        <van-goods-action-button
          @click="open"
          color="linear-gradient(90deg, rgb(255, 96, 52), rgb(238, 10, 36)"
          text="立即购买"
          class="bottom-colorsss"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import Toast from "../../../static/vant/toast/toast";
import { baseImageUrl } from "@/utils/index";
export default {
  name: "phoneHot",
  data() {
    //试试
    return {
      shuzi: 1,
      url: baseImageUrl,
      shopList: {},
      skuTree: [],
      bannerList: [],
      show: true,
      commoditySpecification: [],
      kucun: {
        price: "",
        stock: ""
      },
      Choice: ""
    };
  },
  onLoad(option) {
    this.getGoods(option.id);
  },
  methods: {
    getGoods(id) {
      this.$http("goods/" + id).then(res => {
        let shop = res.data.goods;
        shop.detail = shop.detail.replace(
          /\<img/gi,
          '<img style="max-width:100%"'
        );
        this.shopList = shop;
        this.bannerList = shop.gallery.split(",");
        let newTree = res.data.sku.tree;
        // 给规格和颜色按钮对象加一个color属性，用来选中和取消
        for (let i = 0; i < newTree.length; i++) {
          for (let j = 0; j < newTree[i].v.length; j++) {
            newTree[i].v[j].color = false;
          }
        }
        this.skuTree = newTree;
        this.kucun.price = res.data.goods.price;
        this.kucun.stock = res.data.goods.stock;
        this.commoditySpecification = res.data.sku.list;
      });
    },
    detailed() {
      Toast({
        message: "敬请期待",
        duration: 1500
      });
    },
    onClickHome() {
      let url = "/pages/index/main";
      wx.switchTab({ url });
    },
    onClose() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    // 商品数量增加和减少事件
    clickNumber(data) {
      if (data === "jian") {
        if (this.shuzi <= 1) {
          Toast({
            message: "至少选一个",
            duration: 1500
          });
        } else {
          this.shuzi--;
        }
      }
      if (data === "jia") {
        this.shuzi++;
      }
    },
    // 点击颜色和版本里面的按钮
    selectColor(index, s) {
      // 重置颜色和版本按钮的color=false，也就是取消选中状态
      for (let k = 0; k < this.skuTree[index].v.length; k++) {
        if (k !== s) {
          this.skuTree[index].v[k].color = false;
        }
      }
      // 如果按钮是选中那么就让他取消，反之就选中
      this.skuTree[index].v[s].color = !this.skuTree[index].v[s].color;
      // 创建一个空数组，用来存储当前选中的按钮id
      let arr = [];
      // 遍历数组，找到按钮选中的id，存入arr数组里面
      for (let q = 0; q < this.skuTree.length; q++) {
        for (let k = 0; k < this.skuTree[q].v.length; k++) {
          if (this.skuTree[q].v[k].color === true) {
            arr.push(this.skuTree[q].v[k].id);
          }
        }
      }
      // 如果arr数组的长度大于1，说明我们选中了2个按钮
      // 执行遍历，在list里面找到对应的code，把这项数组的对象里面的价格和库存赋值到一个对象
      if (arr.length > 1) {
        for (let v = 0; v < this.commoditySpecification.length; v++) {
          if (this.commoditySpecification[v].code === arr.join(",")) {
            this.kucun.price = this.commoditySpecification[v].price;
            this.kucun.stock = this.commoditySpecification[v].stock_num;
          }
        }
      } else {
        // 用默认的价格和库存
        this.kucun.price = this.shopList.price;
        this.kucun.stock = this.shopList.stock;
      }
      // 显示选中的版本和颜色
      let arrs = [];
      for (let f = 0; f < this.skuTree.length; f++) {
        console.log(this.skuTree[f]);
        for (let m = 0; m < this.skuTree[f].v.length; m++) {
          if (this.skuTree[f].v[m].color === true) {
            arrs.push(this.skuTree[f].v[m].name);
          }
        }
      }
      this.Choice = arrs = arrs.join(",");
    },
    // 验证是否选择了商品规格或颜色
    verifyProductSelection() {},
    // 加入购物车
    gouwuche() {},
    //立即购买
    goumai() {}
  }
};
</script>

<style scoped>
.list-introduce {
  position: relative;
  background-color: #fff;
  padding: 10px 16px;
  font-size: 14px;
}
.list-introduce::after {
  content: " ";
  border-bottom: 1px solid #ebedf0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 16px;
  transform: scaleY(0.5);
}
.list-title p {
  font-size: 16px;
  color: #323233;
}
.list-jiage p {
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  line-height: 18px;
  margin: 6px 0;
}
.list-yunfei {
  color: #f44;
}
.yunfei {
  color: #323233;
  font-size: 12px;
  padding: 5px 15px;
  background-color: #fff;
}
.group {
  justify-content: space-between;
  display: flex;
  margin: 15px 0;
  padding: 10px 16px;
  font-size: 14px;
  background-color: #fff;
}
.neirong {
  margin-bottom: 50px;
}
.whole .package {
  display: flex;
  margin-left: 16px;
}

.whole .package img {
  width: 96px;
  height: 96px;
  background: #ee0a24;
  border-radius: 4px;
  margin: 12px 0;
}
.whole .package .information {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  padding: 12px 36px 12px 8px;
}
.whole .package .information .one {
  font-size: 12px;
}
.whole .package .information .one span {
  font-size: 22px;
  color: #ee0a24;
}
.whole .package .information .two {
  margin-right: 8px;
  color: #969799;
  font-size: 12px;
  margin-top: 8px;
}
.whole .package .information .see {
  margin-top: 8px;
  color: #969799;
  font-size: 12px;
}
.whole .Edition {
  padding-top: 12px;
  margin-left: 16px;
}
.whole .Edition p {
  color: black;
  font-size: 13px;
  padding-bottom: 12px;
}
.whole .Edition div {
  color: black;
  display: flex;
}
.whole .Edition div p {
  padding: 8px;
  font-size: 13px;
  background-color: #f7f8fa;
  color: #323233;
  margin: 0 12px 12px 0;
  border-radius: 4px;
  font-size: 13px;
}
.whole .yanse {
  margin-left: 16px;
}
.whole .shuliang {
  margin-bottom: 80px;
  padding: 12px 0;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.whole .shuliang p {
  font-size: 14px;
}
.whole .shuliang div {
  margin-right: 15px;
  font-size: 14px;
  display: flex;
}
.whole .shuliang div i {
  font-size: 13px;
  background-color: #f7f8fa;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  padding: 4px;
}
.whole .shuliang div span {
  width: 32px;
  height: 28px;
  margin: 0 2px;
  background-color: #f7f8fa;
  text-align: center;
  line-height: 28px;
}
.gaodu {
  height: 50px;
}
.phoneHot .whole .Edition .styleColor {
  color: #ee0a24;
  background-color: #fde7ea;
}
</style>
