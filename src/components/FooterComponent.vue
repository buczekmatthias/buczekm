<template>
  <div class="mt-auto border-t-[1px] border-t-primary border-solid py-4 text-center">
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
