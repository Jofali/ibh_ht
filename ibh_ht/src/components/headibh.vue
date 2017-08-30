<template>
  <div class="head">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <span class="logo"><img src="../assets/logo.png"></span>
      <el-menu-item index="1">文章管理</el-menu-item>
      <el-menu-item index="2">用户管理</el-menu-item>
      <el-menu-item index="3">评论管理</el-menu-item>
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
</style>