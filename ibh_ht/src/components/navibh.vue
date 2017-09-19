<template>
<div class="nav">
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-my-art"></i>文章管理</template>
          <el-menu-item-group>
            <template slot="title">类型管理</template>
            <router-link to="/admin/sort">
              <el-menu-item index="1-1">所有类型</el-menu-item>
            </router-link>
          </el-menu-item-group>
          <el-menu-item-group title="文章列表">
            <router-link to="/admin/article/0">
              <el-menu-item index="1-3">所有文章</el-menu-item>
            </router-link>
            <el-submenu index="1-4">
              <template slot="title">按类型分类</template>
              <div v-for="(item, index) in table">
                <router-link :to="'/admin/article/' + item.AtId">
                  <el-menu-item :index="'1-4-'+(index + 1)"> {{ item.TypeName }}</el-menu-item>
                </router-link>
              </div>
            </el-submenu>
          </el-menu-item-group>
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
      items: [1, 2, 3, 4, 5],
      table: this.$store.state.sortTable
    }
  },
  created: function () {
    const self = this
    if (JSON.parse(sessionStorage.sortTable) === undefined) {
      self.$axios.get('Article/Type').then((response) => {
        self.$store.commit('UPDATA_SORTTABLE', response.data)
      }).catch((error) => {
        console.log(error)
      })
    } else {
      this.table = JSON.parse(sessionStorage.sortTable)
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