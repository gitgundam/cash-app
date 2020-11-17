import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecords(state, record) {
      const record2: RecordItem = JSON.parse(JSON.stringify(record));
      record2.createdAt = new Date();
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
      store.commit('saveTags')
      return '成功';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    }
  },
  actions: {},
  modules: {}
});

export default store;