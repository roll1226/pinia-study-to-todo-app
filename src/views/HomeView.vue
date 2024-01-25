<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
</script>

<template>
  <main>
    <div class="card__wrap">
      <TaskItem
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :is-completed="todo.isCompleted"
      />
    </div>
  </main>
</template>

<style lang="scss" scope>
.card__wrap {
  display: grid;
  row-gap: 20px;
}
</style>
