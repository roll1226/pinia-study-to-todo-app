import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LabelType, TodoType } from './type'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoType[]>([])
  const idCount = ref(0)

  const addTodo = (label: LabelType, text: string) => {
    todos.value.push({
      id: idCount.value++,
      label: label,
      text: text,
      isCompleted: false
    })
  }

  const todosFilteredCompleted = () => {
    return todos.value.filter((todo) => {
      return todo.isCompleted
    })
  }

  const todosFilteredIncomplete = () => {
    return todos.value.filter((todo) => {
      return !todo.isCompleted
    })
  }

  const SearchTodoById = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo === undefined) throw new Error('Not Found Todo')

    return todo
  }
  const changeTodoLabel = (id: number, label: LabelType) => {
    const todo = SearchTodoById(id)
    todo.label = label
  }

  return { todos, addTodo, todosFilteredCompleted, todosFilteredIncomplete, changeTodoLabel }
})
