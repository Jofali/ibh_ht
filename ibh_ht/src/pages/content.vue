<template>
  <div class="content-wrap">
    <div class="nav-content">
      <nav-ibh></nav-ibh>
    </div>
    <div class="content">
        <router-view v-loading.body="loading" element-loading-text="大江东去"></router-view>
    </div>
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
  .content-wrap {
    width: 100%;
    height: 100%;
    postion: relative;
    .nav-content,.content {
      float:left;
    }
    .nav-content {
      width: 15%;
      height: 100%;
      background: #324157;
    }
    .content {
       width: 85%;
       postion: absolute;
       top: 0;
    }
  }
</style>