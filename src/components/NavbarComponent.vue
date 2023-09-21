<template>
  <nav class="sticky top-0 flex justify-between items-center z-20 flex-wrap h-16 bg-dark border-b-[1px] border-solid border-b-primary lg:hidden">
    <p class="text-md">Matthias Buczek</p>
    <div class="menu lg:hidden" ref="menu">
      <div class="middle"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  mounted() {
    this.$refs.menu.addEventListener("click", this.menuListener);
  },
  unmounted() {
    this.$refs.menu.removeEventListener("click", this.menuListener);
  },
  methods: {
    menuListener() {
      this.$refs.menu.classList.toggle("opened");
    },
  },
};
</script>
