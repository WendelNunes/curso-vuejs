<template>
  <v-app>
    <app-menu></app-menu>
    <app-toolbar></app-toolbar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Menu from "./Menu.vue";
import Toolbar from "./Toolbar.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

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