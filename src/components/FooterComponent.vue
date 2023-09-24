<template>
  <div class="container items-center">
    <p class="border-b-2 border-dashed border-b-primary pb-6 w-full text-center">Source code for this website is public on my <a href="https://github.com/buczekmatthias/buczekm" target="_blank" class="">github</a></p>
    <p>All rights reserved · {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      year: null,
    };
  },
  methods: {
    setYear() {
      const now = new Date();
      this.year = now.getFullYear();
    },
  },
  mounted() {
    this.setYear();
  },
};
</script>
