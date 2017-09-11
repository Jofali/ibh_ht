<template>
  <div class="admin">
    <nav>
      <head-ibh></head-ibh>
    </nav>
    <section>
      <content-ibh></content-ibh>
    </section>
  </div>
</template>

<script>
import headIbh from '@/components/headibh'
import content from '@/pages/content'

export default {
  name: 'admin',
  components: {
    'head-ibh': headIbh,
    'content-ibh': content
  },
  beforeCreate: function () {
    this.$store.commit('UPDATA_GETSESSIONSIGN')
    if (this.$store.state.sign.LogInState !== 1) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" src="../style/admin.less" scoped>
</style>