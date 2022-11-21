<template>
  <BoxContainer>
    <BreadCrumbs :items="breadCrumbs" />
    <Roadmap :data="roadmap" />
  </BoxContainer>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs.vue";
import BoxContainer from "@/components/BoxContainer/BoxContainer.vue";
import Roadmap from "@/components/Roadmap/Roadmap.vue";

import { BREADCRUMBS, ROADMAP_FRONTEND } from "./constants";

export default {
  components: {
    BreadCrumbs,
    BoxContainer,
    Roadmap,
  },
  data() {
    return {
      breadCrumbs: BREADCRUMBS,
      roadmap: ROADMAP_FRONTEND,
    };
  },
};
</script>

<style lang="scss" src="./FrontEnd.scss" />
