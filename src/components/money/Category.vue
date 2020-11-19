<template>
  <div class="category">
    <ul v-if="this.type === '-' ">
      <li v-for="(item,index) in payEvent" :key="item" @click="isActive(index)">
        <Icon :name = "item" :class="{active: index === iconCurrent}"></Icon>
        <span>{{item}}</span>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item,index) in earnEvent" :key="item" @click="isActive(index)">
        <Icon :name = "item" :class="{active: index === iconCurrent}"></Icon>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Category extends Vue {
  @Prop() readonly payEvent!: string[]
  @Prop() readonly earnEvent!: string[]
  @Prop() readonly type!: string
  @Prop() readonly iconCurrent!: number

  current = 0
  isActive(index: number){
    this.$emit('update:iconCurrent',index)
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
         user-select: none;
         -webkit-tap-highlight-color:transparent;
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