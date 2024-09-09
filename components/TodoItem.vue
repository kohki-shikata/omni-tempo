<template>
  <li :class="{ completed: todo.completed }">
    <input type="checkbox" v-model="todo.completed" @change="toggle">
    <span>{{ todo.text }}</span>
    <button @click="remove">Remove</button>
  </li>
</template>

<script setup lang="ts">
import type { Todo } from '@/composables/useTodoState';

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'toggle'): void;
  (e: 'remove'): void;
}>();

function toggle() {
  emit('toggle');
}

function remove() {
  emit('remove');
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
