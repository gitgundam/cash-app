<template>
  <div>
    <ul class="types">
      <li :class="type === '-'&& 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+'&& 'selected'"
          @click="selectType('+')">收入
      </li>
      <li class="line" ref="line"></li>
    </ul>

  </div>
</template>
<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';//ts:引入data
  selectType(type: string) {
    this.type = type;
    const line = (this.$refs.line as HTMLElement)
    if (type === '+') {
      line.style.transform = 'translateX(100%)';
    } else {
      line.style.transform = 'translateX(0)';
    }
  }
}

</script>

<style scoped lang="scss">
.types {
  background: #c4c4c4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  position: relative;

  > li {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50%;
    line-height: 64px;
    position: relative;

    //&.selected {
    //  &::after {
    //    content: '';
    //    position: absolute;
    //    width: 100%;
    //    left: 0;
    //    bottom: 0;
    //    border-bottom: 4px solid #333;
    //    transition: all .3s;
    //  }
    //}
  }

  > .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50vw;
    border-bottom: 4px solid black;
    transition: all .3s;
  }
}
</style>