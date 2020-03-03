<template>
<div class='notfound'>
  <h1>Not Found your Breed. You may go to
    <router-link  class='nav__logo' to='/'>home</router-link>
  </h1>
</div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'NotFound',
};
</script>
<style lang='scss'>
.notfound {
  color: $white;
}
</style>
