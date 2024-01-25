<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'
import TaskItem from '@/components/TaskItem.vue'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
</script>

<template>
  <div class="card__wrap">
    <TaskItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :text="todo.text"
      :is-completed="todo.isCompleted"
    />
  </div>
</template>

<style lang="scss" scope></style>
