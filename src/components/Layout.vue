<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout',
  props:['classPrefix'],
}
</script>

<style scoped lang="scss">
.layout-wrapper{
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  height: 100vh;
  margin: 0;
  overflow: auto;
}
.content{
  //flex-grow: 1;
}
</style>
