<template>
  <div>
    <router-link tag="div" to="/" class="hander-abs" v-show="showAbs">
      <span class="iconfont hander-abs-back">&#xe624;</span>
    </router-link>
    <div class="hander-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont hander-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHander',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        // 让opacity最大值只能是1
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .hander-abs
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    height 0.8rem
    line-height 0.8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .hander-abs-back
      color #fff
      font-size .4rem
  .hander-fixed
    position: fixed
    top 0
    left 0
    right 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    font-size: .32rem
    .hander-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
