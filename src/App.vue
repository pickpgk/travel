<template>
  <div id="app">
    <!-- <keep-alive>这个标签包裹让ajax只请求一次 -->
    <keep-alive>
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
