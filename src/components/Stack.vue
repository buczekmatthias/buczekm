<script setup lang="ts">
import { baseStack } from "@/data/Stack";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";

const stack = baseStack();
</script>

<template>
  <div class="section flex flex-wrap">
    <TooltipProvider
      v-for="item in stack"
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
</template>
