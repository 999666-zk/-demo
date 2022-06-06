<template>
  <div id="app">
    <!-- 内容 -->
    <transition name="myanimation">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.myanimation-enter-active {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
