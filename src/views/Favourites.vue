<template>
  <div class='favourites'>
    <div class='favourites__breeds'>
      <template v-for='breed in favouriteBreeds'>
        <CardInFavourites
          v-bind:breed='breed'
          class='favourites__card'
          v-bind:key='breed.path' />
      </template>
    </div>
  </div>
</template>
<script>
import store from '@/store/index';
import CardInFavourites from '@/components/CardInFavourites.vue';
// @ is an alias to /src

export default {
  name: 'Favourites',
  components: {
    CardInFavourites,
  },
  computed: {
    favouriteBreeds() {
      return store.getters.getFavouriteBreeds;
    },
  },
};
</script>
<style lang='scss'>
.favourites {
  width: 90.64%;
  padding: 7.625em 4.68% 0 4.68%;

  &__breeds {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-wrap: -webkit-wrap;
    justify-content: space-between;
  }

  &__card {
    margin-bottom: 1em;
    background: linear-gradient(1.42deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
    width: 31.63%;
    height: 11.6em;
  }
}
</style>
