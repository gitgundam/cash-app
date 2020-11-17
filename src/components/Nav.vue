<template>
  <nav class="nav">
    <router-link to="/labels" class="items" active-class="selected">
      <Icon name="labels"/>
    </router-link>
    <router-link to="/money" class="items" active-class="selected">
        <Icon name="add2"/>
    </router-link>
    <router-link to="/statistics" class="items" active-class="selected">
      <Icon name="statistics"/>
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
    position: fixed;
    border: 1px solid red;
    height: 45px;
    font-size: 12px;
    display: flex;
    box-shadow: 0 0 2px #b5b5b5;
    align-items: center;
    justify-content: space-around;

    > .items{
      padding: 2px 0;
      display: flex;

      align-items: center;
      &:nth-child(2){
        position: absolute;
        top: -15px;
        .icon{
          width: 55px;
          height: 55px;
        }
      }
    }
      .icon{
        width: 28px;
        height: 28px;
      }

    >.items.selected{
      color: $color-highlight;
    }

  }

</style>