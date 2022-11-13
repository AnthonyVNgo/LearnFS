<template>
  <h1>Random Letter</h1>
  <p v-if="randomLetter === ''">Press the button</p>
  <p v-else>{{randomLetter}}</p>

  <button @click="getRandomLetter">
    get random letter
  </button>
</template>

<script setup>
import { ref } from 'vue'
const randomLetter = ref('')

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter.value = alphabet[Math.floor(Math.random() * alphabet.length)]
}
</script>