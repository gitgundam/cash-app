const localStorageName = 'tagList';
type Tag ={
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => '失败' | '成功';
  save: () => void;
}
const tagListModel: TagListModel = {
  data:[],
  fetch() {
    this.data=  JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data
  },
  save( ){
     window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  create(name: string) {
    const names =  this.data.map(item => item.name)
    if (names.includes(name)){return '失败'}
    this.data.push({id:name,name:name})
    this.save()
    return '成功'

  }
};

export default tagListModel;