<template>
  <div class="wrapper-navbar">
    <nav class="navbar">
      <a href="" class="logo">
        <img alt="Logo" src="./assets/logo.svg" width="200" />
      </a>
      <ul class="nav-links" :class="{ 'mobile-menu': mobileMenu }">
        <li
          class="nav-row"
          v-for="navigation in navigations"
          :key="navigation.title"
        >
          <router-link class="link" :to="navigation.path">
            {{ navigation.title }}
          </router-link>
        </li>
      </ul>
      <span class="icon-menu" @click="mobileMenu = !mobileMenu">
        <v-icon large>mdi-menu</v-icon>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    navigations: [
      { title: "HOME", path: "/" },
      { title: "ROADMAPS", path: "/roadmaps" },
      { title: "BLOG", path: "/" },
      { title: "SOBRE", path: "/" },
    ],
    mobileMenu: false,
  }),
};
</script>

<style lang="scss" src="./App.scss" />
