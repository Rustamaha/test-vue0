import Vue from 'vue';
import Vuex from 'vuex';
import url from 'url';
import _ from 'lodash';

Vue.use(Vuex);

const makeBreeds = state => state.original.map((link) => {
  const { path } = url.parse(link);
  const breedName = path.split('/').slice(2, 3).join('');
  return { path: link, breed: breedName, id: _.uniqueId() };
});

export default new Vuex.Store({
  state: {
    original: [],
    breeds: [],
    breed: {},
    isSorted: false,
    favouriteBreeds: JSON.parse(window.localStorage.getItem('favouriteBreeds')) || [],
  },
  actions: {
    fetchBreeds({ dispatch, commit, state }) {
      return fetch('https://dog.ceo/api/breeds/image/random/20')
        .then(res => res.json())
        .then(({ message }) => {
          commit('setOriginal', message);
        })
        .then(() => {
          const data = makeBreeds(state);
          commit('setBreeds', data);
        })
        .then(() => dispatch('setSortedBreeds', state.isSorted));
    },
    setSortedBreeds({ commit, state }, toggle) {
      commit('setSorted', toggle);
      if (toggle) {
        const breeds = state.breeds.sort((breed1, breed2) => {
          if (breed1.breed > breed2.breed) {
            return 1;
          }
          if (breed1.breed < breed2.breed) {
            return -1;
          }
          return 0;
        });
        commit('setSortedBreeds', breeds);
      } else {
        const data = makeBreeds(state);
        commit('setSortedBreeds', data);
      }
    },
    setFavouriteBreed({ commit, state }, { breed, isSelected }) {
      if (isSelected) {
        const newFavouriteBreeds = [...state.favouriteBreeds, breed];
        commit('setFavouriteBreeds', newFavouriteBreeds);
      } else {
        const newFavouriteBreeds = state.favouriteBreeds
          .filter(item => item.path !== breed.path);
        commit('setFavouriteBreeds', newFavouriteBreeds);
      }
    },
  },
  mutations: {
    setOriginal(state, breeds) {
      state.original = [...state.original, ...breeds];
    },
    setSortedBreeds(state, breeds) {
      state.breeds = [...breeds];
    },
    setBreeds(state, breeds) {
      state.breeds = [...state.breeds, ...breeds];
    },
    setBreed(state, breed) {
      state.breed = breed;
    },
    setSorted(state, toggle) {
      state.isSorted = toggle;
    },
    setFavouriteBreeds(state, breeds) {
      state.favouriteBreeds = breeds;
      const parsed = JSON.stringify(breeds);
      window.localStorage.setItem('favouriteBreeds', parsed);
    },

  },
  getters: {
    getBreeds(state) {
      return state.breeds;
    },
    getBreed(state) {
      return state.breed;
    },
    getIsSorted(state) {
      return state.isSorted;
    },
    getFavouriteBreeds(state) {
      return state.favouriteBreeds;
    },
  },
});
