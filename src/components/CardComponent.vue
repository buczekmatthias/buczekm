<template>
  <div class="card" :class="classes">
    <p class="header" v-if="header">{{ header }}</p>
    <div class="flex gap-4" :class="isRow ? '' : 'flex-col'">
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
  isRow: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
