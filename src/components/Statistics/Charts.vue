<template>
  <div class="Charts">
    <div class="wrapper" ref="wrapper"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import echarts, {EChartOption} from 'echarts';

@Component
export default class Charts extends Vue {
  @Prop() options!: EChartOption;

  @Watch('options')
  onOptionsChange(newValue: EChartOption ){
    const myChart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    myChart.setOption(newValue)
  }
  mounted() {
    const myChart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    myChart.setOption(this.options);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 400px;
  border-bottom: 1px solid #dedede;
}
</style>