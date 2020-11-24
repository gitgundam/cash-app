<template>
  <div class="header">
    <div class="content" :class="`${classPrefix}`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() classPrefix?: string

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

  .header{
    margin: 0;
    bottom: 0;
    z-index: 10;
  }
</style>