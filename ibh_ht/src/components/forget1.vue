<template>
  <div>
    <el-input v-model="email" placeholder="输入电邮"></el-input>
    <el-tooltip content="点击提交后会发送一封带有验证令牌的邮件到该邮箱" placement="bottom" effect="light">
      <el-button class="forget-btn" type="primary" @click="submit">提交</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'forget',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submit () {
      const self = this
      self.$axios.get('User/FindPwdEmail?Email=' + self.email).then((response) => {
        console.log(response)
        if (response.data === 0) {
          self.$message.error('连接错误')
        } else if (response.data === 1) {
          self.$store.commit('UPDATA_EMAILEDITPWD', self.email)
          console.log(self.$store.state.emailPwd)
          self.$router.push('/forget/setnewpwd')
          self.$message({
            message: '发送成功',
            type: 'success'
          })
        } else if (response.data === 2) {
          self.$message.error('无该用户')
        } else {
          self.$message.error('错了哦，这是一条错误消息')
        }
      }).catch((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>
<style lang="less" src="../style/login.less" scoped>
</style>