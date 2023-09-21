<template>
  <div class="flex flex-col gap-8 pt-2 pb-4">
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-light px-8 py-4 opacity-0 duration-150" ref="toast">
      <p class="">Copied to clipboard</p>
    </div>
    <p class="text-4xl font-semibold">Contact</p>
    <div class="flex flex-col gap-4">
      <p class="text-3xl">Thanks</p>
      <p class="text-lg">Thanks for visiting. I hope you enjoyed your stay. The source code for this website is available on my <a href="https://github.com/buczekmatthias/buczekm" target="_blank" class="">github</a></p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-3xl">Contact</p>
      <p class="text-lg">Need to reach me? Feel free to send me message on my e-mail <span class="pseudo-link" @click="showToast">buczekmatthias@gmail.com</span></p>
      <p class="text-lg">You can also reach me on discord under name <span class="pseudo-link" @click="showToast">_.hazy</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  methods: {
    showToast(event) {
      navigator.clipboard.writeText(event.target.textContent);
      this.$refs.toast.classList.add("opacity-100");

      setTimeout(() => {
        this.$refs.toast.classList.remove("opacity-100");
      }, 3000);
    },
  },
};
</script>
