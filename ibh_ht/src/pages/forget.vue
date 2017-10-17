<template>
  <div class="login">
    <h3>找回密码</h3>
    <router-view></router-view>
    <div class="sign">
      <router-link to="/">返回</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'forget'
}
</script>
<style lang="less" src="../style/login.less" scoped>
</style>