<template>
  <div class="login">
    <div class="sign">
        <sign-in class="signin" v-if="seen"></sign-in>
        <sign-up class="signup" v-else></sign-up>
      <div class="link">
        <el-button type="text" @click="show()">登录</el-button>
        <el-button type="text" @click="hide()">注册</el-button>
      </div>
    </div>
    <footer class="footer">
      <el-button type="text">豫ICP备17025838号-1</el-button>
    </footer>
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

<style lang="less" src="../style/login.less" scoped>
</style>