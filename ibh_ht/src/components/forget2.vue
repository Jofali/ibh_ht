<template>
  <div class="forget2">
    <el-form :model="newpwd" :rules="rules">
      <el-form-item label="验证令牌" prop="Verify">
        <el-input v-model="newpwd.Verify" placeholder="输入验证令牌"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="NewPwd">
        <el-input type="password" v-model="newpwd.NewPwd" placeholder="输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="renewPwd">
        <el-input type="password" v-model="newpwd.renewPwd" placeholder="再次输入新密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button class="forget-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
export default {
  name: 'forget',
  data () {
    const pwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.newpwd.NewPwd !== '') {
          callback()
        }
        callback()
      }
    }
    const pwd2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.newpwd.NewPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      newpwd: {
        Verify: '',
        NewPwd: '',
        renewPwd: ''
      },
      rules: {
        NewPwd: [
          {validator: pwd, trigger: 'blur'}
        ],
        renewPwd: [
          {validator: pwd2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      const self = this
      self.$axios.post('User/FindPwd', {
        'Email': self.$store.state.emailPwd,
        'Verify': self.newpwd.Verify,
        'NewPwd': self.newpwd.NewPwd
      }).then((response) => {
        if (response.data === 0) {
          self.$message.error('连接错误')
          self.$router.push('/forget')
        } else if (response.data === 1) {
          self.$message({
            message: '新密码设置成功',
            type: 'success'
          })
          self.$router.push('/')
        } else if (response.data === 2) {
          self.$message.error('令牌验证码错误')
        } else if (response.data === 3) {
          self.$message.error('验证码超时')
          self.$router.push('/forget')
        } else {
          self.$message.error('错了哦，这是一条错误消息')
        }
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style lang="less" src="../style/login.less" scoped>
</style>