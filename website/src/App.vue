<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="main-nav">
        <RouterLink to="/" class="nav-element">Home</RouterLink>
        <RouterLink to="/about" class="nav-element">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import "./assets/app.css"
</style>