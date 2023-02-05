<template>
  <div class="app-container">
    <!-- 应用缓存 -->
    <keep-alive include="Home">
    <router-view></router-view>
  </keep-alive>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>

      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
