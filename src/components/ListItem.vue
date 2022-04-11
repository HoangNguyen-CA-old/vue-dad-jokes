<script setup lang="ts">
import type { Item } from '@/types';
interface Props {
  item: Item;
  onRemove: () => void;
}
defineProps<Props>();
</script>

<template>
  <div :class="$style.container">
    <p :class="$style.text">{{ item.text }}</p>
    <button @click="() => onRemove()">X</button>
  </div>
</template>

<style module>
.text {
  font-size: 1rem;
}

.container {
  display: flex;
}
</style>
