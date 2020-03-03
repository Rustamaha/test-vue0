<template>
  <label class='toggle'>
    <input v-on:change='handleChange(toggle)' type='checkbox'
      class='toggle__input' v-model='toggle'>
    <div class='toggle__slider-round'>{{ message }}</div>
  </label>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'TheToggle',
  props: {
    message: String,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    handleChange(toggle) {
      store.dispatch('setSortedBreeds', toggle);
    },
  },
};
</script>
<style scoped lang='scss'>
.toggle {
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 0.8em;
  letter-spacing: 0.01em;
  color: $grey;

  &__input {
    position: absolute;
    opacity: 0;
    z-index: -1;

    &:checked + .toggle__slider-round:before {
      border: 1px solid $grey;
    }

    &:checked + .toggle__slider-round:after {
      content: '';
      position: absolute;
      background: $grey;
      right: 16px;
    }
  }

  &__slider-round {
    padding-right: 2.63em;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      width: 29px;
      height: 14.5px;
      background: $black;
      right: 0;
      border: 1px solid $grey;
      box-sizing: border-box;
      border-radius: 9px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 9.67px;
      height: 9.67px;
      right: 3px;
      top: 2.5px;
      background: $grey;
      border-radius: 9px;
    }
  }
}
</style>
