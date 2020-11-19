<template>
  <div>
    <Layout>
      <Header classPrefix="label"></Header>
      <ul>
        <li v-for="item in recordList" :key="item.id" @click="toEdit(item)">
          {{ item.id }}
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

  created() {
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

<style scoped lang="scss">

</style>