<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { useTodoStore } from '@/stores/todo'

const task = ref('')

const todoStore = useTodoStore()
const { todoCount, completedTodoCount, incompleteTodoCount } = storeToRefs(todoStore)
const { addTodo } = todoStore
const addNewTodo = () => {
  addTodo(task.value)
  task.value = ''
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          <div>
            {{ todoCount }}
          </div>
          全タスク
        </RouterLink>
        <RouterLink to="/incompleteTodos">
          <div>
            {{ incompleteTodoCount }}
          </div>
          未完了タスク
        </RouterLink>
        <RouterLink to="/completedTodos">
          <div>
            {{ completedTodoCount }}
          </div>
          完了済みタスク
        </RouterLink>
      </nav>

      <div class="input_wrap">
        <div>
          <label>
            <input type="text" placeholder="タスク" v-model="task" />
          </label>
        </div>
        <button @click="addNewTodo" :disabled="!task">追加</button>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.card__wrap {
  display: grid;
  row-gap: 20px;
}
.input_wrap {
  margin-top: 20px;
  position: relative;
  width: 100%;
  display: flex;

  input[type='text'] {
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    padding: 0.3em;
    transition: 0.3s;
    letter-spacing: 1px;
    color: #ababab;
    border: none;
    border-bottom: 2px solid #1b2538;
    background: transparent;

    &:focus {
      border-bottom: 2px solid hsl(160, 100%, 37%);
      outline: none;
    }
  }

  button {
    margin-left: 20px;
    padding: 4px 14px;
    background: hsl(160, 100%, 37%);
    cursor: pointer;
    border-radius: 6px;
    border: none;

    &:disabled {
      background: #ababab;
      cursor: default;
    }
  }
}
</style>
