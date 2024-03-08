<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-zinc-950 bg-opacity-70 flex items-center justify-center" id="project">
    <div class="max-w-3xl w-full h-screen bg-dark flex flex-col py-4 [&>*]:px-4 lg:grid lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto_1fr_auto] overflow-auto">
      <div class="grid grid-cols-[1fr_5fr_1fr] border-b-2 border-b-primary border-solid pb-4 lg:col-span-full">
        <svg @click="$emit('closeProject')" class="h-6 fill-[#FAFAFA] cursor-pointer self-center" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
        <p class="text-3xl justify-self-center">{{ project.name }}</p>
      </div>
      <div class="my-4 flex flex-wrap gap-2 lg:col-start-2 lg:flex-col lg:flex-nowrap">
        <StackItem v-for="item in project.stack" :key="item.name" :item="item" classes="gap-4 px-4 py-3" :isRow="true" />
      </div>
      <p class="text lg:col-start-1 lg:row-start-2 lg:my-4">{{ project.description }}</p>
      <a class="mt-auto text-center border-link-primary bg-dark border-solid border rounded-md py-4 mx-4 duration-300 hover:-translate-y-2 lg:col-span-full" :href="`https://github.com/buczekmatthias/${project.name}`" target="_blank" rel="noopener noreferrer">Open repositiory</a>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

import projectsJSON from "@/data/projects.json";

import StackItem from "./StackItem.vue";

defineEmits(["closeProject"]);

const props = defineProps({
  i: {
    type: Number,
    required: false,
  },
});

const projects = projectsJSON;
const project = projects[props.i - 1];
</script>
