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
  data() {
    return {
      menu: null,
    };
  },
  mounted() {
    this.menu = this.$refs.navbar.$refs.menu;

    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1024 && this.menu.classList.contains("opened")) {
        this.menu.classList.remove("opened");
      }
    },
  },
};
</script>
