<template>
  <div class="labels">
    <Layout>
      <Header classPrefix="header">
        <h3 class="money">{{ money }}</h3>
      </Header>
      <ul class="title">
        <li v-for="(group,key,index) in result" :key="index">
          <h5>{{ key }}</h5>
          <ol class="content">
            <li v-for="item in group" :key="item.id" @click="toEdit(item)">
              <Icon :name="item.category"></Icon>
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

  get result() {
    type hash = {date: any}
    const hash = {};
    for (let i = 0; i < this.recordList.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [date, time] = this.recordList[i].createdAt.split('T');
      hash[date] = hash[date] || [];
      hash[date].push(this.recordList[i]);
    }
    return hash;
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

<style lang="scss">
.header {
  display: flex;
  align-items: flex-end;
  justify-content: start;
  height: 10vh;
  width: 100vw;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.labels {
  .money {
    margin-bottom: 5px;
    margin-left: 10px;
    color: white;
    font-size: 25px;
  }

  .title {
    > li {
      > h5 {
        background: #f7f8f8;
        padding: 5px;
      }

      .content {
        > li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 10px;
          border-bottom: 1px solid #dedede;
          position: relative;

          .icon {
            margin: 10px 5px;
            padding: 5px;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            color: white;
            background: $color-highlight;
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
</style>
