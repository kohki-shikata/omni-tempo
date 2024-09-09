<template>
  <form @submit.prevent="submitForm">
    <input v-model="text" placeholder="Add a new todo" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

const emit = defineEmits<{
  (e: 'addTodo', text: string): void;
}>();

function submitForm() {
  if (text.value.trim()) {
    emit('addTodo', text.value);
    text.value = '';
  }
}
</script>
