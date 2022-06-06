<template>
  <div>
    <div class="main">
      <!-- header -->
      <!-- <van-cell title="捷讯头条" icon="guide-o">
        <template #right-icon>
          <van-icon name="search" size="20" class="search-icon" />
        </template>
      </van-cell> -->

      <van-nav-bar fixed z-index="10">
        <template #left>
          <van-icon name="guide-o" size="18" />
          <div>迅捷头条</div>
        </template>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

      <!-- 内容 二级路由挂载点 -->
      <router-view></router-view>
    </div>

    <!-- footer -->
    <van-tabbar route active-color="#0077ff" inactive-color="#000">
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
// .van-cell {
//   background: rgb(0, 119, 255);
//   color: #fff;
// }
.van-icon {
  display: flex;
  align-items: center;
}
.van-nav-bar {
  background: rgb(0, 119, 255);
  color: #fff;
  .van-icon {
    color: #fff;
  }
}
</style>
