const localStorageName = 'tagList';

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => string;
  save: () => void;
  update: (id: string, name: string) => void;
  remove: (id: string) => void;
}
const tagListModel: TagListModel = {
  data: [],//[{id: ,name  },{ }]
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    if (names.includes(name)) {
      return '失败';
    }
    this.data.push({id: name, name: name});
    this.save();
    return '成功';
  },
  update(id, name) {
    const tag = this.data.filter(item => item.id === id)[0];
    const names = this.data.map(item => item.name);
    if (name === tag.name) {
      return;
    } else if (names.includes(name)) {
      alert(1);
    } else {
      if (name.length === 0) {
        return;
      } else if (name.trim().length === 0) {
        alert('标签名不能为空');
      }
      tag.name = name.trim();
      this.save();
    }
  },
  remove(id) {
    const index = this.data.indexOf(this.data.filter(item => item.id === id)[0]);
    this.data.splice(index, 1);
    console.log(this.data);
    this.save();
  },

};

export default tagListModel;