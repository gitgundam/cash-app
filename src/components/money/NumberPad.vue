<template>
  <div class="numberPad">
    <div class="output" ref='origin'>{{ output || '0' }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button>删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  output = '';

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const text = button.innerText;
    const origin = (this.$refs.origin as HTMLElement);
    if (origin.innerText === '0') {
      if (text === '0') {return}
      else if (text === '.') {
        this.output = '0' + text;
      }
      this.output += text;
    }
  }

  clear() {
    this.output = '';
  }
}
</script>

<style scoped lang="scss">

@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    background: transparent;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 0 3px 1px #b5b5b5;
  }

  .buttons {
    @extend %clearFix;

    > button {
      border: none;
      width: 25%;
      height: 56px;
      float: left;

      &.ok {
        float: right;
        height: 112px;
      }

      &.zero {
        width: 25%*2;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4% * 2);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(12) {
        background: darken($bg, 4% * 3);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4% * 4);
      }

      &:nth-child(14) {
        background: darken($bg, 4% * 5);
      }

      &:nth-child(12) {
        background: darken($bg, 4% * 6);
      }
    }
  }
}
</style>