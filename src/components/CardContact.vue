<template>
  <CardComponent header="Contact" classes="xl:col-span-2">
    <p class="text-3xl">Thank you</p>
    <p class="text text-sm">Thanks for visiting. I hope you enjoyed your stay.</p>
    <p class="text text-sm -mt-4">If you are in need of my help, feel free to reach me out</p>
    <div class="grid grid-cols-1 gap-8 xl:flex">
      <a class="cursor-pointer flex items-center gap-3" @click="copyToast" data-copy="buczekmatthias@gmail.com">
        <img src="../assets/icons/gmail.svg" alt="Gmail icon" class="h-5" />
        <p>buczekmatthias@gmail.com</p>
      </a>
      <a class="cursor-pointer flex items-center gap-3" @click="copyToast" data-copy="_.hazy">
        <img src="../assets/icons/discord.svg" alt="Discord icon" class="h-5" />
        <p>_.hazy</p>
      </a>
      <a href="https://github.com/buczekmatthias" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3">
        <img src="../assets/icons/github.svg" alt="Github" class="h-5" />
        <p>buczekmatthias</p>
      </a>
    </div>
  </CardComponent>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
import CardComponent from "./CardComponent.vue";

const $toast = useToast();

const copyToast = (event) => {
  event.preventDefault();

  navigator.clipboard.writeText(event.target.parentNode.dataset.copy);
  let toast = $toast.success("Copied to clipboard", { position: "bottom" });

  setTimeout(() => {
    toast.dismiss();
  }, 3500);
};
</script>
