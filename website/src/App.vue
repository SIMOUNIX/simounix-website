<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper-nav">
      <nav class="main-nav">
        <RouterLink to="/" class="nav-element home-route">simon thuaud</RouterLink>
        <RouterLink to="/about" class="nav-element to-hide">à propos</RouterLink> 
        <RouterLink to="/work" class="nav-element to-hide">travaux</RouterLink>
        <RouterLink to="/recipes" class="nav-element to-hide">recettes</RouterLink>
      </nav>
    </div>
  </header>
  <div class="wrapper-content">
    <RouterView />
  </div>
</template>

<style scoped>
@import "./assets/app.css"
</style>