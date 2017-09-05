<template>
  <el-row>
    <el-col :span="24">
    <h3>登<span></span>录</h3>
    </el-col>
    <el-col :span="24" class="signin">
      <ul>
        <li>
          <el-input v-model="email" placeholder="邮箱"></el-input>
        </li>
        <li>
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
        </li>
        <li>
          <el-button class="click" type="primary" @click="login()">登<span></span>录</el-button>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      email: '1@qq.com',
      password: '123456',
      tips: ['密码错误', '登陆成功', '用户名不存在']
    }
  },
  methods: {
    login: function () {
      const self = this
      self.$axios.post('Login/Login?Email=' + self.email + '&Password=' + self.password)
      .then(function (response) {
        const LogInState = self.tips[response.data.LogInState]
        // 更新登录状态
        self.$store.commit('UPDATA_LOGIN', response.data)
        if (response.data.LogInState === 1) {
          console.log(self.$store.state.sign.LogInState)
          self.$router.push('admin')
        } else {
          self.$alert(LogInState, '消息', {
            confirmButtonText: '确定'
          })
        }
      })
      .catch(function (response) {
        self.$alert(response.response.data.Message, '消息', {
          confirmButtonText: '确定'
        })
      })
    }
  }
}
</script>

<style lang="less" src="../style/login.less" scoped>
</style>