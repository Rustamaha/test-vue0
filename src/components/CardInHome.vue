<template>
  <div class='card'>
    <font-awesome-icon :icon='heartIcon' class='card__heart'
      v-on:click='setIcon(breed, isSelected)' />
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
    setIcon(breed, isSelected) {
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

@media only screen and (max-width: 1140px) {
  .card {
    font-size: 1.3rem;

      &__name {
        top: 200px;
        right: 30px;

        &_big {
          top: 260px;
        }
      }
  }
}

@media only screen and (max-width: 820px) {
  .card {
    font-size: 1rem;

    &__heart {
      width: 20px;
      height: 20px;
      top: 45px;
      left: 15px;
    }

    &__name {
      top: 170px;
      right: 10px;

      &_big {
        top: 240px;
      }
    }
  }
}

@media only screen and (max-width: 620px) {
  .card {
    font-size: 0.8rem;

    &__heart {
      top: 35px;
      left: 10px;
    }
    &__name {
      top: 150px;
      right: 10px;

      &_big {
        top: 200px;
      }
    }
  }
}

@media only screen and (max-width: 375px) {
  .card {
    font-size: 0.6rem;

    &__name {
      top: 120px;
      right: 10px;
    }
  }
}
</style>
