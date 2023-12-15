<template>
  <CardComponent header="Contact" classes="xl:col-span-3" slotClasses="flex flex-col gap-8 xl:grid xl:grid-cols-2">
    <div class="flex flex-col gap-6">
      <p class="text-3xl">Thank you</p>
      <p class="text text-sm">Thanks for visiting. I hope you enjoyed your stay.</p>
      <p class="text text-sm -mt-4">If you are in need of my help, feel free to reach me out</p>
    </div>
    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <a class="cursor-pointer flex items-center gap-3" @click="copyToast" data-copy="_.hazy">
        <img src="../assets/icons/discord.svg" alt="Discord icon" class="h-5" />
        <p>_.hazy</p>
      </a>
      <a href="https://github.com/buczekmatthias" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
        <img src="../assets/icons/github.svg" alt="Github" class="h-5" />
        <p>buczekmatthias</p>
      </a>
      <a class="cursor-pointer flex items-center gap-3" @click="copyToast" data-copy="buczekmatthias@gmail.com">
        <img src="../assets/icons/gmail.svg" alt="Gmail icon" class="h-5" />
        <p>buczekmatthias@gmail.com</p>
      </a>
    </div>
    <div class="flex flex-col gap-6 xl:flex-row xl:justify-between xl:col-span-full border-t border-solid border-t-primary pt-6">
      <p>Source code of portfolio is public on <a href="https://github.com/buczekmatthias/buczekm" target="_blank">github</a></p>
      <p>All rights reserved · {{ year }}</p>
    </div>
  </CardComponent>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
import CardComponent from "./CardComponent.vue";
import { onMounted, ref } from "vue";

const $toast = useToast();

const copyToast = (event) => {
  event.preventDefault();

  navigator.clipboard.writeText(event.target.parentNode.dataset.copy);
  let toast = $toast.success("Copied to clipboard", { position: "bottom" });

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
