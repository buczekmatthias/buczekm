<template>
  <div class="container">
    <p class="header">Stack</p>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" v-for="category in stack" :key="category.name">
      <p class="text-lg font-medium col-span-full">{{ category.name }}</p>
      <div class="flex flex-col gap-8 items-center border-primary border-[1px] border-solid rounded-lg p-6" v-for="item in category.items" :key="item.name">
        <img class="h-10" :src="getIcon(item.icon)" :alt="item.name + ' icon'" />
        <p class="text-sm">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import stackJSON from "@/data/stack.json";
export default {
  name: "StackComponent",
  data() {
    return {
      stack: stackJSON,
    };
  },
  methods: {
    getIcon(name) {
      return require(`@/assets/icons/${name}`);
    },
  },
};
</script>
