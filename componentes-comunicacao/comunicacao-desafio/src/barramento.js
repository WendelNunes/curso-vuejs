import Vue from 'vue'
export default new Vue({
    methods: {
        setUsuarioSelected(usuario){
            this.$emit('usuarioSelected', usuario)
        },
        onUsuarioSelected(callback){
            this.$on('usuarioSelected', callback)
        }
    }
})