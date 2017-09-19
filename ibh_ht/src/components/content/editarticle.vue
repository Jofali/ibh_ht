<template>
<div class="add-article">
 <el-form ref="form" :model="articleInfo" label-width="80px">
  <el-form-item label="标题">
    <el-input class="input" v-model="articleInfo.Title"></el-input>
  </el-form-item>
  <el-form-item label="发布日期">
    {{ articleInfo.CreateDate }}
  </el-form-item>
  <el-form-item label="作者">
    {{ articleInfo.AuthorName }}
  </el-form-item>
  <el-form-item label="摘要">
  <el-input class="input" v-model="articleInfo.Outline" type="textarea"></el-input>
  </el-form-item>
  <el-form-item label="封面">
    {{ articleInfo.Cover }}
  </el-form-item>
  <el-form-item label="类型">
    <el-select v-model="test" placeholder="请选择类型">
      <el-option
        disabled
        label="请选择"
        value=""
      >
      </el-option>
      <el-option 
        v-for="item in sort" 
        :key="item.AtId"
        :label="item.TypeName" 
        :value="item.AtId"
      >
      </el-option>
    </el-select>
    {{ test }}
  </el-form-item>
  <el-form-item label="正文">
    <mavon-editor 
      :toolbars="toolbars" 
      v-model="articleInfo.Content" 
      @change="htmlContent" 
      placeholder="蠢萌的 Markdown 编辑器,如果你对 Markdown 语法不熟悉，你可以点击右上角，花费短短五分钟学习如何使用"
      >
    </mavon-editor>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submit" class="submit">立即修改</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
export default {
  name: 'table',
  data () {
    return {
      articleInfo: {},
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        help: true, // 帮助
        link: true, // 链接
        imagelink: true, // 图片链接
        fullscreen: true, // 全屏编辑
        htmlcode: true // 展示html源码
      },
      sort: {},
      test: ''
    }
  },
  created: function () {
    const self = this
    self.$axios.get('Article/ArticleInfo?AId=' + self.$route.params.id).then((response) => {
      self.articleInfo = response.data
      console.log(1)
      self.$axios.get('Article/Type').then((response) => {
        self.sort = response.data
        console.log(2)
        console.log(self.sort)
      }).catch((response) => {
        console.log(response)
      })
    }).catch((response) => {
      console.log(response)
    })
  },
  methods: {
    htmlContent (val, render) {
      this.articleInfo.Content = render
    },
    submit () {
      const self = this
      self.$axios.post('Article/MdfArticle', {
        AId: self.articleInfo.AId,
        Content: self.articleInfo.Content,
        Title: self.articleInfo.Title,
        Outline: self.articleInfo.Outline,
        Cover: self.articleInfo.Cover
      }).then((response) => {
        if (response.data) {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          })
        } else {
          this.$message.error('失败，这是一条失败消息')
        }
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style lang="less" src="@/style/article.less">
</style>