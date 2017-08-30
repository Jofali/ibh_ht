<template>
  <el-row>
    <el-col :span="24">
    <h3>登录</h3>
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
          <img src="http://localhost:1736/api/Login/GetVerify"><el-input class="verification" v-model="verification" placeholder="验证码" type="input"></el-input>
        </li>
        <li>
          <el-button type="primary" @click="login()">登录</el-button>
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
      verification: '',
      vertype: false
    }
  },
  computed: {
    email: {
      get () {
        return this.$store.state.sign.email
      },
      set (value) {
        this.$store.commit('updateEmail', value)
      }
    },
    password: {
      get () {
        return this.$store.state.sign.password
      },
      set (value) {
        this.$store.commit('updatePassword', value)
      }
    }
  },
  methods: {
    login: function () {
      const self = this
      if (self.verification === '') {
        alert('11')
      } else {
        // self.$axios.get('http://localhost:1736/api/Login/GetCheckVerify?Verify=' + self.verification).then(function (response) {
        //   self.vertype = response.data
        //   console.log(response.data)
        // })
        self.vertype = true
      }
      if (self.vertype) {
        self.$axios.get('http://localhost:1736/api/Login/GetLoginInfo?Email=' + self.email + '&Password=' + self.password).then(function (response) {
          console.log(self.email, self.password)
          console.log(response.data)
          if (response.data.LogInState === 0) {
            self.$alert('密码错误', '密码', {
              confirmButtonText: '确定'
            })
          } else if (response.data.LogInState === 1) {
            self.router.push('/admin')
          } else if (response.data.LogInState === 2) {
            self.$alert('用户名不存在', '用户名', {
              confirmButtonText: '确定'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  li {
    margin: 20px 0;
  }

  button {
    width: 100%;
  }

  h3{
    text-align: center;
    font-size: 36px;
    color: #20a0ff;
    text-shadow: 0px 0px 3px #20a0ff;
  }

  .verification {
    float: right;
    width:80%;
    margin-bottom: 20px;
  }
</style>