<template>
  <div class="content-wrap-wrap">
    <div class="content-wrap">
      <div class="nav-content">
        <nav-ibh></nav-ibh>
      </div>
      <div class="content">
          <router-view v-loading.body="loading" element-loading-text="大江东去"></router-view>
      </div>
    </div>
    <footer class="footer">
      <el-button type="text">豫ICP备17025838号-1</el-button>
    </footer>
  </div>
</template>

<script>
import navibh from '@/components/navibh'

export default {
  name: 'content',
  data () {
    return {
      loading: false
    }
  },
  components: {
    'nav-ibh': navibh
  }
}
</script>

<style lang="less" scoped>
.content-wrap-wrap {
  height: 100%;
}
  .content-wrap {
    width: 100%;
    min-height: 96.2%;
    position: relative;
    &:after {
        content: '';
        display: block;
        clear: both;
      }
    .nav-content,.content {
      float:left;
    }
    .nav-content {
      width: 15%;
      min-height: 1040px;
      background: #eef1f6;
    }
    .content {
       width: 85%;
       background: #fff;
    }
  }
  .footer {
  width:100%;
  background: #000;
  height:40px;
  line-height: 40px;
  text-align: center;
}
</style>