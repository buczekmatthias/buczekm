<template>
  <div class="container">
    <p class="header">About me</p>
    <p class="text text-sm">I’m a {{ age }} years old passionate self-taught web developer from <a href="https://www.google.com/maps/search/%C5%81uk%C3%B3w%2C%20PL" target="_blank">Łuków, PL</a>. I love to play around with code and learn new things.</p>
    <p class="text text-sm">I work mainly with Laravel. I’m familiar with Symfony and Vanilla PHP as well.</p>
    <p class="text text-sm">Currently I’m also trying to get myself a bit deeper into front-end. I’ve decided to go explore path with Vue as my framework.</p>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
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
