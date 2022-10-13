export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Todos {
  todos: Todo[];
}

export interface TableColumnInformation {
  key: string;
  value: string;
  width?: number;
}
