<template>
  <div class="add-article">
    <el-form label-position="right" label-width="180px" :model="AddArticle">
      <el-form-item label="标题">
        <el-input class="input" v-model="AddArticle.Title" placeholder="标题限制50字"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-tag>{{ niceName }}</el-tag>
      </el-form-item>
      <el-form-item label="文章类别">
        <el-select v-model="AddArticle.AType" placeholder="请选择">
          <el-option
            disabled
            label="请选择"
            value=""
          ></el-option>
          <el-option
            v-for="item in cities.value"
            :key="item.AtId"
            :label="item.TypeName"
            :value="item.AtId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="概要">
        <el-input class="input" type="textarea" v-model="AddArticle.Outline" placeholder="概要限制100字"></el-input>
      </el-form-item>
      <el-form-item label="文章封面Url">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          :on-success="handleSuccess"
          :on-error="handleError"
          drag
          :disabled="disabled"
          list-type="picture">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="正文">
        <mavon-editor :toolbars="toolbars" v-model="content" @change="htmlContent" placeholder="蠢萌的 Markdown 编辑器,如果你对 Markdown 语法不熟悉，你可以点击右上角，花费短短五分钟学习如何使用"></mavon-editor>
      </el-form-item>
      <div>
      </div>
       <el-button @click="addArticle()" class="submit" type="primary">立即提交</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        AddArticle: {
          Title: '',
          Author: 1,
          AType: 17,
          Outline: '1',
          Cover: '1',
          Content: '<h1>蠢萌的 Markdown 编辑器</h1>'
        },
        sort: '',
        fileList2: [],
        cities: '{"value":[',
        disabled: false,
        content: '',
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
        niceName: ''
      }
    },
    created: function () {
      const sortTable = this.$store.state.sortTable
      this.AddArticle.Author = this.$store.state.sign.Id
      this.niceName = this.$store.state.sign.Nickname
      // 整理下拉列表数据
      for (let i = 0; i < sortTable.length; i++) {
        if (i === sortTable.length - 1) {
          this.cities += '{"AtId":' + sortTable[i].AtId + ',' + '"TypeName":"' + sortTable[i].TypeName + '"}'
        } else {
          this.cities += '{"AtId":' + sortTable[i].AtId + ',' + '"TypeName":"' + sortTable[i].TypeName + '"},'
        }
      }
      this.cities += ']}'
      this.cities = JSON.parse(this.cities)
    },
    methods: {
      checkSort (key) {
        console.log(key)
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleSuccess (response, file, fileList) {
        this.disabled = true
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      handleError (err, file, fileList) {
        this.$message({
          message: err,
          type: 'error'
        })
      },
      htmlContent (val, render) {
        this.AddArticle.Content = render
      },
      addArticle: function () {
        const self = this
        console.log(self.AddArticle)
        self.$axios.post('Article/AddArticle', self.AddArticle).then((response) => {
          if (response.data) {
            this.$message({
              message: '成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '失败',
              type: 'error'
            })
          }
        }).catch()
      }
    }
  }
</script>

<style lang="less" src="@/style/article.less">
</style>