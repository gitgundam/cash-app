<template>
  <div class="Edit">
    <Layout>
      <FormItem  @update:value="updateName"
                fileName="标签名" placeholder="在这里编辑标签名"/>
      <button @click="remove">删除</button>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';

@Component({
    components: {
      FormItem
    }
  }
)
export default class Edit extends Vue {
  created() {
    this.$store.commit('fetchTags')
  }
  get tag(){
    return this.$store.state.tag
  }
  updateName(name: string) {
    const id = this.$route.params.id;
    this.$store.state.tag.name = name
    this.$store.commit('updateTags', { id, name })
  }

  remove() {
    const id = this.$route.params.id;
    if (window.confirm('是否确认删除')) {
      this.$store.commit('remove',id)
      this.$router.back();
    }
  }

}


</script>

<style scoped lang="scss">

</style>