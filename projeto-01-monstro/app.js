new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial){
            console.log(especial, this.getRandom(5, 10))
        },
        hurt(min, max, especial){
            const pus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this.playerLife = Math.max(this.playerLife - hurt, 0)
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        
    }
})