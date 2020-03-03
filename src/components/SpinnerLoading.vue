<template>
  <div class='spinner'>
    <div class='spinner__ring' :class='{ spinner__ring_big: active1 }'></div>
    <div class='spinner__ring' :class='{ spinner__ring_big: active2 }'></div>
    <div class='spinner__ring' :class='{ spinner__ring_big: active3 }'></div>
  </div>
</template>
<script>
export default {
  name: 'SpinnerLoading',
  data() {
    return {
      active1: true,
      active2: false,
      active3: false,
    };
  },
  created() {
    setInterval(() => {
      if (this.active1) {
        this.active1 = false;
        this.active2 = true;
        return;
      }
      if (this.active2) {
        this.active2 = false;
        this.active3 = true;
        return;
      }
      this.active1 = true;
      this.active3 = false;
    }, 200);
  },
};
</script>
<style scoped lang='scss'>
.spinner {
  width: 4.375rem;
  height: 16px;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;

  &__ring {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid $white;

    &_big {
      width: 16px;
      height: 16px;
      border-radius: 8px;
    }
  }
}
</style>
