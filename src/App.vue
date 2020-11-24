<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<style lang="scss">
@import '~@/assets/style/reset.scss';
body{
  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
  font-size: 16px;
}

#app{
  max-width: 500px;
  margin: 0 auto;
}
</style>
