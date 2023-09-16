<template>
  <Navbar />
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
};
</script>
