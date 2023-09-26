<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


    <div class="wrapper">
      
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>


  <RouterView />
</template>

<style scoped>

nav {
  width: 200px;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  position:absolute;
  top:0px;
  left:0px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 20px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
