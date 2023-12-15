<template>
  <div class="card" :class="classes">
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
    default: "flex flex-col gap-4",
  },
});
</script>
