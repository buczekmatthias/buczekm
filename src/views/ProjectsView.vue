<template>
  <div class="container w-full !gap-10">
    <svg @click="$router.back()" xmlns="http://www.w3.org/2000/svg" class="h-8 stroke-[#FAFAFA] cursor-pointer self-start" viewBox="0 0 12 12" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h12v12H0z" fill="none" />
      <path d="M2 10v-8h8" />
    </svg>
    <div class="header flex flex-row items-center justify-between">
      <p class="!text-5xl">{{ project.name }}</p>
      <a :href="`https://github.com/buczekmatthias/${project.name}`" target="_blank" class="text-base font-normal">Source code</a>
    </div>
    <p class="text-lg text">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <p class="px-5 py-3 rounded-lg bg-dark" v-for="item in project.stack" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import projectsJSON from "../data/projects.json";

export default {
  name: "ProjectsView",
  data() {
    return {
      project: {},
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => this.getProject()
    );
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      this.project = projectsJSON.filter((entry) => {
        return entry.name === this.$route.params.name;
      })[0];
    },
  },
};
</script>
