<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-my-art"></i>文章管理</template>
          <el-menu-item-group>
            <template slot="title">类型管理</template>
            <router-link to="/admin/types">
              <el-menu-item index="1-1">所有类型</el-menu-item>
            </router-link>
          </el-menu-item-group>
          <el-menu-item-group title="文章列表">
            <router-link to="/admin/types2">
              <el-menu-item index="1-3">所有文章</el-menu-item>
            </router-link>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">按类型分类</template>
            <div v-for="item in items">
            <router-link :to="'/admin/types' + (item + 2)">
              <el-menu-item :index="'1-4'+item">类型 {{ item }}</el-menu-item>
            </router-link>
            </div>
          </el-submenu>
        </el-submenu>
        <router-link to="/admin/types8">
          <el-menu-item index="2"><i class="el-icon-my-user"></i>用户管理</el-menu-item>
        </router-link>
        <router-link to="/admin/types9">
          <el-menu-item index="3"><i class="el-icon-my-talk"></i>评论管理</el-menu-item>
        </router-link>
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
      isCollapse: true,
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    width:100%;
    height: 100%;
    background: #EEF1F6;
  }
</style>