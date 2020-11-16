const localStorageName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data =  JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.data
  },
  save(){
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data))
  },
  create(record: RecordItem[]){
    const record2 = this.clone(record)
    record2.created = new Date();
    this.data.push(record2)
    this.save()
  }
};

export default recordListModel;