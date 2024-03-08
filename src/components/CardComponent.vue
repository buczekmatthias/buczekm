<template>
  <div class="card" :class="[header ? 'grid-rows-[auto_1fr]' : 'grid-rows-1', classes]">
    <p class="header" v-if="header">{{ header }}</p>
    <div :class="slotClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  header: {
    type: String,
    required: false,
    validator: (v) => typeof v === "string" || v === null,
  },
  classes: {
    type: String,
    required: false,
    validator: (v) => typeof v === "string" || v === null,
  },
  slotClasses: {
    type: String,
    default: "flex flex-col gap-4 my-auto",
  },
});
</script>
