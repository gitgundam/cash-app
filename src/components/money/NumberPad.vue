<template>
  <div class="numberPad">
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">ok</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  output = '0'
  @Watch('output')
  onNumberChanged(){
    this.$emit('numberChanged', this.output)
  }

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const text = button.innerText;
    if (this.output.length === 16) {
      alert('最多16位数字');
      return;
    }
    if (this.output === '0') {
      if (text === '0') {
        return;
      } else if (text === '.') {
        this.output = '0.';
        return;
      }else if('123456789'.indexOf(text) >=0 ){
        this.output = text
        return
      }
    }
    if (this.output.includes('.') && text === '.') {
      return;
    }
    if (this.output.includes('.') && (this.output.length - this.output.lastIndexOf('.') > 2)) {
      return;
    }
    this.output += text;
  }

  clear() {
    this.output = '0';
  }

  ok() {
    this.$emit('update', this.output);
    this.$emit('save', this.output);
    this.clear();
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }


}
</script>

<style scoped lang="scss">

@import "~@/assets/style/helper.scss";

.numberPad {


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