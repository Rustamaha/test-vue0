<template>
  <div></div>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'InfiniteScroll',
  created() {
    store.dispatch('fetchBreeds');
  },
};
</script>
