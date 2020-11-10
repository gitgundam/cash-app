<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout',
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.nav-wrapper{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  overflow: auto;
}
.content{
  flex-grow: 1;
}
</style>
