import Vue from 'vue';
import Vuex from 'vuex';
import creatId from '@/lib/creatId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
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
    remove(state,id) {
      const index = state.recordList.indexOf(state.recordList.filter(item => item.id === id)[0]);
      state.recordList.splice(index, 1);
      store.commit('saveRecords')
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