<template>
  <div class="signin">
  <el-row>
    <el-col :span="24">
    <h3>注册</h3>
    </el-col>
    <el-col :span="24" class="signin">
      <ul>
        <li>
          <el-input v-model="email" placeholder="注册邮箱"></el-input>
        </li>
        <li>
          <el-input v-model="nickName" placeholder="昵称"></el-input>
        </li>
        <li>
          <el-input v-model="password" placeholder="设置密码" type="password"></el-input>
        </li>
        <li>
          <el-input v-model="againPassword" placeholder="再次输入密码" type="password"></el-input>
        </li>
        <li>
          <el-button type="primary" @click="registered()">注册</el-button>
        </li>
      </ul>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: '',
      againPassword: '',
      nickName: '',
      num: ['写数据库失败', '注册成功', '邮箱已注册', '昵称已注册']
    }
  },
  methods: {
    registered: function () {
      const self = this
      this.$axios.get('http://localhost:1736/api/UserInfo/GetRegister?Email=' + self.email + '&Password=' + self.password + '&Nickname=' + self.nickName).then(function (response) {
        self.$alert(self.num[response.data], '提示', {
          confirmButtonText: '确定'
        })
      })
    }
  }
}
</script>

<style scoped>
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
</style>
