<template>
  <p>{{ message }}</p>
  <br />
  <button @click="getPostList()">Get Todo List</button>

  <table class="table table-striped" v-if="todoList.length">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">User Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoList2.todos" :key="todo.id">
        <th scope="row">{{ todo.id }}</th>
        <td>{{ todo.userId }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.body }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
import { Todo, TodoObject } from "../models/todos";
const message = ref<string>("Welcome to TodoList Page");

let todoList = ref<Todo[]>([]);
let todoList2 = reactive<TodoObject>({ todos: [] });

const getPostList = async () => {
  axios.create({});
  await axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/posts", {
      headers: { "X-Campaign-ID": 12 },
    })
    .then((todos) => {
      todoList.value = todos.data;
      todoList2.todos = todos.data;
    });
};
</script>
