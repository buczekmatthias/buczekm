<template>
  <div class="flex items-center border-primary border-[1px] border-solid rounded-lg" :class="classes">
    <img :class="isRow ? 'h-4' : 'h-10 xl:h-8'" :src="getIcon(item.icon)" :alt="item.name + ' icon'" />
    <p class="text-sm">{{ item.name }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  item: Object,
  classes: String,
  isRow: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const getIcon = (name) => {
  return require(`@/assets/icons/${name}`);
};
</script>
