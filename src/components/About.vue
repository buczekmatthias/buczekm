<script setup lang="ts">
import { ref } from "vue";

import { Mail } from "lucide-vue-next";
import { Icon } from "@iconify/vue";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const isComponent = (icon: any): boolean => typeof icon !== "string";

const profiles = ref<
  {
    icon: any;
    content: string;
  }[]
>([
  {
    icon: Mail,
    content: "buczekmatthias@gmail.com",
  },
  {
    icon: "mdi:github",
    content: "buczekmatthias",
  },
  {
    icon: "ic:baseline-discord",
    content: "_.hazy",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-6 section">
    <div class="section-content">
      <h4 class="section-header">About me</h4>
      <p class="flex flex-col gap-3 leading-[160%] max-lg:text-sm">
        <span>Welcome to my portfolio! I'm a passionate software developer with a strong focus on back-end development. Born in 1999, I've grown up in the digital age, which has fueled my enthusiasm for technology and innovation.</span>
        <span>Although I am at the beginning of my professional journey, my dedication to creating efficient and robust applications is unwavering. I am constantly seeking to expand my knowledge and skills, and I am open to exploring new technologies and opportunities in the tech world.</span>
        <span>When I'm not coding, you can find me immersed in various hobbies such as playing video games, watching anime, movies, and series, or reading manga. I also have a keen appreciation for good food, which I believe is essential for a balanced life.</span>
        <span>I am excited about the prospect of contributing to meaningful projects and collaborating with like-minded professionals.</span>
      </p>
    </div>
    <div class="flex max-md:flex-col gap-3 md:gap-5">
      <template
        v-for="item in profiles"
        :key="item.content"
      >
        <p class="[&_svg:not([class*='size-'])]:size-4 flex items-center gap-1.5">
          <template v-if="isComponent(item.icon)">
            <component :is="item.icon"></component>
          </template>
          <template v-else>
            <Icon :icon="item.icon" />
          </template>
          {{ item.content }}
        </p>
      </template>
    </div>
  </div>
</template>
