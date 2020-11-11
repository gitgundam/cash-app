<template>
  <div>
    <Layout class-prefix="layout-content">
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "money",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style scoped lang="scss">
@import "~@/assets/style/reset.scss";
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current {
    display: flex;
    overflow: hidden;
    > li {
      display: flex;
      align-items: center;
      height: 24px;
      background: #d9d9d9;
      padding: 0 16px;
      border-radius: (24px/2);
      margin: 0 5px;
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
.notes {
  font-size: 14px;
  display: block;
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
.types {
  background: #c4c4c4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  > li {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50%;
    line-height: 64px;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        border-bottom: 4px solid#333;
      }
    }
  }
}
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
      width: 25vw;
      height: 20vw;
      float: left;
      &.ok {
        float: right;
        height: 40vw;
      }
      &.zero {
        width: 50vw;
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