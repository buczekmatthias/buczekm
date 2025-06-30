<script setup lang="ts">
import { getProjects } from "@/data/Projects";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Icon } from "@iconify/vue";

const projects = getProjects();
</script>

<template>
  <div class="section section-content">
    <h4 class="section-header">Projects</h4>
    <Carousel class="w-full">
      <CarouselContent class="mb-2">
        <CarouselItem
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="px-1.5 py-3 flex flex-col gap-2 rounded-md">
            <p class="text-lg">{{ project.name }}</p>
            <p>{{ project.description }}</p>
            <div class="section flex flex-wrap !p-0 my-2">
              <TooltipProvider
                v-for="item in project.stack"
                :key="item.name"
              >
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button class="p-0 h-fit bg-transparent text-lg lg:text-2xl hover:bg-transparent">
                      <Icon
                        :icon="item.icon"
                        class="size-5"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ item.name }}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div
              class="grid grid-cols-1 gap-2"
              :class="{
                'md:grid-cols-2': project.links.website,
              }"
            >
              <Button
                :as-child="true"
                variant="secondary"
              >
                <a
                  :href="project.links.github"
                  target="_blank"
                >
                  <Icon icon="devicon:github" />
                  Repository
                </a>
              </Button>
              <Button
                :as-child="true"
                v-if="project.links.website"
              >
                <a
                  :href="project.links.website"
                  target="_blank"
                >
                  <Icon icon="octicon:globe-24" />
                  Live
                </a>
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="mr-4" />
      <CarouselNext />
    </Carousel>
  </div>
</template>
