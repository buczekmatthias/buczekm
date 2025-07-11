<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { computed } from "vue";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@vueuse/core";
import type { ProjectType } from "@/data/Projects";
import { Icon } from "@iconify/vue";

interface ProcessedImage {
  href: string;
  src: string;
  alt: string;
}

const props = defineProps<{
  project: ProjectType;
  index: number;
}>();

const isMediumOrBiggerDevice = useMediaQuery("(min-width: 768px)");

const getProjectIndexNumber = computed((): string => (props.index + 1).toString().padStart(2, "0") + ".");

const getSheetSide = computed((): "right" | "bottom" => (isMediumOrBiggerDevice.value ? "right" : "bottom"));

const getProjectFolder = computed((): string => props.project.name.toLowerCase().replace(/\s+/g, "-"));

const processedImages = computed((): ProcessedImage[] =>
  props.project.images.map((img: string) => {
    const url = new URL(`../assets/projects/${getProjectFolder.value}/${img}`, import.meta.url).href;

    return <ProcessedImage>{
      href: url,
      src: url,
      alt: img,
    };
  })
);
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button class="cursor-pointer flex items-center gap-2 group py-4">
        <span class="orbitron">{{ getProjectIndexNumber }}</span> {{ project.name }}
        <Icon
          icon="octicon:chevron-right-16"
          class="ml-auto group-hover:mr-2 duration-150"
        />
      </Button>
    </SheetTrigger>
    <SheetContent
      :side="getSheetSide"
      class="pb-5 grid grid-cols-1"
      :class="{
        'grid-rows-[auto_auto_minmax(30vh,75vh)_auto] !max-w-md': isMediumOrBiggerDevice,
        'grid-rows-[repeat(4,auto)]': !isMediumOrBiggerDevice,
      }"
    >
      <SheetHeader>
        <SheetTitle>{{ project.name }}</SheetTitle>
        <SheetDescription>{{ project.description }}</SheetDescription>
      </SheetHeader>

      <div class="section flex flex-wrap gap-4 !px-4">
        <TooltipProvider
          v-for="[item, icon] in Object.entries(project.stack)"
          :key="item"
        >
          <Tooltip>
            <TooltipTrigger as-child>
              <Button class="!p-0 h-fit bg-transparent text-lg lg:text-2xl hover:bg-transparent">
                <Icon
                  :icon="icon"
                  class="size-5"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ item }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <ScrollArea
        class="w-full"
        :class="{
          'max-h-[35vh]': !isMediumOrBiggerDevice,
        }"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="(image, i) in processedImages"
            :key="i"
            :href="image.href"
            target="_blank"
            class="group overflow-hidden block"
          >
            <img
              v-lazy="image.src"
              :alt="image.alt"
              class="h-72 w-full object-cover duration-150 group-hover:scale-110"
            />
          </a>
        </div>
      </ScrollArea>

      <div
        class="grid grid-cols-1 gap-2 px-3 mt-auto"
        :class="{
          'md:grid-cols-2': project.links.website,
        }"
      >
        <Button :as-child="true">
          <a
            :href="project.links.github"
            target="_blank"
          >
            <Icon icon="simple-icons:github" />
            Repository
          </a>
        </Button>
        <Button
          variant="secondary"
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
    </SheetContent>
  </Sheet>
</template>
