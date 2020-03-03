<template>
  <div class='card'>
    <font-awesome-icon :icon="['fas', 'heart']" class='card__heart'
      v-on:click='handleClick(breed)' />
    <div class='card__name' v-bind:class='{ card__name_big: isCardBig }'>{{ breed.breed }}</div>
    <img class='card__img' :src='breed.path'  :alt='breed.breed'>
  </div>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'CardInFavourites',
  props: {
    breed: Object,
    isCardBig: Boolean,
  },
  methods: {
    handleClick(breed) {
      store.dispatch('setFavouriteBreed', { breed });
    },
  },
};
</script>
<style scoped lang='scss'>
.card {
  font-style: normal;
  font-weight: 600;
  font-size: 1.56rem;
  line-height: 1.12em;
  letter-spacing: 0.01em;
  color: $white;

  &__heart {
    width: 29px;
    height: 26px;
    position: relative;
    top: 65px;
    left: 35px;
    cursor: pointer;
  }

  &__name {
    float: right;
    position: relative;
    top: 240px;
    right: 50px;

    &_big {
      top: 300px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
