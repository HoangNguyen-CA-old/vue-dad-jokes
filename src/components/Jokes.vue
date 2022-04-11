<script setup lang="ts">
import { useFetch } from '@/composables/fetch';

const { data, loading, error, fetchData } = useFetch(
  'https://icanhazdadjoke.com/'
);

const emit = defineEmits(['saveJoke']);
</script>

<template>
  <button @click="fetchData">Random Joke</button>
  <button @click="emit('saveJoke', data)">Save Joke</button>
  <p v-if="loading">...</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-else>{{ data && data.joke }}</p>
</template>
