export default {
    computed: {
        fraseComVirgulas() {
            return this.frase.replace(/\s/g, ",");
        },
        faseComTamanho() {
            return this.frase
                .split(" ")
                .map((p) => `${p} (${p.length})`)
                .join(" ");
        },
    },
}