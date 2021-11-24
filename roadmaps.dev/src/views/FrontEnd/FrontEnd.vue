<template>
  <div class="wrapper-roadmap-frontend">
    <BreadCrumbs :items="breadCrumbs" />
  </div>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs.vue";
import { BREADCRUMBS } from "./constants";

export default {
  components: {
    BreadCrumbs,
  },
  data() {
    return {
      breadCrumbs: BREADCRUMBS,
    };
  },
};
</script>

<style lang="scss" src="./FrontEnd.scss" />
