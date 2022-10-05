export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Todos {
  todos: Todo[];
}
