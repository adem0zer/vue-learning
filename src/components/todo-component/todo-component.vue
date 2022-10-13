<template>
  <p>{{ todo.message }}</p>
  <br />
  <p>Message is: {{ todo.message.value }}</p>
  <input v-model.number="todo.message.value" placeholder="edit me" />
  <p>X is: {{ todo.x.value }}</p>
  <input v-model.number="todo.x.value" placeholder="edit me" />

  <br />

  <el-button @click="todo.messageChange" type="success" round
    >Message Change</el-button
  >

  <p></p>

  <el-row :gutter="20">
    <el-col :span="12" :offset="6"
      ><el-button
        @click="todo.getPostList()"
        type="success"
        round
        :span="12"
        :offset="6"
        >Get Todo List</el-button
      ></el-col
    >
  </el-row>
  <div v-if="todo.todoList2.todos.length">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"
        ><el-table
          style="width: 100%"
          :data="todo.showData()"
          :row-class-name="todo.tableRowClassName"
        >
          <el-table-column
            v-for="tableColumn in todo.tableColumns.value"
            :key="tableColumn.key"
            :prop="tableColumn.key"
            :label="tableColumn.value"
            :width="tableColumn.width"
          /> </el-table
      ></el-col>
    </el-row>
  </div>
  <div class="block pagination" v-if="todo.todoList2.todos.length">
    <el-pagination
      @size-change="todo.handleSizeChange"
      @current-change="todo.handleCurrentChange"
      :page-size="todo.pageSize.value"
      layout="total, sizes, prev, pager, next, jumper"
      :total="todo.todoList2.todos.length"
      :page-sizes="[5, 10, 20, 50]"
    />
  </div>
</template>

<script setup lang="ts">
import { todo } from "./todo-component";
import {
  ElCol,
  ElRow,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination,
} from "element-plus";

import { ref, watch } from "vue";
const question = ref<string>("");
const answer = ref<string>("Questions usually contain a question mark. ;-)");

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
      console.log("Answer: ", answer);
      console.log("oldQuestion: ", oldQuestion);
      console.log("newQuestion: ", newQuestion);
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
      console.log("Answer: ", answer);
    }
  }
});
</script>
<style lang="scss">
@import "./todo.component.scss";
</style>
