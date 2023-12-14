<template>
  <CardComponent header="Stack" classes="md:col-span-full">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7" v-for="category in stack" :key="category.name">
      <p class="text-lg font-medium col-span-full text-center">{{ category.name }}</p>
      <StackItem v-for="item in category.items" :key="item.name" :item="item" classes="flex-col gap-8 p-6" />
    </div>
  </CardComponent>
</template>

<script setup>
import CardComponent from "./CardComponent.vue";
import StackItem from "./StackItem.vue";
import stackJSON from "@/data/stack.json";

const stack = stackJSON;
</script>
