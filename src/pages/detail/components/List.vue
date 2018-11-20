<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件是在自身调用自身 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .06rem
    top: .12rem
    display inline-block
    width .36rem
    height .40rem
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
  .item-title
    line-height 0.8rem
    font-size 0.32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
