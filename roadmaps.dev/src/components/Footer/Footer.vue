<template>
  <footer class="footer">
    <div>
      <v-btn
        v-for="(icon, index) in social.icons"
        :key="icon"
        class="mx-4"
        dark
        icon
        @click="goToSocial(social.link[index])"
      >
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
    social: {
      icons: ["mdi-instagram", "mdi-linkedin", "mdi-github"],
      link: [
        "https://www.instagram.com/deborataveiracode/",
        "https://www.linkedin.com/in/deborataveiraa/",
        "https://github.com/DeboraTaveiraa",
      ],
    },
  }),
  methods: {
    goToSocial(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped src="./Footer.scss" />
