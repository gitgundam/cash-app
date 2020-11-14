<template>
  <div>
    <Layout class-prefix="layout-content">
      <Types
          :value.sync="record.type"></Types>
      <Tags :tag-data.sync="tags"
            @update:value="onUpdateTags"></Tags>
      <Notes @update="onUpdateNotes"></Notes>
      <NumberPad @update="onUpdateNumbers" @save="saveRecode"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';

const model = require('@/model').default;

@Component({
  components: {
    Tags, Notes, Types, NumberPad,
  }
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList = model.fetch();
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
    const record2 = model.clone(this.record);
    record2.created = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  recordListChang() {
    model.save(this.recordList);
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