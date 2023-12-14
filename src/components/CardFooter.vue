<template>
  <CardComponent header="buczekm.dev" classes="md:col-span-full xl:col-start-3 xl:col-end-3 xl:items-center">
    <p class="w-full text-center my-auto">Source code of portfolio is public on <a href="https://github.com/buczekmatthias/buczekm" target="_blank" class="">github</a></p>
    <p class="my-auto w-full text-center">All rights reserved · {{ year }}</p>
  </CardComponent>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CardComponent from "./CardComponent.vue";

const year = ref(null);

onMounted(() => {
  const now = new Date();
  year.value = now.getFullYear();
});
</script>
