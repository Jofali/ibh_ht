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
          <el-input v-model="password" placeholder="设置密码" type="password"></el-input>
        </li>
        <li>
          <el-input v-model="password" placeholder="再次输入密码" type="password"></el-input>
        </li>
        <li>
          <el-button type="primary">登录</el-button>
        </li>
      </ul>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'signup'
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