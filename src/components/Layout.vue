<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout',
  props:['classPrefix']
}
</script>

<style scoped lang="scss">
.layout-wrapper{
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
