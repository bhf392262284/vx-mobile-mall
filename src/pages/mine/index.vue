<template>
  <div class="login">
    <van-toast id="van-toast" />
    <div class="content-top">
      <div class="user">
        <img :src="banner" />
      </div>
      <div class="isDisplay" v-if="isDisplay===false">
        <van-cell-group class="user-login">
          <van-field
            required
            clearable
            label="用户名"
            @change="isName"
            :value="name"
            placeholder="请输入用户名"
          />
          <van-field
            required
            clearable
            type="password"
            @change="isPassWord"
            label="密码"
            placeholder="请输入密码"
            :value="password"
          />
        </van-cell-group>
        <div class="button-group">
          <van-button type="warning" block @click="land()">登录</van-button>
          <van-button type="info" block>手机短信登录/注册</van-button>
        </div>
      </div>
    </div>
    <div class="content-bottom" v-if="isDisplay===true">
      <van-row class="row">
        <van-col span="6" class="center">
          <van-icon size="24px" name="pending-payment" />
          <i class="font-s">待付款</i>
        </van-col>
        <van-col span="6" class="center">
          <van-icon size="24px" name="pending-payment" />
          <i class="font-s">待发货</i>
        </van-col>
        <van-col span="6" class="center">
          <van-icon size="24px" name="pending-payment" />
          <i class="font-s">已发货</i>
        </van-col>
        <van-col span="6" class="center">
          <van-icon size="24px" name="pending-payment" />
          <i class="font-s">已完成</i>
        </van-col>
      </van-row>
      <van-cell
        class="kongbai"
        icon="records"
        title="全部订单"
        is-link
        link-type="navigateTo"
        url="/pages/myOrder/main"
      />
      <van-cell icon="location-o" title="收货地址" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="after-sale" title="我的优惠卷" is-link />
      <van-cell icon="shop-o" title="我收到的礼物" is-link />
      <van-cell icon="setting-o" link-type="navigateTo" title="设置" is-link url="/pages/setUp/main" />
    </div>
  </div>
</template>

<script>
import Toast from "../../../static/vant/toast/toast";
import banner from "../../../static/img/user-banner1.jpg";

export default {
  name: "login",
  data() {
    return {
      banner: banner,
      name: "",
      password: "",
      isDisplay: false //未登录
    };
  },
  methods: {
    isName(e) {
      this.name = e.mp.detail;
    },
    isPassWord(e) {
      this.password = e.mp.detail;
    },
    land() {
      if (this.name === "" && this.password === "") {
        Toast({
          message: "请输入用户账号和密码",
          duration: 1500
        });
        return;
      }
      if (this.name === "") {
        Toast({
          message: "请输入用户账号",
          duration: 1500
        });
        return;
      }
      if (this.password === "") {
        Toast({
          message: "请输入用户密码",
          duration: 1500
        });
        return;
      }
      this.$http(
        "loginByPass" +
          "?" +
          "mobile=" +
          this.name +
          "&" +
          "password=" +
          this.password,
        "post"
      ).then(res => {
        if (res.code === 9999) {
          // 登陆错误
          Toast({
            message: res.msg,
            duration: 1500
          });
          this.isDisplay = false;
        } else {
          Toast({
            type: "success",
            message: "登陆成功",
            duration: 1500
          });
          this.isDisplay = true;
          console.log(res);
          wx.setStorageSync("token", res.data.token);
          wx.setStorageSync("user", res.data.user);
        }
      });
    },
    toSetup() {
      let url = "/pages/setUp/main";
      wx.navigateTo({ url });
    }
  },
  onShow: function() {
    if (wx.getStorageSync("token")) {
      this.isDisplay = true;
    } else {
      this.isDisplay = false;
    }
  }
};
</script>

<style scoped>
.login {
  background-color: #f8f8f8;
}
.login .user img {
  width: 100%;
  height: 156px;
}
.login .isDisplay {
  background-color: #ffff;
}
.center {
  text-align: center;
}
</style>
