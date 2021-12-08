<template>
  <footer class="footer">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
        <v-icon size="24px" color="#212121">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>

    <img
      class="image-logo"
      alt="Logo"
      src="../../assets/logo.svg"
      width="150"
    />
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style lang="scss" scoped src="./Footer.scss" />
