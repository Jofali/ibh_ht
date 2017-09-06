<template>
  <div class="admin">
    <header>
      <head-ibh></head-ibh>
    </header>
    <nav>
      <nav-ibh></nav-ibh>
    </nav>
    <section>
      <content-ibh></content-ibh>
    </section>
  </div>
</template>

<script>
import headIbh from '@/components/headibh'
import navIbh from '@/components/navibh'
import contentIbh from '@/components/contentibh'

export default {
  name: 'admin',
  components: {
    'head-ibh': headIbh,
    'nav-ibh': navIbh,
    'content-ibh': contentIbh
  },
  beforeCreate: function () {
    if (!this.$store.state.sign.globalState) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" src="../style/admin.less" scoped>
</style>