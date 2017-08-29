<template>
  <div class="login">
    <router-link>
      <img src="../assets/logo.png" alt="logo">
    </router-link>
    <router-view></router-view>
    <div class="link">
      <router-link to="signin">登录</router-link>
      <router-link to="signup">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="less" scoped>
  .login {
    width:800px;
    margin: 0 auto;
  }

  .link {
    float: right;
  }
</style>