<template>
  <div class="flex flex-col gap-4 min-h-[calc(100vh-1rem-64px)] pt-8">
    <img src="../assets/astronaut.png" class="hidden lg:block" />
    <div class="flex flex-col gap-6">
      <p class="text-6xl font-semibold">Hi, I'm Matt</p>
      <p class="text-xl leading-8 flex flex-col gap-8">
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
