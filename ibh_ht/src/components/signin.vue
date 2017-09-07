<template>
  <el-row>
    <el-col :span="24">
      <h3>登<span></span>录</h3>
    </el-col>
    <el-col :span="24" class="signin">
      <el-form :model="sign" :rules="rules2" ref="signin">
        <el-form-item prop="email">
          <el-input v-model="sign.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="sign.password" placeholder="密码"></el-input>
        </el-form-item>
        <div class="forget">
          <el-button type="text" @click="forgetPassword">忘记密码？</el-button>
        </div>
        <el-button v-loading.body.lock="Loading" class="click" type="primary" @click="login('signin')">登<span></span>录</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      sign: {
        email: '',
        password: ''
      },
      rules2: {
        email: [
           { required: true, message: '请输入邮箱地址', trigger: 'blur' },
           { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur, change' }
        ]
      },
      tips: ['连接出错', '登录成功', '密码错误', '无用户'],
      Loading: false
    }
  },
  methods: {
    login: function (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        self.Loading = true
        if (valid) {
          self.$axios.post('Login/Login', {
            Email: self.sign.email,
            Password: self.sign.password
          })
          .then(function (response) {
            const tips = self.tips[response.data.LogInState]
            self.$store.commit('UPDATA_STARTLOGIN', response.data)

            if (response.data.LogInState === 1) {
              // 更新登录状态
              self.$store.state.sign.globalState = true
              self.$router.push('admin')
            } else {
              self.$alert(tips, '消息', {
                confirmButtonText: '确定'
              })
            }
            self.Loading = false
          })
          .catch(function (response) {
            self.$alert(response, '消息', {
              confirmButtonText: '确定'
            })
            self.Loading = false
          })
        } else {
          self.Loading = false
          return false
        }
      })
    },
    forgetPassword: function () {
      this.$router.push('forget')
    }
  }
}
</script>

<style lang="less" src="../style/login.less" scoped>
</style>