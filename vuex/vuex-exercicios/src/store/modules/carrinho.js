export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    /** RESPONSAVEL POR PEGAR OS VALORES (GET) */
    getters: {
        valorTotal(state) {
            return state.produtos
                .map((p) => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    /** RESPONSABILIDADE DE MUDAR O VALOR SOMENTE (SET) */
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        },
    },
    /** FAZER MUDANCA ANTES DE EFETIVAR COMMIT */
    actions: {
        /** ACESSADO SOMENTE DENTRO DO MODULO CARRINHO */
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit("adicionarProduto", payload);
            }, 1000);
        }

        /** ACTION COLOCADO DENTRO DO ROOT */
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         setTimeout(() => {
        //             commit("adicionarProduto", payload);
        //         }, 1000);
        //     },
        // }
    }
}