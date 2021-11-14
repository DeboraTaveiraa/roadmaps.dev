<template>
  <div class="wrapper-page-roadmaps">
    <h1 class="text-header-roadmaps">Escolha um roteiro e bons estudos!</h1>
    <section class="wrapper-roadmaps">
      <Card :data="cards" />
    </section>
    <hr />
  </div>
</template>

<script>
import { CARDS } from "./constants.js";
import Card from "@/components/Card/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: CARDS,
    };
  },
};
</script>

<style lang="scss" src="./Roadmaps.scss" />
