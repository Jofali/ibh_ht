<template>
  <div class="member">
  <el-row>
      <el-col :span="24">
        <h2>个人资料</h2>
      </el-col>
  </el-row>
  <el-row>
      <el-col :span="24">
        <el-tabs type="border-card">
          <el-tab-pane class="info">
            <span slot="label">我的信息</span>
          <ul>
            <li><span>昵称：</span>{{ used.Nickname }}</li>
            <li><span>电子邮箱：</span>{{ used.Email }}</li>
            <li><span>发表文章的数：</span>功能待添加</li>
            <li><span>发表评论的数：</span>功能待添加</li>
          </ul>
          </el-tab-pane>
          <el-tab-pane class="edit-pw">
            <span slot="label">修改密码</span>
            <el-row>
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
          </el-tab-pane>
        </el-tabs>
      </el-col>
  </el-row>
  <el-row>
    <el-col class="back" :span="24">
      <el-button @click="back" type="info">返回</el-button>
    </el-col>
  </el-row>
  </div>
</template>
<script>
export default {
  name: 'member',
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
  computed: {
    used: function () {
      return this.$store.state.sign
    }
  },
  created: function () {
    this.forget.email = this.used.Email
  },
  methods: {
    back: function () {
      this.$router.push('admin')
    },
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
<style lang="less" scoped>
  .member{
    width:30%;
    margin: 0 auto;
    h2 {
      text-align: center;
      font-size: 36px;
      line-height: 80px;
    }
    .back {
      text-align: center;
      margin: 20px 0;
      width: 100%;
      button {
        width: 100%;
      }
    }
    .info {
      ul {
        li {
          font-size: 16px;
          line-height: 2;
          span {
            display: inline-block;
            width: 120px;
            text-align: right;
          }
        }
      }
    }
    .edit-pw {
      .click {
        float: right;
      }
    }
  }
</style>