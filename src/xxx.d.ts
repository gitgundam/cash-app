type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
}
type Tag = {
  id: string;
  name: string;
}

interface Window{
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => void;
  updateTag: (id: string,value: string) => void;

  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;

}
