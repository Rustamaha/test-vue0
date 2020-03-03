<template>
  <div>
    <TheSelect />
    <div class='breed'>
      <div class='breed__card'>
        <div class='breed__name'>{{ breed.breed }}</div>
        <img :src='breed.path' class='breed__img' :alt='breed.breed'>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store/index';
import TheSelect from '@/components/TheSelect.vue';

export default {
  name: 'Breed',
  components: {
    TheSelect,
  },
  computed: {
    breed() {
      return store.getters.getBreed;
    },
  },
};
</script>

<style lang='scss'>
.breed {
  width: 90.64%;
  padding: 1.66em 4.68% 0 4.68%;
  font-style: normal;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 0.93em;
  letter-spacing: 0.01em;
  color: $white;

  &__name {
    float: right;
    position: relative;
    right: 50px;
    top: 300px;
  }

  &__card {
    width: 100%;
    height: 17.1em;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(1.42deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
    border-radius: 8px;
  }
}

@media only screen and (max-width: 768px) {
  .breed {

    &__card {

      &__img {
        height: auto;
      }
    }
  }
}
</style>
