<template>
  <div class="flex flex-col gap-4 min-h-[calc(100vh-1rem-64px)] pt-8 lg:items-start lg:h-screen lg:px-0 lg:gap-12 lg:pt-12 lg:max-w-4xl">
    <img src="../assets/astronaut.png" class="hidden lg:block h-40 lg:ml-6" />
    <div class="flex flex-col gap-6 lg:px-6">
      <p class="text-6xl font-semibold">Hi, I'm Matt</p>
      <p class="flex flex-col gap-8">
        <span>a {{ age }} years old passionate self-taught web dev that loves to play around with code and learning new things.</span>
        <span>I work mainly with Laravel, I’m also familiar with Symfony and Vanilla PHP.</span>
        <span>Currently I’m also trying to learn some front-end. I’ve decided to use Vue as my framework.</span>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HeroView",
  components: {
    Footer: FooterComponent,
  },
  data() {
    return {
      age: null,
    };
  },
  methods: {
    ageCalc() {
      const currentDate = new Date();
      const birthDate = new Date("1999-05-30");
      const timeDiff = currentDate.getTime() - birthDate.getTime();
      const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      this.age = Math.floor(totalDays / 365.25);
    },
  },
  mounted() {
    this.ageCalc();
  },
};
</script>
