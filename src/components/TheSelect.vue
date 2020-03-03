<template>
  <div class='select'>
    <div class='select__title' v-bind:class='{ select__title_notspace: isBreedSelected }'>
      <div v-on:click='handleClickSelect' class='select__select-block'>
        Породы<div class='select__arrow' v-bind:class='{ select__arrow_up: isSelected }'></div>
      </div>
      <div class='select__breed' v-bind:class='{ select__breed_on: isBreedSelected }'>
        <div class='select__breed-selected' v-bind:key='breedName.path'>
          {{ breedName.name }}
        </div>
      </div>
      <div class='select__toggle'
        v-bind:class='{ select__toggle_off: isBreedSelected, select__toggle_on: isSelected }'>
        <TheToggle message='Сортировка по породе' />
      </div>
    </div>
    <div class='select__list' v-bind:class='{ select__list_on: isSelected }'>
      <div class='select__name-list'>Все пёсели</div>
      <template v-if='isSorted'>
        <div class='select__ul'>
          <template v-for='(breeds, ind) in breedsSorted'>
            <TheAlphabetList v-bind:breeds='breeds' v-bind:key='ind' />
          </template>
        </div>
      </template>
      <template v-else>
        <ul class='select__ul'>
          <li v-for='(breed, ind) in breeds' v-on:click='handleClick(breed.breed, breed.path)'
            class='select__li'  v-bind:key='ind'>
            <router-link class='select__link' :to='`/${breed.breed}`'>
              {{ breed.breed }}
            </router-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
import store from '@/store/index';
import TheToggle from '@/components/TheToggle.vue';
import TheAlphabetList from '@/components/TheAlphabetList.vue';

export default {
  name: 'TheSelect',
  components: {
    TheToggle,
    TheAlphabetList,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  computed: {
    isSorted() {
      return store.getters.getIsSorted;
    },
    breedsSorted() {
      let group = [];
      return store.getters.getBreeds.reduce((acc, breed, ind) => {
        const nextBreed = store.getters.getBreeds[ind + 1];
        if (!nextBreed) {
          return [...acc, [...group, breed]];
        }
        if (breed.breed[0] === nextBreed.breed[0]) {
          group = [...group, breed];
          console.log(group);
          return acc;
        }
        const newAcc = [...acc, [...group, breed]];
        group = [];
        return newAcc;
      }, []);
    },
    breeds() {
      return store.getters.getBreeds;
    },
    breedName() {
      return store.getters.getBreed;
    },
    isBreedSelected() {
      return Object.keys(store.getters.getBreed).length > 0;
    },
  },
  methods: {
    handleClick(name, path) {
      store.commit('setBreed', { name, path });
    },
    handleClickSelect() {
      if (!this.isSelected) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.select {
  width: 89.76%;
  padding: 3.125em 5.12% 0 5.12%;

  &__title {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;

    &_notspace {
      justify-content: initial;
    }
  }

  &__breed {
    margin-left: 1.66em;
    display: none;
    margin-right: auto;

    &_on {
      display: block;
    }
  }

  &__breed-selected {
    color: $blue;
    font-size: 0.75rem;
    line-height: 1.33em;
    letter-spacing: 0.01em;
    border: 1px solid $blue;
    border-radius: 1.66em;
    padding: 4px 28px 4px 12px;
    position: relative;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      width: 7.73px;
      height: 0.81px;
      background: $blue;
      transform: rotate(135deg);
      right: 9px;
      top: 12px;
    }

    &:after {
      position: absolute;
      content: '';
      width: 7.73px;
      height: 0.81px;
      background: $blue;
      transform: rotate(-135deg);
      top: 12px;
      right: 9px;
    }
  }

  &__toggle {

    &_off {
      display: none;
    }

    &_on {
      display: block;
    }
  }

  &__select-block {
    width: 5.06em;
    font-style: normal;
    font-weight: normal;
    background-color: $black;
    color: $white;
    border-bottom: 0.5px dashed $white;
    font-size: 1rem;
    line-height: 1.25em;
    letter-spacing: 0.01em;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  &__arrow {
    width: 0.31em;
    height: 0.31em;
    position: relative;

    &:before {
      border: solid $white;
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      left: -6px;
      top: -4px;
    }

    &:after {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    &_up {
      left: -7px;
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  }

  &__list {
    width: 100%;
    // height: 9em;
    font-size: 0.75rem;
    line-height: 1em;
    letter-spacing: 0.01em;
    color: $grey;
    padding-top: 2.5em;
    display: none;

    &_on {
      display: block;
    }
  }

  &__name-list {
    width: 7.74%;
    padding: 4px 12px;
    border: 1px solid $blue;
    border-radius: 1.66em;
    text-align: center;
  }

  &__ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    flex-wrap: -webkit-wrap;
  }

  &__li {
    padding: 4px 12px;
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
</style>
