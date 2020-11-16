import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/modules/tagListModel';
import tagList from '@/modules/tagListModel';

Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList = tagListModel.fetch()
window.createTag = (name: string)=>{
    const message = tagList.create(name)
    if(message === '失败'){
      window.alert('标签名重复')
    }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
