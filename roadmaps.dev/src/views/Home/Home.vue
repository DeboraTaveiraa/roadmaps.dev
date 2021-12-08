<template>
  <div class="wrapper-home">
    <section class="section-left">
      <h1 class="title">Evolua na carreira de programação.</h1>
      <p class="subtitle">Escolha um roadmap e rumo ao sucesso!</p>

      <div class="wrapper-btn">
        <button class="btn-left" @click="goTo('Questions')">
          Descobrir minha área
        </button>
        <button class="btn-right" @click="goTo('Roadmaps')">
          Escolher um roadmap
        </button>
      </div>
    </section>
    <section class="section-right">
      <img class="image" src="../../assets/developer.png" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<style>
@import "Home.scss";
</style>
