<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Item } from '@/types';
import ListItem from '@/components/ListItem.vue';
import Jokes from '@/components/Jokes.vue';

const LSItems = JSON.parse(localStorage.getItem('items') || 'null') || [];
const items = ref<Item[]>(LSItems);

watchEffect(() => {
  localStorage.setItem('items', JSON.stringify(items.value));
});

function addJoke(data: { joke: string; id: string }) {
  if (items.value.find((i) => i.id === data.id)) return;
  items.value.push({
    id: data.id,
    text: data.joke,
  });
}

const handleRemove = (id: string) => {
  items.value = items.value.filter((t) => t.id !== id);
};
</script>

<template>
  <Jokes @saveJoke="addJoke" />

  <ListItem
    v-for="item in items"
    :item="item"
    :on-remove="() => handleRemove(item.id)"
  >
  </ListItem>
</template>
