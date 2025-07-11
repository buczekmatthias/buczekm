<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import Availability from "@/components/Availability.vue";
import About from "@/components/About.vue";
import Stack from "@/components/Stack.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <div class="flex flex-col gap-6 pb-3">
    <Banner />
    <Availability />
    <About />
    <Stack />
    <Projects />
  </div>
</template>
