<template>
  <div class="Header">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style scoped lang="scss">

</style>