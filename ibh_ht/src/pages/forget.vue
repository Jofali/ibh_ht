<template>
<div class="login">
    <div class="sign">
      <el-row>
        <el-col :span="24">
          <h3>修改密码</h3>
        </el-col>
        <el-col :span="24" class="signin">
          <el-form :model="forget" :rules="rules2" ref="forget">
            <el-form-item prop="email">
              <el-input v-model="forget.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="oldPassword">
              <el-input v-model="forget.oldPassword" placeholder="旧密码"></el-input>
            </el-form-item>
            <el-form-item prop="newPassword">
              <el-input v-model="forget.newPassword" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item prop="newPassword2">
              <el-input v-model="forget.newPassword2" placeholder="再次输入新密码"></el-input>
            </el-form-item>
            <el-button class="click" v-loading.body.lock="loading" type="primary" @click="submitNewpass('forget')">提交</el-button>
          </el-form>
        </el-col>
      </el-row>
      <router-link to="/">返回</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'forget',
  data () {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      forget: {
        email: '',
        oldPassword: '',
        newPassword: '',
        newPassword2: ''
      },
      rules2: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        oldPassword: [
          { validator: checkPassword, trigger: 'blur, change' }
        ],
        newPassword: [
          { validator: checkPassword, trigger: 'blur, change' }
        ],
        newPassword2: [
          { validator: checkPassword, trigger: 'blur, change' }
        ]
      },
      loading: false,
      tips: ['连接出错', '修改成功', '旧密码错误']
    }
  },
  methods: {
    submitNewpass: function (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        self.loading = true
        if (valid) {
          self.$axios.post('User/ModifyPwd', {
            Email: self.forget.email,
            OldPwd: self.forget.oldPassword,
            NewPwd: self.forget.newPassword
          }).then(function (response) {
            self.loading = false
            console.log(response.data)
            if (response.data === 1) {
              self.$router.push('/')
            } else {
              self.$alert(self.tips[response.data], '消息', {
                confirmButtonText: '确定'
              })
            }
          }).catch(function (response) {
            self.loading = false
            self.$alert(response.response.data.Message, '消息', {
              confirmButtonText: '确定'
            })
          })
        } else {
          self.loading = false
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" src="../style/login.less" scoped>
</style>