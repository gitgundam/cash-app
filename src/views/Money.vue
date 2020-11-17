<template>
  <div>
    <Layout class-prefix="layout-content">
      <Types
          :value.sync="record.type"></Types>
      <Tags :tag-data.sync="$store.state.tagList"
            @update:value="onUpdateTags"></Tags>
      <FormItem @update:value="onUpdateNotes"
             fileName="备注"
             placeholder="在这里输入备注"></FormItem>
      <NumberPad @update="onUpdateNumbers" @save="saveRecode"></NumberPad>
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
import store from '@/store/index2';



@Component({
  components: {
    Tags, FormItem, Types, NumberPad,
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
  tags = store.tagList
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '',
    amount: 0
  };
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
    this.record.amount = parseFloat(value) || 0;
  }

  saveRecode() {
    this.$store.commit('createRecords',this.record)
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