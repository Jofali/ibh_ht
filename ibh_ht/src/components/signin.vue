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
        验证码
      </li>
      <li>
        <el-button type="primary">登录</el-button>
      </li>
    </ul>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
  li {
    margin: 20px 0;
  }

  .signin {
    margin: 0 auto;
  }

  button {
    width: 100%;
  }

  h3{
    text-align: center;
    font-size: 36px;
    color: blue;
    background: gray;
    text-shadow: 2px 2px 1px green;
  }
</style>