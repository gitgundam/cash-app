<template>
  <div class="labels">
    <Layout class-prefix="layout-content">
      <Header classPrefix="header">
        <div class="money">
          <span>¥{{income}}</span>
          <span>收入</span>
        </div>
        <div class="split"></div>
        <div class="money">
          <span>¥{{expense}}</span>
          <span>支出</span>
        </div>

      </Header>
      <ul class="record">
        <li class="null" v-if="recordList[0] === undefined">
          <Icon name="null" ></Icon>
          <span>还没有账单,快去记账吧</span>
        </li>
        <li v-for="(group,index) in groupedList" :key="index">
          <div class="title">
            <span>{{ group.title }}</span>
            <div class="total">
              <span class="earn">收入:¥ {{ group.totalEarn }}</span>
              <span class="pay">支出:¥ {{ group.totalPay }}</span>
            </div>
          </div>
          <ol class="content">
            <li v-for="item in group.items" :key="item.id" @click="toEdit(item)">
              <Icon :name="item.category" :class="{'earn':item.type === '+' }"></Icon>
              <span>{{ item.category }}</span>
              <span class="amount">{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ul>

      <Nav/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,} from 'vue-property-decorator';

@Component
export default class Labels extends Vue {
  get expense(){
    return this.recordList.filter((r: { type: string})=>r.type === '-').reduce((sum: any, item: { amount: any })=>sum+item.amount,0)
  }

  get income(){
    return this.recordList.filter((r: { type: string})=>r.type === '+').reduce((sum: any, item: { amount: any })=>sum+item.amount,0)
  }

  get money() {
    const a = [];
    const b = [];
    for (let i = 0; i < this.recordList.length; i++) {
      const type = this.recordList[i].type;
      const amount = this.recordList[i].amount;
      if (type === '-') {
        a.push(amount);
      } else {
        b.push(amount);
      }
    }
    let pay = 0;
    let earn = 0;
    if (a.length > 0) {
      pay = a.reduce((a, b) => a + b);
    }
    if (b.length > 0) {
      earn = b.reduce((a, b) => a + b);
    }

    return `支出:¥ ${pay} | 收入:¥ ${earn}`;
  }

  get recordList() {
    return this.$store.state.recordList;
  }

  get groupedList() {
    const {recordList} = this
    type Result = [{title: string ;items: RecordItem[];totalPay?: number;totalEarn?: number}]
    if (recordList.length === 0){
      return []
    }
    const newRecordList = JSON.parse(JSON.stringify(recordList))
    const newList = newRecordList.sort((a: { createdAt: string}, b: { createdAt: string})=>Date.parse(b.createdAt) - Date.parse(a.createdAt))
    if(newList.length === 0){return []}
    const result: Result = [{title:newList[0].createdAt.split('T')[0],items:[newList[0]] }]
    for(let i =1;i<newList.length;i++){
      const current = newList[i]
      const last = result[result.length-1]
      if(current.createdAt.split('T')[0] === last.title.split('T')[0]){
        last.items.push(current)
      }else{
        result.push({title: current.createdAt.split('T')[0],items:[newList[i]]})
      }
    }
    for (let i = 0;i< result.length;i++){
      result[i].totalPay = result[i].items.filter(item=>item.type === '-').reduce((sum,item)=>sum+item.amount,0)
      result[i].totalEarn = result[i].items.filter(item=>item.type === '+').reduce((sum,item)=>sum+item.amount,0)
    }
    return result
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
  }

  toEdit(item: any) {
    this.$router.push({
      name: 'edit',
      params: {
        id: item.id
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.labels {
  ::v-deep .layout-content{
    display: flex;
    flex-direction: column;
    height: calc(100% - 45px - 20vh);
    margin-top: 20vh;
     .header {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 20vh;
       background: #5dcdbb;
       display: flex;
       justify-content: space-around;
       align-items: flex-end;
       >.money{
         padding: 20px 0;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         color: #fefffe;
         flex: 1;
       }
       .split{
         border: 1px solid #fefffe;
         height: 40px;
         width: 1px;
         margin-bottom: 20px;
       }
    }
  .record {
    overflow: auto;
    align-items: center;
    .null{
      color: #a4a4a4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 30vh;
      .icon{
        width: 100px;
        height: 100px;
      }
    }
    > li {
      .title{
        background: #f7f8f8;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        color: #a4a4a4;
        > span {
          padding: 5px;
        }
        .total{
          display: flex;
          align-items: center;
          >span{
            padding: 0 8px;
          }
        }
      }
      .content {
        &:last-child{
        }
        > li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 10px;
          border-bottom: 1px solid #dedede;
          position: relative;
          &:last-child{
            border: none;
          }

          .icon {
            margin: 10px 5px;
            padding: 5px;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            color: white;
            background: $color-highlight;
            &.earn{
              background: #72c2ab;

            }
          }
          .amount{
            position: absolute;
            right: 10px;

          }
        }
      ;
      }
    }
  }

  }
}
</style>
