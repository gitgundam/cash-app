<template>
  <div class="numberPad">
    <FormItem @update:value="changeValue"
              fileName="备注"
              placeholder="在这里输入备注"></FormItem>
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
import FormItem from '@/components/money/FormItem.vue';

@Component({
  components:{FormItem}
})
export default class Types extends Vue {
  output = '0'
  value=''
  @Watch('output')
  onNumberChanged(){
    this.$emit('numberChanged', this.output)
  }
  @Watch('value')
  onValueChanged(){
    this.$emit('ValueChanged',this.value)
  }

  changeValue(value: string){
    this.value = value
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
  position:absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-bottom: 30px;
  background: #3c414b;

  .buttons {
    @extend %clearFix;

    > button {
      $border-color:#4a4f59;
      border: none;
      width: 25%;
      height: 56px;
      float: left;
      background: #3c414b;
      color: #fffeff;
      font-size: 20px;
      border-bottom: 1px solid $border-color;
      border-right: 1px solid $border-color;

      &.ok {
        float: right;
        height: 112px;
      }

      &.zero {
        width: 25%*2;
      }


    }
  }
}
</style>