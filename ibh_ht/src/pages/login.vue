<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="sign">
      <el-collapse-transition>
        <sign-in class="signin" v-if="seen"></sign-in>
        <sign-up class="signup" v-else></sign-up>
      </el-collapse-transition>
    </div>
    <div class="link">
      <el-button type="text" @click="show()">登录</el-button>
      <el-button type="text" @click="hide()">注册</el-button>
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
    position: relative;
  }

  .logo {
    background: #000;
    text-align: center;
    padding:30px 0;
    margin-bottom:30px;
  }

  .sign {
    width: 100%;
    height:auto;
    height:270px;
    position: relative;
  }

  .signin {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .signup {
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>