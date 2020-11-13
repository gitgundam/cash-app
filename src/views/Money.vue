<template>
  <div>
    <Layout class-prefix="layout-content">
      <Tags :tag-data.sync="tags"
            @update:value="onUpdateTags"></Tags>
      <Notes @update="onUpdateNotes"></Notes>
      <Types
        :value.sync="record.type"></Types>
      <NumberPad @update="onUpdateNumbers"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}

@Component({
  components: {
    Tags, Notes, Types, NumberPad,
  }
})

export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {
    tags: [],
    notes: '',
    type: '',
    amount: 0
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value
  }

  onUpdateNotes(value: string) {
    this.record.notes = value

  }

  onUpdateNumbers(value: string) {
    this.record.amount = parseFloat(value)
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