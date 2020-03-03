<template>
  <div class='nav'>
    <router-link  class='nav__logo' to='/'>пёсель</router-link>
    <router-link class='nav__favourites' to='/favourites'>
      Избранные пёсели <font-awesome-icon :icon="['far', 'heart']" class='nav__heart' />
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'TheNavigation',
};
</script>

<style scoped lang='scss'>
.router-link-active {
  color: $white;
}

.nav {
  width: 90.64%;
  height: 100px;
  padding: 0 4.68% 0 4.68%;
  font-family: 'IBM Plex Sans';
  color: $blue;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;

  &__logo,
  &__favourites {
    text-decoration: none;
  }

  &__logo {
    font-size: 1.87rem;
    text-transform: uppercase;
  }

  &__favourites {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.75em;
    letter-spacing: 0.01em;
    color: $grey;
    &:active {
      color: $white;
    }
  }

  &__heart {
    width: 16px;
    height: 14px;
  }
}
</style>
