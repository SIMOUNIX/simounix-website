<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const toggleMenu = ref(false);

const toggleMenuHandler = () => {
  toggleMenu.value = !toggleMenu.value;
};

const closeMenu = () => {
  toggleMenu.value = false;
};
</script>

<template>
  <header>
    <div class="wrapper-nav">
      <nav class="main-nav">
        <div class="logo">
          <RouterLink to="/" class="nav-element home-route" @click="closeMenu">simon thuaud</RouterLink>
        </div>
        <div :class="['router', toggleMenu ? 'open-menu' : 'closed-menu']">
          <RouterLink to="/about" class="nav-element" @click="closeMenu">à propos</RouterLink> 
          <RouterLink to="/work" class="nav-element" @click="closeMenu">travaux</RouterLink>
          <RouterLink to="/recipes" class="nav-element" @click="closeMenu">recettes</RouterLink>
        </div>
        <div class="burger" @click="toggleMenuHandler">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
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
