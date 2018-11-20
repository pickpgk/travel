<template>
  <transition>
    <!-- slot是外部组件插入的一个插槽 -->
    <!-- vue会在一些时间点上向transition插入一些class名字，借助class实现动画 -->
    <!-- 几个经典的class名字是 v-enter v-leave-to -->
    <!-- 写好组件后，把要做动画效果的部分包裹 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity 3s
</style>
