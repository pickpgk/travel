<template>
  <div>
    <detail-banner></detail-banner>
    <detail-hander></detail-hander>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHander from './components/Hander'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHander
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
