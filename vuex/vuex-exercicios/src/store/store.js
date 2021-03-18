import Vue from "vue"
import Vuex from "vuex"

import carrinho from "@/store/modules/carrinho"
import parametros from "@/store/modules/parametros"
import * as getters from "@/store/getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: "Maria",
        sobrenome: "Silva",
    },
    getters,
    modules: { carrinho, parametros }
});