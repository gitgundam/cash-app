<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>

    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/reset.scss";
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  $a:column;
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
