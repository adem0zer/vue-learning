import { ref, reactive } from "vue";
import axios from "axios";
import { Todo, Todos } from "../../models/todos";

export default class TodoComponent {
  message = ref<string>("Welcome to TodoList Page");
  todoList = ref<Todo[]>([]);
  todoList2 = reactive<Todos>({ todos: [] });

  getPostList = async () => {
    await axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/posts")
      .then((todos) => {
        this.todoList.value = todos.data;
        this.todoList2.todos = todos.data;
      });
  };
  pageSize = ref<number>(10);
  showData = () => {
    return this.todoList2.todos.slice(
      this.pageSize.value * this.currentPage.value - this.pageSize.value,
      this.pageSize.value * this.currentPage.value
    );
  };

  tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
    if (rowIndex % 2 === 0) {
      return "warning-row";
    }
    return "success-row";
  };

  handleSizeChange = (val: number): void => {
    this.pageSize.value = val;
  };
  handleCurrentChange = (val: number): void => {
    this.currentPage.value = val;
  };

  small = ref<boolean>(false);
  background = ref(false);
  disabled = ref(false);

  currentPage = ref(1);

  messageChange = (): void => {
    this.small.value
      ? (this.message.value = "Welcome to TodoList Page")
      : (this.message.value = "Message Change");
    this.small.value = !this.small.value;
  };
}
export const todo = new TodoComponent();
