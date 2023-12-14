<template>
  <CardComponent header="About" classes="md:col-span-full xl:col-start-1 xl:col-end-3">
    <p class="text text-sm">I’m a {{ age }} years old passionate self-taught web developer from Poland. I love to play around with code and learn new things.</p>
    <p class="text text-sm">I work mainly with Laravel. However I’m also familiar with Vanilla PHP and Symfony as well.</p>
    <p class="text text-sm">Currently I’m trying to get myself a bit deeper into front-end. I’ve decided to go explore path with Vue as my framework.</p>
  </CardComponent>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CardComponent from "./CardComponent.vue";

const age = ref(null);

onMounted(() => {
  const currentDate = new Date();
  const birthDate = new Date("1999-05-30");
  const timeDiff = currentDate.getTime() - birthDate.getTime();
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  age.value = Math.floor(totalDays / 365.25);
});
</script>
