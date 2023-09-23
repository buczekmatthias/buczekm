<template>
  <div class="absolute top-2 h-[calc(100%-1rem)] w-0.5 bg-line -z-10"></div>
  <Greet />
  <About />
  <Projects />
  <Stack />
  <Contact />
  <Footer />
</template>

<script>
import GreetComponent from "@/components/GreetComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import StackComponent from "@/components/StackComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    Greet: GreetComponent,
    About: AboutComponent,
    Projects: ProjectsComponent,
    Stack: StackComponent,
    Contact: ContactComponent,
    Footer: FooterComponent,
  },
};
</script>
