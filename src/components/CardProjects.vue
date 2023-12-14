<template>
  <CardComponent header="Projects" classes="xl:col-start-3 xl:row-start-1 xl:row-end-3">
    <button v-for="(project, i) in projects" :key="project" class="w-full text-center text-white bg-dark rounded-md py-4 duration-300 hover:bg-slate-700" @click="openProject(i)">
      {{ project }}
    </button>
    <a href="https://github.com/buczekmatthias?tab=repositories" target="_blank" rel="noopener noreferrer" class="text-center bg-link-primary bg-opacity-10 rounded-md py-4 duration-300 hover:bg-opacity-30">Show all</a>
  </CardComponent>
  <ProjectComponent v-if="projectId" @closeProject="closeProject" :i="projectId" @scroll.prevent @wheel.prevent @touchmove.prevent />
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";
import ProjectComponent from "./ProjectComponent.vue";

const projects = ref(["buczekm", "BlogApp", "Restaurant", "Gallery"]);
const projectId = ref(null);

const openProject = (i) => {
  projectId.value = i + 1;
};

const closeProject = () => {
  projectId.value = null;
};
</script>
