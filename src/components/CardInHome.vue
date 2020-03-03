<template>
  <div class='card'>
    <font-awesome-icon :icon='heartIcon' class='card__heart'
      v-on:click='handleClick(breed, isSelected)' />
    <div class='card__name' v-bind:class='{ card__name_big: isCardBig }'>{{ breed.breed }}</div>
    <img class='card__img' :src='breed.path'  :alt='breed.breed'>
  </div>
</template>
<script>
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

import store from '@/store/index';

export default {
  name: 'CardInHome',
  props: {
    breed: Object,
    isCardBig: Boolean,
  },
  data() {
    return {
      isSelected: true,
    };
  },
  computed: {
    heartIcon() {
      return this.isSelected ? farHeart : fasHeart;
    },
  },
  methods: {
    handleClick(breed, isSelected) {
      if (!isSelected) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
      store.dispatch('setFavouriteBreed', { breed, isSelected });
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
