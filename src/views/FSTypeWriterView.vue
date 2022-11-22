<template>
  <div class="container">
    <div class="row align-items-center" style="height: 50vh;">
      <div class="col">
        <div class="d-flex flex-wrap justify-content-center">
          <h1 v-if="!inputWordArray.length">Type + Enter below</h1>
          <div v-else v-for="letter in inputWordArray" class="card ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
            <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col" style="text-align: center; max-width: 400px;">
        <form @submit.prevent="generateInputWordArray">
          <label for="userInput" class="form-label">
            <h5>Convert letters to Fingerspelling</h5>
          </label>
          <div class="input-group mb-3">
            <input v-model="inputWord" type="text" class="form-control" id="userInput" maxlength="16" pattern="[a-zA-Z]+" oninvalid="setCustomValidity('Please submit letters only')" placeholder="Type here" autocomplete="off">
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { 
  ref
} from 'vue'

const inputWord = ref('')

const inputWordArray = ref('')

function generateInputWordArray() {
  const inputWordSplit = inputWord.value.split('')
  inputWordArray.value = inputWordSplit
}
</script>