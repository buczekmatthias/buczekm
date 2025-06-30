<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { ArrowRight } from "lucide-vue-next";
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

const { canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="cn('size-8 rounded-full', props.class)"
    :variant="variant"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
