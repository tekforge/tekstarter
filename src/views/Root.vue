<template>
  <div id="root">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Root",
};
</script>

<style lang="scss" scoped>
#root {
}
</style>