<template>
  <CardComponent header="Stack" classes="md:col-span-full">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      <StackItem v-for="item in stack.items" :key="item.name" :item="item" classes="flex-col gap-8 p-6" />
    </div>
  </CardComponent>
</template>

<script setup>
import stackJSON from "@/data/stack.json";

import CardComponent from "./CardComponent.vue";
import StackItem from "./StackItem.vue";

const stack = stackJSON;
</script>
