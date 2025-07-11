<script setup lang="ts">
import { projects } from "@/data/Projects";

import Project from "@/components/Project.vue";
</script>

<template>
  <div class="section section-content">
    <h4 class="section-header mb-3">Projects</h4>
    <Project
      :project="project"
      :index="index"
      v-for="(project, index) in projects"
      :key="index"
    />
  </div>
</template>
