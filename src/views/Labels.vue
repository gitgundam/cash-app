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
import tagList from '@/modules/tagListModel';
tagList.fetch()
@Component
export default class Labels extends Vue{
  tags = tagList.data
  createTag(){
   const name  =  window.prompt('你好')
    if(name){
        const message = tagList.create(name)
      if(message === '失败'){
          window.alert('标签名重复')
      }
    }
  }
  toEdit(tag){
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