<template>
  <div>
    <Layout class-prefix="layout-content">
      <Types
          :value.sync="record.type"></Types>
      <Tags :tag-data.sync="tags"
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



@Component({
  components: {
    Tags, FormItem, Types, NumberPad,
  }
})
export default class Money extends Vue {
  tags = window.tagList
  recordList = window.recordList
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '',
    amount: 0
  };

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
    window.createRecord(this.record)
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