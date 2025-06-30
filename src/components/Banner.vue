<script setup lang="ts">
const getAvatarSrc = (): string => new URL("../assets/avatar.png", import.meta.url).href;
</script>

<template>
  <div class="flex flex-col h-64 relative -mb-6">
    <div class="absolute top-1/2 -translate-y-1/4 section grid grid-cols-[auto_1fr] gap-4 items-end">
      <div class="bg-slate-400 py-5 px-6 rounded-md w-fit">
        <img
          :src="getAvatarSrc()"
          alt="Avatar"
          class="h-16 md:h-20"
        />
      </div>
      <h2 class="font-bold text-4xl lg:text-5xl">Hi! I'm Matt</h2>
    </div>
    <div class="flex-[1.5] bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400"></div>
    <div class="flex-1 bg-transparent"></div>
  </div>
</template>
