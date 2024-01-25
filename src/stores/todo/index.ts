import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { TodoType } from './type'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoType[]>([])
  const idCount = ref(1)

  const addTodo = (text: string) => {
    todos.value.push({
      id: idCount.value++,
      text: text,
      isCompleted: false
    })
  }

  const todosFilteredCompleted = computed(() => {
    return todos.value.filter((todo) => {
      return todo.isCompleted
    })
  })
  const todosFilteredIncomplete = computed(() => {
    return todos.value.filter((todo) => {
      return !todo.isCompleted
    })
  })

  const searchTodoById = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo === undefined) throw new Error('Not Found Todo')

    return todo
  }
  const toggleIsCompletedTodo = (id: number) => {
    const todo = searchTodoById(id)
    todo.isCompleted = !todo.isCompleted
  }

  const todoCount = computed(() => todos.value.length)
  const completedTodoCount = computed(() => todosFilteredCompleted.value.length)
  const incompleteTodoCount = computed(() => todosFilteredIncomplete.value.length)

  return {
    todos,
    addTodo,
    todosFilteredCompleted,
    todosFilteredIncomplete,
    toggleIsCompletedTodo,
    todoCount,
    incompleteTodoCount,
    completedTodoCount
  }
})
