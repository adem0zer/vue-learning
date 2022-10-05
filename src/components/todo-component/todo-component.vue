<template>
  <p>{{ todo.message }}</p>
  <br />
  <about-view></about-view>

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
    <el-table
      style="width: 100%"
      :data="todo.showData()"
      :row-class-name="todo.tableRowClassName"
    >
      <el-table-column prop="id" label="Id" width="180" />
      <el-table-column prop="userId" label="User Id" width="180" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="body" label="Body" />
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :total="todo.todoList2.todos.length"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="todo.pageSize.value"
      @size-change="todo.handleSizeChange"
      @current-change="todo.handleCurrentChange"
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
import AboutView from "@/views/AboutView.vue";
</script>
<style lang="css">
@import "./todo.component.css";
</style>
