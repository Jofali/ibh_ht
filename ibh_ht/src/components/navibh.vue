<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="24">
      <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" theme="dark">
        <el-menu-item-group title="类型">
          <el-menu-item index="1"><i class="el-icon-message"></i>热门</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-message"></i>精华</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="用户">
          <el-menu-item index="3"><i class="el-icon-message"></i>热门用户</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-message"></i>普通用户</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    width:100%;
    height: 100%;
    background: #324157;
  }
</style>