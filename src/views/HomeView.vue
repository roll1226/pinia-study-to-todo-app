<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue'

const task = ref('')

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const { addTodo, toggleIsCompletedTodo } = todoStore

const addNewTodo = () => {
  addTodo(task.value)
}
</script>

<template>
  <main>
    <div>
      <label>
        タスク
        <input type="text" v-model="task" />
      </label>
      <button @click="addNewTodo">追加</button>
    </div>
    <div v-for="todo in todos" :key="todo.id" @click="toggleIsCompletedTodo(todo.id)">
      {{ todo.text }}
    </div>
  </main>
</template>
