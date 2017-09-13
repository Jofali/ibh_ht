<template>
  <div class="add-article">
    <el-form label-position="right" label-width="180px" :model="AddArticle">
      <el-form-item label="标题（50字内）">
        <el-input class="input" v-model="AddArticle.Title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input class="input" v-model="AddArticle.Author"></el-input>
      </el-form-item>
      <el-form-item label="文章类别">
        <el-checkbox-group v-model="sort">
          <el-checkbox-button @change="checkSort(city.AtId)" v-for="city in cities.value" :label="city.AtId" :key="city.TypeName">
            {{city.TypeName}}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="概要（100字内）">
        <el-input class="input" type="textarea" v-model="AddArticle.Outline"></el-input>
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
        <mavon-editor :toolbars="toolbars" v-model="contentText" @change="test"></mavon-editor>
      </el-form-item>
       <el-button class="submit" type="primary">立即提交</el-button>
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
          Author: '',
          AType: '',
          Outline: '',
          Cover: '',
          Content: ''
        },
        sort: [],
        fileList2: [],
        cities: '{"value":[',
        disabled: false,
        contentText: '# 蠢萌的 Markdown 编辑器',
        contentHtml: '',
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          help: true, // 帮助
          link: true, // 链接
          imagelink: true, // 图片链接
          fullscreen: true, // 全屏编辑
          htmlcode: true // 展示html源码
        }
      }
    },
    created: function () {
      const sortTable = this.$store.state.sortTable
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
      checkSort () {
        console.log(this.sort)
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
      test (val, render) {
        this.contentHtml = render
      }
    }
  }
</script>

<style lang="less" src="@/style/article.less">
</style>