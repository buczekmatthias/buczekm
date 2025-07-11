<script setup lang="ts">
import { getEntries, getRemainingItems, type StackItem } from "@/data/Stack";

import { Icon } from "@iconify/vue";
import { onBeforeMount, ref } from "vue";

const stack = ref<{ [key: string]: StackItem }>({
  Frontend: {},
  Backend: {},
  Tools: {},
});
const stackRemaining = ref<{ [key: string]: number }>({
  Frontend: 0,
  Backend: 0,
  Tools: 0,
});

onBeforeMount((): void => {
  Object.keys(stack.value).forEach((k: string) => {
    stack.value[k] = getEntries(k);
    stackRemaining.value[k] = getRemainingItems(k);
  });
});

const updateStack = (group: string): void => {
  stack.value[group] = getEntries(group, true);
  stackRemaining.value[group] = 0;
};
</script>

<template>
  <div class="section gap-4 grid lg:grid-cols-3">
    <p class="col-span-full section-header">Tools & technologies</p>
    <div
      class="flex flex-col gap-4"
      v-for="[group, items] in Object.entries(stack)"
      :key="group"
    >
      <p>{{ group }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
        <div
          class="flex items-center gap-3 bg-card p-3 rounded-md hover:bg-card-foreground/10 duration-150 text-sm"
          v-for="[item, icon] in Object.entries(items)"
          :key="item"
        >
          <Icon
            :icon="icon"
            class="size-5"
          />

          <p>{{ item }}</p>
        </div>
      </div>
      <p
        v-if="stackRemaining[group] > 0"
        class="cursor-pointer text-sky-500 text-sm self-start -mt-2"
        @click="updateStack(group)"
      >
        +{{ stackRemaining[group] }} more
      </p>
    </div>
  </div>
</template>
