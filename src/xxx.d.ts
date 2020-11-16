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
}
