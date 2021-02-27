new Vue({
    el: '#desafio',
    data: {
        nome: 'Wendel Nunes Donizete',
        idade: 31,
        urlImagem: 'https://www.justica.gov.br/imagens/coracao.png/@@images/image.png'
    },
    methods: {
        idadeMultiplicada: function(){
            return this.idade * 3
        },
        randomico: function(){
            return Math.random()
        }
    }
})