<template>
  <div class="flex flex-col gap-8 pt-2 pb-4 lg:h-screen lg:overflow-auto lg:w-full lg:py-12">
    <p class="text-4xl font-semibold">Stack</p>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" v-for="category in stack" :key="category.name">
      <p class="text-2xl font-medium col-span-full">{{ category.name }}</p>
      <div class="flex flex-col gap-8 items-center border-primary border-[1px] border-solid rounded-lg px-6 py-8" v-for="item in category.items" :key="item.name">
        <img class="h-12" :src="getIcon(item.icon)" :alt="item.name + ' icon'" />
        <p class="">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import stackJSON from "../data/stack.json";

export default {
  name: "StackView",
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
