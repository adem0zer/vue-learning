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
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"
        ><el-table
          style="width: 100%"
          :data="todo.showData()"
          :row-class-name="todo.tableRowClassName"
        >
          <el-table-column prop="id" label="Id" width="50" />
          <el-table-column prop="userId" label="User Id" width="80" />
          <el-table-column prop="title" label="Title" width="150" />
          <el-table-column prop="body" label="Body" /> </el-table
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
import AboutView from "@/views/AboutView.vue";
</script>
<style lang="css">
@import "./todo.component.scss";
</style>
