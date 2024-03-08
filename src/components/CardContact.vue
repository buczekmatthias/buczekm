<template>
  <CardComponent header="Contact" classes="xl:col-span-3" slotClasses="flex flex-col gap-8 xl:grid xl:grid-cols-2">
    <div class="flex flex-col gap-6">
      <p class="text-3xl">Thank you</p>
      <p class="text text-sm">Thanks for visiting. I hope you enjoyed your stay.</p>
      <p class="text text-sm -mt-4">If you are in need of my help, feel free to reach me out</p>
    </div>
    <div class="grid grid-cols-2 gap-8 justify-items-start xl:gap-2">
      <a class="cursor-pointer col-span-full flex items-center gap-3 lg:col-start-1 lg:col-end-3 xl:col-auto" @click.prevent="copyToast('buczekmatthias@gmail.com', 'E-mail')">
        <img src="../assets/icons/gmail.svg" alt="Gmail icon" class="h-5" />
        <p>buczekmatthias@gmail.com</p>
      </a>
      <a href="https://github.com/buczekmatthias" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 xl:col-start-1">
        <img src="../assets/icons/github.svg" alt="Github" class="h-5" />
        <p>buczekmatthias</p>
      </a>
      <a class="cursor-pointer flex items-center gap-3" @click.prevent="copyToast('_.hazy', 'Discord')">
        <img src="../assets/icons/discord.svg" alt="Discord icon" class="h-5" />
        <p>_.hazy</p>
      </a>
    </div>
    <div class="flex flex-col items-center gap-6 xl:flex-row xl:justify-between xl:col-span-full border-t border-solid border-t-primary pt-6">
      <p class="text-center">Portfolio <a href="https://github.com/buczekmatthias/buczekm" target="_blank">source code</a> is public on github</p>
      <p>All rights reserved · {{ year }}</p>
    </div>
  </CardComponent>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
import { onMounted, ref } from "vue";

import CardComponent from "./CardComponent.vue";

const $toast = useToast();

const copyToast = (content, type) => {
  navigator.clipboard.writeText(content);
  let toast = $toast.success(`${type} copied to clipboard`, { position: "bottom" });

  setTimeout(() => {
    toast.dismiss();
  }, 3500);
};

const year = ref(null);

onMounted(() => {
  const now = new Date();
  year.value = now.getFullYear();
});
</script>
