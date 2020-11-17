<template>
  <div class="Output">
    <div class="output">{{count}}</div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Output extends Vue {
@Prop() count!: string
}
</script>

<style scoped lang="scss">
.output {
  background: transparent;
  font-size: 36px;
  font-family: Consolas, monospace;
  padding: 3px 16px;
  text-align: right;
  border-bottom: 1px solid #dedede;
}
</style>