<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código: </strong>{{ id }}</p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`"> -->
    <router-link
      tag="button"
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: false, lingua: 'en' },
        hash: '#rodape',
      }"
      primario
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
  beforeRouteEnter(to, from, next) {
    console.log("dentro do componente => usuário detalhe");
    // next((vm) => {
    //   console.log(vm.id);
    // });
    const auntenticado = true;
    auntenticado ? next() : next(false);
  },
};
</script>

<style>
</style>