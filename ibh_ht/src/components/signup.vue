<template>
  <div class="signin">
  <el-row>
    <el-col :span="24">
    <h3>注<span></span>册</h3>
    </el-col>
    <el-col :span="24" class="signin">
      <el-form :model="signup" :rules="rules" ref="signup">
        <el-form-item prop="email">
          <el-input v-model="signup.email" placeholder="注册邮箱"></el-input>
        </el-form-item>

        <el-form-item prop="nickName">
          <el-input v-model="signup.nickName" placeholder="昵称"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="signup.password" placeholder="设置密码" type="password"></el-input>
        </el-form-item>

        <el-form-item prop="againPassword">
          <el-input v-model="signup.againPassword" placeholder="再次输入密码" type="password"></el-input>
        </el-form-item>

         <el-form-item prop="vCodeput">
          <img @click="count" class="vcode-img" :src="'http://localhost:1736/api/Login/Verify?Id=' + id + '&OldId=' + oldid" />
          <el-input class="vcode-content" v-model="signup.vCodeput" placeholder="输入验证码"></el-input>
        </el-form-item>
        <el-button v-loading.body.lock="fullscreenLoading" class="click" type="primary" @click="registered('signup')">注<span></span>册</el-button>
      </el-form>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    const checkNickname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
      } else {
        callback()
      }
    }
    const checkPassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value === this.signup.password) {
        callback()
      } else {
        callback(new Error('两次输入不一致'))
      }
    }
    const checkCode = (rule, value, callback) => {
      const self = this
      if (value === '') {
        callback(new Error('验证码不能为空'))
      } else {
        self.$axios.get('Login/CheckVerify?Verify=' + self.signup.vCodeput + '&Id=' + self.id
        ).then(function (response) {
          self.vid = response.data
          console.log(response.data)
          if (self.vid) {
            callback()
          } else {
            callback(new Error('验证码错误'))
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
    return {
      signup: {
        email: '',
        nickName: '',
        password: '',
        againPassword: '',
        vCodeput: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        nickName: [
           { validator: checkNickname, trigger: 'blur, change' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur, change' }
        ],
        againPassword: [
          { validator: checkPassword2, trigger: 'blur, change' }
        ],
        vCodeput: [
          { validator: checkCode, trigger: 'blur' }
        ]
      },
      num: ['写数据库失败', '注册成功', '邮箱已注册', '昵称已注册'],
      fullscreenLoading: false,
      id: this.imgRandom(),
      oldid: 0,
      cid: 0,
      vid: false
    }
  },
  computed: {
    iCode: function () {
      return this.vCode
    }
  },
  methods: {
    registered: function (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        self.fullscreenLoading = true
        if (valid) {
          this.$axios.post('User/Register', {
            Email: self.signup.email,
            Password: self.signup.password,
            Nickname: self.signup.nickName
          }).then(function (response) {
            self.$alert(self.num[response.data], '提示', {
              confirmButtonText: '确定'
            })
            self.$router.push('/')
          }).catch(function (response) {
            self.$alert(response.response.data, '提示', {
              confirmButtonText: '确定'
            })
          })
          self.fullscreenLoading = false
        } else {
          self.fullscreenLoading = false
          return false
        }
      })
    },
    count: function () {
      this.oldid = this.cid
      this.id = this.imgRandom()
      this.cid = this.id
      console.log('老id:' + this.oldid + ', 本次缓存的id:' + this.cid + '新id:' + this.id)
    },
    imgRandom: function () {
      const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const n = 10
      let s = ''
      for (let i = 0; i < n; i++) {
        s += str.charAt(Math.floor(Math.random() * str.length))
      }
      return s
    }
  }
}
</script>

<style lang="less" src="../style/login.less" scoped>
</style>
