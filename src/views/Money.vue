<template>
  <div>
    <Layout class-prefix="layout-content">
      <Tags></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import Types from '@/components/money/Types.vue';
import NumberPad from '@/components/money/NumberPad.vue';

export default {
  name: "money",
  components:{
    Tags,Notes,Types,NumberPad,
  }
};
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