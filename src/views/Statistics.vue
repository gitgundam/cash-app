<template>
  <div class="statistics">
    <Layout classPrefix="layout-content">
      <Header classPrefix="header">
        <ul>
          <li @click="selectType('+')" >收入
          </li>
          <li @click="selectType('-')">支出
          </li>
          <li class="line" ref="line"></li>
        </ul>
      </Header>
      <Charts :options="options"></Charts>
      <ul class="rank" v-if="rank[0].name !== '暂无数据'">
        <li class="title">
          <h3>收支排行</h3>
        </li>
        <li v-for="item in rank" :key="item.name">
          <Icon :name="item.name"></Icon>
          <span>{{item.name}}</span>
          <span class="value">¥ {{item.value}}</span>
        </li>
      </ul>
      <div class="no-data" v-else>暂无数据</div>
      <Nav/>
    </Layout>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import Charts from '@/components/Statistics/Charts.vue';
import Header from '@/components/Header.vue';

@Component({
  components:{
    Layout,Charts,Header
  }
})
export default class Statistics extends Vue {
  type = '-'
  get options(){
    return {
      title: {
        text: '收支记录',
        left: 'center',
        top: '15'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '55%'],
          data: this.recordCharts,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  created(){
    this.$store.commit('fetchRecords')
  }

  get recordList(){
    return this.$store.state.recordList
  }

  get recordCharts(){
    const type =this.recordList.filter((item: {type: string})=>item.type === this.type)
    if(type.length === 0){
      return [{name: '暂无数据',value: 0}]
    }
    const newList =JSON.parse(JSON.stringify(type))
    type  X = {name: string; value: number }[]
    const x: X = []
    for(let i=0;i<newList.length;i++){
      const current = newList[i]
      const index = x.map(r=>r.name)
      if(x.map(r=>r.name).includes(current.category)){
        x[index.indexOf(current.category)].value +=current.amount

      }else{
        x.push({name:current.category ,value:newList[i].amount })

      }
    }
    return x
  }

  get rank(){
    console.log(this.recordCharts);
  return this.recordCharts.sort((a,b)=>b.value-a.value)
  }

  selectType(value: string){
    const line = (this.$refs.line as HTMLElement)
    if (value === '-') {
      line.style.transform = 'translateX(100%)';
      this.type = '-'
    } else {
      line.style.transform = 'translateX(0)';
      this.type = '+'
    }
  }



}
</script>

<style scoped lang="scss">

@import "~@/assets/style/helper.scss";

.statistics{
  ::v-deep .layout-content{
    height: calc(100vh - 45px) ;
    display: flex;
    flex-direction:column ;
    justify-content: start;

    .header{
      display: flex;
      align-items: center;
      justify-content: center;
      background: $color-type-background;
      height: 50px;
      border-bottom: 1px solid #dedede;
      > ul {
        height: 65%;
        display: flex;
        width: 136px;
        justify-content: space-around;
        align-items: center;
        background: #ededed;
        border-radius: 8px;
        position: relative;
        > li {
          z-index: 2;
          cursor: pointer;
        }
        > .line {
          position: absolute;
          left: 2px;
          top:2px;
          width: 66px;
          height: 90%;
          background: #ffffff;
          border-radius: 7px;
          transition: all .3s;
          z-index: 1;
          transform: translateX(100%);
          box-shadow: 1px 1px 4px -3px;
        }
      }
    }
    .rank{
      overflow: auto;

      .title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #a4a4a4;
      }
      >li{
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0 10px;
        border-bottom: 1px solid #f7f7f7;
        position: relative;
        .icon {
          margin: 10px 10px;
          padding: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          color: white;
          background: $color-highlight;
        }
        .value{
          position: absolute;
          right: 10px;
        }
      }
    }
    .no-data{
      text-align: center;
      width: 100%;
      color: #a4a4a4;
    }
  }
}
</style>