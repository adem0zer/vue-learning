export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TodoObject {
  todos: Todo[];
}
