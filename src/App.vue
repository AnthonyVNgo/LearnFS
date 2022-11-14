<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

// user can enter characters which render fingerspelling equivalent in real time
// user can generate random fingerspelling word 
// user can check enter characters for generated fingerspelling word 
// user can clear and generate new word 
</script>

<style scoped>
</style>
