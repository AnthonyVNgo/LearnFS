<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div v-for="letter in randomWordArray" class="card ratio ratio-1x1">
          <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 100px">{{letter}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h5>Spell out the fingerspelling word below</h5>
        <button @click="getRandomWord">click</button>
        <button @click="splitter">splitter</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'

// random word 
const randomWord = ref('')

function getRandomWord() {
  fetch('https://random-word-api.herokuapp.com/word?length=4')
  .then(res => res.json())
  .then(data => {
    randomWord.value = data[0]
    console.log(randomWord.value)
  })
  .catch(err => console.log(err))
}

// random word split 
const randomWordArray = computed(() => {
  return randomWord.value.split('')
});

function splitter() {
  console.log(randomWord.value)
  console.log(randomWordArray.value)
}

// add mounted life cycle somewhere so the word is prefetched 


// user can enter letter values 
// user can submit answer 
// user can race against the clock 
// user can get new word
// user will be notified of correct answer 
// split the word up
// loop over it to create each card 
// add input validation like in RLview 
// move on to typewriter 
// touch up UI on mobile 
// desktop UI 

</script>

<style scoped>
</style>