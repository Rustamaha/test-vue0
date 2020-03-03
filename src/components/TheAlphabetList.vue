<template>
  <div class='alphabet-list'>
    <div class='alphabet-list__letter'>{{ firstLetter }}</div>
    <ul class='alphabet-list__ul'>
      <li class='alphabet-list__li' v-for='breed in breeds'
        v-on:click='handleClick(breed.breed, breed.path)' v-bind:key='breed.id'>
        <router-link class='alphabet-list__link' :to='`/${breed.breed}`'>
          {{ breed.breed }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'TheAlphabetList',
  props: {
    breeds: Array,
  },
  computed: {
    firstLetter() {
      const [{ breed }] = this.breeds;
      return breed[0].toUpperCase();
    },
  },
  methods: {
    handleClick: (name, path) => {
      store.commit('setBreed', { name, path });
    },
  },
};
</script>
<style scoped lang='scss'>
.alphabet-list {
  display: flex;
  display: -webkit-flex;
  flex-wrap: -webkit-wrap;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.4em;
  letter-spacing: 0.01em;
  color: $grey;

  &__letter {
    margin: 0.75em 0.75em 0 0;
  }

  &__ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    display: -webkit-flex;
    flex-wrap: -webkit-wrap;
    flex-wrap: wrap;
  }
  &__li {
    padding: 4px 12px;
    font-size: 0.75rem;
    line-height: 1em;
    letter-spacing: 0.01em;
    border: 1px solid $grey;
    border-radius: 1.66em;
    margin-right: 1.25em;
    margin-top: 1.41em;
    cursor: pointer;
  }

  &__link {
    color: $grey;
    text-decoration: none;
  }
}

@media only screen and (max-width: 768px) {
  .alphabet-list {

    &__li {
      margin-right: 0.75em;
      margin-top: 1.1em;
    }
  }
}

@media only screen and (max-width: 375px) {
  .alphabet-list {

    &__li {
      margin-right: 0.5em;
      margin-top: 0.8em;
    }
  }
}
</style>
