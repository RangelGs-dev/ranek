<template>
    <form>
        <input name="busca" id="busca" type="text" v-model="busca">
        <input type="submit" id="lupa" value="Buscar" v-on:click.prevent="buscarProdutos">
        {{ busca }}
    </form>
</template>

<script>
export default {
    data() {
        return { 
            busca:""
        }
    },
    methods: {
        buscarProdutos() {
            this.$router.push({query: {q: this.busca} })
        }
    }
}
</script>

<style>

</style>