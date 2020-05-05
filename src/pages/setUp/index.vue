<template>
  <div class="setUp">
    <div class="content-top">
      <van-cell-group>
        <van-cell icon="friends-o" title="头像" value="头像" is-link />
        <van-cell icon="manager-o" title="姓名" :value="users.nickName" is-link />
        <van-cell icon="manager" title="性别" value="男" is-link />
        <van-cell icon="share" title="修改密码" is-link />
        <van-cell icon="phone-circle" title="更换手机" value="内容" is-link />
        <van-cell icon="like-o" title="关于本项目" is-link />
      </van-cell-group>
    </div>
    <div class="login-out">
      <van-button @click="getuserinfo()" round color="#7232dd" plain type="warning" block>退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "setUp",
  data() {
    return {
      users: {},
      url:
        "http://linjiashop.microapp.store/prod-api/file/getImgStream?idFile=5ad73a65-3ae1-4a62-8d90-3cd4f5a48ef1.jpg"
    };
  },
  methods: {
    onClickLeft() {
      var url = "/pages/mine/main";
      wx.navigateTo({ url });
    },
    getuserinfo() {
      this.$http("logout", "post").then(res => {});
      wx.removeStorageSync("token");
      wx.removeStorageSync("user");
      var url = "/pages/index/main";
      wx.switchTab({ url });
    },
    user() {
      this.$http("user/getInfo", "get").then(res => {
        this.users = res.data;
      });
    }
  },

  onShow() {
    this.user();
  }
};
</script>

<style scoped>
.content-top {
  margin-top: 10px;
}
.login-out {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5px;
}
</style>
