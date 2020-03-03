<template>
  <div class='container' id='app'>
    <TheNavigation />
    <transition name='slide'>
      <router-view />
    </transition>
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style lang='scss'>
@import './assets/styles/main.scss';

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
