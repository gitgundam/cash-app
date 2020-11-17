<template>
  <div>
    <Layout class-prefix="layout-content">
      <Types
          :value.sync="record.type"></Types>
      <Output :count="count"></Output>
      <Tags :tag-data.sync="$store.state.tagList"
            @update:value="onUpdateTags"></Tags>
      <FormItem @update:value="onUpdateNotes"
             fileName="备注"
             placeholder="在这里输入备注"></FormItem>
      <NumberPad @update="onUpdateNumbers" @save="saveRecode" @numberChanged="countChange" :count="count"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Output from '@/components/money/Output.vue';


@Component({
  components: {
    Tags, FormItem, Types, NumberPad,Output
  },
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    tagList(){
      return this.$store.state.tagList
    }

  }

})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '',
    amount: 0
  };
  count = '0'
  countChange(value: string){
    this.count = value
  }
  created(){
    this.$store.commit('fetchRecords')
    this.$store.commit('fetchTags')
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;

  }

  onUpdateNumbers(value: string) {
    console.log(value);
    this.record.amount = parseFloat(value) || 0;
  }

  saveRecode() {
    this.$store.commit('createRecords',this.record)
  }
  stop(){
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",function(e){e.preventDefault()},false)//禁止页面滑动
  }
}


</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style scoped lang="scss">
@import "~@/assets/style/reset.scss";

</style>