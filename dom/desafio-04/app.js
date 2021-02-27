new Vue({
	el: '#desafio',
	data: {
		muda: 'destaque',
		classe: '',
		classe2: '',
		estilo: '',
		verdadeiro: false,
		tamanho: 0,
	},
	computed: {
		progresso(){
			return {
				width: this.tamanho < 100 ? this.tamanho+'%' : '100%',
				height: '5px',
				backgroundColor: 'red'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {this.muda = this.muda == 'encolher' ? 'destaque' : 'encolher'},5000)
		},
		iniciarProgresso() {
			setInterval(() => {this.tamanho++},100);
		},
	}
})