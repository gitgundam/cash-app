const localStorageName = 'recordList';

const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[] ){
    return window.localStorage.setItem(localStorageName, JSON.stringify(data));
  },
  clone(data: RecordItem[] | RecordItem){
    JSON.parse(JSON.stringify(data))
  }
};

export default model;