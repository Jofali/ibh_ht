<template>
  <div class="article">
    <el-row class="content-nav">
      <h2>
        <i class="el-icon-menu"></i>
        文章管理
      </h2>
      <el-col :span="16">
        <router-link to="addarticle">
          <el-button type="success">
            <i class="el-icon-plus"></i>
            新增文章
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="8">
        <el-input
          placeholder="搜索"
          icon="search"
          v-model="search"
          :on-icon-click="sortSearch">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data () {
      return {
        dialog: false,
        search: ''
      }
    },
    methods: {
      sortSearch () {
        console.log(1)
      }
    }
  }
</script>

<style lang="less" src="@/style/article.less">
</style>
