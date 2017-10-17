<template>
  <div class="article">
    <el-row class="content-nav">
      <h2>
        <i class="el-icon-menu"></i>
        文章管理
      </h2>
      <el-col :span="16">
        <router-link to="/admin/addarticle">
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
    <el-table
      :data="article"
      border
      v-loading.body="loading"
      class="table">
      <el-table-column
        label="Id"
        prop="AId"
        >
      </el-table-column>
      <el-table-column
        label="日期"
        prop="CreateDate"
        width="130"
        >
      </el-table-column>
      <el-table-column
        label="标题"
        prop="Title"
        >
      </el-table-column>
      <el-table-column
        label="类别"
        prop="ATName"
        >
      </el-table-column>
      <el-table-column
        label="封面"
        width="100"
        >
        <template scope="scope">
          <img style="width:100%;" :src="scope.row.Cover" alt="">
        </template>
      </el-table-column>
      <el-table-column
        label="作者"
        prop="Author"
        width="110"
        >
      </el-table-column>
      <el-table-column
        label="文章概要"
        prop="Outline"
      >
      </el-table-column>
      <el-table-column
        label="审核"
        prop="Auditing"
      >
        <template scope="scope">
          <el-switch
            v-model="scope.row.Usable"
            on-color="#13ce66"
            off-color="#ff4949"
            on-text="通过"
            off-text="待审"
            @change="editUsable(scope.$index)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="上/下架"
        >
          <template scope="scope">
            <el-switch
              v-model="scope.row.Usable"
              on-color="#13ce66"
              off-color="#ff4949"
              on-text="上架"
              off-text="下架"
              @change="editUsable(scope.$index)">
            </el-switch>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column 
      label="操作"
      width="180">
        <template scope="scope">
        <router-link :to="'/admin/editarticle/' + article[scope.$index].AId">
          <el-button size="small">编辑</el-button>
        </router-link>
          <el-button size="small" type="danger" @click="deleteArt(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data () {
      return {
        dialog: false,
        search: '',
        article: [],
        Auditing: [],
        loading: true
      }
    },
    created: function () {
      this.getSort()
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.getSort()
      }
    },
    methods: {
      sortSearch () {
        console.log(1)
      },
      getSort: function () {
        const self = this
        self.loading = true
        self.$axios.get('Article/ArticleList?AtId=' + self.$route.params.id).then((response) => {
          self.article = response.data
          for (let i = 0; i < response.data.length; i++) {
            self.article[i].CreateDate = response.data[i].CreateDate.substring(0, 10)
          }
          self.loading = false
        }).catch((response) => {
          self.loading = false
          self.$alert(response, '消息', {
            confirmButtonText: '确定'
          })
        })
      },
      // 上下架
      editUsable: function (index) {
        // const artId = this.article[index].AId  待后台完善
      },
      deleteArt: function (index) {
        const self = this
        const artId = self.article[index].AId
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.$axios.get('Article/DelArticle?AId=' + artId).then((response) => {
            if (response.data) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              self.getSort()
            } else {
              this.$message({
                type: 'info',
                message: '删除失败!'
              })
            }
          }).catch((response) => {
            console.log(response)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style lang="less" src="@/style/article.less">
</style>
