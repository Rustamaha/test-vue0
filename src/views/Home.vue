<template>
  <div>
    <TheSelect />
    <div class='home'>
      <div class='home__breeds' v-if='firstBreed'>
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
        <div class='home__spinner-position'>
          <SpinnerLoading  v-if='loading' />
        </div>
        <TheScrollUp />
      </div>
    </div>
    <InfiniteScroll v-if='loading' />
  </div>
</template>
<script>
import store from '@/store/index';
import CardInHome from '@/components/CardInHome.vue';
import TheSelect from '@/components/TheSelect.vue';
import TheScrollUp from '@/components/TheScrollUp.vue';
import SpinnerLoading from '@/components/SpinnerLoading.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';

export default {
  name: 'Home',
  components: {
    CardInHome,
    TheSelect,
    TheScrollUp,
    SpinnerLoading,
    InfiniteScroll,
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
      const scroll = () => {
        const bottomOfWindow = (window.innerHeight + window.pageYOffset)
          >= document.body.offsetHeight;
        if (bottomOfWindow) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      };
      window.addEventListener('scroll', scroll);
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

  &__spinner-position {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    flex-grow: 1;
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
      float: none;
    }
  }
}

@media only screen and (max-width: 520px) {
  .home {

    &__card {

      &_small {
        width: 49%;
      }
    }
  }
}

@media only screen and (max-width: 429px) {
  .home {
    padding-top: 1em;
  }
}

@media only screen and (max-width: 320px) {
  .home {

    &__card {

      &_small {
        width: 100%;
      }
    }
  }
}
</style>
