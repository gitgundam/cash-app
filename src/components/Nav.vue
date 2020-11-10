<template>
  <nav class="nav">
    <router-link to="/money" class="items" active-class="selected">
      <Icon name="money"/>记账
    </router-link>
    <router-link to="/labels" class="items" active-class="selected">
      <Icon name="labels"/>标签
    </router-link>
    <router-link to="/statistics" class="items" active-class="selected">
      <Icon name="statistics"/>统计
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
  nav {
    font-size: 12px;
    display: flex;
    box-shadow: 0 0 2px #262b33;
    align-items: center;
    justify-content: space-around;
    > .items {
      color: black;
      text-decoration:none;
      padding: 2px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      .icon{
        width: 32px;
        height: 32px;
      }
    }
    >.items.selected{
      color: red;
    }

  }

</style>