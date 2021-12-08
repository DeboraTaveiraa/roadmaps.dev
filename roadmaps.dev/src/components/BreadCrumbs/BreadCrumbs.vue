<template>
  <div>
    <v-breadcrumbs :items="items" class="container-breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.container-breadcrumbs {
  padding: 18px 0 !important;
}
</style>
