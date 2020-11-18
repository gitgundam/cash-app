<template>
  <div class="category">
    <ul>
      <li v-for="(item,index) in payEvent" :key="item" @click="isActive(index)">
        <Icon :name = "item" :class="{active: index === current}"></Icon>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Category extends Vue {
  payEvent = ['吃喝',"交通","买菜","孩子","服饰鞋包","化妆护肤","日用品","红包","话费","娱乐","医疗"]
  earnEvent =[]
  current = 0
  isActive(index){
    this.current = index
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

 .category{
   height: calc(100% - 111px);
   overflow: scroll;
   >ul{
     padding: 10px;
     display: flex;
     justify-content: flex-start;
     flex-wrap: wrap;
     >li{
       width: 20%;
       height: 20%;
       display: flex;
       flex-direction: column;
       align-items: center;
       font-size: 13px;
       margin-bottom: 10px;
       >.icon{
         cursor: pointer;
         margin: 10px 0 ;
         padding: 5px;
         border-radius: 50%;
         width: 42px;
         height: 42px;
         color: $font-color-normal;
         background: $background-color-lowlight;
         &.active{
           color:white;
           background: $color-highlight;
         }
       }
     }
   }
 }
</style>