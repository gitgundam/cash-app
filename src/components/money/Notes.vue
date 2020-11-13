<template>
  <div>
    <label class="notes">
      {{value}}
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" v-model.lazy="value"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  @Watch('value')
  onValueChanged(v: string){
    this.$emit('update',v)
  }

}
</script>

<style scoped lang="scss">
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>