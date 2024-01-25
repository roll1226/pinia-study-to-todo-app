<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'

defineProps<{
  id: number
  text: string
  isCompleted: boolean
}>()

const todoStore = useTodoStore()
const { toggleIsCompletedTodo } = todoStore
</script>

<template>
  <div class="card" :class="'card' + (isCompleted ? '__completed' : '__incomplete')">
    <div class="card--id">id: {{ id }}</div>
    <div class="card__body">
      <div class="card__body--text">{{ text }}</div>
      <button
        @click="toggleIsCompletedTodo(id)"
        class="card__body--button"
        :class="'card__body--button' + (isCompleted ? '__completed' : '__incomplete')"
      >
        <div v-if="isCompleted">完了済</div>
        <div v-else>完了</div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 12px;
  border-radius: 12px;

  &__completed {
    border: 1px solid hsl(160, 100%, 37%);
  }

  &__incomplete {
    border: 1px solid #ababab;
  }

  &--id {
    font-size: 1rem;
  }

  &__body {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 1rem;

    &--text {
      font-size: 2rem;
      font-weight: bold;
    }

    &--button {
      padding: 4px 14px;
      cursor: pointer;
      border-radius: 6px;
      border: none;

      &__completed {
        background: hsl(160, 100%, 37%);
      }
      &__incomplete {
        background: #ababab;
      }
    }
  }
}
</style>
