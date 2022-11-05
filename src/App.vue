<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </header>

<div>
  <p>userInput: {{ userInput }}</p>
<input v-model="userInput" placeholder="edit me" />
  
  <p v-if="randomWord === ''">ClickBbutton</p>
  <p v-else>
    {{ randomWord }}
  </p>
  <button @click="getRandomWord">
    ASLerate
  </button>
</div>  
  <!-- <RouterView /> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const userInput = ref('')
const randomWord = ref('')


function getRandomWord() {
  fetch('https://random-words-api.vercel.app/word')
  .then(res => res.json())
  .then(data => randomWord.value = data[0].word.toLowerCase())
  .catch(err => console.log(err))
}

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
