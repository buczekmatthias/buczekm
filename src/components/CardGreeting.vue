<template>
  <CardComponent class="items-center justify-center">
    <p class="text-4xl">Hello, there!</p>
  </CardComponent>
  <CardComponent class="items-center justify-center" slotClasses="flex gap-4 flex-row">
    <img src="../assets/astronaut.png" alt="Astronaut" class="h-20" />
    <div class="flex flex-col justify-center gap-1">
      <p class="text-2xl">Matthias Buczek</p>
      <p class="font-extralight text-sm text-subtext">Web developer</p>
    </div>
  </CardComponent>
</template>

<script setup>
import CardComponent from "./CardComponent.vue";
</script>
