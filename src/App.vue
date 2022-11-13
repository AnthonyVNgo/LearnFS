<template>
  <header>
    <nav>
      <RouterLink to="/">Random Letter</RouterLink>
      <RouterLink to="/random-word">Random Word</RouterLink>
      <RouterLink to="/fs-typewriter">FS TypeWriter</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

// generate random letter from the alphabet 
// call getRandomWord when app mounts 
// remove v-if condition 
// include two way binding between input and randomWord 
// user can enter characters which render fingerspelling equivalent in real time
// user can generate random fingerspelling word 
// user can check enter characters for generated fingerspelling word 
// user can clear and generate new word 
// user can view elapsed time 
// use a callback when userInput.length === randomWord.length 
</script>

<style scoped>
</style>
