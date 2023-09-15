<template>
  <Hero />
  <Projects />
  <Contact />
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  name: "App",
  components: {
    Hero: HeroSection,
    Projects: ProjectsSection,
    Contact: ContactSection,
  },
};
</script>
