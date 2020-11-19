<template>
  <div class="header">
    <div class="content" :class="`${classPrefix}`-item">
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
    height: 20vh;
    width: 100vw;
    background: $color-major;
  }
</style>