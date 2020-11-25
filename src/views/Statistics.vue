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
      <ul class="rank">
        <li v-for="item in rank" :key="item.name">
          <Icon :name="item.name"></Icon>
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
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
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '收支记录',
          type: 'pie',
          radius: ['20%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 15,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.recordCharts
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
    if(this.recordList.length === 0){
      alert('暂无数据')
    }
    const type =this.recordList.filter((item: {type: string})=>item.type === this.type)
    const newList =JSON.parse(JSON.stringify(type))
    const x = [{name: newList[0].category ,value:newList[0].amount }]
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
    border: 1px solid red;
    height: calc(100vh - 45px) ;
    display: flex;
    flex-direction:column ;

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
      border: 1px solid red;
      overflow: auto;

    }
  }
}
</style>