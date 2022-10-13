import { ref, reactive, watch, watchEffect } from "vue";
import axios from "axios";
import { Todo, Todos } from "../../models/todos";
import { TableColumnInformation } from "@/models/todos";

export default class TodoComponent {
  message = ref<string>("Welcome to TodoList Page");
  todoList = ref<Todo[]>([]);
  todoList2 = reactive<Todos>({ todos: [] });
  small = ref<boolean>(false);
  background = ref<boolean>(false);
  disabled = ref<boolean>(false);
  currentPage = ref<number>(1);
  pageSize = ref<number>(10);
  tableColumns = ref<TableColumnInformation[]>([
    { key: "id", value: "Id", width: 50 },
    { key: "userId", value: "User Id", width: 80 },
    { key: "title", value: "Title", width: 150 },
    { key: "body", value: "Body" },
  ]);
  message2 = ref<Array<string>>([]);

  getPostList = async () => {
    await axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/posts")
      .then((todos) => {
        this.todoList.value = todos.data;
        this.todoList2.todos = todos.data;
      });
  };

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

  messageChange = (): void => {
    this.message2.value = ["Message Change2"];
    this.small.value
      ? (this.message.value = "Welcome to TodoList Page")
      : (this.message.value = "Message Change");

    this.small.value
      ? (this.url.value = "https://yesno.wtf/api")
      : (this.url.value = "https://yesno.wtf/api2");
    this.small.value = !this.small.value;
  };
  x = ref<string>("");
  watchMessage = watch(this.message, (newX: string, oldX: string): void => {
    console.log("NewX: ", newX, " OldX: ", oldX);
  });

  question = ref("");
  answer = ref("Questions usually contain a question mark. ;-)");

  // watch works directly on a ref
  watchMessage2 = watch(
    () => this.message.value + " Deneme",
    async (newQuestion, oldQuestion) => {
      console.log("123: ", newQuestion);

      if (newQuestion.indexOf("?") > -1) {
        this.message.value = "Thinking...";
        try {
          const res = await fetch("https://yesno.wtf/api");
          this.message.value = (await res.json()).forced;
          console.log("ANSWER: ", this.message.value);
        } catch (error) {
          this.answer.value = "Error! Could not reach the API. " + error;
        }
      }
    }
  );
  watchMessag3 = watch(
    () => "Merhaba",
    (newData) => {
      console.log("newData: ", newData);
    }
  );
  watchMessageArray = watch(
    [() => this.message.value, () => this.x.value],
    ([newMessage, newX], [oldMessage, oldX]) => {
      console.log("New Message: ", newMessage, "Old Message: ", oldMessage);
      console.log("New X: ", newX, "Old X: ", oldX);
    },
    { deep: true }
  );

  url = ref<string>("https://yesno.wtf/api");
  data2 = ref<string>("");

  watchEffectExample = watchEffect(async () => {
    const response = await fetch(this.url.value);
    console.log("asd", (await response.json()).forced);

    if ((await response.json()).forced) {
      this.data2.value = (await response.json()).forced;
    } else {
      this.data2.value = "Not exist";
    }

    console.log("------>", this.data2.value);
  });
}
export const todo = new TodoComponent();
