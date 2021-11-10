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
          <a class="link" href="">{{ navigation.title }}</a>
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
      { title: "HOME", url: "" },
      { title: "ROADMAPS", url: "" },
      { title: "BLOG", url: "" },
      { title: "SOBRE", url: "" },
    ],
    mobileMenu: false,
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

$color-primary: #8a01fe;
$color-dark: #212121;
$color-light: #fff;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

.wrapper-navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  width: 90vw;
  height: 88px;
  padding: 50px 0px;
  display: flex;
  background-color: $color-light;
  justify-content: space-between;
  align-items: center;
}

.nav-row,
.link {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link,
.link:active,
.link:visited,
.link:link {
  color: $color-dark;
  font-weight: 600;
}

.link {
  border-bottom: 3px solid transparent;
  text-decoration: none;
  margin-left: 30px;

  &:hover {
    color: $color-primary;
    border-bottom: 3px solid $color-primary;
  }
}

.icon-menu {
  position: absolute;
  top: 67px;
  right: 20px;
  cursor: pointer;
  display: none;
}

@media only screen and (max-width: 850px) {
  .icon-menu {
    display: block;
  }
  .navbar {
    padding: 0;
    height: auto;
  }

  .logo {
    width: 50vmin;
    position: absolute;
    top: 30px;
  }

  .nav-links {
    margin-top: -900px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: #fff;
    transition: all 0.5s ease;
  }

  .mobile-menu {
    margin-top: 0px;
  }

  .nav-row {
    height: auto;
    margin: 30px auto;
  }
}
</style>
