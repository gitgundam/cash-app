const localStorageName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data =  JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data
  },
  save(){
    return window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  clone(data: RecordItem[] | RecordItem){
    JSON.parse(JSON.stringify(data))
  }
};

export default recordListModel;