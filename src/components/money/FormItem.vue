<template>
  <div>
    <label class="notes">
      <span class="name">{{fileName}}</span>
      <input type="text" :placeholder="placeholder"
             :value = "value"
             @blur="onValueChanged($event.target.value)"
             @keyup.enter="onValueChanged($event.target.value)"/>
     </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default: ''})readonly value!: string
  @Prop() fileName?: string
  @Prop() placeholder?: string
  onValueChanged(value: string){
    this.$emit('update:value',value)
  }

}
</script>

<style scoped lang="scss">
.notes {
  left: 0;
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 46px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>