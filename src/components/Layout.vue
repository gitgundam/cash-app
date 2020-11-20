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
  margin: 0;
  padding: 0;
  overflow: scroll;
  height: calc(100vh - 45px);
}
.content{
  //flex-grow: 1;
}
</style>
