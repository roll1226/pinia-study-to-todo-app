<script lang="ts" setup>
import TaskItem from '@/components/TaskItem.vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { todosFilteredCompleted } = storeToRefs(todoStore)
</script>

<template>
  <div class="card__wrap">
    <TaskItem
      v-for="todo in todosFilteredCompleted"
      :key="todo.id"
      :id="todo.id"
      :text="todo.text"
      :is-completed="todo.isCompleted"
    />
  </div>
</template>

<style lang="scss" scoped></style>
