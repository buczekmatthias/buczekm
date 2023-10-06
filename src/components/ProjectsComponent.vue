<template>
  <div class="container">
    <div class="header flex items-center justify-between">
      <p class="">Projects</p>
      <a href="https://github.com/buczekmatthias?tab=repositories" target="_blank" rel="noopener noreferrer" class="text-base font-normal">View all</a>
    </div>
    <div class="grid grid-cols-2">
      <router-link :to="`/projects/${project.name}`" v-for="project in projects" :key="project.name" class="flex">
        <div class="group relative w-full h-48">
          <div class="t-0 l-0 jusitfy-center absolute flex h-full w-full justify-center items-center duration-300 bg-dark group-hover:opacity-0" :class="[project.border, project.radius]">{{ project.emblem }}</div>
          <div class="h-full w-full flex items-center justify-center text-white" :class="[project.color, project.radius]">{{ project.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  data() {
    return {
      projects: [
        {
          name: "buczekm",
          emblem: "BM",
          color: "bg-[#710000]",
          radius: "rounded-tl-md",
          border: "border-solid border-r-primary border-r-[1px] border-b-primary border-b-[1px]",
        },
        {
          name: "BlogApp",
          emblem: "B",
          color: "bg-[#111D4A]",
          radius: "rounded-tr-md",
          border: "border-solid border-b-primary border-b-[1px]",
        },
        {
          name: "Restaurant",
          emblem: "R",
          color: "bg-[#645244]",
          radius: "rounded-br-md",
        },
        {
          name: "Gallery",
          emblem: "G",
          color: "bg-[#533745]",
          radius: "rounded-bl-md",
          border: "border-solid border-r-primary border-r-[1px]",
        },
      ],
    };
  },
};
</script>
