<template>
  <div class="login">
    <div class="user">
      <img src alt />
    </div>
    <div class="isDisplay">
      <van-cell-group class="user-login">
        <van-field required clearable label="用户名" placeholder="请输入用户名" />
        <van-field type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <div class="button-group">
        <van-button type="warning" block>登录</van-button>
        <van-button type="info" block>手机短信登录/注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {},
  created() {}
};
</script>

<style scoped>
.login {
  background-color: #f8f8f8;
}
.login .user img {
  height: 156px;
  background-color: red;
}
.login .isDisplay {
  background-color: #ffff;
}
</style>
