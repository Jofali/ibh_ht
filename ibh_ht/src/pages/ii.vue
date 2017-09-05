<template>
  <div class="ii">
  <el-row>
      <el-col :span="24">个人资料</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">Nickname: {{ Nickname }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">Email: {{ email }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">IsUsed：{{ IsUsed }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">LogInState：{{ LogInState }}</el-col>
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
    email: function () {
      return this.$store.state.sign.Email
    },
    Nickname: function () {
      return this.$store.state.sign.Nickname
    },
    IsUsed: function () {
      return this.$store.state.sign.IsUsed
    },
    LogInState: function () {
      return this.$store.state.sign.LogInState
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