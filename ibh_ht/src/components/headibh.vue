<template>
  <div class="head">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <span class="logo"><img src="../assets/logo.png"></span>
      <el-menu-item index="1">文章管理</el-menu-item>
      <el-menu-item index="2">用户管理</el-menu-item>
      <el-menu-item index="3">评论管理</el-menu-item>
      <el-submenu class="login" index="4">
        <template slot="title"><i class="el-icon-share"></i>{{ Nickname }}</template>
        <el-menu-item index="2-1" @click="ii">个人资料</el-menu-item>
        <el-menu-item index="2-2" @click="loginOut">登出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    Nickname: function () {
      return this.$store.state.sign.Nickname
    }
  },
  methods: {
    loginOut: function () {
      this.$store.state.sign.LoginState = false
      this.$router.push('/')
    },
    ii: function () {
      this.$router.push('/ii')
    }
  }
}
</script>

<style lang="less" scoped>
  .head {
    width: 100%;
  }
  .logo {
    width: 15%;
    height:60px;
    text-align: center;
    float: left;
    img {
      max-height: 50px;
      margin-top: 5px;
    }
  }
  .login {
    float: right;
    margin-right: 10%;
  }
</style>