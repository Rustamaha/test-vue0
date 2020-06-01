<template>
  <div></div>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'InfiniteScroll',
  props: {
    bottom: Boolean,
  },
  created() {
    setTimeout(() => {
      store.dispatch('fetchBreeds');
    }, 500);
  },
};
</script>
