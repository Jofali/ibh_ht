<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="sign">
        <sign-in class="signin" v-if="seen"></sign-in>
        <sign-up class="signup" v-else></sign-up>
      <div class="link">
        <el-button type="text" @click="show()">登录</el-button>
        <el-button type="text" @click="hide()">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import signin from '@/components/signin'
import signup from '@/components/signup'

export default {
  name: 'login',
  data () {
    return {
      seen: true
    }
  },
  components: {
    'sign-in': signin,
    'sign-up': signup
  },
  methods: {
    show: function () {
      this.seen = true
    },
    hide: function () {
      this.seen = false
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    width:800px;
    margin: 0 auto;
  }

  .link {
    float: right;
  }

  .logo {
    background: #000;
    text-align: center;
    padding:30px 0;
    margin-bottom:30px;
  }

  .sign {
    width: 100%;
    position: relative;
  }

  .signin,.signup {
    position: relative;
    top: 0;
    width: 100%;
  }
</style>