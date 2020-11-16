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
  },
  create(record: RecordItem){
    const record2: any = recordListModel.clone(record);
    record2.created = new Date();
    this.data.push(record2);
  }
};

export default recordListModel;