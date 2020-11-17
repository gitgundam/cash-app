<template>
  <div>
    <Layout>
      <ol>
        <li v-for="tag in tags" :key="tag.id" @click="toEdit(tag)">{{tag.name}}</li>
      </ol>
      <div class="creatTag-wrapper">
        <button class="creatTag" @click="createTag">新建标签</button>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';


@Component
export default class Labels extends Vue{
  tags = store.tagList
  created(){
    this.$store.commit('fetchRecords')
    this.$store.commit('fetchTags')
  }
  createTag(){
   const name  =  window.prompt('你好')
    if(name){
      store.createTag(name)
    }
  }
  toEdit(tag: any ){
    this.$router.push({
      name:'edit',
      params:{
        id:tag.id
      }

    })
  }
}

</script>

<style scoped lang="scss">

</style>