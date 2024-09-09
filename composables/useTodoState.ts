// composables/useTodoState.ts
import { reactive } from 'vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const state = reactive({
  todos: [] as Todo[],
  nextId: 1,
});

export function useTodoState() {
  function addTodo(text: string) {
    state.todos.push({ id: state.nextId++, text, completed: false });
  }

  function toggleTodo(id: number) {
    const todo = state.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  function removeTodo(id: number) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  }

  return {
    todos: state.todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
