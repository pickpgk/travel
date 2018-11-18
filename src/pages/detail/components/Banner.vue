<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1809/a0/a08f0b44aa5ffd9fa3.water.jpg_350x240_a6b56073.jpg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">刘伯温故里旅游景区—百丈漈</div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe63e;</span>
            12
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1809/a0/a08f0b44aa5ffd9fa3.water.jpg_r_800x800_305225c5.jpg', 'http://img1.qunarzz.com/sight/p0/201407/17/5675a53421e31d121938191c288b3d50.jpg_r_800x800_0d234980.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow: hidden
    height: 0
    padding-bottom: 66%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height: .32rem
        margin-top .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
