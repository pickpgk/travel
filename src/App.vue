<template>
  <div id="app">
    <!-- <keep-alive>这个标签包裹让ajax只请求一次 -->
    <!-- 加一个exclude后，除了Detail这个页面不缓存，其他都缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
