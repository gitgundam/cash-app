<template>
  <nav class="nav">
    <router-link to="/labels" class="items" active-class="selected">
      <Icon name="labels"/>标签
    </router-link>
    <router-link to="/money" class="items" active-class="selected">
      <Icon name="money"/>记账
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
@import "~@/assets/style/helper.scss";
  nav {
    @media (min-width: 580px) {
      position: fixed;
      width: 100vw;
      bottom: 0;
      left: 0;
      background: white ;
    }
    display: flex;
    box-shadow: 0 0 2px #b5b5b5;
    align-items: center;
    justify-content: space-around;
    > .items {
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
      color: $color-highlight;
    }

  }

</style>