<template>
  <div>
    <Layout>
      <Header classPrefix="label">
      </Header>
      <ul>
        <li v-for="(group,key,index) in result" :key="index">
          <h3>{{key}}</h3>
          <ol>
            <li v-for="item in group" :key="item.id" @click="toEdit(item)">{{item.id}}</li>
          </ol>
        </li>
      </ul>

      <div class="creatTag-wrapper">
        <button class="creatTag" @click="createTag">新建标签</button>
      </div>
      <Nav/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,} from 'vue-property-decorator';

@Component
export default class Labels extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const hash = {}
    for(let i =0;i<this.recordList.length;i++){
      const [date,time] = this.recordList[i].createdAt.split('T')
      console.log(date);
      hash[date] = hash[date] || []
      console.log(hash[date]);
      hash[date].push(this.recordList[i])
    }
    console.log(hash);
    return hash
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
  }

  createTag() {
    console.log(this.recordList);
    // const name  =  window.prompt('你好')
    //  if(name){
    //    this.$store.commit('createTags',name)
    //  }
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
.label {
  height: 20vh;
  width: 100vw;
}
</style>