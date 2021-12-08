<template>
  <BoxContainer>
    <h1 class="text-header-roadmaps">Escolha um roteiro e bons estudos!</h1>
    <Card :data="cards" />
  </BoxContainer>
</template>

<script>
import { CARDS } from "./constants.js";
import BoxContainer from "@/components/BoxContainer/BoxContainer.vue";
import Card from "@/components/Card/Card.vue";

export default {
  components: {
    BoxContainer,
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
