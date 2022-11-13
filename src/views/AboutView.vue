<template>
  <h1>Random Word</h1>
  <p v-if="randomWord === ''">Click the button to...</p>
  <p v-else>{{ randomWord }}</p>

  <button @click="getRandomWord">
    get word
  </button>

</template>

<script setup>
import { ref } from 'vue'
const randomWord = ref('')

function getRandomWord() {
  fetch('https://random-word-api.herokuapp.com/word?length=4')
  .then(res => res.json())
  .then(data => randomWord.value = data[0])
  .catch(err => console.log(err))
}
</script>

<style scoped>
</style>