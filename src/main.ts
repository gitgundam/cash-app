import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/modules/tagListModel';
import recordListModel from '@/modules/recordListModel';

Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

//record数据库
window.recordList = recordListModel.fetch()
window.createRecord =(record: RecordItem) => recordListModel.create(record)

//tag数据库
window.tagList = tagListModel.fetch()             //查
window.createTag = (name: string)=>{
    const message = tagListModel.create(name)
    if(message === '失败'){
      window.alert('标签名重复')
    }
}         //增
window.removeTag = (id: string)=>{
    return tagListModel.remove(id);
}           //删
window.updateTag = (id, value) => {
  tagListModel.update(id, value)
} //改

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
