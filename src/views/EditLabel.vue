<template>
  <div class="Edit">
    <Layout>
      <FormItem :value="tag.name"
                @update:value="updateName"
                fileName="标签名" placeholder="在这里编辑标签名"/>
      <button @click="remove">删除</button>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import store from '@/store/index2';

@Component({
    components: {
      FormItem
    }
  }
)
export default class Edit extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    const tags = store.tagList;
    this.tag = tags.filter(t => t.id === id)[0];
  }

  updateName(value: string) {
    const id = this.$route.params.id;
    store.updateTag(id, value);
  }

  remove() {
    const id = this.$route.params.id;
    if (window.confirm('是否确认删除')) {
      store.removeTag(id);
      this.$router.back();
    }
  }

}


</script>

<style scoped lang="scss">

</style>