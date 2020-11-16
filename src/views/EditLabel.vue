<template>
  <div class="Edit">
    <Layout>
      <FormItem :value="tag.name"
                @update:value="updateName"
                fileName="标签名" placeholder="在这里编辑标签名"/>
      <button @click="removeTag">删除</button>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import tagListModel from '@/modules/tagListModel';

@Component({
    components: {
      FormItem
    }
  }
)
export default class Edit extends Vue {
  tag?: { id: string; name: string } = undefined;

  updateName(value: string) {
    const id = this.$route.params.id;
    tagListModel.update(id, value);
    console.log(value);
  }

  removeTag() {
    const id = this.$route.params.id;
    if(window.confirm('是否确认删除')){
      tagListModel.remove(id);
      this.$router.back()
    }

  }

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    this.tag = tags.filter(t => t.id === id)[0];
  }
}
</script>

<style scoped lang="scss">

</style>