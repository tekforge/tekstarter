<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
//Fonts
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;900&display=swap");

//Colors
@import "@/assets/theme.scss";

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
}

a {
  font-weight: 500;
  color: $primary;

  &.router-link-exact-active {
    color: $accent;
  }
}
</style>
