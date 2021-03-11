<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="alterarNome" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.sobrenome" @input="alterarSobrenome" />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  components: { Rotulo },
  methods: {
    alterarNome(event) {
      this.value.nome = event.target.value;
      this.$emit("input", this.value);
    },
    alterarSobrenome(event) {
      this.value.sobrenome = event.target.value;
      this.$emit("input", this.value);
    },
  },
};
</script>

<style>
</style>