type RecordItem = {
  id: number;
  category: string;
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
