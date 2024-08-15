export interface TodoData {
  id: number;
  title: string;
  content: string;
  status: string;
}

export type Article = Pick<TodoData, "id">;