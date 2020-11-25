<template>
  <div class="edit">
    <Layout>
      <Header classPrefix="header">
        <Icon name="返回" class="back" @click.native="back"></Icon>
        <Icon :name="record.category" class="category"></Icon>
        <Icon name="删除" @click.native="remove" class="remove"></Icon>
      </Header>
      <ul class="content">
        <li><span>类型</span>{{ record.category}}</li>
        <li><span>金额</span>{{ record.amount }}</li>
        <li><span>日期</span>{{ record.createdAt | setTime(record.createdAt) }}</li>
        <li><span>备注</span>{{record.notes|| "无备注"}}</li>
      </ul>
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
    },
    filters: {
      setTime(time: string) {
        return time.split('T')[0];
      }
    }
  }
)
export default class EditLabel extends Vue {
  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    return this.$store.state.recordList;
  }

  get record() {
    const id = parseInt(this.$route.params.id);
    return this.recordList.find(((item: { id: number }) => item.id === id));
  }

  back() {
    this.$router.replace('/');
  }

  remove() {
    const id = parseInt(this.$route.params.id);
    if (window.confirm('是否确认删除')) {
      this.$store.commit('remove', id);
      this.$router.replace('/');
    }
  }

}


</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";


.edit {
  ::v-deep .header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #ededed;
    box-shadow: 1px 0 1px 1px #dedede;
  ;
    .back {
      width: 32px;
      height: 32px;
      position: absolute;
      left: 15px;
    }
    .category {
      margin: 5px 5px;
      padding: 5px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      color: white;
      background: $color-highlight;
    }
    .remove{
      width: 32px;
      height: 32px;
      position: absolute;
      right:15px;
    }
  }

  .content {
    margin: 10px;

    > li {
      display: flex;
      justify-self: center;
      align-items: center;
      height: 46px;
      border-bottom: 1px solid #dedede;

      > span {
        margin-right: 20px;
      }
    }
  }
}
</style>