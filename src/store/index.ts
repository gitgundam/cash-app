import Vue from 'vue';
import Vuex from 'vuex';
import creatId from '@/lib/creatId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    tag: {} as Tag,
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecords(state, record) {
      const record2: RecordItem = JSON.parse(JSON.stringify(record));
      record2.createdAt = new Date().toISOString();
      record2.id = creatId()
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTags: (state, name: string) => {
      const names = state.tagList.map(item => item.name);
      if (names.includes(name)) {
        window.alert('标签名重复');
        return;
      }
      state.tagList.push({id: name, name: name});
      store.commit('saveTags');
      return '成功';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTags(state, obj: { id: string; name: string }) {
      const {id, name} = obj;
      const tag = state.tagList.filter(item => item.id === id)[0];//通过当前页面的id,找出本地储存的tag对象
      const names = state.tagList.map(item => item.name);//遍历出所有name
      console.log(id,name);
      if (name === tag.name) {
        return;
      } else if (names.includes(name)) {
        alert('标签名已存在');
        return;
      } else {
        if (name.length === 0) {
          return;
        } else if (name.trim().length === 0) {
          alert('标签名不能为空');
        }
      }
      state.tagList.filter(item => item.id === id)[0].name = name.trim();
      store.commit('saveTags');
    },
    remove(state,id) {
      const index = state.tagList.indexOf(state.tagList.filter(item => item.id === id)[0]);
      state.tagList.splice(index, 1);
      store.commit('saveTags')
    },
    editLabels(state,id){
      const record = state.recordList.filter(item => item.id === id)[0];
      console.log(record);
    }
  },
  actions: {},
  modules: {}
});

export default store;