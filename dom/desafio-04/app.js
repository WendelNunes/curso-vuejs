new Vue({
	el: '#desafio',
	data: {
		muda: 'destaque',
		classe: '',
		classe2: '',
		estilo: '',
		verdadeiro: false,
		tamanho: 0,
		width: '0%',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {this.muda = this.muda == 'encolher' ? 'destaque' : 'encolher'},5000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador =  setInterval(() => {
				valor+=5
				this.width = valor+'%'
				console.log(valor)
				if(valor==100) clearInterval(temporizador)
			},500);
		},
	}
})