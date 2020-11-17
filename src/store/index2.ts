import tagListModel from '@/modules/tagListModel';

const store = {
  // recordList: recordListModel.fetch(),
  // createRecord: (record: RecordItem) => {
  //   return recordListModel.create(record);
  // },
  // tagList: tagListModel.fetch(),
  // createTag: (name: string) => {
  //   const message = tagListModel.create(name);
  //   if (message === '失败') {
  //     window.alert('标签名重复');
  //   }
  // },        //增
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },          //删
  updateTag: (id: string, value: string) => {
    tagListModel.update(id, value);
  },
};

export default store