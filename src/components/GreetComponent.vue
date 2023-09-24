<template>
  <div class="container items-center">
    <p class="text-4xl">Hello, there!</p>
  </div>
  <div class="container !flex-row items-center justify-center">
    <img src="../assets/astronaut.png" alt="Astronaut" class="h-20" />
    <div class="flex flex-col gap-1">
      <p class="text-2xl">Matthias Buczek</p>
      <p class="font-extralight text-sm text-subtext">Web developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreetComponent",
};
</script>
