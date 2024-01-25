<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todosFilteredIncomplete } = storeToRefs(todoStore)
const { toggleIsCompletedTodo } = todoStore
</script>

<template>
  <div>
    <div
      v-for="todo in todosFilteredIncomplete"
      :key="todo.id"
      @click="toggleIsCompletedTodo(todo.id)"
    >
      {{ todo.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
