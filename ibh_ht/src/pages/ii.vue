<template>
  <div class="ii">
  <el-row>
      <el-col :span="24">个人资料</el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
        <ul>
          <li v-for="(item, index) in used">{{ index+ ': ' +item }}</li>
        </ul>
      </el-col>
  </el-row>
  <el-row>
    <el-col :span="24"><el-button @click="back">返回</el-button></el-col>
  </el-row>
  </div>
</template>
<script>
export default {
  name: 'ii',
  computed: {
    used: function () {
      return this.$store.state.sign
    }
  },
  methods: {
    back: function () {
      this.$router.push('admin')
    }
  }
}
</script>
<style lang="less" scoped>
  .ii{
    width:30%;
    margin: 0 auto;
    text-align: center;
  }
</style>