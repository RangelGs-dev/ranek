<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        v-bind:src="produto.fotos[0].src"
        v-bind:alt="produto.fotos[0].titulo"
      />
      <p class="preco">{{ produto.preco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
    {{ url }}
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  data() {
    return {
      produtos: null,
    };
  },
  computed: {
    url() {
      let querySring = ""
      for(let key in  this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`
      }

    }
  },
  methods: {
    getProdutos() {
      api.get("/produto").then((response) => {
        this.produtos = response.data;
      });

      /*       fetch("http://192.168.1.16:3000/produto")
        .then((response) => response.json())
        .then((response) => {
          this.produtos = response;
        }); */
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style>
</style>