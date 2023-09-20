<template>
  <div class="flex flex-col gap-6 border-solid border-primary border-[1px] rounded-xl px-3 py-5">
    <div class="flex justify-between items-start">
      <p class="text-2xl font-semibold">{{ project.name }}</p>
      <a :href="'https://github.com/buczekmatthias/' + project.name" target="_blank" rel="noopener noreferrer">Code</a>
    </div>
    <p class="text-subtext text-sm">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <p class="text-sm px-4 py-2 rounded-lg bg-light" v-for="stack in project.stack" :key="stack">{{ stack }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: ["project"],
};
</script>
