<template>
  <header>
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
    </nav>
  </header>

<div>
  <p>userInput: {{ userInput }}</p>
<input v-model="userInput" placeholder="edit me" maxlength="26"/>
  
  <p v-if="randomWord === ''">Click the button to...</p>
  <p v-else>
    {{ randomWord }}
  </p>
  <button @click="getRandomWord">
    get word
  </button>
  <button @click="getRandomLetter">
    get random letter
  </button>
</div>  
  <!-- <RouterView /> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const userInput = ref('')
const randomWord = ref('')
const randomLetter = ref('')


function getRandomWord() {
  fetch('https://random-word-api.herokuapp.com/word?length=4')
  .then(res => res.json())
  .then(data => randomWord.value = data[0])
  .catch(err => console.log(err))
}

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter.value = alphabet[Math.floor(Math.random() * alphabet.length)]
  console.log(randomLetter.value)
}

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
