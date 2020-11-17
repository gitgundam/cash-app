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
  },

};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
  nav {
    -webkit-tap-highlight-color:transparent;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ededed;
    width: 100vw;
    height: 45px;
    font-size: 12px;
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
          color: $color-highlight;
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
      color: $color-major;
    }

  }

</style>