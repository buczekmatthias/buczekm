<template>
  <div class="flex flex-col gap-8 py-2">
    <div class="flex justify-between items-center">
      <p class="flex flex-col gap-3">
        <span class="text-4xl font-semibold">Projects</span>
        <span class="text-subtext text-sm lg:hidden">Some of my projects</span>
      </p>
      <a href="https://github.com/buczekmatthias?tab=repositories" target="_blank" rel="noopener noreferrer">View all</a>
    </div>
    <div class="flex flex-col gap-3">
      <Project v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </div>
</template>

<script>
import projectsJSON from "../data/projects.json";
import ProjectComponent from "../components/ProjectComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    Project: ProjectComponent,
  },
  data() {
    return {
      projects: projectsJSON,
    };
  },
};
</script>
