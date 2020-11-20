<template>
  <div class="edit">
    <Layout>
      <Header classPrefix="header">
        <Icon name="返回" class="back" @click.native="back"></Icon>
        <Icon :name="record.category" class="category"></Icon>
      </Header>
      <ul class="content">
        <li><span>类型</span>{{record.category}}</li>
        <li><span>金额</span>{{record.amount}}</li>
        <li><span>日期</span>{{record.createdAt | setTime(record.createdAt)}}</li>
        <li><span>备注</span>
          <label>
            <input type="text" placeholder="请输入备注" class="notes">
          </label>

        </li>

      </ul>

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
    },
  filters:{
    setTime(time: string){
      console.log(time)
      return time.split('T')[0]
    }
  }
  }
)
export default class Edit extends Vue {
  created() {
    this.$store.commit('fetchRecords')
  }
  get tag(){
    return this.$store.state.tag
  }

  get record(){
    const id =this.$route.params.id
    return this.$store.state.recordList.filter((item: { id: string}) => item.id = id)[0]
  }

  back(){
    this.$router.replace('/')}


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
@import "~@/assets/style/helper.scss";


  .edit{
    ::v-deep .header{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
        .back{
          width: 32px;
          height: 32px;
          position: absolute;
          left: 10px;
        }
      .category{
        margin: 5px 5px;
        padding: 5px;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        color: white;
        background: $color-highlight;
      }
    }
    .content{
      margin: 10px;
      >li{
        display: flex;
        justify-self: center;
        align-items: center;
        height: 46px;
        border-bottom: 1px solid #dedede;
        >span{
          margin-right: 20px;
        }
        .notes{
          height: 46px;
          flex-grow: 1;
          border: none;
          background: transparent;
        }
      }
    }
  }
</style>