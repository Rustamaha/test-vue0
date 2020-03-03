<template>
  <div>
    <TheSelect />
    <div class='home'>
      <div class='home__breeds'>
        <CardInHome
          v-bind:breed='firstBreed'
          v-bind:isCardBig='true'
          class='home__card' />
        <template v-for='breed in breeds'>
          <CardInHome
            v-bind:breed='breed'
            class='home__card home__card_small'
            v-bind:key='breed.url' />
        </template>
      </div>
      <div class='home__footer' :class='{ home__footer_spinner: loading }'>
        <SpinnerLoading v-if='loading' />
        <TheScrollUp />
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store/index';
import CardInHome from '@/components/CardInHome.vue';
import TheSelect from '@/components/TheSelect.vue';
import TheScrollUp from '@/components/TheScrollUp.vue';
import SpinnerLoading from '@/components/SpinnerLoading.vue';

export default {
  name: 'Home',
  components: {
    CardInHome,
    TheSelect,
    TheScrollUp,
    SpinnerLoading,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    firstBreed() {
      return store.getters.getBreeds[0];
    },
    breeds() {
      return store.getters.getBreeds.slice(1);
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop
        + window.innerHeight >= document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.loading = true;
          store.dispatch('fetchBreeds')
            .then(() => {
              this.loading = false;
            });
        }
      };
    },
  },
};
</script>
<style lang='scss'>
.home {
  width: 90.64%;
  padding: 1.66em 4.68% 0 4.68%;
  font-style: normal;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 0.93em;
  letter-spacing: 0.01em;
  color: $white;

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
    width: 100%;
    height: 17.1em;
    background: linear-gradient(1.42deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%);
    font-size: 1.875rem;
    line-height: 0.93em;
    letter-spacing: 0.01em;

    &_small {
      width: 31.63%;
      height: 11.6em;
    }
  }

  &__footer {
    padding-top: 2.23em;
    padding-bottom: 5.43em;
    float: right;

    &_spinner {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
</style>
