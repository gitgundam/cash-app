<template>
  <div>
    <Layout class-prefix="layout-content">
      <Types :value.sync="record.type"
             :count = "this.count"
             @save="saveRecode"></Types>
      <Output :count="count"></Output>
      <Category :payEvent = "payEvent"
                :earnEvent="earnEvent"
                :type = 'record.type'
                :icon-current.sync="iconIndex"></Category>
      <Tags :tag-data.sync="$store.state.tagList"
            @update:value="onUpdateTags"></Tags>
      <NumberPad @update="onUpdateNumbers"
                 @save="saveRecode"
                 @numberChanged="countChange"
                 :count="count"
                 @ValueChanged = "onUpdateNotes"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Output from '@/components/money/Output.vue';
import Category from '@/components/money/Category.vue';

@Component({
  components: {
    Tags,Category, FormItem, Types, NumberPad, Output,
  }
})
export default class Money extends Vue {
  record: RecordItem = {
    category: '吃喝',
    tags: [],//
    notes: '',
    type: '-',
    amount: 0
  };
  payEvent: string[] =  ['吃喝',"交通","买菜","孩子","服饰鞋包","化妆护肤","日用品","红包","话费","娱乐","医疗"]
  earnEvent: string[] = ['工资','投资','奖金','兼职','红包']
  count = '0';
  iconIndex = 0
  @Watch('record.type')
  typeChanged(){
    this.iconIndex = 0
  }
  @Watch('iconIndex')
  categoryChanged(){
    if (this.record.type === '-'){
      this.record.category = this.payEvent[this.iconIndex]
    }else if(this.record.type === '+'){
      this.record.category = this.earnEvent[this.iconIndex]
    }
  }



  countChange(value: string) {
    this.count = value;
    this.record.amount = parseFloat(value)
    console.log(this.record.amount);
  }

  created() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateNumbers(value: string) {
    this.record.amount = parseFloat(value) || 0;
  }

  saveRecode() {
    if(this.count === '0'){
      alert('请输入金额')
      return
    }
    this.$store.commit('createRecords', this.record);
    this.$router.replace('/')
  }
}


</script>


<style lang="scss">
.layout-content {
  height: calc(100vh - 330px);
}
</style>
<style scoped lang="scss">
@import "~@/assets/style/reset.scss";

</style>