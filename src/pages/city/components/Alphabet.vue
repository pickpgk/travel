<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      // 函数节流使用timer
      timer: null
    }
  },
  // 当Alphabet渲染后，这个生命周期钩子开始起作用，获取到字母的top值
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          // 这个判断和上面的timer连起来，做一个函数节流,去除timer
          clearTimeout(this.timer)
        }
        // 如果你已经正在做滚动这件事，让这件事延迟16毫秒在执行，假设在这16毫秒之间又去做了滑动，这
        // 就会把上一次要做的操作清除掉，重新执行这次要做的事------函数节流，提高性能
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    //垂直居中
    display: flex
    flex-direction: column
    justify-content: center
    //垂直居中
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: 0.4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
