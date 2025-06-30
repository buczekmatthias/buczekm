<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { ArrowLeft } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button, type ButtonVariants } from "@/components/ui/button";
import { useCarousel } from "./useCarousel";

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    } & WithClassAsProps
  >(),
  {
    variant: "outline",
    size: "icon",
  }
);

const { canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :disabled="!canScrollPrev"
    :class="cn('size-8 rounded-full', props.class)"
    :variant="variant"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
