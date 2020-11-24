<template>
  <div class="tags">
    <div class="new">
      <button @click="creatTag()">新增标签</button>
      <ul class="current">
        <li v-for="tag in tagData"
            :key="tag.id"
            @click="toggle(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0 }">{{ tag.name }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop({required: true}) tagData!: string[];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag,);
    }
    this.$emit('update:value', this.selectedTags);
  }

  creatTag() {
    const name = (window.prompt('请输入标签名') as string);
    if (name === '' || name.includes(' ')) {
      alert('文字不可为空');
    } else if (this.tagData && this.tagData.includes(name)) {
      alert('标签名已存在');
    } else if (this.tagData) {
      this.$store.commit('createTags', name);
    }

  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/reset.scss";

.tags {
  font-size: 14px;
  position: fixed;
  width: 100vw;
  bottom: 300px;
  background: white;
  > .new {
    border-top: 1px solid #dedede;
    display: flex;
    justify-content: flex-start;

    > button {
      color: #999;
      height: 30px;
      background: transparent;
      padding: 0 8px;
      border: none;
    }

    > .current {
      display: flex;
      width: 60vw;
      flex-grow: 1;
      overflow: auto;
      align-items: center;

      > li {
        display: flex;
        align-items: center;
        height: 24px;
        background: #d9d9d9;
        padding: 0 16px;
        border-radius: (24px/2);
        margin-right: 5px;

        &.selected {
          background: $color-highlight;
          color: white;
        }
      }
    }
  }
}

</style>
