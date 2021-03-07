<template>
  <v-app>
    <app-menu></app-menu>
    <app-toolbar></app-toolbar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Menu from "@/components/template/Menu.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Content from "@/components/template/Content.vue";
import Footer from "@/components/template/Footer.vue";

export default {
  components: {
    "app-menu": Menu,
    "app-toolbar": Toolbar,
    "app-content": Content,
    "app-footer": Footer,
  },
};
</script>

<style>
</style>