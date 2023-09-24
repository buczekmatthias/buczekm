<template>
  <div class="fixed -bottom-16 left-1/2 -translate-x-1/2 rounded-lg bg-dark px-8 py-4 duration-150" ref="toast">
    <p>Copied to clipboard</p>
  </div>
  <div class="container">
    <p class="header">Contact</p>
    <div class="flex flex-col gap-8">
      <p class="text-3xl">Thank you</p>
      <p class="text text-sm">Thanks for visiting. I hope you enjoyed your stay.</p>
      <p class="text text-sm -mt-4">If I am what you are looking for, feel free to reach me out</p>
      <div class="flex flex-col gap-6 sm:flex-row sm:gap-12">
        <div class="flex items-center gap-4">
          <img src="../assets/icons/gmail.svg" alt="Gmail icon" class="h-5" />
          <a class="cursor-pointer" @click="showToast">buczekmatthias@gmail.com</a>
        </div>
        <div class="flex items-center gap-4">
          <img src="../assets/icons/discord.svg" alt="Discord icon" class="h-5" />
          <a class="cursor-pointer" @click="showToast">_.hazy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  methods: {
    showToast(event) {
      event.preventDefault();

      navigator.clipboard.writeText(event.target.textContent);
      this.$refs.toast.classList.replace("-bottom-16", "bottom-8");

      setTimeout(() => {
        this.$refs.toast.classList.replace("bottom-8", "-bottom-16");
      }, 2000);
    },
  },
};
</script>
