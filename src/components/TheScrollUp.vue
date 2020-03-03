<template>
  <div v-on:click='scrollTop()' class='scroll'>
  </div>
</template>
<script>
export default {
  name: 'TheScrollUp',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang='scss'>
.scroll {
  width: 55px;
  height: 55px;
  background: $black;
  border: 1px solid $white;
  box-sizing: border-box;
  border-radius: 27.5px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 19.34px;
    height: 1.93px;
    background: $white;
    transform: rotate(-90deg);
    left: 17px;
    top: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 7.09px;
    height: 7.09px;
    border: 2px solid $white;
    border-left: none;
    border-bottom: none;
    transform: rotate(-45deg);
    left: 22.5px;
    top: 16px;
  }
}
</style>
