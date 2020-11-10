<template>
  <div class="nav">
    <router-link to="/money">
      记账
      <Icon/>
      <svg>
        <use xlink:href="#money"></use>
      </svg>
    </router-link>
    <router-link to="/labels">标签</router-link>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/money.svg'

export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">


</style>