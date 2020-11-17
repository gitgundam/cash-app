<template>
  <div class="types">
    <Icon @click.native="cancel" name="no"/>
    <ul>
      <li :class="value === '+'&& 'selected'"
          @click="selectType('+')">收入
      </li>
      <li :class="value === '-'&& 'selected'"
          @click="selectType('-')">支出
      </li>
      <li class="line" ref="line"></li>
    </ul>
    <Icon name="yes"/>
  </div>
</template>
<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string

  selectType(value: string) {
    this.$emit('update:value',value)
    const line = (this.$refs.line as HTMLElement)
    if (value === '-') {
      line.style.transform = 'translateX(100%)';
    } else {
      line.style.transform = 'translateX(0)';
    }
  }

  cancel(){
    this.$router.replace('/')

  }


}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  -webkit-tap-highlight-color:transparent;
  user-select: none;
  background: $color-type-background;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  position: relative;
  height: 50px;
  border-bottom: 1px solid #dedede;
  >.icon{
    width: 32px;
    height: 32px;
    margin: 0 10px;
  }
  > ul{
    height: 65%;
    display: flex;
    width: 136px;
    justify-content: space-around;
    align-items: center;
    background: #ededed;
    border-radius: 8px;
    position: relative;
    > li {
      z-index: 2;
      cursor: pointer;
    }

    > .line {
      position: absolute;
      left: 2px;
      top:2px;
      width: 66px;
      height: 90%;
      background: #ffffff;
      border-radius: 7px;
      transition: all .3s;
      z-index: 1;
      transform: translateX(0);
      box-shadow: 1px 1px 4px -3px;
    }
  }

}
</style>