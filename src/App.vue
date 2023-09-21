<template>
  <Navbar ref="navbar" />
  <Sidebar />
  <router-view />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    Navbar: NavbarComponent,
    Sidebar: SidebarComponent,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1024 && this.$refs.navbar.$refs.menu.classList.contains("opened")) {
        this.$refs.navbar.$refs.menu.classList.remove("opened");
      }
    },
  },
};
</script>
