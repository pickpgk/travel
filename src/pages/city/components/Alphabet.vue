<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
