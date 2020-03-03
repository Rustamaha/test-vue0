<template>
  <div>
    <TheSelect />
    <div class='breed'>
      <img :src='breed.path' class='breed__img' :alt='breed.name'>
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

  &__img {
    // object-fit: cover;
    width: 100%;
    height: 17.1em;
    background: linear-gradient(1.42deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
    border-radius: 8px;
  }
}
</style>
