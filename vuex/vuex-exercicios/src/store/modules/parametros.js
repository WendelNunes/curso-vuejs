export default {
    state: {
        quantidade: 2,
        preco: 19.99,
    },
    /** RESPONSABILIDADE DE MUDAR O VALOR SOMENTE (SET) */
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload;
        },
        setPreco(state, payload) {
            state.preco = payload;
        }
    },
}