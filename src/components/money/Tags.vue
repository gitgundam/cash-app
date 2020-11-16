<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagData"
          :key="tag.id"
          @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0 }">{{ tag.name}}
      </li>
    </ul>
    <div class="new">
      <button @click="creatTag()">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2';

@Component
export default class Tags extends Vue {
  @Prop( {required: true}) tagData!: string[];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag,);
    }
    this.$emit('update:value',this.selectedTags)
  }

  creatTag() {
    const name = (window.prompt('请输入标签名') as string)
    if (name === ''|| name.includes(' ')) {
      alert('文字不可为空');
    }else if(this.tagData && this.tagData.includes(name)){
      alert('标签名已存在')
    }else if(this.tagData){
      store.createTag(name)
    }

  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/reset.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  $a: column;
  justify-content: flex-end;
  flex-grow: 1;

  > .current {
    height: $a;
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;

    > li {
      display: flex;
      align-items: center;
      height: 24px;
      background: #d9d9d9;
      padding: 0 16px;
      border-radius: (24px/2);
      margin: 0 5px 5px 0;

      &.selected {
        background: #333333;
        color: white;
      }

    }
  }

  > .new {
    padding-top: 16px;

    > button {
      color: #999;
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}

</style>
