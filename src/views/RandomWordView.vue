<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- there's a v-for list somewhere here  -->
        <div class="card ratio ratio-1x1">
          <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 100px">{{randomLetter}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h5>Spell out the fingerspelling word below</h5>
      </div>
    </div>
  </div>

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